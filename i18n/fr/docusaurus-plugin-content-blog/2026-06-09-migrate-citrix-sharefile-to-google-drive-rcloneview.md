---
slug: migrate-citrix-sharefile-to-google-drive-rcloneview
title: "Migrer Citrix ShareFile vers Google Drive — Transférez vos fichiers d'entreprise avec RcloneView"
authors:
  - jay
description: "Découvrez comment migrer Citrix ShareFile vers Google Drive avec RcloneView. Déplacez documents et dossiers d'entreprise via une interface graphique—sans script ni ligne de commande."
keywords:
  - migration Citrix ShareFile vers Google Drive
  - migrer ShareFile vers Google Drive
  - transfert ShareFile Google Drive
  - outil de migration de fichiers cloud
  - migration ShareFile RcloneView
  - migration cloud d'entreprise
  - alternative à ShareFile Google Drive
  - interface graphique de migration de stockage cloud
tags:
  - RcloneView
  - sharefile
  - google-drive
  - cloud-to-cloud
  - migration
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer Citrix ShareFile vers Google Drive — Transférez vos fichiers d'entreprise avec RcloneView

> Déplacez toute votre bibliothèque ShareFile vers Google Drive sans écrire une seule ligne de code—RcloneView gère le transfert via une interface visuelle, étape par étape.

Citrix ShareFile sert bien de nombreuses organisations en tant que plateforme de partage de fichiers d'entreprise, mais les équipes se tournent de plus en plus vers Google Drive pour son intégration plus étroite avec Google Workspace, sa collaboration en temps réel et son interface familière. Si votre organisation envisage ce changement, RcloneView simplifie le transfert cloud-à-cloud : connectez les deux distants, configurez une tâche de copie et déplacez vos fichiers à pleine vitesse avec un suivi de progression en direct.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi les équipes passent de ShareFile à Google Drive

ShareFile est une plateforme d'entreprise performante, mais elle nécessite une gestion IT rigoureuse—la gestion des utilisateurs, les permissions de dossiers et les politiques de partage externe ajoutent toutes une charge administrative. Google Drive, surtout associé à Google Workspace, simplifie la collaboration en permettant aux membres de l'équipe de commenter, modifier et partager des documents directement dans le navigateur sans avoir à télécharger les fichiers au préalable.

Pour les organisations disposant de vastes bibliothèques de PDF, présentations, contrats et fichiers multimédias dans ShareFile, le défi de la migration consiste à déplacer de manière fiable des dizaines de milliers de fichiers sans perdre la structure des dossiers ni l'intégrité des fichiers. RcloneView résout ce problème en traitant ShareFile et Google Drive comme des distants navigables, en s'appuyant sur le moteur de transfert éprouvé de rclone pour gérer le déplacement effectif des données.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new remote in RcloneView" class="img-large img-center" />

## Connecter Citrix ShareFile dans RcloneView

Ouvrez RcloneView et accédez à **Remote tab > New Remote**. Sélectionnez Citrix ShareFile dans la liste des fournisseurs. Vous aurez besoin du nom d'hôte de votre sous-domaine ShareFile et d'un Root Folder ID—c'est l'identifiant du dossier au sein de ShareFile que vous souhaitez utiliser comme racine de votre distant. RcloneView vous guide à travers chaque champ requis, et une fois enregistré, le distant ShareFile apparaît sous forme de panneau dans l'Explorateur, où vous pouvez parcourir les dossiers et vérifier l'accessibilité de vos données avant de lancer un transfert.

Comme ShareFile utilise une authentification de niveau entreprise, laissez un instant au flux d'autorisation pour se terminer. Une fois connecté, vous pouvez parcourir toute la hiérarchie de dossiers ShareFile, vérifier la taille des fichiers et confirmer la structure avant le début de la migration.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer configuration in RcloneView" class="img-large img-center" />

## Configurer Google Drive et lancer la migration

Ajoutez Google Drive comme second distant via **Remote tab > New Remote**. Google Drive utilise une authentification OAuth par navigateur—RcloneView ouvre un onglet de navigateur, vous vous connectez avec votre compte Google, et la connexion s'établit automatiquement, sans clé API à gérer manuellement.

Une fois les deux distants prêts, rendez-vous dans **Home tab > Sync** pour ouvrir l'assistant de synchronisation en 4 étapes. Définissez Citrix ShareFile comme source et Google Drive comme destination. Avant de valider, utilisez l'option **Dry Run** pour prévisualiser exactement quels fichiers seront copiés sans effectuer aucune modification—une vérification de sécurité essentielle pour les migrations d'entreprise à grande échelle, où des écrasements accidentels pourraient être coûteux. Une fois la prévisualisation satisfaisante, lancez la tâche et suivez la progression en direct dans l'onglet Transferring en bas de la fenêtre.

Pour les organisations dont les fichiers continuent d'arriver dans ShareFile pendant la fenêtre de migration, une licence PLUS débloque la synchronisation planifiée, permettant d'automatiser les exécutions de suivi pour récupérer tout contenu nouvellement ajouté.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a migration job in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Citrix ShareFile comme distant (Remote tab > New Remote), en saisissant le nom d'hôte de votre sous-domaine et le Root Folder ID.
3. Ajoutez Google Drive comme second distant via une connexion OAuth par navigateur.
4. Ouvrez l'assistant Sync, définissez ShareFile comme source et Google Drive comme destination, puis effectuez d'abord un Dry Run.
5. Exécutez la migration et suivez la progression dans l'onglet Transferring.

Migrer vers Google Drive ne nécessite pas des mois de travail IT—RcloneView condense une migration d'entreprise complexe en un flux de travail graphique fiable et reproductible, que votre équipe peut exécuter et vérifier à chaque étape.

---

**Guides connexes :**

- [Migrer Citrix ShareFile vers OneDrive et SharePoint](https://rcloneview.com/support/blog/migrate-citrix-sharefile-onedrive-sharepoint-rcloneview)
- [Gérer le stockage Citrix ShareFile — Synchronisation et sauvegarde avec RcloneView](https://rcloneview.com/support/blog/manage-citrix-sharefile-cloud-sync-backup-rcloneview)
- [Migrer SharePoint vers Google Drive avec RcloneView](https://rcloneview.com/support/blog/migrate-sharepoint-to-google-drive-rcloneview)

<CloudSupportGrid />
