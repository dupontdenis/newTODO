# Tâches avec détail intégré

Cette version permet de créer des tâches avec un titre et une description, puis d'afficher les détails dans la même page. Chaque tâche reçoit un identifiant unique et une date de création. Le titre, la description et la date apparaissent dans le panneau de détail lorsqu'on sélectionne une tâche.

## Persistance

Les tâches sont enregistrées dans le stockage local du navigateur sous la clé `tasksTD` et rechargées au démarrage. `TD2` utilise également cette clé et le même format de données. Les deux versions peuvent donc accéder aux mêmes tâches lorsqu'elles sont ouvertes depuis la même origine. Le stockage n'est pas synchronisé entre appareils.

## Lancer l'application

Ouvrez `index.html` avec un serveur web local, par exemple Live Server dans VS Code. La page utilise un module JavaScript ES et charge Bootstrap 5.3.3 depuis un CDN; une connexion Internet est nécessaire pour les styles Bootstrap.

## Fichiers

- `index.html` contient le formulaire, la liste et le panneau de détail.
- `todo.mjs` charge et affiche les tâches, traite leur création et met à jour le panneau de détail.
- `tasks.mjs` construit les boutons de la liste.
- `storage.mjs` valide, charge et sauvegarde les tâches dans `localStorage`.

Les titres et descriptions sont échappés avant leur insertion dans le HTML. Cette version ne propose pas de modification ni de suppression des tâches.
