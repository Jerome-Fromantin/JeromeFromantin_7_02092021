// Importation des classes nécessaires pour la classe générale.
import DropClosed from './dropClosed';
import CardBottom from './cardBottom';

// Cette classe permet de construire la carte pour chaque photographe dans la page d'accueil.
export default class RecipeFactory {
  constructor(type, data) {
    if (!data) {
      throw new Error('Vous avez oublié des éléments !');
    }
    switch (type) {
      case 'closed':
        return new DropClosed();
      case 'bottom':
        return new CardBottom(data);
      default:
        throw new Error('Type de données non reconnu !');
    }
  }
}

// CE PATTERN FACTORY N'EST PAS TERMINE !!
