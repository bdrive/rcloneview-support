---
slug: manage-google-cloud-storage-buckets-rcloneview
title: "Gérer les buckets Google Cloud Storage avec RcloneView"
authors:
  - tayson
description: "Utilisez RcloneView pour parcourir, envoyer, synchroniser et gérer visuellement vos buckets Google Cloud Storage (GCS). Aucune ligne de commande requise — gestion complète de GCS via une interface graphique."
keywords:
  - google cloud storage rcloneview
  - manage gcs buckets gui
  - rclone google cloud storage
  - gcs bucket management tool
  - google cloud storage gui
  - sync files google cloud storage
  - upload to gcs without cli
  - rcloneview gcs
  - google cloud storage backup
  - gcs rclone gui
tags:
  - RcloneView
  - google-cloud-storage
  - cloud-storage
  - guide
  - object-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer les buckets Google Cloud Storage avec RcloneView

> Google Cloud Storage est la colonne vertébrale du stockage objet de GCP — durable, rapide et profondément intégré à la plateforme cloud de Google. RcloneView vous offre un gestionnaire de fichiers visuel pour vos buckets GCS sans avoir besoin de `gsutil` ni de la console GCP.

Google Cloud Storage (GCS) est le stockage objet privilégié des équipes déjà présentes sur Google Cloud Platform — que ce soit pour des données d'application, des jeux de données ML, du staging BigQuery ou la diffusion de médias. Bien que `gsutil` et la console GCP fonctionnent, ils restent lents pour les opérations de fichiers en masse et la gestion quotidienne. RcloneView propose un gestionnaire de fichiers à double panneau pour les buckets GCS, vous permettant de parcourir, transférer et synchroniser des fichiers comme vous le feriez avec un explorateur de fichiers de bureau.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ce que RcloneView apporte à la gestion de GCS

| Tâche | Console GCP | CLI gsutil | RcloneView |
|------|------------|------------|------------|
| Parcourir les buckets visuellement | ✓ | ✗ | ✓ |
| Envoi par glisser-déposer | Limité | ✗ | ✓ |
| Synchronisation vers d'autres clouds | ✗ | ✗ | ✓ |
| Transfert vers un disque local | Lent | ✓ | ✓ |
| Planifier des tâches de synchronisation | ✗ | Manuel | ✓ |
| Suivi des transferts en temps réel | ✗ | ✓ | ✓ |

## Connecter Google Cloud Storage à RcloneView

### Étape 1 — Créer un compte de service

Dans la console GCP :

1. Allez dans **IAM et administration → Comptes de service**.
2. Créez un nouveau compte de service avec le rôle **Storage Admin** (ou **Storage Object Admin** pour la lecture/écriture sans gestion des buckets).
3. Générez un fichier de clé JSON et téléchargez-le.

### Étape 2 — Ajouter le remote GCS dans RcloneView

Ouvrez RcloneView et cliquez sur **New Remote** :

<img src="/support/images/en/blog/new-remote.png" alt="Add Google Cloud Storage remote in RcloneView" class="img-large img-center" />

1. Sélectionnez **Google Cloud Storage** dans la liste des types de remote.
2. Pointez vers votre **fichier de clé de compte de service JSON** téléchargé.
3. Saisissez votre **ID de projet GCP**.
4. Nommez le remote (par exemple, `gcs-prod`) et enregistrez.

Une fois connectés, vos buckets GCS apparaissent comme des dossiers de premier niveau dans l'explorateur de fichiers de RcloneView.

## Parcourir et gérer les buckets GCS

Naviguez dans n'importe quel bucket pour voir son contenu. RcloneView affiche la hiérarchie des clés d'objet sous forme de dossiers, correspondant à ce que vous verriez dans la console GCP.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browse GCS buckets in RcloneView" class="img-large img-center" />

Depuis l'interface à double panneau, vous pouvez :
- **Copier des fichiers** entre chemins GCS ou vers/depuis un disque local
- **Déplacer des objets** au sein d'un bucket ou entre buckets
- **Supprimer des objets** avec confirmation
- **Renommer** en copiant sous une nouvelle clé puis en supprimant l'ancienne

## Synchroniser des fichiers vers et depuis GCS

### Envoyer un jeu de données local vers GCS

1. Ouvrez une **Job** dans RcloneView.
2. Définissez la source sur votre dossier local (par exemple, `D:\ml-dataset\`).
3. Définissez la destination sur un chemin GCS (par exemple, `gcs-prod:my-ml-bucket/training-data/`).
4. Choisissez **Copy** (ajouter uniquement les nouveaux fichiers) ou **Sync** (miroir exact).
5. Lancez la tâche et suivez la progression en direct.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Upload dataset to GCS in RcloneView" class="img-large img-center" />

### Multi-cloud : de GCS vers un autre fournisseur

RcloneView transfère directement entre les clouds. Flux de travail GCS courants :

- **GCS → AWS S3** — répliquer les buckets entre clouds pour la redondance
- **GCS → Backblaze B2** — archiver les données froides vers un stockage moins cher
- **GCS → Google Drive** — partager les résultats traités avec des parties prenantes non techniques
- **GCS → NAS local** — récupérer les données pour un traitement sur site

## Prise en compte des classes de stockage GCS

GCS propose plusieurs classes de stockage : Standard, Nearline, Coldline et Archive. Lors de la configuration d'une tâche de synchronisation dans RcloneView, vous pouvez passer des indicateurs rclone pour cibler une classe de stockage spécifique pour les nouveaux objets :

| Classe de stockage | Cas d'usage | Durée minimale de stockage |
|--------------|----------|--------------------------|
| Standard | Données consultées fréquemment | Aucune |
| Nearline | Accès mensuel | 30 jours |
| Coldline | Accès trimestriel | 90 jours |
| Archive | Accès annuel | 365 jours |

Utilisez le champ **Custom flags** dans l'éditeur de tâches de RcloneView pour passer `--gcs-storage-class COLDLINE` pour les données d'archivage.

## Planifier des synchronisations GCS régulières

Pour les tâches de sauvegarde récurrentes — envois nocturnes, synchronisations quotidiennes de staging ou archivages hebdomadaires :

1. Créez une tâche avec votre source et une destination GCS.
2. Ouvrez les paramètres **Schedule**.
3. Définissez la fréquence (quotidienne, hebdomadaire, cron personnalisé).
4. Activez les alertes par e-mail ou notification à la fin.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule GCS sync job" class="img-large img-center" />

## Comparaison de dossiers pour la vérification

Après de gros transferts, utilisez la **Folder Comparison** de RcloneView pour vérifier que vos fichiers locaux correspondent à ce qui se trouve dans GCS — en vérifiant le nombre de fichiers, les tailles et les sommes de contrôle :

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify GCS sync with folder comparison" class="img-large img-center" />

Tout objet manquant ou différent apparaît en surbrillance, ce qui vous permet de relancer uniquement les fichiers concernés.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Créez un compte de service** dans la console GCP avec les autorisations Storage Object Admin.
3. **Téléchargez la clé JSON** et ajoutez le remote GCS dans RcloneView.
4. **Parcourez vos buckets** et commencez à transférer des fichiers visuellement.

GCS est une infrastructure puissante — RcloneView rend la gestion quotidienne des fichiers aussi simple qu'un disque local.

---

**Guides associés :**

- [Transférer Google Cloud Storage vers AWS S3](https://rcloneview.com/support/blog/transfer-google-cloud-storage-aws-s3-without-cli-rcloneview)
- [Monter des buckets Amazon S3 comme des lecteurs locaux](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)
- [Centraliser S3, Wasabi et R2 avec RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
