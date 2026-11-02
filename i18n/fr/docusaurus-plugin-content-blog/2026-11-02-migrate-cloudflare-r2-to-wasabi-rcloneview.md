---
slug: migrate-cloudflare-r2-to-wasabi-rcloneview
title: "Migrer Cloudflare R2 vers Wasabi — transférer des fichiers avec RcloneView"
authors:
  - robin
description: "Déplacez des buckets de Cloudflare R2 vers Wasabi avec RcloneView : connectez les deux remotes compatibles S3, lancez un Dry Run, copiez de bucket à bucket et vérifiez avec Folder Compare."
keywords:
  - migrer Cloudflare R2 vers Wasabi
  - transfert de R2 vers Wasabi
  - déplacer un bucket R2 vers Wasabi
  - migration de buckets compatibles S3
  - transfert de cloud à cloud
  - RcloneView Cloudflare R2
  - RcloneView Wasabi
  - migration de stockage objet avec GUI
tags:
  - RcloneView
  - cloudflare-r2
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer Cloudflare R2 vers Wasabi — transférer des fichiers avec RcloneView

> Copiez un bucket Cloudflare R2 vers Wasabi depuis une seule fenêtre, avec un Dry Run d'abord et une vérification visuelle ensuite.

Cloudflare R2 et Wasabi utilisent tous deux le protocole S3, si bien que déplacer des données de l'un à l'autre est conceptuellement simple — mais avec des options CLI brutes, il faut jongler avec deux endpoints, deux jeux d'identifiants et aucun moyen simple de confirmer ce qui est arrivé. RcloneView connecte les deux comme remotes et vous permet de copier, de suivre et de vérifier dans une GUI. Connectez des services compatibles S3 avec un accès complet en lecture/écriture avec la licence FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter les deux remotes compatibles S3

Ouvrez la boîte de dialogue New Remote et ajoutez d'abord Cloudflare R2. R2 nécessite un jeton d'API, votre Account ID et l'endpoint au format `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`. Générez le jeton dans le tableau de bord Cloudflare après avoir créé le bucket ; la configuration R2 de RcloneView exige que le jeton dispose des droits Admin Read & Write.

Ajoutez ensuite Wasabi. Saisissez l'Access Key et la Secret Key de votre console Wasabi et choisissez l'endpoint correspondant à la région de votre bucket de destination. Créez le bucket de destination dans Wasabi au préalable, ou créez un dossier depuis le panneau Explorer.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des remotes Cloudflare R2 et Wasabi dans RcloneView" class="img-large img-center" />

## Planifier la copie dans deux panneaux

Ouvrez le remote R2 dans le panneau Explorer de gauche et le remote Wasabi dans celui de droite. Naviguez jusqu'au bucket ou au préfixe à déplacer. Pour un studio disposant d'archives média de plusieurs téraoctets, vous pouvez migrer d'abord un préfixe de projet afin de confirmer les autorisations et le nommage avant de vous engager sur le bucket entier.

Les deux extrémités étant des remotes, RcloneView exécute l'opération comme un transfert de cloud à cloud entre les deux remotes, ce qui vous évite de gérer vous-même une étape manuelle de téléchargement puis d'envoi. Le glisser-déposer entre panneaux copie par défaut lorsque les remotes diffèrent ; vous pouvez aussi créer un job Copy dans l'assistant Sync pour des exécutions répétables.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de cloud à cloud entre deux panneaux dans RcloneView" class="img-large img-center" />

## Dry Run, réglages et exécution

Avant le transfert réel, activez Dry Run dans l'assistant de job. Il liste précisément les fichiers qui seraient copiés, ce qui vous permet de repérer un mauvais préfixe avant tout déplacement de données. Dans Advanced Settings, augmentez le nombre de transferts de fichiers pour les buckets contenant beaucoup de petits objets, et activez la comparaison par checksum si vous souhaitez une correspondance par hash et taille plutôt que par taille seule. Utilisez l'étape de filtrage pour ignorer les dossiers temporaires ou limiter par ancienneté des fichiers.

Lancez le job depuis Job Manager et suivez la progression dans l'onglet Transferring : la vitesse, le nombre de fichiers et les octets transférés se mettent à jour en direct.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Exécution du job de migration depuis Job Manager dans RcloneView" class="img-large img-center" />

## Vérifier avec Folder Compare

Une fois le job terminé, ouvrez Compare avec R2 à gauche et Wasabi à droite. Filtrez sur les fichiers left-only pour voir ce qui manque, ou sur les fichiers different pour repérer les écarts de taille. S'il reste des éléments, utilisez Copy right pour combler les manques, puis comparez à nouveau jusqu'à obtenir un résultat propre. Consultez Job History pour l'état, la durée et les totaux de fichiers de l'exécution.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare vérifiant une migration de bucket dans RcloneView" class="img-large img-center" />

## Premiers pas

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez vos remotes Cloudflare R2 et Wasabi depuis New Remote.
3. Ouvrez-les côte à côte dans deux panneaux et lancez un job Copy avec Dry Run.
4. Exécutez le job, puis confirmez le résultat avec Folder Compare.

Laissez R2 intact jusqu'à ce que Compare affiche une correspondance parfaite, et vous pourrez changer de stockage en toute confiance.

---

**Guides associés :**

- [Migrer Wasabi vers Cloudflare R2](https://rcloneview.com/support/blog/migrate-wasabi-to-cloudflare-r2-rcloneview)
- [Gérer le stockage Wasabi avec RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Gérer Cloudflare R2 avec RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)

<CloudSupportGrid />
