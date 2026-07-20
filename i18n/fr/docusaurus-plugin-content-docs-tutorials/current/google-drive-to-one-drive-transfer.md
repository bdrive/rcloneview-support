---
sidebar_position: 2
description: "Découvrez comment copier, synchroniser et planifier des transferts de fichiers entre Google Drive et OneDrive grâce à l'interface intuitive par glisser-déposer et au planificateur de tâches de RcloneView."
keywords:
  - rcloneview
  - Google Drive vers OneDrive
  - transfert cloud à cloud
  - synchronisation de fichiers
  - migration cloud
  - stockage cloud
  - synchronisation cloud
  - Onedrive
  - google drive
  - planification de tâches
  - rclone
  - sync
  - tâches planifiées
  - glisser-déposer
tags:
  - RcloneView
  - Tutorial
  - cloud-storage
  - cloud-file-transfer
  - cloud-migration
  - google-drive
  - onedrive
  - Sync
  - job
  - cloud-to-cloud
date: 2025-05-19
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# Guide de transfert de Google Drive vers OneDrive
  

Les services de stockage cloud sont devenus essentiels pour gérer les documents, les médias et les sauvegardes. Parmi les services les plus utilisés figurent **Google Drive** et **Microsoft OneDrive**. Chacun offre un espace de stockage généreux, une intégration avec des outils de productivité (Google Workspace et Microsoft 365), ainsi qu'une large compatibilité multiplateforme.

Bien que les deux plateformes disposent de leurs propres écosystèmes cloud, **RcloneView** offre une interface centralisée pour gérer, transférer et synchroniser des fichiers entre elles — **sans scripts complexes ni opérations en ligne de commande**.

Dans ce guide, nous allons vous montrer comment **transférer des fichiers de Google Drive vers OneDrive** avec **RcloneView**, un outil doté d'une interface graphique basé sur Rclone qui simplifie et renforce la gestion multi-cloud.

<img src="/support/images/en/tutorials/google-drive-to-ondrive-transfer.png" alt="google drive to ondrive transfer" class="img-medium img-center" />

## **Pourquoi utiliser RcloneView pour les transferts cloud à cloud ?**

RcloneView est une interface graphique puissante construite sur le moteur Rclone, conçue pour simplifier la gestion du stockage cloud.

- Connectez facilement plusieurs fournisseurs cloud
- Interface intuitive pour transférer des fichiers par glisser-déposer
- Comparez le contenu des dossiers avant le transfert
- Interface simple avec des fonctionnalités avancées comme la simulation (dry-run), les filtres et la planification de tâches
- Planifiez des transferts et sauvegardes récurrents
- Connexion OAuth sécurisée pour Google Drive et OneDrive

Contrairement aux méthodes manuelles traditionnelles de téléchargement/envoi, RcloneView automatise le processus grâce à des opérations directes basées sur des API, permettant des transferts fluides et sans surveillance entre les espaces de stockage cloud.

## 📙 Transférer des fichiers de Google Drive vers OneDrive


### Ajouter les distants Google Drive et OneDrive dans RcloneView

1. Ouvrez **RcloneView** et cliquez sur **`+ New Remote`** dans le menu **`Remote`**.  
2. Dans l'onglet **`Provider`**, recherchez et sélectionnez **Google Drive**.  
3. Suivez l'assistant et terminez la connexion OAuth.  
4. Répétez la même procédure pour **OneDrive**.  

 🔍 Pour une configuration détaillée, consultez :
 - [Comment ajouter un distant Google Drive](/howto/#step-2-adding-remote-storage-google-drive-example)
 - [Comment ajouter un distant OneDrive](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)

### Ouvrir les deux distants dans le volet Explorateur

1. Ouvrez **RcloneView** et accédez à l'onglet **Browse** du volet Explorateur.  
2. Dans un volet, cliquez sur l'icône plus `+` dans son en-tête et sélectionnez votre distant **Google Drive** dans la liste.  
3. Dans l'autre volet, cliquez sur l'icône `+` et choisissez votre distant **OneDrive** dans la liste.  
4. Les deux distants s'afficheront alors côte à côte, vous permettant de copier, comparer, glisser ou synchroniser facilement des fichiers et des dossiers entre eux.  

<img src="/support/images/en/tutorials/open-google-drive-and-onedrive.png" alt="open google drive and onedrive" class="img-medium img-center" />

### 📌 4 méthodes pour transférer des fichiers

RcloneView propose plusieurs méthodes puissantes pour déplacer ou synchroniser des données entre Google Drive et OneDrive. Choisissez celle qui correspond le mieux à votre flux de travail :

#### 🖱️ **Méthode 1 : glisser-déposer entre les volets de l'Explorateur**

  
	1. Ouvrez **RcloneView** et accédez à l'onglet **Browse** (affiché par défaut au démarrage).  
	2. Assurez-vous que les deux distants cloud (Google Drive et OneDrive) sont visibles côte à côte dans l'Explorateur à deux volets.  
	3. **Glissez simplement les fichiers ou dossiers** depuis le volet Google Drive et **déposez-les** dans le volet OneDrive.  
	4. Le transfert démarrera automatiquement via le moteur d'arrière-plan Rclone. Vous pouvez suivre la progression en temps réel dans l'onglet des journaux **`Transfer`**.  

  
Cette interface intuitive de glisser-déposer simplifie le déplacement ou la copie de fichiers — aucune commande n'est nécessaire.

👉 En savoir plus : [Parcourir et gérer le stockage distant](/howto/rcloneview-basic/browse-and-manage-remote-storage)

#### 🔍 **Méthode 2 : comparer le contenu des dossiers, copier ou supprimer**

  
	1. Dans les deux volets de l'Explorateur, accédez et sélectionnez les dossiers que vous souhaitez comparer (à gauche : Google Drive, à droite : OneDrive).  
	2. Cliquez sur le bouton **`Compare`** dans le menu principal pour lancer la comparaison des dossiers.  
	3. RcloneView analysera et mettra en évidence :  
		- Les fichiers présents uniquement d'un côté  
		- Les fichiers portant le même nom mais de tailles différentes  
		- Les fichiers identiques
	4. Sélectionnez les fichiers pour choisir ceux sur lesquels vous souhaitez agir.  
	5. Pour transférer des fichiers de gauche à droite, cliquez sur le bouton **`Copy →`**.  
		   Pour transférer de droite à gauche, utilisez le bouton **`← Copy`**.  
		   Pour supprimer un fichier d'un distant, cliquez sur le bouton **`Delete`** dans son volet.  
	6. La progression et le récapitulatif s'affichent dans la barre d'état.  


Cette comparaison visuelle minimise les erreurs en vous permettant de vérifier les fichiers **avant** de les déplacer ou de les supprimer.

👉 En savoir plus dans le [guide de comparaison du contenu des dossiers](/howto/rcloneview-basic/compare-folder-contents)


#### 🔁 **Méthode 3 : utiliser la synchronisation ou une tâche**

1. Dans le volet Explorateur, accédez et sélectionnez le dossier **Google Drive** et le dossier **OneDrive** que vous souhaitez garder synchronisés.  
2. Cliquez sur le bouton **`Sync`** dans le menu `home`.  
3. Choisissez les options de synchronisation (uni-directionnelle ou inverse), prévisualisez les actions, puis confirmez.   
4. RcloneView exécutera la synchronisation et affichera un indicateur de progression dans l'onglet de journal **`transfer`**.   

- Pour des transferts répétés ou planifiés :  

  1. Cliquez sur **`Save to Jobs`** dans la fenêtre modale de synchronisation, ou ouvrez **`Job Manager`** → cliquez sur **`Add Job`**.   
  2. Configurez la source et la destination, puis définissez les options.   
  3. Enregistrez la tâche et exécutez-la manuellement ou planifiez-la.  

 👉 En savoir plus :  

- [Synchroniser les stockages distants](/howto/rcloneview-basic/synchronize-remote-storages)  
- [Créer des tâches de synchronisation](/howto/rcloneview-basic/create-sync-jobs)  
- [Exécuter et gérer les tâches](/howto/rcloneview-basic/execute-manage-job)

#### ⏰ Méthode 4 : planifier une tâche de synchronisation automatique 

1. Dans le volet Explorateur, accédez et sélectionnez le dossier **Google Drive** et le dossier **OneDrive** que vous souhaitez garder synchronisés.  
2. Ouvrez **`Job Manager`** depuis le menu **`Home`** ou **`Remote`**, puis cliquez sur **`Add Job`**.  
3. Vérifiez la source et la destination sélectionnées ; ajustez-les si nécessaire.  
4. Utilisez l'éditeur de planification pour définir le moment d'exécution de la tâche. RcloneView propose un outil de simulation intégré pour prévisualiser votre modèle de planification avant de l'enregistrer.  
5. Enregistrez et activez la tâche planifiée.   

Une fois enregistrée, RcloneView exécutera automatiquement la synchronisation aux moments que vous avez spécifiés.  

Les détails d'exécution et les journaux sont disponibles dans **`Job History`**, et vous recevrez une notification lorsque la tâche se termine avec succès.

👉 En savoir plus : [Planification et exécution des tâches](/howto/rcloneview-advanced/job-scheduling-and-execution)


## **Pour conclure**

Transférer des fichiers entre des services cloud comme Google Drive et OneDrive n'a pas besoin d'être compliqué. Avec **RcloneView**, cela se résume à quelques clics — aucune utilisation de la ligne de commande n'est requise.

Cette méthode est rapide, sécurisée et fiable, que vous déplaciez des gigaoctets de fichiers personnels ou que vous synchronisiez des documents d'entreprise entre plusieurs comptes.

 🎯 Essayez RcloneView dès aujourd'hui et simplifiez votre gestion multi-cloud.

---

## 🔗 Guides associés

- [Comment ajouter un distant Google Drive](/howto/#step-2-adding-remote-storage-google-drive-example)
- [Comment ajouter un distant OneDrive](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)
- [Parcourir et gérer le stockage distant](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Guide de comparaison du contenu des dossiers](/howto/rcloneview-basic/compare-folder-contents)
- [Synchroniser les stockages distants](/howto/rcloneview-basic/synchronize-remote-storages)  
- [Créer des tâches de synchronisation](/howto/rcloneview-basic/create-sync-jobs)  
- [Exécuter et gérer les tâches](/howto/rcloneview-basic/execute-manage-job)
- [Planification et exécution des tâches](/howto/rcloneview-advanced/job-scheduling-and-execution)


<CloudSupportGrid />
