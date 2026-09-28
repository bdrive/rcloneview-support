---
slug: migrate-put-io-to-google-drive-rcloneview
title: "Migrer de Put.io vers Google Drive — Transférer des fichiers avec RcloneView"
authors:
  - jay
description: "Migrez vos fichiers de Put.io vers Google Drive avec RcloneView, une interface graphique multiplateforme qui transfère, vérifie et organise le contenu cloud."
keywords:
  - put.io vers google drive
  - migrer les fichiers put.io
  - migration putio
  - RcloneView put.io
  - transfert cloud à cloud
  - migration google drive
  - déplacer des torrents téléchargés vers le cloud
  - rclone put.io
  - transférer put.io vers drive
  - outil de migration de stockage cloud
tags:
  - RcloneView
  - putio
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Put.io vers Google Drive — Transférer des fichiers avec RcloneView

> Déplacez tout ce que vous avez stocké sur Put.io vers Google Drive grâce à un workflow visuel de glisser-déposer, plutôt que de jongler entre deux interfaces web distinctes.

Put.io est un excellent point de chute pour les torrents téléchargés et les fichiers distants, mais il n'est pas conçu pour l'archivage à long terme ou le partage en équipe comme peut l'être Google Drive. Une fois un téléchargement terminé sur Put.io, de nombreux utilisateurs doivent encore le récupérer manuellement puis le retélécharger ailleurs. RcloneView se connecte aux deux services à la fois et vous permet de copier ou de déplacer du contenu directement entre eux, de cloud à cloud, sans passer par votre disque local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Put.io et Google Drive côte à côte

L'Explorer de RcloneView prend en charge jusqu'à quatre panneaux simultanément, vous pouvez donc ouvrir votre compte Put.io dans un panneau et votre Google Drive dans un autre, affichés côte à côte. Put.io et Google Drive s'ajoutent tous deux de la même façon — connexion OAuth via le navigateur, sans clé API ni jeton d'accès distinct à copier manuellement. Une fois les deux remotes configurés, chacun apparaît dans son propre onglet, et le basculement entre eux est instantané.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Put.io and Google Drive as separate remotes in RcloneView" class="img-large img-center" />

Avec les deux panneaux ouverts, vous pouvez parcourir votre dossier de téléchargements Put.io dossier par dossier et décider exactement ce qui doit être transféré, plutôt que de tout migrer à l'aveugle. Contrairement aux outils de montage uniquement, RcloneView propose aussi la synchronisation et la comparaison de dossiers — dès la licence FREE, si bien qu'un transfert ponctuel ne coûte rien d'autre que le temps nécessaire à son exécution.

## Exécuter le transfert comme un job

Plutôt que de glisser les fichiers un par un, configurez un job Copy ou Move via l'assistant de synchronisation en 4 étapes. Sélectionnez Put.io comme source et votre dossier Google Drive comme destination, puis utilisez l'étape Advanced Settings pour ajuster le nombre de transferts de fichiers simultanés selon votre connexion. Si vous n'êtes pas sûr que le périmètre du job soit correct, lancez d'abord un Dry Run — il liste tous les fichiers qui seraient copiés sans rien modifier, ce qui vaut la peine avant une migration de médias volumineuse.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Copying files from Put.io to Google Drive in RcloneView" class="img-large img-center" />

Pour une migration ponctuelle, utilisez le mode d'exécution One-time afin que rien ne soit enregistré comme job récurrent. Si vous prévoyez de continuer à ajouter des fichiers à Put.io avant de terminer le transfert, enregistrez-le plutôt comme job afin de pouvoir le relancer plus tard et ne récupérer que le nouveau contenu.

## Vérifier le transfert avec Folder Compare

Une fois le transfert terminé, ouvrez Folder Compare pour vérifier les deux emplacements côte à côte. Il signale les fichiers présents d'un seul côté et les fichiers dont la taille diffère, ce qui vous permet de confirmer que la migration est complète avant de supprimer quoi que ce soit sur Put.io.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing job history after a Put.io to Google Drive transfer" class="img-large img-center" />

Job History conserve également un historique du transfert — nombre de fichiers, taille totale et durée — ce qui est utile si vous migrez une grande bibliothèque par lots sur plusieurs sessions.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre remote Put.io via le flux de connexion OAuth par navigateur.
3. Ajoutez votre remote Google Drive de la même manière, via une connexion OAuth par navigateur.
4. Créez un job Copy ou Move de Put.io vers votre dossier de destination, lancez un Dry Run, puis exécutez-le.

Vider le stockage Put.io vers un espace permanent sur Google Drive garde vos téléchargements organisés, sans étape d'upload manuel supplémentaire.

---

**Guides associés :**

- [Migrer de OneDrive vers Google Drive — Transférer des fichiers avec RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-google-drive-rcloneview)
- [Gérer le stockage Put.io — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-put-io-cloud-sync-backup-rcloneview)
- [Diffuser et synchroniser des médias Put.io vers votre NAS ou le cloud avec RcloneView](https://rcloneview.com/support/blog/stream-sync-putio-media-nas-cloud-rcloneview)

<CloudSupportGrid />
