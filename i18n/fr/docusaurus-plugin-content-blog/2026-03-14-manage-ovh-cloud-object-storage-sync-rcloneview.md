---
slug: manage-ovh-cloud-object-storage-sync-rcloneview
title: "Gérer OVH Cloud Object Storage — Synchronisation avec S3, Google Drive et plus avec RcloneView"
authors:
  - tayson
description: "OVH Cloud Object Storage est abordable et basé dans l'UE, mais le gérer depuis le tableau de bord Horizon est pénible. Utilisez RcloneView pour parcourir, synchroniser et sauvegarder le stockage OVH avec un gestionnaire de fichiers visuel."
keywords:
  - ovh cloud object storage
  - ovh cloud rclone
  - ovh cloud sync google drive
  - ovh object storage gui
  - ovh cloud file manager
  - ovh openstack swift gui
  - ovh cloud backup
  - ovh cloud transfer
  - ovh cloud sync s3
  - ovh cloud storage management
tags:
  - RcloneView
  - cloud-storage
  - openstack
  - swift
  - s3-compatible
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer OVH Cloud Object Storage — Synchronisation avec S3, Google Drive et plus avec RcloneView

> OVH Cloud propose un stockage d'objets abordable, conforme au RGPD et construit sur OpenStack Swift. Mais gérer des conteneurs via le tableau de bord Horizon ressemble à du travail d'infrastructure, pas à de la gestion de fichiers. RcloneView change la donne.

L'Object Storage d'OVHcloud est un excellent choix pour les entreprises européennes ayant besoin d'un stockage cloud abordable et conforme au RGPD. Construit sur OpenStack Swift, il est fiable et bien tarifé. Le défi réside dans sa gestion au quotidien — le tableau de bord Horizon est conçu pour les administrateurs d'infrastructure, pas pour parcourir des fichiers, synchroniser vers d'autres clouds ou exécuter des sauvegardes automatisées. RcloneView fournit la couche de gestion de fichiers visuelle qui manque à OVH Cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi OVH Cloud + RcloneView ?

OVH Cloud Object Storage offre un accès compatible S3 et compatible Swift. RcloneView prend en charge les deux protocoles, vous pouvez donc connecter et gérer vos conteneurs avec un explorateur de fichiers à deux volets familier.

### Ce que vous obtenez

- **Navigation visuelle** de tous les conteneurs et objets OVH
- **Synchronisation inter-cloud** entre OVH et plus de 70 fournisseurs
- **Sauvegardes planifiées** depuis ou vers le stockage OVH
- **Comparaison de dossiers** pour la vérification des transferts

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Manage OVH Cloud in two panes" class="img-large img-center" />

## Connecter OVH Cloud à RcloneView

<img src="/support/images/en/blog/new-remote.png" alt="Add OVH Cloud remote" class="img-large img-center" />

Vous pouvez vous connecter via l'API compatible S3 (recommandée pour les nouveaux projets) ou l'API native Swift. Dans les deux cas, vos conteneurs OVH apparaissent immédiatement dans l'explorateur de fichiers.

## Flux de travail courants

### Synchroniser OVH vers Google Drive

Conservez une copie de travail des fichiers OVH accessible dans Google Drive pour la collaboration en équipe. Synchronisez les modifications vers OVH pour un stockage économique à long terme.

### Sauvegarder OVH vers un autre fournisseur

Protégez-vous contre la dépendance à un fournisseur en maintenant des sauvegardes sur Backblaze B2 ou AWS S3 :

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OVH backup" class="img-large img-center" />

### Migrer vers ou depuis OVH

Vous passez d'AWS S3 à OVH pour réduire les coûts ? Ou vous consolidez d'OVH vers Azure ? L'explorateur à deux volets transforme la migration en simple glisser-déposer.

### Surveiller les transferts

Suivez la progression avec un suivi des transferts en temps réel :

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor OVH transfers" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez OVH Cloud** en tant que distant compatible S3 ou Swift.
3. **Parcourez vos conteneurs** dans l'explorateur à deux volets.
4. **Configurez des tâches de synchronisation** pour des flux de travail inter-cloud.

Un stockage abordable dans l'UE mérite un excellent gestionnaire de fichiers.

---

**Guides connexes :**

- [Gérer le stockage OpenStack Swift](https://rcloneview.com/support/blog/manage-openstack-swift-object-storage-gui-rcloneview)
- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
