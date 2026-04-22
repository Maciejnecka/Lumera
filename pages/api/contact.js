import fs from 'fs/promises';
import { formidable } from 'formidable';
import nodemailer from 'nodemailer';

export const config = {
  api: {
    bodyParser: false,
  },
};

const CONTACT_TO_EMAIL = 'biuro@folielumera.pl';
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const MAX_TOTAL_FILE_SIZE = 10 * 1024 * 1024;
const RATE_LIMIT_WINDOW_MS = 12 * 60 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const ALLOWED_FILE_TYPES = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
  'application/pdf',
]);
const rateLimitStore = globalThis.__lumeraContactRateLimitStore || new Map();

globalThis.__lumeraContactRateLimitStore = rateLimitStore;

const getClientIp = (req) => {
  const forwardedFor = req.headers['x-forwarded-for'];
  const ip = Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor;

  return (
    ip?.split(',')[0]?.trim() ||
    req.headers['x-real-ip'] ||
    req.socket?.remoteAddress ||
    'unknown'
  );
};

const checkRateLimit = (req) => {
  const now = Date.now();
  const ip = getClientIp(req);
  const current = rateLimitStore.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return { limited: false, retryAfterSeconds: 0 };
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      limited: true,
      retryAfterSeconds: Math.ceil((current.resetAt - now) / 1000),
    };
  }

  current.count += 1;
  rateLimitStore.set(ip, current);
  return { limited: false, retryAfterSeconds: 0 };
};

const getField = (fields, name) => {
  const value = fields[name];
  if (Array.isArray(value)) return String(value[0] || '').trim();
  return String(value || '').trim();
};

const sanitizeText = (value = '') =>
  String(value)
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .trim();

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const normalizeFiles = (files) =>
  Object.values(files || {})
    .flat()
    .filter(Boolean);

const parseRequest = (req) =>
  new Promise((resolve, reject) => {
    const form = formidable({
      multiples: true,
      maxFileSize: MAX_FILE_SIZE,
      maxTotalFileSize: MAX_TOTAL_FILE_SIZE,
      allowEmptyFiles: false,
      filter: ({ mimetype }) => ALLOWED_FILE_TYPES.has(mimetype || ''),
    });

    form.parse(req, (error, fields, files) => {
      if (error) {
        reject(error);
        return;
      }

      resolve({ fields, files: normalizeFiles(files) });
    });
  });

const validatePayload = (fields, files) => {
  const errors = [];
  const email = sanitizeText(getField(fields, 'email'));
  const startedAt = Number(getField(fields, '_started_at'));

  if (getField(fields, '_honey')) errors.push('Wysyłka została zablokowana.');
  if (Number.isFinite(startedAt) && Date.now() - startedAt < 3000) {
    errors.push('Spróbuj wysłać formularz ponownie za chwilę.');
  }
  if (!sanitizeText(getField(fields, 'Imie_i_nazwisko'))) errors.push('Podaj imię i nazwisko.');
  if (!sanitizeText(getField(fields, 'Telefon'))) errors.push('Podaj numer telefonu.');
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('Podaj poprawny adres e-mail.');
  }
  if (!sanitizeText(getField(fields, 'wybrana_kategoria'))) {
    errors.push('Wybierz kategorię zapytania.');
  }
  if (!sanitizeText(getField(fields, 'wiadomosc'))) errors.push('Napisz krótki opis zapytania.');
  if (!sanitizeText(getField(fields, 'wymiary_łącznie'))) {
    errors.push('Dodaj przynajmniej jeden wymiar okna.');
  }
  if (files.length > 4) errors.push('Możesz dodać maksymalnie 4 pliki.');

  const totalFileSize = files.reduce((sum, file) => sum + Number(file.size || 0), 0);
  if (totalFileSize > MAX_TOTAL_FILE_SIZE) {
    errors.push('Łączny rozmiar załączników może mieć maksymalnie 10 MB.');
  }

  const invalidFile = files.some(
    (file) => !ALLOWED_FILE_TYPES.has(file.mimetype || '') || Number(file.size || 0) > MAX_FILE_SIZE
  );
  if (invalidFile) errors.push('Załączniki mogą mieć format JPG, PNG, WEBP albo PDF.');

  return errors;
};

const buildRows = (fields, files) => [
  ['Temat_zapytania', getField(fields, 'Temat_zapytania')],
  ['wymiary_łącznie', getField(fields, 'wymiary_łącznie')],
  ['powierzchnia_łącznie', getField(fields, 'powierzchnia_łącznie')],
  ['sztuk_łącznie', getField(fields, 'sztuk_łącznie')],
  ['Imie_i_nazwisko', getField(fields, 'Imie_i_nazwisko')],
  ['Telefon', getField(fields, 'Telefon')],
  ['email', getField(fields, 'email')],
  ['wybrana_kategoria', getField(fields, 'wybrana_kategoria')],
  ['wiadomosc', getField(fields, 'wiadomosc')],
  ['attachment', files.length ? files.map((file) => file.originalFilename).join(', ') : 'brak'],
].map(([label, value]) => [label, sanitizeText(value)]);

const buildHtml = (rows) => `
  <div style="font-family: Arial, sans-serif; color: #183329; line-height: 1.5;">
    <h2 style="margin: 0 0 18px; color: #183329;">Nowe zapytanie z folielumera.pl</h2>
    <table style="width: 100%; border-collapse: collapse;">
      <tbody>
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <th style="width: 210px; padding: 10px 12px; border: 1px solid #dbe5dc; background: #f6f1e8; text-align: left; vertical-align: top;">
                  ${escapeHtml(label)}
                </th>
                <td style="padding: 10px 12px; border: 1px solid #dbe5dc; white-space: pre-line;">
                  ${escapeHtml(value || 'brak')}
                </td>
              </tr>
            `
          )
          .join('')}
      </tbody>
    </table>
  </div>
`;

const buildText = (rows) => rows.map(([label, value]) => `${label}: ${value || 'brak'}`).join('\n\n');

const getTransportConfig = () => {
  const port = Number(process.env.SMTP_PORT || 465);

  return {
    host: process.env.SMTP_HOST,
    port,
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  };
};

const assertMailConfig = () => {
  const missing = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'].filter(
    (key) => !process.env[key] || process.env[key] === 'UZUPELNIJ_HASLO_APLIKACJI'
  );

  if (missing.length) {
    throw new Error(`Brakuje konfiguracji SMTP: ${missing.join(', ')}`);
  }
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: 'Metoda nie jest obsługiwana.' });
  }

  const rateLimit = checkRateLimit(req);
  if (rateLimit.limited) {
    res.setHeader('Retry-After', String(rateLimit.retryAfterSeconds));
    return res.status(429).json({
      message:
        'Wysłano zbyt wiele zapytań z tego adresu. Spróbuj ponownie później albo zadzwoń: +48 605 505 714.',
    });
  }

  let uploadedFiles = [];

  try {
    assertMailConfig();

    const { fields, files } = await parseRequest(req);
    uploadedFiles = files;

    const errors = validatePayload(fields, files);
    if (errors.length) {
      return res.status(400).json({ message: errors[0], errors });
    }

    const rows = buildRows(fields, files);
    const attachments = await Promise.all(
      files.map(async (file) => ({
        filename: file.originalFilename || 'zalacznik',
        content: await fs.readFile(file.filepath),
        contentType: file.mimetype,
      }))
    );

    const transporter = nodemailer.createTransport(getTransportConfig());
    const fromEmail = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER;
    const toEmail = process.env.CONTACT_TO_EMAIL || CONTACT_TO_EMAIL;
    const replyTo = sanitizeText(getField(fields, '_replyto') || getField(fields, 'email'));
    const subject =
      sanitizeText(getField(fields, '_subject')) ||
      `folielumera.pl - nowe zapytanie: ${sanitizeText(getField(fields, 'Temat_zapytania'))}`;

    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo,
      subject,
      html: buildHtml(rows),
      text: buildText(rows),
      attachments,
    });

    return res.status(200).json({ message: 'Zapytanie zostało wysłane.' });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      message: 'Nie udało się wysłać formularza. Spróbuj ponownie albo skontaktuj się mailowo.',
    });
  } finally {
    await Promise.all(
      uploadedFiles.map((file) => fs.unlink(file.filepath).catch(() => undefined))
    );
  }
}
