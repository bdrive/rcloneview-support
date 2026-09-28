---
slug: rcloneview-void-linux-cloud-sync
title: "RcloneView sur Void Linux — Synchronisation et sauvegarde de stockage cloud"
authors:
  - steve
description: "Installez et exécutez RcloneView sur Void Linux pour la gestion de fichiers multi-cloud, le montage et la synchronisation grâce à la version AppImage."
keywords:
  - RcloneView Void Linux
  - stockage cloud void linux
  - void linux appimage
  - rclone gui void linux
  - monter du stockage cloud sur void linux
  - outil de sauvegarde void linux
  - xbps rclone gui
  - void linux runit synchronisation cloud
  - gestionnaire de fichiers cloud void linux
  - gui cloud multiplateforme linux
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView sur Void Linux — Synchronisation et sauvegarde de stockage cloud

> Exécutez un gestionnaire multi-cloud graphique complet sur Void Linux sans attendre l'apparition d'un paquet XBPS.

La base de paquets en rolling release et indépendante de Void Linux (XBPS, runit) fait que de nombreuses applications GUI arrivent en retard ou ne sont jamais empaquetées du tout. RcloneView ne figure pas dans les dépôts XBPS, mais comme il est distribué sous forme de .AppImage, .deb et .rpm pour Linux depuis sa propre page de téléchargement, les utilisateurs de Void peuvent l'exécuter directement sans avoir besoin d'un build spécifique à la distribution. Un environnement de bureau avec X11 ou Wayland est requis, car RcloneView est une application GUI native, et non un service headless.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Installer RcloneView sur Void

La méthode la plus fiable sur Void est le .AppImage, car il embarque son propre environnement d'exécution et contourne entièrement les problèmes de nommage de paquets ou d'incompatibilité de dépendances de XBPS. Téléchargez le fichier `RcloneView-{version}-{arch}.AppImage` pour x86_64 ou aarch64, rendez-le exécutable, puis lancez-le directement depuis votre gestionnaire de fichiers ou votre terminal. Void ne maintient pas de dépôt APT ni RPM, donc si vous préférez la version .deb ou .rpm, vous devrez l'extraire manuellement plutôt que de l'installer via `xbps-install`. RcloneView n'est distribué que depuis rcloneview.com — il n'existe pas de paquet AUR, Flatpak ou Snap en solution de repli.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote setup running on Void Linux" class="img-large img-center" />

Avant de le lancer, vérifiez que GTK+3 ainsi que `libayatana-appindicator3-1` ou `libappindicator3-1` sont présents pour la prise en charge de la zone de notification système — la base minimale de Void n'installe pas ces éléments par défaut, contrairement à certaines distributions orientées bureau.

## Configurer les remotes et les montages

Une fois RcloneView lancé, ajoutez vos remotes cloud de la même manière que sur n'importe quelle autre plateforme : connexion OAuth pour des services comme Google Drive ou Dropbox, saisie d'identifiants pour les points de terminaison compatibles S3 ou SFTP. Le montage fonctionne via la méthode nfsmount du rclone intégré sous Linux, ce qui nécessite FUSE — installez `fuse3` via XBPS s'il n'est pas déjà présent, car les installations minimales de Void l'omettent souvent.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a cloud remote as a local drive on Void Linux" class="img-large img-center" />

RcloneView se connecte à plus de 90 fournisseurs et les monte et les synchronise tous depuis la même fenêtre, sous Windows, macOS et Linux — utile si vous répartissez votre travail entre un poste Void Linux et d'autres machines.

## Planifier des sauvegardes en gardant runit à l'esprit

RcloneView ne peut pas s'exécuter en tant que service systemd, et Void n'utilise pas du tout systemd — il utilise runit. Cette distinction n'a pas d'importance ici, car le Job Manager propre à RcloneView gère la planification en interne plutôt que de dépendre du système d'initialisation. Configurez un job de synchronisation planifié via le planificateur de type crontab (une fonctionnalité PLUS) afin que les sauvegardes s'exécutent selon un horaire pendant que l'application reste ouverte dans la zone de notification système.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring cloud backup job on Void Linux" class="img-large img-center" />

Si vous souhaitez un véritable démon en arrière-plan, sans aucune interface graphique, sous Void, c'est une tâche pour `rclone rcd` directement, et non pour RcloneView — l'application elle-même a toujours besoin d'un serveur d'affichage pour fonctionner.

## Pour commencer

1. **Téléchargez l'AppImage** depuis [rcloneview.com](https://rcloneview.com/src/download.html) et rendez-le exécutable.
2. Installez `fuse3` et la bibliothèque AppIndicator via XBPS si le montage ou la zone de notification ne fonctionnent pas d'emblée.
3. Ajoutez vos remotes cloud et vérifiez l'accès dans le panneau Explorer.
4. Créez un job de synchronisation ou de sauvegarde et, si vous le souhaitez, planifiez son exécution automatique.

Le minimalisme de Void ne signifie pas que vous devez gérer le stockage cloud manuellement — RcloneView y apporte le même workflow graphique que partout ailleurs.

---

**Guides associés :**

- [RcloneView sur Gentoo Linux — Synchronisation et sauvegarde de stockage cloud](https://rcloneview.com/support/blog/rcloneview-gentoo-linux-cloud-sync)
- [RcloneView sur Arch Linux — Synchronisation et sauvegarde de stockage cloud](https://rcloneview.com/support/blog/rcloneview-arch-linux-cloud-sync)
- [Installer RcloneView sur Ubuntu et Debian Linux](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)

<CloudSupportGrid />
