---
slug: mount-sync-remote-file-systems-rcloneview
title: "Montez, synchronisez et gérez facilement des systèmes de fichiers distants avec RcloneView"
authors:
  - tayson
description: "Connectez SFTP, SMB, WebDAV et le stockage cloud dans une seule interface graphique. Montez, synchronisez et automatisez des systèmes de fichiers distants avec l'Explorateur à deux volets, Comparer, Tâches et le gestionnaire de montage de RcloneView."
keywords:
  - rcloneview
  - sftp
  - smb
  - webdav
  - monter un lecteur distant
  - système de fichiers cloud
  - rclone gui
  - sauvegarde nas
  - explorateur distant
  - automatisation de synchronisation
tags:
  - cloud
  - sync
  - mount
  - nas
  - sftp
  - webdav
  - smb
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Montez, synchronisez et gérez facilement des systèmes de fichiers distants avec RcloneView

> Les remotes de type système de fichiers comme **SFTP**, **SMB** et **WebDAV** méritent le même confort que les lecteurs cloud. RcloneView vous offre un Explorateur à deux volets, Comparer, Synchronisation et un gestionnaire de montage pour traiter les serveurs distants et les NAS comme des disques locaux, sans avoir à mémoriser les options de rclone.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


<!-- Image verified: /images/en/howto/rcloneview-basic/rcloneview-user-interface.png exists -->

## Système de fichiers local vs. distant : pourquoi c'est important

- **Système de fichiers local :** latence instantanée, permissions natives, aucun saut réseau. Idéal pour l'édition mais pas toujours redondant.
- **Système de fichiers distant (SFTP/SMB/WebDAV) :** ajoute de la latence réseau et de l'authentification, mais permet un NAS centralisé, des serveurs hors site et la collaboration.
- **Stockage objet cloud :** peu coûteux et durable, mais non POSIX ; le montage améliore les flux de travail pour les applications qui attendent un système de fichiers.
- **Objectif :** tout unifier dans une seule interface pour parcourir, monter, synchroniser et automatiser sans changer d'outil.

## Connectez SFTP et WebDAV en quelques minutes

RcloneView enveloppe la liste des backends rclone (plus de 100 fournisseurs) dans un assistant de remote simple. Pour la plupart des remotes de type système de fichiers, il suffit de choisir le fournisseur et de renseigner l'hôte/les identifiants.

<!-- Image verified: /images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png -->
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png" alt="Create remote from Remote Manager" class="img-large img-center" />

👉 Guide sur les remotes : [Gestionnaire de remotes](https://rcloneview.com/support/howto/rcloneview-basic/remote-manager/)

### Remote SFTP

1. Ouvrez **Remote -> + New Remote** (ou le **+** dans l'Explorateur).
2. Choisissez **SFTP**.
3. Saisissez `host`, `port`, `user`, ainsi qu'un mot de passe ou un fichier de clé.
4. Enregistrez, votre serveur SFTP apparaît dans le Gestionnaire de remotes.

### Remote WebDAV

1. Sélectionnez **WebDAV** dans la liste des fournisseurs.
2. Saisissez l'**URL WebDAV**, le nom d'utilisateur et le mot de passe/jeton.
3. Enregistrez et testez la navigation dans l'Explorateur à deux volets.

### Partage SMB / NAS

1. Choisissez **SMB** (Samba/CIFS).
2. Renseignez l'adresse du serveur et le nom du partage ; ajoutez le domaine si nécessaire.
3. Enregistrez et ouvrez-le comme n'importe quel autre remote.

### Cloud et système de fichiers ensemble

Vous pouvez mélanger des remotes SFTP, SMB, WebDAV et cloud (Google Drive, Dropbox, Mega, S3) dans la même session de l'Explorateur et copier directement entre eux.

## Explorateur à deux volets pour une gestion rapide

Les systèmes de fichiers distants semblent locaux lorsque vous pouvez les voir côte à côte.

<!-- Image: two-pane explorer -->
<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />
   
- Ouvrez le **serveur** (SFTP/SMB/WebDAV) à gauche et une destination **cloud/NAS** à droite.
- Glissez-déposez pour copier ; la progression s'affiche dans **Transfert**.
- Clic droit pour `**Copier ->**`/ `**<- Copier**`, **Supprimer**, ou les actions de **Montage**.
- Utilisez des filtres pour masquer les dossiers de cache/temporaires avant la synchronisation.

👉 Bases de l'Explorateur : 
 - [Parcourir et gérer les remotes](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)  
  - [Glisser-déposer des fichiers](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

## Montez des systèmes de fichiers distants comme des lecteurs locaux

Besoin de votre partage SFTP ou WebDAV en tant que lettre de lecteur ou point de montage Finder ? Utilisez le gestionnaire de montage intégré.

<!-- Image verified: /images/en/howto/rcloneview-basic/mount-from-remote-explorer.png -->
<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />
  
- Cliquez sur **Monter** dans la barre d'outils ou la carte du remote.
- Choisissez le type de montage (lettre de lecteur/chemin) et définissez les options de cache/tampon.
- Suivez l'état dans le **Gestionnaire de montage** ; arrêtez/redémarrez sans CLI.
- Idéal pour les applications qui ne comprennent que les chemins locaux (NLE, DAW, outils CAO).

👉 Guide de montage : [Monter un stockage cloud comme lecteur local](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

## Comparer avant de synchroniser

Les copies de systèmes de fichiers distants doivent être délibérées. Utilisez **Comparer** pour éviter d'écraser des modifications plus récentes.

<!-- Image: compare before copy -->
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="compare folders" class="img-large img-center" />

- Met en évidence les fichiers **manquants**, de **taille différente** et **identiques**.
- Copiez uniquement ce qui a changé du NAS -> cloud, ou du cloud -> NAS.
- Idéal pour préparer des modifications d'un SSD local vers un SFTP distant sans surprise.

👉 Guide Comparer : [Comparer le contenu des dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

## Résolvez rapidement les problèmes de permissions

- **SFTP :** assurez-vous que l'UID/GID sont corrects sur le serveur ; si les écritures échouent, vérifiez la propriété du répertoire et le `chmod` sur l'hôte.
- **SMB :** faites correspondre le domaine/groupe de travail ; activez « Allow guest/NTLMv2 » si nécessaire sur le serveur ; vérifiez les permissions de partage séparément des ACL du système de fichiers.
- **WebDAV :** certains hôtes bloquent MOVE/DELETE, utilisez COPY puis DELETE ; attention aux montages en lecture seule.
- **Montages locaux :** si les applications ne peuvent pas écrire, remontez avec le bon utilisateur ou ajustez les options de montage dans la boîte de dialogue de montage.
- Utilisez l'onglet **Journaux** pour voir les erreurs HTTP/SFTP (401/403/550) et ajuster les identifiants ou les chemins en conséquence.

<!-- Image verified: /images/en/howto/rcloneview-basic/log-tab.png -->
<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />
   
## Exemples de sauvegarde et d'automatisation

### Exemple 1 : NAS -> S3 (nocturne)

1. Source : partage **SMB** ; Destination : bucket **S3**.
2. Cliquez sur **Synchroniser** et choisissez **unidirectionnel** (NAS -> S3).
3. Activez la **somme de contrôle** (si prise en charge) et excluez les dossiers temporaires/cache.
4. **Enregistrer dans Tâches** (par ex., `nas-to-s3-nightly`).
5. Ouvrez **Gestionnaire de tâches -> Ajouter une tâche**, planifiez à **02h00 quotidiennement**.

<!-- Image: job scheduling -->
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Create job schedule" class="img-large img-center" />

👉 Guides des tâches : [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs), [Exécuter et gérer les tâches](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job), [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution), [Suivi des transferts](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

### Exemple 2 : partage d'édition SFTP -> Google Drive (travail en cours)

1. Volet gauche : dossier de projet **SFTP** ; Volet droit : espace d'équipe **Google Drive**.
2. Utilisez **Comparer** pour ne synchroniser que les nouveaux rendus.
3. Enregistrez comme tâche réutilisable pour des sauvegardes quotidiennes à 03h00.
4. Conservez une deuxième tâche pour **EXPORT** uniquement, afin que les liens de révision restent à jour.

### Exemple 3 : CMS WebDAV -> SSD local (montage + copie)

1. Montez le site WebDAV via le **Gestionnaire de montage** pour la compatibilité des applications.
2. Copiez les ressources du site vers un dossier SSD local ; exécutez **Comparer** chaque semaine pour récupérer les deltas.
3. Si les suppressions sont bloquées, utilisez la copie seule et effectuez un nettoyage manuel après vérification.

## Conseils de vitesse et de stabilité pour les systèmes de fichiers distants

- Utilisez des **limites de bande passante** pendant les heures de bureau ; augmentez la concurrence en dehors des heures ouvrées.
- Privilégiez la **reprise** pour les téléversements volumineux ; RcloneView gère automatiquement les nouvelles tentatives.
- Pour le SFTP longue distance, activez la compression uniquement si la marge CPU le permet.
- Sur SMB, évitez de monter deux fois le même partage sur des réseaux instables, gardez un seul montage actif.
- Pour les hôtes WebDAV avec des limites de débit, réduisez les transferts parallèles dans la boîte de dialogue de synchronisation.

## Organisez proprement les dossiers NAS et Cloud

- Conservez un modèle de dossier partagé (par ex., `Project/RAW`, `EDIT`, `EXPORT`, `ARCHIVE`) stocké à la fois sur le NAS et le cloud ; copiez-le avant chaque projet.
- Utilisez **Comparer** chaque semaine : NAS vs. archive cloud pour vous assurer que le stockage à froid est à jour.
- Maintenez une **copie unidirectionnelle** pour les archives (évitez la propagation des suppressions).
- Stockez les **proxies** sur le cloud pour la collaboration ; conservez les **RAW** sur le NAS/S3 pour plus de sécurité.

## Quand monter vs. quand synchroniser

- **Montez** lorsque les applications ont besoin de descripteurs de fichiers (NLE, navigateurs de ressources).
- **Synchronisez/Copiez** pour les déplacements en masse, les sauvegardes hors site, ou lorsque les liaisons réseau sont instables.
- Combinez les deux : montez pour les modifications quotidiennes, puis exécutez une synchronisation planifiée pour l'archivage.

## Journalisation et récupération

- Utilisez l'**Historique des tâches** pour voir quels fichiers ont échoué et pourquoi ; relancez pour ne récupérer que les éléments manquants.
- En cas d'erreurs de permission, réauthentifiez le remote ou ajustez les ACL du serveur avant de réessayer.
- Gardez l'**onglet Journal** ouvert lors des premières exécutions pour repérer rapidement les codes 401/403/550/429.
- Si un montage se bloque, arrêtez/redémarrez depuis le **Gestionnaire de montage** au lieu de redémarrer.

## Liste de contrôle de démarrage rapide

1. Ajoutez des remotes SFTP/SMB/WebDAV dans le Gestionnaire de remotes.
2. Ouvrez l'Explorateur à deux volets et vérifiez le listage.
3. Exécutez **Comparer** sur un petit dossier ; confirmez les directions de copie.
4. Montez si votre application a besoin d'une lettre de lecteur/d'un chemin.
5. Enregistrez la synchronisation/copie comme Tâches ; planifiez en dehors des heures de pointe.
6. Passez en revue les journaux après la première exécution complète ; activez la somme de contrôle lorsque c'est pris en charge.

## Résumé

RcloneView transforme les systèmes de fichiers distants en citoyens de premier ordre. Connectez des remotes SFTP, SMB, WebDAV, NAS et cloud, montez-les comme des lecteurs locaux, comparez avant de synchroniser, et automatisez les sauvegardes avec des Tâches et des planifications, le tout depuis une interface graphique construite sur le moteur de rclone. Traitez chaque point de stockage de la même manière : visible, vérifiable et automatisé.

<CloudSupportGrid />
