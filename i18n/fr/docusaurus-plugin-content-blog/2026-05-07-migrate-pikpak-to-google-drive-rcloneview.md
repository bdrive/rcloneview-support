---
slug: migrate-pikpak-to-google-drive-rcloneview
title: "Migrer de PikPak vers Google Drive — Transférer des fichiers avec RcloneView"
authors:
  - tayson
description: "Guide étape par étape pour migrer des fichiers de PikPak vers Google Drive grâce au transfert cloud-to-cloud de RcloneView — configurez les deux distants et transférez sans téléchargement local."
keywords:
  - PikPak vers Google Drive
  - migration PikPak
  - RcloneView PikPak
  - transfert cloud-to-cloud
  - export PikPak
  - import Google Drive
  - rclone PikPak
  - migration de fichiers cloud
tags:
  - pikpak
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de PikPak vers Google Drive — Transférer des fichiers avec RcloneView

> Les utilisateurs de PikPak souhaitant déplacer leurs fichiers vers Google Drive peuvent le faire entièrement dans le cloud avec RcloneView — sans avoir à tout télécharger d'abord sur leur machine locale.

PikPak est un service de stockage cloud et de téléchargement hors ligne très populaire, largement utilisé en Asie, apprécié pour sa capacité à enregistrer des torrents et des liens magnet directement dans le cloud. Pour les utilisateurs qui souhaitent migrer depuis PikPak ou simplement conserver une copie de sauvegarde de leurs fichiers PikPak sur Google Drive, RcloneView propose la solution la plus efficace : un transfert cloud-to-cloud qui déplace les fichiers directement entre les deux fournisseurs sans passer par votre disque local. RcloneView est livré avec un binaire rclone intégré, il n'y a donc rien de plus à installer.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurer votre distant PikPak

Cliquez sur **New Remote** dans RcloneView et sélectionnez **PikPak** dans la liste des fournisseurs. Saisissez votre **nom d'utilisateur** PikPak (adresse e-mail) et votre **mot de passe**. RcloneView s'authentifiera auprès de l'API PikPak et se connectera à votre compte. Une fois enregistré, votre distant PikPak apparaît dans l'explorateur à double volet, où vous pouvez parcourir vos fichiers et dossiers comme un système de fichiers local.

Avant de démarrer une migration, prenez quelques minutes pour parcourir la structure de vos dossiers PikPak afin de comprendre comment votre contenu est organisé. Notez les dossiers volumineux ou les structures profondément imbriquées qui pourraient bénéficier d'un transfert dans des tâches séparées plutôt que dans un seul lot massif.

<img src="/support/images/en/blog/new-remote.png" alt="Adding PikPak as a remote in RcloneView" class="img-large img-center" />

## Ajouter Google Drive

Cliquez à nouveau sur **New Remote** et sélectionnez **Google Drive**. RcloneView ouvre un onglet de navigateur pour l'autorisation OAuth Google — connectez-vous avec votre compte Google et accordez les permissions demandées. Une fois le flux OAuth terminé, le distant Google Drive est disponible dans l'explorateur aux côtés de votre distant PikPak.

Créez un dossier de destination dédié à la migration dans Google Drive — par exemple, `PikPak Import/` — avant de démarrer le transfert. Cela permet de garder le contenu migré organisé et facilite la vérification de l'exhaustivité du transfert en comparant la taille des dossiers entre PikPak et Google Drive.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="PikPak and Google Drive open side by side for migration in RcloneView" class="img-large img-center" />

## Lancer le transfert cloud-to-cloud

Avec les deux distants ouverts dans la vue à double volet, vous pouvez glisser des dossiers de PikPak directement vers Google Drive pour les petites migrations. Pour les migrations plus importantes, l'**Assistant de tâche** (Job Wizard) est plus fiable. Définissez PikPak comme source, votre dossier de destination Google Drive comme cible, et choisissez le mode **Copy** (pour copier les fichiers sans rien supprimer de PikPak).

Effectuez toujours un **essai à blanc** (dry run) en premier. Les comptes PikPak peuvent contenir des milliers de fichiers accumulés à partir de téléchargements hors ligne, et l'essai à blanc vous donne une image claire du volume de transfert avant de vous engager. Une fois satisfait, lancez la tâche réelle. Le **Job Manager** de RcloneView affiche la progression en direct, y compris les noms de fichiers en cours et le nombre de transferts. Vérifiez l'**historique des tâches** (Job History) après l'achèvement pour confirmer que tous les fichiers ont bien été transférés.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a PikPak to Google Drive migration job in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Cliquez sur **New Remote** > **PikPak** et saisissez votre nom d'utilisateur et votre mot de passe PikPak.
3. Cliquez sur **New Remote** > **Google Drive** et complétez l'autorisation OAuth.
4. Créez un dossier `PikPak Import/` dans Google Drive comme destination de migration.
5. Utilisez l'**Assistant de tâche** pour créer une tâche de copie, effectuez un essai à blanc, puis exécutez la migration complète.

Migrer de PikPak vers Google Drive avec RcloneView est un processus simplifié qui gère de manière fiable même les grandes bibliothèques cloud, sans surcharge de stockage local.

---

**Guides associés :**

- [Gérer les téléchargements cloud PikPak avec RcloneView](https://rcloneview.com/support/blog/manage-pikpak-cloud-downloads-rcloneview)
- [Gérer Google Drive — Synchronisation cloud et sauvegarde avec RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Migration cloud-to-cloud avec RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)

<CloudSupportGrid />
