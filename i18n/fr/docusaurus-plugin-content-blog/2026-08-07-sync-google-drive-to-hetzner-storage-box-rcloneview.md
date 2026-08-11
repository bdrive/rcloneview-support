---
slug: sync-google-drive-to-hetzner-storage-box-rcloneview
title: "Synchroniser Google Drive avec Hetzner Storage Box — sauvegarde cloud avec RcloneView"
authors:
  - steve
description: "Synchronisez les fichiers Google Drive vers une Hetzner Storage Box pour une sauvegarde externe économique grâce aux tâches de synchronisation multi-fournisseurs de RcloneView."
keywords:
  - synchroniser google drive avec hetzner
  - sauvegarde google drive hetzner storage box
  - hetzner storage box rclone
  - sauvegarde externe google drive
  - synchronisation de stockage cloud économique
  - sauvegarde de stockage cloud européen
  - synchronisation google drive rcloneview
  - sauvegarde hetzner box
  - sauvegarde sftp google drive
  - sauvegarde cloud à cloud
tags:
  - RcloneView
  - google-drive
  - hetzner
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Google Drive avec Hetzner Storage Box — sauvegarde cloud avec RcloneView

> Conservez une seconde copie économique de vos fichiers Google Drive sur une Hetzner Storage Box sans quitter votre bureau ni écrire la moindre ligne de script.

Google Drive est pratique pour la collaboration au quotidien, mais il n'est pas conçu en soi comme une destination de sauvegarde à long terme — une seconde copie sur une infrastructure indépendante protège contre les blocages de compte, les suppressions accidentelles ou les dépassements de quota inattendus. Hetzner Storage Box est un choix populaire pour cela grâce à son faible coût par téraoctet, et RcloneView relie directement les deux via une tâche de synchronisation planifiée, sans aucun script en ligne de commande. RcloneView monte et synchronise les deux fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter les deux distants

Ajoutez d'abord Google Drive via Remote Manager en utilisant la connexion OAuth standard dans le navigateur — aucune saisie de clé API n'est nécessaire, RcloneView gérant automatiquement le flux d'authentification. Ajoutez ensuite la Hetzner Storage Box comme distant SFTP, en saisissant l'adresse hôte de la box et vos identifiants SSH dans l'écran de configuration Credential Entry.

Une fois que les deux distants apparaissent sous forme d'onglets dans le panneau Explorer, ouvrez une disposition en panneaux fractionnés pour les parcourir côte à côte. C'est une vérification utile avant de configurer une tâche automatisée — confirmez que la structure du dossier de destination sur la Storage Box correspond à vos attentes avant de lancer une synchronisation vers celle-ci.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout de Google Drive et Hetzner Storage Box comme distants dans RcloneView" class="img-large img-center" />

## Configurer la tâche de synchronisation

Dans l'assistant de synchronisation, sélectionnez Google Drive comme source et la Hetzner Storage Box comme destination, puis choisissez la direction de synchronisation **One-way** (unidirectionnelle) afin que la Storage Box reflète Google Drive sans rien supprimer côté source. À l'étape 3, appliquez des filtres pour ignorer les types de fichiers que vous n'avez pas besoin de sauvegarder — exclure les fichiers `.tmp` ou les formats propres à Google Docs réduit le volume transféré et accélère les exécutions suivantes.

Activer la comparaison par checksum dans Advanced Settings permet à RcloneView de ne retransférer que les fichiers réellement modifiés, plutôt que tous ceux ayant une date de modification plus récente — un point particulièrement important sur Google Drive, où les horodatages de métadonnées peuvent changer sans que le contenu change.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuration d'une tâche de synchronisation unidirectionnelle de Google Drive vers Hetzner Storage Box dans RcloneView" class="img-large img-center" />

## Automatiser et surveiller la sauvegarde

Exécutez d'abord un Dry Run pour prévisualiser exactement les fichiers qui seront copiés, puis lancez la tâche et suivez la progression en direct dans l'onglet Transferring de l'Info View — la vitesse de transfert, le nombre de fichiers et la taille totale s'affichent. Les titulaires d'une licence PLUS peuvent associer une planification au format crontab afin que la synchronisation se répète sans intervention manuelle, et le Job History conserve un enregistrement permanent de la durée et du résultat de chaque exécution à des fins d'audit ultérieur.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planification d'une tâche de synchronisation récurrente de Google Drive vers Hetzner Storage Box dans RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Connectez Google Drive via OAuth et ajoutez la Hetzner Storage Box comme distant SFTP.
3. Créez une tâche de synchronisation unidirectionnelle avec filtres et comparaison par checksum activés.
4. Exécutez un Dry Run, puis lancez la synchronisation et surveillez-la dans l'onglet Transferring.

Disposer d'une seconde copie sur une infrastructure indépendante et économique est l'un des moyens les plus simples de protéger les données Google Drive, et RcloneView maintient cette routine active sans manipulation manuelle de fichiers.

---

**Guides associés :**

- [Gérer le stockage Hetzner Storage Box — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-hetzner-storage-box-sync-rcloneview)
- [Synchroniser Dropbox avec Hetzner Storage Box — sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/sync-dropbox-to-hetzner-storage-box-rcloneview)
- [Gérer le stockage Google Drive — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
