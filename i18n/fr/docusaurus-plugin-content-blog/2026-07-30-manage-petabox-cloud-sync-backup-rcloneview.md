---
slug: manage-petabox-cloud-sync-backup-rcloneview
title: "Gérer le stockage Petabox — Synchroniser et sauvegarder des fichiers avec RcloneView"
authors:
  - steve
description: "Connectez le stockage objet compatible S3 Petabox à RcloneView pour la navigation de fichiers multiplateforme, la synchronisation et la sauvegarde automatisée."
keywords:
  - stockage Petabox
  - stockage objet Petabox
  - GUI de stockage compatible S3
  - RcloneView Petabox
  - logiciel de sauvegarde cloud
  - synchroniser Petabox vers le cloud
  - gérer le stockage cloud GUI
  - outil de synchronisation de stockage objet
  - gestionnaire de fichiers multi-cloud
  - configuration des identifiants S3
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage Petabox — Synchroniser et sauvegarder des fichiers avec RcloneView

> Parcourez, synchronisez et sauvegardez des buckets de stockage objet Petabox depuis une interface graphique, au lieu d'éditer manuellement des identifiants S3 dans un fichier de configuration.

Petabox est accessible via le protocole compatible S3 de rclone, ce qui signifie que le connecter nécessite de fournir une Access Key, une Secret Key et une URL de point de terminaison — le genre de configuration facile à mal saisir en ligne de commande. RcloneView transforme ce processus en un formulaire guidé et le combine avec un explorateur de fichiers double panneau complet, un moteur de synchronisation et un planificateur de tâches, afin que les équipes stockant déjà des données sur Petabox puissent le gérer aux côtés de tous les autres distants dans une seule fenêtre.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Petabox en tant que distant compatible S3

Ajouter Petabox dans RcloneView utilise le même flux de saisie d'identifiants que n'importe quel autre service compatible S3 : ouvrez l'onglet Remote > New Remote, choisissez le type compatible S3, puis saisissez l'Access Key ID, la Secret Access Key et le point de terminaison Petabox. Si votre intégration Petabox fonctionne déjà via un démon rclone partagé sur un serveur, Connect Manager peut faire pointer RcloneView vers cette instance rclone externe au lieu d'utiliser celle intégrée.

Une fois enregistré, le distant apparaît comme son propre onglet dans le panneau Explorer, à côté de tout autre stockage cloud ou local déjà configuré. Un distant Alias peut raccourcir un chemin de bucket profondément imbriqué en un nom court, plus facile à naviguer au quotidien.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Petabox S3-compatible remote in RcloneView" class="img-large img-center" />

## Parcourir, synchroniser et sauvegarder les données Petabox

Une fois le distant connecté, la disposition double panneau du File Explorer permet de comparer facilement ce qui se trouve déjà sur Petabox avec un dossier local ou un autre distant cloud. Le glisser-déposer entre panneaux déclenche une copie lorsque la source et la destination sont des distants différents, et le menu contextuel couvre renommer, supprimer, obtenir la taille et téléchargement/envoi pour les opérations de fichiers courantes.

Pour les sauvegardes récurrentes, l'assistant Sync en quatre étapes gère la source et la destination, la concurrence de transfert et les règles de filtrage, y compris des options comme l'âge maximal des fichiers et des filtres prédéfinis pour les types de médias ou de documents. Connectez des services compatibles S3 comme Petabox avec un accès complet en lecture/écriture dès la licence FREE — aucune mise à niveau de licence n'est nécessaire simplement pour réécrire des données dans le bucket. La synchronisation 1:N peut refléter le même bucket Petabox vers plusieurs destinations en une seule tâche, utile lorsqu'une sauvegarde doit atterrir à la fois sur un disque local et un second fournisseur cloud.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job between Petabox storage and another remote" class="img-large img-center" />

## Automatiser les sauvegardes récurrentes de Petabox

Job Manager regroupe chaque tâche de synchronisation, copie ou déplacement dans une seule liste, chaque exécution étant consignée dans Job History avec le statut, la taille du transfert et le nombre de fichiers. Dry Run prévisualise exactement quels fichiers seraient copiés ou supprimés avant de lancer un transfert réel — utile à vérifier avant une première grande synchronisation vers un nouveau bucket Petabox.

Les utilisateurs de la licence PLUS peuvent attacher une planification de type crontab à une tâche afin que les sauvegardes Petabox s'exécutent automatiquement à intervalle récurrent, avec une option de simulation pour prévisualiser les prochaines exécutions avant l'enregistrement.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for Petabox storage" class="img-large img-center" />

## Monter Petabox comme un lecteur local

Le stockage Petabox peut également être monté comme un lecteur virtuel, permettant à d'autres applications de bureau de lire et d'écrire le contenu du bucket comme s'il s'agissait de fichiers locaux. La configuration de montage inclut le mode cache VFS (par défaut : writes), les limites de taille de cache et le mode lecture seule, et les montages peuvent être lancés depuis la barre d'outils du panneau du distant ou depuis le Mount Manager dédié.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a Petabox bucket as a local drive in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez l'onglet Remote > New Remote et sélectionnez l'option compatible S3 pour saisir vos identifiants Petabox et le point de terminaison.
3. Utilisez Folder Compare ou le glisser-déposer pour transférer les données existantes vers Petabox, puis configurez une tâche Sync pour des sauvegardes continues.
4. Ajoutez la tâche à Job Manager et, avec PLUS, attachez une planification pour que les sauvegardes s'exécutent sans intervention manuelle.

Une fois le distant configuré, le stockage Petabox se comporte comme n'importe quelle autre connexion dans RcloneView — consultable, synchronisable, et prêt à être sauvegardé selon un calendrier.

---

**Guides connexes :**

- [Gérer le stockage Outscale — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-outscale-cloud-sync-backup-rcloneview)
- [Gérer le stockage objet Scaleway — Synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Gérer le stockage Selectel — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-selectel-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
