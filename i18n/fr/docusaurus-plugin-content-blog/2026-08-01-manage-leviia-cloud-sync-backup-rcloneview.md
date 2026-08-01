---
slug: manage-leviia-cloud-sync-backup-rcloneview
title: "Gérer le stockage objet Leviia — Synchroniser et sauvegarder des fichiers avec RcloneView"
authors:
  - casey
description: "Connectez le stockage objet compatible S3 de Leviia à RcloneView pour une gestion des fichiers par glisser-déposer, des sauvegardes planifiées et une synchronisation multi-cloud."
keywords:
  - stockage objet Leviia
  - Leviia S3
  - RcloneView Leviia
  - gérer les fichiers Leviia
  - sauvegarde cloud Leviia
  - synchronisation Leviia
  - GUI de stockage compatible S3
  - stockage objet européen
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage objet Leviia — Synchroniser et sauvegarder des fichiers avec RcloneView

> Parcourez, synchronisez et sauvegardez le stockage objet compatible S3 de Leviia depuis la même fenêtre que celle utilisée pour tous vos autres clouds.

Leviia propose un stockage objet compatible S3 hébergé en Europe, ce qui en fait un choix courant pour les équipes qui souhaitent des garanties de résidence des données sans renoncer aux outils déjà compatibles avec S3. L'inconvénient est que les fournisseurs compatibles S3 proposent rarement leur propre client de bureau abouti, laissant les utilisateurs devoir scripter les téléversements ou se débrouiller avec une CLI nue. RcloneView élimine cette friction en traitant Leviia comme n'importe quel autre remote — navigation complète des fichiers, transferts par glisser-déposer et jobs de synchronisation planifiés, sans aucune commande requise.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter un bucket Leviia

Comme Leviia parle le protocole S3, vous l'ajoutez dans RcloneView de la même manière qu'Amazon S3 ou Wasabi : créez un nouveau remote, sélectionnez l'option fournisseur compatible S3, puis saisissez votre Access Key, Secret Key et l'URL de point de terminaison Leviia correspondant à la région de votre compte. Une fois enregistré, le bucket apparaît comme un onglet normal dans le panneau Explorer, prêt à être parcouru et utilisé pour des transferts immédiatement.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Leviia object storage remote in RcloneView" class="img-large img-center" />

RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux, de sorte qu'un bucket Leviia se place aux côtés de tous les autres comptes cloud que vous gérez, sans changer d'outil.

## Parcourir et organiser le stockage Leviia

Une fois connecté, un bucket Leviia se comporte exactement comme un dossier local dans l'Explorer. Triez par nom, type, date de modification ou taille, passez en vue miniatures pour un bucket rempli d'images, et utilisez Get Size pour vérifier l'espace occupé par un dossier donné avant de décider de l'archiver ailleurs. La sélection multiple avec Ctrl+clic ou Maj+clic couvre les téléchargements et suppressions en masse sans boucle scriptée.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browsing Leviia bucket contents in RcloneView" class="img-large img-center" />

## Sauvegarder vers et depuis Leviia

Pour des sauvegardes récurrentes, configurez un job Sync avec Leviia comme source ou destination. L'assistant en 4 étapes couvre le nombre de transferts simultanés, la vérification par somme de contrôle pour comparer les fichiers par hash et taille plutôt que par simple horodatage, et des règles de filtrage pour exclure les types de fichiers que vous ne souhaitez pas archiver. Il vaut la peine de lancer d'abord un Dry Run pour prévisualiser exactement ce qui sera copié ou supprimé avant de diriger un job de synchronisation vers un bucket contenant des données de production.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Leviia backup job in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Créez un nouveau remote et choisissez le type de fournisseur compatible S3.
3. Saisissez votre Access Key, Secret Key et l'URL de point de terminaison Leviia.
4. Configurez un job Sync ou Copy pour déplacer des fichiers entre Leviia et vos autres remotes cloud.

Une fois Leviia intégré à RcloneView, gérer votre stockage objet cesse d'être une corvée de scripting pour devenir une partie de votre flux de travail habituel sur les fichiers.

---

**Guides associés :**

- [Gérer le stockage objet Ceph avec RcloneView — GUI compatible S3 pour votre cluster Ceph](https://rcloneview.com/support/blog/manage-ceph-object-storage-s3-rcloneview)
- [Gérer le stockage objet Scaleway — Synchronisation cloud et sauvegarde avec RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Gérer le stockage objet IONOS — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-ionos-object-storage-cloud-sync-rcloneview)

<CloudSupportGrid />
