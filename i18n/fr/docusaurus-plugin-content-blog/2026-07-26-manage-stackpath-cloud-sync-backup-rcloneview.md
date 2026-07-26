---
slug: manage-stackpath-cloud-sync-backup-rcloneview
title: "Gérer le stockage d'objets StackPath — Synchroniser et sauvegarder des fichiers avec RcloneView"
authors:
  - jay
description: "Connectez le stockage d'objets StackPath à RcloneView pour la gestion de fichiers par glisser-déposer, les sauvegardes planifiées et la synchronisation entre clouds."
keywords:
  - stockage d'objets StackPath
  - StackPath S3
  - RcloneView StackPath
  - gérer les fichiers StackPath
  - sauvegarde StackPath
  - synchronisation cloud StackPath
  - GUI de stockage compatible S3
  - stockage d'objets en périphérie
tags:
  - RcloneView
  - object-storage
  - s3-compatible
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage d'objets StackPath — Synchroniser et sauvegarder des fichiers avec RcloneView

> Parcourez, synchronisez et sauvegardez le stockage d'objets StackPath compatible S3 depuis la même fenêtre que vous utilisez pour tous vos autres clouds.

Le stockage d'objets StackPath expose une API compatible S3, ce qui le rend compatible avec les outils basés sur rclone, mais il est rarement accompagné d'une interface graphique de bureau dédiée. Les équipes finissent par scripter les téléversements ou jongler entre des sessions CLI séparées juste pour vérifier le contenu d'un bucket. RcloneView comble cet écart en traitant StackPath comme n'importe quel autre distant — navigation complète des fichiers, transferts par glisser-déposer et tâches planifiées, sans écrire la moindre commande.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter un bucket StackPath

Comme StackPath utilise le protocole S3, vous l'ajoutez dans RcloneView de la même manière que vous ajouteriez Amazon S3 ou Wasabi : créez un nouveau distant, sélectionnez l'option de fournisseur compatible S3, puis renseignez votre clé d'accès, votre clé secrète et l'URL de point de terminaison StackPath correspondant à votre région. Une fois connecté, le bucket apparaît comme un onglet normal dans le panneau Explorer — aucun fichier d'identifiants séparé, aucun terminal requis pour vérifier que la connexion fonctionne.

Connectez S3, Azure ou Backblaze B2 avec un accès complet en lecture/écriture dès la licence FREE, de sorte qu'associer StackPath à un autre compte compatible S3 ne nécessite pas de mise à niveau pour commencer à déplacer des fichiers.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a StackPath object storage remote in RcloneView" class="img-large img-center" />

## Parcourir et gérer les fichiers au quotidien

Une fois le distant configuré, les buckets StackPath se comportent exactement comme un dossier local dans l'Explorer de RcloneView. Vous pouvez trier par nom, type, date de modification ou taille, passer en vue miniatures pour les buckets riches en images, et utiliser Get Size pour vérifier l'espace occupé par un dossier de ressources avant de décider de l'archiver ailleurs. La sélection multiple avec Ctrl+clic ou Maj+clic fonctionne comme sur les lecteurs locaux, si bien que les suppressions ou téléchargements en masse prennent quelques secondes au lieu de nécessiter un script.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing StackPath bucket contents in RcloneView" class="img-large img-center" />

## Sauvegarder vers et depuis StackPath

Pour des sauvegardes récurrentes, configurez une tâche Sync avec StackPath comme source ou destination. L'assistant en 4 étapes vous permet de configurer les transferts simultanés, d'activer la vérification par somme de contrôle afin que les fichiers soient comparés par hash plutôt que par simple horodatage, et d'appliquer des filtres pour exclure les types de fichiers que vous n'avez pas besoin d'archiver. Exécutez d'abord un Dry Run pour prévisualiser précisément ce qui sera copié ou supprimé avant de valider le transfert — une protection utile lorsqu'un bucket contient des ressources de production.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a StackPath backup job in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Créez un nouveau distant et choisissez le type de fournisseur compatible S3.
3. Saisissez votre clé d'accès, clé secrète et point de terminaison StackPath.
4. Configurez une tâche Sync ou Copy pour déplacer des fichiers entre StackPath et vos autres distants.

Une fois StackPath intégré à RcloneView, la gestion du stockage d'objets cesse d'être une corvée de script pour devenir une partie normale de votre flux de travail sur les fichiers.

---

**Guides associés :**

- [Gérer le stockage d'objets Ceph — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-ceph-object-storage-s3-rcloneview)
- [Gérer le stockage d'objets Scaleway — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Corriger l'accès refusé S3 — Erreurs de permissions avec RcloneView](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)

<CloudSupportGrid />
