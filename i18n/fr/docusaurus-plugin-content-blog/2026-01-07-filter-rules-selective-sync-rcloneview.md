---
slug: filter-rules-selective-sync-rcloneview
title: "Règles de filtrage RcloneView : exclure des dossiers et des types de fichiers pour des synchronisations plus rapides et plus propres"
authors:
  - tayson
description: "Créez des workflows de synchronisation sélective avec les règles de filtrage RcloneView pour ignorer le bruit, réduire le trafic cloud et garder des sauvegardes propres. Interface graphique d'abord, sans indicateurs CLI."
keywords:
  - rclone filter rules
  - rclone exclude
  - rclone include
  - rcloneview filters
  - selective sync
  - cloud sync optimization
  - reduce sync time
  - file sync filters
  - rcloneview workflow
  - cloud backup efficiency
tags:
  - sync
  - file-management
---

import RvCta from '@site/src/components/RvCta';

# Règles de filtrage RcloneView : exclure des dossiers et des types de fichiers pour des synchronisations plus rapides et plus propres

> La synchronisation la plus rapide est celle qui ignore le bruit. Les règles de filtrage RcloneView vous aident à ignorer les dossiers de cache, les fichiers temporaires et les artefacts de build afin que chaque transfert soit intentionnel.

La synchronisation sélective est l'un des sujets rclone les plus recherchés car elle permet directement d'économiser du temps, de la bande passante et des coûts cloud. La plupart des guides listent des indicateurs CLI et s'arrêtent là. Cet article montre comment construire des **workflows axés sur le filtrage** dans RcloneView avec une interface visuelle qui rend les résultats prévisibles.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi les règles de filtrage comptent plus que jamais

Les coûts et les délais de synchronisation cloud proviennent de l'analyse et du transfert de fichiers dont vous n'aviez jamais besoin :

- Dossiers de cache (`.cache`, `node_modules`, `.gradle`)
- Fichiers temporaires ou d'aperçu (`*.tmp`, `*_preview.*`)
- Artefacts de build générés automatiquement
- Vérifications répétées des métadonnées sur des fichiers inchangés

Les filtres réduisent le bruit et rendent chaque tâche de synchronisation ou de copie plus petite, plus rapide et plus sûre.

## Ce que font les règles de filtrage dans RcloneView

Les filtres définissent **ce qui doit être inclus et exclu avant qu'un transfert n'ait lieu**. Dans RcloneView, vous les appliquez via l'interface Sync/Job, vous n'avez donc pas besoin de mémoriser la syntaxe CLI.

Utilisez les règles de filtrage pour :

- Exclure des dossiers entiers
- Inclure uniquement des chemins de projet spécifiques
- Ignorer les types de fichiers que vous ne voulez jamais sauvegarder
- Protéger les données sensibles ou non pertinentes

## Où configurer les filtres dans l'interface graphique

Vous pouvez ajouter des filtres lors de l'exécution d'une synchronisation ou de la création d'un Job :

<img src="/support/images/en/howto/rcloneview-basic/sync-filtering-settings.png" alt="Sync filtering settings" class="img-large img-center" />

Ajoutez une règle personnalisée en quelques secondes :

<img src="/support/images/en/howto/rcloneview-basic/add-custom-filter-rule.png" alt="Add custom filter rule" class="img-large img-center" />

Modifiez et affinez les règles selon vos besoins :

<img src="/support/images/en/howto/rcloneview-basic/addjust-custom-filter-rule.png" alt="Adjust custom filter rule" class="img-large img-center" />

## Règles de filtrage pratiques (exemples prêts à copier)

### Exclure le bruit courant

- `**/node_modules/**`
- `**/.cache/**`
- `**/*.tmp`
- `**/*.log`

### Ne synchroniser que vos dossiers de travail

- Inclure : `**/Projects/**`
- Exclure : `**/Downloads/**`

### Règles pour projets médias

- Inclure : `**/*.mp4`, `**/*.mov`, `**/*.wav`
- Exclure : `**/*_proxy.*`, `**/*_preview.*`

### Workflows de design/création

- Inclure : `**/*.psd`, `**/*.ai`, `**/*.blend`
- Exclure : `**/renders/**`, `**/cache/**`

## Comparer d'abord, filtrer ensuite, puis synchroniser

Les filtres sont plus sûrs lorsque vous les validez visuellement :

1. Exécutez **Compare** pour voir ce qui va changer.
2. Ajustez les filtres si quelque chose d'important disparaît.
3. Synchronisez en toute confiance.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results filters" class="img-large img-center" />

Guide : [/support/howto/rcloneview-basic/compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents)

## Workflow axé sur le filtrage (sûr par conception)

### Étape 1 : Confirmer la source et la destination

Utilisez l'étape Configure Storage pour valider les chemins avant de filtrer.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/sync-configure-storage.png" alt="Sync configure storage" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-advanced-settings.png" alt="Sync advanced settings" class="img-large img-center" />
</div>

### Étape 2 : Appliquer les filtres

Ajoutez des exclusions et des inclusions selon votre workflow.

<img src="/support/images/en/howto/rcloneview-basic/sync-filtering-settings.png" alt="Sync filtering settings" class="img-large img-center" />

### Étape 3 : Simulation pour vérification

Exécutez Dry Run pour confirmer l'ensemble de résultats filtré avant de déplacer les données.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run.png" alt="Sync dry run" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run-details.png" alt="Sync dry run details" class="img-large img-center" />
</div>

## Enregistrer les workflows filtrés en tant que Jobs

Une fois les filtres corrects, enregistrez la synchronisation en tant que Job :

- Comportement cohérent à chaque exécution
- Réduction des erreurs humaines
- Planification facile pour des sauvegardes automatisées

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="Save sync to Jobs" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="Add job scheduling" class="img-large img-center" />
</div>

Guide : [/support/howto/rcloneview-basic/create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs)

## Planifier des synchronisations filtrées

Utilisez Job Scheduling pour automatiser les sauvegardes sélectives :

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Create job schedule" class="img-large img-center" />

Guide : [/support/howto/rcloneview-advanced/job-scheduling-and-execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

## Bénéfices concrets des règles de filtrage

- **Synchronisations plus rapides** : moins de fichiers analysés et transférés
- **Coûts réduits** : moins de trafic API et moins de téléversements répétés
- **Sauvegardes plus propres** : seuls les fichiers pertinents sont préservés
- **Opérations plus stables** : journaux de tâches plus petits et dépannage plus facile

## Erreurs courantes à éviter

- Sur-filtrer des dossiers critiques (testez d'abord avec Compare)
- Mélanger inclusions/exclusions sans ordre clair
- Ignorer Dry Run lors de grandes migrations
- Supposer que les filtres s'appliquent rétroactivement aux anciennes données

## Résumé des bonnes pratiques

- Intégrez les filtres à chaque tâche de synchronisation ou de copie.  
- Utilisez Compare pour valider ce que les filtres vont supprimer.  
- Commencez par un petit dossier de test avant d'appliquer les filtres à l'ensemble des données.  
- Enregistrez les tâches filtrées pour garantir la répétabilité et la traçabilité.  

## Conclusion

La synchronisation sélective est le moyen le plus rapide de rendre les opérations cloud plus rapides et moins coûteuses. RcloneView transforme des règles de filtrage rclone complexes en un workflow visuel que vous pouvez comprendre, tester et automatiser. Commencez par exclure un dossier bruyant, et observez votre temps de synchronisation chuter dès la prochaine exécution.
