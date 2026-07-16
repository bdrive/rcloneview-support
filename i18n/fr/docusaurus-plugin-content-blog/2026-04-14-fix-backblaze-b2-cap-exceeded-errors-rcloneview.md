---
slug: fix-backblaze-b2-cap-exceeded-errors-rcloneview
title: "Corriger les erreurs de dépassement de plafond Backblaze B2 — Résolution avec RcloneView"
authors:
  - tayson
description: "Découvrez comment diagnostiquer et corriger les erreurs de dépassement de plafond Backblaze B2 dans RcloneView. Contrôlez les débits de transfert, gérez les plafonds quotidiens et maintenez vos sauvegardes B2 fiables."
keywords:
  - Backblaze B2 cap exceeded error
  - B2 daily cap limit rclone
  - fix Backblaze B2 errors RcloneView
  - B2 transfer cap exceeded
  - Backblaze B2 troubleshooting
  - rclone B2 rate limit
  - Backblaze B2 backup errors
  - B2 upload cap fix
tags:
  - RcloneView
  - troubleshooting
  - backblaze-b2
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de dépassement de plafond Backblaze B2 — Résolution avec RcloneView

> Le plafond quotidien de téléchargement de Backblaze B2 peut interrompre les transferts en pleine synchronisation. Voici comment diagnostiquer les erreurs de dépassement de plafond dans RcloneView et configurer vos tâches pour rester dans les limites.

Backblaze B2 offre une sortie de données gratuite généreuse vers les réseaux peerés avec Cloudflare, mais les téléchargements vers des destinations non peerées consomment un plafond quotidien. Lorsque ce plafond est atteint, B2 renvoie des erreurs HTTP 403 avec un message « cap exceeded », ce qui provoque l'échec ou le blocage des tâches de synchronisation RcloneView. Ce guide vous explique comment identifier l'erreur, ajuster votre configuration de transfert et planifier vos tâches pour rester dans les limites quotidiennes de votre compte B2.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Identifier une erreur de dépassement de plafond

Lorsqu'un plafond B2 est dépassé, RcloneView affiche l'erreur dans l'onglet **Log** en bas de l'interface. Vous verrez des entrées contenant `403 Forbidden` et le message `Transaction cap exceeded` ou `Download cap exceeded`. Le moniteur de transfert dans l'onglet Transferring montre la tâche concernée bloquée à 0 B/s.

Ouvrez le terminal Rclone (onglet Terminal) et exécutez `rclone about b2-remote:` pour vérifier votre utilisation actuelle du stockage et des transactions. Bien que le terminal n'affiche pas la limite exacte du plafond (celle-ci est définie dans la console Backblaze), il confirme que le distant est accessible et affiche l'état général du compte.

<img src="/support/images/en/blog/new-remote.png" alt="Checking Backblaze B2 remote configuration in RcloneView" class="img-large img-center" />

## Ajuster les paramètres de transfert pour éviter les dépassements de plafond

La solution la plus efficace consiste à limiter la bande passante des transferts afin de répartir les téléchargements sur plusieurs jours. Dans les Global Rclone Flags de RcloneView (onglet Settings → Embedded Rclone → Global Rclone Flags), ajoutez `--bwlimit 10M` pour plafonner la bande passante à 10 MB/s. Cela réduit la consommation de données quotidienne et maintient les transferts dans les limites de votre plafond B2 lors de synchronisations ou restaurations volumineuses.

Pour les tâches déclenchées par le planificateur, échelonnez-les tout au long de la journée. Plutôt que d'exécuter une restauration de 200 Go à 6h du matin, divisez la tâche par profondeur de dossier — utilisez des règles de filtre pour traiter d'abord `Archive/2023/`, puis `Archive/2024/` dans une tâche distincte à midi. Les règles de filtre personnalisées de RcloneView à l'étape 3 de l'assistant de synchronisation facilitent cette opération : utilisez l'exclusion de chemin de dossier pour isoler chaque lot.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Backblaze B2 jobs to avoid daily cap in RcloneView" class="img-large img-center" />

## Récupérer une synchronisation échouée après la réinitialisation du plafond

Les plafonds Backblaze B2 se réinitialisent quotidiennement à minuit, heure du Pacifique. Si une tâche échoue en raison d'un dépassement de plafond, la synchronisation de RcloneView est idempotente — lorsque vous relancez la même tâche après la réinitialisation, elle reprendra là où elle s'était arrêtée, en ignorant les fichiers déjà transférés. La fonctionnalité de comparaison de dossiers (Folder Compare) permet de vérifier quels fichiers ont été transférés avant l'échec en comparant la source à la destination.

Par précaution, activez **Retry entire sync if fails** à l'étape 2 de l'assistant de tâche (réglé sur 3 tentatives), et assurez-vous que l'intervalle de nouvelle tentative soit suffisamment long pour permettre au plafond de se réinitialiser. Consultez régulièrement l'onglet Job History pour détecter rapidement les échecs et vérifiez l'état du plafond avant de planifier de nouveaux transferts.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Backblaze B2 job failure history in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Vérifiez l'onglet Log pour les erreurs `403 cap exceeded` après l'échec d'une tâche B2.
3. Ajoutez `--bwlimit` aux Global Rclone Flags pour limiter la consommation de données quotidienne.
4. Relancez la tâche de synchronisation après la réinitialisation du plafond quotidien — RcloneView ignore automatiquement les fichiers déjà transférés.

Avec une planification soignée et une limitation de la bande passante, Backblaze B2 reste une cible de sauvegarde rentable même en travaillant dans les limites du plafond quotidien.

---

**Guides connexes :**

- [Migrer de Backblaze B2 vers AWS S3 avec RcloneView](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-aws-s3-rcloneview)
- [Corriger les interruptions de synchronisation cloud avec la nouvelle tentative réseau dans RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-interrupted-network-retry-rcloneview)
- [Flags rclone personnalisés et options avancées dans RcloneView](https://rcloneview.com/support/blog/custom-rclone-flags-advanced-options-rcloneview)

<CloudSupportGrid />
