---
slug: sync-hidrive-to-onedrive-rcloneview
title: "Synchroniser HiDrive vers OneDrive — Sauvegarde cloud avec RcloneView"
authors:
  - tayson
description: "Synchronisez vos fichiers de HiDrive vers OneDrive avec RcloneView. Transférez le stockage Strato HiDrive directement vers Microsoft OneDrive sans téléchargement local."
keywords:
  - HiDrive to OneDrive
  - sync HiDrive OneDrive
  - HiDrive migration
  - Strato HiDrive sync
  - cloud-to-cloud transfer
  - HiDrive RcloneView
  - OneDrive backup
  - European cloud migration
  - RcloneView sync
  - cloud storage transfer
tags:
  - hidrive
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser HiDrive vers OneDrive — Sauvegarde cloud avec RcloneView

> Transférez vos fichiers de Strato HiDrive directement vers Microsoft OneDrive avec RcloneView — synchronisation cloud-à-cloud directe, sans téléchargement local requis.

HiDrive de Strato est un service de stockage cloud européen apprécié des entreprises ayant besoin d'une résidence des données conforme au RGPD. À mesure que les organisations adoptent Microsoft 365, beaucoup cherchent à consolider leurs fichiers HiDrive dans OneDrive pour une collaboration fluide au sein de Teams et SharePoint. RcloneView simplifie cette transition : ajoutez les deux services en tant que remotes, puis synchronisez les dossiers HiDrive directement vers OneDrive via l'interface graphique de RcloneView, sans télécharger les fichiers sur une machine locale intermédiaire.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter HiDrive et OneDrive

HiDrive utilise l'authentification OAuth dans rclone — lorsque vous ajoutez HiDrive comme remote dans RcloneView, une fenêtre de navigateur s'ouvre pour vous connecter avec vos identifiants Strato HiDrive et accorder l'accès. Le même flux OAuth s'applique à OneDrive : sélectionnez Microsoft OneDrive dans la liste des fournisseurs, authentifiez-vous via votre compte Microsoft, et le remote est configuré.

Une fois les deux remotes actifs, ouvrez-les côte à côte dans l'explorateur à double panneau de RcloneView. La structure de vos dossiers HiDrive apparaît d'un côté, votre OneDrive de l'autre. Cette disposition visuelle vous aide à planifier votre migration : identifiez quels dossiers HiDrive correspondent à quelles destinations OneDrive avant de créer des tâches de synchronisation.

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive and OneDrive remotes in RcloneView" class="img-large img-center" />

## Configurer la tâche de synchronisation

Utilisez l'assistant de synchronisation pour créer le transfert de HiDrive vers OneDrive. Sélectionnez votre dossier source HiDrive et le dossier de destination OneDrive, puis parcourez les étapes de configuration. La synchronisation unidirectionnelle (l'option stable par défaut) reflète le contenu de votre HiDrive vers OneDrive — les fichiers nouveaux et modifiés sont copiés, et en option, les fichiers supprimés de HiDrive sont également supprimés de OneDrive.

Pour les équipes consolidant des archives de projet, l'étape de filtrage est précieuse : définissez un âge maximal de fichier pour ne migrer que les fichiers créés ou modifiés au cours des deux dernières années, ou utilisez des filtres par type de fichier pour n'inclure que les documents, feuilles de calcul et présentations tout en excluant les fichiers vidéo volumineux. Des règles de filtre personnalisées comme `.tmp` ou `/.git/` vous permettent d'exclure les fichiers d'espace de travail encombrants de la migration.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing HiDrive folders to OneDrive with RcloneView" class="img-large img-center" />

Exécutez le mode Dry Run avant le transfert réel pour confirmer que la liste des fichiers correspond à vos attentes. La simulation montre exactement quels fichiers seront copiés sans effectuer de modifications — une étape utile lors du déplacement de données professionnelles entre fournisseurs.

## Planifier une synchronisation continue

Pour les équipes qui font fonctionner HiDrive et OneDrive en parallèle pendant une période de transition, la synchronisation planifiée (licence PLUS) maintient les deux services synchronisés. Définissez une planification récurrente — quotidienne, bihebdomadaire, ou selon un intervalle cron personnalisé — et RcloneView gère les exécutions de synchronisation en arrière-plan. L'historique des tâches enregistre chaque exécution avec l'heure de début, les fichiers transférés et le statut d'achèvement.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling recurring HiDrive to OneDrive sync in RcloneView" class="img-large img-center" />

Si vous devez vérifier que la synchronisation s'est correctement déroulée, utilisez Folder Compare pour vérifier que OneDrive contient désormais les fichiers attendus de HiDrive. La vue de comparaison affiche les fichiers présents uniquement à gauche, uniquement à droite, et ceux de taille différente, ce qui vous aide à repérer tout ce qui nécessite un nouveau transfert.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez HiDrive via le flux de connexion OAuth dans l'onglet Remote.
3. Ajoutez OneDrive via le flux de connexion OAuth.
4. Utilisez l'assistant de synchronisation pour transférer les dossiers HiDrive vers OneDrive, avec Dry Run pour prévisualiser d'abord.

Passer de HiDrive à OneDrive via RcloneView permet de garder le processus piloté par interface graphique et auditable, sans consommation de stockage local intermédiaire.

---

**Guides connexes :**

- [Gérer la synchronisation cloud HiDrive Strato avec RcloneView](https://rcloneview.com/support/blog/manage-hidrive-strato-sync-cloud-rcloneview)
- [Gérer la synchronisation et la sauvegarde cloud OneDrive avec RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Migration cloud-à-cloud avec RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)

<CloudSupportGrid />
