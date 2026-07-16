---
slug: manage-hetzner-storage-box-sync-rcloneview
title: "Gérer Hetzner Storage Box — Synchronisation et sauvegarde avec RcloneView"
authors:
  - tayson
description: "Découvrez comment connecter en toute sécurité Hetzner Storage Box à RcloneView et synchroniser des fichiers entre clouds avec les protocoles SFTP et WebDAV pour une sauvegarde cloud européenne."
keywords:
  - Hetzner Storage Box
  - sauvegarde SFTP
  - synchronisation cloud WebDAV
  - stockage cloud européen
  - RcloneView
  - synchronisation de fichiers sécurisée
  - sauvegarde cloud Europe
  - Hetzner SFTP
  - sauvegarde cloud hybride
  - stockage cloud conforme au RGPD
tags:
  - hetzner
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer Hetzner Storage Box — Synchronisation et sauvegarde avec RcloneView

> Le stockage cloud européen rencontre la flexibilité multi-cloud. Hetzner Storage Box offre des tarifs compétitifs et une conformité RGPD—gérez-le désormais sans effort aux côtés de vos autres comptes cloud dans RcloneView.

Hetzner Storage Box est un choix de confiance pour les entreprises européennes en quête d'une sauvegarde cloud fiable et abordable. Que vous utilisiez SFTP ou WebDAV, RcloneView relie votre compte Hetzner à l'ensemble de votre écosystème cloud, vous permettant de synchroniser, sauvegarder et archiver sans quitter votre tableau de bord.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Hetzner Storage Box via SFTP

Ajouter un remote Hetzner Storage Box est simple dans RcloneView. SFTP vous donne un accès direct au serveur avec un chiffrement conforme aux normes de l'industrie.

1. Ouvrez RcloneView et cliquez sur **Add Remote**
2. Sélectionnez **SFTP** dans la liste des fournisseurs
3. Saisissez vos identifiants Hetzner :
   - **Host** : `u[account-id].your-storagebox.de`
   - **Username** : Votre identifiant Hetzner
   - **Password** : Votre mot de passe Hetzner ou clé SSH
4. Réglez le port sur **22** (SFTP standard)
5. Cliquez sur **Test Connection** pour vérifier

![New Remote Setup](/images/en/blog/new-remote.png)

## Synchroniser Hetzner vers AWS S3 ou d'autres clouds

Une fois votre Hetzner Storage Box connecté, vous pouvez créer instantanément des tâches de synchronisation cloud à cloud.

**Cas d'usage :**
- **Sauvegarde vers S3** : Archivez les fichiers fréquemment consultés depuis Hetzner vers Amazon S3 Glacier pour une conservation à long terme
- **Redondance multi-cloud** : Miroitez les données entre Hetzner et Backblaze B2
- **Flux de travail hybrides** : Synchronisez Hetzner Storage Box avec Google Drive pour un accès en équipe

![Cloud to Cloud Transfer](/images/en/blog/cloud-to-cloud-transfer-default.png)

## Surveillance et planification en temps réel

Le planificateur de tâches de RcloneView vous permet d'automatiser les sauvegardes Hetzner selon votre calendrier. Surveillez les vitesses de transfert, les taux d'erreur et le nombre de fichiers en temps réel.

![Job History and Monitoring](/images/en/howto/rcloneview-basic/job-history.png)

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Créez un compte Hetzner Storage Box (si vous n'en avez pas) sur [hetzner.com](https://www.hetzner.com/storage/storage-box).
3. Ajoutez votre remote Hetzner en utilisant des identifiants SFTP ou WebDAV dans RcloneView.
4. Créez votre première tâche de synchronisation ou de sauvegarde vers un autre fournisseur cloud.
5. Planifiez des tâches récurrentes ou effectuez des transferts ponctuels selon vos besoins.

Gérez votre stockage cloud européen en toute confiance—RcloneView gère la complexité pour que vous puissiez vous concentrer sur vos données.

---

**Guides connexes :**

- [Gérer un serveur SFTP — Synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [Connecter un serveur WebDAV — Synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [Gérer OVH Cloud Object Storage — Synchronisation avec RcloneView](https://rcloneview.com/support/blog/manage-ovh-cloud-object-storage-sync-rcloneview)

<CloudSupportGrid />
