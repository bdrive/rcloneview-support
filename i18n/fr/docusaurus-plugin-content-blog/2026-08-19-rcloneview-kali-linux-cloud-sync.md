---
slug: rcloneview-kali-linux-cloud-sync
title: "RcloneView sur Kali Linux — Synchronisation et sauvegarde de stockage cloud"
authors:
  - jay
description: "Installez RcloneView sur Kali Linux pour monter, synchroniser et sauvegarder plus de 90 fournisseurs cloud avec un flux de travail GUI sécurisé et auditable."
keywords:
  - RcloneView Kali Linux
  - cloud storage Kali Linux
  - install RcloneView Debian
  - cloud sync penetration testing
  - mount cloud drive Kali
  - rclone GUI Kali Linux
  - backup forensic evidence cloud
  - cloud backup security professionals
  - Kali Linux cloud storage GUI
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

# RcloneView sur Kali Linux — Synchronisation et sauvegarde de stockage cloud

> Exécutez un gestionnaire de fichiers multi-cloud graphique sur Kali Linux pour synchroniser les données de mission, les images forensiques et les livrables clients sans toucher à la CLI.

Kali Linux est une distribution basée sur Debian conçue pour les tests d'intrusion et l'informatique forensique, et les équipes de sécurité travaillant sur Kali doivent souvent déplacer de grands ensembles de preuves, des captures de paquets ou des rapports clients entre le stockage local et les comptes cloud. RcloneView apporte un gestionnaire de fichiers graphique à ce flux de travail, vous permettant de parcourir, synchroniser et monter du stockage cloud depuis le même bureau où vous exécutez vos autres outils. Comme Kali embarque un bureau Xfce complet avec X11, il répond aux exigences d'affichage dont RcloneView a besoin pour fonctionner.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Installer RcloneView sur Kali Linux

Kali étant basé sur Debian, le paquet `.deb` officiel disponible sur [rcloneview.com](https://rcloneview.com/src/download.html) s'installe de la même manière que sur Debian ou Ubuntu — téléchargez le fichier `rclone_view-{version}-linux-{arch}.deb` et installez-le avec `dpkg -i`, en résolvant les dépendances manquantes avec `apt --fix-broken install`. Kali propose directement des builds `x86_64`, et le format `.AppImage` est une bonne alternative si vous préférez ne pas installer de paquet à l'échelle du système, puisqu'il s'exécute directement sans installation.

RcloneView est une application GUI basée sur Flutter, et non un outil en ligne de commande ; elle nécessite donc la session graphique Xfce/X11 que Kali exécute par défaut — elle ne se lancera pas sur une connexion SSH sans interface graphique, sans redirection X11 ni session de bureau distant. Elle dépend également de GTK+3 et d'une bibliothèque AppIndicator pour son icône de zone de notification, toutes deux présentes dans une installation de bureau Kali standard.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new cloud remote in RcloneView on Kali Linux" class="img-large img-center" />

## Connecter du stockage cloud pour les données de mission

Une fois installé, ajoutez des remotes via l'assistant New Remote dans l'onglet Remote. Amazon S3, Cloudflare R2 et Backblaze B2 conviennent bien, avec une saisie de clé d'accès et de secret, pour stocker de grandes images disque forensiques et des captures de paquets, tandis que Google Drive, OneDrive ou Box gèrent la livraison de rapports côté client via connexion OAuth dans le navigateur. Les fonctions de synchronisation et de Folder Compare de RcloneView sont disponibles avec la licence FREE, ce qui vous permet d'envoyer les preuves capturées vers le stockage cloud et de vérifier qu'elles sont arrivées intactes sans avoir à payer une mise à niveau.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring files between cloud remotes in RcloneView on Kali" class="img-large img-center" />

## Synchroniser et vérifier les sauvegardes de preuves

Pour les flux de travail de chaîne de possession, exécutez un Dry Run avant toute tâche de synchronisation afin de prévisualiser exactement les fichiers qui seront copiés ou supprimés, puis utilisez Folder Compare pour vérifier que la source et la destination correspondent ensuite. La vue de comparaison signale les fichiers par différence de taille et affiche côte à côte les correspondances de fichiers identiques, ce qui est utile lorsque vous devez confirmer qu'une image forensique a été transférée sans corruption. Activez la comparaison par somme de contrôle dans l'étape Advanced Settings de la tâche de synchronisation pour une vérification d'intégrité plus solide qu'une simple vérification de taille.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder compare results view in RcloneView" class="img-large img-center" />

## Monter du stockage cloud pendant une mission

Vous pouvez également monter un remote cloud en tant que lecteur local via Mount Manager, qui repose sur FUSE et la méthode `nfsmount` sous Linux — assurez-vous que `fuse3` est installé. Cela vous permet d'ouvrir directement des fichiers de dossier hébergés dans le cloud dans vos autres outils Kali sans étape de téléchargement manuel préalable, avec l'option de monter en lecture seule lorsque vous souhaitez éviter des écritures accidentelles sur des preuves partagées.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a cloud remote from the Mount Manager in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html) — récupérez le build `.deb` ou `.AppImage` pour `x86_64`.
2. Installez avec `dpkg -i` (ou rendez l'AppImage exécutable et lancez-le directement).
3. Ajoutez vos remotes cloud via l'assistant New Remote, en utilisant la connexion OAuth ou la saisie d'identifiants selon le fournisseur.
4. Exécutez un Dry Run, puis une véritable tâche de synchronisation, et vérifiez les résultats avec Folder Compare.

Organiser les preuves et les livrables clients entre disques locaux et stockage cloud devient bien moins sujet aux erreurs avec une interface GUI que vous pouvez vérifier visuellement avant chaque transfert.

---

**Guides associés :**

- [Installer RcloneView sur Ubuntu / Debian Linux](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [RcloneView sur Debian Linux — Synchronisation et sauvegarde de stockage cloud](https://rcloneview.com/support/blog/rcloneview-debian-linux-cloud-sync)
- [Stockage cloud pour les entreprises de cybersécurité avec RcloneView](https://rcloneview.com/support/blog/cloud-storage-cybersecurity-companies-rcloneview)

<CloudSupportGrid />
