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

Travail réalisé dans cette branche "implementation_1" :
- Mise en place de l'implémentation sur l'input principal avec la boucle "for...of",
- Mise en place du tri des recettes par tags,
- Mise en place du tri des menus par leur input,
- Ajout des propriétés "toLowerCase()" pour mettre en minuscule et "normalize(...).replace(...)" pour enlever les accents,
- Ajout des tests de comparaison avec l'implémentation 2.

Ce projet est désormais terminé mais peut éventuellement être amélioré.