---
slug: manage-hidrive-cloud-sync-backup-rcloneview
title: "Gérer le stockage HiDrive — Synchronisation et sauvegarde de fichiers avec RcloneView"
authors:
  - tayson
description: "Découvrez comment connecter, synchroniser et sauvegarder votre stockage cloud HiDrive avec RcloneView. Gérez tous vos fichiers HiDrive depuis une interface graphique, sans aucune commande CLI."
keywords:
  - HiDrive RcloneView
  - HiDrive cloud sync
  - HiDrive backup
  - STRATO HiDrive management
  - HiDrive file transfer
  - rclone HiDrive GUI
  - HiDrive sync tool
  - cloud storage management HiDrive
tags:
  - RcloneView
  - hidrive
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage HiDrive — Synchronisation et sauvegarde de fichiers avec RcloneView

> RcloneView apporte un contrôle complet en interface graphique pour HiDrive, vous permettant de parcourir, synchroniser, sauvegarder et planifier des transferts sans jamais ouvrir de ligne de commande.

HiDrive, proposé par STRATO et opéré à travers des centres de données européens, est un choix populaire pour les utilisateurs soucieux de la confidentialité et les entreprises soumises au RGPD. Gérer HiDrive de manière programmatique avec rclone a toujours été possible, mais RcloneView enveloppe cette puissance dans une interface claire — rendant les transferts de fichiers, les sauvegardes planifiées et les synchronisations multi-cloud accessibles à tous, sur Windows, macOS ou Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter HiDrive à RcloneView

Ajouter HiDrive comme distant dans RcloneView est simple. Cliquez sur **Remote tab → New Remote**, faites défiler jusqu'à HiDrive dans la liste des fournisseurs, puis suivez la connexion OAuth via le navigateur. RcloneView ouvre votre navigateur par défaut, vous vous authentifiez avec vos identifiants STRATO, et le distant est enregistré automatiquement — aucune copie de jeton n'est nécessaire.

Une fois connecté, vos dossiers HiDrive apparaissent instantanément dans le panneau Explorer. Vous pouvez ouvrir plusieurs onglets pour comparer un dossier local à votre sauvegarde HiDrive, ou diviser la vue pour afficher HiDrive à côté d'un autre cloud comme Amazon S3.

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive as a new remote in RcloneView" class="img-large img-center" />

HiDrive prend en charge les opérations de fichiers standard via RcloneView : téléversement, téléchargement, renommage, suppression, création de dossier et génération de liens publics. Glissez-déposez des fichiers depuis l'Explorateur Windows directement dans le panneau Explorer de HiDrive pour les téléverser, ou glissez entre les panneaux pour déclencher une copie de cloud à cloud.

## Planifier des sauvegardes HiDrive automatisées

Pour les entreprises stockant des archives de projets ou des livrables clients sur HiDrive, les sauvegardes automatisées sont essentielles. Le Job Manager de RcloneView (licence PLUS) vous permet de configurer des planifications de type crontab — par exemple, une synchronisation nocturne d'un dossier local `D:\Projects` vers `hidrive:Backups/Projects` tous les jours à 2h00.

L'assistant de synchronisation en 4 étapes vous guide à travers la sélection de la source et de la destination, les paramètres de concurrence des transferts, les filtres de fichiers et la planification. Activez la vérification par somme de contrôle (checksum) à l'étape 2 pour confirmer l'intégrité des fichiers octet par octet plutôt que de se fier uniquement aux dates de modification — important lors d'une synchronisation vers un serveur européen où les différences de fuseau horaire peuvent provoquer de fausses incohérences.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting up a scheduled HiDrive backup job in RcloneView" class="img-large img-center" />

Utilisez l'option Dry Run avant la première synchronisation réelle pour prévisualiser exactement quels fichiers seront copiés ou supprimés. Ceci est particulièrement précieux lors de la mise en place d'une synchronisation à sens unique où les fichiers de destination peuvent être écrasés.

## Surveiller les transferts et l'historique des tâches

L'onglet **Transferring** en bas de RcloneView vous donne une visibilité en temps réel sur les transferts HiDrive actifs : nombre de fichiers, vitesse de transfert, octets déplacés et temps écoulé. Si une tâche échoue en raison d'un problème réseau, RcloneView relance automatiquement (par défaut : 3 tentatives).

L'onglet **Job History** conserve un journal complet des exécutions passées — type d'exécution (manuel ou planifié), heure de début, durée, statut et taille totale transférée. Pour les équipes de conformité qui doivent démontrer une activité régulière de protection des données, cette piste d'audit est immédiatement utile.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing HiDrive backup job history in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez RcloneView et cliquez sur **Remote tab → New Remote**, sélectionnez HiDrive, puis complétez la connexion OAuth.
3. Utilisez le panneau Explorer pour parcourir vos dossiers HiDrive et vérifier la connexion.
4. Ouvrez le **Job Manager**, créez une nouvelle tâche de synchronisation depuis votre disque local vers HiDrive, puis définissez une planification.

Avec RcloneView, HiDrive devient un élément entièrement géré de votre stratégie de sauvegarde — planifié, surveillé et vérifié automatiquement.

---

**Guides connexes :**

- [Gérer le stockage OneDrive — Synchronisation et sauvegarde de fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Gérer Jottacloud — Synchronisation et sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Automatiser les sauvegardes cloud quotidiennes avec RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
