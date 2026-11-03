---
slug: migrate-box-to-koofr-rcloneview
title: "Migrer de Box vers Koofr — transférer des fichiers avec RcloneView"
authors:
  - jay
description: "Migrez de Box vers Koofr avec RcloneView : connectez les deux remotes, simulez le transfert avec Dry Run, copiez de cloud à cloud et vérifiez les résultats avec Folder Compare."
keywords:
  - migrer de Box vers Koofr
  - transfert de Box vers Koofr
  - migration Box Koofr
  - RcloneView Box
  - RcloneView Koofr
  - transfert de cloud à cloud
  - déplacer des fichiers depuis Box
  - Koofr stockage cloud européen
  - migration rclone GUI
  - filtre Box Docs
tags:
  - RcloneView
  - box
  - koofr
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Box vers Koofr — transférer des fichiers avec RcloneView

> Déplacez un espace de travail Box vers Koofr sans rien télécharger au préalable sur votre propre disque.

Les équipes quittent Box pour de nombreuses raisons : un projet est terminé, un contrat a pris fin ou l'on préfère un fournisseur de stockage européen. Koofr est une destination naturelle, mais déplacer à la main des années de dossiers est long et source d'erreurs. RcloneView connecte les deux services dans une seule fenêtre et exécute la copie de cloud à cloud, avec un Dry Run et une étape de comparaison pour confirmer que rien n'a été oublié. RcloneView permet de monter ET de synchroniser plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Box et Koofr comme remotes

Ouvrez l'onglet Remote et choisissez New Remote. Box se connecte via OAuth : votre navigateur s'ouvre, vous autorisez l'accès et RcloneView se connecte automatiquement. Si vous migrez un compte d'entreprise, Box for Business nécessite le paramètre `box_sub_type = enterprise` dans la configuration du remote.

Ajoutez Koofr comme second remote de la même manière. Une fois que les deux apparaissent dans Remote Manager, ouvrez-les côte à côte dans deux panneaux Explorer pour parcourir la source et la destination avant de déplacer le moindre fichier.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des remotes Box et Koofr dans RcloneView" class="img-large img-center" />

## Planifier la copie avec des filtres et un Dry Run

Un compte Box contient généralement plus que les fichiers que vous souhaitez conserver. L'étape 3 de l'assistant de synchronisation permet de définir une taille de fichier maximale, un âge de fichier maximal ou une limite de profondeur de dossier. Il existe aussi un filtre Box Docs prédéfini, ainsi que des règles personnalisées, par exemple pour exclure les dossiers `.git/` ou les fichiers `.iso`.

Avant de lancer quoi que ce soit, utilisez Dry Run. Il liste les fichiers qui seraient copiés et supprimés sans modifier aucun des deux côtés. Pour une migration, choisissez une tâche Copy plutôt qu'une synchronisation en miroir, afin que rien ne soit supprimé sur Koofr si la destination contient déjà des données.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de cloud à cloud de Box vers Koofr dans RcloneView" class="img-large img-center" />

## Lancer le transfert et suivre la progression

Démarrez la tâche et suivez-la dans l'onglet Transferring : la progression, la vitesse et le nombre de fichiers s'affichent en direct. Pour une grande bibliothèque, augmentez le nombre de transferts de fichiers à l'étape 2, mais gardez un nombre modéré d'equality checkers si l'un des backends répond lentement. "Retry entire sync if fails" vaut 3 par défaut, ce qui aide face aux erreurs réseau transitoires.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Suivi d'un transfert de Box vers Koofr dans l'onglet Transferring" class="img-large img-center" />

## Vérifier avec Folder Compare

Une fois la tâche terminée, ouvrez Compare avec Box à gauche et Koofr à droite. Les filtres des fichiers présents uniquement à gauche, uniquement à droite et différents montrent exactement ce qui reste. Utilisez l'action copy-right pour transférer les fichiers restants. Job History conserve le statut, la taille et le nombre de fichiers de chaque exécution comme trace de la migration.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparaison des dossiers Box et Koofr après la migration" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Box (OAuth) et Koofr comme remotes.
3. Créez une tâche Copy avec des filtres, puis lancez un Dry Run.
4. Exécutez la tâche, puis confirmez le résultat avec Folder Compare.

Ne touchez pas au compte Box tant que Compare n'indique pas que les deux côtés correspondent.

---

**Guides associés :**

- [Gérer le stockage Box — synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Gérer le stockage Koofr — synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Migrer de Box vers Google Drive avec RcloneView](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)

<CloudSupportGrid />
