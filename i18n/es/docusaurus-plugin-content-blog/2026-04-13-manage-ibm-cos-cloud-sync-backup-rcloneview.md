---
slug: manage-ibm-cos-cloud-sync-backup-rcloneview
title: "Gestiona IBM Cloud Object Storage — Sincroniza y respalda archivos con RcloneView"
authors:
  - tayson
description: "Conecta IBM Cloud Object Storage a RcloneView y sincroniza o realiza copias de seguridad de tus buckets junto con otras nubes. Gestión de almacenamiento compatible con S3 basada en GUI para IBM COS."
keywords:
  - IBM Cloud Object Storage
  - sincronización de IBM COS
  - copia de seguridad de IBM COS
  - IBM COS RcloneView
  - almacenamiento de objetos compatible con S3
  - gestión de almacenamiento en la nube de IBM
  - IBM COS a Google Drive
  - IBM COS a S3
  - GUI de almacenamiento en la nube
  - sincronización de almacenamiento de objetos
tags:
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona IBM Cloud Object Storage — Sincroniza y respalda archivos con RcloneView

> Agrega IBM Cloud Object Storage (IBM COS) como remoto en RcloneView y gestiona tus buckets junto con Amazon S3, Google Drive, Cloudflare R2 y más de 90 servicios adicionales.

IBM Cloud Object Storage es un servicio de almacenamiento de objetos compatible con S3, ampliamente utilizado en entornos empresariales para almacenar grandes volúmenes de datos no estructurados: artefactos de aplicaciones, conjuntos de datos analíticos, copias de seguridad de bases de datos y registros archivados. RcloneView, un cliente GUI creado sobre rclone, es compatible con IBM COS a través de la API compatible con S3, lo que te permite explorar buckets, sincronizar datos y migrar contenido sin escribir un solo comando.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar IBM COS a RcloneView

IBM Cloud Object Storage utiliza la API compatible con S3, por lo que la configuración de la conexión en RcloneView sigue el mismo patrón que otros proveedores compatibles con S3. Necesitarás tu Access Key ID de IBM COS, tu Secret Access Key y la URL de endpoint de la región de tu bucket. Los endpoints de IBM COS siguen el formato `s3.<region>.cloud-object-storage.appdomain.cloud`; puedes encontrar el endpoint exacto en tu consola de IBM Cloud, dentro de la configuración de tu bucket.

En RcloneView, ve a la pestaña Remote y haz clic en New Remote. Selecciona Amazon S3 (que cubre todos los proveedores compatibles con S3) y elige la opción de endpoint personalizado. Ingresa tus credenciales de IBM COS y la URL del endpoint. Una vez guardado, tus buckets de IBM COS aparecerán en el File Explorer, donde podrás explorar objetos, ver tamaños y fechas de modificación, y realizar operaciones con archivos.

<img src="/support/images/en/blog/new-remote.png" alt="Adding IBM Cloud Object Storage as a remote in RcloneView" class="img-large img-center" />

## Sincronizar IBM COS con otros almacenamientos en la nube

Un flujo de trabajo común entre los usuarios de IBM COS es replicar buckets críticos hacia un proveedor secundario para lograr redundancia. Con RcloneView, puedes sincronizar buckets de IBM COS directamente con Amazon S3, Cloudflare R2, Google Drive o cualquier otro remoto conectado, sin necesidad de una descarga intermedia.

Usa el asistente de sincronización para seleccionar tu bucket de IBM COS como origen y tu proveedor de destino como destino. El paso de Advanced Settings te permite ajustar la cantidad de transferencias concurrentes y la verificación de checksum. Habilitar la comparación de checksum garantiza la integridad de los objetos durante los movimientos entre proveedores, algo especialmente valioso para archivos binarios grandes como volcados de bases de datos o archivos multimedia.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing IBM COS bucket to another cloud provider with RcloneView" class="img-large img-center" />

La sincronización programada (licencia PLUS) permite que las copias de seguridad de IBM COS se ejecuten según un horario tipo crontab. El historial de trabajos (Job History) muestra la hora de inicio, la duración, el total de datos transferidos y el estado de finalización de cada ejecución, ofreciéndote un registro de auditoría completo de tus trabajos de replicación.

## Usar Folder Compare para auditorías de buckets

Antes de migrar datos fuera de IBM COS, utiliza la función Folder Compare de RcloneView para auditar las diferencias entre tu bucket de IBM COS y el almacenamiento de destino. La comparación muestra archivos exclusivos de la izquierda, archivos exclusivos de la derecha, diferencias de tamaño y objetos idénticos, dándote una imagen clara de lo que realmente hará la sincronización.

Este enfoque de comparar primero es útil al consolidar almacenamiento de objetos entre proveedores: compara IBM COS con tu bucket de destino, revisa las diferencias y luego ejecuta la sincronización con confianza. El modo Dry Run ofrece una capa adicional de seguridad al simular la sincronización y enumerar todas las operaciones planificadas sin realizar cambios.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing IBM COS bucket contents with another storage in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Crea credenciales HMAC de IBM COS (Access Key ID + Secret Access Key) en tu consola de IBM Cloud.
3. En RcloneView, agrega un nuevo remoto compatible con S3 con la URL de endpoint de tu IBM COS.
4. Crea un trabajo de sincronización para replicar tus buckets a un destino de copia de seguridad en un horario regular.

Los datos de IBM COS se vuelven mucho más manejables cuando puedes visualizar buckets, comparar contenidos y activar sincronizaciones desde una GUI, sin necesidad de memorizar URLs de endpoint ni indicadores de comandos.

---

**Guías relacionadas:**

- [Centraliza el almacenamiento de S3, Wasabi y Cloudflare R2 con RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)
- [Gestiona la sincronización en la nube de Cloudflare R2 con RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Gestiona buckets de Google Cloud Storage con RcloneView](https://rcloneview.com/support/blog/manage-google-cloud-storage-buckets-rcloneview)

<CloudSupportGrid />
