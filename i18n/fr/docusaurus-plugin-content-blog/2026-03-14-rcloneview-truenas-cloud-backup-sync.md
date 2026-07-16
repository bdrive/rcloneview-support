---
slug: rcloneview-truenas-cloud-backup-sync
title: "Utiliser RcloneView sur TrueNAS pour la sauvegarde cloud et la synchronisation multi-cloud"
authors:
  - tayson
description: "TrueNAS est conçu pour le stockage local. Ajoutez RcloneView pour l'étendre au cloud — sauvegardez vos datasets sur S3, synchronisez vos pools avec Google Drive et gérez le stockage multi-cloud depuis votre NAS."
keywords:
  - truenas cloud backup
  - truenas rclone
  - truenas cloud sync
  - truenas s3 backup
  - truenas google drive
  - truenas offsite backup
  - truenas rcloneview
  - truenas cloud storage
  - freenas cloud sync
  - truenas multi cloud
tags:
  - nas
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Utiliser RcloneView sur TrueNAS pour la sauvegarde cloud et la synchronisation multi-cloud

> TrueNAS offre un stockage local ultra-fiable grâce à ZFS. Mais le stockage local seul ne constitue pas une stratégie de sauvegarde. Ajoutez RcloneView pour synchroniser les datasets de votre NAS vers le cloud avec un gestionnaire de fichiers visuel.

TrueNAS (anciennement FreeNAS) est l'un des systèmes d'exploitation NAS les plus populaires, reconnu pour l'intégrité des données offerte par ZFS. Mais ZFS protège contre les pannes de disque, pas contre les incendies, les vols, les ransomwares ou les sinistres touchant l'ensemble du site. Pour une véritable protection des données, il faut des sauvegardes hors site. RcloneView ajoute une gestion cloud visuelle à votre installation TrueNAS, facilitant la synchronisation des datasets vers plus de 70 fournisseurs cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi TrueNAS + RcloneView ?

TrueNAS inclut une fonctionnalité basique de Cloud Sync Tasks, mais sa portée est limitée et son dépannage difficile. RcloneView offre :

- **Navigation visuelle des fichiers** — visualisez vos fichiers TrueNAS à côté de votre stockage cloud
- **Plus de 70 fournisseurs cloud** — bien plus que ce que TrueNAS Cloud Sync prend en charge nativement
- **Comparaison de dossiers** — vérifiez que vos sauvegardes sont complètes et exactes
- **Planification de tâches** — planification flexible avec supervision
- **Sauvegardes chiffrées** — remotes crypt pour un chiffrement à connaissance nulle

## Options de déploiement

### Conteneur Docker (recommandé)

Exécutez RcloneView en tant que conteneur Docker sur TrueNAS SCALE. C'est l'approche la plus propre — isolée du système hôte, avec des mises à jour simplifiées.

### Installation directe

Sur TrueNAS SCALE (basé sur Linux), vous pouvez installer RcloneView directement. TrueNAS CORE (basé sur FreeBSD) doit utiliser l'approche Docker via une VM ou un jail.

## Workflows clés

### Sauvegarder les datasets vers S3 ou B2

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="TrueNAS to cloud backup" class="img-large img-center" />

Parcourez vos datasets TrueNAS dans un panneau, le stockage cloud dans l'autre. Créez des tâches de synchronisation qui sauvegardent les datasets critiques vers Backblaze B2, AWS S3 ou Wasabi.

### Planifier des sauvegardes nocturnes

Configurez des sauvegardes nocturnes automatisées pour que votre copie cloud reste à jour :

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule TrueNAS backup" class="img-large img-center" />

### Vérifier l'intégrité des sauvegardes

Les checksums ZFS protègent les données locales. Utilisez la comparaison de dossiers pour vérifier que les sauvegardes cloud correspondent à votre NAS :

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify TrueNAS backup" class="img-large img-center" />

### Chiffrer avant l'envoi

Protégez les données sensibles de votre NAS avec des remotes crypt. Votre fournisseur de sauvegarde ne peut pas lire les fichiers — vous seul détenez les clés de chiffrement.

### Redondance multi-cloud

Sauvegardez vers deux fournisseurs ou plus simultanément. Si l'un d'eux subit une panne, vos données restent en sécurité chez l'autre.

## Stratégie de sauvegarde recommandée

| Type de données | Niveau cloud | Planification |
|-----------|-----------|----------|
| Documents critiques | S3 Standard | Toutes les 6 heures |
| Bibliothèque multimédia | Backblaze B2 | Chaque nuit |
| Archives | S3 Glacier | Hebdomadaire |

## Pour commencer

1. **Installez RcloneView** via Docker sur TrueNAS SCALE.
2. **Ajoutez vos comptes cloud** dans le gestionnaire de remotes.
3. **Créez des tâches de sauvegarde** pour les datasets critiques.
4. **Planifiez et vérifiez** avec la comparaison de dossiers.

ZFS protège vos données localement. RcloneView les protège partout ailleurs.

---

**Guides associés :**

- [Exécuter RcloneView dans Docker](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [Sauvegarder un NAS vers plusieurs clouds](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)
- [Chiffrer les sauvegardes cloud](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
