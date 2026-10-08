---
slug: migrate-hidrive-to-wasabi-rcloneview
title: "Migrer HiDrive vers Wasabi — Transférer des fichiers avec RcloneView"
authors:
  - morgan
description: "Déplacez vos fichiers de HiDrive vers le stockage objet Wasabi avec RcloneView : connectez les deux remotes, faites un Dry Run, lancez le transfert et vérifiez avec Folder Compare."
keywords:
  - migrer HiDrive vers Wasabi
  - transfert HiDrive vers Wasabi
  - synchronisation HiDrive Wasabi
  - RcloneView HiDrive
  - migration Wasabi S3
  - transfert de cloud à cloud
  - sauvegarde HiDrive vers S3
  - rclone HiDrive Wasabi
  - outil de migration HiDrive
  - GUI Wasabi
tags:
  - RcloneView
  - hidrive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer HiDrive vers Wasabi — Transférer des fichiers avec RcloneView

> Déplacez une archive HiDrive vers le stockage objet Wasabi grâce à un flux visuel : connecter, prévisualiser, transférer, vérifier.

HiDrive convient bien comme espace de fichiers personnel ou d'équipe, mais les archives à long terme ont souvent leur place dans un stockage objet de type S3 avec un accès API prévisible. RcloneView connecte les deux services dans une seule fenêtre : vous pouvez copier des dossiers d'un cloud à l'autre sans tout télécharger d'abord sur votre propre disque.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter HiDrive et Wasabi comme remotes

HiDrive utilise OAuth : RcloneView ouvre votre navigateur, vous vous connectez et le remote est relié sans clé d'API distincte. Wasabi est compatible S3 ; vous saisissez donc une Access Key, une Secret Key et l'endpoint de la région de votre bucket.

Ajoutez les deux depuis l'onglet Remote avec New Remote. Ouvrez ensuite chacun dans un panneau Explorer, l'un à gauche et l'autre à droite, et vérifiez que vous pouvez parcourir les dossiers HiDrive et le bucket Wasabi cible.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des remotes HiDrive et Wasabi dans RcloneView" class="img-large img-center" />

## Planifier le transfert avec un Dry Run

Imaginez un studio de design qui déplace 800 GB de dossiers de projets terminés hors de HiDrive. Avant de toucher à quoi que ce soit, créez le transfert sous forme de job. Choisissez HiDrive comme source et un chemin de bucket Wasabi comme destination, puis utilisez le mode One-way "Modifying destination only".

Lancez d'abord un Dry Run. Il liste les fichiers qui seraient copiés ou supprimés sans rien modifier, ce qui est un moyen fiable de repérer un mauvais dossier de destination.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de cloud à cloud de HiDrive vers Wasabi dans RcloneView" class="img-large img-center" />

## Ajuster les paramètres et lancer le job

À l'étape Step 2 de l'assistant, définissez le nombre de transferts de fichiers et activez la comparaison par checksum si vous voulez une vérification par hash et taille. Conservez la valeur de nouvelles tentatives par défaut (3) afin qu'une brève coupure réseau n'interrompe pas toute l'exécution. Utilisez les filtres de Step 3 pour ignorer des éléments tels que les fichiers temporaires ou un dossier `.git/`.

Quand l'aperçu vous convient, lancez le job et suivez la vitesse, la progression et le nombre de fichiers dans l'onglet Transferring.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Suivi d'un transfert HiDrive vers Wasabi dans l'onglet Transferring" class="img-large img-center" />

## Vérifier avec Folder Compare

Une fois le job terminé, ouvrez Compare avec HiDrive d'un côté et Wasabi de l'autre. Filtrez les fichiers présents uniquement à gauche pour voir ce qui n'est pas arrivé, et ne copiez que les éléments manquants. Job History conserve l'état, la durée, la taille et le nombre de fichiers pour votre journal de migration.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare confirmant que le contenu de HiDrive et de Wasabi correspond" class="img-large img-center" />

## Premiers pas

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez HiDrive (connexion via le navigateur) et Wasabi (Access Key, Secret Key, endpoint) comme remotes.
3. Créez un job unidirectionnel de HiDrive vers votre bucket Wasabi et lancez un Dry Run.
4. Exécutez le transfert, puis vérifiez avec Folder Compare.

Une migration prévisualisée et vérifiée laisse vos fichiers HiDrive intacts jusqu'à ce que vous soyez certain que tout est bien arrivé dans Wasabi.

---

**Guides associés :**

- [Synchroniser HiDrive vers Amazon S3 avec RcloneView](https://rcloneview.com/support/blog/sync-hidrive-to-amazon-s3-rcloneview)
- [Migrer HiDrive vers Backblaze B2 avec RcloneView](https://rcloneview.com/support/blog/migrate-hidrive-to-backblaze-b2-rcloneview)
- [Gérer le stockage Wasabi — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
