---
slug: manage-oracle-cloud-object-storage-sync-rcloneview
title: "Gérer Oracle Cloud Object Storage — Synchronisation avec S3, Google Drive et NAS grâce à RcloneView"
authors:
  - tayson
description: "Oracle Cloud Infrastructure propose une tarification compétitive pour le stockage d'objets. Découvrez comment gérer, synchroniser et sauvegarder Oracle Cloud Object Storage aux côtés d'autres clouds avec RcloneView."
keywords:
  - oracle cloud object storage
  - oracle cloud storage sync
  - oracle oci rclone
  - oracle cloud s3 compatible
  - oracle cloud backup tool
  - oracle object storage gui
  - oracle cloud file manager
  - oracle oci storage transfer
  - sync oracle cloud google drive
  - oracle cloud storage migration
tags:
  - oracle-cloud
  - s3-compatible
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer Oracle Cloud Object Storage — Synchronisation avec S3, Google Drive et NAS grâce à RcloneView

> Oracle Cloud Infrastructure (OCI) offre 10 Go de stockage d'objets gratuit et une tarification compétitive au-delà. Mais gérer le stockage OCI aux côtés de vos autres clouds nécessite les bons outils.

Oracle Cloud Object Storage est compatible S3, durable et économique — surtout avec le généreux niveau gratuit d'Oracle et ses ressources Always Free. De nombreuses organisations utilisent OCI aux côtés d'AWS, Google Cloud ou Azure. RcloneView les connecte tous, vous offrant une interface visuelle pour gérer Oracle Cloud Object Storage aux côtés de plus de 70 autres fournisseurs.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi Oracle Cloud Object Storage ?

### Une tarification compétitive

| Fonctionnalité | Oracle Cloud | AWS S3 | Google Cloud |
|---------|-------------|--------|-------------|
| Stockage (To/mois) | $26 | $23 | $20 |
| Sortie de données (10 premiers To) | Gratuit | $90 | $120 |
| Niveau gratuit | 10 Go + Always Free | 5 Go (12 mois) | 5 Go |

Le plus grand avantage d'Oracle : la **sortie de données gratuite** pour les 10 premiers To/mois. Si vous téléchargez fréquemment des données, cela seul vous fait économiser des centaines de dollars.

### Compatibilité S3

OCI Object Storage propose une API compatible S3, ce qui signifie que tout outil fonctionnant avec S3 — y compris rclone et RcloneView — fonctionne avec Oracle Cloud.

### Fonctionnalités entreprise

- **Niveaux de stockage** : Standard, Infrequent Access et Archive.
- **Versionnement des objets** : Protège contre les suppressions accidentelles.
- **Politiques de cycle de vie** : Déplace automatiquement les données entre les niveaux.
- **Réplication** : Réplication inter-régions pour la reprise après sinistre.

## Configurer Oracle Cloud dans RcloneView

### Obtenir vos identifiants

1. Connectez-vous à la console OCI.
2. Naviguez vers Identity → Users → Votre utilisateur → Customer Secret Keys.
3. Générez une Access Key et une Secret Key.
4. Notez votre namespace et votre région (par exemple, `us-phoenix-1`).

### Ajouter Oracle Cloud comme distant

1. Ouvrez RcloneView et cliquez sur **Add Remote**.
2. Choisissez **S3 Compatible** comme type.
3. Sélectionnez **Oracle** (ou Other S3) comme fournisseur.
4. Saisissez votre Access Key, Secret Key, région et endpoint.

<img src="/support/images/en/blog/new-remote.png" alt="Add Oracle Cloud Object Storage remote" class="img-large img-center" />

Le format de l'endpoint est : `https://<namespace>.compat.objectstorage.<region>.oraclecloud.com`

## Flux de travail pratiques

### 1) Parcourir Oracle Cloud visuellement

Fini la console OCI pour la gestion des fichiers. Parcourez vos buckets et objets dans l'explorateur à deux volets de RcloneView :

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Oracle Cloud in RcloneView" class="img-large img-center" />

### 2) Migrer d'AWS S3 vers Oracle Cloud

Profitez de la sortie de données gratuite d'Oracle en déplaçant vos données depuis S3 :

1. Ajoutez S3 et Oracle Cloud comme distants.
2. Créez une tâche de copie de S3 → Oracle Cloud.
3. Surveillez le transfert et vérifiez avec la comparaison de dossiers.

### 3) Synchroniser Oracle Cloud avec Google Drive

Conservez une copie propice à la collaboration sur Google Drive tout en archivant sur Oracle Cloud :

- Planifiez des synchronisations quotidiennes de Google Drive → Oracle Cloud.
- Oracle Cloud sert d'archive durable et économique.

### 4) Stratégie de sauvegarde multi-cloud

Utilisez Oracle Cloud comme un maillon d'une sauvegarde multi-cloud :

```
Primary (Google Drive) → Oracle Cloud (archive with free egress)
Primary (Google Drive) → Backblaze B2 (second archive)
```

### 5) Sauvegarde NAS vers Oracle Cloud

Sauvegardez votre NAS Synology ou QNAP vers Oracle Cloud :

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule NAS to Oracle Cloud backup" class="img-large img-center" />

## Vérifier les transferts

Comparez votre source et votre destination Oracle Cloud :

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Oracle Cloud transfer" class="img-large img-center" />

## Surveiller les transferts volumineux

Suivez la progression des envois vers Oracle Cloud :

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Oracle Cloud upload" class="img-large img-center" />

## Niveaux de stockage Oracle Cloud

Utilisez le niveau adapté à chaque cas d'usage :

| Niveau | Idéal pour | Prix |
|------|----------|-------|
| Standard | Données consultées fréquemment | $26/To/mois |
| Infrequent Access | Accès mensuel | $10/To/mois |
| Archive | Accès annuel | $3/To/mois |

Les politiques de cycle de vie peuvent déplacer automatiquement les données entre les niveaux selon leur ancienneté.

## Pour commencer

1. **Créez un compte Oracle Cloud** (10 Go de stockage gratuit inclus).
2. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
3. **Ajoutez Oracle Cloud** comme distant compatible S3.
4. **Parcourez, transférez, synchronisez** aux côtés de vos autres clouds.
5. **Planifiez des sauvegardes automatisées** pour un fonctionnement sans intervention.

La sortie de données gratuite d'Oracle Cloud en fait une option particulièrement attrayante pour les données que vous consultez régulièrement.

---

**Guides associés :**

- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Comparer le contenu des dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
