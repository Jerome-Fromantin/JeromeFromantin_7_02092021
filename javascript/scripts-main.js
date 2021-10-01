// Récupération des données "recipes" du fichier.
import { recipes } from '../recipes';

// Récupération des données dynamiques pour chaque carte recette.
import RecipeFactory from './recipeFactory';

// Récupère le contenu du champ de recherche avec le bouton "loupe" ou durant la frappe.
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
function getSearchInputText(el) {
  el.preventDefault();
  // eslint-disable-next-line no-console
  console.log(el.target.value);
}
searchInput.addEventListener('input', getSearchInputText);

// ICI SE TROUVE TESTEE LA FONCTION DE L'IMPLEMENTATION 1.
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
// FIN DE TEST.

// Constantes globales pour les menus.
const dropdownLine = document.querySelector('#dropdown-line');
// Création du 1er menu déroulant.
const menu1 = document.createElement('a');
menu1.href = '';
menu1.className = 'dropdown-closed';
menu1.id = 'drop-ingr-closed';
const title1 = document.createElement('span');
title1.className = 'drop-title';
title1.innerText = 'Ingrédients';
const downArrow1 = document.createElement('img');
downArrow1.className = 'down-arrow';
downArrow1.src = 'Images/DownArrow.png';
downArrow1.alt = '';

menu1.appendChild(title1);
menu1.appendChild(downArrow1);
dropdownLine.appendChild(menu1);

const menuOpen1 = document.createElement('a');
menuOpen1.href = '';
menuOpen1.className = 'dropdown-open';
menuOpen1.id = 'drop-ingr-open';
const firstLine1 = document.createElement('div');
firstLine1.className = 'drop-open-1stLine';
const input1 = document.createElement('input');
input1.className = 'drop-input';
input1.id = 'drop1-input';
input1.type = 'text';
input1.placeholder = 'Rechercher un ingrédient';
const upArrow1 = document.createElement('img');
upArrow1.className = 'up-arrow';
upArrow1.src = 'Images/UpArrow.png';
upArrow1.alt = '';
const fullList1 = document.createElement('div');
fullList1.className = 'expanded-drop';
fullList1.id = 'expanded-drop1';

firstLine1.appendChild(input1);
firstLine1.appendChild(upArrow1);
menuOpen1.appendChild(firstLine1);
menuOpen1.appendChild(fullList1);

// Création du 2ème menu déroulant.
const menu2 = document.createElement('a');
menu2.href = '';
menu2.className = 'dropdown-closed';
menu2.id = 'drop-appa-closed';
const title2 = document.createElement('span');
title2.className = 'drop-title';
title2.innerText = 'Appareils';
const downArrow2 = document.createElement('img');
downArrow2.className = 'down-arrow';
downArrow2.src = 'Images/DownArrow.png';
downArrow2.alt = '';

menu2.appendChild(title2);
menu2.appendChild(downArrow2);
dropdownLine.appendChild(menu2);

const menuOpen2 = document.createElement('a');
menuOpen2.href = '';
menuOpen2.className = 'dropdown-open';
menuOpen2.id = 'drop-appa-open';
const firstLine2 = document.createElement('div');
firstLine2.className = 'drop-open-1stLine';
const input2 = document.createElement('input');
input2.className = 'drop-input';
input2.id = 'drop2-input';
input2.type = 'text';
input2.placeholder = 'Rechercher un appareil';
const upArrow2 = document.createElement('img');
upArrow2.className = 'up-arrow';
upArrow2.src = 'Images/UpArrow.png';
upArrow2.alt = '';
const fullList2 = document.createElement('div');
fullList2.className = 'expanded-drop';
fullList2.id = 'expanded-drop2';

firstLine2.appendChild(input2);
firstLine2.appendChild(upArrow2);
menuOpen2.appendChild(firstLine2);
menuOpen2.appendChild(fullList2);

// Création du 3ème menu déroulant.
const menu3 = document.createElement('a');
menu3.href = '';
menu3.className = 'dropdown-closed';
menu3.id = 'drop-uste-closed';
const title3 = document.createElement('span');
title3.className = 'drop-title';
title3.innerText = 'Ustensiles';
const downArrow3 = document.createElement('img');
downArrow3.className = 'down-arrow';
downArrow3.src = 'Images/DownArrow.png';
downArrow3.alt = '';

menu3.appendChild(title3);
menu3.appendChild(downArrow3);
dropdownLine.appendChild(menu3);

const menuOpen3 = document.createElement('a');
menuOpen3.href = '';
menuOpen3.className = 'dropdown-open';
menuOpen3.id = 'drop-uste-open';
const firstLine3 = document.createElement('div');
firstLine3.className = 'drop-open-1stLine';
const input3 = document.createElement('input');
input3.className = 'drop-input';
input3.id = 'drop3-input';
input3.type = 'text';
input3.placeholder = 'Rechercher un ustensile';
const upArrow3 = document.createElement('img');
upArrow3.className = 'up-arrow';
upArrow3.src = 'Images/UpArrow.png';
upArrow3.alt = '';
const fullList3 = document.createElement('div');
fullList3.className = 'expanded-drop';
fullList3.id = 'expanded-drop3';

firstLine3.appendChild(input3);
firstLine3.appendChild(upArrow3);
menuOpen3.appendChild(firstLine3);
menuOpen3.appendChild(fullList3);

// Fonction d'affichage du menu déroulant "Ingrédients", fermé et ouvert.
// C'est une fonction "auto-exécutante" comme celle ci-dessous en exemple.
// (function example() {
// console.log('Bonjour !');
// }());
(function menuIngr() {
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
    if (dropdownLine.contains(menuOpen2)) {
      dropdownLine.replaceChild(menu2, menuOpen2);
    }
    if (dropdownLine.contains(menuOpen3)) {
      dropdownLine.replaceChild(menu3, menuOpen3);
    }
    // Ci-dessous, l'enfant "menuOpen1" remplace l'enfant "menu1".
    dropdownLine.replaceChild(menuOpen1, menu1);
    fullList1.innerText = '';

    // eslint-disable-next-line no-restricted-syntax
    for (const ingredient of everyIngredient) {
      const dropLine = document.createElement('span');
      dropLine.className = 'exp-drop-line';
      dropLine.innerText = ingredient;
      fullList1.appendChild(dropLine);

      dropLine.addEventListener('click', showTag);
    }
  }

  // Montre le menu déroulant rempli dynamiquement.
  function showMenu(el) {
    el.preventDefault();
    fullMenu();
  }
  menu1.addEventListener('focus', showMenu);

  // Un clic sur l'input ne se propage pas à son parent.
  function clickInput(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  input1.addEventListener('click', clickInput);

  // Récupère le contenu du champ de recherche du menu déroulant durant la frappe.
  // Cette récupération est dans la console.
  function getInputText(el) {
    el.preventDefault();
    // eslint-disable-next-line no-console
    console.log(el.target.value);
  }
  input1.addEventListener('input', getInputText);

  // Referme le menu déroulant en cliquant dessus ou ailleurs.
  function closeMenu(el) {
    el.preventDefault();
    if (dropdownLine.contains(menuOpen1)) {
      dropdownLine.replaceChild(menu1, menuOpen1);
    }
  }
  document.addEventListener('click', closeMenu);
}());

// Fonction d'affichage du menu déroulant "Appareils", fermé et ouvert.
// C'est une fonction "auto-exécutante" comme celle au dessus.
(function menuAppa() {
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
    if (dropdownLine.contains(menuOpen1)) {
      dropdownLine.replaceChild(menu1, menuOpen1);
    }
    if (dropdownLine.contains(menuOpen3)) {
      dropdownLine.replaceChild(menu3, menuOpen3);
    }
    // Ci-dessous, l'enfant "menuOpen2" remplace l'enfant "menu2".
    dropdownLine.replaceChild(menuOpen2, menu2);
    fullList2.innerText = '';

    // eslint-disable-next-line no-restricted-syntax
    for (const appli of everyAppliance) {
      const dropLine = document.createElement('span');
      dropLine.className = 'exp-drop-line';
      dropLine.innerText = appli;
      fullList2.appendChild(dropLine);

      dropLine.addEventListener('click', showTag);
    }
  }

  // Montre le menu déroulant rempli dynamiquement.
  function showMenu(el) {
    el.preventDefault();
    fullMenu();
  }
  menu2.addEventListener('focus', showMenu);

  // Un clic sur l'input ne se propage pas à son parent.
  function clickInput(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  input2.addEventListener('click', clickInput);

  // Récupère le contenu du champ de recherche du menu déroulant durant la frappe.
  // Cette récupération est dans la console.
  function getInputText(el) {
    el.preventDefault();
    // eslint-disable-next-line no-console
    console.log(el.target.value);
  }
  input2.addEventListener('input', getInputText);

  // Referme le menu déroulant en cliquant dessus ou ailleurs.
  // Referme le menu déroulant en cliquant dessus ou ailleurs.
  function closeMenu(el) {
    el.preventDefault();
    if (dropdownLine.contains(menuOpen2)) {
      dropdownLine.replaceChild(menu2, menuOpen2);
    }
  }
  document.addEventListener('click', closeMenu);
}());

// Fonction d'affichage du menu déroulant "Ustensiles", fermé et ouvert.
// C'est une fonction "auto-exécutante" comme les 2 au dessus.
(function menuUste() {
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
    if (dropdownLine.contains(menuOpen1)) {
      dropdownLine.replaceChild(menu1, menuOpen1);
    }
    if (dropdownLine.contains(menuOpen2)) {
      dropdownLine.replaceChild(menu2, menuOpen2);
    }
    // Ci-dessous, l'enfant "menuOpen3" remplace l'enfant "menu3".
    dropdownLine.replaceChild(menuOpen3, menu3);
    fullList3.innerText = '';

    // eslint-disable-next-line no-restricted-syntax
    for (const appli of everyUstensil) {
      const dropLine = document.createElement('span');
      dropLine.className = 'exp-drop-line';
      dropLine.innerText = appli;
      fullList3.appendChild(dropLine);

      dropLine.addEventListener('click', showTag);
    }
  }

  // Montre le menu déroulant rempli dynamiquement.
  function showMenu(el) {
    el.preventDefault();
    fullMenu();
  }
  menu3.addEventListener('focus', showMenu);

  // Un clic sur l'input ne se propage pas à son parent.
  function clickInput(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  input3.addEventListener('click', clickInput);

  // Récupère le contenu du champ de recherche du menu déroulant durant la frappe.
  // Cette récupération est dans la console.
  function getInputText(el) {
    el.preventDefault();
    // eslint-disable-next-line no-console
    console.log(el.target.value);
  }
  input3.addEventListener('input', getInputText);

  // Referme le menu déroulant en cliquant dessus ou ailleurs.
  function closeMenu(el) {
    el.preventDefault();
    if (dropdownLine.contains(menuOpen3)) {
      dropdownLine.replaceChild(menu3, menuOpen3);
    }
  }
  document.addEventListener('click', closeMenu);
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
