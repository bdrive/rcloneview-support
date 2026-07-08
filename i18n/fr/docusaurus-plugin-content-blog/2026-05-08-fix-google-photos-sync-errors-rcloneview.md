---
slug: fix-google-photos-sync-errors-rcloneview
title: "Corriger les erreurs de synchronisation Google Photos — Comment résoudre le problème avec RcloneView"
authors:
  - steve
description: "Diagnostiquez et corrigez les erreurs courantes de synchronisation Google Photos dans RcloneView — y compris les limites de quota API, les restrictions d'upload en lecture seule et les fichiers multimédias manquants."
keywords:
  - Google Photos sync errors RcloneView
  - fix Google Photos backup issues
  - Google Photos rclone errors
  - Google Photos API quota error
  - RcloneView Google Photos troubleshoot
  - Google Photos upload problems
  - fix cloud photo sync errors
  - Google Photos backup fix
tags:
  - RcloneView
  - google-photos
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de synchronisation Google Photos — Comment résoudre le problème avec RcloneView

> Google Photos possède des contraintes API particulières qui provoquent des erreurs de synchronisation absentes chez d'autres fournisseurs. Voici comment identifier et corriger les problèmes les plus courants dans RcloneView.

Google Photos est populaire pour le stockage de photos personnelles, mais son backend rclone se comporte différemment d'un lecteur cloud standard. Il est en lecture seule pour les médias existants (vous pouvez téléverser de nouvelles photos mais ne pouvez pas écraser ou supprimer via l'API), et il impose des limites de débit plus strictes que Google Drive. Comprendre ces contraintes est la première étape pour résoudre les erreurs lors de la synchronisation de Google Photos avec RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Erreur : « Échec du téléversement » ou « 403 Forbidden »

La cause la plus fréquente des échecs de téléversement vers Google Photos est le dépassement du quota d'écriture de l'API. Google impose des limites quotidiennes par utilisateur sur les téléversements de photos via l'API. Si vous téléversez des milliers de photos en masse, vous pouvez atteindre cette limite en cours de transfert.

Dans l'onglet **Log** de RcloneView, recherchez les messages contenant `403` ou `userRateLimitExceeded`. La solution consiste à réduire la concurrence des transferts — accédez aux paramètres avancés de votre tâche et définissez le nombre de transferts de fichiers sur 2 ou 3. Activez également **Réessayer en cas d'échec** (avec un nombre de tentatives de 5 ou plus) afin que RcloneView retente automatiquement les téléversements bloqués au lieu de faire échouer toute la tâche. Répartissez les lots de téléversement volumineux sur plusieurs jours si nécessaire.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Google Photos upload rate in RcloneView" class="img-large img-center" />

## Erreur : « Impossible de copier — La destination est en lecture seule »

Si vous voyez des erreurs concernant une destination en lecture seule, c'est que vous essayez d'effectuer une synchronisation bidirectionnelle ou d'écraser des photos existantes dans Google Photos. L'API Google Photos ne permet pas de modifier ou de supprimer des médias existants via rclone. RcloneView respecte cette limitation.

La solution consiste à configurer votre tâche en tant que **Copie** (Copy) à sens unique (et non Sync) depuis votre source vers Google Photos. Cela téléverse de nouveaux fichiers sans tenter de supprimer ou d'écraser quoi que ce soit du côté Google Photos. Si vous devez supprimer des photos, faites-le manuellement dans l'application web ou mobile Google Photos.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring a Copy job to Google Photos in RcloneView" class="img-large img-center" />

## Fichiers manquants après le transfert

Google Photos organise les médias par album et par date de création, et non par structure de dossier d'origine. Lorsque vous synchronisez une hiérarchie de dossiers vers Google Photos, les fichiers arrivent bien dans la bibliothèque mais peuvent ne pas apparaître dans le dossier attendu. Il s'agit d'un comportement propre à l'API Google Photos — la structure des dossiers n'est pas préservée.

Pour préserver l'organisation de vos dossiers, envisagez de synchroniser plutôt vers Google Drive, où les sous-répertoires sont conservés exactement comme sur votre source. Pour un véritable archivage photo, Backblaze B2 ou Amazon S3 avec une copie de votre arborescence de dossiers d'origine constitue une solution plus fiable sur le long terme.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing job history after a Google Photos sync attempt" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Consultez l'onglet **Log** pour connaître les codes d'erreur spécifiques après une synchronisation Google Photos échouée.
3. En cas d'erreurs de limite de débit, réduisez la concurrence à 2–3 et augmentez le nombre de tentatives.
4. Utilisez le type de tâche **Copy**, et non Sync, pour éviter les erreurs de destination en lecture seule.

Comprendre les restrictions de l'API Google Photos vous permet de configurer RcloneView correctement dès la première fois et d'éviter des cycles de tentatives frustrants.

---

**Guides associés :**

- [Gérer le stockage cloud Google Photos avec RcloneView](https://rcloneview.com/support/blog/manage-google-photos-cloud-sync-backup-rcloneview)
- [Corriger les erreurs de quota et de limite de débit Google Drive](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [Synchroniser Google Photos vers Backblaze B2 avec RcloneView](https://rcloneview.com/support/blog/sync-google-photos-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
