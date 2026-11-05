---
slug: migrate-zoho-workdrive-to-wasabi-rcloneview
title: "Migrer Zoho WorkDrive vers Wasabi — Transférez vos fichiers avec RcloneView"
authors:
  - morgan
description: "Migrez Zoho WorkDrive vers le stockage objet Wasabi avec RcloneView : connectez les deux remotes, Dry Run, copie de cloud à cloud et vérification avec Folder Compare."
keywords:
  - migrer Zoho WorkDrive vers Wasabi
  - Zoho WorkDrive vers Wasabi
  - export Zoho WorkDrive
  - migration vers le stockage objet Wasabi
  - sauvegarde Zoho WorkDrive
  - transfert de cloud à cloud
  - migration avec l'interface rclone
  - RcloneView Wasabi
tags:
  - RcloneView
  - zoho
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer Zoho WorkDrive vers Wasabi — Transférez vos fichiers avec RcloneView

> Archivez un dossier d'équipe Zoho WorkDrive dans des buckets Wasabi sans rien stocker temporairement sur votre propre disque.

Les équipes quittent Zoho WorkDrive lorsqu'un projet se termine, qu'un service change d'outil ou que la direction financière souhaite une archive à long terme moins coûteuse. Wasabi est une destination compatible S3 qui convient à ce rôle d'archivage, mais déplacer des milliers de fichiers à la main est lent. RcloneView connecte les deux services dans une seule fenêtre et copie de cloud à cloud, avec un Dry Run au préalable et une comparaison ensuite. Vous pouvez connecter un stockage compatible S3 tel que Wasabi avec un accès complet en lecture/écriture avec la licence FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connectez Zoho WorkDrive et Wasabi

Ouvrez l'onglet Remote et choisissez New Remote. Zoho WorkDrive nécessite le choix d'une région pendant la configuration ; sélectionnez le centre de données correspondant à votre compte Zoho. Wasabi s'ajoute comme remote compatible S3 : saisissez l'Access Key, la Secret Key et le point de terminaison de la région de votre bucket.

Lorsque les deux apparaissent dans Remote Manager, ouvrez-les dans deux panneaux Explorer. Parcourez les dossiers d'équipe à gauche et le bucket à droite avant de déplacer quoi que ce soit.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des remotes Zoho WorkDrive et Wasabi dans RcloneView" class="img-large img-center" />

## Planifiez la copie et lancez un Dry Run

Décidez de ce qui appartient à l'archive. À l'étape 3 de l'assistant de job, vous pouvez définir un âge maximal de fichier, une taille maximale de fichier ou une limite de profondeur de dossier, et ajouter des règles personnalisées, par exemple pour exclure les dossiers `.git/`. Choisissez un job Copy plutôt qu'une synchronisation en miroir afin que rien ne soit supprimé à la destination.

Lancez ensuite Dry Run. Il liste chaque fichier qui serait copié ou supprimé sans modifier aucun des deux côtés, ce qui est le moment le moins coûteux pour repérer un mauvais dossier ou un mauvais filtre.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de cloud à cloud de Zoho WorkDrive vers Wasabi" class="img-large img-center" />

## Lancez le transfert et surveillez-le

Démarrez le job et suivez-le dans l'onglet Transferring, qui affiche la progression, la vitesse et le nombre de fichiers. À l'étape 2, vous pouvez augmenter le nombre de transferts de fichiers pour une grande archive ; gardez un nombre modeste d'equality checkers si le côté Zoho répond lentement. « Retry entire sync if fails » vaut 3 par défaut, ce qui couvre les erreurs réseau transitoires.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Surveillance d'un transfert de Zoho WorkDrive vers Wasabi" class="img-large img-center" />

## Vérifiez avec Folder Compare et Job History

Une fois le job terminé, ouvrez Compare avec Zoho WorkDrive d'un côté et le bucket Wasabi de l'autre. Les filtres de fichiers uniquement à gauche, uniquement à droite et différents montrent ce qui manque encore, et l'action de copie transfère les restes. Job History enregistre le statut, la taille et le nombre de fichiers de chaque exécution, ce qui sert aussi de trace de migration.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparaison de Zoho WorkDrive et Wasabi après la migration" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Zoho WorkDrive (avec sa région) et Wasabi comme remotes.
3. Créez un job Copy avec des filtres et lancez un Dry Run.
4. Exécutez le job, puis confirmez avec Folder Compare avant de retirer la source.

Conservez les données Zoho en place jusqu'à ce que Compare montre que les deux côtés correspondent.

---

**Guides associés :**

- [Gérer le stockage Zoho WorkDrive avec RcloneView](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [Migrer Zoho WorkDrive vers Backblaze B2 avec RcloneView](https://rcloneview.com/support/blog/migrate-zoho-workdrive-to-backblaze-b2-rcloneview)
- [Gérer le stockage Wasabi — Synchronisez et sauvegardez vos fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
