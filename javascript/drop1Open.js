/* eslint-disable no-unused-vars */
// Récupération des données "recipes" du fichier.
import { recipes } from '../recipes';

// Exporte la classe pour "dropdown1Factory.js".
export default class DropOpen {
  constructor(data) {
    // eslint-disable-next-line object-curly-newline
    // const { ingredients } = data;
    this.open = this.drop_Open(data);
  }

  // eslint-disable-next-line class-methods-use-this
  drop_Open(data) {
    const expandedDiv = document.createElement('div');
    expandedDiv.className = 'expanded-drop';
    expandedDiv.id = 'expanded-drop1';

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

    const expandedDrop1 = document.querySelector('#expanded-drop1');
    expandedDrop1.innerText = '';
    // eslint-disable-next-line no-restricted-syntax
    for (const ingredient of allIngredients) {
      const dropLine = document.createElement('span');
      dropLine.className = 'exp-drop-line';
      dropLine.innerText = ingredient;
      expandedDrop1.appendChild(dropLine);
      // eslint-disable-next-line no-inner-declarations
      function showTag() {
        const tagLine = document.querySelector('#tagLine');
        const chosenTag = document.createElement('span');
        chosenTag.className = 'chosen-tag';
        chosenTag.id = 'chosen-tag-1';
        const tagText = document.createElement('span');
        tagText.className = 'tag-text';
        tagText.innerText = ingredient;
        const tagImg = document.createElement('img');
        tagImg.src = 'Images/CloseTag.png';
        chosenTag.appendChild(tagText);
        chosenTag.appendChild(tagImg);
        tagLine.appendChild(chosenTag);
      }
      dropLine.addEventListener('click', showTag);
    }
    /*
    const chosenTag = document.querySelector('.exp-drop-line');
    function showTag() {
      // el.preventDefault();
      console.log('Fuck you !');
    }
    chosenTag.addEventListener('click', showTag);
    */
    return expandedDiv;
  }

  toHTML() {
    return this.open;
  }
}
