angular.module('starter.services', [])

.factory('Fleurs', function() {
  var categories = [
        {
            name: 'Fleurs régulières à 3 pétales',
            summary: 'Pétales égaux et symétriques',
            description: 'Fleurs dont les pétales sont égaux et disposés de façon symétrique',
            img: 'img/blanche.jpg',
            colors: ['Jaunes', 'Roses']
        },
        {
            name: 'Fleurs régulières à 4 pétales',
            summary: 'Pétales égaux et symétriques',
            description: 'Fleurs dont les pétales sont égaux et disposés de façon symétrique',
            img: 'img/bleue.jpg',
            colors: ['Blanches', 'Jaunes', 'Roses', 'Violettes', 'Bleues']
        },
        {
            name: 'Fleurs régulières à 5 pétales',
            summary: 'Pétales égaux et symétriques',
            description: 'Fleurs dont les pétales sont égaux et disposés de façon symétrique',
            img: 'img/boule.jpg',
            colors: ['Blanches', 'Jaunes', 'Roses', 'Violettes', 'Bleues', 'Rouges']
        },
        {
            name: 'Fleurs régulières à 6 pétales',
            summary: 'Pétales égaux et symétriques',
            description: 'Fleurs dont les pétales sont égaux et disposés de façon symétrique',
            img: 'img/jaune.jpg',
            colors: ['Blanches', 'Jaunes', 'Roses', 'Violettes', 'Bleues', 'Rouges']
        },
        {
            name: 'Fleurs irrégulières',
            summary: 'Pétales asymétriques',
            description: 'Fleurs irrégulières : dont les pétales sont asymétriques',
            img: 'img/jaune2.jpg',
            colors: ['Blanches', 'Jaunes', 'Roses', 'Bleues']
        },
        {
            name: 'Fleurs légumineuses',
            summary: 'Ou papillonnacées',
            description: 'Fleurs irrégulières comportant un grand pétale supérieur appelé étendard et un pétale inférieur, en forme de barque, dénommé carène.',
            img: 'img/lavande.jpg',
            colors: ['Blanches', 'Jaunes', 'Roses', 'Bleues', 'Violettes', 'Rouges']
        },
        {
            name: 'Fleurs à pétales soudés',
            summary: 'Plus de la moitié du pétale.',
            description: 'Fleurs à pétales soudés : sur une longueur correspondant à plus de la moitié de la longueur du pétale.',
            img: 'img/orange.jpg',
            colors: ['Blanches', 'Jaunes', 'Roses', 'Bleues', 'Violettes', 'Rouges']
        },
        {
            name: 'Orchidées',
            summary: 'Pétale en forme de lèvre.',
            description: 'Fleur en épi, au haut de la tige. Un pétale, inférieur le plus souvent, est plus développé, en forme de lèvre. Feuilles, plus bas sur la tige, ou au pied de la plante.',
            img: 'img/orchidees.jpg',
            colors: ['Blanches', 'Roses', 'Rouges', 'Violettes', 'Bleues', 'Noires']
        },
        {
            name: 'Fleurs composées',
            summary: 'Et apparentées.',
            description: 'La fleur est en réalité formée d’un ensemble de petites fleurs, sans queue, serrées les unes contre les autres, entourées par une collerette de petites écailles, comme une pâquerette ou une marguerite.',
            img: 'img/rosee.jpg',
            colors: ['Blanches', 'Jaunes', 'Violettes', 'Bleues', 'Roses', 'Rouges']
        },
        {
            name: 'Ombellifères',
            summary: 'Et apparentées.',
            description: 'Les fleurs sont en ombrelle ou ombelle : les queues partent toutes du même point, chaque rayon principal portant, lui-même, à son sommet, d’autres rayons terminés par une petite fleur.',
            img: 'img/rosee.jpg',
            colors: ['Blanches', 'Rosées', 'Jaunes', 'Jaunâtres']
        },
        {
            name: 'Fleurs vertes',
            summary: 'Plantes.',
            description: 'Il s’ agit le plus souvent de plantes de la famille des euphorbes.',
            img: 'img/roses.jpg',
            colors: ['Vertes']
        },
        {
            name: 'Petites fleurs',
            summary: 'Plantes.',
            description: 'Fleurs toutes petites sans pétales réellement individualisables, de couleur brune : il s’agit le plus souvent de plantes de la famille du plantain. De couleur verte, blanchâtre ou rosée : il s’agit de plantes de la famille de la renouée ou de l’oseille.',
            img: 'img/verte.jpg',
            colors: ['Brunes', 'Vertes', 'Blanchâtres', 'Rosées']
        },
        {
            name: 'Graminées',
            summary: 'Juncassées et apparentées.',
            description: 'Fleurs réduites à de petites écailles.',
            img: 'img/violette.jpg',
            colors: ['Vertes', 'Brunes', 'Rougeâtres']
        },
        {
            name: 'Fougères',
            summary: '',
            description: 'Les fougères n’ont pas de fleur. Elles se reproduisent grâce aux sporanges groupés en amas, localisés soit sur la face inférieure des feuilles, soit sur des rameaux distincts.',
            img: 'img/zebre.jpg',
            colors: ['Vertes']
        }
    ];

  return {
    all: function() {
      return categories;
    },
    get: function(name) {
      for (var i = 0; i < categories.length; i++) {
        if (categories[i].name == name) {
          return categories[i];
        }
      }
    }
  };
});
