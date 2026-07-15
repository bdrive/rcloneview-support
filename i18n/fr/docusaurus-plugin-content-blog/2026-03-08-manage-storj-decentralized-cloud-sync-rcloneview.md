---
slug: manage-storj-decentralized-cloud-sync-rcloneview
title: "Gérez le stockage cloud décentralisé Storj — Synchronisez avec S3, Google Drive et NAS grâce à RcloneView"
authors:
  - tayson
description: "Storj propose un stockage cloud décentralisé compatible S3. Découvrez comment gérer, synchroniser et sauvegarder Storj aux côtés de Google Drive, AWS S3 et NAS avec RcloneView."
keywords:
  - storj cloud storage
  - storj sync google drive
  - storj rclone gui
  - storj s3 compatible
  - storj backup tool
  - decentralized cloud manager
  - storj file transfer
  - storj vs s3
  - storj dcs rclone
  - storj multi cloud sync
tags:
  - RcloneView
  - storj
  - decentralized-storage
  - cloud-storage
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérez le stockage cloud décentralisé Storj — Synchronisez avec S3, Google Drive et NAS grâce à RcloneView

> Storj combine sécurité décentralisée et API compatibles S3. Une solution prête pour l'entreprise, mais qui a toujours besoin d'une bonne interface de gestion. RcloneView l'offre — avec en prime l'intégration de plus de 70 autres fournisseurs de stockage.

Storj (anciennement Storj DCS) est une plateforme de stockage cloud décentralisée qui découpe, chiffre et distribue vos fichiers sur un réseau mondial de nœuds. Contrairement à l'approche blockchain de Sia, Storj propose une API compatible S3 familière, ce qui en fait un remplacement direct d'AWS S3 dans de nombreux flux de travail. RcloneView vous permet de gérer Storj visuellement, aux côtés de tous vos autres clouds.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi Storj ?

### Compatible S3 et décentralisé

- **API S3** — Fonctionne avec tout outil compatible S3, y compris rclone et RcloneView.
- **Chiffrement de bout en bout** — Les fichiers sont chiffrés côté client avant le téléversement.
- **Distribué sur plus de 13 000 nœuds** — Aucun point de défaillance unique.
- **80 % moins cher qu'AWS S3** — 4 $/To/mois de stockage, 7 $/To de sortie (egress).
- **Architecture zero-knowledge** — Storj n'a pas accès à vos données.

### Avantage tarifaire

| Fournisseur | Stockage (To/mois) | Sortie (To) |
|----------|-------------------|-------------|
| AWS S3 Standard | 23 $ | 90 $ |
| Google Cloud Storage | 20 $ | 120 $ |
| Backblaze B2 | 6 $ | 10 $ |
| Storj | 4 $ | 7 $ |

Storj est l'une des options compatibles S3 les moins chères disponibles, avec l'avantage supplémentaire d'une sécurité décentralisée.

## Configurer Storj dans RcloneView

### Obtenir des identifiants Storj

1. Inscrivez-vous sur [storj.io](https://www.storj.io/).
2. Créez un nouveau bucket dans le tableau de bord Storj.
3. Générez un accès compatible S3 (clé d'accès + clé secrète).
4. Notez votre point de terminaison : `gateway.storjshare.io`.

### Ajouter Storj comme distant

1. Ouvrez RcloneView et cliquez sur **Add Remote**.
2. Choisissez **S3 Compatible** comme type de distant.
3. Sélectionnez **Storj** comme fournisseur.
4. Saisissez votre clé d'accès, votre clé secrète et le point de terminaison.

<img src="/support/images/en/blog/new-remote.png" alt="Add Storj S3-compatible remote" class="img-large img-center" />

Vos buckets Storj apparaissent désormais dans l'explorateur à deux volets de RcloneView.

## Flux de travail pratiques

### 1) Migrer d'AWS S3 vers Storj

Économisez 80 % sur les coûts de stockage en déplaçant les données de S3 vers Storj :

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer from AWS S3 to Storj" class="img-large img-center" />

Utilisez une tâche de copie pour transférer vos buckets S3 vers Storj. Comme les deux parlent S3, la migration est simple.

### 2) Google Drive → Storj (archive chiffrée)

Sauvegardez votre Google Drive vers Storj pour obtenir une archive décentralisée et chiffrée :

- Google Drive pour la collaboration quotidienne.
- Storj pour une sauvegarde à long terme, axée sur la confidentialité.
- Planifiez des synchronisations nocturnes pour maintenir l'archive à jour.

### 3) Storj → NAS (miroir local)

Conservez une copie locale des données Storj critiques sur votre NAS Synology ou QNAP :

```
Storj → NAS (miroir quotidien pour un accès local rapide)
NAS → Storj (sauvegarde des nouveaux fichiers locaux)
```

### 4) Redondance multi-cloud

Utilisez Storj dans le cadre d'une stratégie de sauvegarde 3-2-1 :

- **3 copies** : locale, Storj, et un cloud traditionnel.
- **2 supports différents** : décentralisé (Storj) + centralisé (Google Drive).
- **1 copie hors site** : Storj EST la copie hors site (distribuée mondialement).

## Planifier des synchronisations automatisées

Configurez des tâches récurrentes pour maintenir Storj synchronisé avec vos autres stockages :

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Storj sync jobs" class="img-large img-center" />

### Exemple de planification

- **Chaque nuit à 2 h** : synchronisation Google Drive → Storj.
- **Chaque dimanche** : vérification comparative complète pour détecter les écarts.
- **Chaque mois** : archivage des anciens fichiers de S3 → Storj pour réduire les coûts.

## Vérifier avec la comparaison de dossiers

Après une migration ou une synchronisation, comparez la source et la destination pour vous assurer de l'exhaustivité :

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare Storj with other storage" class="img-large img-center" />

## Surveiller les transferts

Suivez la progression des transferts volumineux en temps réel :

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Storj transfer progress" class="img-large img-center" />

## Storj face aux autres fournisseurs compatibles S3

| Fonctionnalité | Storj | Backblaze B2 | Wasabi | MinIO (auto-hébergé) |
|---------|-------|-------------|--------|---------------------|
| Décentralisé | ✅ | ❌ | ❌ | ❌ |
| Chiffrement de bout en bout | ✅ (côté client) | ❌ | ❌ | ❌ |
| Compatible S3 | ✅ | ✅ | ✅ | ✅ |
| Stockage $/To | 4 $ | 6 $ | 7 $ | Auto-hébergé |
| Sortie $/To | 7 $ | 10 $ | Gratuit | Auto-hébergé |
| Distribution mondiale | ✅ (plus de 13 000 nœuds) | 2 régions | 4 régions | Vos serveurs |

## Pour commencer

1. **Créez un compte Storj** sur [storj.io](https://www.storj.io/).
2. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
3. **Ajoutez Storj comme distant compatible S3**.
4. **Parcourez, transférez et synchronisez** avec n'importe lequel de vos autres clouds.
5. **Planifiez des sauvegardes** pour un fonctionnement automatisé.

Décentralisé, chiffré, compatible S3 et 80 % moins cher — Storj est une alternative séduisante au stockage cloud traditionnel. Et avec RcloneView, vous le gérez aux côtés de tout le reste.

---

**Guides connexes :**

- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Comparer le contenu des dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
