---
slug: manage-icloud-photos-cloud-sync-rcloneview
title: "Gérer iCloud Photos — Synchroniser et sauvegarder des fichiers avec RcloneView"
authors:
  - robin
description: "Gérez iCloud Photos avec RcloneView — parcourez, synchronisez et sauvegardez votre bibliothèque de photos Apple vers d'autres clouds depuis une seule GUI multiplateforme."
keywords:
  - gestion iCloud Photos
  - sauvegarde iCloud Photos
  - synchronisation iCloud Photos
  - RcloneView iCloud Photos
  - sauvegarde cloud Apple Photos
  - iCloud Photos to Google Drive
  - migration iCloud Photos
  - outil de sauvegarde bibliothèque photo Apple
  - iCloud Photos rclone
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - macos
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer iCloud Photos — Synchroniser et sauvegarder des fichiers avec RcloneView

> Connectez votre bibliothèque iCloud Photos dans RcloneView et sauvegardez-la vers un autre cloud sans exporter les albums à la main.

L'écosystème Photos d'Apple garde des années d'images et de vidéos enfermées dans iCloud, et obtenir une seconde copie ailleurs implique généralement d'exporter les albums un par un via l'application Photos. RcloneView se connecte à iCloud Photos en tant que remote dédié distinct — un package séparé d'iCloud Drive — vous permettant de parcourir directement la bibliothèque et de la copier vers Google Drive, Amazon S3 ou un disque de sauvegarde local sans passer par l'export manuel. Connectez S3, Azure File Storage ou Backblaze B2 avec un accès en lecture/écriture complet dans la licence FREE, de sorte que le côté destination d'une sauvegarde de photos ne coûte rien de plus à configurer.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter iCloud Photos comme remote

iCloud Photos s'ajoute via l'onglet Remote > New Remote dans RcloneView, et il est configuré comme son propre type de remote dédié, distinct d'iCloud Drive — les deux se comportent comme des remotes séparés même s'ils proviennent du même compte Apple. Une fois authentifiée, la bibliothèque apparaît dans le panneau Explorer comme n'importe quel autre stockage cloud, avec des dossiers, des miniatures et des métadonnées de fichiers que vous pouvez parcourir et sélectionner.

<img src="/support/images/en/blog/new-remote.png" alt="Adding an iCloud Photos remote in RcloneView" class="img-large img-center" />

Comme la bibliothèque peut atteindre des dizaines de milliers de fichiers chez un utilisateur iCloud de longue date, il vaut la peine de passer à la Thumbnail View de RcloneView avant une copie en masse — elle permet de parcourir les aperçus d'images pour confirmer que vous ciblez le bon album ou la bonne plage de dates avant qu'un transfert ne démarre.

## Sauvegarder vers un second cloud

Une fois iCloud Photos connecté, configurez une tâche de synchronisation via l'assistant en 4 étapes : choisissez iCloud Photos comme source, choisissez un remote de destination — Google Drive, un bucket compatible S3 ou un disque externe local — puis lancez d'abord un Dry Run pour prévisualiser exactement ce qui sera copié avant que quoi que ce soit ne soit réellement transféré. Pour une bibliothèque de photos en particulier, la comparaison par checksum à l'étape 2 est utile car les fichiers photo changent rarement de taille, mais vous voulez tout de même avoir la certitude que la copie correspond à l'original octet par octet.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job from iCloud Photos to another cloud remote in RcloneView" class="img-large img-center" />

Les Filtering Settings de l'étape 3 aident aussi à cibler les grandes bibliothèques — un filtre d'ancienneté maximale de fichier limite une tâche de sauvegarde aux ajouts récents uniquement, ce qui garde les exécutions répétées rapides une fois la copie complète initiale terminée.

## Automatiser les sauvegardes récurrentes

Un export ponctuel ne protège pas les photos prises le mois prochain, donc la plupart des utilisateurs d'iCloud Photos mettent en place une tâche de synchronisation récurrente plutôt qu'une exécution manuelle unique. Avec une licence PLUS, attachez à la tâche une planification au format crontab pour qu'elle s'exécute automatiquement selon la cadence qui vous convient — quotidienne, hebdomadaire, ou après une heure précise chaque nuit — puis consultez Job History ensuite pour confirmer que l'exécution s'est terminée et voir combien de fichiers ont été transférés.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring iCloud Photos backup job in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez un remote iCloud Photos via l'onglet Remote > New Remote.
3. Configurez une tâche de synchronisation vers la destination de sauvegarde choisie et lancez d'abord un Dry Run.
4. Planifiez des sauvegardes récurrentes pour que les nouvelles photos restent protégées automatiquement.

Avoir une seconde copie de votre bibliothèque de photos en dehors de l'écosystème Apple représente un point de défaillance unique en moins si un compte est bloqué ou un appareil perdu.

---

**Guides associés :**

- [iCloud Drive avec RcloneView](https://rcloneview.com/support/blog/icloud-drive-with-rcloneview)
- [Gérer la synchronisation cloud d'iCloud Drive avec RcloneView](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [Corriger les erreurs de synchronisation d'iCloud Drive avec RcloneView](https://rcloneview.com/support/blog/fix-icloud-drive-sync-errors-rcloneview)

<CloudSupportGrid />
