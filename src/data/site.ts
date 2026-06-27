/**
 * ARTAURA - Global site configuration.
 *
 * This is the single source of truth for site-wide information.
 * Update this file to change contact details, navigation, social links,
 * footer text, or any Google Form URLs used across the site.
 */

// Helper to prefix asset paths for GitHub Pages deployment.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const asset = (path: string): string => `${BASE}${path.startsWith('/') ? path : '/' + path}`;

export interface SiteConfig {
  title: string;
  tagline: string;
  artistName: string;
  established: string;
  logo: string;
  contact: {
    phone: string;
    email: string;
    instagram: string;        // full URL
    instagramHandle: string;  // @handle for display
  };
  social: {
    instagram: string;
    facebook?: string;
    twitter?: string;
  };
  footer: {
    note: string;
    address: string;
  };
  forms: {
    newsletter: string;       // Google Form URL for newsletter signup
  };
  navigation: string[];
}

export const site: SiteConfig = {
  title: 'ARTAURA — Art that Inspires. Stories that Last.',
  tagline: 'Art that Inspires. Stories that Last.',
  artistName: 'ARTAURA Studio',
  established: '2016',
  logo: asset('/images/logo/artaura-logo.png'),

  contact: {
    phone: '+1 (415) 555 0142',
    email: 'hello@artaura.studio',
    instagram: 'https://instagram.com/artaura.studio',
    instagramHandle: '@artaura.studio',
  },

  social: {
    instagram: 'https://instagram.com/artaura.studio',
    facebook: 'https://facebook.com/artaura.studio',
    twitter: 'https://twitter.com/artaura',
  },

  footer: {
    note: 'made slowly, in the studio.',
    address: '14 Willow Lane, Studio 03 · Coastal District',
  },

  forms: {
    // Replace with your own Google Form share link.
    newsletter: 'https://docs.google.com/forms/d/e/REPLACE_ME/viewform',
  },

  navigation: ['Home', 'Gallery', 'Collections', 'Workshops', 'Blog', 'About'],
};
