// xxx.
export default class CardTop {
  constructor() {
    this.top = this.card_Top();
  }

  card_Top() {
    const top = document.createElement('article');
    top.className = 'section-top';
    return top;
  }

  toHTML() {
    return this.top;
  }
}
