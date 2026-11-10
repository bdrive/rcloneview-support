---
slug: migrate-box-to-cloudflare-r2-rcloneview
title: "Migrer Box vers Cloudflare R2 — Transférez vos fichiers avec RcloneView"
authors:
  - robin
description: "Migrez Box vers Cloudflare R2 avec RcloneView : connectez les deux remotes, simulez la copie avec un Dry Run, lancez un transfert cloud à cloud et vérifiez le résultat."
keywords:
  - migrer Box vers Cloudflare R2
  - transfert Box vers R2
  - migration cloud Box
  - sauvegarde Cloudflare R2
  - RcloneView
  - transfert cloud à cloud
  - Box vers stockage compatible S3
  - archive Box vers stockage objet
  - rclone GUI
tags:
  - RcloneView
  - box
  - s3-compatible
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer Box vers Cloudflare R2 — Transférez vos fichiers avec RcloneView

> Déplacez des années de contenu Box vers le stockage objet Cloudflare R2 sans rien télécharger sur votre propre disque.

Une équipe financière à l'étroit dans son offre Box, ou un service qui clôture d'anciens projets, souhaite souvent une archive en stockage objet à la place. RcloneView connecte Box et Cloudflare R2 côte à côte et copie directement de l'un à l'autre. Connectez S3, Azure ou Backblaze B2 en lecture/écriture complète avec la licence FREE, et il en va de même pour R2.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Box et Cloudflare R2

Box est un remote OAuth : RcloneView ouvre votre navigateur, vous vous connectez et le remote est créé sans clé d'API. Si votre entreprise utilise Box for Business, le remote nécessite `box_sub_type = enterprise`. Vérifiez-le en premier, car un remote de type personnel ne verra pas le contenu d'entreprise.

Cloudflare R2 utilise des identifiants. Créez un bucket R2 dans le tableau de bord Cloudflare, générez un jeton d'API avec l'autorisation Admin Read & Write, puis saisissez les informations du jeton et le point de terminaison de votre compte, `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`, dans la boîte de dialogue New Remote.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des remotes Box et Cloudflare R2 dans RcloneView" class="img-large img-center" />

## Planifier l'organisation des dossiers

Ouvrez Box dans un panneau Explorer et R2 dans l'autre. R2 est un stockage objet à plat ; décidez donc d'une structure de préfixes avant de copier : par exemple un dossier de premier niveau par service Box, puis les sous-dossiers d'origine en dessous. Utilisez Get Size sur les gros dossiers Box pour estimer le volume à déplacer.

Les Box Docs, comme Box Notes, ne sont pas des fichiers ordinaires. Les filtres prédéfinis de l'assistant de synchronisation incluent une option Box Docs, qui permet de les exclure si vous ne les voulez pas dans l'archive.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box et Cloudflare R2 côte à côte dans les panneaux Explorer de RcloneView" class="img-large img-center" />

## D'abord un Dry Run, puis la copie

Créez un job Copy plutôt qu'un job Sync pour la première passe, afin que rien ne soit jamais supprimé d'un côté ou de l'autre. Lancez-le d'abord en Dry Run : RcloneView liste les fichiers qu'il copierait sans les transférer, ce qui aide à repérer un dossier source erroné.

À l'étape Advanced Settings, augmentez le nombre de transferts de fichiers si vous avez beaucoup de petits fichiers, et activez la comparaison par checksum si vous voulez une correspondance par hash et taille. Lancez ensuite le job et suivez la progression dans l'onglet Transferring : le pourcentage, la vitesse et le nombre de fichiers sont mis à jour en direct.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Exécution du job de copie Box vers R2 dans RcloneView" class="img-large img-center" />

## Vérifier la migration

Une fois le job terminé, ouvrez Folder Compare avec Box à gauche et R2 à droite. Utilisez le filtre left-only pour voir ce qui n'est pas arrivé, et le filtre different-files pour repérer les écarts de taille. Job History conserve l'état, la durée, la taille totale et le nombre de fichiers de chaque exécution, ce qui constitue une preuve utile pour une piste d'audit.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare vérifiant la migration de Box vers R2" class="img-large img-center" />

## Premiers pas

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre remote Box (OAuth) et votre remote Cloudflare R2 (jeton d'API et point de terminaison).
3. Créez un job Copy d'un dossier Box vers un préfixe de bucket R2 et lancez un Dry Run.
4. Lancez le job, puis confirmez le résultat avec Folder Compare.

Déplacer du contenu Box vers R2 ne demande que quelques clics une fois les deux remotes connectés.

---

**Guides associés :**

- [Migrer Box vers AWS S3](https://rcloneview.com/support/blog/migrate-box-to-aws-s3-rcloneview)
- [Gérer le stockage Box avec RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Dry Run : prévisualiser la synchronisation avant le transfert](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
