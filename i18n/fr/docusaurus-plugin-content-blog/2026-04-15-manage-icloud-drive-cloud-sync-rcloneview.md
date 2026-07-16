---
slug: manage-icloud-drive-cloud-sync-rcloneview
title: "Gérer le stockage iCloud Drive — Synchroniser et sauvegarder vos fichiers avec RcloneView"
authors:
  - tayson
description: "Gérez iCloud Drive avec RcloneView — synchronisez, sauvegardez et transférez vos fichiers iCloud Drive vers d'autres clouds grâce à une interface graphique basée sur rclone v1.69+."
keywords:
  - gestion iCloud Drive
  - synchronisation iCloud Drive
  - outil de sauvegarde iCloud
  - RcloneView iCloud
  - transfert de fichiers iCloud Drive
  - interface graphique stockage cloud Apple
  - iCloud vers Google Drive
  - sauvegarde multi-cloud
  - iCloud Drive rclone
  - sauvegarde stockage cloud Apple
tags:
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage iCloud Drive — Synchroniser et sauvegarder vos fichiers avec RcloneView

> iCloud Drive est le stockage cloud natif d'Apple — RcloneView, propulsé par rclone v1.69+, se connecte directement à iCloud Drive et intègre votre contenu cloud Apple dans un flux de gestion de fichiers multi-cloud.

iCloud Drive est profondément intégré aux flux de travail macOS et iOS, mais extraire des fichiers d'iCloud pour les sauvegarder vers un fournisseur secondaire — ou synchroniser le contenu iCloud avec des systèmes Windows — nécessitait historiquement les applications de l'écosystème Apple. RcloneView, grâce au support d'iCloud Drive de rclone v1.69+, se connecte directement à votre stockage cloud Apple et l'intègre dans une interface de gestion de fichiers multiplateforme.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter iCloud Drive dans RcloneView

Le support d'iCloud Drive nécessite **rclone v1.69 ou une version ultérieure**. RcloneView est fourni avec un binaire rclone embarqué et prend en charge la mise à jour automatique de rclone (Self Update) directement dans l'application — vous pouvez mettre à jour vers la version requise depuis l'onglet **Help**.

Pour connecter iCloud Drive, allez dans **Remote tab > New Remote** et sélectionnez **iCloud Drive** dans la liste des fournisseurs. Saisissez vos identifiants Apple pour terminer l'authentification. Une fois configuré, votre iCloud Drive apparaît comme un distant dans l'explorateur, affichant tous vos dossiers et fichiers iCloud. Sur macOS, cela révèle exactement ce qui est stocké dans iCloud, que les fichiers aient été téléchargés localement ou non.

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive as a new remote in RcloneView" class="img-large img-center" />

## Sauvegarder iCloud Drive vers un autre cloud

Le cas d'usage le plus courant : créer une sauvegarde cloud-à-cloud du contenu iCloud Drive vers Amazon S3, Backblaze B2 ou Google Drive, pour un accès multiplateforme et une reprise après sinistre. Configurez une tâche de synchronisation dans le **Job Manager** de RcloneView — la source est votre distant iCloud Drive, la destination est votre distant cloud de sauvegarde.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling iCloud Drive backup to another cloud in RcloneView" class="img-large img-center" />

Pour un professionnel utilisant iCloud Drive comme espace de stockage documentaire principal — avec 500 Go de ressources de conception, de fichiers clients et d'archives de projets — planifier une sauvegarde nocturne vers Backblaze B2 crée un filet de sécurité indépendant du fournisseur. La structure des dossiers d'iCloud Drive comprend Desktop, Documents et des dossiers spécifiques aux applications. Les options de filtrage de RcloneView permettent d'inclure ou d'exclure des chemins spécifiques — par exemple, synchroniser uniquement le dossier Documents tout en ignorant les grandes bibliothèques multimédias.

## Accès à iCloud multiplateforme

Les équipes disposant d'environnements mixtes Mac et Windows rencontrent souvent des difficultés avec le client Windows limité d'iCloud. RcloneView sur Windows peut se connecter à iCloud Drive et fournir un accès direct aux fichiers, permettant de copier ou de synchroniser le contenu iCloud vers des lecteurs réseau partagés ou des systèmes NAS accessibles à toute l'équipe.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Accessing iCloud Drive from Windows using RcloneView" class="img-large img-center" />

L'explorateur à double panneau simplifie la gestion de fichiers multiplateforme : iCloud Drive d'un côté, le partage Windows cible ou un autre cloud de l'autre. Faites glisser les fichiers entre les panneaux pour les copier, ou configurez une tâche de synchronisation pour des transferts récurrents.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Assurez-vous que votre rclone embarqué est mis à jour vers la v1.69+ via **Help > Check for Updates**.
3. Allez dans **Remote tab > New Remote**, sélectionnez **iCloud Drive**, et saisissez vos identifiants Apple.
4. Configurez une tâche de synchronisation dans **Job Manager** pour sauvegarder votre iCloud Drive vers un cloud secondaire.

Avec RcloneView, iCloud Drive n'est plus cloisonné dans l'écosystème Apple — votre contenu cloud Apple devient partie intégrante d'une stratégie de sauvegarde et de gestion multi-cloud plus large.

---

**Guides connexes :**

- [iCloud Drive avec RcloneView — Guide de démarrage](https://rcloneview.com/support/blog/icloud-drive-with-rcloneview)
- [Gérer le stockage cloud Google Drive — Synchroniser et sauvegarder avec RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Gérer le stockage cloud OneDrive — Synchroniser et sauvegarder avec RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
