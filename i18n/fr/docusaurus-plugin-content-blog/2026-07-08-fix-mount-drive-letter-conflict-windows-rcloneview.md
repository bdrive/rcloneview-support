---
slug: fix-mount-drive-letter-conflict-windows-rcloneview
title: "Corriger les conflits de lettre de lecteur au montage — Dépannage du stockage cloud sur Windows avec RcloneView"
authors:
  - morgan
description: "Résolvez les conflits de lettre de lecteur Windows lors du montage de stockage cloud dans RcloneView grâce à l'attribution manuelle et aux paramètres de lecteur réseau."
keywords:
  - conflit de lettre de lecteur
  - erreur de montage Windows
  - montage RcloneView
  - lettre de lecteur cloud
  - corriger erreur de montage windows
  - cmount rclone
  - montage de lecteur réseau
  - lecteur virtuel windows
  - dépannage de montage
  - RcloneView Windows
tags:
  - RcloneView
  - troubleshooting
  - windows
  - mount
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les conflits de lettre de lecteur au montage — Dépannage du stockage cloud sur Windows avec RcloneView

> Lorsqu'un montage cloud s'accapare une lettre de lecteur déjà utilisée par votre NAS ou votre VPN, RcloneView vous donne les commandes pour corriger cela en quelques secondes.

Un bureau exécutant des lecteurs mappés depuis un NAS Synology, un client VPN et deux montages cloud via RcloneView peut facilement manquer de lettres de lecteur disponibles — ou pire, voir Windows réattribuer silencieusement une lettre déjà utilisée par un montage en cours d'exécution. Sur Windows, RcloneView monte le stockage cloud en utilisant cmount et peut attribuer une lettre de lecteur automatiquement ou vous laisser en choisir une manuellement, de sorte qu'un conflit peut presque toujours être résolu sans démonter tout et repartir de zéro.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Comprendre comment RcloneView attribue les lettres de lecteur

Chaque montage dans RcloneView possède un paramètre **Target** qui est soit Auto, soit une lettre de lecteur choisie manuellement, configurée lors de la création ou de la modification du montage. Le mode Auto laisse Windows choisir la prochaine lettre disponible, ce qui est pratique jusqu'à ce qu'une autre application — un client NAS, un VPN ou une clé USB — s'approprie cette même lettre en premier lors d'un démarrage ultérieur. Contrairement aux outils de montage uniquement, RcloneView synchronise et compare également des dossiers avec la même licence GRATUITE, donc corriger le montage ne vous coûte l'accès à aucune autre fonctionnalité pendant que vous réglez le problème.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a cloud remote from the RcloneView Explorer panel toolbar" class="img-large img-center" />

## Attribuer manuellement une lettre de lecteur libre

Ouvrez **Mount Manager** depuis l'onglet Remote pour voir tous les montages et leur statut actuel. Un montage doit être démonté avant de pouvoir être modifié, donc démontez d'abord celui qui pose problème, puis ouvrez ses paramètres et basculez Target d'Auto à une lettre spécifique et inutilisée. Enregistrez la modification et montez à nouveau — le conflit est résolu dès que Windows confirme que la lettre est libre.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Editing a mount's drive letter setting in RcloneView Mount Manager" class="img-large img-center" />

Si vous n'êtes pas sûr des lettres déjà utilisées, vérifiez la vue Ce PC de l'Explorateur de fichiers ou exécutez `wmic logicaldisk get caption` dans une invite de commandes avant d'en choisir une nouvelle.

## Utiliser le mode Lecteur réseau pour éviter de futurs conflits

Les options de montage de RcloneView incluent un bouton **Network drive** qui modifie la façon dont Windows enregistre le montage en interne. Combiné à une lettre fixée manuellement, cela rend le montage plus prévisible aux côtés des lecteurs mappés sur NAS et des partages attribués par VPN qui réservent également des lettres spécifiques à la connexion.

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="A NAS-mapped network drive alongside an RcloneView cloud mount on Windows" class="img-large img-center" />

Pour les environnements avec plusieurs partages NAS et montages cloud fonctionnant ensemble, standardiser des lettres manuelles pour chaque montage — plutôt que de mélanger Auto et manuel — élimine la plupart des incertitudes après un redémarrage.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html) si ce n'est pas déjà fait.
2. Ouvrez Mount Manager et démontez le montage présentant le conflit.
3. Modifiez ses paramètres et attribuez une lettre de lecteur spécifique et inutilisée.
4. Enregistrez, remontez, et vérifiez que le lecteur apparaît correctement dans l'Explorateur de fichiers.

Quelques minutes passées à fixer manuellement les lettres de lecteur vous évitent de répéter cette correction chaque fois que Windows les réorganise.

---

**Guides connexes :**

- [Monter du stockage cloud comme lecteur local — Guide complet avec RcloneView](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)
- [Monter Google Drive comme lecteur local avec RcloneView](https://rcloneview.com/support/blog/mount-google-drive-as-local-drive-rcloneview)
- [Corriger les erreurs FUSE de montage rclone avec RcloneView](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />
