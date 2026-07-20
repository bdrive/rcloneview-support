---
slug: backup-cctv-nvr-to-cloud-rcloneview
title: "Comment sauvegarder et archiver automatiquement les images CCTV/NVR vers le stockage cloud avec RcloneView"
authors:
  - tayson
description: "Envoyez les vidéos CCTV/NVR depuis des chemins NAS, SMB ou SFTP vers Wasabi, S3 ou Google Drive avec RcloneView. Utilisez Compare, des Sync Jobs avec vérification de checksum et des exécutions planifiées pour protéger les preuves sans téléversements manuels."
keywords:
  - rcloneview
  - sauvegarde cctv
  - archive cloud nvr
  - wasabi s3
  - sauvegarde google drive
  - smb sftp
  - stockage vidéosurveillance
  - vérification de checksum
  - sauvegarde planifiée
  - reprise après sinistre
tags:
  - RcloneView
  - cloud
  - sync
  - nas
  - cctv
  - sftp
  - smb
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Comment sauvegarder et archiver automatiquement les images CCTV/NVR vers le stockage cloud avec RcloneView

> Protégez les vidéos de vidéosurveillance contre le vol, l'incendie ou la panne matérielle. RcloneView connecte les dossiers NVR NAS/SFTP/SMB à Wasabi, S3 ou Google Drive, puis automatise Compare + Sync Jobs afin que seules les nouvelles images soient transférées et que les preuves restent intactes.

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 1. Pourquoi la sauvegarde cloud est importante pour les images CCTV

- Les disques NVR/NAS se remplissent rapidement avec des enregistrements 24h/24 et 7j/7.  
- Un vol, un incendie ou du vandalisme peut effacer la seule copie existante.  
- La conformité et les audits exigent des fenêtres de rétention plus longues.  
- La revue à distance et le partage de preuves nécessitent un accès hors site.  
- La copie manuelle de fichiers H.264/H.265 de plusieurs Go est source d'erreurs.

## 2. Ce qui rend les fichiers de vidéosurveillance délicats

- Les écritures continues créent des milliers de clips datés.  
- Les débits binaires élevés (1080p/4K) sollicitent la bande passante lors de la sauvegarde.  
- L'arborescence des dossiers varie selon le fabricant (AAAA/MM/JJ, identifiants de caméra).  
- Des transferts planifiés (horaires/quotidiens) sont nécessaires, sans supervision humaine.  
- L'intégrité compte : des images corrompues affaiblissent la valeur probante.

## 3. Comment RcloneView aide

- Connectez des sources **NAS/SMB/SFTP/WebDAV** et des cibles **Wasabi/S3/Google Drive** dans une seule interface.  
- L'explorateur à deux volets rend les transferts cloud-à-cloud ou LAN-vers-cloud visuels et directs.  
- **Compare** repère les clips nouveaux ou modifiés afin de ne transférer que les deltas.  
- La prise en charge du **checksum** (S3/Wasabi) valide les téléversements.  
- Les **Sync Jobs et la planification** exécutent les sauvegardes automatiquement, sans script requis.

<!-- Image verified: exists -->


## 4. Configuration étape par étape pour la sauvegarde CCTV/NVR

### Étape 1) Connecter le stockage du NVR (SMB ou SFTP)

1. Cliquez sur **Remote → + New Remote**.  
2. Choisissez **SMB** (pour un partage NAS/Windows) ou **SFTP** (pour les exports NVR sous Linux).  
3. Saisissez l'adresse du serveur, le partage/chemin et les identifiants (ajoutez le domaine si nécessaire).  
4. Enregistrez et vérifiez qu'il apparaît dans le Remote Manager.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png" alt="Create NVR remote from Remote Manager" class="img-medium img-center" />

### Étape 2) Ajouter votre cible cloud (Wasabi/S3/Google Drive)

- **Wasabi/S3** : collez les clés d'accès/secrète, la région, le bucket.  
- **Google Drive** : cliquez sur **Connect** et terminez l'authentification OAuth dans le navigateur.  
- Gardez les deux distants visibles pour travailler côte à côte.

### Étape 3) Ouvrir la source et la destination

1. Allez dans **Browse**.  
2. Volet gauche : ouvrez le dossier du NVR (par exemple `/recordings/2025/12/08`).  
3. Volet droit : ouvrez le bucket ou le dossier Drive pour les sauvegardes.  
4. Développez quelques dossiers datés pour vérifier les chemins.

### Étape 4) Prévisualiser les deltas avec Compare

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/folder-comparison-completed.png" alt="Folder comparison showing CCTV deltas" class="img-medium img-center" />

- Cliquez sur **Compare** pour mettre en évidence les fichiers vidéo manquants ou dont la taille a changé.  
- Résolvez les collisions de noms (identifiants de caméra en double) avant de copier.  
- Cela évite d'écraser des clips plus récents sur la cible.

### Étape 5) Copier ou synchroniser en toute sécurité

- Commencez par une **copie à sens unique** du NVR vers le cloud (sans suppression).  
- Activez le **checksum** pour S3/Wasabi afin de valider les téléversements.  
- Utilisez des **limites de bande passante** pendant les heures de bureau ; levez les plafonds la nuit.  
- Pour les journées très volumineuses, réduisez la concurrence pour éviter la limitation de débit, puis augmentez-la ensuite.

### Étape 6) Enregistrer le workflow en tant que Job

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="Save CCTV sync to jobs" class="img-medium img-center" />

1. Dans la boîte de dialogue Sync/Copy, cliquez sur **Save to Jobs**.  
2. Nommez-le (par exemple `cctv-daily-wasabi`).  
3. Choisissez une synchronisation à sens unique si vous prévoyez de purger les anciens clips plus tard.

### Étape 7) Planifier les exécutions automatiques

<!-- Image verified: exists with /support prefix -->
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule CCTV backup job" class="img-medium img-center" />

- Ouvrez **Job Manager → Add Job**.  
- Sélectionnez votre job enregistré et définissez la cadence : toutes les heures, toutes les 3 heures, ou chaque nuit à 02h00.  
- Échelonnez les jobs par groupe de caméras si la bande passante est limitée.  
- Vérifiez **Job History** après les premières exécutions.

## 5. Exemples de politiques de sauvegarde

- **Stockage à court terme (à chaud) :** conservez les 7 derniers jours sur le NAS/NVR pour une consultation rapide.  
- **Archive à long terme :** poussez toutes les images vers Wasabi/S3 chaque semaine ; activez le versioning.  
- **Audit/revue :** copiez certains jours sélectionnés vers Google Drive pour les enquêteurs et les responsables.  
- **Franchise ou multi-sites :** séparez les buckets/préfixes par magasin pour isoler les accès.


## 6. Optimisation des coûts pour les archives vidéo

- Stockez les images rarement consultées sur **Wasabi** ou les niveaux à accès peu fréquent de S3.  
- Ne conservez sur Google Drive que les journées actives pour un partage rapide.  
- Utilisez des règles de cycle de vie sur S3/Wasabi pour faire migrer les objets anciens vers des niveaux moins coûteux.  
- Excluez les clips de test de caméra et les segments sans mouvement si votre politique le permet.

## 7. Restaurer les images en cas de besoin

- Parcourez le distant cloud dans l'explorateur ; filtrez par dossier de date.  
- Copiez uniquement l'heure/le jour pertinent vers le disque local pour la revue.  
- Utilisez **Compare** pour confirmer que les fichiers restaurés correspondent aux originaux (taille/date ou checksum).  
- Pour les conservations légales, dupliquez vers un préfixe/bucket séparé en lecture seule.

## 8. Modèles de déploiement réels

- **Petit commerce de détail :** NVR → Wasabi toutes les heures ; conservez 30 jours dans le cloud, 7 jours en local.  
- **Usine :** CCTV → NAS → copie nocturne vers Wasabi ; archive froide mensuelle sur S3.  
- **Réseau de franchise :** préfixes par site dans un même bucket ; copies Drive pour les audits du siège.  
- **Prestataire de sécurité :** buckets par client, jobs planifiés et distants chiffrés pour les sites réglementés. 

## 9. Conclusion

RcloneView transforme les sauvegardes CCTV/NVR en un workflow prévisible, sans ligne de commande. Connectez votre NAS ou enregistreur via SMB/SFTP, associez-le à Wasabi/S3/Google Drive, prévisualisez les deltas avec Compare, et planifiez des Sync Jobs avec vérification de checksum. Grâce à l'automatisation, à la journalisation et aux options de chiffrement, vous pouvez répondre aux exigences de rétention, d'audit et de reprise après sinistre sans surveiller les téléversements nocturnes.

<CloudSupportGrid />
