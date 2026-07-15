---
slug: mount-sftp-smb-local-drive-rcloneview
title: "Montez du stockage SFTP ou SMB en disques locaux avec RcloneView — Intégration cloud auto-hébergée"
authors:
  - tayson
description: Transformez n'importe quel serveur SFTP ou SMB en disque local de premier ordre grâce aux montages GUI de RcloneView, au cache VFS et au tableau de bord multi-cloud unifié sous Windows, macOS et Linux.
keywords:
  - rcloneview
  - rclone mount gui
  - mount smb windows
  - mount sftp mac
  - nas remote access
  - self hosted cloud
  - vfs cache
  - winfsp
  - macfuse
  - mount network drive
tags:
  - RcloneView
  - mount
  - sftp
  - smb
  - nas
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Montez du stockage SFTP ou SMB en disques locaux avec RcloneView — Intégration cloud auto-hébergée

> Faites en sorte que votre NAS, serveur personnel ou serveur de fichiers de bureau se comporte comme Google Drive : montez SFTP ou SMB comme une véritable lettre de lecteur ou un chemin `/Volumes` avec mise en cache, mémoire tampon et une interface graphique.

SFTP et SMB constituent l'épine dorsale du stockage auto-hébergé — NAS Synology/QNAP, serveurs personnels, VPS et serveurs de fichiers d'entreprise s'appuient tous dessus. Mais les monter de manière fiable sous Windows, macOS et Linux implique souvent des particularités spécifiques au système d'exploitation, une authentification fragile, aucun contrôle de mise en cache, et aucune vue unifiée avec vos clouds.

RcloneView résout ce problème. Il encapsule `rclone mount` dans une application de bureau conviviale afin que vos partages SFTP/SMB se comportent comme des disques cloud modernes — avec cache VFS, streaming de vignettes, ajustements de mémoire tampon et automatisation.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Comprendre SFTP par rapport à SMB

| Fonctionnalité | SFTP                                  | SMB                                          |
| --------------- | -------------------------------------- | --------------------------------------------- |
| Protocole       | Basé sur SSH                           | Partage réseau Windows                        |
| Usage idéal     | Serveurs distants, sécurisé sur WAN    | Partage de fichiers sur LAN, réseau local     |
| Vitesse         | Modérée (chiffré)                      | Très rapide sur LAN                           |
| Sécurité        | Solide par défaut                      | Dépend de la version/politique                |
| Support OS      | Universel                              | Optimal sur Windows/macOS, solide sur Linux   |

Quand choisir lequel ?

- **SFTP** : VPS sur Internet, accès zero-trust, home lab avec redirection de port, développeurs récupérant des configurations.
- **SMB** : LAN de bureau, NAS à haut débit, disques partagés pour équipes, montage vidéo à faible latence au sein du réseau.

RcloneView prend en charge les deux, ainsi que Google Drive, S3, Dropbox, OneDrive et plus encore — gérés depuis le même tableau de bord.

## Pourquoi utiliser RcloneView pour monter SFTP/SMB

- **Aucune ligne de commande requise** : tous les indicateurs `rclone mount` sont générés dans l'interface graphique ; consultez [Remote Manager](/howto/rcloneview-basic/remote-manager) pour les distants et [Mount cloud storage as a local drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive) pour des montages guidés.
- **Multiplateforme** : Windows (WinFsp), macOS (macFUSE), Linux (FUSE) avec une interface cohérente.
- **Véritables montages locaux** : lettres de lecteur sous Windows ou `/Volumes/Server` sous macOS ; points de montage standard sous Linux.
- **Prêt pour la performance** : cache VFS, streaming de vignettes, contrôles de mémoire tampon et réglage de la lecture anticipée disponibles dans la boîte de dialogue de montage.
- **Contrôle unifié** : gérez SFTP/SMB aux côtés du stockage cloud, planifiez des remontages et surveillez le débit en un seul endroit (voir [Job scheduling and execution](/howto/rcloneview-advanced/job-scheduling-and-execution) et [Real-time transfer monitoring](/howto/rcloneview-basic/real-time-transfer-monitoring)).

## Étape par étape — Monter SFTP ou SMB avec RcloneView

### 1) Ajouter un distant (SFTP ou SMB)

- Ouvrez **Remote Manager** → **Add Remote** → choisissez **SFTP** ou **SMB**.
- Saisissez l'**hôte/IP** et le **port**.
- Authentifiez-vous avec **nom d'utilisateur/mot de passe** ou **clé SSH** pour SFTP. Pour SMB, définissez le domaine/utilisateur si nécessaire.
- Enregistrez le distant ; envisagez d'activer un mot de passe de configuration dans [General Settings](/howto/rcloneview-basic/general-settings).
  <img src="/support/images/en/blog/add-sftp-remote.png" alt="Add SFTP Remote" class="img-large img-center" />

### 2) Créer une tâche de montage

- Dans **Mount Manager** ou la barre d'outils de l'explorateur, cliquez sur **Mount**.
- Sélectionnez votre distant SFTP/SMB et choisissez la cible :
  - Windows → `X:` (ou toute lettre de lecteur libre)
  - macOS → `/Volumes/ServerName`
  - Linux → `/mnt/server` ou le chemin de votre choix

### 3) Configurer le cache VFS et les mémoires tampons

- **Mode de cache** : `Full` pour une navigation fluide et le streaming de vignettes (idéal pour les photos/Plex).
- **Répertoire de cache** : pointez vers un dossier SSD.
- **Lecture anticipée** : 4 à 8 Mo pour le défilement multimédia ; augmentez pour la vidéo 4K.
- **Écriture différée/mémoire tampon** : activez pour les écritures séquentielles volumineuses ; limitez la bande passante si vous partagez des liens.

### 4) Monter et tester

- Cliquez sur **Mount** et ouvrez Finder/Explorateur/Fichiers.
- Parcourez les dossiers ; prévisualisez des images et diffusez des vidéos pour vérifier la mise en cache.
- Conservez l'entrée de montage enregistrée pour qu'elle se reconnecte automatiquement après un redémarrage (activez **Auto Mount**).

<img src="/support/images/en/blog/mount-sftp.png" alt="Mount SFTP/SMB from RcloneView Explorer" class="img-large img-center" />

## Cas d'usage

- **Accès distant au NAS** : traitez votre NAS comme un disque cloud depuis n'importe quel système d'exploitation.
- **Local ↔ cloud ↔ auto-hébergé** : déplacez des fichiers entre SFTP/SMB et Google Drive/S3/Dropbox dans une seule interface.
- **Intégration de disque partagé de bureau** : associez des partages départementaux avec des vignettes en cache pour les équipes de conception.
- **Montage multimédia** : modifiez vidéos/photos directement depuis le NAS avec la mise en cache VFS pour éviter les retéléchargements.
- **Hub multi-serveurs** : montez plusieurs serveurs SFTP/SMB côte à côte et glissez-déposez entre eux.

## Conseils de performance

- Définissez **Cache mode: Full** pour les charges de travail à forte composante multimédia (Plex/Photos).
- Utilisez un **répertoire de cache NVMe/SSD** pour accélérer les vignettes et le défilement.
- Augmentez la **lecture anticipée** et la **taille de mémoire tampon** pour les lectures/écritures séquentielles volumineuses.
- Privilégiez le **LAN** pour SMB lorsque le débit compte ; pour SFTP sur WAN, utilisez des clés SSH pour la stabilité.
- Surveillez les transferts dans [Real-time transfer monitoring](/howto/rcloneview-basic/real-time-transfer-monitoring) et planifiez des remontages via [Job scheduling and execution](/howto/rcloneview-advanced/job-scheduling-and-execution).

## Conclusion — L'auto-hébergement rencontre le multi-cloud

SFTP et SMB n'ont plus besoin de ressembler à des disques réseau hérités. Avec RcloneView, vous obtenez des montages façon cloud, une mise en cache intelligente et un tableau de bord unifié qui mélange NAS, VPS et clouds publics sans script. Ajoutez votre serveur une fois, choisissez une lettre de lecteur ou un chemin `/Volumes`, et laissez RcloneView maintenir le montage actif pendant que vous vous concentrez sur vos fichiers.

<CloudSupportGrid />
