---
slug: rcloneview-apple-silicon-mac-cloud-sync
title: "RcloneView sur Mac Apple Silicon — Synchronisation et sauvegarde du stockage cloud"
authors:
  - robin
description: "Exécutez RcloneView nativement sur les Mac Apple Silicon grâce à son .dmg Universal. Montez, synchronisez et sauvegardez plus de 90 fournisseurs cloud depuis une seule app macOS."
keywords:
  - rcloneview apple silicon
  - rclone gui m1 mac
  - synchronisation cloud mac apple silicon
  - monter un stockage cloud sur macbook
  - rclone universal binary macos
  - sauvegarde cloud mac mini
  - monter un lecteur cloud macos
  - installer rcloneview macos
  - synchroniser google drive onedrive sur mac
  - gestionnaire de stockage cloud mac arm64
tags:
  - RcloneView
  - macos
  - cloud-sync
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView sur Mac Apple Silicon — Synchronisation et sauvegarde du stockage cloud

> Un seul téléchargement Universal fonctionne nativement sur les Mac Apple Silicon comme Intel, avec le moteur rclone intégré.

Beaucoup de propriétaires de Mac Apple Silicon jonglent avec plusieurs comptes cloud. RcloneView leur offre une seule app macOS native pour parcourir, monter, comparer et synchroniser Google Drive, OneDrive, Dropbox, des buckets S3, des partages NAS et des dizaines d'autres distants. Ce guide présente ce qu'il faut savoir avant de l'installer sur une machine Apple Silicon.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Un seul .dmg Universal pour Apple Silicon et Intel

RcloneView pour macOS est distribué sous la forme d'une seule image disque `.dmg` contenant un binaire Universal : il inclut à la fois du code ARM64 pour Apple Silicon et du code x86-64 pour les Mac Intel. Sur Apple Silicon, l'app s'exécute nativement. Le build est notarisé et signé par le développeur, si bien que Gatekeeper l'ouvre sans contournement.

La version minimale prise en charge est macOS 12.7 (Monterey), et le fonctionnement est confirmé sur Ventura, Sonoma et Sequoia. Récupérez l'installateur uniquement depuis la [page de téléchargement](https://rcloneview.com/src/download.html) officielle, car il n'existe ni cask Homebrew ni autre canal de gestionnaire de paquets. Ensuite, la version macOS se met à jour elle-même depuis l'app.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new cloud remote in RcloneView on an Apple Silicon Mac" class="img-large img-center" />

RcloneView inclut son propre binaire rclone, il n'y a donc rien d'autre à installer. Ouvrez l'onglet Remote, cliquez sur **New Remote** et connectez-vous. Google Drive, Dropbox, OneDrive et Box utilisent une connexion OAuth dans le navigateur. Les services compatibles S3 comme Wasabi ou Cloudflare R2 demandent plutôt des clés d'accès.

## Monter des lecteurs cloud dans le Finder

Sur macOS, RcloneView monte avec `nfsmount` par défaut et vous permet de choisir un chemin de montage personnalisé. Sélectionnez un dossier dans l'explorateur, cliquez sur l'icône Mount, et le distant apparaît dans le Finder comme un volume local. Le mode de cache VFS par défaut, `writes`, convient à la plupart des flux de travail d'édition. Une photographe qui parcourt une archive de 2 To sur un MacBook Air de 16 Go peut aussi définir une taille maximale de cache pour éviter que le cache ne remplisse le SSD interne.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager showing cloud drives mounted on macOS" class="img-large img-center" />

Vous pouvez gérer les montages depuis Mount Manager ou depuis l'icône de la barre des menus. Avec une licence PLUS, Auto mount reconnecte vos lecteurs à chaque ouverture de session.

## Deux réglages macOS à corriger dès le départ

Les contrôles de confidentialité de macOS peuvent faire apparaître Bureau, Documents ou Téléchargements comme vides dans RcloneView. Accordez l'accès dans **System Settings > Privacy & Security > Files & Folders**, ou ajoutez RcloneView à **Full Disk Access**, puis redémarrez l'app.

Les tâches de synchronisation volumineuses peuvent aussi atteindre la limite par défaut de fichiers ouverts de macOS (256–1024). Si vous voyez des erreurs « too many open files », créez un plist LaunchDaemon dans `/Library/LaunchDaemons/limit.maxfiles.plist` qui porte les limites souple et stricte à 524288, puis redémarrez.

## Sauvegardes planifiées depuis votre Mac

Utilisez l'assistant de synchronisation pour configurer une tâche unidirectionnelle, par exemple `~/Projects` vers un bucket Backblaze B2, et commencez par un Dry Run pour voir exactement ce qui changerait. RcloneView monte ET synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux. Avec une licence PLUS, l'étape de planification peut exécuter la tâche selon un calendrier de type cron pendant que l'app reste dans la barre des menus.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Creating a scheduled cloud backup job in RcloneView on macOS" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html) et faites-le glisser depuis le `.dmg` Universal vers Applications.
2. Accordez l'autorisation Files & Folders ou Full Disk Access dans System Settings, puis relancez l'app.
3. Ajoutez vos distants cloud avec **New Remote** et montez ceux que vous voulez voir dans le Finder.
4. Créez une tâche de synchronisation, vérifiez-la avec un Dry Run et suivez la progression dans l'onglet Transferring.

Une fois RcloneView configuré, votre Mac peut monter, synchroniser et sauvegarder les comptes cloud que vous utilisez depuis un seul endroit.

---

**Guides associés :**

- [RcloneView sur macOS Sequoia — Synchronisation du stockage cloud](https://rcloneview.com/support/blog/rcloneview-macos-sequoia-cloud-sync)
- [Corriger les erreurs Too Many Open Files sur macOS](https://rcloneview.com/support/blog/fix-macos-too-many-open-files-rcloneview)
- [Corriger les dossiers vides et les autorisations sur macOS](https://rcloneview.com/support/blog/fix-macos-empty-folders-permissions-rcloneview)

<CloudSupportGrid />
