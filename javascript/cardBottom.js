// xxx.
export default class CardBottom {
  constructor(data) {
    const { name, time, ingredients, description } = data;
    this.bottom = this.card_Bottom(name, time, ingredients, description);
  }

  card_Bottom(name, time, ingredients, description) {
    const bottom = document.createElement('article');
    bottom.className = 'section-bottom';

    const title_Duration = document.createElement('div');
    title_Duration.className = 'bottom-title-time';
    const title = document.createElement('div');
    title.className = 'bottom-title';
    title.innerText = name;
    const duration = document.createElement('div');
    duration.className = 'bottom-time';
    const timeIcon = document.createElement('img');
    timeIcon.src = 'Images/Temps.png';
    timeIcon.id = 'temps';
    timeIcon.setAttribute('alt', 'Durée');
    const timeText = document.createElement('span');
    timeText.innerText = `${time} mn`;
    title_Duration.appendChild(title);
    duration.appendChild(timeIcon);
    duration.appendChild(timeText);
    title_Duration.appendChild(duration);
    bottom.appendChild(title_Duration);

    const ingredients_Recipe = document.createElement('div');
    ingredients_Recipe.className = 'bottom-descr';
    const ingr = document.createElement('div');
    ingr.className = 'bottom-ingr';
    console.log(ingredients);

    for (const ingred of ingredients) {
      ingr.innerText = ingred.ingredient + ' : ' + ingred.quantity + ' ' + ingred.unit;
    }

    /*
    ingredients.forEach(element =>
      ingr.innerText = element.ingredient + ' : ' + element.quantity + ' ' + element.unit);
    */
    
    const recipe = document.createElement('div');
    recipe.className = 'bottom-recipe';
    recipe.innerText = description;
    ingredients_Recipe.appendChild(ingr);
    ingredients_Recipe.appendChild(recipe);
    bottom.appendChild(ingredients_Recipe);
    return bottom;
  }

  toHTML() {
    return this.bottom;
  }
}
