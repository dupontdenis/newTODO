# Liste de tâches avec localStorage

Cette variante permet d'ajouter, de modifier et de supprimer des tâches. La liste est enregistrée dans le stockage local du navigateur et restaurée au chargement de la page.

## Lancer la page

Ouvrez `index.html` avec un serveur web local, par exemple l'extension Live Server de VS Code. Les données sont propres au navigateur et à l'origine utilisée pour le serveur ; effacer les données du site les supprimera. Bootstrap 5.3.3 est chargé depuis un CDN, donc une connexion Internet est nécessaire pour ses styles.

## Organisation

- `index.html` contient l'interface de la liste.
- `todo.mjs` gère les tâches et leur sauvegarde dans `localStorage` sous la clé `tasks`.
- `style.css` contient les styles de cette variante.

Les tâches sont stockées sous forme de tableau JSON. Elles ne sont pas synchronisées entre navigateurs ou appareils.
