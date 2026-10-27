# Filtres par transformation des données

Cette variante garde les tâches dans un tableau JavaScript d'objets (`id`, `text`, `completed`), puis reconstruit la liste HTML à partir de ce tableau. Les filtres « Toutes », « Incomplètes » et « Complètes » sélectionnent les tâches à afficher. L'ajout, le changement d'état et la suppression sont sauvegardés dans `localStorage` sous la clé `tasksTransformationDonnées`.

## Lancer la page

Ouvrez `index.html` avec un serveur web local, par exemple l'extension Live Server de VS Code. Bootstrap 5.3.3 est chargé depuis un CDN, donc une connexion Internet est nécessaire pour ses styles.

## Organisation

- `index.html` définit le formulaire, les boutons de filtre et la liste.
- `todo.mjs` gère le tableau des tâches et les événements de l'interface.
- `tasks.mjs` transforme une tâche en balisage HTML et échappe son texte.
- `filters.mjs` filtre le tableau, puis actualise l'affichage.
- `storage.mjs` valide, charge et sauvegarde les données dans `localStorage`.
