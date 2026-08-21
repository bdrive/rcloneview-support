---
slug: manage-dropbox-business-cloud-sync-backup-rcloneview
title: "Gérer le stockage Dropbox for Business — Synchroniser et sauvegarder des fichiers avec RcloneView"
authors:
  - casey
description: "Connectez Dropbox for Business à RcloneView pour la navigation de fichiers multiplateforme, la synchronisation cloud à cloud et les sauvegardes planifiées des comptes d'équipe."
keywords:
  - dropbox for business
  - synchronisation dropbox business
  - rcloneview dropbox business
  - sauvegarde dropbox business
  - dropbox_business rclone
  - stockage dropbox entreprise
  - gui de stockage cloud professionnel
  - synchronisation compte équipe dropbox
  - gestion de fichiers multi-cloud
  - migration dropbox business
tags:
  - RcloneView
  - dropbox
  - business
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage Dropbox for Business — Synchroniser et sauvegarder des fichiers avec RcloneView

> Connectez un compte d'équipe Dropbox for Business à RcloneView, puis parcourez, synchronisez et sauvegardez les dossiers d'équipe partagés aux côtés de tous les autres clouds que vous gérez.

Les comptes Dropbox for Business organisent les fichiers différemment d'un compte Dropbox personnel : dossiers d'équipe, espaces gérés par les administrateurs et espaces de travail partagés se trouvent tous derrière une connexion professionnelle. RcloneView se connecte directement à ces comptes d'équipe, offrant aux administrateurs informatiques et aux responsables d'équipe une fenêtre unique pour parcourir, transférer et sauvegarder le contenu professionnel sans avoir à basculer entre l'application web Dropbox et un client de bureau distinct.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurer un remote Dropbox for Business

L'ajout d'un compte Dropbox for Business dans RcloneView commence de la même manière qu'une connexion Dropbox personnelle : cliquez sur New Remote, sélectionnez Dropbox, puis effectuez la connexion OAuth dans votre navigateur. La différence tient à un seul réglage supplémentaire — activer `dropbox_business = true` sur le remote, ce qui indique à la connexion de s'authentifier auprès du compte d'équipe plutôt que d'un compte individuel. Une fois configuré, les dossiers d'équipe du compte professionnel apparaissent dans le panneau Explorer comme n'importe quel autre remote.

Comme RcloneView monte ET synchronise plus de 90 fournisseurs depuis une seule fenêtre sur Windows, macOS et Linux, un administrateur gérant à la fois un locataire Dropbox for Business et d'autres clouds départementaux peut tout garder dans la même session au lieu de jongler entre des applications distinctes pour chaque fournisseur.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Dropbox for Business remote in RcloneView" class="img-large img-center" />

## Parcourir les dossiers d'équipe et les espaces partagés

Une fois connecté, le panneau File Explorer affiche la structure de dossiers de Dropbox for Business avec les mêmes colonnes Nom, Type, Date de modification et Taille utilisées pour tout autre remote. Les dossiers d'équipe couvrant plusieurs départements se parcourent facilement grâce à l'arborescence de dossiers repliable, et l'option Copy Full Path de la barre de chemin en fil d'Ariane génère le format `remote:chemin` nécessaire pour les scripts ou pour le transmettre au Terminal rclone intégré.

La sélection multiple avec Ctrl+clic ou Maj+clic permet d'extraire facilement des dossiers de projet spécifiques d'un grand espace d'équipe plutôt que de travailler sur l'ensemble du compte.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing Dropbox for Business team folders in RcloneView Explorer" class="img-large img-center" />

## Sauvegarder les données professionnelles vers un second cloud

S'appuyer sur un seul fournisseur pour des fichiers critiques pour l'entreprise est risqué ; c'est pourquoi de nombreuses équipes miroitent le contenu de Dropbox for Business vers Amazon S3, Backblaze B2 ou un autre cloud comme copie secondaire. L'assistant Sync en 4 étapes de RcloneView gère cela directement : sélectionnez le remote Dropbox for Business comme source, choisissez un remote de destination, puis optez pour la synchronisation à sens unique afin que la destination de sauvegarde reflète toujours la source sans jamais rien écraser en amont. Les paramètres de filtrage permettent d'exclure les gros fichiers multimédias ou de limiter la sauvegarde aux dossiers en dessous d'un certain âge, pour que le travail se concentre sur ce qui doit réellement être protégé.

Exécuter un Dry Run avant la première synchronisation montre exactement quels fichiers seront copiés, ce qui est utile pour vérifier la portée avant de déplacer les données de tout un compte d'équipe.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Dropbox for Business backup job in RcloneView" class="img-large img-center" />

## Automatiser les sauvegardes récurrentes

Les utilisateurs de la licence PLUS peuvent associer au travail de sauvegarde Dropbox for Business une planification au format crontab, afin qu'il s'exécute chaque nuit ou chaque semaine sans intervention manuelle. Job History enregistre ensuite le type d'exécution, la durée, le statut et la taille totale transférée pour chaque exécution planifiée, offrant aux administrateurs une piste d'audit qu'ils peuvent consulter sans avoir à fouiller dans le journal d'activité propre à Dropbox.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez un nouveau remote Dropbox et activez le réglage `dropbox_business` pendant la configuration.
3. Parcourez les dossiers d'équipe dans le panneau Explorer et confirmez l'accès aux espaces partagés dont vous avez besoin.
4. Créez un travail Sync pour miroiter les données professionnelles vers un second cloud, et planifiez-le si vous disposez de la licence PLUS.

Un remote Dropbox for Business correctement configuré fait de RcloneView un filet de sécurité pratique pour des données d'équipe qui, trop souvent, ne résident qu'à un seul endroit.

---

**Guides associés :**

- [Gérer le stockage Dropbox — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Migrer Dropbox Business vers Google Workspace — Transférer des fichiers avec RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-business-to-google-workspace-rcloneview)
- [Sauvegarder Dropbox vers AWS S3 — Sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-aws-s3-rcloneview)

<CloudSupportGrid />
