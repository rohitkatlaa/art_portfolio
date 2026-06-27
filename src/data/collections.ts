import { asset } from './site';

export interface Collection {
  id: string;
  name: string;
  tagline: string;
  count: number;
  year: number;
  cover: string;
  description: string;
}

/**
 * Each artwork in artworks.ts references a collection by name.
 * To add a new collection: append an object here, then assign artworks to it.
 */
export const collections: Collection[] = [
  {
    id: 'embers',
    name: 'Embers',
    tagline: 'Warm light, slow time',
    count: 14,
    year: 2024,
    cover: asset('/images/collections/embers.jpg'),
    description:
      'A series exploring the warmth that persists after a long day — oils, ochres and the colour of remembered evenings.',
  },
  {
    id: 'soft-cartography',
    name: 'Soft Cartography',
    tagline: 'Maps of feeling',
    count: 11,
    year: 2024,
    cover: asset('/images/collections/soft-cartography.jpg'),
    description:
      'Landscapes treated as memory. Each piece in this collection is an attempt to draw something the body already knows.',
  },
  {
    id: 'quiet-geometries',
    name: 'Quiet Geometries',
    tagline: 'Restraint as practice',
    count: 9,
    year: 2023,
    cover: asset('/images/collections/quiet-geometries.jpg'),
    description:
      'A minimal study in line, plane and pause. Works on paper made over a single winter in the studio.',
  },
];
