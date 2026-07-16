---
slug: sync-backblaze-b2-to-onedrive-rcloneview
title: "Synchroniser Backblaze B2 vers OneDrive — Sauvegarde cloud avec RcloneView"
authors:
  - tayson
description: "Découvrez comment synchroniser ou migrer des fichiers de Backblaze B2 vers Microsoft OneDrive avec RcloneView — une approche basée sur une interface graphique avec prise en charge de l'automatisation planifiée."
keywords:
  - synchronisation Backblaze B2 vers OneDrive
  - migrer Backblaze B2 OneDrive RcloneView
  - transfert Backblaze B2 OneDrive
  - guide de migration B2 vers OneDrive
  - outil de synchronisation de stockage cloud
  - sauvegarde Backblaze B2 OneDrive
  - migration OneDrive depuis B2
  - rclone B2 OneDrive GUI
tags:
  - backblaze-b2
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Backblaze B2 vers OneDrive — Sauvegarde cloud avec RcloneView

> Récupérez des fichiers sélectionnés depuis le stockage froid Backblaze B2 vers OneDrive pour un usage actif — ou migrez l'intégralité de votre bucket B2 vers OneDrive en une seule tâche RcloneView.

Backblaze B2 est une excellente cible d'archivage et de sauvegarde, mais son API compatible S3 n'est pas conçue pour la collaboration au quotidien. Si votre équipe a besoin d'accéder à des fichiers dans Microsoft 365, de partager des documents via SharePoint, ou simplement de déplacer des données depuis B2 vers un emplacement plus accessible, la synchronisation vers OneDrive est la solution. RcloneView simplifie ce transfert grâce à un générateur de tâches visuel et un suivi en temps réel.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Backblaze B2 et OneDrive

Dans RcloneView, ouvrez **Remote tab → New Remote** et ajoutez d'abord Backblaze B2. Saisissez votre Application Key ID et votre Application Key, puis indiquez le nom du bucket. Pour OneDrive, sélectionnez-le dans la liste des fournisseurs et effectuez la connexion OAuth via navigateur avec votre compte Microsoft. Une fois les deux distants enregistrés, ouvrez-les côte à côte dans l'explorateur à double panneau.

Parcourez votre bucket B2 à gauche et votre OneDrive à droite. Vous pouvez naviguer en profondeur dans les hiérarchies de dossiers des deux côtés et comparer le nombre de fichiers avant de lancer un transfert. Cette étape de confirmation visuelle évite les mauvaises surprises lors de migrations volumineuses.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Backblaze B2 and OneDrive remotes in RcloneView" class="img-large img-center" />

## Configurer et exécuter la tâche de synchronisation

Cliquez sur **Sync** dans l'onglet Home pour ouvrir l'assistant de création de tâche. Définissez le chemin Backblaze B2 comme source et le dossier de destination OneDrive comme cible. À l'étape 2, configurez le nombre de transferts simultanés — OneDrive impose des limites de débit d'API, il est donc plus prudent de commencer avec 4 à 8 transferts simultanés plutôt que de pousser au maximum. Activez la comparaison de sommes de contrôle si l'intégrité des données est essentielle pour votre cas d'usage.

Utilisez l'option **Dry Run** avant de lancer le transfert complet. Cela est particulièrement utile si vous synchronisez de manière sélective — par exemple, en ne récupérant que les fichiers des 90 derniers jours depuis B2 grâce au filtre **Max file age** à l'étape 3. Une fois que le résultat du dry run vous semble correct, lancez la tâche en conditions réelles.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="B2 to OneDrive sync job in progress in RcloneView" class="img-large img-center" />

## Planifier des récupérations régulières depuis B2

Certains workflows nécessitent une synchronisation récurrente de B2 vers OneDrive — par exemple, récupérer chaque matin les rapports récemment archivés dans B2 vers un dossier OneDrive afin que les membres de l'équipe puissent y accéder via l'interface Microsoft 365. Avec une licence PLUS, le planificateur crontab de RcloneView gère cela automatiquement. Définissez la planification à l'étape 4 de l'assistant de création de tâche, en choisissant les jours et heures adaptés à votre workflow.

L'onglet **Job History** enregistre chaque exécution, ce qui vous permet de vérifier que chaque synchronisation planifiée s'est bien terminée et de consulter le volume de données transféré.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Backblaze B2 to OneDrive sync" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Backblaze B2 (Application Key) et OneDrive (OAuth) comme distants.
3. Créez une tâche de synchronisation de B2 vers OneDrive avec des limites de transfert appropriées.
4. Planifiez des synchronisations récurrentes avec une licence PLUS pour une automatisation sans intervention.

Déplacer des données de l'archivage durable de B2 vers l'environnement collaboratif de OneDrive devient une opération routinière et fiable avec RcloneView.

---

**Guides connexes :**

- [Synchroniser Backblaze B2 vers Azure Blob Storage avec RcloneView](https://rcloneview.com/support/blog/sync-backblaze-b2-to-azure-blob-rcloneview)
- [Gérer le stockage cloud Backblaze B2 avec RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Migrer OneDrive vers Backblaze B2 avec RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
