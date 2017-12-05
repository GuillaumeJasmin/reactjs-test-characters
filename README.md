# Test: créer, modifier et supprimer une liste de personnage.

Temps estimé: 3h

## Détails

Nous souhaitons pouvoir créer, modifier et supprimer une liste de personnages.
Un personnage contient les propriétés suivantes:
 - nom
 - type (humain, animal, ou plante, rien de plus)
 - date de naissance
 - une liste de caractéristiques (inteligent, rapide, etc, la liste n'étant pas définie)

Il faut une page permettant de lister ces personnages, et une page permettant de les editer / supprimer.

Nous devons pouvoir accéder à l'édition d'un personnage via la liste, mais également via un lien http direct.


## Infos techniques:

Tous les packages requis sont présents dans le package.json
Il n'y a pas de back-end à faire (pas besoin de persistance des données).
Pour le style, utilisation des CSS Modules (déjà configuré dans webpack.config). Si besoin: https://github.com/css-modules/css-modules/blob/master/README.md

Points attendus:

Utilisation de Redux pour la gestion des données
Validation des données
Routing
Un peu de style, afin d'avoir une interface agréable.


## Installation des dépendances
npm install

## Lancement de Webpack
Linux & MacOS: npm start
Windows: npm run start-windows

http://localhost:3000