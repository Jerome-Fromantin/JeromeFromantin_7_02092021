/* eslint-disable no-unused-vars */
// Récupération des données "recipes" du fichier.
import { recipes } from '../recipes';

// Exporte la classe pour "dropdown2Factory.js".
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
    expandedDiv.id = 'expanded-drop2';

    let allAppliances = recipes.map((recipe) => recipe.appliance);
    // Dans le tableau "recipes" des recettes, la fonction "map()" prend chaque élément,
    // donc une recette, et récupère sa propriété "appliance", qu'il inclut dans "allAppliances".
    allAppliances = allAppliances.sort();
    // La fonction "sort()" range alphabétiquement les appareils.
    allAppliances = new Set(allAppliances);
    // Finalement, "new Set" élimine les doublons pour créer le tableau final.

    const expandedDrop2 = document.querySelector('#expanded-drop2');
    expandedDrop2.innerText = '';
    // eslint-disable-next-line no-restricted-syntax
    for (const appli of allAppliances) {
      const dropLine = document.createElement('span');
      dropLine.className = 'exp-drop-line';
      dropLine.innerText = appli;
      expandedDrop2.appendChild(dropLine);

      // eslint-disable-next-line no-inner-declarations
      function showTag() {
        const tagLine = document.querySelector('#tagLine');
        const chosenTag = document.createElement('span');
        chosenTag.className = 'chosen-tag';
        chosenTag.id = 'chosen-tag-2';
        const tagText = document.createElement('span');
        tagText.className = 'tag-text';
        tagText.innerText = appli;
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
