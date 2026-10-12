---
slug: fix-google-photos-sync-errors-rcloneview
title: "Corriger les erreurs de synchronisation de Google Photos — bibliothèque vide, 403 Forbidden et problèmes de lecture seule dans RcloneView"
authors:
  - steve
description: "Résolvez les erreurs courantes de Google Photos dans RcloneView : un distant qui semble vide ou signale aucun changement, un 403 Forbidden dû à un ID client retiré ou aux limites de débit, des erreurs de destination en lecture seule et des fichiers manquants après l'envoi."
keywords:
  - erreurs de synchronisation Google Photos RcloneView
  - dossier Google Photos vide rclone
  - Google Photos 403 ID client
  - corriger les problèmes de sauvegarde Google Photos
  - erreurs rclone Google Photos
  - erreur de quota API Google Photos
  - dépannage Google Photos RcloneView
  - problèmes d'envoi Google Photos
  - correction de la sauvegarde Google Photos
tags:
  - RcloneView
  - google-photos
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de synchronisation de Google Photos — bibliothèque vide, 403 Forbidden et problèmes de lecture seule dans RcloneView

> Google Photos impose des contraintes d'API qu'aucun autre stockage cloud n'a. La plupart des « erreurs » rencontrées dans RcloneView résultent des règles de Google — voici ce que chacune signifie et comment réagir.

Google Photos est très utilisé pour stocker des photos personnelles, mais son backend rclone se comporte très différemment d'un stockage cloud classique. Depuis le 31 mars 2025, l'API Google Photos ne montre à une application tierce que les médias qu'elle a elle-même envoyés ; les médias existants ne peuvent être ni modifiés ni supprimés via l'API ; et les limites de débit sont plus strictes que celles de Google Drive. Comprendre ces contraintes est la première étape pour résoudre les erreurs lorsque vous travaillez avec Google Photos dans RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Le distant semble vide — « No Changes Detected » ou 0 fichier copié

Le cas le plus fréquent : vous ajoutez un distant Google Photos, l'ouvrez dans l'Explorateur et n'y trouvez presque rien — ou une tâche Copy vers votre NAS se termine en quelques secondes sans aucun fichier transféré. Rien n'est cassé. Le 31 mars 2025, Google a supprimé les portées d'API qui permettaient aux applications tierces de lire toute la bibliothèque d'un utilisateur. Selon les termes de Google, les applications « can now only list, search, and retrieve albums and media items that were created by your app. » RcloneView ne voit donc que les photos envoyées via RcloneView ou rclone ; les envois depuis le téléphone et le web sont invisibles, et les albums partagés renvoient `403 PERMISSION_DENIED`.

RcloneView 1.6 et versions ultérieures explique cette restriction directement dans l'application lorsque vous ouvrez un distant Google Photos, afin qu'il n'ait plus l'apparence d'un compte vide.

Que faire : utilisez **Google Takeout** pour exporter votre bibliothèque existante — idéalement vers Google Drive — puis laissez RcloneView copier l'export vers votre disque externe, votre NAS ou un autre stockage cloud. Le guide complet se trouve dans [Comment sauvegarder Google Photos sur un disque externe ou un NAS](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview).

## Erreur : « 403 Forbidden » — ID client retiré ou limite de débit

Un `403` de Google Photos peut avoir deux causes différentes. Consultez l'**onglet Log** de RcloneView pour les distinguer.

**403 lors de la connexion ou du listage — l'ID client partagé.** L'ID client Google Photos intégré à rclone est retiré au cours de 2026, et Google exige désormais que chaque utilisateur se connecte avec son propre ID client OAuth. Si le distant ne parvient pas à se connecter ou si chaque requête est refusée, c'est la cause. RcloneView 1.6 et versions ultérieures vous guide dans la création de votre propre ID client via l'assistant de connexion lorsqu'une connexion est impossible ; la [documentation Google Photos](https://rclone.org/googlephotos/#making-your-own-client-id) de rclone décrit les mêmes étapes dans la Google Cloud Console.

**403 avec `userRateLimitExceeded` pendant les envois — le quota d'écriture.** Google impose des limites quotidiennes par utilisateur sur les envois de photos via l'API, et l'envoi massif de milliers de photos peut les atteindre en plein transfert. Réduisez la simultanéité des transferts — allez dans les Advanced Settings de votre tâche et réglez le nombre de transferts de fichiers à 2 ou 3 — et activez **Retry on failure** (5 tentatives ou plus) afin que RcloneView réessaie les envois limités au lieu de faire échouer toute la tâche. Répartissez les très gros envois sur plusieurs jours si nécessaire.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Surveillance du débit d'envoi vers Google Photos dans RcloneView" class="img-large img-center" />

## Erreur : « Can't Copy — Destination is Read Only »

Si vous voyez des erreurs de destination en lecture seule, vous essayez de synchroniser dans les deux sens ou d'écraser des photos qui existent déjà dans Google Photos. L'API Google Photos n'autorise pas la modification ni la suppression de médias existants via rclone, et RcloneView respecte cette limitation.

La solution consiste à configurer la tâche en **Copy** unidirectionnel (et non Sync) depuis votre source vers Google Photos. Les nouveaux fichiers sont envoyés sans tentative de suppression ni d'écrasement côté Google Photos. Si vous devez supprimer des photos, faites-le dans l'application web ou mobile Google Photos.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuration d'une tâche Copy vers Google Photos dans RcloneView" class="img-large img-center" />

## Fichiers manquants après l'envoi

Google Photos organise les médias par album et par date de création, et non selon votre arborescence d'origine. Lorsque vous copiez une hiérarchie de dossiers vers Google Photos, les fichiers arrivent dans la bibliothèque mais ne conservent pas les dossiers attendus — l'API ne préserve pas la structure des dossiers. Notez aussi que les photos retéléchargées via l'API ne sont pas en résolution d'origine et perdent les données de localisation EXIF.

Pour conserver l'organisation de vos dossiers, copiez plutôt vers Google Drive, où les sous-répertoires sont préservés exactement comme sur votre source. Pour une véritable archive photo, Backblaze B2 ou Amazon S3 avec une copie de votre arborescence d'origine est le choix le plus fiable à long terme.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Consultation de l'historique des tâches après une tâche Google Photos" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Si le distant semble vide, il s'agit de la restriction d'API de Google — exportez votre bibliothèque existante avec Google Takeout et copiez l'export avec RcloneView.
3. Pour un 403 à la connexion, créez votre propre ID client OAuth ; pour `userRateLimitExceeded`, réduisez la simultanéité à 2–3 et augmentez le nombre de tentatives.
4. Utilisez le type de tâche **Copy**, et non Sync, pour envoyer vers Google Photos.

Savoir quelle règle de Google vous avez rencontrée vous permet de configurer RcloneView correctement du premier coup et d'éviter des cycles de nouvelles tentatives frustrants.

---

**Guides associés :**

- [Comment sauvegarder Google Photos sur un disque externe ou un NAS — Google Takeout + RcloneView](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)
- [Corriger les erreurs de quota et de limite de débit de Google Drive](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [Ajouter un distant via la connexion par navigateur (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)

<CloudSupportGrid />
