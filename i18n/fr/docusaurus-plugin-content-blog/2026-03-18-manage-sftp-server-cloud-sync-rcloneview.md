---
slug: manage-sftp-server-cloud-sync-rcloneview
title: "Connectez n'importe quel serveur SFTP à RcloneView — Synchronisez vos serveurs distants avec le stockage cloud"
authors:
  - tayson
description: "SFTP est la norme pour l'accès sécurisé aux fichiers sur les serveurs Linux, VPS et hébergements. Connectez n'importe quel serveur SFTP à RcloneView et synchronisez avec Google Drive, S3 ou plus de 70 clouds."
keywords:
  - sftp cloud sync
  - sftp to google drive
  - sftp backup tool
  - sftp file manager gui
  - sftp to s3 sync
  - ssh file transfer cloud
  - sftp cloud backup
  - sftp gui client
  - sftp remote manager
  - linux server cloud sync
tags:
  - sftp
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Connectez n'importe quel serveur SFTP à RcloneView — Synchronisez vos serveurs distants avec le stockage cloud

> Chaque serveur Linux, VPS et hébergeur web parle SFTP. RcloneView transforme n'importe quel point d'accès SFTP en un distant gérable que vous pouvez parcourir, synchroniser avec le stockage cloud et sauvegarder selon un planning.

SFTP (SSH File Transfer Protocol) est le protocole universel pour l'accès sécurisé aux fichiers sur des serveurs distants. Qu'il s'agisse d'un serveur web, d'une machine de développement, d'un VPS ou d'un serveur dédié, SFTP est presque toujours disponible. RcloneView se connecte à n'importe quel serveur SFTP et le place aux côtés de vos comptes cloud — parcourez visuellement les fichiers du serveur, synchronisez vers S3 ou Google Drive, et planifiez des sauvegardes automatisées.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ajouter un distant SFTP

<img src="/support/images/en/blog/new-remote.png" alt="Add SFTP remote" class="img-large img-center" />

Configurez avec le nom d'hôte de votre serveur, le port (par défaut 22), le nom d'utilisateur, et une authentification par mot de passe ou par clé SSH. Le système de fichiers de votre serveur apparaît instantanément dans l'explorateur.

## Flux de travail clés

### Sauvegarder un serveur web vers le cloud

Synchronisez les répertoires `/var/www` ou `/home` de votre serveur web vers S3 ou Google Drive :

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="SFTP server to cloud" class="img-large img-center" />

### Planifier des sauvegardes de serveur

Automatisez les sauvegardes nocturnes du serveur vers le stockage cloud :

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule SFTP backup" class="img-large img-center" />

### Migrer entre serveurs

Vous déménagez vers un nouveau serveur ? Ouvrez l'ancien serveur SFTP dans un panneau, le nouveau serveur dans l'autre. Transférez directement.

### Synchroniser les fichiers de développement

Gardez votre environnement de développement local synchronisé avec votre serveur distant en utilisant le stockage cloud comme intermédiaire.

### Vérifier les sauvegardes

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify SFTP backup" class="img-large img-center" />

## Authentification par clé SSH

Pour les sauvegardes automatisées, l'authentification par clé SSH est recommandée plutôt que les mots de passe. Configurez votre clé dans les paramètres du distant pour des connexions sécurisées sans mot de passe.

## Conseils de performance

- **Utilisez la compression** pour les transferts de fichiers texte volumineux sur des connexions lentes
- **Limitez les transferts simultanés** à 2-4 pour l'hébergement mutualisé
- **Excluez les fichiers temporaires** — filtrez `.cache`, `node_modules`, `__pycache__`
- **Planifiez en dehors des heures de pointe** pour éviter d'impacter les performances du serveur

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez votre serveur SFTP** en tant que distant.
3. **Parcourez les fichiers du serveur** dans l'explorateur à deux panneaux.
4. **Synchronisez vers le cloud** et planifiez des sauvegardes.

S'il dispose de SSH, RcloneView peut le gérer.

---

**Guides connexes :**

- [Monter SFTP/SMB comme lecteur local](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [Connecter des serveurs WebDAV](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [Migrer un serveur FTP vers le cloud](https://rcloneview.com/support/blog/migrate-ftp-server-to-cloud-storage-rcloneview)

<CloudSupportGrid />
