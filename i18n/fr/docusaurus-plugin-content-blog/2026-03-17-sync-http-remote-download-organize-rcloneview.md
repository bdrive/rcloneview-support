---
slug: sync-http-remote-download-organize-rcloneview
title: "Utiliser les distants HTTP/HTTPS dans RcloneView — Télécharger et organiser des fichiers depuis des serveurs web"
authors:
  - tayson
description: "RcloneView peut se connecter à n'importe quel serveur de fichiers HTTP/HTTPS en tant que distant en lecture seule. Téléchargez, organisez et synchronisez automatiquement des fichiers publics vers votre stockage cloud."
keywords:
  - rclone http remote
  - http file download sync
  - web server file sync
  - http to cloud transfer
  - download files to cloud
  - http remote rcloneview
  - web directory sync
  - http ftp file manager
  - download organize cloud
  - web hosted files sync
tags:
  - RcloneView
  - ftp
  - cloud-storage
  - sync
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Utiliser les distants HTTP/HTTPS dans RcloneView — Télécharger et organiser des fichiers depuis des serveurs web

> Il existe un serveur web avec des fichiers dont vous avez besoin — jeux de données, firmware, archives, médias. Plutôt que de les télécharger manuellement puis de les re-téléverser vers votre cloud, utilisez le distant HTTP de RcloneView pour effectuer le transfert directement.

De nombreuses organisations, institutions de recherche et projets open source hébergent des fichiers sur des serveurs web HTTP/HTTPS. Télécharger ces fichiers manuellement puis les téléverser vers votre stockage cloud est fastidieux et gaspille de la bande passante locale. RcloneView peut se connecter à n'importe quel listing de répertoire HTTP en tant que distant en lecture seule, vous permettant de parcourir le contenu et de le transférer directement vers n'importe quel fournisseur cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Comment fonctionnent les distants HTTP

Un distant HTTP se connecte à un serveur web qui fournit des listings de répertoires. RcloneView analyse la structure du répertoire et la présente sous forme d'arborescence de fichiers navigable — comme n'importe quel autre distant. Les fichiers peuvent ensuite être copiés vers n'importe quel autre distant (Google Drive, S3, stockage local, etc.).

**Important** : les distants HTTP sont en lecture seule. Vous pouvez télécharger/copier depuis eux, mais pas y téléverser.

## Ajouter un distant HTTP

<img src="/support/images/en/blog/new-remote.png" alt="Add HTTP remote" class="img-large img-center" />

Pointez le distant vers n'importe quelle URL de serveur web qui fournit des listings de répertoires.

## Cas d'usage

### Miroir de jeux de données ouverts

Les institutions de recherche hébergent souvent de grands jeux de données via HTTP. Créez-en un miroir sur votre S3 ou Google Drive pour un accès fiable :

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Mirror web dataset to cloud" class="img-large img-center" />

### Archiver des fichiers hébergés sur le web

Si des fichiers risquent d'être supprimés du serveur, créez une copie cloud à des fins de préservation.

### Organiser le contenu téléchargé

Parcourez la structure du serveur HTTP, sélectionnez ce dont vous avez besoin, puis transférez-le vers un dossier cloud organisé.

### Planifier des téléchargements réguliers

Pour les serveurs qui se mettent à jour périodiquement (firmware, paquets, publications de données), planifiez des tâches de synchronisation régulières :

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule HTTP sync" class="img-large img-center" />

### Vérifier les téléchargements

Comparez la source HTTP avec votre copie cloud :

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify HTTP downloads" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez un distant HTTP** pointant vers le serveur web.
3. **Parcourez le répertoire** dans l'explorateur de fichiers.
4. **Copiez vers votre cloud** — parmi plus de 70 fournisseurs.

Les serveurs web deviennent simplement un distant de plus dans votre boîte à outils cloud.

---

**Guides connexes :**

- [Connecter des serveurs WebDAV](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [Migrer un serveur FTP vers le cloud](https://rcloneview.com/support/blog/migrate-ftp-server-to-cloud-storage-rcloneview)
- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
