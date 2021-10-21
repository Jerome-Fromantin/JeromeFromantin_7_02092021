// Ce fichier contient le code nécessaire à la mise en place de la première implémentation
// de l'algorithme par le biais des boucles natives de JavaScript telles que "for...of".

// Récupération des données "recipes" du fichier.
import { recipes } from './recipes';

// Constante globale pour récupérer le contenu de l'input principal.
const searchInput = document.querySelector('#search-input');

// Crée la ligne du message "Aucune recette...".
const noRecipe = document.querySelector('#no-recipe');
const noRecipeLine = document.createElement('p');
noRecipeLine.className = 'no-recipe-line';
noRecipeLine.innerText = 'Aucune recette ne correspond au terme recherché...';
noRecipe.appendChild(noRecipeLine);

// Constante globale pour la partie affichant les recettes.
const mainSection = document.querySelector('#main-section');

// Variable globale pour le tableau des recettes triées par l'input principal.
let newRecipes = [];

// Cette fonction effectue le tri des recettes.
export default function triParBoucle(callback) {
  mainSection.innerText = '';
  // Si 1 ou 2 caractères sont tapés.
  if (searchInput.value.length <= 2) {
    if (noRecipeLine.classList.contains('no-recipe-line-open')) {
      noRecipeLine.classList.replace('no-recipe-line-open', 'no-recipe-line');
    }
    callback();
    return;
  }
  // Si 3 caractères ou plus sont tapés.
  // eslint-disable-next-line no-else-return
  else {
    // Le contenu de l'input est mis en minuscule et ses accents sont retirés.
    // La constante ci-dessous récupère ce contenu modifié.
    const lowerSearchInput = searchInput.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    mainSection.innerText = '';
    newRecipes = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const recipe of recipes) {
      // La recherche et le tri se font sur le nom.
      if (recipe.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(lowerSearchInput)) {
        newRecipes.push(recipe);
      }

      // La recherche et le tri se font sur la description.
      if (recipe.description.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(lowerSearchInput.value)) {
        newRecipes.push(recipe);
      }

      // eslint-disable-next-line no-restricted-syntax
      for (const ingred of recipe.ingredients) {
        // La recherche et le tri se font sur les ingrédients.
        if (ingred.ingredient.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(lowerSearchInput.value)) {
          newRecipes.push(recipe);
        }
      }

      // Les doublons sont éliminés.
      newRecipes = [...new Set(newRecipes)];
    }

    // Si le tableau est vide, le message "Aucune recette..." apparait.
    if (newRecipes.length === 0) {
      noRecipeLine.classList.replace('no-recipe-line', 'no-recipe-line-open');
    }
    // Si le tableau n'est pas vide mais qu'il l'a été précédemment, le message disparait.
    else if (noRecipeLine.classList.contains('no-recipe-line-open')) {
      noRecipeLine.classList.replace('no-recipe-line-open', 'no-recipe-line');
    }
  }
  callback(newRecipes);
}
