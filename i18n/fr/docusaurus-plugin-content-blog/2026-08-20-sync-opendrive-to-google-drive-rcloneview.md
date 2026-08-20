---
slug: sync-opendrive-to-google-drive-rcloneview
title: "Synchroniser OpenDrive vers Google Drive — Sauvegarde cloud avec RcloneView"
authors:
  - kai
description: "Synchronisez des dossiers OpenDrive vers Google Drive avec RcloneView, en utilisant Folder Compare et des tâches planifiées pour garder les deux clouds alignés."
keywords:
  - synchroniser OpenDrive vers Google Drive
  - sauvegarde OpenDrive Google Drive
  - synchronisation RcloneView OpenDrive
  - sauvegarde cloud OpenDrive
  - synchronisation cloud à cloud
  - OpenDrive Google Drive RcloneView
  - outil de sauvegarde multi-cloud
  - comparaison de dossiers OpenDrive
tags:
  - RcloneView
  - opendrive
  - google-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser OpenDrive vers Google Drive — Sauvegarde cloud avec RcloneView

> Gardez un dossier OpenDrive reflété sur Google Drive sans rien télécharger d'abord sur un disque local.

Les équipes qui stockent leurs fichiers de travail sur OpenDrive mais collaborent avec des clients ou des partenaires sur Google Drive finissent généralement par copier des fichiers manuellement dans les deux sens, ce qui désynchronise tout dès qu'un côté change. RcloneView connecte les deux distants dans une seule fenêtre et synchronise directement entre eux, de sorte que le transfert s'effectue de cloud à cloud plutôt que de passer par un dossier local. Contrairement aux outils de montage seul, RcloneView synchronise et compare aussi les dossiers — dès la licence FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurer les distants OpenDrive et Google Drive

Ajoutez d'abord OpenDrive comme distant dans Remote Manager, puis ajoutez Google Drive via sa connexion OAuth basée sur le navigateur — une fois configurés, les deux distants apparaissent comme des onglets séparés dans File Explorer, ce qui vous permet de parcourir chaque côté indépendamment avant de créer une tâche de synchronisation. Vérifiez que vous pouvez lister les dossiers sur les deux distants avant de passer à l'assistant de synchronisation — un distant qui échoue à la navigation échouera également en cours de synchronisation, et il est plus facile de le détecter tôt.

<img src="/support/images/en/blog/new-remote.png" alt="Adding OpenDrive and Google Drive remotes in RcloneView" class="img-large img-center" />

## Configurer la tâche de synchronisation unidirectionnelle

Dans l'assistant de synchronisation, sélectionnez le dossier OpenDrive comme source et le dossier Google Drive cible comme destination, puis choisissez la synchronisation unidirectionnelle afin qu'OpenDrive reste la source de vérité. Réglez le nombre de transferts de fichiers et de vérificateurs d'égalité dans Advanced Settings en fonction de la taille du dossier — les valeurs par défaut conviennent à la plupart des cas, mais un dossier contenant des dizaines de milliers de petits fichiers bénéficie d'un nombre réduit de vérificateurs d'égalité si OpenDrive répond lentement aux requêtes de métadonnées.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job from OpenDrive to Google Drive in RcloneView" class="img-large img-center" />

Exécutez un Dry Run avant la première synchronisation réelle pour prévisualiser les fichiers qui seront copiés — cela permet d'éviter un transfert complet et involontaire du dossier, particulièrement utile la première fois que vous ciblez un dossier OpenDrive déjà existant.

## Vérifier le résultat avec Folder Compare

Une fois la synchronisation initiale terminée, ouvrez Folder Compare et pointez-le vers les deux mêmes dossiers pour confirmer que les deux côtés correspondent. Folder Compare met en évidence les fichiers qui n'existent que d'un côté ou qui diffèrent en taille, ce qui permet de repérer un transfert partiel plus rapidement qu'en parcourant Job History à la recherche d'erreurs.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing OpenDrive and Google Drive folders after sync in RcloneView" class="img-large img-center" />

## Planifier des synchronisations continues

Une fois la synchronisation initiale vérifiée, enregistrez la tâche dans Job Manager et configurez une planification de type crontab — disponible avec une licence PLUS — afin que les modifications d'OpenDrive se propagent vers Google Drive à intervalle fixe, sans nécessiter d'exécution manuelle à chaque fois. Job History conserve un enregistrement de chaque exécution planifiée, y compris la taille du transfert et le nombre de fichiers, afin que vous puissiez confirmer que la planification se déclenche bien comme prévu.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring OpenDrive to Google Drive sync job in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez à la fois OpenDrive et Google Drive comme distants dans Remote Manager.
3. Construisez une tâche de synchronisation unidirectionnelle avec un Dry Run d'abord, puis exécutez-la réellement.
4. Vérifiez avec Folder Compare et, si besoin, enregistrez la tâche avec une planification pour des sauvegardes continues.

Avec les deux distants visibles côte à côte, garder OpenDrive et Google Drive alignés devient une tâche de synchronisation routinière plutôt qu'une corvée manuelle.

---

**Guides associés :**

- [Gérer les fichiers OpenDrive et la synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/manage-opendrive-cloud-sync-backup-rcloneview)
- [Sauvegarder OpenDrive vers AWS S3 et un stockage externe avec RcloneView](https://rcloneview.com/support/blog/backup-opendrive-aws-s3-external-storage-rcloneview)
- [Synchroniser Box vers Google Drive avec RcloneView](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)

<CloudSupportGrid />
