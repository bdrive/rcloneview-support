---
slug: manage-digitalocean-spaces-cloud-sync-backup-rcloneview
title: "Gérer DigitalOcean Spaces — Synchronisation et sauvegarde de fichiers avec RcloneView"
authors:
  - tayson
description: "Connectez DigitalOcean Spaces à RcloneView et gérez votre stockage d'objets avec une interface graphique. Synchronisez, sauvegardez et transférez des fichiers entre régions sans commandes CLI."
keywords:
  - DigitalOcean Spaces RcloneView
  - synchronisation DigitalOcean Spaces
  - sauvegarde DigitalOcean Spaces
  - interface graphique stockage d'objets compatible S3
  - gestion DigitalOcean Spaces
  - rclone DigitalOcean Spaces
  - synchronisation stockage d'objets cloud
  - outil de sauvegarde DigitalOcean
tags:
  - digitalocean-spaces
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer DigitalOcean Spaces — Synchronisation et sauvegarde de fichiers avec RcloneView

> RcloneView se connecte à DigitalOcean Spaces via une API compatible S3, vous offrant un gestionnaire de fichiers visuel pour vos buckets de stockage d'objets, quelle que soit la région.

DigitalOcean Spaces est un service de stockage d'objets convivial pour les développeurs, avec un modèle de tarification forfaitaire et un CDN intégré. Les équipes qui exécutent des charges de travail sur des Droplets DigitalOcean stockent souvent des sauvegardes, des ressources statiques et des artefacts de déploiement dans Spaces. RcloneView ajoute une couche graphique par-dessus le backend compatible S3 de rclone, ce qui vous permet de parcourir visuellement les buckets, d'exécuter des synchronisations planifiées et de comparer des répertoires locaux avec le stockage distant — le tout sans toucher à la CLI.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurer DigitalOcean Spaces dans RcloneView

DigitalOcean Spaces utilise des API compatibles S3, vous le configurez donc comme un distant S3 dans RcloneView. Accédez à **Onglet Distant → Nouveau distant → Amazon S3 Compatible**, puis sélectionnez **DigitalOcean Spaces** comme fournisseur. Vous aurez besoin de :

- **Access Key ID** — généré dans le panneau de contrôle DigitalOcean sous API → Spaces Keys
- **Secret Access Key** — affiché une seule fois lors de la génération
- **Endpoint** — spécifique à la région, par exemple `nyc3.digitaloceanspaces.com`

Une fois enregistrés, vos buckets Spaces apparaissent immédiatement dans le panneau Explorateur. Vous pouvez parcourir le contenu des buckets, téléverser des fichiers par glisser-déposer depuis des dossiers locaux, et ouvrir des panneaux côte à côte pour comparer le répertoire de sauvegarde d'un Droplet avec le bucket Spaces.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring DigitalOcean Spaces as an S3 remote in RcloneView" class="img-large img-center" />

## Synchroniser des serveurs locaux vers DigitalOcean Spaces

Un cas d'usage typique : une équipe de développement génère des artefacts de build sur un serveur CI et souhaite les transférer chaque nuit vers Spaces pour un stockage à long terme. Grâce au Gestionnaire de tâches de RcloneView, créez une tâche de synchronisation depuis le répertoire d'artefacts local vers `do-spaces:artifacts-bucket/builds`. Définissez la planification à 3h00, activez la vérification par somme de contrôle, et ajoutez un filtre de taille de fichier maximale pour exclure les fichiers temporaires de plus de 500 Mo.

L'option de synchronisation 1:N vous permet de refléter le même répertoire d'artefacts simultanément vers DigitalOcean Spaces et Amazon S3 — utile pour les équipes qui maintiennent une redondance multi-région ou qui migrent entre fournisseurs de stockage.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a DigitalOcean Spaces sync job in real time" class="img-large img-center" />

## Transferts inter-régions et inter-fournisseurs

Lorsque vous devez déplacer des données entre régions Spaces (par exemple, de `nyc3` vers `sfo3`) ou migrer entièrement vers un autre fournisseur compatible S3, RcloneView le traite comme un transfert direct de cloud à cloud. Ouvrez deux panneaux Explorateur — l'un pointant vers le bucket Spaces source et l'autre vers la destination — puis glissez-déposez ou utilisez l'assistant de synchronisation.

Pour les migrations volumineuses, réglez **Nombre de transferts de fichiers** entre 8 et 16 à l'étape 2 de l'assistant de synchronisation pour maximiser le débit. Le moniteur de transfert en temps réel de RcloneView affiche la progression par fichier et la vitesse globale, vous permettant d'estimer le temps d'achèvement pour de grands ensembles de données.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer between DigitalOcean Spaces and Amazon S3 in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Générez une clé d'accès Spaces dans le panneau de contrôle DigitalOcean.
3. Créez un nouveau distant S3 dans RcloneView avec vos identifiants Spaces et votre endpoint.
4. Créez une tâche de synchronisation dans le Gestionnaire de tâches ciblant votre bucket Spaces et définissez une planification.

DigitalOcean Spaces devient ainsi une cible de sauvegarde entièrement gérée et planifiée — avec surveillance en temps réel et historique des tâches réunis dans une seule interface.

---

**Guides associés :**

- [Migrer Google Drive vers DigitalOcean Spaces avec RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-digitalocean-spaces-rcloneview)
- [Monter DigitalOcean Spaces comme un lecteur local avec RcloneView](https://rcloneview.com/support/blog/mount-digitalocean-spaces-local-drive-rcloneview)
- [Centraliser S3, Wasabi et R2 avec RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
