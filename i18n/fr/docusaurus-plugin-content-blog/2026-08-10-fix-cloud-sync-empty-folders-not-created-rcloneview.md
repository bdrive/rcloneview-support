---
slug: fix-cloud-sync-empty-folders-not-created-rcloneview
title: "Dossiers vides disparus après la synchronisation — Comment résoudre le problème avec RcloneView"
authors:
  - robin
description: "Les dossiers vides disparaissent après une synchronisation cloud ? Découvrez pourquoi rclone les ignore par défaut et comment corriger cela dans RcloneView avec un seul réglage."
keywords:
  - dossiers vides non synchronisés
  - répertoires vides rclone
  - dossiers manquants synchronisation cloud
  - dépannage RcloneView
  - synchronisation de structure de dossiers
  - créer des répertoires vides rclone
  - corriger les erreurs de synchronisation cloud
  - paramètres de synchronisation RcloneView
  - structure de dossiers de sauvegarde cloud
tags:
  - RcloneView
  - troubleshooting
  - sync
  - cloud-sync
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dossiers vides disparus après la synchronisation — Comment résoudre le problème avec RcloneView

> Les dossiers d'espace réservé et les répertoires de projet vides disparaissent souvent après une synchronisation cloud — voici le réglage qui les fait réapparaître.

Une équipe migre une structure de dossiers vers le cloud et constate que la moitié des répertoires vides réservés — pour de futurs fichiers, des livrables clients ou des espaces d'archivage — n'apparaissent tout simplement jamais à destination. C'est le comportement par défaut attendu de rclone : les opérations de synchronisation ne recréent que les répertoires contenant des fichiers. RcloneView expose le réglage nécessaire pour modifier cela, et savoir où le trouver évite beaucoup de reprises de travail source de confusion.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi les dossiers vides sont ignorés

Le moteur de synchronisation et de copie de rclone parcourt l'arborescence source et transfère des objets — des fichiers. Un répertoire ne contenant aucun fichier ne génère aucune opération de transfert, si bien que par défaut, la destination n'apprend jamais que ce répertoire devrait exister. Ce n'est pas un bug ; c'est ainsi que la plupart des API de stockage cloud représentent les « dossiers » à la base — comme un effet secondaire des clés d'objet plutôt que comme des entités autonomes. Le résultat concret est qu'une arborescence source contenant des dossiers d'espace réservé intentionnels (un dossier `03-invoices/` en attente des fichiers du mois prochain, ou une structure de catégories qu'un client s'attend à voir) peut arriver à destination avec des éléments manquants.

Cela devient particulièrement visible lors d'une comparaison de dossiers (Folder Compare) ou d'une migration initiale, où la structure de destination doit refléter visuellement la source avant même que les fichiers ne commencent à y arriver.

## La solution : créer des répertoires vides

L'assistant de synchronisation de RcloneView inclut un commutateur **Créer des répertoires vides** à l'étape 1 (Configurer le stockage), aux côtés de la sélection du remote et du dossier source/destination. L'activer indique à l'opération de synchronisation sous-jacente de recréer également les répertoires sans fichiers, afin que l'arborescence de dossiers de destination corresponde exactement à la structure source — pas seulement aux fichiers qu'elle contient.

<img src="/support/images/en/blog/new-remote.png" alt="Étape 1 de l'assistant de synchronisation RcloneView avec l'option de création de répertoires vides" class="img-large img-center" />

Pour une migration structurelle ponctuelle, exécutez d'abord une simulation (Dry Run) avec l'option activée. La simulation liste précisément quels dossiers et fichiers seront créés sans toucher à la destination, ce qui est le moyen le plus rapide de confirmer que le problème des dossiers vides est réellement résolu avant de lancer le transfert.

## Confirmer le résultat avec la comparaison de dossiers

Après avoir lancé la synchronisation, utilisez la comparaison de dossiers (Folder Compare) de RcloneView pour vérifier les deux côtés répertoire par répertoire. RcloneView monte ET synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux, afin que vous puissiez comparer visuellement les arborescences source et destination côte à côte sans changer d'outil. Les filtres « Afficher les fichiers uniquement à gauche » et « Afficher les fichiers uniquement à droite » permettent de voir immédiatement si un dossier est bien arrivé.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Vue de comparaison de dossiers montrant une structure de dossiers correspondante entre la source et la destination" class="img-large img-center" />

Si vous maintenez la structure à long terme plutôt que d'effectuer une migration ponctuelle, enregistrez la tâche avec l'option des répertoires vides cochée afin que chaque exécution planifiée continue de recréer les dossiers d'espace réservé selon les besoins.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planification d'une tâche de synchronisation RcloneView récurrente pour maintenir la structure de dossiers vides à jour" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez l'assistant de synchronisation et sélectionnez vos remotes source et destination.
3. À l'étape 1, activez **Créer des répertoires vides** avant de configurer les filtres.
4. Exécutez une simulation pour confirmer la structure des dossiers, puis lancez la synchronisation.

Une structure de dossiers identique des deux côtés facilite grandement l'intégration de nouveaux membres d'équipe et l'audit du stockage.

---

**Guides associés :**

- [Dossiers vides et permissions sous macOS — Correction avec RcloneView](https://rcloneview.com/support/blog/fix-macos-empty-folders-permissions-rcloneview)
- [Nettoyer la corbeille vide dans le stockage cloud avec RcloneView](https://rcloneview.com/support/blog/cleanup-empty-trash-cloud-storage-rcloneview)
- [Corriger les fichiers manquants après le transfert lors d'une synchronisation cloud — RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />
