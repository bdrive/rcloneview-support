---
slug: migrate-dropbox-to-koofr-rcloneview
title: "Migrer Dropbox vers Koofr — Transférer des fichiers avec RcloneView"
authors:
  - robin
description: "Migrez Dropbox vers Koofr avec RcloneView : connectez les deux remotes, lancez un Dry Run, copiez de cloud à cloud et vérifiez le résultat avec Folder Compare."
keywords:
  - migrer Dropbox vers Koofr
  - transfert de Dropbox vers Koofr
  - migration Dropbox Koofr
  - RcloneView Dropbox
  - RcloneView Koofr
  - transfert de cloud à cloud
  - déplacer des fichiers depuis Dropbox
  - stockage cloud européen Koofr
  - migration rclone GUI
  - migration Dropbox for Business
tags:
  - RcloneView
  - dropbox
  - koofr
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer Dropbox vers Koofr — Transférer des fichiers avec RcloneView

> Déplacez un compte Dropbox vers Koofr de cloud à cloud, avec un aperçu avant toute copie et une comparaison ensuite.

Une agence de design clôture le compte d'un client, ou un indépendant souhaite que son archive soit hébergée par un fournisseur européen. Dans les deux cas, faire glisser des milliers de dossiers Dropbox via un ordinateur portable est lent et source d'erreurs. RcloneView connecte Dropbox et Koofr dans une seule fenêtre, exécute la copie entre les deux et propose Dry Run et Folder Compare pour confirmer le résultat. RcloneView permet de monter ET de synchroniser plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Dropbox et Koofr comme remotes

Ouvrez l'onglet Remote et choisissez New Remote. Dropbox se connecte via OAuth : votre navigateur s'ouvre, vous approuvez l'accès et RcloneView se connecte automatiquement. Pour un compte d'entreprise, Dropbox for Business nécessite le paramètre `dropbox_business = true` dans la configuration du remote.

Ajoutez Koofr comme second remote. Une fois les deux affichés dans Remote Manager, ouvrez-les côte à côte dans deux panneaux Explorer. Parcourez l'arborescence source et la destination avant de déplacer quoi que ce soit, afin de savoir quels dossiers comptent.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des remotes Dropbox et Koofr dans RcloneView" class="img-large img-center" />

## Planifier la copie avec des filtres et un Dry Run

La plupart des comptes Dropbox contiennent des fichiers temporaires que vous ne souhaitez pas emporter. L'étape 3 de l'assistant de tâches propose une taille de fichier maximale, un âge de fichier maximal et une limite de profondeur de dossier. Les filtres prédéfinis couvrent les fichiers Music, Video, Image et Document, et des règles personnalisées peuvent exclure des motifs tels que les dossiers `.git/` ou les fichiers `.iso`.

Lancez un Dry Run avant la tâche réelle. Il liste les fichiers qui seraient copiés ou supprimés sans toucher à aucun des deux côtés. Pour une migration, choisissez une tâche Copy plutôt qu'une synchronisation en miroir, afin que rien de ce qui est déjà stocké sur Koofr ne soit supprimé.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de cloud à cloud de Dropbox vers Koofr dans RcloneView" class="img-large img-center" />

## Lancer le transfert et suivre la progression

Démarrez la tâche et suivez-la dans l'onglet Transferring, qui affiche la progression, la vitesse et le nombre de fichiers. Pour une grande bibliothèque, augmentez le nombre de transferts de fichiers à l'étape 2, mais gardez un nombre modeste de vérificateurs d'égalité si l'un des services répond lentement. « Retry entire sync if fails » vaut 3 par défaut, ce qui absorbe les erreurs réseau passagères.

Si la bibliothèque est trop volumineuse pour une seule session, enregistrez la tâche dans Job Manager et relancez-la plus tard. Une tâche Copy ne transfère que les fichiers manquants ou différents, de sorte qu'un second passage reprend là où le premier s'est arrêté.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Suivi d'un transfert de Dropbox vers Koofr dans l'onglet Transferring" class="img-large img-center" />

## Vérifier avec Folder Compare

Une fois la tâche terminée, ouvrez Compare avec Dropbox à gauche et Koofr à droite. Les filtres pour les fichiers présents uniquement à gauche, uniquement à droite et différents montrent ce qui reste. L'action de copie vers la droite transfère les éventuels restes. Job History enregistre l'état, la taille, la vitesse et le nombre de fichiers de chaque exécution, ce qui constitue une documentation utile de la migration.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History montrant une migration terminée de Dropbox vers Koofr" class="img-large img-center" />

## Premiers pas

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Dropbox (OAuth) et Koofr comme remotes.
3. Créez une tâche Copy avec des filtres, puis lancez un Dry Run.
4. Exécutez la tâche, puis confirmez le résultat avec Folder Compare.

Laissez le compte Dropbox intact tant que Compare n'indique pas que les deux côtés correspondent.

---

**Guides associés :**

- [Gérer le stockage Koofr — synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Migrer Koofr vers Dropbox avec RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-dropbox-rcloneview)
- [Migrer Dropbox vers pCloud avec RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-pcloud-rcloneview)

<CloudSupportGrid />
