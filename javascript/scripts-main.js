// Récupération des données "recipes" du fichier.
import { recipes } from '../recipes';

// PAGE D'ACCUEIL
// Récupération des données dynamiques pour le premier menu déroulant.
// import Dropdown1Factory from './dropdown1Factory';

// Récupération des données dynamiques pour chaque carte recette.
import RecipeFactory from './recipeFactory';

/*
// Fonction test : récupération des ingrédients.
function getIngredients() {
  let ingr = [];
  const ingred_arr = recipes[0].ingredients;
  console.log(ingred_arr);
  // eslint-disable-next-line no-restricted-syntax
  for (const ingred of ingred_arr) {
    ingr = ingred.ingredient;
    console.log(ingr);
  }
  console.log(ingr);
  return ingr;
}
getIngredients();

// Crée le lien englobant le premier menu.
// eslint-disable-next-line no-shadow
function fillDrop1Link(dropdown) {
  const fullDrop1Link = document.createElement('a');
  fullDrop1Link.href = '';
  fullDrop1Link.className = 'dropdown';
  fullDrop1Link.id = 'drop_Ingr';
  const closed = new Dropdown1Factory('closed', dropdown);
  const open = new Dropdown1Factory('open', dropdown);
  fullDrop1Link.appendChild(closed.toHTML());
  fullDrop1Link.appendChild(open.toHTML());
  return fullDrop1Link;
}
// fillDrop1Link(dropdown);

// Montre le premier menu rempli dynamiquement (1ère partie).
// eslint-disable-next-line no-shadow
function showDropdown1a(recipes) {
  const dropsLine = document.querySelector('#dropdown-line');
  // dropsLine.innerText = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const dropdown of recipes) {
    const drop1 = fillDrop1Link(dropdown);
    dropsLine.appendChild(drop1);
  }
}

// Montre le premier menu rempli dynamiquement (2ème partie).
function showDropdown1b() {
  showDropdown1a(recipes);
}
showDropdown1b();
*/

// Organise en carte toutes les données précédemment récupérées.
function fillArticle(recipe) {
  const fullArticle = document.createElement('section');
  fullArticle.className = 'section';
  const top = new RecipeFactory('top', recipe);
  const bottom = new RecipeFactory('bottom', recipe);
  fullArticle.appendChild(top.toHTML());
  fullArticle.appendChild(bottom.toHTML());
  return fullArticle;
}

// Montre toutes les cartes remplies dynamiquement (1ère partie).
// eslint-disable-next-line no-shadow
function showRecipes1(recipes) {
  const mainSection = document.querySelector('#main-section');
  mainSection.innerText = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const recipe of recipes) {
    const card = fillArticle(recipe);
    mainSection.appendChild(card);
  }
}

// Montre toutes les cartes remplies dynamiquement (2ème partie).
function showRecipes2() {
  showRecipes1(recipes);
}
showRecipes2();

/*
// Montre les photographes en fonction du tag choisi.
// Ce tag est soit dans la barre de navigation du haut en version desktop ou mobile,
// soit dans les cartes de photographes en dessous.
function showByTag(tag) {
  // eslint-disable-next-line consistent-return
  const photographersByTopTag = photographers.filter((element) => {
    if (element.tags.includes(tag)) {
      return element;
    }
  });
  showPhotographers2(photographersByTopTag);
}
*/

/*
// Récupère chacun des tags du haut en desktop et leur valeur pour la fonction suivante.
const topTags = document.querySelectorAll('.barnavTag');
let topTarget = null;
topTags.forEach((tag) => {
  tag.addEventListener('click', clickGetTag);
  function clickGetTag(el) {
    topTarget = el.currentTarget;
    const tagValue = topTarget.id;
    showByTag(tagValue);
  }
  tag.addEventListener('keydown', keyDownGetTag);
  function keyDownGetTag(el) {
    if (el.key === 'Enter') {
      clickGetTag(el);
    }
  }
});

// Récupère chacun des tags du haut en mobile et leur valeur pour la fonction précédente.
const topTagsMob = document.querySelectorAll('.barnavTagMob');
let topTargetMob = null;
topTagsMob.forEach((tag) => {
  tag.addEventListener('click', clickGetTag);
  function clickGetTag(el) {
    topTargetMob = el.currentTarget;
    const tagValue = topTargetMob.id.split('M')[0];
    showByTag(tagValue);
  }
  tag.addEventListener('keydown', keyDownGetTag);
  function keyDownGetTag(el) {
    if (el.key === 'Enter') {
      clickGetTag(el);
    }
  }
});
*/
