---
slug: migrate-google-drive-to-aws-s3-rcloneview
title: "Migrer de Google Drive vers AWS S3 avec RcloneView"
authors:
  - tayson
description: "Migrez de Google Drive vers AWS S3 avec RcloneView. Configurez les deux remotes, planifiez le transfert, déplacez les données et vérifiez la migration étape par étape."
keywords:
  - rcloneview
  - google drive to aws s3
  - migrate google drive to s3
  - google drive s3 migration
  - google drive to amazon s3
  - cloud storage migration
  - google drive backup to s3
  - google workspace to aws
  - rclone google drive s3
  - cloud to cloud migration gui
tags:
  - google-drive
  - amazon-s3
  - migration
  - cloud-migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Google Drive vers AWS S3 avec RcloneView

> Passer de Google Drive à AWS S3 vous offre un contrôle au niveau objet, des politiques de cycle de vie et une durabilité de niveau infrastructure — **RcloneView** gère le transfert via une interface visuelle.

Google Drive excelle dans la collaboration et l'édition de documents, mais les organisations qui ont besoin d'un contrôle d'accès précis, d'une intégration programmatique ou d'un archivage à long terme le dépassent souvent. AWS S3 offre 11 neuf de durabilité, des transitions de cycle de vie vers Glacier pour le stockage froid, et des politiques d'accès basées sur IAM. Migrer de Google Drive vers S3 peut sembler intimidant — modèles d'authentification différents, sémantique de fichiers différente, et potentiellement des téraoctets de données. RcloneView simplifie le processus avec une interface graphique visuelle qui gère la complexité en coulisses.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi migrer de Google Drive vers AWS S3

Google Drive stocke les fichiers comme des objets avec des métadonnées spécifiques à Google — types MIME, permissions de partage, et formats de documents natifs (Docs, Sheets, Slides). AWS S3 stocke les objets sous forme d'octets bruts avec des métadonnées définies par l'utilisateur, offrant une plus grande flexibilité pour l'accès programmatique. Les raisons courantes de cette migration incluent :

- **Optimisation des coûts** : S3 Standard coûte environ 0,023 $/Go/mois, et S3 Glacier Deep Archive descend à 0,00099 $/Go/mois. Pour les grands ensembles de données rarement consultés, S3 est nettement moins cher que les plans de stockage Google Workspace.
- **Intégration à l'infrastructure** : Les applications s'exécutant sur AWS peuvent accéder directement à S3 avec des rôles IAM, éliminant le besoin de jetons OAuth et de quotas d'API.
- **Conformité** : S3 prend en charge Object Lock pour la conformité WORM, les politiques de bucket pour les restrictions basées sur IP, et CloudTrail pour la journalisation d'audit.
- **Gestion du cycle de vie** : Faites automatiquement passer les fichiers de Standard à Infrequent Access puis à Glacier en fonction de leur ancienneté, réduisant les coûts sans intervention manuelle.

## Configuration des deux remotes

### Remote Google Drive

Ouvrez le Gestionnaire de remotes de RcloneView et ajoutez un remote Google Drive. Autorisez via OAuth, en sélectionnant la portée d'accès complète. Si vous devez migrer des Drive partagés, sélectionnez le Drive partagé cible lors de la configuration. Pour les grandes migrations, envisagez d'enregistrer votre propre ID client de projet Google Cloud pour augmenter les limites de quota d'API au-delà des 10 000 requêtes par 100 secondes par défaut.

### Remote AWS S3

Ajoutez un remote S3 dans le Gestionnaire de remotes. Fournissez votre AWS Access Key ID et votre Secret Access Key, sélectionnez la région cible, et spécifiez le nom du bucket. Si le bucket n'existe pas, vous pouvez le créer depuis RcloneView ou la console AWS. Pour la classe de stockage, choisissez Standard pour les données fréquemment consultées ou Standard-IA pour les migrations d'archivage.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and AWS S3 remotes in RcloneView" class="img-large img-center" />

## Planification de la migration

Avant de transférer des données, évaluez la portée :

1. **Audit de la taille** : Utilisez l'analyse de stockage de RcloneView pour déterminer la taille totale de votre Google Drive. Cela aide à estimer les coûts S3 et le temps de transfert.
2. **Gestion des Google Docs** : Les documents Google natifs (Docs, Sheets, Slides) n'ont aucune taille de fichier sur Drive. Pendant la migration, RcloneView les exporte vers des formats standard (docx, xlsx, pptx). Décidez si vous avez besoin de ces exports ou si vous pouvez les ignorer.
3. **Structure des dossiers** : Google Drive autorise des caractères dans les noms de fichiers que S3 traite différemment. RcloneView encode automatiquement les caractères spéciaux, mais examinez votre structure de dossiers pour repérer un niveau d'imbrication extrêmement profond ou des noms de chemin très longs.
4. **Bande passante** : Une migration de 1 To à 100 Mbps prend environ 22 heures. Planifiez les migrations pendant les heures creuses ou définissez des limites de bande passante pour éviter de perturber d'autres opérations.

## Exécution de la migration

Ouvrez Google Drive dans le panneau de gauche et S3 dans le panneau de droite. Naviguez jusqu'au dossier source sur Drive et au préfixe cible sur S3. Vous pouvez copier l'intégralité du Drive ou sélectionner des dossiers spécifiques.

RcloneView utilise les sommes de contrôle MD5 de Google Drive et les compare aux ETags S3 pour les fichiers de moins de 5 Go. Pour les fichiers plus volumineux téléversés en multipart, les ETags S3 ne sont pas des MD5 standard — RcloneView se rabat alors sur une comparaison par taille et date de modification.

Pour la migration initiale, utilisez une tâche de copie plutôt qu'une synchronisation, afin d'éviter tout risque de suppression de fichiers sur la destination. Une fois le transfert initial terminé et les données vérifiées, vous pouvez passer à la synchronisation pour une réplication continue.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Google Drive to AWS S3 in RcloneView two-pane explorer" class="img-large img-center" />

## Vérification de la migration

Une fois le transfert terminé, utilisez la fonction de comparaison de RcloneView pour vérifier que tous les fichiers sont bien arrivés. Sélectionnez la source Google Drive et la destination S3, puis lancez une comparaison. Les fichiers identiques apparaissent comme tels ; les fichiers différents ou manquants sont mis en évidence.

Pour les migrations critiques, exécutez une opération de vérification qui calcule les sommes de contrôle des deux côtés et signale toute divergence. Cela ajoute du temps mais fournit une vérification cryptographique de l'intégrité des données.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Google Drive to S3 migration in RcloneView" class="img-large img-center" />

## Après la migration : synchronisation continue ou bascule

Si vous exécutez Google Drive et S3 en parallèle pendant une période de transition, planifiez une tâche de synchronisation quotidienne dans RcloneView pour maintenir S3 à jour avec les modifications de Drive. Une fois prêt à basculer, désactivez la tâche de synchronisation et désaffectez le stockage Google Drive.

Pour les organisations qui passent de Google Workspace à une pile native AWS, cette migration n'est souvent qu'une partie d'une transition de plateforme plus large. RcloneView peut gérer le déplacement des données pendant que votre équipe gère les changements d'applications et de flux de travail.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling ongoing Google Drive to S3 sync in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez les remotes Google Drive et AWS S3 dans le Gestionnaire de remotes.
3. Effectuez un audit de stockage pour estimer la taille et le coût de la migration.
4. Exécutez une tâche de copie de Drive vers S3 et vérifiez avec la comparaison.
5. Planifiez éventuellement une synchronisation continue jusqu'à ce que vous soyez prêt à basculer.

Google Drive gère la collaboration, mais AWS S3 offre la durabilité, la gestion du cycle de vie et l'accès programmatique dont les charges de travail de production ont besoin. RcloneView fait le pont entre les deux avec un parcours de migration simple.

---

**Guides connexes :**

- [Ajouter Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [Ajouter AWS S3 et compatibles S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Comparer le contenu des dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
