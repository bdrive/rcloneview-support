---
slug: sync-google-photos-to-google-drive-rcloneview
title: "Synchroniser Google Photos vers Google Drive — Organisez et sauvegardez votre bibliothèque de photos avec RcloneView"
authors:
  - kai
description: "Découvrez comment synchroniser automatiquement Google Photos vers Google Drive avec RcloneView. Transférez, organisez et sauvegardez toute votre bibliothèque de photos entre vos comptes cloud."
keywords:
  - synchroniser Google Photos vers Google Drive
  - sauvegarder Google Photos vers Google Drive RcloneView
  - transfert Google Photos Google Drive
  - synchronisation Google Photos RcloneView
  - sauvegarde de bibliothèque photo cloud
  - sauvegarde automatisée Google Photos
  - gestion de fichiers photo cloud
  - synchronisation cloud Google Photos
  - transférer des photos entre services Google
  - outil d'organisation de photos cloud
tags:
  - RcloneView
  - google-photos
  - google-drive
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Google Photos vers Google Drive — Organisez et sauvegardez votre bibliothèque de photos avec RcloneView

> Google Photos et Google Drive sont des remotes cloud distincts dans rclone — RcloneView vous permet de synchroniser toute votre bibliothèque de photos entre eux en quelques clics et de programmer son exécution automatique.

De nombreux photographes et équipes utilisent Google Photos comme outil principal de capture et d'organisation, tout en s'appuyant sur Google Drive pour le partage de fichiers structuré et la collaboration. Le problème : ce sont deux services cloud distincts dans rclone, et le contenu ne circule pas automatiquement entre eux. Un photographe de mariage gérant des dizaines de milliers d'images traitées dans Google Photos peut avoir besoin que ces fichiers soient accessibles dans un dossier Google Drive structuré pour les livrables clients et l'archivage à long terme. RcloneView connecte les deux services depuis la même interface, ce qui simplifie le transfert, la synchronisation et la planification des migrations de photos entre eux, sans aucune ligne de commande.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Google Photos et Google Drive dans RcloneView

Google Photos et Google Drive utilisent tous deux une authentification OAuth basée sur le navigateur. Dans RcloneView, ouvrez l'onglet Remote et cliquez sur New Remote, puis sélectionnez Google Photos et complétez la connexion via le navigateur. Répétez le processus pour ajouter Google Drive comme second remote. En quelques minutes, les deux comptes apparaissent sous forme de panneaux distincts dans l'explorateur de fichiers à deux volets.

Avec les deux remotes visibles côte à côte, vous pouvez parcourir votre bibliothèque Google Photos parallèlement à la structure de dossiers de votre Google Drive dans la même fenêtre. Cette vue parallèle permet de repérer facilement quels albums photo ou plages de dates n'ont pas encore été transférés, et de glisser-déposer des dossiers individuels pour des copies ponctuelles rapides. La fenêtre de confirmation du glisser-déposer (activable/désactivable dans les paramètres) évite les déplacements accidentels lorsque vous travaillez avec de grandes bibliothèques.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Photos and Google Drive as remotes in RcloneView" class="img-large img-center" />

## Configurer un job de synchronisation pour transférer votre bibliothèque de photos

Pour les transferts en masse, utilisez le Job Manager pour créer un job de synchronisation dédié. Cliquez sur le bouton Sync depuis l'onglet Home, sélectionnez votre dossier Google Photos comme source, puis choisissez le dossier cible dans Google Drive comme destination. L'assistant en 4 étapes vous permet de configurer les flux de transfert simultanés, d'activer la vérification par somme de contrôle pour détecter les fichiers corrompus pendant le transfert, et d'appliquer des filtres par taille ou par âge de fichier si vous souhaitez exclure les vidéos ou ne récupérer que les photos d'une période spécifique.

Avant de lancer le transfert complet, utilisez la fonction Dry Run pour prévisualiser exactement quels fichiers seront copiés — essentiel lors de la synchronisation de grandes archives, où vous voulez éviter d'écraser accidentellement un dossier Drive déjà organisé avec des doublons. Le dry run affiche une liste complète des opérations prévues sans effectuer de modification réelle.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud sync job between Google Photos and Google Drive in RcloneView" class="img-large img-center" />

L'onglet Transferring en bas de l'écran fournit un suivi en direct du transfert — pourcentage de progression, vitesse de transfert actuelle et nombre de fichiers — afin que vous puissiez suivre une migration de photos volumineuse sans avoir à deviner ce qu'il reste à faire.

## Programmer des synchronisations automatiques de photos (licence PLUS)

Pour les photographes ou les équipes qui uploadent en continu vers Google Photos, un transfert ponctuel ne suffit pas. Avec une licence PLUS, vous pouvez programmer des jobs de synchronisation récurrents grâce à une planification de type crontab. Configurez un job nocturne pour récupérer toutes les nouvelles photos ajoutées à Google Photos vers un dossier Google Drive correspondant, gardant ainsi les deux comptes à jour sans intervention manuelle. Le planificateur prend en charge des intervalles précis : exécution par minute, heure, jour de la semaine, jour du mois ou mois.

L'historique des jobs enregistre chaque exécution — quand elle a eu lieu, combien de fichiers ont été transférés, la taille totale des données, la vitesse, et si elle s'est terminée avec succès ou en erreur. Si un problème réseau interrompt une session, RcloneView retente automatiquement (3 tentatives par défaut) et enregistre le résultat pour que vous puissiez le consulter plus tard.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Google Photos to Google Drive sync transfers" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Google Photos via Remote tab > New Remote > Google Photos, puis authentifiez-vous via le navigateur.
3. Ajoutez Google Drive comme second remote de la même manière.
4. Créez un job Sync dans le Job Manager, sélectionnez Google Photos comme source et un dossier Google Drive comme destination, exécutez d'abord un Dry Run, puis lancez le transfert complet.

Synchroniser votre bibliothèque Google Photos vers Google Drive ne prend que quelques minutes à configurer avec RcloneView, vous offrant un accès structuré aux fichiers et une copie secondaire fiable de toute votre collection de photos.

---

**Guides associés :**

- [Gérer le stockage Google Photos — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-google-photos-cloud-sync-backup-rcloneview)
- [Gérer le stockage Google Drive — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Sauvegarder Google Photos sur un disque externe et un NAS avec RcloneView](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)

<CloudSupportGrid />
