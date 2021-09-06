// Importation des classes nécessaires pour la classe générale.
import CardTop from './cardTop.js';
import CardBottom from './cardBottom.js';

// Cette classe permet de construire la carte pour chaque photographe dans la page d'accueil.
export default class RecipeFactory {
  constructor(type, data) {
    if (!data) {
      throw new Error('Vous avez oublié des éléments !');
    }
    switch (type) {
      case 'top':
        return new CardTop();
      case 'bottom':
        return new CardBottom(data);
      default:
        throw new Error('Type de données non reconnu !');
    }
  }
}
