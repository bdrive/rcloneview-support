---
slug: sync-internet-archive-cloud-backup-rcloneview
title: "Comment téléverser et gérer des collections Internet Archive avec RcloneView"
authors:
  - tayson
description: "Internet Archive préserve du contenu numérique gratuitement. Découvrez comment téléverser des collections, synchroniser des archives locales et gérer votre compte Internet Archive avec RcloneView."
keywords:
  - internet archive upload
  - internet archive rclone
  - upload to internet archive
  - internet archive backup
  - internet archive manager
  - internet archive file transfer
  - internet archive collections
  - archive.org upload tool
  - digital preservation cloud
  - internet archive sync
tags:
  - RcloneView
  - internet-archive
  - digital-preservation
  - cloud-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Comment téléverser et gérer des collections Internet Archive avec RcloneView

> Internet Archive, sur archive.org, est la plus grande bibliothèque numérique gratuite au monde. Si vous préservez des documents historiques, des médias ou des jeux de données, RcloneView peut gérer vos téléversements aux côtés de vos autres stockages cloud.

Internet Archive propose un stockage gratuit et illimité pour le contenu numérique accessible au public — livres, audio, vidéo, logiciels et jeux de données. De nombreux chercheurs, bibliothécaires et spécialistes de la préservation numérique l'utilisent pour l'archivage à long terme. RcloneView prend en charge Internet Archive en tant que distant, vous permettant de gérer vos téléversements aux côtés de vos autres clouds.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi utiliser Internet Archive ?

- **Stockage gratuit** — Aucun coût pour le contenu accessible au public.
- **Préservation permanente** — Conçu pour la préservation numérique à long terme.
- **Accès public** — Le contenu est librement accessible à tous.
- **Formats multiples** — Prend en charge l'audio, la vidéo, le texte, les images, les logiciels.
- **Support DOI** — Références citables pour le contenu académique.

## Configurer Internet Archive dans RcloneView

### Obtenir les identifiants API

1. Créez un compte sur [archive.org](https://archive.org/).
2. Récupérez vos clés API sur [archive.org/account/s3.php](https://archive.org/account/s3.php).

### Ajouter en tant que distant

1. Ouvrez RcloneView et cliquez sur **Add Remote**.
2. Sélectionnez **Internet Archive** comme type.
3. Saisissez votre clé d'accès et votre clé secrète.

<img src="/support/images/en/blog/new-remote.png" alt="Add Internet Archive remote" class="img-large img-center" />

## Flux de travail courants

### Téléverser des collections locales

Transférez des livres numérisés, des enregistrements audio ou des documents historiques depuis votre stockage local vers Internet Archive :

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Upload to Internet Archive" class="img-large img-center" />

### Sauvegarder depuis d'autres clouds

Copiez du contenu de préservation numérique depuis Google Drive ou S3 vers Internet Archive pour un accès public permanent.

### Téléversements planifiés

Pour les projets de numérisation en cours, planifiez des téléversements réguliers :

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Internet Archive uploads" class="img-large img-center" />

### Vérifier les téléversements

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Internet Archive uploads" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez Internet Archive** avec vos clés API.
3. **Téléversez, synchronisez et gérez** vos collections.
4. **Planifiez des téléversements** pour vos projets de numérisation en cours.

Préservez l'histoire numérique avec un outil qui se connecte à tout.

---

**Guides associés :**

- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Comparer le contenu des dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
