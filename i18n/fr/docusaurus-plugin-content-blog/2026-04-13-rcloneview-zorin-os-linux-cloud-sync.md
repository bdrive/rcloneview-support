---
slug: rcloneview-zorin-os-linux-cloud-sync
title: "RcloneView sur Zorin OS — Synchronisation et sauvegarde de stockage cloud"
authors:
  - tayson
description: "Installez et utilisez RcloneView sur Zorin OS pour la synchronisation et la sauvegarde de stockage cloud. Gestion cloud via GUI pour Google Drive, OneDrive, S3 et plus de 90 services sur Zorin OS."
keywords:
  - RcloneView Zorin OS
  - stockage cloud Zorin OS
  - synchronisation cloud Zorin OS
  - sauvegarde cloud Zorin OS
  - RcloneView Linux Debian
  - gestionnaire de fichiers cloud Zorin OS
  - installer RcloneView Zorin
  - GUI stockage cloud Linux
  - Zorin OS Google Drive
  - synchronisation cloud basée sur Ubuntu
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView sur Zorin OS — Synchronisation et sauvegarde de stockage cloud

> Installez RcloneView sur Zorin OS et gérez plus de 90 services de stockage cloud depuis une interface graphique — synchronisez Google Drive, OneDrive, Amazon S3 et bien plus sur votre bureau Zorin OS.

Zorin OS est une distribution Linux basée sur Ubuntu conçue avec une interface de bureau familière et soignée — particulièrement appréciée des utilisateurs venant de Windows ou macOS. Sa base Ubuntu/Debian signifie qu'elle fonctionne parfaitement avec les paquets `.deb`, ce qui rend l'installation de RcloneView simple. RcloneView est une application de bureau GUI construite avec Flutter qui nécessite un serveur d'affichage (X11 ou Wayland) et un environnement de bureau en cours d'exécution — le bureau basé sur GNOME de Zorin OS répond à ces exigences.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Installer RcloneView sur Zorin OS

RcloneView est distribué par téléchargement direct depuis [rcloneview.com](https://rcloneview.com/src/download.html). Il n'existe aucun dépôt apt ni paquet Snap — n'essayez pas `apt install rcloneview` ou `snap install rcloneview`, car aucun des deux n'existe. Téléchargez le paquet `.deb` correspondant à votre architecture depuis la page de téléchargement officielle.

**Installer le paquet .deb :**

```bash
sudo dpkg -i rclone_view-*-linux-x86_64.deb
```

Si `dpkg` signale des dépendances manquantes, résolvez-les avec :

```bash
sudo apt install -f
```

Cela installe automatiquement les bibliothèques GTK ou système manquantes sur Zorin OS (qui hérite du dépôt apt d'Ubuntu).

Autrement, utilisez le fichier `.AppImage` pour une installation portable ne nécessitant aucune intégration système :

```bash
chmod +x RcloneView-*-x86_64.AppImage
./RcloneView-*-x86_64.AppImage
```

<img src="/support/images/en/blog/new-remote.png" alt="Configuration de distants de stockage cloud dans RcloneView sur Zorin OS" class="img-large img-center" />

## Bibliothèques requises sur Zorin OS

Zorin OS est livré avec GTK+ 3.0 et X11/Wayland dans le cadre de son installation par défaut du bureau GNOME. Pour la prise en charge de la zone de notification, installez la bibliothèque AppIndicator si elle n'est pas déjà présente :

```bash
sudo apt install libayatana-appindicator3-1
```

Pour le montage de lecteurs cloud (fonctionnalité de lecteur virtuel), installez FUSE3 :

```bash
sudo apt install fuse3
```

Après l'installation, lancez RcloneView depuis le menu des applications ou le terminal. L'application s'intègre au bureau de Zorin OS, avec la prise en charge de l'icône de la zone de notification et des notifications de bureau natives pour la fin des tâches.

## Connexion au stockage cloud

RcloneView est livré avec un binaire rclone intégré — aucune installation séparée de rclone n'est nécessaire. Ajoutez vos services cloud via l'onglet Distant : cliquez sur Nouveau distant et sélectionnez votre fournisseur. Pour les services basés sur OAuth comme Google Drive, OneDrive et Dropbox, une fenêtre de navigateur s'ouvre pour l'authentification du compte. Pour les services compatibles S3, saisissez votre clé d'accès, votre clé secrète et l'URL du point de terminaison.

Le bureau basé sur GNOME de Zorin OS gère proprement la redirection du navigateur OAuth — la fenêtre d'authentification s'ouvre dans votre navigateur par défaut et les identifiants sont transmis automatiquement à RcloneView.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Synchronisation cloud à cloud en cours dans RcloneView sur Zorin OS" class="img-large img-center" />

## Synchroniser et monter le stockage cloud

Une fois les distants configurés, utilisez l'assistant de synchronisation pour créer des tâches de sauvegarde ou de migration. Sélectionnez les distants source et destination, configurez les options de transfert et les filtres, et planifiez éventuellement des exécutions récurrentes (licence PLUS). RcloneView fonctionne comme une application GUI sur Zorin OS — elle nécessite une session de bureau active et un serveur d'affichage. Elle ne peut pas être configurée directement comme un service systemd en arrière-plan ; pour des tâches planifiées sans surveillance sans session utilisateur, utilisez `rclone rcd` propre à rclone avec un service systemd et connectez-vous à celui-ci depuis RcloneView.

Pour monter le stockage cloud en tant que répertoire local, utilisez le Gestionnaire de montage dans l'onglet Distant. Sur Zorin OS, indiquez un chemin de point de montage et cliquez sur Enregistrer et monter. Le dossier monté apparaît dans Nautilus (le gestionnaire de fichiers par défaut de Zorin OS) et peut être consulté comme n'importe quel répertoire local.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Montage de Google Drive comme dossier local sur Zorin OS avec RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html) — sélectionnez le `.deb` Linux pour x86_64.
2. Installez avec `sudo dpkg -i rclone_view-*-linux-x86_64.deb` et exécutez `sudo apt install -f` si des dépendances sont manquantes.
3. Installez `fuse3` et `libayatana-appindicator3-1` si nécessaire pour le montage et la prise en charge de la zone de notification.
4. Ajoutez vos distants cloud et commencez la synchronisation depuis l'environnement de bureau familier de Zorin OS.

La compatibilité Ubuntu de Zorin OS rend l'installation de RcloneView simple, offrant aux utilisateurs un outil de gestion de stockage cloud piloté par GUI qui s'intègre naturellement au flux de travail soigné du bureau de Zorin OS.

---

**Guides associés :**

- [Installer RcloneView sur Ubuntu et Debian Linux](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [RcloneView sur Pop!_OS Linux — Synchronisation cloud](https://rcloneview.com/support/blog/rcloneview-pop-os-linux-cloud-sync)
- [RcloneView sur Fedora, RHEL et CentOS Linux](https://rcloneview.com/support/blog/rcloneview-fedora-rhel-centos-linux)

<CloudSupportGrid />
