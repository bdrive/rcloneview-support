---
slug: sync-azure-blob-to-backblaze-b2-rcloneview
title: "Synchroniser Azure Blob Storage vers Backblaze B2 — Sauvegarde cloud avec RcloneView"
authors:
  - tayson
description: "Découvrez comment synchroniser ou migrer des fichiers d'Azure Blob Storage vers Backblaze B2 avec RcloneView pour réduire les coûts, gagner en redondance et automatiser la sauvegarde cloud."
keywords:
  - Azure Blob Storage
  - Backblaze B2
  - cloud migration
  - RcloneView
  - cloud-to-cloud sync
  - cloud backup
  - storage cost savings
  - rclone azure b2
tags:
  - RcloneView
  - azure
  - backblaze-b2
  - cloud-to-cloud
  - migration
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Azure Blob Storage vers Backblaze B2 — Sauvegarde cloud avec RcloneView

> Déplacer des données d'Azure Blob Storage vers Backblaze B2 peut réduire considérablement vos coûts de stockage — RcloneView simplifie la migration et la synchronisation continue grâce à une interface graphique guidée.

Azure Blob Storage est largement utilisé pour les charges de travail d'entreprise, mais Backblaze B2 propose des tarifs de stockage nettement plus bas — souvent une fraction du coût d'Azure — ce qui en fait une cible attrayante pour une sauvegarde secondaire ou une destination de migration complète. Que vous souhaitiez une migration ponctuelle ou une synchronisation continue pour la redondance, RcloneView gère les deux sans nécessiter d'expertise en ligne de commande. RcloneView est fourni avec un binaire rclone intégré, il n'y a donc rien d'autre à installer.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurer Azure Blob Storage dans RcloneView

Cliquez sur **New Remote** dans RcloneView et sélectionnez **Microsoft Azure Blob Storage** dans la liste des fournisseurs. Vous aurez besoin de votre **Storage Account Name** et de votre **Storage Account Key** depuis le portail Azure (dans votre compte de stockage > Access Keys). En option, vous pouvez utiliser un jeton SAS ou une chaîne de connexion. Une fois enregistré, RcloneView se connecte et liste tous vos conteneurs blob.

Si vous utilisez plusieurs comptes de stockage Azure — par exemple, des comptes distincts par environnement ou par région — ajoutez chacun comme un remote distant nommé séparément. RcloneView les gère tous depuis la même interface, ce qui vous permet de comparer les conteneurs et de déplacer facilement des données entre les comptes.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Azure Blob Storage remote in RcloneView" class="img-large img-center" />

## Connecter Backblaze B2

Ajoutez un deuxième remote distant pour Backblaze B2 en cliquant à nouveau sur **New Remote** et en sélectionnant **Backblaze B2**. Saisissez votre **Application Key ID** et votre **Application Key** depuis le tableau de bord Backblaze. Vous pouvez restreindre la clé à un bucket spécifique pour plus de sécurité. Une fois enregistré, le remote B2 apparaît dans l'explorateur à côté de votre remote Azure.

Vous pouvez maintenant ouvrir les deux remotes distants côte à côte dans la vue double panneau. Faites glisser-déposer des fichiers individuels ou des arborescences de dossiers entières d'Azure vers B2 pour des transferts ponctuels. Pour les migrations de conteneurs volumineux, l'approche par tâche de synchronisation est plus fiable et reprenable en cas d'interruption.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Azure Blob to Backblaze B2 in RcloneView" class="img-large img-center" />

## Créer et planifier la tâche de synchronisation

Ouvrez le **Job Manager** et utilisez l'**Job Wizard** en quatre étapes pour créer une tâche de synchronisation avec Azure Blob comme source et Backblaze B2 comme destination. Lancez toujours d'abord un **dry run** — cela prévisualise tous les ajouts et suppressions sans toucher à vos données. Une fois satisfait de l'aperçu, lancez la synchronisation réelle.

Pour une redondance continue, les utilisateurs de la licence PLUS peuvent ajouter une **planification** pour exécuter automatiquement la synchronisation Azure vers B2 selon une cadence quotidienne ou hebdomadaire. Le panneau **Job History** enregistre chaque exécution avec le nombre de fichiers et les tailles de transfert, ce qui vous permet de vérifier que les sauvegardes se sont terminées avec succès et de répondre à toute exigence de conformité.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Azure Blob to Backblaze B2 sync in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez un remote distant **Azure Blob Storage** en utilisant votre nom et votre clé de compte de stockage.
3. Ajoutez un remote distant **Backblaze B2** en utilisant votre Application Key ID et votre Application Key.
4. Ouvrez les deux remotes distants dans l'explorateur à double panneau et utilisez l'**Job Wizard** pour créer une tâche de synchronisation.
5. Lancez d'abord un **dry run**, puis planifiez des synchronisations récurrentes avec une licence PLUS.

Synchroniser d'Azure Blob vers Backblaze B2 avec RcloneView est l'un des moyens les plus efficaces de construire une stratégie de sauvegarde cloud économique sans renoncer à la fiabilité.

---

**Guides associés :**

- [Gérer Azure Blob Storage — Synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/manage-azure-blob-storage-cloud-sync-rcloneview)
- [Gérer Backblaze B2 — Synchronisation et sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Migrer de OneDrive vers Backblaze B2 avec RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
