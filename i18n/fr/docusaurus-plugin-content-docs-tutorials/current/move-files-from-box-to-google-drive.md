---
sidebar_position: 7
description: "Découvrez comment transférer et synchroniser facilement des fichiers entre Box et Google Drive grâce à l'interface graphique de RcloneView : glisser-déposer, comparaison de dossiers et planification des tâches."
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - cloud to cloud transfer
  - rclone GUI
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
  - Box
  - google drive
  - box to google drive
tags:
  - RcloneView
  - Cloud
  - Sync
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - box
  - google-drive
  - cloud-to-cloud
date: 2025-07-10
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# Guide de transfert de fichiers Box ↔ Google Drive

Les plateformes de stockage cloud comme **Box** et **Google Drive** offrent chacune des avantages uniques. Box est conçu pour la collaboration en entreprise avec des fonctionnalités avancées de sécurité et de workflow, tandis que Google Drive s'intègre parfaitement à Google Workspace et propose un espace de stockage gratuit généreux. Cependant, gérer des fichiers sur les deux plateformes peut s'avérer fastidieux, en particulier lorsque vous devez migrer des données entre elles.

Avec **RcloneView**, vous pouvez facilement **transférer des fichiers dans les deux sens** entre Box et Google Drive grâce à une interface graphique intuitive, sans ligne de commande.

  
<img src="/support/images/en/tutorials/transfer-files-between-box-and-google-drive.png" alt="transfer files between box and google drive" class="img-medium img-center" />

## **Pourquoi utiliser RcloneView pour les transferts multi-cloud ?**

RcloneView simplifie les transferts cloud complexes en proposant :

- Une intégration OAuth sécurisée pour Box et Google Drive  
- Des transferts de fichiers par glisser-déposer entre les clouds
- Des outils de comparaison de dossiers pour visualiser les différences avant le transfert  
- La synchronisation et la planification de transferts et sauvegardes récurrents
- Un aperçu en mode simulation (dry-run), des filtres et des options de transfert avancées  
- Une surveillance des transferts en arrière-plan avec journaux de progression  

Plutôt que de télécharger puis de réuploader manuellement les fichiers, RcloneView s'appuie sur un transfert direct basé sur l'API, rendant votre flux de travail plus rapide et plus fiable.

## 🔄 Transférer des fichiers : Box ↔ Google Drive

### Étape 1 : Connecter vos remotes cloud

1. Lancez **RcloneView**, puis sélectionnez **`+ New Remote`** dans le menu **Remote**.  
2. Dans l'onglet **`Provider`**, recherchez et sélectionnez **Box**.
3. Effectuez la connexion OAuth comme demandé.
4. Répétez la même procédure pour **Google Drive**.


👉 En savoir plus :  

- [Ajouter un remote Box](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)  
- [Ajouter un remote Google Drive](/howto/#step-2-adding-remote-storage-google-drive-example)

### Étape 2 : Ouvrir les remotes côte à côte

1. Accédez à l'onglet **Browse** du panneau Explorer.
2. Dans un panneau, cliquez sur l'icône plus `+` et sélectionnez votre remote **Box**.
3. Dans l'autre panneau, cliquez sur `+` et choisissez votre remote **Google Drive**.
4. Les deux remotes s'affichent côte à côte, ce qui facilite le glisser-déposer, la copie ou la synchronisation entre eux.

Vous pouvez désormais effectuer des transferts entre eux en toute simplicité.

<img src="/support/images/en/tutorials/open-box-and-google-drive-remotes.png" alt="open box and google drive remotes" class="img-medium img-center" />

### 📌 4 méthodes de transfert de fichiers

RcloneView propose plusieurs méthodes flexibles pour déplacer ou synchroniser des données de Box vers Google Drive. Choisissez celle qui correspond à votre flux de travail :

#### 🖱️ Méthode 1 : Glisser-déposer entre les panneaux de l'Explorer

1. Ouvrez **RcloneView** et accédez à l'onglet **Browse**.
2. Assurez-vous que les remotes Box et Google Drive sont visibles côte à côte.
3. **Faites glisser des fichiers ou dossiers** depuis le panneau Box et **déposez-les** dans le panneau Google Drive.
4. Le transfert démarre automatiquement. Suivez la progression dans l'onglet des journaux **`Transfer`**.

Cette interface intuitive de glisser-déposer rend les transferts cloud à cloud sans effort, sans aucune commande nécessaire.

👉 Plus de détails : [Parcourir et gérer le stockage distant](/howto/rcloneview-basic/browse-and-manage-remote-storage)

#### 🔍 Méthode 2 : Comparer le contenu des dossiers, copier ou supprimer

1. Dans les deux panneaux de l'Explorer, accédez aux dossiers à comparer et sélectionnez-les (gauche : Box, droite : Google Drive).
2. Cliquez sur le bouton **`Compare`** dans le menu principal.
3. RcloneView met en évidence :
   - Les fichiers présents uniquement d'un côté
   - Les fichiers portant le même nom mais de tailles différentes
   - Les fichiers identiques
4. Sélectionnez les fichiers à transférer ou à supprimer.
5. Pour transférer des fichiers de gauche à droite, cliquez sur **`Copy →`**. Pour transférer de droite à gauche, utilisez **`← Copy`**. Pour supprimer un fichier, cliquez sur **`Delete`**.
6. La progression et le résumé s'affichent dans la barre d'état.

La comparaison visuelle permet d'éviter les erreurs et de vous assurer de ne déplacer que ce que vous souhaitez.

👉 En savoir plus : [Guide de comparaison du contenu des dossiers](/howto/rcloneview-basic/compare-folder-contents)

  
#### 🔁 Méthode 3 : Utiliser Sync ou Job

1. Dans le panneau Explorer, sélectionnez le dossier **Box** et le dossier **Google Drive** à synchroniser.
2. Cliquez sur le bouton **`Sync`** dans le menu `home`.
3. Choisissez les options de synchronisation (à sens unique ou bidirectionnelle), prévisualisez les actions et confirmez.
4. RcloneView exécute la synchronisation et affiche la progression dans l'onglet de journal **`transfer`**.

- Pour des transferts répétés ou planifiés :
  1. Cliquez sur **`Save to Jobs`** dans la fenêtre modale Sync, ou ouvrez **`Job Manager`** → **`Add Job`**.
  2. Configurez la source, la destination et les options.
  3. Enregistrez et exécutez manuellement ou définissez une planification.

👉 En savoir plus :
- [Synchroniser des stockages distants](/howto/rcloneview-basic/synchronize-remote-storages)
- [Créer des tâches de synchronisation](/howto/rcloneview-basic/create-sync-jobs)
- [Exécuter et gérer les tâches](/howto/rcloneview-basic/execute-manage-job)

  
#### ⏰ Méthode 4 : Planifier une tâche de synchronisation automatique

1. Dans le panneau Explorer, sélectionnez les dossiers **Box** et **Google Drive** à maintenir synchronisés.
2. Ouvrez **`Job Manager`** depuis le menu **`Home`** ou **`Remote`**, puis cliquez sur **`Add Job`**.
3. Confirmez votre source et votre destination.
4. Utilisez l'éditeur de planification pour définir l'heure d'exécution de la tâche. Prévisualisez votre planification avant de l'enregistrer.
5. Enregistrez et activez la tâche planifiée.

RcloneView exécutera la synchronisation aux heures spécifiées. Consultez les détails d'exécution et les journaux dans **`Job History`** et recevez des notifications à la fin du processus.

👉 En savoir plus : [Planification et exécution des tâches](/howto/rcloneview-advanced/job-scheduling-and-execution)

  
## ✅ Résumé

Qu'il s'agisse d'une migration ponctuelle ou d'une synchronisation continue, RcloneView permet des transferts de fichiers rapides, sécurisés et fiables entre Box et Google Drive, éliminant le besoin de téléchargements manuels ou d'outils en ligne de commande.

  
Essayez-le dès maintenant et optimisez vos flux de travail multi-cloud !

  
## 🔗 Guides associés

- [Comment ajouter un remote Box](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)  
- [Comment ajouter un remote Google Drive](/howto/#step-2-adding-remote-storage-google-drive-example)  
- [Parcourir et gérer le stockage distant](/howto/rcloneview-basic/browse-and-manage-remote-storage)  
- [Comparer le contenu des dossiers](/howto/rcloneview-basic/compare-folder-contents)  
- [Synchroniser des stockages distants](/howto/rcloneview-basic/synchronize-remote-storages)  
- [Créer des tâches de synchronisation](/howto/rcloneview-basic/create-sync-jobs)  
- [Exécuter et gérer les tâches](/howto/rcloneview-basic/execute-manage-job)  
- [Planification et exécution des tâches](/howto/rcloneview-advanced/job-scheduling-and-execution)

  

<CloudSupportGrid />
