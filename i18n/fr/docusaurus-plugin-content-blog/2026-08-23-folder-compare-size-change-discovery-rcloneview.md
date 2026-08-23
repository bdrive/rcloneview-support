---
slug: folder-compare-size-change-discovery-rcloneview
title: "Trouver les plus grands changements — Détection des changements de taille dans Folder Compare de RcloneView"
authors:
  - steve
description: "Utilisez les outils de détection des changements de taille de Folder Compare dans RcloneView pour repérer quels dossiers cloud ont le plus changé, le plus vite, ou nécessitent une vérification avant la synchronisation."
keywords:
  - détection des changements de taille en comparaison de dossiers
  - comparaison de dossiers RcloneView
  - plus grand changement de dossier
  - audit du stockage cloud
  - comparer des dossiers cloud
  - détecter les changements de fichiers cloud
  - vérification de sauvegarde cloud
  - suivi des changements de taille de dossiers
  - surveillance de la synchronisation cloud
  - détection des changements de stockage cloud
tags:
  - RcloneView
  - feature
  - compare
  - folder-comparison
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Trouver les plus grands changements — Détection des changements de taille dans Folder Compare de RcloneView

> Lorsqu'une arborescence cloud compte des milliers de sous-dossiers, repérer ceux qui ont réellement changé est la partie la plus difficile — les outils de détection des changements de taille de RcloneView les trouvent pour vous.

Quiconque gère une grande archive multi-cloud sait que le vrai problème n'est pas d'exécuter une comparaison, mais de lire les résultats. Une arborescence de dossiers comptant quelques milliers de sous-dossiers peut produire un rapport de comparaison trop long à parcourir manuellement. La vue Folder Compare de RcloneView inclut des contrôles dédiés de détection des changements de taille qui sautent directement vers les dossiers qui méritent une investigation, au lieu de vous forcer à faire défiler une liste de fichiers indifférenciée.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ce que fait réellement la détection des changements de taille

Folder Compare vous permet de comparer visuellement deux dossiers — locaux ou cloud — côte à côte, avec des filtres pour les fichiers présents uniquement à gauche, uniquement à droite, les fichiers identiques, les fichiers différents et les fichiers en erreur. En plus de ce filtrage, RcloneView ajoute des raccourcis de navigation qui trouvent les dossiers par changement du nombre de fichiers ou par changement de taille, et peuvent sauter directement vers le dossier avec le plus grand changement, le suivant en importance, le plus petit changement, ou le suivant plus petit.

C'est ce dernier ensemble de contrôles qui distingue RcloneView d'une simple vue de différences. Plutôt que de parcourir chaque sous-dossier pour déterminer où s'est produit l'essentiel du changement, vous demandez à la comparaison de vous y emmener directement. Cela est particulièrement utile sur les remotes où le changement est intrinsèquement inégal — une bibliothèque multimédia partagée, un dépôt d'ingénierie, ou une structure de dossiers clients où 90 % de l'activité se concentre dans une poignée de sous-répertoires.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Selecting comparison result filters in RcloneView Folder Compare" class="img-large img-center" />

## Un scénario concret

Prenons un studio de production vidéo disposant d'une archive cloud partagée contenant des centaines de dossiers de projets répartis entre Google Drive et un bucket de sauvegarde Backblaze B2. Après une semaine chargée de montage, l'équipe doit savoir quels dossiers de projet ont réellement changé avant de lancer une synchronisation complète — non pas pour se fier au fait que le dernier job automatisé a tout capturé, mais pour le vérifier. Exécuter Folder Compare et sauter directement au « plus grand changement » fait immédiatement apparaître les trois ou quatre projets actifs, tandis que des dizaines de dossiers d'archives inchangés ne gênent pas. RcloneView monte et synchronise également plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux, de sorte que le même flux de travail s'applique, que l'autre côté soit un autre cloud, un NAS ou un disque local.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Comparing cloud-to-cloud folder contents in RcloneView" class="img-large img-center" />

## Transformer la découverte en action

Une fois qu'un dossier modifié est localisé, la même vue Compare permet d'agir directement dessus : copier à droite, copier à gauche, ou supprimer les éléments sélectionnés, sans quitter la comparaison. Les fichiers copiés de cette manière sont automatiquement marqués comme identiques, de sorte qu'une nouvelle exécution de la comparaison reflète l'état corrigé au lieu de signaler à nouveau le même dossier. Pour des audits récurrents, associez une passe manuelle de Compare à une tâche de synchronisation planifiée, afin que la détection de taille devienne un contrôle ponctuel plutôt que la seule ligne de défense.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing job history after a folder compare and sync in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez la vue Compare depuis l'onglet Home et sélectionnez vos deux dossiers source.
3. Exécutez la comparaison, puis utilisez la navigation par changement le plus grand/le plus petit pour sauter vers les dossiers importants.
4. Copiez ou supprimez directement depuis la vue des résultats, puis relancez Compare pour confirmer que les dossiers apparaissent désormais comme identiques.

Pour quiconque gère une arborescence cloud trop volumineuse pour être parcourue à l'œil nu, la détection de taille transforme une comparaison écrasante en une liste courte et hiérarchisée de dossiers à vérifier.

---

**Guides associés :**

- [Guide de comparaison de dossiers — Détecter les différences avec RcloneView](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [Comparaison de dossiers avec filtre dans RcloneView](https://rcloneview.com/support/blog/folder-compare-with-filter-rcloneview)
- [Dry Run — Aperçu de la synchronisation cloud avant transfert](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
