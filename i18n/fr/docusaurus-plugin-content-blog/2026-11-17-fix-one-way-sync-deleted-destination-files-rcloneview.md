---
slug: fix-one-way-sync-deleted-destination-files-rcloneview
title: "Corriger une synchronisation unidirectionnelle qui supprime les fichiers de destination — Protégez vos sauvegardes avec RcloneView"
authors:
  - casey
description: "Une synchronisation unidirectionnelle a supprimé des fichiers de votre sauvegarde ? Découvrez pourquoi et comment les tâches Copy, Dry Run et Folder Compare de RcloneView évitent les suppressions indésirables."
keywords:
  - synchronisation supprime fichiers destination
  - synchronisation unidirectionnelle supprime fichiers
  - rclone sync vs copy
  - éviter les suppressions de synchronisation
  - fichiers disparus sauvegarde cloud
  - RcloneView dry run
  - synchronisation miroir supprime fichiers
  - restaurer fichiers après synchronisation
  - dépannage RcloneView
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger une synchronisation unidirectionnelle qui supprime les fichiers de destination — Protégez vos sauvegardes avec RcloneView

> Si des fichiers ont disparu de votre sauvegarde après une synchronisation, la tâche a très probablement fait exactement ce pour quoi la synchronisation est conçue — voici comment choisir le bon type de tâche et prévisualiser les changements d'abord.

Une surprise fréquente : vous synchronisez un dossier de votre portable vers Backblaze B2, et d'anciens fichiers qui n'existaient que dans le bucket ont disparu. Ce n'est pas un bug. Une synchronisation unidirectionnelle aligne la destination sur la source, ce qui inclut la suppression des fichiers absents de la source. RcloneView vous donne les outils pour l'anticiper et choisir un type de tâche qui ne supprime jamais rien.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi la synchronisation unidirectionnelle supprime des fichiers

Dans l'assistant de synchronisation, le sens unidirectionnel est libellé **"Modifying destination only"**. Il laisse la source intacte et modifie la destination jusqu'à ce qu'elle reflète la source. Tout ce qui se trouve sur la destination sans équivalent dans la source est supprimé.

Déclencheurs typiques :

- **Mauvais dossier source.** Sélectionner `Projects/2026` au lieu de `Projects` fait paraître toutes les autres années « en trop » sur la destination.
- **Source nettoyée.** Vous avez supprimé d'anciens fichiers en local pour libérer de l'espace, en comptant sur la copie cloud pour les conserver comme archive.
- **Plusieurs sources, une destination.** Deux machines qui synchronisent vers le même dossier suppriment chacune les fichiers de l'autre.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job in RcloneView" class="img-large img-center" />

## Utilisez Copy quand la destination est une archive

Si la destination doit conserver tout ce qui lui a été envoyé, utilisez une tâche **Copy** plutôt que Sync. Le Job Manager propose les types de tâches Sync, Copy, Move, Delete, Download et Upload. Copy transfère les fichiers nouveaux et modifiés sans rien supprimer de la destination, ce qui convient à une archive photo ou à une sauvegarde de projet à long terme.

Réservez Sync aux véritables miroirs, comme un dossier de travail que vous voulez reproduire à l'identique sur un second cloud.

## Prévisualisez les suppressions avec Dry Run

Avant qu'une tâche de synchronisation nouvelle ou modifiée ne s'exécute pour de vrai, lancez un **Dry Run**. Il liste les fichiers qui seraient copiés et ceux qui seraient supprimés, sans rien modifier. Si la liste des suppressions contient des fichiers que vous comptez garder, arrêtez-vous et corrigez le chemin source ou passez à Copy.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job after checking the Dry Run preview in RcloneView" class="img-large img-center" />

## Vérifiez les différences avec Folder Compare

**Folder Compare** affiche deux dossiers côte à côte. Filtrez les fichiers right-only pour voir exactement ce qui existe sur la destination mais pas dans la source — les fichiers qu'une synchronisation supprimerait. Si certains comptent, utilisez **Copy left** pour les ramener dans la source avant de synchroniser, ou synchronisez vers un autre dossier pour les mettre à l'abri.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare showing destination-only files in RcloneView" class="img-large img-center" />

Contrairement aux outils qui se limitent au montage, RcloneView synchronise et compare aussi les dossiers — avec la FREE License.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez votre tâche existante dans le Job Manager et vérifiez les chemins source et destination.
3. Passez les tâches de type archive de Sync à Copy, et lancez un Dry Run sur chaque tâche de synchronisation que vous conservez.
4. Utilisez Folder Compare pour examiner les fichiers right-only, puis consultez le **Job History** après chaque exécution.

Si des fichiers ont déjà disparu, vérifiez d'abord la corbeille ou l'historique des versions de votre fournisseur, puis reconstruisez la tâche pour que cela ne se reproduise pas.

---

**Guides associés :**

- [Dry Run — Prévisualiser la synchronisation avant le transfert avec RcloneView](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [Récupérer des fichiers cloud supprimés par erreur avec RcloneView](https://rcloneview.com/support/blog/recover-accidentally-deleted-cloud-files-rcloneview)
- [Corriger les fichiers manquants après une synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />
