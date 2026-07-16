---
slug: migrate-sharepoint-to-google-drive-rcloneview
title: "Migrer de SharePoint vers Google Drive — Transférer des bibliothèques de documents avec RcloneView"
authors:
  - tayson
description: "Vous passez de Microsoft 365 à Google Workspace ? Transférez vos bibliothèques de documents SharePoint et vos fichiers OneDrive vers Google Drive et les Drive partagés avec RcloneView."
keywords:
  - sharepoint to google drive
  - migrate sharepoint to gdrive
  - sharepoint migration tool
  - microsoft to google migration
  - sharepoint to google workspace
  - sharepoint document library transfer
  - office 365 to google
  - sharepoint google drive sync
  - cross platform cloud migration
  - enterprise cloud migration
tags:
  - sharepoint
  - google-drive
  - migration
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de SharePoint vers Google Drive — Transférer des bibliothèques de documents avec RcloneView

> Votre organisation passe de Microsoft 365 à Google Workspace. Les bibliothèques SharePoint, les fichiers personnels OneDrive et des années de documents d'équipe doivent tous arriver intacts sur Google Drive. Voici comment procéder.

Migrer de SharePoint vers Google Drive est l'inverse de l'une des migrations cloud d'entreprise les plus courantes. Que ce soit motivé par le coût, une préférence de plateforme ou un changement organisationnel, le défi reste le même : des milliers de fichiers dans des bibliothèques de documents structurées doivent être transférés proprement vers Google Drive et les Drive partagés. RcloneView gère nativement les deux côtés.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Planifier la migration

### Correspondance des structures

| SharePoint | Google Workspace |
|-----------|-----------------|
| Bibliothèques de documents | Drive partagés |
| OneDrive (personnel) | Mon Drive (personnel) |
| Sites d'équipe | Un Drive partagé par équipe |
| Fichiers partagés | Dossiers du Drive partagé |

### Connecter les deux plateformes

<img src="/support/images/en/blog/new-remote.png" alt="Connecter SharePoint et Google Drive" class="img-large img-center" />

Ajoutez vos comptes SharePoint/OneDrive et Google Drive dans RcloneView.

## Étapes de la migration

### 1) Transférer les bibliothèques de documents

Ouvrez SharePoint dans un volet et le Drive partagé Google dans l'autre. Transférez bibliothèque par bibliothèque :

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de SharePoint vers Google Drive" class="img-large img-center" />

### 2) Migrer les fichiers personnels OneDrive

Les fichiers OneDrive de chaque utilisateur sont déplacés vers son Mon Drive Google Drive.

### 3) Vérifier l'exhaustivité

La comparaison de dossiers confirme que chaque fichier a bien été transféré :

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Vérifier la migration" class="img-large img-center" />

### 4) Planifier les grandes migrations de nuit

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planifier une migration de nuit" class="img-large img-center" />

### 5) Suivre la progression

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Suivre la progression de la migration" class="img-large img-center" />

## Points importants à considérer

- **Conversion de format de fichier** : Google peut afficher nativement les fichiers Office ; la conversion au format Google Docs est optionnelle
- **Mappage des permissions** : les permissions de fichiers ne se transfèrent pas automatiquement — planifiez séparément les permissions de votre Drive partagé
- **Longueur des chemins** : SharePoint autorise des chemins plus longs qu'on ne le pense généralement ; vérifiez la compatibilité
- **Bibliothèques volumineuses** : découpez-les en lots par service ou par projet

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez les distants** SharePoint et Google Drive.
3. **Associez les bibliothèques** aux Drive partagés.
4. **Transférez et vérifiez** par lots.

Un changement de plateforme propre, sans aucune perte de données.

---

**Guides associés :**

- [Migrer de Google Workspace vers Microsoft 365](https://rcloneview.com/support/blog/migrate-google-workspace-to-microsoft-365-rcloneview)
- [Migration cloud sans interruption de service](https://rcloneview.com/support/blog/migrate-cloud-storage-zero-downtime-rcloneview)
- [Comparer le contenu de dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
