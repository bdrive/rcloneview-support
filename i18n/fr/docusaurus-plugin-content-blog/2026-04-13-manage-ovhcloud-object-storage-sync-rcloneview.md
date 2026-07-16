---
slug: manage-ovhcloud-object-storage-sync-rcloneview
title: "Gérer le stockage objet OVHcloud — Synchronisation et sauvegarde avec RcloneView"
authors:
  - tayson
description: "Connectez le stockage objet OVHcloud à RcloneView à l'aide d'identifiants compatibles S3 et synchronisez vos buckets européens conformes au RGPD avec n'importe quel fournisseur cloud."
keywords:
  - OVHcloud object storage RcloneView
  - OVHcloud S3 sync
  - OVHcloud backup rclone
  - OVHcloud cloud storage GUI
  - European GDPR cloud sync
  - OVHcloud bucket transfer
  - S3-compatible object storage
  - OVHcloud rcloneview setup
tags:
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage objet OVHcloud — Synchronisation et sauvegarde avec RcloneView

> Le stockage objet OVHcloud est un service compatible S3 conforme au RGPD hébergé en Europe — RcloneView le connecte à l'ensemble de votre écosystème cloud à l'aide d'une clé d'accès, d'une clé secrète et d'un endpoint.

OVHcloud est l'un des plus grands fournisseurs cloud d'Europe, proposant un stockage objet dans plusieurs régions en France, en Allemagne, au Royaume-Uni et au-delà. Son interface compatible S3 signifie que RcloneView peut s'y connecter exactement comme à AWS S3 — vous fournissez des identifiants et un endpoint, et vous êtes prêt à parcourir, transférer et automatiser des sauvegardes. Pour les organisations ayant des exigences de résidence des données européennes, OVHcloud combiné à RcloneView est une solution pratique et auditable.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Récupérer vos identifiants S3 OVHcloud

OVHcloud fournit un accès compatible S3 via son offre **High Performance Object Storage**. Pour obtenir des identifiants, connectez-vous au Control Panel OVHcloud, ouvrez votre projet, et accédez à **Object Storage**. Sous **S3 users**, créez un nouvel utilisateur et téléchargez la clé d'accès (Access Key) et la clé secrète (Secret Key). Notez l'endpoint correspondant à votre région — par exemple, `s3.rbx.io.cloud.ovh.net` pour Roubaix ou `s3.gra.io.cloud.ovh.net` pour Gravelines.

Gardez l'URL de l'endpoint à portée de main ; elle identifie la région où se trouvent vos buckets et doit correspondre à ce que vous saisissez dans RcloneView.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring OVHcloud Object Storage as a new remote in RcloneView" class="img-large img-center" />

## Connecter OVHcloud à RcloneView

Ouvrez RcloneView, allez dans **Remote Manager**, et cliquez sur **New Remote**. Sélectionnez **S3 Compatible** dans la liste des fournisseurs et remplissez les champs suivants :

- **Access Key ID** : la clé provenant de la page S3 users d'OVHcloud
- **Secret Access Key** : la clé secrète correspondante
- **Endpoint** : votre endpoint régional (par exemple, `s3.gra.io.cloud.ovh.net`)

Enregistrez le distant et ouvrez-le dans l'explorateur de fichiers. Vos buckets OVHcloud apparaissent au niveau racine. Accédez à n'importe quel bucket pour voir son contenu organisé par préfixe.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer between OVHcloud and another provider" class="img-large img-center" />

## Synchroniser OVHcloud avec d'autres fournisseurs cloud

Ouvrez un second panneau dans RcloneView pointant vers un autre distant — Google Drive, Backblaze B2, un autre fournisseur compatible S3, ou un dossier local. Glissez-déposez des fichiers entre les panneaux, ou effectuez un clic droit pour copier des répertoires entiers. Pour les migrations de buckets volumineuses, le système de **Job** est plus fiable : configurez la source et la destination, définissez la concurrence et les limites de bande passante à l'étape 2, et activez éventuellement la vérification par somme de contrôle.

L'API S3 d'OVHcloud prend en charge les téléversements multipart pour les objets volumineux, et RcloneView en tire parti automatiquement lorsqu'il détecte des fichiers dépassant un certain seuil de taille. Cela garantit un transfert fiable des fichiers vidéo volumineux, des dumps de base de données ou des archives, sans atteindre les limites de taille par requête unique.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of OVHcloud transfer progress" class="img-large img-center" />

## Planifier des sauvegardes régulières

Avec une licence PLUS, vous pouvez planifier des jobs de synchronisation OVHcloud pour qu'ils s'exécutent automatiquement. Allez dans **Jobs**, configurez le job, et à l'étape 3 définissez une planification cron — par exemple, `0 3 * * *` pour synchroniser chaque nuit à 3 h. Cela est particulièrement utile pour les pipelines de sauvegarde où des données de production stockées ailleurs nécessitent une copie secondaire dans OVHcloud pour la conformité en matière de résidence des données européennes.

**Job History** enregistre chaque exécution : fichiers transférés, volume de données, vitesse de transfert et erreurs éventuelles. Si un job nocturne échoue, l'entrée du journal indique exactement quels fichiers ont posé problème afin que vous puissiez enquêter rapidement.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Créez un utilisateur S3 dans le Control Panel OVHcloud et notez la clé d'accès, la clé secrète et l'endpoint régional.
3. Ouvrez **Remote Manager** dans RcloneView, cliquez sur **New Remote**, sélectionnez **S3 Compatible**, et saisissez vos identifiants.
4. Parcourez vos buckets et configurez des jobs de synchronisation pour intégrer OVHcloud dans votre stratégie cloud plus large.

L'infrastructure européenne d'OVHcloud et le système de jobs flexible de RcloneView forment une combinaison fiable pour des flux de travail multi-cloud respectueux du RGPD.

---

**Guides connexes :**

- [Gérer le stockage objet Scaleway — Synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Gérer la synchronisation et la sauvegarde cloud IDrive E2](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [Automatiser les sauvegardes cloud quotidiennes avec RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
