# TD2 : afficher le détail sur une page séparée

TD2 reprend le modèle de tâche de TD1 : identifiant, titre, description et date de création. La différence pédagogique est la navigation : depuis la liste, le lien d'une tâche ouvre `detail.html` et transmet son identifiant dans l'URL.

## Objectif pédagogique

Cette étape met en pratique la communication entre deux pages. La page de détail lit l'identifiant avec `URLSearchParams`, charge les tâches enregistrées, recherche la tâche correspondante et affiche son contenu. Elle traite également le cas où l'identifiant est absent ou ne correspond à aucune tâche.

Comparez cette organisation avec TD1, où le détail est affiché dans la page de la liste. Ici, la page dédiée est responsable de retrouver elle-même la tâche à afficher.

## Fichiers

- `index.html` contient le formulaire et la liste des tâches.
- `todo.mjs` charge les données, ajoute les tâches et rend la liste.
- `tasks.mjs` crée un lien vers `detail.html` avec l'identifiant de la tâche dans l'URL.
- `storage.mjs` valide, charge et sauvegarde les tâches dans `localStorage`.
- `detail.html` fournit la structure de la page de consultation.
- `detail.mjs` lit l'identifiant de l'URL, retrouve la tâche et affiche son détail ou un message d'absence.
- `utils.mjs` échappe le titre et la description avant leur insertion dans le HTML.

La création et la consultation sont implémentées; la modification et la suppression ne font pas partie de cette étape. TD1 et TD2 partagent la clé `tasksTD` et le même format de données sur une même origine.

## Lancer l'application

Ouvrez `index.html` avec un serveur web local, par exemple Live Server dans VS Code. Les modules JavaScript et Bootstrap 5.3.3 depuis un CDN nécessitent respectivement un serveur local et une connexion Internet pour les styles. Les données restent dans le navigateur et ne sont pas synchronisées entre appareils.
