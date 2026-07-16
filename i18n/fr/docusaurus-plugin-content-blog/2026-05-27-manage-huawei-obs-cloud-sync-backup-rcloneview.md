---
slug: manage-huawei-obs-cloud-sync-backup-rcloneview
title: "Gérer le stockage Huawei OBS — Synchronisez et sauvegardez vos fichiers avec RcloneView"
authors:
  - alex
description: "Gérez vos buckets Huawei OBS avec RcloneView — synchronisation, sauvegarde et transfert de fichiers via une interface graphique. Configuration compatible S3, tâches planifiées et transferts inter-cloud."
keywords:
  - Huawei OBS
  - Huawei Object Storage Service
  - RcloneView Huawei OBS
  - synchronisation Huawei OBS
  - sauvegarde de fichiers vers Huawei OBS
  - interface de gestion de stockage cloud
  - stockage compatible S3 RcloneView
  - gestionnaire de fichiers cloud Huawei
  - synchronisation de bucket OBS rclone
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage Huawei OBS — Synchronisez et sauvegardez vos fichiers avec RcloneView

> Connectez vos buckets Huawei OBS à un gestionnaire de fichiers visuel, puis synchronisez et sauvegardez vos fichiers entre plusieurs clouds sans toucher à la ligne de commande.

Huawei Object Storage Service (OBS) est une plateforme de stockage objet évolutive et de niveau entreprise, utilisée dans les déploiements en Asie-Pacifique ainsi que dans des environnements d'entreprise à l'échelle mondiale. Que vous gériez un data lake de plusieurs téraoctets ou que vous sauvegardiez les archives de projet d'un bureau régional, OBS offre la fiabilité attendue par les grandes organisations. RcloneView se connecte à Huawei OBS via son API compatible S3, vous offrant une expérience GUI complète pour parcourir les buckets, transférer des fichiers et exécuter des tâches de sauvegarde automatisées — ainsi votre équipe consacre son temps au vrai travail plutôt qu'à mémoriser des options rclone.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter RcloneView à Huawei OBS

Ajouter Huawei OBS comme distant dans RcloneView suit la même configuration compatible S3 utilisée pour des fournisseurs comme Alibaba Cloud OSS ou IDrive E2. Depuis l'onglet **Remote**, cliquez sur **New Remote**, choisissez le type de fournisseur S3, puis sélectionnez Huawei OBS dans la liste des fournisseurs. Vous devrez fournir trois identifiants : un Access Key ID, une Secret Access Key, et l'URL du endpoint régional de votre bucket OBS. Les endpoints de Huawei suivent le modèle `obs.{region}.myhuaweicloud.com` — par exemple, `obs.cn-north-4.myhuaweicloud.com` pour la région Chine du Nord 4.

Une fois configuré, les panneaux de l'explorateur de fichiers de RcloneView affichent vos buckets OBS comme des dossiers de premier niveau. Naviguez dans les préfixes d'objets imbriqués à l'aide de la barre de chemin en fil d'Ariane, basculez entre l'affichage en liste et en miniatures, et consultez d'un coup d'œil les métadonnées des fichiers — nom, taille et date de modification. L'arborescence de dossiers à gauche facilite la localisation d'un jeu de données spécifique dans un environnement multi-buckets, sans avoir à parcourir une liste de fichiers à plat.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Huawei OBS as an S3-compatible remote in RcloneView" class="img-large img-center" />

RcloneView prend également en charge jusqu'à quatre panneaux d'explorateur simultanés, ce qui vous permet d'ouvrir un panneau vers votre bucket OBS et un autre vers un lecteur local ou un autre fournisseur cloud — permettant des comparaisons côte à côte sans changer de fenêtre.

## Synchroniser et sauvegarder des fichiers vers Huawei OBS

L'assistant de synchronisation en 4 étapes de RcloneView facilite la création de tâches de sauvegarde récurrentes ciblant Huawei OBS. Définissez votre source (un dossier local, un chemin NAS ou un autre distant cloud) et votre destination (un préfixe de bucket OBS), donnez un nom à la tâche, puis configurez les options avancées. Augmenter le nombre de transferts simultanés accélère le débit sur les connexions à haute bande passante, tandis que l'activation de la vérification par somme de contrôle garantit que chaque fichier arrive intact — particulièrement précieux lors de la migration d'un jeu de données de 2 To de plans d'ingénierie ou de dossiers financiers où une corruption silencieuse est inacceptable.

Le filtrage permet de garder vos buckets OBS légers et rentables. Excluez les types de fichiers volumineux que vous n'avez pas besoin d'archiver (`.iso`, `.vmdk`), limitez la synchronisation aux fichiers modifiés dans une fenêtre temporelle glissante à l'aide de filtres d'ancienneté maximale, ou plafonnez la profondeur des dossiers pour éviter de copier des répertoires temporaires profondément imbriqués. Pour les organisations soumises à des exigences de conformité, ces filtres garantissent que seuls les bons fichiers atteignent OBS, sans sélection manuelle à chaque exécution.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Huawei OBS in RcloneView" class="img-large img-center" />

Exécutez la simulation à blanc (dry-run) avant la première exécution réelle — RcloneView affiche exactement quels fichiers seraient ajoutés ou supprimés sans toucher à aucune donnée, un filet de sécurité essentiel lors de la synchronisation de buckets de production.

## Planifier des sauvegardes automatisées et surveiller les tâches

Avec une licence RcloneView PLUS, votre sauvegarde Huawei OBS fonctionne en pilote automatique grâce à une planification de type crontab. Configurez une sauvegarde différentielle nocturne à 02h00 chaque jour de semaine, une synchronisation complète du bucket chaque dimanche, ou toute cadence adaptée au cycle de vie de vos données. Le simulateur de planification de l'assistant prévisualise les cinq prochaines exécutions afin que vous puissiez vérifier le modèle avant de valider.

L'historique des tâches fournit une piste d'audit complète pour chaque exécution — heure de début, durée, vitesse de transfert, nombre de fichiers, taille totale transférée et statut final (Terminé, En erreur ou Annulé). Pour une équipe gérant l'archivage de conformité sur plusieurs régions OBS, ce journal fait également office de documentation pour les audits internes. Les titulaires d'une licence PLUS peuvent également configurer des notifications de fin de tâche afin que les bonnes personnes soient alertées dès qu'une tâche se termine ou échoue.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Huawei OBS sync jobs in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez l'onglet **Remote** → **New Remote** → sélectionnez **S3** → choisissez **Huawei OBS**.
3. Saisissez votre Access Key ID, votre Secret Access Key, et l'URL du endpoint OBS régional.
4. Parcourez vos buckets dans l'explorateur de fichiers et créez des tâches de synchronisation ou de sauvegarde via le **Job Manager**.

Une fois connecté, Huawei OBS se comporte comme n'importe quel autre lecteur dans RcloneView — offrant à votre équipe un accès fiable, piloté par une interface graphique, au stockage objet d'entreprise, sans la lourdeur de la ligne de commande.

---

**Guides connexes :**

- [Gérer Alibaba Cloud OSS — Synchronisation et sauvegarde avec RcloneView](https://rcloneview.com/support/blog/manage-alibaba-oss-cloud-sync-backup-rcloneview)
- [Gérer le stockage objet Tencent COS avec RcloneView](https://rcloneview.com/support/blog/manage-tencent-cos-cloud-sync-rcloneview)
- [Centraliser le stockage S3, Wasabi et R2 avec RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
