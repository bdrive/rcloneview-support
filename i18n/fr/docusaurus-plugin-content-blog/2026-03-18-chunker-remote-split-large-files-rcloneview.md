---
slug: chunker-remote-split-large-files-rcloneview
title: "Distant Chunker — Divisez les fichiers volumineux pour les fournisseurs cloud avec limites de taille dans RcloneView"
authors:
  - tayson
description: "Certains fournisseurs cloud refusent les fichiers au-delà d'une certaine taille. Le distant chunker de rclone divise automatiquement les fichiers volumineux en morceaux pour le transfert et les réassemble au téléchargement."
keywords:
  - rclone chunker remote
  - split large files cloud
  - cloud file size limit
  - upload large files cloud
  - chunked upload cloud
  - large file cloud storage
  - rclone split files
  - file size limit workaround
  - cloud upload size limit
  - chunker rcloneview
tags:
  - RcloneView
  - feature
  - performance
  - cloud-storage
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Distant Chunker — Divisez les fichiers volumineux pour les fournisseurs cloud avec limites de taille dans RcloneView

> Votre fichier vidéo fait 15 Go. La limite de transfert de votre fournisseur cloud est de 5 Go. Plutôt que de ré-encoder la vidéo ou de trouver un autre fournisseur, le distant chunker le divise automatiquement.

Certains fournisseurs de stockage cloud imposent des limites de taille de fichier maximale. Google Drive plafonne à 5 To (rarement un problème), mais d'autres fournisseurs — en particulier les offres gratuites, les points de terminaison WebDAV et certains services compatibles S3 — ont des limites bien plus basses. Le distant chunker de rclone résout ce problème en divisant de manière transparente les fichiers volumineux en morceaux pour le transfert, puis en les réassemblant au téléchargement.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Comment fonctionne Chunker

Un distant chunker encapsule un autre distant et :

1. **Divise les fichiers** dépassant une taille configurable en morceaux numérotés
2. **Transfère les morceaux** individuellement vers le fournisseur cloud
3. **Au téléchargement**, réassemble les morceaux pour reconstituer le fichier original
4. **De manière transparente** — vous voyez le fichier original dans l'explorateur, pas les morceaux

Par exemple, un fichier de 15 Go avec une taille de morceau de 5 Go devient trois morceaux de 5 Go chez le fournisseur. Lorsque vous parcourez ou téléchargez, il apparaît comme un seul fichier de 15 Go.

## Quand vous avez besoin de Chunker

| Scénario | Solution |
|----------|----------|
| Le fournisseur a une limite de taille de fichier | Chunker divise au-delà de la limite |
| Le serveur WebDAV refuse les transferts volumineux | Découpage en morceaux plus petits |
| Offre gratuite avec limites par fichier | Division pour respecter les limites |
| Le réseau coupe lors des gros transferts | Des morceaux plus petits = reprises plus faciles |

## Configurer un distant Chunker

<img src="/support/images/en/blog/new-remote.png" alt="Create chunker remote" class="img-large img-center" />

Créez un distant chunker qui encapsule votre distant de stockage cible. Configurez la taille des morceaux selon les limites de votre fournisseur.

## Combiner avec d'autres distants

Chunker peut être superposé à d'autres distants spéciaux :

- **Chunker + Crypt** : Divisez ET chiffrez les fichiers volumineux
- **Chunker + Compress** : Divisez ET compressez les fichiers volumineux
- **Chunker + n'importe quel fournisseur** : Fonctionne avec les plus de 70 fournisseurs

## Remarques importantes

- **Les morceaux sont spécifiques au fournisseur** : les fichiers découpés pour un fournisseur doivent être accédés via la même configuration de chunker
- **Ne modifiez pas les morceaux directement** : accédez-y toujours via le distant chunker pour préserver l'intégrité
- **Choisissez judicieusement la taille des morceaux** : trop petite crée de nombreux fichiers (listage plus lent) ; trop grande annule l'intérêt de la fonctionnalité

## Cas d'usage

### Sauvegarder des images de VM

Les images disque de machines virtuelles font souvent 50 à 200 Go. Chunker les divise pour les fournisseurs avec des limites de transfert.

### Archiver des fichiers multimédias volumineux

Fichiers vidéo 4K, masters audio bruts et jeux de données volumineux qui dépassent les limites de taille par fichier.

### Améliorer la fiabilité des transferts

Des morceaux plus petits sont plus faciles à relancer lorsque les connexions réseau sont instables. Si un morceau de 1 Go échoue, vous relancez 1 Go au lieu du fichier entier de 50 Go.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez votre distant de stockage** normalement.
3. **Créez un distant chunker** qui l'encapsule.
4. **Transférez les fichiers volumineux** via le chunker.

Aucun fichier trop volumineux, aucune limite de fournisseur trop petite.

---

**Guides connexes :**

- [Distant Compress](https://rcloneview.com/support/blog/compress-remote-reduce-backup-size-rcloneview)
- [Distants virtuels : Combine, Union, Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Chiffrer les sauvegardes cloud](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
