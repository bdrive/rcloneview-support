---
slug: run-rcloneview-unraid-server-cloud-sync
title: "Exécuter RcloneView sur Unraid — Sauvegarde cloud et synchronisation multi-cloud pour votre serveur"
authors:
  - tayson
description: "Unraid simplifie les serveurs domestiques et pour petites entreprises. Ajoutez RcloneView via Docker pour synchroniser vos partages Unraid vers le stockage cloud, pour une sauvegarde hors site et une gestion multi-cloud."
keywords:
  - unraid cloud backup
  - unraid rclone
  - unraid cloud sync
  - unraid rcloneview
  - unraid s3 backup
  - unraid google drive
  - unraid offsite backup
  - unraid docker cloud sync
  - unraid backup solution
  - unraid multi cloud
tags:
  - RcloneView
  - nas
  - docker
  - platform
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Exécuter RcloneView sur Unraid — Sauvegarde cloud et synchronisation multi-cloud pour votre serveur

> Unraid est excellent pour le stockage local. Mais les disques de parité ne protègent pas contre les incendies, le vol ou les ransomwares. Ajoutez RcloneView pour sauvegarder vos partages vers le cloud avec un gestionnaire de fichiers visuel.

Unraid est l'une des plateformes serveur les plus populaires pour un usage domestique et les petites entreprises. Son stockage basé sur la parité protège contre les pannes de disque, mais la protection locale ne suffit pas. Pour une véritable sécurité des données, des sauvegardes hors site sont indispensables. RcloneView s'exécute en tant que conteneur Docker sur Unraid, ajoutant la gestion cloud visuelle et des fonctionnalités de sauvegarde automatisée à votre serveur.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi Unraid + RcloneView ?

Les Community Apps d'Unraid incluent des plugins rclone basiques, mais ils sont souvent limités à la ligne de commande ou à une portée restreinte. RcloneView offre :

- **Navigateur de fichiers visuel** — visualisez vos partages Unraid aux côtés du stockage cloud
- **Plus de 70 fournisseurs cloud** — connectez-vous à n'importe quel cloud depuis votre serveur Unraid
- **Sauvegardes planifiées** — automatisez la protection hors site
- **Comparaison de dossiers** — vérifiez l'intégrité des sauvegardes
- **Sauvegardes chiffrées** — les distants crypt gardent vos données privées

## Installation via Docker

RcloneView s'exécute en tant que conteneur Docker sur Unraid. Installez-le via Community Apps ou configurez manuellement le conteneur.

Mappez vos partages Unraid en tant que volumes afin que RcloneView puisse accéder à vos données.

## Flux de travail clés

### Sauvegarder des partages vers le cloud

Ouvrez vos partages Unraid dans un panneau et le stockage cloud dans l'autre. Créez des tâches de sauvegarde pour les données critiques :

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Unraid to cloud backup" class="img-large img-center" />

### Planifier des sauvegardes hors site nocturnes

Configurez des sauvegardes automatisées qui s'exécutent chaque nuit pendant que votre serveur est inactif :

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Unraid backups" class="img-large img-center" />

### Vérifier l'intégrité des sauvegardes

La parité protège les données locales. Utilisez la Comparaison de dossiers pour vérifier les sauvegardes cloud :

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Unraid backup" class="img-large img-center" />

### Chiffrer les données sensibles

Utilisez des distants crypt pour chiffrer les sauvegardes avant qu'elles ne quittent votre serveur. Votre fournisseur cloud ne voit jamais les données non chiffrées.

### Stratégie de sauvegarde multi-cloud

Sauvegardez vers deux fournisseurs pour une protection maximale :

| Partage | Sauvegarde principale | Sauvegarde secondaire |
|-------|---------------|-----------------|
| Documents | Google Drive | Backblaze B2 |
| Média | Backblaze B2 | Wasabi |
| Photos | Google Photos (via Drive) | S3 |
| Appdata | B2 | S3 Glacier |

## Surveillez vos sauvegardes

Consultez l'historique des tâches pour vous assurer que les sauvegardes se terminent avec succès :

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Monitor backup jobs" class="img-large img-center" />

## Pour commencer

1. **Installez RcloneView** en tant que conteneur Docker sur Unraid.
2. **Mappez vos partages** en tant que volumes de conteneur.
3. **Ajoutez des comptes cloud** dans le gestionnaire de distants.
4. **Créez des tâches de sauvegarde** pour les partages critiques.
5. **Planifiez et vérifiez** avec la Comparaison de dossiers.

La parité protège contre les pannes de disque. Les sauvegardes cloud protègent contre tout le reste.

---

**Guides associés :**

- [Exécuter RcloneView dans Docker](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [Exécuter RcloneView sur TrueNAS](https://rcloneview.com/support/blog/rcloneview-truenas-cloud-backup-sync)
- [Sauvegarder un NAS vers plusieurs clouds](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)

<CloudSupportGrid />
