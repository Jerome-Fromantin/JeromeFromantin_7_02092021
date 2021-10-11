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

export default function triParBoucle(callback) {
  const contenu = searchInput.value;

  // Crée le tableau des ingrédients qui sera trié pour son menu.
  let newIngredients = recipes.map((element) => element.ingredients);
  newIngredients = newIngredients.flat();
  newIngredients = newIngredients.map((ingr) => ingr.ingredient);
  newIngredients = newIngredients.sort();
  newIngredients = [...new Set(newIngredients)];
  const newIngrTri = [];

  // Crée le tableau des appareils qui sera trié pour son menu.
  let newAppliances = recipes.map((recipe) => recipe.appliance);
  newAppliances = newAppliances.sort();
  newAppliances = [...new Set(newAppliances)];

  // Crée le tableau des ustensiles qui sera trié pour son menu.
  let newUstensils = recipes.map((recipe) => recipe.ustensils);
  newUstensils = newUstensils.flat();
  newUstensils = newUstensils.sort();
  newUstensils = [...new Set(newUstensils)];

  // Constante globale pour la partie affichant les recettes.
  const mainSection = document.querySelector('#main-section');

  // Variable globale pour le tableau des recettes triées par l'input principal.
  let newRecipes = [];

  // Si 1 ou 2 caractères sont tapés.
  if (contenu.length <= 2) {
    if (noRecipeLine.classList.contains('no-recipe-line-open')) {
      noRecipeLine.classList.replace('no-recipe-line-open', 'no-recipe-line');
    }
    callback();
    return;
  }
  // Si 3 caractères ou plus sont tapés.
  // eslint-disable-next-line no-else-return
  else {
    // eslint-disable-next-line no-restricted-syntax
    for (const recipe of recipes) {
      mainSection.innerText = '';
      // La recherche et le tri se font sur le nom.
      if (recipe.name.includes(contenu)) {
        newRecipes.push(recipe);
      }

      // La recherche et le tri se font sur la description.
      if (recipe.description.includes(contenu)) {
        newRecipes.push(recipe);
      }

      // eslint-disable-next-line no-restricted-syntax
      for (const ingred of recipe.ingredients) {
        // La recherche et le tri se font sur les ingrédients.
        if (ingred.ingredient.includes(contenu)) {
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
