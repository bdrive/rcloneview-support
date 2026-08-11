---
slug: manage-arvan-cloud-storage-sync-backup-rcloneview
title: "Gérer le stockage Arvan Cloud — Synchroniser et sauvegarder des fichiers avec RcloneView"
authors:
  - jay
description: "Connectez le stockage objet Arvan Cloud à RcloneView pour parcourir vos fichiers, synchroniser, sauvegarder et transférer entre clouds, le tout compatible S3."
keywords:
  - Arvan Cloud
  - Arvan Cloud RcloneView
  - stockage compatible S3
  - GUI de stockage objet
  - synchronisation Arvan Cloud
  - sauvegarde Arvan Cloud
  - gestionnaire de stockage cloud
  - transfert de fichiers Arvan Cloud
  - GUI multi-cloud
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage Arvan Cloud — Synchroniser et sauvegarder des fichiers avec RcloneView

> Parcourez, synchronisez et sauvegardez les buckets de stockage objet Arvan Cloud aux côtés de tous les autres distants que vous gérez, le tout depuis une seule fenêtre de bureau.

Le stockage objet d'Arvan Cloud utilise le protocole S3, ce qui signifie qu'il s'intègre directement à tout outil construit autour d'identifiants Access Key + Secret Key + Endpoint — y compris RcloneView. Plutôt que de jongler avec un client S3 séparé rien que pour ce fournisseur régional, vous pouvez l'ajouter comme distant et le traiter exactement comme Amazon S3, Wasabi ou tout autre stockage basé sur des buckets dans votre flux de travail existant.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Arvan Cloud comme distant compatible S3

Arvan Cloud est accessible via le backend S3 de rclone, la configuration suit donc le même schéma de saisie d'identifiants que tout autre service compatible S3 pris en charge par RcloneView : Access Key, Secret Key, et un endpoint personnalisé pointant vers le service de stockage objet d'Arvan. Il n'y a ici aucun flux OAuth par navigateur — vous générez la paire de clés depuis votre console Arvan Cloud et la collez directement dans l'assistant de nouveau distant.

Une fois le distant ajouté, il se comporte comme n'importe quel autre panneau de l'explorateur : navigation par arborescence de dossiers, aperçus en vignettes pour les buckets riches en images, et les mêmes opérations de fichiers par clic droit (copier, déplacer, renommer, obtenir la taille) que vous utiliseriez sur un disque local. RcloneView monte ET synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux, si bien qu'Arvan Cloud se place aux côtés de vos autres clouds plutôt que de vivre dans sa propre application cloisonnée.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout d'Arvan Cloud comme nouveau distant compatible S3 dans RcloneView" class="img-large img-center" />

Pour les équipes déjà standardisées sur des outils S3, cela signifie que les politiques de bucket, les préfixes et les structures de dossiers se transposent directement — rien dans le modèle de stockage objet ne change simplement parce que le fournisseur change.

## Synchroniser et sauvegarder les buckets Arvan Cloud

Une fois le distant connecté, utilisez l'assistant de synchronisation pour configurer une tâche unidirectionnelle qui reflète un dossier local — ou un autre distant cloud — vers un bucket Arvan Cloud. Réglez le nombre de transferts simultanés et de vérificateurs d'égalité à l'étape des paramètres avancés, et utilisez des filtres pour exclure les types de fichiers ou dossiers que vous ne souhaitez pas comptabiliser dans le volume de transfert, comme les images `.iso` ou les répertoires `.git` imbriqués.

Le Dry Run vous permet de prévisualiser exactement quels fichiers seront copiés ou supprimés avant de valider la tâche, ce qui compte le plus lors de votre première synchronisation vers un bucket existant dont vous n'êtes pas certain du contenu déjà présent.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuration d'une tâche de synchronisation vers un bucket de stockage Arvan Cloud dans RcloneView" class="img-large img-center" />

## Planifier des sauvegardes récurrentes

Une fois une tâche de synchronisation validée, enregistrez-la dans le Job Manager et, avec une licence PLUS, attachez-y une planification de type crontab afin que les sauvegardes vers Arvan Cloud s'exécutent automatiquement sans que vous ayez à les déclencher manuellement. L'historique des tâches (Job History) enregistre alors la durée, la vitesse de transfert, le nombre de fichiers et le statut d'achèvement de chaque exécution, vous donnant un relevé à consulter pour vérifier que les sauvegardes planifiées se sont réellement terminées.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planification d'une tâche de sauvegarde récurrente vers le stockage Arvan Cloud" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Générez une Access Key et une Secret Key depuis votre console de stockage objet Arvan Cloud.
3. Dans RcloneView, créez un nouveau distant compatible S3 en utilisant ces identifiants et l'endpoint d'Arvan Cloud.
4. Exécutez d'abord un Dry Run, puis enregistrez une tâche de synchronisation planifiée pour des sauvegardes continues.

Traiter Arvan Cloud comme un simple endpoint S3 de plus, c'est un outil spécialisé de moins à maintenir dans votre pile de stockage cloud.

---

**Guides connexes :**

- [Gérer le stockage Wasabi — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Gérer le stockage Selectel — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-selectel-cloud-sync-backup-rcloneview)
- [Corriger S3 Access Denied — Erreurs de permission avec RcloneView](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)

<CloudSupportGrid />
