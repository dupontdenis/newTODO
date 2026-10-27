# Filtres par manipulation du DOM

Cette variante permet d'ajouter, de modifier, de terminer et de supprimer des tâches. Les boutons filtrent la liste selon l'état des tâches : toutes, incomplètes ou complètes. Le filtre est appliqué directement aux éléments HTML. Les tâches sont enregistrées dans `localStorage` sous la clé `tasksWithFilters`.

## Lancer la page

Ouvrez `index.html` avec un serveur web local, par exemple l'extension Live Server de VS Code. Bootstrap 5.3.3 est chargé depuis un CDN, donc une connexion Internet est nécessaire pour ses styles.

## Organisation

- `index.html` définit le formulaire, les boutons de filtre et la liste.
- `todo.mjs` relie les événements de l'interface et la persistance.
- `tasks.mjs` construit les éléments de tâche dans le DOM.
- `filters.mjs` masque ou affiche les éléments selon leur état.
- `storage.mjs` charge et sauvegarde les tâches dans `localStorage`.
