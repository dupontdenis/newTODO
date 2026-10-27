# Liste de tâches

Cette page est la version de base de l'application. Elle permet d'ajouter une tâche et de la supprimer. Les tâches restent uniquement dans la page : elles ne sont pas conservées après son rechargement.

## Lancer la page

Ouvrez `index.html` avec un serveur web local, par exemple l'extension Live Server de VS Code. La page charge son script JavaScript en tant que module ES et Bootstrap 5.3.3 depuis un CDN ; une connexion Internet est donc nécessaire pour les styles Bootstrap.

## Organisation

- `index.html` contient le formulaire et la liste.
- `todo.mjs` gère l'ajout, la validation du champ et la suppression.
- `style.css` contient les styles du projet.

La page propose également des liens vers les versions consacrées à `localStorage` et aux filtres.
