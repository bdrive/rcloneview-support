---
slug: fix-cloud-sync-timestamp-mismatch-rcloneview
title: "Solucionar errores de discrepancia de marca de tiempo en la sincronización en la nube con RcloneView"
authors:
  - tayson
description: "Resuelve errores de discrepancia de marca de tiempo durante la sincronización en la nube en RcloneView. Cubre el desfase de reloj, las diferencias de zona horaria, las limitaciones de metadatos del proveedor, la comparación por checksum y flags como --use-server-modtime y --no-update-modtime."
keywords:
  - rclone timestamp mismatch
  - cloud sync time error
  - rclone modification time wrong
  - rclone use server modtime
  - rclone no update modtime
  - cloud sync checksum comparison
  - rclone timezone issue
  - rclone clock skew fix
  - cloud provider timestamp support
  - rcloneview sync mismatch fix
tags:
  - RcloneView
  - troubleshooting
  - cloud-sync
  - guide
  - tips
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de discrepancia de marca de tiempo en la sincronización en la nube con RcloneView

> Las discrepancias de marca de tiempo hacen que rclone vuelva a transferir archivos que no han cambiado, desperdiciando ancho de banda y tiempo. Esta guía explica por qué ocurren y cómo configurar RcloneView para gestionarlas correctamente.

Cuando rclone sincroniza archivos entre dos ubicaciones, compara las marcas de tiempo de modificación para decidir qué archivos necesitan actualizarse. Si el origen y el destino reportan marcas de tiempo diferentes para el mismo archivo — incluso por un solo segundo — rclone trata el archivo como modificado y lo transfiere de nuevo. Esto provoca transferencias innecesarias, costos de ancho de banda inflados y trabajos de sincronización que nunca parecen completarse limpiamente. El problema es especialmente común al sincronizar entre diferentes proveedores en la nube, o entre almacenamiento local y remotos en la nube que gestionan las marcas de tiempo de forma diferente.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué ocurren las discrepancias de marca de tiempo

Las marcas de tiempo parecen simples — un archivo se modificó en un momento determinado — pero la realidad en los distintos proveedores en la nube es mucho más compleja. Varios factores pueden hacer que el mismo archivo reporte tiempos de modificación diferentes en el origen y el destino.

### Desfase de reloj entre proveedores

Cada proveedor en la nube mantiene sus propios relojes internos. Aunque la mayoría están sincronizados con precisión de milisegundos mediante NTP, la marca de tiempo que almacenan para un archivo puede establecerse en distintos momentos del proceso de subida. Un proveedor puede registrar el momento en que comenzó la subida, otro el momento en que terminó. Para archivos grandes, esta diferencia puede ser de varios segundos o más.

### Diferencias de zona horaria y precisión

Algunos proveedores almacenan las marcas de tiempo en UTC, otros en la zona horaria local del usuario, y algunos truncan la precisión. Por ejemplo:

- **Google Drive** almacena los tiempos de modificación con precisión de milisegundos y permite establecer tiempos de modificación personalizados.
- **OneDrive** admite tiempo de modificación con precisión de segundos.
- **Amazon S3** no admite de forma nativa los tiempos de modificación en los metadatos del objeto; en su lugar, registra el tiempo de subida como el encabezado de última modificación.
- **Dropbox** conserva los tiempos de modificación establecidos por el cliente, pero solo con precisión de segundos.
- **SFTP** depende del sistema de archivos remoto, que puede tener precisión de segundos o microsegundos.

Cuando sincronizas desde un proveedor con precisión de milisegundos hacia uno con precisión de segundos, el redondeo provoca una discrepancia constante de 1 segundo (o inferior).

### Tiempo de modificación no compatible

Algunos backends de almacenamiento en la nube simplemente no admiten la conservación de los tiempos de modificación:

- **El almacenamiento compatible con S3** (AWS S3, Wasabi, Backblaze B2 en modo S3, Cloudflare R2) almacena el tiempo de subida, no el tiempo de modificación original del archivo. Rclone soluciona esto almacenando el tiempo de modificación original en los metadatos del objeto (X-Amz-Meta-Mtime), pero esto solo funciona si rclone estableció los metadatos durante la subida inicial.
- Los archivos subidos a través de la interfaz web del proveedor u otras herramientas no tendrán estos metadatos, lo que provoca discrepancias en sincronizaciones posteriores.

### Metadatos no conservados durante la transferencia

Si los archivos se subieron originalmente al destino mediante una herramienta distinta de rclone, o si los encabezados de metadatos fueron eliminados por un proxy o CDN, rclone no puede encontrar los metadatos esperados del tiempo de modificación. Entonces recurre al tiempo de última modificación del proveedor, que diferirá del origen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folder contents" class="img-large img-center" />

## Diagnosticar el problema

Antes de aplicar soluciones, confirma que las marcas de tiempo son realmente el problema. Ejecuta una sincronización de prueba (dry-run) en RcloneView o desde la terminal:

```bash
rclone sync source: dest: --dry-run -v
```

Observa la salida. Si ves líneas como:

```
NOTICE: file.txt: Skipped copy (src older)
```

o archivos marcados para transferencia a pesar de tener contenido idéntico, es probable que las marcas de tiempo sean la causa. También puedes comparar archivos específicos:

```bash
rclone lsl source:path/to/file.txt
rclone lsl dest:path/to/file.txt
```

El comando `lsl` muestra el tamaño del archivo, el tiempo de modificación y la ruta. Compara las marcas de tiempo: si los tamaños coinciden pero los tiempos difieren por unos segundos o muestran zonas horarias distintas, tienes una discrepancia de marca de tiempo.

En RcloneView, usa la función **Comparar carpetas** para inspeccionar visualmente las diferencias. La vista de comparación resalta los archivos que difieren por tamaño, marca de tiempo o checksum, lo que facilita identificar discrepancias exclusivamente de marca de tiempo.

## Usar --use-server-modtime

El flag `--use-server-modtime` indica a rclone que use el tiempo de modificación reportado por el servidor en lugar de cualquier tiempo almacenado en los metadatos. Esto es útil cuando:

- Quieres un comportamiento consistente sin importar cómo se subieron originalmente los archivos.
- Los tiempos de modificación en los metadatos no son confiables o faltan.
- Estás sincronizando entre dos ubicaciones donde los archivos fueron subidos por herramientas diferentes.

```bash
rclone sync source: dest: --use-server-modtime
```

En RcloneView, puedes añadir este flag en la configuración del trabajo, en opciones avanzadas o flags personalizados.

**Cuándo usarlo:** Al sincronizar desde un backend compatible con S3 donde los archivos fueron subidos por herramientas distintas de rclone, o cuando los encabezados de metadatos son inconsistentes.

**Compromiso:** Los tiempos de modificación del servidor reflejan el tiempo de subida, no el tiempo de modificación original del archivo. Esto significa que rclone no puede detectar si un archivo fue modificado antes de volver a subirlo; solo ve la marca de tiempo de la subida.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## Usar --no-update-modtime

El flag `--no-update-modtime` evita que rclone establezca el tiempo de modificación en el destino después de copiar un archivo. Por defecto, rclone copia un archivo y luego establece el tiempo de modificación del destino para que coincida con el del origen. Si el destino no admite establecer tiempos de modificación (o los redondea), esto crea una discrepancia persistente en la siguiente sincronización.

```bash
rclone sync source: dest: --no-update-modtime
```

**Cuándo usarlo:** Cuando el proveedor de destino no admite establecer tiempos de modificación, o cuando el acto de establecer el tiempo introduce errores de redondeo que provocan retransferencias innecesarias.

**Compromiso:** Sin tiempos de modificación coincidentes, rclone debe usar otro método (como checksums) para detectar cambios en sincronizaciones posteriores.

## Cambiar a comparación basada en checksum

Si las marcas de tiempo son fundamentalmente poco confiables entre tu origen y destino, puedes indicar a rclone que compare los archivos por checksum en lugar de por tiempo de modificación. Esta es la forma más confiable de determinar si un archivo realmente ha cambiado.

```bash
rclone sync source: dest: --checksum
```

El flag `--checksum` hace que rclone calcule u obtenga hashes (MD5, SHA-1 u otros algoritmos admitidos) para los archivos en ambos lados y solo transfiera los archivos cuyo hash difiera.

**Ventajas:**

- Ignora por completo las marcas de tiempo: se acabaron los falsos positivos por desfase de reloj o diferencias de precisión.
- Detecta cambios reales de contenido, no solo diferencias de metadatos.
- Funciona de forma confiable en todos los proveedores.

**Desventajas:**

- Más lento para conjuntos de archivos grandes porque rclone debe calcular u obtener checksums para cada archivo.
- Algunos proveedores no devuelven checksums para todos los archivos (por ejemplo, los objetos de S3 subidos en modo multiparte tienen ETags compuestos que no son hashes MD5 estándar).
- Aumenta las llamadas a la API, lo que puede contar contra los límites de tasa o generar costos.

En RcloneView, activa la comparación por checksum en la configuración del trabajo de sincronización. Para conjuntos de datos grandes, considera ejecutar sincronizaciones por checksum de forma programada (por ejemplo, semanalmente) y usar sincronizaciones basadas en marca de tiempo para las copias de seguridad incrementales diarias.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## Cómo gestionan los distintos proveedores las marcas de tiempo

Entender el comportamiento de cada proveedor respecto a las marcas de tiempo te ayuda a elegir la estrategia de sincronización correcta.

| Proveedor | Soporte de Modtime | Precisión | Notas |
|---|---|---|---|
| Google Drive | Completo | Milisegundo | Permite establecer modtime personalizado mediante API |
| OneDrive | Completo | Segundo | Admite establecer modtime |
| Dropbox | Completo | Segundo | Se conserva el modtime establecido por el cliente |
| Amazon S3 | Solo metadatos | Segundo | Rclone almacena el modtime en X-Amz-Meta-Mtime |
| Backblaze B2 | Solo metadatos | Milisegundo | Almacenado en encabezados de información del archivo |
| Wasabi | Solo metadatos | Segundo | Compatible con S3, usa X-Amz-Meta-Mtime |
| Cloudflare R2 | Solo metadatos | Segundo | Compatible con S3, basado en metadatos |
| SFTP | Depende del FS | Variable | Depende del sistema de archivos remoto |
| Azure Blob | Solo metadatos | Segundo | Rclone usa encabezados de metadatos |
| Google Cloud Storage | Solo metadatos | Segundo | Metadatos personalizados para modtime |

Al sincronizar entre dos proveedores con soporte "Completo" de modtime (por ejemplo, Google Drive a OneDrive), la comparación basada en marca de tiempo funciona de forma confiable. Al sincronizar entre un proveedor "Completo" y uno "Solo metadatos", las discrepancias son comunes a menos que los archivos hayan sido subidos originalmente por rclone.

## Combinar flags para obtener mejores resultados

Para la mayoría de los escenarios de sincronización entre proveedores, una combinación de flags ofrece los mejores resultados:

**Para sincronizaciones S3-a-S3 o S3-a-nube donde los archivos fueron subidos por otras herramientas:**

```bash
rclone sync source: dest: --checksum --no-update-modtime
```

**Para Google Drive a OneDrive (ambos admiten modtime):**

```bash
rclone sync gdrive: onedrive: --modify-window 1s
```

El flag `--modify-window` añade tolerancia a las comparaciones de marca de tiempo. Establecerlo en `1s` significa que los archivos con marcas de tiempo dentro de un segundo entre sí se consideran idénticos. Esto gestiona el redondeo debido a diferencias de precisión.

**Para sincronización incremental diaria con verificación completa ocasional:**

```bash
# Diaria (rápida, basada en marca de tiempo con tolerancia)
rclone sync source: dest: --modify-window 2s

# Semanal (exhaustiva, basada en checksum)
rclone sync source: dest: --checksum
```

En RcloneView, puedes crear dos trabajos de sincronización separados — uno para ejecuciones diarias con `--modify-window` y otro para ejecuciones semanales con `--checksum` — y programarlos de forma independiente.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## Prevenir problemas de marca de tiempo en configuraciones nuevas

Si estás configurando un nuevo flujo de trabajo de sincronización, puedes evitar la mayoría de los problemas de marca de tiempo desde el principio:

1. **Usa rclone para todas las transferencias** — rclone establece los metadatos de forma consistente, por lo que los archivos subidos por rclone tendrán los metadatos de tiempo de modificación correctos en todas partes.
2. **Establece --modify-window adecuadamente** para tu par de proveedores desde la primera sincronización.
3. **Usa el modo checksum para migraciones iniciales** — al mover un conjunto de datos grande a un nuevo proveedor por primera vez, usa `--checksum` para asegurar una línea base limpia.
4. **Prueba primero con una carpeta pequeña** — sincroniza un puñado de archivos, verifica si hay discrepancias y luego escala.
5. **Documenta tus flags** — cuando encuentres la combinación correcta para tus proveedores, guárdala como un trabajo de RcloneView para no tener que volver a descubrirla más tarde.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Añade tus remotos de origen y destino** en el Gestor de remotos.
3. **Usa Comparar carpetas** para inspeccionar las diferencias antes de sincronizar.
4. **Configura los flags de sincronización** (`--checksum`, `--modify-window`, `--no-update-modtime`) según tu par de proveedores.
5. **Crea un trabajo de sincronización programado** y monitorea los resultados en el Historial de trabajos.

Las discrepancias de marca de tiempo son una de las causas más comunes de sincronizaciones en la nube ineficientes. Con los flags correctos y una comprensión de cómo cada proveedor gestiona los tiempos de modificación, puedes eliminar transferencias innecesarias y mantener tus trabajos de sincronización limpios.

---

**Guías relacionadas:**

- [Comparar el contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Sincronizar almacenamientos remotos](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)
- [Monitoreo de transferencias en tiempo real](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
