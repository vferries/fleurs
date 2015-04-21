angular.module('starter.services', [])

.factory('Fleurs', function() {
  var categories = [
        {
            name: 'Fleurs régulières à 3 pétales',
            summary: 'Fleurs dont les pétales sont égaux et disposés de façon symétrique',
            img: 'img/blanche.jpg'
        },
        {
            name: 'Fleurs régulières à 4 pétales',
            summary: 'Fleurs dont les pétales sont égaux et disposés de façon symétrique',
            img: 'img/bleue.jpg'
        },
        {
            name: 'Fleurs régulières à 5 pétales',
            summary: 'Fleurs dont les pétales sont égaux et disposés de façon symétrique',
            img: 'img/boule.jpg'
        },
        {
            name: 'Fleurs régulières à 6 pétales',
            summary: 'Fleurs dont les pétales sont égaux et disposés de façon symétrique',
            img: 'img/jaune.jpg'
        },
        {
            name: 'Fleurs irrégulières',
            summary: 'Fleurs irrégulières : dont les pétales sont asymétriques',
            img: 'img/jaune2.jpg'
        },
        {
            name: 'Fleurs légumineuses ou papillonacées',
            summary: 'Fleurs irrégulières comportant un grand pétale supérieur appelé étendard et un pétale inférieur, en forme de barque, dénommé carène.',
            img: 'img/lavande.jpg'
        },
        {
            name: 'Fleurs légumineuses ou papillonacées',
            summary: 'Fleurs irrégulières comportant un grand pétale supérieur appelé étendard et un pétale inférieur, en forme de barque, dénommé carène.',
            img: 'img/orange.jpg'
        },
        {
            name: 'Fleurs légumineuses ou papillonacées',
            summary: 'Fleurs irrégulières comportant un grand pétale supérieur appelé étendard et un pétale inférieur, en forme de barque, dénommé carène.',
            img: 'img/orchidees.jpg'
        },
        {
            name: 'Fleurs légumineuses ou papillonacées',
            summary: 'Fleurs irrégulières comportant un grand pétale supérieur appelé étendard et un pétale inférieur, en forme de barque, dénommé carène.',
            img: 'img/rosee.jpg'
        },
        {
            name: 'Fleurs légumineuses ou papillonacées',
            summary: 'Fleurs irrégulières comportant un grand pétale supérieur appelé étendard et un pétale inférieur, en forme de barque, dénommé carène.',
            img: 'img/roses.jpg'
        },
        {
            name: 'Fleurs légumineuses ou papillonacées',
            summary: 'Fleurs irrégulières comportant un grand pétale supérieur appelé étendard et un pétale inférieur, en forme de barque, dénommé carène.',
            img: 'img/verte.jpg'
        },
        {
            name: 'Fleurs légumineuses ou papillonacées',
            summary: 'Fleurs irrégulières comportant un grand pétale supérieur appelé étendard et un pétale inférieur, en forme de barque, dénommé carène.',
            img: 'img/violette.jpg'
        },
        {
            name: 'Fleurs légumineuses ou papillonacées',
            summary: 'Fleurs irrégulières comportant un grand pétale supérieur appelé étendard et un pétale inférieur, en forme de barque, dénommé carène.',
            img: 'img/zarbi.jpg'
        },
        {
            name: 'Fleurs légumineuses ou papillonacées',
            summary: 'Fleurs irrégulières comportant un grand pétale supérieur appelé étendard et un pétale inférieur, en forme de barque, dénommé carène.',
            img: 'img/zebre.jpg'
        }
    ];

  return {
    all: function() {
      return categories;
    },
    get: function(category) {
      //TODO Return the matching subcategories
    }
  };
});
