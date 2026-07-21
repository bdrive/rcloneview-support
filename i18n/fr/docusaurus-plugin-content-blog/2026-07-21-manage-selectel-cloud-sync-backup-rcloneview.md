---
slug: manage-selectel-cloud-sync-backup-rcloneview
title: "Gérer le stockage Selectel — Synchroniser et sauvegarder des fichiers avec RcloneView"
authors:
  - alex
description: "Connectez Selectel Object Storage à RcloneView pour parcourir, synchroniser, monter et sauvegarder vos fichiers compatibles S3 sous Windows, macOS et Linux."
keywords:
  - stockage Selectel
  - Selectel Object Storage
  - GUI de stockage compatible S3
  - RcloneView Selectel
  - logiciel de sauvegarde cloud
  - synchroniser Selectel avec le cloud
  - gérer le stockage cloud via une interface graphique
  - outil de synchronisation de stockage d'objets
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

# Gérer le stockage Selectel — Synchroniser et sauvegarder des fichiers avec RcloneView

> Parcourez, synchronisez et sauvegardez des buckets Selectel Object Storage depuis une interface graphique, au lieu de modifier manuellement des identifiants S3 dans un fichier de configuration.

Selectel Object Storage est accessible via le protocole compatible S3 de rclone, ce qui signifie que la connexion nécessite de saisir correctement, dès le premier essai, une clé d'accès, une clé secrète et un point de terminaison. RcloneView transforme cette configuration en un formulaire guidé et l'associe à un explorateur de fichiers complet, un moteur de synchronisation et un planificateur de tâches, afin que les équipes qui stockent déjà leurs données sur Selectel puissent les gérer de la même manière que n'importe quel autre remote, dans une seule fenêtre.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Selectel en tant que remote compatible S3

L'ajout de Selectel dans RcloneView suit le même flux de saisie des identifiants que celui utilisé pour les autres services compatibles S3 : ouvrez l'onglet Remote > New Remote, choisissez l'option compatible S3, puis saisissez l'Access Key ID, la Secret Access Key et le point de terminaison Selectel. Connect Manager permet également à RcloneView de pointer vers une instance rclone externe, si votre intégration Selectel fonctionne déjà via un daemon rclone partagé sur un serveur plutôt que via le rclone intégré.

Une fois enregistré, le remote apparaît sous forme d'onglet dédié dans le panneau Explorer, aux côtés de tout autre stockage cloud ou local déjà configuré. Un remote de type Alias peut raccourcir des chemins de bucket profondément imbriqués en un nom court, plus facile à parcourir au quotidien.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Selectel S3-compatible remote in RcloneView" class="img-large img-center" />

## Parcourir, synchroniser et sauvegarder les données Selectel

Une fois le remote connecté, l'affichage à deux panneaux du File Explorer permet de comparer côte à côte le contenu de Selectel avec un dossier local ou un autre remote cloud. Faire glisser des fichiers entre deux remotes différents déclenche une copie, et le menu contextuel couvre le renommage, la suppression, le calcul de taille ainsi que le téléchargement/l'envoi pour la gestion courante des fichiers.

Pour les sauvegardes récurrentes, l'assistant Sync guide en quatre étapes le choix de la source et de la destination, la concurrence de transfert et les règles de filtrage, avec des options telles que l'ancienneté maximale des fichiers et des filtres prédéfinis pour les types média ou document. Vous pouvez connecter des services compatibles S3 comme Selectel avec un accès complet en lecture/écriture dès la licence FREE — aucune mise à niveau n'est nécessaire pour réécrire des données dans le bucket. La synchronisation 1:N peut répliquer le même bucket Selectel vers plusieurs destinations en une seule tâche, utile lorsqu'une sauvegarde doit se retrouver à la fois sur un disque local et sur un second remote cloud.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job between Selectel storage and another remote" class="img-large img-center" />

## Automatiser les sauvegardes récurrentes de Selectel

Job Manager regroupe chaque tâche de synchronisation, de copie ou de déplacement dans une seule liste, et chaque exécution est consignée dans Job History avec son statut, la taille transférée et le nombre de fichiers. Dry Run permet de prévisualiser précisément quels fichiers seraient copiés ou supprimés avant qu'un transfert réel ne s'exécute — une vérification utile avant la première synchronisation volumineuse vers un nouveau bucket Selectel.

Les utilisateurs de la licence PLUS peuvent associer à une tâche une planification de type crontab afin que les sauvegardes Selectel s'exécutent automatiquement à intervalles réguliers, avec une option de simulation pour prévisualiser les prochaines exécutions avant d'enregistrer la planification.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for Selectel storage" class="img-large img-center" />

## Monter Selectel en tant que lecteur local

Le stockage Selectel peut également être monté en tant que lecteur virtuel, permettant à d'autres applications de bureau de lire et d'écrire le contenu du bucket comme s'il s'agissait de fichiers locaux. La configuration du montage comprend le mode de cache VFS (par défaut : writes), les limites de taille de cache et le mode lecture seule ; les montages peuvent être lancés depuis la barre d'outils du panneau du remote ou depuis le Mount Manager dédié.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a Selectel bucket as a local drive in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez l'onglet Remote > New Remote et choisissez l'option compatible S3 pour saisir vos identifiants Selectel et le point de terminaison.
3. Utilisez Folder Compare ou le glisser-déposer pour transférer les données existantes vers Selectel, puis configurez une tâche Sync pour des sauvegardes continues.
4. Ajoutez la tâche à Job Manager et, avec PLUS, associez une planification afin que les sauvegardes s'exécutent sans intervention manuelle.

Une fois le remote configuré, le stockage Selectel se comporte comme n'importe quelle autre connexion dans RcloneView — consultable, synchronisable, montable, et prêt à être sauvegardé selon une planification.

---

**Guides connexes :**

- [Gérer IONOS Object Storage — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-ionos-object-storage-cloud-sync-rcloneview)
- [Gérer Vultr Object Storage — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-vultr-object-storage-cloud-sync-backup-rcloneview)
- [Gérer Linode Object Storage — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-linode-object-storage-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
