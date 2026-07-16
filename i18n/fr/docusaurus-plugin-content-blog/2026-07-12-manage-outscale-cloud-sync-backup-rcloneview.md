---
slug: manage-outscale-cloud-sync-backup-rcloneview
title: "Gérer le stockage Outscale — Synchronisez et sauvegardez vos fichiers avec RcloneView"
authors:
  - morgan
description: "Connectez Outscale Object Storage à RcloneView pour explorer, synchroniser et sauvegarder vos fichiers compatibles S3 sur Windows, macOS et Linux."
keywords:
  - Outscale storage
  - Outscale Object Storage
  - S3-compatible storage GUI
  - RcloneView Outscale
  - cloud backup software
  - sync Outscale to cloud
  - manage cloud storage GUI
  - object storage sync tool
  - multi-cloud file manager
  - S3 credentials setup
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

# Gérer le stockage Outscale — Synchronisez et sauvegardez vos fichiers avec RcloneView

> Explorez, synchronisez et sauvegardez vos buckets Outscale Object Storage depuis une interface graphique, sans jongler avec des identifiants S3 bruts en ligne de commande.

Outscale Object Storage est accessible via le protocole compatible S3 de rclone, ce qui signifie que la configuration nécessite une clé d'accès (Access Key), une clé secrète (Secret Key) et un endpoint — des détails faciles à mal saisir dans un fichier de configuration. RcloneView encapsule cette configuration dans un formulaire guidé et y ajoute un explorateur de fichiers complet, un moteur de synchronisation et un planificateur de tâches, afin que les équipes stockant déjà des données sur Outscale puissent les gérer de la même manière que n'importe quel autre distant.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Outscale en tant que distant compatible S3

Ajouter Outscale dans RcloneView suit le même processus de saisie des identifiants que pour les autres services compatibles S3 : ouvrez l'onglet Remote > New Remote, choisissez le type S3-compatible, puis saisissez l'Access Key ID, la Secret Access Key et l'endpoint Outscale. Le Connect Manager permet également de faire pointer RcloneView vers une instance rclone externe si votre intégration Outscale passe déjà par un démon rclone partagé sur un serveur.

Une fois le distant enregistré, il apparaît comme son propre onglet dans le panneau Explorer, aux côtés de tout autre stockage cloud ou local déjà configuré. Vous pouvez renommer la connexion avec un distant Alias pour raccourcir des chemins de buckets profondément imbriqués et faciliter la navigation au quotidien.

<img src="/support/images/en/blog/new-remote.png" alt="Adding an Outscale S3-compatible remote in RcloneView" class="img-large img-center" />

## Explorer, synchroniser et sauvegarder les données Outscale

Une fois le distant connecté, l'explorateur de fichiers offre une vue double panneau pour comparer le contenu d'Outscale avec un dossier local ou un autre distant cloud. Le glisser-déposer entre les panneaux déclenche une copie lors d'un déplacement entre deux distants différents, et le menu contextuel (clic droit) couvre le renommage, la suppression, l'obtention de la taille et le téléchargement/envoi pour les opérations courantes sur les fichiers.

Pour les sauvegardes récurrentes, l'assistant de synchronisation configure la source et la destination, la concurrence des transferts et les règles de filtrage en quatre étapes, avec des options comme l'âge maximal des fichiers et des filtres prédéfinis pour les types de médias ou de documents. Connectez des services compatibles S3 comme Outscale avec un accès complet en lecture/écriture dès la licence GRATUITE — inutile de passer à une version supérieure pour pouvoir écrire des données dans le bucket. La synchronisation 1:N peut refléter le même bucket Outscale vers plusieurs destinations en une seule tâche, utile lorsqu'une sauvegarde doit atterrir à la fois sur un disque local et sur un second distant cloud.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job between Outscale storage and another remote" class="img-large img-center" />

## Automatiser les sauvegardes Outscale récurrentes

Le Job Manager regroupe dans une seule liste toutes les tâches de synchronisation, de copie ou de déplacement que vous créez, chaque exécution étant consignée dans l'historique des tâches (Job History) avec son statut, la taille des transferts et le nombre de fichiers. Le mode Dry Run permet de prévisualiser exactement quels fichiers seraient copiés ou supprimés avant de lancer un transfert réel — une vérification de sécurité utile avant une première synchronisation volumineuse vers un nouveau bucket Outscale.

Les utilisateurs de la licence PLUS peuvent attacher une planification de type crontab à une tâche afin que les sauvegardes Outscale s'exécutent automatiquement à intervalle régulier, avec une option de simulation pour prévisualiser les prochaines heures d'exécution avant d'enregistrer.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for Outscale storage" class="img-large img-center" />

## Monter Outscale comme un lecteur local

Le stockage Outscale peut également être monté comme un lecteur virtuel, permettant à d'autres applications de bureau de lire et d'écrire le contenu du bucket comme s'il s'agissait de fichiers locaux. La configuration du montage inclut le mode de cache VFS (par défaut : writes), les limites de taille de cache et le mode lecture seule, et les montages peuvent être lancés directement depuis la barre d'outils du panneau du distant ou depuis le Mount Manager dédié.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting an Outscale bucket as a local drive in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez l'onglet Remote > New Remote et sélectionnez l'option S3-compatible pour saisir vos identifiants et l'endpoint Outscale.
3. Utilisez Folder Compare ou le glisser-déposer pour transférer vos données existantes vers Outscale, puis configurez une tâche de synchronisation pour les sauvegardes continues.
4. Ajoutez la tâche au Job Manager et, avec PLUS, attachez une planification afin que les sauvegardes s'exécutent sans intervention manuelle.

Une fois le distant configuré, le stockage Outscale se comporte comme n'importe quelle autre connexion dans RcloneView — explorable, synchronisable et prêt à être sauvegardé selon un planning.

---

**Guides associés :**

- [Gérer le stockage Wasabi — Synchronisez et sauvegardez vos fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Gérer Scaleway Object Storage — Synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Gérer Hetzner Object Storage — Synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/manage-hetzner-object-storage-cloud-sync-rcloneview)

<CloudSupportGrid />
