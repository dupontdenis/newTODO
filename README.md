# Liste de tâches : parcours pédagogique

Ce projet rassemble plusieurs versions d'une même application afin de comparer différentes façons de gérer une interface en JavaScript. Les variantes sont des étapes et des pistes de travail distinctes : chacune met l'accent sur une notion particulière.

## Parcours suggéré

1. **Version de base** : créer et supprimer des éléments HTML à partir d'un formulaire. La liste n'est pas conservée après le rechargement.
2. **Persistance avec `localStorage`** (`localstorage/`) : enregistrer les tâches, puis les restaurer au prochain chargement.
3. **Données et rendu** (`transform/`) : garder les tâches dans un tableau JavaScript et reconstruire la liste à partir de ce tableau.
4. **Tâches avec détails** (`TD1/` et `TD2/`) : représenter une tâche avec plusieurs propriétés, puis comparer un détail intégré à la page avec une page de détail séparée.
5. **Filtres** (`filter/`) : comparer deux sources de vérité, le DOM (`manipulationDom/`) ou le tableau de données (`transformationDonnées/`).

On peut suivre ce parcours dans l'ordre, ou commencer directement par la variante correspondant au sujet étudié.

## Version de base

La page d'accueil sert de première étape : elle traite la saisie, empêche l'envoi du formulaire, crée un élément de liste et le supprime lors d'un clic. Les tâches existent uniquement dans le DOM de la page : actualiser celle-ci les efface.

- `index.html` contient le formulaire, la liste et les liens vers les variantes.
- `todo.mjs` gère les événements du formulaire et de la liste ainsi que la création des éléments.
- `style.css` contient les styles propres au projet.

## Variantes

- **localStorage** (`localstorage/`) : ajoute et modifie des éléments du DOM, puis sérialise la liste en JSON pour la retrouver après rechargement.
- **Transformation des données** (`transform/`) : fait du tableau d'objets JavaScript la source des données; une fonction transforme chaque tâche en HTML et une autre partie du code sauvegarde le tableau.
- **TD1** (`TD1/`) : étend le modèle de tâche avec un titre, une description, un identifiant et une date. Le détail est affiché dans la page de la liste.
- **TD2** (`TD2/`) : reprend ces données et ouvre une page de détail distincte. L'identifiant de la tâche est transmis dans l'URL.
- **Filtres par manipulation du DOM** (`filter/manipulationDom/`) : l'état des tâches est porté par les éléments HTML; les filtres masquent ou affichent ces éléments.
- **Filtres par transformation des données** (`filter/transformationDonnées/`) : l'état des tâches est conservé dans un tableau; les filtres sélectionnent les objets à afficher avant de reconstruire la liste.

## Lancement et stockage

Ouvrez la variante souhaitée avec un serveur web local, par exemple Live Server dans VS Code. Les scripts sont des modules JavaScript ES. Bootstrap 5.3.3 est chargé depuis un CDN, donc une connexion Internet est nécessaire pour ses styles.

Les variantes qui utilisent `localStorage` enregistrent leurs données dans le navigateur et pour l'origine utilisée. Les données ne sont pas synchronisées entre appareils. TD1 et TD2 partagent la clé `tasksTD` et le même format de données; les autres variantes utilisent leurs propres clés.
