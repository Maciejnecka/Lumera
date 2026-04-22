import React, { useEffect, useMemo, useRef, useState } from 'react';
import { filmsData } from '../../data/filmsData';
import {
  ContactWrap,
  ContactCard,
  ContactIntro,
  ContactForm,
  FieldGroup,
  FieldError,
  HiddenField,
  WindowsBuilder,
  WindowInputs,
  WindowList,
  WindowListItem,
  FileHint,
  FileList,
  FileListItem,
  FormStatus,
  ContactPrivacyNote,
  ContactAside,
  ContactList,
} from './ContactSection.styled';

const CONTACT_EMAIL = 'biuro@folielumera.pl';
const CONTACT_PHONE = '+48 605 505 714';
const CONTACT_PHONE_HREF = 'tel:+48605505714';
const CONTACT_EMAIL_COMPOSE_HREF = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}`;
const CONTACT_FORM_ENDPOINT = '/api/contact';
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const MAX_TOTAL_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];

const initialForm = {
  name: '',
  phone: '',
  email: '',
  topic: 'wybierz',
  message: '',
  website: '',
};

const sanitizeText = (value = '') =>
  value
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .trim();

const formatFileSize = (size) => {
  if (size < 1024 * 1024) {
    return `${Math.ceil(size / 1024)} KB`;
  }

  return `${(size / 1024 / 1024).toFixed(1)} MB`;
};

const formatArea = (area) =>
  new Intl.NumberFormat('pl-PL', {
    minimumFractionDigits: area % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(area);

const getWindowArea = ({ width, height, quantity }) =>
  (Number(width) * Number(height) * Number(quantity)) / 10000;

const getWindowSummary = (windows) => {
  const totalQuantity = windows.reduce((sum, item) => sum + Number(item.quantity), 0);
  const totalArea = windows.reduce((sum, item) => sum + getWindowArea(item), 0);
  const rows = windows
    .map((item, index) => {
      return `${index + 1}. szerokość ${item.width} cm | wysokość ${item.height} cm | ilość ${item.quantity} | powierzchnia ${formatArea(getWindowArea(item))} m²`;
    })
    .join('\n');

  return {
    rows,
    totalAreaLabel: `${formatArea(totalArea)} m²`,
    totalQuantityLabel: `${totalQuantity} szt.`,
  };
};

const ContactSection = () => {
  const mountedAt = useRef(Date.now());
  const fileInputRef = useRef(null);
  const [form, setForm] = useState(() => ({
    ...initialForm,
    topic: 'wybierz',
  }));
  const [windowDraft, setWindowDraft] = useState({
    width: '',
    height: '',
    quantity: '1',
  });
  const [windows, setWindows] = useState([]);
  const [files, setFiles] = useState([]);
  const [windowPendingRemoval, setWindowPendingRemoval] = useState(null);
  const [filePendingRemoval, setFilePendingRemoval] = useState(null);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const contactEndpoint =
    process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT ||
    process.env.REACT_APP_CONTACT_FORM_ENDPOINT ||
    CONTACT_FORM_ENDPOINT;
  const handleEmailClick = (event) => {
    event.preventDefault();
    window.open(CONTACT_EMAIL_COMPOSE_HREF, '_blank', 'noopener,noreferrer');
  };

  const topicLabel = useMemo(() => {
    return filmsData.find((film) => film.id === form.topic)?.name || form.topic;
  }, [form.topic]);

  const windowsSummary = useMemo(() => getWindowSummary(windows), [windows]);

  useEffect(() => {
    const storedTopic = sessionStorage.getItem('lumera-contact-topic');
    if (storedTopic) {
      setForm((current) => ({ ...current, topic: storedTopic }));
    }

    sessionStorage.removeItem('lumera-contact-topic');
  }, []);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const updateWindowDraft = (field, value) => {
    setWindowDraft((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, windows: undefined }));
  };

  const syncFileInput = (nextFiles) => {
    if (!fileInputRef.current || typeof DataTransfer === 'undefined') return;

    const transfer = new DataTransfer();
    nextFiles.forEach((file) => transfer.items.add(file));
    fileInputRef.current.files = transfer.files;
  };

  const addWindow = () => {
    const width = Number(windowDraft.width);
    const height = Number(windowDraft.height);
    const quantity = Number(windowDraft.quantity);

    if (!width || !height || !quantity || width <= 0 || height <= 0 || quantity < 1) {
      setErrors((current) => ({
        ...current,
        windows: 'Uzupełnij szerokość, wysokość i ilość okien przed dodaniem pozycji.',
      }));
      return;
    }

    setWindows((current) => [
      ...current,
      {
        id: `${Date.now()}-${current.length}`,
        width,
        height,
        quantity,
      },
    ]);
    setWindowDraft({ width: '', height: '', quantity: '1' });
  };

  const removeWindow = (id) => {
    setWindows((current) => current.filter((item) => item.id !== id));
    setWindowPendingRemoval(null);
  };

  const validateFiles = (nextFiles) => {
    const totalSize = nextFiles.reduce((sum, file) => sum + file.size, 0);

    if (nextFiles.length > 4) {
      return 'Możesz dodać maksymalnie 4 pliki.';
    }

    if (totalSize > MAX_TOTAL_FILE_SIZE) {
      return 'Łączny rozmiar załączników może mieć maksymalnie 10 MB.';
    }

    const invalidType = nextFiles.some((file) => !ALLOWED_FILE_TYPES.includes(file.type));
    if (invalidType) {
      return 'Dodaj tylko pliki JPG, PNG, WEBP albo PDF.';
    }

    const oversizedFile = nextFiles.some((file) => file.size > MAX_FILE_SIZE);
    if (oversizedFile) {
      return 'Pojedynczy plik może mieć maksymalnie 5 MB.';
    }

    return undefined;
  };

  const handleFiles = (event) => {
    const selectedFiles = Array.from(event.target.files || []);
    const mergedFiles = [...files, ...selectedFiles];
    const fileError = validateFiles(mergedFiles);

    if (!fileError) {
      setFiles(mergedFiles);
      syncFileInput(mergedFiles);
    }

    setErrors((current) => ({ ...current, files: fileError }));
  };

  const removeFile = (fileToRemove) => {
    const nextFiles = files.filter((file) => file !== fileToRemove);
    setFiles(nextFiles);
    syncFileInput(nextFiles);
    setFilePendingRemoval(null);
    setErrors((current) => ({ ...current, files: validateFiles(nextFiles) }));
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!sanitizeText(form.name)) nextErrors.name = 'Podaj imię i nazwisko.';
    if (!sanitizeText(form.phone)) nextErrors.phone = 'Podaj numer telefonu.';
    if (!sanitizeText(form.email)) {
      nextErrors.email = 'Podaj adres e-mail.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Podaj poprawny adres e-mail.';
    }
    if (form.topic === 'wybierz') nextErrors.topic = 'Wybierz, czego dotyczy zapytanie.';
    if (!sanitizeText(form.message)) nextErrors.message = 'Napisz krótki opis zapytania.';
    if (!windows.length) nextErrors.windows = 'Dodaj przynajmniej jedno okno do listy.';
    if (form.website) nextErrors.form = 'Wysyłka została zablokowana.';
    if (Date.now() - mountedAt.current < 4000) {
      nextErrors.form = 'Spróbuj wysłać formularz ponownie za chwilę.';
    }

    const fileError = validateFiles(files);
    if (fileError) nextErrors.files = fileError;

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const appendMailFields = (payload) => {
    payload.append('Temat_zapytania', sanitizeText(topicLabel));
    payload.append('wymiary_łącznie', windowsSummary.rows);
    payload.append('powierzchnia_łącznie', windowsSummary.totalAreaLabel);
    payload.append('sztuk_łącznie', windowsSummary.totalQuantityLabel);
    payload.append('Imie_i_nazwisko', sanitizeText(form.name));
    payload.append('Telefon', sanitizeText(form.phone));
    payload.append('email', sanitizeText(form.email));
    payload.append('wybrana_kategoria', sanitizeText(topicLabel));
    payload.append('wiadomosc', sanitizeText(form.message));
  };

  const buildFormData = () => {
    const payload = new FormData();
    payload.append('_subject', `folielumera.pl - nowe zapytanie: ${sanitizeText(topicLabel)}`);
    payload.append('_replyto', sanitizeText(form.email));
    payload.append('_honey', sanitizeText(form.website));
    payload.append('_started_at', String(mountedAt.current));
    appendMailFields(payload);
    files.forEach((file) => payload.append('attachment', file));
    return payload;
  };

  const resetContactForm = () => {
    setForm(initialForm);
    setWindows([]);
    setFiles([]);
    setWindowPendingRemoval(null);
    setFilePendingRemoval(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(null);

    if (!validateForm()) {
      setStatus({
        type: 'error',
        message: 'Uzupełnij podświetlone pola przed wysłaniem formularza.',
      });
      return;
    }

    try {
      setStatus({
        type: 'success',
        message: files.length
          ? 'Wysyłamy zapytanie razem z załącznikami...'
          : 'Wysyłamy zapytanie...',
      });

      const response = await fetch(contactEndpoint, {
        method: 'POST',
        body: buildFormData(),
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || 'Form endpoint returned an error.');
      }

      setStatus({
        type: 'success',
        message: 'Dziękujemy. Zapytanie zostało wysłane.',
      });
      resetContactForm();
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          'Nie udało się wysłać formularza. Spróbuj ponownie albo skontaktuj się mailowo.',
      });
    }
  };

  return (
    <ContactWrap id="kontakt">
      <ContactCard>
        <ContactIntro data-aos="fade-up">
          <span>Kontakt</span>
          <h2>
            Jeśli chcesz sprawdzić, jaka folia będzie najlepsza do Twoich okien,
            zostaw wiadomość.
          </h2>
          <p>
            Wystarczy kilka podstawowych informacji, żebyśmy mogli wrócić z
            odpowiedzią i wstępnie ocenić, jakie rozwiązanie najlepiej sprawdzi
            się w Twojej przestrzeni.
          </p>
          <p>
            Nie znasz dokładnych wymiarów? Wyślij zdjęcie okna i krótki opis,
            a pomożemy ustalić, od czego najlepiej zacząć wycenę.
          </p>
        </ContactIntro>

        <ContactForm
          action={contactEndpoint}
          method="POST"
          data-aos="fade-up"
          data-aos-delay="70"
          onSubmit={handleSubmit}
          noValidate
          encType="multipart/form-data"
        >
          <HiddenField aria-hidden="true">
            Strona internetowa
            <input
              type="text"
              name="_honey"
              tabIndex="-1"
              autoComplete="off"
              value={form.website}
              onChange={(event) => updateField('website', event.target.value)}
            />
          </HiddenField>
          <input type="hidden" name="Temat_zapytania" value={topicLabel} />
          <input type="hidden" name="wymiary_łącznie" value={windowsSummary.rows} />
          <input
            type="hidden"
            name="powierzchnia_łącznie"
            value={windowsSummary.totalAreaLabel}
          />
          <input
            type="hidden"
            name="sztuk_łącznie"
            value={windowsSummary.totalQuantityLabel}
          />

          <FieldGroup $hasError={Boolean(errors.name)}>
            Imię i nazwisko
            <input
              type="text"
              name="Imie_i_nazwisko"
              value={form.name}
              onChange={(event) => updateField('name', event.target.value)}
              placeholder="Np. Jan Kowalski"
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name && <FieldError>{errors.name}</FieldError>}
          </FieldGroup>

          <FieldGroup $hasError={Boolean(errors.phone)}>
            Numer telefonu
            <input
              type="tel"
              name="Telefon"
              value={form.phone}
              onChange={(event) => updateField('phone', event.target.value)}
              placeholder="Np. 500 000 000"
              aria-invalid={Boolean(errors.phone)}
            />
            {errors.phone && <FieldError>{errors.phone}</FieldError>}
          </FieldGroup>

          <FieldGroup $hasError={Boolean(errors.email)}>
            Adres e-mail
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={(event) => updateField('email', event.target.value)}
              placeholder="Np. kontakt@twojafirma.pl"
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && <FieldError>{errors.email}</FieldError>}
          </FieldGroup>

          <FieldGroup $hasError={Boolean(errors.topic)}>
            Czego dotyczy zapytanie
            <input type="hidden" name="wybrana_kategoria" value={topicLabel} />
            <select
              value={form.topic}
              onChange={(event) => updateField('topic', event.target.value)}
              aria-invalid={Boolean(errors.topic)}
            >
              <option value="wybierz" disabled>
                Wybierz opcję
              </option>
              {filmsData.map((film) => (
                <option key={film.id} value={film.id}>
                  {film.name}
                </option>
              ))}
              <option value="inna-usluga">Inna usługa</option>
            </select>
            {errors.topic && <FieldError>{errors.topic}</FieldError>}
          </FieldGroup>

          <WindowsBuilder $hasError={Boolean(errors.windows)}>
            <strong>Wymiary okien</strong>
            <WindowInputs>
              <label>
                Szerokość w cm
                <input
                  type="number"
                  min="1"
                  value={windowDraft.width}
                  onChange={(event) => updateWindowDraft('width', event.target.value)}
                  placeholder="Np. 120"
                />
              </label>
              <label>
                Wysokość w cm
                <input
                  type="number"
                  min="1"
                  value={windowDraft.height}
                  onChange={(event) => updateWindowDraft('height', event.target.value)}
                  placeholder="Np. 150"
                />
              </label>
              <label>
                Ilość
                <input
                  type="number"
                  min="1"
                  value={windowDraft.quantity}
                  onChange={(event) => updateWindowDraft('quantity', event.target.value)}
                  placeholder="Np. 2"
                />
              </label>
              <button type="button" onClick={addWindow}>
                Dodaj
              </button>
            </WindowInputs>

            {windows.length > 0 && (
              <WindowList>
                {windows.map((item) => (
                  <WindowListItem key={item.id}>
                    <span>
                      Szerokość: {item.width} cm | Wysokość: {item.height} cm | Ilość: {item.quantity}
                    </span>
                    {windowPendingRemoval === item.id ? (
                      <div className="confirm-actions">
                        <small>Czy usunąć ten wymiar?</small>
                        <button type="button" onClick={() => removeWindow(item.id)}>
                          Tak
                        </button>
                        <button type="button" onClick={() => setWindowPendingRemoval(null)}>
                          Nie
                        </button>
                      </div>
                    ) : (
                      <button type="button" onClick={() => setWindowPendingRemoval(item.id)}>
                        Usuń
                      </button>
                    )}
                  </WindowListItem>
                ))}
              </WindowList>
            )}
            {errors.windows && <FieldError>{errors.windows}</FieldError>}
          </WindowsBuilder>

          <FieldGroup className="contact-form__message" $hasError={Boolean(errors.message)}>
            Krótki opis
            <textarea
              name="wiadomosc"
              rows="5"
              value={form.message}
              onChange={(event) => updateField('message', event.target.value)}
              placeholder="Napisz, jak wygląda przestrzeń i czego oczekujesz po montażu."
              aria-invalid={Boolean(errors.message)}
            />
            {errors.message && <FieldError>{errors.message}</FieldError>}
          </FieldGroup>

          <FieldGroup className="contact-form__message" $hasError={Boolean(errors.files)}>
            Zdjęcia lub plik PDF
            <input
              ref={fileInputRef}
              type="file"
              name="attachment"
              accept=".jpg,.jpeg,.png,.webp,.pdf"
              multiple
              onChange={handleFiles}
              aria-invalid={Boolean(errors.files)}
            />
            <FileHint>
              Maksymalnie 4 pliki. Jeden plik do 5 MB, łącznie do 10 MB. Najlepiej JPG,
              PNG, WEBP albo PDF.
            </FileHint>
            {files.length > 0 && (
              <FileList>
                {files.map((file) => (
                  <FileListItem key={`${file.name}-${file.lastModified}`}>
                    <span>
                      {file.name} ({formatFileSize(file.size)})
                    </span>
                    {filePendingRemoval === file ? (
                      <div className="confirm-actions">
                        <small>Czy usunąć ten plik?</small>
                        <button type="button" onClick={() => removeFile(file)}>
                          Tak
                        </button>
                        <button type="button" onClick={() => setFilePendingRemoval(null)}>
                          Nie
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setFilePendingRemoval(file)}
                        aria-label={`Usuń plik ${file.name}`}
                      >
                        ×
                      </button>
                    )}
                  </FileListItem>
                ))}
              </FileList>
            )}
            {errors.files && <FieldError>{errors.files}</FieldError>}
          </FieldGroup>

          {status && <FormStatus $type={status.type}>{status.message}</FormStatus>}
          {errors.form && <FormStatus $type="error">{errors.form}</FormStatus>}

          <ContactPrivacyNote>
            Wysyłając formularz, przekazujesz dane w celu obsługi zapytania. Szczegóły
            znajdziesz w <a href="/polityka-prywatnosci">polityce prywatności</a>.
          </ContactPrivacyNote>

          <button type="submit">Wyślij zapytanie</button>
        </ContactForm>

        <ContactAside data-aos="fade-up" data-aos-delay="120">
          <span>Dane kontaktowe</span>
          <h3>Możesz skontaktować się z nami także bezpośrednio.</h3>

          <ContactList>
            <li>
              <strong>Telefon</strong>
              <a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE}</a>
            </li>
            <li>
              <strong>E-mail</strong>
              <a href={`mailto:${CONTACT_EMAIL}`} onClick={handleEmailClick}>
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <strong>Obszar działania</strong>
              <span>Kraków i okolice</span>
            </li>
            <li className="contact-hours">
              <strong>Godziny kontaktu</strong>
              <span>
                <em>Poniedziałek</em>
                <b>8:00 - 18:00</b>
              </span>
              <span>
                <em>Wtorek</em>
                <b>8:00 - 18:00</b>
              </span>
              <span>
                <em>Środa</em>
                <b>8:00 - 18:00</b>
              </span>
              <span>
                <em>Czwartek</em>
                <b>8:00 - 18:00</b>
              </span>
              <span>
                <em>Piątek</em>
                <b>8:00 - 18:00</b>
              </span>
              <span>
                <em>Sobota</em>
                <b>10:00 - 15:00</b>
              </span>
              <span>
                <em>Niedziela</em>
                <b>zamknięte</b>
              </span>
            </li>
          </ContactList>
        </ContactAside>
      </ContactCard>
    </ContactWrap>
  );
};

export default ContactSection;
