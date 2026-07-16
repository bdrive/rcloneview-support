---
slug: union-remote-combine-free-storage-rcloneview
title: "Remote union — Combinez plusieurs comptes cloud gratuits en un seul immense espace de stockage avec RcloneView"
authors:
  - tayson
description: "Google Drive offre 15 Go gratuits. OneDrive offre 5 Go. Dropbox offre 2 Go. Combinez-les tous en un espace de stockage virtuel de 22 Go grâce au remote union de rclone dans RcloneView."
keywords:
  - combiner le stockage cloud gratuit
  - remote union rclone
  - fusionner des comptes cloud
  - combiner le stockage cloud
  - rclone union drive
  - pool de stockage cloud gratuit
  - pool de stockage multi-cloud
  - combiner google drive onedrive
  - stockage cloud virtuel
  - agréger le stockage cloud
tags:
  - RcloneView
  - feature
  - cloud-storage
  - multi-cloud
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Remote union — Combinez plusieurs comptes cloud gratuits en un seul immense espace de stockage avec RcloneView

> 15 Go depuis Google. 5 Go depuis OneDrive. 2 Go depuis Dropbox. 1 To depuis Terabox. Individuellement, ils sont modestes. Combinés en un remote union, ils forment un pool de stockage gratuit de plusieurs téraoctets.

La plupart des fournisseurs cloud proposent des offres de stockage gratuites, mais prises individuellement, elles sont trop limitées pour un usage sérieux. Le remote union de rclone fusionne plusieurs emplacements de stockage en un seul système de fichiers virtuel. RcloneView vous permet de configurer cela visuellement, puis de parcourir, synchroniser et gérer le pool combiné comme s'il s'agissait d'un seul immense disque.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Comment fonctionne le remote union

Un remote union combine plusieurs remotes en une seule vue virtuelle :

- **Lecture** : les fichiers de tous les remotes sous-jacents apparaissent dans un seul listing de répertoire
- **Écriture** : les nouveaux fichiers sont écrits sur le remote disposant du plus d'espace libre (ou selon la politique que vous avez configurée)
- **Transparence** : vous interagissez avec un seul remote ; rclone gère la répartition

## Stockage gratuit que vous pouvez combiner

| Fournisseur | Offre gratuite |
|----------|----------|
| Google Drive | 15 Go |
| OneDrive | 5 Go |
| Dropbox | 2 Go |
| pCloud | 10 Go |
| Terabox | 1 To |
| MEGA | 20 Go |
| Icedrive | 10 Go |
| Koofr | 10 Go |

Combiné : potentiellement plus d'1 To de stockage gratuit.

## Configurer un remote union

<img src="/support/images/en/blog/new-remote.png" alt="Create union remote" class="img-large img-center" />

1. Ajoutez chaque compte cloud gratuit comme un remote distinct
2. Créez un remote union qui les combine tous
3. Parcourez l'union comme un seul pool de stockage

## Cas d'usage

### Maximiser le stockage gratuit

Étudiants, freelances et utilisateurs soucieux de leur budget peuvent combiner les offres gratuites pour obtenir un espace de stockage gratuit conséquent.

### Répartir la sauvegarde entre plusieurs fournisseurs

Répartissez les données de sauvegarde sur plusieurs comptes gratuits pour plus de redondance. Si un fournisseur rencontre un problème, les autres conservent toujours les données.

### Créer un pool de stockage à plusieurs niveaux

Combinez un stockage rapide (Google Drive) avec un stockage volumineux (Terabox) dans un seul pool.

## Parcourir le pool combiné

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse union remote" class="img-large img-center" />

L'explorateur à deux volets affiche le remote union comme n'importe quel autre remote. Les fichiers de tous les fournisseurs sous-jacents apparaissent ensemble.

## Points importants

- **Les fichiers ne sont pas déplacés** entre les remotes sous-jacents — chaque fichier reste chez le fournisseur sur lequel il a été écrit
- **La suppression** retire le fichier du fournisseur qui le stocke
- **Les performances** dépendent du fournisseur sous-jacent le plus lent lors du listing
- **La politique d'écriture** détermine quel fournisseur reçoit les nouveaux fichiers

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez des comptes cloud gratuits** comme remotes individuels.
3. **Créez un remote union** qui les combine.
4. **Parcourez et utilisez-le** comme un seul pool de stockage.

De petites offres gratuites, combinées en quelque chose d'utile.

---

**Guides associés :**

- [Remotes virtuels : Combine, Union, Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Gérer la prolifération des comptes cloud](https://rcloneview.com/support/blog/manage-cloud-sprawl-too-many-accounts-rcloneview)
- [Guide de gestion des remotes](https://rcloneview.com/support/blog/remote-management-add-edit-delete-rcloneview)

<CloudSupportGrid />
