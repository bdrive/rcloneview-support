---
slug: multi-threaded-transfers-parallel-streams-rcloneview
title: "Accélérez vos transferts cloud — Uploads multi-threads et flux parallèles dans RcloneView"
authors:
  - tayson
description: "Les transferts cloud n'ont pas à être lents. Découvrez comment utiliser les uploads multi-threads, les transferts de fichiers parallèles et les paramètres d'optimisation de transfert dans RcloneView pour maximiser le débit."
keywords:
  - multi threaded cloud upload
  - parallel cloud transfer
  - speed up cloud sync
  - rclone parallel transfers
  - fast cloud upload
  - cloud transfer optimization
  - rcloneview transfer speed
  - concurrent cloud uploads
  - multi stream upload
  - maximize cloud transfer speed
tags:
  - performance
  - feature
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Accélérez vos transferts cloud — Uploads multi-threads et flux parallèles dans RcloneView

> Uploader 500 Go vers S3 fichier par fichier peut prendre des jours. Avec les transferts parallèles et les uploads multi-threads, cela ne prend que quelques heures. Voici comment configurer RcloneView pour une vitesse maximale.

Par défaut, les outils de transfert cloud traitent les fichiers de manière séquentielle et uploadent chaque fichier dans un flux unique. Cela n'exploite qu'une infime partie de ce que votre réseau et le fournisseur cloud peuvent gérer. RcloneView, propulsé par rclone, prend en charge à la fois les transferts de fichiers parallèles (plusieurs fichiers simultanément) et les uploads multi-threads (division des fichiers volumineux en flux concurrents). Bien configurer ces options peut réduire considérablement les temps de transfert.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Deux types de parallélisme

### Transferts de fichiers parallèles

Transférez plusieurs fichiers en même temps. Au lieu d'uploader le fichier 1, puis le fichier 2, puis le fichier 3 — uploadez les trois simultanément. Ceci est contrôlé par le paramètre `--transfers` (par défaut : 4).

### Uploads multi-threads d'un seul fichier

Divisez un fichier volumineux en plusieurs blocs et uploadez-les de manière concurrente. Un fichier vidéo de 10 Go est divisé en parties, chacune uploadée en parallèle, puis réassemblée à destination. Ceci est contrôlé par `--multi-thread-streams` (par défaut : 4).

## Comment configurer dans RcloneView

### Ajuster les transferts parallèles

Dans les paramètres de votre tâche ou via le terminal de RcloneView, définissez le nombre de transferts de fichiers concurrents :

- **4 transferts** (par défaut) — sûr pour la plupart des situations
- **8-16 transferts** — adapté aux connexions rapides avec de nombreux petits fichiers
- **2-4 transferts** — préférable pour les connexions lentes ou les fournisseurs avec des limites de débit strictes

### Ajuster les flux multi-threads

Pour les uploads de fichiers volumineux, augmentez le nombre de flux :

- **4 flux** (par défaut) — performance équilibrée
- **8-16 flux** — optimal pour les fichiers volumineux sur des connexions rapides
- **1 flux** — à utiliser pour les fournisseurs qui ne prennent pas en charge les uploads multi-parties

## Surveillez l'impact

Observez la vitesse de transfert en temps réel pour voir l'effet de vos modifications :

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer speed" class="img-large img-center" />

## Paramètres optimaux par scénario

| Scénario | Transferts | Flux | Pourquoi |
|----------|-----------|---------|-----|
| Nombreux petits fichiers (photos, documents) | 16 | 1 | La surcharge par fichier domine ; plus de fichiers en parallèle aide |
| Peu de fichiers volumineux (vidéos, sauvegardes) | 2-4 | 8-16 | La vitesse par fichier compte ; plus de flux aide |
| Tailles de fichiers mixtes | 8 | 4 | Approche équilibrée |
| Réseau lent (< 50 Mbps) | 2-4 | 2-4 | Éviter de saturer la connexion |
| Réseau rapide (> 500 Mbps) | 16+ | 8-16 | Utiliser toute la bande passante disponible |
| Fournisseur avec limites de débit | 2-4 | 4 | Rester sous les limites de l'API |

## Conseils spécifiques par fournisseur

### Google Drive
Google impose des limites d'upload quotidiennes (750 Go) et des limites d'API par seconde. Gardez les transferts modérés (4-8) et utilisez `--tpslimit` pour rester sous les limites de débit.

### S3 / Compatible S3
S3 gère bien un parallélisme élevé. Poussez les transferts à 16+ et les flux à 8-16 pour un débit maximal.

### OneDrive
OneDrive peut être sensible à une concurrence élevée. Commencez avec 4 transferts et augmentez progressivement.

### Backblaze B2
B2 gère bien les uploads multi-parties. Utilisez 4-8 transferts avec 4-8 flux.

## Utiliser le terminal de RcloneView pour un réglage fin

Pour un réglage avancé, utilisez le terminal intégré pour exécuter des commandes rclone avec des indicateurs spécifiques. Testez différentes configurations et mesurez les résultats avec la surveillance en temps réel.

## Consultez l'historique des tâches pour les résultats

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Review transfer performance" class="img-large img-center" />

Comparez les durées des tâches avant et après optimisation. L'historique des tâches affiche la durée totale, les fichiers transférés et la vitesse moyenne.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Commencez avec les valeurs par défaut** (4 transferts, 4 flux).
3. **Surveillez la vitesse** pendant les transferts.
4. **Augmentez progressivement** selon votre réseau et votre fournisseur.
5. **Comparez l'historique des tâches** pour mesurer l'amélioration.

Plus de parallélisme signifie des transferts plus rapides — jusqu'aux limites de votre réseau et de votre fournisseur.

---

**Guides connexes :**

- [Résoudre les uploads cloud lents](https://rcloneview.com/support/blog/fix-slow-cloud-uploads-speed-optimization-rcloneview)
- [Définir des limites de bande passante](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)
- [Historique des tâches et journaux](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
