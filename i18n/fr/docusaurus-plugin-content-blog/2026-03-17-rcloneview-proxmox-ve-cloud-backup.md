---
slug: rcloneview-proxmox-ve-cloud-backup
title: "Exécuter RcloneView sur Proxmox VE — Sauvegarde cloud pour vos machines virtuelles et conteneurs"
authors:
  - tayson
description: "Proxmox VE héberge vos VM et conteneurs. Ajoutez RcloneView pour sauvegarder les données de VM, les bibliothèques d'ISO et la configuration vers le stockage cloud, pour une reprise après sinistre hors site."
keywords:
  - proxmox cloud backup
  - proxmox rclone
  - proxmox offsite backup
  - proxmox ve cloud sync
  - proxmox backup s3
  - proxmox google drive backup
  - proxmox rcloneview
  - proxmox vm backup cloud
  - proxmox disaster recovery
  - proxmox cloud storage
tags:
  - RcloneView
  - platform
  - docker
  - backup
  - disaster-recovery
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Exécuter RcloneView sur Proxmox VE — Sauvegarde cloud pour vos machines virtuelles et conteneurs

> Proxmox VE sauvegarde les VM localement. Mais les sauvegardes locales ne survivent pas à une panne matérielle, un incendie ou un vol. Ajoutez RcloneView pour pousser vos sauvegardes de VM vers le stockage cloud, pour une reprise après sinistre complète.

Proxmox VE est l'un des hyperviseurs open source les plus populaires, exécutant des machines virtuelles et des conteneurs LXC pour les home labs et les environnements de production. Son Proxmox Backup Server intégré gère très bien les sauvegardes locales, mais une sauvegarde uniquement locale reste incomplète. RcloneView ajoute la couche cloud — en poussant les sauvegardes de VM, les bibliothèques d'ISO et les exports de configuration vers S3, B2, Google Drive, ou tout autre fournisseur cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi une sauvegarde cloud pour Proxmox ?

Les sauvegardes locales de Proxmox protègent contre la corruption de VM et la suppression accidentelle. Les sauvegardes cloud protègent contre :

- **Une panne matérielle** — le serveur entier tombe en panne
- **Un ransomware** — les sauvegardes locales chiffrées en même temps que les VM
- **Un sinistre physique** — incendie, inondation, vol
- **Une panne de site** — datacenter ou home lab hors service

## Options de déploiement

### Conteneur Docker sur Proxmox

Exécutez RcloneView comme conteneur Docker à l'intérieur d'un conteneur LXC léger sur votre hôte Proxmox.

### Conteneur LXC dédié

Créez un conteneur LXC minimal spécifiquement pour RcloneView, avec accès à votre stockage de sauvegarde.

## Flux de travail clés

### Synchroniser les sauvegardes de VM vers le cloud

Pointez RcloneView vers votre stockage de sauvegarde Proxmox et synchronisez vers le cloud :

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Proxmox backup to cloud" class="img-large img-center" />

### Planifier une sauvegarde hors site nocturne

Une fois que Proxmox a créé les sauvegardes locales, RcloneView les pousse vers le cloud :

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Proxmox cloud backup" class="img-large img-center" />

### Sauvegarder la bibliothèque d'ISO

Votre collection d'ISO et vos modèles de conteneurs sont difficiles à recréer. Sauvegardez-les vers le stockage cloud.

### Vérifier l'intégrité de la sauvegarde

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Proxmox backup" class="img-large img-center" />

### Chiffrer les données sensibles des VM

Les sauvegardes de VM peuvent contenir des données sensibles. Utilisez des remotes crypt pour chiffrer avant l'envoi.

## Stratégie recommandée

| Type de données | Niveau cloud | Rétention |
|-----------|-----------|-----------|
| Sauvegardes de VM (récentes) | S3 / B2 | 7 derniers jours |
| Sauvegardes de VM (archive) | S3 Glacier | 90 derniers jours |
| Bibliothèque d'ISO | B2 | Permanent |
| Configuration Proxmox | Google Drive | 30 derniers jours |

## Pour commencer

1. **Déployez RcloneView** en tant que conteneur sur Proxmox.
2. **Ajoutez des comptes cloud** comme destinations de sauvegarde.
3. **Créez des tâches de synchronisation** pointant vers votre stockage de sauvegarde.
4. **Planifiez après les sauvegardes locales** terminées.
5. **Vérifiez régulièrement** avec la comparaison de dossiers.

Les sauvegardes locales vous sauvent des erreurs. Les sauvegardes cloud vous sauvent des sinistres.

---

**Guides associés :**

- [Exécuter RcloneView dans Docker](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [Se protéger contre les ransomwares](https://rcloneview.com/support/blog/protect-cloud-storage-ransomware-backup-rcloneview)
- [Chiffrer les sauvegardes cloud](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
