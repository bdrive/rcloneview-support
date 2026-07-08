---
slug: sync-google-drive-to-amazon-s3-rcloneview
title: "Synchroniser Google Drive vers Amazon S3 — Sauvegarde cloud automatisée avec RcloneView"
authors:
  - jay
description: "Synchronisez Google Drive vers Amazon S3 avec RcloneView. Configurez des tâches de sauvegarde automatisées de cloud à cloud, planifiez les transferts et suivez la progression depuis une seule interface graphique."
keywords:
  - Google Drive to Amazon S3
  - sync Google Drive to S3
  - backup Google Drive to S3
  - RcloneView Google Drive S3
  - cloud to cloud sync
  - Amazon S3 backup
  - Google Drive backup
  - automated cloud backup
  - cloud storage migration
  - rclone Google Drive S3
tags:
  - RcloneView
  - google-drive
  - amazon-s3
  - cloud-to-cloud
  - backup
  - cloud-sync
  - migration
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Google Drive vers Amazon S3 — Sauvegarde cloud automatisée avec RcloneView

> Sauvegarder Google Drive vers Amazon S3 crée une copie indépendante de vos données sur une infrastructure cloud distincte — RcloneView transforme cette tâche en un workflow que l'on configure une fois pour toutes.

Google Drive est excellent pour la collaboration, mais s'y fier comme unique copie de fichiers critiques est un risque que la plupart des équipes ne devraient pas prendre. Amazon S3 offre un stockage objet durable et abordable qui complète Google Drive comme destination de sauvegarde indépendante. Grâce au système de tâches piloté par interface graphique de RcloneView, une équipe de contenu gérant 200 Go de fichiers de projet partagés peut mettre en place des sauvegardes automatisées de cloud à cloud en quelques minutes — sans avoir besoin de commandes rclone.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurer Google Drive et Amazon S3 dans RcloneView

Les deux remotes doivent être configurés avant de créer la tâche de synchronisation. Dans RcloneView, cliquez sur **Remote tab > New Remote**. Pour Google Drive, sélectionnez-le dans la liste des fournisseurs — une fenêtre de navigateur s'ouvre pour l'authentification OAuth. Connectez-vous et accordez l'accès ; le remote est enregistré automatiquement, sans clé API à gérer manuellement.

Pour Amazon S3, sélectionnez **Amazon S3** comme fournisseur, puis saisissez votre **Access Key ID**, votre **Secret Access Key**, et la **Region** de votre bucket S3 (par ex. `us-east-1`). RcloneView stocke tous les identifiants en toute sécurité dans un stockage local chiffré. Une fois les deux remotes enregistrés, chacun apparaît sous forme d'onglet dans les panneaux de l'explorateur, prêt à être parcouru.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Amazon S3 remotes in RcloneView" class="img-large img-center" />

## Configurer la tâche de synchronisation cloud à cloud

Cliquez sur **Home tab > Sync** pour ouvrir l'assistant de configuration de tâche. Définissez Google Drive — ou un sous-dossier spécifique comme `My Drive/Projects` — comme source, et un préfixe de bucket S3 (par ex. `my-backup-bucket/google-drive/`) comme destination. Donnez à la tâche un nom descriptif, comme `gdrive-to-s3-daily`.

Dans **Advanced Settings**, activez la **vérification par checksum** pour comparer les fichiers par hash plutôt que par la seule taille — cela permet de détecter les fichiers qui partagent la même taille mais dont le contenu diffère à cause d'écrasements partiels. Définissez le nombre de transferts simultanés en fonction de votre capacité réseau ; 4 à 8 transferts conviennent à la plupart des connexions haut débit sans déclencher les limites de débit de Google Drive.

L'étape **Filtering** offre un contrôle précis sur ce qui est synchronisé : excluez les fichiers vidéo volumineux si vous n'avez besoin que de sauvegarder des documents, ou limitez-vous aux fichiers modifiés au cours des 90 derniers jours à l'aide du champ Max File Age.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Google Drive to Amazon S3 sync job in RcloneView" class="img-large img-center" />

## Exécuter et surveiller le transfert

Avant la première synchronisation complète, utilisez le **Dry Run** intégré pour prévisualiser exactement quels fichiers seront copiés ou supprimés sur la destination. Cela est particulièrement utile lors de la configuration initiale, lorsque le bucket S3 est vide et que vous souhaitez confirmer la configuration de la tâche avant de vous engager sur des gigaoctets de données.

Cliquez sur **Run** lorsque vous êtes prêt. L'onglet **Transferring** en bas de RcloneView affiche la progression en temps réel : vitesse, nombre de fichiers et pourcentage réalisé. Pour les grandes bibliothèques Google Drive comptant des dizaines de milliers de fichiers, la synchronisation initiale peut prendre plusieurs heures — les exécutions suivantes ne transfèrent que les fichiers modifiés et se terminent bien plus rapidement.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Google Drive to S3 transfer progress in RcloneView" class="img-large img-center" />

## Planifier des sauvegardes automatiques quotidiennes

Avec une **licence PLUS**, ouvrez la tâche dans **Job Manager** et ajoutez une planification à l'aide de l'interface de type cron — par exemple, tous les jours à 1h du matin. L'outil **Simulate Schedule** prévisualise les dix prochaines exécutions afin que vous puissiez confirmer que la sauvegarde se déclenche au bon moment. Une fois enregistrée, la sauvegarde s'exécute automatiquement, que la fenêtre de RcloneView soit ouverte ou non.

Après chaque exécution, **Job History** enregistre la durée, la vitesse de transfert, le nombre de fichiers et le statut d'achèvement, vous offrant une piste d'audit claire de chaque sauvegarde Google Drive poussée vers S3.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Google Drive to Amazon S3 backup in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez un remote Google Drive via une connexion OAuth sous **Remote tab > New Remote**.
3. Ajoutez un remote Amazon S3 avec votre AWS Access Key ID, votre Secret Key et la région du bucket.
4. Créez une tâche de synchronisation : source = dossier Google Drive, destination = préfixe de bucket S3, puis exécutez-la ou planifiez-la.

Vos données Google Drive sont désormais sauvegardées de manière indépendante sur l'infrastructure AWS — protégées contre les suppressions accidentelles, la suspension de compte ou les pannes de service sur l'une ou l'autre plateforme.

---

**Guides connexes :**

- [Sauvegarde incrémentielle : Google Drive vers Amazon S3 avec RcloneView](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)
- [Monter des buckets Amazon S3 comme lecteurs locaux avec RcloneView](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)
- [Automatiser les sauvegardes cloud quotidiennes avec RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
