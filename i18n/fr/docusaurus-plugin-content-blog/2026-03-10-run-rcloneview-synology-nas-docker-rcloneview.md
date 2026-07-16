---
slug: run-rcloneview-synology-nas-docker-rcloneview
title: "Exécuter RcloneView sur un NAS Synology — Sauvegarde et synchronisation cloud depuis votre NAS"
authors:
  - tayson
description: "Transformez votre NAS Synology en un hub de sauvegarde cloud. Découvrez comment utiliser RcloneView avec un NAS Synology pour la synchronisation cloud automatisée, la sauvegarde et la gestion multi-cloud."
keywords:
  - rcloneview synology nas
  - synology cloud backup
  - synology cloud sync alternative
  - synology rclone
  - synology nas s3 backup
  - synology google drive sync
  - synology multi cloud
  - nas cloud backup tool
  - synology automated backup
  - synology nas cloud manager
tags:
  - synology
  - nas
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Exécuter RcloneView sur un NAS Synology — Sauvegarde et synchronisation cloud depuis votre NAS

> Votre NAS Synology contient des téraoctets de données irremplaçables. Cloud Sync, l'outil intégré de Synology, fonctionne pour des configurations basiques, mais dès que vous avez besoin de gestion multi-cloud, de planification, de comparaison de dossiers et de tâches par lots — RcloneView comble ces lacunes.

Les NAS Synology sont excellents pour le stockage local centralisé, mais leur intégration cloud a des limites. Synology Cloud Sync prend en charge environ 20 fournisseurs de cloud avec une synchronisation basique. Synology Hyper Backup gère les sauvegardes mais manque de gestion de fichiers multi-cloud. RcloneView complète les deux avec plus de 70 fournisseurs de cloud, une gestion visuelle des fichiers et une automatisation avancée.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi RcloneView pour Synology ?

### Au-delà de Synology Cloud Sync

| Fonctionnalité | Synology Cloud Sync | RcloneView |
|---------|-------------------|------------|
| Fournisseurs de cloud | ~20 | 70+ |
| Explorateur de fichiers à deux volets | ❌ | ✅ |
| Comparaison de dossiers | ❌ | ✅ |
| Transfert cloud-à-cloud | ❌ | ✅ |
| Tâches par lots | ❌ | ✅ |
| Alertes Slack/Discord | ❌ | ✅ |
| Règles de filtrage | Basiques | Filtres rclone complets |
| Remotes chiffrés | ❌ | ✅ (crypt) |
| Montage de lecteurs cloud | ❌ | ✅ |
| Fournisseurs compatibles S3 | Limité | Tous |

### Détection automatique Synology

RcloneView détecte automatiquement les NAS Synology présents sur votre réseau :

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Synology NAS auto-detection" class="img-large img-center" />

Aucune configuration réseau manuelle n'est nécessaire.

## Options de configuration

### Option 1 : RcloneView sur un ordinateur de bureau, connecté au NAS

L'approche la plus simple. Exécutez RcloneView sur votre ordinateur Windows/Mac/Linux :

1. Ajoutez votre NAS Synology comme remote (détection automatique ou via SFTP/WebDAV).
2. Ajoutez vos destinations cloud (S3, B2, Google Drive, etc.).
3. Créez des tâches de synchronisation/copie entre le NAS et le cloud.
4. Planifiez l'exécution automatique des tâches.

Cette approche convient bien aux particuliers et aux petits bureaux.

### Option 2 : RcloneView sur une machine dédiée

Utilisez un Raspberry Pi ou un vieil ordinateur portable comme contrôleur de sauvegarde dédié :

1. Installez RcloneView sur la machine dédiée.
2. Connectez-vous au NAS Synology via un montage réseau.
3. Configurez et planifiez toutes les tâches de sauvegarde.
4. Laissez-le tourner 24h/24 et 7j/7.

## Flux de sauvegarde

### NAS → Cloud (sauvegarde hors site)

Le flux de travail le plus critique. Sauvegardez votre NAS vers un stockage cloud :

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Backup NAS to cloud" class="img-large img-center" />

Cibles recommandées :

| Données du NAS | Cible cloud | Pourquoi |
|----------|-------------|-----|
| Photos et vidéos | Backblaze B2 | Économique, 6 $/To |
| Documents | Google Drive | Accessible, indexable |
| Données professionnelles | AWS S3 | Durable, de niveau entreprise |
| Tout (chiffré) | N'importe lequel + crypt | Sauvegarde à connaissance nulle |

### Cloud → NAS (miroir local)

Conservez des copies locales des données cloud pour un accès rapide :

```
Google Drive → NAS/CloudMirror/GoogleDrive/
OneDrive → NAS/CloudMirror/OneDrive/
```

### NAS → NAS (sauvegarde de site distant)

Si vous avez des NAS sur deux sites, synchronisez-les entre eux via RcloneView en utilisant un fournisseur de cloud comme stockage intermédiaire.

## Planifier des sauvegardes automatisées

Configurez des sauvegardes NAS nocturnes :

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule NAS cloud backup" class="img-large img-center" />

### Planning recommandé

| Tâche | Fréquence | Heure |
|-----|-----------|------|
| Données critiques → B2 | Nocturne | 2h00 |
| Photos → Google Drive | Nocturne | 3h00 |
| NAS complet → S3 | Hebdomadaire | Samedi minuit |
| Vérification (comparaison) | Hebdomadaire | Dimanche 6h00 |

## Vérifier les sauvegardes

Comparez le contenu du NAS avec la sauvegarde cloud :

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify NAS backup against cloud" class="img-large img-center" />

## Sauvegardes NAS chiffrées

Utilisez des remotes crypt pour chiffrer les données de votre NAS avant de les téléverser vers un stockage cloud. Le fournisseur de cloud ne voit jamais vos fichiers non chiffrés.

## Tâches par lots pour les administrateurs NAS

Automatisez toute votre routine de sauvegarde NAS :

1. Copier /photos → B2.
2. Copier /documents → Google Drive.
3. Copier /business → S3 (chiffré).
4. Comparer les trois.
5. Notifier via Slack.

Le tout en une seule tâche par lots planifiée.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Connectez-vous à votre NAS Synology** (détection automatique).
3. **Ajoutez des remotes de stockage cloud**.
4. **Créez et planifiez des tâches de sauvegarde**.
5. **Vérifiez avec la comparaison de dossiers**.

Les données de votre NAS sont précieuses. Offrez-leur un filet de sécurité hors site.

---

**Guides associés :**

- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Comparer le contenu de dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Chiffrer les sauvegardes cloud](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
