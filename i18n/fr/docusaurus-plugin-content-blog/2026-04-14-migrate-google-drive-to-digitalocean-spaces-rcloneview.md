---
slug: migrate-google-drive-to-digitalocean-spaces-rcloneview
title: "Migrer Google Drive vers DigitalOcean Spaces — Transférer des fichiers avec RcloneView"
authors:
  - tayson
description: "Déplacez des fichiers de Google Drive vers le stockage objet DigitalOcean Spaces à l'aide de RcloneView. Guide étape par étape pour une migration directe de cloud à cloud sans script CLI."
keywords:
  - migrer Google Drive vers DigitalOcean Spaces
  - migration de Google Drive vers le stockage objet
  - sauvegarde DigitalOcean Spaces depuis Google Drive
  - rclone Google Drive DigitalOcean
  - migration cloud à cloud Google Drive
  - déplacer Google Drive vers un stockage compatible S3
  - migration Google Drive RcloneView
  - transfert de fichiers DigitalOcean Spaces
tags:
  - RcloneView
  - google-drive
  - digitalocean-spaces
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer Google Drive vers DigitalOcean Spaces — Transférer des fichiers avec RcloneView

> RcloneView gère les migrations de Google Drive vers DigitalOcean Spaces comme un transfert direct de cloud à cloud — sans stockage local intermédiaire, avec une visibilité complète sur la progression et une vérification par somme de contrôle à la fin.

Déplacer des fichiers de Google Drive vers DigitalOcean Spaces est un flux de travail courant pour les développeurs qui migrent d'un stockage grand public vers un stockage objet de niveau infrastructure. Une startup peut passer de l'utilisation de Google Drive pour le partage de fichiers à l'utilisation de Spaces pour l'accès programmatique, l'intégration CDN et des coûts par Go plus faibles à grande échelle. RcloneView connecte les deux fournisseurs simultanément et transfère les fichiers directement, sans faire transiter des gigaoctets par votre machine locale.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Préparer les deux remotes

Ajoutez Google Drive en tant que remote OAuth : **Onglet Remote → New Remote → Google Drive**, authentifiez-vous dans le navigateur. Vos dossiers Drive apparaissent instantanément dans l'Explorer.

Ajoutez DigitalOcean Spaces en tant que remote compatible S3 : **New Remote → Amazon S3 Compatible → DigitalOcean Spaces**. Entrez votre clé d'accès Spaces, votre clé secrète et le point de terminaison de région (par ex. `nyc3.digitaloceanspaces.com`). Créez le bucket cible dans le Control Panel de DigitalOcean s'il n'existe pas encore.

Ouvrez une disposition Explorer à deux panneaux : Google Drive à gauche, DigitalOcean Spaces à droite. Parcourez les deux pour confirmer les structures de dossiers avant de lancer la migration.

<img src="/support/images/en/blog/new-remote.png" alt="Setting up Google Drive and DigitalOcean Spaces remotes in RcloneView" class="img-large img-center" />

## Lancer la migration

Pour une migration au niveau d'un dossier (par ex. migrer `Google Drive:/Client Projects/` vers `do-spaces:projects-bucket/`), utilisez l'assistant de tâche Sync dans le Job Manager. Définissez la source et la destination, puis configurez à l'étape 2 :

- **Transferts simultanés** : 8–12 pour un débit maximal sur une connexion rapide
- **Vérification par somme de contrôle** : activée — Google Drive utilise son propre schéma de hachage ; rclone gère la conversion
- **Tentatives** : 3 — gère les limitations temporaires de débit de l'API Google sans faire échouer toute la tâche

Exécutez d'abord le Dry Run. Google Drive contient souvent des fichiers Google Docs, Sheets et Slides qui ne peuvent pas être copiés directement vers Spaces (ils n'existent que dans le format de Google, pas en tant que fichiers téléchargeables). Le Dry Run vous montrera ces éléments, et vous pourrez décider de les exporter d'abord ou de les exclure avec une règle de filtre.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google Drive to DigitalOcean Spaces cloud-to-cloud transfer in RcloneView" class="img-large img-center" />

## Gérer les fichiers Google Workspace

Les fichiers Google Workspace natifs (Docs, Sheets, Slides) n'ont pas de format de fichier direct — ils doivent être exportés. Rclone peut les exporter automatiquement en PDF ou en formats Office pendant le transfert. Dans la tâche de synchronisation de RcloneView, les Google Docs sont ignorés par défaut, sauf si vous configurez le format d'export. Utilisez l'onglet Terminal pour exécuter `rclone copy --drive-export-formats docx,xlsx,pptx` pour une passe d'export ponctuelle, ou ajoutez des indicateurs personnalisés dans Settings → Global Rclone Flags.

Les fichiers classiques (PDF, images, vidéos, code) sont transférés sans traitement particulier et arrivent sur Spaces avec leur format et leur nom de fichier d'origine intacts.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Google Drive to DigitalOcean Spaces migration with folder comparison" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Google Drive (OAuth) et DigitalOcean Spaces (identifiants S3) en tant que remotes.
3. Créez une tâche Sync dans le Job Manager, exécutez le Dry Run, vérifiez la gestion des fichiers Google Workspace.
4. Exécutez la migration et utilisez Folder Compare pour vérifier son achèvement.

Migrer de Google Drive vers DigitalOcean Spaces avec RcloneView est un processus structuré et vérifiable — avec un historique des tâches et des journaux de transfert offrant un enregistrement clair de ce qui a été déplacé et quand.

---

**Guides associés :**

- [Gérer la synchronisation cloud et la sauvegarde DigitalOcean Spaces avec RcloneView](https://rcloneview.com/support/blog/manage-digitalocean-spaces-cloud-sync-backup-rcloneview)
- [Migrer Google Drive vers AWS S3 avec RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-aws-s3-rcloneview)
- [Migrations cloud vérifiées par somme de contrôle avec RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
