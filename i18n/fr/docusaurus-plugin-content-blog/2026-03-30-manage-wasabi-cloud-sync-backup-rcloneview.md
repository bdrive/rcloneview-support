---
slug: manage-wasabi-cloud-sync-backup-rcloneview
title: "Gérer le stockage Wasabi — Synchroniser et sauvegarder des fichiers avec RcloneView"
authors:
  - tayson
description: "Gérez le stockage cloud actif Wasabi avec RcloneView. Synchronisez des buckets compatibles S3, planifiez des sauvegardes et transférez des données sans frais de sortie grâce à une interface graphique visuelle."
keywords:
  - synchronisation cloud wasabi
  - sauvegarde wasabi rcloneview
  - wasabi compatible s3
  - gestionnaire de stockage wasabi
  - wasabi rclone gui
  - stockage actif wasabi
  - wasabi zéro frais de sortie
  - gestion des buckets wasabi
  - transfert cloud wasabi
  - sauvegarde multi-cloud wasabi
tags:
  - wasabi
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage Wasabi — Synchroniser et sauvegarder des fichiers avec RcloneView

> Wasabi propose un stockage actif compatible S3 sans frais de sortie, et RcloneView permet de gérer ces buckets aussi simplement qu'un glisser-déposer.

Wasabi s'est taillé une place de choix sur le marché du stockage objet grâce à un modèle de tarification transparent : 7,99 $ par To/mois, sans frais de sortie, d'appels API ni de récupération de données. Contrairement aux niveaux de stockage froid qui pénalisent les accès fréquents, chaque bucket Wasabi est un stockage actif — ce qui signifie que vos fichiers sont accessibles instantanément, sans délai de récupération. RcloneView fournit une interface graphique complète pour Wasabi, vous permettant de gérer des buckets dans toutes les régions Wasabi, d'exécuter des synchronisations vers d'autres clouds et d'automatiser des plannings de sauvegarde sans écrire de scripts.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Wasabi dans RcloneView

Pour ajouter Wasabi, ouvrez le Gestionnaire de distants et sélectionnez **S3-compatible** comme type de fournisseur, puis choisissez **Wasabi** dans la liste des fournisseurs. Saisissez votre clé d'accès et votre clé secrète, puis sélectionnez le point de terminaison régional approprié. Wasabi exploite des centres de données à us-east-1 (Ashburn), us-east-2 (Manassas), us-west-1 (Hillsboro), us-central-1 (Dallas), eu-central-1 (Amsterdam), eu-central-2 (Francfort), eu-west-1 (Londres), eu-west-2 (Paris) et ap-northeast-1 (Tokyo), entre autres.

Le choix de la bonne région est essentiel. Wasabi impose une durée de stockage minimale facturée de 90 jours — si vous supprimez un fichier avant 90 jours, vous êtes facturé comme s'il avait existé pendant toute la période. Choisir une région proche de votre source de données principale réduit la latence lors des téléversements et des synchronisations, ce qui devient important pour les tâches récurrentes de grande ampleur.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Wasabi remote in RcloneView Remote Manager" class="img-large img-center" />

## Gestion des fichiers par glisser-déposer

Une fois connectés, les buckets Wasabi apparaissent dans l'explorateur à deux volets comme n'importe quel autre distant. Vous pouvez naviguer dans les hiérarchies de dossiers, prévisualiser des fichiers et consulter les métadonnées. Glisser des fichiers depuis un disque local ou un autre distant cloud vers le volet Wasabi déclenche immédiatement un transfert.

Le moteur multithread de RcloneView est particulièrement adapté à l'infrastructure de Wasabi. Wasabi prend en charge les téléversements à haut débit, et RcloneView vous permet de configurer des transferts parallèles et la taille des blocs pour maximiser l'utilisation de la bande passante. Pour des jeux de données de plusieurs téraoctets, vous pouvez atteindre un débit soutenu qui sature une connexion gigabit.

Le moniteur de transfert en temps réel affiche la progression par fichier, la vitesse et le temps restant estimé. Si un transfert rencontre une erreur transitoire — un incident réseau ou une erreur 503 de l'API — RcloneView effectue automatiquement de nouvelles tentatives avec des intervalles de backoff configurables.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging and dropping files to Wasabi storage in RcloneView" class="img-large img-center" />

## Automatiser les sauvegardes et la synchronisation multi-cloud

La tarification sans frais de sortie de Wasabi en fait un hub idéal pour les stratégies de sauvegarde multi-cloud. Vous pouvez récupérer des données depuis Wasabi vers Google Drive, AWS S3 ou un NAS local sans vous soucier des coûts de téléchargement. Le planificateur de tâches de RcloneView vous permet d'automatiser ces transferts selon un planning cron.

Un schéma courant consiste à utiliser Wasabi comme dépôt central de sauvegarde : planifiez des synchronisations nocturnes depuis Google Drive et Dropbox vers Wasabi, puis exécutez une copie hebdomadaire de Wasabi vers un fournisseur secondaire comme Backblaze B2 pour la diversité géographique. Le chaînage de tâches de RcloneView vous permet de définir ces flux de travail et de les surveiller depuis un tableau de bord unique.

Wasabi prend également en charge Object Lock pour des sauvegardes immuables. Combiné avec le versionnement, vous pouvez créer des buckets conformes WORM (write-once-read-many) qui répondent aux exigences réglementaires de conservation des données.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated backups to Wasabi storage in RcloneView" class="img-large img-center" />

## Surveiller les performances de transfert

Le panneau de surveillance en temps réel de RcloneView offre une visibilité détaillée sur les transferts Wasabi actifs. Vous pouvez consulter le débit global, la progression de chaque fichier et un journal continu des opérations terminées. Le panneau d'historique des tâches conserve les enregistrements de chaque transfert passé, ce qui facilite l'audit de l'exhaustivité des sauvegardes ou le diagnostic des régressions de performance.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of Wasabi file transfers in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Créez une clé d'accès dans la console Wasabi et ajoutez-la comme distant S3-compatible dans RcloneView.
3. Parcourez vos buckets Wasabi et glissez des fichiers depuis le stockage local ou d'autres distants cloud.
4. Configurez une tâche de synchronisation planifiée pour automatiser les sauvegardes nocturnes vers Wasabi.

La tarification prévisible de Wasabi élimine les mauvaises surprises liées aux frais de sortie, et l'interface visuelle de RcloneView supprime le besoin de mémoriser la syntaxe CLI S3 pour les opérations quotidiennes.

---

**Guides connexes :**

- [Centraliser S3, Wasabi et R2 avec RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)
- [Gérer la sauvegarde cloud S3 IDrive e2 avec RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-s3-cloud-backup-rcloneview)
- [Gérer la synchronisation cloud décentralisée Storj avec RcloneView](https://rcloneview.com/support/blog/manage-storj-decentralized-cloud-sync-rcloneview)

<CloudSupportGrid />
