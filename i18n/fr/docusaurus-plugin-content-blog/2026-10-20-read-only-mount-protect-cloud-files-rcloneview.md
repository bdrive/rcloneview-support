---
slug: read-only-mount-protect-cloud-files-rcloneview
title: "Montage en lecture seule — protégez vos fichiers cloud des modifications accidentelles avec RcloneView"
authors:
  - casey
description: "Utilisez l'option Read only du montage de RcloneView pour parcourir votre stockage cloud depuis l'explorateur de fichiers sans risquer de modification ou de suppression accidentelle."
keywords:
  - montage en lecture seule
  - monter un stockage cloud en lecture seule
  - protéger les fichiers cloud
  - montage RcloneView
  - rclone montage en lecture seule
  - empêcher la suppression sur un lecteur cloud
  - mount manager
  - lecteur virtuel
tags:
  - RcloneView
  - feature
  - mount
  - cloud-storage
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Montage en lecture seule — protégez vos fichiers cloud des modifications accidentelles avec RcloneView

> Montez un remote comme lecteur local que l'on peut parcourir et copier, mais jamais modifier.

Un lecteur cloud monté se comporte comme n'importe quel autre disque : une suppression par erreur, un glisser-déposer dans le mauvais sens ou une application qui réécrit des fichiers peuvent donc modifier vos données dans le cloud. Lorsque l'objectif est seulement de lire, par exemple pour consulter des archives ou ouvrir des fichiers de référence, le lecteur le plus sûr à choisir est celui sur lequel on ne peut pas écrire. Les paramètres de montage de RcloneView comprennent l'option Read only pour cet usage précis. RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre sous Windows, macOS et Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Quand le mode lecture seule est pertinent

Prenons une équipe conformité qui conserve les dossiers d'affaires closes dans un bucket. Le personnel doit pouvoir ouvrir et copier les documents, mais personne ne doit pouvoir les modifier. Autre exemple : une destination de sauvegarde partagée que vous souhaitez inspecter depuis un poste de travail sans mettre la sauvegarde elle-même en danger.

Dans les deux cas, un montage en lecture seule permet d'utiliser des outils ordinaires tels que l'explorateur de fichiers, les lecteurs multimédias et les visionneuses, tandis que les tentatives d'écriture sont refusées. Il ne remplace pas les autorisations du service de stockage, mais ajoute une protection sur votre propre machine.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Monter un dossier distant depuis l'explorateur RcloneView" class="img-large img-center" />

## Activer Read Only dans Mount Manager

Ouvrez Mount Manager depuis l'onglet Remote et choisissez New mount, ou partez de l'icône Mount dans un panneau Explorer. Sélectionnez le remote et le sous-répertoire, puis cochez **Read only** dans les options. Sous Windows, vous pouvez choisir une lettre de lecteur ; sous macOS et Linux, vous définissez un chemin de montage local. Choisissez Save and mount pour connecter le lecteur immédiatement.

D'autres options figurent dans la même boîte de dialogue : nom du volume, mode de cache (off, minimal, writes par défaut ou full) et, sous Windows, l'affichage en tant que lecteur réseau. Comme rien n'est écrit, le mode de cache par défaut pose rarement problème en lecture seule, même si full peut accélérer les lectures répétées des mêmes fichiers.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager avec les options de montage dans RcloneView" class="img-large img-center" />

## Modifier ou supprimer le montage

Edit et Delete sont désactivés tant qu'un montage est actif ; démontez-le donc d'abord depuis Mount Manager ou depuis le menu de la barre d'état système. Pour rendre un lecteur modifiable plus tard, démontez-le, modifiez l'entrée, décochez Read only et montez-le à nouveau. Vous pouvez conserver deux entrées pour le même remote : l'une en lecture seule pour parcourir, l'autre modifiable pour les travaux délibérés.

Avec une licence PLUS, Auto mount peut connecter vos lecteurs au démarrage.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Copier des fichiers entre remotes dans RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez le remote que vous souhaitez parcourir, puis ouvrez Mount Manager depuis l'onglet Remote.
3. Créez un nouveau montage, sélectionnez le remote et le dossier, puis cochez Read only.
4. Choisissez Save and mount, puis ouvrez le lecteur depuis votre explorateur de fichiers.

Un accès en lecture seule vous permet de tout ouvrir sans risquer de modification.

---

**Guides associés :**

- [Montage automatique au démarrage](https://rcloneview.com/support/blog/auto-mount-startup-rcloneview)
- [Cache VFS pour les performances du montage](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [Résoudre les conflits de lettre de lecteur de montage sous Windows](https://rcloneview.com/support/blog/fix-mount-drive-letter-conflict-windows-rcloneview)

<CloudSupportGrid />
