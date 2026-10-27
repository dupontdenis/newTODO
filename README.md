# Liste de tâches

Cette page est la version de base de l'application. Elle permet d'ajouter une tâche et de la supprimer. Les tâches restent uniquement dans la page : elles ne sont pas conservées après son rechargement.

## Lancer la page

Ouvrez `index.html` avec un serveur web local, par exemple l'extension Live Server de VS Code. La page charge son script JavaScript en tant que module ES et Bootstrap 5.3.3 depuis un CDN ; une connexion Internet est donc nécessaire pour les styles Bootstrap.

## Organisation

- `index.html` contient le formulaire et la liste.
- `todo.mjs` gère l'ajout, la validation du champ et la suppression.
- `style.css` contient les styles du projet.

## Variantes accessibles depuis l’accueil

La page d’accueil regroupe plusieurs versions de la liste de tâches, chacune présentant une approche différente :

- **Comprendre la transformation de données** (`transform/`) : les tâches sont conservées dans un tableau JavaScript, puis transformées en éléments HTML. Cette version utilise aussi `localStorage`.
- **Solution 1** (`TD1/`) : crée des tâches avec un titre et une description, puis affiche leur détail dans la même page. Les données sont sauvegardées dans `localStorage`.
- **Solution 2** (`TD2/`) : reprend les tâches avec titre et description et ajoute une page dédiée aux détails, ouverte depuis la liste.
- **Comprendre localStorage** (`localstorage/`) : montre comment enregistrer et restaurer les tâches dans le navigateur, avec ajout, modification et suppression.
- **Comprendre les filtres et la transformation de données** (`filter/transformationDonnées/`) : filtre un tableau d'objets tâche (toutes, incomplètes ou complètes), puis reconstruit la liste affichée.
- **Comprendre les filtres et la manipulation du DOM** (`filter/manipulationDom/`) : applique les filtres directement aux éléments de la liste et permet de modifier, terminer ou supprimer les tâches.

Les données de ces exemples sont stockées localement dans le navigateur. Elles ne sont pas synchronisées entre appareils; certaines variantes peuvent partager une clé de stockage lorsqu'elles sont ouvertes depuis la même origine.
