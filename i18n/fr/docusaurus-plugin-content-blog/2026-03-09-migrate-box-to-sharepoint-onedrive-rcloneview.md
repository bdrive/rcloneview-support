---
slug: migrate-box-to-sharepoint-onedrive-rcloneview
title: "Comment migrer de Box vers SharePoint ou OneDrive — Migration cloud d'entreprise avec RcloneView"
authors:
  - tayson
description: "Vous passez de Box à Microsoft 365 ? Découvrez comment migrer vos fichiers de Box vers SharePoint Online ou OneDrive for Business tout en préservant la structure des dossiers grâce à RcloneView."
keywords:
  - migrate box to sharepoint
  - box to onedrive migration
  - box to microsoft 365 transfer
  - box sharepoint migration tool
  - move files from box
  - box migration tool
  - enterprise cloud migration
  - box to office 365
  - box data migration
  - box alternative migration
tags:
  - RcloneView
  - box
  - sharepoint
  - onedrive
  - migration
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Comment migrer de Box vers SharePoint ou OneDrive — Migration cloud d'entreprise avec RcloneView

> Votre entreprise a décidé de tout regrouper sur Microsoft 365. Étape un : migrer tous ces fichiers de Box vers SharePoint et OneDrive. Étape deux : ne rien perdre en cours de route.

Box a longtemps été un pilier du partage de fichiers en entreprise, mais de nombreuses organisations regroupent désormais leur écosystème cloud autour de Microsoft 365. Migrer de Box vers SharePoint Online ou OneDrive for Business est un projet d'envergure — surtout lorsqu'il s'agit de gérer des années de données accumulées, des structures de dossiers complexes et des espaces de travail partagés. RcloneView rend cette tâche gérable.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Planification de la migration

### Évaluez votre environnement Box

Avant de migrer, dressez l'inventaire de ce dont vous disposez :

- **Dossiers personnels** → Migrer vers des comptes OneDrive individuels.
- **Dossiers/espaces de travail partagés** → Migrer vers des bibliothèques de documents SharePoint.
- **Données archivées** → Envisager un transfert vers un stockage moins coûteux (S3, B2) plutôt que SharePoint.
- **Volume total de données** — Détermine le calendrier et l'approche.

### Correspondance des destinations

| Source Box | Destination Microsoft 365 |
|-----------|--------------------------|
| My Files | OneDrive for Business |
| Dossiers partagés | Sites d'équipe SharePoint |
| Dossiers de département | Bibliothèques de documents SharePoint |
| Archive/données froides | OneDrive ou Azure Blob Storage |

## Migration étape par étape

### 1) Ajoutez les remotes Box et Microsoft

Connectez les deux services dans RcloneView :

<img src="/support/images/en/blog/new-remote.png" alt="Add Box and SharePoint remotes" class="img-large img-center" />

Pour SharePoint, ajoutez-le comme distant OneDrive Business et indiquez l'URL du site SharePoint.

### 2) Parcourir et comparer

Ouvrez Box à gauche et SharePoint/OneDrive à droite :

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Box and SharePoint side by side" class="img-large img-center" />

### 3) Transférer par phases

N'essayez pas de tout migrer d'un coup. Priorisez :

**Phase 1 : projets actifs** — Fichiers utilisés quotidiennement.
**Phase 2 : espaces de travail partagés** — Dossiers d'équipe et espaces de collaboration.
**Phase 3 : archive** — Anciens projets et données historiques.

### 4) Exécutez des tâches de copie

Créez des tâches de copie pour chaque phase :

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Box to SharePoint migration job" class="img-large img-center" />

### 5) Vérifiez chaque phase

Après chaque phase, comparez la source et la destination :

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Box to SharePoint migration" class="img-large img-center" />

## Gestion des limitations

### Restrictions sur les noms de fichiers

SharePoint/OneDrive impose des règles de nommage plus strictes que Box :

- Caractères non autorisés : `" * : < > ? / \ |`
- Les noms de fichiers ne peuvent ni commencer ni se terminer par des espaces.
- Longueur de chemin maximale : 400 caractères.

Rclone gère automatiquement bon nombre de ces conversions pendant le transfert.

### Box Notes

Box Notes est un format propriétaire sans équivalent direct dans Microsoft 365. Ces fichiers devront être exportés en PDF ou recopiés manuellement dans OneNote/Word.

### Autorisations et partage

RcloneView transfère les fichiers mais pas les autorisations de partage. Après la migration, vous devrez reconfigurer le partage sur SharePoint/OneDrive. Prévoyez cela comme une étape distincte.

### Limites de débit

Box comme SharePoint appliquent des limites de débit d'API :

- **Box** : Varie selon le plan (généralement 10 à 20 requêtes/seconde).
- **SharePoint** : Microsoft limite le débit selon les schémas d'utilisation.

RcloneView respecte ces limites. Pour les migrations volumineuses, planifiez les transferts en dehors des heures de pointe et utilisez la reprise automatique (v1.3).

## Maintenir Box et SharePoint synchronisés pendant la transition

Tout le monde ne basculera pas le même jour. Planifiez des synchronisations pour maintenir les deux plateformes à jour :

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule sync during Box to SharePoint transition" class="img-large img-center" />

Cela laisse à votre équipe le temps de faire la transition progressivement, sans écart de données.

## Surveillez les transferts volumineux

Les migrations d'entreprise portent sur des téraoctets de données. Surveillez leur progression :

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Box to SharePoint migration" class="img-large img-center" />

## Tâches groupées pour le flux de migration

Utilisez les tâches groupées (Batch Jobs) de la v1.3 pour automatiser l'ensemble du processus de migration :

1. Copier Box → SharePoint (projets actifs).
2. Copier Box → OneDrive (fichiers personnels).
3. Comparer Box et SharePoint pour vérifier.
4. Envoyer une notification Slack une fois terminé.

## Après la migration

1. **Vérifiez tous les fichiers** — Lancez une comparaison de dossiers finale.
2. **Configurez les autorisations SharePoint** — Recréez les structures de partage.
3. **Formez votre équipe** — Aidez les utilisateurs à retrouver leurs fichiers dans le nouvel emplacement.
4. **Surveillez pendant 30 jours** — Conservez Box actif comme solution de secours.
5. **Décommissionnez Box** — Résiliez une fois la stabilité confirmée.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez Box et SharePoint/OneDrive** comme distants.
3. **Planifiez vos phases de migration**.
4. **Exécutez des tâches de copie** pour chaque phase.
5. **Vérifiez avec la comparaison de dossiers** après chaque phase.
6. **Planifiez des synchronisations** pendant la période de transition.

Une migration d'entreprise ne doit pas forcément rimer avec complexité d'entreprise.

---

**Guides associés :**

- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Comparer le contenu des dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Définir des limites de bande passante](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
