---
slug: edit-cloud-video-projects-with-rcloneview
title: "Éditez vos projets vidéo cloud avec RcloneView : montez des lecteurs, synchronisez vos médias et protégez votre montage"
authors:
  - tayson
description: "Montez Google Drive, Dropbox, S3 ou un NAS comme lecteur de montage, gardez vos projets Premiere/Final Cut synchronisés, et automatisez la protection de votre montage avec RcloneView."
keywords:
  - rcloneview
  - montage vidéo
  - premiere pro
  - final cut pro
  - cloud mount
  - vfs cache
  - cloud backup
  - media workflow
  - multi cloud
tags:
  - RcloneView
  - media
  - cloud-storage
  - mount
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Éditez vos projets vidéo cloud avec RcloneView : montez des lecteurs, synchronisez vos médias et protégez votre montage

> Arrêtez de trimballer des disques ou d'attendre des téléchargements. RcloneView vous permet de monter un stockage cloud comme lecteur de montage, de garder vos rushes en miroir sur plusieurs emplacements, et d'automatiser la protection de votre montage.

Les tournages modernes font arriver les rushes sur des caméras, des enregistreurs et des bureaux distants en même temps. Les déplacer tous à la main ralentit les monteurs et risque de casser les liens. RcloneView enveloppe le moteur éprouvé de rclone dans une interface claire pour que vous puissiez monter des clouds comme des disques locaux, préparer des proxies, synchroniser les livrables et récupérer rapidement en cas de problème.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />



## Pourquoi le montage cloud-first a du sens

- Gardez vos équipes synchronisées sans expédier de disques qui tournent ; tout le monde monte la même source.
- Restez dans des délais serrés en préparant des proxies près de vos monteurs pendant que les masters restent en stockage froid.
- Réduisez l'erreur humaine : les synchronisations planifiées et la vérification par somme de contrôle signifient moins de reliaisons cassées.

## Configurer un montage cloud fiable pour les NLE

Un montage stable est l'épine dorsale du montage cloud. RcloneView rend cela accessible en quelques clics.

- Connectez des distants : ajoutez Google Drive, Dropbox, S3/Wasabi/R2, ou votre NAS via `+ New Remote`. Guides : [[Ajouter Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example), [Ajouter AWS S3 et compatibles S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3).  

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />. 
  

- Créez le montage : Remote Explorer ou Mount Manager simplifie tout : [Monter un stockage cloud comme lecteur local](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive). 
- Choisissez un chemin adapté au montage : lettre de lecteur sous Windows (`X:` via `cmount`), `/Volumes/Cloud/Edit` sous macOS, `/mnt/edit` sous Linux.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />. 

## Sécurisez vos projets avec Comparer, Synchroniser et le Planificateur

Le montage est chaotique par nature ; l'automatisation le sécurise.

- Diffs visuels avant synchronisation : lancez **Compare** pour repérer les rushes manquants ou les rendus plus récents sans options en ligne de commande : [Comparer le contenu de dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents).  

 <img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />. 
    

- synchronisations : créez des tâches reproductibles pour pousser `Projects/` vers S3 tout en récupérant des proxies frais depuis Drive : [Synchroniser des stockages distants instantanément](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages), [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs), et [Exécuter et gérer les tâches](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job).  

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />. 
  

- Planifiez la protection : lancez des synchronisations nocturnes après le départ des monteurs. Si une tâche échoue, RcloneView réessaie et enregistre le journal pour que vous puissiez reprendre rapidement.  

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />  
  

## Partagez proxies et livrables entre plusieurs clouds

Différentes parties prenantes ont besoin de différentes copies.

- Envoyez des proxies légers vers Dropbox ou Drive pour les relecteurs pendant que les masters résident dans Wasabi ou un NAS.
- Utilisez des tâches de synchronisation distinctes par destination pour que les masters gourmands en bande passante s'exécutent en dehors des heures de pointe et que les proxies s'exécutent toutes les heures.
- Gardez des structures de dossiers cohérentes avec des préréglages enregistrés ; le NLE relie proprement quand les chemins correspondent.

## Surveillez et récupérez rapidement

Vous devez savoir quand les transferts ralentissent ou échouent.

- Suivez le débit en direct dans **Transfer Monitor** : [Suivi des transferts en temps réel](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring). 

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />. 
  
- Consultez **Job History** pour confirmer les sommes de contrôle et les fichiers ignorés : [Historique des tâches](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history). 


## Des lecteurs cloud qui se sentent locaux

RcloneView fait en sorte que le stockage cloud se comporte comme un lecteur prêt pour le montage : montez une fois, automatisez les synchronisations, et gardez chaque version protégée. Votre équipe arrête de jongler avec des copies et reste concentrée sur le montage.

<CloudSupportGrid />
