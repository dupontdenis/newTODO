# Séparer les données et le rendu

Cette variante introduit une organisation différente de `localstorage/` : les tâches sont conservées dans un tableau JavaScript, et la liste HTML est construite à partir de ce tableau. Elle permet d'ajouter une tâche composée d'un identifiant et d'un titre, puis de la sauvegarder sous la clé `tasksT`.

## Objectif pédagogique

Le tableau `tasks` devient la source de vérité. Lorsqu'une tâche est ajoutée, le code met à jour le tableau, sauvegarde les données, puis reconstruit l'affichage. Cette séparation aide à distinguer les données de leur représentation dans la page.

Observez notamment le rôle de `renderTasks` : chaque objet est transformé en balisage par `createTask`, puis le résultat est utilisé pour mettre à jour la liste. La modification et la suppression ne font pas partie de cette étape.

## Fichiers

- `index.html` contient le formulaire et la liste.
- `todo.mjs` charge les données, gère l'ajout et déclenche le rendu.
- `tasks.mjs` transforme un objet tâche en balisage HTML.
- `storage.mjs` valide, charge et sauvegarde le tableau dans `localStorage`.

Les données sont conservées dans le navigateur et pour l'origine utilisée; elles ne sont pas synchronisées entre appareils.

## Lancer la page

Ouvrez `index.html` avec un serveur web local, par exemple Live Server dans VS Code. Le projet utilise des modules JavaScript ES et charge Bootstrap 5.3.3 depuis un CDN; une connexion Internet est nécessaire pour ses styles.
