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
    dropTitle.innerText = 'Ingridients';

    const downArrow = document.createElement('img');
    downArrow.className = 'down-arrow';
    downArrow.src = 'Images/DownArrow.png';
    downArrow.setAttribute('alt', '');

    closedDiv.appendChild(dropTitle);
    closedDiv.appendChild(downArrow);

    function clickClosedDiv(e) {
      e.preventDefault();
      closedDiv.classList.replace('closed-drop', 'expanded-drop');
      closedDiv.id.replace('closed-drop1', 'expanded-drop1');

      const dropInput = document.createElement('input');
      dropInput.className = 'drop-input';
      dropInput.id = 'drop1-input';
      dropInput.type = 'text';
      dropInput.placeholder = 'Rechercher un ingridient';
      dropInput.onclick = (el) => {
        el.stopPropagation();
      };

      const upArrow = document.createElement('img');
      upArrow.className = 'up-arrow';
      upArrow.src = 'Images/UpArrow.png';
      upArrow.setAttribute('alt', '');

      closedDiv.replaceChild(dropInput, dropTitle);
      closedDiv.replaceChild(upArrow, downArrow);
    }
    closedDiv.addEventListener('click', clickClosedDiv);
    function keyDownClosedDiv(e) {
      if (e.key === 'Enter') {
        clickClosedDiv(e);
      }
    }
    closedDiv.addEventListener('keydown', keyDownClosedDiv);

    return closedDiv;
  }

  toHTML() {
    return this.closed;
  }
}
