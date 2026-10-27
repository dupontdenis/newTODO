# Liste de tâches transformée

Cette variante conserve les tâches dans un tableau JavaScript et reconstruit la liste HTML à partir de ces données. Elle permet d'ajouter des tâches; chaque tâche possède un identifiant et un titre. Les données sont sauvegardées dans le stockage local du navigateur sous la clé `tasksT` et restaurées lorsque la page est rechargée.

## Lancer la page

Ouvrez `index.html` avec un serveur web local, par exemple Live Server dans VS Code. La page utilise un module JavaScript ES. Bootstrap 5.3.3 est chargé depuis un CDN, donc une connexion Internet est nécessaire pour ses styles.

## Organisation

- `index.html` contient le formulaire et la liste.
- `todo.mjs` gère les données, l'ajout et le rendu de la liste.
- `tasks.mjs` transforme une tâche en élément HTML.
- `storage.mjs` valide, charge et sauvegarde les tâches dans `localStorage`.

Les données sont conservées dans le navigateur et ne sont pas synchronisées entre appareils.
