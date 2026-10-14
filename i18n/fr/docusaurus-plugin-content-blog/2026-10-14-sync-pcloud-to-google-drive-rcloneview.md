---
slug: sync-pcloud-to-google-drive-rcloneview
title: "Synchroniser pCloud avec Google Drive — Sauvegarde cloud avec RcloneView"
authors:
  - jay
description: "Synchronisez pCloud avec Google Drive grâce à RcloneView : connectez les deux remotes, prévisualisez avec Dry Run et planifiez des sauvegardes de cloud à cloud depuis une seule fenêtre."
keywords:
  - synchroniser pcloud avec google drive
  - sauvegarde de pcloud vers google drive
  - RcloneView pcloud
  - synchronisation de cloud à cloud
  - transfert pcloud google drive
  - sauvegarder les fichiers pcloud
  - seconde copie sauvegarde cloud
  - planifier la synchronisation cloud
  - rclone GUI
tags:
  - RcloneView
  - pcloud
  - google-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser pCloud avec Google Drive — Sauvegarde cloud avec RcloneView

> Conservez une seconde copie de vos fichiers pCloud dans Google Drive avec une tâche de synchronisation de cloud à cloud que vous pouvez prévisualiser, exécuter et planifier depuis une seule fenêtre.

Dépendre d'un seul cloud pour des fichiers importants vous expose aux verrouillages de compte, aux suppressions accidentelles et aux erreurs de synchronisation. Répliquer pCloud dans Google Drive vous donne une copie indépendante chez un autre fournisseur. RcloneView connecte les deux services via OAuth, puis synchronise les données entre eux sous forme de tâche. RcloneView monte ET synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter pCloud et Google Drive

Les deux fournisseurs utilisent une connexion OAuth via le navigateur. Dans RcloneView, ouvrez la boîte de dialogue de nouveau remote, choisissez pCloud et connectez-vous lorsque votre navigateur s'ouvre. Répétez l'opération pour Google Drive. Une fois autorisé, chaque remote apparaît dans Remote Manager et dans Explorer, où vous pouvez parcourir les dossiers côte à côte dans une disposition à deux volets.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des remotes pCloud et Google Drive dans RcloneView" class="img-large img-center" />

## Inspecter avant de synchroniser

Imaginez une graphiste indépendante qui possède une archive de projets de 300 Go sur pCloud et souhaite un miroir sur Drive. Avant de toucher à quoi que ce soit, utilisez Folder Compare sur les deux dossiers. Il indique quels fichiers n'existent que d'un côté, lesquels diffèrent et lesquels correspondent, de sorte que vous savez exactement ce que fera la première synchronisation.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparaison des dossiers pCloud et Google Drive dans RcloneView" class="img-large img-center" />

## Créer la tâche de synchronisation

L'assistant de synchronisation comporte quatre étapes : choisir la source et la destination, ajuster les paramètres avancés, définir les filtres et, éventuellement, planifier. Choisissez pCloud comme source et Google Drive comme destination avec l'option unidirectionnelle, qui ne modifie que la destination. Utilisez les filtres pour ignorer les fichiers temporaires ou limiter la taille des fichiers, et lancez un Dry Run pour voir la liste des fichiers qui seraient copiés ou supprimés. Comme la synchronisation unidirectionnelle aligne la destination sur la source, vérifiez toujours la sortie du Dry Run pour détecter d'éventuelles suppressions inattendues.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de cloud à cloud de pCloud vers Google Drive dans RcloneView" class="img-large img-center" />

## Surveiller et planifier

Exécutez la tâche et suivez la progression du transfert en direct, puis consultez les résultats dans Job History. Avec une licence PLUS, ajoutez une planification de type crontab pour que le miroir soit actualisé régulièrement (RcloneView reste actif dans la System Tray).

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planification d'une tâche de synchronisation de pCloud vers Google Drive dans RcloneView" class="img-large img-center" />

## Premiers pas

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez pCloud et Google Drive comme remotes via la connexion OAuth.
3. Comparez les dossiers source et destination, puis créez une tâche de synchronisation unidirectionnelle.
4. Lancez un Dry Run, exécutez la tâche et vérifiez-la dans Job History.

Une seconde copie vérifiée chez un autre fournisseur transforme un point de défaillance unique en véritable sauvegarde.

---

**Guides associés :**

- [Gérer le stockage pCloud — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Migrer Google Drive vers pCloud — Transférer des fichiers avec RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-pcloud-rcloneview)
- [Synchroniser Dropbox avec pCloud — Sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/sync-dropbox-to-pcloud-rcloneview)

<CloudSupportGrid />
