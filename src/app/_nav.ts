export const navigation = [
 
  
 
  {
    name: 'Dashboard',
    url: '/home/Menu2',
    icon: 'icon-speedometer',
    badge: {
      variant: 'danger',
      text: 'MMS'
    }
  },
  
  {
    name: 'Gérer utilisateurs',
    url: '/home/aa',
    icon: 'fa  fa-users',
    children: [
      {
        name: 'Liste des utilisateurs',
        url: '/home/listuser',
        icon: 'fa fa-user fa-fw',
      },
      {
        name: 'Ajouter utilisateur',
        url: '/home/adduser',
        icon: 'fa fa-user fa-fw',
      },
      {
        name: 'Modifier utilisateur',
        url: '/home/moduser',
        icon: 'fa fa-user fa-fw',
      },
      {
        name: 'Gérer les droits daccès',
        url: '/home/droitacces',
        icon: 'fa fa-user fa-fw',
      },

    ],

  },





  {
    name: 'Paramètres TMS',
    url: '/home/bb',
    icon: 'fa  fa-server',
    children: [



      {
        name: 'Téléchargement fichier',
        url: '/home/cc',
        icon: 'fa  fa-circle',
        children: [
          {
            name: 'Liste des paramètres',
            url: '/home/',
            icon: 'fa fa-circle',
          },
        ]
      },


      {
        name: 'Timeline TPE',
        url: '/home/',
        icon: 'fa fa-info-circle fa-fw',
      },
      {
        name: 'Liste des TPE',
        url: '/home/listTPE',
        icon: 'fa fa-cogs fa-fw',
      },
      {
        name: 'Gérer groupes',
        url: '/home/gerergroup',
        icon: 'fa fa-group fa-fw',
      },
      {
        name: 'Gérer banques',
        url: '/home/gererB',
        icon: 'fa fa-bank fa-fw',
      },
      {
        name: 'Gérer applications',
        url: '/home/gererappl',
        icon: 'fa fa-bank fa-fw',
      },
      {
        name: 'Gérer horaires',
        url: '/home/gererhor',
        icon: 'fa fa-calendar fa-fw',
      },
      {
        name: "Gérer mot de passe",
        url: '/home/',
        icon: 'fa fa-lock fa-fw'
      },
      {
        name: "Gérer log terminal",
        url: '/home/generermdp',
        icon: 'fa fa-lock fa-fw'
      }

    ],

  },
  {
    name: 'Reporting',
    url: '/home/dd',
    icon: 'fa  fa-calendar-minus-o',
    children: [



      {
        name: 'Génération de rapports',
        url: '/home/generation',
        icon: 'fa  fa-calendar-minus-o',
      },
      {
        name: 'Rapports prédéfinis',
        url: '/home/',
        icon: 'fa  fa-calendar-minus-o',
      },

    ]
  }





]
  
