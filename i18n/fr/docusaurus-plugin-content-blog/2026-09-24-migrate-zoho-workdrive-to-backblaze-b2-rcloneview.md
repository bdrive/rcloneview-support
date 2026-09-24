---
slug: migrate-zoho-workdrive-to-backblaze-b2-rcloneview
title: "Migrer de Zoho WorkDrive vers Backblaze B2 — Transférer des fichiers avec RcloneView"
authors:
  - steve
description: "Déplacez des fichiers de Zoho WorkDrive vers Backblaze B2 directement avec RcloneView, grâce au transfert cloud à cloud, à l'aperçu Dry Run et à la planification des tâches."
keywords:
  - migrer Zoho WorkDrive vers Backblaze B2
  - sauvegarde Zoho WorkDrive
  - migration Backblaze B2
  - transfert cloud à cloud
  - guide de migration RcloneView
  - Zoho WorkDrive vers B2
  - outil de migration de stockage cloud
  - rclone Zoho WorkDrive
  - transfert de fichiers entre clouds
  - archive cloud abordable
tags:
  - RcloneView
  - zoho
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Zoho WorkDrive vers Backblaze B2 — Transférer des fichiers avec RcloneView

> Déplacez les fichiers de Zoho WorkDrive directement vers Backblaze B2, sans passer d'abord par un disque local.

Les équipes qui utilisent Zoho WorkDrive pour la collaboration quotidienne ont souvent besoin d'un niveau de stockage moins coûteux et à long terme pour les projets terminés et les anciens dossiers clients — Backblaze B2 est un choix courant pour cette couche d'archivage. RcloneView connecte les deux remotes dans une seule fenêtre et copie les fichiers directement de cloud à cloud, de sorte qu'un lecteur partagé rempli de documents et de médias n'a pas besoin d'être téléchargé puis réuploadé via le stockage local d'un ordinateur portable. RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre sous Windows, macOS et Linux, si bien que parcourir Zoho WorkDrive et archiver vers Backblaze B2 ne nécessite jamais de changer d'application.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Zoho WorkDrive et Backblaze B2

Ajoutez Zoho WorkDrive comme remote via New Remote et sélectionnez la configuration basée sur OAuth ; comme Zoho WorkDrive nécessite de choisir une région lors de la configuration, sélectionnez le centre de données correspondant à votre compte avant de terminer la configuration. Backblaze B2 utilise plutôt la saisie d'identifiants — entrez l'Application Key ID et l'Application Key depuis la page de gestion des clés B2, et RcloneView valide la connexion avant de l'enregistrer. Les deux remotes apparaissent alors comme des onglets dans les panneaux Explorer, prêts à être parcourus côte à côte.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout de Zoho WorkDrive et Backblaze B2 comme remotes dans RcloneView" class="img-large img-center" />

Une fois connecté, ouvrez le Remote Manager pour confirmer les deux entrées et ajuster des paramètres comme la portée des dossiers avant le premier transfert.

## Exécuter le transfert cloud à cloud

Ouvrez une disposition à deux panneaux avec Zoho WorkDrive d'un côté et votre bucket Backblaze B2 de l'autre, puis faites glisser les dossiers que vous souhaitez migrer — glisser-déposer entre deux remotes différents effectue toujours une copie, laissant les originaux de Zoho WorkDrive intacts jusqu'à ce que vous soyez prêt à faire le nettoyage. Pour des migrations plus importantes, créez plutôt une tâche Sync : choisissez Zoho WorkDrive comme source et le bucket B2 comme destination, définissez le nombre de transferts de fichiers simultanés dans Advanced Settings, et exécutez d'abord un Dry Run pour voir exactement quels fichiers seront déplacés avant qu'un transfert réel n'ait lieu.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Tâche de transfert cloud à cloud de Zoho WorkDrive vers Backblaze B2" class="img-large img-center" />

## Vérifier et planifier la migration

Activez la comparaison par somme de contrôle dans les Advanced Settings de la tâche de synchronisation afin que RcloneView vérifie la correspondance des fichiers par hash et taille plutôt que par la seule taille de fichier, et définissez le nombre de tentatives en cas d'erreur réseau transitoire sur un lot volumineux. Une fois la tâche terminée, consultez Job History pour vérifier le nombre total de fichiers transférés, le temps écoulé et les éventuels éléments en erreur avant d'archiver le dossier source.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History montrant un transfert terminé de Zoho WorkDrive vers Backblaze B2" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre remote Zoho WorkDrive en sélectionnant la bonne région.
3. Ajoutez votre remote Backblaze B2 avec votre Application Key ID et votre Key.
4. Exécutez un Dry Run, puis lancez la tâche de synchronisation ou de copie et vérifiez les résultats dans Job History.

Une migration cloud à cloud propre garde votre espace de travail Zoho WorkDrive léger tout en offrant aux fichiers terminés un emplacement durable et moins coûteux.

---

**Guides connexes :**

- [Gérer Zoho WorkDrive — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [Gérer Backblaze B2 — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Synchroniser Zoho WorkDrive vers OneDrive — Sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/sync-zoho-workdrive-to-onedrive-rcloneview)

<CloudSupportGrid />
