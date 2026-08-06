---
slug: folder-compare-with-filter-rcloneview
title: "Comparaison de dossiers avec filtre — Comparaisons précises dans RcloneView"
authors:
  - alex
description: "Excluez le bruit des comparaisons de dossiers grâce aux règles de filtre de RcloneView — ignorez les artefacts de build, les caches et les types de fichiers indésirables avant de comparer."
keywords:
  - filtre de comparaison de dossiers
  - exclure des fichiers de la comparaison
  - règles de filtre RcloneView
  - comparer des dossiers motifs d'exclusion
  - filtre de différences de dossiers cloud
  - ignorer la comparaison du dossier .git
  - comparaison de dossiers sélective
  - filtre de vérification de sauvegarde cloud
tags:
  - RcloneView
  - feature
  - folder-comparison
  - filters
  - compare
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Comparaison de dossiers avec filtre — Comparaisons précises dans RcloneView

> Une comparaison complète de dossiers n'est utile que si les résultats ne sont pas noyés sous des fichiers qui ne vous intéressaient de toute façon pas.

Lancer une simple comparaison de dossiers entre deux grands emplacements de stockage renvoie souvent un mur de différences qui n'ont rien à voir avec les données que vous devez réellement vérifier — caches de build, dossiers `.git`, fichiers temporaires et images ISO qui n'auraient jamais dû être sauvegardées. La comparaison de dossiers avec filtre de RcloneView vous permet d'exclure ces catégories avant que la comparaison ne s'exécute, afin que les résultats ne reflètent que les fichiers qui comptent réellement.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi les comparaisons filtrées sont importantes

Une comparaison brute entre deux grandes arborescences traite chaque fichier avec la même importance, ce qui signifie qu'un dépôt source avec un historique `.git` volumineux ou un dossier de projet rempli d'images `.iso` peut éclipser les différences que vous cherchez réellement à repérer. En filtrant le périmètre de comparaison sur des noms de dossiers et types de fichiers pertinents, un résultat bruyant et difficile à lire devient une liste ciblée indiquant exactement ce qui a changé dans les données qui vous intéressent.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Résultats de comparaison de dossiers filtrée dans RcloneView" class="img-large img-center" />

RcloneView propose déjà la synchronisation et la comparaison de dossiers avec la licence FREE, la comparaison filtrée venant s'ajouter en tant qu'amélioration de niveau PLUS pour les équipes qui en ont besoin.

## Configuration des règles de filtre

Les règles de filtre suivent le même modèle utilisé ailleurs dans RcloneView : exclusion par extension, chemin de dossier ou nom de dossier exact. Une règle comme `.iso` élimine tous les fichiers ISO de la comparaison, quel que soit leur emplacement ; `/.git/*` exclut uniquement les fichiers `.git` de niveau racine ; `/.git/` supprime spécifiquement le dossier `.git` racine ; et `.git/` retire tous les dossiers `.git`, quelle que soit leur profondeur d'imbrication. Combinez plusieurs règles pour restreindre précisément la comparaison aux types de fichiers et chemins qui méritent d'être examinés.

<img src="/support/images/en/blog/new-remote.png" alt="Configuration des règles de filtre pour la comparaison de dossiers dans RcloneView" class="img-large img-center" />

Il s'agit d'une fonctionnalité de la licence PLUS — la comparaison de dossiers de base non filtrée (affichant les fichiers uniquement à gauche, uniquement à droite, identiques et différents) est disponible avec tous les niveaux de licence, et le filtrage s'appuie sur ce même moteur de comparaison.

## Scénarios de filtrage pratiques

Les équipes de développement qui comparent un dossier de projet à une sauvegarde cloud excluent généralement `node_modules/`, `.git/` et les répertoires de sortie de build, car ces éléments sont régénérables et ne devraient pas entrer en compte dans l'évaluation de l'exhaustivité de la sauvegarde. Les équipes médias qui archivent des bibliothèques de photos RAW excluent souvent les fichiers de cache annexes et les aperçus de vignettes afin que la comparaison se concentre sur les véritables fichiers image. Et quiconque audite une migration entre deux comptes cloud peut exclure les dossiers temporaires ou de travail qui n'avaient de toute façon pas vocation à survivre au transfert, limitant ainsi les listes uniquement-à-gauche et uniquement-à-droite aux fichiers qui méritent réellement attention.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Vérification du résultat de la comparaison filtrée avant d'agir sur les différences" class="img-large img-center" />

Une fois la comparaison filtrée terminée, les mêmes actions s'appliquent que pour toute autre comparaison de dossiers : copier les fichiers uniquement-à-gauche vers la droite, vérifier les fichiers uniquement-à-droite avant de les supprimer, et mettre à jour tout ce qui est signalé comme différent — sans la distraction des fichiers volontairement exclus.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Lancez **Comparer** depuis l'onglet Home et sélectionnez vos deux dossiers.
3. Ouvrez les paramètres de filtre et ajoutez des règles d'exclusion pour les noms de dossiers et types de fichiers à écarter.
4. Lancez la comparaison et examinez une liste de résultats limitée à ce qui compte réellement.

Une comparaison filtrée transforme un mur de bruit en une liste courte et exploitable — exactement ce dont vous avez besoin avant de décider quoi copier, mettre à jour ou laisser tel quel.

---

**Guides associés :**

- [Comparaison de dossiers en profondeur — Détectez chaque différence entre emplacements de stockage cloud](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [Règles de filtre Rclone expliquées — Motifs d'inclusion et d'exclusion avec RcloneView](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [Règles de filtre pour la synchronisation sélective — Guide RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
