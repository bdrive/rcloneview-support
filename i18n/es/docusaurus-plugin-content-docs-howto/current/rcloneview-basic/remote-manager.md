---
sidebar_position: 2
description: Aprenda a agregar, editar y eliminar remotos en la nube y locales con RcloneView, incluyendo Google Drive, Dropbox, WebDAV, S3 y más.
keywords:
  - rcloneview
  - remote storage management
  - add remote
  - remote manager
  - cloud sync
  - cloud storage
  - open remote
  - delete remote
  - google drive
  - Dropbox
  - s3 compatible
  - aws s3
  - webdav
  - SFTP
  - Onedrive
  - icloud
  - mega
tags:
  - RcloneView
  - Remote-Storage
  - Remote-manager
  - Remote-storage-managent
  - remote-connection
  - remote-control
  - cloud-storage
date: 2025-06-20
author: Jay
---
# Agregar y administrar almacenamientos remotos en RcloneView

RcloneView le permite conectar y administrar servicios de almacenamiento tanto en la nube como locales.  
Esta guía explica cómo **agregar**, **editar** y **eliminar** remotos usando RcloneView.

## Agregar un nuevo remoto
  
Puede agregar un nuevo remoto de almacenamiento abriendo primero el diálogo **New Remote** y luego completando la configuración.

### Abrir el diálogo **New Remote**

Puede abrir el diálogo de configuración **`New Remote`** usando uno de los siguientes métodos:

<div class="img-grid-3">
<img src="/support/images/en/howto/rcloneview-basic/create-remote-top-remote-menu.png" alt="create remote top remote menu" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-plus-button.png" alt="create remote by plus button" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png" alt="create remote by remote manager" class="img-medium img-center" />
</div>

#### Método 1: Usar el menú superior de Remote

Haga clic en **`+ New Remote`** en la pestaña superior Remote.

#### Método 2: Usar el botón `+` en el panel del explorador

Haga clic en el icono **`+`** en el panel del explorador de archivos (izquierdo o derecho) y luego seleccione **New Remote**.

#### Método 3: Usar el Remote Manager

Haga clic en el botón **`Remote Manager`** en la pestaña **`Remote`** y luego haga clic en el botón **`+`** en una tarjeta de remoto vacía.


### Configurar el nuevo remoto

Una vez que se abre el diálogo **New Remote**, seleccione el tipo de remoto (por ejemplo, Google Drive, Dropbox, S3) y complete la configuración requerida.  

Los campos varían según el proveedor seleccionado.

Para obtener instrucciones detalladas específicas de cada proveedor, consulte [**Remote Storage Connection Settings**](/howto/category/remote-storage-connection-settings).  

## Administrar remotos existentes en RcloneView

Una vez que haya agregado remotos a RcloneView, puede administrarlos de varias formas, incluyendo abrirlos, editarlos o eliminarlos. A continuación se explica cómo realizar cada acción.

### Abrir un remoto en el panel del explorador

Puede abrir la vista de carpetas de un remoto para explorar o transferir archivos entre el equipo local y la nube.

<div class="img-grid-3">
<img src="/support/images/en/howto/rcloneview-basic/open-remote-by-remote-card.png" alt="open remote by remote card" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/open-remote-by-plus-button.png" alt="open remote by plus button" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/open-remote-by-remote-manager.png" alt="open remote by remote manager" class="img-medium img-center" />
</div>

#### Método 1: Hacer clic en el botón `Open` de la tarjeta de remoto

Haga clic en el botón **`Open`** en cualquier tarjeta de remoto del panel derecho.

#### Método 2: Abrir un remoto usando el botón `+` del panel del explorador

Al hacer clic en el botón **`+`** ubicado en el panel del **Explorer** izquierdo o derecho, se mostrará una lista de todos los remotos configurados actualmente.

1. Haga clic en el icono `+` en el panel del explorador donde desea abrir el remoto.
2. Aparecerá una lista desplegable que muestra todos los remotos disponibles.
3. Seleccione el remoto deseado (por ejemplo, `MyWebDAV`) de la lista.
4. El remoto seleccionado se abrirá en el panel donde hizo clic. Si ya hay otro remoto abierto allí, se agregará una **nueva pestaña** para el remoto seleccionado.

:::note
 Los remotos marcados como **favoritos (alias)** se muestran en la **parte superior de la lista** para un acceso más rápido.
:::
#### Método 3: Usar el botón `Open` del Remote Manager

1. Haga clic en el botón **Remote Manager** en la barra de herramientas.
2. En el diálogo de Remote Manager, busque el remoto deseado.
3. Haga clic en **`Open`** para abrirlo en un panel del explorador de archivos.

:::tip Acceso rápido desde la bandeja del sistema
Puede abrir rápidamente un remoto haciendo clic en el icono de RcloneView en la bandeja del sistema y seleccionando un remoto de la lista.  
<img src="/support/images/en/howto/rcloneview-basic/open-remote-via-system-tray.png" alt="open remote via system tray" class="img-small img-left" />
:::

### Editar la configuración de un remoto


Puede modificar la configuración de un remoto existente usando uno de los siguientes métodos:

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/edit-remote-from-explorer-panel.png" alt="edit remote from explorer panel" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/edit-remote-from-remote-manager.png" alt="edit remote from remote manager" class="img-medium img-center" />
</div>


#### Método 1: Editar desde el panel del explorador  

Si actualmente está explorando un remoto en el **Explorer Pane**, haga clic en el icono de engranaje (⚙️) ubicado en la esquina superior derecha del panel del remoto activo.

Esto abre el diálogo **Edit Remote**, donde puede actualizar los valores de **Provider** y **Options** del remoto seleccionado.  

 ⚠️ **Nota:** No puede cambiar el nombre del remoto aquí.


#### Método 2: Editar desde el Remote Manager  

1. Haga clic en el botón **Remote Manager** en la barra de herramientas principal, dentro del menú **Remote**.  
2. En la ventana **Remote Manager**, ubique el remoto que desea editar.  
3. Haga clic en el botón **Edit** de la tarjeta del remoto para abrir el diálogo **Edit Remote**.

Este método también le permite cambiar el **Provider** y las **Options**, pero el **nombre del remoto** permanece fijo.


### Eliminar un remoto


Si ya no necesita un remoto configurado, puede eliminarlo de forma segura usando el **Remote Manager**.

<img src="/support/images/en/howto/rcloneview-basic/delete-remote.png" alt="delete remote" class="img-medium img-center" />

1. Desde la pestaña **Remote** en el menú superior, haga clic en el botón **Remote Manager** en la barra de herramientas.
2. En la ventana **Remote Manager**, ubique el remoto que desea eliminar.
3. Haga clic en el botón **`Delete`** en la tarjeta del remoto correspondiente.

Esta acción hará lo siguiente:
- Eliminará permanentemente el remoto de su configuración.
- Lo cerrará automáticamente del panel del explorador si está actualmente abierto.
