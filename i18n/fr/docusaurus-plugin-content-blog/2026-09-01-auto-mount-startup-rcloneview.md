---
slug: auto-mount-startup-rcloneview
title: "Montage automatique au démarrage — Des lecteurs cloud toujours prêts dans RcloneView"
authors:
  - tayson
description: "Configurez le Montage automatique au démarrage de RcloneView pour que vos lecteurs cloud soient prêts dès que votre ordinateur démarre, sans avoir à les remonter manuellement à chaque fois."
keywords:
  - auto mount cloud drive startup
  - montage automatique rcloneview
  - monter le stockage cloud au démarrage
  - lecteur cloud toujours actif
  - montage cloud automatique windows
  - démarrage à l'ouverture de session lecteur cloud
  - fonctionnalité plus rcloneview
  - montage cloud persistant
  - mount manager rcloneview
  - automatisation du démarrage du lecteur cloud
tags:
  - RcloneView
  - feature
  - mount
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Montage automatique au démarrage — Des lecteurs cloud toujours prêts dans RcloneView

> Plutôt que d'ouvrir RcloneView et de monter manuellement chaque lecteur cloud chaque matin, le Montage automatique au démarrage les met en ligne automatiquement dès que votre machine démarre.

Toute personne qui s'appuie sur un lecteur cloud monté dans le cadre de son flux de travail quotidien — modifier des fichiers directement depuis Google Drive, récupérer des ressources depuis un bucket S3, ou parcourir un serveur SFTP comme un dossier local — connaît la contrainte de devoir remonter le lecteur après chaque redémarrage. Le paramètre Montage automatique au démarrage de RcloneView supprime totalement cette étape, en reconnectant vos montages configurés dès que l'application se lance avec le système.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ce que fait le Montage automatique au démarrage

Lorsqu'il est activé sur un montage spécifique, RcloneView reconnecte automatiquement le point de montage de ce distant à chaque démarrage de l'application, en utilisant exactement le mode de cache, la lettre de lecteur ou le chemin, et les paramètres de lecture seule que vous aviez configurés lors de sa création. Combiné avec « Démarrer à l'ouverture de session » dans les paramètres généraux, cela signifie qu'un lecteur monté peut être disponible dans votre explorateur de fichiers avant même que vous n'ayez ouvert la fenêtre de RcloneView. Il s'agit d'une fonctionnalité de la licence PLUS, aux côtés de la synchronisation planifiée et de la prise en charge multi-fenêtres — la licence FREE couvre toujours le montage manuel, le démontage et l'accès complet à l'explorateur de fichiers pour chaque montage.

Le paramètre s'applique par montage, et non globalement, vous pouvez donc choisir précisément quels lecteurs se reconnectent automatiquement. Un distant d'archive rarement utilisé peut rester manuel, tandis que vos lecteurs de travail principaux — par exemple un dossier Google Drive et un bucket S3 utilisés quotidiennement — se montent eux-mêmes à chaque fois.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager affichant les montages configurés avec l'option de montage automatique" class="img-large img-center" />

## Configuration dans Mount Manager

Ouvrez Mount Manager depuis l'onglet Remote et créez un nouveau montage ou modifiez-en un existant. Dans l'écran de configuration du montage, activez Auto mount avec vos autres paramètres — mode de cache, nom de volume et statut lecture seule — puis enregistrez. RcloneView monte ET synchronise plus de 90 fournisseurs depuis une seule fenêtre, sur Windows, macOS et Linux, de sorte que le même interrupteur de montage automatique fonctionne à l'identique, que le distant sous-jacent soit Google Drive, un bucket compatible S3 ou un serveur SFTP.

Pour les montages déjà en cours d'exécution, n'oubliez pas qu'Edit est désactivé tant qu'un montage est actif ; démontez-le d'abord, appliquez l'interrupteur Auto mount, puis remontez-le pour confirmer qu'il a été correctement enregistré.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Montage d'un dossier distant directement depuis la barre d'outils du panneau Explorer" class="img-large img-center" />

## Associer le Montage automatique à la barre d'état système

Le Montage automatique au démarrage fonctionne mieux associé à « Démarrer réduit » et à la barre d'état système, car cette combinaison permet à RcloneView de démarrer en arrière-plan, de monter vos lecteurs configurés et de rester discret jusqu'à ce que vous en ayez besoin. Le menu Mount de l'icône de la barre d'état système vous permet toujours de vérifier l'état ou de démonter un lecteur à la demande, de sorte que l'automatisation ne vous fait pas perdre le contrôle manuel quand vous en avez besoin.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Menu de la barre d'état système affichant l'état du lecteur monté" class="img-large img-center" />

## Prise en main

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html) et confirmez que votre licence PLUS est active sous Help > Activate License.
2. Ouvrez Mount Manager et sélectionnez le montage que vous souhaitez reconnecter automatiquement.
3. Activez l'interrupteur Auto mount dans les paramètres de ce montage et enregistrez.
4. Activez « Démarrer à l'ouverture de session » dans les paramètres généraux pour que RcloneView — et ses lecteurs montés automatiquement — soient prêts avant même que vous vous installiez.

Une fois configuré, votre stockage cloud se comporte comme une partie permanente de votre système de fichiers, sans qu'il soit nécessaire de le remonter manuellement.

---

**Guides associés :**

- [Mount Cloud Storage as a Local Drive — Complete Guide to Using Google Drive, S3, and OneDrive Like Local Folders](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)
- [System Tray and Background Sync — Keep Cloud Jobs Running in RcloneView](https://rcloneview.com/support/blog/system-tray-background-sync-rcloneview)
- [RcloneView Mount Performance Tuning: Cache, Read Ahead, and VFS Settings for Smooth Cloud Drives](https://rcloneview.com/support/blog/mount-performance-tuning-rcloneview)

<CloudSupportGrid />
