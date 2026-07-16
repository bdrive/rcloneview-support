---
slug: multi-window-parallel-explorer-rcloneview
title: "Prise en charge multi-fenêtres — Gérer plusieurs stockages cloud côte à côte dans RcloneView"
authors:
  - tayson
description: "Utilisez la fonctionnalité Multi-Fenêtres de RcloneView pour ouvrir des fenêtres indépendantes pour différentes tâches de stockage cloud. Gérez Google Drive, S3 et OneDrive en parallèle dans des fenêtres séparées."
keywords:
  - RcloneView multi-window
  - multiple windows cloud storage
  - parallel cloud management
  - RcloneView PLUS feature
  - cloud storage multi-window
  - side by side cloud management
  - RcloneView independent windows
  - cloud file manager multiple windows
  - RcloneView productivity
  - multi-window cloud sync
tags:
  - feature
  - productivity
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Prise en charge multi-fenêtres — Gérer plusieurs stockages cloud côte à côte dans RcloneView

> La fonctionnalité Multi-Fenêtres de RcloneView (licence PLUS) ouvre des fenêtres d'application indépendantes afin que vous puissiez gérer différentes tâches de stockage cloud simultanément, sans changement de contexte.

Le panneau Explorer de RcloneView prend déjà en charge de 1 à 4 panneaux dans une seule fenêtre — utile pour la navigation côte à côte et les transferts par glisser-déposer. Mais pour les workflows complexes impliquant plusieurs tâches distinctes — surveiller une migration en cours dans une vue tout en parcourant un cloud différent dans une autre, ou exécuter une comparaison de dossiers tout en configurant une nouvelle tâche de synchronisation — Multi-Fenêtres ouvre des fenêtres RcloneView totalement indépendantes qui fonctionnent sans interférer les unes avec les autres. Cette fonctionnalité est disponible avec une licence PLUS.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Comment fonctionne Multi-Fenêtres

Chaque nouvelle fenêtre ouverte via Multi-Fenêtres est une instance RcloneView totalement indépendante, avec ses propres panneaux Explorer, son propre onglet Transferring et son propre état. Les modifications effectuées dans une fenêtre n'affectent pas les autres. Les fenêtres communiquent via le mécanisme IPC interne de RcloneView, mais leur état de navigation de fichiers et leurs opérations actives sont isolés.

Pour ouvrir une nouvelle fenêtre, cliquez sur le bouton **New Window** dans l'onglet Home. La nouvelle fenêtre s'ouvre dans le même état par défaut que la fenêtre principale — vous pouvez ensuite la naviguer vers un distant différent ou démarrer une tâche différente de manière indépendante. La position et la taille des fenêtres sont automatiquement enregistrées entre les sessions, de sorte que votre disposition multi-fenêtres est préservée la prochaine fois que vous ouvrez RcloneView.

<img src="/support/images/en/blog/new-remote.png" alt="Opening a new independent window in RcloneView" class="img-large img-center" />

## Workflows pratiques en multi-fenêtres

**Navigation parallèle entre fournisseurs cloud :** Ouvrez la Fenêtre 1 pour parcourir vos buckets Amazon S3 pendant que la Fenêtre 2 affiche votre Google Drive. Faites glisser des fichiers entre les fenêtres pour déclencher des copies inter-fournisseurs, ou surveillez le contenu des deux fournisseurs simultanément pendant une migration.

**Surveillance des tâches en parallèle de la navigation :** Gardez la Fenêtre 1 affichant l'onglet Transferring pour la progression des tâches actives pendant que la Fenêtre 2 vous permet de parcourir un autre cloud ou de configurer la prochaine tâche — sans avoir à changer d'onglet ni interrompre votre vue de surveillance.

**Comparaison de dossiers dans une fenêtre dédiée :** Exécutez une opération de comparaison de dossiers volumineuse dans la Fenêtre 1 (ce qui peut prendre du temps pour de grands dossiers cloud) tout en continuant à travailler avec des fichiers dans la Fenêtre 2. La comparaison s'exécute de manière indépendante sans bloquer vos autres activités.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Running folder comparison in one window while browsing another in RcloneView" class="img-large img-center" />

**Workflows multi-utilisateurs ou multi-projets :** Les professionnels gérant le stockage cloud de plusieurs clients ou projets peuvent dédier une fenêtre à chacun, en gardant des vues contextuelles ouvertes simultanément plutôt que de naviguer sans cesse entre les distants.

## Combiner Multi-Fenêtres avec la disposition des panneaux

Dans chaque fenêtre, la disposition des panneaux (1 à 4 panneaux, division horizontale ou verticale) est configurable indépendamment via l'onglet Settings > Layout / View count. Une configuration multi-fenêtres avec 2 fenêtres de 2 panneaux chacune vous offre en fait quatre panneaux Explorer simultanés répartis sur deux espaces de travail organisés.

Cette combinaison est particulièrement utile pour les workflows de synchronisation : la Fenêtre 1 affiche les panneaux source et destination avec une tâche de synchronisation en cours ; la Fenêtre 2 affiche une deuxième paire source-destination pour une autre tâche de synchronisation. Les deux tâches s'exécutent en parallèle sans partager d'état d'affichage.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Multiple parallel sync operations in RcloneView multi-window mode" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html) et activez une licence PLUS.
2. Cliquez sur le bouton **New Window** dans l'onglet Home pour ouvrir une deuxième fenêtre indépendante.
3. Naviguez chaque fenêtre vers un distant ou une tâche différente pour travailler en parallèle.
4. Personnalisez le nombre de panneaux par fenêtre dans Settings > Layout pour obtenir la disposition la plus efficace pour votre workflow.

Multi-Fenêtres transforme RcloneView d'un gestionnaire de fichiers à tâche unique en un espace de travail parallèle pour les professionnels du stockage cloud gérant plusieurs fournisseurs, projets ou opérations en cours simultanément.

---

**Guides connexes :**

- [Conseils de productivité pour l'Explorer à deux panneaux de RcloneView](https://rcloneview.com/support/blog/two-pane-explorer-productivity-tips-rcloneview)
- [Gérer plusieurs comptes cloud avec RcloneView](https://rcloneview.com/support/blog/manage-multiple-cloud-accounts-with-rcloneview)
- [Unifier tous les clouds — Gérer Google Drive, Dropbox et OneDrive](https://rcloneview.com/support/blog/unify-all-clouds-manage-google-drive-dropbox-onedrive)

<CloudSupportGrid />
