---
slug: sync-onedrive-to-box-rcloneview
title: "Synchroniser OneDrive vers Box — sauvegarde cloud avec RcloneView"
authors:
  - alex
description: "Synchronisez OneDrive vers Box avec RcloneView : connectez les deux via OAuth, prévisualisez avec un Dry Run, lancez la synchronisation de cloud à cloud et vérifiez avec Folder Compare."
keywords:
  - synchroniser OneDrive vers Box
  - sauvegarde OneDrive vers Box
  - outil de synchronisation OneDrive Box
  - copier OneDrive vers Box
  - synchronisation de cloud à cloud
  - migration OneDrive Box
  - RcloneView
  - rclone GUI
  - comparaison de dossiers
  - synchronisation cloud planifiée
tags:
  - RcloneView
  - onedrive
  - box
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser OneDrive vers Box — sauvegarde cloud avec RcloneView

> Conservez une seconde copie de vos fichiers OneDrive dans Box, déplacés directement entre les deux clouds.

Les équipes travaillent souvent avec OneDrive en interne, tandis qu'un client, un partenaire ou un processus de conformité attend les fichiers dans Box. Tout télécharger puis tout renvoyer est lent et demande de l'espace disque local que vous n'avez peut-être pas. RcloneView connecte les deux services et synchronise de cloud à cloud, avec un Dry Run en amont et une comparaison visuelle en aval.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter OneDrive et Box

Les deux services utilisent la connexion OAuth via le navigateur. Dans l'onglet Remote, cliquez sur **New Remote**, choisissez Microsoft OneDrive et connectez-vous. Répétez l'opération pour Box. Pour un compte Box Business ou Enterprise, définissez `box_sub_type = enterprise` pendant la configuration.

RcloneView peut monter et synchroniser plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux. Une fois les deux remotes créés, ouvrez-les côte à côte dans deux panneaux Explorer.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des remotes OneDrive et Box dans RcloneView" class="img-large img-center" />

## Choisir Copy ou Sync, puis lancer un Dry Run

Ouvrez l'assistant Sync et choisissez OneDrive comme source et un dossier Box comme destination. La synchronisation unidirectionnelle ne modifie que la destination : les fichiers supprimés de OneDrive seront donc aussi supprimés de Box. Si vous préférez un filet de sécurité plutôt qu'un miroir, utilisez plutôt un job Copy.

Lancez d'abord un **Dry Run**. Il liste les fichiers à copier et à supprimer sans rien modifier. Par exemple, une équipe comptable qui synchronise un dossier « Clients » de 150 Go peut confirmer l'arborescence et repérer des fichiers temporaires parasites avant l'exécution réelle.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Synchronisation de cloud à cloud de OneDrive vers Box" class="img-large img-center" />

## Filtrer et ajuster le job

L'étape 2 de l'assistant définit le nombre de transferts de fichiers, les transferts multithread et les equality checkers (vérificateurs d'égalité). Activez la comparaison par somme de contrôle si vous voulez utiliser le hachage plus la taille plutôt que la taille et la date seules. L'étape 3 permet d'exclure des fichiers selon la taille maximale, l'ancienneté ou des règles personnalisées, ou d'utiliser des filtres prédéfinis pour les documents ou les images. Box impose ses propres limites de taille d'envoi, qui dépendent de votre formule ; vérifiez votre compte avant de synchroniser de très gros fichiers.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Démarrage du job de synchronisation OneDrive vers Box" class="img-large img-center" />

## Surveiller, comparer et planifier

Suivez la progression dans l'onglet Transferring, qui affiche la vitesse, le nombre de fichiers et la taille. Ensuite, ouvrez **Compare** avec OneDrive à gauche et Box à droite, puis filtrez les fichiers présents uniquement à gauche ou différents. Job History conserve l'état, la durée et la taille de chaque exécution.

Avec une licence PLUS, vous pouvez ajouter une planification de type crontab à l'étape 4 afin que la synchronisation se répète chaque nuit pendant que RcloneView s'exécute dans la zone de notification.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare entre OneDrive et Box" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez les remotes OneDrive et Box dans l'onglet Remote.
3. Créez un job Sync ou Copy de OneDrive vers Box et lancez un Dry Run.
4. Exécutez le job, puis vérifiez avec Folder Compare et Job History.

Une seconde copie vérifiée dans Box vous offre une solution de repli fiable, quelle que soit la plateforme que votre équipe utilisera ensuite.

---

**Guides associés :**

- [Gérer le stockage OneDrive — synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Gérer le stockage Box — synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Migrer Box vers OneDrive — transférer des fichiers avec RcloneView](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)

<CloudSupportGrid />
