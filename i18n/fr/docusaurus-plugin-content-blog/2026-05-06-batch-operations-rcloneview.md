---
slug: batch-operations-rcloneview
title: "Opérations par lot — Automatisez des workflows cloud en plusieurs étapes dans RcloneView"
authors:
  - tayson
description: "Utilisez la fonctionnalité Opérations par lot de RcloneView pour enchaîner plusieurs tâches cloud en workflows automatisés. Créez, copiez, synchronisez, vérifiez et nettoyez des fichiers en étapes séquentielles."
keywords:
  - RcloneView batch operations
  - automate cloud workflows RcloneView
  - multi-step cloud automation
  - RcloneView workflow automation
  - batch cloud file operations
  - rclone batch processing GUI
  - cloud task automation RcloneView
  - sequential cloud operations
  - automate cloud sync steps
  - RcloneView advanced automation
tags:
  - RcloneView
  - feature
  - automation
  - job-management
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Opérations par lot — Automatisez des workflows cloud en plusieurs étapes dans RcloneView

> La fonctionnalité Opérations par lot de RcloneView vous permet d'enchaîner des tâches cloud — créer des dossiers, copier des fichiers, synchroniser, vérifier, déplacer et nettoyer — en un seul workflow automatisé qui s'exécute du début à la fin.

La plupart des tâches de gestion cloud ne sont pas des opérations en une seule étape. Un workflow typique de traitement de fichiers peut impliquer la création d'un dossier de transit, la copie des fichiers source dans celui-ci, l'exécution d'une synchronisation vers un bucket de production, la vérification du transfert, puis la suppression du contenu de transit. Effectuer chaque étape manuellement dans l'ordre est fastidieux et sujet aux erreurs. La fonctionnalité Opérations par lot (Bêta) de RcloneView automatise précisément ce type de workflow en plusieurs étapes en enchaînant des opérations selon une séquence définie, avec transmission de variables entre les étapes.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Que sont les Opérations par lot ?

Les Opérations par lot sont une fonctionnalité d'automatisation de RcloneView qui vous permet de définir une séquence d'opérations sur des fichiers cloud à exécuter dans l'ordre. Chaque opération du lot est appelée une « étape », et les étapes s'exécutent séquentiellement — chacune se termine avant que la suivante ne commence. Les types d'étapes pris en charge incluent :

- **mkdir** — créer un dossier à un chemin cloud spécifié
- **copyFolder / copyFile** — copier un dossier ou un fichier individuel entre des remotes
- **sync** — synchroniser la source vers la destination
- **check** — vérifier que le contenu des dossiers correspond entre la source et la destination
- **move** — déplacer des fichiers ou des dossiers entre des emplacements
- **rename** — renommer des fichiers à un chemin cloud
- **delete / deleteFile** — suppression basée sur des filtres ou suppression d'un seul fichier
- **purge** — supprimer une arborescence de répertoires entière
- **rmdirs** — supprimer les répertoires vides
- **filelist** — générer une liste de fichiers
- **sleep** — mettre en pause l'exécution pendant une durée spécifiée

Cette flexibilité prend en charge un large éventail de scénarios d'automatisation réels, sans nécessiter de script.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring a multi-step batch operation workflow in RcloneView" class="img-large img-center" />

## Créer un workflow cloud en plusieurs étapes

Prenons l'exemple d'une équipe data qui traite des fichiers de rapport quotidiens : elle doit copier les fichiers entrants vers un dossier de traitement, synchroniser les résultats traités vers un bucket S3, vérifier la synchronisation par comparaison de sommes de contrôle, puis supprimer les fichiers de transit locaux. En tant qu'Opération par lot dans RcloneView :

1. **mkdir** — créer le dossier `processing/YYYY-MM-DD` dans le remote de transit
2. **copyFolder** — copier les fichiers entrants vers le dossier de traitement
3. **sync** — synchroniser le dossier de traitement vers le bucket S3 de production
4. **check** — vérifier que le contenu du bucket S3 correspond au dossier de traitement
5. **purge** — supprimer le dossier de transit après une vérification réussie

La transmission de variables entre les étapes permet à la sortie d'une étape (comme un chemin de dossier généré dynamiquement) d'alimenter l'étape suivante, ce qui simplifie la configuration des workflows horodatés par date.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Multi-step batch workflow automating cloud-to-cloud data pipeline in RcloneView" class="img-large img-center" />

## Aperçu en simulation avant l'exécution

Comme les tâches de synchronisation individuelles, les Opérations par lot prennent en charge un mode d'aperçu en simulation (dry-run). Avant d'exécuter un lot qui modifie ou supprime des données cloud, lancez une simulation pour voir exactement ce que ferait chaque étape sans effectuer de changement réel. Ceci est essentiel pour les workflows de production où les erreurs coûtent cher à corriger.

Le suivi de la progression étape par étape indique quelle étape est en cours d'exécution et les résultats de chaque étape terminée — vous pouvez ainsi surveiller des opérations complexes en plusieurs étapes depuis l'interface de RcloneView.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Monitoring batch operation step-by-step progress in RcloneView" class="img-large img-center" />

## Remarque importante : statut Bêta

Les Opérations par lot sont une fonctionnalité Bêta de RcloneView. Bien que la fonctionnalité principale soit confirmée et disponible dans l'application, la stabilité peut varier pour les workflows complexes en plusieurs étapes. Testez minutieusement les workflows par lot dans des environnements hors production avant de les déployer pour des pipelines de données critiques.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Reviewing batch operation execution status in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Accédez à la fonctionnalité Opérations par lot depuis l'interface du Gestionnaire de tâches.
3. Ajoutez des étapes à votre lot dans l'ordre d'exécution souhaité.
4. Lancez un aperçu en simulation, puis exécutez le workflow par lot complet.

Les Opérations par lot dans RcloneView comblent l'écart entre la gestion cloud manuelle et le script complet — vous offrant une automatisation puissante en plusieurs étapes via une interface visuelle, sans code requis.

---

**Guides connexes :**

- [Automatiser les sauvegardes cloud quotidiennes avec RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [Règles de filtrage et synchronisation sélective dans RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Synchronisation un-vers-plusieurs — Destinations multiples dans RcloneView](https://rcloneview.com/support/blog/one-to-many-sync-multiple-destinations-rcloneview)

<CloudSupportGrid />
