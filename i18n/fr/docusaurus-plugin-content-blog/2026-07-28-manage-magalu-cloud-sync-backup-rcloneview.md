---
slug: manage-magalu-cloud-sync-backup-rcloneview
title: "Gérer le stockage Magalu Cloud — Synchroniser et sauvegarder des fichiers avec RcloneView"
authors:
  - casey
description: "Connectez le stockage objet Magalu Cloud à RcloneView pour une gestion de fichiers par glisser-déposer, une synchronisation planifiée et des sauvegardes multi-cloud."
keywords:
  - Magalu Cloud RcloneView
  - GUI stockage objet Magalu
  - gérer le stockage Magalu Cloud
  - sauvegarde cloud compatible S3
  - outil de synchronisation Magalu Cloud
  - GUI stockage objet Brésil
  - gestionnaire de fichiers Magalu Cloud
  - RcloneView remote compatible S3
  - synchronisation et sauvegarde cloud
tags:
  - RcloneView
  - s3-compatible
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage Magalu Cloud — Synchroniser et sauvegarder des fichiers avec RcloneView

> Parcourez, synchronisez et sauvegardez le stockage objet Magalu Cloud avec un gestionnaire de fichiers complet en glisser-déposer, au lieu de jongler avec des identifiants d'API dans un terminal.

Magalu Cloud est un service de stockage objet compatible S3, ce qui signifie qu'il s'intègre directement dans tout outil construit autour du protocole S3. RcloneView le traite exactement comme Amazon S3 ou Backblaze B2 : saisissez une clé d'accès, une clé secrète et un point de terminaison, et le bucket apparaît dans l'explorateur de fichiers aux côtés de tous les autres remotes que vous gérez. Cela le rend pratique pour les équipes qui font déjà tourner des charges de travail depuis le Brésil ou l'Amérique latine et qui souhaitent une option de stockage objet sans quitter les outils S3 qu'elles connaissent déjà.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter un remote Magalu Cloud

L'ajout de Magalu Cloud suit le même flux de saisie d'identifiants que RcloneView utilise pour chaque fournisseur compatible S3 : ouvrez New Remote, choisissez le type compatible S3, puis fournissez l'Access Key ID, la Secret Access Key et l'URL du point de terminaison Magalu Cloud pour votre région. Une fois enregistré, le bucket se charge dans un panneau Explorer avec une navigation complète de l'arborescence des dossiers, des aperçus miniatures pour les images, et un accès par clic droit pour copier, renommer, supprimer et obtenir la taille — sans avoir besoin d'un onglet de console S3 séparé.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Magalu Cloud S3-compatible remote in RcloneView" class="img-large img-center" />

Comme RcloneView se connecte via le backend S3 de rclone, le comportement standard du stockage objet s'applique : les dossiers sont des constructions virtuelles formées à partir de préfixes de clés, et les opérations sur les fichiers correspondent aux appels PUT/GET/DELETE sous-jacents émis par rclone. Contrairement aux outils de montage seul, RcloneView synchronise également et compare les dossiers — avec la licence FREE — de sorte qu'un bucket Magalu ne se limite pas à une simple consultation passive.

## Synchroniser Magalu Cloud avec d'autres stockages

La plupart des équipes n'utilisent pas le stockage objet de manière isolée — il coexiste avec des disques locaux, des NAS ou d'autres fournisseurs cloud dans le cadre d'un plan de sauvegarde ou de migration. L'assistant de synchronisation en 4 étapes vous permet de définir un bucket Magalu comme source ou destination, de configurer le nombre de transferts simultanés et de vérificateurs d'égalité pour des transferts fiables en grands lots, et d'appliquer des filtres (taille de fichier maximale, ancienneté maximale, exclusions d'extension) afin que seuls les fichiers que vous souhaitez réellement soient déplacés.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job with a Magalu Cloud bucket as destination" class="img-large img-center" />

Exécutez d'abord un Dry Run pour prévisualiser exactement quels fichiers seront copiés ou supprimés avant de vous engager dans un transfert réel — particulièrement utile la première fois que vous dirigez une tâche de synchronisation vers un nouveau bucket, lorsque bien régler les dossiers source et destination compte le plus.

## Planifier des sauvegardes Magalu récurrentes

Pour des routines de sauvegarde continues, les utilisateurs de la licence PLUS peuvent attacher une planification de type crontab à n'importe quelle tâche de synchronisation, afin qu'un dossier de projet local ou un autre remote cloud se reflète automatiquement dans Magalu Cloud selon le rythme qui convient — nocturne, hebdomadaire ou à un intervalle personnalisé. Job History suit ensuite la durée, la vitesse de transfert, le nombre de fichiers et le statut d'achèvement de chaque exécution, offrant une piste d'audit claire sans consulter un journal de terminal.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job to a Magalu Cloud bucket" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez New Remote, sélectionnez le type de fournisseur compatible S3, et saisissez votre clé d'accès, votre clé secrète et le point de terminaison Magalu Cloud.
3. Parcourez le bucket dans le panneau Explorer pour confirmer la connexion et la structure des dossiers.
4. Créez une tâche de synchronisation ou de sauvegarde ciblant le remote Magalu, exécutez un Dry Run, puis lancez le transfert.

Une fois connecté, un bucket Magalu Cloud se comporte comme n'importe quel autre remote dans RcloneView — prêt pour un usage quotidien, des transferts multi-cloud et une protection planifiée.

---

**Guides connexes :**

- [Gérer la sauvegarde cloud IDrive e2 S3 avec RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-s3-cloud-backup-rcloneview)
- [Gérer Cloudflare R2 — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Dry Run — Prévisualiser la synchronisation cloud avant le transfert avec RcloneView](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
