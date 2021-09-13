// Exporte la classe pour "dropdown1Factory.js".
export default class DropClosed {
  constructor() {
    this.closed = this.drop_Closed();
  }

  // eslint-disable-next-line class-methods-use-this
  drop_Closed() {
    const closedDiv = document.createElement('div');
    closedDiv.className = 'closed-drop';

    const title = document.createElement('span');
    title.className = 'drop-title';
    title.innerText = 'Ingrédients';

    const upArrow = document.createElement('img');
    upArrow.className = 'up-arrow';
    upArrow.src = 'Images/UpArrow.png';
    upArrow.setAttribute('alt', '');

    const downArrow = document.createElement('img');
    downArrow.className = 'down-arrow';
    downArrow.src = 'Images/DownArrow.png';
    downArrow.setAttribute('alt', '');

    closedDiv.appendChild(title);
    closedDiv.appendChild(upArrow);
    closedDiv.appendChild(downArrow);

    return closedDiv;
  }

  toHTML() {
    return this.closed;
  }
}
