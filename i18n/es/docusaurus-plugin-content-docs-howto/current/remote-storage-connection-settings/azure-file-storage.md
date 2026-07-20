---
sidebar_position: 7
description: Aprenda cómo agregar Azure File Storage en RcloneView.
keywords:
  - rcloneview
  - azure file storage
  - azure files
  - smb
  - almacenamiento en la nube
  - remote storage
  - Remote Connection
  - rclone
tags:
  - azure
  - azure-files
  - Remote-Storage
  - remote-connection
  - cloud-storage
date: 2025-12-03
author: tayson
---

# Azure File Storage

## Cómo agregar Azure File Storage usando RcloneView

Azure File Storage usa SMB y necesita tres elementos para conectarse:

- **Nombre de la cuenta de Azure Storage**
- **Clave compartida de la cuenta de almacenamiento**
- **Nombre del recurso compartido de Azure File**

Puede copiar los tres desde el **Portal de Azure** (Cuenta de almacenamiento > **Claves de acceso** para la clave compartida, y **Recursos compartidos de archivos** para el nombre del recurso compartido).

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-share-account-key.png" alt="get azure storage account name and account shared key" class="img-large img-center" />

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-share-name.png" alt="get azure storage share name" class="img-large img-center" />

### Paso 1: Abrir la ventana de nuevo remoto

- Haga clic en **`+ New Remote`** en el menú superior, dentro de **`Remote`**.
- O haga clic en el botón **`+`** en el panel del Explorador y seleccione **`New Remote`**.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-large img-center" />
</div>

### Paso 2: Seleccionar Azure File Storage como proveedor de almacenamiento

1. En la barra **Search Provider**, escriba `Azure File Storage`.
2. Haga clic en la opción **Azure File Storage** de la lista.

A continuación, se le llevará a la pantalla de configuración de Azure File Storage.

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-new-remote.png" alt="select azure file storage to add remote" class="img-large img-center" />

### Paso 3: Configurar su remoto de Azure File Storage

Complete la información requerida en el formulario:

- **Remote name**: Un nombre descriptivo para su remoto (por ejemplo, `MyAzureFileStorage`)
- **account**: **Nombre de la cuenta** de Azure Storage. Configúrelo con el nombre de la cuenta de Azure Storage en uso.
- **key**: **Clave compartida de la cuenta de almacenamiento**
- **share_name**: **Nombre del recurso compartido de Azure Files**. Este campo es obligatorio y es el nombre del recurso compartido al que se accederá.

Después de ingresar todos los valores, haga clic en **`Add Remote`** para completar la configuración.

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-new-remote-settings.png" alt="remote configure azure file storage" class="img-large img-center" />

### Paso 4: Confirmar el remoto agregado

Una vez agregado, su nuevo remoto de Azure File Storage (por ejemplo, `MyAzure`) aparecerá en la lista del **Remote Manager**.

Ahora puede:

- Hacer clic en **`Open`** para explorar sus archivos.
- Usarlo en tareas de sincronización, copia o montaje.
- Administrar o eliminar el remoto en cualquier momento.

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-remote-manager.png" alt="remote manager azure file storage view" class="img-large img-center" />

✅ **¡Listo!** Ha conectado con éxito su almacenamiento **Azure File Storage** a **RcloneView**.

**¡Listo!** Ahora puede explorar y transferir archivos en su Azure File Share directamente desde RcloneView.
