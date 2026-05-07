import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || '5bq5f99u';
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';
const token = import.meta.env.VITE_SANITY_TOKEN;

export const sanityClient = createClient({
  projectId,
  dataset,
  token,
  useCdn: false,
  apiVersion: '2024-03-01',
  perspective: 'published', // On force la perspective sur les documents publiés
});

// Helper pour logger proprement les erreurs Sanity
export const fetchSanity = async (query: string, params = {}) => {
  try {
    return await sanityClient.fetch(query, params);
  } catch (error: any) {
    console.error('Sanity Fetch Error:', error);
    if (error.message?.toLowerCase().includes('network') || error.message?.toLowerCase().includes('fetch')) {
      console.error('CONSEIL : Vérifiez que l\'URL de ce site est ajoutée dans les "CORS Origins" de votre projet Sanity (manage.sanity.io > API Settings)');
    }
    throw error;
  }
};

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}
