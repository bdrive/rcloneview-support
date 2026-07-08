---
slug: manage-tencent-cos-cloud-sync-rcloneview
title: "Gestiona el almacenamiento Tencent COS — Sincroniza y respalda archivos con RcloneView"
authors:
  - tayson
description: "Conecta Tencent Cloud Object Storage (COS) a RcloneView y gestiona archivos con una GUI. Sincroniza, respalda y transfiere datos de Tencent COS mediante una interfaz compatible con S3."
keywords:
  - gestión de Tencent COS
  - sincronización de Tencent COS con RcloneView
  - copia de seguridad de Tencent Cloud Object Storage
  - GUI de transferencia de archivos de Tencent COS
  - Tencent COS rclone
  - gestionar Tencent COS con RcloneView
  - GUI de almacenamiento en la nube de Tencent
  - gestión de almacenamiento compatible con S3
  - herramienta de copia de seguridad de Tencent COS
  - gestión de almacenamiento en la nube de China
tags:
  - RcloneView
  - tencent-cos
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el almacenamiento Tencent COS — Sincroniza y respalda archivos con RcloneView

> RcloneView se conecta a Tencent Cloud Object Storage mediante credenciales compatibles con S3, permitiéndote explorar, sincronizar y respaldar buckets de COS desde una GUI de escritorio visual.

Tencent Cloud Object Storage (COS) es una de las plataformas de almacenamiento de objetos más grandes de China, utilizada por empresas que ejecutan aplicaciones en la infraestructura de Tencent Cloud. Los equipos de ingeniería, las empresas de medios y los operadores de pipelines de datos que necesitan gestionar buckets de COS junto con otras nubes globales se benefician de la interfaz unificada de RcloneView, sin tener que cambiar entre paneles ni aprender CLIs específicas de cada plataforma.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta Tencent COS a RcloneView

Tencent COS admite la API compatible con S3, por lo que conectarlo a RcloneView utiliza el tipo de proveedor Amazon S3 con ajustes específicos de COS. En RcloneView, ve a la pestaña Remoto > Nuevo Remoto, selecciona Amazon S3 y completa:

- **Access Key ID** y **Secret Access Key** de tu consola de Tencent Cloud (credenciales CAM)
- **Región** que coincida con la región de tu bucket de COS (por ejemplo, `ap-guangzhou`)
- **Endpoint** configurado con tu endpoint de COS (por ejemplo, `cos.ap-guangzhou.myqcloud.com`)
- **Proveedor** configurado como Tencent COS en el menú desplegable de proveedores S3

Una vez guardado, tus buckets de COS aparecerán en el explorador de archivos. Puedes explorar, subir, descargar, renombrar, eliminar y organizar archivos igual que con cualquier otro remoto compatible con S3.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Tencent COS as an S3-compatible remote in RcloneView" class="img-large img-center" />

## Sincroniza datos entre Tencent COS y nubes globales

Un caso de uso muy potente es sincronizar datos entre Tencent COS (utilizado para servir contenido en China) y un proveedor global como Amazon S3 o Cloudflare R2 (utilizado para distribución internacional). El motor de sincronización de nube a nube de RcloneView mueve los datos directamente sin descargarlos a tu equipo local, lo que hace que esta réplica interregional sea práctica incluso para grandes conjuntos de datos.

Configura un trabajo de sincronización en RcloneView con COS como origen y S3 como destino. Activa la verificación de checksum para garantizar la integridad de los datos durante la transferencia, algo esencial al replicar datos de producción entre regiones.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Tencent COS buckets to another cloud provider in RcloneView" class="img-large img-center" />

## Automatiza trabajos de copia de seguridad de COS (PLUS)

Con una licencia PLUS, puedes programar trabajos de sincronización recurrentes de Tencent COS para que se ejecuten en cualquier intervalo cron. Una empresa de medios que codifica video en Tencent Cloud podría programar un trabajo nocturno para archivar los archivos procesados de COS a Backblaze B2 o Wasabi para un almacenamiento a largo plazo rentable. El filtro **Max file age** te permite dirigirte solo a los objetos modificados recientemente, manteniendo la duración del trabajo manejable.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Tencent COS backup jobs in RcloneView" class="img-large img-center" />

## Supervisa y audita las transferencias de COS

La pestaña Transferencia de RcloneView muestra el progreso en vivo de la sincronización de COS con la velocidad y el porcentaje por archivo. Después de cada trabajo, el Historial de Trabajos registra estadísticas completas de la transferencia: bytes movidos, duración, número de archivos y detalles de errores, proporcionando el registro de auditoría que los equipos de operaciones en la nube necesitan para la atribución de costos y los informes de cumplimiento.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Tencent COS sync operations in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ve a la pestaña Remoto > Nuevo Remoto, selecciona Amazon S3 y elige Tencent COS como proveedor S3.
3. Introduce tu Access Key de CAM, la Secret Key, la región y la URL del endpoint de COS.
4. Explora tus buckets de COS y configura trabajos de sincronización o copia de seguridad hacia otros proveedores.

Gestionar Tencent COS junto con proveedores de nube globales se vuelve sencillo cuando RcloneView unifica todo tu almacenamiento en una sola interfaz.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento Amazon S3 — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Gestiona el almacenamiento Cloudflare R2 — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Centraliza buckets de S3, Wasabi y R2 con RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
