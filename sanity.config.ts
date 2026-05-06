import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Sotel Tchad Studio',

  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || '5bq5f99u',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',

  basePath: '/studio',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
