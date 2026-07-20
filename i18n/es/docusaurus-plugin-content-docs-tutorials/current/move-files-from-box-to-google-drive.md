---
sidebar_position: 7
description: "Aprende a transferir y sincronizar archivos sin problemas entre Box y Google Drive usando la interfaz gráfica de RcloneView, con arrastrar y soltar, comparación de carpetas y programación de tareas."
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

# Guía de transferencia de archivos entre Box y Google Drive

Las plataformas de almacenamiento en la nube como **Box** y **Google Drive** ofrecen cada una ventajas únicas. Box está diseñada para la colaboración empresarial con funciones avanzadas de seguridad y flujo de trabajo, mientras que Google Drive se integra perfectamente con Google Workspace y ofrece un generoso almacenamiento gratuito. Sin embargo, gestionar archivos en ambas plataformas puede resultar engorroso, especialmente cuando necesitas migrar datos entre ellas.

Con **RcloneView**, puedes **transferir archivos en ambos sentidos** entre Box y Google Drive fácilmente usando una interfaz gráfica intuitiva, sin necesidad de línea de comandos.

  
<img src="/support/images/en/tutorials/transfer-files-between-box-and-google-drive.png" alt="transfer files between box and google drive" class="img-medium img-center" />

## **¿Por qué usar RcloneView para transferencias multi-nube?**

RcloneView simplifica las transferencias complejas en la nube ofreciendo:

- Integración segura con OAuth para Box y Google Drive  
- Transferencias de archivos entre nubes mediante arrastrar y soltar
- Herramientas de comparación de carpetas para previsualizar diferencias antes de la transferencia  
- Sincronización y programación de transferencias y copias de seguridad recurrentes
- Vista previa de simulación (dry-run), filtros y opciones avanzadas de transferencia  
- Monitoreo de transferencias en segundo plano con registros de progreso  

En lugar de descargar y volver a subir archivos manualmente, RcloneView aprovecha la transferencia directa basada en API, haciendo tu flujo de trabajo más rápido y confiable.

## 🔄 Transferir archivos: Box ↔ Google Drive

### Paso 1: Conecta tus remotos en la nube

1. Abre **RcloneView** y selecciona **`+ New Remote`** en el menú **Remote**.  
2. En la pestaña **`Provider`**, busca y selecciona **Box**.
3. Completa el inicio de sesión OAuth cuando se te solicite.
4. Repite el mismo proceso para **Google Drive**.


👉 Más información:  

- [Añadir remoto de Box](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)  
- [Añadir remoto de Google Drive](/howto/#step-2-adding-remote-storage-google-drive-example)

### Paso 2: Abre los remotos uno al lado del otro

1. Ve a la pestaña **Browse** en el panel del Explorador.
2. En un panel, haz clic en el icono más `+` y selecciona tu remoto de **Box**.
3. En el otro panel, haz clic en `+` y elige tu remoto de **Google Drive**.
4. Ambos remotos aparecerán uno al lado del otro, permitiendo arrastrar, copiar o sincronizar fácilmente entre ellos.

Ahora puedes realizar transferencias entre ellos sin problemas.

<img src="/support/images/en/tutorials/open-box-and-google-drive-remotes.png" alt="open box and google drive remotes" class="img-medium img-center" />

### 📌 4 métodos para transferir archivos

RcloneView ofrece varias formas flexibles de mover o sincronizar datos de Box a Google Drive. Elige la que mejor se adapte a tu flujo de trabajo:

#### 🖱️ Método 1: Arrastrar y soltar entre paneles del Explorador

1. Abre **RcloneView** y navega a la pestaña **Browse**.
2. Asegúrate de que los remotos de Box y Google Drive estén visibles uno al lado del otro.
3. **Arrastra archivos o carpetas** desde el panel de Box y **suéltalos** en el panel de Google Drive.
4. La transferencia comienza automáticamente. Supervisa el progreso en la pestaña de registros **`Transfer`**.

Esta interfaz intuitiva de arrastrar y soltar hace que las transferencias entre nubes sean sencillas, sin necesidad de comandos.

👉 Más detalles: [Explorar y gestionar almacenamiento remoto](/howto/rcloneview-basic/browse-and-manage-remote-storage)

#### 🔍 Método 2: Comparar el contenido de carpetas, copiar o eliminar

1. En ambos paneles del Explorador, navega y selecciona las carpetas que deseas comparar (izquierda: Box, derecha: Google Drive).
2. Haz clic en el botón **`Compare`** en el menú principal.
3. RcloneView resalta:
   - Archivos presentes solo en un lado
   - Archivos con el mismo nombre pero diferente tamaño
   - Archivos idénticos
4. Selecciona los archivos que deseas transferir o eliminar.
5. Para transferir archivos de izquierda a derecha, haz clic en **`Copy →`**. Para transferir de derecha a izquierda, usa **`← Copy`**. Para eliminar un archivo, haz clic en **`Delete`**.
6. El progreso y el resumen aparecen en la barra de estado.

La comparación visual ayuda a prevenir errores y garantiza que solo muevas lo que deseas.

👉 Más información: [Guía de comparación del contenido de carpetas](/howto/rcloneview-basic/compare-folder-contents)

  
#### 🔁 Método 3: Usar sincronización o tarea

1. En el panel del Explorador, selecciona la carpeta de **Box** y la carpeta de **Google Drive** que deseas sincronizar.
2. Haz clic en el botón **`Sync`** en el menú `home`.
3. Elige las opciones de sincronización (unidireccional o bidireccional), previsualiza las acciones y confirma.
4. RcloneView ejecuta la sincronización y muestra el progreso en la pestaña de registro **`transfer`**.

- Para transferencias repetidas o programadas:
  1. Haz clic en **`Save to Jobs`** en la ventana de sincronización, o abre **`Job Manager`** → **`Add Job`**.
  2. Configura el origen, el destino y las opciones.
  3. Guarda y ejecuta manualmente o establece una programación.

👉 Más información:
- [Sincronizar almacenamientos remotos](/howto/rcloneview-basic/synchronize-remote-storages)
- [Crear tareas de sincronización](/howto/rcloneview-basic/create-sync-jobs)
- [Ejecutar y gestionar tareas](/howto/rcloneview-basic/execute-manage-job)

  
#### ⏰ Método 4: Programar una tarea de sincronización automática

1. En el panel del Explorador, selecciona las carpetas de **Box** y **Google Drive** que deseas mantener sincronizadas.
2. Abre **`Job Manager`** desde el menú **`Home`** o **`Remote`**, luego haz clic en **`Add Job`**.
3. Confirma tu origen y destino.
4. Usa el editor de programación para establecer cuándo debe ejecutarse la tarea. Previsualiza tu programación antes de guardar.
5. Guarda y activa la tarea programada.

RcloneView ejecutará la sincronización en los horarios que especifiques. Consulta los detalles de ejecución y los registros en **`Job History`** y recibe notificaciones al finalizar.

👉 Más información: [Programación y ejecución de tareas](/howto/rcloneview-advanced/job-scheduling-and-execution)

  
## ✅ Resumen

Ya sea que migres datos una sola vez o mantengas una sincronización continua, RcloneView permite transferencias de archivos rápidas, seguras y confiables entre Box y Google Drive, eliminando la necesidad de descargas manuales o herramientas de línea de comandos.

  
¡Pruébalo y optimiza tus flujos de trabajo multi-nube!

  
## 🔗 Guías relacionadas

- [Cómo añadir un remoto de Box](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)  
- [Cómo añadir un remoto de Google Drive](/howto/#step-2-adding-remote-storage-google-drive-example)  
- [Explorar y gestionar almacenamiento remoto](/howto/rcloneview-basic/browse-and-manage-remote-storage)  
- [Comparar el contenido de carpetas](/howto/rcloneview-basic/compare-folder-contents)  
- [Sincronizar almacenamientos remotos](/howto/rcloneview-basic/synchronize-remote-storages)  
- [Crear tareas de sincronización](/howto/rcloneview-basic/create-sync-jobs)  
- [Ejecutar y gestionar tareas](/howto/rcloneview-basic/execute-manage-job)  
- [Programación y ejecución de tareas](/howto/rcloneview-advanced/job-scheduling-and-execution)

  

<CloudSupportGrid />
