---
slug: migrate-cloudflare-r2-to-google-drive-rcloneview
title: "Migrer de Cloudflare R2 vers Google Drive — Transférez vos fichiers avec RcloneView"
authors:
  - jay
description: "Découvrez comment migrer des fichiers de Cloudflare R2 vers Google Drive avec RcloneView — sans mauvaise surprise sur les frais de sortie, juste un flux de transfert visuel guidé."
keywords:
  - cloudflare r2 to google drive
  - migrate r2 to google drive rcloneview
  - cloudflare r2 google drive transfer
  - rcloneview cloudflare r2 migration
  - object storage to google drive
  - r2 bucket to google drive rclone
  - cloudflare r2 backup google drive
  - cloud migration rcloneview
tags:
  - cloudflare-r2
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Cloudflare R2 vers Google Drive — Transférez vos fichiers avec RcloneView

> Déplacez des fichiers d'un bucket Cloudflare R2 vers Google Drive grâce à l'interface visuelle de RcloneView — pas de CLI requise, aucun frais de sortie depuis R2.

Cloudflare R2 est très apprécié des développeurs pour son stockage d'objets sans frais de sortie, mais les équipes ont souvent besoin de déplacer leurs données vers Google Drive pour les partager avec des collègues non techniques, les intégrer à Google Workspace, ou consolider leurs comptes de stockage. RcloneView connecte les deux services via un flux de travail intuitif, vous permettant de migrer des buckets R2 vers Google Drive sans écrire la moindre commande.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Cloudflare R2 et Google Drive

Commencez par ajouter les deux services en tant que remotes. Dans l'onglet **Remote**, cliquez sur **New Remote** et sélectionnez Cloudflare R2. Vous aurez besoin de votre **API Token** Cloudflare, de votre **Account ID** et de l'**Endpoint URL** (au format `https://<account-id>.r2.cloudflarestorage.com`). RcloneView utilise le backend compatible S3 de rclone pour R2, votre jeton API R2 correspond donc directement aux champs Access Key et Secret Key.

Ensuite, ajoutez Google Drive comme second remote. RcloneView ouvre une fenêtre de navigateur pour l'authentification OAuth — connectez-vous à votre compte Google et accordez l'accès. Aucune saisie de clé API n'est requise.

<img src="/support/images/en/blog/new-remote.png" alt="Setting up Cloudflare R2 and Google Drive remotes in RcloneView" class="img-large img-center" />

Une fois les deux remotes configurés, vous pouvez parcourir vos buckets R2 et vos dossiers Google Drive côte à côte dans l'explorateur à double panneau de RcloneView.

## Lancer la migration

Cliquez sur **Sync** dans l'onglet Home pour lancer l'assistant de tâche en 4 étapes. À l'étape 1, sélectionnez votre bucket R2 (ou un sous-dossier spécifique) comme source, et un dossier Google Drive comme destination. Nommez la tâche clairement — quelque chose comme `r2-to-gdrive-migration` facilite la relecture de l'historique par la suite.

À l'étape 2, activez la **vérification de checksum** pour confirmer l'intégrité des fichiers après chaque transfert. C'est particulièrement important pour les fichiers volumineux comme les vidéos ou les archives, où une corruption pendant le transfert passerait autrement inaperçue. Définissez le nombre de tentatives à au moins 3 pour gérer automatiquement les interruptions réseau temporaires.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a migration job from Cloudflare R2 to Google Drive in RcloneView" class="img-large img-center" />

Avant de valider, lancez un **Dry Run** pour prévisualiser exactement les fichiers qui seront copiés. Cela affiche la liste complète des transferts et les tailles de fichiers, vous permettant de confirmer la portée de l'opération avant que quoi que ce soit ne touche votre Google Drive.

## Filtrer et gérer les transferts volumineux

Si votre bucket R2 contient un mélange de types de fichiers, l'étape 3 vous permet d'appliquer des filtres. Une équipe de design migrant un bucket de projet pourrait exclure les fichiers `.psd` bruts de plus de 500 Mo tout en conservant tous les exports prêts pour le web, grâce au filtre Max File Size. Le filtre **Max File Age** est tout aussi utile pour les migrations incrémentales — ne déplacer que les fichiers modifiés au cours des 30 derniers jours plutôt que l'ensemble des données historiques.

Pour les migrations volumineuses s'étalant sur plusieurs heures, l'onglet **Job History** enregistre la vitesse, le nombre de fichiers et le statut de complétion de chaque exécution. Si la tâche est interrompue en cours de route, la relancer est sans risque — RcloneView ignore les fichiers déjà transférés avec succès et reprend là où il s'était arrêté.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Monitoring a Cloudflare R2 to Google Drive transfer job in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Cloudflare R2 comme remote en utilisant votre API Token, votre Account ID et l'Endpoint URL.
3. Ajoutez Google Drive comme remote via une connexion OAuth par navigateur.
4. Créez une tâche de copie ou de synchronisation depuis votre bucket R2 vers un dossier Google Drive — lancez d'abord un Dry Run pour confirmer la portée.

Le modèle sans frais de sortie de Cloudflare R2 signifie que la sortie de vos données ne coûte rien côté R2, et RcloneView se charge visuellement du reste.

---

**Guides connexes :**

- [Migrer Google Drive vers Cloudflare R2 avec RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-cloudflare-r2-rcloneview)
- [Gérer Cloudflare R2 — Synchronisation et sauvegarde avec RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Gérer Google Drive — Synchronisation et sauvegarde de fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
