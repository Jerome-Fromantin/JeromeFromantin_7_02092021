/* eslint-disable no-shadow */
// Récupération des données "recipes" du fichier.
import { recipes } from '../recipes';

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

/*
// CI-DESSOUS A AMELIORER !!
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
*/

// Fonction de création et affichage du menu déroulant "Ingrédients", fermé et ouvert.
// C'est une fonction "auto-exécutante" comme celle ci-dessous en exemple.
// (function example() {
// console.log('Bonjour !');
// }());
(function menuIngr() {
  const dropdownLine = document.querySelector('#dropdown-line');
  const menu = document.createElement('a');
  menu.href = '';
  menu.className = 'dropdown-closed';
  menu.id = 'drop-ingr-closed';
  const title = document.createElement('span');
  title.className = 'drop-title';
  title.innerText = 'Ingrédients';
  const downArrow = document.createElement('img');
  downArrow.className = 'down-arrow';
  downArrow.src = 'Images/DownArrow.png';
  downArrow.alt = '';

  menu.appendChild(title);
  menu.appendChild(downArrow);
  dropdownLine.appendChild(menu);

  const menuOpen = document.createElement('a');
  menuOpen.href = '';
  menuOpen.className = 'dropdown-open';
  menuOpen.id = 'drop-ingr-open';
  const firstLine = document.createElement('div');
  firstLine.className = 'drop-open-1stLine';
  const input = document.createElement('input');
  input.className = 'drop-input';
  input.id = 'drop1-input';
  input.type = 'text';
  input.placeholder = 'Rechercher un ingrédient';
  const upArrow = document.createElement('img');
  upArrow.className = 'up-arrow';
  upArrow.src = 'Images/UpArrow.png';
  upArrow.alt = '';
  const fullList = document.createElement('div');
  fullList.className = 'expanded-drop';
  fullList.id = 'expanded-drop1';

  firstLine.appendChild(input);
  firstLine.appendChild(upArrow);
  menuOpen.appendChild(firstLine);
  menuOpen.appendChild(fullList);

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
  everyIngredient = [...new Set(everyIngredient)];
  // Finalement, "new Set" élimine les doublons.
  // Mais cela crée un ensemble. Il faut donc l'encadrer pour créer le tableau final.

  // Constante globale pour le tableau des divers tags affichés.
  const chosenTags = [];

  // Variable globale pour chaque tag.
  let eachTag = '';

  // Après un clic sur l'un des éléments du menu déroulant "Ingrédients",
  // le tag correspondant est affiché au-dessus.
  function showTag(e) {
    e.preventDefault();
    e.stopPropagation();
    eachTag = e.target.innerText;
    const tagLine = document.querySelector('#tagLine');
    if (chosenTags.indexOf(eachTag) !== -1) {
      // eslint-disable-next-line no-alert
      alert('Ingrédient déjà choisi !');
      return;
    }
    // Rajoute l'élément "eachTag" à la fin du tableau "chosenTags".
    chosenTags.push(eachTag);
    const chosenTag = document.createElement('span');
    chosenTag.className = 'chosen-tag';
    chosenTag.id = 'chosen-tag-1';
    const tagText = document.createElement('span');
    tagText.className = 'tag-text';
    tagText.innerText = eachTag;
    const tagImg = document.createElement('img');
    tagImg.className = 'tag-img';
    tagImg.src = 'Images/CloseTag.png';

    // Supprime le tag avec un clic sur l'icône de fermeture.
    // eslint-disable-next-line no-inner-declarations
    function closeTag() {
      // Supprime le span "chosenTag" de la ligne "tagLine".
      tagLine.removeChild(chosenTag);
      const tagIndex = chosenTags.indexOf(eachTag);
      // Supprime l'élément "eachTag" du tableau "chosenTags" en fonction de son index.
      chosenTags.splice(tagIndex, 1);
    }
    tagImg.addEventListener('click', closeTag);

    chosenTag.appendChild(tagText);
    chosenTag.appendChild(tagImg);
    tagLine.appendChild(chosenTag);
  }

  // Ouvre le menu déroulant et crée la liste des ingrédients.
  function fullMenu() {
    // Ci-dessous, l'enfant "menuOpen" remplace l'enfant "menu".
    dropdownLine.replaceChild(menuOpen, menu);
    fullList.innerText = '';

    // eslint-disable-next-line no-restricted-syntax
    for (const ingredient of everyIngredient) {
      const dropLine = document.createElement('span');
      dropLine.className = 'exp-drop-line';
      dropLine.innerText = ingredient;
      fullList.appendChild(dropLine);

      dropLine.addEventListener('click', showTag);
    }
  }

  // Un clic sur l'input ne se propage pas à son parent.
  function clickInput(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  input.addEventListener('click', clickInput);

  // Referme le menu déroulant en cliquant dessus ou ailleurs.
  function closeMenu(el) {
    el.preventDefault();
    if (dropdownLine.contains(menuOpen)) {
      dropdownLine.replaceChild(menu, menuOpen);
    }
  }
  document.addEventListener('click', closeMenu);

  // Montre le menu déroulant rempli dynamiquement.
  function showMenu(el) {
    el.preventDefault();
    fullMenu();
  }
  menu.addEventListener('focus', showMenu);
}());

// Fonction de création et affichage du menu déroulant "Appareils", fermé et ouvert.
// C'est une fonction "auto-exécutante" comme celle au dessus.
(function menuAppa() {
  const dropdownLine = document.querySelector('#dropdown-line');
  const menu = document.createElement('a');
  menu.href = '';
  menu.className = 'dropdown-closed';
  menu.id = 'drop-appa-closed';
  const title = document.createElement('span');
  title.className = 'drop-title';
  title.innerText = 'Appareils';
  const downArrow = document.createElement('img');
  downArrow.className = 'down-arrow';
  downArrow.src = 'Images/DownArrow.png';
  downArrow.alt = '';

  menu.appendChild(title);
  menu.appendChild(downArrow);
  dropdownLine.appendChild(menu);

  const menuOpen = document.createElement('a');
  menuOpen.href = '';
  menuOpen.className = 'dropdown-open';
  menuOpen.id = 'drop-appa-open';
  const firstLine = document.createElement('div');
  firstLine.className = 'drop-open-1stLine';
  const input = document.createElement('input');
  input.className = 'drop-input';
  input.id = 'drop2-input';
  input.type = 'text';
  input.placeholder = 'Rechercher un appareil';
  const upArrow = document.createElement('img');
  upArrow.className = 'up-arrow';
  upArrow.src = 'Images/UpArrow.png';
  upArrow.alt = '';
  const fullList = document.createElement('div');
  fullList.className = 'expanded-drop';
  fullList.id = 'expanded-drop2';

  firstLine.appendChild(input);
  firstLine.appendChild(upArrow);
  menuOpen.appendChild(firstLine);
  menuOpen.appendChild(fullList);

  let everyAppliance = recipes.map((recipe) => recipe.appliance);
  // Dans le tableau "recipes" des recettes, la fonction "map()" prend chaque élément,
  // donc une recette, et récupère sa propriété "appliance", qu'il inclut dans "everyAppliance".
  everyAppliance = everyAppliance.sort();
  // La fonction "sort()" range alphabétiquement les appareils.
  everyAppliance = [...new Set(everyAppliance)];
  // Finalement, "new Set" élimine les doublons.
  // Mais cela crée un ensemble. Il faut donc l'encadrer pour créer le tableau final.

  // Constante globale pour le tableau des divers tags affichés.
  const chosenTags = [];

  // Variable globale pour les tags "Appareils".
  let eachTag = '';

  // Après un clic sur l'un des éléments du menu déroulant "Appareils",
  // le tag correspondant est affiché au-dessus.
  function showTag(e) {
    e.preventDefault();
    e.stopPropagation();
    eachTag = e.target.innerText;
    const tagLine = document.querySelector('#tagLine');
    if (chosenTags.indexOf(eachTag) !== -1) {
      // eslint-disable-next-line no-alert
      alert('Appareil déjà choisi !');
      return;
    }
    // Rajoute l'élément "eachTag" à la fin du tableau "chosenTags".
    chosenTags.push(eachTag);
    const chosenTag = document.createElement('span');
    chosenTag.className = 'chosen-tag';
    chosenTag.id = 'chosen-tag-2';
    const tagText = document.createElement('span');
    tagText.className = 'tag-text';
    tagText.innerText = eachTag;
    const tagImg = document.createElement('img');
    tagImg.className = 'tag-img';
    tagImg.src = 'Images/CloseTag.png';

    // Supprime le tag avec un clic sur l'icône de fermeture.
    // eslint-disable-next-line no-inner-declarations
    function closeTag() {
      // Supprime le span "chosenTag" de la ligne "tagLine".
      tagLine.removeChild(chosenTag);
      const tagIndex = chosenTags.indexOf(eachTag);
      // Supprime l'élément "eachTag" du tableau "chosenTags" en fonction de son index.
      chosenTags.splice(tagIndex, 1);
    }
    tagImg.addEventListener('click', closeTag);

    chosenTag.appendChild(tagText);
    chosenTag.appendChild(tagImg);
    tagLine.appendChild(chosenTag);
  }

  // Ouvre le menu déroulant et crée la liste des appareils.
  function fullMenu() {
    // Ci-dessous, l'enfant "menuOpen" remplace l'enfant "menu".
    dropdownLine.replaceChild(menuOpen, menu);
    fullList.innerText = '';

    // eslint-disable-next-line no-restricted-syntax
    for (const appli of everyAppliance) {
      const dropLine = document.createElement('span');
      dropLine.className = 'exp-drop-line';
      dropLine.innerText = appli;
      fullList.appendChild(dropLine);

      dropLine.addEventListener('click', showTag);
    }
  }

  // Un clic sur l'input ne se propage pas à son parent.
  function clickInput(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  input.addEventListener('click', clickInput);

  // Referme le menu déroulant en cliquant dessus ou ailleurs.
  function closeMenu(el) {
    el.preventDefault();
    if (dropdownLine.contains(menuOpen)) {
      dropdownLine.replaceChild(menu, menuOpen);
    }
  }
  document.addEventListener('click', closeMenu);

  // Montre le menu déroulant rempli dynamiquement.
  function showMenu(el) {
    el.preventDefault();
    fullMenu();
  }
  menu.addEventListener('focus', showMenu);
}());

// Fonction de création et affichage du menu déroulant "Ustensiles", fermé et ouvert.
// C'est une fonction "auto-exécutante" comme les 2 au dessus.
(function menuUste() {
  const dropdownLine = document.querySelector('#dropdown-line');
  const menu = document.createElement('a');
  menu.href = '';
  menu.className = 'dropdown-closed';
  menu.id = 'drop-uste-closed';
  const title = document.createElement('span');
  title.className = 'drop-title';
  title.innerText = 'Ustensiles';
  const downArrow = document.createElement('img');
  downArrow.className = 'down-arrow';
  downArrow.src = 'Images/DownArrow.png';
  downArrow.alt = '';

  menu.appendChild(title);
  menu.appendChild(downArrow);
  dropdownLine.appendChild(menu);

  const menuOpen = document.createElement('a');
  menuOpen.href = '';
  menuOpen.className = 'dropdown-open';
  menuOpen.id = 'drop-uste-open';
  const firstLine = document.createElement('div');
  firstLine.className = 'drop-open-1stLine';
  const input = document.createElement('input');
  input.className = 'drop-input';
  input.id = 'drop3-input';
  input.type = 'text';
  input.placeholder = 'Rechercher un ustensile';
  const upArrow = document.createElement('img');
  upArrow.className = 'up-arrow';
  upArrow.src = 'Images/UpArrow.png';
  upArrow.alt = '';
  const fullList = document.createElement('div');
  fullList.className = 'expanded-drop';
  fullList.id = 'expanded-drop3';

  firstLine.appendChild(input);
  firstLine.appendChild(upArrow);
  menuOpen.appendChild(firstLine);
  menuOpen.appendChild(fullList);

  let everyUstensil = recipes.map((recipe) => recipe.ustensils);
  // Dans le tableau "recipes" des recettes, la fonction "map()" prend chaque élément,
  // donc une recette, et récupère sa propriété "ustensils", qu'il inclut dans "everyUstensil".
  everyUstensil = everyUstensil.flat();
  // La fonction "flat()" permet "d'aplatir" le tableau à un seul niveau en récupérant
  // les données sous forme de liste.
  everyUstensil = everyUstensil.sort();
  // La fonction "sort()" range alphabétiquement les ustensiles.
  everyUstensil = [...new Set(everyUstensil)];
  // Finalement, "new Set" élimine les doublons.
  // Mais cela crée un ensemble. Il faut donc l'encadrer pour créer le tableau final.

  // Constante globale pour le tableau des divers tags affichés.
  const chosenTags = [];

  // Variable globale pour les tags "Appareils".
  let eachTag = '';

  // Après un clic sur l'un des éléments du menu déroulant "Appareils",
  // le tag correspondant est affiché au-dessus.
  function showTag(e) {
    e.preventDefault();
    e.stopPropagation();
    eachTag = e.target.innerText;
    const tagLine = document.querySelector('#tagLine');
    if (chosenTags.indexOf(eachTag) !== -1) {
      // eslint-disable-next-line no-alert
      alert('Ustensile déjà choisi !');
      return;
    }
    // Rajoute l'élément "eachTag" à la fin du tableau "chosenTags".
    chosenTags.push(eachTag);
    const chosenTag = document.createElement('span');
    chosenTag.className = 'chosen-tag';
    chosenTag.id = 'chosen-tag-3';
    const tagText = document.createElement('span');
    tagText.className = 'tag-text';
    tagText.innerText = eachTag;
    const tagImg = document.createElement('img');
    tagImg.className = 'tag-img';
    tagImg.src = 'Images/CloseTag.png';

    // Supprime le tag avec un clic sur l'icône de fermeture.
    // eslint-disable-next-line no-inner-declarations
    function closeTag() {
      // Supprime le span "chosenTag" de la ligne "tagLine".
      tagLine.removeChild(chosenTag);
      const tagIndex = chosenTags.indexOf(eachTag);
      // Supprime l'élément "eachTag" du tableau "chosenTags" en fonction de son index.
      chosenTags.splice(tagIndex, 1);
    }
    tagImg.addEventListener('click', closeTag);

    chosenTag.appendChild(tagText);
    chosenTag.appendChild(tagImg);
    tagLine.appendChild(chosenTag);
  }

  // Ouvre le menu déroulant et crée la liste des ustensiles.
  function fullMenu() {
    // Ci-dessous, l'enfant "menuOpen" remplace l'enfant "menu".
    dropdownLine.replaceChild(menuOpen, menu);
    fullList.innerText = '';

    // eslint-disable-next-line no-restricted-syntax
    for (const appli of everyUstensil) {
      const dropLine = document.createElement('span');
      dropLine.className = 'exp-drop-line';
      dropLine.innerText = appli;
      fullList.appendChild(dropLine);

      dropLine.addEventListener('click', showTag);
    }
  }

  // Un clic sur l'input ne se propage pas à son parent.
  function clickInput(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  input.addEventListener('click', clickInput);

  // Referme le menu déroulant en cliquant dessus ou ailleurs.
  function closeMenu(el) {
    el.preventDefault();
    if (dropdownLine.contains(menuOpen)) {
      dropdownLine.replaceChild(menu, menuOpen);
    }
  }
  document.addEventListener('click', closeMenu);

  // Montre le menu déroulant rempli dynamiquement.
  function showMenu(el) {
    el.preventDefault();
    fullMenu();
  }
  menu.addEventListener('focus', showMenu);
}());

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
