---
slug: manage-oracle-cloud-storage-sync-rcloneview
title: "Gérer Oracle Cloud Object Storage — Synchronisation et sauvegarde avec RcloneView"
authors:
  - tayson
description: "Connectez Oracle Cloud Object Storage à RcloneView à l'aide de clés d'accès compatibles S3, parcourez vos buckets et exécutez facilement des tâches automatisées de synchronisation et de sauvegarde."
keywords:
  - Oracle Cloud Object Storage
  - RcloneView
  - S3-compatible
  - cloud sync
  - cloud backup
  - OCI storage
  - object storage
  - rclone oracle
tags:
  - oracle-cloud
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer Oracle Cloud Object Storage — Synchronisation et sauvegarde avec RcloneView

> Oracle Cloud Object Storage offre des tarifs compétitifs et des SLA d'entreprise solides — RcloneView vous donne une interface graphique simple pour gérer, synchroniser et sauvegarder vos buckets OCI.

Oracle Cloud Infrastructure (OCI) Object Storage est un espace de stockage d'objets entièrement compatible S3, avec un généreux niveau Always Free et des garanties de durabilité de niveau entreprise. Les équipes qui exploitent des charges de travail sur OCI, ou qui recherchent une alternative économique à AWS S3, trouveront Oracle Cloud Object Storage particulièrement intéressant. RcloneView s'y connecte via l'API compatible S3, offrant une interface graphique complète pour la gestion des buckets, les transferts de fichiers et les tâches de synchronisation automatisées — sans ligne de commande.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurer Oracle Cloud Object Storage dans RcloneView

Pour connecter RcloneView à Oracle Cloud Object Storage, vous avez besoin de trois éléments : une **Customer Access Key** (et non votre clé API OCI), le **namespace**, et le **point de terminaison régional**. Générez la clé d'accès dans la console OCI, sous votre profil utilisateur > Customer Secret Keys. Le format du point de terminaison est `https://<namespace>.compat.objectstorage.<region>.oraclecloud.com` — par exemple, `https://axyz1234abcd.compat.objectstorage.us-ashburn-1.oraclecloud.com`.

Dans RcloneView, cliquez sur **New Remote**, sélectionnez **S3 Compatible Storage**, puis choisissez **Oracle Cloud Infrastructure Object Storage** dans le menu déroulant des fournisseurs. Collez votre Access Key ID, votre Secret Key et le point de terminaison régional. Renseignez le champ région avec le code de région OCI correspondant. Cliquez sur **Save** et RcloneView se connectera immédiatement et affichera la liste de vos buckets.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Oracle Cloud Object Storage remote in RcloneView" class="img-large img-center" />

## Parcourir les buckets et gérer les fichiers

Une fois connecté, Oracle Cloud Object Storage se comporte comme n'importe quel autre distant dans l'explorateur à double panneau de RcloneView. Naviguez dans les espaces de noms des buckets et les préfixes d'objets, importez des fichiers par glisser-déposer, et téléchargez des objets sur votre machine locale. RcloneView affiche des indicateurs de transfert en temps réel pour suivre la progression des téléversements volumineux.

Si vous utilisez plusieurs régions OCI pour la redondance géographique, ajoutez chaque point de terminaison régional comme distant nommé distinct. Vous pourrez ensuite les ouvrir côte à côte dans l'explorateur et copier des objets directement d'une région à l'autre via un transfert cloud-à-cloud — sans téléchargement local requis.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud file transfer between OCI buckets in RcloneView" class="img-large img-center" />

## Créer des tâches de synchronisation pour la sauvegarde

L'**assistant de tâches** (Job Wizard) de RcloneView vous guide en quatre étapes pour créer une tâche de synchronisation vers ou depuis Oracle Cloud Object Storage : choisir la source, choisir la destination, configurer les options, puis vérifier avant l'exécution. Utilisez d'abord le mode **dry run** pour voir exactement quels fichiers seraient transférés ou supprimés — ceci est particulièrement important lors d'une synchronisation vers OCI, car les opérations de synchronisation peuvent supprimer des fichiers dans la destination qui n'existent plus à la source.

Le panneau **Job History** enregistre chaque exécution de tâche avec horodatage et statistiques de transfert, offrant une piste d'audit à des fins de conformité. Les utilisateurs de la licence PLUS peuvent ajouter une **planification** à chaque tâche pour que les sauvegardes s'exécutent automatiquement — par exemple, chaque nuit à 2 h — sans aucune action manuelle.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log for Oracle Cloud sync jobs in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Générez une **Customer Secret Key** dans la console OCI et notez votre namespace et votre région.
3. Dans RcloneView, cliquez sur **New Remote** > **S3 Compatible Storage** > **Oracle Cloud Infrastructure Object Storage**.
4. Saisissez votre Access Key ID, votre Secret Key et l'URL du point de terminaison régional.
5. Parcourez vos buckets et utilisez l'**assistant de tâches** pour créer votre première tâche de synchronisation ou de sauvegarde.

La compatibilité S3 d'Oracle Cloud Object Storage en fait un ajout facile à toute stratégie multicloud gérée via RcloneView.

---

**Guides associés :**

- [Gérer Amazon S3 — Synchronisation et sauvegarde avec RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Centraliser S3, Wasabi et R2 avec RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)
- [Gérer IDrive e2 — Synchronisation et sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
