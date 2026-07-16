---
slug: transfer-pcloud-and-google-drive-with-rcloneview
title: "Transférer des fichiers entre pCloud et Google Drive avec RcloneView"
authors:
  - tayson
description: "Déplacer des données entre pCloud et Google Drive sans les retélécharger ? Utilisez RcloneView pour le glisser-déposer, Comparer, Synchroniser et des tâches planifiées avec OAuth et des téléversements multi-thread."
keywords:
  - pcloud to google drive
  - google drive to pcloud
  - rcloneview
  - cloud to cloud transfer
  - multi thread upload
  - drag and drop sync
  - scheduled jobs
  - compare folders
  - oauth login
  - resumable transfers
tags:
  - cloud-migration
  - pcloud
  - google-drive
  - sync
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Transférer des fichiers entre pCloud et Google Drive avec RcloneView

> Évitez le calvaire du téléchargement/re-téléversement. RcloneView vous permet de glisser-déposer, comparer, synchroniser et planifier des transferts pCloud ↔ Google Drive dans une interface graphique guidée, sans ligne de commande.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi utiliser Rcloneview pour les transferts multi-cloud ?

- OAuth sécurisé pour Google Drive et simple identifiant email/mot de passe pour pCloud ; aucun jeton à coller.
- Téléversements multi-thread et reprenables avec journaux de progression et nouvelles tentatives.
- Explorateur à deux volets pour un glisser-déposer direct entre les clouds.
- Comparer pour prévisualiser les différences avant de copier ou de nettoyer.
- Synchronisation avec filtres d'inclusion/exclusion, simulation (dry-run) et décisions basées sur la taille.
- Tâches en arrière-plan et planification pour automatiser les déplacements récurrents.

RcloneView combine la fiabilité de rclone avec un flux de travail visuel afin que les équipes et administrateurs puissent déplacer de grands dossiers en toute confiance.

## Avant de commencer

- Connectez-vous aux deux comptes et vérifiez le quota et les limites d'API (Google Drive applique un plafond de téléversement de 750 Go/jour par utilisateur).
- Installez la dernière version de RcloneView : [Télécharger](https://rcloneview.com/src/download.html).
- Pour pCloud, ayez votre email/mot de passe à portée de main ; activez les mots de passe d'application si vos paramètres de sécurité l'exigent.
- Privilégiez une connexion filaire ou un Wi-Fi stable lors des transferts volumineux et laissez RcloneView ouvert pour des tâches ininterrompues.

## Étape 1 : Connecter vos distants cloud

1. Ouvrez **Remote → + New Remote**.
2. Sélectionnez **pCloud** et saisissez votre **email** et votre **mot de passe**, puis enregistrez.
3. Répétez l'opération pour **Google Drive**, en cliquant sur **Connect** pour terminer la connexion OAuth dans le navigateur.
4. Vérifiez que les deux distants apparaissent dans le gestionnaire de distants.  

  <img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />
  
  👉 En savoir plus :
  - [Ajouter un distant Google Drive](/howto/#step-2-adding-remote-storage-google-drive-example)
  - [Ajouter un nouveau distant (OAuth)](/howto/remote-storage-connection-settings/add-oath-online-login)

## Étape 2 : Ouvrir les deux distants dans le volet Explorateur

1. Allez dans **Browse**.
2. Dans le volet gauche, cliquez sur **+** et ouvrez votre distant **pCloud**.
3. Dans le volet droit, cliquez sur **+** et ouvrez votre distant **Google Drive**.
4. Naviguez vers les dossiers source et destination que vous prévoyez de déplacer.

<!-- Image placeholder: add `/support/images/en/tutorials/open-pcloud-and-google-drive-remotes.png` if available -->
<img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-first-in-explorer.png" alt="open pcloud and google drive remotes" class="img-medium img-center" />

## Quatre méthodes pour les transferts pCloud ↔ Google Drive

### Méthode 1 : Glisser-déposer entre les volets

1. Sélectionnez des fichiers ou dossiers dans le volet pCloud.
2. Faites-les glisser dans le volet Google Drive (ou inversement).
3. Suivez la progression dans l'onglet **Transfer** ; mettez en pause ou reprenez si nécessaire.  

  <img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />
    
  👉 Plus de détails : [Parcourir et gérer le stockage distant](/howto/rcloneview-basic/browse-and-manage-remote-storage)

### Méthode 2 : Comparer, puis copier ou supprimer

1. Ouvrez le dossier source à gauche et la destination à droite.
2. Cliquez sur **Compare** dans la barre d'outils.
3. RcloneView met en évidence les éléments uniques, les différences de taille et les correspondances.
4. Sélectionnez ce que vous voulez déplacer, puis choisissez **Copy →** ou **← Copy**.
5. Utilisez **Delete** avec précaution pour nettoyer les doublons ou les données obsolètes.  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
  

👉 En savoir plus : [Comparer le contenu des dossiers](/howto/rcloneview-basic/compare-folder-contents)

### Méthode 3 : Synchroniser ou enregistrer comme tâche

1. Sélectionnez votre source pCloud et votre destination Google Drive.
2. Cliquez sur **Sync** et choisissez une synchronisation à sens unique ou bidirectionnelle.
3. Prévisualisez les changements, ajustez les filtres (inclusion/exclusion), puis démarrez.
4. Cliquez sur **Save to Jobs** pour réutiliser la même configuration plus tard.  

<img src="/support/images/en/howto/rcloneview-basic/add-job-in-job-manager.png" alt="add sync job in job manager" class="img-large img-center" />   
     

👉 En savoir plus :
- [Synchroniser les stockages distants](/howto/rcloneview-basic/synchronize-remote-storages)
- [Créer des tâches de synchronisation](/howto/rcloneview-basic/create-sync-jobs)
- [Exécuter et gérer les tâches](/howto/rcloneview-basic/execute-manage-job)


### Méthode 4 : Planifier des tâches de synchronisation récurrentes

1. Ouvrez **Job Manager → Add Job**.
2. Définissez **pCloud** comme source et **Google Drive** comme destination (ou inversement).
3. Choisissez une planification (horaire, quotidienne, hebdomadaire ou personnalisée façon cron).
4. Activez la tâche et laissez RcloneView l'exécuter automatiquement.
5. Vérifiez les journaux et l'historique pour confirmer le succès des exécutions.

👉 En savoir plus : [Planification et exécution des tâches](/howto/rcloneview-advanced/job-scheduling-and-execution)
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="configure job schedule" class="img-large img-center" />

## Conseils pour des transferts sans accroc

- Exécutez une **simulation (dry-run)** avant les grandes synchronisations pour confirmer le plan.
- Utilisez des **limites de bande passante** pendant les heures de travail pour réduire le risque de limitation.
- Pour les dossiers pCloud chiffrés, assurez-vous d'avoir les clés d'accès ou déchiffrez localement avant de déplacer.
- En approchant du plafond quotidien de Google Drive, répartissez les tâches sur plusieurs jours ou comptes.
- Gardez l'onglet **Transfer** ouvert pour surveiller les nouvelles tentatives, les vitesses et les réponses de l'API.

## Résumé

RcloneView offre des transferts rapides, fiables et sans ligne de commande entre **pCloud** et **Google Drive**. Avec la navigation côte à côte, Comparer, Synchroniser, des tâches réutilisables et la planification, vous pouvez gérer des migrations ou des sauvegardes récurrentes sans téléchargements ni re-téléversements manuels.

<CloudSupportGrid />
