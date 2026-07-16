---
slug: manage-google-cloud-storage-buckets-rcloneview
title: "Gestiona buckets de Google Cloud Storage con RcloneView"
authors:
  - tayson
description: "Usa RcloneView para explorar, subir, sincronizar y gestionar buckets de Google Cloud Storage (GCS) de forma visual. No se requiere CLI: gestión completa de GCS a través de una GUI."
keywords:
  - google cloud storage rcloneview
  - manage gcs buckets gui
  - rclone google cloud storage
  - gcs bucket management tool
  - google cloud storage gui
  - sync files google cloud storage
  - upload to gcs without cli
  - rcloneview gcs
  - google cloud storage backup
  - gcs rclone gui
tags:
  - google-cloud-storage
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona buckets de Google Cloud Storage con RcloneView

> Google Cloud Storage es la columna vertebral de almacenamiento de objetos de GCP: duradero, rápido y profundamente integrado con la plataforma de Google. RcloneView te ofrece un administrador de archivos visual para tus buckets de GCS sin necesidad de `gsutil` ni de la consola de GCP.

Google Cloud Storage (GCS) es el almacenamiento de objetos preferido por equipos que ya usan Google Cloud Platform, ya sea para datos de aplicaciones, conjuntos de datos de ML, staging de BigQuery o entrega de contenido multimedia. Aunque `gsutil` y la consola de GCP funcionan, son lentos para operaciones masivas de archivos y la gestión diaria. RcloneView proporciona un administrador de archivos de doble panel para buckets de GCS, permitiéndote explorar, transferir y sincronizar archivos de la misma forma que usarías un explorador de archivos de escritorio.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Qué añade RcloneView a la gestión de GCS

| Tarea | Consola de GCP | CLI gsutil | RcloneView |
|------|------------|------------|------------|
| Explorar buckets visualmente | ✓ | ✗ | ✓ |
| Subida por arrastrar y soltar | Limitado | ✗ | ✓ |
| Sincronizar con otras nubes | ✗ | ✗ | ✓ |
| Transferir a disco local | Lento | ✓ | ✓ |
| Programar trabajos de sincronización | ✗ | Manual | ✓ |
| Monitoreo de transferencias en tiempo real | ✗ | ✓ | ✓ |

## Conectar Google Cloud Storage a RcloneView

### Paso 1 — Crear una cuenta de servicio

En la consola de GCP:

1. Ve a **IAM & Admin → Service Accounts**.
2. Crea una nueva cuenta de servicio con el rol **Storage Admin** (o **Storage Object Admin** para lectura/escritura sin gestión de buckets).
3. Genera un archivo de clave JSON y descárgalo.

### Paso 2 — Añadir el remoto de GCS en RcloneView

Abre RcloneView y haz clic en **New Remote**:

<img src="/support/images/en/blog/new-remote.png" alt="Add Google Cloud Storage remote in RcloneView" class="img-large img-center" />

1. Selecciona **Google Cloud Storage** en la lista de tipos de remoto.
2. Indica la ubicación de tu **archivo de clave JSON de la cuenta de servicio** descargado.
3. Introduce tu **GCP Project ID**.
4. Nombra el remoto (por ejemplo, `gcs-prod`) y guarda.

Tras conectar, tus buckets de GCS aparecen como carpetas de nivel superior en el explorador de archivos de RcloneView.

## Explorar y gestionar buckets de GCS

Navega dentro de cualquier bucket para ver su contenido. RcloneView representa la jerarquía de claves de objetos como carpetas, igual que verías en la consola de GCP.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browse GCS buckets in RcloneView" class="img-large img-center" />

Desde la interfaz de doble panel puedes:
- **Copiar archivos** entre rutas de GCS o hacia/desde disco local
- **Mover objetos** dentro de un bucket o entre buckets
- **Eliminar objetos** con confirmación
- **Renombrar** copiando con una nueva clave y eliminando la anterior

## Sincronizar archivos hacia y desde GCS

### Subir un conjunto de datos local a GCS

1. Abre un **Job** en RcloneView.
2. Establece el origen en tu carpeta local (por ejemplo, `D:\ml-dataset\`).
3. Establece el destino en una ruta de GCS (por ejemplo, `gcs-prod:my-ml-bucket/training-data/`).
4. Elige **Copy** (añadir solo archivos nuevos) o **Sync** (reflejar exactamente).
5. Ejecuta el trabajo y monitorea el progreso en vivo.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Upload dataset to GCS in RcloneView" class="img-large img-center" />

### Entre nubes: de GCS a otro proveedor

RcloneView transfiere directamente entre nubes. Flujos de trabajo comunes con GCS:

- **GCS → AWS S3** — replicar buckets entre nubes para redundancia
- **GCS → Backblaze B2** — archivar datos fríos en almacenamiento más económico
- **GCS → Google Drive** — compartir resultados procesados con personas no técnicas
- **GCS → NAS local** — extraer datos para procesamiento en las instalaciones

## Conocimiento de las clases de almacenamiento de GCS

GCS tiene múltiples clases de almacenamiento: Standard, Nearline, Coldline y Archive. Al configurar un trabajo de sincronización en RcloneView, puedes pasar flags de rclone para dirigir los nuevos objetos a una clase de almacenamiento específica:

| Clase de almacenamiento | Caso de uso | Duración mínima de almacenamiento |
|--------------|----------|--------------------------|
| Standard | Datos de acceso frecuente | Ninguna |
| Nearline | Acceso mensual | 30 días |
| Coldline | Acceso trimestral | 90 días |
| Archive | Acceso anual | 365 días |

Usa el campo **Custom flags** en el editor de trabajos de RcloneView para pasar `--gcs-storage-class COLDLINE` en datos de archivo.

## Programar sincronizaciones periódicas de GCS

Para trabajos de copia de seguridad recurrentes — subidas nocturnas, sincronizaciones diarias de staging o ejecuciones semanales de archivado:

1. Crea un trabajo con tu origen y destino en GCS.
2. Abre la configuración de **Schedule**.
3. Establece la frecuencia (diaria, semanal, cron personalizado).
4. Habilita alertas por correo electrónico o notificación al finalizar.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule GCS sync job" class="img-large img-center" />

## Comparación de carpetas para verificación

Después de transferencias grandes, usa la **Folder Comparison** de RcloneView para verificar que tus archivos locales coincidan con lo que hay en GCS, comprobando cantidad de archivos, tamaños y checksums:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify GCS sync with folder comparison" class="img-large img-center" />

Cualquier objeto faltante o no coincidente aparece resaltado, permitiéndote volver a ejecutar solo los archivos afectados.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Crea una cuenta de servicio** en la consola de GCP con permisos de Storage Object Admin.
3. **Descarga la clave JSON** y añade el remoto de GCS en RcloneView.
4. **Explora tus buckets** y comienza a transferir archivos de forma visual.

GCS es una infraestructura potente: RcloneView hace que la gestión diaria de archivos se sienta tan fácil como una unidad local.

---

**Guías relacionadas:**

- [Transferir Google Cloud Storage a AWS S3](https://rcloneview.com/support/blog/transfer-google-cloud-storage-aws-s3-without-cli-rcloneview)
- [Montar buckets de Amazon S3 como unidades locales](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)
- [Centraliza S3, Wasabi y R2 con RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
