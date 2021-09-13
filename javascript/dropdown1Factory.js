// Importation des classes nécessaires pour la classe générale.
import DropClosed from './drop1Closed';
import DropOpen from './drop1Open';

// Cette classe permet de construire le menu déroulant des ingrédients.
export default class Dropdown1Factory {
  constructor(type, data) {
    if (!data) {
      throw new Error('Vous avez oublié des éléments !');
    }
    switch (type) {
      case 'closed':
        return new DropClosed();
      case 'open':
        return new DropOpen(data);
      default:
        throw new Error('Type de données non reconnu !');
    }
  }
}

// CE PATTERN FACTORY SEMBLE TERMINE...
