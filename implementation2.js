// Ce fichier contient le code nécessaire à la mise en place de la deuxième implémentation
// de l'algorithme par le biais des propriétés de tableaux telles que filter().

// Récupération des données "recipes" du fichier.
import { recipes } from './recipes';

const varTest = JSON.parse(JSON.stringify(recipes));
// "JSON.stringify" convertit le tableau JS en chaîne JSON.
// "JSON.parse" analyse la chaîne JSON et construit la valeur JS.

// Constante globale pour récupérer le contenu de l'input principal.
const searchInput = document.querySelector('#search-input');
const lowerSearchInput = searchInput.value.toLowerCase();

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

// Variables globales "provisoires" pour les étapes de filtration.
let newRecipes2 = [];
let ingre = [];
let newRecipes3 = [];

// Variable globale pour le tableau d'ingrédients.
/* let everyRecipeIngr = recipe.ingredients;
everyRecipeIngr = everyRecipeIngr.flat();
everyRecipeIngr = everyRecipeIngr.map((ingr) => ingr.ingredient);
everyRecipeIngr = everyRecipeIngr.sort(); */

// Cette fonction effectue le tri des recettes.
export default function triParFilter(callback) {
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
    mainSection.innerText = '';

    // La filtration se fait sur le nom.
    newRecipes = recipes.filter((element) =>
    { return element.name.toLowerCase().includes(lowerSearchInput) || element.description.toLowerCase().includes(lowerSearchInput) ||
    element.ingredients.map((ingr) => ingr.ingredient).some((ingredient) => ingredient.toLowerCase().includes(lowerSearchInput))
    });
    console.log(newRecipes);

    /*// La filtration se fait ensuite sur la description.
    newRecipes2 = recipes.filter((element) => element.description.includes(searchInput.value));
    newRecipes.push(...newRecipes2);
    console.log(newRecipes);*/

    // La filtration se fait enfin sur les ingrédients.
    /*newRecipes3 = recipes.filter((element) => element.ingredients.map((ingr) =>
    ingr.ingredient).some((ingredient) => ingredient.includes(searchInput.value)));
    //console.log(ingre);
    //newRecipes3 = ingre.filter((element) => element.ingredient.includes(searchInput.value));
    //console.log(newRecipes3);
    newRecipes.push(...newRecipes3);
    //console.log(newRecipes);*/

    /* // eslint-disable-next-line no-restricted-syntax
    for (const recipe of varTest) {
      // La recherche et le tri se font sur le nom.
      if (recipe.name.includes(searchInput.value)) {
        newRecipes.push(recipe);
      }

      // La recherche et le tri se font sur la description.
      if (recipe.description.includes(searchInput.value)) {
        newRecipes.push(recipe);
      }

      // eslint-disable-next-line no-restricted-syntax
      for (const ingred of recipe.ingredients) {
        // La recherche et le tri se font sur les ingrédients.
        if (ingred.ingredient.includes(searchInput.value)) {
          newRecipes.push(recipe);
        }
      }

      // Les doublons sont éliminés.
      newRecipes = [...new Set(newRecipes)];
    } */

    // Les doublons sont éliminés.
    newRecipes = [...new Set(newRecipes)];

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
