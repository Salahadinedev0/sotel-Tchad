import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || '5bq5f99u';
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';
const token = import.meta.env.VITE_SANITY_TOKEN;

export const sanityClient = createClient({
  projectId,
  dataset,
  token, // Sera undefined si non présent dans .env.local
  useCdn: false, // On désactive le CDN pour avoir les données en temps réel
  apiVersion: '2024-03-01',
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}
