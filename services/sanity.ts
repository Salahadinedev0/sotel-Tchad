import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || '5bq5f99u',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  token: import.meta.env.VITE_SANITY_TOKEN,
  useCdn: false,
  apiVersion: '2024-03-01',
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}
