---
slug: create-empty-directories-sync-option-rcloneview
title: "Créer les répertoires vides — Conserver toute l'arborescence lors de la synchronisation dans RcloneView"
authors:
  - alex
description: "Utilisez l'option de synchronisation Create empty directories de RcloneView pour copier des arborescences complètes, y compris les dossiers de projet vides, entre le stockage cloud et les disques locaux."
keywords:
  - synchroniser les répertoires vides
  - rclone create empty src dirs
  - conserver l'arborescence synchronisation cloud
  - copier des dossiers vides vers le cloud
  - synchroniser les dossiers vides google drive
  - sauvegarde de modèles de dossiers
  - options de synchronisation RcloneView
  - rclone dossiers vides non copiés
  - répliquer une arborescence dans le cloud
tags:
  - RcloneView
  - feature
  - cloud-sync
  - file-management
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Créer les répertoires vides — Conserver toute l'arborescence lors de la synchronisation dans RcloneView

> Si l'organisation de vos dossiers compte autant que vos fichiers, cochez une seule case pour que les dossiers vides arrivent aussi à destination.

Par défaut, rclone copie des fichiers, pas des dossiers : un répertoire vide dans la source n'apparaît donc jamais à destination. C'est généralement sans importance, jusqu'au jour où vous restaurez une sauvegarde et constatez que les dossiers `/Invoices/2027`, `/Raw` et `/Exports` sur lesquels votre équipe s'appuie ont disparu. RcloneView expose ce comportement sous forme d'une seule option dans l'assistant de synchronisation, ce qui vous permet de conserver toute l'arborescence sans saisir de flags rclone.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi les dossiers vides disparaissent

rclone déplace des objets. Une tâche de synchronisation parcourt la source, trouve des fichiers et recrée le chemin de chaque fichier à destination. Un dossier qui ne contient aucun fichier ne produit rien à transférer, la tâche l'ignore donc. De nombreux services cloud, en particulier le stockage objet de type S3, ne stockent pas du tout les dossiers comme des objets distincts. Un « dossier » n'y est qu'un préfixe commun dans les noms de fichiers.

Cela piège ceux qui s'appuient sur des modèles de dossiers. Une société de production vidéo peut démarrer chaque projet avec un squelette `01_Footage`, `02_Audio`, `03_Graphics` et `04_Deliverables`. Un cabinet comptable peut créer un dossier par client et par année avant même l'arrivée des documents. Si ces squelettes vides ne sont pas synchronisés, les collaborateurs côté destination voient une organisation incomplète.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing a project folder tree between two cloud remotes in RcloneView" class="img-large img-center" />

## Activer Create empty directories

L'option se trouve dans **Step 1: Configure Storage** de l'assistant de synchronisation, à côté des réglages de source, de destination et de sens de synchronisation. Choisissez la source et la destination, puis cochez **Create empty directories**. À l'exécution de la tâche, RcloneView demande à rclone de recréer à destination les dossiers vides de la source, ce qui est l'équivalent graphique du flag rclone `--create-empty-src-dirs`.

Comme le réglage est enregistré avec la tâche, il s'applique à chaque exécution, que vous lanciez la tâche manuellement depuis Job Manager ou qu'une planification PLUS la déclenche. Il fonctionne aussi avec la synchronisation 1:N, de sorte que le même squelette de dossiers atteint chaque destination ajoutée.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a saved sync job with empty directory creation enabled in RcloneView" class="img-large img-center" />

## Combiner avec les filtres et le Dry Run

La création de dossiers vides fonctionne avec les filtres de Step 3. Si vous excluez `.git/` ou limitez la tâche avec **Max folder depth**, seuls les dossiers qui respectent ces règles sont créés. Lancez d'abord un **Dry Run** pour prévisualiser les opérations avant toute écriture. C'est particulièrement important pour la synchronisation unidirectionnelle, qui supprime aussi à destination les éléments qui n'existent plus dans la source.

Sur un stockage à base de buckets comme Amazon S3, Wasabi ou Backblaze B2, gardez des attentes réalistes. Ces backends n'ont pas de véritables répertoires, si bien que les dossiers vides peuvent ne pas persister comme sur Google Drive, OneDrive, Dropbox, SFTP ou un disque local.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare showing left-only folders after a sync in RcloneView" class="img-large img-center" />

Une fois la tâche terminée, ouvrez **Folder Compare** sur les deux mêmes emplacements pour vérifier le résultat côte à côte. La synchronisation et Folder Compare sont toutes deux disponibles avec la licence FREE.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez **Sync** depuis l'onglet Home et choisissez vos dossiers source et destination.
3. Cochez **Create empty directories** dans Step 1, puis définissez les filtres nécessaires dans Step 3.
4. Lancez un Dry Run, puis enregistrez la tâche et exécutez-la depuis Job Manager.

Lorsque les dossiers vides sont conservés, une restauration ou une migration revient avec l'organisation mise en place par votre équipe.

---

**Guides associés :**

- [Filtres Max Folder Depth et Max File Size](https://rcloneview.com/support/blog/max-folder-depth-file-size-filters-rcloneview)
- [Dry Run — Prévisualiser la synchronisation cloud avant le transfert](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [Corriger les filtres de synchronisation qui n'excluent pas les fichiers](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)

<CloudSupportGrid />
