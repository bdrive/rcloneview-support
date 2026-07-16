---
slug: migrate-onedrive-to-amazon-s3-rcloneview
title: "Migrer OneDrive vers Amazon S3 — Transférez vos fichiers avec RcloneView"
authors:
  - tayson
description: "Migrez OneDrive vers Amazon S3 avec RcloneView — transférez des fichiers de cloud à cloud, archivez des documents et réduisez votre dépendance au stockage Microsoft grâce à une interface graphique."
keywords:
  - migration OneDrive vers Amazon S3
  - transfert OneDrive vers S3
  - outil de migration cloud
  - RcloneView OneDrive
  - archivage S3
  - export OneDrive
  - migration Microsoft vers AWS
  - transfert cloud à cloud
  - sauvegarde OneDrive S3
  - réduire les coûts OneDrive
tags:
  - onedrive
  - amazon-s3
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer OneDrive vers Amazon S3 — Transférez vos fichiers avec RcloneView

> OneDrive s'intègre parfaitement aux workflows Microsoft 365, mais S3 excelle dans l'archivage économique et l'intégration AWS — RcloneView migre votre contenu OneDrive directement vers S3, sans qu'aucun téléchargement local ne soit nécessaire.

OneDrive s'intègre naturellement aux environnements Microsoft 365, mais les organisations qui réduisent leurs coûts de licences Microsoft, qui consolident leur infrastructure sur AWS, ou qui ont besoin d'un archivage natif S3, doivent parfois déplacer leur contenu OneDrive vers Amazon S3. RcloneView offre un chemin de migration direct de cloud à cloud — en connectant OneDrive et S3 simultanément et en transférant les données entre eux sans consommer d'espace disque local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter OneDrive et Amazon S3

Ajoutez **Microsoft OneDrive** dans RcloneView via l'authentification OAuth dans le navigateur — **onglet Remote > New Remote > Microsoft OneDrive**. Ajoutez ensuite **Amazon S3** avec votre Access Key ID, votre Secret Access Key et votre région AWS. Pour les comptes OneDrive for Business, configurez le distant pour cibler le tenant de votre organisation et la bibliothèque appropriée.

<img src="/support/images/en/blog/new-remote.png" alt="Adding OneDrive and Amazon S3 remotes in RcloneView" class="img-large img-center" />

Une fois les deux distants actifs, parcourez-les côte à côte dans l'explorateur à deux panneaux de RcloneView — la hiérarchie de dossiers OneDrive à gauche, la structure de votre bucket S3 à droite. Cette vue vous aide à planifier le mapping de la migration : quels dossiers OneDrive correspondent à quels préfixes S3.

## Transférer les fichiers

Dans le **Job Manager**, créez un job **Copy** depuis votre dossier OneDrive vers le chemin du bucket S3 de destination. Pour une entreprise migrant 1,5 To de fichiers de projets archivés de OneDrive vers S3, Copy (plutôt que Sync) est le type de job approprié — il préserve les fichiers source pendant la fenêtre de migration tout en copiant tout vers S3, laissant le temps de vérifier avant toute suppression.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive to Amazon S3 migration job in RcloneView" class="img-large img-center" />

Les transferts multi-thread et les paramètres de nombre de fichiers concurrents dans les Advanced Settings maximisent le débit. Le moteur rclone sous-jacent de RcloneView gère la limitation de débit de l'API OneDrive et les nouvelles tentatives automatiques — la migration se poursuit sans intervention manuelle même lorsque le fournisseur limite temporairement les requêtes.

## Vérifier et nettoyer

Après la migration, utilisez **Folder Compare** pour confirmer que tous les fichiers ont été correctement transférés. Comparez la source OneDrive avec la destination S3 — la vue de comparaison affiche les fichiers propres à chaque côté ainsi que les fichiers correspondants, vous donnant une liste de contrôle définitive avant de supprimer le contenu OneDrive.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying OneDrive to S3 migration with Folder Compare in RcloneView" class="img-large img-center" />

Une fois la vérification confirmée, le contenu OneDrive peut être archivé ou supprimé par phases. Le journal **Job History** fournit un enregistrement permanent de la migration — ce qui a été transféré, quand, et quel volume de données a été déplacé — utile pour la documentation de conformité lors de la résiliation d'un abonnement Microsoft 365.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez le distant **OneDrive** (OAuth) et le distant **Amazon S3** (identifiants Access Key).
3. Créez un job **Copy** dans le Job Manager depuis OneDrive vers votre bucket S3.
4. Utilisez **Folder Compare** pour vérifier que tous les fichiers ont bien été transférés avant de supprimer le contenu OneDrive.

Migrer de OneDrive vers Amazon S3 avec RcloneView transforme un projet IT complexe en un job automatisé et bien surveillé — avec une visibilité complète et une vérification à chaque étape.

---

**Guides connexes :**

- [Migrer OneDrive vers Google Drive avec RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-google-drive-rcloneview)
- [Migrer OneDrive vers Backblaze B2 avec RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)
- [Gérer le stockage cloud OneDrive — Synchronisation et sauvegarde avec RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
