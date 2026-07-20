---
slug: sync-two-google-drive-accounts-rcloneview
title: "Comment synchroniser deux comptes Google Drive — synchronisation Drive personnel et professionnel avec RcloneView"
authors:
  - tayson
description: "Beaucoup de gens ont plusieurs comptes Google Drive — personnel, professionnel, scolaire. Découvrez comment synchroniser des fichiers entre eux sans rien télécharger localement grâce à RcloneView."
keywords:
  - sync two google drive accounts
  - google drive to google drive
  - transfer between google drives
  - multiple google drive sync
  - google drive personal to work
  - sync google accounts
  - google drive account transfer
  - google drive cross account
  - two google drive sync tool
  - google drive migration between accounts
tags:
  - RcloneView
  - google-drive
  - sync
  - cloud-storage
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Comment synchroniser deux comptes Google Drive — synchronisation Drive personnel et professionnel avec RcloneView

> Votre Google Drive personnel contient des photos de famille. Votre Drive professionnel contient des fichiers de projet. Votre Drive universitaire arrive à expiration. Google ne permet pas nativement de synchroniser des comptes entre eux — mais RcloneView le fait.

Presque tout le monde finit par avoir plusieurs comptes Google Drive. Un Gmail personnel, un compte Workspace professionnel, peut-être un compte scolaire qui va expirer. Google facilite l'utilisation de chaque compte individuellement, mais ne propose aucun moyen de synchroniser ou de transférer des fichiers entre eux. Vous finissez par télécharger depuis un compte et téléverser vers un autre — manuel, lent, et cela consomme votre stockage local. RcloneView connecte simultanément plusieurs comptes Google Drive et transfère directement entre eux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ajouter plusieurs comptes Google Drive

<img src="/support/images/en/blog/new-remote.png" alt="Add multiple Google Drive accounts" class="img-large img-center" />

Ajoutez chaque compte Google Drive comme un remote distinct dans RcloneView. Nommez-les clairement — « GDrive-Personnel », « GDrive-Travail », « GDrive-École » — afin de pouvoir les distinguer.

## Transférer entre les comptes

Ouvrez un compte dans le volet gauche, un autre dans le volet droit. Faites glisser des fichiers et des dossiers entre eux :

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer between Google Drive accounts" class="img-large img-center" />

Les fichiers sont transférés directement via les serveurs de Google — rien n'est téléchargé sur votre ordinateur, et le transfert est rapide.

## Cas d'usage courants

### Sauvegarder les fichiers d'un compte scolaire expirant

Les comptes Google Workspace universitaires sont souvent supprimés après l'obtention du diplôme. Transférez tout vers votre Drive personnel avant de perdre l'accès.

### Séparer les fichiers personnels et professionnels

Vous avez accidentellement stocké des fichiers personnels dans votre Drive professionnel ? Déplacez-les vers votre compte personnel sans impliquer le service informatique.

### Regrouper d'anciens comptes

Fusionnez les fichiers d'un ancien compte Gmail avec votre compte actuel. RcloneView en fait une simple opération de glisser-déposer.

### Refléter des dossiers importants

Gardez un dossier spécifique synchronisé entre les deux comptes. Créez une tâche de synchronisation qui s'exécute automatiquement :

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Sync job between accounts" class="img-large img-center" />

## Planifier une synchronisation continue

Pour les dossiers que vous souhaitez synchroniser en continu entre les comptes, planifiez une synchronisation automatique :

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule cross-account sync" class="img-large img-center" />

## Vérifier les transferts

Utilisez la comparaison de dossiers pour confirmer que les fichiers ont été correctement transférés entre les comptes :

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify cross-account transfer" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez les deux comptes Google Drive** comme remotes distincts.
3. **Ouvrez les deux comptes** dans l'explorateur à deux volets.
4. **Transférez directement** — aucun téléchargement local requis.

Vos comptes Google, enfin connectés.

---

**Guides connexes :**

- [Migrer de Google Drive vers OneDrive](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [Synchroniser Google Drive avec Dropbox](https://rcloneview.com/support/blog/sync-google-drive-to-dropbox-rcloneview)
- [Téléverser des fichiers volumineux vers Google Drive](https://rcloneview.com/support/blog/upload-large-files-google-drive-sync-rcloneview)

<CloudSupportGrid />
