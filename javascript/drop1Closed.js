/* eslint-disable no-unused-vars */
// Récupération des données "recipes" du fichier.
import { recipes } from '../recipes';

// Exporte la classe pour "dropdown1Factory.js".
export default class DropClosed {
  constructor(data) {
    this.closed = this.drop_Closed(data);
  }

  // eslint-disable-next-line class-methods-use-this
  drop_Closed(data) {
    const closedDiv = document.createElement('div');
    closedDiv.className = 'closed-drop';
    closedDiv.id = 'closed-drop1';
    // closedDiv.innerText = '';

    const dropTitle = document.createElement('span');
    dropTitle.className = 'drop-title';
    dropTitle.innerText = 'Ingrédients';

    const dropForm = document.createElement('form');
    dropForm.setAttribute('method', 'post');
    dropForm.setAttribute('action', '');

    const dropInput = document.createElement('input');
    dropInput.className = 'drop-input';
    dropInput.id = 'drop1-input';
    // dropInput.type = 'text';
    dropInput.setAttribute('type', 'text');
    // dropInput.placeholder = 'Voir un film'; // 'Rechercher un ingrédient';
    dropInput.setAttribute('placeholder', 'Voir un film'); // 'Rechercher un ingrédient';

    const upArrow = document.createElement('img');
    upArrow.className = 'up-arrow';
    upArrow.src = 'Images/UpArrow.png';
    upArrow.setAttribute('alt', '');

    const downArrow = document.createElement('img');
    downArrow.className = 'down-arrow';
    downArrow.src = 'Images/DownArrow.png';
    downArrow.setAttribute('alt', '');

    closedDiv.appendChild(dropTitle);
    dropForm.appendChild(dropInput);
    closedDiv.appendChild(dropForm);
    closedDiv.appendChild(upArrow);
    closedDiv.appendChild(downArrow);

    /*
    let allIngredients = recipes.map((recipe) => recipe.ingredients);
    // Dans le tableau "recipes" des recettes, la fonction "map()" prend chaque élément,
    // donc une recette, et récupère sa propriété "ingredients", qu'il inclut dans "allIngredients".
    allIngredients = allIngredients.flat();
    // La fonction "flat()" permet "d'aplatir" le tableau à un seul niveau en récupérant
    // les données des sous-tableaux.
    allIngredients = allIngredients.map((ingr) => ingr.ingredient);
    // La fonction "map()" prend chaque élément, donc ici un ingrédient (nom, quantité, unité),
    // et récupère sa propriété "ingredient" (le nom seulement), qu'il inclut dans "allIngredients".
    allIngredients = allIngredients.sort();
    // La fonction "sort()" range alphabétiquement les ingrédients.
    allIngredients = new Set(allIngredients);
    // Finalement, "new Set" élimine les doublons pour créer le tableau final.
    */
    return closedDiv;
  }

  toHTML() {
    return this.closed;
  }
}
