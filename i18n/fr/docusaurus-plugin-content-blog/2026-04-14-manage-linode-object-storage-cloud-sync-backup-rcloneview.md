---
slug: manage-linode-object-storage-cloud-sync-backup-rcloneview
title: "Gérer Linode Object Storage — Synchroniser et sauvegarder des fichiers avec RcloneView"
authors:
  - tayson
description: "Connectez Linode Object Storage à RcloneView et gérez vos buckets compatibles S3 avec une interface graphique. Synchronisez, sauvegardez et transférez des fichiers entre régions sans commandes CLI."
keywords:
  - Linode Object Storage RcloneView
  - synchronisation stockage cloud Linode
  - interface graphique de sauvegarde Linode
  - gestion du stockage cloud Akamai
  - rclone Linode Object Storage
  - stockage compatible S3 Linode
  - outil de transfert de fichiers Linode
  - automatisation de sauvegarde cloud Linode
tags:
  - linode
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer Linode Object Storage — Synchroniser et sauvegarder des fichiers avec RcloneView

> RcloneView se connecte à Linode Object Storage via une API compatible S3, offrant aux développeurs et aux équipes DevOps un gestionnaire de fichiers visuel pour leurs buckets Linode sans passer par la CLI.

Linode Object Storage (désormais intégré à Akamai Cloud) est un service de stockage d'objets compatible S3, étroitement intégré à la plateforme de calcul de Linode. Les équipes qui exécutent des applications sur des Linodes stockent souvent des ressources statiques, des sauvegardes de bases de données et des artefacts de déploiement dans Object Storage. Le backend S3 de RcloneView se connecte de façon transparente, offrant une interface visuelle pour parcourir les buckets, exécuter des synchronisations planifiées et migrer des données entre régions Linode ou vers d'autres fournisseurs.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Linode Object Storage à RcloneView

Linode Object Storage utilise une API compatible S3. Dans RcloneView, allez dans **Onglet Distant → Nouveau distant → Amazon S3 Compatible** et sélectionnez **Autre**, ou configurez manuellement avec :

- **Clé d'accès** — générée dans le Linode Cloud Manager sous Object Storage → Access Keys
- **Clé secrète** — affichée une seule fois lors de la création
- **Endpoint** — spécifique à la région, par exemple `us-east-1.linodeobjects.com` ou `eu-central-1.linodeobjects.com`

Une fois enregistré, vos buckets Linode apparaissent dans le panneau Explorateur. Vous pouvez parcourir les objets, téléverser des fichiers par glisser-déposer, télécharger des objets sélectionnés vers un stockage local, et utiliser le menu contextuel pour les opérations de fichiers standard.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Linode Object Storage as an S3 remote in RcloneView" class="img-large img-center" />

## Automatiser les sauvegardes Linode avec des tâches planifiées

Un flux de travail courant : les serveurs Linode génèrent des journaux d'application, des dumps de bases de données et des fichiers téléversés par les utilisateurs qui doivent être régulièrement sauvegardés vers un emplacement secondaire. Utilisez le Gestionnaire de tâches de RcloneView pour créer une tâche de synchronisation planifiée depuis votre bucket Linode Object Storage vers Backblaze B2 ou Amazon S3, offrant une redondance entre fournisseurs.

Configurez la synchronisation pour qu'elle s'exécute chaque jour à 4h00, avec un nombre de transferts simultanés fixé à 8 pour maximiser le débit. Activez la vérification par somme de contrôle pour confirmer l'intégrité des données entre fournisseurs. L'onglet Historique des tâches enregistre chaque exécution avec le statut, le nombre de fichiers, la taille du transfert et la durée — utile pour démontrer la conformité des sauvegardes dans les environnements réglementés.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Linode Object Storage backup jobs in RcloneView" class="img-large img-center" />

## Transferts entre régions et entre fournisseurs

Linode Object Storage est disponible dans plusieurs régions (US, EU, JP, AU). Lorsque vous devez répliquer un bucket de `us-east-1` vers `eu-central-1` pour une redondance géographique, configurez deux distants Linode dans RcloneView (un par région) et créez une tâche de synchronisation entre eux. Il s'agit d'un transfert entièrement cloud à cloud — aucun stockage local intermédiaire n'est requis, et RcloneView le gère via le mécanisme de copie côté serveur de rclone, lorsqu'il est pris en charge.

Pour les migrations depuis Linode Object Storage vers un autre fournisseur (par exemple, un passage à Cloudflare R2 pour des coûts d'egress nuls), la même approche s'applique : ajoutez les deux comme distants et créez une tâche de synchronisation ponctuelle.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cross-region Linode Object Storage transfer in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Générez des clés d'accès Object Storage dans le Linode Cloud Manager.
3. Ajoutez un nouveau distant compatible S3 dans RcloneView avec vos identifiants Linode et votre endpoint.
4. Créez une tâche de synchronisation dans le Gestionnaire de tâches pour automatiser les sauvegardes vers votre stockage secondaire préféré.

Linode Object Storage, géré via RcloneView, devient un composant bien surveillé de votre infrastructure cloud — avec des sauvegardes planifiées, une réplication entre régions et une piste d'audit complète.

---

**Guides associés :**

- [Synchroniser Linode Object Storage avec S3 et Google Drive via RcloneView](https://rcloneview.com/support/blog/sync-linode-object-storage-s3-google-drive-rcloneview)
- [Gérer la synchronisation cloud Cloudflare R2 avec RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Centraliser S3, Wasabi et R2 avec RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
