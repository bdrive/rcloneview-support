---
sidebar_position: 3
description: "Découvrez comment parcourir, copier et gérer des fichiers entre le stockage local et le cloud grâce à l'interface glisser-déposer et au menu contextuel de RcloneView."
keywords:
  - rcloneview
  - gestion de fichiers
  - copier des fichiers
  - déplacer des fichiers
  - glisser-déposer
  - transfert de fichiers cloud
  - stockage cloud
  - explorateur de fichiers
  - transfert cloud à cloud
  - navigateur distant
  - téléversement
  - téléchargement
  - purge
  - suppression
tags:
  - howto
  - file-management
  - cloud-storage
  - drag-and-drop
  - cloud-file-transfer
  - file-explorer
date: 2025-05-27
author: Jay
---
# Gestion des fichiers avec RcloneView  

RcloneView vous permet de parcourir, transférer et organiser facilement des fichiers entre votre disque local et plusieurs services de stockage cloud grâce à une interface familière, semblable à un explorateur de fichiers.   

Ce guide vous accompagne à travers :   

- La navigation dans le stockage distant
- La copie de fichiers par glisser-déposer
- La gestion des fichiers via le menu contextuel
 
## Parcourir le stockage distant

Vous pouvez ouvrir n'importe quel remote cloud connecté et le consulter comme un dossier local.

### Comment parcourir un remote :

1. Cliquez sur l'onglet **`+`** dans le **volet Explorateur**.
2. Sélectionnez le stockage distant que vous souhaitez ouvrir.
3. Le remote sélectionné s'ouvrira dans un nouvel onglet, prêt pour les opérations sur les fichiers.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/file-explorer-open-remote.png" alt="file explorer open remote" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/file-explorer-remote-open-complete.png" alt="file explorer remote open complete" class="img-medium img-center" />
</div>

:::tip Disposition de l'affichage
Allez dans **`Settings > Layout`** pour basculer entre les vues verticale et horizontale 
<img src="/support/images/en/howto/rcloneview-basic/explorer-view-layout.png" alt="explorer view layout" class="img-small img-left" />
:::

## Copier des fichiers par glisser-déposer

Vous pouvez transférer des fichiers entre le stockage local et le cloud grâce à un simple glisser-déposer.
#### Copier entre deux remotes

Faites glisser des fichiers d'un onglet remote vers un autre dans RcloneView pour les copier entre différents stockages cloud.
<video src="/support/videos/en/howto/rcloneview-basic/rclonview-explorer-drag-and-drop.mp4" class="video-medium video-center" controls muted loop playsinline>
  rclonview explorer drag and drop
</video>

**👉  Pour la sélection multiple et les actions groupées**
Vous pouvez sélectionner plusieurs fichiers à la fois pour effectuer des opérations groupées.
- Utilisez **`Ctrl + Clic`** pour sélectionner plusieurs fichiers individuels.
- Utilisez **`Maj + Clic`** pour sélectionner une plage de fichiers.

**👉  Comportement du glisser-déposer **
- **Même remote** = Opération de déplacement  
- **Remotes différents** = Opération de copie


:::tip Astuce
-  Si vous ne souhaitez pas voir la fenêtre de confirmation pendant la copie, décochez la case **Confirm drag and drop**.
- Pour réactiver cette fenêtre plus tard, allez dans **Settings > General settings > Confirm drag and drop** et cochez-la à nouveau.
:::

#### Copier depuis l'Explorateur Windows vers un remote dans RcloneView
- Vous pouvez également faire glisser des fichiers directement depuis l'**Explorateur de fichiers Windows** vers un onglet RcloneView pour les téléverser vers le stockage cloud.
<video src="/support/videos/en/howto/rcloneview-basic/windows-explorer-drag-and-drop.mp4" class="video-medium video-center" controls muted loop playsinline>
  windows explorer drag and drop
</video>
### Gérer les fichiers avec le menu contextuel

RcloneView prend en charge toutes les opérations sur les fichiers grâce à un menu contextuel pratique.

### Actions disponibles :

- <img src="/support/icons/download-icon.png" alt="download icon" class="inline-icon" />**Télécharger** – Enregistrer le(s) fichier(s) sur votre disque local  
- <img src="/support/icons/upload-icon.png" alt="upload icon" class="inline-icon" />**Téléverser** – Envoyer le(s) fichier(s) local(aux) vers un remote cloud  
- <img src="/support/icons/copy icon.png" alt="copy icon" class="inline-icon" />**Copier / <img src="/support/icons/paste-icon.png" alt="paste icon" class="inline-icon" />Coller** – Copier des fichiers entre dossiers ou remotes  
- <img src="/support/icons/cut-icon.png" alt="cut icon" class="inline-icon" />**Couper / <img src="/support/icons/paste-icon.png" alt="paste icon" class="inline-icon" />Coller** – Déplacer des fichiers vers un autre emplacement  
- <img src="/support/icons/delete-icon.png" alt="delete icon" class="inline-icon" />**Supprimer** – Supprimer des fichiers ou dossiers  
- <img src="/support/icons/rename-icon.png" alt="rename icon" class="inline-icon" />**Renommer** – Renommer des fichiers ou dossiers  
- <img src="/support/icons/new-folder-icon.png" alt="new folder icon" class="inline-icon" />**Nouveau dossier** – Créer un nouveau dossier  
- <img src="/support/icons/refresh-icon.png" alt="refresh icon" class="inline-icon" />**Recharger** – Actualiser le contenu du dossier




