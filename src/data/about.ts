import { asset } from './site';

export interface TimelineEntry {
  year: string;
  text: string;
}

export interface Award {
  title: string;
  year: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const about = {
  studioImage: asset('/images/blog/letters-from-studio.jpg'),
  story: [
    'The studio was founded in 2016 in a converted ceramics workshop on Willow Lane. What began as a quiet practice has grown into a collective — original work, a small library of collections, and a steady programme of workshops held throughout the year.',
    'Our work is made entirely by hand, in small batches, in natural light. We mix our own pigments, prepare our own surfaces, and resist the rush of the digital season. We believe a painting should hold a hush.',
    'Every piece carries the time it took to make it. That, we think, is the whole of the work.',
  ],
  mission:
    'To make and teach work that earns a place on a wall — and stays there for a generation.',
};

export const timeline: TimelineEntry[] = [
  { year: '2016', text: 'First studio established in a converted ceramics workshop.' },
  { year: '2018', text: 'Solo exhibition at North & Field — “Soft Cartography”.' },
  { year: '2020', text: 'Founded the ARTAURA workshops; first cohort of twelve.' },
  { year: '2022', text: 'Awarded the Slowform Prize for emerging painters.' },
  { year: '2024', text: 'Released “Embers” — a sold-out series of fourteen works.' },
];

export const awards: Award[] = [
  { title: 'Slowform Prize for Emerging Painters', year: '2022' },
  { title: 'North & Field Solo Exhibition', year: '2018, 2021' },
  { title: 'Featured · Coastal Arts Review', year: '2023' },
  { title: 'Editor’s Pick · Slowform Magazine', year: '2024' },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      'Her work feels lived-in. Each canvas holds a hush — like an afternoon you remember without quite knowing why.',
    name: 'Imani Okafor',
    role: 'Curator, North & Field',
  },
  {
    quote:
      'The workshop was less a class and more a small reset. I left with a sketchbook and a clearer way of seeing.',
    name: 'Daniel Reyes',
    role: 'Workshop attendee',
  },
  {
    quote:
      'A studio practice of unusual honesty. ARTAURA’s collections quietly belong in any thoughtful collection.',
    name: 'Ellis Marchetti',
    role: 'Editor, Slowform Magazine',
  },
];
