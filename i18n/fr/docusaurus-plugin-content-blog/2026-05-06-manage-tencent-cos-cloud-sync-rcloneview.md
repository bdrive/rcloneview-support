---
slug: manage-tencent-cos-cloud-sync-rcloneview
title: "Gérer le stockage Tencent COS — Synchroniser et sauvegarder des fichiers avec RcloneView"
authors:
  - tayson
description: "Connectez Tencent Cloud Object Storage (COS) à RcloneView et gérez vos fichiers avec une interface graphique. Synchronisez, sauvegardez et transférez vos données Tencent COS via une interface compatible S3."
keywords:
  - gestion Tencent COS
  - synchronisation RcloneView Tencent COS
  - sauvegarde Tencent Cloud Object Storage
  - interface graphique de transfert de fichiers Tencent COS
  - Tencent COS rclone
  - gérer Tencent COS avec RcloneView
  - interface graphique de stockage cloud Tencent
  - gestion de stockage compatible S3
  - outil de sauvegarde Tencent COS
  - gestion de stockage cloud en Chine
tags:
  - tencent-cos
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage Tencent COS — Synchroniser et sauvegarder des fichiers avec RcloneView

> RcloneView se connecte à Tencent Cloud Object Storage via des identifiants compatibles S3, vous permettant de parcourir, synchroniser et sauvegarder vos buckets COS depuis une interface graphique de bureau.

Tencent Cloud Object Storage (COS) est l'une des plus grandes plateformes de stockage d'objets en Chine, utilisée par des entreprises exécutant des applications sur l'infrastructure Tencent Cloud. Les équipes d'ingénierie, les sociétés de médias et les opérateurs de pipelines de données qui doivent gérer des buckets COS aux côtés d'autres clouds mondiaux profitent de l'interface unifiée de RcloneView — plus besoin de basculer entre plusieurs tableaux de bord ni d'apprendre des interfaces en ligne de commande spécifiques à chaque plateforme.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Tencent COS à RcloneView

Tencent COS prend en charge l'API compatible S3, donc sa connexion à RcloneView utilise le type de fournisseur Amazon S3 avec des paramètres spécifiques à COS. Dans RcloneView, allez dans l'onglet Remote > New Remote, sélectionnez Amazon S3, puis renseignez :

- **Access Key ID** et **Secret Access Key** depuis votre console Tencent Cloud (identifiants CAM)
- **Region** correspondant à la région de votre bucket COS (par exemple, `ap-guangzhou`)
- **Endpoint** défini sur votre point de terminaison COS (par exemple, `cos.ap-guangzhou.myqcloud.com`)
- **Provider** défini sur Tencent COS dans le menu déroulant des fournisseurs S3

Une fois enregistré, vos buckets COS apparaissent dans l'explorateur de fichiers. Vous pouvez parcourir, téléverser, télécharger, renommer, supprimer et organiser vos fichiers comme pour n'importe quel autre distant compatible S3.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Tencent COS as an S3-compatible remote in RcloneView" class="img-large img-center" />

## Synchroniser des données entre Tencent COS et les clouds mondiaux

Un cas d'usage puissant consiste à synchroniser des données entre Tencent COS (utilisé pour diffuser du contenu en Chine) et un fournisseur mondial comme Amazon S3 ou Cloudflare R2 (utilisé pour la diffusion internationale). Le moteur de synchronisation cloud-à-cloud de RcloneView déplace les données directement sans les télécharger sur votre machine locale, ce qui rend ce miroir interrégional pratique même pour de grands ensembles de données.

Configurez une tâche de synchronisation dans RcloneView avec COS comme source et S3 comme destination. Activez la vérification par somme de contrôle pour garantir l'intégrité des données pendant le transfert — essentiel lors de la réplication de données de production entre régions.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Tencent COS buckets to another cloud provider in RcloneView" class="img-large img-center" />

## Automatiser les tâches de sauvegarde COS (PLUS)

Avec une licence PLUS, planifiez des tâches de synchronisation Tencent COS récurrentes à n'importe quel intervalle cron. Une société de médias encodant des vidéos sur Tencent Cloud pourrait planifier une tâche nocturne pour archiver les fichiers traités depuis COS vers Backblaze B2 ou Wasabi, pour un stockage à long terme économique. Le filtre **Max file age** vous permet de cibler uniquement les objets récemment modifiés, gardant la durée de la tâche gérable.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Tencent COS backup jobs in RcloneView" class="img-large img-center" />

## Surveiller et auditer les transferts COS

L'onglet Transfer de RcloneView affiche la progression en direct de la synchronisation COS avec la vitesse et le pourcentage par fichier. Après chaque tâche, l'historique des tâches (Job History) enregistre des statistiques de transfert complètes — octets déplacés, durée, nombre de fichiers et détails des erreurs — fournissant la piste d'audit dont les équipes d'exploitation cloud ont besoin pour l'attribution des coûts et les rapports de conformité.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Tencent COS sync operations in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Allez dans l'onglet Remote > New Remote, sélectionnez Amazon S3, puis choisissez Tencent COS comme fournisseur S3.
3. Saisissez votre Access Key CAM, votre Secret Key, la région et l'URL du point de terminaison COS.
4. Parcourez vos buckets COS et configurez des tâches de synchronisation ou de sauvegarde vers d'autres fournisseurs.

Gérer Tencent COS aux côtés de fournisseurs cloud mondiaux devient simple lorsque RcloneView unifie tout votre stockage sous une seule interface.

---

**Guides connexes :**

- [Gérer le stockage Amazon S3 — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Gérer le stockage Cloudflare R2 — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Centraliser vos buckets S3, Wasabi et R2 avec RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
