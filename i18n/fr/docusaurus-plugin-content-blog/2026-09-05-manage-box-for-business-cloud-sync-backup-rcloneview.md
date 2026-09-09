---
slug: manage-box-for-business-cloud-sync-backup-rcloneview
title: "Gérer Box for Business — Synchroniser et sauvegarder des fichiers avec RcloneView"
authors:
  - tayson
description: "Connectez Box for Business à RcloneView pour parcourir, synchroniser, monter et sauvegarder des fichiers cloud d'entreprise aux côtés de plus de 90 autres fournisseurs."
keywords:
  - Box for Business
  - stockage entreprise Box
  - RcloneView
  - synchronisation cloud entreprise
  - gestion du stockage cloud
  - logiciel de sauvegarde cloud
  - box_sub_type enterprise
  - gestion de fichiers multi-cloud
  - stockage cloud pour entreprise
  - outil de comparaison de dossiers
tags:
  - RcloneView
  - box
  - enterprise
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer Box for Business — Synchroniser et sauvegarder des fichiers avec RcloneView

> Traitez le compte Box for Business de votre organisation comme n'importe quel autre disque — parcourez, synchronisez, montez et sauvegardez-le depuis une seule application de bureau.

Les comptes Box for Business contiennent souvent des années de fichiers partagés entre départements, répartis dans des dizaines de dossiers d'équipe imbriqués, et le personnel IT a besoin d'un moyen fiable d'inspecter, de déplacer et de protéger ce contenu sans vivre en permanence dans un onglet de navigateur. RcloneView se connecte à Box for Business via la même connexion OAuth que celle utilisée pour les comptes Box personnels, puis applique l'indicateur de configuration spécifique à l'entreprise afin que l'application puisse voir la structure complète des dossiers de votre organisation. Une fois connecté, le compte se comporte comme n'importe quel autre distant dans les outils d'explorateur, de synchronisation et de montage de RcloneView, la synchronisation et la comparaison de dossiers étant déjà disponibles avec la licence FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurer votre distant Box for Business

Créez un nouveau distant dans RcloneView et choisissez Box — l'application ouvrira votre navigateur pour la connexion OAuth standard, aucune clé API ni saisie manuelle de jeton n'est donc nécessaire. Connectez-vous avec vos identifiants Box professionnels pour autoriser la connexion.

Les comptes Box for Business nécessitent un réglage supplémentaire par rapport à une connexion Box personnelle : `box_sub_type = enterprise`, saisi dans la configuration avancée du distant. Cela indique à rclone de consulter la structure d'équipe partagée de l'organisation plutôt qu'un seul compte personnel, ce qui permet d'afficher les dossiers de toute l'entreprise dans le panneau explorateur de RcloneView.

<img src="/support/images/en/blog/new-remote.png" alt="Création d'un nouveau distant Box for Business dans RcloneView" class="img-large img-center" />

Si vous gérez plusieurs comptes Box for Business dans différents départements, le Remote Manager garde chacun séparé afin que vous puissiez modifier les identifiants ou l'indicateur enterprise indépendamment.

## Comparer et synchroniser les dossiers d'entreprise

Avant de migrer un département depuis un ancien serveur de fichiers ou de consolider des dossiers d'équipe en double, utilisez Folder Compare pour voir exactement ce qui diffère entre votre dossier Box for Business et un emplacement cible. La vue de comparaison filtre les résultats par présent uniquement à gauche, présent uniquement à droite, identique et différent, afin que vous ne copiiez que ce qui manque au lieu de tout retélécharger.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Comparaison et synchronisation d'un dossier Box for Business avec un autre distant cloud" class="img-large img-center" />

Pour une protection continue, une tâche de synchronisation unidirectionnelle maintient à jour une copie secondaire des dossiers Box for Business critiques sans toucher à la source, et un dry run montre exactement quels fichiers seront copiés ou supprimés avant que quoi que ce soit ne soit réellement déplacé.

## Planifier des sauvegardes et surveiller les tâches

Le Job Manager vous permet de configurer une tâche de synchronisation, de copie ou 1:N qui reflète le même contenu Box for Business vers deux destinations simultanément — par exemple un NAS local et un bucket compatible S3, de sorte qu'une seule tâche de synchronisation réponde à la fois à l'exigence de sauvegarde sur site et hors site. Job History enregistre ensuite l'heure de début, la durée, le statut et le nombre de fichiers pour chaque exécution, ce qui est utile lorsqu'un administrateur doit confirmer qu'une sauvegarde nocturne s'est réellement terminée.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planification d'une tâche de sauvegarde récurrente Box for Business dans RcloneView" class="img-large img-center" />

Les utilisateurs de la licence PLUS peuvent automatiser cela davantage grâce à une planification de type crontab, afin que les sauvegardes s'exécutent pendant la nuit sans que personne n'ait à les déclencher manuellement.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez un nouveau distant Box et terminez la connexion OAuth avec votre compte professionnel.
3. Modifiez les paramètres avancés du distant et définissez `box_sub_type = enterprise` pour déverrouiller les dossiers de l'entreprise.
4. Configurez une tâche de synchronisation ou un montage pour commencer à gérer votre contenu Box for Business.

Une fois que votre compte Box entreprise se trouve aux côtés de tous les autres distants dans une seule interface, la gestion quotidienne des fichiers et les sauvegardes de reprise après sinistre cessent d'être deux flux de travail distincts.

---

**Guides associés :**

- [Gérer le stockage Box — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Comment migrer de Box vers SharePoint ou OneDrive — Migration cloud d'entreprise avec RcloneView](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)
- [Monter le stockage Box comme lecteur réseau avec RcloneView pour un accès d'équipe sans friction](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />
