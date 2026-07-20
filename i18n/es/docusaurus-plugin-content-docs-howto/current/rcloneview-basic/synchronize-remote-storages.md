---
sidebar_position: 5
description: "Aprenda a duplicar instantáneamente carpetas entre almacenamiento local o en la nube usando la potente función de sincronización de RcloneView. Incluye configuración, filtros, simulación (dry run) y opciones de programación."
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - sync folders
  - bidirectional sync
  - sync job
  - dry run
  - scheduled sync
  - job scheduling
  - Job Monitor
tags:
  - RcloneView
  - Cloud
  - Sync
  - cloud-storage
  - file-synchronization
  - job-scheduler
  - dry-run
  - Remote-Storage
date: 2025-06-04
author: Jay
---
# Sincronice remotos al instante

Use la función **`Sync`** de RcloneView para duplicar instantáneamente carpetas entre remotos en la nube o almacenamiento local.  

Esta guía le explica cómo configurar y ejecutar una operación de sincronización.
## Seleccionar las carpetas de origen y destino

Para iniciar una operación de sincronización, debe definir las carpetas de **Origen** y **Destino**.

- En el panel **Explorer**, abra dos pestañas:
	- La carpeta seleccionada en la **pestaña izquierda** se convierte en el **Origen**
	- La carpeta seleccionada en la **pestaña derecha** se convierte en el **Destino**

- También puede introducir las rutas de las carpetas directamente usando la **barra de ruta** en la parte superior de cada pestaña.
- Estos ajustes se pueden modificar más tarde en la ventana de configuración de **Sync** si es necesario.

Una vez seleccionadas las carpetas, haga clic en el botón **`Sync`** del menú superior **`Home`** para continuar.
<img src="/support/images/en/howto/rcloneview-basic/sync-remote-folder-select.png" alt="sync remote folder select" class="img-medium img-center" />
## Ejecutar la operación de sincronización

Después de seleccionar las carpetas de origen y destino, puede configurar y ejecutar la sincronización.


<div class="img-grid-3">
<img src="/support/images/en/howto/rcloneview-basic/sync-configure-storage.png" alt="sync configure storage" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-advanced-settings.png" alt="sync advanced settings" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-filtering-settings.png" alt="sync filtering settings" class="img-medium img-center" />
</div>

### Paso 1: Verificar las rutas de las carpetas

- En el paso **`Configure Storage`**, revise las carpetas de origen y destino seleccionadas.
- Asegúrese de que ambas estén correctamente configuradas antes de hacer clic en **Next**.

:::caution Cómo funciona la sincronización
La sincronización de RcloneView hace que el origen y el destino sean idénticos.  
Esto significa **`modifying destination only`**.  
- El contenido de la carpeta **origen** se duplica en el **destino**.  
- Cualquier archivo existente en el destino que no exista en el origen será **eliminado**.  

👍 **Importante:** Rclone solo admite oficialmente la **sincronización unidireccional**.  
⚠️ La **sincronización bidireccional (=Bidirection)** está disponible como **función beta** y no es compatible oficialmente. Puede causar comportamientos inesperados o errores, por lo que **no se recomienda para uso en producción**.
:::

<details>
<summary>Detalles de Configure Storage</summary>

<img src="/support/images/en/howto/rcloneview-basic/sync-config-storage-details.png" alt="sync config storage details" class="img-medium img-center" />

1. **Seleccione la carpeta de origen**.   
 - Haga clic en el icono de carpeta del panel izquierdo para elegir el origen.  
2. **Seleccione la carpeta de destino**. 
- Haga clic en el icono de carpeta del panel derecho para elegir el destino.  
3. **Agregue destinos adicionales** (opcional). 
- Haga clic en el botón **Add Destination** para sincronizar con varios destinos a la vez. Puede configurar una **sincronización 1:N** si es necesario.  
4. **Elija la dirección de la sincronización**. 
 - **Modifying destination only**: Sincroniza desde el origen hacia el destino. Actualiza o elimina el contenido del destino para que coincida con el origen.  
 - **Bidirection** (Beta): Compara ambas carpetas y sincroniza los cambios en ambas direcciones.  
⚠️ Este modo puede sobrescribir archivos nuevos de forma involuntaria, así que úselo con precaución.  
5. **Crear directorios vacíos (opcional)**.   
- Si está habilitado, cualquier directorio de origen que no contenga archivos se recreará como una carpeta vacía en el destino.  

:::caution Uso de la sincronización bidireccional en RcloneView
RcloneView usa `bisync` (un comando beta de rclone) para realizar la sincronización bidireccional.    
Dado que esta función sigue siendo **experimental**, recomendamos revisar el [manual oficial](https://rclone.org/bisync/) — especialmente la sección [Limitations](https://rclone.org/bisync/#limitations) — antes de habilitarla.

Usar bisync de forma incorrecta puede provocar pérdida de datos. Por favor, úselo con precaución.
:::


</details>

### Paso 2: Configuración avanzada (opcional)

  - La configuración avanzada incluye opciones para:
	  - Rendimiento de la transferencia
	  - Método de conexión
	  - Comportamiento del manejo de errores

> 💡 Recomendamos usar los valores predeterminados a menos que necesite un comportamiento personalizado.

<details>
<summary>Detalles de la configuración avanzada</summary>

<img src="/support/images/en/howto/rcloneview-basic/sync-advanced-settings-details.png" alt="sync advanced settings details" class="img-medium img-center" /> 
**Rendimiento:**

1. **`Number of file transfers`**:   
   La cantidad de transferencias de archivos que se ejecutan en paralelo. A veces puede ser útil establecer un número menor si el remoto genera muchos tiempos de espera agotados, o un número mayor si dispone de mucho ancho de banda y un remoto rápido.  
2. **`Number of multi thread transfers`**:  
   Al usar transferencias multihilo, esto establece el número de flujos a utilizar. Establezca `0` para deshabilitar las transferencias multihilo (predeterminado: 4). Al transferir archivos de más de 256 MB a backends compatibles, rclone usará múltiples hilos para transferir el archivo.  
3. **`Number of equaility checkers`**:  
   Los verificadores realizan la comprobación de igualdad de los archivos durante una sincronización. Para algunos sistemas de almacenamiento (por ejemplo, S3, Swift, Dropbox), esto puede llevar una cantidad de tiempo considerable, por lo que se ejecutan en paralelo. Por defecto se ejecutan 8 verificadores en paralelo. Sin embargo, en el caso de backends de respuesta lenta, puede que necesite reducir (en lugar de aumentar) este valor predeterminado estableciendo `--checkers` en 4 o menos hilos.  


**Seguridad e integridad:**

5. **` Enable checksum to compare files`** :  
   Normalmente, rclone observa la fecha de modificación y el tamaño de los archivos para determinar si son iguales. Si activa esta opción, rclone comprobará el hash y el tamaño del archivo para determinar si los archivos son iguales. Esto es muy útil al transferir entre remotos que almacenan el mismo tipo de hash en el objeto, por ejemplo Drive y Swift. Para más detalles sobre qué remotos admiten qué tipo de hash, consulte la tabla en la [sección de resumen](https://rclone.org/overview/).  


**Control de errores:**

5. **`Retry the entire sync if it fails this many times`**:  
   Reintenta toda la sincronización si falla esta cantidad de veces (predeterminado: 3). Algunos remotos pueden ser poco fiables, y unos cuantos reintentos ayudan a recuperar los archivos que no se transfirieron debido a errores. Desactive los reintentos con `1`.  

</details>



### Paso 3: Filtrar archivos y carpetas (opcional)

- RcloneView aplica filtros básicos por defecto para servicios como Google Docs o Box Docs.
- Puede agregar más tipos de archivo o carpetas para excluir de la sincronización.

<details>
<summary>Detalles de la configuración de filtrado</summary>

<img src="/support/images/en/howto/rcloneview-basic/sync-filtering-settings-details.png" alt="sync filtering settings details" class="img-medium img-center" />

1. **`Don't sync files over`** :  
   Controla el **tamaño máximo de archivo** permitido para la sincronización.  
   La unidad predeterminada es MB.  
2. **`Don't sync files older than this`** :    
   Controla la **antigüedad máxima de archivo** permitida para la sincronización.  
   Esto se aplica solo a **archivos**, no a directorios.  
   Use las siguientes unidades:  
   `y` = años, `d` = días, `h` = horas, `m` = minutos, `s` = segundos (Ejemplo: 2y30d12h30m45s)  
3. **`Don't sync folders over this depth`** :   
   Si se establece, Rclone solo sincronizará carpetas dentro de la profundidad especificada.  
   Por ejemplo, establecer esto en `1` sincronizará solo los archivos del directorio de nivel superior.  
   Establecerlo en `2` sincronizará los archivos dentro de los dos primeros niveles de carpetas, y así sucesivamente.
4. **Filtros predefinidos**.   
   Puede aplicar rápidamente filtros integrados para tipos de archivo comunes como:  
   - Música, Video, Imagen, Documento, Google Docs, Box Docs  
     Estos filtros están disponibles como opciones predefinidas en la lista de filtros.
1. **Otros (= Filtros personalizados)**.  
   Puede definir reglas personalizadas para excluir o incluir tipos de archivo, carpetas o rutas específicas.  
   Aquí hay algunos ejemplos comunes:  
   **`.iso`** : Excluye todos los archivos .iso.  
   **`/.git/*`** : Excluye solo los archivos dentro de la carpeta .git en la raíz, no en las subcarpetas.  
   **`/.git/`** : Excluye toda la carpeta .git en la raíz, incluyendo todo su contenido.   
   **`.git/`** : Excluye todas las carpetas .git y todo su contenido, sin importar la ubicación.   
   
   🔗 Para ejemplos más avanzados y sintaxis, consulte la [Guía de filtrado de Rclone](https://rclone.org/filtering/#exclude-exclude-files-matching-pattern)


</details>

  
  
### Paso 4: Ejecutar la sincronización

- Una vez completada toda la configuración, haga clic en **Run** para iniciar el proceso de sincronización.

:::important Programación de sincronización. 
Para ejecutar tareas de sincronización en una fecha y hora programadas, primero haga clic en **Save to Jobs** para registrar la tarea de sincronización como un trabajo. Luego, ejecute el **`Job Manager`** para configurar la programación.  

> ⚠️ **La programación de trabajos está disponible como función PLUS.**   

Necesitará adquirir una [**licencia PLUS**](https://rcloneview.com/src/pricing.html) para habilitar esta funcionalidad.
:::

### Simular: Ejecutar una simulación (dry run) (opcional)

Puede ejecutar una **simulación (Dry run)** para simular la operación de sincronización sin realizar cambios reales.

- Esta vista previa muestra qué archivos se copiarán al **Destino** y cuáles se eliminarán.
- Haga clic en **`See details`** para ver una lista completa de las operaciones que ocurrirían (por ejemplo, copiar, crear, eliminar) en el destino.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run.png" alt="sync dry run" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run-details.png" alt="sync dry run details" class="img-medium img-center" />
</div>

## Monitorear los resultados de la sincronización

Puede consultar el progreso y los resultados de las operaciones de sincronización en tiempo real.

### Estado de la transferencia (en progreso)

- Durante la sincronización, abra la pestaña **`Transfer`** para ver el progreso en tiempo real de cada archivo.
- Haga clic en el icono **+** para expandir y monitorear las transferencias de archivos individuales.
<img src="/support/images/en/howto/rcloneview-basic/sync-transfer-window.png" alt="sync transfer window" class="img-medium img-center" />

### Trabajos completados (después de la sincronización)

- Una vez finalizada la sincronización, vaya a la pestaña **`Completed`** para ver los resultados.
- Haga clic en el icono **+** para ver los detalles a nivel de archivo de cada trabajo completado.
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-window.png" alt="sync completed window" class="img-medium img-center" />
:::tip Abra rápidamente los remotos sincronizados
En la pestaña **`Completed`**, puede hacer doble clic en cualquier trabajo completado para abrir tanto la carpeta de origen como la de destino en el panel Explorer.  
Esto facilita revisar las carpetas sincronizadas de inmediato.
:::

### Alarma de notificación de finalización (Windows)

Una vez completada la sincronización, aparecerá una ventana emergente de notificación en la bandeja del sistema de Windows, mostrando un resumen de la operación de sincronización.

  - Puede hacer clic en **`See details`** para ver un desglose completo de los resultados.
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-windows-alarm.png" alt="sync completed windows alarm" class="img-medium img-center" />
:::tip Vea los mensajes de la alarma en la notificación de Windows
Si se pierde la ventana emergente, aún puede consultar la alerta de sincronización haciendo clic en el **icono de notificación** en la **bandeja del sistema de Windows**.
<img src="/support/images/en/howto/rcloneview-basic/click-windows-alarm-notification.png" alt="click windows alarm notification" class="img-small img-left" />
:::



## Guardar la operación de sincronización como un trabajo

Si realiza regularmente la misma tarea de sincronización, puede guardarla como un **trabajo (Job)** para reutilizarla fácilmente.

- Haga clic en **`Save to Jobs`** después de configurar su sincronización.
- Introduzca un **nombre de trabajo (Job Name)** y luego haga clic en **Save** para guardar el trabajo.  
  - ❗Caracteres permitidos: `a–z`, `A–Z`, `0–9`, `-`, `_`, `.`
- Más tarde podrá ejecutar el trabajo guardado desde el **`Job Manager`** con un solo clic.

<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="save sync to jobs" class="img-medium img-center" />
Puede ver y ejecutar los trabajos guardados haciendo clic en la barra de herramientas **`Job Manager`** en el menú Home.
<img src="/support/images/en/howto/rcloneview-basic/verify-job-in-job-manager.png" alt="verify job in job manager" class="img-medium img-center" />
