---
slug: migrate-seafile-to-onedrive-rcloneview
title: "Migrer de Seafile vers OneDrive — Transférer des fichiers avec RcloneView"
authors:
  - casey
description: "Déplacez des bibliothèques d'un serveur Seafile auto-hébergé vers Microsoft OneDrive à l'aide de l'explorateur à double volet et de l'assistant de tâches de RcloneView, avec vérification par exécution à blanc."
keywords:
  - migration Seafile
  - OneDrive
  - RcloneView
  - de l'auto-hébergé au cloud
  - transfert cloud à cloud
  - Seafile vers OneDrive
  - migration Microsoft 365
  - rclone seafile onedrive
tags:
  - RcloneView
  - seafile
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Seafile vers OneDrive — Transférer des fichiers avec RcloneView

> Retirer un serveur Seafile auto-hébergé au profit de Microsoft OneDrive ne signifie pas forcément des téléchargements et re-téléversements manuels — RcloneView se connecte directement aux deux et déplace les bibliothèques entre elles en une seule tâche.

Les équipes qui dépassent le cadre d'un déploiement Seafile auto-hébergé passent souvent à OneDrive pour intégrer le stockage de fichiers dans un abonnement Microsoft 365 existant et déléguer la maintenance du serveur. RcloneView traite Seafile et OneDrive comme des remotes équivalents dans la même fenêtre, ce qui vous permet de parcourir les deux, de comparer leur contenu et d'exécuter un transfert contrôlé au lieu d'exporter d'abord les bibliothèques vers un disque local. RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux, de sorte que le même flux de travail s'applique que votre serveur Seafile soit sur site ou dans un centre de données privé.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter votre serveur Seafile

Ouvrez **New Remote** et sélectionnez **Seafile**, puis saisissez l'URL de votre serveur, votre nom d'utilisateur et votre mot de passe. Si l'authentification à deux facteurs est activée, fournissez le jeton à usage unique lorsque demandé. Une fois connecté, RcloneView répertorie chaque bibliothèque à laquelle vous avez accès — personnelles et partagées — dans l'explorateur de fichiers, avec la même arborescence de dossiers et liste de fichiers que pour tout autre remote.

Les bibliothèques chiffrées nécessitent leur mot de passe de bibliothèque avant que RcloneView puisse en lire le contenu. Testez que l'accès fonctionne sur une petite bibliothèque chiffrée avant de planifier la migration complète, car un mot de passe manquant apparaîtra comme un dossier vide plutôt que comme une erreur évidente.

<img src="/support/images/en/blog/new-remote.png" alt="Reconnexion d'un remote Seafile dans RcloneView" class="img-large img-center" />

## Ajouter Microsoft OneDrive

Ajoutez un second remote via **New Remote** > **OneDrive**. RcloneView ouvre une fenêtre de navigateur pour la connexion OAuth — authentifiez-vous avec votre compte Microsoft et approuvez les autorisations demandées. Pour les locataires OneDrive for Business, le même flux OAuth s'applique ; aucune inscription d'application distincte n'est requise pour une utilisation standard.

Créez un dossier de destination tel que `Seafile Import/` dans OneDrive avant de démarrer le transfert. Isoler le contenu migré facilite la vérification ponctuelle des résultats et évite de mélanger les fichiers migrés avec le contenu déjà présent à la racine de OneDrive.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Remotes Seafile et OneDrive ouverts côte à côte dans RcloneView" class="img-large img-center" />

## Exécuter la tâche de migration

Avec les deux remotes ouverts, les petites bibliothèques peuvent être glissées directement — le glisser-déposer entre deux remotes différents effectue une copie, laissant les originaux Seafile intacts. Pour une migration complète du serveur, utilisez plutôt l'**Job Wizard** en quatre étapes : définissez la bibliothèque Seafile comme source et votre dossier OneDrive comme destination, puis configurez le nombre de transferts et les vérificateurs d'égalité à l'étape 2.

Exécutez toujours une **exécution à blanc** avant le transfert réel. Elle répertorie tous les fichiers qui seront copiés sans déplacer aucune donnée, ce qui constitue le moyen le plus rapide de repérer un mauvais dossier source ou une bibliothèque étonnamment volumineuse avant de valider le transfert. Une fois l'aperçu correct, lancez la tâche et suivez la progression dans l'onglet Transferring ; **Job History** conserve un enregistrement permanent de ce qui a été déplacé et quand.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Exécution d'une tâche de migration de Seafile vers OneDrive dans RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Cliquez sur **New Remote** > **Seafile** et saisissez l'URL de votre serveur et vos identifiants.
3. Cliquez sur **New Remote** > **OneDrive** et complétez l'autorisation OAuth.
4. Exécutez une exécution à blanc, puis lancez la tâche de migration et confirmez les résultats dans Job History.

Migrer de Seafile vers OneDrive de cette manière rend chaque transfert traçable, afin que vous sachiez toujours exactement ce qui a quitté l'ancien serveur et où il a atterri.

---

**Guides associés :**

- [Gérer Seafile — Synchronisation et sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/manage-seafile-cloud-sync-backup-rcloneview)
- [Gérer OneDrive — Synchronisation et sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Migrer de Seafile vers Google Drive avec RcloneView](https://rcloneview.com/support/blog/migrate-seafile-to-google-drive-rcloneview)

<CloudSupportGrid />
