---
slug: manage-seaweedfs-cloud-sync-backup-rcloneview
title: "Gérer le stockage SeaweedFS — Synchroniser et sauvegarder des fichiers avec RcloneView"
authors:
  - alex
description: "Connectez un stockage objet SeaweedFS autohébergé à RcloneView pour le montage, la synchronisation et la sauvegarde multiplateformes — sans ligne de commande."
keywords:
  - SeaweedFS RcloneView
  - stockage SeaweedFS compatible S3
  - GUI stockage objet autohébergé
  - monter SeaweedFS
  - sauvegarde SeaweedFS
  - synchronisation SeaweedFS
  - stockage objet distribué
  - passerelle S3 SeaweedFS
  - gérer le stockage SeaweedFS
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - self-hosted
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage SeaweedFS — Synchroniser et sauvegarder des fichiers avec RcloneView

> Transformez votre cluster SeaweedFS autohébergé en lecteur montable et en cible de synchronisation à part entière, sans toucher à un terminal.

SeaweedFS est un système de stockage distribué rapide qui expose une passerelle compatible S3, ce qui en fait un choix populaire pour les équipes souhaitant un stockage objet sur leur propre matériel plutôt qu'une facture de cloud public. Le problème est que la plupart des déploiements SeaweedFS sont entièrement gérés via des fichiers de configuration et des commandes CLI. RcloneView comble cet écart en traitant votre passerelle SeaweedFS comme n'importe quel autre remote compatible S3, en vous offrant un explorateur de fichiers visuel, des transferts par glisser-déposer et des sauvegardes planifiées par-dessus votre cluster existant.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter SeaweedFS comme remote compatible S3

La passerelle S3 de SeaweedFS parle le même protocole qu'Amazon S3, si bien que RcloneView s'y connecte de la même manière qu'à n'importe quel autre fournisseur compatible S3 : Access Key ID, Secret Access Key, et un Endpoint personnalisé pointant vers l'adresse et le port de votre passerelle. Ouvrez l'onglet Remote > New Remote, choisissez l'option compatible S3 et saisissez l'URL de la passerelle de votre cluster comme endpoint. Comme RcloneView est livré avec une instance rclone intégrée qui communique via son API RC locale, il n'y a ni binaire séparé ni fichier de configuration à modifier à la main — les identifiants que vous saisissez dans l'interface constituent toute la configuration nécessaire.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a new S3-compatible remote for a self-hosted SeaweedFS gateway in RcloneView" class="img-large img-center" />

Ce même flux de travail s'applique que votre cluster SeaweedFS fonctionne sur un serveur personnel, une baie en colocation, ou une VM cloud que vous gérez vous-même — RcloneView se soucie uniquement que la passerelle réponde aux appels de l'API S3.

## Synchroniser et sauvegarder des données entre SeaweedFS et d'autres clouds

Une fois connecté, SeaweedFS se comporte comme n'importe quel autre panneau de l'Explorer de RcloneView, ce qui vous permet de glisser des fichiers entre lui et Google Drive, OneDrive, Backblaze B2 ou un disque local dans la même fenêtre. Pour une protection récurrente, l'assistant Sync en 4 étapes vous permet de configurer une tâche à sens unique depuis votre bucket SeaweedFS vers un second remote, d'ajouter des filtres pour exclure les fichiers temporaires, et d'exécuter d'abord un Dry Run pour prévisualiser exactement ce qui serait copié ou supprimé.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing files between a SeaweedFS bucket and another cloud remote in RcloneView" class="img-large img-center" />

Contrairement aux outils de montage uniquement, RcloneView synchronise et compare aussi les dossiers entre SeaweedFS et n'importe quel autre fournisseur pris en charge, avec la licence FREE.

## Monter SeaweedFS comme lecteur local

Si votre flux de travail repose sur des applications natives lisant et écrivant directement des fichiers, Mount Manager vous permet de connecter votre bucket SeaweedFS comme lecteur local sous Windows, macOS ou Linux. Réglez le mode de cache VFS sur « writes » pour un équilibre entre réactivité et sécurité, ou sur « full » si vous avez besoin d'un accès hors ligne aux fichiers récemment utilisés.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a SeaweedFS remote as a local drive from Mount Manager" class="img-large img-center" />

## Surveiller les transferts et l'historique des tâches

Chaque tâche de synchronisation ou de copie concernant votre remote SeaweedFS apparaît dans l'onglet Transferring avec la progression, la vitesse et le nombre de fichiers en temps réel, et chaque exécution terminée est consignée dans Job History avec la durée, la taille totale et le statut. Cet historique permet de confirmer facilement qu'une sauvegarde planifiée s'est bien exécutée avant d'avoir besoin de s'y fier.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing completed sync runs against a SeaweedFS remote" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Rassemblez la clé d'accès, la clé secrète et l'URL de l'endpoint de votre passerelle SeaweedFS.
3. Créez un nouveau remote compatible S3 dans RcloneView et testez la connexion.
4. Configurez une tâche de synchronisation ou un montage pour commencer à déplacer des données entre SeaweedFS et vos autres remotes.

Le stockage autohébergé ne doit pas forcément se limiter à la ligne de commande — une interface graphique adaptée rend SeaweedFS aussi accessible que n'importe quel cloud commercial.

---

**Guides associés :**

- [Gérer le stockage MinIO autohébergé — Synchronisation et sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/manage-minio-self-hosted-cloud-sync-rcloneview)
- [Centraliser S3, Wasabi et R2 avec RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)
- [Cache VFS et performances de montage dans RcloneView](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)

<CloudSupportGrid />
