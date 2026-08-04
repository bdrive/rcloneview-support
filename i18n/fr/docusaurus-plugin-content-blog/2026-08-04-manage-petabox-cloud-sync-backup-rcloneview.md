---
slug: manage-petabox-cloud-sync-backup-rcloneview
title: "Gérer le stockage Petabox — Synchronisez et sauvegardez vos fichiers avec RcloneView"
authors:
  - kai
description: "Connectez le stockage compatible S3 de Petabox à RcloneView pour parcourir, synchroniser, sauvegarder et monter de manière multiplateforme, aux côtés de plus de 90 autres fournisseurs cloud."
keywords:
  - Petabox
  - Petabox RcloneView
  - Synchronisation Petabox
  - Sauvegarde Petabox
  - Stockage compatible S3
  - Gérer Petabox
  - GUI de stockage d'objets
  - Stockage cloud Petabox
  - Gestionnaire cloud compatible S3
  - Petabox rclone
tags:
  - RcloneView
  - s3-compatible
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage Petabox — Synchronisez et sauvegardez vos fichiers avec RcloneView

> Parcourez, synchronisez et sauvegardez le stockage d'objets Petabox dans la même fenêtre que tous les autres clouds que vous utilisez — sans client S3 séparé.

Petabox est un service de stockage d'objets compatible S3, ce qui signifie qu'il s'intègre à RcloneView de la même manière qu'Amazon S3 ou Wasabi : via une clé d'accès, une clé secrète et un endpoint personnalisé. Une fois connecté, Petabox se comporte comme n'importe quel autre remote dans l'explorateur de fichiers de RcloneView — consultable, synchronisable et montable aux côtés de vos autres fournisseurs. C'est important pour les équipes qui ont choisi Petabox pour son économie de stockage d'objets, mais qui ont tout de même besoin d'une expérience de gestionnaire de fichiers classique plutôt que de la CLI AWS ou d'une console web limitée aux buckets.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Petabox en tant que remote compatible S3

L'ajout de Petabox suit le flux standard de RcloneView pour les remotes compatibles S3 : ouvrez « New Remote », choisissez le type compatible S3, puis saisissez votre Access Key ID Petabox, votre Secret Access Key et l'URL de l'endpoint du bucket depuis votre tableau de bord Petabox. RcloneView est fourni avec un binaire rclone intégré, il n'y a donc aucune étape d'installation séparée : les identifiants suffisent à faire apparaître le bucket dans l'explorateur de fichiers.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Petabox S3-compatible remote in RcloneView" class="img-large img-center" />

Une fois ajouté, Petabox apparaît comme un onglet dans le panneau de l'explorateur, tout comme Google Drive ou OneDrive. Contrairement aux navigateurs S3 limités au montage, RcloneView synchronise et compare également les dossiers avec Petabox — avec la licence FREE, sans achat séparé pour la synchronisation de base.

## Synchroniser Petabox avec d'autres fournisseurs cloud

Un cas d'usage courant de Petabox consiste à archiver des données actuellement hébergées chez un fournisseur plus coûteux, ou à mettre en miroir un bucket actif à des fins de redondance. L'assistant de synchronisation de RcloneView vous permet de définir Petabox comme source ou destination, avec des filtres par type de fichier, ancienneté et taille, afin que seules les données souhaitées soient déplacées.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Petabox object storage with another cloud provider in RcloneView" class="img-large img-center" />

Le mode simulation (Dry Run) prévisualise exactement ce qui sera copié ou supprimé avant que quoi que ce soit ne se produise — utile lorsqu'une synchronisation à sens unique pointe vers un bucket que vous ne voulez pas écraser accidentellement. La vue de comparaison (Compare) va plus loin en affichant les fichiers présents uniquement à gauche, uniquement à droite, ou de taille différente entre Petabox et un second remote avant que vous ne validiez une copie.

## Planifier des sauvegardes Petabox récurrentes

Pour une protection continue, enregistrez votre synchronisation Petabox comme un job dans Job Manager plutôt que de la relancer manuellement. Les utilisateurs de la licence PLUS peuvent y associer une planification de type crontab afin que les sauvegardes vers ou depuis Petabox s'exécutent automatiquement, Job History enregistrant le statut, la vitesse de transfert et le nombre de fichiers à chaque exécution.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Petabox backup job in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez « New Remote » et sélectionnez le type de stockage compatible S3 pour Petabox.
3. Saisissez votre Access Key, votre Secret Key et l'endpoint Petabox, puis parcourez le bucket.
4. Configurez un job de synchronisation ou de sauvegarde et, si nécessaire, associez une planification dans Job Manager.

La tarification du stockage d'objets de Petabox se combine bien avec la capacité de RcloneView à déplacer librement des données entre ce service et tout autre cloud que vous gérez déjà.

---

**Guides connexes :**

- [Gérer Cloudflare R2 — Synchronisez et sauvegardez vos fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Gérer le stockage Wasabi — Synchronisez et sauvegardez vos fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Monter des buckets Amazon S3 en tant que lecteurs locaux avec RcloneView](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)

<CloudSupportGrid />
