# Tâches avec page de détail

Cette version permet d'ajouter des tâches avec un titre et une description. Chaque tâche reçoit un identifiant unique et une date de création. Les données sont enregistrées dans le stockage local du navigateur sous la clé `tasksTD`, puis rechargées au prochain affichage.

## Fonctionnement

Depuis la liste, sélectionnez le titre d'une tâche pour ouvrir sa page de détail. La page affiche le titre, la description et la date de création formatée selon les paramètres français. Si l'identifiant transmis dans l'URL ne correspond à aucune tâche enregistrée, un message indique que la tâche est introuvable.

Le script de la liste affiche également le détail de la tâche sélectionnée dans la page courante. Dans les deux vues, le titre et la description sont échappés avant leur insertion dans le HTML.

## Lancer l'application

Ouvrez `index.html` avec un serveur web local, par exemple Live Server dans VS Code. L'application utilise des modules JavaScript ES et Bootstrap 5.3.3 depuis un CDN; une connexion Internet est nécessaire pour les styles Bootstrap. Les données sont propres au navigateur et à l'origine utilisée, et ne sont pas synchronisées entre appareils.

## Fichiers

- `index.html` contient le formulaire titre/description et la liste.
- `todo.mjs` charge et affiche les tâches, ajoute les nouvelles tâches et présente leur détail.
- `tasks.mjs` crée les liens vers `detail.html` en transmettant l'identifiant dans l'URL.
- `storage.mjs` valide, charge et sauvegarde les tâches dans `localStorage`.
- `detail.html` fournit l'interface de la page de détail.
- `detail.mjs` lit l'identifiant de l'URL et affiche la tâche correspondante ou un message d'erreur.

Cette version permet la création et la consultation des tâches. La modification et la suppression ne sont pas implémentées.
