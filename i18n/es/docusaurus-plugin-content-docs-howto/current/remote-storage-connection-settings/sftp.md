---
sidebar_position: 5
description: Aprenda a agregar un remoto SFTP en RcloneView
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

## Cómo agregar SFTP con RcloneView

### Paso 1: Abrir la ventana de nueva configuración de remoto

- Haga clic en **`+ New Remote`** en el menú superior, bajo **`Remote`**.
- Alternativamente, haga clic en el botón **`+`** en el panel del Explorador y seleccione **`New Remote`** para iniciar la configuración del remoto.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### Paso 2: Agregar un remoto SFTP

#### En la pestaña **`Provider`**:
1. Escriba **`sftp`** en la barra de búsqueda.  
2. Seleccione **`sftp (SSH/SFTP)`** de la lista.  

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-sftp-remote-provider.png" alt="add sftp remote provider" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-sftp-remote-options.png" alt="add sftp remote options" class="img-medium img-center" />
</div>
#### En la pestaña **`Options`**:
3. Ingrese el **host** (por ejemplo, `myserver.example.com` o `192.168.1.100`)  
4. Ingrese el **nombre de usuario**  
5. Ingrese el **número de puerto** (el predeterminado es `22`)  
6. Ingrese la **contraseña**  


#### En la pestaña **`Name`**:
7. Ingrese un **nombre de remoto** (por ejemplo, `MySFTPServer`)  

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-sftp-remote-name.png" alt="add sftp remote name" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-sftp-remote-save.png" alt="add sftp remote save" class="img-medium img-center" />
</div>

#### En la pestaña **`Save`**:
8. Haga clic en **`Save`** para finalizar la configuración.

### Paso 3: Verificar el remoto SFTP agregado en RcloneView

1. Vaya a **`Remote > Remote Manager`**
2. Confirme que su nuevo **remoto SFTP** aparece en la lista.

✅ **¡Listo!** Su remoto SFTP ahora está configurado correctamente y listo para usarse en RcloneView.

