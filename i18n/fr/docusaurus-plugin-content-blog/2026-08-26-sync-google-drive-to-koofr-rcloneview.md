---
slug: sync-google-drive-to-koofr-rcloneview
title: "Synchroniser Google Drive avec Koofr — Sauvegarde cloud avec RcloneView"
authors:
  - alex
description: "Synchronisez Google Drive avec Koofr grâce à RcloneView pour obtenir une copie de sauvegarde hébergée en Europe, configurée sans ligne de commande."
keywords:
  - sync google drive to koofr
  - sauvegarde google drive koofr
  - synchronisation koofr RcloneView
  - sauvegarde cloud européenne google drive
  - synchronisation stockage cloud koofr
  - migration google drive vers koofr
  - outil de synchronisation entre clouds
  - transfert koofr google drive
  - synchronisation cloud à cloud rcloneview
tags:
  - RcloneView
  - google-drive
  - koofr
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Google Drive avec Koofr — Sauvegarde cloud avec RcloneView

> Conservez un miroir hébergé en Europe de votre Google Drive sur Koofr sans écrire une seule commande rclone.

Les équipes ayant des clients basés dans l'UE ou des préférences en matière de résidence des données souhaitent souvent conserver une seconde copie de leur contenu Google Drive sur une infrastructure européenne. Koofr, basé dans l'UE, convient naturellement à ce rôle, mais re-téléverser manuellement les fichiers après chaque modification n'est pas viable. RcloneView connecte les deux comptes et exécute la synchronisation en tant que job enregistré, maintenant la copie Koofr à jour sans déplacement manuel de fichiers.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Google Drive et Koofr

Les deux distants utilisent les méthodes de configuration propres à chaque fournisseur : Google Drive se connecte via une connexion OAuth par navigateur, et Koofr est ajouté de la même manière depuis l'onglet Remote > New Remote. Une fois les deux apparus dans le Remote Manager, ouvrez deux panneaux Explorer côte à côte — l'un sur Google Drive, l'autre sur Koofr — afin de pouvoir glisser-déposer une copie de test rapide avant de configurer un job automatisé. Le glissement entre les deux panneaux copie toujours plutôt que de déplacer, puisqu'il s'agit de distants séparés.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Koofr remotes in RcloneView" class="img-large img-center" />

## Configurer le job de synchronisation

Lancez l'assistant de synchronisation depuis l'onglet Home et définissez Google Drive comme source et Koofr comme destination. Choisissez l'option unidirectionnelle « Modifier uniquement la destination » pour que la copie Koofr reflète toujours Drive sans rien supprimer accidentellement à la source. À l'étape 2, l'activation de la comparaison par somme de contrôle garantit que les fichiers sont comparés par contenu plutôt que par simple date de modification, ce qui compte lorsque les fichiers passent par différents clients de synchronisation avant d'atteindre Drive.

La synchronisation 1:N de RcloneView peut refléter le même dossier Google Drive vers Koofr et des destinations supplémentaires en même temps, avec la licence FREE — utile si une seconde cible de sauvegarde est ajoutée plus tard sans reconstruire le job.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job from Google Drive to Koofr" class="img-large img-center" />

## Exécuter un Dry Run avant la première synchronisation

Avant de lancer un transfert complet, exécutez Dry Run pour prévisualiser exactement les fichiers qui seront copiés et confirmer qu'aucun ne sera supprimé de Koofr de manière inattendue. Cela est particulièrement utile la première fois qu'un job s'exécute sur un compte Koofr contenant déjà du contenu dans le dossier de destination, car cela révèle les conflits avant qu'ils ne deviennent de véritables écrasements.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job from Google Drive to Koofr in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Google Drive et Koofr comme distants.
3. Créez un job de synchronisation unidirectionnelle avec la comparaison par somme de contrôle activée.
4. Exécutez un dry run, puis lancez le job pour construire votre premier miroir Koofr.

Une synchronisation permanente de Google Drive vers Koofr vous offre une sauvegarde hébergée en Europe que vous pouvez relancer en quelques clics, si bien que votre copie de récupération ne dépend jamais de la reconstruction du job.

---

**Guides connexes :**

- [Migrer de Koofr vers Google Drive — Transférer des fichiers avec RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-google-drive-rcloneview)
- [Gérer le stockage Koofr — Synchronisation et sauvegarde de fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Synchroniser Koofr avec Amazon S3 — Sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/sync-koofr-to-amazon-s3-rcloneview)

<CloudSupportGrid />
