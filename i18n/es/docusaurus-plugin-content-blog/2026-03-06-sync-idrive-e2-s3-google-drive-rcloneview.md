---
slug: sync-idrive-e2-s3-google-drive-rcloneview
title: "Sincroniza el almacenamiento de objetos IDrive e2 con AWS S3 o Google Drive usando RcloneView"
authors:
  - tayson
description: "Gestiona el almacenamiento de objetos IDrive e2 de forma visual: explora buckets, sincroniza con AWS S3 o Google Drive y programa copias de seguridad usando la conexión compatible con S3 de RcloneView."
keywords:
  - idrive e2 sync
  - idrive e2 backup
  - idrive e2 gui tool
  - idrive e2 to s3
  - idrive e2 rclone
  - idrive e2 file manager
  - idrive e2 mount local drive
  - idrive e2 google drive
  - idrive e2 object storage
  - s3 compatible storage gui
tags:
  - idrive-e2
  - s3-compatible
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincroniza el almacenamiento de objetos IDrive e2 con AWS S3 o Google Drive usando RcloneView

> IDrive e2 ofrece almacenamiento compatible con S3 increíblemente asequible a $0.004/GB/mes. Pero sin un cliente de sincronización de escritorio, gestionar archivos implica llamadas a la API o la interfaz web. RcloneView te ofrece una interfaz visual completa.

IDrive e2 es uno de los servicios de almacenamiento de objetos compatibles con S3 más rentables disponibles, más barato que Backblaze B2, Wasabi y AWS S3. Es ideal para copias de seguridad, archivos y almacenamiento en frío. Pero, como la mayoría de los proveedores de almacenamiento de objetos, IDrive e2 carece de un cliente de escritorio nativo. RcloneView se conecta a través de la API de S3, ofreciéndote gestión visual de archivos, sincronización de nube a nube y automatización programada.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ¿Por qué IDrive e2?

| Proveedor | Costo por TB/mes | Egreso |
|----------|-------------------|--------|
| IDrive e2 | $4.00 | Gratis (3x almacenamiento) |
| Backblaze B2 | $6.00 | $0.01/GB |
| Wasabi | $6.99 | Gratis |
| AWS S3 Standard | $23.00 | $0.09/GB |

Los precios de IDrive e2 lo convierten en una opción atractiva para cualquiera que necesite almacenamiento de objetos asequible y confiable.

## Conectando IDrive e2

Dado que IDrive e2 es compatible con S3:

1. Haz clic en **Add Remote** → selecciona **Amazon S3**.
2. Elige **IDrive e2** u **Other** en el menú desplegable de proveedor S3.
3. Introduce tus credenciales:
   - **Access Key** y **Secret Key** desde el panel de IDrive e2.
   - **Endpoint**: tu endpoint regional (por ejemplo, `https://s3.us-west-1.idrivecloud.io`).
4. Guarda; tus buckets de e2 ya son explorables.

<img src="/support/images/en/blog/new-remote.png" alt="Add IDrive e2 as S3-compatible remote" class="img-large img-center" />

## Explorar y gestionar

Visualiza los buckets de IDrive e2 junto a cualquier otra nube:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse IDrive e2 buckets" class="img-large img-center" />

## Escenarios de sincronización

### Google Drive → IDrive e2 (copia de seguridad asequible)

Usa e2 como copia de seguridad de bajo costo para tu Google Drive:

1. Crea una tarea de copia: Google Drive → bucket de IDrive e2.
2. Programa una ejecución nocturna con [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution).
3. Paga una fracción de lo que Google cobra por los mismos datos.

### IDrive e2 → AWS S3 (redundancia entre nubes)

1. Crea una tarea de sincronización: IDrive e2 → bucket de S3.
2. Mantén redundancia entre dos proveedores compatibles con S3 diferentes.

### Local/NAS → IDrive e2 (archivo externo)

1. Crea una tarea de copia: carpeta local o NAS → IDrive e2.
2. Perfecto para copias de seguridad externas a un costo mínimo.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run IDrive e2 sync job" class="img-large img-center" />

## Montar como unidad local

Accede a IDrive e2 como una carpeta normal:

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount IDrive e2 as local drive" class="img-large img-center" />

## Automatizar y monitorear

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule IDrive e2 backups" class="img-large img-center" />

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor IDrive e2 transfers" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Añade IDrive e2** como remoto compatible con S3.
3. **Explora, monta o sincroniza** con cualquier destino.
4. **Programa** copias de seguridad automatizadas en la nube a bajo costo.

IDrive e2 es el rey económico del almacenamiento de objetos. RcloneView le ofrece la experiencia de escritorio que merece.

---

**Guías relacionadas:**

- [Añadir AWS S3 y servicios compatibles con S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Montar almacenamiento en la nube como unidad local](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Comparar el contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Programación de tareas](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
