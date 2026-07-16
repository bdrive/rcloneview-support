---
slug: manage-qiniu-cloud-storage-sync-rcloneview
title: "Gestiona el almacenamiento de objetos Qiniu Cloud — Sincroniza y haz copias de seguridad de archivos con RcloneView"
authors:
  - kai
description: "Conecta el almacenamiento de objetos Kodo de Qiniu Cloud a RcloneView y sincroniza, respalda o transfiere archivos entre más de 90 proveedores en la nube desde una sola interfaz gráfica en Windows, macOS y Linux."
keywords:
  - Qiniu Cloud storage sync
  - Kodo object storage GUI
  - RcloneView Qiniu setup
  - Qiniu S3 compatible rclone
  - sync files to Qiniu Cloud
  - Qiniu backup client Windows
  - Qiniu cloud storage manager
  - transfer files Qiniu RcloneView
  - Qiniu Kodo S3 desktop client
  - manage Qiniu buckets GUI
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el almacenamiento de objetos Qiniu Cloud — Sincroniza y haz copias de seguridad de archivos con RcloneView

> Conecta el almacenamiento de objetos Kodo de Qiniu Cloud a la interfaz de doble panel de RcloneView y gestiona cargas, copias de seguridad y transferencias entre nubes sin tocar una CLI.

Qiniu Cloud (七牛云) es uno de los principales proveedores de infraestructura en la nube de China, y su servicio de almacenamiento de objetos Kodo se utiliza ampliamente para la entrega de contenido multimedia, la gestión de recursos de aplicaciones y el archivado de datos a gran escala. Dado que Kodo implementa una API compatible con S3, RcloneView se conecta a él usando el mismo flujo de trabajo que con Amazon S3, Wasabi o Cloudflare R2, sin necesidad de complementos especiales. A diferencia de las herramientas de solo montaje, RcloneView también sincroniza y compara carpetas con Kodo y más de 90 proveedores adicionales en la licencia GRATUITA, lo que lo convierte en una herramienta única y práctica para equipos con entornos de nube mixtos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurar Qiniu Kodo como remoto S3 en RcloneView

Para agregar Qiniu Kodo, abre la pestaña **Remote** y haz clic en **New Remote**. Selecciona el protocolo S3 de la lista de proveedores y luego elige **Qiniu** como proveedor S3. Necesitarás tres credenciales de tu consola de Qiniu Cloud: tu **Access Key**, tu **Secret Key** y el **endpoint regional** de la zona del bucket. Una vez introducidos, RcloneView guarda la configuración en tu archivo de configuración local de rclone y el remoto aparece de inmediato en el panel del explorador.

No es necesaria una instalación separada de rclone: RcloneView incluye un binario de rclone integrado que gestiona toda la comunicación con la API. Si ya administras rclone de forma externa, puedes conectar RcloneView a esa instancia a través de Settings > Connect Manager.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Qiniu Cloud S3 remote in RcloneView" class="img-large img-center" />

Después de guardar, tus buckets de Kodo aparecen en la barra de pestañas del panel. Haz clic en cualquier bucket para explorar su contenido en la lista de archivos, con columnas que muestran nombre, tipo, fecha de modificación y tamaño.

## Explorar y gestionar buckets de Kodo

El diseño de doble panel de RcloneView te permite trabajar con Qiniu Kodo junto a cualquier otro remoto —una carpeta local, Google Drive, un bucket S3 corporativo— en la misma ventana. Arrastra archivos del panel local al panel de Kodo para subirlos, o en sentido inverso para descargarlos. Mover archivos entre dos remotos (o buckets) de Qiniu los copia directamente sin pasar por tu disco local.

Para trabajos masivos, usa Shift+Clic o Ctrl+Clic para seleccionar varios objetos y luego copiarlos, moverlos o eliminarlos en una sola acción. El modo de vista de miniaturas es útil al explorar buckets de Kodo con muchas imágenes. Antes de cualquier operación destructiva, el botón **Dry Run** muestra una vista previa exacta de los archivos que se verían afectados, una protección importante al limpiar recursos de producción.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files between local storage and Qiniu Kodo buckets in RcloneView" class="img-large img-center" />

## Sincronización y copias de seguridad de archivos con Qiniu Cloud

El asistente de sincronización de 4 pasos de RcloneView configura trabajos repetibles contra Kodo. En el **Paso 1**, selecciona Qiniu como origen o destino y empárejalo con otro remoto; por ejemplo, sincronizando una biblioteca multimedia local con un bucket de Kodo para distribución mediante CDN. En el **Paso 2**, ajusta el número de transferencias paralelas y activa la verificación de checksum para confirmar que cada objeto subido sea idéntico bit a bit a su origen. El **Paso 3** ofrece filtros por tipo de archivo, rangos de antigüedad y límites de tamaño para excluir archivos de caché o restringir las sincronizaciones a recursos modificados recientemente.

Con una licencia PLUS, el **Paso 4** desbloquea la programación tipo cron: configura una copia de seguridad nocturna desde un directorio de servidor de producción hacia Kodo y RcloneView la ejecutará automáticamente en segundo plano. La función de **sincronización 1:N** permite que un solo origen se replique simultáneamente en varios destinos, útil para distribuir el mismo conjunto de recursos a Qiniu Kodo y a un archivo S3 secundario en un solo trabajo.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Qiniu Cloud Kodo in RcloneView" class="img-large img-center" />

## Supervisión de transferencias e historial de trabajos

La pestaña **Transferring**, en la parte inferior de RcloneView, muestra el progreso en vivo de los trabajos activos con Kodo: nombre del archivo, bytes transferidos, velocidad actual y avance general. Para una carga inicial grande —por ejemplo, subir varios cientos de gigabytes de recursos de video a un bucket nuevo— esta vista de supervisión de transferencias en vivo elimina la necesidad de un panel de control independiente.

La pestaña **Job History** registra cada ejecución completada con hora de inicio, duración, tamaño total, velocidad de transferencia, número de archivos y estado. Filtra por rango de fechas o tipo de trabajo para auditar la actividad de sincronización durante semanas o meses.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Qiniu Cloud sync runs in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre la pestaña **Remote**, haz clic en **New Remote**, selecciona el protocolo S3 y elige **Qiniu** como proveedor.
3. Introduce tu **Access Key**, **Secret Key** y el endpoint regional desde tu consola de Qiniu Cloud.
4. Crea un trabajo de sincronización que apunte a tu bucket de Kodo y ejecútalo para respaldar archivos locales o transferir datos entre Qiniu y otra nube.

Con Qiniu Kodo conectado, RcloneView te da control total sobre tu almacenamiento de objetos en la nube china desde la misma interfaz que usas para cualquier otro proveedor.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de Amazon S3 — Sincroniza y haz copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Gestiona el almacenamiento de Cloudflare R2 — Sincronización en la nube con RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Gestiona el almacenamiento de Wasabi Cloud — Sincroniza y haz copias de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
