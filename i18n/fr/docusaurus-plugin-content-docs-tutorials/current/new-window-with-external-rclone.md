---
sidebar_position: 5
description: "Découvrez comment synchroniser Google Drive et AWS S3 directement dans le cloud à l'aide de RcloneView connecté à une instance Rclone externe exécutée sur AWS EC2."
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - aws
  - ec2
  - google drive
  - aws s3
  - external rclone
  - cloud to cloud transfer
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
tags:
  - RcloneView
  - aws-ec2
  - google-drive
  - Sync
  - cloud-file-transfer
  - cloud-migration
  - cloud-to-cloud
  - aws-s3
date: 2025-06-19
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# Synchroniser AWS S3 et Google Drive via un Rclone externe sur EC2

Synchroniser des données entre services de stockage cloud (par exemple, Google Drive ↔ AWS S3) avec **RcloneView** est simple grâce à son **Rclone intégré**. Lorsque vous installez RcloneView, ce moteur intégré est automatiquement inclus et est généralement utilisé pour gérer les transferts de fichiers depuis votre **PC local**.

Cependant, l'utilisation du Rclone intégré signifie que **tout le trafic de transfert passe par votre ordinateur local**. Cela peut ralentir considérablement les opérations, en particulier lors de la synchronisation de grands ensembles de données ou sur un réseau plus lent.

Par exemple, synchroniser des fichiers de **Google Drive vers AWS S3** avec le Rclone intégré implique de télécharger les fichiers sur votre machine locale, puis de les envoyer vers S3. Ce double transfert ajoute non seulement de la latence, mais consomme aussi votre bande passante locale.

<img src="/support/images/en/tutorials/sync-aws-s3-and-google-drive-via-ec2.png" alt="sync aws s3 and google drive via ec2" class="img-medium img-center" />
Une meilleure solution dans ce cas consiste à **exécuter Rclone directement sur une instance cloud**, comme **un serveur AWS EC2**. En connectant RcloneView à ce **Rclone externe exécuté sur EC2**, vous pouvez :

- Éviter d'acheminer le trafic via votre PC local  
- Effectuer des transferts cloud à cloud directement dans le cloud (Google → EC2 → S3)  
- Profiter d'une infrastructure réseau cloud à plus haute vitesse    

Cette architecture améliore considérablement les performances et réduit la charge sur votre appareil local.

Dans ce tutoriel, nous allons vous montrer comment utiliser la fonctionnalité **Nouvelle fenêtre de RcloneView** pour vous connecter à un **Rclone externe sur EC2**, puis synchroniser des fichiers entre **Google Drive** et **AWS S3** entièrement depuis le cloud.

:::caution Des frais AWS EC2 et de transfert réseau peuvent s'appliquer  

Exécuter Rclone sur une instance EC2 peut accélérer les transferts, mais notez qu'**AWS peut facturer l'utilisation de calcul et le transfert de données sortant vers d'autres services**.  

Voir : [AWS Pricing – Data Transfer](https://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer)

:::
  
Ce guide vous explique comment :

1. Lancer et configurer **Rclone** sur une instance AWS EC2  
2. Ouvrir une nouvelle fenêtre RcloneView  
3. Se connecter au **Rclone externe** sur EC2  
4. Ajouter des remotes **Google Drive** et **AWS S3**  
5. Synchroniser des fichiers directement entre eux avec de meilleures performances

---

## Partie 1 : Déployer Rclone sur EC2 (Rclone externe)

Suivez le guide AWS EC2 pour lancer Ubuntu, ouvrir le port 5572, installer Rclone et exécuter le démon `rcd`  

👉 Voir : [How to Run Rclone on AWS EC2 Server](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
 
**Points clés** :

- `rclone rcd` s'exécute avec `--rc-addr=0.0.0.0:5572`  
- Ouvrez le port `5572` dans votre groupe de sécurité EC2
- L'authentification HTTP Basic est configurée (`--rc-user`, `--rc-pass`)  
- Exécutez le démon avec :

 ```bash
   rclone rcd --rc-user=admin --rc-pass=admin --rc-addr=0.0.0.0:5572
```

- Vérifiez l'accès via :

```bash
curl -X POST -u admin:admin "http://<EC2-PUBLIC-IP-or-DNS>:5572/rc/noop"

```



---

## Partie 2 : Ouvrir une nouvelle fenêtre RcloneView

Pour garder les connexions organisées, RcloneView permet à chaque fenêtre de fonctionner avec son propre moteur Rclone.

1. Lancez **RcloneView**
    
2. Cliquez sur le bouton **`New Window`** dans le menu `Home`
    
3. Une nouvelle fenêtre d'application s'ouvre. Cette instance est indépendante de la fenêtre principale et conservera son propre contexte de connexion.
    

  📌 _Vous connecterez cette fenêtre à votre Rclone externe (EC2) à l'étape suivante._

  
👉 En savoir plus : [Using Multiple Rclone Connections with New Window](/howto/rcloneview-advanced/multi-window)

---

## Partie 3 : Connecter le Rclone externe hébergé sur EC2

Dans la **fenêtre nouvellement ouverte**, suivez ces étapes pour vous connecter à votre Rclone externe hébergé sur EC2 :

1. Ouvrez **`Connection Manager`** depuis le menu `Settings`.

2. Cliquez sur **`New Connection`** pour créer un nouveau profil de connexion Rclone.

3. Remplissez les champs requis :

    - **Display Name** : `ec2-rclone` (ou tout autre nom de votre choix)

    - **Remote Address** : `http://<EC2-PUBLIC-IP-or-DNS-NAME>:5572`

    - **Username / Password** : utilisez les valeurs définies dans la Partie 1 lors du démarrage du démon Rclone  
      (par exemple, `--rc-user=admin`, `--rc-pass=admin`)

4. Cliquez sur **`Test Connection`** pour vérifier la configuration.  
   Vous devriez voir une réponse de connexion réussie.

5. Si le test réussit, cliquez sur **`Save`**, puis sur **`Connect`**.

6. Vous êtes maintenant connecté à votre **instance Rclone externe exécutée sur EC2**, et le statut de la connexion doit apparaître en haut de la fenêtre.

<div class="img-grid-2">
<img src="/support/images/en/tutorials/new-connection-to-ec2-rclone.png" alt="new connection to ec2 rclone" class="img-medium img-center" />
<img src="/support/images/en/tutorials/connected-to-ec2-rclone.png" alt="connected to ec2 rclone" class="img-medium img-center" />
</div>

👉 En savoir plus : [Add a New External Rclone](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)


---

## Partie 4 : Ajouter les remotes AWS S3 et Google Drive (via Rclone externe)

  
Toujours dans la fenêtre RcloneView connectée à EC2 :

### ➕ Ajouter un remote AWS S3

1. Cliquez sur **`+ New Remote`** dans le menu `Remote`
    
2. Dans l'onglet **Provider**, recherchez et sélectionnez S3
    
3. Dans l'onglet **`Options`** :
    
    - Définissez **`Provider`** sur AWS
        
    - Saisissez votre **`Access Key ID`** et votre **`Secret Access Key`** AWS
        
    - Définissez la **`Region`** et, éventuellement, un **Endpoint** pour les services compatibles S3
        
    
4. Cliquez sur **Save**, puis nommez-le (par exemple, ec2-s3)
    
👉 En savoir plus : [Add AWS S3 Remote](/howto/remote-storage-connection-settings/s3)

### ➕ Ajouter un remote Google Drive (avec un jeton d'accès OAuth)

Au lieu de suivre un nouveau flux de connexion basé sur le navigateur, vous pouvez suivre les étapes du guide ci-dessous pour utiliser le **jeton d'accès OAuth** obtenu précédemment :

👉 Voir : [Set Up Google Drive on External Rclone Without Browser](/howto/remote-storage-connection-settings/ec2-google-drive-connection)

1. Allez dans **`+ New Remote`** depuis le menu `Remote`
2. Sélectionnez **Google Drive** comme fournisseur
3. Dans l'onglet **Options**, faites défiler vers le bas et cliquez sur **Show advanced options**
4. Collez le jeton précédemment copié dans le champ **`token`**
5. Nommez le remote (par exemple, `ec2-gdrive`) et enregistrez

  <img src="/support/images/en/tutorials/browsing-aws-s3-and-google-drive-via-ec2-rclone.png" alt="browsing aws s3 and google drive via ec2 rclone" class="img-medium img-center" />


---

## Partie 5 : Synchroniser des fichiers entre AWS S3 et Google Drive

 Vous pouvez maintenant transférer des fichiers entre Google Drive et S3 via votre instance Rclone sur EC2.

  ### **📁 Méthode A : Comparer et synchroniser à la demande**

1. Allez dans l'onglet **Browse**
    
2. Chargez le **remote Google Drive** dans le panneau de gauche (ec2-gdrive:)
    
3. Chargez le **remote AWS S3** dans le panneau de droite (ec2-s3:)
    
4. Cliquez sur **Compare** dans le menu du haut
    
5. Passez en revue les différences :
    
    - Fichiers présents d'un seul côté
        
    - Tailles différentes
        
    - Correspondances identiques
        
    
6. Utilisez **Copy →**, **← Copy**, ou **Delete** pour synchroniser
    

💡 La progression s'affiche dans la barre d'état et l'onglet du journal des transferts.

  👉 En savoir plus : [Compare Folder Contents](/howto/rcloneview-basic/compare-folder-contents)

---

### **🕒 Méthode B : Configurer une tâche de synchronisation planifiée**

1. Allez dans **Home → Job Manager**, puis cliquez sur **Add Job**
    
2. Sélectionnez **Sync**
    
    - Source : ec2-gdrive:folder
        
    - Destination : ec2-s3:folder
        
    
3. Configurez :
    
    - Le sens de la synchronisation
        
    - Les règles de filtrage (facultatif)
        
    
4. (Facultatif) Activez la **planification**
    
    - Définissez le modèle temporel
        
    - Prévisualisez la planification avec le simulateur intégré
        
    
5. Cliquez sur **Save & Enable**
    

  Une fois planifiée, RcloneView exécutera automatiquement les synchronisations via votre backend Rclone hébergé sur EC2.

👉 En savoir plus :
- [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages)
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)
- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)
- [Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)
  
---

## Vérification finale

- Confirmez que votre synchronisation s'est terminée avec succès via le panneau **Transfer Log** ou **Job History**
    
- Effectuez des vérifications périodiques sur EC2 pour confirmer qu'il reste connecté et réactif
    

---

## 🔗 Guides associés

- [How to Run Rclone on AWS EC2 Server](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
- [Using Multiple Rclone Connections with New Window](/howto/rcloneview-advanced/multi-window)
- [Add a New External Rclone](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)
- [Add AWS S3 Remote](/howto/remote-storage-connection-settings/s3)
- [Compare Folder Contents](/howto/rcloneview-basic/compare-folder-contents)
-  [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages)
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)
- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)
- [Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)



<CloudSupportGrid />
