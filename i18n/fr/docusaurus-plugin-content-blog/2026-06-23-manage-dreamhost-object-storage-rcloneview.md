---
slug: manage-dreamhost-object-storage-rcloneview
title: "Gérer DreamHost DreamObjects — Synchronisation et sauvegarde de fichiers avec RcloneView"
authors:
  - robin
description: "Connectez DreamHost DreamObjects à RcloneView pour une gestion visuelle des buckets compatibles S3, la synchronisation de fichiers et des sauvegardes automatisées sans écrire la moindre commande CLI."
keywords:
  - DreamHost DreamObjects
  - Stockage S3 DreamObjects
  - Sauvegarde cloud DreamHost
  - Gestion du stockage compatible S3
  - Synchroniser des fichiers vers DreamObjects
  - Stockage objet DreamHost RcloneView
  - Sauvegarde cloud pour développeurs web
  - Interface graphique de stockage cloud S3
  - Synchronisation de fichiers DreamHost
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

# Gérer DreamHost DreamObjects — Synchronisation et sauvegarde de fichiers avec RcloneView

> DreamHost DreamObjects est un stockage objet compatible S3 économique — RcloneView vous offre un moyen visuel de parcourir les buckets, de synchroniser des fichiers et de planifier des sauvegardes sans toucher à la ligne de commande.

DreamHost DreamObjects s'associe naturellement aux sites hébergés chez DreamHost : il stocke des sauvegardes, des ressources multimédias et des fichiers statiques sur du matériel redondant derrière une API compatible S3. Les équipes déjà hébergées chez DreamHost peuvent étendre cet investissement à des sauvegardes cloud structurées en connectant DreamObjects à RcloneView et en gérant tout depuis un explorateur de fichiers à deux volets. Connectez S3, Azure ou Backblaze B2 avec un accès en lecture/écriture complet dans la licence GRATUITE, et DreamObjects ne fait pas exception.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi DreamObjects mérite un flux de travail dédié

Les agences web qui gèrent des dizaines de projets clients accumulent des gigaoctets de médias téléchargés, d'exports de bases de données et d'artefacts de build nécessitant des copies hors site régulières. DreamObjects fournit cette cible hors site sans compte cloud séparé auprès d'un fournisseur qui ne connaît rien à l'hébergement. Stocker des exports nocturnes sur DreamObjects aux côtés du site en production signifie qu'en cas de migration ou de suppression accidentelle, la récupération se résume à récupérer les données auprès de la même relation fournisseur, sans jongler entre plusieurs prestataires.

Comme DreamObjects est compatible S3, RcloneView s'y connecte en utilisant le même type de remote S3 qu'il utilise pour Amazon S3, Cloudflare R2, Wasabi et des dizaines d'autres stockages objet. Si vous avez déjà configuré un remote de type S3 auparavant, le processus de configuration de DreamObjects vous sera immédiatement familier.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new DreamHost DreamObjects S3 remote in RcloneView using Access Key and endpoint credentials" class="img-large img-center" />

## Connecter DreamObjects à RcloneView

Ouvrez RcloneView et accédez à l'onglet **Remote**, puis cliquez sur **New Remote**. Sélectionnez le type de remote **S3** et saisissez votre Access Key ID DreamObjects, votre Secret Access Key et l'URL de point de terminaison (endpoint) du bucket depuis le panneau DreamHost. Après l'enregistrement, le nouveau remote apparaît dans le Remote Manager et devient immédiatement disponible sous forme de panneau dans l'Explorer.

Parcourir DreamObjects depuis l'Explorer donne l'impression de naviguer sur un disque local : noms de fichiers, tailles et dates de modification sont tous visibles. Vous pouvez créer des dossiers, téléverser des fichiers en les glissant depuis votre panneau local, supprimer des objets par clic droit et générer des liens publics pour les objets à partager. Il n'est plus nécessaire de se connecter au panneau web DreamHost à chaque fois que vous devez inspecter ou déplacer des fichiers.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files from a local folder into a DreamObjects bucket using RcloneView drag-and-drop upload" class="img-large img-center" />

## Synchronisation et sauvegarde vers DreamObjects

Pour des sauvegardes récurrentes, créez une tâche de synchronisation depuis l'assistant de l'onglet **Home**. Sélectionnez un dossier de projet local ou un autre remote cloud comme source, et le chemin de votre bucket DreamObjects comme destination. Avant de valider, activez **Dry Run** pour prévisualiser chaque fichier qui sera transféré — particulièrement utile lors d'une première synchronisation d'une grande bibliothèque multimédia, car l'aperçu détecte les fichiers surdimensionnés ou les problèmes de nommage sans déplacer aucune donnée.

Une fois satisfait, enregistrez la tâche dans le Job Manager et exécutez-la à la demande. Les utilisateurs de la licence PLUS peuvent associer une planification de type cron pour que les sauvegardes DreamObjects s'exécutent automatiquement chaque nuit. L'onglet **Job History** enregistre chaque exécution avec le nombre de fichiers, la vitesse de transfert, la taille totale et le statut final, fournissant une piste d'audit utile pour les rapports clients ou les revues de conformité.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to a DreamHost DreamObjects bucket from the RcloneView Job Manager" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history tab in RcloneView showing completed DreamObjects backup transfer records" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Allez dans **Remote** > **New Remote**, choisissez **S3**, et saisissez votre Access Key, Secret Key et endpoint DreamObjects depuis le panneau DreamHost.
3. Ouvrez le nouveau remote dans un panneau Explorer et glissez-y des fichiers pour les téléverser directement.
4. Créez une tâche de synchronisation dans l'onglet **Home**, exécutez d'abord un Dry Run, puis lancez-la et consultez les résultats dans **Job History**.

Des sauvegardes DreamObjects régulières protègent les projets web contre les suppressions accidentelles, les migrations d'hébergement et les pertes de données — sans nécessiter d'expertise en ligne de commande ni de dispositif de surveillance séparé.

---

**Guides connexes :**

- [Gérer la synchronisation cloud Cloudflare R2 avec RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Gérer Amazon S3 — Synchronisation et sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Gérer la synchronisation et la sauvegarde cloud Wasabi avec RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
