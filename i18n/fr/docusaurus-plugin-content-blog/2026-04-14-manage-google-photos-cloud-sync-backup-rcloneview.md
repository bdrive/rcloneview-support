---
slug: manage-google-photos-cloud-sync-backup-rcloneview
title: "Gérer le stockage Google Photos — Synchronisation et sauvegarde de photos avec RcloneView"
authors:
  - tayson
description: "Connectez Google Photos à RcloneView et sauvegardez votre bibliothèque de photos vers un stockage local ou d'autres fournisseurs cloud. Gérez Google Photos sans perdre les originaux."
keywords:
  - Google Photos RcloneView backup
  - download Google Photos local backup
  - Google Photos cloud sync
  - rclone Google Photos GUI
  - backup Google Photos external drive
  - Google Photos to S3 backup
  - manage Google Photos storage
  - RcloneView Google Photos
tags:
  - google-photos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage Google Photos — Synchronisation et sauvegarde de photos avec RcloneView

> RcloneView se connecte à Google Photos via OAuth, vous permettant de parcourir votre bibliothèque de photos, de sauvegarder les originaux vers un stockage local ou d'autres fournisseurs cloud, et d'exécuter des exports planifiés.

Google Photos est la solution de sauvegarde photo par défaut pour des milliards d'utilisateurs Android — mais ce n'est pas une sauvegarde en soi. Si votre compte Google est compromis, si le quota de stockage est dépassé, ou si les conditions du service changent, votre bibliothèque de photos est en danger. RcloneView se connecte à Google Photos comme un distant séparé de Google Drive, vous donnant un accès direct à votre bibliothèque pour le téléchargement et la sauvegarde vers des disques externes, des périphériques NAS, ou un stockage cloud froid comme Amazon S3 ou Backblaze B2.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurer Google Photos dans RcloneView

Google Photos apparaît comme un fournisseur séparé dans la configuration des distants de RcloneView. Allez dans **Onglet Distant → Nouveau distant → Google Photos** et authentifiez-vous via une connexion navigateur OAuth. Il vous sera demandé d'accorder à RcloneView (via rclone) un accès en lecture à vos photos — après autorisation, votre bibliothèque apparaît dans le panneau Explorateur, organisée par année et par album.

Notez que l'API Google Photos présente les photos selon une structure spécifique : par album ou par dossiers basés sur la date. Vous ne pouvez pas réorganiser les photos via l'API, mais vous pouvez parcourir et télécharger les originaux en pleine résolution — y compris les fichiers RAW téléversés depuis un appareil photo si vous disposez du stockage Google One.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Google Photos as a remote in RcloneView" class="img-large img-center" />

## Sauvegarder Google Photos vers un stockage local

Le cas d'usage le plus courant consiste à télécharger l'intégralité de votre bibliothèque Google Photos vers un disque externe ou un NAS. Créez une tâche de copie dans le Gestionnaire de tâches avec Google Photos comme source et votre disque externe local (ou chemin NAS) comme destination. Activez **ignorer les fichiers existants** pour rendre les exécutions suivantes incrémentielles — seules les nouvelles photos depuis la dernière sauvegarde sont téléchargées.

Pour une famille disposant de 10 ans de photos réparties sur 50 000 images totalisant 150 Go, le téléchargement initial prendra plusieurs heures. Exécutez-le durant la nuit avec la planification réglée pour s'exécuter une seule fois. Les exécutions futures, planifiées chaque semaine, n'ajoutent que les nouvelles photos téléversées durant la semaine — maintenant votre sauvegarde locale à jour sans tout retransférer.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Backing up Google Photos library to local storage in RcloneView" class="img-large img-center" />

## Sauvegarde inter-cloud : de Google Photos vers S3 ou Backblaze B2

Pour une sauvegarde de cloud à cloud, définissez Google Photos comme source et Amazon S3 ou Backblaze B2 comme destination. Cela crée une sauvegarde indépendante de votre bibliothèque de photos sur un fournisseur cloud distinct — une protection contre les problèmes de compte Google sans nécessiter de capacité de stockage local.

Utilisez les règles de filtrage à l'étape 3 de l'assistant de synchronisation pour n'inclure que des types de fichiers spécifiques (`.jpg`, `.heic`, `.mp4`, `.raw`) et exclure les fichiers JSON de métadonnées associés de Google s'ils ne sont pas nécessaires. Définissez un filtre d'âge maximal des fichiers pour ne sauvegarder que les photos des 12 derniers mois dans votre tâche récurrente, avec une tâche ponctuelle séparée pour l'archive historique.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google Photos to Backblaze B2 cross-cloud backup in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Google Photos comme distant via l'authentification navigateur OAuth dans l'assistant Nouveau distant.
3. Créez une tâche de copie de Google Photos vers votre disque externe ou votre bucket de sauvegarde cloud.
4. Planifiez des exécutions incrémentielles hebdomadaires pour capturer automatiquement les nouvelles photos.

Avec RcloneView, Google Photos devient une source que vous pouvez sauvegarder de manière fiable — garantissant que vos souvenirs irremplaçables disposent d'une copie indépendante de l'infrastructure de Google.

---

**Guides connexes :**

- [Sauvegarder Google Photos vers un disque externe et NAS avec RcloneView](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)
- [Désencombrez votre bibliothèque de photos cloud avec RcloneView](https://rcloneview.com/support/blog/declutter-cloud-photo-library-rcloneview)
- [Gérer la synchronisation et la sauvegarde cloud de Google Drive avec RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
