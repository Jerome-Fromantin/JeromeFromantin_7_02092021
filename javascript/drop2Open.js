/* eslint-disable no-unused-vars */
// Récupération des données "recipes" du fichier.
import { recipes } from '../recipes';

// Exporte la classe pour "dropdown2Factory.js".
export default class DropOpen {
  constructor(data, onTagClick) {
    this.open = this.dropOpen(data, onTagClick);
  }

  // eslint-disable-next-line class-methods-use-this
  dropOpen(data, onTagClick) {
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

      dropLine.addEventListener('click', () => { onTagClick(appli); });
    }
    return expandedDiv;
  }

  toHTML() {
    return this.open;
  }
}
