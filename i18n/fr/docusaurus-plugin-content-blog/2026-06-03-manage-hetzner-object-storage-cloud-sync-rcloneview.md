---
slug: manage-hetzner-object-storage-cloud-sync-rcloneview
title: "Gérer Hetzner Object Storage — Synchronisation et sauvegarde de fichiers avec RcloneView"
authors:
  - kai
description: "Découvrez comment connecter Hetzner Object Storage à RcloneView pour automatiser la synchronisation et la sauvegarde. Gérez des buckets compatibles S3 avec une interface graphique simple — sans CLI."
keywords:
  - Hetzner Object Storage
  - sauvegarde cloud Hetzner
  - RcloneView Hetzner
  - stockage cloud compatible S3
  - synchronisation de fichiers Hetzner
  - interface graphique de sauvegarde cloud
  - Hetzner rclone
  - sauvegarde de stockage objet
  - stockage cloud européen
  - gestion de buckets Hetzner
tags:
  - RcloneView
  - hetzner
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer Hetzner Object Storage — Synchronisation et sauvegarde de fichiers avec RcloneView

> Connectez Hetzner Object Storage à RcloneView et automatisez vos tâches de sauvegarde sans écrire la moindre commande CLI.

Hetzner Object Storage est un service de stockage cloud compatible S3 qui propose des tarifs compétitifs pour les équipes ayant besoin d'un stockage de données fiable et basé en Europe. Que vous archiviez des fichiers de projet, sauvegardiez des snapshots de serveur ou répliquiez des données depuis un autre cloud, RcloneView vous offre une interface visuelle pour tout gérer. Vous configurez Hetzner de la même manière que n'importe quel fournisseur compatible S3 — avec une clé d'accès, une clé secrète et le endpoint de votre bucket — puis vous gérez le tout via le même explorateur de fichiers à double panneau que vous utilisez pour tous vos autres remotes.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Hetzner Object Storage à RcloneView

Hetzner Object Storage utilise le protocole S3, donc la configuration dans RcloneView suit le même schéma qu'Amazon S3 ou Wasabi. Ouvrez l'onglet **Remote** et cliquez sur **New Remote**. Dans la liste des fournisseurs, sélectionnez **S3** puis choisissez **Hetzner** comme fournisseur. Vous aurez besoin de trois informations depuis la Hetzner Cloud Console : votre **Access Key ID**, votre **Secret Access Key**, et l'**URL du endpoint** pour la région choisie — par exemple `fsn1.your-objectstorage.com` pour la région de Falkenstein.

Une fois vos identifiants et le endpoint de région saisis, cliquez sur **Save**. RcloneView établit la connexion et vos buckets Hetzner apparaissent immédiatement comme des dossiers navigables dans l'explorateur de fichiers.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Hetzner Object Storage remote in RcloneView" class="img-large img-center" />

Une fois connecté, vous pouvez parcourir les buckets, envoyer des fichiers par glisser-déposer, télécharger des objets, renommer des éléments, supprimer des fichiers et créer de nouveaux dossiers — le tout sans toucher à un terminal. La barre de chemin (fil d'Ariane) affiche votre position actuelle dans la hiérarchie du bucket, et le pied de page résume le nombre total de fichiers et la taille pour tout répertoire sélectionné.

## Envoyer et organiser les fichiers

L'explorateur à double panneau de RcloneView facilite le déplacement de données entre Hetzner Object Storage et votre machine locale ou un autre cloud. Ouvrez votre disque local dans le panneau de gauche et votre remote Hetzner dans le panneau de droite, puis faites glisser les fichiers d'un panneau à l'autre. Pour les envois depuis l'Explorateur Windows, vous pouvez glisser des fichiers directement dans le panneau de RcloneView et ils atterrissent dans votre bucket Hetzner en une seule étape.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files to Hetzner Object Storage in RcloneView" class="img-large img-center" />

Pour les jeux de données volumineux — par exemple une société de production média sauvegardant 500 Go de rendus — les paramètres de **transfert multi-thread** dans l'assistant de synchronisation vous permettent de pousser davantage de données en parallèle. La valeur par défaut de 4 flux simultanés convient à la plupart des connexions, mais l'augmenter pour de gros fichiers sur des liaisons à haut débit peut réduire sensiblement le temps de transfert.

## Exécuter des tâches de synchronisation et de sauvegarde

Pour les flux de sauvegarde continus, le **Job Manager** de RcloneView vous offre une liste persistante de tâches de synchronisation configurées, que vous pouvez exécuter à la demande ou selon un planning. Ouvrez-le depuis l'onglet **Home** et cliquez sur **Add Job** pour lancer l'assistant de synchronisation en 4 étapes :

1. **Étape 1 :** Définissez votre source (un dossier local ou un autre remote) et votre destination (votre bucket Hetzner ou un sous-répertoire de celui-ci), puis nommez la tâche
2. **Étape 2 :** Configurez les paramètres de concurrence — nombre de transferts de fichiers, nombre de threads, et activation ou non de la vérification par checksum pour les contrôles d'intégrité
3. **Étape 3 :** Ajoutez des règles de filtrage pour exclure les types de fichiers ou les chemins que vous ne souhaitez pas voir sur Hetzner, comme les fichiers `.tmp` ou les répertoires `/cache/`
4. **Étape 4 (licence PLUS) :** Définissez un planning au format crontab pour que la sauvegarde s'exécute automatiquement à un intervalle défini

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Hetzner Object Storage in RcloneView" class="img-large img-center" />

Avant de valider une nouvelle tâche, utilisez l'option **Dry Run** pour prévisualiser exactement quels fichiers seraient copiés ou supprimés. C'est particulièrement utile la première fois que vous configurez une synchronisation, ou chaque fois que vous modifiez des règles de filtrage, afin de vous assurer que rien d'important n'est exclu.

## Consulter l'historique des transferts

Une fois les tâches exécutées, la vue **Job History** enregistre chaque exécution : heure de début, durée, taille totale transférée, vitesse moyenne, nombre de fichiers et statut final. Pour les équipes exécutant des sauvegardes nocturnes vers Hetzner Object Storage, ce journal fournit une piste d'audit claire montrant quelles exécutions se sont terminées correctement et lesquelles ont rencontré des erreurs — utile à la fois pour le dépannage et pour démontrer la conformité aux politiques de rétention des données.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Hetzner Object Storage sync in RcloneView" class="img-large img-center" />

Les filtres de l'historique vous permettent d'affiner les résultats par plage de dates (aujourd'hui, hier, la semaine dernière, le mois dernier), afin de retrouver rapidement l'enregistrement d'une fenêtre de sauvegarde spécifique sans faire défiler tout le journal.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Allez dans **Remote tab > New Remote**, sélectionnez **S3**, puis choisissez **Hetzner** comme fournisseur.
3. Saisissez votre Access Key ID Hetzner, votre Secret Access Key et le endpoint de région depuis la Hetzner Cloud Console.
4. Ouvrez le **Job Manager**, créez une tâche de synchronisation avec votre bucket Hetzner comme destination, puis cliquez sur **Run Job**.

Avec Hetzner Object Storage connecté, vous bénéficiez d'un stockage objet européen fiable, entièrement géré depuis une interface graphique claire — sans aucune commande rclone requise.

---

**Guides connexes :**

- [Gérer Hetzner Storage Box — Synchronisation et sauvegarde avec RcloneView](https://rcloneview.com/support/blog/manage-hetzner-storage-box-sync-rcloneview)
- [Gérer Wasabi Cloud Storage — Synchronisation et sauvegarde de fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Gérer Cloudflare R2 — Synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)

<CloudSupportGrid />
