# Filtres par transformation des données

Cette variante conserve les tâches dans un tableau d'objets JavaScript (`id`, `text`, `completed`). Elle permet de les ajouter, modifier, terminer et supprimer. Les filtres « Toutes », « Incomplètes » et « Complètes » sélectionnent les objets à afficher; la liste HTML est ensuite reconstruite à partir des données. Le tableau est sauvegardé dans `localStorage` sous la clé `tasksTransformationDonnées`.

## Objectif pédagogique

Le tableau `tasks` est la source de vérité : les actions modifient les objets ou le tableau, puis le rendu est actualisé. Le filtrage utilise `filter()` pour produire les tâches visibles avant de les transformer en HTML.

Comparez cette variante avec `../manipulationDom/`. Dans les deux cas, l'utilisateur voit une liste filtrée, mais la logique est différente : ici le filtre sélectionne des données avant le rendu; dans l'autre version, il masque ou affiche des éléments DOM déjà présents.

## Fichiers

- `index.html` définit le formulaire, les boutons de filtre et la liste.
- `todo.mjs` gère le tableau des tâches et les événements de l'interface.
- `tasks.mjs` transforme un objet tâche en balisage HTML et échappe son texte.
- `filters.mjs` sélectionne les tâches visibles et actualise la liste.
- `storage.mjs` valide, charge et sauvegarde les données dans `localStorage`.

## Lancer la page

Ouvrez `index.html` avec un serveur web local, par exemple Live Server dans VS Code. Bootstrap 5.3.3 est chargé depuis un CDN; une connexion Internet est nécessaire pour ses styles.
