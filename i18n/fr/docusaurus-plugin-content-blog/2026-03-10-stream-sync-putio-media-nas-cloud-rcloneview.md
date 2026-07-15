---
slug: stream-sync-putio-media-nas-cloud-rcloneview
title: "Diffusez et synchronisez vos fichiers média Put.io vers votre NAS ou votre stockage cloud avec RcloneView"
authors:
  - tayson
description: "Synchronisez automatiquement vos téléchargements Put.io vers votre NAS Synology, votre bibliothèque Plex ou Google Drive — organisez vos fichiers média et gardez tout sauvegardé avec RcloneView."
keywords:
  - putio sync nas
  - putio download manager
  - putio to google drive
  - putio file manager
  - putio rclone
  - putio media sync
  - putio backup tool
  - putio plex integration
  - putio to nas
  - putio automated download
tags:
  - RcloneView
  - putio
  - cloud-storage
  - media
  - sync
  - nas
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Diffusez et synchronisez vos fichiers média Put.io vers votre NAS ou votre stockage cloud avec RcloneView

> Put.io est excellent pour le téléchargement cloud, mais organiser ces fichiers et les transférer vers votre NAS ou votre serveur Plex nécessite généralement des transferts manuels. RcloneView automatise l'ensemble du pipeline.

Put.io est un service cloud populaire qui récupère des fichiers pour vous — torrents, liens directs, et plus encore — en les stockant dans le cloud pour un streaming instantané. Mais une fois les fichiers sur Put.io, la plupart des utilisateurs les téléchargent manuellement vers un disque local ou un NAS. RcloneView se connecte directement à Put.io et automatise l'ensemble du flux de travail : synchronisez les nouveaux téléchargements vers votre NAS Synology, votre bibliothèque Plex, Google Drive, ou tout autre stockage.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi automatiser la synchronisation Put.io ?

- **Les téléchargements manuels sont fastidieux** — Chaque nouveau fichier implique d'ouvrir le navigateur, de cliquer sur télécharger, d'attendre, puis de déplacer les fichiers.
- **Intégration NAS/Plex** — Faire atterrir automatiquement les fichiers dans le dossier de votre bibliothèque Plex les rend disponibles instantanément.
- **Gestion du stockage** — Le stockage Put.io est limité. La synchronisation automatique vous permet de libérer de l'espace une fois les fichiers en sécurité ailleurs.
- **Livraison multi-destinations** — Envoyez les médias vers votre NAS, une sauvegarde cloud et un disque portable simultanément.

## Connexion à Put.io

1. Ouvrez RcloneView et cliquez sur **Add Remote**.
2. Sélectionnez **Put.io** dans la liste des fournisseurs.
3. Authentifiez-vous via OAuth.
4. Enregistrez — vos fichiers Put.io sont désormais consultables.

<img src="/support/images/en/blog/new-remote.png" alt="Add Put.io remote in RcloneView" class="img-large img-center" />

## Parcourir et gérer vos fichiers Put.io

Consultez l'intégralité de votre bibliothèque Put.io dans l'Explorateur, aux côtés de vos disques locaux ou d'autres clouds :

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Put.io files alongside NAS" class="img-large img-center" />

## Flux de synchronisation

### Put.io → NAS Synology (Plex/Jellyfin)

Livrez automatiquement les fichiers média à votre serveur multimédia :

1. Créez une tâche Copy : Put.io → dossier média du NAS (par exemple, `/volume1/Plex/Movies`).
2. Planifiez son exécution toutes les heures — les nouveaux téléchargements Put.io arrivent automatiquement dans Plex.
3. Plex détecte les nouveaux fichiers et les rend disponibles pour le streaming.

### Put.io → Google Drive

Conservez une sauvegarde cloud de vos téléchargements Put.io :

1. Créez une tâche Copy : Put.io → dossier Google Drive.
2. Accédez à vos médias depuis n'importe où via Google Drive.

### Put.io → Disque externe

Maintenez une archive média hors ligne :

1. Créez une tâche Copy : Put.io → chemin du disque externe.
2. Exécutez-la manuellement lorsque vous connectez le disque, ou planifiez-la s'il est toujours connecté.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Put.io sync job" class="img-large img-center" />

## Automatiser le pipeline

1. **Planifiez des synchronisations horaires** avec [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution).
2. **Utilisez les tâches par lot (Batch Jobs)** pour synchroniser Put.io vers plusieurs destinations en séquence.
3. **Recevez des notifications** via [Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control) lorsque de nouveaux fichiers sont synchronisés.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Put.io sync" class="img-large img-center" />

## Surveiller les transferts

Observez les fichiers circuler de Put.io vers votre NAS en temps réel :

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Put.io file transfers" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Put.io sync job history" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez Put.io** en tant que distant via OAuth.
3. **Ajoutez votre destination** (NAS, Google Drive, disque externe).
4. **Créez une tâche Copy** et planifiez-la.
5. **Profitez de la livraison automatisée des médias** — les fichiers passent de Put.io à votre bibliothèque Plex sans effort.

Cessez de télécharger manuellement vos fichiers depuis Put.io. RcloneView le transforme en un pipeline média automatisé qui livre les fichiers exactement là où vous le souhaitez.

---

**Guides associés :**

- [Ajouter un distant via connexion par navigateur (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Parcourir et gérer les distants](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Détection et connexion automatique du NAS Synology](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer)

<CloudSupportGrid />
