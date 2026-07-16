---
slug: sync-box-to-google-drive-rcloneview
title: "Synchroniser Box vers Google Drive — Sauvegarde cloud avec RcloneView"
authors:
  - tayson
description: "Synchronisez Box vers Google Drive avec RcloneView — transférez des fichiers, automatisez les sauvegardes et gardez les deux plateformes à jour grâce à une interface simple de synchronisation cloud à cloud."
keywords:
  - synchronisation Box vers Google Drive
  - migration Box vers Google Drive
  - outil de synchronisation cloud
  - RcloneView Box
  - sauvegarde Box
  - archivage Google Drive
  - synchronisation cloud à cloud
  - transfert cloud d'entreprise
  - workflow Box Google Drive
  - migration de contenu Box
tags:
  - RcloneView
  - box
  - google-drive
  - cloud-to-cloud
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Box vers Google Drive — Sauvegarde cloud avec RcloneView

> Box gère la conformité d'entreprise et le partage sécurisé, tandis que Google Drive est le pilier de l'édition collaborative — RcloneView synchronise le contenu entre les deux plateformes directement, sans aucun intermédiaire de disque local.

Box est largement utilisé dans les environnements d'entreprise pour ses contrôles de conformité et son partage sécurisé de fichiers, tandis que Google Drive soutient les workflows collaboratifs en temps réel. Lorsque les équipes utilisent les deux plateformes ou se détournent progressivement de Box, garder le contenu synchronisé — ou migrer des fichiers entre les plateformes — nécessite un outil cloud à cloud fiable. RcloneView connecte Box et Google Drive directement, sans téléchargement vers le disque local requis.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Box et Google Drive

Box et Google Drive utilisent tous deux l'authentification OAuth par navigateur dans RcloneView. Allez dans **Remote tab > New Remote**, sélectionnez **Box**, et effectuez la connexion via le navigateur. Répétez le processus pour **Google Drive**. Les deux distants apparaissent alors sous forme d'onglets dans le panneau de l'explorateur, prêts à être parcourus immédiatement.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and Google Drive remotes in RcloneView" class="img-large img-center" />

Pour les comptes **Box for Business**, configurez le paramètre `box_sub_type` sur `enterprise` lors de la création du distant. Cela garantit que RcloneView se connecte au compte Box de l'organisation plutôt qu'au stockage personnel, offrant l'accès aux dossiers partagés et au contenu détenu par l'entreprise.

## Exécuter la tâche de synchronisation

Dans **Job Manager**, créez une nouvelle tâche de synchronisation : la source est votre dossier Box (ou un sous-dossier spécifique tel que `/Projects/2026`), la destination est le dossier Google Drive cible. La synchronisation de RcloneView est unidirectionnelle par défaut — elle reproduit la source vers la destination sans modifier le contenu source.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box to Google Drive sync job in RcloneView" class="img-large img-center" />

Pour une équipe juridique synchronisant des dossiers de cas terminés depuis Box vers Google Drive à des fins d'archivage à long terme, le filtrage par ancienneté de fichier (Max File Age dans l'étape 3 des paramètres de la tâche) limite la synchronisation aux seuls fichiers récemment modifiés — gardant ainsi des tailles de transfert gérables. L'aperçu **Dry Run** confirme exactement quels fichiers seront déplacés avant que la moindre donnée ne soit touchée.

## Automatisation et surveillance

Avec une licence PLUS, la planification de la synchronisation Box vers Google Drive garantit que les deux plateformes restent à jour. Une planification basée sur cron — par exemple, chaque dimanche à minuit — exécute la synchronisation automatiquement sans intervention de l'utilisateur.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Box to Google Drive sync in RcloneView" class="img-large img-center" />

La fonctionnalité **1:N synchronization** de RcloneView vous permet même de synchroniser un dossier Box vers plusieurs destinations Google Drive simultanément — utile pour sauvegarder le même contenu à la fois vers un Team Drive partagé et un dossier d'archive personnel en une seule tâche. **Job History** suit chaque exécution avec des statistiques détaillées : fichiers transférés, durée, vitesse et statut.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez un distant **Box** (OAuth) et un distant **Google Drive** (OAuth).
3. Ouvrez **Job Manager** et créez une tâche de synchronisation de votre dossier Box vers Google Drive.
4. Activez la planification (PLUS) pour automatiser les synchronisations régulières.

Synchroniser Box vers Google Drive via RcloneView signifie que votre contenu se déplace de manière fiable entre les plateformes tout en restant organisé et accessible sur les deux, sans effort manuel.

---

**Guides connexes :**

- [Gérer le stockage cloud Box — Synchronisation et sauvegarde avec RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Migration Box vers Dropbox sans interruption avec RcloneView](https://rcloneview.com/support/blog/zero-downtime-box-to-dropbox-rcloneview)
- [Migrer Box vers SharePoint et OneDrive avec RcloneView](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)

<CloudSupportGrid />
