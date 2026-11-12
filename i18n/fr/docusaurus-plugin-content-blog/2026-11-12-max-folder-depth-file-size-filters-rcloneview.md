---
slug: max-folder-depth-file-size-filters-rcloneview
title: "Filtres de profondeur maximale de dossiers et de taille maximale de fichier — Contrôlez ce qui est synchronisé dans RcloneView"
authors:
  - kai
description: "Utilisez les filtres Max folder depth et Max file size de RcloneView pour ignorer les sous-dossiers profonds et les fichiers trop volumineux, et garder vos tâches de synchronisation cloud rapides et ciblées."
keywords:
  - synchronisation avec profondeur maximale de dossiers
  - filtre de taille maximale de fichier
  - rclone max depth GUI
  - ignorer les gros fichiers lors de la synchronisation cloud
  - limiter les niveaux de dossiers synchronisés
  - filtres de synchronisation RcloneView
  - exclure les gros fichiers de la sauvegarde
  - synchronisation cloud sélective
  - synchronisation de dossiers peu profonde
tags:
  - RcloneView
  - feature
  - filters
  - cloud-sync
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Filtres de profondeur maximale de dossiers et de taille maximale de fichier — Contrôlez ce qui est synchronisé dans RcloneView

> Deux champs numériques de l'assistant de synchronisation décident jusqu'où une tâche descend et quelle taille un fichier peut atteindre avant d'être laissé de côté.

Toutes les tâches de synchronisation n'ont pas besoin de l'arborescence complète. Une équipe de design peut ne vouloir que les dossiers de livraison de premier niveau sur le Dropbox d'un client, et non chaque dossier de travail imbriqué. Un particulier qui sauvegarde Documents sur OneDrive peut vouloir exclure quelques images disque de 30 Go. RcloneView gère ces deux cas à l'étape 3 de l'assistant de synchronisation avec **Max folder depth** et **Max file size**, tous deux disponibles avec la FREE License.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Max Folder Depth : limiter la profondeur d'une tâche

Max folder depth définit combien de niveaux de dossiers sous la source la tâche traite. Tout ce qui est plus profond est ignoré. Une valeur faible transforme une source vaste et tentaculaire en une synchronisation peu profonde des niveaux supérieurs.

C'est utile lorsque les fichiers importants se trouvent près du sommet. Par exemple, le dossier `Clients/` d'une agence peut contenir un dossier par client avec les livrables finaux, ainsi que des arborescences `working/` et `cache/` imbriquées sur dix niveaux. Une limite de profondeur conserve les livrables et ignore le reste, sans longue liste de règles d'exclusion.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a remote in RcloneView before configuring a depth-limited sync job" class="img-large img-center" />

Les limites de profondeur s'appliquent silencieusement. Une limite de profondeur oubliée après un test fait disparaître les sous-dossiers plus profonds des synchronisations suivantes, sans aucune erreur. Si des fichiers manquent à la destination, vérifiez d'abord ce champ.

## Max File Size : écarter les fichiers trop volumineux

Max file size se saisit en Mo, et tout fichier plus grand que cette valeur est exclu. Utilisations courantes :

- Exclure les images ISO, les disques de machines virtuelles et la vidéo brute lors de la sauvegarde d'un dossier de travail.
- Maintenir une synchronisation vers un petit compte gratuit dans ses limites.
- Garder une tâche nocturne de fichiers bureautiques rapide en ignorant l'export géant occasionnel.

Le champ ne définit qu'une limite supérieure. Pour exclure un type de fichier connu quelle que soit sa taille, ajoutez une règle personnalisée telle que `.iso` à la même étape.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job with file size filters in RcloneView Job Manager" class="img-large img-center" />

## Les combiner avec d'autres filtres

Les deux champs fonctionnent avec le reste de l'étape 3 : Max file age (unités `y`, `d`, `h`, `m`, `s`), les filtres prédéfinis Music, Video, Image, Document, Google Docs et Box Docs, et les règles personnalisées. Une tâche peut ainsi ne synchroniser que les documents de moins de 50 Mo, modifiés au cours des 30 derniers jours, dans les trois premiers niveaux de dossiers.

Les filtres modifient ce qu'une synchronisation unidirectionnelle considère comme faisant partie de la source, lancez donc d'abord un **Dry Run**. Il liste les fichiers qui seront copiés et supprimés, ce qui vous permet de repérer une limite trop stricte avant que quoi que ce soit ne change.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History in RcloneView showing file counts for filtered sync runs" class="img-large img-center" />

Après l'exécution de la tâche, Job History affiche le nombre de fichiers et la taille totale de chaque exécution. Une baisse soudaine signifie généralement qu'un filtre est mal réglé.

## Pour commencer

RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux.

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez Sync, choisissez une source et une destination, puis nommez la tâche.
3. À l'étape 3, définissez Max folder depth et Max file size en Mo.
4. Lancez un Dry Run, vérifiez la liste des fichiers, puis enregistrez la tâche dans Job Manager.

Des tâches plus petites et ciblées se terminent plus tôt, consomment moins de stockage et sont plus faciles à vérifier.

---

**Guides associés :**

- [Filtres prédéfinis pour synchroniser des types de fichiers](https://rcloneview.com/support/blog/predefined-filters-sync-file-types-rcloneview)
- [Filtres temporels Min Age et Max Age](https://rcloneview.com/support/blog/min-age-max-age-time-based-filters-rcloneview)
- [Corriger les filtres de synchronisation qui n'excluent pas les fichiers](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)

<CloudSupportGrid />
