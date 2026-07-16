---
slug: rcloneview-chromeos-linux-cloud-sync
title: "Utiliser RcloneView sur ChromeOS — Synchronisation cloud sur votre Chromebook via Linux"
authors:
  - tayson
description: "ChromeOS prend en charge les applications Linux. Utilisez RcloneView sur votre Chromebook pour gérer le stockage cloud au-delà de Google Drive — synchronisez avec S3, OneDrive, Dropbox et plus de 70 fournisseurs."
keywords:
  - synchronisation cloud chromeos
  - stockage cloud chromebook
  - rcloneview chromebook
  - chromeos rclone
  - gestionnaire de fichiers chromeos
  - applications linux chromeos
  - chromebook multi cloud
  - chromeos s3 sync
  - chromebook onedrive
  - gestion cloud chromeos
tags:
  - RcloneView
  - linux
  - platform
  - cloud-storage
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Utiliser RcloneView sur ChromeOS — Synchronisation cloud sur votre Chromebook via Linux

> Les Chromebooks sont parfaits pour Google Drive. Mais qu'en est-il de OneDrive, S3, Dropbox ou de votre NAS ? La prise en charge de Linux par ChromeOS vous permet d'exécuter RcloneView pour une gestion multi-cloud complète sur votre Chromebook.

Les Chromebooks sont conçus autour de Google Drive, mais de nombreux utilisateurs ont besoin d'accéder à d'autres fournisseurs cloud. Les étudiants peuvent avoir OneDrive via leur établissement, les professionnels ont besoin d'un accès S3, et toute personne migrant depuis une autre plateforme a des fichiers ailleurs. L'environnement Linux (Crostini) de ChromeOS vous permet d'installer RcloneView et de gérer tous vos comptes cloud depuis votre Chromebook.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Activer Linux sur ChromeOS

ChromeOS inclut un environnement Linux intégré (Crostini). Activez-le dans Paramètres → Avancé → Développeurs → Environnement de développement Linux.

Une fois activé, vous disposez d'un environnement Linux complet basé sur Debian, où RcloneView s'exécute nativement.

## Installer RcloneView

Installez RcloneView en suivant la méthode d'installation Linux standard. Le conteneur Linux de votre Chromebook possède son propre système de fichiers, avec un accès au dossier Téléchargements de ChromeOS.

<img src="/support/images/en/blog/new-remote.png" alt="Set up RcloneView on ChromeOS" class="img-large img-center" />

## Ce que vous pouvez faire

### Gérer tous vos clouds depuis un seul endroit

Parcourez Google Drive, OneDrive, S3, Dropbox et plus de 70 fournisseurs dans une seule interface :

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Multi-cloud on Chromebook" class="img-large img-center" />

### Transférer entre fournisseurs

Déplacez des fichiers entre deux comptes cloud sans les télécharger localement — essentiel sur les Chromebooks, dont le stockage local est limité.

### Sauvegarder les clouds autres que Google

Planifiez des sauvegardes depuis OneDrive ou Dropbox vers Google Drive ou S3 :

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule backup on Chromebook" class="img-large img-center" />

### Monter le stockage cloud

Montez un stockage distant en tant que lecteur local accessible depuis le gestionnaire de fichiers de ChromeOS.

## Conseils spécifiques à ChromeOS

- **Le stockage est limité** — les Chromebooks ont de petits SSD ; utilisez les transferts cloud-à-cloud pour éviter de saturer le stockage local
- **Le conteneur Linux partage le dossier Téléchargements** — les fichiers du dossier Téléchargements de ChromeOS sont accessibles depuis Linux
- **Allouez suffisamment d'espace disque** au conteneur Linux pour la mise en cache
- **Maintenez Linux à jour** — exécutez `sudo apt update && sudo apt upgrade` périodiquement

## Pour commencer

1. **Activez Linux** dans les paramètres ChromeOS.
2. **Installez RcloneView** en suivant le guide d'installation Linux.
3. **Ajoutez vos comptes cloud**.
4. **Gérez, synchronisez et transférez** — le tout depuis votre Chromebook.

Votre Chromebook vient de devenir une station de travail multi-cloud.

---

**Guides connexes :**

- [Installer RcloneView sur Ubuntu/Debian](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [RcloneView sur Linux ARM](https://rcloneview.com/support/blog/rcloneview-arm-linux-cloud-sync)
- [RcloneView sur WSL](https://rcloneview.com/support/blog/rcloneview-wsl-windows-subsystem-linux)

<CloudSupportGrid />
