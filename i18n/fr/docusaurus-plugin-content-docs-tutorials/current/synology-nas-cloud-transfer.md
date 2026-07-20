---
sidebar_position: 3
description: "Découvrez comment détecter automatiquement un NAS Synology sur votre réseau local et le connecter à RcloneView via WebDAV, SMB ou SFTP."
keywords:
  - rcloneview
  - Synology NAS
  - détection automatique
  - transfert NAS vers cloud
  - SMB
  - WebDAV
  - SFTP
  - intégration Synology
  - synchronisation du stockage cloud
  - sauvegarde cloud
  - google drive
  - onedrive
  - glisser-déposer
  - planificateur de tâches
  - gestion multi-cloud
tags:
  - RcloneView
  - Tutorial
  - synology
  - NAS
  - auto-detection
  - cloud-file-transfer
  - webdav
  - sftp
  - cloud-migration
  - multi-cloud
  - sync
  - job
  - drag-and-drop
date: 2025-09-11
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# Intégration simplifiée d'un NAS Synology avec RcloneView : détection automatique, configuration et transfert de fichiers

Connectez facilement votre NAS Synology à des services cloud comme Google Drive, OneDrive ou iCloud grâce à **RcloneView**. Avec la détection automatique, la prise en charge intégrée de SMB, WebDAV et SFTP, et sans configuration complexe, vous pouvez transférer, synchroniser ou planifier des tâches entre votre NAS et vos disques cloud — le tout depuis une interface conviviale.

## **✅ Pourquoi utiliser RcloneView pour les transferts NAS vers cloud ?**

Si vous utilisez un NAS Synology comme serveur domestique, sauvegarde de bureau ou coffre-fort multimédia, il y a de fortes chances que vous ayez aussi des comptes de stockage cloud. Avec RcloneView, vous n'avez pas besoin de télécharger manuellement des fichiers ou d'apprendre des outils en ligne de commande.

Vous bénéficiez à la place de :

- 🚀 Détection automatique des périphériques NAS sur votre réseau local
    
- 🔄 Tâches de synchronisation et de transfert entre le NAS et le stockage cloud
    
- 👨‍💻 Configuration via interface graphique pour WebDAV, SMB, FTP et SFTP
    
- 📅 Planification de tâches de sauvegarde automatisées du NAS vers le cloud
    
- ✅ Comparaison du contenu des dossiers avant synchronisation
    
- 🧠 Aucune compétence en ligne de commande requise
  

Que vous soyez débutant ou administrateur système, **RcloneView simplifie la gestion NAS-vers-cloud**.

## **🧰 Étape 1 : Détecter votre NAS sur le réseau local**
  

RcloneView analyse automatiquement votre réseau local à la recherche de périphériques NAS Synology.

<img src="/support/images/en/tutorials/synology-nas-auto-detect.png" alt="synology nas auto detect" class="img-medium img-center" />


- Assurez-vous que votre NAS et votre ordinateur sont sur le **même réseau local**.
    
- Les périphériques NAS détectés apparaîtront dans une liste indiquant :
    
    - Nom de l'appareil, adresse IP, adresse MAC, port DSM
        
    - Lien pour ouvrir **DSM (DiskStation Manager)**


:::info La détection automatique du NAS ne fonctionne pas sur un VLAN
Si vous utilisez un VLAN (réseau local virtuel), il se peut que RcloneView ne parvienne pas à détecter automatiquement votre NAS Synology.  

Cela s'explique par le fait que la fonction de découverte automatique repose sur des protocoles multicast ou broadcast, qui sont généralement restreints ou bloqués entre les VLAN pour des raisons de sécurité et d'isolation du trafic.
:::

  
### Sélectionner une méthode de connexion

  Dans la liste déroulante, choisissez comment vous connecter :

- **WebDAV** (par défaut et recommandé)
- **SMB**
- **FTP**
- **SFTP**

**🔗 Besoin de configurer ces protocoles sur Synology au préalable ?**

Consultez les guides officiels de configuration DSM :

- [Configurer WebDAV sur Synology](https://kb.synology.com/en-global/DSM/help/WebDAVServer/webdav_server)
- [Activer SMB sur Synology](https://kb.synology.com/en-global/DSM/help/SMBService/smbservice_smb_settings)
- [Configurer FTP sur Synology](https://kb.synology.com/en-global/DSM/help/DSM/AdminCenter/file_ftp_setting) 
- [Configurer SFTP sur Synology](https://kb.synology.com/en-global/DSM/help/DSM/AdminCenter/file_ftp_sftp) 

:::important Configuration de la redirection de port et du DDNS

Si votre NAS se trouve derrière un routeur ou fonctionne dans un environnement NAT (Network Address Translation), vous devez **configurer la redirection de port** sur votre routeur après avoir activé WebDAV, SMB, FTP ou SFTP dans DSM.

📘 En savoir plus : [Guide de redirection de port Synology](https://kb.synology.com/en-global/DSM/tutorial/Quick_Start_External_Access#x_anchor_id5)

De plus, pour accéder à votre NAS via Internet en utilisant **un accès basé sur un nom de domaine plutôt qu'une adresse IP**, vous pouvez configurer le service **DDNS (Dynamic DNS)** de Synology.

🌐 En savoir plus : [Guide de configuration du DDNS Synology](https://kb.synology.com/en-global/DSM/tutorial/Quick_Start_External_Access#x_anchor_id3)

:::


## **🔗 Étape 2 : Ajouter le NAS Synology comme distant**

Après avoir sélectionné votre NAS et la méthode de connexion, RcloneView vous guide automatiquement à travers l'assistant **`+ New Remote`** :

- Le **Provider** est automatiquement sélectionné en fonction de la méthode de connexion choisie (par ex. WebDAV, SMB, SFTP).
- Le **Remote Name** est pré-rempli (par ex. `Synology-28`) — mais vous pouvez le modifier si vous le souhaitez.
- **URL et port** :  
  - Pour **WebDAV**, saisissez l'URL complète (par ex. `https://abc.synology.me:5006`)  
  - Pour **SMB / FTP / SFTP**, saisissez l'**hôte** (par ex. `192.168.1.100`) et le **port** approprié :
    - `445` pour SMB  
    - `21` pour FTP  
    - `22` pour SFTP
- **Nom d'utilisateur et mot de passe** : saisissez les identifiants du compte NAS que vous utilisez pour accéder aux dossiers partagés.

<div class="img-grid-3">
<img src="/support/images/en/tutorials/add-synology-webdav-remote.png" alt="add synology webdav remote" class="img-medium img-center" />
<img src="/support/images/en/tutorials/add-synology-smb-remote.png" alt="add synology smb remote" class="img-medium img-center" />
<img src="/support/images/en/tutorials/add-synology-sftp-remote.png" alt="add synology sftp remote" class="img-medium img-center" />
</div>

📌 **Besoin d'aide supplémentaire pour chaque méthode ?**  
Voici des guides de configuration détaillés :

- 👉 [Comment ajouter un distant SFTP](/howto/remote-storage-connection-settings/sftp)
- 👉 [Comment ajouter un distant WebDAV](/howto/remote-storage-connection-settings/webdav)



✅ Une fois ajouté, votre NAS distant apparaîtra dans la liste des distants.  
Vous pouvez alors l'ouvrir dans le panneau **Explorer** pour parcourir les fichiers ou lancer des transferts.

<img src="/support/images/en/tutorials/synology-nas-webdav-and-google-drive.png" alt="synology nas webdav and google drive" class="img-medium img-center" />

## **💽 Étape 2.5 : Monter le NAS comme un disque local (Explorer/Finder)**

Montez n'importe quel dossier du NAS comme un disque local sous Windows (par ex. `W:`) ou comme un emplacement dans le Finder macOS. Utilisez le bouton Monter dans la barre d'outils de l'Explorer.

### Comment monter

1. Dans **Browse/Explorer** de RcloneView, ouvrez votre NAS distant et accédez au dossier que vous souhaitez monter.
2. Cliquez sur l'icône **Mount (<img src="/support/icons/mount-icon.png" alt="mount icon" class="inline-icon" />)** dans la barre d'outils supérieure.
3. Configurez les options :
   - Windows : choisissez une lettre de lecteur (automatique ou manuelle)
   - macOS : confirmez le nom du dossier de montage (par défaut, quelque chose comme `~/homefolder/<Remote name>`),
4. Cliquez sur **Save and mount**. Le dossier apparaît comme un disque local :
   - Windows : sous « Ce PC », par ex. `synology-28-webdav … (W:)`
   - macOS : sous « Emplacements » dans le Finder

<img src="/support/images/en/tutorials/mount-synology-nas-as-local-drive.png" alt="mount synology nas as local drive" class="img-medium img-center" />
                
:::tip Démonter
Pour démonter, cliquez sur **Unmount** dans RcloneView ou éjectez le disque depuis le système d'exploitation.
:::

:::note Prérequis
Le montage via `rclone mount` peut nécessiter un pilote de système de fichiers du système d'exploitation. S'il n'est pas installé, suivez les liens ci-dessous :
- Windows : [WinFsp](https://winfsp.dev/)
- macOS : [macFUSE](https://osxfuse.github.io/)

Pour de meilleures performances, RcloneView active un **cache VFS** lors des opérations intensives. Le chargement initial des métadonnées peut prendre un moment selon les conditions du réseau.
:::

Pour tous les détails et méthodes supplémentaires, consultez :

- [Méthode 1 : Monter depuis l'Explorer distant](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-1-mount-from-remote-explorer)
- [Méthode 2 : Monter via le gestionnaire de montage](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-2-mount-via-mount-manager)
- [Afficher et gérer les disques montés](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#view-and-manage-mounted-drives)
- [Montage rapide depuis la barre système](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#view-and-manage-mounted-drives)

## **🚚 Étape 3 : Transférer ou synchroniser des fichiers**

  
Une fois votre NAS connecté comme distant, RcloneView vous offre **4 méthodes puissantes pour gérer vos fichiers** entre celui-ci et votre stockage cloud.

  
### **🖱️ Méthode 1 : Glisser-déposer**

1. Ouvrez l'onglet **Browse**.
    
2. Chargez votre distant **NAS** dans un panneau, et votre distant cloud (par ex. Google Drive) dans l'autre.
    
3. Glissez simplement les fichiers d'un panneau et déposez-les dans l'autre.
    
4. Le transfert démarre instantanément. Vous pouvez le suivre dans l'onglet **Transfer Logs**.
    
<img src="/support/images/en/tutorials/synology-nas-to-google-drag-and-drop.png" alt="synology nas to google drag and drop" class="img-medium img-center" />

  👉 En savoir plus : [Parcourir le stockage distant](/howto/rcloneview-basic/browse-and-manage-remote-storage)


### **🔍 Méthode 2 : Comparer le contenu des dossiers**

1. Ouvrez les dossiers NAS et cloud dans les panneaux Explorer.
    
2. Cliquez sur **Compare** dans l'onglet **Home** du menu supérieur.
    
3. RcloneView mettra en évidence :
    
    - Les fichiers présents d'un seul côté
        
    - Les fichiers présentant des conflits de taille ou de somme de contrôle
        
    - Les fichiers identiques
        
    
4. Utilisez **Copy →**, **← Copy**, ou **Delete** pour agir sur les fichiers.
    
<img src="/support/images/en/tutorials/compare-synology-nas-and-google-drive.png" alt="compare synology nas and google drive" class="img-medium img-center" />

  👉 En savoir plus : [Comparer des dossiers](/howto/rcloneview-basic/compare-folder-contents)


### **🔁 Méthode 3 : Synchronisation ou tâche ponctuelle**

1. Sélectionnez la source (NAS) et la destination (cloud).
    
2. Cliquez sur **Sync** pour ouvrir les options de synchronisation.
    
3. Choisissez la direction, le mode simulation (dry-run), les filtres, etc.
    
4. Lancez la synchronisation immédiatement ou cliquez sur **Save to Jobs**.
    

  <img src="/support/images/en/tutorials/sync-job-synology-to-google-drive.png" alt="sync job synology to google drive" class="img-medium img-center" />
  

👉 En savoir plus :

- [Synchroniser des stockages distants](/howto/rcloneview-basic/synchronize-remote-storages)
    
- [Créer des tâches de synchronisation](/howto/rcloneview-basic/create-sync-jobs)
    


### **⏰ Méthode 4 : Planifier une tâche récurrente**

1. Accédez à **Job Manager** → cliquez sur **Add Job**.
    
2. Sélectionnez vos dossiers NAS et cloud.
    
3. Définissez la planification (quotidienne, hebdomadaire, cron).
    
4. Enregistrez et activez la tâche.
    

  ✅ Les tâches s'exécuteront automatiquement en arrière-plan à l'heure planifiée.
 

👉 En savoir plus : [Planification et exécution des tâches](/howto/rcloneview-advanced/job-scheduling-and-execution)



## **🧾 Résumé**

  

Avec l'intégration NAS Synology de RcloneView, vous pouvez :

- Détecter et connecter votre NAS sans configuration technique
    
- Utiliser SMB, SFTP, FTP ou WebDAV facilement
    
- Transférer, synchroniser ou planifier des tâches de sauvegarde vers n'importe quel cloud
    
  
Pas de ligne de commande. Pas de scripts. Juste une gestion de fichiers cloud rapide, puissante et flexible.

  
## **🔗 Guides associés**

- [Comment ajouter un distant SFTP](/howto/remote-storage-connection-settings/sftp)
- [Comment ajouter un distant WebDAV](/howto/remote-storage-connection-settings/webdav)
- [Comparer le contenu des dossiers](/howto/rcloneview-basic/compare-folder-contents)
- [Parcourir et gérer le stockage distant](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Synchroniser des stockages distants](/howto/rcloneview-basic/synchronize-remote-storages)
- [Créer des tâches de synchronisation](/howto/rcloneview-basic/create-sync-jobs)
- [Exécuter et gérer les tâches](/howto/rcloneview-basic/execute-manage-job)
- [Planification et exécution des tâches](/howto/rcloneview-advanced/job-scheduling-and-execution)

🧠 **Commencez dès aujourd'hui à connecter votre NAS au cloud avec RcloneView.**

<CloudSupportGrid />
