---
slug: manage-nextcloud-cloud-sync-backup-rcloneview
title: "Gérer le stockage Nextcloud — Synchroniser et sauvegarder vos fichiers avec RcloneView"
authors:
  - jay
description: "Connectez votre instance Nextcloud auto-hébergée ou gérée à RcloneView via WebDAV pour une gestion de fichiers via interface graphique, une synchronisation multi-cloud et des sauvegardes automatisées."
keywords:
  - Nextcloud RcloneView sync
  - gérer les fichiers Nextcloud via interface graphique
  - Nextcloud WebDAV RcloneView
  - sauvegarde Nextcloud stockage cloud
  - synchroniser Nextcloud vers Google Drive
  - sauvegarde Nextcloud vers S3
  - synchronisation cloud auto-hébergée RcloneView
  - gestion de fichiers Nextcloud sur bureau
tags:
  - nextcloud
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage Nextcloud — Synchroniser et sauvegarder vos fichiers avec RcloneView

> Connectez RcloneView à votre instance Nextcloud via WebDAV pour gérer vos fichiers, automatiser des sauvegardes multi-cloud et synchroniser vos données vers S3 ou Google Drive — le tout depuis une interface graphique de bureau claire.

Le client de synchronisation intégré de Nextcloud est excellent pour maintenir un dossier local synchronisé, mais il n'aide pas lorsque vous devez migrer des données vers un autre cloud, automatiser des sauvegardes entre différents fournisseurs, ou parcourir vos fichiers Nextcloud aux côtés d'autres systèmes de stockage. RcloneView se connecte à Nextcloud via WebDAV — le protocole standard exposé par Nextcloud — et le traite comme n'importe quel autre remote cloud dans l'explorateur de fichiers à deux volets.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Nextcloud à RcloneView via WebDAV

Nextcloud expose WebDAV à un chemin d'URL standard sur votre serveur. Dans RcloneView, allez dans **Remote tab → New Remote** et sélectionnez **WebDAV** comme type de fournisseur. Saisissez l'URL WebDAV de votre Nextcloud (généralement `https://your-nextcloud.example.com/remote.php/dav/files/USERNAME/`), votre nom d'utilisateur Nextcloud et votre mot de passe. Réglez l'option **Vendor** sur Nextcloud pour activer les optimisations spécifiques à Nextcloud dans le backend WebDAV de rclone.

Une fois enregistrés, vos fichiers Nextcloud apparaissent dans le panneau de l'explorateur avec la même interface que n'importe quel autre fournisseur — arborescence de dossiers, liste de fichiers triable et navigation par fil d'Ariane. Vous pouvez parcourir, renommer, copier, supprimer et glisser-déposer des fichiers vers et depuis Nextcloud tout comme vous le feriez avec Google Drive ou Dropbox.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Nextcloud to RcloneView via WebDAV" class="img-large img-center" />

## Sauvegarder Nextcloud vers S3 ou Backblaze B2

Les serveurs Nextcloud auto-hébergés ont besoin d'une stratégie de sauvegarde externalisée. Avec le Job Manager de RcloneView, vous pouvez créer une tâche de synchronisation depuis votre remote Nextcloud vers Amazon S3, Backblaze B2, ou tout autre fournisseur cloud. Cela vous donne une copie redondante de toutes vos données Nextcloud stockée en externe, vous protégeant contre une panne de serveur ou des problèmes chez votre hébergeur.

Configurez la tâche avec **Enable Checksum** pour garantir l'intégrité des données, et utilisez le filtre **Max file age** si vous n'avez besoin de sauvegarder que les fichiers modifiés récemment. Avec une licence PLUS, planifiez cette tâche chaque nuit afin que la sauvegarde reflète toujours l'état actuel de vos données Nextcloud.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Nextcloud backup to S3 in RcloneView" class="img-large img-center" />

## Synchroniser les fichiers Nextcloud vers Google Drive ou OneDrive

De nombreuses organisations exploitent Nextcloud en interne pour des raisons de confidentialité, mais doivent partager certains fichiers en externe via Google Drive ou OneDrive pour la collaboration. RcloneView transforme cela en un processus défini et reproductible : créez une tâche de copie ou de synchronisation depuis un dossier Nextcloud spécifique vers un Shared Drive Google Drive ou un dossier OneDrive, et planifiez-la pour qu'elle s'exécute chaque fois que vous devez publier une mise à jour.

Ce schéma est courant chez les équipes qui utilisent Nextcloud comme système interne de gestion documentaire et Google Drive comme couche de collaboration destinée à l'externe. La fonctionnalité de comparaison de dossiers (Folder Compare) vous permet de vérifier que les copies Nextcloud et Google Drive correspondent avant et après chaque synchronisation.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Nextcloud files to Google Drive using RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez l'URL WebDAV de votre Nextcloud comme nouveau remote dans l'onglet **Remote tab**.
3. Parcourez vos fichiers Nextcloud dans l'explorateur à deux volets aux côtés d'autres fournisseurs cloud.
4. Créez une tâche de sauvegarde planifiée vers S3 ou Backblaze B2 pour une protection hors site.

RcloneView apporte des capacités complètes de gestion sur bureau à votre instance Nextcloud — qu'il s'agisse d'un serveur personnel, d'une offre hébergée ou d'un déploiement d'entreprise.

---

**Guides connexes :**

- [Sauvegarder Nextcloud via WebDAV avec RcloneView](https://rcloneview.com/support/blog/backup-nextcloud-webdav-with-rcloneview)
- [Synchroniser Nextcloud vers Backblaze B2 avec RcloneView](https://rcloneview.com/support/blog/sync-nextcloud-to-backblaze-b2-rcloneview)
- [Migrer Nextcloud vers Google Drive avec RcloneView](https://rcloneview.com/support/blog/migrate-nextcloud-to-google-drive-rcloneview)

<CloudSupportGrid />
