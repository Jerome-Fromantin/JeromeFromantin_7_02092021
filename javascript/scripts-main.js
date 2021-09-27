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

// Récupère le contenu du champ de recherche avec le bouton "loupe".
// Cette récupération est actuellement dans la console.
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');
function clickSubmitSearch(el) {
  el.preventDefault();
  // eslint-disable-next-line no-console
  console.log(searchInput.value);
}
searchButton.addEventListener('click', clickSubmitSearch);
function keyDownSubmitSearch(el) {
  if (el.key === 'Enter') {
    clickSubmitSearch(el);
  }
}
searchButton.addEventListener('keydown', keyDownSubmitSearch);

/* ********************************************************************************************** */
// FONCTION EN TEST !!!
const dropdownLine = document.querySelector('#dropdown-line');
const menuTest = document.createElement('a');
menuTest.href = '';
menuTest.className = 'dropdown-closed';
menuTest.id = 'drop_Ingr-closed';
const dropTitle = document.createElement('span');
dropTitle.className = 'drop-title-test';
dropTitle.innerText = 'Ingridients';
const downArrow = document.createElement('img');
downArrow.className = 'down-arrow-test';
downArrow.src = 'Images/DownArrow.png';
downArrow.alt = '';

menuTest.appendChild(dropTitle);
menuTest.appendChild(downArrow);
dropdownLine.appendChild(menuTest);

const menuTestOpen = document.createElement('a');
menuTestOpen.href = '';
menuTestOpen.className = 'dropdown-open';
menuTestOpen.id = 'drop_Ingr-open';
const drop1Open1stLine = document.createElement('div');
drop1Open1stLine.className = 'drop1-open-1stLine';
const dropInputTest = document.createElement('input');
dropInputTest.className = 'drop-input-test';
dropInputTest.id = 'drop1-input-test';
dropInputTest.type = 'text';
dropInputTest.placeholder = 'Rechercher un ingridient';
const upArrow = document.createElement('img');
upArrow.className = 'up-arrow-test';
upArrow.src = 'Images/UpArrow.png';
upArrow.alt = '';
const allIngredients = document.createElement('div');
allIngredients.className = 'expanded-drop-test';
allIngredients.id = 'expanded-drop1-test';

drop1Open1stLine.appendChild(dropInputTest);
drop1Open1stLine.appendChild(upArrow);
menuTestOpen.appendChild(drop1Open1stLine);
menuTestOpen.appendChild(allIngredients);

function drop1TestOpen(showTag1) {
  // *******************************************************************FIN DE LIGNE : onTagClick) {
  let everyIngredient = recipes.map((recipe) => recipe.ingredients);
  // Dans le tableau "recipes" des recettes, la fonction "map()" prend chaque élément,
  // donc une recette, et récupère sa propriété "ingredients", qu'il inclut dans "everyIngredient".
  everyIngredient = everyIngredient.flat();
  // La fonction "flat()" permet "d'aplatir" le tableau à un seul niveau en récupérant
  // les données des sous-tableaux.
  everyIngredient = everyIngredient.map((ingr) => ingr.ingredient);
  // La fonction "map()" prend chaque élément, donc ici un ingrédient (nom, quantité, unité),
  // et récupère sa propriété "ingredient" (le nom seulement), qu'il inclut dans "everyIngredient".
  everyIngredient = everyIngredient.sort();
  // La fonction "sort()" range alphabétiquement les ingrédients.
  everyIngredient = new Set(everyIngredient);
  // Finalement, "new Set" élimine les doublons pour créer le tableau final.
  console.log(everyIngredient);

  // eslint-disable-next-line no-restricted-syntax
  for (const ingredient of everyIngredient) {
    const dropLine = document.createElement('span');
    dropLine.className = 'exp-drop-line-test';
    dropLine.innerText = ingredient;
    allIngredients.appendChild(dropLine);

    dropLine.addEventListener('click', () => { showTag1(ingredient); });
    // ***************************************************FIN DE LIGNE : onTagClick(ingredient); });
  }
  return allIngredients;
}

function clickMenuTest(el) {
  el.preventDefault();
  dropdownLine.replaceChild(menuTestOpen, menuTest);
}
menuTest.addEventListener('click', clickMenuTest);

function keyDownMenuTest(el) {
  if (el.key === 'Enter') {
    clickMenuTest(el);
  }
}
menuTest.addEventListener('keydown', keyDownMenuTest);

function clickInput(e) {
  e.preventDefault();
  e.stopPropagation();
}
dropInputTest.addEventListener('click', clickInput);

// FIN DE TEST
/* ********************************************************************************************** */

// Constante globale pour le tableau des divers tags affichés.
const chosenTags = [];

// Constante au niveau global pour les menus déroulants.
const dropdown = [];

// Après un clic sur l'un des éléments du menu déroulant "Ingrédients",
// le tag correspondant est affiché au-dessus.
function showTag1(ingredient) {
  const tagLine = document.querySelector('#tagLine');
  if (chosenTags.indexOf(ingredient) !== -1) {
    // eslint-disable-next-line no-alert
    alert('Ingrédient déjà choisi !');
    return;
  }
  // Rajoute l'élément "ingredient" à la fin du tableau "chosenTags".
  chosenTags.push(ingredient);
  const chosenTag = document.createElement('span');
  chosenTag.className = 'chosen-tag';
  chosenTag.id = 'chosen-tag-1';
  const tagText = document.createElement('span');
  tagText.className = 'tag-text';
  tagText.innerText = ingredient;
  const tagImg = document.createElement('img');
  tagImg.className = 'tag-img';
  tagImg.src = 'Images/CloseTag.png';

  // Supprime le tag avec un clic sur l'icône de fermeture.
  function closeTag() {
    // Supprime le span "chosenTag" de la ligne "tagLine".
    tagLine.removeChild(chosenTag);
    const ingrIndex = chosenTags.indexOf(ingredient);
    // Supprime l'élément "ingredient" du tableau "chosenTags" en fonction de son index.
    chosenTags.splice(ingrIndex, 1);
  }
  tagImg.addEventListener('click', closeTag);

  chosenTag.appendChild(tagText);
  chosenTag.appendChild(tagImg);
  tagLine.appendChild(chosenTag);
}

// Récupère le contenu du champ de recherche des menus déroulants.
// Cette récupération est dans la console.
const dropInput = document.querySelector('.drop-input');
function clickDropInput(el) {
  el.preventDefault();
  // eslint-disable-next-line no-console
  console.log(dropInput.value);
}
dropInput.addEventListener('click', clickDropInput);
function keyDownDropInput(el) {
  if (el.key === 'Enter') {
    clickDropInput(el);
  }
}
dropInput.addEventListener('keydown', keyDownDropInput);

// Empêche le clic sur l'input de se propager à son parent,
// et donc empêche la fermeture du menu (MAIS NE FONCTIONNE PAS CORRECTEMENT).
/*
function noClose1() {
  const drop1Input = document.querySelector('#drop1-input');
  drop1Input.onclick = (e) => {
    e.stopPropagation();
  };
}
noClose1();
*/

/* ********************************************************************************************** */
// Récupère le lien englobant le menu test déroulé.
// function fillDropTest1Link(dropdown) {
// const fullDropTest1Link = document.querySelector('.dropdown-open');
// const ingrList = drop1TestOpen(dropdown, showTag1);                             // onTagClick);
// console.log(ingrList);
// fullDropTest1Link.appendChild(ingrList);
// return fullDropTest1Link;
// menuTestOpen.appendChild(ingrList);
// return menuTestOpen;
// }

// Montre le menu test rempli dynamiquement.
function showDropdownTest1(dropdown) {
  const fullDropTest1Link = document.querySelector('#drop_Ingr-closed');
  function clickShow1(el) {
    el.preventDefault();
    // fillDropTest1Link(dropdown);
    drop1TestOpen(dropdown, showTag1);
  }
  fullDropTest1Link.addEventListener('click', clickShow1);
  function focusShow1(el) {
    clickShow1(el);
  }
  fullDropTest1Link.addEventListener('focus', focusShow1);
}
showDropdownTest1(dropdown);
/* ********************************************************************************************** */

// Crée le lien englobant le premier menu.
function fillDrop1Link(dropdown) {
  const fullDrop1Link = document.createElement('a');
  fullDrop1Link.href = '';
  fullDrop1Link.className = 'dropdown';
  fullDrop1Link.id = 'drop_Ingr';
  const closed = new Dropdown1Factory('closed', dropdown);
  const open = new Dropdown1Factory('open', dropdown, showTag1);
  fullDrop1Link.appendChild(closed.toHTML());
  fullDrop1Link.appendChild(open.toHTML());
  // console.log(closed);
  return fullDrop1Link;
}

// Montre le premier menu rempli dynamiquement.
function showDropdown1(dropdown) {
  const fullDrop1Link = document.querySelector('#drop_Ingr');
  function clickShow1(el) {
    el.preventDefault();
    fillDrop1Link(dropdown);
  }
  fullDrop1Link.addEventListener('click', clickShow1);
  function focusShow1(el) {
    clickShow1(el);
  }
  fullDrop1Link.addEventListener('focus', focusShow1);
}
showDropdown1(dropdown);

// Après un clic sur l'un des éléments du menu déroulant "Appareils",
// le tag correspondant est affiché au-dessus.
function showTag2(appli) {
  const tagLine = document.querySelector('#tagLine');
  if (chosenTags.indexOf(appli) !== -1) {
    // eslint-disable-next-line no-alert
    alert('Appareil déjà choisi !');
    return;
  }
  // Rajoute l'élément "appli" à la fin du tableau "chosenTags".
  chosenTags.push(appli);
  const chosenTag = document.createElement('span');
  chosenTag.className = 'chosen-tag';
  chosenTag.id = 'chosen-tag-2';
  const tagText = document.createElement('span');
  tagText.className = 'tag-text';
  tagText.innerText = appli;
  const tagImg = document.createElement('img');
  tagImg.className = 'tag-img';
  tagImg.src = 'Images/CloseTag.png';

  // Supprime le tag avec un clic sur l'icône de fermeture.
  function closeTag() {
    // Supprime le span "chosenTag" de la ligne "tagLine".
    tagLine.removeChild(chosenTag);
    const appliIndex = chosenTags.indexOf(appli);
    // Supprime l'élément "appli" du tableau "chosenTags" en fonction de son index.
    chosenTags.splice(appliIndex, 1);
  }
  tagImg.addEventListener('click', closeTag);

  chosenTag.appendChild(tagText);
  chosenTag.appendChild(tagImg);
  tagLine.appendChild(chosenTag);
}

// Empêche le clic sur l'input de se propager à son parent,
// et donc empêche la fermeture du menu (MAIS NE FONCTIONNE PAS CORRECTEMENT).
function noClose2() {
  const drop2Input = document.querySelector('#drop2-input');
  drop2Input.onclick = (e) => {
    e.stopPropagation();
  };
}
noClose2();

// Crée le lien englobant le deuxième menu.
function fillDrop2Link(dropdown) {
  const fullDrop2Link = document.createElement('a');
  fullDrop2Link.href = '';
  fullDrop2Link.className = 'dropdown';
  fullDrop2Link.id = 'drop_Appa';
  const closed = new Dropdown2Factory('closed', dropdown);
  const open = new Dropdown2Factory('open', dropdown, showTag2);
  fullDrop2Link.appendChild(closed.toHTML());
  fullDrop2Link.appendChild(open.toHTML());
  return fullDrop2Link;
}

// Montre le deuxième menu rempli dynamiquement.
function showDropdown2(dropdown) {
  const fullDrop2Link = document.querySelector('#drop_Appa');
  function clickShow2(el) {
    el.preventDefault();
    fillDrop2Link(dropdown);
  }
  fullDrop2Link.addEventListener('click', clickShow2);
  function focusShow2(el) {
    clickShow2(el);
  }
  fullDrop2Link.addEventListener('focus', focusShow2);
}
showDropdown2(dropdown);

// Après un clic sur l'un des éléments du menu déroulant "Ustensiles",
// le tag correspondant est affiché au-dessus.
function showTag3(ustensil) {
  const tagLine = document.querySelector('#tagLine');
  if (chosenTags.indexOf(ustensil) !== -1) {
    // eslint-disable-next-line no-alert
    alert('Ustensile déjà choisi !');
    return;
  }
  // Rajoute l'élément "ustensil" à la fin du tableau "chosenTags".
  chosenTags.push(ustensil);
  const chosenTag = document.createElement('span');
  chosenTag.className = 'chosen-tag';
  chosenTag.id = 'chosen-tag-3';
  const tagText = document.createElement('span');
  tagText.className = 'tag-text';
  tagText.innerText = ustensil;
  const tagImg = document.createElement('img');
  tagImg.className = 'tag-img';
  tagImg.src = 'Images/CloseTag.png';

  // Supprime le tag avec un clic sur l'icône de fermeture.
  function closeTag() {
    // Supprime le span "chosenTag" de la ligne "tagLine".
    tagLine.removeChild(chosenTag);
    const usteIndex = chosenTags.indexOf(ustensil);
    // Supprime l'élément "appli" du tableau "chosenTags" en fonction de son index.
    chosenTags.splice(usteIndex, 1);
  }
  tagImg.addEventListener('click', closeTag);

  chosenTag.appendChild(tagText);
  chosenTag.appendChild(tagImg);
  tagLine.appendChild(chosenTag);
}

// Empêche le clic sur l'input de se propager à son parent,
// et donc empêche la fermeture du menu (MAIS NE FONCTIONNE PAS CORRECTEMENT).
function noClose3() {
  const drop3Input = document.querySelector('#drop3-input');
  drop3Input.onclick = (e) => {
    e.stopPropagation();
  };
}
noClose3();

// Crée le lien englobant le troisième menu.
function fillDrop3Link(dropdown) {
  const fullDrop3Link = document.createElement('a');
  fullDrop3Link.href = '';
  fullDrop3Link.className = 'dropdown';
  fullDrop3Link.id = 'drop_Uste';
  const closed = new Dropdown3Factory('closed', dropdown);
  const open = new Dropdown3Factory('open', dropdown, showTag3);
  fullDrop3Link.appendChild(closed.toHTML());
  fullDrop3Link.appendChild(open.toHTML());
  return fullDrop3Link;
}

// Montre le troisième menu rempli dynamiquement.
function showDropdown3(dropdown) {
  const fullDrop3Link = document.querySelector('#drop_Uste');
  function clickShow3(el) {
    el.preventDefault();
    fillDrop3Link(dropdown);
  }
  fullDrop3Link.addEventListener('click', clickShow3);
  function focusShow3(el) {
    clickShow3(el);
  }
  fullDrop3Link.addEventListener('focus', focusShow3);
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
