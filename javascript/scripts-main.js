/* eslint-disable no-shadow */
// Récupération des données "recipes" du fichier.
import { recipes } from '../recipes';

// PAGE D'ACCUEIL
// Récupération des données dynamiques pour les trois menus déroulants.
import Dropdown1Factory from './dropdown1Factory';
import Dropdown2Factory from './dropdown2Factory';
import Dropdown3Factory from './dropdown3Factory';

// Récupération des données dynamiques pour chaque carte recette.
import RecipeFactory from './recipeFactory';

// Constante au niveau global.
const dropdown = [];

// Crée le lien englobant le premier menu.
function fillDrop1Link(dropdown) {
  const fullDrop1Link = document.createElement('a');
  fullDrop1Link.href = '';
  fullDrop1Link.className = 'dropdown';
  fullDrop1Link.id = 'drop_Ingr';
  const open = new Dropdown1Factory('open', dropdown);
  fullDrop1Link.appendChild(open.toHTML());
  return fullDrop1Link;
}

// Montre le premier menu rempli dynamiquement.
function showDropdown1(dropdown) {
  fillDrop1Link(dropdown);
}
showDropdown1(dropdown);

// Crée le lien englobant le deuxième menu.
function fillDrop2Link(dropdown) {
  const fullDrop2Link = document.createElement('a');
  fullDrop2Link.href = '';
  fullDrop2Link.className = 'dropdown';
  fullDrop2Link.id = 'drop_Appa';
  const open = new Dropdown2Factory('open', dropdown);
  fullDrop2Link.appendChild(open.toHTML());
  return fullDrop2Link;
}

// Montre le deuxième menu rempli dynamiquement.
function showDropdown2(dropdown) {
  fillDrop2Link(dropdown);
}
showDropdown2(dropdown);

// Crée le lien englobant le troisième menu.
function fillDrop3Link(dropdown) {
  const fullDrop3Link = document.createElement('a');
  fullDrop3Link.href = '';
  fullDrop3Link.className = 'dropdown';
  fullDrop3Link.id = 'drop_Uste';
  const open = new Dropdown3Factory('open', dropdown);
  fullDrop3Link.appendChild(open.toHTML());
  return fullDrop3Link;
}

// Montre le troisième menu rempli dynamiquement.
function showDropdown3(dropdown) {
  fillDrop3Link(dropdown);
}
showDropdown3(dropdown);

// Organise en carte toutes les données de recettes précédemment récupérées.
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
