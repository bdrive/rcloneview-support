---
slug: copy-full-path-remote-paths-rcloneview
title: "Copier le chemin complet — Copie rapide des chemins distants dans RcloneView"
authors:
  - robin
description: "Utilisez la commande Copier le chemin complet de RcloneView pour obtenir instantanément des chaînes remote:path pour les commandes rclone CLI, les scripts et la configuration des tâches."
keywords:
  - RcloneView copier le chemin complet
  - chemin distant rclone
  - copier le chemin avec le distant
  - syntaxe de chemin rclone CLI
  - barre de chemin fil d'Ariane
  - flux de travail du terminal RcloneView
  - chemins de script rclone
  - copier le chemin distant cloud
tags:
  - RcloneView
  - feature
  - cli
  - tips
  - productivity
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Copier le chemin complet — Copie rapide des chemins distants dans RcloneView

> Arrêtez de retaper à la main les noms de distants et les chemins de dossiers — faites un clic droit sur la barre de fil d'Ariane et copiez exactement la chaîne `remote:path` attendue par rclone.

Quiconque combine l'interface graphique de RcloneView avec des commandes rclone CLI connaît cette friction : on trouve un dossier visuellement, puis il faut reconstruire son chemin manuellement pour le référencer dans un script ou une commande de terminal. La fonctionnalité Copier le chemin complet de RcloneView supprime entièrement cette étape en générant exactement le format `mygoogledrive:Meet recordings` utilisé par rclone, prêt à être collé directement dans une commande, un filtre de tâche ou un script d'automatisation.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Où se trouve la commande

Copier le chemin complet se trouve dans le menu contextuel (clic droit) de la barre de chemin fil d'Ariane, en haut de chaque panneau de l'explorateur, aux côtés de Couper, Copier, Coller et Tout sélectionner. Naviguez jusqu'à un dossier quelconque — local ou dans le cloud —, faites un clic droit sur la barre de chemin elle-même (pas sur une ligne de fichier), puis choisissez Copier le chemin complet. RcloneView écrit le nom du distant et le chemin du dossier dans le presse-papiers, dans la même syntaxe `remote:path` qu'attendent la CLI de rclone elle-même, les fichiers de configuration et les appels de l'API RC.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView breadcrumb path bar with right-click context menu open" class="img-large img-center" />

C'est important car rclone est strict sur cette syntaxe : un deux-points sépare le nom du distant du chemin, et une erreur à ce niveau (une barre oblique superflue, un deux-points manquant) est l'une des causes les plus fréquentes d'erreurs « répertoire introuvable » lorsque les chemins sont retapés à la main de mémoire.

## Pourquoi c'est mieux que la saisie manuelle des chemins

Taper les chemins à la main ne tient plus la route dès que les noms de dossiers contiennent des caractères Unicode, des espaces ou une imbrication profonde — exactement le type de chemins faciles à mal saisir et difficiles à déboguer. Copier le chemin complet évite tout cela en copiant la chaîne littérale que RcloneView a déjà résolue lors de l'affichage de l'arborescence des dossiers, de sorte que ce que vous collez correspond forcément au contenu réel du distant. RcloneView synchronise aussi et compare des dossiers — avec la licence FREE —, et Copier le chemin complet fonctionne de la même manière dans les trois cas : l'Explorateur, la configuration des tâches de synchronisation et la Comparaison de dossiers.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Selecting a folder path for comparison in RcloneView" class="img-large img-center" />

C'est particulièrement utile pour configurer le dossier source ou destination d'une tâche de synchronisation, ou pour écrire une règle de filtre personnalisée nécessitant un préfixe de chemin exact — coller un chemin copié évite les petites fautes de frappe qui excluent silencieusement les mauvais fichiers.

## L'associer au terminal intégré

Copier le chemin complet est le plus puissant lorsqu'il est associé au Terminal Rclone dans la vue d'informations en bas de l'écran. Copiez un chemin depuis l'Explorateur, passez à l'onglet Terminal, puis collez-le directement dans une commande comme `rclone lsf` ou `rclone about` sans quitter l'application ni retaper quoi que ce soit. Cela fait de RcloneView un outil de flux de travail hybride : naviguez visuellement pour trouver le dossier dont vous avez besoin, puis basculez directement vers un contrôle au niveau CLI pour tout ce que l'interface graphique n'expose pas encore.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an rclone command referencing a copied remote path" class="img-large img-center" />

Pour quiconque script des tâches de maintenance récurrentes — une vérification `rclone size`, un `rclone check` manuel entre deux dossiers —, ce raccourci supprime l'étape la plus sujette aux erreurs lors de l'écriture manuelle de cette commande.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html) si ce n'est pas déjà fait.
2. Ouvrez un distant quelconque dans l'Explorateur et naviguez jusqu'au dossier que vous souhaitez référencer.
3. Faites un clic droit sur la barre de chemin fil d'Ariane et sélectionnez Copier le chemin complet.
4. Collez la chaîne `remote:path` copiée dans une tâche de synchronisation, une règle de filtre ou le Terminal Rclone intégré.

Une fois que cela devient un réflexe, taper les chemins distants à la main commence à ressembler à la manière lente de travailler.

---

**Guides associés :**

- [Terminal RcloneView : exploitez toute la puissance de la CLI rclone dans une interface graphique](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)
- [Raccourcis clavier et astuces de productivité RcloneView](https://rcloneview.com/support/blog/keyboard-shortcuts-productivity-rcloneview)
- [10 astuces de l'explorateur à deux volets qui accéléreront la gestion de vos fichiers cloud dans RcloneView](https://rcloneview.com/support/blog/two-pane-explorer-productivity-tips-rcloneview)

<CloudSupportGrid />
