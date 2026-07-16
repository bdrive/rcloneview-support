---
slug: box-to-s3-glacier-archive-rcloneview
title: "Box vers S3 + Glacier : archives par niveaux avec RcloneView"
authors:
  - tayson
description: "Migrez vos bibliothèques Box vers le stockage chaud Amazon S3 et Glacier Deep Archive pour une conservation à long terme, avec comparaison, vérification par somme de contrôle et synchronisations planifiées dans RcloneView."
keywords:
  - rcloneview
  - migration box
  - s3
  - glacier
  - archive cloud
  - vérification par somme de contrôle
  - planificateur
  - multi cloud
  - rclone
  - stockage par niveaux
  - sauvegarde cloud
  - comparaison synchronisation
  - mount
  - historique des tâches
  - tableau de bord visuel
  - gui
  - aws
  - vault
  - conformité
  - conservation à long terme
tags:
  - cloud-migration
  - s3
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box vers S3 + Glacier : archives par niveaux avec RcloneView

> Déplacez vos bibliothèques Box vers Amazon S3 pour un accès actif et vers Glacier pour une conservation à long terme, avec comparaisons visuelles, synchronisations vérifiées par somme de contrôle et tâches planifiées -- sans avoir besoin d'options en ligne de commande.

Box est excellent pour la collaboration, mais la conservation à long terme et les grandes bibliothèques de médias peuvent coûter cher. RcloneView vous permet de miroiter des dossiers Box vers des buckets S3 pour un accès à chaud, puis de transférer les données vieillissantes vers des classes Glacier selon un planning. Vous obtenez des comparaisons côte à côte, des tâches journalisées et des nouvelles tentatives sans avoir à surveiller des scripts.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Ce que nous résolvons

- Réduire les dépenses de stockage Box en répartissant les données froides vers Glacier par niveaux.
- Conserver une copie S3 toujours disponible pour les équipes actives, tandis que Glacier conserve l'historique.
- Maintenir l'intégrité grâce à des tâches vérifiées par somme de contrôle et une piste d'audit.

## Connectez rapidement les distants Box et S3

- Ajoutez les distants Box et S3 via **+ New Remote**. Configuration OAuth et clés : [add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login), [s3](/howto/remote-storage-connection-settings/s3).  

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />. 

- Utilisez l'**Explorateur de distants** pour vérifier la profondeur des dossiers et la nomenclature avant la première synchronisation.  

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />. 

- Optionnel : montez l'un des distants localement pour des vérifications ponctuelles rapides : [mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive).  

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />. 

## Comparez avant de déplacer

- Exécutez **Compare** entre Box et le préfixe S3 cible pour voir les fichiers manquants ou plus récents avant de valider : [compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents).
- Filtrez par extensions (par exemple, PDF, CAO, médias) pour cibler les revues.  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />. 


## Construisez un pipeline à deux niveaux (S3 chaud, Glacier froid)

- Étape 1 : Créez une tâche de **copie** de Box vers S3 pour le niveau actif : [create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs). Commencez par une copie par sécurité ; passez à la synchronisation après avoir validé les résultats.  

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />. 

- Étape 2 : Appliquez des politiques de cycle de vie S3 sur le bucket pour transitionner les objets vers des classes Glacier après N jours. Conservez la tâche RcloneView ciblant le préfixe chaud (par exemple, `s3:box-archive/hot/`).
- Étape 3 : Pour les archives profondes, planifiez une tâche secondaire pour transférer les dossiers rarement utilisés directement vers un préfixe dédié à Glacier (par exemple, `s3:box-archive/cold/`).  

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />. 


RcloneView vous offre un moyen visuel et reproductible de quitter Box, de réduire les coûts de stockage et de conserver des archives conformes dans AWS. Comparez d'abord, copiez en toute sécurité, planifiez le reste -- et dormez tranquille.


<CloudSupportGrid />
