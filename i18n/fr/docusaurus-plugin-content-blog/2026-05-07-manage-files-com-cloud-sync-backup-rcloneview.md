---
slug: manage-files-com-cloud-sync-backup-rcloneview
title: "Gérer le stockage Files.com — Synchronisation et sauvegarde de fichiers avec RcloneView"
authors:
  - tayson
description: "Connectez Files.com à RcloneView via SFTP ou WebDAV, parcourez les partages de fichiers d'entreprise et exécutez des tâches automatisées de synchronisation et de sauvegarde pour une gestion sécurisée des fichiers."
keywords:
  - Files.com RcloneView
  - Files.com SFTP
  - Files.com WebDAV
  - gestion de fichiers d'entreprise
  - synchronisation cloud Files.com
  - sauvegarde Files.com
  - synchronisation cloud SFTP
  - transfert de fichiers sécurisé
tags:
  - sftp
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage Files.com — Synchronisation et sauvegarde de fichiers avec RcloneView

> Files.com est une puissante plateforme de gestion de fichiers d'entreprise, et RcloneView s'y connecte via SFTP ou WebDAV afin que vous puissiez synchroniser, sauvegarder et gérer vos fichiers via une interface graphique de bureau claire.

Files.com propose un transfert de fichiers géré de niveau entreprise avec des fonctionnalités de conformité, d'automatisation et de contrôle d'accès dont dépendent les grandes organisations. Pour les équipes qui doivent intégrer Files.com dans des workflows multi-cloud plus larges — synchroniser du contenu vers des sauvegardes cloud, déplacer des fichiers vers d'autres fournisseurs de stockage, ou gérer des fichiers en masse — RcloneView offre une interface graphique qui fonctionne sur les protocoles standards SFTP et WebDAV. Aucune installation séparée de rclone n'est nécessaire ; il est intégré à RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connexion à Files.com via SFTP

SFTP est le moyen le plus fiable de connecter RcloneView à Files.com. Dans RcloneView, cliquez sur **New Remote** et sélectionnez **SFTP**. Saisissez votre nom d'hôte Files.com (généralement `<your-subdomain>.files.com`), votre nom d'utilisateur, ainsi que votre mot de passe ou une clé SSH. Files.com prend en charge les deux méthodes d'authentification — l'authentification par clé SSH est privilégiée pour les workflows automatisés car elle évite de stocker des mots de passe.

Une fois enregistré, le distant SFTP Files.com apparaît dans l'explorateur à double volet. Parcourez la structure de dossiers de votre Files.com, téléversez et téléchargez des fichiers par glisser-déposer, et gérez vos partages de fichiers d'entreprise directement depuis l'interface de RcloneView. La progression du transfert est affichée en direct pour toutes les opérations.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Files.com as an SFTP remote in RcloneView" class="img-large img-center" />

## Connexion via WebDAV

Files.com prend également en charge WebDAV, une alternative si SFTP est bloqué par un pare-feu ou si vous préférez un accès basé sur HTTP. Dans RcloneView, cliquez sur **New Remote** > **WebDAV** et saisissez l'URL WebDAV de Files.com, votre nom d'utilisateur et votre mot de passe. Le point de terminaison WebDAV de Files.com est généralement disponible à l'adresse `https://<subdomain>.files.com/dav/`.

WebDAV convient bien pour la navigation générale de fichiers et les transferts de volume modéré. Pour les opérations en masse à haut débit — comme la synchronisation de milliers de fichiers dans une tâche de sauvegarde — SFTP offre généralement de meilleures performances et une gestion plus fiable des fichiers volumineux.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Files.com to cloud backup storage in RcloneView" class="img-large img-center" />

## Exécuter des tâches de synchronisation et de sauvegarde

Une fois Files.com connecté, vous pouvez créer des tâches de synchronisation à l'aide du **Job Wizard**. Définissez un dossier Files.com comme source et une destination de sauvegarde cloud (comme Amazon S3, Backblaze B2 ou Google Drive) comme cible. C'est un schéma courant pour la sauvegarde en entreprise : Files.com sert de plateforme active de gestion de fichiers, tandis qu'un espace de stockage d'objets cloud conserve des copies d'archive.

Exécutez une **simulation (dry run)** avant de lancer toute tâche de synchronisation afin de vérifier que les bons fichiers sont concernés. Pour les fichiers sensibles en matière de conformité, l'**historique des tâches** (**Job History**) de RcloneView fournit une piste d'audit complète de chaque transfert. Les utilisateurs disposant d'une licence PLUS peuvent planifier ces tâches de sauvegarde pour qu'elles s'exécutent automatiquement — par exemple, toutes les nuits — garantissant que les données Files.com sont sauvegardées en continu sans intervention manuelle.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Files.com backup sync in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Cliquez sur **New Remote** > **SFTP** et saisissez votre nom d'hôte Files.com, votre nom d'utilisateur, ainsi qu'une clé SSH ou un mot de passe.
3. Parcourez la structure de dossiers de votre Files.com dans l'explorateur à double volet.
4. Utilisez le **Job Wizard** pour créer une tâche de synchronisation de sauvegarde de Files.com vers le stockage cloud de votre choix.
5. Planifiez des sauvegardes récurrentes avec une licence PLUS pour une protection automatisée des données.

RcloneView relie les capacités de gestion de fichiers d'entreprise de Files.com à l'écosystème plus large du stockage cloud, vous offrant un outil graphique unique pour toutes vos opérations sur fichiers.

---

**Guides connexes :**

- [Gérer Seafile — Synchronisation et sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/manage-seafile-cloud-sync-backup-rcloneview)
- [Gérer Citrix ShareFile — Synchronisation et sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/manage-citrix-sharefile-cloud-sync-backup-rcloneview)
- [Corriger les erreurs de connexion SFTP refusée et de délai d'attente dépassé avec RcloneView](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)

<CloudSupportGrid />
