---
slug: migrate-box-to-backblaze-b2-rcloneview
title: "Migrer de Box vers Backblaze B2 — Transférer des fichiers avec RcloneView"
authors:
  - steve
description: "Déplacez votre stockage cloud Box vers le stockage objet Backblaze B2 avec RcloneView. Un guide complet pour migrer des fichiers, vérifier les transferts et automatiser les futures sauvegardes."
keywords:
  - Box to Backblaze B2 migration
  - migrate Box Backblaze B2 RcloneView
  - Box Backblaze B2 file transfer
  - switch Box to B2 storage
  - cloud storage migration Box
  - Box backup Backblaze B2
  - Box to S3 migration
  - rclone Box B2 GUI
tags:
  - box
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Box vers Backblaze B2 — Transférer des fichiers avec RcloneView

> Déplacez l'intégralité de votre espace de travail Box vers le stockage objet Backblaze B2 — ou créez une copie de sauvegarde secondaire — grâce au workflow de migration piloté par l'interface graphique de RcloneView.

Box est une plateforme de collaboration d'entreprise largement utilisée, mais pour les besoins d'archivage et de sauvegarde, ses coûts de stockage peuvent être importants par rapport à un stockage objet dédié comme Backblaze B2. Les équipes qui souhaitent décharger des données d'archive depuis Box, ou créer une copie de sauvegarde du contenu Box dans un niveau plus économique, peuvent utiliser RcloneView pour migrer directement — sans rien télécharger localement au préalable.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Box et Backblaze B2

Pour Box, accédez à **onglet Remote → New Remote**, sélectionnez Box, puis effectuez l'authentification OAuth avec votre compte Box. Les utilisateurs de Box for Business doivent également définir `box_sub_type = enterprise` dans la configuration du remote pour un accès complet à l'espace de travail. Pour Backblaze B2, saisissez votre Application Key ID et votre Application Key lors de la configuration du remote.

Une fois les deux remotes configurés, placez Box dans le panneau explorateur de gauche et B2 dans celui de droite. Parcourez les dossiers Box spécifiques que vous souhaitez migrer et vérifiez que le bucket B2 cible est correctement nommé et accessible avant de lancer le transfert.

<img src="/support/images/en/blog/new-remote.png" alt="Setting up Box and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Configurer la tâche de migration

Utilisez le bouton **Sync** dans l'onglet Home pour créer la tâche de migration. Définissez le dossier Box comme source et le bucket B2 (ou un sous-dossier de celui-ci) comme destination. À l'étape 2, activez **Checksum** pour vérifier l'intégrité de chaque fichier pendant le transfert. Définissez le nombre de tentatives sur 5 ou plus — l'API de B2 peut occasionnellement limiter les requêtes lors de transferts massifs en bloc, et les nouvelles tentatives automatiques garantissent que la migration se termine sans intervention manuelle.

Avant la migration réelle, effectuez un **Dry Run** pour voir la liste complète des fichiers qui seront transférés. Ceci est particulièrement important pour les migrations Box, où les fichiers partagés ou les Box Notes (format `.boxnote`) peuvent ne pas se transférer comme prévu — la sortie du dry run met en évidence tout fichier en échec avant qu'il n'affecte vos données de production.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box to Backblaze B2 migration job in RcloneView" class="img-large img-center" />

## Gérer les Box Notes et les types de fichiers spéciaux

Les Box Notes sont un format propriétaire (`.boxnote`) qui peut ne pas s'afficher correctement en dehors de Box. Avant de migrer, exportez les Box Notes que vous devez conserver dans un format standard (comme `.docx` ou `.pdf`) depuis l'interface web de Box. RcloneView migrera les fichiers `.boxnote` en tant que données binaires, mais ils ne seront pas modifiables dans B2 ni dans aucun client non-Box.

Pour les dossiers partagés et le contenu des collaborateurs externes, vérifiez que votre compte Box a accès à tout le contenu que vous prévoyez de migrer. L'**onglet Log** de RcloneView affichera les erreurs de permission pour tout fichier auquel votre compte n'a pas accès.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Box to B2 migration progress in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Box (OAuth) et Backblaze B2 (Application Key) comme remotes.
3. Effectuez un dry run pour prévisualiser la migration avant de la valider.
4. Exécutez la migration réelle avec la vérification par checksum activée.

Migrer de Box vers Backblaze B2 avec RcloneView est un processus propre et vérifiable qui vous offre un stockage durable et économique pour votre contenu archivé.

---

**Guides connexes :**

- [Migrer de Box vers AWS S3 avec RcloneView](https://rcloneview.com/support/blog/migrate-box-to-aws-s3-rcloneview)
- [Gérer le stockage cloud Backblaze B2 avec RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Archivage de Box vers S3 Glacier avec RcloneView](https://rcloneview.com/support/blog/box-to-s3-glacier-archive-rcloneview)

<CloudSupportGrid />
