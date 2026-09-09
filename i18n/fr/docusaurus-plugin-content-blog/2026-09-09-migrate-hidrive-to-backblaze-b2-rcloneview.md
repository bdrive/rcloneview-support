---
slug: migrate-hidrive-to-backblaze-b2-rcloneview
title: "Migrer de HiDrive vers Backblaze B2 — Transférer des fichiers avec RcloneView"
authors:
  - kai
description: "Migrez vos fichiers de HiDrive vers Backblaze B2 avec RcloneView, une interface graphique multiplateforme qui déplace les données entre les deux fournisseurs sans stocker temporairement les fichiers en local."
keywords:
  - migrer de HiDrive vers Backblaze B2
  - transfert HiDrive Backblaze B2
  - migration RcloneView HiDrive
  - outil de sauvegarde cloud HiDrive
  - GUI de migration Backblaze B2
  - déplacer des fichiers HiDrive vers B2
  - transfert cloud à cloud RcloneView
  - synchronisation HiDrive B2
tags:
  - RcloneView
  - hidrive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de HiDrive vers Backblaze B2 — Transférer des fichiers avec RcloneView

> Déplacez des fichiers directement de HiDrive vers Backblaze B2 avec RcloneView, sans les télécharger d'abord sur un disque local.

Les équipes qui dépassent la capacité d'un compte HiDrive migrent souvent vers Backblaze B2 pour son stockage d'objets à moindre coût et son modèle de clé d'application, mais les deux services ne communiquent pas nativement entre eux. RcloneView fait le lien en une seule fenêtre : connectez les deux comme distants, faites glisser les fichiers entre les panneaux, et laissez le moteur rclone intégré gérer le transfert de serveur à serveur partout où les fournisseurs le permettent. Aucun export manuel ni dossier de stockage temporaire local n'est nécessaire pour le transfert lui-même.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter HiDrive et Backblaze B2

Ajoutez d'abord HiDrive via **Remote tab → New Remote**. HiDrive utilise une connexion OAuth par navigateur, donc RcloneView ouvre une fenêtre de navigateur pour que vous puissiez vous connecter et autoriser l'accès — sans avoir à copier de clés API manuellement. Backblaze B2 se configure différemment : choisissez Backblaze B2 comme type de distant et saisissez votre Application Key ID et votre Application Key, générés depuis la page de gestion des clés de Backblaze. Une fois les deux distants apparus dans le Remote Manager, ouvrez deux panneaux Explorer côte à côte — l'un pointant vers HiDrive, l'autre vers votre bucket B2.

Contrairement aux outils réservés au montage, RcloneView synchronise et compare également les dossiers entre ces distants — avec la licence FREE.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout d'un distant HiDrive dans RcloneView" class="img-large img-center" />

## Exécuter un transfert ponctuel ou une synchronisation récurrente

Pour une migration ponctuelle, sélectionnez les dossiers sur le panneau HiDrive, faites-les glisser sur le panneau B2 et confirmez le transfert — RcloneView traite un glisser-déposer entre distants comme une copie, laissant les originaux HiDrive intacts jusqu'à ce que vous soyez satisfait de l'arrivée des données. Pour une migration continue où HiDrive continue de recevoir de nouveaux fichiers pendant la période de transition, créez plutôt un travail de synchronisation : choisissez HiDrive comme source et B2 comme destination dans l'assistant en 4 étapes, réglez la direction sur le mode unidirectionnel « Modifying destination only », et exécutez-le manuellement chaque fois que vous souhaitez rattraper la différence.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Travail de synchronisation cloud à cloud de HiDrive vers Backblaze B2" class="img-large img-center" />

Avant le basculement final, exécutez l'option Dry Run du travail pour prévisualiser exactement quels fichiers seront copiés et lesquels (le cas échéant) seraient supprimés côté destination — une vérification utile avant de faire pointer vos flux de production vers le nouveau bucket B2.

## Vérifier et automatiser le transfert

Une fois la migration initiale terminée, utilisez Folder Compare pour vérifier les deux côtés fichier par fichier, en confirmant que le nombre et la taille des fichiers correspondent plutôt que de vous fier à un simple message de statut terminé. Si la migration doit se répéter selon un calendrier — par exemple pour refléter en continu dans B2 les nouveaux téléversements sur HiDrive pendant une transition progressive — une licence PLUS débloque une planification de type crontab permettant au travail de synchronisation de s'exécuter sans surveillance à l'intervalle adapté au calendrier de transition.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planification d'un travail de synchronisation récurrent de HiDrive vers Backblaze B2" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez HiDrive via une connexion OAuth par navigateur dans Remote Manager.
3. Ajoutez Backblaze B2 avec votre Application Key ID et votre Application Key.
4. Exécutez un Dry Run, puis lancez le transfert ou le travail de synchronisation entre les deux panneaux.

Une fois les deux distants configurés, le passage de HiDrive à B2 n'est plus qu'un glisser-déposer ou un travail planifié de plus dans l'interface que vous utilisez déjà pour la gestion quotidienne de vos fichiers.

---

**Guides associés :**

- [Gérer le stockage HiDrive — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [Gérer le stockage Backblaze B2 — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Synchroniser HiDrive avec Amazon S3 — Sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/sync-hidrive-to-amazon-s3-rcloneview)

<CloudSupportGrid />
