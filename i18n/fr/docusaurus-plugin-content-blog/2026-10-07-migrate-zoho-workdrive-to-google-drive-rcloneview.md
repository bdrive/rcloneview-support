---
slug: migrate-zoho-workdrive-to-google-drive-rcloneview
title: "Migrer Zoho WorkDrive vers Google Drive — Transférer des fichiers avec RcloneView"
authors:
  - kai
description: "Migrez Zoho WorkDrive vers Google Drive avec RcloneView : choisissez votre région, connectez les deux distants, lancez un Dry Run, copiez de cloud à cloud et vérifiez les résultats."
keywords:
  - migrer Zoho WorkDrive vers Google Drive
  - transfert Zoho WorkDrive
  - export Zoho WorkDrive
  - déplacer des fichiers Zoho vers Google Drive
  - migration de cloud à cloud
  - RcloneView
  - rclone GUI
  - sauvegarde Zoho WorkDrive
  - synchronisation Google Drive
  - comparaison de dossiers
tags:
  - RcloneView
  - zoho
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer Zoho WorkDrive vers Google Drive — Transférer des fichiers avec RcloneView

> Copiez les dossiers d'équipe de Zoho WorkDrive vers Google Drive directement entre clouds, avec un aperçu et une passe de vérification.

Lorsqu'une entreprise passe de la suite Zoho à Google Workspace, les dossiers d'équipe de WorkDrive doivent être transférés quelque part. Tout télécharger puis tout renvoyer est lent et difficile à auditer. RcloneView connecte les deux services et transfère les fichiers de cloud à cloud, ce qui vous permet de prévisualiser, d'exécuter et de vérifier la migration depuis une seule fenêtre.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Zoho WorkDrive et Google Drive

Zoho WorkDrive nécessite un paramètre supplémentaire : vous devez sélectionner votre **Region** lors de la création du distant, et elle doit correspondre au centre de données de votre compte Zoho. Google Drive utilise la connexion OAuth par navigateur. Ouvrez l'onglet Remote, cliquez sur **New Remote** et ajoutez chaque service à tour de rôle.

La synchronisation de base et la comparaison de dossiers sont disponibles avec la licence FREE.

<img src="/support/images/en/blog/new-remote.png" alt="Création des distants Zoho WorkDrive et Google Drive" class="img-large img-center" />

## Planifier la correspondance des dossiers

Ouvrez deux panneaux Explorer, avec WorkDrive à gauche et Google Drive à droite. Parcourez les dossiers d'équipe et décidez où chacun doit atterrir. Une équipe financière avec 150 Go de rapports trimestriels pourrait être associée à un dossier de lecteur partagé dédié, tandis que les fichiers personnels vont dans Mon Drive.

Utilisez Get Size sur les gros dossiers pour estimer la durée du transfert. À l'étape de filtrage de l'assistant Sync, excluez les dossiers ou types de fichiers inutiles, comme les anciennes archives, grâce à l'ancienneté maximale des fichiers ou à des filtres personnalisés.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Zoho WorkDrive et Google Drive côte à côte" class="img-large img-center" />

## D'abord un Dry Run, puis le transfert

Créez un job Copy de WorkDrive vers Google Drive et lancez d'abord un **Dry Run**. Il liste les fichiers qui seraient copiés sans rien modifier. Quand l'aperçu vous convient, exécutez le job et suivez la progression dans l'onglet Transferring.

En cas d'erreur, le job réessaie jusqu'au nombre configuré, et Job History consigne l'état, la taille et le nombre de fichiers de chaque exécution. Une nouvelle exécution ne copie que ce qui manque.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Exécution du job de migration dans RcloneView" class="img-large img-center" />

## Vérifier et conserver une trace

Ouvrez **Compare** depuis l'onglet Home pour comparer WorkDrive et Google Drive. Filtrez les fichiers présents uniquement à gauche pour trouver ce qui n'a pas été transféré, puis copiez-les. Job History vous fournit une trace horodatée que vous pouvez conserver pour la validation de la migration.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History de la migration Zoho WorkDrive" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** sur [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez les distants Zoho WorkDrive (en choisissant la bonne Region) et Google Drive.
3. Créez un job Copy et lancez un Dry Run pour prévisualiser le transfert.
4. Exécutez le job et vérifiez avec Folder Compare avant de désactiver WorkDrive.

Laisser la source intacte jusqu'à ce que la comparaison soit propre rend la bascule peu risquée.

---

**Guides associés :**

- [Gérer la synchronisation cloud de Zoho WorkDrive](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [Synchroniser Zoho WorkDrive vers OneDrive](https://rcloneview.com/support/blog/sync-zoho-workdrive-to-onedrive-rcloneview)
- [Corriger les erreurs de synchronisation de Zoho WorkDrive](https://rcloneview.com/support/blog/fix-zoho-workdrive-sync-errors-rcloneview)

<CloudSupportGrid />
