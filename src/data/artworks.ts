import { asset } from './site';

export interface Artwork {
  id: string;
  title: string;
  medium: string;
  year: number;
  dimensions: string;
  image: string;
  collection: string;        // must match a name in collections.ts
  description: string;
}

/**
 * Add new artworks by appending to this array.
 * Drop the image file into /public/images/artworks/ and reference it via asset().
 */
export const artworks: Artwork[] = [
  {
    id: 'ember-reverie',
    title: 'Ember Reverie',
    medium: 'Oil on linen',
    year: 2024,
    dimensions: '120 × 90 cm',
    image: asset('/images/artworks/ember-reverie.jpg'),
    collection: 'Embers',
    description:
      'A meditation on warm dusk light moving across pigment — layers of ochre and burnt sienna folded into quiet rhythm.',
  },
  {
    id: 'threshold-i',
    title: 'Threshold I',
    medium: 'Mixed media on paper',
    year: 2024,
    dimensions: '70 × 100 cm',
    image: asset('/images/artworks/threshold-i.jpg'),
    collection: 'Quiet Geometries',
    description:
      'A study of the moment between attention and reverie — pencil, graphite and watercolour washes.',
  },
  {
    id: 'sienna-hours',
    title: 'Sienna Hours',
    medium: 'Acrylic on canvas',
    year: 2023,
    dimensions: '150 × 110 cm',
    image: asset('/images/artworks/sienna-hours.jpg'),
    collection: 'Embers',
    description: 'Hand-mixed pigments and slow drying time render an atmosphere of late afternoon stillness.',
  },
  {
    id: 'folded-light',
    title: 'Folded Light',
    medium: 'Watercolour',
    year: 2024,
    dimensions: '56 × 76 cm',
    image: asset('/images/artworks/folded-light.jpg'),
    collection: 'Soft Cartography',
    description: 'A folded landscape — terrain treated as fabric, pressed and warmed by sun.',
  },
  {
    id: 'aurora-distant',
    title: 'Aurora, Distant',
    medium: 'Oil & wax',
    year: 2023,
    dimensions: '90 × 90 cm',
    image: asset('/images/artworks/aurora-distant.jpg'),
    collection: 'Soft Cartography',
    description: 'Encaustic finish over slow oil glazes; the surface holds a quiet glow.',
  },
  {
    id: 'brushwork-study',
    title: 'Untitled (Brushwork Study)',
    medium: 'Ink on rice paper',
    year: 2024,
    dimensions: '40 × 60 cm',
    image: asset('/images/artworks/brushwork-study.jpg'),
    collection: 'Quiet Geometries',
    description: 'A gesture captured in a single breath. Made in the studio at first light.',
  },
];
