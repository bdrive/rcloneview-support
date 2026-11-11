---
slug: fix-sync-filters-not-excluding-files-rcloneview
title: "Corriger les filtres de synchronisation qui n'excluent pas les fichiers — Des règles d'exclusion correctes avec RcloneView"
authors:
  - jay
description: "Vos filtres de synchronisation n'excluent pas les fichiers ? Découvrez pourquoi les règles d'exclusion ratent des dossiers dans RcloneView, comment écrire des motifs corrects et les vérifier avec Dry Run."
keywords:
  - filtre de synchronisation ne fonctionne pas
  - exclure un dossier de la synchronisation cloud
  - filtre rclone n'exclut pas les fichiers
  - règles de filtre RcloneView
  - exclure le dossier .git de la synchronisation
  - règles d'exclusion de synchronisation cloud
  - filtre de taille maximale de fichier
  - tester un filtre avec dry run
  - dépannage de la synchronisation cloud sélective
tags:
  - RcloneView
  - troubleshooting
  - tips
  - filters
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les filtres de synchronisation qui n'excluent pas les fichiers — Des règles d'exclusion correctes avec RcloneView

> Si des fichiers que vous vouliez exclure apparaissent quand même à la destination, la cause tient généralement à l'ancrage du motif, pas à un filtre défaillant.

Un développeur synchronise un dossier de projets vers Backblaze B2 et ajoute une exclusion pour `.git`. Le lendemain matin, le bucket contient malgré tout des milliers d'objets Git. Les règles de filtre suivent la logique de correspondance de rclone : une barre oblique manquante suffit à changer ce que la règle cible. RcloneView place ces règles à l'étape Step 3 de l'assistant de synchronisation et propose Dry Run pour les tester avant que quoi que ce soit ne soit déplacé.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi une règle d'exclusion rate des fichiers

La plupart des problèmes de filtre viennent de l'ancrage. Un motif qui commence par `/` ne correspond qu'à partir de la racine de la source synchronisée. Un motif sans `/` correspond à n'importe quelle profondeur. Les exemples des paramètres de filtre de RcloneView illustrent la différence :

- `.iso` exclut les fichiers portant cette extension n'importe où dans l'arborescence.
- `/.git/*` exclut uniquement les fichiers situés directement dans le dossier `.git` à la racine de la source.
- `.git/` exclut tous les dossiers `.git` à n'importe quelle profondeur, ce que veulent la plupart des développeurs.

Si vous avez seulement écrit `/.git/*`, les dépôts imbriqués comme `client-a/app/.git` sont toujours synchronisés. Leurs sous-dossiers aussi, car `*` s'arrête à la limite du dossier. Passez à la règle de dossier non ancrée et les dépôts imbriqués disparaissent.

<img src="/support/images/en/blog/new-remote.png" alt="Ajouter un distant dans RcloneView avant de configurer les filtres de synchronisation" class="img-large img-center" />

La deuxième erreur fréquente est de choisir le mauvais dossier source. Les motifs ancrés à la racine sont relatifs au dossier choisi au Step 1 : remonter la source d'un niveau change donc ce qu'ils ciblent.

## Vérifier les autres paramètres de filtre

Les règles personnalisées ne sont pas les seuls filtres de l'assistant. Le Step 3 propose aussi **Max file size** (en Mo), **Max file age** (avec les unités `y`, `d`, `h`, `m`, `s`), **Max folder depth** et des filtres prédéfinis pour Music, Video, Image, Document, Google Docs et Box Docs. Ces réglages se combinent, si bien qu'une ancienne tâche copiée peut se comporter de façon inattendue.

Par exemple, une limite de profondeur de dossiers oubliée après un test fait que les sous-dossiers plus profonds sont ignorés sans avertissement. Avant de réécrire vos règles personnalisées, ouvrez la tâche dans Job Manager et supprimez toute limite inutile.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Vue de transfert cloud à cloud dans RcloneView avec des résultats de synchronisation filtrés" class="img-large img-center" />

## Valider la correction avec Dry Run et la comparaison

Ne testez jamais une modification de filtre sur des données réelles. Lancez d'abord la tâche en mode Dry Run. Il liste les fichiers qui seraient copiés et ceux qui seraient supprimés. Si des chemins exclus apparaissent encore dans la liste de copie, le motif est toujours incorrect.

N'oubliez pas que les fichiers exclus ne sont pas touchés non plus à la destination. Si des fichiers indésirables ont déjà atteint le bucket, une synchronisation unidirectionnelle avec le nouveau filtre les y laissera. Utilisez Folder Compare pour les retrouver, sélectionnez les dossiers `.git` superflus côté destination et supprimez-les à cet endroit. Avec la licence PLUS, Folder Compare with Filter applique les mêmes règles à la comparaison, de sorte que la vue n'affiche que ce que la tâche gère réellement.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare dans RcloneView affichant les fichiers présents d'un seul côté" class="img-large img-center" />

Une fois le Dry Run satisfaisant, exécutez la tâche et comparez le nombre de fichiers dans Job History avec l'aperçu du Dry Run.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History de RcloneView affichant les fichiers transférés après la correction des filtres" class="img-large img-center" />

## Pour commencer

Les tâches de synchronisation, les filtres, Dry Run et Folder Compare sont tous inclus dans la licence FREE.

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez Job Manager, modifiez la tâche et vérifiez le dossier source du Step 1 ainsi que les paramètres de filtre du Step 3.
3. Remplacez les motifs ancrés à la racine comme `/.git/*` par `.git/` lorsque le dossier peut apparaître à n'importe quelle profondeur.
4. Lancez un Dry Run, vérifiez que les chemins exclus ont disparu, puis nettoyez les restes avec Folder Compare.

Des règles de filtre précises gardent vos sauvegardes légères et tiennent les artefacts de build et les données de dépôt à l'écart de votre facture cloud.

---

**Guides associés :**

- [Les règles de filtre Rclone expliquées — Inclure et exclure](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [Dry Run — Prévisualiser la synchronisation avant le transfert](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [Folder Compare avec filtre](https://rcloneview.com/support/blog/folder-compare-with-filter-rcloneview)

<CloudSupportGrid />
