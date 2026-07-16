---
slug: sync-hidrive-to-google-drive-rcloneview
title: "Synchroniser HiDrive avec Google Drive — Sauvegarde cloud avec RcloneView"
authors:
  - tayson
description: "Synchronisez votre stockage Strato HiDrive avec Google Drive grâce à RcloneView. Automatisez les sauvegardes cloud, transférez des fichiers directement entre fournisseurs et gardez les deux comptes synchronisés."
keywords:
  - sync HiDrive to Google Drive
  - HiDrive Google Drive sync RcloneView
  - Strato HiDrive backup to Google Drive
  - HiDrive cloud migration
  - move files HiDrive Google Drive
  - HiDrive sync tool GUI
  - Google Drive backup from HiDrive
  - RcloneView HiDrive sync
  - HiDrive file transfer tool
  - cloud to cloud sync HiDrive
tags:
  - RcloneView
  - hidrive
  - google-drive
  - cloud-to-cloud
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser HiDrive avec Google Drive — Sauvegarde cloud avec RcloneView

> RcloneView garde votre Strato HiDrive et votre Google Drive synchronisés automatiquement — transferts directs cloud à cloud avec tâches planifiées et suivi complet des transferts.

Strato HiDrive est largement utilisé dans les pays germanophones pour un stockage cloud sécurisé offrant une solide conformité RGPD. Les équipes qui utilisent HiDrive aux côtés de Google Workspace ont souvent besoin de synchroniser le contenu entre les deux plateformes — afin de garder les fichiers de projet accessibles depuis les deux environnements. RcloneView gère cette synchronisation de manière fiable, en se connectant aux deux fournisseurs et en exécutant des transferts automatisés selon le calendrier que vous définissez.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter HiDrive et Google Drive dans RcloneView

HiDrive et Google Drive utilisent tous deux une authentification basée sur OAuth dans RcloneView. Allez dans l'onglet Distant > Nouveau distant :

- **HiDrive :** Sélectionnez HiDrive et effectuez la connexion OAuth avec vos identifiants Strato HiDrive
- **Google Drive :** Sélectionnez Google Drive et effectuez l'authentification OAuth basée sur le navigateur

RcloneView stocke les jetons de manière sécurisée et les actualise automatiquement à leur expiration. Ouvrez les deux distants dans l'explorateur à double panneau pour parcourir ce qui existe de chaque côté avant de configurer la synchronisation.

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive and Google Drive remotes in RcloneView" class="img-large img-center" />

## Configurer la tâche de synchronisation HiDrive vers Google Drive

Créez une tâche de synchronisation dans l'assistant de RcloneView avec HiDrive comme source et un dossier Google Drive comme destination. Pour un cabinet de conseil qui stocke les livrables clients dans HiDrive et les partage via Google Workspace, une tâche de synchronisation quotidienne garantit que la copie sur Google Drive reste à jour après chaque journée de travail.

Dans les paramètres avancés, réglez le nombre de transferts simultanés en fonction de votre bande passante, et activez la vérification par **somme de contrôle (checksum)** si l'intégrité des données entre comptes est essentielle. Les options de filtre prédéfinies permettent d'exclure certains types de fichiers (par exemple, les caches de vignettes HiDrive ou les fichiers temporaires) de la synchronisation.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring HiDrive to Google Drive sync in RcloneView" class="img-large img-center" />

## Planifier des synchronisations automatisées (PLUS)

Avec une licence PLUS, planifiez l'exécution automatique de la tâche de synchronisation HiDrive vers Google Drive. Une configuration courante : synchroniser HiDrive vers Google Drive tous les soirs à 19 h pour capturer le travail de la journée. Utilisez la fonction **Simuler la planification** pour vérifier que votre expression cron produit les horaires d'exécution attendus avant de l'activer.

L'option Démarrage automatique de la planification au démarrage garantit que les tâches planifiées reprennent après le redémarrage d'une machine — un point important pour les tâches de synchronisation exécutées sur un poste de travail partagé.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling HiDrive to Google Drive sync in RcloneView" class="img-large img-center" />

## Suivre l'état et l'historique de la synchronisation

L'onglet Transfert de RcloneView affiche la progression de la synchronisation en temps réel. Une fois chaque synchronisation terminée, l'historique des tâches enregistre l'exécution : fichiers transférés, octets déplacés, vitesse et durée. Si l'API de Google Drive limite les requêtes lors d'une synchronisation volumineuse, le journal affiche les événements de nouvelle tentative — ce qui vous aide à ajuster les paramètres de transferts simultanés pour les tâches futures.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for HiDrive to Google Drive sync in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez HiDrive et Google Drive comme distants OAuth dans l'onglet Distant > Nouveau distant.
3. Créez une tâche de synchronisation ou de copie de HiDrive vers votre dossier Google Drive.
4. Planifiez des exécutions automatisées avec la licence PLUS et suivez la progression dans l'historique des tâches.

Garder HiDrive et Google Drive synchronisés est simple avec le moteur de synchronisation automatisé de RcloneView — les données se déplacent directement dans le cloud, sans étape manuelle requise.

---

**Guides associés :**

- [Gérer le stockage HiDrive — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [Gérer le stockage Google Drive — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Synchroniser HiDrive avec OneDrive avec RcloneView](https://rcloneview.com/support/blog/sync-hidrive-to-onedrive-rcloneview)

<CloudSupportGrid />
