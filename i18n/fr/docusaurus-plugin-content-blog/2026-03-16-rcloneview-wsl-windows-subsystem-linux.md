---
slug: rcloneview-wsl-windows-subsystem-linux
title: "Utiliser RcloneView sur WSL — Synchronisation cloud depuis Windows Subsystem for Linux"
authors:
  - tayson
description: "WSL vous offre un environnement Linux sur Windows. Exécutez RcloneView dans WSL pour des performances de synchronisation cloud natives Linux tout en gardant votre workflow Windows intact."
keywords:
  - rcloneview wsl
  - wsl cloud sync
  - windows subsystem linux cloud
  - rclone wsl
  - wsl file sync
  - wsl cloud backup
  - wsl rcloneview setup
  - linux on windows cloud
  - wsl2 cloud storage
  - wsl file management
tags:
  - linux
  - windows
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Utiliser RcloneView sur WSL — Synchronisation cloud depuis Windows Subsystem for Linux

> Vous voulez des performances rclone natives Linux sans quitter Windows ? WSL2 vous offre un noyau Linux complet. RcloneView s'exécute à l'intérieur, combinant la fiabilité de Linux avec la commodité de Windows.

Windows Subsystem for Linux (WSL2) fournit un véritable noyau Linux fonctionnant aux côtés de Windows. Pour les utilisateurs qui préfèrent les outils Linux mais travaillent dans un environnement Windows, WSL2 offre le meilleur des deux mondes. RcloneView s'exécute nativement dans WSL, vous offrant des performances de synchronisation cloud dignes de Linux avec accès à vos systèmes de fichiers Windows et Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi utiliser WSL pour la synchronisation cloud ?

### Performances natives Linux

Les versions Linux de rclone offrent souvent de meilleures performances que les versions Windows pour certaines opérations, notamment les montages FUSE et les transferts à forte concurrence.

### Intégration de scripts

WSL fournit bash, cron et les outils Linux standard. Combinez l'interface graphique de RcloneView avec des scripts en ligne de commande pour des workflows avancés.

### Accéder aux fichiers Windows

WSL2 peut accéder à votre système de fichiers Windows via `/mnt/c/`, `/mnt/d/`, etc. Synchronisez les fichiers Windows vers un stockage cloud à l'aide d'outils Linux.

### Accéder aux fichiers Linux depuis Windows

Windows peut accéder aux fichiers WSL via le chemin réseau `\\wsl$\`. Les fichiers gérés par RcloneView dans WSL sont accessibles depuis les applications Windows.

## Installation

Installez RcloneView dans votre distribution WSL2 (Ubuntu, Debian, etc.) en suivant les étapes d'installation Linux :

<img src="/support/images/en/blog/new-remote.png" alt="Set up RcloneView in WSL" class="img-large img-center" />

## Workflows clés

### Synchroniser les documents Windows vers le cloud

Accédez à votre dossier Documents Windows depuis WSL et synchronisez vers un stockage cloud :

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sync Windows files via WSL" class="img-large img-center" />

### Planifier avec cron ou le planificateur RcloneView

Utilisez soit le cron Linux, soit le planificateur intégré de RcloneView pour des tâches automatisées :

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule cloud sync in WSL" class="img-large img-center" />

### Monter un stockage cloud

Montez un stockage cloud via FUSE dans WSL, puis accédez au chemin monté depuis les applications Linux et Windows.

### Sauvegarde de développement multiplateforme

Les développeurs utilisant WSL pour coder peuvent sauvegarder automatiquement leurs fichiers de projet WSL vers un stockage cloud :

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Back up dev projects" class="img-large img-center" />

## Conseils pour l'utilisation de WSL

- **Utilisez WSL2** (et non WSL1) pour un support complet du noyau Linux et de meilleures performances du système de fichiers
- **Stockez les fichiers Linux dans le système de fichiers WSL** pour de meilleures performances — l'accès à `/mnt/c/` est plus lent
- **Allouez suffisamment de mémoire** à WSL2 dans `.wslconfig` pour les gros transferts
- **Utilisez systemd** (disponible dans les versions récentes de WSL2) pour exécuter des services

## Pour commencer

1. **Installez WSL2** avec Ubuntu ou votre distribution préférée.
2. **Installez RcloneView** en suivant le guide d'installation Linux.
3. **Ajoutez vos comptes cloud** dans le gestionnaire de distants.
4. **Synchronisez, montez et planifiez** depuis votre environnement WSL.

Outils Linux, bureau Windows, cloud partout.

---

**Guides connexes :**

- [Installer RcloneView sur Ubuntu/Debian](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [RcloneView sur ARM Linux](https://rcloneview.com/support/blog/rcloneview-arm-linux-cloud-sync)
- [Exécuter RcloneView dans Docker](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)

<CloudSupportGrid />
