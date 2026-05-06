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
    },
    {
       name: 'category',
       title: 'Catégorie',
       type: 'string',
       options: {
         list: [
           { title: 'Infrastructure', value: 'Infrastructure' },
           { title: 'Innovation', value: 'Innovation' },
           { title: 'Entreprise', value: 'Entreprise' },
           { title: 'Communauté', value: 'Communauté' },
         ],
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
    },
    {
      name: 'content',
      title: 'Contenu',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
}
