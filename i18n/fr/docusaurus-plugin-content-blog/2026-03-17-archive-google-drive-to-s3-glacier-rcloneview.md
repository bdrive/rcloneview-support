---
slug: archive-google-drive-to-s3-glacier-rcloneview
title: "Archivez vos fichiers Google Drive vers S3 Glacier — Stockage longue durée à un coût 90 % inférieur avec RcloneView"
authors:
  - tayson
description: "Le stockage Google Drive est coûteux pour les données d'archive. Déplacez vos anciens fichiers vers S3 Glacier pour quelques centimes par Go tout en gardant la possibilité de les récupérer. RcloneView automatise l'ensemble du processus."
keywords:
  - google drive vers glacier
  - archive google drive
  - archive s3 glacier
  - archive cloud pas cher
  - stockage à froid google drive
  - archiver les anciens fichiers cloud
  - google drive vers s3
  - réduire le coût de google drive
  - stockage cloud longue durée
  - stratégie d'archivage cloud
tags:
  - RcloneView
  - google-drive
  - s3
  - glacier
  - archive
  - cost-optimization
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Archivez vos fichiers Google Drive vers S3 Glacier — Stockage longue durée à un coût 90 % inférieur avec RcloneView

> Vous payez 10 $/mois pour 2 To sur Google Drive, mais 80 % de ces fichiers n'ont pas été ouverts depuis un an. Déplacez-les vers S3 Glacier pour 1 $/To/mois et réduisez considérablement votre facture de stockage.

La tarification de Google Drive est conçue pour les fichiers actifs — les documents que vous ouvrez quotidiennement, les fichiers que vous partagez avec vos collègues. Mais la plupart des comptes Google Drive accumulent des années de fichiers jamais consultés : anciens dossiers de projets, travaux terminés, photos archivées, documents obsolètes. Ces fichiers occupent un stockage coûteux alors qu'ils pourraient se trouver sur S3 Glacier pour une fraction du prix.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Comparaison des coûts

| Stockage | Prix par To/mois |
|---------|-------------------|
| Google Drive (One) | ~5 $ |
| Google Workspace Business | ~6 $ |
| S3 Standard | ~23 $ |
| S3 Glacier Instant Retrieval | ~4 $ |
| S3 Glacier Flexible Retrieval | ~3,6 $ |
| S3 Glacier Deep Archive | ~1 $ |

Déplacer 1 To de fichiers inactifs de Google Drive vers Glacier Deep Archive permet d'économiser ~48 $/an.

## Que faut-il archiver

Bons candidats pour Glacier :

- Dossiers de projets terminés (de plus de 6 mois)
- Documents fiscaux et registres financiers (après déclaration)
- Anciennes sauvegardes photo/vidéo
- Données d'anciens employés
- Fichiers d'équipe archivés

Mauvais candidats (à conserver sur Google Drive) :

- Documents et feuilles de calcul actifs
- Fichiers de collaboration partagés
- Fichiers ouverts chaque semaine ou chaque mois

## Processus d'archivage

### 1) Identifier les candidats à l'archivage

Parcourez votre Google Drive dans l'explorateur et identifiez les dossiers qui n'ont pas été consultés récemment :

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Google Drive for archive candidates" class="img-large img-center" />

### 2) Transférer vers S3 Glacier

Créez une tâche de copie de Google Drive vers votre bucket S3 configuré avec une classe de stockage Glacier :

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Transfer to Glacier" class="img-large img-center" />

### 3) Vérifier l'archive

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify archive completeness" class="img-large img-center" />

### 4) Supprimer de Google Drive

Uniquement après vérification. Cela libère votre quota de stockage Google Drive.

### 5) Planifier un archivage régulier

Configurez des exécutions d'archivage mensuelles pour les nouveaux candidats :

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule monthly archival" class="img-large img-center" />

## Points importants

- **La récupération depuis Glacier coûte de l'argent et prend du temps** — Glacier Instant Retrieval offre un accès rapide ; Deep Archive peut prendre plus de 12 heures
- **Durée de stockage minimale** — Glacier facture la suppression anticipée (90 à 180 jours selon la classe)
- **Vérifiez avant de supprimer** — confirmez toujours que l'archive est complète avant de la retirer de Drive

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez des remotes Google Drive** et **S3**.
3. **Identifiez les fichiers inactifs** sur Google Drive.
4. **Copiez vers Glacier**, vérifiez, puis nettoyez Drive.

Les fichiers actifs sur Drive. Tout le reste sur Glacier.

---

**Guides connexes :**

- [Coûts cachés du stockage cloud](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)
- [Archivage à froid avec Glacier](https://rcloneview.com/support/blog/cold-archive-glacier-rcloneview)
- [Comparer le contenu des dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
