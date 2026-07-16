---
slug: sync-one-source-multiple-cloud-destinations-rcloneview
title: "Synchronisation 1:N — Sauvegardez une source vers plusieurs destinations cloud avec RcloneView"
authors:
  - kai
description: "Utilisez la synchronisation 1:N de RcloneView pour sauvegarder un dossier source vers plusieurs destinations cloud simultanément. Protégez vos fichiers avec des sauvegardes multi-cloud redondantes."
keywords:
  - 1 to N sync RcloneView
  - multiple cloud backup destinations
  - sync one source multiple clouds
  - redundant cloud backup RcloneView
  - multi-cloud sync backup
  - backup multiple cloud providers
  - RcloneView multiple destinations
  - parallel cloud backup
  - one source multiple backups RcloneView
  - automated multi-destination sync
tags:
  - RcloneView
  - backup
  - cloud-sync
  - multi-cloud
  - feature
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchronisation 1:N — Sauvegardez une source vers plusieurs destinations cloud avec RcloneView

> Une tâche de synchronisation, plusieurs destinations — RcloneView duplique une seule source vers autant de fournisseurs cloud que nécessaire en une seule exécution.

La plupart des stratégies de sauvegarde échouent au niveau de la redondance : les fichiers vont vers une seule destination, créant un point de défaillance unique. La synchronisation 1:N de RcloneView vous permet de sauvegarder un seul dossier source vers plusieurs destinations cloud au sein d'une même tâche — de sorte que vos données arrivent simultanément sur Google Drive, Backblaze B2 et un fournisseur compatible S3, sans exécuter de tâches distinctes pour chacun. Cette fonctionnalité est disponible avec la licence FREE et fonctionne avec toute combinaison de remotes cloud que vous avez configurés.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Fonctionnement de la synchronisation 1:N dans RcloneView

Lorsque vous créez une tâche de synchronisation dans le Job Manager de RcloneView, l'étape 1 de l'assistant en 4 étapes vous permet d'ajouter plusieurs dossiers de destination. Après avoir sélectionné votre source et votre première destination, cliquez sur **Add Destination** pour ajouter d'autres cibles. Chaque destination est synchronisée indépendamment mais pilotée par la même source — ce qui signifie que la source est lue une seule fois et que les écritures se font vers toutes les destinations en parallèle. Cela diffère de manière significative de l'exécution de tâches séparées : avec des exécutions distinctes, si votre source change entre les exécutions, chaque destination peut capturer un instantané légèrement différent.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring 1:N sync with multiple destinations in RcloneView" class="img-large img-center" />

Une configuration pratique pour une entreprise de médias numériques pourrait ressembler à ceci : la source est un dossier NAS de production local contenant les fichiers vidéo maîtres ; la destination 1 est Google Drive pour l'accès de l'équipe ; la destination 2 est Backblaze B2 pour l'archivage à long terme ; la destination 3 est Wasabi pour une copie hors site supplémentaire. Les trois destinations restent synchronisées sur le même état de la source à partir d'une seule exécution de tâche.

## Configuration d'une tâche de synchronisation multi-destinations

Ouvrez le **Job Manager** depuis l'onglet Home et cliquez sur **Add Job** pour créer une nouvelle tâche Sync. À l'étape 1, sélectionnez votre source (tout remote configuré ou dossier local). Après avoir choisi le premier dossier de destination, cliquez sur **Add Destination** pour insérer des cibles supplémentaires — chacune pointant vers un remote et un chemin de dossier différents. Donnez à la tâche un nom descriptif qui reflète l'intention multi-destinations.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a 1:N sync job to multiple cloud destinations in RcloneView" class="img-large img-center" />

À l'étape 2, configurez les paramètres de transfert partagés entre toutes les destinations : le nombre de transferts simultanés, les paramètres multi-thread et l'activation ou non de la vérification par somme de contrôle. Pour les tâches 1:N synchronisant vers des fournisseurs cloud ayant des limites de débit différentes, gardez un nombre de transferts simultanés modéré — un parallélisme agressif sur de nombreuses destinations à la fois peut déclencher une limitation chez les fournisseurs les plus stricts. L'étape 3 vous permet d'ajouter des règles de filtrage qui s'appliquent uniformément à toutes les destinations, afin de ne pas avoir à dupliquer la logique d'exclusion pour chaque cible.

## Vérifier la tâche avec un Dry Run

Avant de valider une synchronisation 1:N de grande ampleur, utilisez l'option **Dry Run** dans le Job Manager. Le dry run affiche chaque opération planifiée — les fichiers à copier vers chaque destination — sans effectuer de modification réelle. Pour une tâche synchronisant vers trois fournisseurs, l'aperçu liste les opérations par destination, vous donnant l'assurance que les chemins sont corrects et que la portée correspond à vos attentes.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing 1:N sync job history in RcloneView" class="img-large img-center" />

Après l'exécution, l'onglet **Job History** enregistre l'heure de début, la durée, le nombre total d'octets transférés et le statut final (Completed, Errored, Canceled) pour chaque exécution de tâche. Pour les équipes ayant des exigences de conformité relatives à la vérification des sauvegardes, ce journal fournit une piste d'audit prête à l'emploi sans outillage supplémentaire.

## Planifier des sauvegardes multi-destinations automatisées

Avec une licence PLUS, associez une planification de type cron à votre tâche 1:N à l'étape 4 pour qu'elle s'exécute automatiquement à l'intervalle de votre choix. Le bouton **Simulate schedule** affiche un aperçu des prochaines heures d'exécution avant l'enregistrement. Une fois active, l'intégration de RcloneView dans la barre système maintient la tâche en cours d'exécution en arrière-plan, et les notifications de fin de tâche confirment que toutes les destinations ont bien reçu les dernières données.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling 1:N multi-destination backup in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez deux remotes cloud ou plus via **Remote** > **New Remote**.
3. Créez une tâche **Sync** et utilisez **Add Destination** à l'étape 1 pour ajouter chaque fournisseur et dossier cible.
4. Exécutez un **Dry Run** pour vérifier la portée, puis enregistrez avec une planification pour une redondance multi-cloud automatisée.

Avec la synchronisation 1:N, une seule tâche RcloneView devient une véritable stratégie de sauvegarde multi-cloud — sans script supplémentaire, sans étape supplémentaire.

---

**Guides associés :**

- [Automatisez les sauvegardes cloud quotidiennes avec RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [Stratégie de sauvegarde multi-cloud avec RcloneView](https://rcloneview.com/support/blog/multi-cloud-backup-strategy-rcloneview)
- [Export et import de tâches — Workflows portables avec RcloneView](https://rcloneview.com/support/blog/job-export-import-portable-workflow-rcloneview)

<CloudSupportGrid />
