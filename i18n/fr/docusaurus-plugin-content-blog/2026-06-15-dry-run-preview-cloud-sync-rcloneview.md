---
slug: dry-run-preview-cloud-sync-rcloneview
title: "Aperçu en simulation (Dry Run) — Tester la synchronisation cloud avant de valider les changements dans RcloneView"
authors:
  - tayson
description: "Utilisez le mode simulation (dry run) de RcloneView pour prévisualiser les fichiers qui seront copiés ou supprimés avant l'exécution d'une synchronisation cloud — la vérification de sécurité essentielle pour les transferts volumineux ou sensibles."
keywords:
  - dry run cloud sync
  - test sync before running
  - RcloneView dry run
  - preview cloud sync changes
  - simulate cloud backup
  - cloud sync safety check
  - rclone dry run GUI
  - avoid accidental file deletion
  - cloud sync simulation
  - verify sync before commit
tags:
  - feature
  - tips
  - troubleshooting
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Aperçu en simulation (Dry Run) — Tester la synchronisation cloud avant de valider les changements dans RcloneView

> Avant de synchroniser des téraoctets de données ou de supprimer des fichiers d'une destination, utilisez le mode simulation (dry run) de RcloneView pour prévisualiser chaque changement prévu — sans déplacer le moindre fichier.

L'une des erreurs les plus coûteuses dans les workflows de synchronisation cloud est de découvrir, après coup, qu'une tâche a supprimé des fichiers importants, écrasé des versions plus récentes, ou intégré des milliers de fichiers qui n'étaient jamais censés être inclus. La fonctionnalité de simulation intégrée à RcloneView élimine entièrement ce risque. En simulant une opération de synchronisation avant son exécution, vous pouvez vérifier exactement quels fichiers seraient copiés et lesquels seraient supprimés, ce qui vous donne une entière confiance dans la configuration de la tâche avant le début de tout transfert réel. Cela est particulièrement utile lors de la première configuration d'une nouvelle tâche ou après l'ajustement des règles de filtrage d'une tâche existante.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ce que révèle une simulation (Dry Run)

Lorsque vous exécutez une simulation dans RcloneView, le moteur de tâche applique toute sa logique de synchronisation à votre source et destination configurées, mais n'effectue aucune opération réelle sur les fichiers. Le résultat est un aperçu détaillé comportant deux catégories essentielles : **les fichiers qui seraient copiés** de la source vers la destination, et **les fichiers qui seraient supprimés** de la destination pour correspondre à la source. Vous pouvez parcourir la liste complète des opérations et vérifier chaque entrée avant de valider quoi que ce soit.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Reviewing planned file operations in a dry run simulation in RcloneView" class="img-large img-center" />

Cela compte le plus dans les tâches de synchronisation unidirectionnelle, où la destination est modifiée pour refléter exactement la source. Si un fichier a récemment été supprimé du dossier source mais que vous en avez encore besoin sur la destination, la simulation révèle la suppression prévue avant qu'elle ne se produise. Un cabinet d'avocats sauvegardant 500 000 documents de dossiers vers Amazon S3, par exemple, bénéficie énormément de la vérification de chaque lot planifié avant exécution, évitant ainsi toute perte de données accidentelle.

## Comment exécuter une simulation (Dry Run) dans RcloneView

L'utilisation du mode simulation dans RcloneView est simple. Dans le **Gestionnaire de tâches**, créez ou ouvrez une tâche de synchronisation et configurez votre source, votre destination et toutes les options de filtrage telles que les exclusions de type de fichier, la taille de fichier maximale ou les limites de profondeur de dossier. Lorsque vous êtes prêt à tester, sélectionnez l'option **Dry Run** plutôt qu'une exécution normale. RcloneView effectue la simulation et affiche la liste complète des opérations prévues dans l'onglet Transferring — aucune donnée n'est déplacée tant que vous ne lancez pas intentionnellement une exécution réelle.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Starting a dry run simulation for a cloud sync job in RcloneView" class="img-large img-center" />

Après avoir examiné les résultats de la simulation, vous pouvez affiner vos paramètres de filtrage et répéter la simulation autant de fois que nécessaire. Ce n'est que lorsque la liste des opérations prévues correspond exactement à vos attentes que vous devez déclencher la synchronisation réelle. Cette approche itérative est particulièrement utile lorsque vous travaillez avec des règles de filtrage complexes sur de grandes structures de répertoires réparties entre plusieurs fournisseurs cloud.

## Vérifier les résultats d'une simulation dans l'historique des tâches

RcloneView enregistre chaque simulation dans la vue **Historique des tâches**, clairement identifiée comme une exécution de simulation aux côtés des exécutions réelles. Vous pouvez consulter le nombre de fichiers simulés, la taille totale projetée, le temps écoulé, ainsi que tout avertissement ou erreur survenu — vous offrant une vision complète du comportement de la tâche avant de vous engager.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Dry run simulation recorded in RcloneView job history with status details" class="img-large img-center" />

Pour les équipes qui exécutent des sauvegardes planifiées récurrentes, effectuer une simulation après tout changement de configuration est une étape de sécurité incontournable. Cela ne coûte rien — aucune donnée n'est transférée, aucun stockage n'est consommé — mais cela évite des erreurs difficiles à corriger qui, autrement, ne deviendraient visibles qu'une fois la synchronisation terminée.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez **Home tab > Sync** et configurez une nouvelle tâche de synchronisation avec votre source et votre destination.
3. Sélectionnez le mode **Dry Run** dans le Gestionnaire de tâches pour prévisualiser toutes les opérations de fichiers prévues.
4. Examinez les listes de copie et de suppression, ajustez les filtres si nécessaire, puis déclenchez la synchronisation réelle en toute confiance.

Le mode simulation est l'habitude la plus simple qui distingue les opérations cloud prudentes et réversibles des mauvaises surprises coûteuses.

---

**Guides connexes :**

- [Règles de filtrage et synchronisation sélective avec RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Migrations cloud vérifiées par somme de contrôle avec RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [Automatiser les sauvegardes cloud quotidiennes avec RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
