import { asset } from './site';

export interface Workshop {
  id: string;
  title: string;
  date: string;
  duration: string;
  location: string;
  level: string;
  cover: string;
  description: string;
  /** Google Form URL — opens in a new tab. Leave empty for past sessions. */
  registrationUrl: string;
  past: boolean;
}

export const workshops: Workshop[] = [
  {
    id: 'watercolour-stillness',
    title: 'Watercolour for Stillness',
    date: 'Sat, 12 Jul 2025',
    duration: '10:00 — 16:00 (6 hours)',
    location: 'ARTAURA Studio, Willow Lane',
    level: 'All levels',
    cover: asset('/images/workshops/watercolour-stillness.jpg'),
    description:
      'A one-day workshop on slow watercolour technique. Includes materials, lunch and an afternoon studio tea.',
    registrationUrl: 'https://docs.google.com/forms/d/e/REPLACE_ME_WATERCOLOUR/viewform',
    past: false,
  },
  {
    id: 'loose-brush',
    title: 'The Loose Brush',
    date: 'Sun, 03 Aug 2025',
    duration: '11:00 — 17:00 (6 hours)',
    location: 'ARTAURA Studio, Willow Lane',
    level: 'Intermediate',
    cover: asset('/images/workshops/loose-brush.jpg'),
    description:
      'An exploration of gestural brushwork in acrylic and ink. Bring a small notebook and a willingness to make a mess.',
    registrationUrl: 'https://docs.google.com/forms/d/e/REPLACE_ME_LOOSEBRUSH/viewform',
    past: false,
  },
  {
    id: 'pigment-paper',
    title: 'Pigment & Paper',
    date: 'Sat, 24 Aug 2025',
    duration: '10:00 — 15:00 (5 hours)',
    location: 'ARTAURA Studio, Willow Lane',
    level: 'Beginner',
    cover: asset('/images/workshops/pigment-paper.jpg'),
    description: 'Hand-mixing pigments and preparing paper. A grounding session for those new to the craft.',
    registrationUrl: 'https://docs.google.com/forms/d/e/REPLACE_ME_PIGMENT/viewform',
    past: false,
  },
  {
    id: 'winter-intensive',
    title: 'Winter Studio Intensive',
    date: 'Jan 2025',
    duration: '3 days',
    location: 'ARTAURA Studio',
    level: 'Advanced',
    cover: asset('/images/workshops/winter-intensive.jpg'),
    description: 'Three days in the studio, working at scale. Completed cohort of 8.',
    registrationUrl: '',
    past: true,
  },
];
