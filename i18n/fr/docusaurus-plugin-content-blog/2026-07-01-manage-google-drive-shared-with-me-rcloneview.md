---
slug: manage-google-drive-shared-with-me-rcloneview
title: "Gérer « Partagés avec moi » sur Google Drive — Synchroniser et sauvegarder des fichiers avec RcloneView"
authors:
  - alex
description: "Parcourez, synchronisez et sauvegardez les dossiers « Partagés avec moi » de Google Drive grâce à l'interface graphique multiplateforme de RcloneView, sans perdre de vue le contenu partagé."
keywords:
  - google drive shared with me
  - google drive shared with me sync
  - rcloneview google drive
  - backup shared google drive folders
  - google drive gui client
  - shared_with_me rclone
  - google drive collaboration backup
  - manage shared google drive files
tags:
  - google-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer « Partagés avec moi » sur Google Drive — Synchroniser et sauvegarder des fichiers avec RcloneView

> Les fichiers que d'autres personnes partagent avec vous se trouvent dans un espace distinct de votre propre Drive — RcloneView vous permet de parcourir, sauvegarder et synchroniser ce contenu partagé aussi facilement que vos propres fichiers.

La section « Partagés avec moi » de Google Drive regroupe tous les fichiers et dossiers que des collègues, clients ou collaborateurs ont partagés avec votre compte, mais elle ne fait pas partie de l'arborescence habituelle de votre Drive par défaut. Cette séparation fait qu'il est facile de perdre de vue le contenu partagé, en particulier lorsqu'un dossier client doit être archivé localement ou dupliqué vers un autre cloud pour plus de sécurité. RcloneView résout ce problème en se connectant à l'espace « Partagés avec moi » comme s'il s'agissait d'un distant navigable à part entière, afin que vous puissiez traiter le contenu partagé comme n'importe quel autre dossier de votre flux de travail.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Se connecter au contenu « Partagés avec moi »

Les distants Google Drive standards n'affichent que les fichiers que vous possédez ou que vous avez placés dans votre propre structure de dossiers. Pour accéder aux éléments partagés avec vous, la configuration des distants de RcloneView expose le paramètre `shared_with_me` pour les distants Google Drive — l'activer redirige la connexion vers la vue « Partagés avec moi » plutôt que vers la racine de votre Drive personnel. Cela signifie que vous n'avez pas besoin d'un second compte Google ou d'une astuce via un navigateur pour accéder au dossier partagé d'un client ; vous le configurez une seule fois dans l'assistant Nouveau distant, et l'arborescence partagée apparaît dans le panneau Explorateur comme n'importe quelle autre connexion.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a new Google Drive remote configured for Shared with Me content in RcloneView" class="img-large img-center" />

Une fois connecté, le distant « Partagés avec moi » se comporte comme une source de fichiers normale : navigation dans l'arborescence des dossiers, aperçus miniatures pour les images, et le menu contextuel standard pour copier, télécharger et obtenir un lien public fonctionnent tous de la même manière. RcloneView permet également de synchroniser et de comparer des dossiers — avec la licence GRATUITE — de sorte que le contenu partagé ne se limite pas à une simple consultation.

## Sauvegarder les dossiers partagés avant qu'ils ne disparaissent

Les dossiers partagés peuvent disparaître de votre vue si le propriétaire révoque l'accès ou supprime le fichier source, ce qui constitue un risque réel lorsque vous dépendez du Drive d'une autre personne pour des livrables de projet. Exécuter une tâche de synchronisation à sens unique depuis le distant « Partagés avec moi » vers votre propre Google Drive, un disque local ou un bucket de stockage objet crée une copie indépendante que vous contrôlez. Configurez la tâche avec la direction « Modification de la destination uniquement » afin que la destination de sauvegarde reflète toujours l'état actuel du dossier partagé sans modifier l'original.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing a Google Drive Shared with Me folder to a backup destination in RcloneView" class="img-large img-center" />

Pour les relations client récurrentes, les paramètres de filtrage permettent d'exclure les types de fichiers que vous ne souhaitez pas archiver — les Google Docs ou certaines extensions spécifiques peuvent être ignorés à l'aide des règles de filtre prédéfinies ou personnalisées à l'étape 3 de l'assistant de synchronisation, afin que les sauvegardes se concentrent sur les fichiers qui comptent réellement.

## Planifier une protection continue

Un dossier partagé qu'un client met à jour chaque semaine nécessite plus qu'une simple copie ponctuelle. Les utilisateurs de la licence PLUS peuvent associer une planification de type crontab à la tâche de synchronisation afin que le contenu « Partagés avec moi » soit sauvegardé automatiquement de manière récurrente, sans avoir à relancer manuellement la tâche. L'historique des tâches enregistre ensuite le statut, la taille transférée et la durée de chaque exécution, offrant une piste d'audit claire indiquant la dernière capture du contenu partagé.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for a Google Drive Shared with Me remote" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Créez un nouveau distant Google Drive et activez l'option `shared_with_me` lors de la configuration.
3. Parcourez l'arborescence « Partagés avec moi » dans le panneau Explorateur pour confirmer que les dossiers attendus apparaissent.
4. Configurez une tâche de synchronisation à sens unique vers une destination de sauvegarde, et planifiez-la si vous disposez d'une licence PLUS.

Le contenu partagé ne devrait pas être un angle mort de votre stratégie de sauvegarde — l'intégrer dans RcloneView lui offre la même protection que tout ce que vous gérez déjà.

---

**Guides connexes :**

- [Gérer le stockage Google Drive — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Résoudre les erreurs de permission des Drive partagés Google — Comment y remédier avec RcloneView](https://rcloneview.com/support/blog/fix-google-shared-drive-permission-errors-rcloneview)
- [Synchroniser deux comptes Google Drive avec RcloneView](https://rcloneview.com/support/blog/sync-two-google-drive-accounts-rcloneview)

<CloudSupportGrid />
