---
slug: manage-bunny-cdn-storage-sync-rcloneview
title: "Gérer le stockage Bunny CDN — Synchroniser et déployer du contenu avec RcloneView"
authors:
  - tayson
description: "Bunny.net propose un stockage CDN rapide et abordable. Utilisez RcloneView pour gérer les zones de stockage Bunny, synchroniser du contenu depuis d'autres clouds et automatiser les déploiements CDN."
keywords:
  - bunny cdn storage
  - bunny net rclone
  - bunny storage sync
  - bunny cdn file manager
  - bunny storage gui
  - cdn storage management
  - bunny net sync tool
  - bunny cdn deploy
  - bunny storage backup
  - cdn content sync
tags:
  - RcloneView
  - cloud-storage
  - sync
  - s3-compatible
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage Bunny CDN — Synchroniser et déployer du contenu avec RcloneView

> Le stockage Bunny.net est rapide et économique pour le contenu CDN. Mais gérer les zones de stockage via le tableau de bord web est peu pratique pour les opérations en masse. RcloneView vous offre un véritable gestionnaire de fichiers pour vos ressources CDN.

Bunny.net est devenu un choix de CDN populaire pour ses performances et ses tarifs. Son Edge Storage propose des zones de stockage compatibles S3 qui diffusent du contenu via le réseau CDN. Cependant, la gestion des fichiers via l'interface web de Bunny est lente pour les téléversements en masse, manque de fonctionnalités de synchronisation et n'offre aucune planification. RcloneView se connecte au stockage Bunny via son point d'accès FTP ou HTTP et offre une gestion complète des fichiers.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter le stockage Bunny à RcloneView

<img src="/support/images/en/blog/new-remote.png" alt="Add Bunny CDN remote" class="img-large img-center" />

Ajoutez votre zone de stockage Bunny en tant que distant FTP en utilisant les identifiants de votre tableau de bord Bunny.net.

## Flux de travail clés

### Déployer du contenu vers le CDN

Téléversez des ressources de site web, des images ou des médias depuis votre stockage cloud principal vers Bunny CDN :

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Deploy to Bunny CDN" class="img-large img-center" />

### Synchroniser depuis le stockage de production

Gardez votre zone de stockage CDN synchronisée avec votre stockage de ressources de production sur S3 ou Google Drive :

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Sync to Bunny Storage" class="img-large img-center" />

### Planifier des déploiements automatisés

Mettez à jour automatiquement le contenu CDN selon un planning :

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule CDN deployment" class="img-large img-center" />

### Vérifier le contenu CDN

Comparez votre stockage source avec Bunny CDN pour vous assurer que le contenu déployé est à jour :

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify CDN content" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez le stockage Bunny** en tant que distant FTP.
3. **Synchronisez le contenu** depuis votre stockage principal.
4. **Planifiez les déploiements** pour des mises à jour automatisées.

Un CDN rapide mérite des outils de gestion rapides.

---

**Guides associés :**

- [Synchroniser le stockage d'objets Vultr](https://rcloneview.com/support/blog/sync-vultr-object-storage-s3-google-drive-rcloneview)
- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
