---
sidebar_position: 5
description: Erfahren Sie, wie Sie einen SFTP-Remote in RcloneView hinzufügen
keywords:
  - rcloneview
  - SFTP
  - remote storage
  - SSH
  - Remote Connection
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

## So fügen Sie SFTP mit RcloneView hinzu

### Schritt 1: Fenster für neue Remote-Konfiguration öffnen

- Klicken Sie im oberen Menü unter **`Remote`** auf **`+ New Remote`**.
- Alternativ können Sie im Explorer-Bereich auf die Schaltfläche **`+`** klicken und **`New Remote`** auswählen, um die Remote-Konfiguration zu starten.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### Schritt 2: SFTP-Remote hinzufügen

#### Im Tab **`Provider`**:
1. Geben Sie **`sftp`** in die Suchleiste ein.  
2. Wählen Sie **`sftp (SSH/SFTP)`** aus der Liste aus.  

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-sftp-remote-provider.png" alt="add sftp remote provider" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-sftp-remote-options.png" alt="add sftp remote options" class="img-medium img-center" />
</div>
#### Im Tab **`Options`**:
3. Geben Sie den **Host** ein (z. B. `myserver.example.com` oder `192.168.1.100`)  
4. Geben Sie den **Benutzernamen** ein  
5. Geben Sie die **Portnummer** ein (Standard ist `22`)  
6. Geben Sie das **Passwort** ein  


#### Im Tab **`Name`**:
7. Geben Sie einen **Remote-Namen** ein (z. B. `MySFTPServer`)  

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-sftp-remote-name.png" alt="add sftp remote name" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-sftp-remote-save.png" alt="add sftp remote save" class="img-medium img-center" />
</div>

#### Im Tab **`Save`**:
8. Klicken Sie auf **`Save`**, um die Einrichtung abzuschließen.

### Schritt 3: Den hinzugefügten SFTP-Remote in RcloneView überprüfen

1. Gehen Sie zu **`Remote > Remote Manager`**
2. Überprüfen Sie, ob Ihr neu hinzugefügter **SFTP-Remote** in der Liste angezeigt wird.

✅ **Fertig!** Ihr SFTP-Remote ist nun erfolgreich konfiguriert und einsatzbereit in RcloneView.

