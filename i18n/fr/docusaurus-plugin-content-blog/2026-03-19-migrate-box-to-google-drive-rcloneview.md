---
slug: migrate-box-to-google-drive-rcloneview
title: "Migrer de Box vers Google Drive — Transférer fichiers et dossiers avec RcloneView"
authors:
  - tayson
description: "Vous passez de Box à Google Drive ? Transférez la totalité de votre compte Box, y compris les dossiers, fichiers partagés et archives, vers Google Drive avec une vérification complète grâce à RcloneView."
keywords:
  - box to google drive
  - migrate box to gdrive
  - box migration tool
  - box to google workspace
  - switch from box
  - box file transfer
  - box to google shared drive
  - box cloud migration
  - box alternative google
  - transfer box files
tags:
  - box
  - google-drive
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Box vers Google Drive — Transférer fichiers et dossiers avec RcloneView

> Box vous a bien servi, mais Google Workspace a désormais plus de sens. Transférez tout — fichiers personnels, dossiers partagés et archives de département — vers Google Drive sans perdre le moindre fichier.

Box est populaire dans les environnements d'entreprise, mais de nombreuses organisations se regroupent sur Google Workspace pour une intégration plus étroite avec Gmail, Calendar et Docs. La migration doit préserver la structure des dossiers, gérer de grands volumes de données et vérifier l'exhaustivité du transfert. RcloneView se connecte nativement à Box et à Google Drive.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Box et Google Drive

<img src="/support/images/en/blog/new-remote.png" alt="Add Box and Google Drive" class="img-large img-center" />

## Processus de migration

### 1) Cartographier la structure des dossiers

| Box | Google Drive |
|-----|-------------|
| Dossiers personnels | Mon Drive |
| Dossiers partagés | Drive partagé |
| Archives de département | Dossiers du Drive partagé |

### 2) Transférer dossier par dossier

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box to Google Drive" class="img-large img-center" />

### 3) Planifier les transferts volumineux en heures creuses

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule migration" class="img-large img-center" />

### 4) Vérifier l'exhaustivité

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Box migration" class="img-large img-center" />

## Considérations spécifiques à Box

- **L'historique des versions de fichiers Box** ne se transfère pas — seule la version actuelle est migrée
- **Les Box Notes** utilisent un format propriétaire — exportez-les avant la migration
- **Les liens partagés** ne seront pas conservés — mettez à jour vos favoris après la migration
- **Grandes entreprises** : créez des tâches par lot pour chaque département afin d'obtenir des volumes gérables

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez** les distants **Box** et **Google Drive**.
3. **Transférez par lots** avec vérification.
4. **Gardez Box actif** pendant la transition.

Migration propre, vérification complète.

---

**Guides connexes :**

- [Migrer de Box vers SharePoint](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)
- [Migrer Dropbox Business vers Google](https://rcloneview.com/support/blog/migrate-dropbox-business-to-google-workspace-rcloneview)
- [Comparer le contenu des dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
