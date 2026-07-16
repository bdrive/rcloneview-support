---
slug: manage-put-io-cloud-sync-backup-rcloneview
title: "Gérer le stockage Put.io — Synchroniser et sauvegarder des fichiers avec RcloneView"
authors:
  - tayson
description: "Découvrez comment connecter Put.io à RcloneView via OAuth, parcourir vos fichiers cloud et synchroniser facilement du contenu multimédia vers ou depuis d'autres fournisseurs cloud."
keywords:
  - put.io RcloneView
  - put.io cloud sync
  - put.io backup
  - manage put.io files
  - put.io rclone GUI
  - put.io media management
  - cloud file transfer put.io
  - put.io sync cloud
tags:
  - putio
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage Put.io — Synchroniser et sauvegarder des fichiers avec RcloneView

> Put.io est un service cloud de téléchargement de torrents et de liens directs qui stocke le contenu récupéré directement dans le cloud — RcloneView facilite la navigation, la synchronisation et la sauvegarde de ces fichiers.

Put.io vous permet de récupérer des torrents, des liens directs et du contenu d'hébergeurs de fichiers premium directement dans le stockage cloud, ce qui en fait un choix populaire pour les passionnés de multimédia. Une fois vos fichiers arrivés sur Put.io, vous avez besoin d'un moyen fiable de les déplacer — vers un disque local, un autre cloud, ou une archive personnelle. RcloneView se connecte à Put.io via une connexion OAuth dans le navigateur et vous offre une interface graphique complète pour gérer les transferts sans toucher à la ligne de commande.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Put.io à RcloneView

Ouvrez RcloneView et accédez au **Gestionnaire de distants**. Cliquez sur **Nouveau distant**, parcourez la liste des fournisseurs, puis sélectionnez **Put.io**. RcloneView ouvrira automatiquement votre navigateur pour l'authentification OAuth — connectez-vous à votre compte Put.io et autorisez l'accès. Aucune clé API à copier manuellement ; le flux OAuth s'occupe de tout.

Une fois autorisé, le distant apparaît dans votre Gestionnaire de distants. Cliquez sur **Ouvrir** pour lancer l'explorateur de fichiers et parcourir votre stockage Put.io. Vous verrez vos fichiers enregistrés, des dossiers organisés par torrent ou tâche de téléchargement, ainsi que tout répertoire que vous avez créé manuellement.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Put.io remote in RcloneView" class="img-large img-center" />

## Parcourir et gérer les fichiers Put.io

L'explorateur de fichiers de RcloneView affiche le contenu de Put.io dans la vue arborescente et liste habituelle. Vous pouvez naviguer dans les dossiers, sélectionner plusieurs fichiers et lancer des transferts directement depuis le panneau. Si vous avez de vastes bibliothèques multimédias — films, séries télévisées, fichiers audio — la vue en vignettes vous offre une grille d'images pour identifier rapidement le contenu.

Pour copier ou déplacer des fichiers entre Put.io et un autre cloud (par exemple Google Drive ou Backblaze B2), ouvrez un second panneau pointant vers votre distant de destination. Sélectionnez les fichiers dans le panneau Put.io, faites un clic droit, puis choisissez **Copier** ou **Déplacer**. RcloneView gère le transfert sans le télécharger d'abord sur votre machine locale lors d'opérations de cloud à cloud.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Put.io to another provider" class="img-large img-center" />

## Configurer une tâche de synchronisation pour Put.io

Pour des sauvegardes régulières ou une synchronisation à sens unique depuis Put.io vers votre stockage à long terme, la fonctionnalité **Tâche** est plus fiable que les transferts manuels. Allez dans **Tâches**, cliquez sur **Nouvelle tâche**, et sélectionnez votre distant Put.io comme source. Définissez la destination sur n'importe quel autre distant configuré — Backblaze B2 est un choix courant pour un archivage multimédia économique.

Lors de l'étape de configuration de la tâche, vous pouvez activer **Simulation** pour prévisualiser les fichiers qui seront transférés avant de valider. Cela est utile lorsque votre bibliothèque Put.io est volumineuse et que vous souhaitez confirmer la portée de la synchronisation. Après vérification, désactivez la simulation et exécutez la tâche. RcloneView enregistre chaque transfert avec le nombre de fichiers, la vitesse et le statut dans l'onglet **Historique des tâches**.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Put.io sync job in RcloneView" class="img-large img-center" />

## Cas d'usage : flux de travail pour contenu multimédia

Les utilisateurs de Put.io suivent généralement quelques schémas types : archiver le contenu multimédia récupéré vers un stockage froid, refléter le contenu vers un serveur personnel, ou synchroniser vers Google Drive pour le streaming via des lecteurs tiers. RcloneView couvre tous ces cas. Vous pouvez créer des tâches distinctes pour différents sous-répertoires Put.io — une tâche pour les films, une autre pour les séries télévisées — et les planifier indépendamment avec une licence PLUS.

La fonctionnalité **Comparaison de dossiers** est pratique lorsque vous n'êtes pas sûr de ce qui a déjà été copié. Ouvrez le dossier Put.io et votre destination côte à côte, et RcloneView met en évidence les différences afin que vous ne transfériez que ce qui manque.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Put.io transfer logs in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez le **Gestionnaire de distants**, cliquez sur **Nouveau distant**, et sélectionnez **Put.io**.
3. Complétez la connexion OAuth dans le navigateur pour autoriser l'accès.
4. Ouvrez le distant Put.io dans l'explorateur de fichiers et configurez une tâche de synchronisation vers la destination de votre choix.

RcloneView transforme Put.io d'un simple réceptacle de téléchargement passif en une partie active de votre flux de travail de stockage cloud.

---

**Guides connexes :**

- [Sauvegarder pCloud vers AWS S3 avec RcloneView](https://rcloneview.com/support/blog/backup-pcloud-to-aws-s3-rcloneview)
- [Migration cloud à cloud avec RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [Surveillance de l'historique des tâches et des journaux de transfert](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
