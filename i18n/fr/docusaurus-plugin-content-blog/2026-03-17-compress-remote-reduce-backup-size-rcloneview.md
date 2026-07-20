---
slug: compress-remote-reduce-backup-size-rcloneview
title: "Remote Compress — Réduisez automatiquement la taille de vos sauvegardes cloud avec RcloneView"
authors:
  - tayson
description: "RcloneView prend en charge le remote compress de rclone, qui compresse automatiquement les fichiers avant leur envoi vers le stockage cloud. Économisez sur les coûts de stockage et la bande passante à chaque sauvegarde."
keywords:
  - rclone compress remote
  - compress cloud backup
  - reduce cloud storage size
  - compressed cloud upload
  - rcloneview compress
  - save cloud storage space
  - compress before upload
  - cloud backup compression
  - reduce backup size
  - rclone compression
tags:
  - RcloneView
  - feature
  - cost-optimization
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Remote Compress — Réduisez automatiquement la taille de vos sauvegardes cloud avec RcloneView

> Votre sauvegarde de 500 Go pourrait ne peser que 300 Go grâce à la compression. Le remote compress enveloppe n'importe quel fournisseur cloud avec une compression gzip automatique — des sauvegardes plus légères, des coûts réduits, les mêmes données.

Le coût du stockage cloud dépend de la taille des données. Si vous pouvez réduire la taille de vos sauvegardes de 30 à 60 %, vous économisez d'autant sur votre facture de stockage chaque mois. Le remote compress de rclone offre une compression transparente : les fichiers sont compressés avant l'envoi et décompressés lors du téléchargement, sans aucune étape manuelle. RcloneView vous permet de le configurer visuellement et de gérer vos sauvegardes compressées aux côtés de vos autres comptes cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Comment fonctionne le remote compress

Un remote compress enveloppe un autre remote (Google Drive, S3, B2, etc.) et effectue automatiquement les opérations suivantes :

1. **Compresse les fichiers** avec gzip avant l'envoi
2. **Décompresse les fichiers** de manière transparente lors du téléchargement
3. **Ignore les formats déjà compressés** (jpg, mp4, zip, etc.) pour éviter de gaspiller du CPU

Vous interagissez avec le remote compress comme avec n'importe quel autre remote — parcourir, copier, synchroniser — mais les fichiers sur la destination sont stockés sous forme compressée.

## Gains de compression selon le type de fichier

| Type de fichier | Compression typique | Exemple |
|-----------|-------------------|---------|
| Fichiers texte, CSV, journaux | 60-90 % plus petits | 100 Mo → 10-40 Mo |
| Documents bureautiques (docx, xlsx) | 5-15 % plus petits | Déjà partiellement compressés |
| Dumps de base de données | 50-80 % plus petits | 1 Go → 200-500 Mo |
| Code source | 60-80 % plus petits | 500 Mo → 100-200 Mo |
| Photos (JPG, PNG) | ~0 % | Déjà compressées |
| Vidéo (MP4, MKV) | ~0 % | Déjà compressée |
| Archives ZIP/RAR | ~0 % | Déjà compressées |

Idéal pour : les données majoritairement textuelles, les journaux, les sauvegardes de base de données, le code source, les formats de données non compressés.
Peu utile pour : les photos, les vidéos et les archives déjà compressées.

## Configurer un remote compress

<img src="/support/images/en/blog/new-remote.png" alt="Create compress remote" class="img-large img-center" />

Créez un remote compress qui enveloppe votre remote de stockage existant. Utilisez ensuite ce remote compress comme destination de sauvegarde à la place du remote brut.

## Cas d'usage

### Compresser les sauvegardes de journaux

Les journaux serveur se compressent extrêmement bien (80-90 %). Une archive de journaux de 50 Go devient 5-10 Go sur le stockage cloud.

### Réduire les coûts de sauvegarde de base de données

Les dumps de base de données quotidiens sont hautement compressibles. Compressez-les avant l'envoi pour réduire vos factures de stockage cloud.

### Archives de code source

Les projets de développement comportant des milliers de fichiers texte bénéficient grandement de la compression.

### Planifier des sauvegardes compressées

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule compressed backup" class="img-large img-center" />

## Points importants

- **Surcharge CPU** : la compression utilise le CPU pendant l'envoi et le téléchargement. Les CPU modernes gèrent cela sans difficulté.
- **Tous les fichiers ne se compressent pas** : les formats déjà compressés (JPG, MP4, ZIP) passent sans être compressés.
- **Accès transparent** : les fichiers apparaissent normalement lors de la navigation via le remote compress — la décompression se fait automatiquement.
- **Combinable avec le chiffrement** : vous pouvez empiler les remotes compress + crypt pour obtenir des sauvegardes à la fois compressées ET chiffrées.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez votre stockage cloud** en tant que remote classique.
3. **Créez un remote compress** qui l'enveloppe.
4. **Utilisez le remote compress** comme destination de sauvegarde.
5. **Profitez de sauvegardes plus légères** et de coûts réduits.

Des sauvegardes plus légères, des factures réduites, les mêmes données.

---

**Guides associés :**

- [Coûts cachés du stockage cloud](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)
- [Chiffrer les sauvegardes cloud](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [Remotes virtuels : Combine, Union, Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)

<CloudSupportGrid />
