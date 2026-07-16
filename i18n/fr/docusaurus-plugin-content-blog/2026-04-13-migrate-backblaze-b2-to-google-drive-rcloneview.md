---
slug: migrate-backblaze-b2-to-google-drive-rcloneview
title: "Migrer de Backblaze B2 vers Google Drive — Transférer des fichiers avec RcloneView"
authors:
  - tayson
description: "Déplacez des fichiers de Backblaze B2 vers Google Drive sans les télécharger localement. RcloneView permet un transfert direct de cloud à cloud avec suivi de progression et filtrage."
keywords:
  - Backblaze B2 vers Google Drive
  - migrer de B2 vers Google Drive
  - migration Backblaze B2
  - transfert cloud à cloud
  - B2 vers GDrive RcloneView
  - transférer des fichiers Backblaze
  - migration de stockage cloud
  - synchronisation Backblaze B2
  - importation Google Drive
  - migration RcloneView
tags:
  - backblaze-b2
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Backblaze B2 vers Google Drive — Transférer des fichiers avec RcloneView

> Transférez des fichiers depuis des buckets Backblaze B2 directement vers Google Drive avec RcloneView — sans stockage local intermédiaire nécessaire, avec suivi de progression en temps réel et prise en charge des filtres.

Backblaze B2 est une solution de stockage objet performante, mais les équipes fortement dépendantes de Google Workspace peuvent trouver plus pratique de consolider leurs fichiers de travail dans Google Drive pour faciliter la collaboration. Migrer des années de données d'archive B2 vers Google Drive nécessitait auparavant de tout télécharger localement au préalable — un processus lent et gourmand en stockage. RcloneView permet des transferts directs de cloud à cloud entre B2 et Google Drive grâce à son moteur de synchronisation, en acheminant les données entre les deux fournisseurs sans toucher à votre disque local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configuration des deux remotes

Avant de migrer, ajoutez à la fois Backblaze B2 et Google Drive comme remotes dans RcloneView. Pour Backblaze B2, allez dans l'onglet Remote, cliquez sur New Remote, et sélectionnez Backblaze B2. Saisissez votre Application Key ID et votre Application Key — tous deux générés depuis votre compte Backblaze sous App Keys. Pour Google Drive, sélectionnez Google Drive dans la liste des fournisseurs ; une fenêtre de navigateur s'ouvre pour l'authentification OAuth. Connectez-vous avec votre compte Google et accordez l'accès.

Une fois les deux remotes configurés, vous pouvez les ouvrir côte à côte dans l'Explorateur de fichiers à double panneau de RcloneView. Parcourez vos buckets B2 d'un côté et vos dossiers Google Drive de l'autre, ce qui vous donne une référence visuelle pour la structure de migration que vous souhaitez mettre en place.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 and Google Drive remotes in RcloneView" class="img-large img-center" />

## Exécution de la migration

Une fois les deux remotes connectés, utilisez l'assistant de synchronisation pour configurer le transfert. Sélectionnez votre bucket Backblaze B2 (ou un chemin spécifique à l'intérieur) comme source et votre dossier de destination Google Drive. Dans l'étape Advanced Settings, la vérification par checksum garantit que chaque fichier a été transféré correctement — un point important pour les grandes archives où une corruption silencieuse des données peut passer inaperçue.

L'étape de filtrage est utile pour les grands buckets B2 : utilisez les filtres d'ancienneté de fichier pour migrer uniquement les fichiers antérieurs à une certaine date, excluez des extensions spécifiques (comme les fichiers temporaires `.tmp`), ou limitez la taille maximale des fichiers pour échelonner la migration par lots. C'est particulièrement utile lors de la migration des 3 To d'archives de projets d'une agence de design — filtrez par type de fichier et profondeur de dossier pour contrôler ce qui est déplacé à chaque lot.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Backblaze B2 files to Google Drive with RcloneView" class="img-large img-center" />

Avant de lancer la migration complète, exécutez le mode Dry Run pour prévisualiser exactement quels fichiers seront copiés. La simulation affiche la liste complète des opérations prévues sans effectuer aucune modification — une étape de sécurité essentielle lors de la migration de données de production.

## Suivi et validation du transfert

L'onglet Transferring en bas de RcloneView affiche la progression du job en temps réel : nombre de fichiers, statut du transfert, et toute erreur rencontrée. Pour les migrations volumineuses qui s'étalent sur plusieurs heures, Job History enregistre chaque exécution avec l'heure de début, la durée, le volume total de données déplacées et le statut final.

Une fois le transfert terminé, utilisez Folder Compare pour valider que Google Drive contient désormais tout ce qui provient de la source B2. La comparaison met en évidence les fichiers qui n'existent que d'un côté ou qui présentent des différences de taille, ce qui permet d'identifier facilement et de retransférer tout ce qui n'a pas été complété avec succès.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Viewing migration job history for B2 to Google Drive transfer in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Backblaze B2 en utilisant votre Application Key ID et votre Application Key.
3. Ajoutez Google Drive via le flux d'authentification OAuth du navigateur.
4. Utilisez l'assistant de synchronisation avec Dry Run pour prévisualiser la migration avant d'effectuer le transfert complet.

La migration directe de cloud à cloud élimine le goulot d'étranglement du stockage intermédiaire local et maintient votre transfert de B2 vers Google Drive au débit propre au fournisseur.

---

**Guides connexes :**

- [Migrer Backblaze B2 vers Amazon S3 avec RcloneView](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-aws-s3-rcloneview)
- [Gérer la synchronisation cloud et la sauvegarde Google Drive avec RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Sauvegarder Dropbox vers Backblaze B2 pour un stockage économique avec RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)

<CloudSupportGrid />
