---
slug: sync-google-cloud-storage-to-wasabi-rcloneview
title: "Synchroniser Google Cloud Storage vers Wasabi — Sauvegarde économique avec RcloneView"
authors:
  - tayson
description: "Déplacez vos données de Google Cloud Storage vers le stockage compatible S3 Wasabi pour des économies importantes. RcloneView gère les deux fournisseurs et automatise la tâche de synchronisation."
keywords:
  - Google Cloud Storage to Wasabi sync
  - GCS Wasabi migration RcloneView
  - Wasabi cost-effective cloud backup
  - Google Cloud Storage backup alternative
  - S3-compatible cloud migration
  - cloud storage cost optimization
  - GCS Wasabi transfer
  - RcloneView Google Cloud Wasabi
tags:
  - google-cloud-storage
  - wasabi
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Google Cloud Storage vers Wasabi — Sauvegarde économique avec RcloneView

> Wasabi propose du stockage cloud actif à une fraction du coût par Go de Google Cloud Storage — RcloneView connecte les deux et automatise la migration ou la synchronisation continue.

Google Cloud Storage est profondément intégré aux workflows GCP, mais ses coûts de stockage augmentent rapidement pour les grands volumes de données. Wasabi propose un stockage actif compatible S3 avec une tarification forfaitaire au To et sans frais de sortie, ce qui en fait une cible de sauvegarde secondaire attrayante ou une destination de migration économique. RcloneView prend en charge les deux fournisseurs et gère la tâche de synchronisation depuis une seule interface graphique.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connexion à Google Cloud Storage

Google Cloud Storage (GCS) peut être connecté dans RcloneView de deux manières : via le fournisseur GCS natif ou via l'interface compatible S3. Pour la plupart des configurations, le fournisseur GCS natif est le plus simple. Ouvrez **Remote Manager**, cliquez sur **New Remote**, puis sélectionnez **Google Cloud Storage**.

Vous devrez fournir votre **Project Number** (disponible dans la console GCP sous Project Info). L'authentification utilise une clé JSON de compte de service ou OAuth. Pour l'accès via compte de service, téléchargez la clé JSON depuis la console GCP → IAM & Admin → Service Accounts, puis indiquez le chemin dans la configuration du remote. Pour OAuth, RcloneView ouvre votre navigateur pour l'autorisation du compte Google.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Google Cloud Storage and Wasabi remotes in RcloneView" class="img-large img-center" />

## Connexion à Wasabi

Dans **Remote Manager**, cliquez sur **New Remote** et sélectionnez **S3 Compatible** (Wasabi est compatible S3). Renseignez :

- **Access Key ID** : depuis la console Wasabi, sous Access Keys
- **Secret Access Key** : le secret correspondant
- **Endpoint** : le point de terminaison Wasabi pour votre région (par exemple, `s3.us-east-1.wasabisys.com` ou `s3.eu-central-1.wasabisys.com`)

Enregistrez le remote. Vérifiez que vos buckets Wasabi apparaissent dans l'explorateur de fichiers avant de continuer.

## Configuration de la tâche de synchronisation

Allez dans **Jobs** et cliquez sur **New Job**. Définissez Google Cloud Storage comme source — sélectionnez le bucket ou le chemin de dossier spécifique. Définissez Wasabi comme destination avec le bucket et le chemin cibles.

À l'étape 2 de l'assistant de création de tâche, configurez les paramètres pour une synchronisation fiable à grande échelle :

- **Transfers** : 8–16 (GCS et Wasabi gèrent bien une forte concurrence)
- **Checkers** : 8–16 (contrôle le nombre de vérifications d'égalité exécutées en parallèle)
- **Checksum verification** : activez-la pour confirmer l'intégrité des données
- **Dry Run** : activez-le d'abord pour vérifier la portée

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of Google Cloud Storage to Wasabi sync" class="img-large img-center" />

## Planification de la synchronisation continue

Si GCS reste votre stockage principal et que Wasabi sert de niveau de sauvegarde économique, planifiez une tâche de synchronisation récurrente. Avec une licence PLUS, ouvrez les paramètres de la tâche et ajoutez une planification cron à l'étape 3 — par exemple, `0 2 * * *` pour des sauvegardes nocturnes à 2h.

La synchronisation incrémentielle de RcloneView signifie que chaque exécution après la migration initiale ne transfère que les fichiers modifiés ou nouveaux. L'onglet **Job History** enregistre chaque exécution avec le nombre de fichiers, le volume de données transférées, la vitesse et les erreurs — offrant une piste d'audit claire.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Google Cloud Storage to Wasabi sync in RcloneView" class="img-large img-center" />

## Considérations sur les coûts

Le modèle tarifaire de Wasabi n'inclut aucuns frais par requête ni frais de sortie (dans les limites d'utilisation), ce qui le rend prévisible pour les grands volumes de données. La migration GCS → Wasabi entraîne des coûts de sortie GCS, mais il s'agit d'une dépense ponctuelle pour les migrations. Pour les sauvegardes continues, les données proviennent de vos serveurs ou de vos pipelines applicatifs, donc l'impact des frais de sortie dépend de votre configuration.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Connectez Google Cloud Storage dans **Remote Manager** à l'aide de votre Project Number et de votre JSON de compte de service ou d'OAuth.
3. Connectez Wasabi à l'aide de la clé d'accès, de la clé secrète et du point de terminaison régional.
4. Créez une tâche de synchronisation, exécutez un Dry Run pour confirmer la portée, puis planifiez des sauvegardes automatisées continues.

Déplacer les sauvegardes GCS vers Wasabi permet généralement une réduction significative des coûts de stockage sans compromis sur l'accessibilité.

---

**Guides connexes :**

- [Gérer Scaleway Object Storage avec RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Migrer de Wasabi vers Cloudflare R2 avec RcloneView](https://rcloneview.com/support/blog/migrate-wasabi-to-cloudflare-r2-rcloneview)
- [Automatiser les sauvegardes cloud quotidiennes avec RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
