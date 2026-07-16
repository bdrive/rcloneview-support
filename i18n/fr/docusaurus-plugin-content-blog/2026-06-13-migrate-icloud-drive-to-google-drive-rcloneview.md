---
slug: migrate-icloud-drive-to-google-drive-rcloneview
title: "Migrer iCloud Drive vers Google Drive — Transférer des fichiers avec RcloneView"
authors:
  - jay
description: "Migrez iCloud Drive vers Google Drive avec RcloneView — un guide étape par étape pour transférer vos fichiers cloud Apple vers Google sans téléchargements manuels."
keywords:
  - iCloud Drive vers Google Drive
  - migrer iCloud Drive vers Google Drive
  - migration iCloud Drive
  - transférer des fichiers iCloud vers Google Drive
  - RcloneView iCloud Drive
  - outil de migration cloud
  - déplacer des fichiers d'iCloud vers Google Drive
  - transfert de fichiers entre clouds
  - synchronisation iCloud Drive RcloneView
tags:
  - cloud-to-cloud
  - migration
  - google-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer iCloud Drive vers Google Drive — Transférer des fichiers avec RcloneView

> Déplacez toute votre bibliothèque iCloud Drive vers Google Drive sans tout télécharger au préalable — RcloneView gère le transfert directement entre les deux services.

Passer d'un flux de travail centré sur Apple à Google Workspace — ou simplement vouloir des fichiers accessibles sur toutes les plateformes — implique souvent de migrer iCloud Drive vers Google Drive. Télécharger et re-téléverser manuellement des gigaoctets de données fait perdre du temps et risque des transferts incomplets. RcloneView se connecte directement aux deux services et déplace les fichiers d'un cloud à l'autre, tout en gardant vos originaux intacts pendant tout le processus.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi passer d'iCloud Drive à Google Drive

iCloud Drive s'intègre étroitement à l'écosystème Apple, mais en dehors de macOS et iOS, l'expérience devient fragmentée. Google Drive fonctionne nativement sur toutes les grandes plateformes et se connecte aux outils Google Workspace dont dépendent quotidiennement les équipes multiplateformes. Un studio de design avec 300 Go de fichiers de projet, par exemple, peut avoir besoin de tout centraliser dans Google Drive lors de l'intégration de clients qui travaillent exclusivement avec Google Docs et Slides.

iCloud Drive synchronise silencieusement les dossiers Bureau, Documents et autres avec les serveurs d'Apple — ce qui signifie que des années de fichiers accumulés s'y trouvent souvent sans inventaire clair. Migrer vers Google Drive vous offre une visibilité centralisée, des contrôles de partage granulaires et un accès depuis n'importe quel appareil sans compte Apple.

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive and Google Drive as remotes in RcloneView" class="img-large img-center" />

## Configurer iCloud Drive dans RcloneView

Le binaire rclone intégré à RcloneView (v1.69.1+) répond à l'exigence minimale de rclone v1.69 pour la prise en charge d'iCloud Drive. Aucune installation séparée n'est nécessaire.

Pour ajouter iCloud Drive, ouvrez l'onglet **Remote** et cliquez sur **New Remote**. Sélectionnez iCloud Drive dans la liste des fournisseurs, puis saisissez l'adresse e-mail et le mot de passe de votre identifiant Apple. Si votre compte Apple utilise l'authentification à deux facteurs, générez un mot de passe spécifique à l'application depuis les paramètres de sécurité de votre identifiant Apple et utilisez-le à la place de votre mot de passe habituel. Une fois enregistrés, vos dossiers iCloud Drive apparaissent immédiatement dans le panneau de l'explorateur de fichiers — Bureau, Documents et tout autre répertoire synchronisé sont tous parcourables.

## Connexion à Google Drive

Google Drive utilise l'authentification OAuth. Dans RcloneView, ajoutez un nouveau remote et sélectionnez Google Drive — une fenêtre de navigateur s'ouvre automatiquement pour vous permettre de vous connecter à votre compte Google et d'accorder l'accès. Aucune clé API ni identifiant développeur n'est requis. La connexion se termine en quelques secondes, et vos dossiers Drive apparaissent dans un second panneau à côté d'iCloud Drive.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from iCloud Drive to Google Drive in RcloneView" class="img-large img-center" />

## Lancer la migration

Une fois les deux remotes configurés, ouvrez le **Job Manager** et créez une tâche **Copy**. Définissez votre dossier source iCloud Drive, sélectionnez votre dossier de destination Google Drive, puis nommez la tâche. Le mode Copy transfère les fichiers qui n'existent pas encore sur la destination sans toucher aux originaux — le contenu de votre iCloud Drive reste intact.

Avant de lancer le transfert complet, exécutez **Dry Run** depuis les options de la tâche. RcloneView affiche chaque fichier qui serait copié — noms, chemins, tailles — sans déplacer le moindre octet. Cet aperçu est particulièrement utile lorsque l'iCloud Drive contient des années de contenu varié et que vous souhaitez confirmer la portée du transfert avant de démarrer.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a cloud migration job in RcloneView" class="img-large img-center" />

Une fois satisfait, exécutez la tâche et suivez la progression dans l'onglet **Transferring** en bas de l'interface. La vitesse, le nombre de fichiers et le pourcentage d'avancement se mettent à jour en direct. Pour les bibliothèques volumineuses, activez la vérification par somme de contrôle dans les paramètres avancés de la tâche pour confirmer que chaque fichier est arrivé sans corruption.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez l'onglet **Remote**, cliquez sur **New Remote**, puis ajoutez iCloud Drive avec vos identifiants Apple.
3. Ajoutez Google Drive comme second remote via une connexion OAuth dans le navigateur.
4. Créez une tâche Copy avec votre dossier iCloud Drive comme source et un dossier Google Drive comme destination.
5. Exécutez Dry Run pour prévisualiser le transfert, puis lancez la tâche et suivez la progression dans l'onglet Transferring.

Avec les deux services connectés côte à côte, migrer l'intégralité de votre iCloud Drive vers Google Drive se résume à configurer une seule tâche et à la laisser s'exécuter.

---

**Guides connexes :**

- [Gérer iCloud Drive — Synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [Migrer Dropbox vers Google Drive avec RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-google-drive-with-rcloneview)
- [Migrer Google Drive vers pCloud avec RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-pcloud-rcloneview)

<CloudSupportGrid />
