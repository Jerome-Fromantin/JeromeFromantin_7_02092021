/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */
// Récupération des données "recipes" du fichier.
import { recipes } from '../recipes';

// Récupération des données dynamiques pour chaque carte recette.
import RecipeFactory from './recipeFactory';

// Récupération de l'implémentation 1 de l'algorithme de recherche : tri des menus et des recettes.
import triParBoucle from '../implementation1';

// Constante globale pour récupérer le contenu de l'input principal.
const searchInput = document.querySelector('#search-input');

// Récupère le contenu du champ de recherche principal durant la frappe.
// FONCTION DESACTIVEE !!
/*
function getSearchInputText(el) {
  el.preventDefault();
  // eslint-disable-next-line no-console
  console.log(el.target.value);
}
searchInput.addEventListener('input', getSearchInputText);
*/

// Listener utilisant l'implémentation 1.
searchInput.addEventListener('input', () => { triParBoucle(showRecipes2); });

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

// Constantes globales pour les 3 tableaux des divers tags affichés.
const chosenTags1 = [];
const chosenTags2 = [];
const chosenTags3 = [];

// Variable globale pour chaque tag quel que soit le tableau.
let eachTag = '';

// Constante globale pour la partie affichant les recettes.
const mainSection = document.querySelector('#main-section');

// Variables globales pour les tableaux des recettes triées par les tags.
// let newTagRecipes = [];
let newTagRecipes1 = [];
let newTagRecipes2 = [];
let newTagRecipes3 = [];

// Après un clic sur l'un des éléments du menu déroulant "Ingrédients",
// le tag correspondant est affiché au-dessus et les recettes sont triées en conséquence.
// A AMELIORER : Le tri fonctionne pour UN tag, pas pour plusieurs...
function showTag1(e) {
  e.preventDefault();
  e.stopPropagation();
  eachTag = e.target.innerText;
  const tagLine = document.querySelector('#tagLine');
  // Si le tag est déjà présent, une alerte est affichée mais pas le tag.
  if (chosenTags1.indexOf(eachTag) !== -1) {
    // eslint-disable-next-line no-alert
    alert('Ingrédient déjà choisi !');
    return;
  }

  // Rajoute l'élément "eachTag" à la fin du tableau "chosenTags1"
  // et ajoute "visuellement" le tag dans la ligne.
  chosenTags1.push(eachTag);
  const chosenTag1 = document.createElement('span');
  chosenTag1.className = 'chosen-tag-1';
  const tagText = document.createElement('span');
  tagText.className = 'tag-text';
  tagText.innerText = eachTag;
  const tagImg = document.createElement('img');
  tagImg.className = 'tag-img';
  tagImg.src = 'Images/CloseTag.png';

  // TEST !!
  mainSection.innerText = '';
  newTagRecipes1 = [];

  //MISE EN COMMENTAIRE !!
  /* for (const recipe of recipes) {
    let tagsStatus = true;
    for (const tag of chosenTags1) {
      for (const ingred of recipe.ingredients) {
        if (ingred.ingredient.includes(tag)) {
          tagsStatus = true;
          newTagRecipes.push(recipe);
          break;
        }
        else {
          tagsStatus = false;
        }
      }
      if (tagsStatus === false) {
        break;
      }
    }
    if (tagsStatus === true) {
      newTagRecipes.push(recipe);
    }
    if (tagsStatus === false) {
      // eslint-disable-next-line no-continue
      continue;
    } */
    // Si chacun des tags présents est inclus dans le nom de la recette,
    // la recette est incluse dans le tableau des recettes triées par les tags.
    /* const recipeName = (element) => recipe.name.includes(element);
    if (chosenTags.every(recipeName) === true) {
      newTagRecipes.push(recipe);
    } */

    // Si chacun des tags présents est inclus dans la description de la recette,
    // la recette est incluse dans le tableau des recettes triées par les tags.
    /* const recipeDescr = (element) => recipe.description.includes(element);
    if (chosenTags.every(recipeDescr) === true) {
      newTagRecipes.push(recipe);
    } */

    // DIFFERENCE IMPORTANTE AVEC LES INGREDIENTS !!
    // Si chacun des tags présents est inclus dans UN DES ingrédients de la recette,
    // la recette est incluse dans le tableau des recettes triées par les tags.
    // eslint-disable-next-line no-restricted-syntax
    /* for (const ingred of recipe.ingredients) {
      if (ingred.ingredient.includes(eachTag)) {
        console.log('test ingr');
        newTagRecipes.push(recipe);
      }
      const recipeIngr = (element) => ingred.ingredient.includes(element);
      if (chosenTags.every(recipeIngr) === true) {
        console.log('test ingr');
        newTagRecipes.push(recipe);
      }
    } */
  /* } */
  // Les doublons sont éliminés.
  /* newTagRecipes = [...new Set(newTagRecipes)];
  showRecipes2(newTagRecipes); */
  //FIN DE MISE EN COMMENTAIRE !!

  // Supprime le tag avec un clic sur l'icône de fermeture.
  // eslint-disable-next-line no-inner-declarations
  function closeTag() {
    const tagIndex = chosenTags1.indexOf(chosenTag1.innerText);
    // Supprime le span "chosenTag1" de la ligne "tagLine".
    tagLine.removeChild(chosenTag1);
    // Supprime l'élément "eachTag" du tableau "chosenTags1" en fonction de son index.
    chosenTags1.splice(tagIndex, 1);

    mainSection.innerText = '';
    newTagRecipes1 = [];

    if (chosenTags1.length === 0) {
      showRecipes2();
    }
    else {
      for (const recipe of recipes) {
        /* const recipeName = (element) => recipe.name.includes(element);
        if (chosenTags.every(recipeName) === true) {
          newTagRecipes.push(recipe);
        } */

        /* const recipeDescr = (element) => recipe.description.includes(element);
        if (chosenTags.every(recipeDescr) === true) {
          newTagRecipes.push(recipe);
        } */

        // eslint-disable-next-line no-restricted-syntax
        /* for (const ingred of recipe.ingredients) {
          if (ingred.ingredient.includes(eachTag)) {
            console.log('test ingr close');
            newTagRecipes.push(recipe);
          }
          // const recipeIngr = (element) => ingred.ingredient.includes(element);
          // if (chosenTags.every(recipeIngr) === true) {
            // console.log('test ingr');
            // newTagRecipes.push(recipe);
          // }
        } */

        // eslint-disable-next-line no-restricted-syntax
        /* for (const ingred of recipe.ingredients) {
          const recipeIngr = (element) => ingred.ingredient.includes(element);
          if (chosenTags.every(recipeIngr) === true) {
            console.log('test ingr');
            newTagRecipes.push(recipe);
          }
        } */
        newTagRecipes1 = [...new Set(newTagRecipes1)];
        showRecipes2(newTagRecipes1);
      }
    }
  }
  tagImg.addEventListener('click', closeTag);
  // FIN DE TEST !!

  chosenTag1.appendChild(tagText);
  chosenTag1.appendChild(tagImg);
  tagLine.appendChild(chosenTag1);

  findByTags();
}

// TEST TEST !!
function ingrRecipes(chosenTags1, recipes) {
  if (chosenTags1.length !== 0) {
    for (const recipe of recipes) {
      // Pour chaque recette, on crée le tableau de ses noms d'ingrédients.
      let everyRecipeIngr = recipe.ingredients;
      everyRecipeIngr = everyRecipeIngr.flat();
      everyRecipeIngr = everyRecipeIngr.map((ingr) => ingr.ingredient);
      everyRecipeIngr = everyRecipeIngr.sort();

      // Si chacun des tags affichés est présent dans la recette,
      // elle est ajoutée au tableau des recettes triées par tags.
      const recipeIngr = (element) => everyRecipeIngr.includes(element);
      if (chosenTags1.every(recipeIngr) === true) {
        newTagRecipes1.push(recipe);
      }
    }
    newTagRecipes1 = [...new Set(newTagRecipes1)];
  }

  return newTagRecipes1;
}
function appaRecipes(chosenTags2, newTagRecipes1) {
  // Si absence de tags d'ingrédients.
  if (chosenTags1.length === 0) {
    newTagRecipes1 = recipes;
  }
  if (chosenTags2.length !== 0) {
    for (const recipe of newTagRecipes1) {
      // Pour chaque recette, on récupère son nom d'appareil (un seul par recette).
      const everyRecipeApp = recipe.appliance;
      for (const tag of chosenTags2) {
        // Si le nom d'appareil contient le tag,
        // la recette est ajoutée au tableau des recettes triées par tag.
        if (everyRecipeApp.includes(tag)) {
          newTagRecipes2.push(recipe);
        }
      }
    }
    newTagRecipes2 = [...new Set(newTagRecipes2)];
  }

  return newTagRecipes2;
}
function usteRecipes(chosenTags3, newTagRecipes2) {
  // Si absence de tags d'ingrédients et/ou d'appareils.
  if (chosenTags1.length === 0) {
    newTagRecipes1 = recipes;
    if (chosenTags2.length === 0) {
      newTagRecipes2 = recipes;
    }
  }
  else if (chosenTags2.length === 0) {
    newTagRecipes2 = newTagRecipes1;
  }
  if (chosenTags3.length !== 0) {
    for (const recipe of newTagRecipes2) {
      // Pour chaque recette, on crée le tableau de ses noms d'ustensiles.
      let everyRecipeUste = recipe.ustensils;
      everyRecipeUste = everyRecipeUste.sort();

      // Si chacun des tags affichés est présent dans la recette,
      // elle est ajoutée au tableau des recettes triées par tags.
      const recipeUste = (element) => everyRecipeUste.includes(element);
      if (chosenTags3.every(recipeUste) === true) {
        newTagRecipes3.push(recipe);
      }
    }
    newTagRecipes3 = [...new Set(newTagRecipes3)];
  }
  else {
    newTagRecipes3 = newTagRecipes2;
  }
  console.log(newTagRecipes1);
  console.log(newTagRecipes2);
  console.log(newTagRecipes3);

  return newTagRecipes3;
}

function findByTags() {
  ingrRecipes(chosenTags1, recipes);
  appaRecipes(chosenTags2, newTagRecipes1);
  usteRecipes(chosenTags3, newTagRecipes2);
  // showRecipes2(newTagRecipes3);
  // showRecipes2(newTagRecipes2);
  showRecipes2(newTagRecipes3);
}
// findByTags();
// FIN TEST TEST !!

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

  // Ouvre le menu déroulant et ferme les autres s'ils sont ouverts.
  function openMenu() {
    if (dropdownLine.contains(menuOpen2)) {
      dropdownLine.replaceChild(menu2, menuOpen2);
    }
    if (dropdownLine.contains(menuOpen3)) {
      dropdownLine.replaceChild(menu3, menuOpen3);
    }
    // Ci-dessous, l'enfant "menuOpen1" remplace l'enfant "menu1".
    dropdownLine.replaceChild(menuOpen1, menu1);
  }

  // Montre le menu déroulant ouvert.
  function showMenu(el) {
    el.preventDefault();
    openMenu();
  }
  menu1.addEventListener('focus', showMenu);

  // Un clic sur l'input ne se propage pas à son parent.
  function clickInput(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  input1.addEventListener('click', clickInput);

  // Récupère le contenu de l'input du menu déroulant durant la frappe
  // pour faire le tri dans la liste des ingrédients affichés.
  // AJOUTER : ET DANS LES RECETTES !!!
  function getInputText() {
    const searchMenu = input1.value;

    // Constante utilisée pour contenir les ingrédients triés.
    const newIngredients = [];

    // Variable utilisée pour contenir les recettes triées.
    let menuInputRecipes = [];

    // On vide la liste.
    fullList1.innerText = '';

    // Si 1 ou 2 caractères sont tapés.
    if (searchMenu.length <= 2) {
      for (const ingredient of everyIngredient) {
        const dropLine = document.createElement('span');
        dropLine.className = 'exp-drop-line';
        dropLine.innerText = ingredient;
        fullList1.appendChild(dropLine);

        dropLine.addEventListener('click', showTag1);
      }
    }
    // Si 3 caractères ou plus sont tapés.
    // eslint-disable-next-line no-else-return
    else {
      // La boucle ci-dessous fonctionne !
      /* for (const newIngred of everyIngredient) {
        if (newIngred.includes(searchMenu)) {
          newIngredients.push(newIngred);
          const dropLine = document.createElement('span');
          dropLine.className = 'exp-drop-line';
          dropLine.innerText = newIngred;
          fullList1.appendChild(dropLine);
          menuOpen1.appendChild(fullList1);

          dropLine.addEventListener('click', showTag1);
        }
      } */
      // Boucle en construction... Ne fonctionne pas !
      for (const recipe of recipes) {
        for (const newIngred of everyIngredient) {
          if (newIngred.includes(searchMenu)) {
            newIngredients.push(newIngred);
            const dropLine = document.createElement('span');
            dropLine.className = 'exp-drop-line';
            dropLine.innerText = newIngred;
            fullList1.appendChild(dropLine);
            menuOpen1.appendChild(fullList1);

            dropLine.addEventListener('click', showTag1);

            menuInputRecipes.push(recipe);
          }
        }
      }
      menuInputRecipes = [...new Set(menuInputRecipes)];
      showRecipes2(menuInputRecipes);
      // Fin de boucle...
    }
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

// Après un clic sur l'un des éléments du menu déroulant "Appareils",
// le tag correspondant est affiché au-dessus et les recettes sont triées en conséquence.
function showTag2(e) {
  e.preventDefault();
  e.stopPropagation();
  eachTag = e.target.innerText;
  const tagLine = document.querySelector('#tagLine');
  // Si le tag est déjà présent, une alerte est affichée mais pas le tag.
  if (chosenTags2.indexOf(eachTag) !== -1) {
    // eslint-disable-next-line no-alert
    alert('Appareil déjà choisi !');
    return;
  }
  // Rajoute l'élément "eachTag" à la fin du tableau "chosenTags2"
  // et ajoute "visuellement" le tag dans la ligne.
  chosenTags2.push(eachTag);
  const chosenTag2 = document.createElement('span');
  chosenTag2.className = 'chosen-tag-2';
  const tagText = document.createElement('span');
  tagText.className = 'tag-text';
  tagText.innerText = eachTag;
  const tagImg = document.createElement('img');
  tagImg.className = 'tag-img';
  tagImg.src = 'Images/CloseTag.png';

  // TEST !!
  mainSection.innerText = '';
  newTagRecipes2 = [];

  //MISE EN COMMENTAIRE !!
  /* for (const recipe of recipes) {
    const appareils = [recipe.appliance];
    let tagsStatus = true;
    for (const tag of chosenTags2) {
      for (const appa of appareils) {
        if (appa.includes(tag)) {
          tagsStatus = true;
          newTagRecipes.push(recipe);
          break;
        }
        else {
          tagsStatus = false;
        }
      }
      if (tagsStatus === false) {
        break;
      }
    }
    if (tagsStatus === true) {
      newTagRecipes.push(recipe);
    }
    if (tagsStatus === false) {
      // eslint-disable-next-line no-continue
      continue;
    }
  }
  // Les doublons sont éliminés.
  newTagRecipes = [...new Set(newTagRecipes)];
  showRecipes2(newTagRecipes); */
  //FIN DE MISE EN COMMENTAIRE !!

  // Supprime le tag avec un clic sur l'icône de fermeture.
  // eslint-disable-next-line no-inner-declarations
  function closeTag() {
    const tagIndex = chosenTags2.indexOf(chosenTag2.innerText);
    // Supprime le span "chosenTag2" de la ligne "tagLine".
    tagLine.removeChild(chosenTag2);
    // Supprime l'élément "eachTag" du tableau "chosenTags2" en fonction de son index.
    chosenTags2.splice(tagIndex, 1);

    mainSection.innerText = '';
    newTagRecipes2 = [];

    if (chosenTags2.length === 0) {
      showRecipes2();
    }
    else {
      for (const recipe of recipes) {
        /* const recipeName = (element) => recipe.name.includes(element);
        if (chosenTags.every(recipeName) === true) {
          newTagRecipes.push(recipe);
        } */

        /* const recipeDescr = (element) => recipe.description.includes(element);
        if (chosenTags.every(recipeDescr) === true) {
          newTagRecipes.push(recipe);
        } */

        // eslint-disable-next-line no-restricted-syntax
        /* for (const ingred of recipe.ingredients) {
          if (ingred.ingredient.includes(eachTag)) {
            console.log('test ingr close');
            newTagRecipes.push(recipe);
          }
          // const recipeIngr = (element) => ingred.ingredient.includes(element);
          // if (chosenTags.every(recipeIngr) === true) {
            // console.log('test ingr');
            // newTagRecipes.push(recipe);
          // }
        } */

        // eslint-disable-next-line no-restricted-syntax
        /* for (const ingred of recipe.ingredients) {
          const recipeIngr = (element) => ingred.ingredient.includes(element);
          if (chosenTags.every(recipeIngr) === true) {
            console.log('test ingr');
            newTagRecipes.push(recipe);
          }
        } */
        newTagRecipes2 = [...new Set(newTagRecipes2)];
        showRecipes2(newTagRecipes2);
      }
    }
  }
  tagImg.addEventListener('click', closeTag);
  // FIN DE TEST !!

  chosenTag2.appendChild(tagText);
  chosenTag2.appendChild(tagImg);
  tagLine.appendChild(chosenTag2);

  findByTags();
}

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

  // Ouvre le menu déroulant et ferme les autres s'ils sont ouverts.
  function openMenu() {
    if (dropdownLine.contains(menuOpen1)) {
      dropdownLine.replaceChild(menu1, menuOpen1);
    }
    if (dropdownLine.contains(menuOpen3)) {
      dropdownLine.replaceChild(menu3, menuOpen3);
    }
    // Ci-dessous, l'enfant "menuOpen2" remplace l'enfant "menu2".
    dropdownLine.replaceChild(menuOpen2, menu2);
  }

  // Montre le menu déroulant ouvert.
  function showMenu(el) {
    el.preventDefault();
    openMenu();
  }
  menu2.addEventListener('focus', showMenu);

  // Un clic sur l'input ne se propage pas à son parent.
  function clickInput(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  input2.addEventListener('click', clickInput);

  // Récupère le contenu de l'input du menu déroulant durant la frappe
  // pour faire le tri dans la liste des appareils affichés.
  function getInputText() {
    const searchMenu = input2.value;

    // Constante utilisée pour contenir les appareils triés.
    const newAppliances = [];

    // On vide la liste.
    fullList2.innerText = '';

    // Si 1 ou 2 caractères sont tapés.
    if (searchMenu.length <= 2) {
      for (const appli of everyAppliance) {
        const dropLine = document.createElement('span');
        dropLine.className = 'exp-drop-line';
        dropLine.innerText = appli;
        fullList2.appendChild(dropLine);

        dropLine.addEventListener('click', showTag2);
      }
    }
    // Si 3 caractères ou plus sont tapés.
    // eslint-disable-next-line no-else-return
    else {
      for (const newAppli of everyAppliance) {
        if (newAppli.includes(searchMenu)) {
          newAppliances.push(newAppli);
          const dropLine = document.createElement('span');
          dropLine.className = 'exp-drop-line';
          dropLine.innerText = newAppli;
          fullList2.appendChild(dropLine);
          menuOpen2.appendChild(fullList2);

          dropLine.addEventListener('click', showTag2);
        }
      }
    }
  }
  input2.addEventListener('input', getInputText);

  // Referme le menu déroulant en cliquant dessus ou ailleurs.
  function closeMenu(el) {
    el.preventDefault();
    if (dropdownLine.contains(menuOpen2)) {
      dropdownLine.replaceChild(menu2, menuOpen2);
    }
  }
  document.addEventListener('click', closeMenu);
}());

// Après un clic sur l'un des éléments du menu déroulant "Ustensiles",
// le tag correspondant est affiché au-dessus et les recettes sont triées en conséquence.
// A AMELIORER : Le tri fonctionne pour UN tag, pas pour plusieurs...
function showTag3(e) {
  e.preventDefault();
  e.stopPropagation();
  eachTag = e.target.innerText;
  const tagLine = document.querySelector('#tagLine');
  // Si le tag est déjà présent, une alerte est affichée mais pas le tag.
  if (chosenTags3.indexOf(eachTag) !== -1) {
    // eslint-disable-next-line no-alert
    alert('Ustensile déjà choisi !');
    return;
  }
  // Rajoute l'élément "eachTag" à la fin du tableau "chosenTags3"
  // et ajoute "visuellement" le tag dans la ligne.
  chosenTags3.push(eachTag);
  const chosenTag3 = document.createElement('span');
  chosenTag3.className = 'chosen-tag-3';
  const tagText = document.createElement('span');
  tagText.className = 'tag-text';
  tagText.innerText = eachTag;
  const tagImg = document.createElement('img');
  tagImg.className = 'tag-img';
  tagImg.src = 'Images/CloseTag.png';

  // TEST !!
  mainSection.innerText = '';
  newTagRecipes3 = [];

  //MISE EN COMMENTAIRE !!
  /* for (const recipe of recipes) {
    let tagsStatus = true;
    for (const tag of chosenTags3) {
      for (const uste of recipe.ustensils) {
        if (uste.includes(tag)) {
          tagsStatus = true;
          newTagRecipes.push(recipe);
          break;
        }
        else {
          tagsStatus = false;
        }
      }
      if (tagsStatus === false) {
        break;
      }
    }
    if (tagsStatus === true) {
      newTagRecipes.push(recipe);
    }
    if (tagsStatus === false) {
      // eslint-disable-next-line no-continue
      continue;
    }
  }
  // Les doublons sont éliminés.
  newTagRecipes = [...new Set(newTagRecipes)];
  showRecipes2(newTagRecipes); */
  //FIN DE MISE EN COMMENTAIRE !!

  // Supprime le tag avec un clic sur l'icône de fermeture.
  // eslint-disable-next-line no-inner-declarations
  function closeTag() {
    const tagIndex = chosenTags3.indexOf(chosenTag3.innerText);
    // Supprime le span "chosenTag3" de la ligne "tagLine".
    tagLine.removeChild(chosenTag3);
    // Supprime l'élément "eachTag" du tableau "chosenTags3" en fonction de son index.
    chosenTags3.splice(tagIndex, 1);

    mainSection.innerText = '';
    newTagRecipes3 = [];

    if (chosenTags3.length === 0) {
      showRecipes2();
    }
    else {
      for (const recipe of recipes) {
        /* const recipeName = (element) => recipe.name.includes(element);
        if (chosenTags.every(recipeName) === true) {
          newTagRecipes.push(recipe);
        } */

        /* const recipeDescr = (element) => recipe.description.includes(element);
        if (chosenTags.every(recipeDescr) === true) {
          newTagRecipes.push(recipe);
        } */

        // eslint-disable-next-line no-restricted-syntax
        /* for (const ingred of recipe.ingredients) {
          if (ingred.ingredient.includes(eachTag)) {
            console.log('test ingr close');
            newTagRecipes.push(recipe);
          }
          // const recipeIngr = (element) => ingred.ingredient.includes(element);
          // if (chosenTags.every(recipeIngr) === true) {
            // console.log('test ingr');
            // newTagRecipes.push(recipe);
          // }
        } */

        // eslint-disable-next-line no-restricted-syntax
        /* for (const ingred of recipe.ingredients) {
          const recipeIngr = (element) => ingred.ingredient.includes(element);
          if (chosenTags.every(recipeIngr) === true) {
            console.log('test ingr');
            newTagRecipes.push(recipe);
          }
        } */
        newTagRecipes3 = [...new Set(newTagRecipes3)];
        showRecipes2(newTagRecipes3);
      }
    }
  }
  tagImg.addEventListener('click', closeTag);
  // FIN DE TEST !!

  chosenTag3.appendChild(tagText);
  chosenTag3.appendChild(tagImg);
  tagLine.appendChild(chosenTag3);

  findByTags();
}

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

  // Ouvre le menu déroulant et ferme les autres s'ils sont ouverts.
  function openMenu() {
    if (dropdownLine.contains(menuOpen1)) {
      dropdownLine.replaceChild(menu1, menuOpen1);
    }
    if (dropdownLine.contains(menuOpen2)) {
      dropdownLine.replaceChild(menu2, menuOpen2);
    }
    // Ci-dessous, l'enfant "menuOpen3" remplace l'enfant "menu3".
    dropdownLine.replaceChild(menuOpen3, menu3);
  }

  // Montre le menu déroulant ouvert.
  function showMenu(el) {
    el.preventDefault();
    openMenu();
  }
  menu3.addEventListener('focus', showMenu);

  // Un clic sur l'input ne se propage pas à son parent.
  function clickInput(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  input3.addEventListener('click', clickInput);

  // Récupère le contenu de l'input du menu déroulant durant la frappe
  // pour faire le tri dans la liste des ustensiles affichés.
  function getInputText() {
    const searchMenu = input3.value;

    // Constante utilisée pour contenir les ustensiles triés.
    const newUstensils = [];

    // On vide la liste.
    fullList3.innerText = '';

    // Si 1 ou 2 caractères sont tapés.
    if (searchMenu.length <= 2) {
      for (const uste of everyUstensil) {
        const dropLine = document.createElement('span');
        dropLine.className = 'exp-drop-line';
        dropLine.innerText = uste;
        fullList3.appendChild(dropLine);

        dropLine.addEventListener('click', showTag3);
      }
    }
    // Si 3 caractères ou plus sont tapés.
    // eslint-disable-next-line no-else-return
    else {
      for (const newUste of everyUstensil) {
        if (newUste.includes(searchMenu)) {
          newUstensils.push(newUste);
          const dropLine = document.createElement('span');
          dropLine.className = 'exp-drop-line';
          dropLine.innerText = newUste;
          fullList3.appendChild(dropLine);
          menuOpen3.appendChild(fullList3);

          dropLine.addEventListener('click', showTag3);
        }
      }
    }
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

// Montre toutes les cartes de recettes remplies dynamiquement.
// eslint-disable-next-line no-shadow
function showRecipes1(recipes) {
  mainSection.innerText = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const recipe of recipes) {
    const card = fillArticle(recipe);
    mainSection.appendChild(card);
  }
}

// Montre tous les ingrédients dans le premier menu.
function showIngrs(everyIngredient) {
  fullList1.innerText = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const ingredient of everyIngredient) {
    const dropLine = document.createElement('span');
    dropLine.className = 'exp-drop-line';
    dropLine.innerText = ingredient;
    fullList1.appendChild(dropLine);

    dropLine.addEventListener('click', showTag1);
  }
}

// Crée les ingrédients en fonction des recettes affichées.
function showIngrsByRecipe(recettes) {
  const showRec = recettes || recipes;
  let everyIngredient = showRec.map((recipe) => recipe.ingredients);
  everyIngredient = everyIngredient.flat();
  everyIngredient = everyIngredient.map((ingr) => ingr.ingredient);
  everyIngredient = everyIngredient.sort();
  everyIngredient = [...new Set(everyIngredient)];

  showIngrs(everyIngredient);
}

// Montre tous les appareils dans le deuxième menu.
function showApps(everyAppliance) {
  fullList2.innerText = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const appli of everyAppliance) {
    const dropLine = document.createElement('span');
    dropLine.className = 'exp-drop-line';
    dropLine.innerText = appli;
    fullList2.appendChild(dropLine);

    dropLine.addEventListener('click', showTag2);
  }
}

// Crée les appareils en fonction des recettes affichées.
function showAppsByRecipe(recettes) {
  const showRec = recettes || recipes;
  let everyAppliance = showRec.map((recipe) => recipe.appliance);
  everyAppliance = everyAppliance.sort();
  everyAppliance = [...new Set(everyAppliance)];

  showApps(everyAppliance);
}

// Montre tous les ustensiles dans le troisième menu.
function showUstes(everyUstensil) {
  fullList3.innerText = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const uste of everyUstensil) {
    const dropLine = document.createElement('span');
    dropLine.className = 'exp-drop-line';
    dropLine.innerText = uste;
    fullList3.appendChild(dropLine);

    dropLine.addEventListener('click', showTag3);
  }
}

// Crée les ustensiles en fonction des recettes affichées.
function showUstesByRecipe(recettes) {
  const showRec = recettes || recipes;
  let everyUstensil = showRec.map((recipe) => recipe.ustensils);
  everyUstensil = everyUstensil.flat();
  everyUstensil = everyUstensil.sort();
  everyUstensil = [...new Set(everyUstensil)];

  showUstes(everyUstensil);
}

// Montre les cartes remplies dynamiquement, triées par l'input principal ou non.
// Montre les ingrédients, les appareils et les ustensiles en fonction des recettes affichées.
function showRecipes2(newRecipes) {
  const toShow = newRecipes || recipes;
  showRecipes1(toShow);
  showIngrsByRecipe(toShow);
  showAppsByRecipe(toShow);
  showUstesByRecipe(toShow);
}
showRecipes2();
