---
slug: transfer-onedrive-and-google-drive-with-rcloneview
title: "Transférer des fichiers entre OneDrive et Google Drive avec RcloneView"
authors:
  - tayson
description: "Déplacez des fichiers entre Microsoft OneDrive et Google Drive sans téléchargement local—utilisez le glisser-déposer de RcloneView, Compare, Sync et les Jobs planifiés pour des transferts cloud-to-cloud fiables."
keywords:
  - onedrive to google drive transfer
  - google drive to onedrive migration
  - rcloneview
  - cloud to cloud sync
  - drag and drop transfer
  - scheduled sync jobs
  - compare folders
  - resumable uploads
  - oauth login
tags:
  - RcloneView
  - cloud-migration
  - onedrive
  - google-drive
  - sync
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Transférer des fichiers entre OneDrive et Google Drive avec RcloneView

> Changez de cloud sans retélécharger des gigaoctets. RcloneView vous offre un Explorer à deux volets, Compare, Sync et des Jobs planifiés pour que vos transferts OneDrive ↔ Google Drive restent rapides et prévisibles—sans ligne de commande.


<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />



## Pourquoi utiliser RcloneView pour OneDrive ↔ Google Drive ?

- Connexions OAuth sécurisées pour les deux clouds ; aucun jeton à coller.
- Transferts reprenables avec journalisation de la progression, nouvelles tentatives et limites de bande passante.
- Explorer à deux volets pour des déplacements par glisser-déposer sans scripts.
- Compare pour mettre en évidence les fichiers nouveaux/modifiés avant la copie.
- Synchronisation à sens unique ou bidirectionnelle, plus des Jobs réutilisables et planifiables.
- Simulation (dry-run) optionnelle et filtres pour contrôler précisément ce qui est déplacé.

RcloneView superpose une interface guidée à rclone, de sorte que même les migrations volumineuses restent fiables, tout en offrant aux ingénieurs les options avancées lorsque nécessaire.

<img src="/support/images/en/tutorials/open-google-drive-and-onedrive.png" alt="transfer files between onedrive and google drive" class="img-large img-center" />


## Avant de commencer

- Connectez-vous à vos comptes OneDrive et Google Drive.
- Installez RcloneView depuis la dernière version : [Télécharger](https://rcloneview.com/src/download.html).
- Vérifiez les quotas cloud et les limites d'API quotidiennes (Google Drive applique une limite de 750 Go/jour par utilisateur pour les téléversements).
- Pour un débit optimal, laissez RcloneView actif pendant les jobs longs et privilégiez les réseaux filaires.

## Étape 1 : Connecter les deux remotes cloud

1. Ouvrez **Remote → + New Remote**.
2. Sous **Provider**, choisissez **OneDrive**, puis cliquez sur **Connect** pour finaliser la connexion OAuth Microsoft.
3. Répétez l'opération pour **Google Drive** et terminez le flux OAuth.
4. Vérifiez que les deux remotes apparaissent dans le Remote Manager.

👉 En savoir plus : [Add Google Drive Remote](/howto/#step-2-adding-remote-storage-google-drive-example)

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-mega-view.png" alt="Remote Manager showing connected cloud remotes" class="img-large img-center" />

## Étape 2 : Ouvrir les deux remotes dans le panneau Explorer

1. Allez dans l'onglet **Browse**.
2. Dans le panneau de gauche, cliquez sur **+** et ouvrez votre remote **OneDrive**.
3. Dans le panneau de droite, cliquez sur **+** et ouvrez votre remote **Google Drive**.
4. Naviguez jusqu'aux dossiers source et destination que vous prévoyez de synchroniser.


## Quatre façons de déplacer des fichiers

### Méthode 1 : Glisser-déposer entre les panneaux Explorer

1. Sélectionnez des fichiers ou dossiers dans le panneau OneDrive.
2. Faites-les glisser dans le panneau Google Drive (ou dans l'autre sens).
3. Suivez la progression dans l'onglet **Transfer** ; mettez en pause/reprenez si nécessaire.

👉 Plus de détails : [Browse & Manage Remote Storage](/howto/rcloneview-basic/browse-and-manage-remote-storage)

  <img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

### Méthode 2 : Comparer, puis copier ou supprimer

1. Ouvrez le dossier source à gauche et la destination à droite.
2. Cliquez sur **Compare** dans la barre d'outils.
3. RcloneView met en évidence les fichiers uniques, les écarts de taille et les correspondances.
4. Sélectionnez les éléments à déplacer, puis choisissez **Copy →** ou **← Copy**.
5. Utilisez **Delete** avec prudence pour nettoyer les anciennes données.

👉 En savoir plus : [Compare Folder Contents](/howto/rcloneview-basic/compare-folder-contents)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare OneDrive and Google Drive folders" class="img-large img-center" />

### Méthode 3 : Synchroniser ou enregistrer en tant que Job

1. Sélectionnez votre source OneDrive et votre destination Google Drive.
2. Cliquez sur **Sync** et choisissez un sens unique (OneDrive → Google Drive) ou bidirectionnel.
3. Passez en revue l'aperçu, ajustez les filtres (inclusion/exclusion), puis démarrez.
4. Cliquez sur **Save to Jobs** pour réutiliser la même synchronisation plus tard.

👉 En savoir plus :

- [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages)
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)
- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)

<img src="/support/images/en/howto/rcloneview-basic/add-job-configure-storage.png" alt="Configure sync job between OneDrive and Google Drive" class="img-large img-center" />

### Méthode 4 : Planifier des Jobs de synchronisation automatique

1. Ouvrez **Job Manager → Add Job**.
2. Définissez **OneDrive** comme source et **Google Drive** comme destination (ou inversement).
3. Choisissez une planification (horaire, quotidienne, hebdomadaire ou de type cron).
4. Enregistrez et activez le job ; RcloneView l'exécutera automatiquement.
5. Consultez les journaux et l'historique pour vérification.

👉 En savoir plus : [Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OneDrive to Google Drive sync job" class="img-large img-center" />

## Conseils pour des transferts multi-cloud fluides

- Utilisez la **simulation (dry-run)** avant les grandes synchronisations pour confirmer ce qui va changer.
- Pour les dossiers OneDrive/Drive partagés, assurez-vous d'avoir les droits de modification des deux côtés.
- Utilisez les **limites de bande passante** pendant les heures de travail pour éviter la limitation de débit.
- Si Google Drive atteint le plafond de 750 Go/jour, répartissez le job sur plusieurs jours ou comptes.
- Gardez l'onglet **Transfer** ouvert pour suivre les nouvelles tentatives et le débit.

## Résumé

RcloneView élimine le va-et-vient de téléchargement/retéléversement entre **OneDrive** et **Google Drive**. Avec une navigation côte à côte, Compare, Sync, des Jobs réutilisables et la planification, vous pouvez exécuter des déplacements ponctuels ou des sauvegardes récurrentes en toute confiance—sans ligne de commande.

<CloudSupportGrid />
