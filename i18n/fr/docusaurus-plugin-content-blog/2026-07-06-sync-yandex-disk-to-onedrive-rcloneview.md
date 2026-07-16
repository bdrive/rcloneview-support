---
slug: sync-yandex-disk-to-onedrive-rcloneview
title: "Synchroniser Yandex Disk vers OneDrive — Sauvegarde cloud avec RcloneView"
authors:
  - steve
description: "Synchronisez Yandex Disk vers OneDrive avec RcloneView, en reflétant les fichiers entre les deux fournisseurs selon une planification, depuis une seule interface graphique multiplateforme."
keywords:
  - synchroniser yandex disk vers onedrive
  - sauvegarde yandex disk onedrive
  - yandex disk vers microsoft onedrive
  - rcloneview yandex disk
  - synchronisation cloud à cloud
  - migration yandex disk
  - onedrive comme destination de sauvegarde
  - synchronisation de fichiers inter-cloud
tags:
  - yandex-disk
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Yandex Disk vers OneDrive — Sauvegarde cloud avec RcloneView

> Conserver une copie de travail dans OneDrive tout en gardant Yandex Disk comme source ne nécessite pas d'exporter puis de réimporter quoi que ce soit — RcloneView connecte les deux comme distants et synchronise directement les dossiers, de cloud à cloud.

Yandex Disk est un choix de stockage principal courant pour les utilisateurs et les équipes travaillant en Russie et sur les marchés voisins, mais les collaborateurs ou les outils en aval s'attendent souvent à trouver les fichiers dans OneDrive à la place — pour l'intégration Office, la transmission vers SharePoint, ou tout simplement parce que c'est là que se trouve le reste de l'organisation. Déplacer des fichiers entre les deux implique normalement de tout télécharger localement d'abord puis de le réimporter, ce qui double le temps de transfert et gaspille inutilement de l'espace disque local. RcloneView se connecte à Yandex Disk et à OneDrive en tant que distants dans la même fenêtre et transfère directement entre eux, en évitant complètement l'aller-retour local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter les deux distants

Yandex Disk se connecte à RcloneView via une connexion OAuth dans le navigateur — aucune clé API distincte ni saisie manuelle de jeton n'est requise, le même flux que celui utilisé pour Google Drive ou Dropbox. OneDrive se connecte de la même manière. Une fois les deux authentifiés, ouvrez deux panneaux Explorer côte à côte, l'un pointé vers la racine de Yandex Disk et l'autre vers le dossier OneDrive cible, afin de confirmer la structure des dossiers de chaque côté avant de configurer une tâche de transfert.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Yandex Disk and OneDrive as remotes in RcloneView" class="img-large img-center" />

RcloneView permet également de synchroniser et de comparer des dossiers avec la licence GRATUITE — aucun palier payant distinct n'est requis simplement pour déplacer des fichiers entre deux fournisseurs cloud, ce qui compte pour une migration ponctuelle où vous ne souhaitez pas vous engager dans un abonnement pour un seul transfert.

## Configurer la tâche de synchronisation

L'étape 1 de l'assistant de synchronisation est celle où le transfert est défini : sélectionnez le dossier Yandex Disk comme source, le dossier OneDrive comme destination, et choisissez « Modifier la destination uniquement » pour un miroir à sens unique qui maintient OneDrive aligné sur Yandex Disk sans toucher à l'original. Avant de l'exécuter réellement, utilisez l'exécution à blanc (Dry Run) pour prévisualiser exactement quels fichiers seront copiés — cela permet de détecter les problèmes de nommage ou les dossiers inattendus avant tout déplacement réel de données, ce qui vaut la peine d'être fait étant donné la façon dont les deux fournisseurs peuvent rapporter les métadonnées de fichiers de manière différente.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job from Yandex Disk to OneDrive in RcloneView" class="img-large img-center" />

Les paramètres de filtrage de l'étape 3 vous permettent d'exclure les types de fichiers qui n'ont pas besoin de faire le trajet — les fichiers multimédias volumineux ou les dossiers déjà synchronisés peuvent être ignorés à l'aide de la taille de fichier maximale ou de règles d'exclusion de chemin personnalisées, en gardant la copie OneDrive centrée sur ce dont les collaborateurs ont réellement besoin.

## Surveiller le transfert

Une fois la tâche lancée, l'onglet Transferring dans la vue d'information en bas affiche la progression en direct : pourcentage terminé, vitesse de transfert actuelle et nombre de fichiers, afin que vous puissiez confirmer qu'une archive Yandex Disk volumineuse est bien en train de se déplacer et non bloquée. Une fois la tâche terminée, l'historique des tâches (Job History) enregistre la taille totale transférée, la durée et le statut d'achèvement, vous fournissant un enregistrement à consulter si un collaborateur demande plus tard si un lot spécifique de fichiers est bien arrivé.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Viewing Job History after syncing Yandex Disk to OneDrive in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Connectez Yandex Disk et OneDrive comme distants via une connexion OAuth.
3. Configurez une tâche de synchronisation à sens unique de Yandex Disk vers OneDrive et exécutez d'abord l'exécution à blanc (Dry Run).
4. Lancez la synchronisation, puis vérifiez l'historique des tâches pour confirmer que le transfert s'est terminé comme prévu.

Les sauvegardes inter-cloud ne devraient pas nécessiter un détour par le disque local — avec les deux fournisseurs actifs dans la même fenêtre, les fichiers vont simplement là où ils doivent aller.

---

**Guides associés :**

- [Gérer le stockage Yandex Disk — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [Gérer le stockage OneDrive — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Migrer Yandex Disk vers Dropbox avec RcloneView](https://rcloneview.com/support/blog/migrate-yandex-disk-to-dropbox-rcloneview)

<CloudSupportGrid />
