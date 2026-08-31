---
slug: rcloneview-garuda-linux-cloud-sync
title: "RcloneView sur Garuda Linux — Synchronisation et sauvegarde de stockage cloud"
authors:
  - steve
description: "Exécutez RcloneView sur Garuda Linux pour monter, synchroniser et sauvegarder plus de 90 fournisseurs cloud avec une interface graphique de bureau complète, sans paquet AUR requis."
keywords:
  - rcloneview garuda linux
  - synchronisation cloud garuda linux
  - stockage cloud garuda linux
  - install rcloneview arch based linux
  - sauvegarde garuda linux
  - stockage cloud garuda
  - rcloneview appimage garuda
  - synchronisation de fichiers garuda linux
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

# RcloneView sur Garuda Linux — Synchronisation et sauvegarde de stockage cloud

> Le bureau optimisé pour la performance de Garuda Linux s'associe bien avec l'interface graphique légère Flutter de RcloneView pour gérer le stockage cloud sans toucher à un terminal.

Garuda Linux est conçu pour les personnes qui veulent un système basé sur Arch sans passer un week-end entier à le configurer — un bureau préréglé, des paramètres par défaut sensés, et un accent mis sur le fait de se mettre au travail rapidement. RcloneView suit cette même philosophie pour le stockage cloud : une application de bureau native qui monte, synchronise et sauvegarde plus de 90 fournisseurs cloud depuis une seule fenêtre, sans avoir à scripter les commandes rclone à la main. Étant donné que Garuda est livré avec un bureau graphique complet dès le départ, RcloneView fonctionne exactement comme prévu — aucune solution de contournement headless nécessaire.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Installer RcloneView sur Garuda Linux

RcloneView n'est distribué que depuis [rcloneview.com](https://rcloneview.com/src/download.html) — il n'existe aucun paquet AUR à récupérer avec `pacman` ou un assistant AUR. Téléchargez la version `.AppImage` pour une option portable, sans installation, ou récupérez le paquet `.rpm` si vous préférez qu'il soit enregistré dans la base de données de paquets de votre système. Les versions x86_64 et aarch64 sont toutes deux disponibles, selon le matériel sur lequel tourne votre installation Garuda.

RcloneView est construit avec Flutter et Dart, et non avec Qt ou Electron, ce qui lui évite la chaîne de dépendances d'une autre boîte à outils. Il s'appuie sur GTK+3 et une bibliothèque d'indicateur de zone de notification (libayatana-appindicator3-1 ou libappindicator3-1) pour son icône de zone de notification, toutes deux standard sur les éditions KDE, GNOME et autres bureaux de Garuda. Pour monter le stockage cloud en tant que lecteur local, assurez-vous que `fuse3` est installé.

<img src="/support/images/en/blog/new-remote.png" alt="Écran de configuration d'un distant RcloneView sur Garuda Linux" class="img-large img-center" />

## Configurer les montages et les distants

Les éditions de bureau de Garuda exécutent X11 ou Wayland, et la fonction de montage de RcloneView fonctionne avec les deux. Ajoutez un distant depuis l'onglet Remote, authentifiez-vous via OAuth pour des fournisseurs comme Google Drive ou Dropbox, ou saisissez directement les identifiants pour le stockage compatible S3 ou basé sur des protocoles. Montez ce distant en tant que chemin local à l'aide de nfsmount, le type de montage par défaut de RcloneView sous Linux, et parcourez vos fichiers cloud via le gestionnaire de fichiers natif de Garuda comme s'ils étaient sur le disque.

Le mode cache est réglé par défaut sur « writes », équilibrant réactivité et utilisation de la mémoire — cela vaut la peine d'être vérifié si vous montez un distant plein de gros fichiers et souhaitez un contrôle plus fin de la mise en cache locale.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Montage d'un distant cloud depuis le Mount Manager de RcloneView sous Linux" class="img-large img-center" />

## Automatiser les sauvegardes et les tâches de synchronisation

Une fois vos distants connectés, le Job Manager gère le travail répétitif : sauvegarder un dossier local vers le stockage cloud, synchroniser deux fournisseurs l'un avec l'autre, ou refléter une source vers plusieurs destinations à la fois. Configurez des filtres pour ignorer les types de fichiers indésirables, et exécutez d'abord un Dry Run pour prévisualiser exactement ce qu'une tâche va modifier.

L'historique des tâches enregistre chaque exécution — heure de début, durée, vitesse de transfert et nombre de fichiers — de sorte que les sauvegardes planifiées laissent une piste d'audit que vous pouvez consulter sans fouiller dans les fichiers journaux.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planification d'une tâche de synchronisation cloud dans RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez l'AppImage ou le .rpm** depuis [rcloneview.com](https://rcloneview.com/src/download.html) — aucun paquet AUR n'existe, installez donc directement.
2. **Vérifiez fuse3 et GTK+3** présents sur votre système pour la prise en charge du montage et de la zone de notification.
3. **Ajoutez votre premier distant cloud** via l'onglet Remote et montez-le ou configurez une tâche de synchronisation.
4. **Enregistrez les tâches récurrentes** dans le Job Manager afin que les sauvegardes s'exécutent toujours de la même manière.

Le bureau prêt à l'emploi de Garuda et l'interface graphique native de RcloneView forment une combinaison simple — téléchargez une fois, connectez vos clouds, et gérez tout sans quitter l'environnement graphique autour duquel Garuda est construit.

---

**Guides associés :**

- [Installer RcloneView sur Arch Linux — Guide de synchronisation et de sauvegarde cloud](https://rcloneview.com/support/blog/rcloneview-arch-linux-cloud-sync)
- [RcloneView sur Manjaro Linux — Synchronisation de stockage cloud](https://rcloneview.com/support/blog/rcloneview-manjaro-linux-cloud-sync)
- [Installer RcloneView sur Fedora et RHEL — Guide de synchronisation cloud](https://rcloneview.com/support/blog/rcloneview-fedora-rhel-linux-cloud-sync)

<CloudSupportGrid />
