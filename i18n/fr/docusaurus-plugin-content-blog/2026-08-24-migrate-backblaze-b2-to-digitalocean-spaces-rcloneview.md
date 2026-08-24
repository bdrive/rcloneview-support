---
slug: migrate-backblaze-b2-to-digitalocean-spaces-rcloneview
title: "Migrer de Backblaze B2 vers DigitalOcean Spaces — Transférer des fichiers avec RcloneView"
authors:
  - kai
description: "Migrez des fichiers de Backblaze B2 vers DigitalOcean Spaces avec RcloneView grâce à des transferts vérifiés par somme de contrôle, des filtres et des aperçus Dry Run."
keywords:
  - migrer Backblaze B2 vers DigitalOcean Spaces
  - transfert de Backblaze vers DigitalOcean
  - migration de stockage d'objets RcloneView
  - migration de B2 vers Spaces
  - migration cloud compatible S3
  - configuration de DigitalOcean Spaces
  - de Backblaze B2 vers Spaces
  - changement de fournisseur de stockage cloud
tags:
  - RcloneView
  - backblaze-b2
  - digitalocean-spaces
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Backblaze B2 vers DigitalOcean Spaces — Transférer des fichiers avec RcloneView

> Déplacer du stockage d'objets entre deux fournisseurs compatibles S3 ne nécessite pas d'écrire des commandes rclone à la main — RcloneView gère le transfert, la vérification et le filtrage via son interface graphique.

Les équipes qui passent de Backblaze B2 à DigitalOcean Spaces le font généralement pour consolider leur infrastructure chez un seul fournisseur, aux côtés de Droplets ou de services App Platform déjà existants. Comme les deux sont des distants compatibles S3, RcloneView peut se connecter à chacun avec un Access Key, un Secret Key et un endpoint, puis transférer les données directement entre eux sans passer d'abord par un disque local. Pour des buckets contenant des centaines de gigaoctets de sauvegardes d'applications ou de ressources média, ce chemin direct de cloud à cloud fait gagner un temps considérable par rapport à un flux de téléchargement puis de mise en ligne.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurer les deux distants

Ajoutez votre distant Backblaze B2 en utilisant l'Application Key ID et l'Application Key du tableau de bord B2, puis ajoutez un distant séparé pour DigitalOcean Spaces avec son propre Access Key, Secret Key et endpoint régional (par exemple `nyc3.digitaloceanspaces.com`). Les deux apparaissent sous forme d'onglets dans les panneaux Explorer de RcloneView, ce qui permet de parcourir côte à côte le bucket source et le Space de destination avant de lancer tout transfert.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 and DigitalOcean Spaces remotes in RcloneView" class="img-large img-center" />

Utilisez une disposition en panneaux divisés pour visualiser les deux buckets à la fois, en confirmant que la structure des dossiers et les conventions de nommage correspondent à ce qu'attend votre application avant de vous engager dans une migration complète.

## Effectuer un transfert vérifié par somme de contrôle

Configurez la migration comme une tâche Copy ou Sync avec la comparaison par somme de contrôle activée à l'étape 2 de l'assistant — cela compare les fichiers par hash et par taille plutôt que par simples horodatages, ce qui compte lors d'une migration entre deux backends de stockage différents pouvant signaler des dates de modification différentes. Réglez le nombre de transferts de fichiers et de transferts multi-thread en fonction de votre bande passante ; quatre transferts simultanés constituent un bon point de départ pour les gros buckets.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a checksum-verified transfer from Backblaze B2 to DigitalOcean Spaces" class="img-large img-center" />

Avant de lancer la migration complète, utilisez Dry Run pour prévisualiser exactement les fichiers qui seraient copiés — cela permet de repérer les conflits de noms ou un nombre de fichiers inattendu avant tout déplacement de données. S3, Azure et Backblaze B2 peuvent être connectés avec un accès complet en lecture/écriture dès la licence FREE, donc aucune restriction de niveau ne bloque ce chemin de migration.

## Planifier la bascule

Pour une migration par phases, exécutez une synchronisation complète initiale suivie de synchronisations incrémentales planifiées (licence PLUS) qui captent tout fichier ajouté à Backblaze B2 avant la bascule finale. Cela permet de garder les deux buckets synchronisés pendant la période de transition, au lieu de nécessiter un unique transfert important et risqué.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling incremental sync jobs during a Backblaze B2 to DigitalOcean Spaces migration" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez des distants à la fois pour votre bucket Backblaze B2 et pour la destination DigitalOcean Spaces.
3. Exécutez un Dry Run pour prévisualiser le transfert avant de copier des fichiers.
4. Exécutez la tâche Copy ou Sync avec la vérification par somme de contrôle activée, puis confirmez que le nombre de fichiers correspond des deux côtés.

Une migration directe et vérifiée de cloud à cloud garantit que vos données arrivent intactes sur DigitalOcean Spaces, sans jamais transiter par une machine locale.

---

**Guides associés :**

- [Gérer le stockage Backblaze B2 — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Migrer de Backblaze B2 vers AWS S3 — Transférer des fichiers avec RcloneView](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-aws-s3-rcloneview)
- [Migrer Google Drive vers DigitalOcean Spaces avec RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-digitalocean-spaces-rcloneview)

<CloudSupportGrid />
