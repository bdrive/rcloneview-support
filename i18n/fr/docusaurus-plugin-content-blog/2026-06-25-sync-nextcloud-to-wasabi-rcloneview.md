---
slug: sync-nextcloud-to-wasabi-rcloneview
title: "Synchroniser Nextcloud vers Wasabi — Sauvegarde cloud avec RcloneView"
authors:
  - jay
description: "Synchronisez votre instance Nextcloud vers Wasabi S3 avec RcloneView — connectez des distants WebDAV et S3, automatisez des tâches de sauvegarde et protégez vos données auto-hébergées hors site."
keywords:
  - sync nextcloud to wasabi
  - nextcloud wasabi backup
  - nextcloud s3 backup gui
  - backup nextcloud to s3
  - nextcloud cloud backup rcloneview
  - wasabi s3 backup tool
  - webdav to s3 sync rcloneview
  - nextcloud off-site backup
  - rcloneview nextcloud wasabi
tags:
  - RcloneView
  - nextcloud
  - wasabi
  - cloud-sync
  - backup
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Nextcloud vers Wasabi — Sauvegarde cloud avec RcloneView

> Une instance Nextcloud auto-hébergée a besoin d'une sauvegarde hors site — RcloneView simplifie la synchronisation de vos dossiers Nextcloud vers le stockage Wasabi S3 et la rend entièrement automatisable.

Un serveur Nextcloud auto-hébergé vous donne le contrôle de vos fichiers, mais ce contrôle s'accompagne d'une responsabilité : si le serveur tombe en panne, est touché par un rançongiciel, ou si son disque se dégrade, vos données disparaissent avec lui. Synchroniser vers Wasabi vous offre une copie hors site durable, sans surprise sur les coûts de transfert. RcloneView se connecte à Nextcloud via WebDAV et à Wasabi via le protocole S3, puis vous permet de créer des tâches de synchronisation fiables entre les deux — sans ligne de commande.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter votre instance Nextcloud en tant que distant

Ouvrez RcloneView et allez dans **Remote tab > New Remote**. Sélectionnez **WebDAV** comme type de distant et choisissez **Nextcloud** comme fournisseur. Saisissez l'URL de votre serveur Nextcloud au format `https://cloud.yourdomain.com/remote.php/dav/files/username/`, ainsi que votre nom d'utilisateur Nextcloud et soit votre mot de passe de compte, soit un mot de passe spécifique à l'application généré depuis les paramètres de sécurité de Nextcloud. Enregistrez le distant, il apparaîtra alors comme une source consultable dans l'explorateur de fichiers.

Contrairement aux outils qui se limitent au montage, RcloneView synchronise directement des sources WebDAV comme Nextcloud vers des destinations compatibles S3 comme Wasabi — entièrement avec la licence FREE.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Nextcloud as a WebDAV remote in RcloneView" class="img-large img-center" />

Une fois connecté, parcourez vos répertoires Nextcloud pour confirmer que la liaison fonctionne. Vous pouvez inspecter les noms de fichiers, les tailles et les dates de modification — utile pour décider quels dossiers inclure dans une tâche de sauvegarde et quels répertoires internes de Nextcloud (comme `trashbin`) exclure.

## Ajouter Wasabi comme distant compatible S3

Depuis **Remote tab > New Remote**, sélectionnez à nouveau **Amazon S3** et choisissez **Wasabi** comme fournisseur. Saisissez votre Access Key ID et votre Secret Access Key Wasabi, sélectionnez le point de terminaison de région correspondant (par exemple, `s3.us-east-1.wasabisys.com`), et indiquez le bucket cible. Après l'enregistrement, RcloneView peut ouvrir votre bucket Wasabi dans un second panneau d'exploration à côté de Nextcloud — vous pouvez glisser des fichiers individuels entre les deux pour vérifier la connexion avant de lancer une synchronisation complète.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Nextcloud and Wasabi remotes open side by side for cloud-to-cloud backup in RcloneView" class="img-large img-center" />

L'API de Wasabi, compatible S3, signifie que RcloneView la traite de manière identique à Amazon S3, de sorte que toutes les opérations de synchronisation, copie, déplacement et filtrage fonctionnent sans configuration supplémentaire.

## Configurer la tâche de synchronisation

Cliquez sur **Sync** depuis l'onglet Accueil pour ouvrir l'assistant de tâche en 4 étapes. À l'étape 1, définissez votre dossier Nextcloud comme source et votre bucket Wasabi (ou un sous-dossier comme `nextcloud-backup/`) comme destination. Donnez à la tâche un nom explicite, tel que `nextcloud-to-wasabi-daily`.

À l'étape 2, augmentez le nombre de transferts parallèles si votre connexion le permet — cela accélère la synchronisation du grand nombre de petits fichiers typique de Nextcloud. Activez la **vérification par somme de contrôle** pour comparer les hachages de fichiers plutôt que simplement les tailles, ce qui permet de détecter toute corruption survenue lors d'un envoi partiel précédent. À l'étape 3, ajoutez des règles de filtrage pour exclure le dossier `trashbin` de Nextcloud ainsi que tout fichier temporaire d'envoi fragmenté, afin que la sauvegarde reste propre.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Nextcloud to Wasabi sync job in RcloneView" class="img-large img-center" />

Avec une licence PLUS, l'étape 4 vous permet d'ajouter une planification de type crontab — chaque nuit à 2 h, par exemple — afin que la sauvegarde s'exécute sans déclenchement manuel. Le planificateur prend en charge des jours de semaine spécifiques, des intervalles mensuels et des plages basées sur des pas.

## Consulter l'historique des transferts

Après chaque exécution, l'onglet **Job History** enregistre chaque exécution : heure de début, durée, statut (Completed / Errored / Canceled), volume total transféré et vitesse de transfert. Ce journal est le premier endroit à consulter si une sauvegarde semble s'être arrêtée ou avoir manqué des fichiers, ce qui permet de vérifier facilement si les données Nextcloud arrivent bien dans Wasabi comme prévu.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log showing completed Nextcloud to Wasabi backup runs" class="img-large img-center" />

Pour les opérations gérant plusieurs instances Nextcloud ou sauvegardant vers des buckets Wasabi situés dans différentes régions pour la géo-redondance, la synchronisation 1:N de RcloneView vous permet de définir une source contre plusieurs destinations et de les exécuter ensemble dans une seule tâche.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre serveur Nextcloud comme distant WebDAV (Remote tab > New Remote > WebDAV > fournisseur Nextcloud).
3. Ajoutez Wasabi comme distant compatible S3 avec votre Access Key, Secret Key, point de terminaison de région et nom de bucket.
4. Créez une tâche de synchronisation avec Nextcloud comme source et votre bucket Wasabi comme destination — activez la vérification par somme de contrôle à l'étape 2 pour des sauvegardes à intégrité garantie.

Vos données Nextcloud auto-hébergées disposeront d'une copie hors site fiable sur Wasabi, s'exécutant automatiquement sans aucun script en ligne de commande.

---

**Guides connexes :**

- [Gérer la synchronisation et la sauvegarde cloud Nextcloud avec RcloneView](https://rcloneview.com/support/blog/manage-nextcloud-cloud-sync-backup-rcloneview)
- [Gérer la synchronisation et la sauvegarde cloud Wasabi avec RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Synchroniser Nextcloud vers Backblaze B2 avec RcloneView](https://rcloneview.com/support/blog/sync-nextcloud-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
