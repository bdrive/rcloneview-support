---
slug: cloud-storage-civil-engineering-rcloneview
title: "Stockage cloud pour les bureaux d'études en génie civil — fichiers de projet, données de relevé et sauvegardes avec RcloneView"
authors:
  - tayson
description: "Stockage cloud pour les bureaux d'études en génie civil : organisez plans de projet, données de relevé et sauvegardes sur plusieurs clouds avec RcloneView, une interface graphique multiplateforme."
keywords:
  - stockage cloud pour le génie civil
  - sauvegarde de fichiers de génie civil
  - synchronisation de fichiers de projets d'ingénierie
  - sauvegarde cloud de données de relevé
  - sauvegarde multi-cloud pour ingénieurs
  - RcloneView
  - interface graphique de synchronisation cloud
  - fichiers de plans volumineux dans le cloud
  - archivage de projets stockage cloud
  - rclone GUI
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Stockage cloud pour les bureaux d'études en génie civil — fichiers de projet, données de relevé et sauvegardes avec RcloneView

> Mettez à l'abri plans, données de relevé et projets clôturés sur plusieurs clouds sans scripter une seule commande.

Un bureau d'études en génie civil de taille moyenne peut gérer des projets de voirie en cours sur Google Drive, des livrables clients sur Box ou OneDrive, et des années d'archives de projets clôturés sur un NAS. Chaque emplacement a sa propre interface, ce qui complique la cohérence des sauvegardes. RcloneView les rassemble dans une seule fenêtre pour copier, comparer et planifier des transferts visuellement.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi les données d'ingénierie nécessitent une approche multi-cloud

Les projets d'ingénierie produisent des ensembles de fichiers volumineux et variés : plans CAO, exports SIG, scans de nuages de points, feuilles de calcul et dossiers PDF signés. Les clients imposent souvent l'emplacement des livrables, si bien qu'un seul fournisseur couvre rarement tous les besoins. RcloneView se connecte à plus de 90 fournisseurs : Google Drive, Box, OneDrive, Amazon S3 et votre NAS local peuvent ainsi cohabiter dans l'Explorateur.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout de remotes cloud dans RcloneView pour un bureau d'études" class="img-large img-center" />

RcloneView permet de monter et de synchroniser plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux ; les ordinateurs portables de terrain et les postes de bureau partagent ainsi le même flux de travail.

## Archiver les projets clôturés vers un stockage objet économique

Une fois un projet clôturé, ses fichiers changent rarement mais doivent être conservés pendant des années. Copiez le dossier du projet terminé de votre espace de travail actif vers un bucket compatible S3 tel que Backblaze B2 ou Wasabi, à l'aide de l'Explorateur à deux volets ou par glisser-déposer entre remotes. Un déplacement entre remotes différents effectue une copie : l'original reste donc intact jusqu'à ce que vous ayez vérifié le résultat.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de cloud à cloud d'une archive de projet" class="img-large img-center" />

## Vérifier les livrables avec Folder Compare

Avant de supprimer quoi que ce soit d'un disque de travail, lancez Folder Compare entre la source et l'archive. Les filtres affichent les fichiers présents uniquement à gauche, uniquement à droite ou différents, ce qui vous permet de confirmer que chaque jeu de plans a bien été transféré. Lancez d'abord un Dry Run sur tout job de synchronisation pour prévisualiser précisément les fichiers qui seraient copiés ou supprimés.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare affichant les différences entre des dossiers de projet" class="img-large img-center" />

## Planifier des sauvegardes nocturnes des projets en cours

Créez un job de synchronisation de votre partage de projets vers un second cloud et ajoutez une planification de type crontab pour que les sauvegardes s'exécutent en dehors des heures de bureau. La planification nécessite la licence PLUS ; les jobs manuels, l'historique des jobs (Job History) et la synchronisation 1:N vers plusieurs destinations fonctionnent avec la licence FREE. L'historique des jobs enregistre le statut, la taille et le nombre de fichiers de chaque exécution, ce qui vous fournit une piste d'audit.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planification d'un job de sauvegarde nocturne dans RcloneView" class="img-large img-center" />

## Premiers pas

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez des remotes pour votre espace de travail actif, votre NAS et un bucket d'archive.
3. Créez un job de synchronisation des projets actifs vers l'archive et lancez d'abord un Dry Run.
4. Ajoutez une planification (PLUS) et consultez l'historique des jobs après les premières exécutions.

Protéger des années de documents d'ingénierie ne nécessite plus de script sur mesure.

---

**Guides associés :**

- [Stockage cloud pour les cabinets d'architecture](https://rcloneview.com/support/blog/cloud-storage-architecture-firms-rcloneview)
- [Dry Run — prévisualiser la synchronisation cloud](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [Historique des jobs et journaux de transfert](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
