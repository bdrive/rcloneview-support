---
slug: migrate-google-drive-to-wasabi-rcloneview
title: "Migrer Google Drive vers Wasabi — Transférer des fichiers avec RcloneView"
authors:
  - alex
description: "Migrez Google Drive vers Wasabi avec RcloneView. Copiez les fichiers de cloud à cloud, vérifiez avec Dry Run et Folder Compare, et conservez une archive compatible S3."
keywords:
  - migrer google drive vers wasabi
  - google drive to wasabi
  - transfert google drive wasabi
  - archive google drive s3
  - migration wasabi interface graphique
  - transfert de cloud à cloud
  - rcloneview google drive wasabi
  - déplacer google drive vers un stockage objet
  - sauvegarde google drive wasabi
  - synchronisation de bucket wasabi
tags:
  - RcloneView
  - google-drive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer Google Drive vers Wasabi — Transférer des fichiers avec RcloneView

> Déplacez ou archivez un Google Drive dans un bucket Wasabi sans rien télécharger au préalable sur votre propre disque.

Un studio de design disposant de 2 To de projets terminés peut souhaiter les sortir de Google Drive pour les placer dans un stockage objet compatible S3. RcloneView transfère directement de Drive vers Wasabi, avec un Dry Run en amont et un Folder Compare en aval pour confirmer que rien n'a été oublié.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter les deux remotes

Google Drive utilise OAuth : choisissez-le dans **New Remote** et connectez-vous via votre navigateur. Wasabi est un fournisseur compatible S3 ; vous saisissez donc une Access Key, une Secret Key et l'endpoint de votre région Wasabi. Créez d'abord le bucket dans la console Wasabi pour disposer d'une destination.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des remotes Google Drive et Wasabi dans RcloneView" class="img-large img-center" />

Connectez S3, Azure ou Backblaze B2 avec un accès complet en lecture/écriture sur la licence FREE — Wasabi et les autres services compatibles S3 fonctionnent de la même manière.

## Planifier le transfert avec un Dry Run

Ouvrez Google Drive dans un panneau Explorer et votre bucket Wasabi dans l'autre. Pour un déplacement ponctuel, faites glisser les dossiers d'un panneau à l'autre ; entre des remotes différents, l'opération est une copie. Pour une grande bibliothèque, créez plutôt un job. Le Step 1 définit la source et la destination, le Step 2 permet d'ajuster les transferts simultanés et le Step 3 peut filtrer par taille, ancienneté ou type de fichier. Lancez **Dry Run** pour prévisualiser chaque fichier qui sera copié.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de cloud à cloud de Google Drive vers Wasabi" class="img-large img-center" />

Pendant la migration, choisissez le type de job **Copy** plutôt que Sync. Copy ne supprime jamais rien à destination, ce qui est plus sûr tant que vous n'avez pas vérifié le résultat.

## Suivre le transfert

Démarrez le job et suivez la progression dans l'onglet Transferring, en bas de la fenêtre : pourcentage, vitesse et nombre de fichiers. Si les limites de débit de Google Drive ralentissent l'opération, réduisez le nombre de transferts de fichiers simultanés dans les paramètres avancés du job et relancez ; les fichiers déjà copiés sont ignorés.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Suivi d'un transfert vers Wasabi dans RcloneView" class="img-large img-center" />

## Vérifier avant de nettoyer

Utilisez **Compare** pour afficher les deux emplacements côte à côte. Les filtres montrent les fichiers présents uniquement à gauche, uniquement à droite, identiques et différents, si bien que tout écart saute aux yeux. Ce n'est qu'une fois la comparaison propre que vous devriez envisager de supprimer des données de Google Drive. Job History conserve une trace de chaque exécution.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Vérification de la migration de Google Drive vers Wasabi avec Folder Compare" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Google Drive (OAuth) et Wasabi (Access Key, Secret Key, endpoint) comme remotes.
3. Créez un job Copy de Drive vers votre bucket et lancez un Dry Run.
4. Démarrez le job, puis confirmez le résultat avec Compare.

Une copie vérifiée dans un bucket que vous maîtrisez rend le reste du nettoyage peu risqué.

---

**Guides associés :**

- [Gérer le stockage Wasabi avec RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Migrer OneDrive vers Wasabi](https://rcloneview.com/support/blog/migrate-onedrive-to-wasabi-rcloneview)
- [Migrer Dropbox vers Wasabi](https://rcloneview.com/support/blog/migrate-dropbox-to-wasabi-rcloneview)

<CloudSupportGrid />
