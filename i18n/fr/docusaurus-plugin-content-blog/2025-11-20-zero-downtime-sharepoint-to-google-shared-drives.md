---
slug: zero-downtime-sharepoint-to-google-shared-drives-rcloneview
title: "Migration sans interruption de SharePoint vers Google Shared Drives avec RcloneView"
authors:
  - tayson
description: Transférez vos bibliothèques Microsoft 365 SharePoint Online vers Google Shared Drives sans interrompre les utilisateurs, en combinant l'Explorateur multi-cloud de RcloneView, les aperçus Compare, les tâches de synchronisation et les passages delta pilotés par le planificateur.
keywords:
  - sharepoint to google drive
  - google shared drive migration
  - rcloneview
  - zero downtime transfer
  - microsoft 365 to workspace
  - rclone compare
  - multi cloud sync
  - scheduler automation
  - sharepoint cutover plan
  - cloud migration blueprint
tags:
  - RcloneView
  - sharepoint
  - google-drive
  - migration
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migration sans interruption de SharePoint vers Google Shared Drives avec RcloneView

> Laissez les designers, la finance et les équipes projet continuer à travailler dans SharePoint pendant que vous alimentez Google Shared Drives en arrière-plan, puis basculez en une seule fenêtre de bascule.

Les bibliothèques SharePoint Online sont souvent chargées de dossiers avec des permissions complexes, de jeux de documents et de contrôles de données régionaux. Dans le même temps, les Shared Drives de Google Workspace promettent une collaboration et des quotas de stockage simplifiés, mais les outils natifs de transfert respectent rarement les métadonnées, les fenêtres delta ou la limitation de débit. RcloneView encapsule les backends SharePoint et Google Drive de rclone dans une interface graphique, ce qui vous permet de planifier des migrations multi-cloud avec des exécutions Compare échelonnées, des tâches de synchronisation et de copie, un contrôle qualité basé sur le montage, et des passages delta basés sur le planificateur.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Pourquoi planifier une bascule SharePoint -> Google sans interruption

- **Les équipes distribuées ne peuvent pas s'arrêter** -- les ressources marketing, les PMO et les contrats nécessitent un accès continu pendant que le nouveau Shared Drive se remplit.
- **Permissions granulaires** -- les bibliothèques SharePoint mélangent des dossiers connectés à Teams et des centres de documents autonomes ; vous avez besoin d'une méthode reproductible pour les reconstruire dans Shared Drives avec des journaux d'audit clairs.

Une stratégie sans interruption consiste à exécuter des synchronisations en plusieurs phases pendant que les deux plateformes restent en ligne, puis à basculer après le delta final.

## Plan de migration : panneau de contrôle multi-cloud

1. **Connectez les deux côtés** en utilisant le [Gestionnaire de distants](/howto/rcloneview-basic/remote-manager) ainsi que les guides des fournisseurs pour [SharePoint for Business](/howto/remote-storage-connection-settings/connect-using-cli/add-sharepoint-for-business) et [Google Shared Drives](/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive). RcloneView isole les jetons OAuth par locataire et les stocke avec les protections adéquates.
2. **Organisez les panneaux de l'Explorateur** de sorte que chaque panneau fasse référence à une bibliothèque correspondant à un Shared Drive.
3. **Les modèles de tâches** proviennent de [Créer des tâches de synchronisation](/howto/rcloneview-basic/create-sync-jobs) et de [Synchroniser les stockages distants](/howto/rcloneview-basic/synchronize-remote-storages). Les tâches de copie amorcent la cible ; les tâches de synchronisation gèrent le nettoyage unidirectionnel ; les exécutions Compare valident.
4. **Les montages pour le contrôle qualité** suivent [Monter un stockage cloud comme lecteur local](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive), permettant aux utilisateurs avancés de prévisualiser le contenu dans Finder ou l'Explorateur avant la bascule.
5. **Les planificateurs et la surveillance** s'appuient sur [Planification et exécution des tâches](/howto/rcloneview-advanced/job-scheduling-and-execution) et [Surveillance des transferts en temps réel](/howto/rcloneview-basic/real-time-transfer-monitoring) pour rendre les passages delta prévisibles.  

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />  
  

## Étape 1 -- Renforcer les connecteurs et les métadonnées

- Étiquetez chaque distant (`sp-marketing`, `sp-pmo`, `gdrive-regional-apac`) et restreignez le chemin racine à la bibliothèque spécifique. Cela permet de conserver une navigation rapide dans les distants au sein de [Parcourir et gérer le stockage distant](/howto/rcloneview-basic/browse-and-manage-remote-storage).

## Étape 2 -- Établir une référence avec les exécutions Compare

1. Ouvrez l'Explorateur à double panneau, pointez le côté gauche vers SharePoint, le côté droit vers le Shared Drive vide.
2. Utilisez [Comparer le contenu des dossiers](/howto/rcloneview-basic/compare-folder-contents) pour détecter les écarts de taille, de somme de contrôle et d'horodatage.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare SharePoint library to Google Shared Drive before migrating" class="img-large img-center" />

Les instantanés Compare de référence vous donnent un enregistrement judiciaire de l'état d'origine et aident à identifier les sous-sites obsolètes que vous pourriez archiver plutôt que déplacer.

## Étape 3 -- Préparer les tâches de copie et de synchronisation

- Créez une tâche de **copie** par unité commerciale pour alimenter le Shared Drive sans rien supprimer sur SharePoint. Référence : [Créer des tâches de synchronisation](/howto/rcloneview-basic/create-sync-jobs).  

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />  
   

## Étape 4 -- Automatiser les fenêtres delta avec le planificateur

Ouvrez le planificateur, activez-le globalement, puis attribuez des cadences par tâche :

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule staged SharePoint to Google migration jobs inside RcloneView" class="img-large img-center" />


## Étape 5 -- Liste de contrôle du jour de bascule

1. **Gelez les écritures** sur SharePoint (communiquez via Teams/Slack) mais gardez le site en ligne pour les besoins en lecture seule.
2. Exécutez l'ensemble final des tâches de synchronisation et Compare. Utilisez le diff Compare pour confirmer que seule une poignée de fichiers a changé depuis le dernier delta.
3. Montez le nouveau Shared Drive avec [Monter un stockage cloud comme lecteur local](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive) et faites vérifier ponctuellement par les responsables métier les arborescences de dossiers complexes.  

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />  
       


## Contrôle qualité post-migration et opérations de montage

Le Gestionnaire de montage permet aux ingénieurs, à la finance ou aux responsables créatifs d'ouvrir les nouveaux Shared Drives (ou le distant SharePoint hérité) en tant que lecteurs en lecture seule pour l'audit et la formation. 

## Plan du calendrier du projet

| Phase | Action RcloneView | Résultat |
| --- | --- | --- |
| Semaine 1 | Connecter les distants, référence Compare, créer les tâches de copie | Inventaire de chaque bibliothèque + Shared Drives amorcés |
| Semaine 2 | Delta nocturne du planificateur + rapport Compare hebdomadaire | Mises à jour continues avec visibilité sur les dérives |
| Semaine 3 | Montages pilotes, validation des permissions, formation des utilisateurs | Les parties prenantes prévisualisent Google Shared Drives en toute sécurité |
| Semaine de bascule | Gel de SharePoint, synchronisation/Compare finale, mise en service du Shared Drive | Quelques minutes d'indisponibilité avec journaux de validation signés |
| 2 semaines après | Synchronisation planifiée sur le distant hérité + copie d'archivage optionnelle vers S3/Wasabi | Preuve qu'aucun fichier n'a été manqué avant la mise hors service |


RcloneView transforme les migrations multi-cloud en un plan prévisible : configurez les distants, prévisualisez les différences, préparez les tâches de copie et de synchronisation, automatisez les deltas, et montez pour le contrôle qualité. Vos équipes restent productives sur SharePoint jusqu'au moment exact où vous les redirigez vers Google Shared Drives.

<CloudSupportGrid />
