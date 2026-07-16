---
slug: manage-quatrix-enterprise-file-sync-rcloneview
title: "Gérer le partage de fichiers d'entreprise Quatrix — Synchronisation avec Google Drive, S3 et plus avec RcloneView"
authors:
  - tayson
description: "Quatrix by Maytech est une plateforme de partage de fichiers d'entreprise. Découvrez comment synchroniser et sauvegarder Quatrix aux côtés de Google Drive, S3 et d'autres clouds avec RcloneView."
keywords:
  - quatrix file sharing
  - quatrix rclone
  - quatrix sync
  - quatrix backup
  - quatrix enterprise cloud
  - maytech quatrix
  - quatrix file transfer
  - quatrix google drive
  - quatrix s3 backup
  - enterprise file sharing sync
tags:
  - quatrix
  - enterprise
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le partage de fichiers d'entreprise Quatrix — Synchronisation avec Google Drive, S3 et plus avec RcloneView

> Quatrix by Maytech offre un partage de fichiers d'entreprise sécurisé avec des fonctionnalités de conformité. Mais l'intégrer avec vos autres plateformes cloud nécessite le bon outil. RcloneView connecte Quatrix à plus de 70 fournisseurs.

Quatrix est une plateforme de partage et de transfert de fichiers de niveau entreprise axée sur la sécurité et la conformité. De nombreuses organisations l'utilisent pour l'échange sécurisé de fichiers externes tout en s'appuyant sur Google Drive ou OneDrive pour la collaboration interne. RcloneView relie Quatrix à l'ensemble de votre écosystème cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurer Quatrix dans RcloneView

Quatrix peut être accédé via son API ou son interface WebDAV :

1. Ouvrez RcloneView et cliquez sur **Add Remote**.
2. Choisissez le type de connexion approprié pour votre configuration Quatrix.
3. Saisissez vos identifiants Quatrix.

<img src="/support/images/en/blog/new-remote.png" alt="Add Quatrix remote" class="img-large img-center" />

## Flux de travail clés

### Quatrix → S3 (sauvegarde hors site)

Sauvegardez les données sensibles de Quatrix vers AWS S3 avec chiffrement :

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Quatrix backup" class="img-large img-center" />

### Google Drive → Quatrix (partage externe sécurisé)

Déplacez des fichiers de Google Drive interne vers Quatrix pour un partage sécurisé avec des parties externes.

### Quatrix → NAS (archive locale)

Conservez une copie locale du contenu Quatrix sur votre NAS pour l'archivage de conformité.

## Vérifier et surveiller

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Quatrix sync" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez Quatrix** aux côtés de vos autres clouds.
3. **Créez des tâches de sauvegarde et de synchronisation**.
4. **Planifiez et vérifiez**.

Le partage de fichiers d'entreprise, connecté à tout.

---

**Guides connexes :**

- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Chiffrer les sauvegardes cloud](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
