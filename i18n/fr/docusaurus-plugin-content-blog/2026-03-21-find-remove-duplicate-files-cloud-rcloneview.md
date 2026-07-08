---
slug: find-remove-duplicate-files-cloud-rcloneview
title: "Trouver et supprimer les fichiers en double sur vos comptes cloud avec RcloneView"
authors:
  - tayson
description: "Identifiez et éliminez les fichiers en double sur plusieurs comptes de stockage cloud grâce aux outils intelligents de déduplication et de comparaison de RcloneView."
keywords:
  - duplicate file finder
  - cloud deduplication
  - remove duplicate files
  - cloud storage cleanup
  - RcloneView
  - multi-cloud management
  - file deduplication
  - storage optimization
  - cloud file management
  - disk space recovery
tags:
  - RcloneView
  - cloud-storage
  - cleanup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Trouver et supprimer les fichiers en double sur vos comptes cloud avec RcloneView

> Utiliser plusieurs comptes cloud signifie souvent des fichiers dupliqués, qui consomment de l'espace de stockage et compliquent les sauvegardes. RcloneView identifie les doublons exacts et similaires entre les différents fournisseurs, puis vous aide à les supprimer en toute sécurité.

Les fichiers en double sont un fléau silencieux pour le stockage. Qu'il s'agisse d'envois accidentels, de redondances de sauvegarde ou de copies oubliées dispersées entre plusieurs clouds, ils gaspillent de l'espace et alourdissent vos factures cloud. Le moteur de comparaison de RcloneView trouve rapidement les doublons et vous donne le contrôle nécessaire pour les nettoyer.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Identifier les doublons grâce à la comparaison de fichiers

La fonction de comparaison de RcloneView vous montre quels fichiers existent à plusieurs endroits.

1. Ajoutez vos comptes cloud comme remotes dans RcloneView
2. Ouvrez la fonction **Compare**
3. Sélectionnez les dossiers source et destination
4. Choisissez la méthode de comparaison :
   - **Par nom** : trouve les fichiers portant des noms identiques
   - **Par taille** : trouve les fichiers de même taille
   - **Par hash** : trouve les fichiers strictement identiques octet par octet
5. RcloneView affiche les correspondances exactes et les doublons potentiels

![Comparison Display](/images/en/howto/rcloneview-basic/compare-display-select.png)

## Examiner et nettoyer en toute sécurité

Avant de supprimer quoi que ce soit, examinez le rapport de doublons de RcloneView. Vous pouvez prévisualiser les fichiers, vérifier les horodatages et contrôler les tailles.

**Flux de suppression sécurisé :**
- Lancez d'abord la comparaison en **mode aperçu**
- Exportez la liste des doublons pour vos archives
- Supprimez sélectivement uniquement les doublons confirmés
- Vérifiez que la suppression s'est bien déroulée

![Job Execution](/images/en/howto/rcloneview-basic/job-run-click.png)

## Planifier des tâches de déduplication régulières

Configurez des tâches récurrentes pour détecter les doublons au fur et à mesure qu'ils s'accumulent. RcloneView peut exécuter automatiquement des analyses hebdomadaires ou mensuelles.

![Job Scheduling](/images/en/howto/rcloneview-advanced/create-job-schedule.png)

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez tous vos comptes cloud comme remotes (Google Drive, OneDrive, Dropbox, etc.).
3. Utilisez l'outil **Compare** pour rechercher les doublons entre vos comptes.
4. Examinez les résultats et sélectionnez les doublons à supprimer.
5. Créez une tâche de suppression et exécutez-la d'abord en mode aperçu.
6. Confirmez les résultats et planifiez des analyses de nettoyage régulières.

Récupérez des gigaoctets d'espace gaspillé : laissez RcloneView trouver et supprimer les doublons.

---

**Guides associés :**

- [Trouver les fichiers inutilisés — Réduire les coûts cloud avec RcloneView](https://rcloneview.com/support/blog/find-unused-files-reduce-cloud-costs-rcloneview)
- [Gérer le stockage cloud — Nettoyage complet avec RcloneView](https://rcloneview.com/support/blog/manage-cloud-storage-full-cleanup-rcloneview)
- [Comparaison de dossiers — Vérifier l'intégrité de la synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/folder-comparison-check-cloud-sync-integrity-rcloneview)

<CloudSupportGrid />
