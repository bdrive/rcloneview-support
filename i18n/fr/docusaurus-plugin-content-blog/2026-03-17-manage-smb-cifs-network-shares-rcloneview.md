---
slug: manage-smb-cifs-network-shares-rcloneview
title: "Gérer les partages réseau SMB/CIFS — Synchroniser les serveurs de fichiers d'entreprise vers le cloud avec RcloneView"
authors:
  - tayson
description: "Les partages réseau SMB constituent l'épine dorsale des serveurs de fichiers d'entreprise. Découvrez comment les connecter à RcloneView et les synchroniser avec Google Drive, S3 ou tout autre cloud pour la sauvegarde et l'accès à distance."
keywords:
  - synchronisation cloud smb
  - sauvegarde cloud cifs
  - partage réseau vers cloud
  - smb vers google drive
  - synchronisation cloud serveur de fichiers
  - sauvegarde smb vers s3
  - partage windows cloud
  - sauvegarde cloud lecteur réseau
  - smb rclone
  - serveur de fichiers d'entreprise cloud
tags:
  - smb
  - nas
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer les partages réseau SMB/CIFS — Synchroniser les serveurs de fichiers d'entreprise vers le cloud avec RcloneView

> Le serveur de fichiers de votre entreprise fonctionne depuis des années. Tout le monde y accède via des lecteurs réseau mappés. Mais il n'a aucune sauvegarde délocalisée, et les travailleurs à distance ne peuvent pas y accéder depuis chez eux. La synchronisation cloud résout ces deux problèmes.

SMB/CIFS (Server Message Block / Common Internet File System) est le protocole derrière chaque dossier partagé Windows, chaque partage de fichiers NAS et chaque serveur de fichiers d'entreprise. Il est fiable et rapide sur les réseaux locaux, mais il n'a pas été conçu pour l'intégration cloud ou l'accès à distance. RcloneView comble cet écart — connectez vos partages SMB et synchronisez-les avec n'importe quel fournisseur cloud pour la sauvegarde, l'accès à distance et la reprise après sinistre.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter des partages SMB à RcloneView

<img src="/support/images/en/blog/new-remote.png" alt="Add SMB remote" class="img-large img-center" />

Ajoutez votre partage SMB comme distant en utilisant l'adresse du serveur, le nom du partage et les identifiants. Vos partages réseau apparaissent dans l'explorateur à deux volets.

## Flux de travail clés

### Sauvegarder le serveur de fichiers vers le cloud

Protégez le serveur de fichiers de votre entreprise avec des sauvegardes cloud vers S3, B2 ou Google Drive :

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="File server to cloud backup" class="img-large img-center" />

### Activer l'accès à distance

Synchronisez le contenu du serveur de fichiers vers Google Drive ou OneDrive afin que les travailleurs à distance puissent accéder aux fichiers de n'importe où sans VPN.

### Planifier des sauvegardes nocturnes

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule file server backup" class="img-large img-center" />

Exécutez les sauvegardes pendant la nuit lorsque le réseau du bureau est calme.

### Vérifier l'intégrité de la sauvegarde

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify file server backup" class="img-large img-center" />

Comparez le partage SMB avec la copie cloud pour vous assurer que rien n'a été oublié.

### Migrer vers le cloud

Vous envisagez de mettre le serveur de fichiers à la retraite ? Transférez tout vers le stockage cloud progressivement, service par service.

## Conseils de performance

- **Exécutez les sauvegardes en dehors des heures de pointe** pour éviter la congestion du réseau
- **Utilisez la synchronisation incrémentielle** — seuls les fichiers modifiés sont transférés à chaque exécution
- **Définissez une concurrence appropriée** — 2 à 4 transferts pour les serveurs partagés
- **Excluez les fichiers temporaires** — filtrez `~$*`, `.tmp`, `Thumbs.db`

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez votre partage SMB** comme distant.
3. **Ajoutez une destination cloud** pour la sauvegarde.
4. **Créez des tâches de synchronisation** et planifiez-les.
5. **Vérifiez régulièrement** avec la comparaison de dossiers.

Votre serveur de fichiers mérite un filet de sécurité cloud.

---

**Guides connexes :**

- [Monter SFTP/SMB comme lecteur local](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [Monter et synchroniser des systèmes de fichiers distants](https://rcloneview.com/support/blog/mount-sync-remote-file-systems-rcloneview)
- [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
