---
slug: migrate-yandex-disk-to-backblaze-b2-rcloneview
title: "Migrer Yandex Disk vers Backblaze B2 — Transférer des fichiers avec RcloneView"
authors:
  - morgan
description: "Migrez Yandex Disk vers Backblaze B2 avec RcloneView : connectez les deux remotes, simulez la copie avec Dry Run, vérifiez avec Folder Compare et conservez une sauvegarde durable."
keywords:
  - migrer Yandex Disk vers Backblaze B2
  - yandex disk to b2
  - sauvegarde Yandex Disk
  - migration Backblaze B2
  - RcloneView Yandex Disk
  - transfert de cloud à cloud
  - déplacer des fichiers depuis Yandex Disk
  - rclone yandex backblaze
  - migration cloud GUI
  - exporter les fichiers Yandex Disk
tags:
  - RcloneView
  - yandex-disk
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer Yandex Disk vers Backblaze B2 — Transférer des fichiers avec RcloneView

> Copiez tout le contenu de Yandex Disk vers un bucket Backblaze B2 et vérifiez que chaque fichier est bien arrivé, sans toucher à la ligne de commande.

Si vos fichiers se trouvent sur Yandex Disk mais que vous souhaitez une copie indépendante, basée sur des buckets, dans Backblaze B2, la méthode habituelle consiste à télécharger manuellement puis à renvoyer les fichiers via votre propre machine. RcloneView connecte les deux services dans une seule fenêtre et exécute le transfert entre eux, avec une simulation préalable (Dry Run) et une comparaison de dossiers ensuite.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Yandex Disk et Backblaze B2

Yandex Disk utilise OAuth : choisissez-le dans **New Remote**, et RcloneView ouvre votre navigateur pour que vous vous connectiez et autorisiez l'accès. Aucune clé d'API n'est nécessaire. Backblaze B2 utilise un Application Key ID et une Application Key issus de la page de gestion des clés de Backblaze. Créez une clé limitée au bucket de destination afin que les identifiants de migration ne puissent atteindre rien d'autre.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Yandex Disk and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

Ouvrez Yandex Disk dans un panneau Explorer et le bucket B2 dans un autre. RcloneView permet de monter et de synchroniser plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux, de sorte que les deux côtés restent visibles pendant votre travail.

## Planifier l'organisation et copier

Décidez comment les dossiers correspondent au bucket. Un petit studio de design disposant de dix ans de dossiers de projets pourrait reproduire chaque dossier de premier niveau de Yandex Disk sous forme de préfixe dans un seul bucket, ce qui garde les chemins lisibles par la suite. Créez d'abord les dossiers de destination avec **New Folder**.

Faites glisser un dossier du panneau Yandex Disk vers le panneau B2 ; entre remotes différents, le glisser-déposer copie, de sorte que vos originaux restent en place. Pour une migration plus importante ou répétable, utilisez plutôt l'assistant Sync : définissez Yandex Disk comme source, le chemin du bucket comme destination, et nommez la tâche avec des lettres, des chiffres, des tirets ou des tirets bas.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Yandex Disk to Backblaze B2" class="img-large img-center" />

## Dry Run et suivi du transfert

Lancez d'abord **Dry Run**. Il liste les fichiers qui seraient copiés et ceux qui seraient supprimés, ce qui permet de repérer une source ou une destination erronée avant tout dommage. C'est surtout important avec la synchronisation unidirectionnelle, qui modifie la destination pour qu'elle corresponde à la source.

Dans Advanced Settings, ajustez le nombre de transferts de fichiers simultanés et activez la comparaison par somme de contrôle si vous souhaitez une vérification par hachage et par taille. Commencez prudemment, puis augmentez la concurrence une fois le transfert stable. Suivez la progression, la vitesse et le nombre de fichiers dans l'onglet **Transferring**.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Yandex Disk to B2 transfer in real time" class="img-large img-center" />

## Vérifier avec Folder Compare

Lorsque la tâche est terminée, ouvrez **Compare** depuis l'onglet Home avec Yandex Disk à gauche et B2 à droite. Filtrez les fichiers présents uniquement à gauche ou différents pour repérer ce qui manque, puis utilisez Copy right pour combler les manques. Job History enregistre le statut, la taille, la vitesse et le nombre de fichiers de chaque exécution, ce qui est pratique comme journal de migration.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare between Yandex Disk and Backblaze B2" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Yandex Disk via OAuth et Backblaze B2 avec une clé d'application limitée au bucket.
3. Lancez un Dry Run, puis démarrez la tâche de copie ou de synchronisation.
4. Utilisez Folder Compare pour confirmer que le bucket correspond à la source.

Une seconde copie vérifiée dans un stockage objet signifie que Yandex Disk n'est plus l'unique endroit où vivent vos fichiers.

---

**Guides associés :**

- [Migrer HiDrive vers Backblaze B2](https://rcloneview.com/support/blog/migrate-hidrive-to-backblaze-b2-rcloneview)
- [Migrer Yandex Disk vers Dropbox](https://rcloneview.com/support/blog/migrate-yandex-disk-to-dropbox-rcloneview)
- [Dry Run : prévisualiser la synchronisation avant le transfert](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
