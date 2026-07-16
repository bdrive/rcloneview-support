---
slug: cloud-to-synology-nas-with-rcloneview
title: "Pont Cloud-vers-NAS : sauvegardez Google Drive et OneDrive vers Synology avec RcloneView"
authors:
  - jay
description: Déplacez et synchronisez des fichiers depuis des services cloud (par ex. Google Drive, OneDrive) vers votre NAS Synology grâce au workflow « clic d'abord » de RcloneView—transferts par glisser-déposer, comparaison visuelle et synchronisations planifiées, sans ligne de commande.
keywords:
  - rcloneview
  - synology nas
  - sauvegarde google drive
  - sauvegarde onedrive
  - cloud vers nas
  - webdav
  - sftp
  - interface graphique rclone
  - synchronisation planifiée
tags:
  - synology
  - google-drive
  - onedrive
  - cloud-file-transfer
---



import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Pont Cloud-vers-NAS : sauvegardez Google Drive et OneDrive vers Synology avec RcloneView

> Conservez une copie de sécurité locale et gardez le contrôle de vos données. Mettez en miroir vos **distants cloud** vers un **NAS Synology** grâce à un workflow simple, en quelques clics—sans ligne de commande.

## Du cloud vers le NAS, la méthode intelligente—pourquoi c'est important

Le stockage cloud est pratique pour la collaboration et l'accès depuis n'importe où. Mais conserver une **seconde copie, sur site**, sur un NAS Synology vous offre des sauvegardes versionnées, des restaurations à la vitesse du réseau local, et une indépendance vis-à-vis d'un fournisseur unique. Avec **RcloneView**, vous pouvez connecter des services cloud populaires (par ex. **Google Drive**, **OneDrive**, et bien d'autres pris en charge par rclone) ainsi que votre NAS, puis **prévisualiser, copier et planifier** des tâches depuis un seul écran.

<!-- truncate -->

**Comprendre les distants cloud (en bref)**  
- Excellents pour la collaboration en temps réel et le partage.  
- Les limites/quotas côté fournisseur peuvent affecter les grandes migrations (planifiez par lots).  

**Comprendre le NAS Synology (en bref)**  
- Votre hub de stockage toujours actif, à la maison ou au bureau.  
- Accessible via **SMB/NFS** (monté comme des dossiers locaux), ou des protocoles réseau comme **WebDAV** et **SFTP**.  
- Idéal pour la sauvegarde centralisée, l'hébergement de médias et l'archivage à long terme.

**Pourquoi passer du cloud au NAS ?**  
- **Résilience** : conservez une copie utilisable hors ligne, sous votre contrôle.  
- **Vitesse** : restaurez de gros dossiers via le réseau local sans dépendre de la bande passante internet.  
- **Gouvernance** : unifiez la rétention, l'accès et l'audit localement.

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />
## Étape 1 – Préparation

Avant de commencer :

1. **Choisissez votre périmètre** — quels dossiers Google Drive/OneDrive le NAS doit-il conserver ?  
2. **Vérifiez la capacité du NAS** — assurez-vous d'avoir suffisamment d'espace libre et un partage/dossier cible prêt.  
3. **Choisissez une méthode de connexion pour votre NAS**  

   - **WebDAV** : activez le **serveur WebDAV** Synology, puis connectez-vous via WebDAV dans RcloneView.  
   - **SMB** : activez le **SMB** Synology, puis connectez-vous via SMB dans RcloneView.  
   - **SFTP** : activez SSH/SFTP sur Synology et connectez-vous via **SFTP**.  
4. **Planifiez votre cadence** — migration ponctuelle, synchronisation périodique, ou tâches planifiées nocturnes.  
5. **Attention aux limites du fournisseur** — les gros transferts peuvent nécessiter d'être découpés en lots ; envisagez d'abord un essai.

🔍 Tutoriel utile : 

- [Intégration du NAS Synology avec RcloneView](/tutorials/synology-nas-cloud-transfer)

## Étape 2 – Configurer les connexions dans RcloneView

RcloneView enveloppe la configuration de rclone dans un flux guidé, en quelques clics.

1. Ouvrez **RcloneView** → cliquez sur **`+ New Remote`**  
2. Ajoutez votre **distant cloud**  
   - **Google Drive** : connexion OAuth → donnez-lui un nom (par ex. `MyGoogleDrive`)  
   - **OneDrive** : connexion OAuth → donnez-lui un nom (par ex. `MyOneDrive`)  
   - (D'autres services pris en charge par rclone peuvent être ajoutés de la même manière)  
3. Ajoutez votre **cible NAS Synology** en utilisant **l'une** des méthodes suivantes :  
   - **WebDAV** : point de terminaison du serveur WebDAV Synology, identifiants → donnez-lui un nom (par ex. `MyNAS-WebDAV`)  
   - **SMB** : hostIP du NAS, port, compte → donnez-lui un nom (par ex. `MyNAS-SMB`)  
   - **SFTP** : nom d'hôte/IP du NAS, port, compte → donnez-lui un nom (par ex. `MyNAS-SFTP`)  
4. Vérifiez que les deux apparaissent côte à côte dans le panneau Explorer.

🔍 Guides utiles :  
- [Intégration du NAS Synology avec RcloneView](/tutorials/synology-nas-cloud-transfer)
- [Comment ajouter un distant Google Drive](https://rcloneview.com/support/howto/intro#step-2-adding-remote-storage-google-drive-example)  
- [Configuration rapide OAuth (OneDrive/Google)](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)


<img src="/support/images/en/tutorials/synology-nas-webdav-and-google-drive.png" alt="synology nas webdav and google drive" class="img-medium img-center" />

## Étape 3 – Exécuter les tâches de sauvegarde/synchronisation

RcloneView propose trois méthodes pratiques. Commencez petit, puis montez en puissance.

### A) Glisser-déposer (copie manuelle)
- Ouvrez **Google Drive/OneDrive** d'un côté et votre cible **NAS** de l'autre, puis **glissez les dossiers/fichiers d'un côté à l'autre**.  
- Idéal pour des déplacements sélectifs et des résultats rapides.  

👉 Voir plus : [Copier des fichiers avec le glisser-déposer](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### B) Comparer & Copier (prévisualiser les changements)
- Lancez **Compare** pour voir ce qui est nouveau/modifié entre le cloud et votre NAS.  
- Copiez uniquement ce qui a changé—réduisez les surprises et le temps passé.  

👉 Voir plus : [Comparer et gérer les fichiers](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results highlighting changed files" class="img-medium img-center" />

### C) Synchronisation & tâches planifiées (automatiser)
- Utilisez **Sync** pour mettre en miroir les dossiers cloud sélectionnés vers votre partage NAS.  
- Faites d'abord un **essai à blanc (dry-run)**, puis enregistrez-le comme **Job** réutilisable et ajoutez une planification (nocturne/hebdomadaire).  

👉 Voir plus :
- [Synchroniser des stockages distants](/howto/rcloneview-basic/synchronize-remote-storages)
- [Créer des tâches de synchronisation](/howto/rcloneview-basic/create-sync-jobs)
- [Planification et exécution des tâches](/howto/rcloneview-advanced/job-scheduling-and-execution)
<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a saved job in RcloneView" class="img-medium img-center" />

## Conclusion — Points clés & astuces supplémentaires

- **Pourquoi le faire** : une seconde copie sous votre contrôle, des restaurations plus rapides via le réseau local, et une rétention unifiée.  
- **Comment ça marche** : RcloneView vous permet de connecter des distants cloud et votre NAS Synology, puis d'utiliser **Glisser-déposer**, **Comparer**, ou **Synchronisation**—avec une **planification** pour des sauvegardes automatiques.  
- **Monter en charge en toute sécurité** : testez d'abord, respectez les quotas du fournisseur, et surveillez les journaux des tâches pour une piste d'audit propre.

## FAQ

**Q. RcloneView peut-il exécuter des sauvegardes récurrentes automatiquement ?**  
**A.** Oui—enregistrez votre synchronisation comme **Job** et planifiez-la (par ex. chaque nuit). Vous verrez l'historique et le statut dans le Job Manager.

**Q. Qu'en est-il d'iCloud ?**  
**A.** Rclone prend en charge de nombreux fournisseurs. Pour les services sans backend direct, envisagez d'exporter d'abord les données localement, puis utilisez RcloneView pour les déplacer vers votre NAS.


**Prêt à conserver une copie locale et fiable de votre vie cloud ?**  


<!-- Obsidian note: Download 컴포넌트 -->
<CloudSupportGrid />
