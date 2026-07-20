---
slug: manage-hetzner-object-storage-cloud-sync-rcloneview
title: "Gestiona Hetzner Object Storage — Sincronización y copia de seguridad de archivos con RcloneView"
authors:
  - kai
description: "Aprende a conectar Hetzner Object Storage a RcloneView para sincronización y copia de seguridad automatizadas. Gestiona buckets compatibles con S3 con una GUI sencilla, sin necesidad de usar la CLI."
keywords:
  - Hetzner Object Storage
  - copia de seguridad en la nube Hetzner
  - RcloneView Hetzner
  - almacenamiento en la nube compatible con S3
  - sincronización de archivos Hetzner
  - GUI de copia de seguridad en la nube
  - Hetzner rclone
  - copia de seguridad de object storage
  - almacenamiento en la nube europeo
  - gestión de buckets de Hetzner
tags:
  - RcloneView
  - hetzner
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona Hetzner Object Storage — Sincronización y copia de seguridad de archivos con RcloneView

> Conecta Hetzner Object Storage a RcloneView y automatiza tus trabajos de copia de seguridad sin escribir un solo comando de CLI.

Hetzner Object Storage es un servicio de almacenamiento en la nube compatible con S3 que ofrece precios competitivos para equipos que necesitan un almacenamiento de datos fiable y con sede en Europa. Ya sea que estés archivando archivos de proyectos, respaldando instantáneas de servidores o replicando datos desde otra nube, RcloneView te ofrece una interfaz visual para gestionarlo todo. Configuras Hetzner de la misma forma que cualquier otro proveedor compatible con S3 — con una clave de acceso, una clave secreta y el endpoint de tu bucket — y luego gestionas todo a través del mismo explorador de archivos de doble panel que usas para cualquier otro remoto.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Hetzner Object Storage a RcloneView

Hetzner Object Storage utiliza el protocolo S3, por lo que la configuración en RcloneView sigue el mismo patrón que Amazon S3 o Wasabi. Abre la pestaña **Remote** y haz clic en **New Remote**. En la lista de proveedores, selecciona **S3** y elige **Hetzner** como proveedor. Necesitarás tres datos de la consola de Hetzner Cloud: tu **Access Key ID**, tu **Secret Access Key** y la **URL de endpoint** de la región elegida — por ejemplo, `fsn1.your-objectstorage.com` para la región de Falkenstein.

Una vez que hayas introducido tus credenciales y el endpoint de la región, haz clic en **Save**. RcloneView establece la conexión y tus buckets de Hetzner aparecen inmediatamente como carpetas navegables en el explorador de archivos.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Hetzner Object Storage remote in RcloneView" class="img-large img-center" />

Tras conectarte, puedes explorar buckets, subir archivos arrastrándolos y soltándolos, descargar objetos, renombrar elementos, eliminar archivos y crear nuevas carpetas — todo sin tocar una terminal. La barra de ruta de migas de pan muestra tu posición actual dentro de la jerarquía del bucket, y el pie de página resume el número total de archivos y el tamaño de cualquier directorio seleccionado.

## Subir y organizar archivos

El explorador de doble panel de RcloneView facilita el traslado de datos entre Hetzner Object Storage y tu equipo local u otra nube. Abre tu disco local en el panel izquierdo y tu remoto de Hetzner en el panel derecho, y luego arrastra los archivos de un lado a otro. Para subidas desde el Explorador de Windows, puedes arrastrar archivos directamente al panel de RcloneView y estos llegan a tu bucket de Hetzner en un solo paso.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files to Hetzner Object Storage in RcloneView" class="img-large img-center" />

Para conjuntos de datos grandes — por ejemplo, una productora audiovisual que respalda 500 GB de material renderizado — la configuración de **transferencia multihilo** en el asistente de sincronización te permite enviar más datos en paralelo. El valor predeterminado de 4 flujos simultáneos funciona bien para la mayoría de las conexiones, pero aumentarlo para archivos grandes en enlaces de alto ancho de banda puede reducir considerablemente el tiempo de transferencia.

## Ejecutar trabajos de sincronización y copia de seguridad

Para flujos de trabajo de copia de seguridad continuos, el **Job Manager** de RcloneView te ofrece una lista persistente de trabajos de sincronización configurados que puedes ejecutar bajo demanda o según una programación. Ábrelo desde la pestaña **Home** y haz clic en **Add Job** para iniciar el asistente de sincronización de 4 pasos:

1. **Paso 1:** Define tu origen (una carpeta local u otro remoto) y tu destino (tu bucket de Hetzner o un subdirectorio dentro de él), y luego nombra el trabajo
2. **Paso 2:** Configura los ajustes de concurrencia — número de transferencias de archivos, número de hilos y si se debe habilitar la verificación de checksum para comprobaciones de integridad
3. **Paso 3:** Añade reglas de filtrado para excluir tipos de archivo o rutas que no quieras en Hetzner, como archivos `.tmp` o directorios `/cache/`
4. **Paso 4 (licencia PLUS):** Define una programación de tipo crontab para que la copia de seguridad se ejecute automáticamente a un intervalo definido

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Hetzner Object Storage in RcloneView" class="img-large img-center" />

Antes de confirmar un trabajo nuevo, usa la opción **Dry Run** para previsualizar exactamente qué archivos se copiarían o eliminarían. Esto resulta especialmente útil la primera vez que configuras una sincronización, o siempre que modifiques las reglas de filtrado, para asegurarte de que nada importante quede excluido.

## Revisar el historial de transferencias

Una vez que los trabajos se ejecutan, la vista **Job History** registra cada ejecución: hora de inicio, duración, tamaño total transferido, velocidad promedio, número de archivos y estado final. Para equipos que ejecutan copias de seguridad nocturnas a Hetzner Object Storage, este registro proporciona un rastro de auditoría claro que muestra qué ejecuciones se completaron correctamente y cuáles encontraron errores — útil tanto para la resolución de problemas como para demostrar el cumplimiento de las políticas de retención de datos.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Hetzner Object Storage sync in RcloneView" class="img-large img-center" />

Los filtros del historial te permiten acotar los resultados por rango de fechas (hoy, ayer, la semana pasada, el mes pasado), de modo que puedas obtener rápidamente el registro de una ventana de copia de seguridad específica sin desplazarte por todo el historial.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ve a **Remote tab > New Remote**, selecciona **S3** y elige **Hetzner** como proveedor.
3. Introduce tu Access Key ID de Hetzner, tu Secret Access Key y el endpoint de la región desde la consola de Hetzner Cloud.
4. Abre el **Job Manager**, crea un trabajo de sincronización con tu bucket de Hetzner como destino y haz clic en **Run Job**.

Con Hetzner Object Storage conectado, obtienes un almacenamiento de objetos fiable con sede en Europa, gestionado íntegramente desde una GUI limpia — sin necesidad de comandos de rclone.

---

**Guías relacionadas:**

- [Gestiona Hetzner Storage Box — Sincronización y copia de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-hetzner-storage-box-sync-rcloneview)
- [Gestiona Wasabi Cloud Storage — Sincronización y copia de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Gestiona Cloudflare R2 — Sincronización en la nube con RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)

<CloudSupportGrid />
