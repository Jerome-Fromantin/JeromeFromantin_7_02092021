// Importation des classes nécessaires pour la classe générale.
import DropClosed from './drop2Closed';
import DropOpen from './drop2Open';

// Cette classe permet de construire le menu déroulant des appareils.
export default class Dropdown2Factory {
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
