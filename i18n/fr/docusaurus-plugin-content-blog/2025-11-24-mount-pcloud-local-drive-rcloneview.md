---
slug: mount-pcloud-local-drive-rcloneview
title: "Monter pCloud comme un disque local sous Windows et macOS avec RcloneView — accédez à vos fichiers sans synchronisation"
authors:
  - tayson
description: "Montez pCloud comme une lettre de disque ou un volume, parcourez vos fichiers instantanément sans synchronisation complète, et ajustez les paramètres de cache pour un accès rapide et fiable avec RcloneView."
keywords:
  - rcloneview
  - pcloud mount
  - cloud drive
  - vfs cache
  - windows
  - macos
  - cloud storage
  - rclone
  - multi cloud
  - drive letter
  - volume mount
  - file explorer
  - finder
  - scheduler
  - job history
  - transfer monitor
  - cache settings
  - offline access
  - read ahead
  - compare
  - sync
  - checksum
  - gui
  - cloud backup
  - mount manager
tags:
  - pcloud
  - mount
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Monter pCloud comme un disque local sous Windows et macOS avec RcloneView — accédez à vos fichiers sans synchronisation

> Évitez les synchronisations complètes. Montez pCloud comme un disque local avec RcloneView, parcourez-le dans l'Explorateur ou le Finder, et diffusez les fichiers à la demande grâce à des paramètres de cache optimisés.

pCloud offre un stockage cloud flexible, mais copier l'intégralité des données sur chaque machine gaspille du temps et de l'espace disque. Avec RcloneView, vous pouvez monter pCloud comme une lettre de disque ou un volume local, récupérer les fichiers à la demande, et garder le contrôle sur la bande passante. Aucun indicateur CLI à mémoriser : connectez-vous, montez, et c'est parti.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Pourquoi monter plutôt que synchroniser ?

- Économisez de l'espace : parcourez et ouvrez uniquement ce dont vous avez besoin, sans miroir local complet.
- Démarrage plus rapide : mappez votre disque une fois et évitez les longues synchronisations initiales.
- Modifications sécurisées : le cache écrit localement, et RcloneView gère les nouvelles tentatives et les reprises.

## Étape 1 — Connecter pCloud dans RcloneView

- Ajoutez pCloud via `+ New Remote` (flux WebDAV ou OAuth). Guide : [add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login).
- Confirmez que le distant fonctionne en listant les dossiers dans **Remote Explorer**.

## Étape 2 — Créer un montage (Windows ou macOS)

- Ouvrez **Mount Manager** et choisissez votre distant pCloud. Guide : [mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive).
- Choisissez une cible :
  - Windows : choisissez une lettre de disque (par ex. `P:`) via `cmount`.
  - macOS : choisissez un chemin de montage (par ex. `/Volumes/pcloud`).
- Enregistrez et montez. Le disque devrait apparaître immédiatement dans l'Explorateur ou le Finder.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />


## Étape 3 — (Optionnel) Vérifier avec Compare avant des modifications importantes

- Utilisez **Compare** pour prévisualiser les différences avant des déplacements en masse ou un nettoyage : [compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents).
- Repérez les fichiers plus récents, manquants ou incohérents sans lancer de synchronisation destructive.  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />


## Étape 4 — (Optionnel) Tâches de synchronisation pour les dossiers clés

- Gardez les dossiers critiques (par ex. `Projects/` ou `Photos/`) en miroir vers un autre cloud ou un NAS : [create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs).
- Commencez par **copy** par sécurité ; passez à **sync** une fois que vous faites confiance à la cible.
- Planifiez des exécutions en dehors des heures de travail pour que les montages restent réactifs pendant que vous travaillez.  

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />


Montez pCloud une fois, ajustez le cache, et gardez votre stockage allégé. RcloneView rend les disques cloud aussi fluides qu'un disque local, sans les risques d'une synchronisation complète.

<CloudSupportGrid />
