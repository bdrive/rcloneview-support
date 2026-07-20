---
slug: migrate-seafile-to-google-drive-rcloneview
title: "Migrer de Seafile vers Google Drive — Transférer des fichiers avec RcloneView"
authors:
  - tayson
description: "Guide étape par étape pour migrer des fichiers d'un serveur Seafile auto-hébergé vers Google Drive à l'aide des outils de transfert cloud-à-cloud et de synchronisation de RcloneView."
keywords:
  - Migration Seafile
  - Google Drive
  - RcloneView
  - transfert cloud-à-cloud
  - migration auto-hébergée
  - migration de fichiers
  - Seafile vers Google Drive
  - rclone seafile
tags:
  - RcloneView
  - seafile
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Seafile vers Google Drive — Transférer des fichiers avec RcloneView

> Passer d'un serveur Seafile auto-hébergé à Google Drive est plus simple qu'il n'y paraît — RcloneView vous permet de connecter les deux comme des remotes et de transférer vos bibliothèques directement, sans téléchargement intermédiaire.

Seafile est une plateforme de collaboration auto-hébergée très populaire, mais de nombreuses équipes finissent par migrer vers des services cloud managés comme Google Drive pour réduire la charge de maintenance et bénéficier d'une meilleure intégration avec les outils de productivité. RcloneView traite Seafile comme un remote à part entière, au même titre que Google Drive, ce qui vous permet de parcourir vos bibliothèques Seafile et de les copier directement vers Google Drive dans un flux de travail graphique clair. Aucune connaissance de la ligne de commande n'est requise, et le binaire rclone intégré s'occupe de tout le travail.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter votre serveur Seafile

Cliquez sur **New Remote** dans RcloneView et sélectionnez **Seafile** dans la liste des fournisseurs. Saisissez l'URL de votre serveur Seafile, votre nom d'utilisateur et votre mot de passe. Si votre serveur utilise la 2FA, vous devrez également fournir un jeton à usage unique lors de la configuration. RcloneView listera alors toutes vos bibliothèques Seafile — personnelles et partagées — dans l'explorateur de fichiers à deux volets.

Si vos bibliothèques Seafile sont chiffrées, vous aurez besoin du mot de passe de la bibliothèque pour que RcloneView puisse déchiffrer et lire les fichiers. Il est conseillé de tester l'accès à une petite bibliothèque chiffrée avant de tenter une migration complète, afin de vérifier que vos identifiants fonctionnent correctement.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Seafile remote in RcloneView" class="img-large img-center" />

## Ajouter Google Drive

Ajoutez un second remote pour Google Drive via **New Remote** > **Google Drive**. RcloneView ouvrira une fenêtre de navigateur pour l'autorisation OAuth — connectez-vous avec votre compte Google et accordez les permissions demandées. Une fois l'autorisation effectuée, le remote Google Drive apparaît dans l'explorateur. Vous pouvez naviguer vers n'importe quel dossier de Mon Drive ou d'un Drive partagé pour l'utiliser comme destination de migration.

Envisagez de créer un dossier dédié dans Google Drive — par exemple, `Seafile Migration/` — avant de démarrer le transfert. Cela permet de garder le contenu migré organisé et séparé des fichiers existants pendant la période de transition.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging Seafile libraries to Google Drive in RcloneView" class="img-large img-center" />

## Exécuter la migration

Avec les deux remotes ouverts dans la vue à deux volets, vous pouvez glisser-déposer des bibliothèques Seafile individuelles vers Google Drive pour de petites migrations. Pour les migrations complètes de serveur, utilisez l'**Job Wizard** pour créer un job de synchronisation : définissez Seafile comme source et votre dossier Google Drive cible comme destination. L'assistant en quatre étapes vous permet de configurer les options de transfert, y compris la conservation ou non des dates de modification.

Effectuez d'abord un **dry run** pour prévisualiser ce qui sera transféré — c'est particulièrement utile pour les grandes instances Seafile comptant des milliers de fichiers. Après avoir confirmé que l'aperçu est correct, démarrez le transfert réel. Le **Job Manager** de RcloneView affiche la progression en temps réel, et l'**Job History** enregistre le résultat pour votre piste d'audit de migration.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Seafile to Google Drive migration job in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Cliquez sur **New Remote** > **Seafile** et saisissez l'URL de votre serveur, votre nom d'utilisateur et votre mot de passe.
3. Cliquez sur **New Remote** > **Google Drive** et effectuez le processus d'autorisation OAuth.
4. Ouvrez les deux remotes côte à côte dans l'explorateur à deux volets.
5. Utilisez l'**Job Wizard** pour créer un job de synchronisation, effectuez un dry run, puis exécutez la migration complète.

Avec RcloneView, la migration de Seafile vers Google Drive devient un processus structuré et auditable, plutôt qu'un travail manuel fichier par fichier.

---

**Guides connexes :**

- [Gérer Seafile — Synchronisation et sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/manage-seafile-cloud-sync-backup-rcloneview)
- [Gérer Google Drive — Synchronisation et sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Synchroniser Seafile vers AWS S3 avec RcloneView](https://rcloneview.com/support/blog/sync-seafile-to-aws-s3-rcloneview)

<CloudSupportGrid />
