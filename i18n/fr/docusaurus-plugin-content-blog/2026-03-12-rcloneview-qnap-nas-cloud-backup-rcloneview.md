---
slug: rcloneview-qnap-nas-cloud-backup-rcloneview
title: "Utiliser RcloneView avec un NAS QNAP — Sauvegarde cloud et synchronisation multi-cloud pour votre NAS"
authors:
  - tayson
description: "Les propriétaires de NAS QNAP peuvent utiliser RcloneView pour la sauvegarde cloud vers S3, B2, Google Drive et plus encore. Découvrez comment connecter, synchroniser et automatiser les sauvegardes depuis votre NAS QNAP."
keywords:
  - qnap cloud backup
  - qnap nas rclone
  - qnap cloud sync
  - qnap s3 backup
  - qnap google drive sync
  - qnap multi cloud
  - qnap nas cloud storage
  - qnap backup tool
  - qnap rcloneview
  - qnap automated backup
tags:
  - RcloneView
  - qnap
  - nas
  - backup
  - cloud-storage
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Utiliser RcloneView avec un NAS QNAP — Sauvegarde cloud et synchronisation multi-cloud pour votre NAS

> Les appareils NAS QNAP stockent vos données les plus importantes localement. Mais un stockage uniquement local signifie un risque uniquement local — panne matérielle, incendie, vol ou inondation peuvent tout emporter. La sauvegarde cloud via RcloneView ajoute une protection hors site avec plus de 70 fournisseurs cloud.

Le NAS QNAP propose une synchronisation cloud intégrée via HBS 3 (Hybrid Backup Sync), mais son support des fournisseurs cloud est limité par rapport aux plus de 70 fournisseurs de rclone. RcloneView, exécuté sur un ordinateur ou un appareil dédié connecté à votre QNAP, vous donne accès à tous les fournisseurs pris en charge par rclone — en plus d'une gestion visuelle, d'une comparaison de dossiers et de tâches par lots.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter un QNAP à RcloneView

### Via partage réseau (SMB/CIFS)

Accédez aux dossiers partagés de votre QNAP depuis l'ordinateur exécutant RcloneView. Montez vos partages QNAP comme des lecteurs réseau, puis utilisez-les comme sources locales dans les tâches RcloneView.

### Via SFTP

Ajoutez votre QNAP comme distant SFTP :

1. Activez SFTP sur votre QNAP (Panneau de configuration → Services réseau et fichiers → Telnet/SSH).
2. Ajoutez un distant SFTP dans RcloneView avec l'adresse IP et les identifiants de votre QNAP.

<img src="/support/images/en/blog/new-remote.png" alt="Add QNAP NAS as remote" class="img-large img-center" />

## Flux de sauvegarde

### QNAP → Backblaze B2

Sauvegarde hors site abordable à 6 $/To/mois :

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Backup QNAP to B2" class="img-large img-center" />

### QNAP → AWS S3

Durabilité de niveau entreprise pour les données professionnelles critiques.

### QNAP → Google Drive

Rendez les fichiers du NAS accessibles pour la collaboration via Google Drive.

### Planifier des sauvegardes nocturnes

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule QNAP backup" class="img-large img-center" />

## Vérifier les sauvegardes

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify QNAP backup" class="img-large img-center" />

## QNAP HBS 3 vs RcloneView

| Fonctionnalité | QNAP HBS 3 | RcloneView |
|---------|-----------|------------|
| Fournisseurs cloud | ~15 | 70+ |
| S'exécute directement sur le NAS | ✅ | Sur un appareil connecté |
| Explorateur à deux volets | ❌ | ✅ |
| Comparaison de dossiers | ❌ | ✅ |
| Tâches par lots | ❌ | ✅ |
| Notifications | Email | Slack/Discord/Telegram |
| Distants chiffrés | Limité | ✅ (crypt) |

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Connectez-vous au QNAP** via partage réseau ou SFTP.
3. **Ajoutez des destinations de sauvegarde cloud**.
4. **Planifiez des sauvegardes automatisées**.
5. **Vérifiez avec la comparaison de dossiers**.

Les données de votre NAS méritent une protection hors site.

---

**Guides connexes :**

- [RcloneView sur NAS Synology](https://rcloneview.com/support/blog/run-rcloneview-synology-nas-docker-rcloneview)
- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
