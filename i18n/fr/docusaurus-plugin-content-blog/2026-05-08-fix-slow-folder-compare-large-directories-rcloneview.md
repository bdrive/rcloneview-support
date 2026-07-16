---
slug: fix-slow-folder-compare-large-directories-rcloneview
title: "Corriger la lenteur de comparaison de dossiers pour les grands répertoires — Guide RcloneView"
authors:
  - jay
description: "Accélérez les opérations de comparaison de dossiers sur de grands répertoires dans RcloneView — concurrence des vérificateurs, règles de filtrage et stratégies pour comparer efficacement des millions de fichiers."
keywords:
  - slow folder compare RcloneView
  - fix slow cloud directory comparison
  - RcloneView folder compare large files
  - speed up cloud folder comparison
  - RcloneView compare performance
  - large directory cloud comparison
  - folder compare timeout fix
  - optimize RcloneView compare
tags:
  - folder-comparison
  - troubleshooting
  - tips
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger la lenteur de comparaison de dossiers pour les grands répertoires — Guide RcloneView

> Comparer des répertoires contenant des dizaines de milliers de fichiers peut être lent si vos paramètres ne sont pas optimisés. Voici comment ajuster la fonction Folder Compare de RcloneView pour les grands répertoires cloud.

La fonction Folder Compare de RcloneView est l'une de ses fonctionnalités les plus puissantes — elle indique précisément quels fichiers diffèrent entre deux emplacements, lesquels n'existent que d'un côté, et lesquels sont identiques. Mais comparer deux buckets S3 contenant 500 000 fichiers, ou un répertoire NAS avec une archive cloud, peut être extrêmement lent si la configuration n'est pas adaptée à la charge de travail. Ces ajustements permettent de réduire les temps de comparaison de plusieurs heures à quelques minutes.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Réduire le périmètre avec des filtres avant la comparaison

Le moyen le plus rapide d'accélérer une comparaison de dossiers est de réduire le nombre de fichiers comparés. Utilisez **Folder Compare with Filter** (licence PLUS) pour exclure les types de fichiers que vous n'avez pas besoin de vérifier — par exemple, exclure les fichiers `.tmp`, `.log` et `.DS_Store` qui n'affectent pas votre évaluation de l'intégrité des données. Vous pouvez également filtrer par nom de dossier pour ne comparer que des sous-répertoires spécifiques d'une grande arborescence.

La syntaxe de filtrage suit les règles de filtrage de rclone : `.tmp` exclut tout fichier portant cette extension, `/.git/*` exclut les fichiers d'un répertoire `.git` à la racine, et `/archive/` ignore tout un dossier de premier niveau. Appliquer ces règles avant de lancer la comparaison réduit considérablement le nombre d'éléments que rclone doit énumérer et hacher.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare with filter to reduce scope in RcloneView" class="img-large img-center" />

## Ajuster la concurrence des vérificateurs pour les backends lents

Les paramètres de tâche de RcloneView incluent **Number of equality checkers** (nombre de vérificateurs d'égalité), qui vaut 8 par défaut. Pour les backends cloud lents (ceux avec une latence élevée ou des limites strictes de taux d'API), cette valeur par défaut élevée peut entraîner un empilement des vérificateurs en attente de réponses de l'API, ce qui ralentit paradoxalement le processus. Pour des fournisseurs comme Google Drive, OneDrive ou des serveurs WebDAV lents, essayez de réduire le nombre de vérificateurs à 2–4.

À l'inverse, pour des backends compatibles S3 rapides comme Wasabi ou Cloudflare R2, augmenter le nombre de vérificateurs à 16 ou plus peut accélérer significativement le listage de grands buckets. Testez différentes valeurs — le réglage optimal varie selon le fournisseur et les conditions réseau.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring checker concurrency for folder compare in RcloneView" class="img-large img-center" />

## Utiliser le mode taille uniquement pour les premières passes

Par défaut, rclone compare les fichiers à la fois par taille et par date de modification. Pour une première passe rapide sur un très grand répertoire, vous pouvez utiliser la comparaison par taille uniquement afin d'identifier les écarts évidents (fichiers présents d'un côté mais pas de l'autre, ou fichiers de tailles clairement différentes) sans supporter le coût de la vérification par checksum.

Dans RcloneView, vous pouvez passer `--size-only` en tant que Global Rclone Flag dans **Settings → Embedded Rclone → Global Rclone Flags** pour une session de comparaison. Cela sacrifie un peu de précision au profit de la vitesse — utilisez ce mode pour de grands audits initiaux, puis effectuez une comparaison complète par checksum sur les fichiers suspects.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing folder compare history and timing in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Utilisez **Folder Compare with Filter** (PLUS) pour exclure les types de fichiers non pertinents avant la comparaison.
3. Réduisez la concurrence des vérificateurs à 2–4 pour les backends lents ; augmentez-la pour les fournisseurs S3 rapides.
4. Utilisez le mode taille uniquement pour des audits initiaux rapides de très grands répertoires.

Avec la bonne configuration, Folder Compare s'adapte à des millions de fichiers répartis sur différents fournisseurs cloud sans délais inutiles.

---

**Guides connexes :**

- [Guide de comparaison de dossiers — Détecter les différences avec RcloneView](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [Règles de filtrage et synchronisation sélective avec RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Vérifier l'intégrité des fichiers cloud avec RcloneView](https://rcloneview.com/support/blog/check-verify-cloud-file-integrity-rcloneview)

<CloudSupportGrid />
