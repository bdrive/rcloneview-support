---
slug: backup-nas-to-multiple-clouds-rcloneview
title: "Comment sauvegarder votre NAS vers plusieurs clouds — Stratégie de sauvegarde 3-2-1 avec RcloneView"
authors:
  - tayson
description: "Protégez les données de votre NAS en les sauvegardant simultanément vers plusieurs fournisseurs cloud. Mettez en œuvre une véritable stratégie de sauvegarde 3-2-1 grâce aux tâches par lots de RcloneView."
keywords:
  - nas multi cloud backup
  - 3 2 1 backup strategy
  - nas cloud backup multiple
  - synology multi cloud backup
  - qnap multi cloud backup
  - nas backup strategy
  - nas to s3 and b2 backup
  - nas disaster recovery
  - multi cloud backup plan
  - nas off site backup
tags:
  - RcloneView
  - nas
  - backup
  - multi-cloud
  - best-practices
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Comment sauvegarder votre NAS vers plusieurs clouds — Stratégie de sauvegarde 3-2-1 avec RcloneView

> Une sauvegarde cloud, c'est bien. Deux sauvegardes cloud, c'est mieux. La règle du 3-2-1 dit : 3 copies, 2 supports différents, 1 hors site. Votre NAS est la copie une. Le cloud A est la copie deux. Le cloud B est la copie trois. RcloneView automatise tout cela.

Un NAS est une solution de stockage centralisée fantastique, mais il reste un seul appareil à un seul endroit. Une panne matérielle, un incendie, un vol ou une catastrophe naturelle peuvent le détruire avec tout ce qu'il contient. Sauvegarder vers plusieurs fournisseurs cloud — sur des infrastructures différentes, dans des régions différentes — vous offre une véritable reprise après sinistre.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## La stratégie 3-2-1

| Copie | Emplacement | Fournisseur |
|------|----------|----------|
| 1 (primaire) | NAS (local) | Synology/QNAP |
| 2 (sauvegarde cloud) | Cloud A | Backblaze B2 (6 $/To) |
| 3 (sauvegarde cloud) | Cloud B | AWS S3 ou Wasabi |

Trois copies. Deux types de stockage différents (NAS local + cloud). Une copie hors site (le cloud est hors site par définition).

## Configuration avec RcloneView

### 1) Connectez votre NAS et vos clouds

<img src="/support/images/en/blog/new-remote.png" alt="Add NAS and cloud remotes" class="img-large img-center" />

### 2) Créez des tâches de sauvegarde pour chaque cloud

**Tâche 1** : NAS → Backblaze B2 (sauvegarde cloud primaire).
**Tâche 2** : NAS → AWS S3 (sauvegarde cloud secondaire).

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create multi-cloud backup jobs" class="img-large img-center" />

### 3) Planifiez des sauvegardes nocturnes

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule multi-cloud NAS backup" class="img-large img-center" />

Échelonnez les horaires :
- 2h00 → NAS → Backblaze B2.
- 4h00 → NAS → AWS S3.

### 4) Utilisez les tâches par lots pour l'automatisation

Les tâches par lots de la v1.3 enchaînent tout :

1. Copier NAS → B2.
2. Copier NAS → S3.
3. Comparer NAS avec B2.
4. Comparer NAS avec S3.
5. Notifier via Slack.

### 5) Vérifiez les deux sauvegardes

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify multi-cloud backup" class="img-large img-center" />

## Optimisation des coûts

| Volume de données | B2 mensuel | S3 Standard-IA mensuel | Total |
|-------------|-----------|----------------------|-------|
| 1 To | 6 $ | 12,50 $ | 18,50 $ |
| 5 To | 30 $ | 62,50 $ | 92,50 $ |
| 10 To | 60 $ | 125 $ | 185 $ |

Pour la sauvegarde secondaire, utilisez des niveaux moins coûteux : S3 Glacier (4 $/To) ou Wasabi (7 $/To avec sortie de données gratuite).

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Connectez votre NAS et deux fournisseurs cloud**.
3. **Créez des tâches de copie** vers chaque cloud.
4. **Planifiez et automatisez** avec les tâches par lots.
5. **Vérifiez les deux sauvegardes** chaque semaine.

Deux clouds, un NAS, zéro risque de perte de données.

---

**Guides associés :**

- [RcloneView sur NAS Synology](https://rcloneview.com/support/blog/run-rcloneview-synology-nas-docker-rcloneview)
- [RcloneView sur NAS QNAP](https://rcloneview.com/support/blog/rcloneview-qnap-nas-cloud-backup-rcloneview)
- [Pourquoi la sauvegarde cloud-à-cloud est importante](https://rcloneview.com/support/blog/why-cloud-to-cloud-backup-matters-rcloneview)

<CloudSupportGrid />
