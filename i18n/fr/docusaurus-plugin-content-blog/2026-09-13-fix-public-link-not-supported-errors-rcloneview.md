---
slug: fix-public-link-not-supported-errors-rcloneview
title: "Corriger les erreurs de lien public non pris en charge — partager des fichiers correctement avec RcloneView"
authors:
  - tayson
description: "Corrigez les erreurs Get Public Link dans RcloneView, découvrez quels distants prennent en charge les liens partageables et utilisez des solutions de contournement sûres pour les autres."
keywords:
  - RcloneView
  - erreur de lien public
  - lien public non pris en charge
  - partager des fichiers cloud
  - lien public rclone
  - partage de stockage cloud
  - correction de lien de partage
  - dépannage du partage de fichiers cloud
  - gestionnaire de distants
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-storage
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de lien public non pris en charge — partager des fichiers correctement avec RcloneView

> Vous faites un clic droit sur Get Public Link et rien ne se passe — voici pourquoi, et ce qu'il faut faire à la place.

Le panneau Explorer de RcloneView propose la commande **Get Public Link** dans le menu contextuel, mais elle ne fonctionne que sur les distants dont le backend expose une API de partage native. Essayez-la sur une connexion purement protocolaire ou sur un fournisseur non pris en charge, et la requête échoue ou renvoie une erreur au lieu d'une URL. Le Remote Manager et l'Explorer à double panneau de RcloneView facilitent l'identification du distant utilisé et le déplacement du fichier vers un emplacement compatible avec les liens.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi Get Public Link échoue sur certains distants

La génération de liens publics dépend de ce que prend en charge le backend de stockage sous-jacent. Les fournisseurs dotés d'une API de partage native — dont Google Drive, Dropbox, Microsoft OneDrive, Box et pCloud — renvoient une URL partageable, car rclone appelle le point de terminaison de lien propre à ce fournisseur. Les connexions basées sur un protocole comme SFTP, FTP, WebDAV et SMB/CIFS n'ont pas ce concept du tout ; ce sont de simples protocoles de transport de fichiers, pas des plateformes de partage, donc il n'y a rien que la commande puisse appeler. Les points de terminaison compatibles S3 (Amazon S3, Wasabi, Backblaze B2, Cloudflare R2) gèrent l'accès public via des politiques de bucket ou des URL pré-signées configurées sur la console propre au fournisseur.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView new remote screen showing different provider types" class="img-large img-center" />

Avant de supposer qu'il s'agit d'un bug, vérifiez à quelle catégorie appartient votre distant. Ouvrez le Remote Manager depuis l'onglet Remote et confirmez le type de distant — un simple coup d'œil explique souvent l'échec immédiatement.

## Vérifier le distant et les paramètres de permission

S'il s'agit d'un fournisseur basé sur OAuth qui devrait normalement prendre en charge les liens, l'étape suivante consiste à vérifier que le compte a la permission de partager le fichier ou le dossier concerné. Les versions professionnelles ou entreprise de ces distants restreignent parfois le partage externe au niveau de l'organisation, ce qui se traduit dans RcloneView par le même échec de requête. Réauthentifiez le distant via le Remote Manager si le jeton semble périmé, et réessayez d'abord sur un fichier dont vous savez qu'il est partageable depuis l'interface web propre au fournisseur.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView folder compare view for verifying file locations before sharing" class="img-large img-center" />

Contrairement aux outils de montage uniquement, RcloneView synchronise et compare aussi les dossiers — avec la licence FREE —, ce qui vous permet de copier rapidement un fichier d'un distant sans lien vers un distant compatible avec les liens, plutôt que de continuer à dépanner.

## Solutions de contournement sûres quand un distant ne prend pas en charge les liens

Pour SFTP, FTP, WebDAV, SMB et la plupart des buckets compatibles S3, la solution pratique consiste à copier le fichier vers un distant qui prend en charge les liens natifs, ou à gérer la distribution via la console propre au fournisseur (politique de bucket, URL pré-signée ou partage côté NAS). Utilisez le glisser-déposer de RcloneView entre deux panneaux Explorer ouverts pour déplacer une copie, puis exécutez Get Public Link sur le distant de destination.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView job scheduling for repeatable copy-and-share workflows" class="img-large img-center" />

Si ce besoin est récurrent, enregistrez cette étape de copie comme un Job dans le Job Manager afin que les mêmes fichiers arrivent automatiquement sur votre distant compatible avec les liens après chaque synchronisation.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez le Remote Manager pour confirmer quel type de backend utilise réellement le distant en échec.
3. Réauthentifiez les distants OAuth dont les jetons pourraient avoir expiré, puis réessayez le lien sur un fichier dont vous savez qu'il est partageable.
4. Pour les distants basés sur un protocole ou compatibles S3, copiez le fichier vers un distant compatible avec les liens par glisser-déposer, puis générez le lien à cet endroit.

Savoir à l'avance quels distants peuvent partager des liens vous évitera un ticket de support plus tard.

---

**Guides associés :**

- [Obtenir des liens publics partageables pour des fichiers cloud avec RcloneView](https://rcloneview.com/support/blog/link-public-shared-links-cloud-rcloneview)
- [Gérer le stockage Google Drive — synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Corriger les erreurs de permission refusée lors des transferts cloud avec RcloneView](https://rcloneview.com/support/blog/fix-cloud-transfer-permission-denied-errors-rcloneview)

<CloudSupportGrid />
