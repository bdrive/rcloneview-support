---
slug: one-to-many-sync-multiple-destinations-rcloneview
title: "Sincronización 1:N — Sincroniza una fuente con múltiples destinos en RcloneView"
authors:
  - tayson
description: "Usa la función de sincronización 1:N de RcloneView para reflejar una carpeta de origen en múltiples destinos en la nube simultáneamente. Haz copias de seguridad en S3, Google Drive y Backblaze B2 en un solo trabajo."
keywords:
  - sincronización 1:N RcloneView
  - sincronizar una fuente con múltiples destinos
  - copia de seguridad multi-destino
  - copia de seguridad en la nube con múltiples nubes
  - RcloneView sincronización 1 a N
  - replicación en la nube con múltiples proveedores
  - reflejar en múltiples nubes
  - función de sincronización de RcloneView
  - trabajo de copia de seguridad multi-nube
  - sincronización en la nube de uno a muchos
tags:
  - RcloneView
  - feature
  - cloud-sync
  - backup
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincronización 1:N — Sincroniza una fuente con múltiples destinos en RcloneView

> La sincronización 1:N de RcloneView te permite reflejar una única carpeta de origen en múltiples destinos en la nube en un solo trabajo — haz copias de seguridad en Google Drive, Amazon S3 y Backblaze B2 simultáneamente.

Un principio fundamental de la resiliencia de datos es la regla de copia de seguridad 3-2-1: tres copias de los datos, en dos medios diferentes, con una copia fuera del sitio. El almacenamiento en la nube hace esto posible sin discos físicos — pero ejecutar manualmente trabajos de sincronización independientes para cada proveedor es repetitivo y propenso a errores. La función de sincronización 1:N de RcloneView te permite configurar una única carpeta de origen para sincronizarse con múltiples destinos en la nube simultáneamente, de modo que una sola ejecución del trabajo cubra todos tus objetivos de copia de seguridad a la vez. Esta función está disponible con la licencia FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ¿Qué es la sincronización 1:N?

La sincronización 1:N (sincronización de uno a muchos) significa que una fuente se refleja en N remotos de destino en una sola ejecución de trabajo. Cuando ejecutas el trabajo, RcloneView sincroniza la fuente con cada destino configurado — añadiendo archivos que faltan, actualizando archivos que han cambiado y, opcionalmente, eliminando archivos que se borraron de la fuente.

Esto es distinto de ejecutar trabajos de sincronización independientes de forma secuencial. Con la sincronización 1:N, se escribe en todos los destinos durante la misma ventana de ejecución, y el progreso de cada destino se rastrea en la pestaña Transferring. Job History registra el resultado de cada destino en el resumen de la ejecución.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="1:N sync job sending source to multiple cloud destinations in RcloneView" class="img-large img-center" />

## Configuración de un trabajo de sincronización 1:N

Configurar un trabajo de sincronización multi-destino utiliza el mismo asistente de sincronización de 4 pasos que un trabajo normal. La diferencia está en el Paso 1: después de seleccionar tu remoto y carpeta de origen, haz clic en el botón Add Destination para añadir más remotos de destino. Puedes añadir tantos destinos como necesites — por ejemplo, Google Drive, Amazon S3 y Backblaze B2.

**Flujo de trabajo de ejemplo para una estrategia de copia de seguridad en producción:**

1. **Origen:** Carpeta local de NAS `/data/projects`
2. **Destino 1:** Google Drive `/Backups/Projects`
3. **Destino 2:** Bucket de Amazon S3 `my-company-backup/projects`
4. **Destino 3:** Bucket de Backblaze B2 `projects-archive`

Cada destino recibe una copia idéntica del contenido de origen. El nombre del trabajo de sincronización, las reglas de filtrado y la configuración avanzada se aplican de manera uniforme a todos los destinos del trabajo.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring 1:N sync with multiple cloud destinations in RcloneView" class="img-large img-center" />

## Casos de uso prácticos

**Implementación de copia de seguridad 3-2-1:** Configura fuente local → Google Drive + Amazon S3 + Backblaze B2. Una ejecución de trabajo, tres copias en diferentes proveedores en la nube.

**Distribución de contenido:** Un equipo de producción de video que sincroniza las exportaciones finales de su servidor de edición con Dropbox (para revisión del cliente), Google Drive (para archivo interno) y un bucket de origen de CDN simultáneamente.

**Replicación regional:** Una organización que sincroniza un repositorio central de documentos con buckets regionales en la nube en diferentes zonas geográficas por razones de latencia y disponibilidad.

**Redundancia entre proveedores:** Sincroniza una carpeta principal de OneDrive tanto con Backblaze B2 como con Cloudflare R2, de modo que si un proveedor sufre una interrupción, el otro siga teniendo copias actualizadas.

## Programación de trabajos de sincronización 1:N

Para los trabajos 1:N que necesitan ejecutarse regularmente, la sincronización programada (licencia PLUS) se aplica a los trabajos multi-destino igual que a los trabajos de un solo destino. Configura un horario tipo crontab en el Paso 4 del asistente, y RcloneView ejecutará la sincronización completa multi-destino en cada intervalo programado. Job History registra el resultado de cada ejecución, mostrándote si todos los destinos recibieron las actualizaciones correctamente.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling 1:N multi-destination sync in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade todos los proveedores de nube de destino como remotos en la pestaña Remote.
3. Abre el asistente de sincronización y usa Add Destination en el Paso 1 para configurar múltiples destinos para tu fuente.
4. Opcionalmente, añade una programación (licencia PLUS) para ejecutar la sincronización multi-destino automáticamente.

La sincronización 1:N es una de las funciones de RcloneView que más tiempo ahorra para las estrategias de copia de seguridad — configúrala una vez, protege en todas partes, cada vez que se ejecute el trabajo.

---

**Guías relacionadas:**

- [Automatiza copias de seguridad diarias en la nube con RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [Estrategia de copia de seguridad multi-nube con RcloneView](https://rcloneview.com/support/blog/multi-cloud-backup-strategy-rcloneview)
- [Copia de seguridad de NAS a múltiples nubes con RcloneView](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)

<CloudSupportGrid />
