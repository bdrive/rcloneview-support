---
slug: rcloneview-openmediavault-nas-cloud-backup
title: "Exécuter RcloneView sur OpenMediaVault — Sauvegarde cloud pour votre NAS DIY"
authors:
  - tayson
description: "OpenMediaVault transforme n'importe quel PC en NAS. Ajoutez RcloneView via Docker pour synchroniser vos partages OMV vers le stockage cloud pour une sauvegarde hors site et une gestion multi-cloud."
keywords:
  - openmediavault cloud backup
  - openmediavault rclone
  - omv cloud sync
  - openmediavault s3 backup
  - omv rcloneview
  - openmediavault offsite backup
  - omv google drive
  - openmediavault docker rclone
  - diy nas cloud backup
  - omv backup solution
tags:
  - RcloneView
  - nas
  - docker
  - platform
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Exécuter RcloneView sur OpenMediaVault — Sauvegarde cloud pour votre NAS DIY

> OpenMediaVault (OMV) vous offre un NAS puissant sur du matériel économique. Mais le stockage local seul n'est pas sûr. Ajoutez RcloneView pour envoyer les données de votre NAS vers le cloud en cas de sinistre.

OpenMediaVault est le système NAS de référence pour les bricoleurs — exécutez-le sur un vieux PC, un Raspberry Pi, ou du matériel dédié. Il fournit du RAID, du partage SMB/NFS, et une interface web. Ce qu'il ne fournit pas, c'est la sauvegarde cloud. RcloneView comble ce manque, en s'exécutant comme un conteneur Docker sur OMV et en synchronisant vos partages vers plus de 70 fournisseurs cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi OMV + RcloneView ?

Les fonctionnalités intégrées d'OMV gèrent bien le stockage local, mais l'intégration cloud est limitée. RcloneView ajoute :

- **Plus de 70 fournisseurs cloud** — Google Drive, S3, B2, Wasabi, et plus
- **Gestion visuelle des fichiers** — parcourez le NAS aux côtés du stockage cloud
- **Sauvegardes planifiées** — protection hors site automatisée
- **Vérification** — la comparaison de dossiers confirme l'intégrité de la sauvegarde
- **Chiffrement** — des distants crypt pour des sauvegardes privées

## Installer via Docker

OMV prend en charge Docker via le plugin omv-extras. Exécutez RcloneView comme un conteneur avec vos dossiers partagés montés en tant que volumes.

## Flux de travail clés

### Sauvegarder les partages vers le cloud

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OMV to cloud backup" class="img-large img-center" />

### Planifier des sauvegardes hors site nocturnes

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OMV backup" class="img-large img-center" />

### Vérifier l'intégrité de la sauvegarde

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify OMV backup" class="img-large img-center" />

### Chiffrer les données sensibles

Utilisez des distants crypt pour chiffrer les sauvegardes avant qu'elles ne quittent votre réseau.

## Configuration recommandée

| Partage OMV | Destination de sauvegarde | Planification |
|-----------|-------------------|----------|
| Documents | Google Drive | Toutes les 6 heures |
| Photos | Backblaze B2 | Chaque nuit |
| Média | Wasabi | Chaque nuit |
| Configuration système | B2 | Hebdomadaire |

## Pour commencer

1. **Installez Docker** sur OMV via omv-extras.
2. **Déployez RcloneView** comme conteneur.
3. **Montez vos partages** en tant que volumes du conteneur.
4. **Ajoutez des comptes cloud** et créez des tâches de sauvegarde.
5. **Planifiez et vérifiez**.

NAS DIY, sauvegarde cloud de qualité professionnelle.

---

**Guides associés :**

- [Exécuter RcloneView dans Docker](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [Exécuter RcloneView sur TrueNAS](https://rcloneview.com/support/blog/rcloneview-truenas-cloud-backup-sync)
- [Exécuter RcloneView sur Unraid](https://rcloneview.com/support/blog/run-rcloneview-unraid-server-cloud-sync)

<CloudSupportGrid />
