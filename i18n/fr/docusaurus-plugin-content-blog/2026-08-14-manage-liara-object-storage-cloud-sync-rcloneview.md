---
slug: manage-liara-object-storage-cloud-sync-rcloneview
title: "Gérer le stockage objet Liara — Synchroniser et sauvegarder des fichiers avec RcloneView"
authors:
  - robin
description: "Connectez le stockage objet Liara, compatible S3, à RcloneView pour parcourir, synchroniser, sauvegarder et monter vos fichiers depuis une seule interface multiplateforme."
keywords:
  - Liara RcloneView
  - stockage objet Liara
  - stockage objet compatible S3
  - sauvegarde Liara
  - synchronisation Liara
  - monter le stockage Liara
  - interface de stockage objet
  - gestion de fichiers Liara
  - gestionnaire de stockage cloud
  - synchronisation de buckets Liara
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage objet Liara — Synchroniser et sauvegarder des fichiers avec RcloneView

> Faites entrer vos buckets Liara dans la même fenêtre d'explorateur que tous les autres clouds que vous gérez déjà.

Liara est un service de stockage objet compatible S3, et RcloneView s'y connecte de la même manière qu'à Amazon S3, Wasabi ou tout autre fournisseur au protocole S3 — via une Access Key, une Secret Key et un endpoint. Une fois le distant ajouté, les buckets Liara apparaissent comme un onglet ordinaire dans l'explorateur de fichiers, prêts à être parcourus, transférés et planifiés aux côtés des disques locaux et des autres comptes cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Liara comme nouveau distant

Ouvrez le Remote Manager depuis l'onglet Remote et cliquez sur New Remote. Liara étant accessible via le protocole S3 de rclone, sélectionnez l'option compatible S3 et saisissez l'Access Key, la Secret Key et l'URL d'endpoint indiquées dans votre console Liara. Aucune étape OAuth dans le navigateur n'est nécessaire — dès que le test de connexion réussit, le bucket apparaît dans votre barre d'onglets comme n'importe quel autre distant.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout d'un nouveau distant compatible S3 dans RcloneView" class="img-large img-center" />

RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux — Liara ne nécessite ni client séparé ni flux de travail différent du reste de vos comptes cloud.

## Parcourir, transférer et synchroniser les buckets

Divisez votre explorateur en deux panneaux — l'un affichant des fichiers locaux ou un autre cloud, l'autre votre bucket Liara — puis faites glisser des fichiers entre les deux. Un déplacement au sein du même distant effectue un move, tandis qu'un glisser-déposer entre distants différents effectue un copy, ce qui vous permet de préparer des sauvegardes vers Liara sans toucher au dossier source.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de fichiers entre un dossier local et un bucket Liara" class="img-large img-center" />

Pour les tâches récurrentes, utilisez l'assistant de synchronisation en 4 étapes : choisissez la source et la destination, ajustez le nombre de transferts simultanés et de vérificateurs d'égalité dans Advanced Settings, puis appliquez des filtres par type de fichier, taille ou ancienneté avant d'enregistrer. Lancez d'abord un Dry Run pour prévisualiser exactement ce qui sera copié ou supprimé avant de démarrer une synchronisation réelle.

## Planifier les sauvegardes et suivre les tâches

Une fois une tâche de synchronisation enregistrée dans Job Manager, les utilisateurs de licence PLUS peuvent y associer une planification au format crontab pour que les sauvegardes Liara s'exécutent automatiquement selon une cadence fixe, avec un aperçu des prochaines exécutions avant l'enregistrement.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuration d'une planification de sauvegarde récurrente pour une tâche de synchronisation Liara" class="img-large img-center" />

Chaque exécution — manuelle ou planifiée — est enregistrée dans Job History avec le statut, la vitesse de transfert, le nombre de fichiers et la taille totale, afin que vous puissiez confirmer qu'une sauvegarde Liara s'est terminée correctement ou repérer une exécution échouée à relancer.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Générez une Access Key et une Secret Key depuis votre console Liara et notez l'URL d'endpoint.
3. Ajoutez Liara comme nouveau distant compatible S3 dans Remote Manager et testez la connexion.
4. Lancez une synchronisation Dry Run avant de planifier des sauvegardes récurrentes vers votre bucket Liara.

Une fois Liara connecté, votre stockage objet se retrouve aux côtés de tous les autres clouds que vous gérez — un seul explorateur, un seul ensemble de tâches de synchronisation, aucun client séparé à maintenir.

---

**Guides associés :**

- [Gérer le stockage Petabox — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-petabox-cloud-sync-backup-rcloneview)
- [Gérer le stockage objet Scaleway — Synchronisation et sauvegarde avec RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Gérer le stockage Wasabi — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
