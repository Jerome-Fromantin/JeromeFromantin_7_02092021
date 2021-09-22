/* eslint-disable no-unused-vars */
// Récupération des données "recipes" du fichier.
import { recipes } from '../recipes';

// Exporte la classe pour "dropdown2Factory.js".
export default class DropClosed {
  constructor(data) {
    this.closed = this.dropClosed(data);
  }

  // eslint-disable-next-line class-methods-use-this
  dropClosed(data) {
    const closedDiv = document.createElement('div');
    closedDiv.className = 'closed-drop';
    closedDiv.id = 'closed-drop2';
    // closedDiv.innerText = '';

    const dropTitle = document.createElement('span');
    dropTitle.className = 'drop-title';
    dropTitle.innerText = 'Appareils';

    const dropInput = document.createElement('input');
    dropInput.className = 'drop-input';
    dropInput.id = 'drop2-input';
    // dropInput.type = 'text';
    dropInput.setAttribute('type', 'text');
    // dropInput.placeholder = 'Regarder une photo'; // 'Rechercher un appareil';
    dropInput.setAttribute('placeholder', 'Regarder une photo'); // 'Rechercher un appareil');
    dropInput.onclick = (e) => {
      e.stopPropagation();
    };

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
