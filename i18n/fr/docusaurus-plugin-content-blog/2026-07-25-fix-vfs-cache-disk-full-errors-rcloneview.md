---
slug: fix-vfs-cache-disk-full-errors-rcloneview
title: "Corriger les erreurs de disque plein du cache VFS — Gérer le cache de montage avec RcloneView"
authors:
  - robin
description: "Découvrez pourquoi un lecteur cloud monté remplit votre disque local et comment corriger les erreurs de disque plein du cache VFS grâce aux paramètres de cache de RcloneView."
keywords:
  - cache VFS disque plein
  - corriger les erreurs de cache VFS
  - cache de montage rclone plein
  - mode de cache RcloneView
  - taille maximale du cache de montage
  - espace disque montage cloud
  - mode de cache VFS writes
  - paramètres de montage RcloneView
  - âge maximal du cache
tags:
  - RcloneView
  - troubleshooting
  - tips
  - mount
  - vfs
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de disque plein du cache VFS — Gérer le cache de montage avec RcloneView

> Si un lecteur cloud monté remplit votre disque local, cela signifie généralement que le mode de cache est réglé plus haut que ce dont votre flux de travail a besoin — voici comment diagnostiquer et corriger cela dans RcloneView.

Monter un stockage cloud comme lecteur local repose sur un cache VFS (système de fichiers virtuel) pour rendre les lectures et écritures rapides et fiables, mais ce cache réside sur votre disque local et peut discrètement consommer plusieurs gigaoctets s'il est mal configuré. Lorsqu'un montage cesse d'accepter les écritures ou que le système d'exploitation signale un disque plein alors que votre stockage cloud dispose encore de beaucoup d'espace, c'est presque toujours le cache VFS — et non le remote — qui est en cause. RcloneView expose directement tous les paramètres de cache pertinents dans l'écran de configuration du montage, de sorte que corriger ce problème ne nécessite pas de modifier manuellement un fichier de configuration rclone.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi le cache VFS remplit votre disque local

Les options de montage de RcloneView incluent quatre modes de cache : off, minimal, writes (le mode par défaut) et full. En mode « writes », les fichiers que vous modifiez sont mis en cache localement jusqu'à la fin de leur envoi. En mode « full », les fichiers que vous ouvrez simplement pour lecture sont eux aussi mis en cache localement afin de pouvoir être relus sans repasser par le réseau — ce qui est excellent pour les performances, mais signifie qu'une grande bibliothèque multimédia ou un jeu de données consulté via le montage peut remplir silencieusement votre disque.

<img src="/support/images/en/blog/new-remote.png" alt="Mount configuration screen showing VFS cache mode options in RcloneView" class="img-large img-center" />

Si vous constatez que l'espace disque disparaît sur le lecteur hébergeant votre répertoire de cache RcloneView, plutôt que dans les statistiques d'utilisation propres à votre stockage cloud, c'est le premier paramètre à vérifier.

## Choisir le bon mode de cache

Pour la plupart des usages quotidiens, le mode « writes » offre le bon équilibre : il ne met en cache que ce qui est activement modifié, ce qui limite l'utilisation du disque à votre travail en cours. Réservez le mode « full » aux scénarios où vous avez vraiment besoin de relire hors ligne des fichiers volumineux, comme le montage vidéo directement depuis un montage, puis repassez à « writes » ou « minimal » une fois le projet terminé. Le mode « minimal » met le moins en cache et constitue l'option la plus sûre lorsque l'espace disque est limité.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Comparing writes and full VFS cache modes for a cloud mount" class="img-large img-center" />

RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux, si bien que les mêmes paramètres de cache s'appliquent quel que soit le remote monté.

## Définir la taille maximale et l'âge maximal du cache

Au-delà du mode de cache lui-même, RcloneView vous permet de plafonner le cache grâce à une taille maximale du cache (en octets, ou -1 pour illimité) et un âge maximal du cache, qui détermine combien de temps les données mises en cache restent valides avant d'être évincées. Définir une taille maximale concrète — par exemple nettement inférieure à votre espace disque libre — empêche qu'une seule session de lecture volumineuse ne consomme jamais tout le disque, même en mode « full ». Associez cela à un âge maximal plus court si vous travaillez avec des fichiers qui changent fréquemment ailleurs.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting cache max size and cache max age for a mount in RcloneView" class="img-large img-center" />

## Nettoyer un cache déjà plein

Si un montage refuse déjà les écritures parce que le cache est plein, démontez-le depuis Mount Manager, ce qui libère les données mises en cache, puis remontez-le avec un mode de cache plus bas ou une taille maximale explicite avant de reprendre le travail. Vérifier l'onglet Log après avoir activé au préalable la journalisation de niveau Debug permet de confirmer si l'éviction du cache — plutôt qu'une erreur réseau ou de permissions — était bien la cause.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Unmounting and re-mounting a cloud drive from Mount Manager after a cache disk full error" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez Mount Manager et modifiez les paramètres du montage concerné.
3. Passez le mode de cache à « writes » ou « minimal », et définissez une taille maximale de cache concrète.
4. Démontez puis remontez pour appliquer les nouvelles limites, puis surveillez l'utilisation du disque pendant l'usage normal.

Quelques minutes passées à ajuster le mode de cache et les paramètres de taille transforment une erreur de disque plein imprévisible en un montage qui se comporte exactement comme prévu.

---

**Guides associés :**

- [Cache VFS et performances de montage dans RcloneView](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [Corriger la mise en mémoire tampon de Plex grâce au réglage du cache VFS dans RcloneView](https://rcloneview.com/support/blog/plex-vfs-cache-rcloneview)
- [Corriger les déconnexions de montage cloud avec RcloneView](https://rcloneview.com/support/blog/fix-cloud-mount-disconnect-drops-rcloneview)

<CloudSupportGrid />
