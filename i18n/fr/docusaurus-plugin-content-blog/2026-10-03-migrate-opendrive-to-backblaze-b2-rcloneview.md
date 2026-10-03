---
slug: migrate-opendrive-to-backblaze-b2-rcloneview
title: "Migrer d'OpenDrive vers Backblaze B2 — Transférer des fichiers avec RcloneView"
authors:
  - tayson
description: "Déplacez des fichiers d'OpenDrive vers Backblaze B2 avec RcloneView : connectez les deux remotes, simulez la copie avec Dry Run, lancez le transfert et vérifiez avec Folder Compare."
keywords:
  - migrer OpenDrive vers Backblaze B2
  - transfert OpenDrive vers B2
  - migration OpenDrive
  - sauvegarde Backblaze B2
  - transfert de cloud à cloud
  - RcloneView OpenDrive
  - RcloneView Backblaze B2
  - déplacer des fichiers d'OpenDrive vers B2
tags:
  - RcloneView
  - opendrive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer d'OpenDrive vers Backblaze B2 — Transférer des fichiers avec RcloneView

> Déplacez une bibliothèque OpenDrive vers des buckets Backblaze B2 grâce à un transfert de cloud à cloud prévisualisé et vérifiable, plutôt qu'un téléchargement suivi d'un nouvel envoi manuel.

Les équipes qui dépassent les capacités d'un compte de partage de fichiers souhaitent souvent un stockage objet pour leurs archives à long terme. Déplacer des données d'OpenDrive vers Backblaze B2 à la main implique de tout télécharger d'abord en local. RcloneView connecte les deux services et transfère directement de l'un à l'autre, avec un Dry Run et une étape de comparaison pour savoir ce qui a été déplacé. Connectez S3, Azure ou Backblaze B2 avec un accès complet en lecture et en écriture avec la licence FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter les deux remotes

Ouvrez l'onglet Remote et choisissez New Remote. Ajoutez OpenDrive comme un remote et Backblaze B2 comme l'autre. B2 utilise un Application Key ID et une Application Key, que vous créez dans la page de gestion des clés de Backblaze. Créez d'abord le bucket de destination dans Backblaze afin de disposer d'un chemin cible.

Une fois les deux remotes visibles dans Remote Manager, ouvrez-les côte à côte dans deux panneaux Explorer. Parcourir le niveau supérieur de chacun confirme que les identifiants fonctionnent avant de vous engager dans un gros transfert.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des remotes OpenDrive et Backblaze B2 dans RcloneView" class="img-large img-center" />

## Planifier l'organisation des dossiers

Une migration est le bon moment pour décider de la façon dont les données seront organisées dans B2. Un schéma courant consiste à prévoir un bucket par usage, par exemple un bucket d'archives pour les projets terminés, avec des dossiers de premier niveau reprenant votre structure OpenDrive actuelle. Utilisez Get Size sur les plus gros dossiers OpenDrive pour estimer le volume, et copiez d'abord les dossiers les plus importants.

Si certains types de fichiers doivent rester sur place, l'étape 3 de l'assistant de synchronisation permet de définir une taille maximale de fichier, un âge maximal de fichier ou des règles d'exclusion personnalisées comme `.iso`.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de cloud à cloud d'OpenDrive vers Backblaze B2 dans RcloneView" class="img-large img-center" />

## Dry Run, puis transfert

Créez une tâche avec OpenDrive comme source et votre bucket B2 comme destination. Pour une migration, une tâche Copy est le choix le plus sûr, car elle laisse la source intacte ; une tâche Sync peut supprimer des fichiers sur la destination pour les aligner sur la source. Lancez d'abord un Dry Run pour voir la liste des fichiers qui seraient copiés.

À l'étape 2, conservez « Retry entire sync if fails » à sa valeur par défaut de 3 et envisagez de réduire les transferts simultanés si la source limite le débit. Lancez ensuite la tâche et suivez la progression, la vitesse et le nombre de fichiers dans l'onglet Transferring.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Exécution de la tâche OpenDrive vers B2 dans RcloneView" class="img-large img-center" />

## Vérifier avant de retirer la source

Lorsque la tâche est terminée, ouvrez Job History pour confirmer que l'état est Completed et examinez la taille totale et le nombre de fichiers. Utilisez ensuite Compare sur les dossiers OpenDrive et B2. Les fichiers left-only sont des éléments qui ne sont pas arrivés ; les fichiers different signalent des écarts de taille qui méritent une nouvelle copie. Conservez les données OpenDrive tant que la comparaison montre des fichiers left-only.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare entre OpenDrive et Backblaze B2" class="img-large img-center" />

## Premiers pas

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez OpenDrive et Backblaze B2 comme remotes et créez le bucket de destination.
3. Créez une tâche Copy, lancez un Dry Run, puis exécutez le transfert.
4. Vérifiez avec Job History et Folder Compare avant de désactiver la source.

Une copie prévisualisée et vérifiée rend la migration vers B2 prévisible, même pour de grandes bibliothèques.

---

**Guides associés :**

- [Gérer le stockage OpenDrive — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-opendrive-cloud-sync-backup-rcloneview)
- [Migrer de SugarSync vers Backblaze B2 avec RcloneView](https://rcloneview.com/support/blog/migrate-sugarsync-to-backblaze-b2-rcloneview)
- [Migrer de Koofr vers Backblaze B2 avec RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
