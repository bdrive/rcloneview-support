---
slug: fix-mount-read-only-cannot-save-files-rcloneview
title: "Corriger un montage cloud en lecture seule qui empêche d'enregistrer les fichiers — avec RcloneView"
authors:
  - steve
description: "Un lecteur cloud monté refuse l'enregistrement ou la modification de fichiers ? Vérifiez l'option Read only de RcloneView, le mode de cache, les autorisations et FUSE pour rendre votre montage de nouveau accessible en écriture."
keywords:
  - montage lecteur cloud lecture seule
  - impossible d'enregistrer des fichiers sur un lecteur monté
  - rclone mount lecture seule
  - dépannage montage RcloneView
  - mode de cache VFS writes
  - montage FUSE Linux
  - erreur d'écriture lecteur cloud
  - paramètres du gestionnaire de montages
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

# Corriger un montage cloud en lecture seule qui empêche d'enregistrer les fichiers — avec RcloneView

> Lorsqu'un lecteur cloud monté refuse les enregistrements, la cause est généralement un paramètre du montage ou une autorisation, et les deux se vérifient rapidement.

Vous avez monté un remote, ouvert un document, et l'enregistrement échoue, ou les fichiers se copient mais ne peuvent pas être modifiés. Avant d'incriminer le fournisseur cloud, regardez comment le montage a été configuré. RcloneView regroupe toutes les options pertinentes dans une seule boîte de dialogue, ce qui vous permet de trouver la cause sans toucher à la ligne de commande. RcloneView synchronise également les dossiers et les compare, avec les fonctions de base disponibles dans la licence FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Vérifier d'abord l'option Read Only

Les paramètres de montage comprennent un interrupteur **Read only**, désactivé par défaut. S'il était activé lors de l'enregistrement du montage, toutes les écritures sont refusées. Ouvrez le gestionnaire de montages depuis l'onglet Remote, démontez l'entrée puis modifiez-la. Edit et Delete sont désactivés tant qu'un lecteur est monté ; le démontage est donc nécessaire avant toute modification.

Désactivez Read only, puis choisissez Save and mount.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Gestionnaire de montages de RcloneView affichant les paramètres de montage" class="img-large img-center" />

## Examiner le mode de cache

Le mode de cache VFS par défaut est **writes**, qui met en mémoire tampon locale les fichiers écrits afin que les applications puissent enregistrer normalement. Le régler sur off ou minimal peut perturber les programmes qui se déplacent dans les fichiers (seek) ou les réécrivent sur place. Si un éditeur échoue à l'enregistrement, essayez writes ou full.

Surveillez aussi l'espace libre de l'emplacement du cache. Un disque de cache plein provoque des échecs d'écriture qui ressemblent à des problèmes d'autorisations. Si vous le soupçonnez, consultez le guide associé sur les erreurs de disque plein du cache VFS ci-dessous.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Configuration du mode de cache lors du montage depuis l'explorateur de remotes" class="img-large img-center" />

## Écarter les causes liées au compte et à la plateforme

Certains remotes sont en lecture seule par nature. Le remote HTTP n'offre qu'un accès en lecture, et un dossier partagé pour lequel on ne vous a accordé que des droits de consultation ne peut pas être modifié, quel que soit le réglage du montage. Testez en téléversant un fichier via le panneau Explorer : si cela échoue aussi, le problème vient du remote ou de ses autorisations, pas du montage.

Sous Linux, le montage nécessite FUSE (fuse3 est recommandé). Si d'autres utilisateurs doivent y accéder, activez **Allow other**. Sous Windows, un montage qui apparaît comme lecteur réseau peut se comporter différemment avec certaines applications ; essayez donc de basculer cette option.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historique des tâches pour vérifier les opérations d'écriture ayant échoué" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Démontez le lecteur, ouvrez son entrée dans le gestionnaire de montages et confirmez que Read only est désactivé.
3. Réglez le mode de cache sur writes et vérifiez l'espace disque libre.
4. Testez un téléversement dans l'Explorer pour distinguer les autorisations du remote des paramètres du montage.

La plupart des échecs d'écriture remontent à l'une de ces vérifications, et toutes prennent quelques minutes.

---

**Guides associés :**

- [Corriger les déconnexions et coupures des montages cloud avec RcloneView](https://rcloneview.com/support/blog/fix-cloud-mount-disconnect-drops-rcloneview)
- [Corriger les erreurs de disque plein du cache VFS avec RcloneView](https://rcloneview.com/support/blog/fix-vfs-cache-disk-full-errors-rcloneview)
- [Corriger l'ouverture lente des fichiers sur les montages — mode de cache VFS avec RcloneView](https://rcloneview.com/support/blog/fix-mount-slow-file-open-vfs-cache-mode-rcloneview)

<CloudSupportGrid />
