---
slug: sync-backblaze-b2-to-onedrive-rcloneview
title: "Sincroniza Backblaze B2 con OneDrive — Copia de seguridad en la nube con RcloneView"
authors:
  - tayson
description: "Aprende cómo sincronizar o migrar archivos desde el almacenamiento de objetos Backblaze B2 a Microsoft OneDrive usando RcloneView — un enfoque basado en GUI con soporte para automatización programada."
keywords:
  - sincronización de Backblaze B2 a OneDrive
  - migrar Backblaze B2 OneDrive RcloneView
  - transferencia de Backblaze B2 a OneDrive
  - guía de migración de B2 a OneDrive
  - herramienta de sincronización de almacenamiento en la nube
  - copia de seguridad de Backblaze B2 en OneDrive
  - migración de OneDrive desde B2
  - rclone B2 OneDrive GUI
tags:
  - RcloneView
  - backblaze-b2
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincroniza Backblaze B2 con OneDrive — Copia de seguridad en la nube con RcloneView

> Extrae archivos seleccionados desde el almacenamiento frío de Backblaze B2 hacia OneDrive para uso activo — o migra todo tu bucket de B2 a OneDrive con un solo trabajo de RcloneView.

Backblaze B2 es un excelente destino de archivo y copia de seguridad, pero su API compatible con S3 no está diseñada para la colaboración diaria. Si tu equipo necesita acceder a archivos en Microsoft 365, compartir documentos vía SharePoint, o simplemente mover datos de B2 a una ubicación más accesible, sincronizar con OneDrive es la respuesta. RcloneView hace que la transferencia sea sencilla con un generador visual de trabajos y monitoreo en tiempo real.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectando Backblaze B2 y OneDrive

En RcloneView, abre **Remote tab → New Remote** y agrega primero Backblaze B2. Ingresa tu Application Key ID y Application Key, luego especifica el nombre del bucket. Para OneDrive, selecciónalo de la lista de proveedores y completa el inicio de sesión OAuth en el navegador con tu cuenta de Microsoft. Una vez guardados ambos remotos, ábrelos lado a lado en el explorador de doble panel.

Explora tu bucket de B2 a la izquierda y tu OneDrive a la derecha. Puedes navegar en profundidad por las jerarquías de carpetas en ambos lados y comparar el número de archivos antes de iniciar cualquier transferencia. Este paso de confirmación visual evita sorpresas durante migraciones grandes.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Backblaze B2 and OneDrive remotes in RcloneView" class="img-large img-center" />

## Configurando y ejecutando el trabajo de sincronización

Haz clic en **Sync** en la pestaña Home para abrir el asistente de trabajos. Establece la ruta de Backblaze B2 como origen y la carpeta de destino de OneDrive como destino. En el Paso 2, configura el número de transferencias concurrentes — OneDrive tiene límites de tasa de API, por lo que comenzar con 4–8 transferencias concurrentes es más seguro que llevarlo al máximo. Activa la comparación de checksums si la integridad de los datos es crítica para tu caso de uso.

Usa la opción **Dry Run** antes de comprometerte con la transferencia completa. Esto es especialmente útil si estás sincronizando de forma selectiva — por ejemplo, extrayendo solo los archivos de los últimos 90 días desde B2 configurando un filtro **Max file age** en el Paso 3. Una vez que el resultado del dry run se vea correcto, ejecuta el trabajo en vivo.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="B2 to OneDrive sync job in progress in RcloneView" class="img-large img-center" />

## Programando extracciones regulares desde B2

Algunos flujos de trabajo requieren una sincronización recurrente de B2 a OneDrive — por ejemplo, extraer informes recién archivados de B2 hacia una carpeta de OneDrive cada mañana para que los miembros del equipo puedan acceder a ellos a través de la interfaz de Microsoft 365. Con una licencia PLUS, el programador crontab de RcloneView se encarga de esto automáticamente. Configura el horario en el Paso 4 del asistente de trabajos, eligiendo los días y horas que se ajusten a tu flujo de trabajo.

La pestaña **Job History** registra cada ejecución, para que puedas confirmar que cada sincronización programada se completó correctamente y verificar cuántos datos se movieron.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Backblaze B2 to OneDrive sync" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega Backblaze B2 (Application Key) y OneDrive (OAuth) como remotos.
3. Crea un trabajo de sincronización de B2 a OneDrive con los límites de transferencia apropiados.
4. Programa sincronizaciones recurrentes con una licencia PLUS para automatización sin intervención manual.

Mover datos desde el archivo duradero de B2 hacia el entorno colaborativo de OneDrive se convierte en una operación rutinaria y confiable con RcloneView.

---

**Guías relacionadas:**

- [Sincroniza Backblaze B2 con Azure Blob Storage usando RcloneView](https://rcloneview.com/support/blog/sync-backblaze-b2-to-azure-blob-rcloneview)
- [Gestiona el almacenamiento en la nube de Backblaze B2 con RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Migra OneDrive a Backblaze B2 con RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
