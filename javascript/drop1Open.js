// Exporte la classe pour "dropdown1Factory.js".
export default class DropOpen {
  constructor(data) {
    // eslint-disable-next-line object-curly-newline
    const { ingredients } = data;
    this.open = this.drop_Open(ingredients);
  }

  // eslint-disable-next-line class-methods-use-this
  drop_Open(ingredients) {
    const expandedDiv = document.createElement('div');
    expandedDiv.className = 'expanded-drop';
    expandedDiv.id = 'expanded-drop1';

    const colLeft = document.createElement('div');
    colLeft.id = 'col1';

    const colMiddle = document.createElement('div');
    colMiddle.id = 'col2';

    const colRight = document.createElement('div');
    colRight.id = 'col3';

    // eslint-disable-next-line no-restricted-syntax
    for (const ingred of ingredients) {
      const dropLineLeft = document.createElement('span');
      dropLineLeft.className = 'exp-drop-line';
      dropLineLeft.innerText = ingred;
      colLeft.appendChild(dropLineLeft);

      const dropLineMiddle = document.createElement('span');
      dropLineMiddle.className = 'exp-drop-line';
      dropLineMiddle.innerText = ingred;
      colMiddle.appendChild(dropLineMiddle);

      const dropLineRight = document.createElement('span');
      dropLineRight.className = 'exp-drop-line';
      dropLineRight.innerText = ingred;
      colRight.appendChild(dropLineRight);
    }

    expandedDiv.appendChild(colLeft);
    expandedDiv.appendChild(colMiddle);
    expandedDiv.appendChild(colRight);

    return expandedDiv;
  }

  toHTML() {
    return this.open;
  }
}
