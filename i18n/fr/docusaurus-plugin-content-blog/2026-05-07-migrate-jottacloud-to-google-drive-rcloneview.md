---
slug: migrate-jottacloud-to-google-drive-rcloneview
title: "Migrer de Jottacloud vers Google Drive — Transférer des fichiers avec RcloneView"
authors:
  - tayson
description: "Guide étape par étape pour migrer des fichiers de Jottacloud vers Google Drive à l'aide du transfert cloud-to-cloud de RcloneView — configurez les deux remotes et lancez votre tâche de migration."
keywords:
  - Jottacloud migration
  - Jottacloud to Google Drive
  - RcloneView migration
  - cloud-to-cloud transfer
  - Jottacloud export
  - cloud storage migration
  - rclone Jottacloud
  - Google Drive import
tags:
  - RcloneView
  - jottacloud
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Jottacloud vers Google Drive — Transférer des fichiers avec RcloneView

> Déplacer vos fichiers de Jottacloud vers Google Drive est simple avec RcloneView — connectez les deux remotes et transférez directement dans le cloud sans avoir à tout télécharger au préalable.

Jottacloud est un service de stockage cloud norvégien apprécié pour ses offres de stockage illimité, mais de nombreux utilisateurs cherchent désormais à migrer vers des plateformes plus universellement accessibles comme Google Drive. Que vous changiez pour des raisons de forfait, de tarification, ou simplement pour consolider votre stockage cloud, RcloneView rend le processus de migration propre et fiable. Il n'est pas nécessaire de télécharger tous vos fichiers en local au préalable — RcloneView les transfère directement de Jottacloud vers Google Drive dans le cadre d'une opération cloud-to-cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurer votre remote Jottacloud

Cliquez sur **New Remote** dans RcloneView et sélectionnez **Jottacloud** dans la liste des fournisseurs. RcloneView vous guide tout au long du processus d'authentification — Jottacloud utilise un flux de connexion basé sur l'appareil où vous vous connectez via un navigateur, et le jeton résultant est stocké en toute sécurité dans RcloneView. Après l'authentification, votre compte Jottacloud apparaît dans l'explorateur, y compris vos archives personnelles, vos dossiers de sauvegarde et tout contenu partagé.

Avant de démarrer la migration, parcourez la structure de dossiers de votre Jottacloud pour comprendre comment votre contenu est organisé. Notez les noms de dossiers contenant des caractères spéciaux ou les structures profondément imbriquées, car celles-ci peuvent occasionnellement causer des problèmes lors de migrations volumineuses.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Jottacloud as a remote in RcloneView" class="img-large img-center" />

## Ajouter Google Drive

Cliquez à nouveau sur **New Remote** et sélectionnez **Google Drive**. RcloneView ouvre un onglet de navigateur pour l'autorisation OAuth de Google — connectez-vous avec votre compte Google et accordez les permissions demandées. Une fois l'autorisation terminée, le remote Google Drive est disponible dans l'explorateur.

Créez un dossier de destination dans Google Drive avant de démarrer la migration — par exemple, `Jottacloud Import/` — afin de garder les fichiers migrés organisés et séparés de tout contenu existant. Cela permet de vérifier facilement le résultat de la migration sans confusion sur la provenance des fichiers.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Google Drive and Jottacloud open side by side in RcloneView" class="img-large img-center" />

## Lancer la tâche de migration

Une fois les deux remotes configurés, ouvrez le **Job Wizard** dans le Job Manager. Définissez Jottacloud comme source (sélectionnez le dossier de premier niveau ou un sous-dossier spécifique que vous souhaitez migrer) et le dossier de destination Google Drive comme cible. Choisissez le mode **Copy** plutôt que le mode **Sync** pour une migration — cela garantit que les fichiers sont copiés sans rien supprimer à la source.

Effectuez toujours un **dry run** en premier pour voir exactement quels fichiers seront transférés. Pour les comptes Jottacloud volumineux comptant des milliers de fichiers, le résultat du dry run vous aide à repérer d'éventuels problèmes avant de lancer le transfert complet. Une fois satisfait, exécutez la tâche réelle. Le **Job Manager** de RcloneView affiche la progression en temps réel, et **Job History** enregistre le nombre final de transferts ainsi que toute erreur.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Jottacloud to Google Drive migration job in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Cliquez sur **New Remote** > **Jottacloud** et terminez l'authentification via le navigateur.
3. Cliquez sur **New Remote** > **Google Drive** et terminez l'autorisation OAuth.
4. Créez un dossier de destination dans Google Drive pour le contenu migré.
5. Utilisez le **Job Wizard** pour créer une tâche de copie, effectuez un dry run, puis exécutez la migration complète.

Avec RcloneView, migrer de Jottacloud vers Google Drive est une tâche ponctuelle qui prend quelques minutes à configurer et s'exécute automatiquement jusqu'à son terme.

---

**Guides connexes :**

- [Gérer Jottacloud — Synchronisation et sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Gérer Google Drive — Synchronisation et sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Migrer de Jottacloud vers Backblaze B2 avec RcloneView](https://rcloneview.com/support/blog/migrate-jottacloud-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
