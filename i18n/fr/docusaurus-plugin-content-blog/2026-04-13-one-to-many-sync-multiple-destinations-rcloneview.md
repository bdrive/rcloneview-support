---
slug: one-to-many-sync-multiple-destinations-rcloneview
title: "Synchronisation 1:N — Synchroniser une source vers plusieurs destinations dans RcloneView"
authors:
  - tayson
description: "Utilisez la fonctionnalité de synchronisation 1:N de RcloneView pour dupliquer un dossier source vers plusieurs destinations cloud simultanément. Sauvegardez vers S3, Google Drive et Backblaze B2 en une seule tâche."
keywords:
  - 1:N sync RcloneView
  - synchroniser une source vers plusieurs destinations
  - sauvegarde multi-destinations
  - sauvegarde cloud plusieurs clouds
  - RcloneView synchronisation 1 vers N
  - réplication cloud plusieurs fournisseurs
  - dupliquer vers plusieurs clouds
  - fonctionnalité de synchronisation RcloneView
  - tâche de sauvegarde multi-cloud
  - synchronisation cloud one to many
tags:
  - feature
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchronisation 1:N — Synchroniser une source vers plusieurs destinations dans RcloneView

> La synchronisation 1:N de RcloneView vous permet de dupliquer un seul dossier source vers plusieurs destinations cloud en une seule tâche — sauvegardez simultanément vers Google Drive, Amazon S3 et Backblaze B2.

Un principe fondamental de la résilience des données est la règle de sauvegarde 3-2-1 : trois copies des données, sur deux supports différents, avec une copie hors site. Le stockage cloud rend cela possible sans disques physiques — mais exécuter manuellement des tâches de synchronisation distinctes vers chaque fournisseur est répétitif et source d'erreurs. La fonctionnalité de synchronisation 1:N de RcloneView vous permet de configurer un seul dossier source pour qu'il se synchronise simultanément vers plusieurs destinations cloud, de sorte qu'une seule exécution de tâche couvre toutes vos cibles de sauvegarde à la fois. Cette fonctionnalité est disponible avec la licence FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Qu'est-ce que la synchronisation 1:N ?

La synchronisation 1:N (synchronisation one-to-many) signifie qu'une source est dupliquée vers N distants de destination en une seule exécution de tâche. Lorsque vous lancez la tâche, RcloneView synchronise la source vers chaque destination configurée — en ajoutant les fichiers manquants, en mettant à jour les fichiers modifiés et, en option, en supprimant les fichiers qui ont été supprimés de la source.

Cela diffère de l'exécution séquentielle de tâches de synchronisation distinctes. Avec la synchronisation 1:N, toutes les destinations sont écrites pendant la même fenêtre d'exécution, et la progression de chaque destination est suivie dans l'onglet Transferring. L'historique des tâches (Job History) enregistre le résultat pour chaque destination dans le résumé de l'exécution.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="1:N sync job sending source to multiple cloud destinations in RcloneView" class="img-large img-center" />

## Configurer une tâche de synchronisation 1:N

La configuration d'une tâche de synchronisation multi-destinations utilise le même assistant de synchronisation en 4 étapes qu'une tâche classique. La différence se situe à l'étape 1 : après avoir sélectionné votre distant et dossier source, cliquez sur le bouton Add Destination pour ajouter d'autres distants de destination. Vous pouvez ajouter autant de destinations que nécessaire — par exemple, Google Drive, Amazon S3 et Backblaze B2.

**Exemple de flux de travail pour une stratégie de sauvegarde en production :**

1. **Source :** Dossier NAS local `/data/projects`
2. **Destination 1 :** Google Drive `/Backups/Projects`
3. **Destination 2 :** Bucket Amazon S3 `my-company-backup/projects`
4. **Destination 3 :** Bucket Backblaze B2 `projects-archive`

Chaque destination reçoit une copie identique du contenu source. Le nom de la tâche de synchronisation, les règles de filtrage et les paramètres avancés s'appliquent uniformément à toutes les destinations de la tâche.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring 1:N sync with multiple cloud destinations in RcloneView" class="img-large img-center" />

## Cas d'usage pratiques

**Mise en œuvre de la sauvegarde 3-2-1 :** Configurez une source locale → Google Drive + Amazon S3 + Backblaze B2. Une seule exécution de tâche, trois copies chez différents fournisseurs cloud.

**Distribution de contenu :** Une équipe de production vidéo synchronisant les exports finaux depuis son serveur de montage vers Dropbox (pour la relecture client), Google Drive (pour l'archivage interne) et un bucket d'origine CDN simultanément.

**Réplication régionale :** Une organisation synchronisant un référentiel de documents central vers des buckets cloud régionaux dans différentes zones géographiques pour des raisons de latence et de disponibilité.

**Redondance inter-fournisseurs :** Synchronisez un dossier OneDrive principal à la fois vers Backblaze B2 et Cloudflare R2, de sorte que si un fournisseur subit une panne, l'autre dispose toujours de copies à jour.

## Planifier des tâches de synchronisation 1:N

Pour les tâches 1:N qui doivent s'exécuter régulièrement, la synchronisation planifiée (licence PLUS) s'applique aux tâches multi-destinations tout comme aux tâches à destination unique. Configurez une planification de type crontab à l'étape 4 de l'assistant, et RcloneView exécute la synchronisation multi-destinations complète à chaque intervalle planifié. L'historique des tâches enregistre le résultat de chaque exécution, en indiquant si toutes les destinations ont bien reçu les mises à jour.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling 1:N multi-destination sync in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez tous les fournisseurs cloud cibles comme distants dans l'onglet Remote.
3. Ouvrez l'assistant de synchronisation et utilisez Add Destination à l'étape 1 pour configurer plusieurs destinations pour votre source.
4. Ajoutez éventuellement une planification (licence PLUS) pour exécuter automatiquement la synchronisation multi-destinations.

La synchronisation 1:N est l'une des fonctionnalités de RcloneView qui fait gagner le plus de temps pour les stratégies de sauvegarde — configurez une fois, protégez partout, à chaque exécution de la tâche.

---

**Guides connexes :**

- [Automatiser les sauvegardes cloud quotidiennes avec RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [Stratégie de sauvegarde multi-cloud avec RcloneView](https://rcloneview.com/support/blog/multi-cloud-backup-strategy-rcloneview)
- [Sauvegarder un NAS vers plusieurs clouds avec RcloneView](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)

<CloudSupportGrid />
