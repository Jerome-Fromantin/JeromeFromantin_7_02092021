Ce travail est réalisé dans le cadre de la formation "Développeur d'applications front-end" d'OpenClassrooms.

Ce projet 07 consiste tout d'abord en l'intégration d'une maquette pour la réalisation d'un site de recettes de cuisine, mais surtout en la création de deux implémentations d'un algorithme de recherche afin de privilégier la plus rapide.
Du JavaScript est bien sûr utilisé pour le rendre fonctionnel.

Instructions pour utiliser Live Server de VSCode et pour compiler :
- Pour modifier le navigateur ouvert par le serveur :
    Menu Fichier > Préférences > Paramètres,
    Extensions > Live Server Config > Custom Browser,
    Choisir "chrome" ou "par défaut" pour Firefox.
- Pour lancer le serveur, Ctrl+Shift+P puis cliquer sur "Live Server".
- Puis pour compiler :
    Dans le dossier "Projet07", faire Shift+clic-droit, puis cliquer sur "Ouvrir une fenêtre de commandes ici".
    A chaque modification d'un fichier JS, taper "npm run dev" ou "npm run watch".

Pour utiliser Sass dans VSCode :
- Cliquer sur le menu "Terminal" puis "Nouveau terminal".
- Dans le terminal, coller la commande : ./dart-sass/sass sass/styles.scss styles.css --watch

Travail réalisé :
- Création de ce fichier Readme,
- Début d'intégration (HTML et CSS) de la page d'accueil,
- Création du repository sur GitHub,
- Premier dépôt d'images du site,
- Premier dépôt des fichiers HTML, CSS et JS,
- Hébergement du travail sur Git Pages,
- Création du contenu d'une carte recette << en dur >> pour les styles CSS,
- Début de mise en place du JS avec pattern factory pour les cartes recettes,
- Transformation du fichier "recipes.js" en "recipes.json" et correction d'erreurs dans les 20 premières recettes,
- Affichage partiel des 50 recettes en dynamique grâce au JavaScript,
- Installation de Sass pour le CSS,
- Installation du transpilateur Webpack,
- Corrections d'erreurs dans les recettes 21 à 40,
- Installation et configuration de ES Lint et Prettier pour le JS,
- Correction du code JS en concordance,
- Corrections d'erreurs dans les recettes 41 à 50,
- Finition de l'affichage dynamique des recettes,
- Affichage << en dur >> des 3 menus déroulants,
- Finition de l'affichage dynamique des 3 menus déroulants,
- Début de réflexion sur l'algorithme de "recherche séquentielle",
- Ajout d'un dossier "Algorithme" contenant plusieurs fichiers texte de réflexions sur l'algorithme et ses implémentations à mettre en place,
- Affichage et fermeture dynamique des 3 types de tags par clic dans le menu déroulant correspondant,
- Ajout d'un contrôle des tags affichés empêchant les doublons,
- Réorganisation de chaque menu déroulant pour la mise en place d'un champ de recherche,
- Correction de défauts dans les champs de recherche des menus déroulants.

Travail à faire :
- Création de 2 versions d'un algorithme de recherche,
- Et d'autres choses encore...