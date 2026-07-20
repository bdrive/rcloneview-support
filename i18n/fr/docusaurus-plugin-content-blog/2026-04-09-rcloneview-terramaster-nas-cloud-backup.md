---
slug: rcloneview-terramaster-nas-cloud-backup
title: "Utiliser RcloneView avec un NAS TerraMaster pour la sauvegarde et la synchronisation cloud"
authors:
  - tayson
description: "Configurez RcloneView avec un NAS TerraMaster pour synchroniser et sauvegarder les données du NAS vers un stockage cloud. Connectez-vous via SFTP ou SMB et automatisez les sauvegardes vers S3, B2 ou Google Drive."
keywords:
  - rcloneview
  - sauvegarde cloud nas terramaster
  - synchronisation cloud terramaster
  - sauvegarde terramaster vers le cloud
  - terramaster rclone
  - interface graphique de sauvegarde cloud nas
  - terramaster google drive
  - sauvegarde s3 terramaster
  - synchronisation de fichiers terramaster
  - transfert nas vers le cloud
tags:
  - RcloneView
  - nas
  - platform
  - cloud-backup
  - backup
  - guide
  - sftp
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Utiliser RcloneView avec un NAS TerraMaster pour la sauvegarde et la synchronisation cloud

> Les NAS TerraMaster offrent un stockage réseau abordable, mais leurs options de sauvegarde cloud intégrées sont limitées — **RcloneView** étend votre TerraMaster avec une sauvegarde multi-cloud, une synchronisation et une gestion de fichiers via une interface graphique visuelle.

TerraMaster fabrique des NAS populaires fonctionnant sous TOS (TerraMaster Operating System). Bien que TOS inclue des fonctionnalités de synchronisation cloud basiques pour quelques fournisseurs, il ne prend pas en charge toute la gamme de services de stockage cloud dont les entreprises et les utilisateurs avancés ont besoin. RcloneView se connecte à votre NAS TerraMaster via SFTP ou SMB et le relie à plus de 70 fournisseurs cloud — permettant des sauvegardes automatisées, une synchronisation cloud vers NAS et une gestion de fichiers multi-cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi ajouter une sauvegarde cloud à votre TerraMaster

Un NAS offre un stockage local rapide et une redondance RAID, mais il ne protège pas contre :

- **Les sinistres au niveau du site** : un incendie, une inondation, un vol ou une surtension peuvent détruire le NAS et tous ses disques simultanément. Le RAID protège contre la défaillance d'un disque, pas contre la perte du site.
- **Les ransomwares** : si un ransomware atteint votre réseau, il peut chiffrer les partages NAS. Les sauvegardes cloud (en particulier vers un stockage immuable) fournissent un point de récupération.
- **Les pannes matérielles au-delà du RAID** : une défaillance de la carte contrôleur, un dommage à l'alimentation ou une corruption du firmware peuvent rendre le NAS entièrement inaccessible, quel que soit le niveau RAID.

La sauvegarde cloud offre une redondance géographique qu'un NAS local ne peut pas fournir. RcloneView automatise cette sauvegarde tout en conservant votre flux de travail principal sur le NAS local rapide.

## Connecter RcloneView à votre TerraMaster

RcloneView s'exécute sur votre bureau ou une machine distincte (pas sur le TerraMaster lui-même) et se connecte au NAS via le réseau. Deux méthodes de connexion sont disponibles :

### Connexion SFTP

Activez SSH sur votre TerraMaster (TOS Control Panel > Services > SSH). Ajoutez ensuite un distant SFTP dans le gestionnaire de distants de RcloneView :

- Hôte : l'adresse IP de votre TerraMaster (par exemple, `192.168.1.100`)
- Port : 22 (port SSH par défaut)
- Nom d'utilisateur : votre nom d'utilisateur administrateur TOS
- Mot de passe ou clé SSH : vos identifiants TOS

SFTP fournit des transferts de fichiers chiffrés et est la méthode recommandée pour accéder aux données du NAS depuis RcloneView.

### Connexion SMB

Si vos partages TerraMaster sont accessibles via SMB (partage de fichiers Windows), ajoutez un distant SMB dans RcloneView. Cela utilise le format de chemin réseau Windows standard et est pratique si vous avez déjà configuré des partages SMB.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting RcloneView to TerraMaster NAS via SFTP" class="img-large img-center" />

## Sauvegarder les données du NAS vers un stockage cloud

Une fois connecté, configurez une tâche de sauvegarde depuis votre TerraMaster vers une destination cloud :

1. Ouvrez le distant SFTP TerraMaster dans le panneau de gauche.
2. Ouvrez votre destination cloud (AWS S3, Backblaze B2, Google Drive, Wasabi) dans le panneau de droite.
3. Naviguez jusqu'aux dossiers que vous souhaitez sauvegarder sur le NAS.
4. Créez une tâche de synchronisation qui copie les données du NAS vers le cloud.

La détection des différences (delta) de RcloneView garantit que seuls les fichiers modifiés depuis la dernière sauvegarde sont transférés. Pour un NAS contenant des téraoctets de données, la sauvegarde initiale peut prendre plusieurs jours, mais les sauvegardes quotidiennes suivantes ne transfèrent que les changements du jour — se terminant généralement en quelques minutes.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Backing up TerraMaster NAS to cloud storage in RcloneView" class="img-large img-center" />

## Choisir une destination de sauvegarde cloud

Pour la sauvegarde NAS, un stockage économique sans frais de sortie est idéal :

- **Backblaze B2** : 6 $/To/mois, sortie gratuite grâce au partenariat avec Cloudflare. Tarification simple, adaptée aux sauvegardes directes.
- **Wasabi** : 6,99 $/To/mois, sans frais de sortie. Une durée de stockage minimale de 90 jours s'applique.
- **AWS S3 Glacier Deep Archive** : 0,99 $/To/mois pour les données d'archivage. La récupération prend des heures et entraîne des frais par Go récupéré, mais les coûts de stockage sont les plus bas disponibles.
- **Google Drive** : pratique si votre équipe utilise déjà Google Workspace. Les coûts de stockage sont plus élevés, mais l'intégration est transparente.

Pour la plupart des utilisateurs TerraMaster, Backblaze B2 offre le meilleur équilibre entre coût, simplicité et vitesse de récupération.

## Planifier des sauvegardes automatisées

Configurez le planificateur de RcloneView pour exécuter automatiquement les sauvegardes du NAS :

- **Incrémentiel quotidien** : synchronisez les fichiers modifiés du NAS vers le cloud chaque nuit. Utilisation minimale de la bande passante après l'amorçage initial.
- **Vérification complète hebdomadaire** : exécutez une opération de comparaison chaque semaine pour vérifier que tous les fichiers du NAS correspondent à la sauvegarde cloud. Cela permet de détecter toute divergence due à des transferts interrompus ou à une corruption silencieuse des données.

Définissez des limites de bande passante pour éviter que le trafic de sauvegarde ne sature votre réseau pendant les heures de bureau. Planifiez les sauvegardes pendant la nuit ou en heures creuses.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling TerraMaster NAS backup in RcloneView" class="img-large img-center" />

## Synchroniser les données cloud vers votre TerraMaster

Le flux de travail inverse est également utile : récupérer des données cloud vers votre NAS pour un accès local. Si votre équipe collabore sur Google Drive mais a besoin d'un accès local rapide aux fichiers de projet, synchronisez les dossiers Drive concernés vers votre TerraMaster. Modifiez les fichiers localement à la vitesse du NAS, et RcloneView synchronise les modifications vers le cloud selon la planification.

Cette approche hybride vous offre les avantages de collaboration du stockage cloud avec les performances d'un accès NAS local.

## Chiffrer les sauvegardes du NAS

Pour les données sensibles, utilisez le distant crypt de RcloneView pour chiffrer les fichiers avant qu'ils ne quittent votre réseau. Le chiffrement s'effectue sur votre machine de bureau (où RcloneView s'exécute) avant l'envoi vers le cloud. Même si le fournisseur cloud est compromis, les données de sauvegarde de votre NAS restent illisibles.

## Surveillance et vérification

L'historique des tâches de RcloneView enregistre chaque exécution de sauvegarde avec des statistiques : fichiers transférés, fichiers ignorés, octets totaux, temps écoulé et éventuelles erreurs. Consultez régulièrement l'historique pour confirmer que les sauvegardes se terminent avec succès. Utilisez la fonction de comparaison périodiquement pour vérifier que la sauvegarde cloud correspond au contenu du NAS.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Monitoring TerraMaster NAS backup history in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Activez SSH sur votre TerraMaster et ajoutez-le comme distant SFTP dans RcloneView.
3. Ajoutez une destination cloud (B2, S3, Google Drive ou Wasabi).
4. Créez et planifiez une tâche de sauvegarde quotidienne du NAS vers le cloud.
5. Vérifiez périodiquement les sauvegardes avec la fonction de comparaison.

Votre NAS TerraMaster gère le stockage local et le partage. RcloneView ajoute la couche de sauvegarde cloud qui protège vos données contre les sinistres au niveau du site, les ransomwares et les pannes matérielles au-delà du RAID.

---

**Guides connexes :**

- [Parcourir et gérer le stockage distant](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Historique des tâches](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history)

<CloudSupportGrid />
