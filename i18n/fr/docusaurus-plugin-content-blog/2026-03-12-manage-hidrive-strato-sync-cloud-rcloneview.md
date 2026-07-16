---
slug: manage-hidrive-strato-sync-cloud-rcloneview
title: "Gérer STRATO HiDrive — Synchronisation avec Google Drive, S3 et d'autres clouds grâce à RcloneView"
authors:
  - tayson
description: "STRATO HiDrive est un stockage cloud populaire en Allemagne et en Europe. Découvrez comment synchroniser et sauvegarder HiDrive avec Google Drive, S3 et d'autres fournisseurs grâce à RcloneView."
keywords:
  - hidrive cloud storage
  - strato hidrive sync
  - hidrive rclone
  - hidrive google drive
  - hidrive backup
  - hidrive file transfer
  - german cloud storage
  - strato hidrive backup
  - hidrive s3 sync
  - european cloud storage
tags:
  - hidrive
  - european-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer STRATO HiDrive — Synchronisation avec Google Drive, S3 et d'autres clouds grâce à RcloneView

> STRATO HiDrive est l'un des services de stockage cloud les plus populaires en Allemagne, offrant un stockage conforme au RGPD avec des serveurs situés dans l'UE. Mais si votre flux de travail inclut Google Drive, S3 ou des collaborateurs internationaux, vous avez besoin d'un moyen de combler cet écart.

HiDrive by STRATO est un fournisseur de stockage cloud européen de confiance, largement utilisé par les entreprises et les particuliers allemands. Les données stockées dans HiDrive restent sur des serveurs allemands, soumis aux lois strictes de l'UE en matière de protection des données. RcloneView connecte HiDrive à plus de 70 autres fournisseurs cloud, permettant la sauvegarde, la migration et les flux de travail multi-cloud tout en préservant la souveraineté de vos données au sein de l'UE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi HiDrive ?

- **Conformité RGPD** — Données stockées sur des serveurs allemands, régies par le droit de l'UE.
- **Infrastructure fiable** — STRATO est l'un des plus grands hébergeurs d'Europe.
- **Accès WebDAV/SFTP** — Protocoles standards pour l'intégration.
- **Tarification avantageuse** — Tarifs compétitifs pour un stockage cloud européen.

## Configurer HiDrive dans RcloneView

### Connexion via WebDAV ou SFTP

1. Ouvrez RcloneView et cliquez sur **Add Remote**.
2. Sélectionnez **WebDAV** ou **SFTP** comme type.
3. Saisissez l'URL du serveur HiDrive et vos identifiants.

<img src="/support/images/en/blog/new-remote.png" alt="Add HiDrive remote" class="img-large img-center" />

## Flux de travail clés

### HiDrive → S3 (sauvegarde hors site en dehors de l'UE)

Pour la reprise après sinistre entre régions, sauvegardez vers un autre fournisseur :

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule HiDrive backup" class="img-large img-center" />

### Google Drive → HiDrive (migration RGPD)

Déplacez des données depuis des clouds basés aux États-Unis vers HiDrive, conforme au RGPD :

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrate to HiDrive for GDPR" class="img-large img-center" />

### HiDrive → Google Drive (collaboration)

Synchronisez des dossiers spécifiques vers Google Drive pour la collaboration au sein d'équipes internationales.

### Sauvegarde chiffrée

Utilisez des distants crypt pour un chiffrement supplémentaire au-dessus du stockage HiDrive.

## Vérifier et surveiller

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify HiDrive sync" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez HiDrive** via WebDAV ou SFTP.
3. **Synchronisez avec d'autres clouds** pour la sauvegarde ou la collaboration.
4. **Planifiez des tâches automatisées**.

Souveraineté des données européenne, avec la flexibilité d'un cloud mondial.

---

**Guides associés :**

- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Chiffrer les sauvegardes cloud](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
