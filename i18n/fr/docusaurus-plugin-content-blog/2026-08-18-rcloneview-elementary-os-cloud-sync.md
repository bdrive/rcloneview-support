---
slug: rcloneview-elementary-os-cloud-sync
title: "RcloneView sur Elementary OS — Synchronisation et sauvegarde de stockage cloud"
authors:
  - alex
description: "Installez RcloneView sur Elementary OS et gérez plus de 90 fournisseurs de cloud avec synchronisation par glisser-déposer, montage et sauvegarde planifiée depuis une seule GUI."
keywords:
  - RcloneView Elementary OS
  - stockage cloud Elementary OS
  - Elementary OS rclone GUI
  - install RcloneView deb Elementary
  - synchronisation cloud Elementary OS
  - sauvegarde cloud Elementary OS
  - client de stockage cloud Pantheon
  - cross-platform cloud manager Linux
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView sur Elementary OS — Synchronisation et sauvegarde de stockage cloud

> Exécutez RcloneView sur Elementary OS pour parcourir, synchroniser, monter et sauvegarder plus de 90 fournisseurs de cloud depuis une GUI native qui s'intègre au bureau Pantheon.

Elementary OS est construit sur Ubuntu LTS mais embarque son propre bureau Pantheon, et les utilisateurs qui l'ont choisi pour un workflow épuré, proche de macOS, veulent souvent que leurs outils de stockage cloud offrent la même finition plutôt que de revenir à un terminal nu. RcloneView s'installe comme un paquet .deb natif sur Elementary OS et fournit une interface complète façon gestionnaire de fichiers pour chaque remote pris en charge par rclone, de Google Drive à Amazon S3 en passant par les serveurs SFTP. Contrairement aux outils de montage seul, RcloneView synchronise aussi et compare des dossiers — dès la licence FREE —, de sorte que monter un disque et exécuter une sauvegarde planifiée proviennent de la même application.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Installer RcloneView sur Elementary OS

Comme Elementary OS est basé sur Debian/Ubuntu, RcloneView s'installe à partir du paquet .deb disponible sur la [page de téléchargement](https://rcloneview.com/src/download.html) officielle — récupérez la version x86_64 (ou aarch64 si vous utilisez Elementary sur du matériel ARM64) et installez-la avec `sudo dpkg -i rclone_view-*-linux-{arch}.deb` depuis un terminal. Il n'y a ici ni paquet Flathub ni Snap Store — le téléchargement direct du .deb est la seule voie d'installation prise en charge, et AppImage est aussi disponible si vous préférez éviter complètement la gestion de paquets.

Elementary OS embarque GTK+ et une session Wayland/X11 par défaut via Pantheon, ce qui couvre d'emblée les exigences d'affichage et de toolkit de RcloneView. Un point qu'il vaut la peine de vérifier après l'installation est `libayatana-appindicator3-1`, car l'icône de la zone de notification de RcloneView en dépend, et certaines installations minimales d'Elementary suppriment les bibliothèques d'indicateurs pour garder le bureau léger.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView main window running on Elementary OS with a new remote dialog open" class="img-large img-center" />

## Connecter des remotes cloud

Une fois RcloneView installé, l'ajout d'un remote fonctionne exactement comme sur toute autre plateforme : onglet Remote > New Remote, choisissez votre fournisseur, puis authentifiez-vous via une fenêtre de navigateur (Google Drive, Dropbox, OneDrive, Box) ou saisissez directement les identifiants (Amazon S3, Backblaze B2, SFTP). Le binaire rclone intégré gère tout via `http://127.0.0.1:5582`, il n'y a donc rien de plus à installer ou configurer sur Elementary OS, sauf si vous souhaitez plutôt pointer RcloneView vers une instance rclone externe s'exécutant séparément.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a cloud remote as a local drive on Elementary OS with RcloneView" class="img-large img-center" />

Le montage utilise `nfsmount` sous Linux — sélectionnez un dossier distant dans l'Explorer, cliquez sur l'icône de montage dans la barre d'outils du panneau, et le dossier cloud apparaît comme un chemin local que n'importe quelle application Pantheon peut ouvrir directement. FUSE (fuse3 recommandé) doit être installé pour que le montage fonctionne.

## Planifier des tâches de synchronisation

Pour une machine Elementary OS qui reste allumée toute la journée, une tâche de synchronisation planifiée transforme RcloneView en outil de sauvegarde autonome plutôt qu'en quelque chose que l'on déclenche manuellement. Créez la tâche via l'assistant Sync en 4 étapes, ajoutez des filtres pour ignorer les fichiers temporaires ou trop volumineux, puis — avec une licence PLUS — associez une planification au format crontab pour qu'elle se déclenche automatiquement selon le rythme dont vous avez besoin.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Creating a scheduled sync job on Elementary OS in RcloneView" class="img-large img-center" />

Job History enregistre chaque exécution avec son statut, sa durée et sa vitesse de transfert, ce qui permet de confirmer facilement qu'une sauvegarde nocturne s'est bien terminée plutôt que d'avoir échoué silencieusement pendant que vous ne surveilliez pas.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html) — récupérez le .deb x86_64 ou aarch64 pour Elementary OS.
2. Installez avec `sudo dpkg -i rclone_view-*-linux-{arch}.deb`.
3. Ajoutez votre premier remote cloud via l'onglet Remote > New Remote.
4. Configurez une synchronisation ou un montage pour commencer à gérer le stockage cloud directement depuis le bureau Pantheon.

Avec le .deb installé, Elementary OS bénéficie de la même expérience de gestion cloud par glisser-déposer que les utilisateurs Windows et macOS, sans sacrifier le rendu épuré et cohérent du bureau.

---

**Guides associés :**

- [Installer RcloneView sur Ubuntu et Debian Linux](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [RcloneView sur Linux Mint — Synchronisation et sauvegarde de stockage cloud](https://rcloneview.com/support/blog/rcloneview-linux-mint-cloud-sync)
- [RcloneView sur Zorin OS — Synchronisation et sauvegarde de stockage cloud](https://rcloneview.com/support/blog/rcloneview-zorin-os-linux-cloud-sync)

<CloudSupportGrid />
