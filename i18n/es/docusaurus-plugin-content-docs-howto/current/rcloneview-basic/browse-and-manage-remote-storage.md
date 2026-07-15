---
sidebar_position: 3
description: Aprenda a explorar, copiar y administrar archivos entre almacenamiento local y en la nube usando la interfaz de arrastrar y soltar y el menú contextual de RcloneView.
keywords:
  - rcloneview
  - gestión de archivos
  - copiar archivos
  - mover archivos
  - arrastrar y soltar
  - transferencia de archivos en la nube
  - almacenamiento en la nube
  - explorador de archivos
  - transferencia de nube a nube
  - explorador de remotos
  - subida
  - descarga
  - purgar
  - eliminar
tags:
  - howto
  - file-management
  - cloud-storage
  - drag-and-drop
  - cloud-file-transfer
  - file-explorer
date: 2025-05-27
author: Jay
---
# Gestión de Archivos con RcloneView  

RcloneView le permite explorar, transferir y organizar fácilmente archivos entre su disco local y múltiples servicios de almacenamiento en la nube usando una interfaz familiar, similar al Explorador.   

Esta guía le muestra:   

- Cómo explorar el almacenamiento remoto
- Cómo copiar archivos usando arrastrar y soltar
- Cómo administrar archivos con el menú contextual
 
## Explorar el Almacenamiento Remoto

Puede abrir cualquier remoto en la nube conectado y verlo como una carpeta local.

### Cómo Explorar un Remoto:

1. Haga clic en la pestaña **`+`** en el **panel del Explorador**.
2. Seleccione el almacenamiento remoto que desea abrir.
3. El remoto seleccionado se abrirá en una nueva pestaña, listo para operaciones de archivos.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/file-explorer-open-remote.png" alt="file explorer open remote" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/file-explorer-remote-open-complete.png" alt="file explorer remote open complete" class="img-medium img-center" />
</div>

:::tip Diseño de Vista
Vaya a **`Settings > Layout`** para cambiar entre las vistas vertical y horizontal 
<img src="/support/images/en/howto/rcloneview-basic/explorer-view-layout.png" alt="explorer view layout" class="img-small img-left" />
:::

## Copiar Archivos usando Arrastrar y Soltar

Puede transferir archivos entre el almacenamiento local y el de la nube usando un simple arrastrar y soltar.
#### Copiar Entre Dos Remotos

Arrastre archivos de una pestaña de remoto a otra en RcloneView para copiarlos entre almacenamientos en la nube.
<video src="/support/videos/en/howto/rcloneview-basic/rclonview-explorer-drag-and-drop.mp4" class="video-medium video-center" controls muted loop playsinline>
  rclonview explorer drag and drop
</video>

**👉  Para Selección Múltiple y Acciones en Lote**
Puede seleccionar varios archivos a la vez para realizar operaciones por lotes.
- Use **`Ctrl + Click`** para seleccionar varios archivos individuales.
- Use **`Shift + Click`** para seleccionar un rango de archivos.

**👉  Comportamiento de Arrastrar y Soltar **
- **Mismo remoto** = Operación de mover  
- **Remotos diferentes** = Operación de copiar


:::tip Sugerencia
-  Si no desea ver la ventana emergente de confirmación durante la copia, desmarque la casilla **Confirm drag and drop**.
- Para volver a habilitar la ventana emergente más tarde, vaya a **Settings > General settings > Confirm drag and drop** y márquela de nuevo.
:::

#### Copiar desde el Explorador de Windows a un Remoto en RcloneView
- También puede arrastrar archivos directamente desde el **Explorador de archivos de Windows** a una pestaña de RcloneView para subirlos al almacenamiento en la nube.
<video src="/support/videos/en/howto/rcloneview-basic/windows-explorer-drag-and-drop.mp4" class="video-medium video-center" controls muted loop playsinline>
  windows explorer drag and drop
</video>
### Administrar archivos con el menú contextual

RcloneView admite operaciones de archivos completas a través de un práctico menú contextual.

### Acciones Disponibles:

- <img src="/support/icons/download-icon.png" alt="download icon" class="inline-icon" />**Descargar** – Guardar archivo(s) en su disco local  
- <img src="/support/icons/upload-icon.png" alt="upload icon" class="inline-icon" />**Subir** – Enviar archivo(s) locales a un remoto en la nube  
- <img src="/support/icons/copy icon.png" alt="copy icon" class="inline-icon" />**Copiar / <img src="/support/icons/paste-icon.png" alt="paste icon" class="inline-icon" />Pegar** – Copiar archivos entre carpetas o remotos  
- <img src="/support/icons/cut-icon.png" alt="cut icon" class="inline-icon" />**Cortar / <img src="/support/icons/paste-icon.png" alt="paste icon" class="inline-icon" />Pegar** – Mover archivos a otra ubicación  
- <img src="/support/icons/delete-icon.png" alt="delete icon" class="inline-icon" />**Eliminar** – Eliminar archivos o carpetas  
- <img src="/support/icons/rename-icon.png" alt="rename icon" class="inline-icon" />**Renombrar** – Renombrar archivos o carpetas  
- <img src="/support/icons/new-folder-icon.png" alt="new folder icon" class="inline-icon" />**Nueva Carpeta** – Crear una nueva carpeta  
- <img src="/support/icons/refresh-icon.png" alt="refresh icon" class="inline-icon" />**Recargar** – Actualizar el contenido de la carpeta




