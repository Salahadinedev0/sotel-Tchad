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
      name: 'speed',
      title: 'Vitesse (Fibre)',
      type: 'string',
      description: 'Ex: 10 Mbps (uniquement pour Fibre)'
    },
    {
      name: 'data',
      title: 'Volume Data (Mobile)',
      type: 'string',
      description: 'Ex: 5 Go (uniquement pour Mobile)'
    },
    {
      name: 'validity',
      title: 'Validité',
      type: 'string',
      description: 'Ex: 30 Jours'
    },
    {
      name: 'features',
      title: 'Caractéristiques / Points forts',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'popular',
      title: 'Plus populaire ?',
      type: 'boolean',
      initialValue: false,
    },
  ],
}
