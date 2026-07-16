---
slug: transfer-yandex-and-google-drive-with-rcloneview
title: "Transférer des fichiers entre Yandex Disk et Google Drive avec RcloneView"
authors:
  - tayson
description: "Migrez et synchronisez des fichiers entre Yandex Disk et Google Drive grâce à l'interface graphique de RcloneView—connexion native à Yandex, OAuth pour Google, glisser-déposer, Compare, Sync et tâches planifiées."
keywords:
  - rcloneview
  - yandex disk
  - google drive
  - cloud migration
  - cloud sync
  - rclone
  - cloud transfer
  - multi cloud
  - cloud to cloud transfer
tags:
  - cloud
  - sync
  - cloud-migration
  - tutorial
  - yandex
  - google-drive
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Transférer des fichiers entre Yandex Disk et Google Drive avec RcloneView

> Déplacez ou synchronisez des fichiers entre Yandex Disk ↔ Google Drive sans utiliser la ligne de commande.  
> RcloneView propose des panneaux Explorer côte à côte, Compare, Sync, et des tâches planifiées—tout en gérant pour vous la connexion via navigateur à Yandex et l'OAuth Google.

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Pourquoi utiliser RcloneView pour les transferts Yandex ↔ Google Drive ?

- **Connexion native à Yandex via votre navigateur** (pas de WebDAV, pas de jetons manuels).
- **Connexion OAuth sécurisée** pour Google Drive.
- **Panneaux Explorer côte à côte** pour un glisser-déposer intuitif.
- **Mode Compare** pour visualiser les différences avant de copier ou de supprimer.
- **Sync** avec simulation (dry-run), filtres et vérification par checksum.
- **Tâches réutilisables et planification** pour les sauvegardes récurrentes et l'automatisation.
- **Visibilité complète sur la progression** grâce aux journaux, aux tentatives de reprise et au contrôle de la bande passante.

RcloneView construit un flux de travail visuel au-dessus de rclone, de sorte que même les transferts multi-cloud complexes deviennent simples.

---

## Avant de commencer

- Assurez-vous de pouvoir vous connecter à votre **compte Yandex**—la configuration utilise la connexion par navigateur, pas WebDAV.
- Vérifiez votre quota **Google Drive** et notez la limite quotidienne d'upload de 750 Go de Google.
- Installez la dernière version de RcloneView depuis :  
  👉 https://rcloneview.com/src/download.html
- Pour les tâches volumineuses, gardez votre ordinateur éveillé et privilégiez des réseaux stables.

---

## Étape 1 : ajouter vos distants cloud

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />  

### Connecter Yandex Disk (connexion via navigateur)

1. Ouvrez **Remote → + New Remote**.
2. Sélectionnez **Yandex Disk** comme fournisseur.
3. Cliquez sur **Connect**, ce qui ouvre une page de connexion Yandex dans votre navigateur.
4. Connectez-vous et accordez l'accès.
5. Enregistrez le distant une fois que RcloneView confirme que l'authentification est terminée.  

### Connecter Google Drive

1. Cliquez à nouveau sur **+ New Remote**.
2. Choisissez **Google Drive**.
3. Appuyez sur **Connect**, terminez la connexion OAuth dans le navigateur et autorisez les permissions.
4. Enregistrez le distant.

👉 Guide : [Ajouter un distant Google Drive](/howto/#step-2-adding-remote-storage-google-drive-example)

---

## Étape 2 : ouvrir les deux clouds dans le panneau Explorer

1. Allez dans l'onglet **Browse**.
2. Cliquez sur l'icône **+** dans le panneau gauche → sélectionnez **Yandex Disk**.
3. Cliquez sur l'icône **+** dans le panneau droit → sélectionnez **Google Drive**.
4. Naviguez jusqu'aux dossiers que vous souhaitez déplacer ou synchroniser.  

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />  

---

## Quatre façons de transférer des fichiers

### Méthode 1 : glisser-déposer entre les panneaux Explorer

1. Dans le panneau Yandex, sélectionnez des fichiers ou des dossiers.
2. Faites-les glisser vers le panneau Google Drive (ou dans le sens inverse).
3. Suivez la progression sous **Transfer**.  

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />  


👉 Référence :  
[Parcourir et gérer le stockage distant](/howto/rcloneview-basic/browse-and-manage-remote-storage)  
[Glisser-déposer des fichiers](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)  

---

### Méthode 2 : comparer, puis copier ou supprimer

1. Ouvrez le dossier source dans Yandex Disk (à gauche) et le dossier cible dans Google Drive (à droite).
2. Sélectionnez **Compare**.
3. RcloneView mettra en évidence :
   - Les éléments présents d'un seul côté
   - Les éléments qui diffèrent en taille
   - Les fichiers identiques
4. Cliquez sur **Copy →** ou **← Copy** selon la direction.
5. Utilisez **Delete** avec précaution lors du nettoyage des doublons.  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />  


👉 Guide : [Comparer le contenu de dossiers](/howto/rcloneview-basic/compare-folder-contents)  


---

### Méthode 3 : synchroniser ou enregistrer comme tâche

1. Sélectionnez un **dossier Yandex** comme source et un **dossier Google Drive** comme destination.
2. Cliquez sur **Sync**.
3. Choisissez :
   - Synchronisation à sens unique (Yandex → Google Drive)
   - Synchronisation à sens unique (Google Drive → Yandex)
   - Synchronisation bidirectionnelle
4. Prévisualisez les opérations planifiées à l'aide du dry-run.
5. Lancez la synchronisation, ou cliquez sur **Save to Jobs** pour la réutiliser plus tard.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />  


👉 Pour en savoir plus :

- [Synchroniser des stockages distants](/howto/rcloneview-basic/synchronize-remote-storages)
- [Créer des tâches de synchronisation](/howto/rcloneview-basic/create-sync-jobs)
- [Exécuter et gérer les tâches](/howto/rcloneview-basic/execute-manage-job)

---

### Méthode 4 : planifier des tâches de synchronisation récurrentes

1. Ouvrez **Job Manager → Add Job**.
2. Sélectionnez Yandex comme source et Google Drive comme destination (ou inversement).
3. Définissez un intervalle (par exemple, quotidien, horaire, hebdomadaire).
4. Activez la tâche.
5. Consultez les journaux et l'historique des tâches pour voir les résultats.  

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />  

👉 Pour en savoir plus : [Planification et exécution des tâches](/howto/rcloneview-advanced/job-scheduling-and-execution)

---

## Conseils pour des transferts fluides

- Utilisez le **dry-run** avant les grandes synchronisations à sens unique.
- L'API Google Drive peut limiter les rafales très volumineuses ; réduisez la concurrence si nécessaire.
- Gardez RcloneView en cours d'exécution pour les tâches planifiées.

---

## Résumé

RcloneView rend le transfert de fichiers entre **Yandex Disk** et **Google Drive** simple et fiable.  
Avec une connexion native pour les deux services, des panneaux Explorer visuels, Compare, Sync et des tâches, vous pouvez migrer ou maintenir vos flux de travail multi-cloud sans toucher à une ligne de commande.

<CloudSupportGrid />
