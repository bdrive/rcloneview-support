---
slug: fix-mount-stale-files-dir-cache-rcloneview
title: "Corriger un montage affichant des fichiers obsolètes — Le Dir Cache Time expliqué avec RcloneView"
authors:
  - morgan
description: "Corrigez l'affichage de fichiers obsolètes ou manquants sur un lecteur cloud monté dans RcloneView en réglant correctement le Dir cache time et le VFS cache mode."
keywords:
  - le montage affiche des fichiers anciens
  - RcloneView dir cache time
  - fichiers obsolètes sur le lecteur monté
  - corriger une liste de montage obsolète
  - le lecteur cloud ne se rafraîchit pas
  - incohérence du VFS cache mode
  - dépannage du montage RcloneView
  - cache de répertoire pour montage cloud
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

# Corriger un montage affichant des fichiers obsolètes — Le Dir Cache Time expliqué avec RcloneView

> Un lecteur cloud monté qui affiche encore un fichier supprimé ou qui masque un fichier tout juste créé n'est généralement pas défaillant — son cache de répertoire n'a simplement pas encore expiré. Voici comment corriger cela dans RcloneView.

Lorsque vous montez un distant en tant que lecteur local, RcloneView ne réénumère pas chaque dossier à chaque clic — il conserve un cache de répertoire de courte durée pour que la navigation paraisse instantanée plutôt que de faire un aller-retour vers le fournisseur cloud à chaque frappe. C'est excellent pour la rapidité, mais cela signifie que les modifications effectuées depuis un autre appareil, une autre fenêtre RcloneView, ou l'application web du fournisseur lui-même peuvent prendre un moment avant d'apparaître dans le dossier monté. Ce guide explique quand ce délai est normal et comment l'ajuster quand il ne l'est pas.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Comprendre le Dir Cache Time

La configuration de montage de RcloneView comprend un réglage **Dir cache time**, qui contrôle la durée pendant laquelle un listage de dossier reste valide avant que le montage ne vérifie à nouveau les changements sur le distant. Ceci est distinct du réglage VFS **Cache mode** (off / minimal / writes / full), qui régit la mise en cache du contenu des fichiers plutôt que la structure des dossiers. Un Dir cache time court signifie que le montage reflète presque immédiatement les changements du distant, mais envoie davantage d'appels de listage au fournisseur ; un Dir cache time long réduit les appels API au prix d'un délai plus long avant que les fichiers nouveaux ou supprimés n'apparaissent.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Options de configuration du montage, y compris le Dir cache time, dans RcloneView" class="img-large img-center" />

Si vous montez un distant sur lequel plusieurs personnes ou appareils écrivent simultanément — un dossier Google Drive partagé, par exemple — la fenêtre de cache par défaut peut donner l'impression que RcloneView a « manqué » un fichier qui a en fait été ajouté il y a quelques secondes depuis un autre emplacement. Rien n'a été manqué ; le montage n'a simplement pas encore rafraîchi le listage de ce dossier.

## Corriger un montage qui n'affiche pas les nouveaux fichiers

Commencez par rafraîchir manuellement avant de supposer qu'il y a un vrai problème. Dans le panneau Explorer ou le navigateur de fichiers du système d'exploitation pointant vers le montage, forcer un rechargement du dossier (F5, ou sortir puis revenir dans le répertoire) fait souvent apparaître les changements immédiatement sans attendre l'expiration naturelle du cache. Si les fichiers n'apparaissent toujours pas après un rafraîchissement manuel, il peut être nécessaire de démonter puis remonter via le **Mount Manager**, car un processus VFS rclone bloqué peut occasionnellement conserver un listage encore plus ancien que ce que suggérerait le Dir cache time configuré.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Rafraîchissement du listage d'un dossier distant monté dans RcloneView" class="img-large img-center" />

Pour les distants où une visibilité quasi en temps réel importe plus que l'efficacité brute de l'API, réduisez la valeur du Dir cache time dans les paramètres Edit du montage avant d'enregistrer et de remonter. Il y a un compromis ici : régler cette valeur de manière trop agressive sur un distant très sollicité augmente le nombre de requêtes de listage envoyées par RcloneView, ce qui peut déclencher des limitations de débit côté fournisseur sur les services qui plafonnent les appels API par minute.

## Choisir le Cache Mode en même temps que le Dir Cache Time

Le Dir cache time et le VFS Cache mode résolvent des problèmes différents, donc corriger l'un sans vérifier l'autre laisse souvent le problème sous-jacent à moitié résolu. Si des fichiers supprimés apparaissent toujours comme accessibles dans le montage (plutôt que des fichiers nouveaux qui n'apparaissent pas), il s'agit plus probablement d'un symptôme du Cache mode — le réglage par défaut **writes** met en cache localement le contenu des fichiers récemment écrits, tandis que **full** met aussi en cache le contenu lu, et dans les deux cas une copie mise en cache localement peut survivre à l'état actuel du distant jusqu'à ce que le cache soit validé. Associer un Dir cache time plus court à un Cache mode adapté à l'utilisation réelle du distant résout la plupart des problèmes de listages obsolètes.

<img src="/support/images/en/blog/new-remote.png" alt="Ajustement des paramètres de cache de montage d'un distant dans RcloneView" class="img-large img-center" />

RcloneView monte et synchronise plus de 90 fournisseurs depuis la même fenêtre sous Windows, macOS et Linux, de sorte que ces paramètres de cache s'appliquent de la même façon, que le montage pointe vers Google Drive, un bucket S3 ou un serveur WebDAV auto-hébergé.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez le **Mount Manager**, sélectionnez le montage concerné et vérifiez sa valeur actuelle de Dir cache time.
3. Réduisez le Dir cache time pour les distants qui changent fréquemment depuis plusieurs sources, puis démontez/remontez pour l'appliquer.
4. Vérifiez aussi le réglage du Cache mode si le symptôme réel concerne le *contenu* obsolète des fichiers, pas seulement des listages obsolètes.

Un montage qui reflète fidèlement le cloud, selon un rythme adapté à l'usage réel du distant, vaut bien mieux que de deviner « pourquoi ça ne se synchronise pas » à chaque fois.

---

**Guides connexes :**

- [VFS Cache — Améliorer les performances de montage des lecteurs cloud dans RcloneView](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [Corriger les erreurs de disque plein du VFS Cache — Gérer le cache de montage avec RcloneView](https://rcloneview.com/support/blog/fix-vfs-cache-disk-full-errors-rcloneview)
- [Corriger les erreurs de montage Rclone et FUSE dans RcloneView](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />
