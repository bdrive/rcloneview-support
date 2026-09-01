---
slug: manage-netease-cloud-sync-backup-rcloneview
title: "Gérer le stockage Netease — Synchroniser et sauvegarder des fichiers avec RcloneView"
authors:
  - morgan
description: "Connectez le stockage objet compatible S3 de Netease à RcloneView pour la navigation multiplateforme, les transferts par glisser-déposer et les tâches de sauvegarde planifiées."
keywords:
  - stockage objet Netease
  - gérer le stockage cloud Netease
  - GUI de stockage compatible S3
  - RcloneView Netease
  - synchroniser le stockage objet Netease
  - sauvegarder un stockage compatible S3
  - stockage Netease NOS
  - gestionnaire de fichiers de stockage objet
  - client GUI multi-cloud
  - configuration de la clé d'accès du point de terminaison S3
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage Netease — Synchroniser et sauvegarder des fichiers avec RcloneView

> Parcourez, transférez et sauvegardez le stockage objet compatible S3 de Netease dans la même fenêtre que vous utilisez déjà pour tous vos autres services cloud, sans workflow CLI distinct.

Les équipes qui provisionnent du stockage via le service objet compatible S3 de Netease finissent souvent par le scripter séparément du reste de leur parc cloud, car la plupart des gestionnaires de fichiers de bureau ne comprennent que les lecteurs grand public courants. RcloneView traite Netease comme n'importe quel autre distant compatible S3 — le même explorateur, les mêmes tâches de synchronisation, la même comparaison de dossiers — de sorte qu'un bucket Netease se retrouve à côté de Google Drive, Dropbox ou d'un disque local dans une seule interface. RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter le stockage objet Netease

L'ajout de Netease à RcloneView suit le flux standard des distants compatibles S3 : créez un nouveau distant, sélectionnez le type de protocole S3, puis saisissez votre Access Key ID, votre Secret Access Key et l'URL de point de terminaison Netease correspondant à la région de votre bucket. Une fois enregistré, le distant apparaît comme son propre onglet dans l'explorateur, et chaque dossier qu'il contient se parcourt de la même façon qu'un disque local — aucun onglet de console ni session CLI distincte n'est nécessaire pour vérifier ce qui se trouve réellement dans un bucket.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout d'un nouveau distant compatible S3 pour le stockage objet Netease dans RcloneView" class="img-large img-center" />

Comme RcloneView stocke la configuration de chaque distant indépendamment, vous pouvez enregistrer plusieurs buckets Netease — ou le même bucket sous différentes portées d'accès — côte à côte, puis basculer entre eux d'un clic au lieu de vous réauthentifier dans un terminal à chaque fois.

## Déplacer des données entre Netease et d'autres clouds

Une fois Netease connecté, le glisser-déposer entre les panneaux gère automatiquement le transfert entre distants : faire glisser des fichiers de Netease vers le panneau d'un autre distant déclenche une copie, tandis que le glisser-déposer au sein du même bucket Netease déplace les fichiers. Cela permet de réaliser des migrations ponctuelles — par exemple, dupliquer un sous-ensemble d'objets de Netease vers Backblaze B2 pour la redondance — en ouvrant simplement deux panneaux plutôt qu'en écrivant une commande rclone ponctuelle.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de cloud à cloud entre le stockage objet Netease et un autre distant dans RcloneView" class="img-large img-center" />

Pour les transferts récurrents, l'assistant de synchronisation en 4 étapes vous permet de définir Netease comme source ou destination, d'appliquer des filtres de taille ou d'ancienneté de fichier, et d'exécuter d'abord une simulation pour prévisualiser exactement ce qui sera copié ou supprimé avant que quoi que ce soit ne bouge réellement.

## Planifier des sauvegardes récurrentes

Pour une protection continue plutôt que des transferts ponctuels, une tâche de synchronisation pointant vers Netease peut s'exécuter selon un planning récurrent (licence PLUS) en utilisant des champs de type crontab pour la minute, l'heure, le jour et le mois. L'historique des tâches enregistre ensuite chaque exécution — heure de début, durée, vitesse de transfert et nombre de fichiers — afin que vous disposiez d'une piste d'audit concrète de ce qui a bougé et quand, sans avoir à fouiller dans des fichiers journaux bruts.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planification d'une tâche de sauvegarde récurrente vers le stockage objet Netease dans RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Créez un nouveau distant, choisissez le type compatible S3, puis saisissez votre Access Key, votre Secret Key et le point de terminaison Netease.
3. Ouvrez le distant Netease dans un panneau de l'explorateur et vérifiez que vos buckets et objets se chargent correctement.
4. Configurez une tâche de synchronisation pour dupliquer le bucket vers un autre distant ou un disque local, en exécutant d'abord une simulation.

Une fois Netease configuré comme distant, il se comporte comme n'importe quel autre fournisseur de stockage dans RcloneView — un système de moins à gérer séparément du reste de votre parc cloud.

---

**Guides connexes :**

- [Gérer le stockage China Mobile — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-china-mobile-cloud-sync-backup-rcloneview)
- [Gérer le stockage cloud Alibaba OSS — Synchroniser et sauvegarder avec RcloneView](https://rcloneview.com/support/blog/manage-alibaba-oss-cloud-sync-backup-rcloneview)
- [Gérer le stockage cloud Huawei OBS — Synchroniser et sauvegarder avec RcloneView](https://rcloneview.com/support/blog/manage-huawei-obs-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
