---
slug: fix-scaleway-object-storage-connection-errors-rcloneview
title: "Corriger les erreurs de connexion Scaleway Object Storage — Résolution avec RcloneView"
authors:
  - steve
description: "Dépannez les erreurs de connexion Scaleway Object Storage dans RcloneView : corrigez les écarts de région, de point de terminaison et de clé d'accès sur les remotes compatibles S3."
keywords:
  - erreurs scaleway object storage
  - corriger la connexion scaleway
  - RcloneView scaleway
  - dépannage compatible S3
  - région et endpoint scaleway
  - accès refusé au bucket scaleway
  - clé d'accès scaleway
  - remote rclone scaleway
tags:
  - RcloneView
  - troubleshooting
  - tips
  - object-storage
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de connexion Scaleway Object Storage — Résolution avec RcloneView

> La plupart des échecs de connexion à Scaleway viennent d'un écart de région, de point de terminaison ou de clé — voici comment le trouver et le corriger dans RcloneView.

Scaleway Object Storage est accessible via le protocole compatible S3 ; un remote nécessite donc une Access Key, une Secret Key, une région et un endpoint cohérents. Si l'un d'eux ne correspond pas à l'emplacement réel du bucket, vous obtenez des erreurs d'accès refusé ou de bucket introuvable qui ressemblent à des problèmes réseau. RcloneView affiche les erreurs dans ses journaux et permet de reconstruire le remote sans perdre vos tâches de synchronisation.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Vérifiez d'abord la région et l'endpoint

Les buckets Scaleway sont rattachés à une région, et l'endpoint doit appartenir à la même. Une équipe qui a créé un bucket dans une région mais configuré le remote pour une autre verra des échecs de type authentification, même avec des clés valides. Comparez, caractère par caractère, la région affichée dans la console Scaleway avec la région et l'endpoint des paramètres de votre remote.

<img src="/support/images/en/blog/new-remote.png" alt="Configuration d'un remote Scaleway compatible S3 dans RcloneView" class="img-large img-center" />

## Vérifiez les identifiants et les autorisations

Confirmez ensuite l'Access Key et la Secret Key. Une clé régénérée ou supprimée est une cause fréquente lorsqu'une tâche qui fonctionnait échoue soudainement. Vérifiez aussi que les autorisations de la clé couvrent le bucket et le projet visés ; une clé valide sans accès au bucket renvoie toujours un accès refusé. Ouvrez Remote Manager, modifiez le remote et collez les nouvelles valeurs.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Navigation dans un bucket Scaleway après correction des identifiants dans RcloneView" class="img-large img-center" />

## Testez, puis reprenez les tâches

Après avoir modifié le remote, ouvrez Rclone Terminal et listez le bucket pour confirmer que la connexion fonctionne. Lancez ensuite un Dry Run sur votre tâche de synchronisation pour vérifier qu'elle voit les fichiers attendus avant de reprendre les transferts réels. Si le problème persiste, activez la journalisation de rclone au niveau DEBUG dans les paramètres, redémarrez le rclone intégré, reproduisez l'erreur et lisez le journal.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Consultation de l'historique des tâches Scaleway dans RcloneView" class="img-large img-center" />

## Premiers pas

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez Remote Manager et modifiez votre remote Scaleway.
3. Faites correspondre la région et l'endpoint au bucket, et saisissez à nouveau les clés.
4. Listez le bucket, lancez un Dry Run, puis reprenez vos tâches.

Un remote dont la région, l'endpoint et les clés concordent se comporte dans votre flux de travail comme tout autre stockage compatible S3.

---

**Guides associés :**

- [Gérer Scaleway Object Storage — Synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Corriger les erreurs de connexion Linode Object Storage — Résolution avec RcloneView](https://rcloneview.com/support/blog/fix-linode-object-storage-connection-errors-rcloneview)
- [Migrer IBM COS vers Scaleway — Transférer des fichiers avec RcloneView](https://rcloneview.com/support/blog/migrate-ibm-cos-to-scaleway-rcloneview)

<CloudSupportGrid />
