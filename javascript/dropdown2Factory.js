// Importation de la classe nécessaire pour la classe générale.
import DropOpen from './drop2Open';

// Cette classe permet de construire le menu déroulant des appareils.
export default class Dropdown2Factory {
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
