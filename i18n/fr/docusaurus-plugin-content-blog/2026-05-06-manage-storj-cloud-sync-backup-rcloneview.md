---
slug: manage-storj-cloud-sync-backup-rcloneview
title: "Gérer le stockage Storj — Synchroniser et sauvegarder des fichiers avec RcloneView"
authors:
  - tayson
description: "Découvrez comment gérer le stockage cloud décentralisé Storj avec RcloneView. Synchronisez, sauvegardez et transférez des fichiers sur Storj grâce à une interface graphique simple — sans ligne de commande."
keywords:
  - gestion du stockage cloud Storj
  - synchronisation RcloneView Storj
  - sauvegarde de fichiers Storj
  - interface graphique de stockage cloud décentralisé
  - transfert de fichiers Storj
  - interface graphique rclone pour Storj
  - outil de synchronisation et sauvegarde Storj
  - gérer Storj avec RcloneView
  - client de bureau Storj
  - interface graphique compatible S3 pour Storj
tags:
  - RcloneView
  - storj
  - cloud-storage
  - cloud-sync
  - backup
  - decentralized-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage Storj — Synchroniser et sauvegarder des fichiers avec RcloneView

> RcloneView vous offre une interface graphique complète pour synchroniser, sauvegarder et gérer votre stockage cloud décentralisé Storj sans écrire la moindre commande.

Storj est une plateforme de stockage d'objets décentralisée qui répartit des fragments de fichiers chiffrés sur un réseau mondial de nœuds. Les équipes qui gèrent des données sensibles — dossiers médicaux, archives financières ou contenus créatifs — choisissent Storj pour son chiffrement intégré et sa résilience. Avec RcloneView, vous pouvez connecter vos buckets Storj et les gérer visuellement aux côtés de tous vos autres comptes cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Storj à RcloneView

RcloneView prend en charge Storj via deux méthodes de connexion : le backend natif Storj et le point de terminaison compatible S3. Pour la plupart des utilisateurs, la voie compatible S3 est la plus simple — vous générez des identifiants S3 dans la console Storj (Access Key ID, Secret Access Key et l'URL du point de terminaison régional), puis vous ajoutez un nouveau distant dans RcloneView en sélectionnant Amazon S3 comme type de fournisseur et en saisissant ces identifiants.

Le backend natif Storj nécessite un jeton Access Grant, que vous pouvez créer dans l'interface web de Storj. Ajoutez un nouveau distant, choisissez Storj comme fournisseur, puis collez votre Access Grant. Chacune des deux approches prend moins de deux minutes, et RcloneView stocke vos identifiants en toute sécurité grâce à un stockage local chiffré.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Storj remote in RcloneView" class="img-large img-center" />

Une fois connectés, vos buckets Storj apparaissent dans l'explorateur de fichiers aux côtés de vos autres distants. Parcourez les dossiers, prévisualisez les miniatures et gérez vos fichiers exactement comme avec n'importe quel autre fournisseur cloud.

## Synchroniser et sauvegarder des fichiers vers Storj

L'assistant de synchronisation en 4 étapes de RcloneView permet de configurer facilement des sauvegardes récurrentes vers Storj. Sélectionnez un dossier local ou un distant cloud comme source, choisissez votre bucket ou sous-dossier Storj comme destination, donnez un nom à la tâche, puis choisissez le mode synchronisation ou copie. Pour un studio de photographie archivant 2 To de fichiers RAW, une tâche de synchronisation nocturne maintient le bucket Storj à jour sans intervention manuelle.

Activez l'option **checksum** dans les paramètres avancés pour vérifier l'intégrité des données — le stockage à codage d'effacement de Storj est résilient, mais vérifier les transferts par comparaison de hachage apporte un niveau de confiance supplémentaire. Définissez le nombre de tentatives à 3 (valeur par défaut) pour gérer avec souplesse les interruptions réseau temporaires.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Storj in RcloneView" class="img-large img-center" />

## Planifier des sauvegardes Storj automatisées (PLUS)

Avec une licence PLUS, vous pouvez planifier des tâches de sauvegarde Storj à l'aide d'un planificateur de type crontab. Définissez une sauvegarde quotidienne à 2h du matin, des exécutions d'archivage hebdomadaires, ou toute autre cadence personnalisée. La fonctionnalité **Simulate schedule** de RcloneView prévisualise les prochaines heures d'exécution avant que vous ne validiez.

L'historique des tâches enregistre chaque exécution — heure de début, durée, octets transférés et statut d'achèvement — afin de disposer d'une piste d'audit claire de chaque fichier envoyé vers Storj.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Storj backup jobs in RcloneView" class="img-large img-center" />

## Transférer des fichiers entre Storj et d'autres clouds

Storj constitue une excellente copie secondaire hors site des données déjà présentes sur Google Drive ou Dropbox. L'explorateur à double panneau de RcloneView vous permet de glisser-déposer des fichiers directement entre les distants. Pour les migrations à grande échelle, utilisez une tâche de synchronisation avec le mode **dry run** afin de prévisualiser ce qui sera transféré avant de valider.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from another remote to Storj" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Allez dans l'onglet Remote > New Remote, puis sélectionnez le fournisseur Storj ou compatible S3.
3. Saisissez votre Access Grant Storj ou vos identifiants compatibles S3, puis enregistrez.
4. Ouvrez l'explorateur de fichiers pour parcourir vos buckets Storj et créer des tâches de synchronisation.

L'architecture décentralisée de Storj en fait une excellente cible de sauvegarde hors site, et RcloneView permet de la gérer aussi facilement que n'importe quel fournisseur cloud grand public.

---

**Guides associés :**

- [Gérer le stockage Amazon S3 — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Migrer de Dropbox vers Storj — Transférer des fichiers avec RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-storj-rcloneview)
- [Transférer des fichiers entre Storj et Google Drive avec RcloneView](https://rcloneview.com/support/blog/transfer-storj-and-google-drive-with-rcloneview)

<CloudSupportGrid />
