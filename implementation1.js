/* eslint-disable no-unused-vars */
// Ce fichier contiendra le code nécessaire à la mise en place de la première implémentation
// de l'algorithme par le biais des boucles natives de JavaScript telles que "for...of".

// Récupération des données "recipes" du fichier.
import { recipes } from './recipes';

// Cette fonction est testée directement dans "scripts-main.js"...
const searchInput = document.querySelector('#search-input');

function triParBoucle() {
  const contenu = searchInput.value;
  // const contenuMin = contenu.toLowerCase();
  const newRecipes = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const recipe of recipes) {
    if (contenu.length >= 3) {
      if (recipe.name.includes(contenu)) {
        console.log(recipe.name);
        newRecipes.push(recipe);
        console.log(newRecipes);
        // showRecipes1();
      }
    /* else {
        console.log('Non !');
    }
    if (recipe.ingredients.ingredient.includes(contenu)) {
        console.log('test');
        console.log(recipe.ingredients.ingredient);
    }
    if (recipe.description.includes(contenu)) {
        return recipe;
    } */
    }
  }
  /* if (recipe === []) {
    // eslint-disable-next-line no-alert
    alert('Aucune recette...');
  } */
  return newRecipes;
}
searchInput.addEventListener('input', triParBoucle);
