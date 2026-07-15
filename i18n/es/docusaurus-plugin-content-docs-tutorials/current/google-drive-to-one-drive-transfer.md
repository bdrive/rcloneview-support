---
sidebar_position: 2
description: "Aprenda a copiar, sincronizar y programar transferencias de archivos entre Google Drive y OneDrive usando la interfaz intuitiva de arrastrar y soltar de RcloneView y su programador de trabajos."
keywords:
  - rcloneview
  - Google Drive a OneDrive
  - transferencia de nube a nube
  - sincronización de archivos
  - Migración a la nube
  - almacenamiento en la nube
  - sincronización en la nube
  - Onedrive
  - google drive
  - programación de trabajos
  - rclone
  - sync
  - trabajos programados
  - arrastrar y soltar
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

# Guía de Transferencia de Google Drive a OneDrive
  

Los servicios de almacenamiento en la nube se han vuelto esenciales para gestionar documentos, contenido multimedia y copias de seguridad. Dos de los servicios más utilizados son **Google Drive** y **Microsoft OneDrive**. Ambos ofrecen amplio almacenamiento, integración con herramientas de productividad (Google Workspace y Microsoft 365) y amplio soporte de plataformas.

Aunque ambas plataformas cuentan con sus propios ecosistemas en la nube, **RcloneView** ofrece una interfaz centralizada para gestionar, transferir y sincronizar archivos entre ellas, **sin necesidad de scripts complejos ni operaciones de línea de comandos**.

En esta guía, le mostraremos cómo **transferir archivos de Google Drive a OneDrive** usando **RcloneView**, una herramienta con interfaz gráfica construida sobre Rclone que hace que la gestión de archivos multi-nube sea simple y potente.

<img src="/support/images/en/tutorials/google-drive-to-ondrive-transfer.png" alt="google drive to ondrive transfer" class="img-medium img-center" />

## **¿Por qué usar RcloneView para transferencias de nube a nube?**

RcloneView es una potente interfaz gráfica construida sobre el motor de Rclone, diseñada para simplificar la gestión del almacenamiento en la nube.

- Conecte fácilmente múltiples proveedores de nube
- Interfaz intuitiva para transferir archivos mediante arrastrar y soltar
- Compare el contenido de las carpetas antes de transferir
- Interfaz gráfica sencilla con funciones avanzadas como simulación (dry-run), filtros y programación de trabajos
- Programe transferencias y copias de seguridad recurrentes
- Inicio de sesión seguro mediante OAuth para Google Drive y OneDrive

A diferencia de los métodos tradicionales de descarga/carga manual, RcloneView automatiza el proceso mediante operaciones directas basadas en API, permitiendo transferencias fluidas y desatendidas entre almacenamientos en la nube.

## 📙 Transferir archivos de Google Drive a OneDrive


### Agregar remotos de Google Drive y OneDrive en RcloneView

1. Abra **RcloneView** y haga clic en **`+ New Remote`** en el menú **`Remote`**.  
2. En la pestaña **`Provider`**, busque y seleccione **Google Drive**.  
3. Siga el asistente y complete el inicio de sesión mediante OAuth.  
4. Repita el mismo proceso para **OneDrive**.  

 🔍 Para obtener instrucciones detalladas de configuración, consulte:
 - [Cómo agregar un remoto de Google Drive](/howto/#step-2-adding-remote-storage-google-drive-example)
 - [Cómo agregar un remoto de OneDrive](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)

### Abrir ambos remotos en el panel del explorador

1. Abra **RcloneView** y vaya a la **pestaña Browse** en el panel del explorador.  
2. En uno de los paneles, haga clic en el icono más `+` de su encabezado y seleccione su remoto de **Google Drive** de la lista.  
3. En el otro panel, haga clic en el icono `+` y elija su remoto de **OneDrive** de la lista.  
4. Ambos remotos aparecerán ahora uno junto al otro, permitiéndole copiar, comparar, arrastrar o sincronizar archivos y carpetas entre ellos fácilmente.  

<img src="/support/images/en/tutorials/open-google-drive-and-onedrive.png" alt="open google drive and onedrive" class="img-medium img-center" />

### 📌 4 métodos para transferir archivos

RcloneView ofrece varios métodos potentes para mover o sincronizar datos entre Google Drive y OneDrive. Elija el que mejor se adapte a su flujo de trabajo:

#### 🖱️ **Método 1: Arrastrar y soltar entre paneles del explorador**

  
	1. Abra **RcloneView** y navegue hasta la pestaña **Browse** (que se muestra por defecto al iniciar).  
	2. Asegúrese de que ambos remotos en la nube (Google Drive y OneDrive) sean visibles uno junto al otro en el explorador de doble panel.  
	3. Simplemente **arrastre archivos o carpetas** desde el panel de Google Drive y **suéltelos** en el panel de OneDrive.  
	4. La transferencia comenzará automáticamente mediante el motor en segundo plano de Rclone. Puede monitorear el progreso en tiempo real en la pestaña de registros de **`Transfer`**.  

  
Esta interfaz intuitiva de arrastrar y soltar simplifica mover o copiar archivos, sin necesidad de comandos.

👉 Más información: [Explorar y gestionar almacenamiento remoto](/howto/rcloneview-basic/browse-and-manage-remote-storage)

#### 🔍 **Método 2: Comparar contenido de carpetas, copiar o eliminar**

  
	1. En ambos paneles del explorador, navegue y seleccione las carpetas que desea comparar (izquierda: Google Drive, derecha: OneDrive).  
	2. Haga clic en el botón **`Compare`** en la pestaña del menú principal para iniciar la comparación de carpetas.  
	3. RcloneView escaneará y resaltará:  
		- Archivos presentes solo en un lado  
		- Archivos con el mismo nombre pero diferente tamaño  
		- Archivos idénticos
	4. Seleccione los archivos para elegir sobre cuáles desea actuar.  
	5. Para transferir archivos de izquierda a derecha, haga clic en el botón **`Copy →`**.  
		   Para transferir de derecha a izquierda, use el botón **`← Copy`**.  
		   Para eliminar un archivo de un remoto, haga clic en el botón **`Delete`** en su panel.  
	6. El progreso y el resumen de actualizaciones aparecen en la barra de estado.  


Esta comparación visual minimiza errores al permitirle revisar los archivos **antes** de moverlos o eliminarlos.

👉 Más información en la [guía de comparación de contenido de carpetas](/howto/rcloneview-basic/compare-folder-contents)


#### 🔁 **Método 3: Usar Sync o Job**

1. En el panel del explorador, navegue y seleccione la carpeta de **Google Drive** y la carpeta de **OneDrive** que desea mantener sincronizadas.  
2. Haga clic en el botón **`Sync`** en el menú `home`.  
3. Elija las opciones de sincronización (unidireccional o viceversa), previsualice las acciones y confirme.   
4. RcloneView ejecutará la sincronización y mostrará un indicador de progreso en la pestaña de registro **`transfer`**.   

- Alternativamente, para transferencias repetidas o programadas:  

  1. Haga clic en **`Save to Jobs`** en la ventana modal de Sync, o abra **`Job Manager`** → haga clic en **`Add Job`**.   
  2. Configure el origen y el destino y establezca las opciones.   
  3. Guarde el trabajo y ejecútelo manualmente o programe su ejecución.  

 👉 Más información:  

- [Sincronizar almacenamientos remotos](/howto/rcloneview-basic/synchronize-remote-storages)  
- [Crear trabajos de sincronización](/howto/rcloneview-basic/create-sync-jobs)  
- [Ejecutar y gestionar trabajos](/howto/rcloneview-basic/execute-manage-job)

#### ⏰ Método 4: Programar un trabajo de sincronización automática 

1. En el panel del explorador, navegue y seleccione la carpeta de **Google Drive** y la carpeta de **OneDrive** que desea mantener sincronizadas.  
2. Abra **`Job Manager`** desde el menú **`Home`** o **`Remote`**, luego haga clic en **`Add Job`**.  
3. Verifique el origen y destino seleccionados; ajuste si es necesario.  
4. Use el editor de programación para definir cuándo debe ejecutarse el trabajo. RcloneView incluye una herramienta de simulación integrada para previsualizar el patrón de su programación antes de guardarla.  
5. Guarde y active el trabajo programado.   

Una vez guardado, RcloneView ejecutará automáticamente la sincronización en los momentos que haya especificado.  

Los detalles de ejecución y los registros están disponibles en **`Job History`**, y recibirá una notificación cuando el trabajo se complete correctamente.

👉 Más información: [Programación y ejecución de trabajos](/howto/rcloneview-advanced/job-scheduling-and-execution)


## **Reflexiones finales**

Transferir archivos entre servicios en la nube como Google Drive y OneDrive no tiene por qué ser complicado. Con **RcloneView**, se trata de solo unos clics, sin necesidad de usar la línea de comandos.

Este método es rápido, seguro y confiable, ya sea que esté moviendo gigabytes de archivos personales o sincronizando documentos de la empresa entre cuentas.

 🎯 Pruebe RcloneView hoy mismo y haga que su gestión multi-nube sea sencilla.

---

## 🔗 Guías relacionadas

- [Cómo agregar un remoto de Google Drive](/howto/#step-2-adding-remote-storage-google-drive-example)
- [Cómo agregar un remoto de OneDrive](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)
- [Explorar y gestionar almacenamiento remoto](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Guía de comparación de contenido de carpetas](/howto/rcloneview-basic/compare-folder-contents)
- [Sincronizar almacenamientos remotos](/howto/rcloneview-basic/synchronize-remote-storages)  
- [Crear trabajos de sincronización](/howto/rcloneview-basic/create-sync-jobs)  
- [Ejecutar y gestionar trabajos](/howto/rcloneview-basic/execute-manage-job)
- [Programación y ejecución de trabajos](/howto/rcloneview-advanced/job-scheduling-and-execution)


<CloudSupportGrid />
