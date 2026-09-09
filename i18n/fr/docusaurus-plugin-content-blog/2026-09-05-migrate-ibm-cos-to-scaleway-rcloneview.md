---
slug: migrate-ibm-cos-to-scaleway-rcloneview
title: "Migrer IBM Cloud Object Storage vers Scaleway — Transférer des fichiers avec RcloneView"
authors:
  - kai
description: "Déplacez des buckets d'IBM Cloud Object Storage vers Scaleway Object Storage avec RcloneView, vérifiés par somme de contrôle et prévisualisés avec dry run."
keywords:
  - migrer IBM COS vers Scaleway
  - migration IBM Cloud Object Storage
  - Scaleway Object Storage
  - transfert de stockage compatible S3
  - RcloneView
  - migration de stockage objet
  - transfert cloud à cloud
  - synchronisation vérifiée par somme de contrôle
  - outil de migration de buckets
  - stockage objet multi-cloud
tags:
  - RcloneView
  - object-storage
  - s3-compatible
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer IBM Cloud Object Storage vers Scaleway — Transférer des fichiers avec RcloneView

> Déplacez des buckets directement entre deux fournisseurs de stockage objet compatibles S3, avec des aperçus dry-run et une vérification par somme de contrôle en chemin.

Les équipes changent de fournisseur de stockage objet pour des exigences de résidence des données, de latence régionale, ou simplement pour consolider leur infrastructure, mais retélécharger manuellement des téraoctets de contenu de buckets entre deux points de terminaison compatibles S3 est lent et sujet aux erreurs. RcloneView se connecte à la fois à IBM Cloud Object Storage et à Scaleway Object Storage en tant que distants compatibles S3 standard, puis transfère les données de bucket à bucket sans d'abord faire transiter les fichiers par un disque local. S3, Azure File Storage ou Backblaze B2 peuvent être connectés en lecture/écriture complète dès la licence FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter les deux points de terminaison de stockage objet

IBM COS et Scaleway sont tous deux ajoutés en tant que distants compatibles S3 dans RcloneView, chacun nécessitant une Access Key, une Secret Key et l'URL de point de terminaison spécifique au fournisseur plutôt qu'une connexion OAuth. Ajoutez d'abord IBM Cloud Object Storage à l'aide de la clé API et du point de terminaison de votre instance IBM Cloud, puis répétez le processus pour vos identifiants Scaleway Object Storage.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des distants IBM Cloud Object Storage et Scaleway dans RcloneView" class="img-large img-center" />

Une fois les deux distants configurés, ils apparaissent sous forme d'onglets séparés dans les panneaux de l'explorateur, ce qui vous permet de parcourir le contenu des buckets de chaque côté avant de décider ce qui doit réellement être déplacé.

## Prévisualiser et exécuter la migration

Une tâche de synchronisation ou de copie configurée avec IBM COS comme source et Scaleway comme destination gère le transfert en masse. Avant de vous engager dans une exécution complète, utilisez Dry Run pour voir exactement quels objets seront copiés — cela détecte tôt les problèmes de nommage ou de chemin, particulièrement utile lorsque les structures de buckets ne correspondent pas exactement entre les deux fournisseurs.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert direct d'objets d'IBM Cloud Object Storage vers Scaleway" class="img-large img-center" />

Activer la comparaison par somme de contrôle dans les paramètres avancés de la tâche vérifie les fichiers par hash et taille plutôt que par simple date de modification, ce qui importe lors du déplacement de données entre deux backends de stockage différents qui peuvent gérer les horodatages différemment. Les paramètres de filtrage vous permettent également d'exclure des types de fichiers spécifiques ou des objets dépassant une certaine taille si seule une partie d'un bucket doit être déplacée.

## Surveiller et planifier le transfert

Les grandes migrations de stockage objet se terminent rarement en une seule session. L'onglet Transferring affiche la progression en direct, la vitesse et le nombre de fichiers de la tâche en cours, et Job History conserve un enregistrement de chaque exécution terminée ou annulée — y compris le statut, la durée et la taille totale transférée — afin que vous puissiez confirmer que la migration s'est terminée proprement ou reprendre là où une tâche annulée s'était arrêtée.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Examen de l'historique des tâches après la migration de buckets d'IBM COS vers Scaleway" class="img-large img-center" />

Ajuster le nombre de transferts de fichiers et de transferts multi-threads dans les paramètres avancés d'une tâche peut aider à déplacer de grandes quantités d'objets plus efficacement, et les paramètres de nouvelle tentative en cas d'échec réduisent le risque qu'une connexion instable ne compromette un transfert de plusieurs heures.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez vos identifiants IBM Cloud Object Storage en tant que nouveau distant compatible S3.
3. Ajoutez vos identifiants Scaleway Object Storage en tant que second distant compatible S3.
4. Exécutez un dry run, puis lancez une tâche de synchronisation vérifiée par somme de contrôle entre les deux.

Une fois que les deux points de terminaison se trouvent côte à côte dans le même explorateur, déplacer des buckets entre fournisseurs de stockage objet devient une tâche surveillée plutôt qu'un jeu de devinettes manuel.

---

**Guides associés :**

- [Gérer IBM Cloud Object Storage — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-ibm-cos-cloud-sync-backup-rcloneview)
- [Gérer Scaleway Object Storage — Synchronisation cloud et sauvegarde avec RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Wasabi vs Backblaze B2 vs IDrive e2 : comparatif de stockage compatible S3 abordable](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)

<CloudSupportGrid />
