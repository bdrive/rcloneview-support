---
sidebar_position: 6
description: "Aprenda a crear y gestionar trabajos de sincronización en RcloneView para la sincronización repetida o programada de carpetas remotas."
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - sync job
  - job manager
  - scheduled sync
  - create sync
  - rclone automation
  - plus license
  - cloud storage
  - remote storage
tags:
  - RcloneView
  - Cloud
  - Sync
  - job-scheduler
  - create-job
  - Job-Management
date: 2025-06-04
author: Jay
---
# Crear trabajos de sincronización

Puede crear tareas de sincronización de uso frecuente como **Trabajos**, lo que le permite ejecutarlas repetidamente con solo unos clics.  

Hay dos formas principales de crear un Trabajo:  
- Crear un Trabajo directamente desde una tarea de sincronización (Sincronización instantánea). 
- Usar el **Administrador de trabajos** para configurar y guardar trabajos manualmente. 

## Crear un trabajo desde Sincronización instantánea

Puede crear un Trabajo configurando su tarea de sincronización y haciendo clic en **Guardar en Trabajos** en la ventana de Sincronización.  

👉 Ver: [Crear un trabajo instantáneamente desde Sincronización](/howto/rcloneview-basic/synchronize-remote-storages#save-sync-operation-as-a-job)

Puede ver y ejecutar los trabajos guardados haciendo clic en la barra de herramientas **`Job Manager`** en el menú principal.

## Crear un trabajo mediante el Administrador de trabajos


### (Opcional) Seleccionar carpetas de origen y destino

Opcionalmente, puede especificar las carpetas de origen y destino antes de crear un Trabajo mediante el **Administrador de trabajos**.  

Esto es útil si desea preasignar carpetas al agregar un nuevo trabajo más adelante.  

Alternativamente, puede configurar las carpetas de origen y destino directamente en la ventana **Agregar trabajo** del **Administrador de trabajos**.  

Para abrir el Administrador de trabajos, haga clic en el botón **Job Manager** en la barra de herramientas principal.

<img src="/support/images/en/howto/rcloneview-basic/create-job-using-job-manager.png" alt="create job using job manager" class="img-medium img-center" />

### Agregar un nuevo trabajo

Para agregar un nuevo trabajo, haga clic en **`Add Job`** en la ventana modal **Job Manager** (=`Jobs`).  

#### Paso 0: Abrir el Administrador de trabajos y hacer clic en `Add Job`

  Verá la siguiente ventana `Jobs`. Haga clic en el botón **Add Job** para abrir el asistente de creación de trabajos.

<img src="/support/images/en/howto/rcloneview-basic/add-job-in-job-manager.png" alt="add job in job manager" class="img-medium img-center" />
  El asistente de trabajos lo guía a través de tres pasos:

1. **Configure Storage** – Elegir las carpetas de origen y destino  
2. **Advanced Settings (optional)** – Configurar el comportamiento de sincronización  
3. **Filtering Settings (optional)** – Definir filtros para tipos de archivo o carpetas
<div class="img-grid-3">
<img src="/support/images/en/howto/rcloneview-basic/add-job-configure-storage.png" alt="add job configure storage" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-advnaced-settings.png" alt="add job advnaced settings" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-filtering-settings.png" alt="add job filtering settings" class="img-medium img-center" />
</div>
#### Paso 1: Configure Storage

- En el paso **`Configure Storage`**, revise las carpetas de origen y destino seleccionadas.
- Ingrese el **`Job Name`** ( ❗Caracteres permitidos: `a–z`, `A–Z`, `0–9`, `-`, `_` )
- Para sincronizar un origen con múltiples destinos, haga clic en **Add Destination** para agregar carpetas remotas adicionales.  
  Esto permite la sincronización **1:N (uno a muchos)**.  
- Asegúrese de que todas las carpetas estén configuradas correctamente antes de hacer clic en **Next**.

:::caution Cómo funciona la sincronización
La sincronización de RcloneView hace que el origen y el destino sean idénticos.  
Esto significa que **`solo se modifica el destino`**.  
- El contenido de la carpeta **origen** se refleja en el **destino**.  
- Cualquier archivo existente en el destino que no exista en el origen será **eliminado**.  

👍 **Importante:** Rclone oficialmente solo admite la **sincronización unidireccional**.  
⚠️ La **sincronización bidireccional (=Bidirection)** está disponible como función **beta** y no cuenta con soporte oficial. Puede causar comportamientos o errores inesperados, por lo que **no se recomienda para uso en producción**.
:::

<details>
<summary>Detalles de Configure Storage</summary>

<img src="/support/images/en/howto/rcloneview-basic/job-config-storage-details.png" alt="job config storage details" class="img-medium img-center" />

1. **`Job Name`**. 
 - ❗Caracteres permitidos: `a–z`, `A–Z`, `0–9`, `-`, `_` 
2. **Seleccione la carpeta de origen**.   
 - Haga clic en el icono de carpeta en el panel izquierdo para elegir el origen.  
1. **Seleccione la carpeta de destino**. 
- Haga clic en el icono de carpeta en el panel derecho para elegir el destino.  
1. **Agregar destinos adicionales** (opcional). 
- Haga clic en el botón **Add Destination** para sincronizar con varios destinos a la vez. Puede configurar la **sincronización 1:N** si lo necesita.  
5. **Elija la dirección de sincronización**. 
 - **Modifying destination only**: Sincroniza desde el origen hacia el destino. Actualiza o elimina el contenido del destino para que coincida con el origen.  
 - **Bidirection** (Beta): Compara ambas carpetas y sincroniza los cambios en ambas direcciones.  
⚠️ Este modo puede sobrescribir archivos nuevos de forma no intencionada, por lo que debe usarse con precaución.  
6. **Crear directorios vacíos (opcional)**.   
- Si está habilitado, cualquier directorio de origen que no contenga archivos se volverá a crear como una carpeta vacía en el destino.  

:::caution Uso de la sincronización bidireccional en RcloneView
RcloneView usa `bisync` (un comando beta en rclone) para realizar la sincronización bidireccional.    
Dado que esta función sigue siendo **experimental**, recomendamos revisar el [manual del usuario](https://rclone.org/bisync/) oficial —especialmente la sección de [Limitaciones](https://rclone.org/bisync/#limitations)— antes de habilitarla.

Usar bisync de forma incorrecta puede provocar pérdida de datos. Úselo con precaución.
:::


</details>

#### Paso 2: Advanced Settings (optional)

  - Advanced Settings incluye opciones para:
	  - Rendimiento de la transferencia
	  - Método de conexión
	  - Comportamiento de manejo de errores

> 💡 Recomendamos usar los valores predeterminados a menos que necesite un comportamiento personalizado.

<details>
<summary>Detalles de Advanced Settings</summary>

<img src="/support/images/en/howto/rcloneview-basic/sync-advanced-settings-details.png" alt="sync advanced settings details" class="img-medium img-center" /> 
**Rendimiento:**

1. **`Number of file transfers`**:   
   El número de transferencias de archivos que se ejecutan en paralelo. A veces puede ser útil establecer un número menor si el remoto genera muchos tiempos de espera agotados, o mayor si dispone de mucho ancho de banda y un remoto rápido.  
2. **`Number of multi thread transfers`**:  
   Al usar transferencias multihilo, esto establece la cantidad de flujos (streams) a utilizar. Establezca `0` para deshabilitar las transferencias multihilo (Predeterminado 4). Al transferir archivos de más de 256 MB a backends compatibles, rclone usará múltiples hilos para transferir el archivo.  
3. **`Number of equaility checkers`**:  
   Los checkers realizan la verificación de igualdad de los archivos durante una sincronización. Para algunos sistemas de almacenamiento (por ejemplo, S3, Swift, Dropbox) esto puede llevar bastante tiempo, por lo que se ejecutan en paralelo. Lo predeterminado es ejecutar 8 checkers en paralelo. Sin embargo, en el caso de backends de reacción lenta, es posible que deba reducir (en lugar de aumentar) este valor predeterminado estableciendo `--checkers` en 4 hilos o menos.  


**Seguridad e integridad:**

5. **` Enable checksum to compare files`** :  
   Normalmente rclone observa la fecha de modificación y el tamaño de los archivos para determinar si son iguales. Si activa esta opción, rclone verificará el hash y el tamaño del archivo para determinar si los archivos son iguales. Esto es muy útil al transferir entre remotos que almacenan el mismo tipo de hash en el objeto, por ejemplo, Drive y Swift. Para más detalles sobre qué remotos admiten cada tipo de hash, consulte la tabla en la [sección de resumen](https://rclone.org/overview/).  


**Control de errores:**

5. **`Retry the entire sync if it fails this many times`**:  
   Reintenta la sincronización completa si falla esta cantidad de veces (predeterminado 3). Algunos remotos pueden no ser confiables, y algunos reintentos ayudan a recuperar los archivos que no se transfirieron debido a errores. Deshabilite los reintentos con `1`.  

</details>



#### Paso 3: Filtering Settings (optional)

- RcloneView aplica filtros básicos de forma predeterminada para servicios como Google Docs o Box Docs.
- Puede agregar más tipos de archivo o carpetas para excluir de la sincronización.

<details>
<summary>Detalles de Filering Settings</summary>


<img src="/support/images/en/howto/rcloneview-basic/jobs-filtering-setttings-details.png" alt="jobs filtering setttings details" class="img-medium img-center" />
1. **`Don't sync files over`** :  
   Controla el **tamaño máximo de archivo** permitido para la sincronización.  
   La unidad predeterminada es MB.  
2. **`Don't sync files older than this`** :    
   Controla la **antigüedad máxima del archivo** permitida para la sincronización.  
   Esto se aplica solo a **archivos**, no a directorios.  
   Use las siguientes unidades:  
   `y` = años, `d` = días, `h` = horas, `m` = minutos, `s` = segundos (Ejemplo: 2y30d12h30m45s)  
3. **`Don't sync folders over this depth`** :   
   Si se establece, Rclone solo sincronizará carpetas dentro de la profundidad especificada.  
   Por ejemplo, establecer esto en `1` sincronizará solo los archivos del directorio de nivel superior.  
   Establecerlo en `2` sincronizará los archivos dentro de los primeros dos niveles de carpetas, y así sucesivamente.
4. **Predefined Filters**.   
   Puede aplicar rápidamente filtros integrados para tipos de archivo comunes como:  
   - Music, Video, Image, Document, Google Docs, Box Docs  
     Estos filtros están disponibles como opciones predefinidas en la lista de filtros.
1. **Others (= Custom Filters)**.  
   Puede definir reglas personalizadas para excluir o incluir tipos de archivo, carpetas o rutas específicas.  
   Aquí hay algunos ejemplos comunes:  
   **`.iso`** : Excluye todos los archivos .iso.  
   **`/.git/*`** : Excluye solo los archivos dentro de la carpeta .git en la raíz, no las subcarpetas.  
   **`/.git/`** : Excluye toda la carpeta .git en la raíz, incluyendo todo su contenido.   
   **`.git/`** : Excluye todas las carpetas .git y todo su contenido, sin importar la ubicación.   
   
   🔗 Para ejemplos y sintaxis más avanzados, consulte la [Guía de filtrado de Rclone](https://rclone.org/filtering/#exclude-exclude-files-matching-pattern)


</details>


#### Paso 4: Scheduling (Available with PLUS License)

La programación de trabajos le permite ejecutar automáticamente trabajos a intervalos o en horarios específicos.   

💡 Esta función está disponible exclusivamente con la [**licencia PLUS**](https://rcloneview.com/src/pricing.html).  

Para más detalles, consulte [Configurar una programación de trabajo](/howto/rcloneview-advanced/job-scheduling-and-execution).   

Finalmente, revise el trabajo que ha creado en la lista para asegurarse de que todo esté configurado correctamente.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="add job scheduling" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-completed.png" alt="add job completed" class="img-medium img-center" />
</div>

  





