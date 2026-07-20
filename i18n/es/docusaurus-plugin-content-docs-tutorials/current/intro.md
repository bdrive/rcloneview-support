---
sidebar_position: 2
description: Aprenda a usar RcloneView con Wasabi para explorar, hacer copias de seguridad, sincronizar y migrar datos entre almacenamiento local y otras nubes.
keywords:
  - rcloneview
  - wasabi
  - s3-compatible
  - cloud backup
  - cloud sync
  - cloud migration
  - file synchronization
  - gui
  - rclone gui
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - cloud-backup
  - Tutorial
  - wasabi
date: 2025-02-20
author: Jay
slug: /
---

# Usar Wasabi con RcloneView (compatible con S3)

RcloneView es una aplicación de escritorio que le ofrece un Explorador visual de dos paneles para **rclone**. Le permite copiar, sincronizar y migrar archivos entre **Wasabi** y otros almacenamientos en la nube o locales, sin usar la línea de comandos.

Con RcloneView puede:

- Explorar sus buckets de Wasabi como si fueran carpetas locales  
- Arrastrar y soltar archivos entre **disco local ↔ Wasabi** o **Wasabi ↔ otras nubes**  
- Ejecutar transferencias puntuales o programar trabajos de sincronización recurrentes  

Si prefiere verlo en acción primero, puede ver una breve demostración:

<iframe
  src="https://www.youtube.com/embed/yKc6qS2DG2A"
  title="Wasabi + RcloneView Demo"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  loading="lazy"
  style={{aspectRatio: '16 / 9', width: '100%', maxWidth: '960px', height: 'auto', display: 'block', margin: '0 auto', border: 0}}
></iframe>

<br />

> Para obtener más información sobre RcloneView, visite el sitio oficial: [https://rcloneview.com](https://rcloneview.com)  


---

## 1. Descargar e instalar RcloneView

RcloneView está disponible para **Windows, macOS y Linux**.

1. Vaya a la página de descargas: [https://rcloneview.com/src/download](https://rcloneview.com/src/download).  
2. Elija el instalador para su sistema operativo (Windows, macOS o Linux).  
3. Instale y abra **RcloneView**.

---

## 2. Agregar Wasabi como remoto en RcloneView

RcloneView trata Wasabi como un backend **compatible con S3**. Cree un remoto una vez y luego reutilícelo para explorar, copiar, sincronizar y programar trabajos.

### 2.1 Requisitos previos: claves de acceso y endpoint de Wasabi

Para conectar RcloneView con Wasabi, necesita:

- **Access Key** / **Secret Key**  
- **Región / URL de Endpoint** (por ejemplo, la región `ap-northeast-2` y el endpoint `s3.ap-northeast-2.wasabisys.com`)  

Siga la documentación oficial de Wasabi para crear una clave de acceso y encontrar su endpoint:

- Documentación de Wasabi: [https://docs.wasabi.com/docs](https://docs.wasabi.com/docs)  
- Ejemplo: "[Creating a New Access Key](https://docs.wasabi.com/docs/creating-a-new-access-key)" o "[Creating a Bucket](https://docs.wasabi.com/docs/creating-a-bucket)" (busque dentro del portal de documentación de Wasabi).

Una vez que tenga su **Access Key**, **Secret Key** y **Endpoint**, vuelva a RcloneView.

### 2.2 Abrir el asistente "New Remote"

1. Abra **RcloneView**.  
2. En el menú superior, haga clic en **`Remote` → `+ New Remote`**.  
   - O haga clic en la pestaña **`+`** del panel del Explorador y elija **`New Remote`**.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### 2.3 Configurar Wasabi como proveedor compatible con S3

1. En el cuadro de diálogo **New Remote**, busque `Wasabi`.  
2. Seleccione la tarjeta del proveedor **Wasabi**.  
3. Configure la conexión:
   - **Remote name**: introduzca un nombre claro, como `MyWasabi`.  
   - **Access Key ID**: pegue su clave de acceso de Wasabi.  
   - **Secret Access Key**: pegue su clave secreta de Wasabi.  
   - **Endpoint**: introduzca el endpoint de S3 de Wasabi (por ejemplo, `s3.ap-northeast-2.wasabisys.com`).  
4. Haga clic en **Add Remote**.

<img src="/support/images/en/tutorials/add-new-wasabi-remote-configuration.png" alt="add new wasabi remote configuration" class="img-large img-center" />

### 2.4 Verificar el remoto de Wasabi

1. Abra **`Remote → Remote Manager`**.  
2. Confirme que su remoto de Wasabi (por ejemplo, `MyWasabi`) aparece en la lista y es accesible.

<img src="/support/images/en/tutorials/verify-wasabi-in-remote-manager.png" alt="verify wasabi in remote manager" class="img-large img-center" />

Para más detalles, consulte la guía general de compatibilidad con S3:  
- [How to Add S3-Compatible Remote](/howto/remote-storage-connection-settings/s3)

---

## 3. Explorar carpetas en Wasabi

Una vez creado el remoto, puede explorar buckets y objetos dentro del Explorador de RcloneView.

1. En el panel del Explorador, haga clic en la pestaña **`+`**.  
2. En la lista "Open Remote", elija su remoto de **Wasabi** (por ejemplo, `MyWasabi`).  
3. RcloneView abre el remoto en una pestaña donde los buckets aparecen como carpetas de nivel superior.  
4. Haga doble clic en un bucket para explorar su contenido.

<img src="/support/images/en/tutorials/wasabi-remote-in-rcloneview-explorer.png" alt="wasabi remote in rcloneview explorer" class="img-large img-center" />

Para más consejos generales de navegación, consulte:  
- [File Management with RcloneView](/howto/rcloneview-basic/browse-and-manage-remote-storage)

---

## 4. Administrar archivos entre el disco local y Wasabi

Esta sección muestra formas prácticas de mover datos entre su equipo local y Wasabi usando RcloneView.

Puede abrir:

- **Panel izquierdo**: disco local (por ejemplo, `C:\` o una carpeta específica)  
- **Panel derecho**: su bucket remoto de Wasabi  

Luego use arrastrar y soltar, comparación de carpetas o trabajos de sincronización según su flujo de trabajo.

---

### 4.1 Arrastrar y soltar entre local y Wasabi

Arrastrar y soltar es la forma más sencilla de copiar archivos.

1. En el panel izquierdo, abra su **carpeta local** (por ejemplo, `D:\Media`).  
2. En el panel derecho, abra su **bucket/carpeta de Wasabi**.  
3. Seleccione archivos o carpetas en el panel izquierdo.  
4. Arrástrelos hasta el panel derecho y suéltelos en la ubicación deseada.  
5. RcloneView inicia un trabajo de transferencia; el progreso aparece en la pestaña **Transfer**.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="wasabi drag and drop" class="img-large img-center" />
Para selección múltiple, acciones del clic derecho y más, consulte:  
- [File Management with RcloneView](/howto/rcloneview-basic/browse-and-manage-remote-storage)

---

### 4.2 Comparar carpetas y copiar archivos modificados

Si desea ver las **diferencias** antes de copiar, use la función **Compare**.

Caso de uso típico: comparar una carpeta de copia de seguridad local con una carpeta de copia de seguridad en Wasabi.

1. En el panel izquierdo, abra la **carpeta de origen** (por ejemplo, local u otra nube).  
2. En el panel derecho, abra la **carpeta de destino de Wasabi**.  
3. Haga clic en **`Compare`** en el menú superior **Home**.  
4. RcloneView marca:
   - Archivos solo en el panel izquierdo (solo en el origen)  
   - Archivos solo en el panel derecho (solo en el destino)  
   - Archivos modificados (difieren en tamaño, marca de tiempo o checksum)  
5. Seleccione los elementos que desea mover y haga clic en **Copy →** (o **← Copy** para la dirección inversa).

<img src="/support/images/en/tutorials/wasabi-and-local-compare-and-copy.png" alt="wasabi and local compare and copy" class="img-large img-center" />
Más información:  
- [Compare Folder Contents](/howto/rcloneview-basic/compare-folder-contents)

---

### 4.3 Trabajos de sincronización entre el disco local y Wasabi

Para copias de seguridad repetibles o duplicación, use **Sync**. La sincronización hace que el destino coincida con el origen.

Hay tres patrones comunes:

- **Instant Sync** (se ejecuta una vez de inmediato)  
- **Saved Sync Job** (se vuelve a ejecutar cuando sea necesario)  
- **Scheduled Sync Job** (se ejecuta automáticamente según una programación)  

> ⚠️ La sincronización actualiza el destino para que coincida con el origen; los archivos que solo existen en el destino pueden eliminarse. Revise cuidadosamente la configuración de sincronización antes de ejecutarla.

#### 4.3.1 Sincronización instantánea (una sola vez)

1. Abra la **carpeta de origen** en el panel izquierdo (por ejemplo, una carpeta local).  
2. Abra la **carpeta de destino de Wasabi** en el panel derecho.  
3. Haga clic en **`Sync`** en el menú **Home**.  

<img src="/support/images/en/tutorials/wasabi-and-local-instant-sync.png" alt="wasabi and local instant sync" class="img-large img-center" />

Luego, en el cuadro de diálogo **Sync**:

1. En **Configure Storage**, confirme el origen y el destino.  
2. Opcionalmente, ajuste **Advanced Settings** o **Filtering Settings**.  
3. Ejecute un **Dry Run** primero si desea previsualizar los cambios.  
4. Haga clic en **Run** para iniciar la sincronización.

<img src="/support/images/en/tutorials/wasabi-configure-sync-job.png" alt="wasabi configure sync job" class="img-large img-center" />
Después de ejecutar Sync, puede supervisar el progreso de la transferencia de archivos en tiempo real.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="wasabi real time monitoring transferring" class="img-large img-center" />

Referencia:  
- [Synchronize Remote Storages Instantly](/howto/rcloneview-basic/synchronize-remote-storages)

#### 4.3.2 Guardar un trabajo de sincronización para reutilizarlo

Si va a ejecutar regularmente la misma copia de seguridad de local → Wasabi:  
Configure una sincronización como se indicó anteriormente (origen a la izquierda, destino de Wasabi a la derecha).    

1. En el cuadro de diálogo Sync, elija **Save to Jobs** en lugar de ejecutarlo de inmediato.  
2. Asigne al trabajo un nombre descriptivo, como `SyncLocalToWasabi`.  
3. Más tarde, abra **Job Manager** y ejecute el trabajo manualmente cada vez que necesite una copia de seguridad actualizada.

<img src="/support/images/en/tutorials/wasabi-saved-sync-job-execution.png" alt="wasabi saved sync job execution" class="img-large img-right" />  
En plataformas compatibles (como Windows), RcloneView puede mostrar una notificación del sistema cuando finaliza el trabajo.

Referencia:  
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)  
- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)

#### 4.3.3 Programar copias de seguridad automáticas de Wasabi (programación de trabajos)

Para automatizar por completo las copias de seguridad en Wasabi, programe su trabajo de sincronización.

> 📌 **La programación de trabajos es una función PLUS.** Necesita una [licencia PLUS](https://rcloneview.com/src/pricing.html) para habilitar la programación.

Abra **Job Manager** desde la barra de herramientas.    
1. Seleccione su trabajo de sincronización de Wasabi (por ejemplo, `LocalToWasabi_DailyBackup`) y haga clic en **Edit Job**, o cree un nuevo trabajo a partir de su selección actual en el Explorador.  
2. Vaya a **Step 4: Scheduling**.  
3. Habilite **Run whenever time units ~** y establezca la programación (por ejemplo, diariamente a la 01:00).  
4. Use **Simulate** para previsualizar las próximas horas de ejecución.  
5. Guarde el trabajo y mantenga RcloneView en ejecución; el trabajo se ejecutará automáticamente.

<img src="/support/images/en/tutorials/scheule-automatic-wasabi-backup.png" alt="scheule automatic wasabi backup" class="img-large img-center" />


Para más detalles:  
- [Job Scheduling and Automated Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

---

### 4.4 Usar Mount para trabajar con Wasabi en el Explorador de Windows

Puede montar un bucket de Wasabi como una **unidad o carpeta virtual** en su sistema y luego usar el Explorador de Windows (o Finder en macOS) como de costumbre.

Flujo típico:

Asegúrese de que su remoto de Wasabi esté configurado y funcionando.  
1. Elija la carpeta de Wasabi que desea montar.  
2. Haga clic en el icono **Mount** en la esquina superior derecha del Explorador de RcloneView.  
3. Haga clic en el botón **Save and mount** para iniciar el montaje.  
4. Después de unos instantes, aparecerá una nueva unidad o carpeta en su sistema operativo. Explorar esa ruta lee y escribe datos directamente desde Wasabi a través de RcloneView/rclone.

<img src="/support/images/en/tutorials/mount-wasabi-as-local-drive.png" alt="mount wasabi as local drive" class="img-large img-center" />
Más información:  
- [Mount Cloud Storage as a Local Drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

---

## 5. Dónde obtener ayuda

- Documentación y guías prácticas de RcloneView: [https://rcloneview.com/support](https://rcloneview.com/support)  
- Portal de documentación de Wasabi: [https://docs.wasabi.com](https://docs.wasabi.com)  

Al combinar el almacenamiento de objetos compatible con S3 de Wasabi con la gestión visual de trabajos de RcloneView, puede crear flujos de trabajo fiables de copia de seguridad, sincronización y migración sin necesidad de aprender la sintaxis de línea de comandos de rclone.
