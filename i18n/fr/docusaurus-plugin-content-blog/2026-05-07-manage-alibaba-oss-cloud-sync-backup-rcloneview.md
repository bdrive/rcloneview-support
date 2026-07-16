---
slug: manage-alibaba-oss-cloud-sync-backup-rcloneview
title: "Gérer Alibaba Cloud OSS — Synchronisation et sauvegarde de fichiers avec RcloneView"
authors:
  - tayson
description: "Découvrez comment connecter Alibaba Cloud OSS à RcloneView, parcourir vos buckets et exécuter des tâches de synchronisation et de sauvegarde pour vos charges de travail en Asie-Pacifique et en Chine."
keywords:
  - Alibaba Cloud OSS
  - RcloneView
  - stockage compatible S3
  - synchronisation cloud
  - sauvegarde cloud
  - stockage objet
  - cloud Asie-Pacifique
  - rclone OSS
tags:
  - alibaba-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer Alibaba Cloud OSS — Synchronisation et sauvegarde de fichiers avec RcloneView

> Alibaba Cloud OSS est une plateforme de stockage objet de premier plan pour les charges de travail en Asie-Pacifique — et RcloneView facilite la navigation, la synchronisation et la sauvegarde de vos buckets sans passer par la ligne de commande.

Alibaba Cloud Object Storage Service (OSS) est la plateforme de stockage de référence pour les équipes ayant des exigences de résidence des données en Chine ou dans la région Asie-Pacifique. Que vous archiviez des fichiers multimédias volumineux, sauvegardiez des données d'application ou synchronisiez des jeux de données entre régions, RcloneView offre une interface graphique claire au-dessus du support OSS éprouvé de rclone. Aucune installation séparée de rclone n'est nécessaire — RcloneView est fourni avec un binaire rclone intégré.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ajouter Alibaba Cloud OSS comme remote

Ouvrez RcloneView et cliquez sur le bouton **New Remote** dans la barre latérale. Dans la liste des fournisseurs, sélectionnez **S3 Compatible Storage**, puis choisissez **Alibaba OSS** comme fournisseur (ou, si disponible, sélectionnez le type dédié **Alibaba Cloud Object Storage**). Vous aurez besoin de votre **Access Key ID**, de votre **Access Key Secret** et du point de terminaison OSS correct pour votre région — par exemple, `oss-cn-hangzhou.aliyuncs.com` pour l'Est de la Chine ou `oss-ap-southeast-1.aliyuncs.com` pour Singapour.

Une fois les identifiants saisis, RcloneView valide la connexion et affiche immédiatement la liste de vos buckets. Si votre bucket se trouve dans une région spécifique, assurez-vous que le point de terminaison correspond — une incompatibilité est la cause la plus fréquente d'échecs de connexion avec OSS.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Alibaba Cloud OSS remote in RcloneView" class="img-large img-center" />

## Parcourir les buckets et transférer des fichiers

Une fois le remote ajouté, le remote Alibaba OSS apparaît dans l'explorateur de fichiers à deux volets. Vous pouvez parcourir les dossiers et objets comme sur un système de fichiers local. Faites glisser-déposer des fichiers depuis votre disque local vers un bucket OSS, ou déplacez des objets directement entre préfixes OSS. RcloneView affiche la progression du transfert en temps réel afin que vous connaissiez toujours l'état de vos téléversements volumineux.

Pour les équipes disposant de plusieurs buckets OSS répartis sur différentes régions, vous pouvez ajouter chaque point de terminaison régional comme remote distinct et tous les gérer depuis une seule fenêtre RcloneView. Cela simplifie les mouvements de données entre régions sans jongler entre plusieurs sessions en ligne de commande.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud file transfer using RcloneView" class="img-large img-center" />

## Exécuter des tâches de synchronisation et de sauvegarde

La véritable puissance de RcloneView pour les workflows OSS réside dans son système de tâches de synchronisation. Utilisez l'**Job Wizard** pour créer une tâche de synchronisation depuis n'importe quel dossier local ou remote cloud vers votre bucket OSS en quatre étapes guidées. Une option de **dry run** vous permet de prévisualiser les fichiers qui seraient transférés avant de valider — essentiel lorsque vous travaillez avec de grands buckets OSS.

La fonctionnalité **1:N sync** de RcloneView vous permet de synchroniser une source vers plusieurs buckets OSS simultanément, ce qui est utile pour maintenir des copies redondantes entre régions OSS. Le **Job Manager** suit toutes les tâches en cours, tandis que l'**Job History** vous donne un journal complet des transferts passés à des fins d'audit. Les détenteurs d'une licence PLUS peuvent planifier ces tâches sur une minuterie récurrente afin que les sauvegardes s'exécutent automatiquement sans intervention manuelle.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a sync job for Alibaba OSS in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Cliquez sur **New Remote**, sélectionnez **S3 Compatible Storage**, puis choisissez **Alibaba OSS** comme fournisseur.
3. Saisissez votre **Access Key ID**, votre **Access Key Secret** et le point de terminaison régional OSS.
4. Parcourez vos buckets dans l'explorateur à deux volets et faites glisser des fichiers pour les transférer.
5. Ouvrez le **Job Manager**, utilisez l'assistant pour créer une tâche de synchronisation, et exécutez un dry run avant votre première synchronisation réelle.

Alibaba Cloud OSS s'intègre naturellement dans tout workflow de données en Asie-Pacifique, et RcloneView supprime la barrière de la ligne de commande afin que toute votre équipe puisse gérer le stockage en toute confiance.

---

**Guides connexes :**

- [Gérer Amazon S3 — Synchronisation et sauvegarde avec RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Gérer Cloudflare R2 — Synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Centraliser S3, Wasabi et R2 avec RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
