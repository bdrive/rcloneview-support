---
slug: sync-idrive-e2-s3-google-drive-rcloneview
title: "Synchroniser IDrive e2 Object Storage avec AWS S3 ou Google Drive grâce à RcloneView"
authors:
  - tayson
description: "Gérez visuellement le stockage objet IDrive e2 — parcourez vos buckets, synchronisez vers AWS S3 ou Google Drive, et planifiez des sauvegardes grâce à la connexion S3 compatible de RcloneView."
keywords:
  - idrive e2 sync
  - idrive e2 backup
  - idrive e2 gui tool
  - idrive e2 to s3
  - idrive e2 rclone
  - idrive e2 file manager
  - idrive e2 mount local drive
  - idrive e2 google drive
  - idrive e2 object storage
  - s3 compatible storage gui
tags:
  - RcloneView
  - idrive-e2
  - s3-compatible
  - cloud-storage
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser IDrive e2 Object Storage avec AWS S3 ou Google Drive grâce à RcloneView

> IDrive e2 propose un stockage compatible S3 incroyablement abordable à 0,004 $/Go/mois. Mais sans client de synchronisation pour ordinateur, la gestion des fichiers passe par des appels API ou une interface web. RcloneView vous offre une interface visuelle complète.

IDrive e2 est l'un des services de stockage objet compatibles S3 les plus économiques du marché — moins cher que Backblaze B2, Wasabi et AWS S3. Il est idéal pour les sauvegardes, les archives et le stockage à froid. Mais comme la plupart des fournisseurs de stockage objet, IDrive e2 ne dispose pas de client natif pour ordinateur. RcloneView se connecte via l'API S3 et vous offre une gestion visuelle des fichiers, une synchronisation cloud à cloud et une automatisation planifiée.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi choisir IDrive e2 ?

| Fournisseur | Coût par To/mois | Sortie de données |
|----------|-------------------|--------|
| IDrive e2 | 4,00 $ | Gratuit (3x le stockage) |
| Backblaze B2 | 6,00 $ | 0,01 $/Go |
| Wasabi | 6,99 $ | Gratuit |
| AWS S3 Standard | 23,00 $ | 0,09 $/Go |

La tarification d'IDrive e2 en fait un choix attrayant pour quiconque recherche un stockage objet abordable et fiable.

## Connecter IDrive e2

Étant donné qu'IDrive e2 est compatible S3 :

1. Cliquez sur **Add Remote** → sélectionnez **Amazon S3**.
2. Choisissez **IDrive e2** ou **Other** dans la liste déroulante des fournisseurs S3.
3. Saisissez vos identifiants :
   - **Access Key** et **Secret Key** issus du tableau de bord IDrive e2.
   - **Endpoint** : votre point de terminaison régional (par exemple, `https://s3.us-west-1.idrivecloud.io`).
4. Enregistrez — vos buckets e2 sont désormais accessibles.

<img src="/support/images/en/blog/new-remote.png" alt="Add IDrive e2 as S3-compatible remote" class="img-large img-center" />

## Parcourir et gérer

Affichez les buckets IDrive e2 aux côtés de n'importe quel autre cloud :

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse IDrive e2 buckets" class="img-large img-center" />

## Scénarios de synchronisation

### Google Drive → IDrive e2 (sauvegarde économique)

Utilisez e2 comme sauvegarde à faible coût pour votre Google Drive :

1. Créez une tâche de copie : Google Drive → bucket IDrive e2.
2. Planifiez-la chaque nuit avec la [planification de tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution).
3. Ne payez qu'une fraction du prix demandé par Google pour les mêmes données.

### IDrive e2 → AWS S3 (redondance multi-cloud)

1. Créez une tâche de synchronisation : IDrive e2 → bucket S3.
2. Maintenez la redondance entre deux fournisseurs compatibles S3 différents.

### Local/NAS → IDrive e2 (archive hors site)

1. Créez une tâche de copie : dossier local ou NAS → IDrive e2.
2. Parfait pour une sauvegarde hors site à coût minimal.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run IDrive e2 sync job" class="img-large img-center" />

## Monter comme lecteur local

Accédez à IDrive e2 comme à un dossier classique :

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount IDrive e2 as local drive" class="img-large img-center" />

## Automatiser et surveiller

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule IDrive e2 backups" class="img-large img-center" />

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor IDrive e2 transfers" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez IDrive e2** en tant que remote compatible S3.
3. **Parcourez, montez ou synchronisez** vers n'importe quelle destination.
4. **Planifiez** pour automatiser des sauvegardes cloud à faible coût.

IDrive e2 est le roi du stockage objet économique. RcloneView lui offre l'expérience bureau qu'il mérite.

---

**Guides connexes :**

- [Ajouter AWS S3 et les services compatibles S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Monter un stockage cloud comme lecteur local](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Comparer le contenu de dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Planification de tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
