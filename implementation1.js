// Ce fichier contient le code nécessaire à la mise en place de la première implémentation
// de l'algorithme par le biais des boucles natives de JavaScript telles que "for...of".

// Récupération des données "recipes" du fichier.
import { recipes } from './recipes';

let varTest = JSON.parse(JSON.stringify(recipes));

// Constantes globales pour récupérer le contenu de l'input principal.
const searchInput = document.querySelector('#search-input');

// Crée le tableau des ingrédients qui sera trié pour son menu.
let newIngredients = recipes.map((element) => element.ingredients);
newIngredients = newIngredients.flat();
newIngredients = newIngredients.map((ingr) => ingr.ingredient);
newIngredients = newIngredients.sort();
newIngredients = [...new Set(newIngredients)];

// Crée le tableau des appareils qui sera trié pour son menu.
let newAppliances = recipes.map((recipe) => recipe.appliance);
newAppliances = newAppliances.sort();
newAppliances = [...new Set(newAppliances)];

// Crée le tableau des ustensiles qui sera trié pour son menu.
let newUstensils = recipes.map((recipe) => recipe.ustensils);
newUstensils = newUstensils.flat();
newUstensils = newUstensils.sort();
newUstensils = [...new Set(newUstensils)];

// Constantes globales pour les menus déroulants.
const dropdownLine = document.querySelector('#dropdown-line');
const menu1 = document.querySelector('#drop-ingr-closed');
const menuOpen1 = document.querySelector('#drop-ingr-open');
const fullList1 = document.querySelector('#expanded-drop1');
const menu2 = document.querySelector('#drop-appa-closed');
const menuOpen2 = document.querySelector('#drop-appa-open');
const fullList2 = document.querySelector('#expanded-drop2');
const menu3 = document.querySelector('#drop-uste-closed');
const menuOpen3 = document.querySelector('#drop-uste-open');
const fullList3 = document.querySelector('#expanded-drop3');

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

// Cette fonction effectue le tri des menus et le tri des recettes.
// TRI DES MENUS ENCORE NON FONCTIONNEL !!
export default function triParBoucle(callback) {
  mainSection.innerText = '';
  const newIngrTri = [];
  // Si 1 ou 2 caractères sont tapés.
  if (searchInput.value.length <= 2) {
    console.log(searchInput.value);
    // console.log([fullList1]);
    if (noRecipeLine.classList.contains('no-recipe-line-open')) {
      noRecipeLine.classList.replace('no-recipe-line-open', 'no-recipe-line');
    }
    // eslint-disable-next-line no-restricted-syntax
    /* for (const ingredient of newIngredients) {
      const dropLine = document.createElement('span');
      dropLine.className = 'exp-drop-line';
      dropLine.innerText = ingredient;
      fullList1.appendChild(dropLine);

      dropLine.addEventListener('click', showTag);
    } */
    callback();
    return;
  }
  // Si 3 caractères ou plus sont tapés.
  // eslint-disable-next-line no-else-return
  else {
    console.log(searchInput.value);
    mainSection.innerText = '';
    newRecipes = [];
    // Boucle "for...of" pour le tri des recettes.
    // eslint-disable-next-line no-restricted-syntax
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
    }
    // Si le tableau est vide, le message "Aucune recette..." apparait.
    if (newRecipes.length === 0) {
      noRecipeLine.classList.replace('no-recipe-line', 'no-recipe-line-open');
    }
    // Si le tableau n'est pas vide mais qu'il l'a été précédemment, le message disparait.
    else if (noRecipeLine.classList.contains('no-recipe-line-open')) {
      noRecipeLine.classList.replace('no-recipe-line-open', 'no-recipe-line');
    }
    // Boucle "for...of" pour le tri des menus. A METTRE AU DEBUT QUAND ELLE FONCTIONNERA !
    // eslint-disable-next-line no-restricted-syntax
    for (const newIngred of newIngredients) {
      if (newIngred.includes(searchInput.value)) {
        newIngrTri.push(newIngred);
        console.log('coucou');
        console.log(newIngrTri);
      }
    }
  }
  callback(newRecipes);
  // callback(newIngrTri);
}
