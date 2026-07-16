---
slug: migrate-google-drive-to-backblaze-b2-rcloneview
title: "Migrer Google Drive vers Backblaze B2 — Transférer des fichiers avec RcloneView"
authors:
  - tayson
description: "Migrez Google Drive vers Backblaze B2 avec RcloneView — transférez des fichiers de cloud à cloud, archivez vos données à moindre coût et vérifiez la migration grâce à une interface graphique."
keywords:
  - Google Drive vers Backblaze B2
  - migrer Google Drive
  - sauvegarde Backblaze B2
  - outil de migration cloud
  - export Google Drive
  - migration RcloneView
  - transfert cloud à cloud
  - archivage S3 Google Drive
  - archivage Google Drive
  - stockage à froid Backblaze
tags:
  - google-drive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer Google Drive vers Backblaze B2 — Transférer des fichiers avec RcloneView

> Google Drive est conçu pour la collaboration, pas pour l'archivage à froid — RcloneView migre le contenu de votre Drive directement vers Backblaze B2 sans passer par votre disque local, ce qui réduit les coûts de stockage à grande échelle.

Google Drive excelle dans la collaboration en temps réel, mais il n'est pas conçu pour l'archivage à long terme à moindre coût et à grande échelle. Backblaze B2 propose un stockage d'objets compatible S3 à une fraction du coût de stockage de Google, ce qui en fait une destination privilégiée pour archiver de vastes ensembles de données, des projets vidéo et des documents professionnels qui n'exigent pas un accès quotidien. RcloneView gère la migration directement entre les deux clouds — aucun intermédiaire sur le disque local n'est nécessaire.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurer les deux distants

Dans RcloneView, ajoutez d'abord Google Drive — **onglet Distant > Nouveau distant > Google Drive** — et authentifiez-vous via OAuth dans le navigateur. Ajoutez ensuite Backblaze B2 : sélectionnez-le dans la liste des fournisseurs et saisissez votre Application Key ID et votre Application Key. Les deux distants deviennent actifs immédiatement.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

Ouvrez les deux distants côte à côte dans l'explorateur à double panneau de RcloneView. Cette vue directe est précieuse pour planifier la migration : vérifiez le contenu de vos dossiers Drive à gauche, confirmez la structure du bucket B2 cible à droite, et identifiez les dossiers à prioriser avant de lancer le transfert.

## Configurer la tâche de migration

Ouvrez le **Gestionnaire de tâches** et créez une nouvelle tâche de synchronisation ou de copie. Définissez la source sur votre dossier Google Drive (ou un sous-dossier spécifique pour une migration incrémentielle) et la destination sur le chemin de votre bucket Backblaze B2.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring Google Drive to Backblaze B2 migration job in RcloneView" class="img-large img-center" />

Pour les grandes migrations — une société de production vidéo déplaçant 2 To de projets terminés de Drive vers B2 — activez les transferts multi-thread et augmentez le nombre de fichiers simultanés dans les Paramètres avancés de la tâche. La fonction **Dry Run** (simulation) affiche précisément quels fichiers seront transférés avant l'exécution réelle de la tâche, évitant les écrasements accidentels ou les contenus oubliés. L'activation de la vérification par somme de contrôle garantit que chaque fichier arrive intact sur B2, ce qui est particulièrement important pour l'archivage, où les fichiers peuvent rester inaccessibles pendant des années.

## Vérification et nettoyage après la migration

Une fois le transfert terminé, utilisez la fonction **Comparaison de dossiers** de RcloneView pour comparer la source Google Drive à la destination B2. La vue de comparaison met en évidence les fichiers présents uniquement à gauche (pas encore migrés), les fichiers présents uniquement à droite (déjà sur B2) et les fichiers identiques — vous offrant une liste de contrôle claire et visuelle avant de supprimer quoi que ce soit de Drive.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Google Drive and Backblaze B2 after migration in RcloneView" class="img-large img-center" />

Relancer la tâche de migration une seconde fois après la comparaison est sans risque — rclone ignore les fichiers déjà présents à destination avec une taille et un horodatage identiques, si bien que seules les différences restantes sont transférées. Ce comportement idempotent rend les migrations à grande échelle fiables, même sur plusieurs sessions.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez un distant Google Drive (authentification OAuth dans le navigateur) et un distant Backblaze B2 (identifiants Application Key).
3. Ouvrez le **Gestionnaire de tâches** et créez une tâche de synchronisation ou de copie de Google Drive vers B2.
4. Activez le Dry Run pour prévisualiser, puis exécutez — utilisez la Comparaison de dossiers pour vérifier l'achèvement.

Migrer vers Backblaze B2 avec RcloneView élimine la complexité des frais de sortie cloud et vous offre une archive vérifiée et économique, sans écrire une seule commande CLI.

---

**Guides connexes :**

- [Migrer Backblaze B2 vers Google Drive avec RcloneView](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-google-drive-rcloneview)
- [Gérer le stockage cloud Backblaze B2 — Synchronisation et sauvegarde avec RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Sauvegarder Dropbox vers Backblaze B2 — Stockage abordable avec RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)

<CloudSupportGrid />
