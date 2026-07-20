---
slug: sync-nextcloud-to-google-drive-rcloneview
title: "Synchroniser Nextcloud avec Google Drive — Migrer et sauvegarder vos fichiers avec RcloneView"
authors:
  - tayson
description: "Découvrez comment synchroniser Nextcloud avec Google Drive grâce à RcloneView. Transférez vos fichiers depuis votre serveur Nextcloud auto-hébergé vers Google Drive avec une automatisation complète."
keywords:
  - synchronisation Nextcloud vers Google Drive
  - migrer Nextcloud Google Drive
  - RcloneView Nextcloud Google Drive
  - synchroniser cloud auto-hébergé vers Google Drive
  - synchronisation Nextcloud WebDAV RcloneView
  - sauvegarder Nextcloud vers Google Drive
  - migration cloud auto-hébergé RcloneView
  - transférer fichiers Nextcloud Google Drive
  - synchronisation automatisée Nextcloud Google Drive
  - RcloneView transfert cloud WebDAV
tags:
  - RcloneView
  - nextcloud
  - google-drive
  - cloud-to-cloud
  - migration
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Nextcloud avec Google Drive — Migrer et sauvegarder vos fichiers avec RcloneView

> Nextcloud vous donne un contrôle total sur vos données — RcloneView ajoute le pont vers Google Drive pour la redondance, la migration ou l'accès en équipe.

Nextcloud offre aux organisations la maîtrise de leur infrastructure de stockage, mais les données auto-hébergées ont tout de même besoin d'une copie externe. Synchroniser Nextcloud avec Google Drive grâce à RcloneView crée une seconde copie sur une grande plateforme cloud, sans script ni transferts de fichiers manuels. Que vous quittiez complètement une infrastructure auto-hébergée ou que vous mainteniez Nextcloud comme stockage principal avec Google Drive comme sauvegarde secondaire, RcloneView gère le transfert via une interface de synchronisation visuelle, planification incluse.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurer les deux remotes dans RcloneView

Vous devez configurer deux remotes avant de créer le job de synchronisation. Pour Google Drive, allez dans l'onglet **Remote**, cliquez sur **New Remote**, puis sélectionnez Google Drive — une fenêtre de navigateur s'ouvre pour l'authentification OAuth, sans clé API ni identifiants à gérer manuellement. Pour Nextcloud, sélectionnez **WebDAV** comme type de remote. Saisissez l'URL de votre serveur Nextcloud au format `https://your-nextcloud.example.com/remote.php/dav/files/username/`, ainsi que votre nom d'utilisateur et mot de passe Nextcloud (ou un mot de passe d'application si l'authentification à deux facteurs est activée sur votre compte).

<img src="/support/images/en/blog/new-remote.png" alt="Adding Nextcloud WebDAV and Google Drive remotes in RcloneView" class="img-large img-center" />

Une fois les deux remotes enregistrés, cliquez sur chacun depuis le panneau explorateur pour vérifier la connexion. Une connexion Nextcloud réussie affiche la structure de dossiers de votre répertoire personnel ; Google Drive affiche la racine de votre Drive. Si Nextcloud renvoie une erreur d'authentification, vérifiez que l'URL inclut bien le chemin WebDAV complet — omettre `/remote.php/dav/files/username/` est l'erreur de configuration la plus courante.

## Créer le job de synchronisation Nextcloud vers Google Drive

Une fois les deux remotes vérifiés, ouvrez **Job Manager** depuis l'onglet Home et créez un nouveau job **Sync**. À l'étape 1, définissez votre chemin Nextcloud comme source et votre dossier Google Drive comme destination. Vérifiez que le sens de synchronisation est réglé sur unidirectionnel (la source modifie uniquement la destination) — cela reflète le contenu de Nextcloud vers Google Drive sans altérer vos fichiers Nextcloud.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Nextcloud to Google Drive sync job in RcloneView" class="img-large img-center" />

À l'étape 2, configurez le nombre de transferts simultanés en fonction de la capacité d'upload de votre serveur. Pour de grandes bibliothèques Nextcloud — par exemple le dossier de projet partagé d'une équipe de design avec 200 Go de ressources — augmenter les transferts simultanés accélère le remplissage initial de la destination Google Drive. Activez la vérification par **checksum** lorsque l'intégrité des données est critique ; cela confirme que chaque fichier transféré correspond à la source par hachage du contenu, et pas seulement par taille de fichier.

## Filtrer les dossiers système et les métadonnées

Les serveurs Nextcloud accumulent des dossiers système, des caches de miniatures et des fichiers temporaires qui n'ont pas leur place dans un miroir Google Drive. À l'étape 3 de l'assistant de création de job, ajoutez des règles de filtrage pour exclure ces chemins. Des motifs comme `.nextcloud/` ou `.thumbs/` permettent d'ignorer les répertoires de métadonnées qui ajoutent du bruit à votre destination sans valeur ajoutée. Les préréglages de filtres prédéfinis de RcloneView pour les images, documents et vidéos vous permettent de limiter la synchronisation aux seuls types de fichiers qui intéressent votre équipe.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Nextcloud to Google Drive sync job in RcloneView" class="img-large img-center" />

Avant d'exécuter le job en conditions réelles, utilisez l'option **Dry Run** depuis le Job Manager pour prévisualiser toutes les opérations prévues. L'exécution à blanc liste chaque fichier à copier sans effectuer aucune modification — une vérification utile avant de lancer un transfert initial important.

## Automatiser la synchronisation selon un planning

Une fois l'exécution à blanc validée, enregistrez le job et — avec une licence PLUS — associez une planification à l'étape 4. Une planification de type cron nocturne maintient votre copie Google Drive à jour avec les modifications quotidiennes de Nextcloud, sans intervention manuelle. Les notifications de fin de synchronisation vous alertent à chaque exécution planifiée réussie.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Nextcloud to Google Drive sync in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez un remote **Google Drive** (connexion OAuth via navigateur) et un remote **Nextcloud** (URL WebDAV + identifiants) via New Remote.
3. Créez un job **Sync** avec votre chemin Nextcloud comme source et un dossier Google Drive comme destination.
4. Lancez une **Dry Run** pour vérifier le périmètre, puis enregistrez avec une planification pour une synchronisation continue automatisée.

Maintenir une copie synchronisée de vos données Nextcloud sur Google Drive garantit qu'une panne serveur ou une suppression accidentelle ne signifie jamais une perte de données définitive.

---

**Guides associés :**

- [Synchroniser Nextcloud avec Backblaze B2 grâce à RcloneView](https://rcloneview.com/support/blog/sync-nextcloud-to-backblaze-b2-rcloneview)
- [Gérer la synchronisation et la sauvegarde cloud de Nextcloud avec RcloneView](https://rcloneview.com/support/blog/manage-nextcloud-cloud-sync-backup-rcloneview)
- [Migrer Seafile vers Google Drive avec RcloneView](https://rcloneview.com/support/blog/migrate-seafile-to-google-drive-rcloneview)

<CloudSupportGrid />
