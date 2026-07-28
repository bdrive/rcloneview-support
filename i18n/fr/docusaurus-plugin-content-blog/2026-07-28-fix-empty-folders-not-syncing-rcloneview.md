---
slug: fix-empty-folders-not-syncing-rcloneview
title: "Résoudre les dossiers vides non synchronisés — Comment y remédier avec RcloneView"
authors:
  - morgan
description: "Des dossiers vides manquent après une synchronisation ? Découvrez pourquoi rclone les ignore par défaut et comment résoudre ce problème grâce à l'option de création de répertoires vides de RcloneView."
keywords:
  - dossiers vides non synchronisés
  - rclone répertoires vides manquants
  - corriger dossiers vides synchronisation cloud
  - RcloneView créer répertoires vides
  - structure de dossiers manquante synchronisation
  - sauvegarde cloud dossiers vides
  - rclone structure de dossiers synchronisation
  - RcloneView dépannage synchronisation
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Résoudre les dossiers vides non synchronisés — Comment y remédier avec RcloneView

> Si une tâche de synchronisation supprime silencieusement les dossiers vides de la destination, la solution tient dans une seule case à cocher que la plupart des utilisateurs ne remarquent jamais lors de la configuration.

Une équipe qui migre une archive de projet entre des clouds s'attend souvent à ce que la destination reflète exactement la structure de dossiers de la source — y compris les dossiers de remplacement qui ne contiennent pas encore de fichiers. Par défaut, rclone (et par extension RcloneView) ne crée pas de répertoires vides sur la destination, car la plupart des backends de stockage d'objets n'ont pas de véritable notion de dossiers ; ils ne suivent que des clés de fichiers. Si votre tâche de synchronisation se termine avec succès mais qu'un lot de sous-dossiers vides manque à la destination, il s'agit d'un comportement attendu, pas d'un bug — et RcloneView dispose d'un paramètre intégré pour changer cela.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi les dossiers vides sont supprimés

Les systèmes de fichiers locaux et certains fournisseurs stockent les dossiers comme de véritables objets, mais de nombreux backends cloud — y compris le stockage compatible S3 — ne représentent un « dossier » que comme un préfixe commun partagé par des clés de fichiers. Lorsqu'un répertoire ne contient aucun fichier, il n'y a aucune clé à créer, donc rien n'apparaît de l'autre côté. Le comportement de synchronisation par défaut de rclone reflète cela : il copie les fichiers et laisse la structure des dossiers émerger implicitement des chemins de fichiers, ce qui garde les transferts rapides mais laisse de côté les dossiers réellement vides.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing a completed sync with no errors despite missing empty folders" class="img-large img-center" />

C'est pourquoi une tâche de synchronisation peut être signalée comme Terminée (Completed) avec zéro erreur, tout en laissant l'arborescence des dossiers de destination plus mince que celle de la source. Ce n'est pas un transfert échoué — l'outil fait exactement ce qu'on lui a demandé, à un détail près que la plupart des utilisateurs supposent automatique.

## Activer la création de répertoires vides

RcloneView expose ce comportement directement dans l'assistant de synchronisation. À l'étape 1 (Configurer le stockage), aux côtés de la sélection de la source et de la destination et du bascule de direction de synchronisation, se trouve une option **Créer des répertoires vides (Create empty directories)**. L'activer avant d'exécuter la tâche indique à rclone de créer explicitement des entrées de remplacement pour les dossiers vides sur la destination, afin que la structure copiée corresponde à la source dossier par dossier.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Enabling create empty directories in the RcloneView sync configuration wizard" class="img-large img-center" />

Si vous avez déjà exécuté une synchronisation sans cocher cette option, il suffit de modifier la tâche existante, d'activer le paramètre, puis de la réexécuter — RcloneView monte ET synchronise plus de 90 fournisseurs depuis une seule fenêtre, de sorte que réexécuter avec la même source et la même destination est une correction rapide plutôt qu'une reconfiguration complète.

## Vérifier la structure des dossiers après la correction

Avant de confier une migration importante à une seule exécution, utilisez Dry Run pour prévisualiser ce que la tâche corrigée fera réellement — il liste chaque fichier et dossier prévu pour la création sans toucher à la destination, afin que vous puissiez confirmer que l'écart de dossiers vides est comblé avant de vous engager. Pour un projet en cours, Folder Compare est également utile par la suite : pointez-le vers les deux côtés et filtrez par « left-only » ou « right-only » pour repérer toute divergence structurelle restante.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare to verify folder structure matches after enabling empty directory creation" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez la tâche de synchronisation à laquelle il manque des dossiers vides et cliquez sur Edit.
3. À l'étape 1, activez la case à cocher **Créer des répertoires vides (Create empty directories)**.
4. Exécutez un Dry Run pour confirmer que les dossiers seront créés, puis exécutez la synchronisation.

Une fois le paramètre activé, chaque exécution future de cette tâche préserve l'arborescence complète des dossiers — plus besoin de rechercher des répertoires de remplacement manquants après une migration.

---

**Guides connexes :**

- [Dry Run — Prévisualiser la synchronisation cloud avant le transfert avec RcloneView](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [Règles de filtrage — Synchronisation sélective avec RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Éviter la perte de données due à une mauvaise direction de synchronisation avec RcloneView](https://rcloneview.com/support/blog/avoid-data-loss-wrong-sync-direction-rcloneview)

<CloudSupportGrid />
