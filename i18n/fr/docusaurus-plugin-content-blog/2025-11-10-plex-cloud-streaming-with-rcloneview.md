---
slug: plex-cloud-mount-rcloneview
title: "Diffusez vos films cloud avec Plex et RcloneView — Montez Google Drive, Dropbox ou S3 comme bibliothèque"
authors:
  - tayson
description: Utilisez RcloneView pour monter Google Drive, Dropbox, Wasabi ou S3 comme un lecteur local que Plex peut indexer. Diffusez vos films stockés dans le cloud sans les télécharger — aucune ligne de commande requise.
keywords:
  - plex cloud mount
  - google drive plex
  - rclone mount plex
  - cloud movie server
  - plex cloud streaming
  - rcloneview
  - vfs cache plex
tags:
  - RcloneView
  - plex
  - google-drive
  - onedrive
  - dropbox
  - s3
  - mount
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Diffusez vos films cloud avec Plex et RcloneView — Montez Google Drive, Dropbox ou S3 comme bibliothèque

> Plus d'espace disque ? Montez votre cloud comme un lecteur local avec RcloneView et laissez Plex diffuser directement depuis celui-ci — en douceur, de façon fiable, et sans configuration en ligne de commande.

Plex excelle dans l'organisation et la diffusion de vos médias, mais le stockage local se remplit vite. Pendant ce temps, les buckets cloud — Google Drive, Dropbox, Wasabi, Cloudflare R2, S3 — offrent un espace bon marché et pratiquement illimité. L'élément manquant est un moyen simple de faire en sorte que Plex « voie » ces dossiers cloud comme un chemin local. La commande `mount` de rclone résout ce problème, et RcloneView encapsule cette puissance dans une interface graphique simple : choisissez un dossier cloud, sélectionnez une lettre de lecteur ou un chemin de montage, activez la mise en cache, et c'est parti. Pas de terminal, pas d'options à mémoriser.

<!-- truncate -->

RcloneView utilise le moteur rclone éprouvé en coulisses. Vous pouvez connecter tous les principaux fournisseurs, les monter comme dossiers locaux ou lettres de lecteur, et pointer Plex vers ces chemins. Une fois configuré avec les bons paramètres de cache VFS, Plex peut scanner, naviguer et diffuser depuis le stockage cloud avec un minimum de mise en mémoire tampon.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Comment Plex et RcloneView s'associent

Plex scanne un chemin local (par exemple, `X:\Movies` sur Windows ou `/Volumes/Cloud/Movies` sur macOS). RcloneView monte votre dossier cloud sur ce chemin, de sorte que Plex le traite comme n'importe quel autre répertoire local.

Schéma texte
[Google Drive Movies] ⇄ [Montage RcloneView (X:/ ou /Volumes/Cloud)] ⇄ [Bibliothèque médiathèque Plex]

Documentation utile

- Bases du montage dans RcloneView : [Monter un stockage cloud comme lecteur local](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- Options avancées via Embedded Rclone : [Paramètres généraux](/howto/rcloneview-basic/general-settings)
- Ajouter des connexions OAuth (Google/Dropbox/OneDrive) : [Se connecter via un navigateur](/howto/remote-storage-connection-settings/add-oath-online-login)
- Configuration S3/Wasabi/R2 : [Configurer le stockage S3](/howto/remote-storage-connection-settings/s3) · [Identifiants Cloudflare R2](/howto/cloud-storage-setting/cloudflare-r2-credential)

## Monter et diffuser en quelques clics

Connectez un cloud, créez un montage, et pointez Plex vers celui-ci. C'est tout.

1. Connecter un remote

- Google Drive, OneDrive, Dropbox, S3/Wasabi/R2 sont tous pris en charge. Ajoutez chacun via `+ New Remote`.
- Guides : [Fournisseurs basés sur OAuth](/howto/remote-storage-connection-settings/add-oath-online-login) · [Stockage compatible S3](/howto/remote-storage-connection-settings/s3) · [Notes sur le backend Dropbox](https://rclone.org/dropbox/)

<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="Add a new remote in RcloneView" class="img-large img-center" />

2. Créer un montage

- Méthode 1 — Depuis l'Explorateur de remotes : [Monter depuis l'Explorateur de remotes](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-1-mount-from-remote-explorer)
- Méthode 2 — Via le Gestionnaire de montages : [Monter via le Gestionnaire de montages](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-2-mount-via-mount-manager)

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount from Remote Explorer in RcloneView" class="img-large img-center" />

3. Choisir la cible du montage

- Windows : choisissez une lettre de lecteur (par ex., `X:`). En coulisses, RcloneView utilise `cmount` pour la compatibilité.
- macOS : choisissez un chemin de montage sous `/Volumes/Cloud` (ou un chemin personnalisé).
- Linux : choisissez un répertoire de montage (par ex., `/mnt/plex-cloud`).

4. Configurer le cache pour Plex

- Dans les Options avancées de la boîte de dialogue de montage, réglez le **Mode de cache** sur `full` pour une meilleure compatibilité avec Plex.
- Réglez éventuellement la **Taille max du cache** (par ex., 10-50 Go) et le **Temps de cache des répertoires**.
- Vous pouvez également ajuster des options globales comme `--vfs-read-ahead` dans Embedded Rclone → **Global Rclone Flags**. Voir : /support/howto/rcloneview-basic/general-settings

5. Monter et vérifier

- Cliquez sur « Save and mount », puis ouvrez le dossier de montage dans votre explorateur de fichiers pour confirmer que vous pouvez parcourir les films.

6. Ajouter à Plex

- Plex → Libraries → Add Library → Add folders → choisissez votre chemin monté (`X:\Movies` ou `/Volumes/Cloud/Movies`). Laissez Plex scanner et indexer.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure mount from Mount Manager" class="img-large img-center" />

## Réglage des performances pour une lecture fluide

Ces paramètres réduisent la mise en mémoire tampon et améliorent la navigation lors de la diffusion de fichiers à haut débit binaire depuis le stockage cloud.

- Mode de cache VFS : utilisez `full` pour le scan et la navigation (les transcodages et miniatures fonctionnent plus fiablement).
- Taille du cache : allouez 10-50 Go si vous disposez d'espace SSD.
- Anticipation de lecture (Read-ahead) : augmentez `--vfs-read-ahead` (par ex., 64M-256M) via Global Rclone Flags.
- Limites de bande passante : si votre réseau est chargé, définissez une limite raisonnable pour que Plex reste fluide aux heures de pointe.
- Garder les métadonnées Plex en local : stockez les métadonnées et miniatures sur un SSD local ; ne gardez que les médias dans le cloud.

Remarque : la taille du cache et l'anticipation de lecture dépendent de la charge de travail. Commencez de façon conservatrice et ajustez tout en surveillant la lecture et l'activité du disque.

## À qui cela profite le plus

- Collectionneurs de cinéma maison : conservez une archive de 10 To de films dans Google Drive ou Dropbox ; diffusez via Plex sans agrandir les disques locaux.
- Configurations NAS hybrides : utilisez le NAS comme couche de cache SSD pendant que la bibliothèque principale réside dans S3/Wasabi/R2 via un montage.
- Développeurs et homelabbers : intégrez les montages RcloneView dans un Plex dockerisé ; utilisez des montages enregistrés et le montage automatique à la connexion pour plus de fiabilité.

## Points essentiels de dépannage

- Chemin de bibliothèque non visible dans Plex : confirmez que le montage est actif et que l'utilisateur du système exécutant Plex peut accéder au chemin de montage.
- Le montage disparaît après un redémarrage : activez **Auto mount** dans la boîte de dialogue de montage, et envisagez « Launch at login » dans les Paramètres. → [Monter un stockage cloud comme lecteur local](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive) · [Paramètres généraux](/howto/rcloneview-basic/general-settings)
- Scans lents ou saccades : utilisez `Cache mode: full`, augmentez la taille du cache et `--vfs-read-ahead`, gardez les métadonnées en local.
- Limites API ou throttling : planifiez les scans en dehors des heures de pointe ; utilisez Compare & Sync pour ne scanner que le nécessaire si votre bibliothèque est énorme. → [Comparer le contenu des dossiers](/howto/rcloneview-basic/compare-folder-contents) · [Créer des tâches de synchronisation](/howto/rcloneview-basic/create-sync-jobs)

## Films dans le cloud, expérience locale

Monter avec RcloneView permet à Plex de traiter votre cloud comme un lecteur local rapide. Vous conservez la flexibilité et l'évolutivité de Google Drive, Dropbox, Wasabi ou S3, et Plex offre la même expérience soignée — sans les soucis d'espace disque. Configurez un montage, pointez Plex vers celui-ci, ajustez le cache, et appuyez sur lecture.

Prêt à essayer ? Téléchargez RcloneView et construisez dès aujourd'hui votre bibliothèque Plex propulsée par le cloud.


<CloudSupportGrid />
