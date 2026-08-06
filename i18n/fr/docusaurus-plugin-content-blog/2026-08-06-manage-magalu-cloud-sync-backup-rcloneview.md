---
slug: manage-magalu-cloud-sync-backup-rcloneview
title: "Gérer le stockage cloud Magalu — Synchroniser et sauvegarder des fichiers avec RcloneView"
authors:
  - robin
description: "Connectez le stockage objet compatible S3 de Magalu Cloud à RcloneView pour la navigation par glisser-déposer, les sauvegardes planifiées et la synchronisation entre clouds."
keywords:
  - stockage cloud Magalu
  - Magalu S3
  - RcloneView Magalu
  - gérer les fichiers Magalu
  - sauvegarde cloud Magalu
  - synchronisation Magalu
  - GUI de stockage compatible S3
  - stockage cloud brésilien
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

# Gérer le stockage cloud Magalu — Synchroniser et sauvegarder des fichiers avec RcloneView

> Naviguez, synchronisez et sauvegardez le stockage objet compatible S3 de Magalu Cloud depuis la même fenêtre que celle utilisée pour tous vos autres clouds.

Magalu Cloud est un service de stockage objet compatible S3 et, comme la plupart des fournisseurs compatibles S3, il n'est livré avec aucun gestionnaire de fichiers de bureau dédié — on se retrouve à scripter des appels `curl` ou à mettre en place une CLI juste pour déplacer des fichiers. RcloneView comble cette lacune en traitant un bucket Magalu exactement comme n'importe quel autre remote : navigation complète des fichiers, transferts par glisser-déposer et tâches de synchronisation planifiées, sans terminal requis.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter un bucket Magalu

Magalu Cloud utilisant le protocole S3, vous l'ajoutez dans RcloneView de la même manière que vous ajouteriez Amazon S3 ou Backblaze B2 : créez un nouveau remote, choisissez l'option de fournisseur compatible S3, puis saisissez votre Access Key, votre Secret Key et l'URL de point de terminaison Magalu correspondant à la région de votre compte. Une fois enregistré, le bucket apparaît comme un onglet normal dans le panneau Explorateur, prêt à être parcouru et utilisé pour des transferts immédiatement.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout d'un remote Magalu Cloud compatible S3 dans RcloneView" class="img-large img-center" />

S3, Azure et Backblaze B2 peuvent être connectés en lecture/écriture complète avec la licence FREE, de sorte que Magalu rejoint votre panel de clouds existant sans barrière payante.

## Parcourir et organiser le stockage Magalu

Une fois connecté, un bucket Magalu se comporte comme n'importe quel dossier local dans l'Explorateur. Triez par nom, type, date de modification ou taille, passez à l'affichage en vignettes lorsqu'un bucket est rempli d'images, et utilisez Obtenir la taille pour vérifier l'espace occupé par un dossier avant de décider de l'archiver ailleurs. La sélection multiple avec Ctrl+clic ou Maj+clic permet de gérer téléchargements et suppressions en masse sans boucle scriptée.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Parcourir le contenu d'un bucket Magalu Cloud dans RcloneView" class="img-large img-center" />

## Sauvegarder vers et depuis Magalu

Pour des sauvegardes récurrentes, configurez une tâche de synchronisation avec Magalu comme source ou destination. L'assistant en 4 étapes couvre le nombre de transferts simultanés, la vérification par somme de contrôle afin que les fichiers soient comparés par hash et taille plutôt que par simple horodatage, et des règles de filtrage pour exclure les types de fichiers que vous ne souhaitez pas archiver. Exécutez d'abord une simulation (Dry Run) pour prévisualiser exactement ce qui sera copié ou supprimé — cela vaut la peine avant de lancer une tâche de synchronisation sur un bucket contenant des données de production.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planification d'une tâche de sauvegarde Magalu Cloud dans RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Créez un nouveau remote et choisissez le type de fournisseur compatible S3.
3. Saisissez votre Access Key, Secret Key et l'URL de point de terminaison Magalu.
4. Configurez une tâche de synchronisation ou de copie pour déplacer des fichiers entre Magalu et vos autres remotes cloud.

Une fois Magalu intégré à RcloneView, la gestion de votre stockage objet cesse d'être une corvée de scripting pour devenir une simple partie de votre flux de travail habituel sur les fichiers.

---

**Guides associés :**

- [Gérer le stockage objet Scaleway — Synchronisation et sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Gérer le stockage objet IONOS — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-ionos-object-storage-cloud-sync-rcloneview)
- [Gérer le stockage objet Leviia — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-leviia-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
