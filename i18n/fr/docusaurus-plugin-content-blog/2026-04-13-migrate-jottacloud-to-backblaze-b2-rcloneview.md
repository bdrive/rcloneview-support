---
slug: migrate-jottacloud-to-backblaze-b2-rcloneview
title: "Migrer de Jottacloud vers Backblaze B2 — Transférer des fichiers avec RcloneView"
authors:
  - tayson
description: "Migrez vos fichiers de Jottacloud vers Backblaze B2 avec RcloneView. Transférez votre stockage cloud norvégien vers un stockage objet compatible S3 abordable, directement."
keywords:
  - Jottacloud to Backblaze B2
  - migrate Jottacloud
  - Jottacloud migration
  - Backblaze B2 migration
  - cloud-to-cloud transfer
  - Jottacloud RcloneView
  - Backblaze B2 backup
  - cloud storage migration
  - Norwegian cloud storage
  - RcloneView transfer
tags:
  - jottacloud
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Jottacloud vers Backblaze B2 — Transférer des fichiers avec RcloneView

> Déplacez vos fichiers Jottacloud vers le stockage objet Backblaze B2 avec RcloneView — migration directe de cloud à cloud, sans téléchargement intermédiaire local requis.

Jottacloud est un service de stockage cloud norvégien fortement axé sur la confidentialité, utilisé par des particuliers et des entreprises à travers la Scandinavie et l'Europe. À mesure que les besoins de stockage augmentent, certains utilisateurs migrent vers Backblaze B2 pour son API compatible S3, son accès programmatique et ses options de stockage à plusieurs niveaux mieux adaptées aux grandes archives ou aux workflows de développeurs. RcloneView connecte les deux services et gère le transfert directement — aucun disque dur local n'est nécessaire comme intermédiaire.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurer Jottacloud et Backblaze B2

Ajouter les deux remotes à RcloneView ne prend que quelques minutes. Pour Jottacloud, ouvrez l'onglet Remote, cliquez sur New Remote, et sélectionnez Jottacloud dans la liste des fournisseurs. La configuration utilise les identifiants de votre compte Jottacloud. Pour Backblaze B2, sélectionnez Backblaze B2 et saisissez votre Application Key ID et votre Application Key — générés depuis votre compte Backblaze sous App Keys. Les deux remotes apparaissent ensuite comme des arborescences de fichiers accessibles dans les panneaux Explorer.

Parcourez vos dossiers Jottacloud pour identifier le contenu que vous souhaitez déplacer. Jottacloud organise les fichiers en appareils et dossiers — comprenez bien la structure avant de créer votre tâche de migration afin de sélectionner le bon chemin source.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Jottacloud and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Exécuter la migration

Créez une tâche de synchronisation avec le dossier Jottacloud comme source et un bucket Backblaze B2 comme destination. Si vous n'avez pas encore de bucket de destination, vous pouvez en créer un directement dans la console de Backblaze avant de lancer la migration. L'étape Advanced Settings de l'assistant Sync permet de configurer les transferts de fichiers simultanés et d'activer la vérification par checksum — cette dernière confirme que chaque fichier est arrivé intact, ce qui est précieux pour les grandes archives photo ou vidéo.

Pour un photographe migrant 500 Go de fichiers RAW Jottacloud vers Backblaze B2, l'étape Filtering rend les migrations en plusieurs phases plus gérables. Filtrez par extension de fichier (`.raw`, `.cr3`, `.arw`) pour migrer d'abord les fichiers issus de l'appareil photo, puis traitez les autres types de contenus lors de tâches suivantes. Les filtres d'âge maximal des fichiers permettent de prioriser les travaux récents avant d'archiver les contenus plus anciens.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Jottacloud files to Backblaze B2 with RcloneView" class="img-large img-center" />

Utilisez toujours Dry Run avant de lancer une migration en production. La simulation liste chaque fichier qui serait copié ou supprimé, afin que vous puissiez vérifier que la portée correspond à votre intention avant de valider.

## Valider la migration effectuée

Une fois le transfert terminé, utilisez Folder Compare pour valider l'exhaustivité de la migration. Sélectionnez le dossier source Jottacloud et la destination Backblaze B2, et la vue de comparaison met en évidence les fichiers qui n'existent que d'un seul côté ou qui diffèrent en taille. Cela permet de détecter les fichiers manquants ou les transferts tronqués qui pourraient autrement passer inaperçus dans une migration de grande ampleur.

Le panneau Job History affiche la durée, le nombre de fichiers, le volume total de données déplacées et le statut final de chaque exécution de migration. Si une exécution a été interrompue — par un problème réseau ou une mise en veille du système — vous pouvez relancer la tâche de synchronisation, et le comportement incrémental de rclone fait que seuls les fichiers manquants ou modifiés sont retransférés.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Jottacloud to Backblaze B2 migration job history in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Jottacloud comme remote en utilisant les identifiants de votre compte Jottacloud.
3. Ajoutez Backblaze B2 en utilisant votre Application Key ID et votre Application Key.
4. Lancez Dry Run pour prévisualiser, puis exécutez la synchronisation pour migrer les fichiers vers votre bucket B2.

Migrer de Jottacloud vers Backblaze B2 via RcloneView est incrémental, reprenable et entièrement piloté par l'interface graphique — aucun script requis.

---

**Guides associés :**

- [Gérer la synchronisation et la sauvegarde cloud Jottacloud avec RcloneView](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Sauvegarder Dropbox vers Backblaze B2 avec RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [Migrer de Wasabi vers Backblaze B2 avec RcloneView](https://rcloneview.com/support/blog/migrate-wasabi-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
