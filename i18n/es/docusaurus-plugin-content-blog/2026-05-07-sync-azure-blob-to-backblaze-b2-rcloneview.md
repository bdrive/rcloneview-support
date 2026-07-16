---
slug: sync-azure-blob-to-backblaze-b2-rcloneview
title: "Sincroniza Azure Blob Storage con Backblaze B2 — Copia de seguridad en la nube con RcloneView"
authors:
  - tayson
description: "Aprende a sincronizar o migrar archivos de Azure Blob Storage a Backblaze B2 con RcloneView para ahorrar costos, ganar redundancia y automatizar la copia de seguridad en la nube."
keywords:
  - Azure Blob Storage
  - Backblaze B2
  - migración en la nube
  - RcloneView
  - sincronización entre nubes
  - copia de seguridad en la nube
  - ahorro de costos de almacenamiento
  - rclone azure b2
tags:
  - azure
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincroniza Azure Blob Storage con Backblaze B2 — Copia de seguridad en la nube con RcloneView

> Mover datos de Azure Blob Storage a Backblaze B2 puede reducir drásticamente tus costos de almacenamiento — RcloneView simplifica la migración y la sincronización continua con una interfaz gráfica guiada.

Azure Blob Storage se usa ampliamente en cargas de trabajo empresariales, pero Backblaze B2 ofrece precios de almacenamiento significativamente más bajos — a menudo una fracción del costo de Azure — lo que lo hace atractivo como destino de copia de seguridad secundaria o como destino de migración completa. Ya sea que quieras una migración única o una sincronización continua para redundancia, RcloneView maneja ambos casos sin requerir conocimientos de línea de comandos. RcloneView incluye un binario de rclone integrado, por lo que no hay nada adicional que instalar.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurar Azure Blob Storage en RcloneView

Haz clic en **New Remote** en RcloneView y selecciona **Microsoft Azure Blob Storage** de la lista de proveedores. Necesitarás tu **Storage Account Name** y **Storage Account Key** del Portal de Azure (en tu cuenta de almacenamiento > Access Keys). Opcionalmente, puedes usar un token SAS o una cadena de conexión. Después de guardar, RcloneView se conecta y muestra todos tus contenedores de blobs.

Si usas varias cuentas de almacenamiento de Azure — por ejemplo, cuentas separadas por entorno o región — agrega cada una como su propio remoto con nombre. RcloneView las gestiona todas desde la misma interfaz, para que puedas comparar contenedores y mover datos entre cuentas con facilidad.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Azure Blob Storage remote in RcloneView" class="img-large img-center" />

## Conectar Backblaze B2

Agrega un segundo remoto para Backblaze B2 haciendo clic nuevamente en **New Remote** y seleccionando **Backblaze B2**. Ingresa tu **Application Key ID** y **Application Key** del panel de Backblaze. Puedes limitar la clave a un bucket específico para mayor seguridad. Después de guardar, el remoto de B2 aparece en el explorador junto a tu remoto de Azure.

Ahora puedes abrir ambos remotos lado a lado en la vista de doble panel. Arrastra y suelta archivos individuales o árboles de carpetas completos de Azure a B2 para transferencias puntuales. Para migraciones de contenedores grandes, el enfoque de trabajos de sincronización es más confiable y reanudable.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Azure Blob to Backblaze B2 in RcloneView" class="img-large img-center" />

## Crear y programar el trabajo de sincronización

Abre el **Job Manager** y usa el **Job Wizard** de cuatro pasos para crear un trabajo de sincronización con Azure Blob como origen y Backblaze B2 como destino. Ejecuta siempre primero una **dry run** (ejecución de prueba) — esto previsualiza todas las adiciones y eliminaciones sin tocar tus datos. Una vez que estés satisfecho con la vista previa, ejecuta la sincronización real.

Para redundancia continua, los usuarios con licencia PLUS pueden agregar un **horario** para ejecutar la sincronización de Azure a B2 automáticamente con una frecuencia diaria o semanal. El panel de **Job History** registra cada ejecución con recuentos de archivos y tamaños de transferencia, para que puedas verificar que las copias de seguridad se completaron correctamente y cumplan con cualquier requisito de cumplimiento normativo.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Azure Blob to Backblaze B2 sync in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega un remoto de **Azure Blob Storage** usando tu Storage Account Name y Key.
3. Agrega un remoto de **Backblaze B2** usando tu Application Key ID y Key.
4. Abre ambos remotos en el explorador de doble panel y usa el **Job Wizard** para crear un trabajo de sincronización.
5. Ejecuta primero una **dry run**, luego programa sincronizaciones recurrentes con una licencia PLUS.

Sincronizar de Azure Blob a Backblaze B2 mediante RcloneView es una de las formas más eficientes de construir una estrategia de copia de seguridad en la nube rentable sin renunciar a la fiabilidad.

---

**Guías relacionadas:**

- [Gestiona Azure Blob Storage — Sincronización en la nube con RcloneView](https://rcloneview.com/support/blog/manage-azure-blob-storage-cloud-sync-rcloneview)
- [Gestiona Backblaze B2 — Sincronización y copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Migra OneDrive a Backblaze B2 con RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
