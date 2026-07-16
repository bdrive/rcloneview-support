---
slug: migrate-onedrive-to-cloudflare-r2-rcloneview
title: "Migrer OneDrive vers Cloudflare R2 — Transférer des fichiers avec RcloneView"
authors:
  - tayson
description: "Déplacez vos fichiers OneDrive vers Cloudflare R2 pour les workflows de développeurs et l'intégration CDN grâce à RcloneView. Connectez-vous via OAuth et jeton API, appliquez des filtres et synchronisez."
keywords:
  - migrer OneDrive vers Cloudflare R2
  - transfert OneDrive R2 RcloneView
  - synchronisation OneDrive vers Cloudflare R2
  - migration de stockage cloud pour développeurs
  - stockage objet Cloudflare R2
  - alternative à OneDrive R2
  - migration de stockage compatible S3
  - migration OneDrive RcloneView
tags:
  - onedrive
  - cloudflare-r2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer OneDrive vers Cloudflare R2 — Transférer des fichiers avec RcloneView

> Cloudflare R2 s'intègre nativement aux pipelines CDN et Workers — RcloneView gère la migration de OneDrive vers R2 sans toucher à votre machine locale.

Les développeurs et les équipes qui migrent leurs charges de travail vers l'écosystème Cloudflare ont souvent besoin de déplacer des ressources stockées sur OneDrive vers Cloudflare R2. R2 offre un stockage objet compatible S3 sans frais de sortie (zero-egress), qui s'intègre directement avec Cloudflare Workers, Pages et le CDN — ce qui le rend idéal pour les ressources statiques, les fichiers multimédias et les artefacts de build. RcloneView se connecte à OneDrive via OAuth et à Cloudflare R2 via un jeton API, puis exécute la migration comme une tâche de synchronisation cloud-à-cloud avec des règles de filtrage optionnelles.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connexion à OneDrive

Ouvrez RcloneView et accédez au **Gestionnaire de distants** (Remote Manager). Cliquez sur **Nouveau distant** et sélectionnez **OneDrive** dans la liste des fournisseurs. RcloneView ouvre votre navigateur pour l'authentification OAuth — connectez-vous avec votre compte Microsoft et autorisez l'accès. OneDrive personnel, OneDrive Entreprise et les bibliothèques de documents SharePoint sont tous accessibles de cette façon.

Après l'autorisation, ouvrez le distant dans l'Explorateur de fichiers. Naviguez jusqu'aux dossiers que vous prévoyez de migrer et notez leurs chemins.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting OneDrive and Cloudflare R2 in RcloneView" class="img-large img-center" />

## Connexion à Cloudflare R2

Retournez dans le **Gestionnaire de distants**, cliquez sur **Nouveau distant** et sélectionnez **S3 Compatible**. Renseignez vos identifiants Cloudflare R2 :

- **Access Key ID** : depuis le tableau de bord Cloudflare → R2 → Gérer les jetons API (créez un jeton API avec les permissions de lecture et écriture des objets)
- **Secret Access Key** : le secret du jeton
- **Endpoint** : `https://{your-account-id}.r2.cloudflarestorage.com`

Enregistrez le distant. Dans l'Explorateur de fichiers, naviguez jusqu'au bucket cible (ou créez-en un). Vérifiez l'accès en confirmant que le contenu du bucket s'affiche.

## Configurer la tâche de migration avec des filtres

Allez dans **Tâches** (Jobs) et cliquez sur **Nouvelle tâche**. Définissez OneDrive comme source et le dossier spécifique à migrer. Définissez Cloudflare R2 comme destination et le chemin de votre bucket cible.

À l'étape 2 de l'assistant de tâche, vous pouvez appliquer des **règles de filtrage** pour restreindre la migration :

- Migrer uniquement certains types de fichiers (par ex. `--include "*.jpg"`, `--include "*.pdf"`)
- Exclure les dossiers système ou les fichiers temporaires (par ex. `--exclude ".DS_Store"`)
- Utiliser le **Dry Run** pour prévisualiser le résultat filtré avant l'exécution réelle

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud migration from OneDrive to Cloudflare R2" class="img-large img-center" />

## Exécuter la migration

Désactivez le Dry Run et exécutez la tâche. RcloneView affiche la progression en temps réel dans le panneau de transfert — fichiers par seconde, vitesse actuelle et volume total de données déplacées. Le transfert de OneDrive vers R2 se fait de serveur à serveur ; votre machine locale agit comme orchestrateur, pas comme canal de données.

Les fichiers volumineux utilisent automatiquement le téléversement multipart. Si des fichiers échouent en cours de transfert, l'onglet Journal (Log) affiche l'erreur spécifique. Relancer la tâche est sans risque — les fichiers déjà transférés sont ignorés.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring OneDrive to Cloudflare R2 transfer in real time" class="img-large img-center" />

## Vérification post-migration

Utilisez **Comparaison de dossiers** (Folder Compare) pour vérifier les deux côtés après la migration. Ouvrez la source OneDrive et la destination R2 dans la vue de comparaison — RcloneView met en évidence les fichiers présents d'un côté mais pas de l'autre. Pour les migrations critiques, activez la vérification par somme de contrôle (checksum) dans les paramètres de la tâche pour garantir une exactitude au niveau des octets.

Une fois la vérification effectuée, vous pouvez mettre à jour les liaisons Cloudflare Worker, les règles CDN ou les configurations d'application pour pointer vers le bucket R2 au lieu de OneDrive.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Connectez OneDrive via OAuth dans le **Gestionnaire de distants**.
3. Connectez Cloudflare R2 avec votre jeton API et l'endpoint de l'identifiant de compte.
4. Créez une tâche de migration avec des filtres optionnels, lancez un Dry Run pour prévisualiser, puis exécutez.

L'intégration CDN étroite de Cloudflare R2 et sa facturation sans frais de sortie en font une destination attrayante pour le contenu auparavant hébergé sur OneDrive.

---

**Guides connexes :**

- [Migrer Dropbox vers Cloudflare R2 avec RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-cloudflare-r2-rcloneview)
- [Migrer Google Drive vers Cloudflare R2 avec RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-cloudflare-r2-rcloneview)
- [Migrer Azure Blob vers Cloudflare R2 avec RcloneView](https://rcloneview.com/support/blog/migrate-azure-blob-to-cloudflare-r2-rcloneview)

<CloudSupportGrid />
