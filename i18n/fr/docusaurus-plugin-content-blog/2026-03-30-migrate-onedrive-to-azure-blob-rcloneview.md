---
slug: migrate-onedrive-to-azure-blob-rcloneview
title: "Migrer de OneDrive vers Azure Blob — Transférer des fichiers avec RcloneView"
authors:
  - tayson
description: "Migrez vos fichiers OneDrive vers Azure Blob Storage avec RcloneView. Déplacez des documents d'entreprise vers un stockage objet évolutif sans outils CLI ni scripts."
keywords:
  - onedrive to azure blob
  - migrate onedrive to azure
  - onedrive azure blob transfer
  - cloud-to-cloud migration
  - azure blob storage migration
  - rcloneview onedrive transfer
  - microsoft cloud migration
  - enterprise cloud migration
  - onedrive backup azure
  - object storage migration
tags:
  - RcloneView
  - onedrive
  - azure
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de OneDrive vers Azure Blob — Transférer des fichiers avec RcloneView

> Passer de OneDrive à Azure Blob Storage offre à votre équipe un stockage objet évolutif et programmable — et RcloneView rend cette transition sans effort.

OneDrive fonctionne bien pour la collaboration documentaire quotidienne, mais les équipes d'entreprise dépassent souvent ses limites de stockage ou ont besoin d'un accès programmatique aux fichiers via les API REST d'Azure. Azure Blob Storage propose une tarification par niveaux (Hot, Cool et Archive), une évolutivité massive et une intégration étroite avec Azure Functions, Logic Apps et Data Factory. RcloneView fait le pont entre ces deux services Microsoft, vous permettant de migrer des fichiers de OneDrive vers des conteneurs Azure Blob sans écrire une seule ligne de code.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Quand OneDrive atteint ses limites

OneDrive Entreprise inclut 1 To par utilisateur sur la plupart des plans Microsoft 365, avec des options supplémentaires allant jusqu'à 5 To. Cela semble généreux jusqu'à ce que votre organisation accumule des années d'archives de projets, de ressources multimédias ou de dossiers de conformité. Azure Blob Storage s'étend jusqu'à l'exaoctet et facture aussi peu que 0,018 $ par Go et par mois sur le niveau Cool — une fraction du coût d'une capacité OneDrive équivalente.

Au-delà de la capacité brute, Azure Blob prend en charge des fonctionnalités que OneDrive ne peut égaler : des politiques de stockage immuable pour la conformité réglementaire, une intégration Azure CDN pour la diffusion mondiale de contenu, et un contrôle d'accès fin via les Shared Access Signatures (SAS). Migrer des données d'archive ou à grande échelle de OneDrive vers Azure Blob centralise le stockage là où votre infrastructure se trouve déjà.

<img src="/support/images/en/blog/new-remote.png" alt="Creating OneDrive and Azure Blob remotes in RcloneView" class="img-large img-center" />

## Configurer les deux distants

Ajoutez un distant OneDrive dans RcloneView en sélectionnant « Microsoft OneDrive » comme type de fournisseur. Le flux OAuth ouvre votre navigateur pour l'authentification du compte Microsoft. Choisissez entre OneDrive Personnel, OneDrive Entreprise, ou une bibliothèque de documents SharePoint spécifique selon l'emplacement de vos fichiers source. RcloneView affiche la racine du lecteur sélectionné une fois l'authentification terminée.

Pour Azure Blob, créez un nouveau distant et sélectionnez « Microsoft Azure Blob Storage ». Saisissez le nom de votre compte de stockage ainsi qu'une clé de compte ou une URL SAS. Si votre organisation impose l'authentification Azure Active Directory, RcloneView prend également en charge cette méthode. Sélectionnez le conteneur cible — ou notez le nom du conteneur pour la configuration de la tâche. RcloneView confirme la connexion et affiche la liste des conteneurs et des blobs existants.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Setting up a cloud-to-cloud transfer from OneDrive to Azure Blob" class="img-large img-center" />

## Exécuter la migration

Ouvrez l'explorateur à deux volets avec OneDrive d'un côté et Azure Blob de l'autre. Naviguez vers les dossiers OneDrive que vous souhaitez migrer — par exemple `/Documents/Projects` ou la racine entière. Du côté Azure, accédez à votre conteneur cible.

Pour une migration structurée, créez une tâche de copie dans le gestionnaire de tâches. Définissez OneDrive comme chemin source et le conteneur Azure Blob comme destination. Choisissez le mode « Copy » pour transférer les fichiers sans les supprimer de OneDrive pendant la période de transition. Activez l'option `--ignore-existing` si vous prévoyez d'exécuter la tâche plusieurs fois, afin que les fichiers déjà transférés soient ignorés efficacement.

L'API de OneDrive impose des limites de débit qui peuvent ralentir les transferts volumineux. RcloneView gère automatiquement la limitation et les nouvelles tentatives, et vous pouvez configurer des transferts parallèles (l'option `--transfers`) pour optimiser le débit dans les limites imposées par Microsoft.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Migration job history showing OneDrive to Azure Blob transfers" class="img-large img-center" />

## Vérification post-migration

Une fois la tâche terminée, comparez le nombre et la taille des fichiers entre OneDrive et Azure Blob à l'aide de la fonction de comparaison de RcloneView. Ouvrez les deux distants côte à côte et lancez une comparaison pour identifier d'éventuelles divergences. Azure Blob stocke des empreintes MD5 pour les objets téléversés, ce qui permet à la vérification de somme de contrôle de détecter toute corruption survenue en transit.

Une fois la vérification effectuée, configurez vos applications pour lire depuis Azure Blob plutôt que depuis OneDrive. Gardez le distant OneDrive connecté dans RcloneView pendant une période de transition, en exécutant des tâches de synchronisation périodiques pour récupérer les fichiers que les utilisateurs continuent d'ajouter à OneDrive avant la fin de la bascule.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling periodic OneDrive to Azure Blob sync during migration" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Authentifiez votre compte OneDrive via Microsoft OAuth et sélectionnez le bon type de lecteur.
3. Ajoutez votre distant Azure Blob en utilisant le nom de votre compte de stockage et une clé d'accès ou un jeton SAS.
4. Créez une tâche de copie de OneDrive vers Azure Blob, activez la vérification par somme de contrôle, puis exécutez-la.

Une fois tous les fichiers confirmés dans Azure Blob, redirigez vos flux de travail et retirez le stockage OneDrive à votre propre rythme.

---

**Guides connexes :**

- [Migrer de OneDrive vers Google Drive avec RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-google-drive-rcloneview)
- [Monter Azure Blob Storage comme lecteur local avec RcloneView](https://rcloneview.com/support/blog/mount-azure-blob-storage-local-drive-rcloneview)
- [Synchroniser Azure Blob avec AWS S3 avec RcloneView](https://rcloneview.com/support/blog/sync-azure-blob-to-aws-s3-rcloneview)

<CloudSupportGrid />
