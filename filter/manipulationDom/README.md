# Filtres en manipulant directement le DOM

Cette variante reprend la liste de tâches avec ajout, modification, validation et suppression, puis ajoute trois filtres : toutes, incomplètes et complètes. Elle conserve l'état de complétion dans les attributs `data-*` des éléments HTML et enregistre la liste dans `localStorage` sous la clé `tasksWithFilters`.

## Objectif pédagogique

Ici, le DOM sert de source de vérité. Les actions modifient les éléments de la page; le filtrage parcourt ensuite les éléments `<li>` et les masque ou les affiche selon leur état. La sauvegarde lit les éléments présents dans la liste pour reconstituer les données à enregistrer.

Cette approche permet de pratiquer les événements délégués, les attributs `dataset` et les mises à jour directes du DOM. Comparez-la avec `../transformationDonnées/`, où le tableau de tâches est la source de vérité et où le rendu est reconstruit après une modification.

## Fichiers

- `index.html` définit le formulaire, les boutons de filtre et la liste.
- `todo.mjs` relie les événements de l'interface aux opérations sur la liste et à la sauvegarde.
- `tasks.mjs` construit et insère un élément de tâche dans le DOM.
- `filters.mjs` applique le filtre aux éléments de liste existants.
- `storage.mjs` lit les tâches du DOM pour les sauvegarder dans `localStorage`, puis charge et valide les données enregistrées.

## Lancer la page

Ouvrez `index.html` avec un serveur web local, par exemple Live Server dans VS Code. Bootstrap 5.3.3 est chargé depuis un CDN; une connexion Internet est nécessaire pour ses styles.
