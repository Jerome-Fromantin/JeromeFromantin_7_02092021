// Exporte la classe pour "dropdownFactory.js".
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

    // MODIFIER CI-DESSOUS
    const top = document.createElement('article');
    top.className = 'section-top';
    return top;
  }

  toHTML() {
    return this.closed;
  }
}

// STRUCTURE HTML A REPRODUIRE AU DESSUS
/*
<div class="closed-drop">
  <span class="drop-title">Ingrédients</span>
  <img class="up-arrow" src="Images/UpArrow.png" alt="">
  <img class="down-arrow" src="Images/DownArrow.png" alt="">
</div>
*/
