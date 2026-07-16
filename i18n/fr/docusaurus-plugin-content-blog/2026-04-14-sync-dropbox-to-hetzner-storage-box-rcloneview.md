---
slug: sync-dropbox-to-hetzner-storage-box-rcloneview
title: "Synchroniser Dropbox vers Hetzner Storage Box — Sauvegarde cloud avec RcloneView"
authors:
  - tayson
description: "Utilisez RcloneView pour synchroniser et sauvegarder vos fichiers Dropbox vers Hetzner Storage Box. Un guide étape par étape pour migrer ou maintenir une copie de sauvegarde de Dropbox vers Hetzner."
keywords:
  - sync Dropbox to Hetzner Storage Box
  - Dropbox Hetzner backup
  - migrate Dropbox to Hetzner
  - Hetzner Storage Box cloud backup
  - rclone Dropbox Hetzner
  - Dropbox to SFTP backup
  - European cloud backup Dropbox
  - RcloneView Dropbox Hetzner
tags:
  - dropbox
  - hetzner
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Dropbox vers Hetzner Storage Box — Sauvegarde cloud avec RcloneView

> RcloneView synchronise Dropbox vers Hetzner Storage Box via SFTP — offrant aux utilisateurs européens une destination de sauvegarde secondaire conforme au RGPD pour leurs fichiers Dropbox.

Hetzner Storage Box est un service de stockage économique hébergé en Allemagne, prenant en charge les accès SFTP, FTP, Samba et WebDAV. Les entreprises et développeurs européens qui utilisent Dropbox pour la collaboration ajoutent souvent Hetzner Storage Box comme cible de sauvegarde secondaire : c'est nettement moins cher pour de gros volumes et cela conserve les données dans la juridiction de l'UE. RcloneView connecte les deux via les backends Dropbox et SFTP de rclone, transformant les synchronisations planifiées de Dropbox vers Hetzner en une simple opération dans l'interface graphique.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurer Dropbox et Hetzner Storage Box

Ajoutez d'abord Dropbox : **onglet Remote → New Remote → Dropbox**, authentifiez-vous via connexion OAuth dans le navigateur. Vos dossiers Dropbox apparaissent immédiatement dans l'Explorer.

Ajoutez Hetzner Storage Box comme distant SFTP : **New Remote → SFTP**. Configurez avec :
- **Host** : `yourboxid.your-storagebox.de`
- **User** : votre nom d'utilisateur Storage Box (affiché dans le panneau Hetzner Robot)
- **Authentication** : clé SSH (recommandé) ou mot de passe
- **Port** : 23 (Hetzner Storage Box utilise le port 23, pas le port standard 22)

Testez la connexion avant d'enregistrer. Une fois les deux distants ajoutés, ouvrez un Explorer en vue partagée pour parcourir Dropbox à gauche et Hetzner à droite.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Dropbox and Hetzner Storage Box SFTP remote in RcloneView" class="img-large img-center" />

## Créer une tâche de synchronisation planifiée

Pour un scénario de sauvegarde continue, créez une tâche de synchronisation dans le Job Manager : la source est votre dossier Dropbox (par ex. `dropbox:/Team/Projects/`), la destination est votre chemin Hetzner (par ex. `hetzner:/backups/dropbox/`). À l'étape 2, réglez les transferts simultanés sur 4–6 — Hetzner Storage Box gère bien les connexions SFTP à ce niveau de concurrence.

Planifiez la tâche pour qu'elle s'exécute chaque nuit à 2h00 (licence PLUS). La synchronisation incrémentale ne copie que les fichiers nouveaux ou modifiés, ce qui maintient des temps de transfert courts après la synchronisation complète initiale. L'historique des tâches enregistre le statut, la taille du transfert et la durée de chaque exécution pour vos archives.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling nightly Dropbox to Hetzner sync in RcloneView" class="img-large img-center" />

## Migration ponctuelle de Dropbox vers Hetzner

Si vous migrez de Dropbox vers Hetzner Storage Box comme emplacement de stockage principal, utilisez une tâche de copie plutôt qu'une synchronisation. La copie transfère tous les fichiers de Dropbox vers Hetzner sans rien supprimer à la source — préservant votre contenu Dropbox pendant la période de transition. Exécutez d'abord le Dry Run pour vérifier le nombre de fichiers et la taille totale du transfert avant de valider.

Pour les comptes Dropbox volumineux de plusieurs centaines de Go, activez la vérification par somme de contrôle à l'étape 2 pour confirmer l'intégrité de chaque fichier après le transfert. La fonction Folder Compare vous permet de vérifier que la migration s'est bien déroulée en comparant côte à côte les structures des dossiers Dropbox et Hetzner une fois la tâche terminée.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Dropbox and Hetzner Storage Box folders after migration in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Dropbox via OAuth et Hetzner Storage Box via SFTP (port 23) dans l'assistant New Remote.
3. Créez une tâche de synchronisation de votre chemin Dropbox vers votre chemin Hetzner dans le Job Manager.
4. Planifiez des synchronisations nocturnes et consultez l'historique des tâches pour les journaux d'audit des transferts.

Synchroniser Dropbox vers Hetzner Storage Box avec RcloneView offre aux équipes européennes une sauvegarde secondaire économique et conforme au RGPD qui s'exécute automatiquement sans aucune intervention manuelle.

---

**Guides connexes :**

- [Monter Hetzner Storage Box et synchroniser vers le cloud avec RcloneView](https://rcloneview.com/support/blog/mount-hetzner-storage-box-sync-cloud-rcloneview)
- [Sauvegarder Dropbox vers Backblaze B2 avec RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [Sauvegarder Dropbox vers AWS S3 avec RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-aws-s3-rcloneview)

<CloudSupportGrid />
