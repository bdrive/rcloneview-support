---
slug: manage-uloz-to-cloud-sync-backup-rcloneview
title: "Gérer le stockage Uloz.to — Synchronisez et sauvegardez vos fichiers avec RcloneView"
authors:
  - casey
description: "Connectez le stockage cloud Uloz.to à RcloneView pour la gestion des fichiers par glisser-déposer, la sauvegarde planifiée et la synchronisation entre fournisseurs dans une seule application."
keywords:
  - Uloz.to
  - stockage cloud Uloz.to
  - gérer les fichiers Uloz.to
  - sauvegarde Uloz.to
  - synchronisation Uloz.to
  - RcloneView Uloz.to
  - distant Uloz.to
  - gestionnaire de fichiers cloud
  - alternative client Uloz.to
  - gestion de fichiers multi-cloud
tags:
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage Uloz.to — Synchronisez et sauvegardez vos fichiers avec RcloneView

> Arrêtez de jongler avec les envois via navigateur vers Uloz.to — gérez toute votre bibliothèque depuis un explorateur de fichiers de bureau à la place.

Uloz.to est un service populaire d'hébergement et de stockage de fichiers, mais son interface web n'a pas été conçue pour la sauvegarde en masse, la synchronisation planifiée, ou le déplacement de fichiers entre comptes et autres clouds. RcloneView ajoute Uloz.to comme distant aux côtés de votre autre stockage, afin que vous puissiez le parcourir, le sauvegarder et le maintenir synchronisé sans jamais ouvrir un onglet de navigateur. RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre, sur Windows, macOS et Linux — Uloz.to n'est qu'un onglet de plus dans la même interface.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ajouter Uloz.to comme distant

Ouvrez l'onglet Remote et cliquez sur **New Remote**, puis sélectionnez Uloz.to dans la liste des fournisseurs pour configurer la connexion. Une fois ajouté, il apparaît comme un onglet dans n'importe quel panneau Explorer, juste à côté de vos disques locaux et autres distants cloud. Le Remote Manager (Remote tab > Remote Manager) répertorie tous les distants configurés en un seul endroit, afin que vous puissiez modifier ou supprimer la connexion Uloz.to plus tard sans fouiller dans les écrans de paramètres.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Uloz.to as a new remote in RcloneView" class="img-large img-center" />

Dans l'Explorer, le menu contextuel de la barre de chemin fil d'Ariane inclut **Copy Full Path (with Remote)** — pratique pour récupérer un chemin de type `uloz:FolderName` si vous utilisez également le Terminal Rclone intégré pour des commandes ponctuelles.

## Synchroniser et sauvegarder automatiquement le contenu Uloz.to

Pour des sauvegardes récurrentes, configurez une tâche de synchronisation via l'assistant en 4 étapes : choisissez Uloz.to comme source ou destination, sélectionnez la direction unidirectionnelle « modifying destination only » pour une sauvegarde sûre et stable, et ajoutez des filtres à l'étape 3 pour ignorer les types de fichiers que vous ne souhaitez pas répliquer (fichiers `.iso` volumineux, dossiers temporaires, etc.). Exécutez d'abord un Dry Run pour prévisualiser exactement ce qui sera copié ou supprimé avant que quoi que ce soit ne bouge réellement.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job between Uloz.to and another cloud remote" class="img-large img-center" />

Une fois que vous êtes confiant dans la tâche, les utilisateurs de la licence PLUS peuvent y attacher une planification de type crontab pour que la sauvegarde Uloz.to s'exécute automatiquement — quotidiennement, hebdomadairement, ou selon la fréquence qui convient à votre flux de travail.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Uloz.to backup job in RcloneView" class="img-large img-center" />

## Vérifier ce qui a changé avec Folder Compare

Avant de faire confiance à une migration ou une sauvegarde, exécutez une comparaison de dossiers (Folder Compare) entre votre dossier Uloz.to et son équivalent sur un autre distant. La vue de comparaison signale les fichiers présents uniquement à gauche, uniquement à droite, et différents, côte à côte, afin que vous puissiez repérer les envois manquants ou les copies obsolètes avant qu'ils ne deviennent un problème.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Uloz.to folder contents against another cloud remote" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Uloz.to comme nouveau distant via l'onglet Remote.
3. Créez une tâche de synchronisation pour le sauvegarder vers un autre cloud ou un disque local.
4. Exécutez un Dry Run, puis confirmez avec Folder Compare après le premier transfert.

Intégrer Uloz.to dans un véritable flux de gestion de fichiers signifie moins d'envois manuels et beaucoup plus de confiance quant au fait que vos fichiers sont réellement sauvegardés.

---

**Guides connexes :**

- [Gérer le stockage Linkbox — Synchronisez et sauvegardez vos fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-linkbox-cloud-sync-backup-rcloneview)
- [Gérer la synchronisation cloud Pixeldrain — Sauvegardez vos fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-pixeldrain-cloud-sync-rcloneview)
- [Gérer le stockage Terabox — Synchronisez et sauvegardez vos fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-terabox-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
