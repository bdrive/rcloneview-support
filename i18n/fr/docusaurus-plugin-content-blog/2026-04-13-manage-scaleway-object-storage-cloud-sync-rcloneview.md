---
slug: manage-scaleway-object-storage-cloud-sync-rcloneview
title: "Gérer Scaleway Object Storage — Synchronisation et sauvegarde cloud avec RcloneView"
authors:
  - tayson
description: "Connectez Scaleway Object Storage à RcloneView à l'aide d'identifiants compatibles S3 et synchronisez vos buckets cloud européens avec n'importe quel autre fournisseur rapidement."
keywords:
  - Scaleway object storage RcloneView
  - Scaleway S3 compatible sync
  - Scaleway cloud backup
  - Scaleway rclone GUI
  - European cloud storage sync
  - Scaleway bucket transfer
  - S3 compatible cloud sync
  - Scaleway rcloneview setup
tags:
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer Scaleway Object Storage — Synchronisation et sauvegarde cloud avec RcloneView

> Scaleway Object Storage est un service cloud européen compatible S3 — connectez-le à RcloneView en quelques minutes à l'aide d'une clé d'accès, d'une clé secrète et d'une URL de point de terminaison.

Scaleway est un fournisseur cloud français proposant un stockage d'objets compatible S3 dans plusieurs régions européennes. C'est un choix solide pour les équipes qui ont besoin d'un stockage conforme au RGPD à un tarif compétitif. RcloneView prend en charge tout fournisseur compatible S3, ce qui signifie que vous pouvez connecter Scaleway, parcourir vos buckets et configurer des tâches de synchronisation aux côtés de tous vos autres distants cloud — sans ligne de commande.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Obtenir vos identifiants Scaleway

Avant de vous connecter dans RcloneView, vous avez besoin d'une **clé d'accès** (Access Key) et d'une **clé secrète** (Secret Key) depuis la console Scaleway. Connectez-vous à console.scaleway.com, accédez à **Credentials** dans votre projet ou organisation, et générez une nouvelle clé API. Notez bien la clé secrète — elle n'est affichée qu'une seule fois. Notez également le point de terminaison de votre région, qui suit le format `s3.{region}.scw.cloud` (par exemple, `s3.nl-ams.scw.cloud` pour Amsterdam ou `s3.fr-par.scw.cloud` pour Paris).

Ces trois valeurs — clé d'accès, clé secrète et point de terminaison — sont tout ce dont vous avez besoin pour configurer Scaleway dans RcloneView.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Scaleway S3-compatible remote in RcloneView" class="img-large img-center" />

## Connecter Scaleway à RcloneView

Ouvrez RcloneView et accédez à **Remote Manager**. Cliquez sur **New Remote** et sélectionnez **S3 Compatible** dans la liste des fournisseurs. Dans le formulaire de configuration, saisissez :

- **Provider** : Other (S3-compatible)
- **Access Key ID** : votre clé d'accès Scaleway
- **Secret Access Key** : votre clé secrète Scaleway
- **Endpoint** : le point de terminaison de votre région (par exemple, `s3.nl-ams.scw.cloud`)

Laissez le champ région vide ou saisissez le code de région Scaleway si demandé. Enregistrez le distant, il apparaîtra alors dans votre Remote Manager. Cliquez sur **Open** pour parcourir vos buckets Scaleway dans l'explorateur de fichiers.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Scaleway transfer in real time" class="img-large img-center" />

## Parcourir les buckets et transférer des fichiers

L'explorateur de fichiers affiche vos buckets Scaleway au niveau supérieur. Naviguez dans un bucket pour voir ses objets et préfixes de dossiers. Vous pouvez sélectionner des fichiers et des répertoires, puis les copier ou les déplacer vers un autre distant ouvert dans le second panneau — qu'il s'agisse d'AWS S3, de Backblaze B2 ou d'un répertoire local.

Pour les grands ensembles de données, faites un clic droit sur un dossier et utilisez **Copy to** ou **Move to** pour lancer un transfert en masse. RcloneView affiche la progression en temps réel avec la vitesse de transfert et l'heure d'achèvement estimée.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring files between Scaleway and another cloud" class="img-large img-center" />

## Configurer des tâches de synchronisation planifiées

Pour les sauvegardes automatisées ou les pipelines de données réguliers entre Scaleway et d'autres fournisseurs, le système de **Job** s'en charge de manière fiable. Accédez à **Jobs**, cliquez sur **New Job**, et configurez Scaleway comme source ou destination. Dans les options avancées de la tâche, vous pouvez définir des limites de bande passante, contrôler la concurrence des transferts et activer la vérification de somme de contrôle pour confirmer l'intégrité des données.

Avec une licence PLUS, vous pouvez planifier des tâches à l'aide d'une syntaxe de type cron — par exemple, une synchronisation depuis un autre cloud vers Scaleway chaque nuit à 2h00. Les résultats des tâches sont enregistrés dans **Job History**, ce qui vous donne une vue claire du nombre de transferts et des éventuelles erreurs par exécution.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Récupérez votre clé d'accès Scaleway, votre clé secrète et le point de terminaison régional depuis la console Scaleway.
3. Ouvrez **Remote Manager**, cliquez sur **New Remote**, sélectionnez **S3 Compatible**, et saisissez vos identifiants.
4. Parcourez vos buckets et créez une tâche de synchronisation pour automatiser les sauvegardes vers ou depuis Scaleway.

L'infrastructure européenne de Scaleway s'associe bien au système de tâches multi-cloud de RcloneView pour des workflows respectueux du RGPD.

---

**Guides connexes :**

- [Synchroniser Google Cloud Storage vers Wasabi avec RcloneView](https://rcloneview.com/support/blog/sync-google-cloud-storage-to-wasabi-rcloneview)
- [Gérer la synchronisation et la sauvegarde cloud IDrive E2](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [Migrations cloud vérifiées par somme de contrôle avec RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
