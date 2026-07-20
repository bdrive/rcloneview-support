---
sidebar_position: 3
description: "Corrigez les cas où RcloneView ne parvient pas à accéder à votre SSD externe sur macOS en parcourant /Volumes et en créant un raccourci Alias rapide."
keywords:
  - rcloneview
  - macos
  - external drive
  - offline backup
  - sync destination
  - alias remote
  - volumes
  - troubleshooting
  - faq
tags:
  - RcloneView
  - macOS
  - Troubleshooting
  - FAQ
  - external-drive
  - alias
date: 2025-02-20
author: Jay
---

# Je n'arrive pas à accéder à un SSD externe avec RcloneView (macOS)

Si RcloneView ne parvient pas à atteindre votre SSD externe sur macOS (vous ne voyez pas le disque ou vous ne savez pas où saisir son chemin), utilisez cette solution rapide. Un problème d'interface temporaire (corrigé dans la prochaine version) masque le raccourci habituel, mais vous pouvez parcourir manuellement le SSD et l'enregistrer en tant qu'Alias (favori) pour un accès en un clic par la suite.

---

## Options de correction rapide (choisissez-en une)

- **Utiliser la version hotfix (inclut la correction d'interface) :** [Téléchargez RcloneView 1.1.517 (macOS)](https://downloads.bdrive.com/rclone_view/builds/RcloneView-1.1.517.dmg) et installez-le pour obtenir immédiatement la correction du chemin du SSD. Il s'agit d'une version temporaire partagée pour les utilisateurs rencontrant ce problème avant la prochaine version officielle.
- **Rester sur la version officielle actuelle :** Suivez les étapes manuelles ci-dessous pour parcourir `/Volumes` et créer un Alias vers votre SSD. Cela fonctionne avec la version publique actuelle.

---

## Étape par étape : ajouter votre SSD depuis /Volumes

Vous pouvez voir **`Local Disk`** dans le panneau gauche de RcloneView.  

1) Dans la barre de chemin, saisissez `/Volumes` et appuyez sur **Entrée**. C'est l'emplacement où macOS monte les disques externes (par ex. Samsung T7).
2) Dans la liste `/Volumes`, double-cliquez sur votre SSD (par ex. `SAMSUNG`). Certains disques mettent un moment à se charger — attendez que le dossier s'ouvre.

<img src="/support/images/en/howto/FAQ/browse-volumes-in-mac-system.png" alt="browse volumes in mac system" class="img-large img-center" />

3) Confirmez que vous êtes bien dans le SSD (la barre de chemin doit afficher `/Volumes/<votre-disque>`).
4) Cliquez sur l'icône **☆** (Alias) dans la barre de chemin pour marquer cet emplacement.
5) Saisissez un nom simple (par ex. `MySSD`) et 
6) cliquez sur **Créer**. Cela ajoute un Alias Remote qui ouvre toujours la racine de votre SSD.
<img src="/support/images/en/howto/FAQ/creat-alias-remote-for-external-hdd.png" alt="creat alias remote for external hdd" class="img-large img-center" />

7) L'Alias s'ouvre dans un nouvel onglet et apparaît également dans la liste de gauche pour une réutilisation rapide.

<img src="/support/images/en/howto/FAQ/open-alias-remote-for-external-ssd.png" alt="open alias remote for external ssd" class="img-large img-center" />

---

## Comment utiliser l'Alias du SSD dans les sauvegardes

- Lors de la création d'une tâche de synchronisation/copie/déplacement, choisissez l'Alias remote que vous venez de créer (par ex. `MySSD`) comme **destination** et votre remote source (par ex. Google Drive, Dropbox, un autre dossier local) comme **source**.
- L'Alias pointe vers la racine du SSD ; vous pouvez choisir ou créer un sous-dossier dans cet onglet avant de démarrer la tâche.

---

## Si le SSD n'apparaît pas

- Assurez-vous que le SSD est monté dans Finder (débranchez/rebranchez si nécessaire).
- Rouvrez `/Volumes` dans la barre de chemin et attendez quelques secondes que la liste des disques se remplisse.
- Toujours pas visible ? Redémarrez RcloneView, puis réessayez `/Volumes`. Si le problème persiste, signalez-le sur le [forum RcloneView](https://forum.rcloneview.com).

---

## Guides associés

- Présentation de l'Alias et autres remotes virtuels : [Guide de l'Alias Remote](/howto/remote-storage-connection-settings/alias-remote)
- Contrôles généraux de l'Explorateur et des onglets : [Parcourir et gérer le stockage distant](/howto/rcloneview-basic/browse-and-manage-remote-storage)
