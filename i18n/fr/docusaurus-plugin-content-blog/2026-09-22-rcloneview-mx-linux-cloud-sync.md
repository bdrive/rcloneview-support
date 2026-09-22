---
slug: rcloneview-mx-linux-cloud-sync
title: "RcloneView sur MX Linux — Synchronisation et sauvegarde du stockage cloud"
authors:
  - casey
description: "Exécutez RcloneView sur MX Linux via .deb ou AppImage et gérez plus de 90 fournisseurs cloud avec synchronisation par glisser-déposer, montage et sauvegarde planifiée dans une seule interface graphique."
keywords:
  - RcloneView MX Linux
  - stockage cloud MX Linux
  - GUI rclone MX Linux
  - installer RcloneView deb
  - synchronisation cloud MX Linux
  - sauvegarde cloud MX Linux
  - client cloud basé sur Debian
  - gestionnaire cloud multiplateforme Linux
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView sur MX Linux — Synchronisation et sauvegarde du stockage cloud

> Exécutez RcloneView sur MX Linux via le paquet .deb officiel ou l'AppImage, et gérez chaque remote cloud pris en charge par rclone depuis une interface graphique native.

MX Linux s'est forgé sa réputation en étant léger et basé sur Debian sans reprendre les versions de paquets plus conservatrices de Debian, ce qui en fait un choix courant pour le matériel ancien et les bureaux minimalistes. Cette combinaison est exactement ce dont un gestionnaire de fichiers cloud a besoin pour rester discret : un faible encombrement, un véritable environnement de bureau, et une compatibilité .deb héritée directement de Debian. RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux, si bien qu'une machine MX Linux bénéficie du même ensemble de fonctionnalités que n'importe quelle autre plateforme prise en charge, et non d'une version allégée.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Installer RcloneView sur MX Linux

Comme MX Linux est basé sur Debian, le paquet `.deb` de la [page de téléchargement officielle](https://rcloneview.com/src/download.html) s'installe de la même manière que sur Debian ou Ubuntu — téléchargez la version x86_64 ou aarch64 et installez-la avec le gestionnaire de paquets de votre choix (MX Package Installer, GDebi, ou `dpkg -i` depuis un terminal). Si vous préférez éviter complètement le gestionnaire de paquets, l'AppImage fonctionne aussi : rendez-le exécutable et lancez-le directement, sans étape d'installation.

Il n'existe aucun dépôt ou PPA spécifique à MX Linux pour RcloneView, ni de paquet communautaire de type AUR — la page de téléchargement est le seul canal de distribution officiel. Avant d'installer, vérifiez que GTK+ 3.0 ainsi que `libayatana-appindicator3-1` ou `libappindicator3-1` sont présents pour l'icône de la zone de notification, et que FUSE (fuse3 recommandé) est installé si vous prévoyez de monter des remotes comme des lecteurs locaux.

<img src="/support/images/en/blog/new-remote.png" alt="Fenêtre principale de RcloneView sous MX Linux avec une boîte de dialogue de nouveau remote ouverte" class="img-large img-center" />

## Connecter des remotes cloud

La configuration des remotes sous MX Linux fonctionne exactement comme sur n'importe quelle autre distribution Linux prise en charge par RcloneView. Ouvrez l'onglet Remote > New Remote, choisissez un fournisseur, puis authentifiez-vous via une fenêtre contextuelle du navigateur (Google Drive, Dropbox, OneDrive, Box, pCloud) ou saisissez directement les identifiants (Amazon S3, Backblaze B2, SFTP). Le binaire rclone embarqué communique par défaut avec `http://127.0.0.1:5582`, il n'y a donc pas d'installation rclone distincte à gérer, sauf si vous souhaitez spécifiquement vous connecter à une instance rclone externe fonctionnant ailleurs sur le réseau.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Montage d'un remote cloud comme lecteur local sous MX Linux avec RcloneView" class="img-large img-center" />

Une fois connecté, montez un remote via `nfsmount` et il se comportera comme n'importe quel autre chemin local — n'importe quel gestionnaire de fichiers ou application du système peut le parcourir sans savoir qu'il est en réalité hébergé dans le cloud.

## Planifier des sauvegardes

Pour une machine MX Linux allumée la majeure partie de la journée, un job de synchronisation planifié transforme l'application en un outil de sauvegarde à configurer une fois pour toutes. Parcourez l'assistant Sync en 4 étapes, appliquez des filtres pour ignorer les répertoires de cache ou les fichiers trop volumineux, et avec une licence PLUS, associez une planification de type crontab afin que le job s'exécute sans que vous ayez à le lancer manuellement.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Création d'un job de synchronisation cloud planifié sous MX Linux dans RcloneView" class="img-large img-center" />

Job History enregistre la durée, la vitesse de transfert et le nombre de fichiers de chaque exécution, ce qui permet de confirmer facilement qu'une sauvegarde planifiée s'est réellement terminée, plutôt que d'avoir échoué silencieusement pendant la nuit.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html) — récupérez le .deb correspondant à votre architecture, ou l'AppImage si vous préférez éviter l'installation.
2. Installez le paquet (ou rendez l'AppImage exécutable) et vérifiez que GTK+3 et FUSE sont présents.
3. Ajoutez votre premier remote cloud via l'onglet Remote > New Remote.
4. Configurez une synchronisation ou un montage pour commencer à gérer le stockage cloud depuis MX Linux.

Quel que soit le paquet installé, MX Linux bénéficie de la même expérience complète de synchronisation et de montage cloud que n'importe quel autre bureau Linux pris en charge.

---

**Guides associés :**

- [RcloneView sur Debian Linux — Synchronisation cloud](https://rcloneview.com/support/blog/rcloneview-debian-linux-cloud-sync)
- [Installer RcloneView sur Ubuntu et Debian Linux](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [RcloneView sur Linux Mint — Synchronisation cloud](https://rcloneview.com/support/blog/rcloneview-linux-mint-cloud-sync)

<CloudSupportGrid />
