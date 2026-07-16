---
slug: mount-digitalocean-spaces-local-drive-rcloneview
title: "Monter DigitalOcean Spaces comme un lecteur local pour un accès facile aux fichiers avec RcloneView"
authors:
  - tayson
description: "Accédez à votre stockage d'objets DigitalOcean Spaces comme à un dossier classique — montez-le comme un lecteur local, glissez-déposez des fichiers et synchronisez avec d'autres clouds grâce à RcloneView."
keywords:
  - digitalocean spaces mount
  - digitalocean spaces local drive
  - spaces s3 compatible mount
  - digitalocean spaces gui
  - digitalocean spaces file manager
  - mount object storage local drive
  - digitalocean spaces sync
  - digitalocean spaces backup
  - spaces rclone gui
  - digitalocean spaces desktop
tags:
  - digitalocean-spaces
  - mount
  - s3-compatible
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Monter DigitalOcean Spaces comme un lecteur local pour un accès facile aux fichiers avec RcloneView

> DigitalOcean Spaces est idéal pour stocker des ressources, mais accéder aux fichiers via la console web est lent et pénible. Et si vous pouviez parcourir votre bucket Spaces comme un simple dossier sur votre bureau ?

DigitalOcean Spaces propose un stockage d'objets compatible S3 à prix abordable, mais le tableau de bord web n'est pas conçu pour la gestion quotidienne des fichiers. Uploader des dossiers, organiser des fichiers ou prévisualiser rapidement du contenu implique de constants allers-retours entre onglets de navigateur. RcloneView vous permet de monter n'importe quel bucket Spaces comme un lecteur local — parcourez, glissez-déposez et synchronisez vos fichiers aussi naturellement qu'avec votre système de fichiers local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi monter DigitalOcean Spaces en local ?

Spaces fonctionne bien comme stockage backend pour les applications, mais lorsque des humains doivent interagir directement avec lui :

- **La console web est lente** — Naviguer dans des buckets volumineux contenant des milliers de fichiers est fastidieux. Pas de renommage en masse, pas d'aperçu rapide, pas de glisser-déposer.
- **Les outils en ligne de commande imposent de mémoriser des commandes** — `s3cmd` et `aws s3` fonctionnent, mais tout le monde n'a pas envie de taper des commandes pour des opérations basiques sur les fichiers.
- **Aucune intégration native sur le bureau** — Contrairement à Dropbox ou Google Drive, Spaces n'a pas de client de synchronisation de bureau.

Monter Spaces comme un lecteur local résout ces trois problèmes. Votre bucket apparaît comme un dossier dans votre gestionnaire de fichiers — ouvrez des fichiers, copiez des dossiers, supprimez des éléments, tout avec des outils familiers.

## Configurer DigitalOcean Spaces comme un remote

Spaces étant compatible S3, la configuration dans RcloneView utilise le type de fournisseur S3 :

1. Ouvrez RcloneView et cliquez sur **Add Remote**.
2. Sélectionnez **Amazon S3** comme type de fournisseur (Spaces utilise l'API S3).
3. Choisissez **DigitalOcean Spaces** dans le menu déroulant des fournisseurs S3.
4. Saisissez vos identifiants :
   - **Access Key** et **Secret Key** issues de vos paramètres API DigitalOcean.
   - **Region** : votre région Spaces (par exemple, `nyc3`, `sfo3`, `ams3`, `sgp1`).
   - **Endpoint** : `https://{region}.digitaloceanspaces.com`
5. Enregistrez le remote — vos buckets Spaces sont désormais accessibles.

<img src="/support/images/en/blog/new-remote.png" alt="Add DigitalOcean Spaces as S3-compatible remote" class="img-large img-center" />

## Monter Spaces comme un lecteur local

Une fois connecté, monter votre bucket Spaces comme un lecteur local ne prend que quelques clics :

1. Accédez à votre remote Spaces dans l'Explorer.
2. Faites un clic droit sur le bucket ou le dossier que vous souhaitez monter.
3. Sélectionnez **Mount** dans le menu contextuel.
4. Choisissez un point de montage local (lettre de lecteur sous Windows, chemin de montage sur Mac/Linux).
5. Cliquez sur **Mount** — votre bucket Spaces apparaît désormais comme un lecteur local.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount DigitalOcean Spaces from Explorer" class="img-large img-center" />

Vous pouvez également utiliser le Mount Manager pour un contrôle plus fin des options de montage :

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure Spaces mount in Mount Manager" class="img-large img-center" />

### Ce que vous pouvez faire avec le lecteur monté

- **Ouvrir directement les fichiers** — Double-cliquez sur des images, documents ou vidéos pour les ouvrir dans vos applications par défaut.
- **Copier-coller** — Déplacez des fichiers entre votre système de fichiers local et Spaces à l'aide du gestionnaire de fichiers de votre OS.
- **Glisser-déposer** — Faites glisser des fichiers depuis votre bureau vers le lecteur monté.
- **Utiliser dans des applications** — Pointez des applications comme Photoshop, VS Code ou des logiciels de montage vidéo directement vers les fichiers du lecteur monté.

## Parcourir et gérer les fichiers

Même sans montage, l'Explorer à deux volets de RcloneView vous offre un gestionnaire de fichiers puissant pour Spaces :

- **Naviguer dans les buckets et dossiers** avec une navigation arborescente familière.
- **Glisser-déposer** des fichiers entre Spaces et n'importe quel autre remote (Google Drive, S3, disque local).
- **Créer, renommer et supprimer** des fichiers et dossiers.
- **Voir la taille et la date des fichiers** pour une gestion facilitée.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files to DigitalOcean Spaces" class="img-large img-center" />

## Synchroniser Spaces avec d'autres clouds

DigitalOcean Spaces n'existe pas de manière isolée. Les workflows courants incluent :

### Synchroniser Spaces ↔ AWS S3

Conservez une copie de sauvegarde de vos données Spaces sur AWS S3 (ou inversement) :

1. Créez une tâche de synchronisation avec Spaces comme source et S3 comme destination.
2. Planifiez son exécution chaque nuit.
3. Utilisez la [comparaison de dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents) pour vérifier que les deux côtés correspondent.

### Synchroniser Spaces ↔ dossier de développement local

Conservez une copie locale de vos ressources Spaces pour le développement :

1. Créez une tâche de synchronisation de Spaces vers un dossier local.
2. Effectuez vos modifications en local, puis synchronisez vers Spaces.

### Distribuer depuis Spaces vers plusieurs clouds

Utilisez les [tâches par lots (Batch Jobs)](https://rcloneview.com/support/blog/batch-jobs-run-multiple-cloud-tasks-rcloneview) de la v1.3 pour copier le contenu de Spaces vers Google Drive, OneDrive et S3 en une seule séquence automatisée.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sync DigitalOcean Spaces with other clouds" class="img-large img-center" />

## Automatiser les workflows Spaces

### Sauvegardes planifiées

Configurez une tâche de copie quotidienne depuis votre bucket Spaces vers un autre cloud ou un stockage local :

1. Créez la tâche dans le Job Manager.
2. Planifiez-la via la [planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution).
3. Recevez des notifications via [Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control) ou [Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control).

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule DigitalOcean Spaces sync jobs" class="img-large img-center" />

### Conseils de performance

- **Transferts parallèles** : 8–16 (Spaces gère bien la concurrence élevée).
- **Taille des blocs (chunk size)** : 64 Mo pour les fichiers volumineux.
- **Fast-list** : activez cette option pour un listage de répertoires plus rapide sur les buckets volumineux.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez Spaces** comme remote compatible S3 avec vos clés API.
3. **Montez** votre bucket comme lecteur local ou parcourez-le dans l'Explorer.
4. **Synchronisez ou sauvegardez** vers d'autres clouds avec des tâches planifiées.

Arrêtez de lutter avec la console web. Montez votre DigitalOcean Spaces comme un lecteur local et travaillez avec vos fichiers comme vous le faites avec tout le reste — depuis votre bureau.

---

**Guides connexes :**

- [Ajouter AWS S3 et les services compatibles S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Monter un stockage cloud comme lecteur local](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Parcourir et gérer les remotes](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Comparer le contenu de dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
