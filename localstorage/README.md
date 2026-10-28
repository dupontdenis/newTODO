# Persister les tâches avec localStorage

Cette étape part d'une liste manipulée dans le DOM et ajoute la persistance. Elle permet d'ajouter, de modifier et de supprimer des tâches, puis d'enregistrer la liste dans le navigateur afin de la restaurer après un rechargement.

## Objectif pédagogique

Comprendre le cycle de sérialisation et de restauration : lire les tâches affichées, les convertir en tableau JavaScript, convertir ce tableau en JSON avec `JSON.stringify`, puis retrouver les données avec `JSON.parse`. Ici, la liste du DOM est la référence utilisée pour construire les données à sauvegarder.

Cette approche permet d'introduire `localStorage` sans encore séparer complètement les données de l'affichage. La variante `transform/` présente ensuite une autre organisation où le tableau de tâches devient la source de vérité.

## Fichiers

- `index.html` contient le formulaire et la liste.
- `todo.mjs` gère les événements, construit les éléments de tâche et lit/écrit la clé `tasks` de `localStorage`.
- `style.css` contient les styles de cette variante.

Les données sont propres au navigateur et à l'origine utilisée; elles ne sont pas synchronisées entre appareils. Effacer les données du site les supprimera.

## Lancer la page

Ouvrez `index.html` avec un serveur web local, par exemple Live Server dans VS Code. Bootstrap 5.3.3 est chargé depuis un CDN; une connexion Internet est nécessaire pour ses styles.
