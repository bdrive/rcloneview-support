---
slug: mount-box-storage-network-drive-rcloneview
title: "Monter le stockage Box comme lecteur réseau avec RcloneView pour un accès d'équipe fluide"
authors:
  - tayson
description: "Transformez les dossiers Box en une lettre de lecteur locale ou un point de montage, naviguez instantanément sans synchronisation complète, et gardez vos équipes productives grâce au cache, à la comparaison et aux tâches planifiées dans RcloneView."
keywords:
  - rcloneview
  - box mount
  - box drive letter
  - box network drive
  - cloud storage
  - vfs cache
  - windows
  - macos
  - rclone
  - multi cloud
  - file explorer
  - finder
  - scheduler
  - job history
  - transfer monitor
  - compare sync
  - checksum
  - gui
  - cloud backup
  - mount manager
tags:
  - RcloneView
  - cloud-storage
  - cloud-migration
  - mount
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Monter le stockage Box comme lecteur réseau avec RcloneView

> Arrêtez de tout télécharger depuis Box. Montez-le comme un lecteur, naviguez dans l'Explorateur ou le Finder.

Box est excellent pour la collaboration, mais les clients de synchronisation locale peuvent surcharger les disques et ralentir les ordinateurs portables. Avec RcloneView, vous pouvez monter Box comme un lecteur réseau, diffuser les fichiers à la demande, et contrôler le cache et la bande passante pour que les équipes disposent d'un accès rapide sans téléchargements complets.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Pourquoi monter Box plutôt que synchroniser ?

- Économisez de l'espace disque sur les appareils partagés ; ne récupérez que ce que les utilisateurs ouvrent.
- Intégration plus rapide : associez une lettre de lecteur ou un chemin de montage unique et évitez les synchronisations massives initiales.

## Étape 1 — Connecter Box dans RcloneView

- Ajoutez Box via `+ New Remote` (flux OAuth). Guide : [add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login).
- Vérifiez le distant dans **Remote Explorer** pour vous assurer que les dossiers et la profondeur sont corrects.  

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## Étape 2 — Monter Box comme un lecteur (Windows ou macOS)

- Ouvrez **Mount Manager** et sélectionnez votre distant Box. Guide : [mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive).
- Choisissez une cible :
  - Windows : attribuez une lettre de lecteur (par ex. `B:`) en utilisant `cmount` en arrière-plan.
  - macOS : choisissez un chemin de montage (par ex. `/Volumes/Box`).
- Enregistrez et montez ; vérifiez que le lecteur apparaît dans l'Explorateur ou le Finder.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />


## Étape 3 — (Facultatif) Utiliser Compare avant les grands déplacements

- Exécutez **Compare** pour voir les différences entre Box et un cloud local ou secondaire avant d'effectuer des changements structurels : [compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents).
- Repérez les fichiers manquants ou plus récents sans risquer un écrasement accidentel.  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
  

## Étape 5 — (Facultatif) Tâches de synchronisation et sauvegardes

- Répliquez les dossiers Box critiques vers une cible de sauvegarde (S3, Wasabi, NAS) avec des tâches **copy** ou **sync** : [create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs).
- Commencez par copy pour plus de sécurité ; passez à sync après avoir validé les résultats.
- Planifiez des exécutions en dehors des heures de travail pour que les montages restent réactifs pendant la journée.  

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />
  

Montez Box une fois, ajustez le cache, et offrez à vos équipes un lecteur réseau rapide et léger sans clients de synchronisation lourds. RcloneView garde tout visible, journalisé et facile à gérer.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<CloudSupportGrid />
