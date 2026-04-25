import React from 'react';
import Link from 'next/link';
import LogoIcon from '../../icons/logo/LumeraLogo.svg';
import {
  FooterWrap,
  FooterInner,
  FooterBrand,
  FooterLogo,
  FooterBrandText,
  FooterCols,
  FooterCol,
  ContactDetails,
  SocialLinks,
  BusinessHours,
  FooterBottom,
} from './Footer.styled';

const CONTACT_PHONE = '+48 605 505 714';
const CONTACT_PHONE_HREF = 'tel:+48605505714';
const CONTACT_EMAIL = 'biuro@folielumera.pl';
const CONTACT_EMAIL_HREF = `mailto:${CONTACT_EMAIL}`;
const COMPANY_ADDRESS = 'Rudawa, ul. Łanowa 14, 32-064 Rudawa';
const CONTACT_EMAIL_COMPOSE_HREF = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}`;

const contactItems = [
  {
    label: 'Telefon',
    value: CONTACT_PHONE,
    href: CONTACT_PHONE_HREF,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.6 3.7c.6-.3 1.3-.2 1.8.3l2.2 2.4c.5.5.6 1.3.2 1.9l-1 1.8c1.1 2.1 2.8 3.8 4.9 4.9l1.8-1c.6-.4 1.4-.3 1.9.2l2.4 2.2c.5.5.6 1.2.3 1.8l-.9 2c-.4.8-1.2 1.3-2.1 1.2C9.5 20.8 3.2 14.5 2.6 5.9c-.1-.9.4-1.7 1.2-2.1l2-.9Z" />
      </svg>
    ),
  },
  {
    label: 'E-mail',
    value: CONTACT_EMAIL,
    href: CONTACT_EMAIL_HREF,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.8 5h14.4A2.8 2.8 0 0 1 22 7.8v8.4a2.8 2.8 0 0 1-2.8 2.8H4.8A2.8 2.8 0 0 1 2 16.2V7.8A2.8 2.8 0 0 1 4.8 5Zm.3 2.2 6.1 5.2c.5.4 1.1.4 1.6 0l6.1-5.2H5.1Zm14.7 2.1-5.7 4.9a3.3 3.3 0 0 1-4.2 0L4.2 9.3v6.9c0 .4.2.6.6.6h14.4c.4 0 .6-.2.6-.6V9.3Z" />
      </svg>
    ),
  },
  {
    label: 'Siedziba firmy',
    value: COMPANY_ADDRESS,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.5a7.4 7.4 0 0 1 7.5 7.4c0 5.1-6.2 10.9-6.7 11.4a1.2 1.2 0 0 1-1.6 0C10.7 20.8 4.5 15 4.5 9.9A7.4 7.4 0 0 1 12 2.5Zm0 10.2a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6Z" />
      </svg>
    ),
  },
];

const businessHours = [
  ['Poniedziałek', '8:00 - 18:00'],
  ['Wtorek', '8:00 - 18:00'],
  ['Środa', '8:00 - 18:00'],
  ['Czwartek', '8:00 - 18:00'],
  ['Piątek', '8:00 - 18:00'],
  ['Sobota', '10:00 - 15:00'],
  ['Niedziela', 'zamknięte'],
];

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.3 21v-7.8h2.6l.4-3h-3V8.3c0-.9.3-1.5 1.6-1.5H16V4.1c-.2 0-.9-.1-1.8-.1-1.8 0-3.1 1.1-3.1 3.3v1.9H8.6v3h2.5V21h2.2Z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.2 3h9.6A4.2 4.2 0 0 1 21 7.2v9.6a4.2 4.2 0 0 1-4.2 4.2H7.2A4.2 4.2 0 0 1 3 16.8V7.2A4.2 4.2 0 0 1 7.2 3Zm0 1.8A2.4 2.4 0 0 0 4.8 7.2v9.6a2.4 2.4 0 0 0 2.4 2.4h9.6a2.4 2.4 0 0 0 2.4-2.4V7.2a2.4 2.4 0 0 0-2.4-2.4H7.2Zm9.9 1.3a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.8 3c.3 1.8 1.4 3.3 3.2 4.1.8.4 1.6.6 2.5.6v2.7a8.8 8.8 0 0 1-3-.5v5.5a5.5 5.5 0 1 1-5.5-5.5c.3 0 .6 0 .9.1v2.8a2.8 2.8 0 1 0 1.8 2.6V3h.1Z" />
      </svg>
    ),
  },
];

const Footer = () => {
  const handleContactClick = (href) => (event) => {
    if (!href) return;

    if (!href.startsWith('mailto:')) {
      return;
    }

    event.preventDefault();
    window.open(CONTACT_EMAIL_COMPOSE_HREF, '_blank', 'noopener,noreferrer');
  };

  const handleSocialClick = (href) => (event) => {
    if (href !== '#') return;

    event.preventDefault();
  };

  return (
    <FooterWrap>
      <FooterInner>
        <FooterBrand>
          <FooterLogo src={LogoIcon} alt="Lumera" />
          <FooterBrandText>
            <strong>Folie okienne i montaż</strong>
            <p>
              Montaż folii okiennych dla mieszkań, domów, biur i lokali
              usługowych. Prosta komunikacja, estetyczny efekt i rozwiązania
              dopasowane do konkretnej przestrzeni. Na co dzień działamy w
              Krakowie, Katowicach i okolicach, a przy większych realizacjach
              pracujemy na terenie całej Polski.
            </p>
          </FooterBrandText>
        </FooterBrand>

        <FooterCols $hasSocial={socialLinks.length > 0}>
          <FooterCol>
            <h3>Kontakt</h3>
            <ContactDetails>
              {contactItems.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      className="contact-detail__link"
                      href={item.href}
                      onClick={handleContactClick(item.href)}
                    >
                      <span className="contact-detail__icon">{item.icon}</span>
                      <span className="contact-detail__content">
                        <span>{item.label}</span>
                        <strong>{item.value}</strong>
                      </span>
                    </a>
                  ) : (
                    <>
                      <span className="contact-detail__icon">{item.icon}</span>
                      <div className="contact-detail__content">
                        <span>{item.label}</span>
                        <strong>{item.value}</strong>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ContactDetails>
          </FooterCol>

          <FooterCol>
            <h3>Social media</h3>
            <SocialLinks>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  onClick={handleSocialClick(link.href)}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </SocialLinks>
          </FooterCol>

          <FooterCol>
            <h3>Informacje</h3>
            <Link href="/montaz-folii-okiennych-krakow">
              Montaż folii okiennych Kraków
            </Link>
            <Link href="/montaz-folii-okiennych-katowice">
              Montaż folii okiennych Katowice
            </Link>
            <Link href="/montaz-folii-lcd">Montaż folii LCD</Link>
            <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
          </FooterCol>

          <FooterCol>
            <h3>Godziny kontaktu</h3>
            <BusinessHours>
              {businessHours.map(([day, hours]) => (
                <span key={day}>
                  <em>{day}</em>
                  <b>{hours}</b>
                </span>
              ))}
            </BusinessHours>
          </FooterCol>
        </FooterCols>
      </FooterInner>

      <FooterBottom>
        <span>© 2026 Lumera</span>
      </FooterBottom>
    </FooterWrap>
  );
};

export default Footer;
