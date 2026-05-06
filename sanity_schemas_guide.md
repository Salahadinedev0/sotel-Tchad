# Guide des Schémas Sanity pour Sotel Tchad

Voici les schémas que vous pouvez utiliser dans votre dossier `schemas` de votre projet Sanity Studio.

## 1. Schéma Article (News)
Créez un fichier `article.ts` (ou `.js`) :

```typescript
export default {
  name: 'article',
  title: 'Articles d\'actualité',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date de publication',
      type: 'date',
      options: {
        dateFormat: 'DD MMMM YYYY',
      },
    },
    {
      name: 'image',
      title: 'Image mise en avant',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'excerpt',
      title: 'Extrait',
      type: 'text',
      description: 'Un court résumé de l\'article.',
    },
    {
      name: 'content',
      title: 'Contenu',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
}
```

## 2. Schéma Produit / Offre
Créez un fichier `product.ts` (ou `.js`) :

```typescript
export default {
  name: 'product',
  title: 'Produits / Offres',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom de l\'offre',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Prix (FCFA)',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Fibre Optique', value: 'fiber' },
          { title: 'Mobile & Data', value: 'mobile' },
        ],
      },
    },
    {
      name: 'features',
      title: 'Caractéristiques',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'popular',
      title: 'Plus populaire ?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'details',
      title: 'Détails supplémentaires',
      type: 'text',
    },
  ],
}
```

## 3. Enregistrement des schémas
N'oubliez pas d'importer et d'ajouter ces schémas dans votre fichier `schemas/index.ts` :

```typescript
import article from './article'
import product from './product'

export const schemaTypes = [article, product]
```
