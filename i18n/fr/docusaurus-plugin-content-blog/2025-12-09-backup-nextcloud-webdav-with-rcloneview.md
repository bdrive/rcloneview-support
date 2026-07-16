---
slug: backup-nextcloud-webdav-with-rcloneview
title: "Sauvegardez vos disques Nextcloud et WebDAV avec RcloneView : synchronisations visuelles, planifications et vérifications d'intégrité"
authors:
  - tayson
description: "Protégez votre Nextcloud ou tout disque WebDAV avec RcloneView - ajoutez des distants, prévisualisez les différences, planifiez des sauvegardes versionnées et vérifiez l'intégrité sans avoir à mémoriser des options en ligne de commande."
keywords:
  - nextcloud backup
  - webdav backup
  - rcloneview webdav
  - nextcloud to s3
  - webdav to google drive
  - cloud to cloud backup
  - rclone webdav gui
  - versioned backup
  - rclone check
  - cloud automation
tags:
  - webdav
  - nextcloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sauvegardez vos disques Nextcloud et WebDAV avec RcloneView : synchronisations visuelles, planifications et vérifications d'intégrité

> Protégez votre Nextcloud ou tout disque WebDAV en le dupliquant vers Google Drive, S3/Wasabi ou un autre cloud - sans ligne de commande. RcloneView prévisualise les changements, planifie les tâches et vérifie l'intégrité pour garder des sauvegardes fiables.

Nextcloud et les autres services WebDAV alimentent les partages d'équipe et le stockage auto-hébergé, mais ils nécessitent tout de même des sauvegardes hors site. RcloneView encapsule le moteur rclone dans une interface graphique, vous permettant d'ajouter WebDAV une seule fois, de l'associer à votre cloud de destination et d'automatiser des sauvegardes vérifiées avec le planificateur de tâches et la comparaison.

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Pourquoi sauvegarder WebDAV/Nextcloud avec RcloneView

- Visualisez les différences avant la synchronisation avec **Compare** pour éviter les écrasements.
- Réutilisez le même distant WebDAV pour sauvegarder vers plusieurs cibles (Drive, S3, Wasabi).
- Planifiez des sauvegardes récurrentes et conservez les journaux dans l'historique des tâches.
- Activez les options de somme de contrôle dans les flux de copie/synchronisation pour confirmer l'intégrité des données (lorsque cela est pris en charge).

## Connectez votre distant WebDAV/Nextcloud

1. Cliquez sur **`+ New Remote`** -> choisissez **WebDAV**.
2. Saisissez votre **URL**, votre **nom d'utilisateur**, votre **mot de passe/mot de passe d'application**, et sélectionnez le préréglage fournisseur approprié (par exemple, Nextcloud).
3. Nommez-le clairement, comme `Nextcloud_Main`.  
   <img src="/support/images/en/blog/new-remote.png" alt="New remote wizard" class="img-medium img-center" />

Besoin d'une référence ? Consultez le guide WebDAV : [Ajouter un distant WebDAV/Nextcloud](https://rcloneview.com/support/howto/remote-storage-connection-settings/webdav).

## Choisissez une destination de sauvegarde

- **Google Drive / Workspace** pour un partage et un historique faciles.
- Clouds **compatibles S3** (Amazon S3, Wasabi, R2) pour des coûts prévisibles et des règles de cycle de vie.
- **Un autre WebDAV** pour de simples copies miroir.

Ajoutez le distant de destination avec `+ New Remote`, puis ouvrez les deux dans **Explorer -> Browse** côte à côte.  
<img src="/support/images/en/blog/open-multiple-google-drive-remotes.png" alt="Side-by-side remotes" class="img-medium img-center" />

## Prévisualisez avant de copier

- Sélectionnez les dossiers source (WebDAV) et destination dans l'Explorateur.
- Cliquez sur **Compare** pour mettre en évidence les éléments manquants, plus récents ou identiques.
- Utilisez **`Copy ->`** ou **`<- Copy`** pour ne déplacer que ce dont vous avez besoin, ou supprimez les fichiers indésirables en toute sécurité.

## Effectuez une sauvegarde ponctuelle avec Sync

1. Sélectionnez les dossiers source/destination.
2. Cliquez sur **Sync** et activez d'abord **Dry run** pour voir les changements prévus.
3. Dans les options de synchronisation, gardez la concurrence modérée si votre serveur limite le débit ; vous pouvez augmenter les transferts/vérificateurs dans les paramètres après les tests.
4. Suivez la progression dans les onglets **Transfer** et **Completed** ; consultez les journaux pour toute limite d'API.

## Planifiez des sauvegardes récurrentes (configurez et oubliez)

1. Dans la boîte de dialogue Sync, cliquez sur **Save to Jobs** (ou ouvrez **Job Manager -> Add Job**).
2. Choisissez une planification (quotidienne ou jours spécifiques) et pointez la destination vers un dossier daté si vous souhaitez de simples copies à un instant donné.
3. Activez les notifications et surveillez l'**historique des tâches** pour les détails de réussite/échec.  

- Guides : [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs), [Exécuter et gérer les tâches](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job), [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution), [Surveillance des transferts](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

## FAQ rapide

**Cela fonctionne-t-il pour n'importe quel WebDAV, pas seulement Nextcloud ?**  
Oui - sélectionnez WebDAV et le fournisseur/préréglage approprié ou « autre » pour correspondre à votre service.

**Puis-je sauvegarder vers plusieurs destinations ?**  
Oui - réutilisez la même source WebDAV dans plusieurs tâches (par exemple, Nextcloud -> Drive et Nextcloud -> Wasabi).

**Les tâches planifiées s'exécutent-elles si l'application est verrouillée ?**  
Les tâches s'exécutent selon la configuration ; le verrouillage de l'application protège simplement l'accès à l'interface (voir [Activer le verrouillage de l'application](/tutorials/enable-app-lock)).

## Conclusion

RcloneView rend les sauvegardes WebDAV/Nextcloud visuelles et prévisibles : ajoutez le distant une seule fois, prévisualisez les changements, ajustez les performances et planifiez des tâches vérifiées. Protégez les fichiers de votre équipe avec des copies hors site auxquelles vous pouvez faire confiance - aucune maîtrise de la ligne de commande n'est requise.

<CloudSupportGrid />
