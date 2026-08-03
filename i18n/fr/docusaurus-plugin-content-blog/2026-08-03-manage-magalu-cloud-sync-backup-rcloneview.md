---
slug: manage-magalu-cloud-sync-backup-rcloneview
title: "Gérer le stockage Magalu Cloud — Synchroniser et sauvegarder des fichiers avec RcloneView"
authors:
  - jay
description: "Connectez le stockage objet Magalu Cloud à RcloneView pour la gestion de fichiers par glisser-déposer, la synchronisation planifiée et des workflows de sauvegarde entre clouds."
keywords:
  - stockage cloud magalu
  - stockage objet magalu
  - gui de stockage compatible s3
  - rcloneview magalu
  - sauvegarde de stockage objet
  - gui de synchronisation cloud
  - explorateur de fichiers multi-cloud
  - gestionnaire compatible s3
  - sauvegarde magalu
  - stockage cloud brésil
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage Magalu Cloud — Synchroniser et sauvegarder des fichiers avec RcloneView

> Parcourez, synchronisez et sauvegardez le stockage objet Magalu Cloud depuis la même fenêtre que celle utilisée pour gérer tous vos autres clouds.

Magalu Cloud est un service de stockage objet compatible S3, ce qui signifie qu'il fonctionne avec tout outil basé sur le protocole S3, y compris rclone. RcloneView enveloppe ce support de protocole dans un explorateur de fichiers visuel, de sorte que les équipes utilisant déjà des buckets Magalu pour des données applicatives ou des sauvegardes n'ont pas besoin de mémoriser les options de `s3cmd` ni de jongler avec un onglet de console distinct juste pour déplacer des fichiers. Connectez un bucket une fois, et il se comporte comme n'importe quel autre distant dans l'application.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Magalu Cloud comme distant

Comme Magalu Cloud parle le protocole S3, RcloneView s'y connecte de la même manière qu'à Amazon S3, Wasabi ou Backblaze B2 : via le type de distant compatible S3. Ouvrez **New Remote**, choisissez l'option compatible S3, puis renseignez votre Access Key, votre Secret Key et l'URL du endpoint Magalu Cloud pour votre région. RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux, si bien qu'un bucket Magalu se retrouve aux côtés de vos connexions Google Drive, OneDrive ou NAS sur site existantes.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout d'un nouveau distant Magalu Cloud compatible S3 dans RcloneView" class="img-large img-center" />

Une fois le distant enregistré, il apparaît sous forme d'onglet dans le panneau Explorer, avec une navigation complète par arborescence de dossiers, des aperçus en miniature pour les buckets riches en images, et les mêmes opérations au clic droit (copier, couper, renommer, supprimer) disponibles pour les fichiers locaux.

## Synchroniser des buckets Magalu avec d'autres stockages

Le stockage objet existe rarement de manière isolée — la plupart des équipes le combinent avec un autre cloud pour la redondance, ou avec une infrastructure locale pour le staging. L'assistant Sync de RcloneView permet de définir un bucket Magalu comme source ou destination, de choisir une synchronisation à sens unique ou une synchronisation bidirectionnelle (Beta), et d'appliquer des filtres comme la taille maximale de fichier ou l'ancienneté des fichiers avant tout transfert.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuration d'une tâche de synchronisation entre un bucket Magalu Cloud et un autre distant" class="img-large img-center" />

Exécutez d'abord un **Dry Run** pour prévisualiser précisément quels objets seront copiés ou supprimés — une vérification utile avant de miroir pour la première fois un bucket de production vers une destination de sauvegarde.

## Automatiser les sauvegardes récurrentes

Pour les buckets qui changent quotidiennement, les transferts manuels ne sont pas viables à grande échelle. Enregistrez votre configuration de synchronisation Magalu comme Job, puis utilisez l'étape de planification (licence PLUS) pour définir une récurrence de type crontab — nocturne, hebdomadaire ou selon un intervalle personnalisé.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planification d'une tâche de sauvegarde récurrente pour un bucket Magalu Cloud" class="img-large img-center" />

Chaque exécution est consignée dans Job History avec le statut, la vitesse de transfert et le nombre de fichiers, ce qui permet de confirmer qu'une sauvegarde planifiée s'est réellement terminée plutôt que de le supposer.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Générez une Access Key et une Secret Key pour votre compte Magalu Cloud et notez le endpoint de votre région.
3. Ajoutez Magalu Cloud comme nouveau distant compatible S3 dans RcloneView.
4. Configurez une tâche de synchronisation — avec un Dry Run au préalable — pour la connecter à votre destination de sauvegarde ou de stockage secondaire.

Traiter un bucket compatible S3 comme un simple dossier dans votre gestionnaire de fichiers élimine la friction qui isole habituellement le stockage objet du reste de votre workflow.

---

**Guides associés :**

- [Gérer le stockage Wasabi Cloud avec RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Gérer le stockage Cloudflare R2 avec RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Gérer le stockage cloud IDrive e2 avec RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
