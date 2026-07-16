---
slug: mount-hetzner-storage-box-sync-cloud-rcloneview
title: "Monter un Hetzner Storage Box comme lecteur local et synchroniser vers n'importe quel cloud avec RcloneView"
authors:
  - tayson
description: "Accédez à votre Hetzner Storage Box comme à un dossier local — montez-le via SFTP, parcourez les fichiers visuellement, et synchronisez ou sauvegardez vers AWS S3, Google Drive ou tout autre cloud avec RcloneView."
keywords:
  - hetzner storage box mount
  - hetzner storage box sync
  - hetzner storage box backup
  - hetzner sftp mount local drive
  - hetzner storage box rclone
  - hetzner storage box gui
  - hetzner to s3
  - hetzner cloud backup
  - hetzner storage box file manager
  - mount sftp as local drive
tags:
  - hetzner
  - sftp
  - mount
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Monter un Hetzner Storage Box comme lecteur local et synchroniser vers n'importe quel cloud avec RcloneView

> Hetzner Storage Box offre un rapport prix/téraoctet imbattable en Europe, mais la gestion des fichiers via FTP ou SCP reste peu pratique. RcloneView le monte comme un lecteur local et le synchronise vers n'importe quel cloud — de façon visuelle.

Les Hetzner Storage Box comptent parmi les solutions de stockage les plus avantageuses en Europe — fiables, abordables et accessibles via SFTP, FTP, SMB et WebDAV. Mais sans client de bureau natif, la gestion des fichiers passe par des outils en ligne de commande ou des clients FTP basiques. RcloneView change la donne en se connectant via SFTP, en vous permettant de monter le Storage Box comme un lecteur local, de parcourir les fichiers dans un explorateur à deux panneaux, et de synchroniser vers AWS S3, Google Drive ou tout autre cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi utiliser RcloneView avec Hetzner Storage Box ?

- **Aucun client de bureau natif** — Hetzner fournit des protocoles bruts (SFTP, FTP, SMB) mais pas d'application de synchronisation.
- **Monter comme lecteur local** — Accédez à votre Storage Box comme à un dossier classique sur votre bureau.
- **Synchronisation multi-cloud** — Répliquez automatiquement les données du Storage Box vers S3, Google Drive ou OneDrive.
- **Gestion visuelle des fichiers** — Parcourez, glissez-déposez, comparez et organisez sans CLI.

## Connexion au Hetzner Storage Box via SFTP

1. Ouvrez RcloneView et cliquez sur **Add Remote**.
2. Sélectionnez **SFTP** dans la liste des fournisseurs.
3. Saisissez vos identifiants Hetzner :
   - **Host** : `uXXXXXX.your-storagebox.de` (depuis votre panneau Hetzner Robot)
   - **Port** : `23` (Hetzner utilise un port SFTP non standard)
   - **Username** : votre nom d'utilisateur Storage Box (ex. `u123456`)
   - **Password** : votre mot de passe Storage Box
4. Enregistrez — les répertoires de votre Storage Box sont désormais accessibles.

<img src="/support/images/en/blog/new-remote.png" alt="Add Hetzner Storage Box via SFTP" class="img-large img-center" />

## Monter comme lecteur local

Une fois connecté, montez votre Storage Box comme un dossier local :

1. Accédez à votre distant SFTP dans l'Explorer.
2. Faites un clic droit sur le dossier souhaité → sélectionnez **Mount**.
3. Choisissez un point de montage local (lettre de lecteur sous Windows, chemin sous Mac/Linux).
4. Votre stockage Hetzner apparaît comme un dossier natif.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount Hetzner Storage Box as local drive" class="img-large img-center" />

Vous pouvez désormais ouvrir des fichiers, glisser-déposer et travailler avec les données de votre Storage Box à l'aide de n'importe quelle application de bureau — comme s'il s'agissait d'un stockage local.

## Parcourir et gérer les fichiers

L'Explorer à deux panneaux vous permet de gérer le stockage Hetzner aux côtés de tout autre distant :

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Hetzner Storage Box alongside cloud" class="img-large img-center" />

- Naviguer dans les hiérarchies de dossiers
- Glisser-déposer des fichiers entre Hetzner et les clouds
- Créer, renommer et supprimer des fichiers et dossiers
- Vérifier les tailles et dates des fichiers

## Synchroniser vers des fournisseurs cloud

### Hetzner → AWS S3 (sauvegarde hors site)

Ajoutez une couche de redondance cloud à votre stockage Hetzner déjà fiable :

1. Créez une tâche de synchronisation : Hetzner SFTP → bucket S3.
2. Planifiez-la chaque nuit avec la [planification de tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution).
3. Utilisez S3 Glacier pour un archivage à froid économique.

### Hetzner → Google Drive (partage en équipe)

Rendez les données Hetzner accessibles aux utilisateurs de Google Workspace :

1. Créez une tâche de copie : Hetzner → dossier Google Drive.
2. Utilisez des [règles de filtrage](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview) pour ne synchroniser que certains dossiers.

### Cloud → Hetzner (destination de sauvegarde hors site)

Utilisez Hetzner comme cible de sauvegarde hors site abordable :

1. Créez une tâche de synchronisation : Google Drive → Hetzner Storage Box.
2. Planifiez-la quotidiennement — la tarification par To de Hetzner rend cela extrêmement rentable.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Hetzner sync job" class="img-large img-center" />

## Vérifier et surveiller

### Comparaison de dossiers

Vérifiez l'exhaustivité de la synchronisation entre Hetzner et votre sauvegarde cloud :

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare Hetzner with cloud backup" class="img-large img-center" />

### Automatisation planifiée

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Hetzner backup jobs" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez votre Hetzner Storage Box** via SFTP (port 23).
3. **Montez-le** comme lecteur local ou parcourez-le dans l'Explorer.
4. **Synchronisez** vers S3, Google Drive ou tout autre cloud.
5. **Planifiez** une sauvegarde quotidienne automatisée.

Hetzner Storage Box est l'un des secrets de stockage les mieux gardés d'Europe. RcloneView lui offre le client de bureau qu'il mérite — avec en prime la synchronisation multi-cloud.

---

**Guides associés :**

- [Monter SFTP et SMB comme lecteur local](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [Monter un stockage cloud comme lecteur local](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Comparer le contenu de dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Planification de tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Règles de filtrage pour la synchronisation sélective](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
