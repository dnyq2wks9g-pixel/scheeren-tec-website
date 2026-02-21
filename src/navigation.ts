import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Leistungen',
      href: getPermalink('/#leistungen'),
    },
    {
      text: 'So funktioniert\'s',
      href: getPermalink('/#ablauf'),
    },
    {
      text: 'Über uns',
      href: getPermalink('/#ueber-uns'),
    },
    {
      text: 'FAQ',
      href: getPermalink('/#faq'),
    },
  ],
  actions: [{ text: 'Kontakt', href: getPermalink('/#kontakt'), variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Leistungen',
      links: [
        { text: 'Wärmepumpen', href: '/#leistungen' },
        { text: 'Gas-Brennwert', href: '/#leistungen' },
        { text: 'Solarthermie', href: '/#leistungen' },
        { text: 'Brennstoffzellen', href: '/#leistungen' },
        { text: 'Wartung & Service', href: '/#leistungen' },
      ],
    },
    {
      title: 'Kontakt',
      links: [
        { text: 'Tel: 0 24 52 / 8 60 43 56', href: 'tel:+4924528604356' },
        { text: 'Mobil: 0174 / 3 21 34 93', href: 'tel:+491743213493' },
        { text: 'info@scheeren-tec.de', href: 'mailto:info@scheeren-tec.de' },
      ],
    },
    {
      title: 'Adresse',
      links: [
        { text: 'Scheeren Tec GmbH', href: '#' },
        { text: 'Kirchstraße 4', href: '#' },
        { text: '52525 Heinsberg', href: '#' },
      ],
    },
    {
      title: 'Rechtliches',
      links: [
        { text: 'Impressum', href: '/impressum' },
        { text: 'Datenschutz', href: '/datenschutz' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Impressum', href: '/impressum' },
    { text: 'Datenschutz', href: '/datenschutz' },
  ],
  socialLinks: [
    { ariaLabel: 'Telefon', icon: 'tabler:phone', href: 'tel:+4924528604356' },
    { ariaLabel: 'E-Mail', icon: 'tabler:mail', href: 'mailto:info@scheeren-tec.de' },
  ],
  footNote: `
    © 2024 Scheeren Tec GmbH · HRB 24600 – AG Aachen · Vaillant Fachpartner · Geprüfter Gebäudeenergieberater (HWK)
  `,
};
