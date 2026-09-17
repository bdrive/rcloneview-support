---
slug: sync-seafile-to-wasabi-rcloneview
title: "Synchroniser Seafile avec Wasabi — Sauvegarde cloud avec RcloneView"
authors:
  - kai
description: "Synchronisez une bibliothèque Seafile auto-hébergée avec le stockage compatible S3 Wasabi grâce à RcloneView. Conservez une copie externe sans exporter les fichiers à la main."
keywords:
  - synchroniser Seafile avec Wasabi
  - sauvegarde Seafile
  - synchronisation cloud Wasabi
  - sauvegarde cloud auto-hébergée
  - Seafile RcloneView
  - stockage compatible S3 Wasabi
  - synchronisation cloud à cloud
  - sauvegarde externe auto-hébergée
  - RcloneView Seafile
  - RcloneView Wasabi
tags:
  - RcloneView
  - seafile
  - wasabi
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Seafile avec Wasabi — Sauvegarde cloud avec RcloneView

> Offrez à une bibliothèque Seafile auto-hébergée une sauvegarde externe sur Wasabi sans écrire le moindre script de synchronisation.

Seafile est un choix populaire pour les équipes qui souhaitent faire tourner leur propre plateforme de synchronisation de fichiers sur leur serveur, mais l'auto-hébergement signifie aussi que la stratégie de sauvegarde relève entièrement de votre responsabilité — si le disque du serveur tombe en panne, la seule copie disparaît avec lui. Wasabi est une destination externe naturelle : compatible S3, abordable à grande échelle et accessible de partout. RcloneView se connecte directement aux deux, si bien qu'une bibliothèque Seafile peut être reflétée dans un bucket Wasabi selon une planification, plutôt que de dépendre d'exports manuels.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Seafile et Wasabi en tant que distants

Ajoutez d'abord votre serveur Seafile comme distant, en pointant RcloneView vers l'URL de votre serveur et les identifiants de la bibliothèque. Ajoutez Wasabi séparément à l'aide de votre Access Key ID, de votre Secret Access Key et du point de terminaison régional Wasabi approprié. Une fois les deux distants configurés, ils apparaissent comme des arborescences de fichiers navigables dans les panneaux Explorer, ce qui permet de vérifier la structure de la bibliothèque et le nombre de fichiers avant de mettre en place une tâche de synchronisation. RcloneView monte ET synchronise plus de 90 fournisseurs depuis une seule fenêtre sous Windows, macOS et Linux, si bien que Seafile et Wasabi cohabitent avec tous les autres clouds déjà configurés.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des distants Seafile et Wasabi dans RcloneView" class="img-large img-center" />

## Construire une tâche de synchronisation unidirectionnelle

Configurez une tâche de synchronisation avec votre bibliothèque Seafile comme source et un bucket Wasabi comme destination, en utilisant « Modifier uniquement la destination » afin que Wasabi reste un miroir pur qui n'écrit jamais dans Seafile. Pour une équipe de design disposant d'une bibliothèque partagée de 500 Go de fichiers sources et d'exports, l'étape Filtering permet d'exclure les fichiers temporaires et de verrouillage générés en interne par Seafile, afin que la copie Wasabi reste propre plutôt qu'encombrée d'artefacts de synchronisation.

Activez la comparaison par somme de contrôle dans Advanced Settings afin que les fichiers soient comparés par hachage et taille plutôt que par seule date de modification — utile car Seafile et le stockage compatible S3 suivent les métadonnées de fichiers différemment.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Synchronisation d'une bibliothèque Seafile vers un bucket Wasabi avec RcloneView" class="img-large img-center" />

Exécutez un Dry Run avant la première synchronisation réelle. Il liste exactement ce qui serait transféré sans déplacer aucune donnée, ce qui compte le plus lors de ce premier passage, lorsque vous ne savez pas encore quelle est la taille réelle de la bibliothèque.

## Planifier et vérifier la sauvegarde

Avec une licence PLUS, associez à la tâche une planification de type crontab pour qu'elle se relance automatiquement — chaque nuit pour une bibliothèque activement utilisée, chaque semaine pour quelque chose de plus proche de l'archivage. Job History enregistre la durée, la vitesse de transfert et le statut de chaque exécution, offrant un journal clair du moment où la copie Wasabi a été mise à jour pour la dernière fois.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planification d'une tâche de synchronisation récurrente de Seafile vers Wasabi dans RcloneView" class="img-large img-center" />

Après la première synchronisation complète, exécutez Folder Compare entre la source Seafile et la destination Wasabi pour confirmer que chaque fichier est bien arrivé et correspond en taille — un moyen rapide de repérer tout ce qui aurait pu manquer à cause d'une interruption réseau.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre serveur Seafile comme distant avec son URL de serveur et les identifiants de la bibliothèque.
3. Ajoutez Wasabi comme distant à l'aide de votre Access Key ID, de votre Secret Access Key et du point de terminaison régional.
4. Construisez une tâche de synchronisation unidirectionnelle, exécutez un Dry Run, puis planifiez des exécutions récurrentes pour garder la sauvegarde à jour.

Une bibliothèque auto-hébergée ne reste en sécurité que si elle existe aussi ailleurs, et une synchronisation planifiée de Seafile vers Wasabi transforme cette exigence en quelque chose qui fonctionne tout seul.

---

**Guides associés :**

- [Gérer la synchronisation cloud auto-hébergée de Seafile avec RcloneView](https://rcloneview.com/support/blog/manage-seafile-self-hosted-cloud-sync-rcloneview)
- [Gérer la synchronisation et la sauvegarde cloud Wasabi avec RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Migrer Seafile vers Backblaze B2 avec RcloneView](https://rcloneview.com/support/blog/migrate-seafile-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
