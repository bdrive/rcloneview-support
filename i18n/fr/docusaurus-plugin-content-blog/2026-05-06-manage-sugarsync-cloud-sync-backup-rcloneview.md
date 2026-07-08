---
slug: manage-sugarsync-cloud-sync-backup-rcloneview
title: "Gérer le stockage SugarSync — Synchronisation et sauvegarde de fichiers avec RcloneView"
authors:
  - tayson
description: "Connectez SugarSync à RcloneView et gérez vos fichiers cloud visuellement. Synchronisez, sauvegardez et transférez vos données SugarSync entre plateformes avec une interface graphique facile à utiliser."
keywords:
  - gestion du stockage cloud SugarSync
  - synchronisation SugarSync RcloneView
  - sauvegarde de fichiers SugarSync
  - interface graphique de transfert de fichiers SugarSync
  - SugarSync rclone
  - gérer SugarSync avec RcloneView
  - alternative au client de bureau SugarSync
  - outil de sauvegarde cloud SugarSync
  - synchroniser les fichiers SugarSync
  - SugarSync multi-cloud
tags:
  - RcloneView
  - sugarsync
  - cloud-storage
  - cloud-sync
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage SugarSync — Synchronisation et sauvegarde de fichiers avec RcloneView

> RcloneView apporte un contrôle complet par interface graphique à votre stockage SugarSync — parcourez, synchronisez et sauvegardez vos fichiers sans dépendre uniquement du client de bureau natif de SugarSync.

SugarSync est depuis longtemps une solution de sauvegarde cloud fiable pour les petites entreprises et les professionnels indépendants qui ont besoin d'une synchronisation fiable des fichiers entre appareils. Bien que l'application native de SugarSync couvre la synchronisation quotidienne, RcloneView ajoute des fonctionnalités puissantes pour les administrateurs informatiques et les utilisateurs avancés : tâches planifiées, transferts de cloud à cloud, migrations en masse et gestion centralisée aux côtés de vos autres comptes cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter SugarSync à RcloneView

RcloneView se connecte à SugarSync via le backend SugarSync de rclone. Dans RcloneView, accédez à l'onglet Remote > New Remote et sélectionnez SugarSync dans la liste des fournisseurs. Vous serez invité à vous authentifier avec vos identifiants de compte SugarSync, et le jeton est stocké en toute sécurité dans le stockage local chiffré de RcloneView.

Une fois connecté, vos dossiers SugarSync — y compris Magic Briefcase et tout dossier de synchronisation personnalisé — apparaissent dans l'explorateur de fichiers. Parcourez le contenu des dossiers, vérifiez la taille des fichiers et effectuez des opérations de gestion de fichiers via le menu contextuel du clic droit.

<img src="/support/images/en/blog/new-remote.png" alt="Adding SugarSync as a remote in RcloneView" class="img-large img-center" />

## Sauvegarder SugarSync vers un autre cloud

Un cas d'usage intéressant pour connecter SugarSync à RcloneView est la sauvegarde inter-cloud : copier le contenu de SugarSync vers un fournisseur secondaire comme Backblaze B2 ou Amazon S3. Un consultant indépendant disposant de plusieurs années de documents clients sur SugarSync peut configurer une tâche de synchronisation hebdomadaire pour dupliquer ce contenu vers une archive compatible S3, garantissant la redondance si le compte principal devient un jour inaccessible.

L'assistant de synchronisation de RcloneView vous guide à travers la sélection de la source, la configuration de la destination, les options de filtrage et la planification. Activez la vérification par somme de contrôle pour confirmer que chaque fichier transféré correspond exactement à sa source.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a backup job from SugarSync in RcloneView" class="img-large img-center" />

## Explorer et organiser les fichiers SugarSync

L'explorateur de fichiers à double panneau vous permet de travailler avec SugarSync et un autre cloud ou dossier local côte à côte. Comparez visuellement le contenu des dossiers grâce à la fonction de comparaison de dossiers intégrée à RcloneView — trouvez les fichiers présents d'un côté mais pas de l'autre, ou identifiez les fichiers présentant des différences de taille pouvant indiquer des synchronisations incomplètes.

Pour les grandes bibliothèques SugarSync comportant des milliers de fichiers, utilisez les fonctions de tri et de filtrage de la liste de fichiers pour naviguer rapidement. Le résumé en pied de page affiche en un coup d'œil le nombre total de fichiers et la taille de stockage combinée.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing SugarSync folder contents in RcloneView" class="img-large img-center" />

## Migrer depuis SugarSync

Si vous envisagez de migrer de SugarSync vers un autre fournisseur, RcloneView simplifie considérablement le processus. Configurez une tâche de synchronisation ponctuelle de SugarSync vers votre destination cible, utilisez le mode simulation (dry run) pour prévisualiser ce qui sera transféré, puis exécutez la migration complète. L'historique des tâches fournit un enregistrement complet des fichiers déplacés.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating SugarSync data to another cloud provider with RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Accédez à l'onglet Remote > New Remote et sélectionnez SugarSync.
3. Authentifiez-vous avec vos identifiants SugarSync et enregistrez le distant.
4. Parcourez les fichiers dans l'explorateur et configurez des tâches de synchronisation ou de sauvegarde vers d'autres fournisseurs.

RcloneView offre aux utilisateurs de SugarSync des outils de synchronisation et de sauvegarde de niveau professionnel sans remplacer les workflows avec lesquels ils sont déjà à l'aise.

---

**Guides connexes :**

- [Gérer le stockage Dropbox — Synchronisation et sauvegarde de fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Gérer le stockage Google Drive — Synchronisation et sauvegarde de fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Stockage cloud pour freelances et travailleurs indépendants — RcloneView](https://rcloneview.com/support/blog/cloud-storage-freelancers-independent-contractors-rcloneview)

<CloudSupportGrid />
