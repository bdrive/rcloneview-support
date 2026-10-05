---
slug: migrate-mega-to-cloudflare-r2-rcloneview
title: "Migrer Mega vers Cloudflare R2 — Transférer des fichiers avec RcloneView"
authors:
  - robin
description: "Migrez Mega vers Cloudflare R2 avec RcloneView : connectez les deux remotes, lancez un Dry Run, transférez de cloud à cloud et vérifiez avec Folder Compare."
keywords:
  - migrer Mega vers Cloudflare R2
  - transfert de Mega vers R2
  - sauvegarde de Mega vers R2
  - migration de cloud à cloud
  - stockage objet Cloudflare R2
  - stockage cloud Mega
  - RcloneView
  - rclone GUI
  - déplacer des fichiers depuis Mega
tags:
  - RcloneView
  - mega
  - cloudflare-r2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer Mega vers Cloudflare R2 — Transférer des fichiers avec RcloneView

> Déplacez une bibliothèque Mega vers des buckets Cloudflare R2 avec RcloneView, en prévisualisant le job avant son exécution.

Mega convient au stockage personnel, mais les projets qui ont besoin d'un accès par buckets, d'une API compatible S3 ou d'une séparation claire entre stockage et partage finissent souvent sur du stockage objet. RcloneView connecte Mega et Cloudflare R2 comme remotes et transfère de l'un à l'autre en un seul job, avec aperçus, suivi et historique de chaque exécution.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Mega et Cloudflare R2

Ouvrez New Remote et choisissez Mega. Il utilise des identifiants de compte : votre e-mail et votre mot de passe. Créez ensuite le remote R2. Dans le tableau de bord Cloudflare, créez un bucket et générez un jeton d'API avec les autorisations Admin Read & Write. RcloneView demande les identifiants du jeton, votre Account ID et l'endpoint, qui suit la forme `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des remotes Mega et Cloudflare R2 dans RcloneView" class="img-large img-center" />

RcloneView prend en charge plus de 90 services de stockage cloud sous Windows, macOS et Linux, et les deux remotes apparaissent côte à côte dans l'Explorer une fois enregistrés.

## Prévisualiser avant de transférer

Ouvrez deux panneaux Explorer, avec Mega à gauche et votre bucket R2 à droite. Faites glisser des dossiers pour une copie rapide, car le glisser-déposer entre remotes différents copie au lieu de déplacer. Pour une bibliothèque entière, utilisez plutôt l'assistant de synchronisation : choisissez le dossier Mega comme source et le bucket comme destination, puis lancez un Dry Run pour voir quels fichiers seraient copiés ou supprimés.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuration du job de transfert de Mega vers Cloudflare R2" class="img-large img-center" />

Prenons un monteur vidéo avec 800 Go d'archives de projet sur Mega. À l'étape Step 2, vous pouvez augmenter le nombre de transferts de fichiers pour de nombreux petits fichiers et activer la comparaison par somme de contrôle si vous souhaitez des vérifications de hash et de taille. Les filtres de Step 3 peuvent exclure des dossiers ou plafonner la taille des fichiers.

## Surveiller et vérifier

Une fois le job lancé, l'onglet Transferring affiche la progression, la vitesse et le nombre de fichiers, et vous pouvez annuler une exécution si nécessaire. Surveillez les erreurs et relancez le job si une session s'arrête prématurément. Job History conserve le statut, la durée, la taille et le nombre de fichiers.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Suivi d'un transfert de Mega vers R2 dans RcloneView" class="img-large img-center" />

Une fois terminé, ouvrez Folder Compare avec Mega d'un côté et R2 de l'autre. Les fichiers Left-only montrent ce qui manque dans le bucket, et vous pouvez les copier directement depuis la vue de comparaison.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare entre Mega et Cloudflare R2" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Mega avec votre e-mail et votre mot de passe, et Cloudflare R2 avec votre jeton d'API, votre Account ID et votre endpoint.
3. Créez un job de synchronisation de Mega vers le bucket R2 et lancez un Dry Run.
4. Démarrez le transfert, puis confirmez le résultat avec Folder Compare.

Une migration prévisualisée, avec une vérification finale par Folder Compare, vous permet de confirmer ce qui est arrivé dans R2.

---

**Guides associés :**

- [Gérer le stockage Mega — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [Gérer Cloudflare R2 — Synchronisation et sauvegarde avec RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Dry Run — Prévisualiser la synchronisation avant le transfert dans RcloneView](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
