// Importation de la classe nécessaire pour la classe générale.
import DropOpen from './drop1Open';

// Cette classe permet de construire le menu déroulant des ingrédients.
export default class Dropdown1Factory {
  constructor(type, data) {
    if (!data) {
      throw new Error('Vous avez oublié des éléments !');
    }
    switch (type) {
      case 'open':
        return new DropOpen(data);
      default:
        throw new Error('Type de données non reconnu !');
    }
  }
}
