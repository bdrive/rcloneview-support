---
slug: sync-tencent-cos-to-amazon-s3-rcloneview
title: "Sincroniza Tencent COS con Amazon S3 — Copia de seguridad en la nube con RcloneView"
authors:
  - tayson
description: "Aprende a sincronizar datos de Tencent Cloud COS con Amazon S3 usando RcloneView para lograr disponibilidad global, redundancia entre regiones y trabajos automatizados de copia de seguridad en la nube."
keywords:
  - Tencent COS to S3
  - Tencent COS sync
  - Amazon S3 backup
  - RcloneView Tencent
  - cloud-to-cloud sync
  - S3-compatible storage
  - China cloud to global
  - cross-region cloud sync
tags:
  - tencent-cos
  - amazon-s3
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincroniza Tencent COS con Amazon S3 — Copia de seguridad en la nube con RcloneView

> Las empresas que operan con Tencent Cloud COS para datos de la región de China pueden usar RcloneView para sincronizar esos datos con Amazon S3 y lograr disponibilidad global y redundancia entre regiones.

Tencent Cloud Object Storage (COS) es ampliamente utilizado por empresas con usuarios u operaciones en China continental, donde ofrece baja latencia y cumplimiento con las normativas locales de datos. Sin embargo, para lograr disponibilidad global o recuperación ante desastres, las organizaciones suelen necesitar replicar esos datos en Amazon S3, que tiene un alcance internacional más amplio. RcloneView facilita esta sincronización entre nubes gracias a su soporte de remotos compatibles con S3 para ambos proveedores, todo gestionado desde una única interfaz gráfica.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configuración del remoto de Tencent COS

Tanto Tencent COS como Amazon S3 son compatibles con S3, por lo que RcloneView los gestiona mediante el mismo marco de proveedor S3. Haz clic en **New Remote** en RcloneView y selecciona **S3 Compatible Storage**. En el menú desplegable de proveedores, elige **Tencent Cloud COS**. Introduce tu **SecretId** y **SecretKey** de Tencent Cloud desde la consola de Tencent Cloud, junto con el **endpoint** correcto para tu región de COS — por ejemplo, `cos.ap-guangzhou.myqcloud.com` para Guangzhou.

Después de guardar, el remoto de Tencent COS aparecerá en el explorador de doble panel. Puedes navegar por tus buckets y objetos de COS, verificar que el contenido sea accesible y confirmar que la estructura de carpetas se ve como se espera antes de configurar el trabajo de sincronización.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Tencent Cloud COS as an S3-compatible remote in RcloneView" class="img-large img-center" />

## Añadir Amazon S3 como destino

Haz clic nuevamente en **New Remote** y selecciona **Amazon S3**. Introduce tu **Access Key ID** y **Secret Access Key** de AWS, y especifica la región de AWS donde se encuentra tu bucket de destino. Si tu bucket de destino aún no existe, créalo primero en la consola de AWS S3 — RcloneView se conectará a él durante la configuración.

Con ambos remotos configurados, ábrelos uno junto al otro en el explorador de doble panel para comparar el contenido y verificar la conectividad. Puedes hacer una comprobación rápida navegando por algunas carpetas en cada lado antes de ejecutar un trabajo de sincronización completo.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud view of Tencent COS and Amazon S3 in RcloneView" class="img-large img-center" />

## Creación y programación del trabajo de sincronización

Abre el **Job Manager** y lanza el **Job Wizard**. Establece el bucket de Tencent COS (o un prefijo específico) como origen y tu bucket de Amazon S3 como destino. Antes de ejecutar la sincronización real, usa la opción de **dry run** para previsualizar lo que se transferirá. Para la migración masiva inicial de un bucket de COS existente, el dry run ayuda a estimar el tamaño de la transferencia y detectar posibles problemas de rutas o codificación.

Una vez que el trabajo se ejecute correctamente, considera configurarlo en un programa recurrente. Los usuarios con licencia PLUS pueden configurar trabajos de sincronización automática que se ejecuten con una cadencia diaria o semanal, manteniendo la réplica de S3 actualizada a medida que llegan nuevos datos a Tencent COS. El panel de **Job History** registra cada ejecución, brindándote visibilidad sobre los volúmenes de transferencia y cualquier error.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Tencent COS to Amazon S3 sync in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade un remoto de **Tencent Cloud COS** mediante **New Remote** > **S3 Compatible Storage** > **Tencent Cloud COS**.
3. Añade un remoto de **Amazon S3** con tus credenciales de AWS.
4. Usa el **Job Wizard** para crear un trabajo de sincronización de COS a S3 y ejecuta primero un dry run.
5. Programa trabajos de sincronización recurrentes con una licencia PLUS para una replicación continua entre nubes.

Sincronizar de Tencent COS a Amazon S3 mediante RcloneView es una de las formas más limpias de lograr disponibilidad de datos global desde un almacén principal en la región de China.

---

**Guías relacionadas:**

- [Gestiona Tencent COS — Sincronización en la nube con RcloneView](https://rcloneview.com/support/blog/manage-tencent-cos-cloud-sync-rcloneview)
- [Gestiona Amazon S3 — Sincronización y copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Centraliza S3, Wasabi y R2 con RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
