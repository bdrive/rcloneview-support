---
slug: fix-mount-slow-file-open-vfs-cache-mode-rcloneview
title: "Corriger l'ouverture lente des fichiers sur les montages cloud — Régler le cache VFS avec RcloneView"
authors:
  - alex
description: "Corrigez l'ouverture lente des fichiers sur les lecteurs cloud montés en ajustant le mode de cache, la taille du cache et la durée du cache de répertoires dans le Mount Manager de RcloneView."
keywords:
  - corriger un montage cloud lent
  - lecteur monté lent à ouvrir les fichiers
  - mode de cache VFS
  - performances de rclone mount
  - durée du cache de répertoires
  - latence du lecteur cloud
  - montage RcloneView
  - rclone GUI
  - dépannage du montage
tags:
  - RcloneView
  - troubleshooting
  - tips
  - mount
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger l'ouverture lente des fichiers sur les montages cloud — Régler le cache VFS avec RcloneView

> Les paramètres de cache influencent la réactivité d'un lecteur cloud monté, et vous pouvez les modifier pour chaque montage dans le Mount Manager.

Un lecteur cloud monté ressemble à un disque local jusqu'à ce que vous double-cliquiez sur un gros fichier et deviez attendre. Les dossiers s'affichent lentement, les applications se figent à l'enregistrement ou la lecture de médias saccade. RcloneView expose les options de cache VFS de chaque montage, ce qui vous permet de les ajuster par remote plutôt que de deviner.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Vérifier d'abord le mode de cache

Ouvrez le Mount Manager depuis l'onglet Remote et modifiez le montage. Le mode de cache propose off, minimal, writes et full. La valeur par défaut est writes, qui met en cache les fichiers écrits sur le lecteur. Si vous relisez souvent les mêmes fichiers, comme des documents ou des médias, full met aussi les lectures en cache, de sorte que les ouvertures répétées peuvent être servies depuis le disque local. Off est le réglage le plus léger, mais il envoie chaque lecture vers le cloud.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Paramètres du Mount Manager dans RcloneView" class="img-large img-center" />

Edit et Delete sont désactivés tant qu'un lecteur est monté ; démontez-le donc d'abord, modifiez le réglage, puis remontez-le.

## Dimensionner le cache et la durée des répertoires

La taille maximale du cache vaut -1 par défaut, ce qui signifie aucune limite de taille et peut remplir un petit disque. Définissez une limite adaptée à votre espace libre et utilisez cache max age pour contrôler la durée de validité des données en cache. Dir cache time détermine combien de temps les listes de dossiers sont conservées : une valeur plus élevée réduit les requêtes répétées sur les dossiers, mais les modifications faites par d'autres apparaissent plus tard.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Montage d'un dossier remote depuis la barre d'outils de l'Explorer" class="img-large img-center" />

Imaginez un architecte qui ouvre des plans de 300 Mo depuis un montage partagé. Le mode de cache full associé à une limite de taille raisonnable signifie que la première ouverture télécharge le fichier et que les suivantes lisent depuis le disque local.

## Choisir l'outil adapté à la tâche

Le montage convient pour ouvrir et modifier des fichiers individuels. Pour déplacer des dossiers entiers, un job de synchronisation ou de copie est plus facile à surveiller que le glisser-déposer de fichiers via un lecteur, et la synchronisation, la copie et Folder Compare sont disponibles avec la licence FREE. Sous Windows, le type de montage par défaut est cmount, et sous Linux et macOS nfsmount ; Linux nécessite aussi l'installation de FUSE.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Utilisation d'un job de synchronisation pour les transferts en masse plutôt qu'un montage" class="img-large img-center" />

Si les problèmes persistent, activez la journalisation de rclone dans les paramètres, définissez le niveau sur DEBUG, redémarrez rclone intégré et reproduisez le problème.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez le Mount Manager, démontez le lecteur lent et cliquez sur Edit.
3. Passez le mode de cache sur full pour un travail axé sur la lecture et définissez une taille maximale de cache.
4. Augmentez dir cache time si la navigation est lente, puis cliquez sur Save et remontez le lecteur.

Avec des paramètres de cache adaptés à votre façon de travailler, un lecteur cloud monté peut se comporter comme votre flux de travail l'exige.

---

**Guides associés :**

- [Cache VFS — Performances de montage dans RcloneView](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [Corriger les erreurs de disque plein du cache VFS avec RcloneView](https://rcloneview.com/support/blog/fix-vfs-cache-disk-full-errors-rcloneview)
- [Monter un stockage cloud comme lecteur local avec RcloneView](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)

<CloudSupportGrid />
