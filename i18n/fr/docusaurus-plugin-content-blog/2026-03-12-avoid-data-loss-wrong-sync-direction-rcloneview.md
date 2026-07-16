---
slug: avoid-data-loss-wrong-sync-direction-rcloneview
title: "Comment la synchronisation peut supprimer vos fichiers — Éviter la perte de données due à un mauvais sens de synchronisation"
authors:
  - tayson
description: "Un mauvais sens de synchronisation peut effacer tous vos fichiers. Découvrez comment fonctionne rclone sync, pourquoi il supprime des fichiers, et comment utiliser le dry run et la comparaison de dossiers pour éviter les catastrophes."
keywords:
  - la synchronisation a supprimé mes fichiers
  - perte de données rclone sync
  - mauvais sens de synchronisation
  - synchronisation vs copie sécurisée
  - prévenir la perte de données lors de la synchronisation
  - synchronisation cloud a supprimé des fichiers
  - rclone dry run
  - synchronisation cloud sécurisée
  - sens de synchronisation incorrect
  - correction d'une erreur de synchronisation cloud
tags:
  - sync
  - data-loss
  - safety
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Comment la synchronisation peut supprimer vos fichiers — Éviter la perte de données due à un mauvais sens de synchronisation

> « J'ai lancé rclone sync et maintenant 500 Go de fichiers ont disparu. » C'est l'une des catastrophes les plus courantes du stockage cloud. La synchronisation est puissante — mais elle supprime. Voici comment l'utiliser en toute sécurité.

La synchronisation fait en sorte que la destination corresponde exactement à la source. Cela inclut la suppression des fichiers présents dans la destination mais absents de la source. Si vous inversez accidentellement la source et la destination, ou si vous synchronisez depuis un dossier vide, la synchronisation supprimera allègrement tout le contenu de la destination. Ce guide explique comment éviter cela.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Comment la synchronisation supprime des fichiers

```
Source: Folder A (3 files: doc1, doc2, doc3)
Destination: Folder B (5 files: doc1, doc2, doc3, report1, report2)

After Sync A → B:
Folder B: doc1, doc2, doc3
(report1 and report2 are DELETED)
```

La synchronisation a rendu B identique à A. Les fichiers propres à B ont été supprimés.

## Catastrophes courantes

### Source et destination inversées

Vous vouliez synchroniser `Cloud → NAS` mais vous avez tapé `NAS → Cloud`. Si le NAS est vide (nouveau disque), la synchronisation supprime tout le contenu du Cloud.

### Synchronisation depuis un dossier vide ou incorrect

Pointer la synchronisation vers un dossier source vide revient à dire « videz aussi la destination ».

### Règles de filtre incorrectes

Un filtre qui exclut tout fait apparaître la source comme vide aux yeux de la synchronisation. Tout le contenu de la destination est alors supprimé.

## Mesures de sécurité dans RcloneView

### 1) Toujours utiliser le Dry Run en premier

Le dry run vous montre exactement ce que la synchronisation va faire — sans réellement l'exécuter. Vérifiez la liste des fichiers qui seraient supprimés avant de valider.

### 2) Utiliser la comparaison de dossiers avant la synchronisation

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare before syncing" class="img-large img-center" />

Comparez la source et la destination. Regardez les fichiers « Right only » (présents uniquement à droite) — ce sont ceux que la synchronisation supprimerait. Êtes-vous prêt à les perdre ?

### 3) Utiliser Copy plutôt que Sync pour les sauvegardes

Copy ne supprime jamais. Si vous faites une sauvegarde, Copy est presque toujours le bon choix.

| Situation | Use Copy | Use Sync |
|-----------|:--------:|:--------:|
| Backup | ✅ | ❌ |
| Mirror (exact replica) | ❌ | ✅ |
| Initial migration | ✅ | ❌ |
| Ongoing replication | ❌ | ✅ (carefully) |

### 4) Vérifier deux fois la source et la destination

Dans l'explorateur à deux volets de RcloneView, identifiez clairement quel côté est la source et lequel est la destination avant de lancer une tâche.

### 5) Utiliser `--backup-dir`

Rclone prend en charge `--backup-dir` — les fichiers qui seraient supprimés sont déplacés vers un répertoire de sauvegarde au lieu d'être définitivement retirés. Cela vous offre un filet de sécurité.

## Récupération après une synchronisation accidentelle

Si vous avez déjà lancé une synchronisation malheureuse :

1. **Arrêtez immédiatement** — Ne relancez pas une autre synchronisation.
2. **Vérifiez la corbeille du fournisseur cloud** — Google Drive (30 jours), OneDrive (93 jours), Dropbox (30 à 180 jours).
3. **Vérifiez le versionnement** — Le versionnement S3 et B2 conserve les anciennes copies.
4. **Restaurez depuis une sauvegarde distincte** — Si vous disposez d'une sauvegarde réalisée avec Copy, vos fichiers y sont en sécurité.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Utilisez la comparaison de dossiers** avant toute opération de synchronisation.
3. **Lancez un Dry Run** pour prévisualiser les changements.
4. **Utilisez Copy pour les sauvegardes** — réservez Sync aux mises en miroir intentionnelles.
5. **Envisagez `--backup-dir`** pour les opérations de synchronisation comme filet de sécurité.

La synchronisation est un outil tranchant. Utilisez-la avec précaution.

---

**Guides connexes :**

- [Synchronisation vs Copie vs Déplacement expliqués](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)
- [Comparer le contenu des dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Récupérer des fichiers cloud supprimés accidentellement](https://rcloneview.com/support/blog/recover-accidentally-deleted-cloud-files-rcloneview)

<CloudSupportGrid />
