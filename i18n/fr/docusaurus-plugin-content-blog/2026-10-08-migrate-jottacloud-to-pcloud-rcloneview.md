---
slug: migrate-jottacloud-to-pcloud-rcloneview
title: "Migrer Jottacloud vers pCloud — transférer des fichiers avec RcloneView"
authors:
  - casey
description: "Déplacez des fichiers de Jottacloud vers pCloud avec RcloneView : connectez les deux remotes, prévisualisez avec Dry Run, lancez un transfert de cloud à cloud et vérifiez avec Folder Compare."
keywords:
  - migrer Jottacloud vers pCloud
  - transfert Jottacloud vers pCloud
  - migration Jottacloud pCloud
  - transfert de cloud à cloud
  - RcloneView Jottacloud
  - RcloneView pCloud
  - déplacer des fichiers Jottacloud
  - alternative à Jottacloud
  - migration rclone GUI
tags:
  - RcloneView
  - jottacloud
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer Jottacloud vers pCloud — transférer des fichiers avec RcloneView

> RcloneView déplace une bibliothèque Jottacloud vers pCloud grâce à un transfert de cloud à cloud prévisualisé et vérifiable, au lieu d'un téléchargement puis d'un nouvel envoi manuels.

Passer de Jottacloud à pCloud signifie généralement des années de photos, de documents et d'archives que personne ne veut télécharger puis renvoyer à la main. RcloneView connecte les deux services comme remotes et transfère les données de l'un à l'autre, ce qui vous permet de prévisualiser, d'exécuter et de vérifier la migration depuis une seule fenêtre.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter les deux remotes

Ouvrez Remote > New Remote et ajoutez Jottacloud, puis pCloud. pCloud utilise OAuth : une fenêtre de navigateur s'ouvre pour vous connecter et le remote se connecte automatiquement. Jottacloud se configure avec le même assistant New Remote, en suivant ses instructions.

Ouvrez chaque remote dans son propre panneau Explorer et parcourez les dossiers racine. Voir les deux côtés listés confirme que les connexions fonctionnent avant de déplacer la moindre donnée.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des remotes Jottacloud et pCloud dans RcloneView" class="img-large img-center" />

## Prévisualiser le transfert avec Dry Run

Avec Jottacloud à gauche et pCloud à droite, faites glisser des dossiers pour une copie rapide, ou créez une tâche de synchronisation pour toute la bibliothèque. Entre des remotes différents, le glisser-déposer copie au lieu de déplacer : la source reste donc intacte tant que vous n'en décidez pas autrement.

Pour une migration complète, créez la tâche avec l'assistant en quatre étapes, choisissez les dossiers source et destination, puis lancez d'abord un Dry Run. Il liste les fichiers qui seraient copiés ou supprimés sans rien modifier.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de cloud à cloud de Jottacloud vers pCloud dans RcloneView" class="img-large img-center" />

## Lancer la tâche et suivre la progression

Démarrez la tâche et suivez-la dans l'onglet Transferring, qui affiche la progression, la vitesse et le nombre de fichiers. Pour une grande bibliothèque, gardez des transferts modérés à l'étape 2 et laissez « Retry entire sync if fails » à 3 afin que de brèves interruptions réseau ne mettent pas fin à l'exécution.

Si vous prévoyez de migrer par étapes, utilisez l'étape de filtrage pour limiter par dossier, ancienneté des fichiers ou types prédéfinis comme Image ou Document.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Suivi du transfert de Jottacloud vers pCloud dans RcloneView" class="img-large img-center" />

## Vérifier avant de résilier quoi que ce soit

Ouvrez Compare avec Jottacloud et pCloud côte à côte. Affichez les fichiers présents uniquement à gauche et les fichiers différents pour repérer ce qui n'est pas arrivé, puis copiez seulement ces éléments. Consultez Job History pour connaître l'état final avant de décider de clôturer l'ancien compte.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Vérification de la migration avec Folder Compare dans RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Jottacloud et pCloud comme remotes et parcourez les deux.
3. Créez une tâche de synchronisation ou de copie de Jottacloud vers pCloud et lancez un Dry Run.
4. Exécutez la tâche, puis confirmez avec Folder Compare et Job History.

Un transfert prévisualisé et vérifié vous permet de changer de fournisseur de stockage sans mettre en danger les fichiers que vous possédez déjà.

---

**Guides associés:**

- [Migrer Jottacloud vers Google Drive avec RcloneView](https://rcloneview.com/support/blog/migrate-jottacloud-to-google-drive-rcloneview)
- [Migrer pCloud vers Dropbox avec RcloneView](https://rcloneview.com/support/blog/migrate-pcloud-to-dropbox-rcloneview)
- [Gérer le stockage Jottacloud — synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
