// Exporte la classe pour "recipeFactory.js".
export default class CardTop {
  constructor() {
    this.top = this.card_Top();
  }

  // eslint-disable-next-line class-methods-use-this
  card_Top() {
    const top = document.createElement('article');
    top.className = 'section-top';
    return top;
  }

  toHTML() {
    return this.top;
  }
}
