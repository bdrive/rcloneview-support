---
slug: migrate-aws-s3-to-google-drive-rcloneview
title: "Migrer d'AWS S3 vers Google Drive — Transférer des fichiers avec RcloneView"
authors:
  - tayson
description: "Déplacez des fichiers de vos buckets AWS S3 vers Google Drive grâce à l'interface graphique de RcloneView. Aucune ligne de commande requise pour les migrations S3 vers Google Drive — transférez, vérifiez et planifiez en toute simplicité."
keywords:
  - migrer AWS S3 vers Google Drive
  - transfert S3 vers Google Drive
  - migration AWS S3 Google Drive
  - rclone S3 vers Google Drive
  - outil de migration cloud à cloud
  - déplacer des fichiers S3 vers Google Drive
  - stockage objet vers Google Drive
  - migration S3 RcloneView
tags:
  - amazon-s3
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer d'AWS S3 vers Google Drive — Transférer des fichiers avec RcloneView

> RcloneView gère les migrations S3 vers Google Drive comme un transfert direct de cloud à cloud — aucun téléchargement local requis, avec une progression en temps réel et une vérification par somme de contrôle.

Migrer d'AWS S3 vers Google Drive est un scénario courant lorsque les équipes passent d'un stockage axé sur l'infrastructure à des plateformes orientées collaboration. Une startup peut archiver des années de journaux et de ressources d'applications S3 dans Google Drive pour faciliter l'accès entre équipes. Une petite agence peut consolider les livrables clients issus de buckets S3 par projet dans un Google Drive partagé. RcloneView rend cette migration visuelle et vérifiable, en gérant le transfert côté serveur sans mettre les fichiers en attente sur votre machine locale.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurer les deux remotes

Avant de migrer, ajoutez les deux fournisseurs cloud à RcloneView. Pour AWS S3, allez dans **Onglet Remote → New Remote → Amazon S3**, saisissez votre Access Key ID, votre Secret Access Key, et sélectionnez la région de votre bucket. Pour Google Drive, ajoutez un autre remote via une connexion OAuth dans le navigateur — RcloneView ouvre la page d'autorisation de Google et enregistre le jeton automatiquement.

Une fois les deux remotes configurés, ouvrez l'Explorer en disposition à deux panneaux. Le panneau de gauche affiche votre bucket S3, le panneau de droite affiche votre dossier Google Drive cible. Cette vue côte à côte est idéale pour confirmer la structure des dossiers avant le début de la migration.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring AWS S3 and Google Drive remotes in RcloneView" class="img-large img-center" />

## Exécuter la migration avec l'assistant de synchronisation

Pour les migrations à grande échelle, utilisez l'assistant Sync Job plutôt que le glisser-déposer manuel. Dans **Job Manager → Add Job**, définissez la source sur le chemin de votre bucket S3 (par exemple, `mybucket/exports/`) et la destination sur votre dossier Google Drive. À l'étape 2, réglez le nombre de transferts simultanés entre 8 et 12 selon votre bande passante, et activez la vérification par somme de contrôle pour confirmer l'intégrité de chaque fichier après le transfert.

Effectuez d'abord un **Dry Run**. RcloneView listera tous les fichiers qu'il copierait sans effectuer réellement le transfert. Pour un bucket contenant 50 000 fichiers répartis sur plusieurs centaines de Go, cet aperçu vous permet de confirmer la portée avant de vous engager dans des heures de transfert. Si la liste des fichiers vous convient, exécutez la synchronisation réelle.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="S3 to Google Drive cloud-to-cloud transfer in RcloneView" class="img-large img-center" />

## Gérer les différences de types de fichiers et les filtres

Les buckets S3 contiennent souvent des fichiers générés automatiquement — fichiers `.log`, téléversements temporaires, objets marqueurs de zéro octet — qui n'ont pas besoin d'arriver dans Google Drive. Utilisez le filtrage de l'étape 3 pour exclure les extensions indésirables : ajoutez `.log`, `.tmp` et `.part` aux filtres d'exclusion personnalisés. Vous pouvez également définir un filtre d'ancienneté maximale des fichiers pour ne migrer que les fichiers modifiés au cours des 90 derniers jours, réduisant ainsi la portée du transfert pour les cas d'usage actifs.

Google Drive présente quelques particularités concernant les noms de fichiers : les caractères comme `?`, `*` et `:` dans les clés d'objets S3 seront automatiquement translittérés par rclone. RcloneView affiche les erreurs d'encodage dans l'onglet Log afin que vous puissiez examiner les objets ayant nécessité un changement de nom.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Executing the S3 to Google Drive migration job in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre remote AWS S3 en utilisant Access Key + Secret + Region dans l'assistant New Remote.
3. Ajoutez votre remote Google Drive via l'authentification OAuth dans le navigateur.
4. Créez une tâche Sync dans Job Manager, exécutez un Dry Run pour prévisualiser, puis lancez la migration.

Avec RcloneView, votre migration S3 vers Google Drive s'exécute en toute transparence — sans scripts en ligne de commande, sans frais de mise en attente, et avec un historique complet des tâches pour vos archives.

---

**Guides connexes :**

- [Migrer Google Drive vers AWS S3 avec RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-aws-s3-rcloneview)
- [Sauvegarde incrémentielle : Google Drive vers Amazon S3](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)
- [Migrations cloud vérifiées par somme de contrôle avec RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
