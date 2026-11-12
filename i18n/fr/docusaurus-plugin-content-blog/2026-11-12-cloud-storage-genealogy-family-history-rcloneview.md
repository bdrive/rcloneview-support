---
slug: cloud-storage-genealogy-family-history-rcloneview
title: "Stockage cloud pour les généalogistes — Préservez vos archives d'histoire familiale avec RcloneView"
authors:
  - tayson
description: "Protégez vos registres numérisés, fichiers d'arbre généalogique et enregistrements d'histoire orale avec RcloneView : sauvegarde multi-cloud, chiffrement et vérification pour les archives généalogiques."
keywords:
  - stockage cloud pour la généalogie
  - sauvegarde de l'histoire familiale
  - sauvegarde d'archives généalogiques
  - sauvegarder les fichiers d'arbre généalogique
  - documents familiaux numérisés dans le cloud
  - sauvegarde d'enregistrements d'histoire orale
  - stockage de fichiers pour associations généalogiques
  - préserver les photos de famille sur plusieurs clouds
  - sauvegarde chiffrée des données ADN
  - RcloneView généalogie
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Stockage cloud pour les généalogistes — Préservez vos archives d'histoire familiale avec RcloneView

> Des décennies de recherche peuvent tenir sur un seul disque d'ordinateur portable. RcloneView les copie vers plusieurs clouds et vérifie que chaque copie correspond.

Les archives généalogiques prennent des formes variées. Un chercheur en histoire familiale peut détenir 40 000 numérisations TIFF de registres paroissiaux, quelques exports GEDCOM de l'arbre familial, des heures d'entretiens WAV avec des parents âgés et des fichiers de données ADN brutes. Les associations généalogiques bénévoles conservent le même mélange sur des lecteurs partagés et des disques USB de récupération. RcloneView offre aux deux une seule application de bureau pour copier ces archives vers le stockage cloud qu'ils utilisent déjà et garder les copies à jour.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Tous les emplacements d'archives dans une seule fenêtre

La plupart des chercheurs répartissent leurs documents entre plusieurs services : un dossier Google Drive partagé avec des cousins, un lien Dropbox envoyé par un centre d'archives éloigné et un disque externe contenant les numérisations originales. Dans RcloneView, vous ajoutez chacun d'eux comme distant. Google Drive, Dropbox, OneDrive et pCloud se connectent via une connexion dans le navigateur. Backblaze B2 nécessite un Application Key ID et une clé. Un NAS Synology peut être détecté sur le réseau local.

Ouvrez jusqu'à quatre panneaux Explorer côte à côte et faites glisser un dossier de numérisations du disque externe vers un distant cloud. Un glisser-déposer entre distants différents effectue une copie, les originaux restent donc en place.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a cloud storage remote in RcloneView for a genealogy archive" class="img-large img-center" />

## Plus d'une copie des numérisations irremplaçables

Renumériser une page de recensement est un désagrément. Un enregistrement perdu de la voix d'un grand-parent est perdu pour toujours. Utilisez la synchronisation 1:N pour envoyer un dossier source vers plusieurs destinations en une seule tâche, par exemple un dossier de numérisations originales vers pCloud et vers un bucket Backblaze B2. Connectez S3, Azure ou Backblaze B2 en lecture/écriture complète avec la FREE License.

Avant la première exécution, utilisez Dry Run pour lister ce qui sera copié et supprimé. La synchronisation unidirectionnelle ne modifie que la destination, le dossier original sur votre disque n'est donc jamais touché.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Copying family history scans between cloud remotes in RcloneView" class="img-large img-center" />

## Protéger les données ADN et les dossiers des proches vivants

Les fichiers ADN bruts et les documents concernant des personnes vivantes demandent plus de précautions qu'un registre de mariages du XIXe siècle. Enveloppez un dossier cloud dans un distant **Crypt** et RcloneView chiffre les noms de fichiers, les noms de dossiers et le contenu avant l'envoi. Le fournisseur ne stocke que des données chiffrées, et vous les parcourez déchiffrées dans RcloneView comme d'habitude. Conservez le mot de passe Crypt en lieu sûr : sans lui, les fichiers ne peuvent pas être déchiffrés.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare in RcloneView showing differences between archive copies" class="img-large img-center" />

## Vérifier les copies et automatiser les mises à jour

Utilisez Folder Compare pour comparer l'original local avec chaque copie cloud. Les filtres affichent les fichiers présents d'un seul côté ou de taille différente, et Copy right ou Copy left comble un écart en un clic. Avec une PLUS License, une planification de type crontab peut lancer la synchronisation chaque dimanche soir, et Job History enregistre le statut, la taille et le nombre de fichiers de chaque exécution.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a weekly family archive backup job in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre disque externe ou votre NAS et deux distants cloud, par exemple pCloud et Backblaze B2.
3. Créez une tâche de synchronisation à partir de votre dossier d'archives original avec les deux clouds comme destinations, puis lancez un Dry Run.
4. Ajoutez un distant Crypt pour les fichiers ADN et les dossiers des personnes vivantes, et vérifiez les copies avec Folder Compare.

Avec deux copies vérifiées hors site, vos recherches survivront à n'importe quel disque.

---

**Guides associés :**

- [Stockage cloud pour les musées et les archives](https://rcloneview.com/support/blog/cloud-storage-museums-archives-rcloneview)
- [Synchronisation un-vers-plusieurs vers plusieurs destinations](https://rcloneview.com/support/blog/one-to-many-sync-multiple-destinations-rcloneview)
- [Chiffrer les sauvegardes cloud avec un distant Crypt](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
