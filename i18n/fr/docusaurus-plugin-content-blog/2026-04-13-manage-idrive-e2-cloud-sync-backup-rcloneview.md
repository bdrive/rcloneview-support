---
slug: manage-idrive-e2-cloud-sync-backup-rcloneview
title: "Gérer le stockage IDrive E2 — Synchronisation et sauvegarde de fichiers avec RcloneView"
authors:
  - tayson
description: "Connectez IDrive E2 à RcloneView et gérez vos buckets compatibles S3 avec une interface graphique. Synchronisez IDrive E2 avec Google Drive, Amazon S3 et d'autres clouds facilement."
keywords:
  - IDrive E2
  - IDrive E2 sync
  - IDrive E2 backup
  - IDrive E2 RcloneView
  - IDrive E2 S3 compatible
  - IDrive E2 cloud management
  - IDrive E2 to S3
  - IDrive E2 to Google Drive
  - S3-compatible storage GUI
  - cloud storage sync
tags:
  - RcloneView
  - idrive-e2
  - s3-compatible
  - cloud-storage
  - backup
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage IDrive E2 — Synchronisation et sauvegarde de fichiers avec RcloneView

> Ajoutez IDrive E2 à RcloneView et gérez vos buckets compatibles S3 aux côtés de Google Drive, Amazon S3, Backblaze B2, et plus de 90 autres services de stockage cloud.

IDrive E2 est un service de stockage objet compatible S3 économique, populaire auprès des développeurs et des entreprises à la recherche d'une alternative abordable à Amazon S3 tout en conservant la compatibilité API. Le support de RcloneView pour les fournisseurs compatibles S3 signifie que vous pouvez connecter vos buckets IDrive E2 à l'interface graphique et gérer les synchronisations, les sauvegardes et les migrations inter-clouds sans écrire de scripts en ligne de commande.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurer IDrive E2 dans RcloneView

IDrive E2 utilise des identifiants standard compatibles S3 : un Access Key ID, une Secret Access Key, et une URL de point de terminaison (endpoint) liée à la région sélectionnée. Vous pouvez générer ces identifiants depuis le portail de votre compte IDrive E2. Une fois que vous les avez, ouvrez RcloneView, allez dans l'onglet Remote, et cliquez sur New Remote. Sélectionnez Amazon S3 comme type de fournisseur et configurez-le avec l'URL de point de terminaison et les identifiants de votre IDrive E2.

Après l'enregistrement, votre remote IDrive E2 apparaît dans le File Explorer. Parcourez les buckets et les objets directement, vérifiez les tailles de fichiers et les horodatages de modification, et utilisez les opérations du clic droit pour copier, déplacer, supprimer ou télécharger des fichiers. La barre de chemin (breadcrumb) affiche votre emplacement actuel au sein d'un bucket, avec des suggestions d'auto-complétion à mesure que vous naviguez dans des structures de dossiers plus profondes.

<img src="/support/images/en/blog/new-remote.png" alt="Adding IDrive E2 as a remote in RcloneView" class="img-large img-center" />

## Synchroniser IDrive E2 avec d'autres clouds

Les organisations utilisant IDrive E2 comme cible de sauvegarde principale souhaitent souvent répliquer les buckets critiques vers un fournisseur secondaire pour la redondance géographique ou le basculement de fournisseur. RcloneView simplifie cela : créez une tâche de synchronisation avec votre bucket IDrive E2 comme source et Amazon S3, Cloudflare R2, ou Google Drive comme destination.

L'assistant de synchronisation en 4 étapes gère la configuration : sélection du stockage, paramètres de transfert avancés (transferts simultanés, vérification de somme de contrôle), règles de filtrage (exclure les fichiers volumineux, extensions spécifiques), et planification optionnelle. Activez la vérification de somme de contrôle pour confirmer que chaque objet a été transféré intact — ceci est particulièrement important pour les archives binaires et les dumps de base de données stockés dans IDrive E2.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing IDrive E2 bucket to Amazon S3 with RcloneView" class="img-large img-center" />

La synchronisation planifiée (licence PLUS) exécute automatiquement votre réplication IDrive E2 à des intervalles spécifiés. Job History enregistre l'heure de début, la durée, le nombre de fichiers transférés et le statut final de chaque exécution — offrant une piste d'audit persistante sans avoir à maintenir des scripts externes ou des tâches cron.

## Surveiller les transferts actifs

Lors de l'exécution de synchronisations IDrive E2 volumineuses, l'onglet Transferring en bas de RcloneView affiche la progression en temps réel : fichiers en cours de transfert, nombre cumulé et statut global de la synchronisation. Vous pouvez annuler une tâche en cours directement depuis cette vue si nécessaire, et l'onglet Log capture des entrées horodatées pour dépanner les erreurs qui surviennent.

Pour les charges de travail à volume élevé, ajuster le Number of File Transfers dans l'étape Advanced Settings de l'assistant de synchronisation contrôle le nombre d'objets transférés simultanément. Le paramètre de transferts multi-thread (par défaut : 4) gère les téléversements fragmentés pour les objets plus volumineux.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring IDrive E2 sync progress in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Générez l'Access Key ID et la Secret Access Key IDrive E2 depuis le portail de votre compte IDrive.
3. Ajoutez un nouveau remote compatible S3 dans RcloneView avec le point de terminaison et les identifiants de votre IDrive E2.
4. Créez une tâche de synchronisation pour sauvegarder les buckets IDrive E2 vers votre stockage secondaire selon un planning régulier.

Avec RcloneView, vos buckets IDrive E2 sont aussi faciles à gérer que n'importe quel autre stockage cloud — visibles dans un navigateur de fichiers, configurables avec des tâches de synchronisation, et vérifiables via l'historique des tâches.

---

**Guides connexes :**

- [Synchroniser IDrive E2 avec Amazon S3 et Google Drive avec RcloneView](https://rcloneview.com/support/blog/sync-idrive-e2-s3-google-drive-rcloneview)
- [Gérer la synchronisation cloud Cloudflare R2 avec RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Centraliser le stockage S3, Wasabi et Cloudflare R2 avec RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
