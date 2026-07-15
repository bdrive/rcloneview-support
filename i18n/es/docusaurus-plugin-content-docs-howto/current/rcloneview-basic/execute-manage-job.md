---
sidebar_position: 7
description: Aprenda a ejecutar, supervisar y gestionar trabajos de sincronización con el Administrador de trabajos de RcloneView, incluyendo la simulación (dry run), el historial de trabajos y las notificaciones.
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - job manager
  - run sync job
  - dry run
  - job execution
  - Job Monitor
  - job history
  - scheduled jobs
  - rclone automation
tags:
  - RcloneView
  - Cloud
  - Sync
  - Job-Management
  - cloud-storage
  - job-history
  - job-monitoring
  - Remote-storage-managent
date: 2025-06-16
author: Jay
---
# Ejecutar y gestionar un trabajo


Haga clic en la barra de herramientas `Job Manager` desde el menú principal para abrir el Administrador de trabajos.  

Seleccione el trabajo que desea ejecutar y luego haga clic en el botón **`Run`** para ejecutarlo.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="job run click" class="img-medium img-center" />


<details>
<summary>Descripción de los campos </summary>

- `Job Name` : Nombre del trabajo. - > El icono representa visualmente la dirección de la sincronización desde el origen hasta el destino. Cuando el trabajo tiene varios destinos, se muestra un icono independiente para cada remoto de destino.  
- `Source` : La carpeta del almacenamiento en la nube que actúa como origen.  
- `Destination` : La carpeta del almacenamiento en la nube que actúa como destino.   
- `Upcoming Schedule` : Muestra la próxima hora programada en la que se ejecutará este trabajo. Si no hay una programación configurada, se muestra como **Unscheduled**.    
  ⚠️ _Esta función solo está disponible con una licencia PLUS._ Consulte:: [Cómo configurar la programación de trabajos](/howto/rcloneview-advanced/job-scheduling-and-execution). 
- `Last execution` : La hora más reciente en la que este trabajo se ejecutó automáticamente mediante la programación.   
- `Created At` : La fecha y hora en que se creó el trabajo.  
- `History` : Abre el historial de ejecución de este trabajo. Al hacer clic, se abrirá la ventana completa del historial.  

</details>

<details>
<summary>Barras de herramientas para gestionar trabajos</summary>

Barras de herramientas para gestionar trabajos

Después de seleccionar un trabajo, puede gestionarlo mediante las siguientes opciones de la barra de herramientas:

- **`Add Job`** : Crea y agrega un nuevo trabajo. [Ver: Cómo crear un trabajo](/howto/rcloneview-basic/create-sync-jobs)  
- **`Edit Job`** : Edita el trabajo seleccionado.
- **`Duplicate`** : Crea una copia del trabajo seleccionado. 
  El trabajo duplicado se nombra automáticamente con un sufijo como (1), (2), …, (n).
  Luego puede usar Edit Job para personalizarlo rápidamente como un nuevo trabajo basado en el original.  
- **`Delete`** : Elimina el trabajo seleccionado.

</details>


:::tip 💡 Exportar e importar trabajos
Haga clic en el **icono de configuración** <img src="/support/icons/setting-icon.png" alt="setting icon" class="inline-icon" /> en la parte superior derecha del **Job Manager** para exportar sus trabajos actuales o importar otros guardados previamente. Los trabajos se exportan y almacenan en un archivo llamado `rclone_jobs_~.json`    

:::
### Simular: ejecutar una simulación (dry run) (opcional)

Puede ejecutar una **simulación (Dry run)** para simular la operación de sincronización sin realizar cambios reales.

Haga clic en el botón **`Dry run`** para simular la sincronización sin realizar cambios.

- Esta vista previa muestra qué archivos se copiarán al **Destination** y cuáles se eliminarán.
- Haga clic en **`See details`** para ver una lista completa de las operaciones que se realizarían (por ejemplo, copiar, crear, eliminar) en el destino.
- Para trabajos con varios destinos, los resultados se agrupan por cada destino, con un **`See details`** independiente para cada uno.

<img src="/support/images/en/howto/rcloneview-basic/job-dry-run-result.png" alt="job dry run result" class="img-medium img-center" />

## Supervisar los resultados de la ejecución del trabajo

Puede consultar el progreso y los resultados de las operaciones de sincronización en tiempo real.

### Estado de la transferencia (en curso)

- Durante la sincronización, abra la pestaña **`Transfer`** para ver el progreso en tiempo real de cada archivo.
- Haga clic en el icono **+** para expandir y supervisar las transferencias de archivos individuales.
<img src="/support/images/en/howto/rcloneview-basic/sync-transfer-window.png" alt="sync transfer window" class="img-medium img-center" />

### Trabajos completados (después de la ejecución del trabajo)

- Una vez finalizada la sincronización, vaya a la pestaña **`Completed`** para ver los resultados.
- Haga clic en el icono **+** para ver los detalles a nivel de archivo de cada trabajo completado.
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-window.png" alt="sync completed window" class="img-medium img-center" />
:::tip Abra rápidamente los remotos sincronizados
En la pestaña **`Completed`**, puede hacer doble clic en cualquier trabajo completado para abrir tanto la carpeta de origen como la de destino en el panel del Explorador.  
Esto facilita revisar de inmediato las carpetas sincronizadas.
:::

### Alarma de notificación de finalización (Windows)

Una vez finalizada la sincronización, aparecerá una notificación emergente en la bandeja del sistema de Windows con un resumen de la operación de sincronización.

  - Puede hacer clic en **`See details`** para ver un desglose completo de los resultados.
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-windows-alarm.png" alt="sync completed windows alarm" class="img-medium img-center" />
:::tip Vea los mensajes de alarma en la notificación de Windows
Si no ve la ventana emergente, aún puede consultar la alerta de sincronización haciendo clic en el **icono de notificaciones** de la **bandeja del sistema de Windows**.
<img src="/support/images/en/howto/rcloneview-basic/click-windows-alarm-notification.png" alt="click windows alarm notification" class="img-small img-left" />
:::


## Ver el historial de trabajos


Desde el **`Job Manage`r**, haga clic en el icono de **`History`** <img src="/support/icons/history-icon.png" alt="history icon" class="inline-icon" /> junto a un trabajo para ver su registro de ejecución.

Si un trabajo se ejecutó con varios destinos, cada destino se mostrará como una pestaña independiente en el historial.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-medium img-center" />

<details>
<summary>Descripción de los campos</summary>

Descripción de los campos


- `Execution Type` : 
	- Manual :  Ejecutado manualmente por el usuario
	- Scheduled : - Ejecutado automáticamente por RcloneView 
- `Start Time` : Cuándo comenzó el trabajo   
- `Time Spent` : Duración total de la sincronización  
- `Status` : Resultado de la ejecución del trabajo  
	- Completed : Éxito   
	- Errored : Fallido, con mensajes de error disponibles. 
- `Total Size` : Tamaño total de los datos transferidos
- `Speed` : Velocidad media de transferencia. 
- `Files` : Número de archivos transferidos. 
- `Job Type` : Actualmente Sync; futuras actualizaciones podrán incluir trabajos de Copy, Purge o Batch   
- `Delete` : Elimina la entrada de historial seleccionada. 

</details>


<details>
<summary>Barras de herramientas para filtrar y eliminar el historial</summary>

Barras de herramientas para filtrar y eliminar el historial

Cuando se acumula una gran cantidad de registros de historial, puede filtrarlos o eliminarlos mediante las opciones de la barra de herramientas.

- `From ~ To` : Seleccione un intervalo de fechas personalizado con el calendario para mostrar el historial dentro de ese período.  
- `Today` : Muestra solo las entradas de historial de hoy.  
- `Yesterday` : Muestra las entradas de historial de exactamente un día atrás.  
- `Last week` : Muestra el historial de los últimos 7 días.
- `Last month` : Muestra el historial de los últimos 30 días.
- `Delete all` : - Elimina permanentemente todos los registros de historial.   ⚠️ _Esta acción no se puede deshacer. Proceda con precaución._

</details>



