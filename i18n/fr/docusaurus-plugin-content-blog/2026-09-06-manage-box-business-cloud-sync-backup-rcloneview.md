---
slug: manage-box-business-cloud-sync-backup-rcloneview
title: "Gérer Box for Business — Synchronisation et sauvegarde cloud d'entreprise avec RcloneView"
authors:
  - casey
description: "Configurez Box for Business dans RcloneView pour des flux de travail de synchronisation, sauvegarde et montage d'entreprise sur votre compte Box géré par l'administrateur."
keywords:
  - Box for Business
  - gérer Box for Business
  - synchronisation cloud d'entreprise Box
  - sauvegarde Box entreprise
  - RcloneView Box
  - box_sub_type enterprise
  - synchronisation de stockage cloud d'entreprise
  - outil de sauvegarde de compte Box
tags:
  - RcloneView
  - box
  - business
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer Box for Business — Synchronisation et sauvegarde cloud d'entreprise avec RcloneView

> Les comptes Box for Business nécessitent un paramètre supplémentaire avant que RcloneView puisse voir tout ce que votre administrateur a provisionné — voici comment le configurer correctement.

Un distant Box standard fonctionne bien pour un compte personnel, mais un compte Box for Business (entreprise) structure les dossiers et les permissions différemment en coulisses. Si vous le connectez de la même manière qu'un compte Box personnel, certains contenus gérés au niveau de l'entreprise peuvent être absents de l'explorateur. RcloneView gère cela grâce à un paramètre dédié `box_sub_type = enterprise` sur le distant, afin que les dossiers partagés de votre équipe, le contenu en copropriété et le stockage provisionné par l'administrateur s'affichent tous correctement.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurer un distant Box for Business

Commencez par créer un nouveau distant et sélectionner Box comme fournisseur — la connexion OAuth basée sur le navigateur fonctionne de la même manière que pour un compte personnel, il n'y a donc pas de flux d'identifiants distinct à apprendre. La différence intervient après l'authentification : ouvrez les paramètres avancés du distant et définissez `box_sub_type = enterprise`. Cela indique à rclone (le moteur sur lequel RcloneView fonctionne) de résoudre les structures de dossiers au niveau de l'entreprise plutôt que les valeurs par défaut d'un compte personnel.

<img src="/support/images/en/blog/new-remote.png" alt="Création d'un nouveau distant Box for Business dans RcloneView" class="img-large img-center" />

Une fois configuré, parcourez le distant de la même manière que n'importe quel autre — la navigation dans l'arborescence des dossiers, les aperçus miniatures et les opérations sur les fichiers (copier, couper, renommer, supprimer) fonctionnent de manière identique, que le compte sous-jacent soit personnel ou de niveau entreprise.

## Synchroniser et sauvegarder le contenu Box d'entreprise

Un scénario courant pour les équipes informatiques consiste à sauvegarder un compte Box for Business vers un emplacement secondaire — un NAS sur site, un autre cloud, ou un stockage objet compatible S3 pour l'archivage à froid. Créez une tâche de synchronisation avec Box for Business comme source, réglez la direction sur unidirectionnelle « modifier uniquement la destination » pour une sauvegarde sûre et non destructive, puis exécutez d'abord une simulation pour prévisualiser exactement ce qui sera copié.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuration d'une tâche de synchronisation de sauvegarde Box for Business dans RcloneView" class="img-large img-center" />

Pour les services jonglant avec des lecteurs partagés répartis sur des dizaines de dossiers Box, le filtrage par ancienneté maximale des fichiers ou par filtres de documents prédéfinis permet de concentrer les tâches nocturnes uniquement sur ce qui a changé, plutôt que de rescanner l'intégralité du compte à chaque exécution. RcloneView synchronise et compare également les dossiers — avec la licence FREE — de sorte que les flux de sauvegarde d'entreprise ne nécessitent pas de mise à niveau pour démarrer.

## Planifier des sauvegardes d'entreprise récurrentes

Les exportations manuelles ne s'adaptent pas à un compte d'entreprise avec plusieurs contributeurs ajoutant des fichiers quotidiennement. Le Job Manager vous permet d'enregistrer la synchronisation Box for Business comme tâche nommée, puis d'y associer une planification de type crontab (une fonctionnalité de la licence PLUS) afin qu'elle s'exécute automatiquement la nuit ou selon la fréquence exigée par votre politique de conformité.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planification d'une tâche de synchronisation récurrente Box for Business" class="img-large img-center" />

Chaque exécution est consignée dans Job History avec l'heure de début, la durée, la vitesse de transfert et le nombre de fichiers — une preuve utile lorsqu'un audit demande comment les sauvegardes sont vérifiées.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Créez un nouveau distant Box et terminez la connexion OAuth dans le navigateur avec vos identifiants Box for Business.
3. Ouvrez les paramètres avancés du distant et définissez `box_sub_type = enterprise` pour débloquer les dossiers au niveau de l'entreprise.
4. Créez une tâche de synchronisation ou de sauvegarde associant Box for Business à tout autre distant pris en charge ou stockage local.

Bien configurer ce seul paramètre dès le départ évite des heures de dépannage du type « où sont passés mes fichiers » plus tard.

---

**Guides connexes :**

- [Gérer le stockage Box — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Gérer Dropbox for Business — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-dropbox-business-cloud-sync-backup-rcloneview)
- [Migrer de Box vers OneDrive — Transférer des fichiers avec RcloneView](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)

<CloudSupportGrid />
