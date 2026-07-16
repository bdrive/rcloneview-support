---
slug: manage-opendrive-cloud-sync-backup-rcloneview
title: "Gérer le stockage cloud OpenDrive — Synchronisation et sauvegarde de fichiers avec RcloneView"
authors:
  - jay
description: "Connectez OpenDrive à RcloneView pour gérer vos fichiers, automatiser les sauvegardes et synchroniser vos données entre différents clouds grâce à une interface graphique ne nécessitant aucune connaissance de la ligne de commande."
keywords:
  - OpenDrive cloud storage RcloneView
  - OpenDrive sync GUI
  - manage OpenDrive files
  - OpenDrive backup tool
  - rclone OpenDrive GUI
  - OpenDrive file transfer
  - cloud storage management
  - OpenDrive desktop app
tags:
  - RcloneView
  - opendrive
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage cloud OpenDrive — Synchronisation et sauvegarde de fichiers avec RcloneView

> Connectez OpenDrive à RcloneView pour la gestion de fichiers par glisser-déposer, les sauvegardes planifiées et les transferts entre clouds — sans ligne de commande.

OpenDrive est une plateforme de stockage cloud proposant des offres personnelles et professionnelles axées sur le partage de fichiers et la collaboration. Si son interface web convient pour un usage occasionnel, les utilisateurs avancés qui doivent déplacer de grands volumes de données, automatiser des sauvegardes ou synchroniser vers d'autres clouds ont besoin d'un outil plus performant. RcloneView, propulsé par le backend OpenDrive de rclone, apporte une interface graphique complète à votre compte OpenDrive.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter OpenDrive à RcloneView

Accédez à **Onglet Distant → Nouveau distant** et sélectionnez OpenDrive dans la liste des fournisseurs. Vous devrez vous authentifier via OAuth — RcloneView ouvre une fenêtre de navigateur pour vous permettre de vous connecter avec vos identifiants OpenDrive et d'accorder l'accès. Une fois autorisé, le distant est enregistré et disponible immédiatement dans vos panneaux d'exploration.

L'explorateur affiche vos dossiers et fichiers OpenDrive avec toutes les métadonnées : nom, taille, date de dernière modification et type. L'arborescence de dossiers à gauche vous permet de naviguer dans toute votre hiérarchie de stockage, tandis que la liste de fichiers à droite affiche le contenu du dossier sélectionné avec des colonnes triables. L'affichage en miniatures est disponible pour les dossiers riches en images, ce qui facilite le repérage dans une bibliothèque de photos ou de ressources.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring OpenDrive as a new remote in RcloneView" class="img-large img-center" />

## Sauvegarder les fichiers OpenDrive vers des disques externes ou d'autres clouds

Pour une petite agence de design qui stocke les fichiers de projets clients sur OpenDrive, disposer d'une seconde copie ailleurs est essentiel. RcloneView permet de configurer facilement une tâche de sauvegarde depuis OpenDrive vers Amazon S3, Backblaze B2, ou même un disque externe local. Ouvrez la source (OpenDrive) dans un panneau et la destination dans l'autre, puis utilisez le Gestionnaire de tâches pour configurer une tâche de synchronisation.

L'assistant de création de tâche en 4 étapes vous permet de définir les chemins source et destination, de configurer la concurrence des transferts, d'activer la vérification par somme de contrôle et de définir des filtres de fichiers (exclure les fichiers temporaires ou limiter par ancienneté). Avec une licence PLUS, vous pouvez planifier l'exécution de la tâche chaque nuit ou selon n'importe quelle planification crontab, garantissant que vos données OpenDrive sont toujours sauvegardées sans aucune étape manuelle.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling an OpenDrive backup job in RcloneView" class="img-large img-center" />

## Simulation avant synchronisation

Avant de lancer une opération de synchronisation importante, utilisez le mode **Dry Run** (simulation) de RcloneView. Celui-ci simule la synchronisation et vous montre exactement quels fichiers seraient copiés, mis à jour ou supprimés — sans effectuer de modification réelle. Pour les équipes qui migrent une grande bibliothèque OpenDrive vers un nouveau fournisseur, la simulation est précieuse pour détecter les suppressions de fichiers inattendues avant qu'elles ne se produisent.

Le résultat de la simulation s'affiche dans l'onglet Transfert et l'onglet Journal, vous donnant une vue complète de l'opération planifiée. Une fois satisfait, lancez la synchronisation réelle en un seul clic.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring for an OpenDrive sync job" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Accédez à **Onglet Distant → Nouveau distant**, choisissez OpenDrive, et complétez la connexion OAuth.
3. Parcourez et gérez vos fichiers OpenDrive dans l'explorateur à double panneau.
4. Utilisez le Gestionnaire de tâches pour créer une sauvegarde planifiée vers la destination de votre choix.

RcloneView fait d'OpenDrive un acteur à part entière de votre flux de travail cloud, aux côtés de Google Drive, S3 et de tous les autres fournisseurs que vous utilisez.

---

**Guides associés :**

- [Sauvegarder les fichiers OpenDrive vers AWS S3 avec RcloneView](https://rcloneview.com/support/blog/backup-opendrive-aws-s3-external-storage-rcloneview)
- [Gérer plusieurs comptes cloud avec RcloneView](https://rcloneview.com/support/blog/manage-multiple-cloud-accounts-with-rcloneview)
- [Automatiser les sauvegardes cloud quotidiennes avec RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
