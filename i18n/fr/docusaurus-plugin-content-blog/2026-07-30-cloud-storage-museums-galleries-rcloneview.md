---
slug: cloud-storage-museums-galleries-rcloneview
title: "Stockage cloud pour les musées et galeries — Préserver les collections numériques avec RcloneView"
authors:
  - jay
description: "Gérez des numérisations de collections haute résolution et des dossiers d'archives sur plusieurs clouds avec RcloneView, conçu pour les musées et galeries."
keywords:
  - stockage cloud pour musées
  - préservation de collections numériques
  - sauvegarde d'archives de galerie
  - RcloneView musées
  - logiciel de stockage d'archives
  - sauvegarde de numérisation de collections
  - gestion d'archives multi-cloud
  - stockage cloud pour organismes à but non lucratif
  - gestion de données de musée
  - sauvegarde du patrimoine culturel
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - dam
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Stockage cloud pour les musées et galeries — Préserver les collections numériques avec RcloneView

> Conservez en sécurité, sur plusieurs clouds, les numérisations de collections en haute résolution, les rapports d'état et les dossiers de prêt, sans enfermer une petite équipe de conservation chez un seul fournisseur.

Un musée qui numérise une collection permanente peut accumuler des téraoctets de numérisations TIFF haute résolution, de photographies RAW d'objets et de données de capture 3D, souvent réparties entre un compte cloud offert, un Google Workspace institutionnel et un niveau d'archivage financé par subvention comme Backblaze B2 ou Wasabi. RcloneView offre aux régisseurs et archivistes numériques une seule interface pour parcourir, comparer et déplacer cette collection entre fournisseurs, au lieu d'apprendre une console d'administration différente pour chacun.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Consolider les dossiers de collection répartis sur plusieurs clouds

Les dispositifs de stockage institutionnels restent rarement ordonnés — une subvention peut financer une année de stockage d'archives Backblaze B2 pendant que les fichiers de conservation quotidiens résident dans Google Drive ou SharePoint, et les expositions itinérantes ajoutent encore d'autres comptes liés à des institutions partenaires. RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux, ce qui permet à un régisseur de visualiser côte à côte les dossiers de collection de chaque source au lieu de basculer entre onglets de navigateur et applications de bureau distinctes.

L'Explorer multi-panneaux prend en charge jusqu'à quatre panneaux à la fois, permettant à un archiviste numérique de garder visibles simultanément la collection en cours de traitement, la sauvegarde d'archives et un transfert entrant d'un donateur pendant le tri des nouvelles acquisitions.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a museum collection remote in RcloneView" class="img-large img-center" />

## Vérifier les collections numérisées avec Folder Compare

Une fois qu'un lot de numérisations d'objets est téléversé depuis un prestataire de numérisation ou une station de capture interne, Folder Compare vérifie les fichiers livrés par rapport à ce qui est attendu sur le distant d'archives, en signalant les fichiers manquants, de taille différente, ou présents d'un seul côté. Cela permet de détecter les transferts incomplets avant qu'une session de numérisation ne soit marquée comme archivée, ce qui compte lorsque re-photographier un objet fragile n'est pas une simple formalité.

Le comportement de copie limitée aux fichiers différents signifie qu'une comparaison exécutée sur le lot de numérisation de l'année dernière ne gaspillera pas de bande passante à retransférer des fichiers identiques au bit près — seuls les objets ayant réellement changé ou récemment arrivés sont déplacés.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing digitized collection files between local storage and a cloud archive" class="img-large img-center" />

## Planifier les sauvegardes d'archives sans équipe informatique dédiée

De nombreux musées et galeries fonctionnent avec peu de personnel technique, si bien qu'une tâche de synchronisation devant être déclenchée manuellement tend à être oubliée pendant l'installation mouvementée d'une exposition. Les utilisateurs de la licence PLUS peuvent attacher une planification de type crontab à une tâche de sauvegarde de collection afin que les numérisations et rapports d'état arrivent automatiquement chez un second fournisseur, avec une option de simulation pour confirmer les horaires avant activation. Job History fournit ensuite une piste d'audit simple — utile lorsqu'un rapport de subvention doit prouver que les sauvegardes d'archives se sont réellement exécutées comme prévu.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling an automated archival backup for a museum collection" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Connectez chaque compte cloud contenant des données de collection — Google Drive, SharePoint et un fournisseur d'archives comme Backblaze B2 ou Wasabi — en tant que distant distinct.
3. Exécutez Folder Compare sur un lot de numérisation récent pour confirmer qu'il ne manque rien avant l'archivage.
4. Créez une tâche Sync pour refléter les nouvelles acquisitions vers un second fournisseur, et planifiez-la avec PLUS pour que les sauvegardes ne dépendent pas du fait que quelqu'un se souvienne de les exécuter.

Des sauvegardes cohérentes et vérifiées protègent le dossier numérique d'une collection de la même manière qu'un entreposage à climat contrôlé protège les objets physiques.

---

**Guides connexes :**

- [Gérer des actifs numériques sur plusieurs clouds avec RcloneView : un guide de flux de travail complet](https://rcloneview.com/support/blog/manage-digital-assets-multi-cloud-rcloneview)
- [Stockage cloud pour les photographes — Sauvegarder des fichiers RAW, synchroniser des catalogues Lightroom et livrer aux clients](https://rcloneview.com/support/blog/cloud-storage-photographers-raw-backup-rcloneview)
- [Stockage cloud pour organismes à but non lucratif et associations caritatives — Gérer les dons et les données avec RcloneView](https://rcloneview.com/support/blog/cloud-storage-nonprofit-charities-rcloneview)

<CloudSupportGrid />
