---
slug: migrate-backblaze-b2-to-aws-s3-rcloneview
title: "Comment migrer de Backblaze B2 vers AWS S3 — Guide étape par étape avec RcloneView"
authors:
  - tayson
description: "Besoin de déplacer des données de Backblaze B2 vers AWS S3 pour une intégration à l'écosystème AWS ? Découvrez comment migrer à moindre coût et sans perte de données avec RcloneView."
keywords:
  - backblaze b2 to aws s3
  - migrate b2 to s3
  - backblaze to amazon s3
  - b2 s3 migration tool
  - switch cloud storage provider
  - backblaze b2 migration
  - b2 to s3 transfer
  - cloud storage migration
  - backblaze to aws
  - s3 migration tool
tags:
  - backblaze-b2
  - aws-s3
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Comment migrer de Backblaze B2 vers AWS S3 — Guide étape par étape avec RcloneView

> Backblaze B2 est idéal pour un stockage économique. Mais lorsque vous avez besoin d'une intégration à l'écosystème AWS — déclencheurs Lambda, CDN CloudFront, requêtes Athena — vous avez besoin de S3. Voici comment migrer sans perte de données.

Backblaze B2 et AWS S3 sont tous deux compatibles S3, ce qui rend la migration simple avec le bon outil. Les principaux éléments à prendre en compte sont les coûts de sortie (egress), le temps de transfert et la vérification. RcloneView gère le transfert tout en offrant une surveillance visuelle et une vérification.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Planification de la migration

### Estimation des coûts

Sortie B2 : 10 $/To (ou gratuite via la Cloudflare Bandwidth Alliance).

| Volume de données | Coût de sortie B2 | Stockage S3 (premier mois) |
|-------------|---------------|-------------------------|
| 100 Go | 1 $ | 2,30 $ |
| 1 To | 10 $ | 23 $ |
| 10 To | 100 $ | 230 $ |

### Délai

La vitesse de transfert dépend de votre connexion et du débit de B2/S3. Les deux services gèrent bien un haut niveau de parallélisme.

## Étape par étape

### 1) Ajouter les deux distants

<img src="/support/images/en/blog/new-remote.png" alt="Add B2 and S3 remotes" class="img-large img-center" />

### 2) Parcourir et comparer

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse B2 and S3 side by side" class="img-large img-center" />

### 3) Lancer une tâche de copie

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Migrate B2 to S3" class="img-large img-center" />

Utilisez un parallélisme élevé (16 à 32 transferts) — B2 et S3 le gèrent tous deux très bien.

### 4) Suivre la progression

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor B2 to S3 migration" class="img-large img-center" />

### 5) Vérifier l'exhaustivité

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify B2 to S3 migration" class="img-large img-center" />

## Après la migration

1. **Mettre à jour les configurations des applications** — Pointez vos applications vers les points de terminaison S3.
2. **Tester minutieusement** — Vérifiez que les lectures et écritures fonctionnent correctement.
3. **Conserver B2 pendant 30 jours** — Solution de repli en cas de problème.
4. **Supprimer les données B2** — Après avoir confirmé que tout fonctionne sur S3.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez B2 et S3** comme distants.
3. **Lancez une tâche de copie** avec un parallélisme élevé.
4. **Vérifiez avec la comparaison de dossiers**.

Même API, écosystème plus vaste.

---

**Guides connexes :**

- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Comparer le contenu de dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Migrer entre fournisseurs compatibles S3](https://rcloneview.com/support/blog/migrate-wasabi-to-backblaze-b2-s3-rcloneview)

<CloudSupportGrid />
