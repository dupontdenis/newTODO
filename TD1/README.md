# TD1 : enrichir le modèle de tâche

Cette étape fait évoluer une tâche simple vers un objet contenant un identifiant, un titre, une description et une date de création. On peut créer des tâches, les retrouver après rechargement et afficher leur détail dans la même page que la liste.

## Objectif pédagogique

Le travail porte sur la représentation d'une tâche par un objet, l'utilisation d'un identifiant pour retrouver cet objet, et la séparation du code en modules. Le clic sur un bouton de la liste permet de chercher la tâche correspondante dans le tableau et d'en afficher les informations dans le panneau de détail.

Cette version sert aussi de préparation à TD2 : le modèle de données reste le même, mais la consultation du détail passe ensuite à une page séparée.

## Fichiers

- `index.html` contient le formulaire, la liste et le panneau de détail.
- `todo.mjs` charge les tâches, gère leur création et affiche le détail sélectionné.
- `tasks.mjs` transforme une tâche en élément de liste avec un bouton de détail.
- `storage.mjs` vérifie, charge et sauvegarde les données dans `localStorage`.
- `utils.mjs` contient la fonction d'échappement utilisée avant l'insertion du titre et de la description dans le HTML.

Cette étape ne propose ni modification ni suppression. Les tâches sont enregistrées sous la clé `tasksTD`; TD2 utilise la même clé et le même format, donc les deux versions partagent les données sur une même origine.

## Lancer l'application

Ouvrez `index.html` avec un serveur web local, par exemple Live Server dans VS Code. Bootstrap 5.3.3 est chargé depuis un CDN; une connexion Internet est nécessaire pour ses styles.
