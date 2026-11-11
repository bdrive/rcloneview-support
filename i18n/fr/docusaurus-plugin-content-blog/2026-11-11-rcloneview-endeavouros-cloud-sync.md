---
slug: rcloneview-endeavouros-cloud-sync
title: "RcloneView sur EndeavourOS — Synchronisation et sauvegarde du stockage cloud"
authors:
  - steve
description: "Utilisez RcloneView sur EndeavourOS avec l'AppImage officielle. Prérequis GTK+3 et FUSE, montage de lecteurs cloud et synchronisation de plus de 90 fournisseurs cloud."
keywords:
  - RcloneView EndeavourOS
  - synchronisation cloud EndeavourOS
  - interface graphique rclone EndeavourOS
  - sauvegarde cloud Linux basé sur Arch
  - RcloneView AppImage
  - monter un lecteur cloud sur EndeavourOS
  - synchronisation Google Drive sur EndeavourOS
  - gestionnaire de fichiers multi-cloud Linux
  - sauvegarde cloud en rolling release
tags:
  - RcloneView
  - linux
  - platform
  - cloud-sync
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView sur EndeavourOS — Synchronisation et sauvegarde du stockage cloud

> EndeavourOS offre une base Arch en publication continue avec un bureau prêt à l'emploi, et l'AppImage officielle de RcloneView y fonctionne sans aucun paquet tiers.

Les utilisateurs d'EndeavourOS veulent généralement des logiciels à jour et peu de configuration manuelle. Le stockage cloud est souvent le maillon faible : Google Drive, OneDrive et les buckets S3 n'ont pas de client de bureau natif ici, et jongler avec plusieurs configurations en ligne de commande devient vite fastidieux. RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux, et embarque son propre rclone intégré.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Installer avec l'AppImage officielle

RcloneView est distribué uniquement via [rcloneview.com](https://rcloneview.com/src/download.html). Il n'existe pas de paquet AUR : ignorez donc les instructions `yay` ou `paru` que vous pourriez trouver ailleurs. Sur un système basé sur Arch, l'AppImage est le choix naturel. Téléchargez la version correspondant à votre architecture (x86_64 ou aarch64), rendez-la exécutable et lancez-la :

```bash
chmod +x RcloneView-*-x86_64.AppImage
./RcloneView-*-x86_64.AppImage
```

RcloneView est une application de bureau Flutter, pas une application Qt. Elle nécessite GTK+3, une session X11 ou Wayland active et une bibliothèque AppIndicator pour l'icône de la zone de notification. Les éditions de bureau par défaut d'EndeavourOS (KDE Plasma, Xfce, GNOME et d'autres) fournissent déjà un serveur d'affichage et, en général, GTK+3. Installez FUSE pour monter des lecteurs ; fuse3 est recommandé (`sudo pacman -S --needed fuse3`).

<img src="/support/images/en/blog/new-remote.png" alt="Ajouter un nouveau distant cloud dans RcloneView sur EndeavourOS" class="img-large img-center" />

Comme l'AppImage est autonome, un `pacman -Syu` en publication continue ne la remplacera pas. La mise à jour automatique n'existe que sur macOS : pour mettre à jour sous Linux, téléchargez la nouvelle AppImage depuis la même page.

## Connecter des distants et monter des lecteurs

Ouvrez **Remote > New Remote**. Google Drive, Dropbox, OneDrive, Box et pCloud se connectent via OAuth dans votre navigateur. S3, Backblaze B2 et Cloudflare R2 demandent des clés d'accès. Vos distants apparaissent sous forme d'onglets dans l'Explorer, et vous pouvez diviser jusqu'à quatre panneaux pour parcourir un partage NAS à côté d'un bucket cloud.

Pour travailler sur des fichiers cloud dans Dolphin ou Thunar, montez le distant. Cliquez sur l'icône Mount dans la barre d'outils du panneau, ou ouvrez Mount Manager et créez un nouveau montage. Sous Linux, vous choisissez un chemin local tel que `~/cloud/gdrive`, et le mode de cache `writes` par défaut convient à la plupart des modifications. N'activez **Allow other** que si d'autres utilisateurs locaux doivent accéder au montage.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Monter un distant cloud depuis l'explorateur de RcloneView sous Linux" class="img-large img-center" />

## Synchroniser et planifier des sauvegardes

Imaginez un poste de développeur avec `~/Projects` et `~/Documents`. Créez une tâche de synchronisation du disque local vers Backblaze B2, ajoutez un filtre `.git/` au Step 3 et lancez un Dry Run pour voir exactement ce qui sera transféré. La synchronisation unidirectionnelle ne modifie que la destination. La synchronisation bidirectionnelle (Beta) reste expérimentale : testez-la d'abord sur des dossiers non critiques.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Suivi du transfert en direct dans RcloneView pendant une sauvegarde sous Linux" class="img-large img-center" />

Avec une licence PLUS, le Step 4 ajoute une planification de type crontab : la tâche s'exécute chaque nuit pendant que RcloneView reste dans la zone de notification. RcloneView a besoin de votre session de bureau pour fonctionner et ne peut pas tourner comme service systemd. Sur un serveur Arch sans interface graphique, lancez `rclone rcd` sur ce serveur et connectez-vous-y depuis votre bureau via Connect Manager.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Créer une tâche de synchronisation planifiée dans RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html) en choisissant l'AppImage Linux adaptée à votre architecture.
2. Rendez l'AppImage exécutable, installez `fuse3` si vous avez besoin de montages, puis lancez-la depuis votre session de bureau.
3. Ajoutez vos distants cloud et montez ceux que vous voulez utiliser dans votre gestionnaire de fichiers.
4. Créez une tâche de synchronisation, testez-la avec Dry Run et planifiez-la si vous disposez de PLUS.

Un bureau en publication continue et une seule fenêtre multi-cloud forment une configuration de sauvegarde peu exigeante en maintenance.

---

**Guides associés :**

- [Performances du montage avec le cache VFS](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [Corriger les erreurs FUSE lors d'un montage Rclone](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)
- [Connection Manager — Rclone intégré et externe](https://rcloneview.com/support/blog/rcloneview-connection-manager-embedded-external)

<CloudSupportGrid />
