// Récupération des données "recipes" du fichier.
import { getRecipes } from './services.js';

// PAGE D'ACCUEIL
// Récupération des données dynamiques pour chaque carte de la page d'accueil.
import RecipeFactory from './recipeFactory.js';

let recipes = [];

// Montre toutes les cartes remplies dynamiquement (1ère partie).
async function showRecipes1() {
  recipes = await getRecipes();
  showRecipes2(recipes);
}
showRecipes1();

// Montre toutes les cartes remplies dynamiquement (2ème partie).
function showRecipes2(recipes) {
  const mainSection = document.querySelector('#main-section');
  //mainSection.innerText = '';
  for (const recipe of recipes) {
    const card = fillArticle(recipe);
    mainSection.appendChild(card);
  }
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