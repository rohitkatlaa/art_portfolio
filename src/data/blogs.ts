import { asset } from './site';

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;             // human-readable
  readingTime: string;      // e.g. "6 min"
  cover: string;
  excerpt: string;
  /** Article body — array of paragraphs. The first paragraph receives a drop-cap. */
  content: string[];
}

export const blogs: BlogPost[] = [
  {
    id: 'discipline-of-looking',
    title: 'On the Discipline of Looking',
    category: 'Studio Notes',
    date: '12 May 2025',
    readingTime: '6 min',
    cover: asset('/images/blog/discipline-of-looking.jpg'),
    excerpt: 'How a single hour of sustained attention reshaped my approach to colour this season.',
    content: [
      "The studio is a quiet place at first light. A kettle, a small radio at its softest setting, and a row of jars holding the day's pigment.",
      'This week, I returned to a question I keep folding back into the work: what does it mean to look at something for long enough? Long enough to notice the second colour beneath the first, the warmth that hides inside what appeared, on a quick glance, to be plain grey.',
      'I have been mixing burnt sienna with a little raw umber. It is a colour I keep returning to. Something between a remembered evening and the inside of a clay pot. It is not a colour I can buy from a tube.',
      'If the practice has taught me anything this season, it is that slowness is a form of attention. And attention is a form of care.',
    ],
  },
  {
    id: 'letters-from-studio',
    title: 'Letters from the Studio',
    category: 'Journal',
    date: '28 Apr 2025',
    readingTime: '4 min',
    cover: asset('/images/blog/letters-from-studio.jpg'),
    excerpt: 'Notes written between paintings — on rhythm, light, and the small rituals that hold a practice together.',
    content: [
      'There are weeks where the practice is mostly preparation. Cleaning brushes. Stretching canvas. Mixing a single colour for the hundredth time, hoping it lands in the same place it did yesterday.',
      'I have been thinking about ritual. Not the religious kind — the quieter sort. The way an artist arranges their tools before beginning. The way a kitchen is laid out before a long meal. These small geometries matter.',
      'It is in the preparation that the work begins, long before the brush touches the paper.',
    ],
  },
  {
    id: 'earth-pigments',
    title: 'A Vocabulary of Earth Pigments',
    category: 'Craft',
    date: '04 Apr 2025',
    readingTime: '9 min',
    cover: asset('/images/blog/earth-pigments.jpg'),
    excerpt: 'From iron oxide to burnt sienna — a working glossary of the colours that built this body of work.',
    content: [
      'Iron oxide is the colour of an old roof tile, the colour of a hand that has worked in clay. It is one of the oldest pigments we have, and it sits at the centre of almost everything I make.',
      'Burnt sienna is iron oxide that has been warmed by fire. The heat draws the red forward. Raw umber sits next to it on my palette — cooler, quieter, the colour of damp soil.',
      'Each pigment in this glossary is a small biography. Where it comes from, how it behaves on the paper, how it ages in light. To know a pigment is to know how a painting will weather.',
    ],
  },
];
