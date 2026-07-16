---
slug: manage-azure-blob-storage-cloud-sync-rcloneview
title: "Gérer Azure Blob Storage — Synchroniser et sauvegarder des fichiers avec RcloneView"
authors:
  - tayson
description: "Gérez Azure Blob Storage avec RcloneView — synchronisez des conteneurs, sauvegardez des fichiers et transférez des données entre Azure et d'autres clouds grâce à une interface graphique."
keywords:
  - gestion d'Azure Blob Storage
  - synchronisation Azure blob
  - outil de sauvegarde Azure
  - RcloneView Azure
  - synchronisation de conteneur Azure
  - gestion du stockage cloud
  - transfert de fichiers Azure
  - GUI blob storage
  - Azure Blob rclone
  - sauvegarde du stockage objet Azure
tags:
  - azure
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer Azure Blob Storage — Synchroniser et sauvegarder des fichiers avec RcloneView

> Azure Blob Storage alimente les applications cloud-native et les data lakes d'entreprise — RcloneView intègre ses conteneurs dans une interface de gestion de fichiers visuelle pour une synchronisation, une sauvegarde et une migration inter-cloud efficaces.

Azure Blob Storage est l'épine dorsale du stockage objet de Microsoft pour les applications cloud-native, les data lakes et les archives d'entreprise. Si le portail Azure convient pour une navigation occasionnelle, les transferts en masse, la migration inter-cloud et l'automatisation des sauvegardes nécessitent une approche plus flexible. RcloneView se connecte à Azure Blob Storage et intègre vos conteneurs directement dans un gestionnaire de fichiers multi-panneaux, aux côtés de tous vos autres remotes cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Azure Blob Storage à RcloneView

Dans RcloneView, ouvrez **Remote tab > New Remote** et sélectionnez **Microsoft Azure Blob Storage** dans la liste des fournisseurs. Vous aurez besoin du nom de votre compte de stockage ainsi que d'une clé de compte ou d'un jeton SAS (Shared Access Signature). Après avoir saisi ces informations d'identification et enregistré le remote, vos conteneurs blob apparaissent comme des dossiers de premier niveau dans le panneau d'exploration.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Azure Blob Storage as a new remote in RcloneView" class="img-large img-center" />

La navigation est simple — les conteneurs se développent pour afficher leurs chemins de blobs, et vous pouvez filtrer par nom, vérifier les tailles et consulter les horodatages de modification. Contrairement à la liste plate de blobs du portail Azure, la vue en arborescence de RcloneView rend les structures de préfixes hiérarchiques intuitives à parcourir. Vous pouvez également faire un clic droit sur n'importe quel élément pour voir sa taille, copier son chemin ou lancer un transfert.

## Synchroniser Azure Blob avec d'autres clouds

Azure Blob Storage est fréquemment utilisé pour archiver des données provenant d'autres plateformes. Une société de médias qui migre des ressources vidéo depuis un NAS sur site vers Azure Blob peut configurer une tâche de synchronisation dans le **Job Manager** de RcloneView : la source est le remote SFTP du NAS, la destination est le conteneur Azure cible. Les transferts simultanés et les paramètres de téléversement multithread maximisent le débit pour les lots de migration volumineux.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud sync from NAS to Azure Blob Storage in RcloneView" class="img-large img-center" />

Pour les architectures cloud hybrides, la synchronisation de conteneurs entre Azure Blob et Amazon S3 ou Cloudflare R2 crée une redondance sans dépendance à un fournisseur unique. Deux remotes Azure Blob — configurés avec des comptes de stockage différents — peuvent même être synchronisés directement au sein de RcloneView, ce qui simplifie les migrations inter-comptes.

## Automatisation des sauvegardes planifiées

Les organisations qui exécutent des sauvegardes planifiées vers Azure Blob peuvent utiliser la fonctionnalité de planification basée sur cron de RcloneView (licence PLUS) pour configurer des tâches entièrement automatisées. Un cabinet juridique qui archive chaque nuit des documents de dossiers vers Azure Blob définit la planification une seule fois — tous les jours à 2 h, du lundi au vendredi — et RcloneView gère l'exécution automatiquement.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Azure Blob Storage backup jobs in RcloneView" class="img-large img-center" />

L'onglet **Job History** fournit une piste d'audit complète : heure de début, durée, octets transférés, fichiers déplacés et statut de chaque exécution. Pour les flux de travail sensibles à la conformité, ce journal indique précisément quand les données ont été sauvegardées pour la dernière fois et si la tâche s'est terminée avec succès.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Allez dans **Remote tab > New Remote**, sélectionnez **Microsoft Azure Blob Storage**, puis saisissez le nom et la clé de votre compte.
3. Parcourez vos conteneurs dans le panneau d'exploration — naviguez dans les préfixes, vérifiez les tailles de fichiers.
4. Configurez des tâches de synchronisation ou de sauvegarde dans le **Job Manager** entre Azure Blob et vos autres stockages.

Avec RcloneView, Azure Blob Storage devient aussi facile à gérer qu'un disque local — avec une visibilité complète sur le contenu stocké, l'historique des transferts et l'exécution planifiée.

---

**Guides connexes :**

- [Monter Azure Blob Storage en tant que disque local avec RcloneView](https://rcloneview.com/support/blog/mount-azure-blob-storage-local-drive-rcloneview)
- [Migrer d'Azure Blob vers Cloudflare R2 avec RcloneView](https://rcloneview.com/support/blog/migrate-azure-blob-to-cloudflare-r2-rcloneview)
- [Gérer la synchronisation cloud d'Azure Files avec RcloneView](https://rcloneview.com/support/blog/manage-azure-files-cloud-sync-rcloneview)

<CloudSupportGrid />
