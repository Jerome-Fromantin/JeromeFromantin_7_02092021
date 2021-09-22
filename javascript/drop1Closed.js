/* eslint-disable no-unused-vars */
// Récupération des données "recipes" du fichier.
import { recipes } from '../recipes';

// Exporte la classe pour "dropdown1Factory.js".
export default class DropClosed {
  constructor(data) {
    this.closed = this.dropClosed(data);
  }

  // eslint-disable-next-line class-methods-use-this
  dropClosed(data) {
    const closedDiv = document.createElement('div');
    closedDiv.className = 'closed-drop';
    closedDiv.id = 'closed-drop1';
    closedDiv.innerText = '';

    const dropTitle = document.createElement('span');
    dropTitle.className = 'drop-title';
    dropTitle.innerText = 'Ingrédients';

    const dropInput = document.createElement('input');
    dropInput.className = 'drop-input';
    dropInput.id = 'drop1-input';
    // dropInput.type = 'text';
    dropInput.setAttribute('type', 'text');
    // dropInput.placeholder = 'Voir un film'; // 'Rechercher un ingrédient';
    dropInput.setAttribute('placeholder', 'Voir un film'); // 'Rechercher un ingrédient');
    dropInput.onclick = (e) => {
      e.stopPropagation();
    };

    /*
    closedDiv.onfocus = () => {
      dropInput.classList.remove('drop-input');
      dropInput.classList.add('drop-input-open');
    };
    closedDiv.onblur = () => {
      dropInput.classList.remove('drop-input-open');
      dropInput.classList.add('drop-input');
    };
    */

    const upArrow = document.createElement('img');
    upArrow.className = 'up-arrow';
    upArrow.src = 'Images/UpArrow.png';
    upArrow.setAttribute('alt', '');

    const downArrow = document.createElement('img');
    downArrow.className = 'down-arrow';
    downArrow.src = 'Images/DownArrow.png';
    downArrow.setAttribute('alt', '');

    closedDiv.appendChild(dropTitle);
    closedDiv.appendChild(dropInput);
    closedDiv.appendChild(upArrow);
    closedDiv.appendChild(downArrow);

    return closedDiv;
  }

  toHTML() {
    return this.closed;
  }
}
