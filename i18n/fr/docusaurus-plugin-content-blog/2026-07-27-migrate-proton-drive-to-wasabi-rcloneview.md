---
slug: migrate-proton-drive-to-wasabi-rcloneview
title: "Migrer de Proton Drive vers Wasabi — Transférer des fichiers avec RcloneView"
authors:
  - kai
description: "Déplacez des fichiers chiffrés de Proton Drive vers le stockage objet Wasabi grâce au transfert direct cloud-à-cloud de RcloneView, sans téléchargement local."
keywords:
  - migrer Proton Drive vers Wasabi
  - transfert de Proton Drive vers Wasabi
  - migration cloud à cloud
  - sauvegarde de stockage objet Wasabi
  - sauvegarde Proton Drive
  - transférer des fichiers Proton Drive
  - migration RcloneView
  - migration de stockage cloud chiffré
tags:
  - RcloneView
  - proton-drive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Proton Drive vers Wasabi — Transférer des fichiers avec RcloneView

> Déplacez des fichiers directement de Proton Drive vers le stockage objet Wasabi sans passer par un disque local.

Proton Drive est conçu pour un stockage personnel axé sur la confidentialité, mais il n'est pas fait pour les charges de travail que Wasabi gère bien — grandes bibliothèques multimédias, sauvegardes d'applications, ou jeux de données nécessitant un accès compatible S3 depuis d'autres outils. Lorsqu'un utilisateur dépasse le cas d'usage de Proton Drive, ou souhaite simplement une seconde copie à long terme moins coûteuse, RcloneView déplace les fichiers directement entre les deux, en se connectant aux deux remotes à la fois plutôt que de tout télécharger localement au préalable.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter les deux remotes

Proton Drive est configuré dans RcloneView avec une adresse e-mail et un mot de passe (plus une 2FA facultative), tandis que Wasabi est ajouté comme remote compatible S3 à l'aide d'un Access Key ID, d'une Secret Access Key et du point de terminaison régional approprié. Les deux remotes apparaissent comme des onglets dans l'Explorateur, de sorte qu'un utilisateur peut parcourir un dossier Proton Drive dans un panneau et un bucket Wasabi dans l'autre avant de démarrer un transfert.

<img src="/support/images/en/blog/new-remote.png" alt="Configuration des remotes Proton Drive et Wasabi dans RcloneView" class="img-large img-center" />

RcloneView connecte également S3, Azure et Backblaze B2 avec un accès complet en lecture/écriture dès la licence FREE, de sorte que la configuration du côté Wasabi de cette migration ne nécessite aucun niveau payant.

## Exécuter le transfert cloud à cloud

Une fois les deux remotes ouverts, faire glisser un dossier du panneau Proton Drive vers le panneau Wasabi déclenche une copie directe — les données transitent de Proton Drive vers Wasabi via RcloneView, sans jamais toucher le disque local. Pour des migrations plus importantes, l'assistant de synchronisation est le meilleur outil : il prend en charge une véritable synchronisation à sens unique depuis la source Proton Drive vers un bucket de destination Wasabi, avec un nombre configurable de transferts simultanés pour tirer pleinement parti de la bande passante disponible.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de fichiers cloud à cloud de Proton Drive vers Wasabi dans RcloneView" class="img-large img-center" />

Le mode Dry Run mérite d'être exécuté en premier pour toute migration de grande ampleur — il liste exactement quels fichiers seront copiés avant qu'un déplacement réel n'ait lieu, permettant de détecter tôt les erreurs de filtre ou des structures de dossiers inattendues.

## Confirmer une migration complète

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Transfert de fichiers par glisser-déposer vers un remote Wasabi dans RcloneView" class="img-large img-center" />

Une fois la tâche de synchronisation terminée, l'onglet Transferts de la vue d'informations en bas de l'écran affiche le nombre total de fichiers déplacés, la vitesse de transfert et toute erreur rencontrée pendant la tâche. Pour les migrations exécutées en tant que tâche enregistrée plutôt que transfert ponctuel, l'historique des tâches conserve un enregistrement permanent — heure de début, durée, taille totale et statut d'achèvement — offrant ainsi un journal clair confirmant que chaque fichier est bien arrivé sur Wasabi avant de retirer la copie Proton Drive.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre remote Proton Drive en utilisant l'e-mail et le mot de passe de votre compte.
3. Ajoutez votre remote Wasabi avec sa clé d'accès, sa clé secrète et son point de terminaison régional.
4. Exécutez d'abord un Dry Run, puis lancez la synchronisation et confirmez le transfert dans l'historique des tâches.

Retirer un dossier Proton Drive devient bien moins stressant lorsqu'un journal vérifié montre que chaque fichier est déjà arrivé en toute sécurité sur Wasabi.

---

**Guides connexes :**

- [Gérer Proton Drive — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Gérer le stockage Wasabi — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Migrer de Proton Drive vers Backblaze B2 — Transférer des fichiers avec RcloneView](https://rcloneview.com/support/blog/migrate-proton-drive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
