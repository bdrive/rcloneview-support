---
slug: rcloneview-truenas-cloud-backup
title: "Utiliser RcloneView avec TrueNAS pour la sauvegarde et la synchronisation cloud"
authors:
  - tayson
description: "Connectez RcloneView à TrueNAS (CORE ou SCALE) pour la sauvegarde cloud, la synchronisation et la gestion multi-cloud. Remplacez ou complétez les tâches Cloud Sync de TrueNAS avec toutes les fonctionnalités de rclone."
keywords:
  - rcloneview truenas
  - truenas cloud backup rclone
  - truenas scale rclone gui
  - truenas core cloud sync
  - rclone truenas setup
  - truenas s3 backup rcloneview
  - truenas google drive backup
  - truenas cloud storage management
  - backup truenas to cloud
  - truenas rclone integration
tags:
  - nas
  - cloud-backup
  - platform
  - linux
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Utiliser RcloneView avec TrueNAS pour la sauvegarde et la synchronisation cloud

> TrueNAS dispose de tâches Cloud Sync intégrées basées sur rclone — mais l'interface intégrée est limitée. Exécuter RcloneView aux côtés de TrueNAS débloque toutes les fonctionnalités de rclone : gestion multi-cloud, remotes Crypt, Bisync, règles de filtrage, comparaison de dossiers, et plus encore.

TrueNAS CORE et SCALE intègrent tous deux rclone en coulisses pour leur fonctionnalité de tâche Cloud Sync. Mais l'interface web n'expose qu'une fraction des capacités de rclone — options de fournisseurs limitées, aucune couche de chiffrement, pas de bisync, et aucune tâche inter-cloud. En exécutant RcloneView sur TrueNAS (via Docker, une VM ou un poste de travail distant), vous accédez à l'ensemble complet des fonctionnalités de rclone tout en continuant à utiliser TrueNAS comme plateforme de stockage principale.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## TrueNAS + RcloneView : deux approches d'intégration

### Approche 1 — RcloneView dans un conteneur TrueNAS SCALE (Docker)

TrueNAS SCALE prend en charge nativement les conteneurs Docker via son interface Apps. Vous pouvez exécuter RcloneView comme conteneur persistant :

1. Dans TrueNAS SCALE, accédez à **Apps → Available Applications** ou utilisez l'option **Custom App**.
2. Déployez l'image Docker de RcloneView avec un montage de volume pointant vers les chemins de vos datasets TrueNAS.
3. Accédez à l'interface web de RcloneView depuis votre navigateur.

Cela conserve RcloneView sur le NAS lui-même, de sorte que les tâches de sauvegarde s'exécutent sans nécessiter de machine séparée.

### Approche 2 — RcloneView sur un poste de travail, le NAS comme remote

Exécutez RcloneView sur votre ordinateur et ajoutez vos datasets TrueNAS comme remote :

- **SMB** : Ajoutez un partage Windows comme remote local ou SMB dans RcloneView.
- **SFTP** : Activez SFTP sur TrueNAS et ajoutez-le comme remote SFTP dans RcloneView.
- **NFS** : Montez votre partage NFS du NAS localement et traitez-le comme un chemin local dans RcloneView.

Cette approche est plus simple à mettre en place et fonctionne sans expertise Docker.

## Configuration de SFTP depuis TrueNAS

La méthode d'accès distant la plus fiable :

### Étape 1 — Activer SSH sur TrueNAS

Dans TrueNAS : **System → Services → SSH → Enable**. Créez un utilisateur dédié avec un accès limité à vos datasets de sauvegarde.

### Étape 2 — Ajouter TrueNAS comme remote SFTP dans RcloneView

<img src="/support/images/en/blog/new-remote.png" alt="Add TrueNAS SFTP remote in RcloneView" class="img-large img-center" />

1. Cliquez sur **New Remote** dans RcloneView.
2. Sélectionnez **SFTP**.
3. Entrez l'IP de votre TrueNAS, le port SSH (par défaut 22), le nom d'utilisateur, et la clé SSH ou le mot de passe.
4. Définissez le chemin racine vers votre dataset (par exemple, `/mnt/tank/Backups`).
5. Enregistrez.

RcloneView affiche désormais vos datasets TrueNAS comme un remote navigable.

## Tâches de sauvegarde cloud pour TrueNAS

Avec TrueNAS accessible comme remote SFTP, vous pouvez créer des tâches de sauvegarde complètes :

### Sauvegarder les datasets TrueNAS vers S3

1. Créez une nouvelle tâche **Sync** dans RcloneView.
2. Source : `truenas-sftp:/mnt/tank/Photos/`
3. Destination : `s3-backup:truenas-photos-backup/`
4. Activez la vérification par checksum pour l'intégrité des données.
5. Planifiez une exécution nocturne.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule TrueNAS to S3 backup job" class="img-large img-center" />

### Sauvegarde chiffrée vers le cloud

Pour les datasets sensibles, ajoutez une couche remote Crypt :

1. Créez un remote Crypt qui encapsule votre remote S3.
2. Définissez le remote Crypt comme destination au lieu du remote S3 brut.
3. Les fichiers sont chiffrés côté client avant de quitter votre TrueNAS.

### Sauvegarde multi-cloud

Utilisez RcloneView pour sauvegarder le même dataset TrueNAS vers deux fournisseurs cloud simultanément :

- Tâche 1 : `truenas-sftp:/mnt/tank/` → `s3-primary:` (quotidienne)
- Tâche 2 : `truenas-sftp:/mnt/tank/` → `b2-secondary:` (hebdomadaire)

## Avantages par rapport au Cloud Sync intégré de TrueNAS

| Fonctionnalité | TrueNAS Cloud Sync | RcloneView |
|---------|-------------------|-----------|
| Support des fournisseurs | ~20 fournisseurs | 70+ fournisseurs |
| Couche Crypt/chiffrement | ✗ | ✓ |
| Bisync (bidirectionnel) | ✗ | ✓ |
| Règles de filtrage | Limitées | Support complet des filtres rclone |
| Comparaison de dossiers | ✗ | ✓ |
| Inter-cloud (cloud A → cloud B) | ✗ | ✓ |
| Planification des tâches | ✓ | ✓ |
| Surveillance en temps réel | Limitée | ✓ |

## Surveillance et vérification

Utilisez la **Comparaison de dossiers** de RcloneView pour vérifier périodiquement que votre sauvegarde TrueNAS correspond au stockage cloud :

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify TrueNAS backup in cloud with folder comparison" class="img-large img-center" />

Comparez la source TrueNAS à la destination cloud — tout fichier manquant ou modifié apparaît immédiatement. Planifiez une exécution de vérification mensuelle comme contrôle d'intégrité des données.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Activez SSH sur TrueNAS** et ajoutez-le comme remote SFTP dans RcloneView.
3. **Créez des tâches de sauvegarde** depuis les datasets TrueNAS vers votre ou vos fournisseurs cloud.
4. **Planifiez et chiffrez** — configurez des tâches de sauvegarde nocturnes et ajoutez un remote Crypt pour les datasets sensibles.

TrueNAS est un excellent logiciel NAS. Associez-le à RcloneView et vous obtenez une stratégie de sauvegarde cloud complète et flexible qui va bien au-delà de ce qu'offrent les outils intégrés de TrueNAS.

---

**Guides connexes :**

- [Exécuter RcloneView sur Synology NAS](https://rcloneview.com/support/blog/rcloneview-synology-rclone-gui)
- [Exécuter RcloneView dans Docker](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [Sauvegarder un NAS vers plusieurs clouds](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)

<CloudSupportGrid />
