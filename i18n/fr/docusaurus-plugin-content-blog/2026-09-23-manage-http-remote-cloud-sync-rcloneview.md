---
slug: manage-http-remote-cloud-sync-rcloneview
title: "Gérer un stockage distant HTTP — Parcourir et synchroniser des fichiers avec RcloneView"
authors:
  - alex
description: "Connectez un index de fichiers HTTP en lecture seule à RcloneView et synchronisez son contenu avec Google Drive, S3, Backblaze B2 et plus de 90 fournisseurs de stockage cloud."
keywords:
  - remote HTTP RcloneView
  - synchronisation de serveur de fichiers HTTP
  - stockage HTTP en lecture seule
  - synchroniser HTTP vers le cloud
  - listing de répertoire HTTP rclone
  - de HTTP vers Google Drive
  - de HTTP vers Amazon S3
  - archiver des fichiers HTTP
  - connexion HTTP RcloneView
  - parcourir un remote HTTP
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer un stockage distant HTTP — Parcourir et synchroniser des fichiers avec RcloneView

> RcloneView transforme n'importe quel index de fichiers HTTP public en remote explorable, afin que vous puissiez transférer son contenu vers Google Drive, S3 ou plus de 90 autres fournisseurs cloud sans écrire la moindre commande wget.

De nombreux jeux de données, archives de firmware, miroirs de recherche et artefacts de build internes se trouvent encore derrière un simple listing de répertoire HTTP — pas d'API, pas de connexion, juste des dossiers et des fichiers servis via une URL. Télécharger depuis ces sources implique généralement d'écrire des scripts de boucles curl ou wget en espérant que la structure du répertoire ne change pas en cours de route. RcloneView se connecte à n'importe quel endpoint HTTP comme remote en lecture seule et vous permet de le parcourir dans le même panneau d'explorateur que vous utilisez pour le stockage cloud, puis de copier ce dont vous avez besoin vers une destination de sauvegarde appropriée.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter un remote HTTP dans RcloneView

Ouvrez l'onglet **Remote** et cliquez sur **New Remote**, puis choisissez HTTP dans la liste des fournisseurs. Saisissez l'URL de base de l'index de fichiers que vous souhaitez parcourir — RcloneView lit le listing de répertoire du serveur et le présente sous forme d'arborescence de dossiers classique. Il n'y a ni flux OAuth ni identifiants à gérer, car les remotes HTTP sont en lecture seule par conception : vous pouvez lister, parcourir et télécharger des fichiers, mais vous ne pouvez rien téléverser, renommer ni supprimer sur le serveur source.

Cette distinction est importante pour la façon dont vous utilisez ce type de remote. Contrairement aux outils de montage uniquement, RcloneView synchronise et compare aussi les dossiers — même avec la licence FREE —, si bien qu'un remote HTTP fonctionne mieux comme source depuis laquelle vous récupérez des données, avec une destination cloud ou locale inscriptible de l'autre côté.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout d'un nouveau remote HTTP dans RcloneView" class="img-large img-center" />

## Parcourir et télécharger depuis un index HTTP

Une fois connecté, le remote HTTP se comporte comme n'importe quel autre panneau dans l'explorateur multi-panneaux de RcloneView. Développez l'arborescence des dossiers, vérifiez la taille des fichiers et les dates de modification lorsque le serveur les indique, et utilisez Ctrl+Clic ou Maj+Clic pour sélectionner plusieurs fichiers ou sous-dossiers avant de les télécharger. Ouvrez une destination cloud — un bucket Backblaze B2 ou un dossier Google Drive — dans le panneau adjacent et faites glisser les fichiers pour démarrer un transfert.

C'est un schéma courant pour les équipes qui miroitent des archives de jeux de données publics, récupèrent des images de firmware depuis le point de distribution HTTP d'un fournisseur, ou archivent des instantanés d'un serveur de build interne qui n'expose qu'un listing de répertoire.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Copie de fichiers d'un remote HTTP vers le stockage cloud dans RcloneView" class="img-large img-center" />

## Planifier des récupérations récurrentes depuis une source HTTP

Si l'index HTTP est mis à jour périodiquement — builds nocturnes, rafraîchissements hebdomadaires de jeux de données —, configurez une entrée dans le Job Manager avec le remote HTTP comme source et votre stockage cloud comme destination. Exécutez d'abord un **Dry Run** pour confirmer exactement quels fichiers seront copiés, car les listings de répertoire HTTP peuvent exposer plus ou moins de métadonnées selon le serveur, et il est utile de vérifier que la correspondance des fichiers se comporte comme prévu avant un transfert réel.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planification d'une tâche récurrente pour récupérer des fichiers depuis un remote HTTP dans RcloneView" class="img-large img-center" />

Avec une **licence PLUS**, associez une planification de type crontab à la tâche afin que les nouveaux fichiers publiés sur le serveur HTTP arrivent dans votre archive cloud selon ce calendrier, puis consultez l'onglet **Job History** par la suite pour confirmer le nombre de transferts et repérer les fichiers que le serveur source a cessé de fournir.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez **Remote** > **New Remote** et sélectionnez HTTP dans la liste des fournisseurs.
3. Saisissez l'URL de base du listing de répertoire et enregistrez le remote.
4. Ouvrez le remote HTTP dans un panneau et votre destination cloud dans l'autre.
5. Utilisez **Job Manager** pour configurer une tâche de synchronisation, en exécutant un Dry Run avant la première récupération réelle.

Une fois une source HTTP connectée, récupérer des fichiers vers votre archive cloud devient une tâche reproductible et auditable, au lieu d'un script ponctuel qu'il faut penser à relancer soi-même.

---

**Guides associés :**

- [Connect Any WebDAV Server to RcloneView — Sync with Google Drive, S3, and 90+ Clouds](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [Connect Any SFTP Server to RcloneView — Sync Remote Servers with Cloud Storage](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [Manage FTP Server Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-ftp-server-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
