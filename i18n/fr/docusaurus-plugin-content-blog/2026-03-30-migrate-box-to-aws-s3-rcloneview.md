---
slug: migrate-box-to-aws-s3-rcloneview
title: "Migrer de Box vers AWS S3 — Transférer des fichiers avec RcloneView"
authors:
  - tayson
description: "Migrez vos fichiers de Box vers AWS S3 avec RcloneView. Transférez du contenu d'entreprise vers un stockage S3 évolutif avec vérification par somme de contrôle et tâches planifiées."
keywords:
  - box to aws s3
  - migrate box to s3
  - box cloud migration
  - aws s3 transfer
  - cloud-to-cloud migration
  - rcloneview box transfer
  - enterprise cloud migration
  - box to amazon s3
  - box backup to s3
  - object storage migration
tags:
  - box
  - amazon-s3
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Box vers AWS S3 — Transférer des fichiers avec RcloneView

> Déplacer le contenu de votre organisation de Box vers AWS S3 débloque un stockage programmable à grande échelle — et RcloneView se charge du gros du travail.

Box excelle dans la gestion de contenu d'entreprise grâce à ses métadonnées, ses workflows et ses fonctionnalités de gouvernance. Mais lorsque votre architecture évolue vers des services natifs AWS — des fonctions Lambda traitant les téléversements, Athena interrogeant des data lakes, ou CloudFront diffusant des ressources — stocker les fichiers dans S3 élimine le middleware nécessaire pour relier Box à votre stack AWS. RcloneView migre les fichiers de Box vers des buckets S3 via une interface visuelle, en préservant la structure des dossiers et en vérifiant chaque transfert.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi passer de Box à AWS S3

AWS S3 offre un stockage pratiquement illimité avec une tarification granulaire répartie sur six classes de stockage — de S3 Standard pour les données fréquemment consultées à S3 Glacier Deep Archive à 0,00099 $ par Go et par mois pour la conservation à long terme. Box facture des frais de licence par utilisateur qui peuvent dépasser 20 $ par utilisateur et par mois sur les plans entreprise, et son stockage est mutualisé plutôt qu'alloué individuellement.

Pour les équipes de développement, l'écosystème de S3 est inégalé. Les notifications d'événements déclenchent des fonctions Lambda, S3 Select interroge les données sur place, les règles de versionnage et de réplication protègent contre la perte de données, et les politiques IAM offrent un contrôle d'accès précis. L'API de Box est performante mais conçue pour la collaboration sur le contenu, pas pour des opérations de stockage au niveau infrastructure. Migrer vers S3 aligne votre stockage de fichiers avec le reste de votre infrastructure AWS.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and AWS S3 remotes in RcloneView" class="img-large img-center" />

## Configurer les distants Box et S3

Ajoutez un distant Box dans RcloneView en sélectionnant « Box » comme type de fournisseur. Le flux OAuth ouvre votre navigateur pour l'authentification Box. Connectez-vous avec vos identifiants Box et autorisez RcloneView. Le distant se connecte à votre dossier racine Box, y compris tous les dossiers partagés avec vous dont vous êtes propriétaire.

Pour AWS S3, créez un nouveau distant et sélectionnez « Amazon S3 ». Saisissez votre AWS Access Key ID et votre Secret Access Key, ou utilisez un rôle IAM si RcloneView s'exécute sur une instance EC2. Sélectionnez votre région cible et indiquez le nom du bucket. RcloneView valide les identifiants et confirme l'accès au bucket. Si vous devez créer un nouveau bucket, faites-le d'abord dans la console AWS avec la région, le chiffrement et les paramètres de versionnage de votre choix.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Box to S3 cloud-to-cloud transfer in RcloneView" class="img-large img-center" />

## Lancer la migration

Utilisez l'explorateur à deux volets pour parcourir Box d'un côté et S3 de l'autre. Sélectionnez les dossiers Box que vous souhaitez migrer — des répertoires de département entiers, des archives de projets ou des arborescences de contenu spécifiques. Naviguez jusqu'au préfixe S3 cible de l'autre côté.

Pour une migration gérée, créez une tâche de copie dans le gestionnaire de tâches. Définissez Box comme source et S3 comme destination. Utilisez le mode « Copier » pour transférer les fichiers sans les supprimer de Box, ce qui vous donne une possibilité de retour en arrière. L'API de Box utilise des sommes de contrôle SHA-1, et S3 stocke des hachages MD5 et ETag — RcloneView gère la comparaison en utilisant par défaut la taille du fichier et la date de modification, avec une vérification par somme de contrôle optionnelle disponible.

Box applique des limites de débit d'API (environ 10 appels API par seconde pour les comptes entreprise). RcloneView respecte ces limites grâce à des nouvelles tentatives automatiques et un recul exponentiel. Pour les migrations volumineuses comptant des centaines de milliers de fichiers, exécutez la tâche sur plusieurs jours en utilisant des fenêtres planifiées.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Starting a Box to AWS S3 migration job in RcloneView" class="img-large img-center" />

## Validation post-migration et bascule

Une fois le transfert terminé, validez la migration à l'aide de la fonction de comparaison de RcloneView. Ouvrez les deux distants côte à côte et lancez une comparaison de dossiers pour vérifier le nombre de fichiers, les tailles et la structure. Consultez l'historique des tâches pour repérer les fichiers ignorés ou en erreur, et relancez la tâche pour les récupérer.

Envisagez de définir la classe de stockage du bucket S3 en fonction des schémas d'accès. Les fichiers de projet fréquemment consultés ont leur place dans S3 Standard, tandis que le contenu archivé peut être déplacé vers S3 Intelligent-Tiering ou Glacier via des règles de cycle de vie. Gardez le distant Box actif dans RcloneView pendant la période de transition, en exécutant des tâches de synchronisation incrémentale jusqu'à ce que tous les utilisateurs aient migré leurs workflows vers S3.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Box to S3 migration transfers" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Authentifiez votre compte Box via OAuth lors de la création du distant Box.
3. Ajoutez votre distant AWS S3 avec des identifiants IAM et sélectionnez le bucket et la région cibles.
4. Créez une tâche de copie de Box vers S3, configurez la gestion des limites de débit et planifiez-la sur plusieurs jours pour les jeux de données volumineux.

Une fois tout le contenu vérifié dans S3, faites basculer vos applications et désactivez le stockage Box une fois la transition terminée par votre équipe.

---

**Guides associés :**

- [Migrer de Box vers SharePoint et OneDrive avec RcloneView](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)
- [Migrer de Box vers Google Drive avec RcloneView](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)
- [Monter le stockage Box comme lecteur réseau avec RcloneView](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />
