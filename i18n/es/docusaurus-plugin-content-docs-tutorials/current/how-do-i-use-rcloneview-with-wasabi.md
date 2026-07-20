---
description: Aprende a usar RcloneView con Wasabi para explorar, hacer copias de seguridad, sincronizar y migrar datos entre el almacenamiento local y otras nubes.
keywords:
  - rcloneview
  - wasabi
  - s3-compatible
  - copia de seguridad en la nube
  - sincronización en la nube
  - migración en la nube
  - sincronización de archivos
  - gui
  - rclone gui
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - cloud-backup
  - Tutorial
  - wasabi
unlisted: true
---

# ¿Cómo uso RcloneView con Wasabi?

RcloneView es una aplicación de escritorio que te ofrece un Explorador visual de dos paneles para **rclone**. Te permite copiar, sincronizar y migrar archivos entre **Wasabi** y otros almacenamientos en la nube o locales, sin usar la línea de comandos.

Con RcloneView puedes:

- Explorar tus buckets de Wasabi como si fueran carpetas locales  
- Arrastrar y soltar archivos entre **disco local ↔ Wasabi** o **Wasabi ↔ otras nubes**  
- Ejecutar transferencias puntuales o programar trabajos de sincronización recurrentes  

Si prefieres verlo en acción primero, puedes ver una breve demostración (se ajusta automáticamente, sin bandas negras):

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

> Para más información sobre RcloneView, visita el sitio oficial: [https://rcloneview.com](https://rcloneview.com)  


---

## 1. Descarga e instala RcloneView

RcloneView está disponible para **Windows, macOS y Linux**.

1. Ve a la página de descargas: [https://rcloneview.com/src/download](https://rcloneview.com/src/download).  
2. Elige el instalador para tu sistema operativo (Windows, macOS o Linux).  
3. Instala y abre **RcloneView**.

---

## 2. Agrega Wasabi como remoto en RcloneView

RcloneView trata Wasabi como un backend **compatible con S3**. Creas un remoto una vez y luego lo reutilizas para explorar, copiar, sincronizar y programar trabajos.

### 2.1 Requisitos previos: claves de acceso y endpoint de Wasabi

Para conectar RcloneView a Wasabi, necesitas:

- **Access Key** / **Secret Key**  
- **Región / URL del Endpoint** (por ejemplo, la región `ap-northeast-2` y el endpoint `s3.ap-northeast-2.wasabisys.com`)  

Sigue la documentación oficial de Wasabi para crear una clave de acceso y encontrar tu endpoint:

- Documentación de Wasabi: [https://docs.wasabi.com/docs](https://docs.wasabi.com/docs)  
- Ejemplo: "[Creating a New Access Key](https://docs.wasabi.com/docs/creating-a-new-access-key)" o "[Creating a Bucket](https://docs.wasabi.com/docs/creating-a-bucket)" (busca en el portal de documentación de Wasabi).

Una vez que tengas tu **Access Key**, **Secret Key** y **Endpoint**, vuelve a RcloneView.

### 2.2 Abre el asistente "New Remote"

1. Abre **RcloneView**.  
2. En el menú superior, haz clic en **`Remote` → `+ New Remote`**.  
   - O haz clic en la pestaña **`+`** del panel Explorer y elige **`New Remote`**.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### 2.3 Configura Wasabi como proveedor compatible con S3

1. En el cuadro de diálogo **New Remote**, busca `Wasabi`.  
2. Selecciona el icono del proveedor **Wasabi**.  
3. Configura la conexión:
   - **Remote name**: escribe un nombre claro, como `MyWasabi`.  
   - **Access Key ID**: pega tu clave de acceso de Wasabi.  
   - **Secret Access Key**: pega tu clave secreta de Wasabi.  
   - **Endpoint**: escribe el endpoint S3 de Wasabi (por ejemplo, `s3.ap-northeast-2.wasabisys.com`).  
4. Haz clic en **Add Remote**.

<img src="/support/images/en/tutorials/add-new-wasabi-remote-configuration.png" alt="add new wasabi remote configuration" class="img-large img-center" />

### 2.4 Verifica el remoto de Wasabi

1. Abre **`Remote → Remote Manager`**.  
2. Confirma que tu remoto de Wasabi (por ejemplo, `MyWasabi`) aparece en la lista y es accesible.

<img src="/support/images/en/tutorials/verify-wasabi-in-remote-manager.png" alt="verify wasabi in remote manager" class="img-large img-center" />

Para más detalles, consulta la guía general de compatibilidad con S3:  
- [How to Add S3-Compatible Remote](/howto/remote-storage-connection-settings/s3)

---

## 3. Explora carpetas en Wasabi

Una vez creado el remoto, puedes explorar buckets y objetos dentro del Explorer de RcloneView.

1. En el panel Explorer, haz clic en la pestaña **`+`**.  
2. En la lista "Open Remote", elige tu remoto de **Wasabi** (por ejemplo, `MyWasabi`).  
3. RcloneView abre el remoto en una pestaña donde los buckets aparecen como carpetas de nivel superior.  
4. Haz doble clic en un bucket para explorar su contenido.

<img src="/support/images/en/tutorials/wasabi-remote-in-rcloneview-explorer.png" alt="wasabi remote in rcloneview explorer" class="img-large img-center" />

Para consejos de navegación más generales, consulta:  
- [File Management with RcloneView](/howto/rcloneview-basic/browse-and-manage-remote-storage)

---

## 4. Gestiona archivos entre el disco local y Wasabi

Esta sección muestra formas prácticas de mover datos entre tu computadora local y Wasabi usando RcloneView.

Puedes abrir:

- **Panel izquierdo**: disco local (por ejemplo, `C:\` o una carpeta específica)  
- **Panel derecho**: tu bucket remoto de Wasabi  

Luego usa arrastrar y soltar, comparación de carpetas o trabajos de sincronización según tu flujo de trabajo.

---

### 4.1 Arrastrar y soltar entre local y Wasabi

Arrastrar y soltar es la forma más sencilla de copiar archivos.

1. En el panel izquierdo, abre tu **carpeta local** (por ejemplo, `D:\Media`).  
2. En el panel derecho, abre tu **bucket/carpeta de Wasabi**.  
3. Selecciona archivos o carpetas en el panel izquierdo.  
4. Arrástralos al panel derecho y suéltalos en la ubicación deseada.  
5. RcloneView inicia un trabajo de transferencia; el progreso aparece en la pestaña **Transfer**.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="wasabi drag and drop" class="img-large img-center" />
Para selección múltiple, acciones con clic derecho y más, consulta:  
- [File Management with RcloneView](/howto/rcloneview-basic/browse-and-manage-remote-storage)

---

### 4.2 Comparar carpetas y copiar archivos modificados

Si quieres ver las **diferencias** antes de copiar, usa la función **Compare**.

Caso de uso típico: comparar una carpeta de copia de seguridad local con una carpeta de copia de seguridad en Wasabi.

1. En el panel izquierdo, abre la **carpeta de origen** (por ejemplo, local u otra nube).  
2. En el panel derecho, abre la **carpeta de destino de Wasabi**.  
3. Haz clic en **`Compare`** en el menú superior **Home**.  
4. RcloneView marca:
   - Archivos que solo están a la izquierda (solo en el origen)  
   - Archivos que solo están a la derecha (solo en el destino)  
   - Archivos modificados (difieren en tamaño, marca de tiempo o checksum)  
5. Selecciona los elementos que deseas mover y haz clic en **Copy →** (o **← Copy** para la dirección inversa).

<img src="/support/images/en/tutorials/wasabi-and-local-compare-and-copy.png" alt="wasabi and local compare and copy" class="img-large img-center" />
Más información:  
- [Compare Folder Contents](/howto/rcloneview-basic/compare-folder-contents)

---

### 4.3 Trabajos de sincronización entre el disco local y Wasabi

Para copias de seguridad repetibles o duplicación (mirroring), usa **Sync**. La sincronización hace que el destino coincida con el origen.

Hay tres patrones comunes:

- **Instant Sync** (se ejecuta una vez, de inmediato)  
- **Saved Sync Job** (se vuelve a ejecutar cuando sea necesario)  
- **Scheduled Sync Job** (se ejecuta automáticamente según una programación)  

> ⚠️ La sincronización actualiza el destino para que coincida con el origen; los archivos que solo existen en el destino pueden eliminarse. Revisa cuidadosamente la configuración de sincronización antes de ejecutarla.

#### 4.3.1 Instant Sync (una sola vez)

1. Abre la **carpeta de origen** en el panel izquierdo (por ejemplo, una carpeta local).  
2. Abre la **carpeta de destino de Wasabi** en el panel derecho.  
3. Haz clic en **`Sync`** en el menú **Home**.  

<img src="/support/images/en/tutorials/wasabi-and-local-instant-sync.png" alt="wasabi and local instant sync" class="img-large img-center" />

Luego, en el cuadro de diálogo **Sync**:

1. En **Configure Storage**, confirma el origen y el destino.  
2. Opcionalmente, ajusta **Advanced Settings** o **Filtering Settings**.  
3. Ejecuta primero una **Dry Run** si quieres previsualizar los cambios.  
4. Haz clic en **Run** para iniciar la sincronización.

<img src="/support/images/en/tutorials/wasabi-configure-sync-job.png" alt="wasabi configure sync job" class="img-large img-center" />
Después de ejecutar Sync, puedes monitorear el progreso de la transferencia de archivos en tiempo real.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="wasabi real time monitoring transferring" class="img-large img-center" />

Referencia:  
- [Synchronize Remote Storages Instantly](/howto/rcloneview-basic/synchronize-remote-storages)

#### 4.3.2 Guarda un trabajo de sincronización para reutilizarlo

Si vas a ejecutar la misma copia de seguridad local → Wasabi de forma regular:  
Configura una sincronización como se indicó arriba (origen a la izquierda, destino de Wasabi a la derecha).    

1. En el cuadro de diálogo Sync, elige **Save to Jobs** en lugar de ejecutar de inmediato.  
2. Dale al trabajo un nombre descriptivo como `SyncLocalToWasabi`.  
3. Más tarde, abre **Job Manager** y ejecuta el trabajo manualmente cuando necesites una copia de seguridad actualizada.

<img src="/support/images/en/tutorials/wasabi-saved-sync-job-execution.png" alt="wasabi saved sync job execution" class="img-large img-right" />  
En las plataformas compatibles (como Windows), RcloneView puede mostrar una notificación del sistema cuando el trabajo finaliza.

Referencia:  
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)  
- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)

#### 4.3.3 Programa copias de seguridad automáticas en Wasabi (Job Scheduling)

Para automatizar completamente las copias de seguridad en Wasabi, programa tu trabajo de sincronización.

> 📌 **La programación de trabajos es una función PLUS.** Necesitas una [licencia PLUS](https://rcloneview.com/src/pricing.html) para habilitar la programación.

Abre **Job Manager** desde la barra de herramientas.    
1. Selecciona tu trabajo de sincronización de Wasabi (por ejemplo, `LocalToWasabi_DailyBackup`) y haz clic en **Edit Job**, o crea un nuevo trabajo a partir de tu selección actual en el Explorer.  
2. Ve a **Step 4: Scheduling**.  
3. Activa **Run whenever time units ~** y establece la programación (por ejemplo, diariamente a la 01:00).  
4. Usa **Simulate** para previsualizar las próximas ejecuciones.  
5. Guarda el trabajo y mantén RcloneView en ejecución; el trabajo se ejecutará automáticamente.

<img src="/support/images/en/tutorials/scheule-automatic-wasabi-backup.png" alt="scheule automatic wasabi backup" class="img-large img-center" />


Para más detalles:  
- [Job Scheduling and Automated Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

---

### 4.4 Usa Mount para trabajar con Wasabi en el Explorador de Windows

Puedes montar un bucket de Wasabi como una **unidad o carpeta virtual** en tu sistema y luego usar el Explorador de Windows (o Finder en macOS) como de costumbre.

Flujo típico:

Asegúrate de que tu remoto de Wasabi esté configurado y funcionando.  
1. Elige la carpeta de Wasabi que deseas montar.  
2. Haz clic en el icono **Mount** en la esquina superior derecha del Explorer de RcloneView.  
3. Haz clic en el botón **Save and mount** para iniciar el montaje.  
4. Después de unos instantes, aparece una nueva unidad o carpeta en tu sistema operativo. Explorar esa ruta lee y escribe datos directamente en Wasabi a través de RcloneView/rclone.

<img src="/support/images/en/tutorials/mount-wasabi-as-local-drive.png" alt="mount wasabi as local drive" class="img-large img-center" />
Más información:  
- [Mount Cloud Storage as a Local Drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

---

## 5. Dónde obtener ayuda

- Documentación y guías prácticas de RcloneView: [https://rcloneview.com/support](https://rcloneview.com/support)  
- Portal de documentación de Wasabi: [https://docs.wasabi.com](https://docs.wasabi.com)  

Al combinar el almacenamiento de objetos compatible con S3 de Wasabi con la gestión visual de trabajos de RcloneView, puedes crear flujos de trabajo confiables de copia de seguridad, sincronización y migración sin necesidad de aprender la sintaxis de línea de comandos de rclone.
