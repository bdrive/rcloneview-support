---
slug: fix-cloud-sync-duplicate-files-rcloneview
title: "Résoudre les fichiers en double créés par la synchronisation cloud — comment corriger avec RcloneView"
authors:
  - tayson
description: "Résolvez les problèmes de synchronisation cloud qui créent des fichiers en double — identifiez les causes profondes, supprimez les doublons et configurez les tâches de synchronisation RcloneView pour éviter que cela se reproduise."
keywords:
  - cloud sync duplicates
  - sync creating duplicate files
  - duplicate file fix
  - RcloneView deduplication
  - cloud backup duplicates
  - sync conflict files
  - fix duplicate uploads
  - cloud storage cleanup
  - rclone duplicate fix
  - cloud sync misconfiguration
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - duplicates
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Résoudre les fichiers en double créés par la synchronisation cloud — comment corriger avec RcloneView

> Une synchronisation cloud qui produit des fichiers en double révèle une erreur de configuration précise — les paramètres de type de tâche et l'outil Folder Compare de RcloneView permettent de diagnostiquer, nettoyer et prévenir facilement ce problème.

Les opérations de synchronisation cloud qui produisent des fichiers en double — des copies portant le même nom mais avec des horodatages de modification différents, ou des fichiers avec des suffixes comme `-copy` ou `(1)` — augmentent les coûts de stockage à chaque exécution et révèlent un problème de configuration sous-jacent. RcloneView utilise le moteur de synchronisation déterministe de rclone, et lorsque des doublons apparaissent, la cause principale est presque toujours une incohérence de type de tâche, des opérations conflictuelles, ou des conflits de synchronisation bidirectionnelle.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi la synchronisation produit des doublons

La cause la plus fréquente : utiliser le type de tâche **Copy** alors que **Sync** devrait être utilisé. Une tâche Copy ajoute toujours des fichiers à la destination — si la destination contient déjà des fichiers d'une exécution précédente, une seconde copie crée des doublons avec des horodatages plus récents ou des suffixes ajoutés. Passer au type de tâche **Sync** dans le **Job Manager** garantit que la destination reflète exactement la source : les fichiers en trop à la destination sont supprimés, et seules les différences sont transférées.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring Sync job type in RcloneView Job Manager to prevent duplicates" class="img-large img-center" />

Le mode de synchronisation **Bidirection** de RcloneView (actuellement en bêta) peut produire des copies de conflit lorsque les deux côtés modifient le même fichier entre deux exécutions de synchronisation. Rclone crée alors une copie de conflit d'un côté pour préserver les deux versions. Pour les flux de travail en production, la synchronisation unidirectionnelle (le mode par défaut « Modifying destination only ») évite entièrement ce problème — n'utilisez la synchronisation bidirectionnelle que lorsque c'est réellement nécessaire.

## Trouver et supprimer les doublons existants

Utilisez l'outil **Folder Compare** de RcloneView pour identifier les fichiers portant le même nom mais avec un contenu différent existant à deux emplacements. Le filtre « different files » met en évidence les fichiers dont la taille ne correspond pas, tandis que le filtre « same files » confirme les correspondances exactes. Les fichiers présents des deux côtés mais qui ne devraient pas être dupliqués peuvent être supprimés d'un côté à l'aide de l'action de suppression de Folder Compare.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare to identify duplicate files in RcloneView" class="img-large img-center" />

Pour nettoyer un grand nombre de doublons existants au sein d'un même cloud, l'onglet **Terminal** intégré de RcloneView permet d'exécuter `rclone dedupe` avec les indicateurs de stratégie de déduplication appropriés — identifiant les fichiers de contenu identique quel que soit leur nom et ne conservant qu'une seule copie. Le terminal offre un accès complet à la CLI rclone sans quitter l'interface de RcloneView.

## Configurer la synchronisation pour éviter que cela se reproduise

Dans le **Job Manager**, vérifiez les paramètres suivants pour un comportement de synchronisation propre, sans doublons :
- Utilisez le type de tâche **Sync** pour les opérations de mise en miroir (pas Copy)
- Réglez la direction de synchronisation sur **« Modifying destination only »** (unidirectionnelle) pour un comportement stable
- Activez **Dry Run** avant la première exécution sur une nouvelle destination pour vérifier la liste des opérations

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing clean sync runs with no duplicates in RcloneView" class="img-large img-center" />

Activer la comparaison par checksum dans les Paramètres avancés rend la synchronisation plus précise — les fichiers sont comparés à la fois par hash et par taille plutôt que par horodatage et taille uniquement, ce qui évite les cas où des fichiers de taille identique mais de contenu différent sont considérés comme identiques.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Identifiez dans le Job Manager les tâches produisant des doublons — passez les tâches **Copy** en **Sync** lorsque c'est pertinent.
3. Utilisez **Folder Compare** pour trouver et supprimer les doublons existants entre la source et la destination.
4. Activez **Dry Run** avant d'exécuter des tâches sur de nouvelles destinations afin de vérifier le comportement avant validation.

Les fichiers en double dans la synchronisation cloud constituent un problème de configuration qui peut être résolu — les bons paramètres de type de tâche et de direction de synchronisation dans RcloneView évitent qu'ils n'apparaissent dès le départ.

---

**Guides connexes :**

- [Trouver et supprimer les fichiers en double dans le stockage cloud avec RcloneView](https://rcloneview.com/support/blog/find-remove-duplicate-files-cloud-storage-rcloneview)
- [Sync vs Copy vs Move — différences expliquées avec RcloneView](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)
- [Dry Run — prévisualiser la synchronisation avant le transfert avec RcloneView](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
