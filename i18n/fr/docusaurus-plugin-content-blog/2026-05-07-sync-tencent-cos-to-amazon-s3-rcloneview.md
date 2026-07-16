---
slug: sync-tencent-cos-to-amazon-s3-rcloneview
title: "Synchroniser Tencent COS vers Amazon S3 — Sauvegarde cloud avec RcloneView"
authors:
  - tayson
description: "Découvrez comment synchroniser les données Tencent Cloud COS vers Amazon S3 avec RcloneView pour une disponibilité mondiale, une redondance inter-régions et des tâches de sauvegarde cloud automatisées."
keywords:
  - Tencent COS to S3
  - Tencent COS sync
  - Amazon S3 backup
  - RcloneView Tencent
  - cloud-to-cloud sync
  - S3-compatible storage
  - China cloud to global
  - cross-region cloud sync
tags:
  - tencent-cos
  - amazon-s3
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Tencent COS vers Amazon S3 — Sauvegarde cloud avec RcloneView

> Les entreprises utilisant Tencent Cloud COS pour leurs données en région Chine peuvent utiliser RcloneView pour synchroniser ces données vers Amazon S3, afin d'assurer une disponibilité mondiale et une redondance inter-régions.

Tencent Cloud Object Storage (COS) est largement utilisé par les entreprises ayant des utilisateurs ou des opérations en Chine continentale, où il offre une faible latence et une conformité aux réglementations locales sur les données. Cependant, pour la disponibilité mondiale ou la reprise après sinistre, les organisations doivent souvent répliquer ces données vers Amazon S3, qui bénéficie d'une portée internationale plus large. RcloneView simplifie cette synchronisation inter-cloud grâce à sa prise en charge des distants compatibles S3 pour les deux fournisseurs, le tout géré depuis une seule interface graphique.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configuration du distant Tencent COS

Tencent COS et Amazon S3 sont tous deux compatibles S3, RcloneView les gère donc via le même cadre de fournisseur S3. Cliquez sur **New Remote** dans RcloneView et sélectionnez **S3 Compatible Storage**. Dans le menu déroulant des fournisseurs, choisissez **Tencent Cloud COS**. Saisissez votre **SecretId** et votre **SecretKey** Tencent Cloud depuis la console Tencent Cloud, ainsi que le bon **endpoint** pour votre région COS — par exemple `cos.ap-guangzhou.myqcloud.com` pour Guangzhou.

Après l'enregistrement, le distant Tencent COS apparaît dans l'explorateur à double volet. Vous pouvez parcourir vos buckets et objets COS, vérifier que le contenu est accessible, et confirmer que les structures de dossiers sont conformes avant de configurer la tâche de synchronisation.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Tencent Cloud COS as an S3-compatible remote in RcloneView" class="img-large img-center" />

## Ajout d'Amazon S3 comme destination

Cliquez à nouveau sur **New Remote** et sélectionnez **Amazon S3**. Saisissez votre **Access Key ID** et votre **Secret Access Key** AWS, puis indiquez la région AWS où se trouve votre bucket de destination. Si votre bucket de destination n'existe pas encore, créez-le d'abord dans la console AWS S3 — RcloneView s'y connectera lors de la configuration.

Une fois les deux distants configurés, ouvrez-les côte à côte dans l'explorateur à double volet pour comparer le contenu et vérifier la connectivité. Vous pouvez effectuer un contrôle ponctuel en parcourant quelques dossiers de chaque côté avant de lancer une tâche de synchronisation complète.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud view of Tencent COS and Amazon S3 in RcloneView" class="img-large img-center" />

## Création et planification de la tâche de synchronisation

Ouvrez le **Job Manager** et lancez le **Job Wizard**. Définissez le bucket Tencent COS (ou un préfixe spécifique) comme source et votre bucket Amazon S3 comme destination. Avant de lancer la synchronisation réelle, utilisez l'option **dry run** pour prévisualiser ce qui sera transféré. Pour la migration initiale en masse d'un bucket COS existant, le dry run permet d'estimer le volume de transfert et de détecter d'éventuels problèmes de chemin ou d'encodage.

Une fois la tâche exécutée avec succès, envisagez de la planifier selon une récurrence régulière. Les utilisateurs de la licence PLUS peuvent configurer des tâches de synchronisation automatiques s'exécutant quotidiennement ou hebdomadairement, maintenant ainsi la réplique S3 à jour à mesure que de nouvelles données arrivent dans Tencent COS. Le panneau **Job History** enregistre chaque exécution, vous donnant une visibilité sur les volumes transférés et les éventuelles erreurs.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Tencent COS to Amazon S3 sync in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez un distant **Tencent Cloud COS** via **New Remote** > **S3 Compatible Storage** > **Tencent Cloud COS**.
3. Ajoutez un distant **Amazon S3** avec vos identifiants AWS.
4. Utilisez le **Job Wizard** pour créer une tâche de synchronisation de COS vers S3, et lancez d'abord un dry run.
5. Planifiez des tâches de synchronisation récurrentes avec une licence PLUS pour une réplication inter-cloud continue.

Synchroniser Tencent COS vers Amazon S3 avec RcloneView est l'un des moyens les plus efficaces d'obtenir une disponibilité mondiale des données à partir d'un stockage principal en région Chine.

---

**Guides connexes :**

- [Gérer Tencent COS — Synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/manage-tencent-cos-cloud-sync-rcloneview)
- [Gérer Amazon S3 — Synchronisation cloud et sauvegarde avec RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Centraliser S3, Wasabi et R2 avec RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
