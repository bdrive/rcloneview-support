---
slug: sync-google-drive-to-backblaze-b2-rcloneview
title: "Synchroniser Google Drive vers Backblaze B2 — Sauvegarde cloud-à-cloud abordable avec RcloneView"
authors:
  - tayson
description: "Google Drive pour le travail quotidien, Backblaze B2 pour une sauvegarde abordable. Découvrez comment configurer une sauvegarde automatisée de cloud à cloud de Google Drive vers B2 avec RcloneView."
keywords:
  - google drive to backblaze b2
  - google drive backup b2
  - sync google drive b2
  - google drive cloud backup
  - backblaze b2 backup tool
  - google drive offsite backup
  - google drive b2 sync
  - affordable google drive backup
  - cloud to cloud backup google
  - google drive redundancy
tags:
  - RcloneView
  - google-drive
  - backblaze-b2
  - backup
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Google Drive vers Backblaze B2 — Sauvegarde cloud-à-cloud abordable avec RcloneView

> Google Drive stocke votre travail. Backblaze B2 le protège pour 6 $/To/mois. Ensemble, ils forment l'une des stratégies de sauvegarde cloud les plus économiques disponibles.

Google Drive est l'endroit où vivent vos fichiers au quotidien. Mais Google Drive seul n'est pas une sauvegarde — les suppressions accidentelles, les compromissions de compte et les erreurs de synchronisation peuvent détruire des données que Google ne pourra pas récupérer. Backblaze B2, à 6 $/To/mois, fournit le filet de sécurité : une copie indépendante de tout, mise à jour automatiquement par RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi B2 pour la sauvegarde de Google Drive ?

| Facteur | Backblaze B2 |
|--------|-------------|
| Coût de stockage | 6 $/To/mois |
| Coût de téléchargement | 0,01 $/Go |
| Sortie gratuite | 3x le stockage/mois |
| Durabilité | 99,999999999% |
| API | Compatible S3 |

B2 est conçu spécifiquement pour les charges de travail de sauvegarde : stockage bon marché, paiement à l'usage, et compatibilité S3 pour un support universel des outils.

## Configurer la sauvegarde

<img src="/support/images/en/blog/new-remote.png" alt="Connect Google Drive and B2" class="img-large img-center" />

Ajoutez Google Drive et Backblaze B2 comme distants dans RcloneView.

## Créer la tâche de sauvegarde

Ouvrez Google Drive dans un panneau, B2 dans l'autre. Créez une tâche Copy :

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google Drive to B2" class="img-large img-center" />

Utilisez **Copy** (et non Sync) afin que les fichiers supprimés de Google Drive soient conservés dans B2.

## Planifier des sauvegardes nocturnes

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule nightly backup" class="img-large img-center" />

Chaque exécution ne transfère que les fichiers nouveaux et modifiés. Les sauvegardes quotidiennes d'un compte Google Drive typique utilisent une bande passante minimale.

## Vérifier l'intégrité de la sauvegarde

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify backup" class="img-large img-center" />

## Ajouter le chiffrement

Pour les données sensibles, ajoutez une couche de distant crypt au-dessus de B2. Les fichiers sont chiffrés avant de quitter votre machine — Backblaze ne voit jamais de données non chiffrées.

## Exemple de coût

| Taille de Google Drive | Coût mensuel B2 |
|-------------------|----------------|
| 100 Go | 0,60 $ |
| 500 Go | 3,00 $ |
| 1 To | 6,00 $ |
| 5 To | 30,00 $ |

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez des distants Google Drive** et **Backblaze B2**.
3. **Créez une tâche Copy** pour la sauvegarde.
4. **Planifiez des exécutions nocturnes**.
5. **Dormez tranquille** en sachant que vos fichiers sont protégés.

Travail quotidien sur Drive. Sauvegarde nocturne sur B2.

---

**Guides connexes :**

- [Sauvegarder Dropbox vers Backblaze B2](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [Synchroniser Dropbox vers une sauvegarde S3](https://rcloneview.com/support/blog/sync-dropbox-to-s3-backup-rcloneview)
- [Chiffrer les sauvegardes cloud](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
