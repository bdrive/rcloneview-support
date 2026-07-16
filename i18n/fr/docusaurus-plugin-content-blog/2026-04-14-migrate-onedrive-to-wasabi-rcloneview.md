---
slug: migrate-onedrive-to-wasabi-rcloneview
title: "Migrer OneDrive vers Wasabi — Sauvegarde cloud avec RcloneView"
authors:
  - tayson
description: "Transférez vos fichiers de Microsoft OneDrive vers le stockage cloud chaud Wasabi avec RcloneView. Un guide étape par étape pour migrer de OneDrive vers Wasabi sans aucune commande CLI."
keywords:
  - migrer OneDrive vers Wasabi
  - transfert OneDrive Wasabi
  - migration OneDrive vers S3
  - sauvegarde cloud Wasabi depuis OneDrive
  - rclone OneDrive Wasabi
  - migration cloud à cloud OneDrive
  - déplacer des fichiers Microsoft OneDrive vers Wasabi
  - migration OneDrive RcloneView
tags:
  - onedrive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer OneDrive vers Wasabi — Sauvegarde cloud avec RcloneView

> Utilisez RcloneView pour transférer des fichiers de Microsoft OneDrive vers le stockage cloud chaud compatible S3 de Wasabi — directement de cloud à cloud, sans téléchargement intermédiaire.

Les organisations commencent souvent avec OneDrive intégré à Microsoft 365, puis réalisent qu'elles ont besoin d'un niveau de sauvegarde dédié et économique à mesure que les volumes de données augmentent. Le stockage cloud chaud compatible S3 de Wasabi est une destination populaire : un stockage à tarif fixe prévisible, sans frais de sortie. RcloneView relie les deux services via les backends de rclone, vous permettant de migrer le contenu OneDrive vers des buckets Wasabi grâce à une interface visuelle — sans script requis.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter OneDrive et Wasabi

Ajoutez d'abord OneDrive : **Onglet Remote → New Remote → Microsoft OneDrive**, authentifiez-vous via la connexion OAuth du navigateur, puis confirmez que le remote est enregistré. Pour un OneDrive personnel, le processus est instantané. Pour OneDrive for Business, vous devrez peut-être sélectionner le bon tenant lors de l'authentification.

Ajoutez ensuite Wasabi : **New Remote → Amazon S3 Compatible → Wasabi**. Entrez votre clé d'accès Wasabi, votre clé secrète, et sélectionnez le bon endpoint pour la région de votre bucket (par exemple, `s3.us-east-1.wasabisys.com`). L'API S3 de Wasabi est compatible avec le backend S3 de rclone sans configuration particulière.

<img src="/support/images/en/blog/new-remote.png" alt="Setting up OneDrive and Wasabi remotes in RcloneView" class="img-large img-center" />

## Planifier la portée de la migration

Ouvrez l'Explorer en disposition à deux panneaux — OneDrive à gauche, Wasabi à droite. Parcourez l'arborescence OneDrive pour identifier les dossiers que vous souhaitez migrer. Un service juridique pourrait déplacer une archive `Contracts/2020-2024/` ; une agence de design pourrait migrer un dossier `Client-Assets/` contenant 500 Go de fichiers en couches.

Utilisez l'option **Get Size** du clic droit de RcloneView sur le dossier source pour calculer le volume total de données avant de vous engager dans le transfert. Pour les migrations volumineuses, planifiez le job pour qu'il s'exécute la nuit si la bande passante est partagée avec d'autres utilisateurs ou services.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Viewing OneDrive to Wasabi transfer in RcloneView" class="img-large img-center" />

## Exécuter le job de synchronisation avec vérification

Créez un job de synchronisation dans le Job Manager : la source est votre chemin OneDrive, la destination est le chemin de votre bucket Wasabi. À l'étape 2, activez la **vérification par somme de contrôle (checksum)** pour valider le hash de chaque fichier après le transfert — essentiel pour les archives sensibles en matière de conformité. Réglez les transferts simultanés sur 6 à 8 pour un équilibre entre vitesse et stabilité de l'API.

Lancez d'abord le Dry Run pour prévisualiser la liste des opérations. Les éléments OneDrive dont les noms de fichiers contiennent des caractères spéciaux (courants dans le contenu généré par les utilisateurs) seront signalés pour des ajustements d'encodage. Consultez l'onglet Log après le dry run pour détecter d'éventuels problèmes avant le transfert réel.

Après la migration, utilisez la fonctionnalité **Folder Compare** de RcloneView pour comparer visuellement la source OneDrive avec la destination Wasabi — confirmant que le nombre et la taille des fichiers correspondent avant de désactiver la copie OneDrive.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing OneDrive and Wasabi folders after migration in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez OneDrive via une connexion OAuth et Wasabi via des identifiants S3 dans l'assistant New Remote.
3. Utilisez Folder Compare pour évaluer la portée de la migration, puis créez un job de synchronisation dans le Job Manager.
4. Activez la vérification par somme de contrôle, lancez un Dry Run, puis exécutez la migration complète.

Migrer de OneDrive vers Wasabi avec RcloneView vous offre une piste de migration vérifiée et auditable — avec un historique des jobs et des journaux de transfert enregistrés automatiquement.

---

**Guides connexes :**

- [Migrer OneDrive vers Backblaze B2 avec RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)
- [Migrer OneDrive vers Google Drive avec RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [Gérer la synchronisation et la sauvegarde cloud OneDrive avec RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
