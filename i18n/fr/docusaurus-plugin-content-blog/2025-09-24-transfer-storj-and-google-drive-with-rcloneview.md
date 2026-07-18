---
slug: transfer-storj-and-google-drive-with-rcloneview
title: "Transférer des fichiers entre Storj et Google Drive avec RcloneView"
authors:
  - tayson
description: "Déplacez des données entre Storj et Google Drive sans les retélécharger — utilisez le glisser-déposer de RcloneView, Compare, Sync, et les Jobs planifiés avec OAuth et les access grants Storj."
keywords:
  - storj to google drive
  - google drive to storj
  - rcloneview
  - cloud to cloud transfer
  - access grant
  - drag and drop sync
  - scheduled jobs
  - compare folders
  - resumable uploads
  - s3 compatible storage
tags:
  - RcloneView
  - cloud-migration
  - storj
  - google-drive
  - sync
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Transférer des fichiers entre Storj et Google Drive avec RcloneView

> Déplacez des dossiers entre **Storj** et **Google Drive** sans toucher à la ligne de commande. RcloneView vous offre des volets Explorer côte à côte, Compare, Sync, et des Jobs planifiés pour que les transferts cloud à cloud restent rapides et prévisibles.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi utiliser RcloneView pour Storj ↔ Google Drive ?

- Connexion OAuth pour Google Drive ; prise en charge des access grants pour Storj (aucune CLI manuelle nécessaire).
- Transferts multithread et reprenables avec journaux de progression et nouvelles tentatives.
- Explorer à deux volets pour les déplacements par glisser-déposer.
- Compare pour prévisualiser les différences avant de copier ou de supprimer.
- Sync avec filtres et essai à blanc (dry-run), plus des Jobs réutilisables et une planification.
- Limites de bande passante et contrôles de limitation pour préserver la fluidité pendant les heures de travail.

RcloneView s'appuie sur rclone, ce qui vous apporte fiabilité et options avancées — sans écrire de scripts.

## Avant de commencer

- Ayez votre **access grant Storj** prêt (il inclut la portée de chiffrement). Conservez-le en sécurité.
- Connectez-vous à Google Drive et notez son plafond de téléversement de 750 Go/jour par utilisateur.
- Installez la dernière version de RcloneView : [Télécharger](https://rcloneview.com/src/download.html).
- Pour les transferts volumineux, privilégiez les connexions filaires et laissez RcloneView en cours d'exécution.

## Étape 1 : Connecter vos remotes cloud

1. Ouvrez **Remote → + New Remote**.
2. Choisissez **Storj** et collez votre **access grant**. (Si vous utilisez une phrase secrète de chiffrement distincte, ajoutez-la dans les options.) Enregistrez le remote.
3. Répétez l'opération pour **Google Drive**, cliquez sur **Connect**, et terminez la connexion OAuth dans le navigateur.
4. Vérifiez que les deux remotes apparaissent dans le Remote Manager.

👉 En savoir plus : [Add Google Drive Remote](/howto/#step-2-adding-remote-storage-google-drive-example)  
👉 Gérer les remotes : [Remote Manager](/howto/rcloneview-basic/remote-manager/)

## Étape 2 : Ouvrir les deux remotes dans le volet Explorer

1. Allez dans **Browse**.
2. Dans le volet de gauche, cliquez sur **+** et ouvrez votre remote **Storj**.
3. Dans le volet de droite, cliquez sur **+** et ouvrez votre remote **Google Drive**.
4. Naviguez jusqu'aux buckets/dossiers source et destination que vous souhaitez déplacer.


## Quatre méthodes pour les transferts Storj ↔ Google Drive

### Méthode 1 : Glisser-déposer entre les volets

1. Sélectionnez des fichiers ou dossiers dans le volet Storj.
2. Faites-les glisser dans le volet Google Drive (ou l'inverse).
3. Suivez la progression dans l'onglet **Transfer** ; mettez en pause/reprenez selon les besoins.

👉 Plus de détails : [Browse & Manage Remote Storage](/howto/rcloneview-basic/browse-and-manage-remote-storage)

### Méthode 2 : Comparer, puis copier ou supprimer

1. Ouvrez la source à gauche et la destination à droite.
2. Cliquez sur **Compare**.
3. RcloneView met en évidence les éléments uniques, les différences de taille et les correspondances.
4. Sélectionnez les éléments à déplacer, puis choisissez **Copy →** ou **← Copy**.
5. Utilisez **Delete** avec précaution pour nettoyer les doublons ou les anciennes données.

👉 En savoir plus : [Compare Folder Contents](/howto/rcloneview-basic/compare-folder-contents)

### Méthode 3 : Synchroniser ou enregistrer en tant que Job

1. Sélectionnez votre source Storj et votre destination Google Drive.
2. Cliquez sur **Sync** et choisissez une synchronisation unidirectionnelle ou bidirectionnelle.
3. Prévisualisez les changements, ajustez les filtres (inclure/exclure), puis démarrez.
4. Cliquez sur **Save to Jobs** pour réutiliser la configuration ultérieurement.

👉 En savoir plus :

- [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages)
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)
- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)

### Méthode 4 : Planifier des jobs de synchronisation récurrents

1. Ouvrez **Job Manager → Add Job**.
2. Définissez **Storj** comme source et **Google Drive** comme destination (ou l'inverse).
3. Choisissez une planification (horaire, quotidienne, hebdomadaire, ou de type cron).
4. Activez le job et laissez RcloneView l'exécuter automatiquement.
5. Vérifiez les journaux et l'historique pour confirmer le succès.

👉 En savoir plus : [Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

## Conseils pour des transferts fluides

- Utilisez l'**essai à blanc (dry-run)** avant les synchronisations volumineuses pour confirmer ce qui va changer.
- Pour Storj, limitez la portée de votre access grant (spécifique à un bucket) pour une meilleure sécurité.
- Si les téléversements stagnent, réduisez la concurrence ou définissez des limites de bande passante pour réduire la limitation.
- Lorsque Google Drive approche du plafond quotidien, répartissez les jobs sur plusieurs jours ou comptes.
- Surveillez l'onglet **Transfer** pour les nouvelles tentatives, les vitesses et les éventuels messages d'API.

## Résumé

RcloneView simplifie les migrations Storj ↔ Google Drive : connectez les remotes, parcourez côte à côte, comparez, synchronisez, ou planifiez des jobs récurrents — le tout sans ligne de commande.

<CloudSupportGrid />
