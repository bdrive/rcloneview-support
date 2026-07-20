---
sidebar_position: 5
description: Découvrez comment ajouter un distant SFTP dans RcloneView
keywords:
  - rcloneview
  - SFTP
  - stockage distant
  - SSH
  - Connexion distante
  - rclone
tags:
  - sftp
  - Remote-Storage
  - ssh
  - remote-connection
date: 2025-06-23
author: Jay
---
# SFTP

## Comment ajouter SFTP avec RcloneView

### Étape 1 : Ouvrir la fenêtre de configuration d'un nouveau distant

- Cliquez sur **`+ New Remote`** dans le menu supérieur sous **`Remote`**.
- Vous pouvez également cliquer sur le bouton **`+`** dans le panneau Explorer et sélectionner **`New Remote`** pour démarrer la configuration du distant.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### Étape 2 : Ajouter un distant SFTP

#### Dans l'onglet **`Provider`** :
1. Tapez **`sftp`** dans la barre de recherche.  
2. Sélectionnez **`sftp (SSH/SFTP)`** dans la liste.  

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-sftp-remote-provider.png" alt="add sftp remote provider" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-sftp-remote-options.png" alt="add sftp remote options" class="img-medium img-center" />
</div>
#### Dans l'onglet **`Options`** :
3. Saisissez l'**hôte** (par exemple, `myserver.example.com` ou `192.168.1.100`)  
4. Saisissez le **nom d'utilisateur**  
5. Saisissez le **numéro de port** (par défaut `22`)  
6. Saisissez le **mot de passe**  


#### Dans l'onglet **`Name`** :
7. Saisissez un **nom de distant** (par exemple, `MySFTPServer`)  

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-sftp-remote-name.png" alt="add sftp remote name" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-sftp-remote-save.png" alt="add sftp remote save" class="img-medium img-center" />
</div>

#### Dans l'onglet **`Save`** :
8. Cliquez sur **`Save`** pour terminer la configuration.

### Étape 3 : Vérifier le distant SFTP ajouté dans RcloneView

1. Allez dans **`Remote > Remote Manager`**
2. Confirmez que votre nouveau **distant SFTP** apparaît dans la liste.

✅ **Terminé !** Votre distant SFTP est maintenant configuré avec succès et prêt à être utilisé dans RcloneView.

