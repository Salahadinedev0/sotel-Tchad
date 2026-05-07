
export default {
  name: 'settings',
  title: 'Paramètres du Site',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre du Site',
      type: 'string',
    },
    {
      name: 'heroTitle',
      title: 'Titre de la section Accueil',
      type: 'string',
      initialValue: 'Connectez-vous à l\'Avenir avec Sotel Tchad'
    },
    {
      name: 'heroSubtitle',
      title: 'Sous-titre de la section Accueil',
      type: 'text',
      initialValue: 'Découvrez la puissance de la fibre optique et une couverture mobile inégalée sur tout le territoire national.'
    },
    {
      name: 'bannerTitle',
      title: 'Titre Bannière Fibre (Imbattable)',
      type: 'string',
      initialValue: 'La Fibre à un prix imbattable'
    },
    {
      name: 'bannerDescription',
      title: 'Description Bannière Fibre',
      type: 'text',
      initialValue: 'Propulsez votre foyer dans une nouvelle dimension numérique avec notre offre d\'entrée de gamme ultra-performante.'
    },
    {
      name: 'bannerPrice',
      title: 'Prix affiché (Bannière)',
      type: 'string',
      initialValue: '30.000'
    },
    {
      name: 'contactPhone',
      title: 'Téléphone de contact',
      type: 'string',
    },
    {
      name: 'contactEmail',
      title: 'Email de contact',
      type: 'string',
    }
  ],
}
