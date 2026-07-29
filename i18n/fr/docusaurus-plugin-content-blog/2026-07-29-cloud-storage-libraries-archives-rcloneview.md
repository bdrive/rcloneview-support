---
slug: cloud-storage-libraries-archives-rcloneview
title: "Stockage cloud pour bibliothèques et archives — Préservation numérique à long terme avec RcloneView"
authors:
  - alex
description: "Comment les bibliothèques et les services d'archives utilisent RcloneView pour gérer des collections numérisées sur plusieurs services de stockage cloud avec des sauvegardes vérifiées et des contrôles d'accès."
keywords:
  - stockage cloud pour bibliothèques
  - sauvegarde d'archive numérique
  - stockage cloud pour préservation numérique
  - RcloneView archives
  - stockage pour numérisation de bibliothèque
  - archive de sauvegarde vérifiée par somme de contrôle
  - préservation numérique multi-cloud
  - synchronisation cloud pour archives
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
  - digital-preservation
  - archive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Stockage cloud pour bibliothèques et archives — Préservation numérique à long terme avec RcloneView

> Les manuscrits numérisés, les scans de microfilms et les enregistrements d'histoire orale ne restent en sécurité que s'ils existent en plus d'un endroit — RcloneView rend cette redondance gérable sans équipe informatique dédiée.

Une bibliothèque qui numérise une collection spéciale, ou un service d'archives qui préserve des décennies de documents institutionnels, finit par accumuler des téraoctets de scans haute résolution, d'audio et de vidéo qui ne pourraient jamais être recréés en cas de perte. Le stockage cloud résout le problème de la durabilité, mais la plupart des institutions ne dépendent pas d'un seul fournisseur — contraintes budgétaires, exigences de subvention ou préférence pour un stockage géographiquement distinct font souvent que les collections sont réparties ou mises en miroir sur deux clouds ou plus. RcloneView offre aux archivistes une fenêtre unique pour tout gérer, en connectant plus de 90 services de stockage cloud, sans exiger de compétences en ligne de commande de la part du personnel de la bibliothèque.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mettre en miroir des collections numérisées sur plusieurs fournisseurs

Les bonnes pratiques de préservation numérique exigent plusieurs copies indépendantes, idéalement sur des systèmes de stockage différents. La synchronisation 1:N de RcloneView permet à un service d'archives de pointer un dossier source — disons, un lot de scans de manuscrits numérisés tout juste terminé — vers plusieurs destinations cloud simultanément, de sorte qu'une seule tâche de synchronisation maintient des copies redondantes sans que le personnel ait à exécuter manuellement le même transfert deux fois. Cette fonction est disponible avec la licence FREE, ce qui compte pour les institutions fonctionnant sur des fonds de subvention ou des budgets serrés.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuration de synchronisation 1:N de RcloneView mettant en miroir une archive numérisée vers deux destinations cloud" class="img-large img-center" />

Connecter S3, Azure ou Backblaze B2 avec un accès complet en lecture/écriture est déjà possible avec la licence FREE, ce qui convient aux services d'archives utilisant un stockage d'objets à moindre coût pour les masters de préservation froids et rarement consultés, tout en conservant les copies de travail sur un fournisseur plus collaboratif comme Google Drive ou Dropbox.

## Vérifier la fixity par comparaison de sommes de contrôle

Le travail de préservation repose sur la certitude qu'un fichier ne s'est pas corrompu silencieusement pendant le transfert ou au fil des années de stockage — un concept que les archivistes appellent la fixity. Les tâches de synchronisation de RcloneView prennent en charge la vérification par somme de contrôle, comparant les fichiers par hachage et par taille plutôt que par simple date de modification, et l'option d'activation de la somme de contrôle à l'étape 2 de l'assistant de synchronisation confirme que chaque octet correspond à la destination. Folder Compare ajoute une seconde couche, permettant au personnel d'auditer visuellement deux emplacements de stockage côte à côte et de repérer immédiatement les fichiers manquants ou non concordants.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Vue Folder Compare de RcloneView auditant des copies vérifiées par somme de contrôle d'une collection d'archives" class="img-large img-center" />

Exécuter une comparaison périodique sur chaque copie mise en miroir est une routine pratique de vérification de la fixity qui ne nécessite pas d'écrire de scripts de commandes rclone depuis un terminal.

## Planifier l'ingestion sans administrateur système

Les flux de numérisation produisent généralement de nouveaux lots de façon continue — une station de numérisation termine une boîte de documents, et ces fichiers doivent passer du stockage local à l'archive permanente. Avec une licence PLUS, la planification de type crontab de RcloneView automatise cette ingestion de manière récurrente, et Job History fournit une piste d'audit complète de chaque exécution : heure de début, durée, fichiers transférés et statut. Cet historique compte pour les institutions qui doivent démontrer leur conformité en matière de préservation auprès de bailleurs de fonds ou d'organismes de contrôle.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planification d'une tâche d'ingestion récurrente pour une archive numérique dans RcloneView" class="img-large img-center" />

Job Export permet à un service d'archives d'enregistrer l'ensemble de ses configurations de synchronisation sous forme de fichier JSON portable, utile pour documenter le flux de préservation lui-même ou le transmettre à un nouveau bibliothécaire système.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Connectez votre remote de stockage principal et une ou plusieurs destinations de copie de préservation.
3. Configurez une tâche de synchronisation 1:N avec la vérification par somme de contrôle activée.
4. Utilisez Folder Compare périodiquement pour auditer la fixity sur toutes les copies mises en miroir.

Une archive correctement mise en miroir et vérifiée par somme de contrôle transforme le « nous espérons que la sauvegarde a fonctionné » en quelque chose qu'une bibliothèque ou un service d'archives peut réellement prouver.

---

**Guides connexes :**

- [Guide de comparaison de dossiers — Détecter les différences avec RcloneView](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [Migrations cloud vérifiées par somme de contrôle avec RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [Synchronisation 1:N — Plusieurs destinations avec RcloneView](https://rcloneview.com/support/blog/one-to-many-sync-multiple-destinations-rcloneview)

<CloudSupportGrid />
