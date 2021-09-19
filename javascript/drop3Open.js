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
    expandedDiv.id = 'expanded-drop3';

    let allUstensils = recipes.map((recipe) => recipe.ustensils);
    // Dans le tableau "recipes" des recettes, la fonction "map()" prend chaque élément,
    // donc une recette, et récupère sa propriété "ustensils", qu'il inclut dans "allUstensils".
    allUstensils = allUstensils.flat();
    // La fonction "flat()" permet "d'aplatir" le tableau à un seul niveau en récupérant
    // les données sous forme de liste.
    allUstensils = allUstensils.sort();
    // La fonction "sort()" range alphabétiquement les ustensiles.
    allUstensils = new Set(allUstensils);
    // Finalement, "new Set" élimine les doublons pour créer le tableau final.

    const expandedDrop3 = document.querySelector('#expanded-drop3');
    expandedDrop3.innerText = '';
    // eslint-disable-next-line no-restricted-syntax
    for (const ustensil of allUstensils) {
      const dropLine = document.createElement('span');
      dropLine.className = 'exp-drop-line';
      dropLine.innerText = ustensil;
      expandedDrop3.appendChild(dropLine);

      // eslint-disable-next-line no-inner-declarations
      function showTag() {
        const tagLine = document.querySelector('#tagLine');
        const chosenTag = document.createElement('span');
        chosenTag.className = 'chosen-tag';
        chosenTag.id = 'chosen-tag-3';
        const tagText = document.createElement('span');
        tagText.className = 'tag-text';
        tagText.innerText = ustensil;
        const tagImg = document.createElement('img');
        tagImg.className = 'tag-img';
        tagImg.src = 'Images/CloseTag.png';

        function closeTag() {
          tagLine.removeChild(chosenTag);
        }
        tagImg.addEventListener('click', closeTag);

        chosenTag.appendChild(tagText);
        chosenTag.appendChild(tagImg);
        tagLine.appendChild(chosenTag);
      }
      dropLine.addEventListener('click', showTag);
    }
    return expandedDiv;
  }

  toHTML() {
    return this.open;
  }
}
