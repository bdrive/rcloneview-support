---
slug: rcloneview-kali-linux-cloud-sync
title: "RcloneView sur Kali Linux — Synchronisation et sauvegarde du stockage cloud"
authors:
  - jay
description: "Installez RcloneView sur Kali Linux pour monter, synchroniser et chiffrer le stockage cloud destiné aux preuves de mission, rapports et données capturées."
keywords:
  - RcloneView Kali Linux
  - stockage cloud Kali Linux
  - synchronisation cloud Kali Linux
  - monter un lecteur cloud Kali Linux
  - sauvegarde cloud basée sur Debian
  - chiffrer une sauvegarde cloud pentest
  - installation de RcloneView sous Linux
  - outil de sauvegarde Kali Linux
  - application de synchronisation cloud GTK
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView sur Kali Linux — Synchronisation et sauvegarde du stockage cloud

> Montez, synchronisez et chiffrez du stockage cloud sous Kali Linux sans quitter votre flux de travail existant sur le bureau XFCE.

Kali Linux est une distribution basée sur Debian principalement utilisée pour les tests de sécurité, et les missions génèrent un flux constant de captures d'écran, de captures de paquets et de rapports qui doivent quitter rapidement le disque local. RcloneView offre aux utilisateurs de Kali un moyen graphique de connecter plus de 90 fournisseurs cloud, de les monter comme des lecteurs locaux et d'exécuter des tâches de synchronisation planifiées sans écrire à la main des commandes rclone dans un terminal. Comme Kali est livré par défaut avec un bureau X11/Wayland complet, l'interface graphique de RcloneView fonctionne de la même manière que sur toute autre distribution de la famille Debian.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Installer RcloneView sur Kali Linux

Comme Kali est basé sur Debian, le paquet officiel `.deb` provenant de [rcloneview.com](https://rcloneview.com/src/download.html) s'installe proprement avec `dpkg -i`, suivi de `apt-get install -f` pour résoudre les dépendances. RcloneView nécessite GTK+ 3.0 ainsi que `libayatana-appindicator3-1` ou `libappindicator3-1` pour l'icône de la zone de notification, ainsi que `fuse3` si vous prévoyez de monter des remotes comme lecteurs locaux. Il n'existe pas de dépôt AUR, Snap, Flatpak ou APT pour RcloneView — le fichier `.deb` est le seul moyen d'installation pris en charge sous Kali, alors ignorez toute liste de paquets tierce qui prétendrait le contraire.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new cloud remote in RcloneView on Kali Linux" class="img-large img-center" />

RcloneView est livré avec un binaire rclone intégré, il n'y a donc rien de plus à configurer au premier lancement — l'application communique automatiquement avec lui via `127.0.0.1:5582`.

## Monter le stockage cloud pour le travail de terrain

Une fois un remote connecté, sélectionnez-le dans le panneau Explorer et cliquez sur l'icône Mount dans la barre d'outils du panneau pour l'exposer comme un lecteur local via `nfsmount` sous Linux. Cela est utile pour examiner des preuves stockées dans un dossier Google Drive ou Box partagé directement depuis des outils locaux, sans télécharger d'abord l'intégralité du jeu de données. Le mode lecture seule est disponible dans la configuration de montage pour les missions où vous devez parcourir les fichiers sans aucun risque d'altérer les fichiers source.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a remote folder from the RcloneView Explorer panel" class="img-large img-center" />

## Chiffrer et automatiser les sauvegardes

Les données sensibles d'une mission doivent être chiffrées avant de quitter la machine. Le remote virtuel Crypt de RcloneView enveloppe n'importe quel remote existant afin que les noms de fichiers et leur contenu soient chiffrés avant l'envoi, et le même assistant de synchronisation en 4 étapes utilisé pour les transferts classiques fonctionne aussi sur la couche chiffrée. Vous pouvez connecter S3, Azure ou Backblaze B2 avec un accès complet en lecture/écriture dès la licence FREE, de sorte qu'une copie chiffrée hors site ne nécessite pas de niveau payant. La planification de type crontab pour des sauvegardes sans surveillance est une fonctionnalité de la licence PLUS.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring encrypted sync job in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html) — récupérez le `.deb` pour x86_64 ou aarch64.
2. Installez avec `dpkg -i rclone_view-*.deb && apt-get install -f` pour récupérer les dépendances GTK+3, appindicator et FUSE.
3. Ajoutez vos remotes cloud et, pour les données sensibles, enveloppez-les dans un remote Crypt avant d'exécuter votre première synchronisation.
4. Vérifiez Job History après chaque exécution pour confirmer le nombre de transferts et détecter les erreurs rapidement.

Une installation Kali avec RcloneView signifie que les éléments de mission quittent rapidement le disque local, chiffrés, et sans jamais quitter le bureau que vous utilisez déjà.

---

**Guides associés :**

- [RcloneView sur Debian Linux — Synchronisation et sauvegarde du stockage cloud](https://rcloneview.com/support/blog/rcloneview-debian-linux-cloud-sync)
- [Connecter n'importe quel serveur SFTP à RcloneView — Synchroniser des serveurs distants avec le stockage cloud](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [Résoudre les blocages de synchronisation cloud par pare-feu et antivirus — Corriger les erreurs de connexion avec RcloneView](https://rcloneview.com/support/blog/fix-firewall-antivirus-blocking-cloud-sync-rcloneview)

<CloudSupportGrid />
