---
slug: rclone-filter-rules-include-exclude-explained-rcloneview
title: "Règles de filtrage rclone expliquées : motifs d'inclusion et d'exclusion pour des synchronisations plus intelligentes"
authors:
  - tayson
description: "Maîtrisez les règles de filtrage de rclone pour ne synchroniser que ce dont vous avez besoin. Découvrez les motifs include, exclude, filter-from et min/max size/age — avec des exemples pratiques pour RcloneView."
keywords:
  - rclone filter rules
  - rclone include exclude
  - rclone exclude folder
  - rclone filter from file
  - rclone sync specific files
  - rclone ignore files
  - rclone exclude pattern
  - rclone filter examples
  - rclone min size max size
  - rclone selective sync
tags:
  - rclone
  - filters
  - sync
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Règles de filtrage rclone expliquées : motifs d'inclusion et d'exclusion pour des synchronisations plus intelligentes

> Tout synchroniser est un gaspillage. Synchroniser les mauvaises choses est dangereux. Les règles de filtrage de rclone vous permettent de contrôler précisément ce qui est transféré — mais la syntaxe peut prêter à confusion. Ce guide décortique tout cela avec des exemples pratiques.

Lorsque vous synchronisez ou copiez des fichiers entre clouds, vous ne voulez rarement tout transférer. Vous avez peut-être besoin uniquement des fichiers `.pdf`, ou de tout sauf des fichiers `.tmp`, ou des fichiers modifiés au cours des 7 derniers jours, ou des fichiers de moins de 100 Mo. Le système de filtrage de rclone gère tout cela — et RcloneView vous permet de configurer ces filtres visuellement dans les paramètres de vos tâches.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Comment fonctionnent les filtres rclone

Rclone traite les règles de filtrage **dans l'ordre, de haut en bas**. Pour chaque fichier, il vérifie les règles une par une :

1. Si une règle correspond, le fichier est inclus ou exclu (selon la règle).
2. Si aucune règle ne correspond, le fichier est **inclus par défaut**.

Ce comportement du « premier match gagne » est essentiel à comprendre. L'ordre compte.

## Motifs de base

### Exclure des fichiers ou dossiers spécifiques

```
--exclude "*.tmp"
--exclude "node_modules/**"
--exclude ".DS_Store"
```

Ces motifs excluent :
- Tous les fichiers `.tmp` où qu'ils soient dans l'arborescence.
- Le dossier `node_modules` entier et son contenu.
- Tous les fichiers `.DS_Store` (métadonnées macOS).

### Inclure uniquement des fichiers spécifiques

```
--include "*.pdf"
--include "*.docx"
```

Lorsque vous utilisez `--include`, rclone **exclut automatiquement tout le reste**. Ainsi, `--include "*.pdf"` signifie « ne synchroniser que les PDF, rien d'autre ».

### Combiner include et exclude

```
--include "*.jpg"
--include "*.png"
--exclude "*"
```

Ceci inclut explicitement uniquement les fichiers JPG et PNG. Le `--exclude "*"` final capture tout le reste.

## Le flag --filter

Le flag `--filter` combine inclusion et exclusion en une seule règle :

```
--filter "+ *.pdf"
--filter "+ *.docx"
--filter "- *"
```

Le préfixe `+` signifie inclure, `-` signifie exclure. C'est équivalent à des flags `--include` et `--exclude` séparés, mais plus compact.

## Fichier Filter-From

Pour des ensembles de règles complexes, placez vos filtres dans un fichier :

```
--filter-from /path/to/filters.txt
```

**filters.txt :**
```
# Include documents
+ *.pdf
+ *.docx
+ *.xlsx

# Include images
+ *.jpg
+ *.png

# Exclude everything else
- *
```

Les lignes commençant par `#` sont des commentaires. C'est l'approche recommandée pour toute tâche de synchronisation comportant plus de 2 à 3 règles.

## Filtres de répertoire

### Exclure un répertoire spécifique

```
--exclude "backup/**"
```

Le `**` signifie « ce répertoire et tout ce qu'il contient ».

### Inclure uniquement un répertoire spécifique

```
--include "/projects/**"
--exclude "*"
```

Ceci synchronise uniquement le dossier `projects` situé à la racine.

### Exclure des répertoires par motif

```
--exclude ".git/**"
--exclude "__pycache__/**"
--exclude "node_modules/**"
```

Courant pour les développeurs qui synchronisent des dépôts de code — pour ignorer les dossiers de contrôle de version et de dépendances.

## Filtres de taille

### Taille minimale de fichier

```
--min-size 1M
```

Ignore les fichiers plus petits que 1 Mo. Utile pour ignorer les miniatures ou les petits fichiers de cache.

### Taille maximale de fichier

```
--max-size 100M
```

Ignore les fichiers plus grands que 100 Mo. Utile lorsque vous voulez des documents mais pas des fichiers vidéo.

### Unités de taille

- `k` ou `K` — Kilo-octets
- `M` — Méga-octets
- `G` — Giga-octets

Exemple : `--min-size 500k --max-size 2G` synchronise les fichiers entre 500 Ko et 2 Go.

## Filtres d'âge

### Fichiers récents uniquement

```
--max-age 7d
```

Synchronise uniquement les fichiers modifiés au cours des 7 derniers jours. Idéal pour les sauvegardes incrémentielles de projets actifs.

### Fichiers anciens uniquement

```
--min-age 30d
```

Synchronise uniquement les fichiers qui n'ont pas changé depuis 30 jours. Utile pour archiver des données obsolètes.

### Unités d'âge

- `ms` — Millisecondes
- `s` — Secondes
- `m` — Minutes
- `h` — Heures
- `d` — Jours
- `w` — Semaines
- `M` — Mois
- `y` — Années

## Exemples pratiques

### Exemple 1 : Sauvegarder uniquement les documents

Synchronisez les PDF, documents Word et feuilles de calcul depuis Google Drive vers Backblaze B2 :

```
--include "*.pdf"
--include "*.docx"
--include "*.xlsx"
--include "*.pptx"
--exclude "*"
```

### Exemple 2 : Ignorer les fichiers vidéo volumineux

Synchronisez tout sauf les fichiers vidéo de plus de 500 Mo :

```
--exclude "*.mp4"
--exclude "*.mov"
--exclude "*.avi"
--exclude "*.mkv"
```

Ou utilisez le filtrage par taille : `--max-size 500M`

### Exemple 3 : Synchronisation de projet développeur

Synchronisez un projet de code sans les dépendances ni les artefacts de compilation :

```
--exclude "node_modules/**"
--exclude ".git/**"
--exclude "__pycache__/**"
--exclude "dist/**"
--exclude "build/**"
--exclude "*.pyc"
```

### Exemple 4 : Archiver les fichiers de plus de 90 jours

Déplacez les anciens fichiers de Google Drive vers S3 Glacier :

```
--min-age 90d
```

### Exemple 5 : Sauvegarde photo (ignorer le RAW, conserver le JPEG)

```
--include "*.jpg"
--include "*.jpeg"
--include "*.png"
--include "*.heic"
--exclude "*.cr2"
--exclude "*.nef"
--exclude "*.arw"
--exclude "*"
```

## Utiliser les filtres dans RcloneView

Lors de la création d'une tâche de synchronisation ou de copie dans RcloneView, vous pouvez ajouter des règles de filtrage dans la configuration de la tâche. Elles sont transmises directement à rclone :

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configure filter rules in RcloneView jobs" class="img-large img-center" />

### Exécution à blanc pour vérifier

Utilisez toujours une exécution à blanc (dry run) lors du test de nouvelles règles de filtrage. Cela vous montre exactement quels fichiers seraient inclus ou exclus sans effectuer réellement de transfert.

### Comparaison de dossiers avec des filtres

Utilisez la [comparaison de dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents) pour voir l'état de votre source et de votre destination. Combinée aux filtres, elle vous aide à comprendre exactement ce qui sera synchronisé.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder comparison to verify filter results" class="img-large img-center" />

## Erreurs courantes

### Oublier le `**` final pour les répertoires

```
# Wrong — only excludes a FILE named "logs"
--exclude "logs"

# Right — excludes the logs DIRECTORY and everything in it
--exclude "logs/**"
```

### Inclure sans exclure le reste

```
# This includes PDFs but doesn't exclude anything else
--include "*.pdf"

# This works — include already implies "exclude everything else"
# But only when using --include alone
```

### L'ordre compte

```
# This excludes everything, then tries to include (too late!)
--exclude "*"
--include "*.pdf"

# This works — include first, then exclude the rest
--include "*.pdf"
--exclude "*"
```

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Créez une tâche** avec des règles de filtrage dans la configuration.
3. **Faites d'abord une exécution à blanc** pour vérifier que vos filtres capturent les bons fichiers.
4. **Lancez la tâche** une fois que vous êtes confiant.
5. **Utilisez des fichiers filter-from** pour des ensembles de règles complexes et réutilisables.

Les filtres transforment un « synchroniser tout » brutal en un « synchroniser exactement ce dont j'ai besoin » précis. Maîtrisez-les une fois, utilisez-les partout.

---

**Guides connexes :**

- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Comparer le contenu des dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Définir des limites de bande passante](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
