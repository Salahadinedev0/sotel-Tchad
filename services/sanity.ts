import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || '5bq5f99u';
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';
const token = import.meta.env.VITE_SANITY_TOKEN;

// Debug logs pour la production
if (import.meta.env.MODE !== 'test') {
  console.log('--- SANITY CHECK ---');
  console.log('Project ID:', projectId);
  console.log('Dataset:', dataset);
  console.log('Token Present:', !!token);
  console.log('Origin:', window.location.origin);
}

export const sanityClient = createClient({
  projectId,
  dataset,
  token: token || undefined,
  useCdn: false,
  apiVersion: '2024-03-01',
  perspective: 'published',
});

// Helper pour logger proprement les erreurs Sanity
export const fetchSanity = async (query: string, params = {}) => {
  try {
    return await sanityClient.fetch(query, params);
  } catch (error: any) {
    console.error('--- ERREUR SANITY DETECTEE ---');
    console.error('Message:', error.message);
    
    const currentOrigin = window.location.origin;
    
    if (error.message?.toLowerCase().includes('network') || error.message?.toLowerCase().includes('fetch')) {
      console.error('PROBLÈME DE CONNEXION (CORS) ?');
      console.error(`Assurez-vous que l'URL suivante est autorisée dans manage.sanity.io > API > CORS Origins :`);
      console.error(`👉 ${currentOrigin}`);
    }

    if (!projectId || projectId === '5bq5f99u') {
      console.error('ALERTE : Vous utilisez peut-être le Project ID par défaut. Vérifiez vos variables d\'environnement.');
    }

    throw error;
  }
};

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}
