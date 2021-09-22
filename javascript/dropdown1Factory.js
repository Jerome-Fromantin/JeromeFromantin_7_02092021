// Importation des classes nécessaires pour la classe générale.
import DropClosed from './drop1Closed';
import DropOpen from './drop1Open';

// Cette classe permet de construire le menu déroulant des ingrédients.
export default class Dropdown1Factory {
  constructor(type, data, onTagClick) {
    if (!data) {
      throw new Error('Vous avez oublié des éléments !');
    }
    switch (type) {
      case 'closed':
        return new DropClosed(data);
      case 'open':
        return new DropOpen(data, onTagClick);
      default:
        throw new Error('Type de données non reconnu !');
    }
  }
}
