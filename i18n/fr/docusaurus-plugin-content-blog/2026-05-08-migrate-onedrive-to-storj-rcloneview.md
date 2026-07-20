---
slug: migrate-onedrive-to-storj-rcloneview
title: "Migrer de OneDrive vers Storj — Transférez vos fichiers avec RcloneView"
authors:
  - steve
description: "Guide étape par étape pour migrer des fichiers de Microsoft OneDrive vers le stockage cloud décentralisé Storj avec RcloneView — avec vérification par somme de contrôle et sans aucune connaissance de la ligne de commande."
keywords:
  - migration OneDrive vers Storj RcloneView
  - migrer OneDrive Storj cloud
  - transfert de fichiers OneDrive Storj
  - passer de OneDrive à Storj
  - migration cloud décentralisée
  - sauvegarde Storj OneDrive
  - synchronisation OneDrive Storj
  - rclone OneDrive Storj GUI
tags:
  - RcloneView
  - onedrive
  - storj
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de OneDrive vers Storj — Transférez vos fichiers avec RcloneView

> Déplacez vos fichiers OneDrive vers le stockage objet décentralisé et chiffré de bout en bout de Storj — un processus complet, vérifié et piloté par une interface graphique avec RcloneView.

Storj propose une alternative intéressante pour les équipes qui cherchent à réduire leur dépendance aux fournisseurs cloud centralisés. Son architecture décentralisée chiffre et fragmente les fichiers sur un réseau mondial de nœuds indépendants, offrant de solides garanties de confidentialité sans point unique de défaillance. Pour les organisations qui utilisent actuellement OneDrive et envisagent une alternative axée sur la confidentialité, RcloneView simplifie la migration en se connectant aux deux fournisseurs et en transférant les données directement entre eux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter OneDrive et Storj à RcloneView

Ajoutez Microsoft OneDrive comme distant via **onglet Remote → New Remote** et effectuez l'authentification OAuth avec votre compte Microsoft. Pour Storj, vous avez deux options : utiliser le type de fournisseur Storj natif (saisissez votre Access Grant depuis la console Storj) ou utiliser l'accès compatible S3 (Access Key + Secret Key + point de terminaison S3 Storj `https://gateway.storjshare.io`). L'approche compatible S3 offre souvent de meilleures performances pour les transferts en masse volumineux.

Une fois les deux distants configurés, ouvrez OneDrive dans le panneau de gauche et votre bucket Storj dans le panneau de droite. Vérifiez que vous pouvez parcourir les fichiers des deux côtés avant de démarrer la migration.

<img src="/support/images/en/blog/new-remote.png" alt="Setting up OneDrive and Storj as remotes in RcloneView" class="img-large img-center" />

## Lancer la migration

Ouvrez l'assistant de tâche via **onglet Home → Sync**. Définissez votre dossier source OneDrive et le bucket de destination Storj. Dans l'étape Advanced Settings, activez la vérification **Checksum** pour confirmer l'intégrité de chaque fichier après le transfert. L'architecture distribuée de Storj signifie que chaque fichier est découpé en morceaux puis réassemblé au téléchargement — les sommes de contrôle confirment que ce processus produit des données identiques des deux côtés.

Commencez par un **Dry Run** pour prévisualiser les fichiers qui seront migrés et détecter d'éventuels problèmes de chemin ou conflits de noms. OneDrive autorise certains caractères spéciaux dans les noms de fichiers que l'interface compatible S3 de Storj peut traiter différemment — le résultat du dry run signalera tout problème d'encodage.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive to Storj migration in progress in RcloneView" class="img-large img-center" />

## Surveiller et vérifier le transfert

L'onglet **Transferring** affiche la progression du transfert en temps réel, y compris la vitesse de transfert, le nombre de fichiers et les octets déplacés. Pour les migrations volumineuses, utilisez 8 à 16 transferts de fichiers simultanés si votre connexion internet le permet.

Une fois la migration terminée, exécutez une **Folder Compare** entre la source OneDrive et la destination Storj pour confirmer que tous les fichiers sont bien arrivés. Consultez le **Job History** pour le résumé final du transfert et son statut.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Live transfer monitoring of OneDrive to Storj transfer" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez OneDrive (OAuth) et Storj (compatible S3 ou natif) comme distants.
3. Créez une tâche Sync avec la somme de contrôle activée et lancez d'abord un dry run.
4. Suivez la progression dans l'onglet Transferring et vérifiez avec Folder Compare.

Migrer de OneDrive vers Storj avec RcloneView est un processus propre et vérifiable qui respecte l'intégrité de vos données à chaque étape.

---

**Guides connexes :**

- [Gérer le stockage cloud Storj avec RcloneView](https://rcloneview.com/support/blog/manage-storj-cloud-sync-backup-rcloneview)
- [Gérer le stockage cloud OneDrive avec RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Migrer de Dropbox vers Storj avec RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-storj-rcloneview)

<CloudSupportGrid />
