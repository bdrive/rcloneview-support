---
slug: sync-one-source-multiple-cloud-destinations-rcloneview
title: "Sincronización 1:N — Haz copia de seguridad de una fuente a múltiples destinos en la nube con RcloneView"
authors:
  - kai
description: "Usa la sincronización 1:N de RcloneView para hacer copia de seguridad de una carpeta de origen a múltiples destinos en la nube simultáneamente. Protege tus archivos con copias de seguridad multi-nube redundantes."
keywords:
  - 1 to N sync RcloneView
  - multiple cloud backup destinations
  - sync one source multiple clouds
  - redundant cloud backup RcloneView
  - multi-cloud sync backup
  - backup multiple cloud providers
  - RcloneView multiple destinations
  - parallel cloud backup
  - one source multiple backups RcloneView
  - automated multi-destination sync
tags:
  - multi-cloud
  - feature
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincronización 1:N — Haz copia de seguridad de una fuente a múltiples destinos en la nube con RcloneView

> Un solo trabajo de sincronización, múltiples destinos — RcloneView refleja una única fuente hacia tantos proveedores en la nube como necesites en una sola ejecución.

La mayoría de las estrategias de copia de seguridad fallan en redundancia: los archivos van a un solo destino, creando un único punto de fallo. La sincronización 1:N de RcloneView te permite hacer copia de seguridad de una única carpeta de origen a múltiples destinos en la nube dentro de un mismo trabajo — de modo que tus datos llegan a Google Drive, Backblaze B2 y un proveedor compatible con S3 simultáneamente, sin ejecutar trabajos separados para cada uno. Esta función está disponible con la licencia FREE y funciona con cualquier combinación de remotos en la nube que hayas configurado.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cómo funciona la sincronización 1:N en RcloneView

Cuando creas un trabajo de sincronización en el Administrador de trabajos de RcloneView, el Paso 1 del asistente de 4 pasos te permite agregar múltiples carpetas de destino. Después de seleccionar tu origen y el primer destino, haz clic en **Add Destination** para agregar más objetivos. Cada destino se sincroniza de forma independiente, pero es impulsado por la misma fuente — lo que significa que la fuente se lee una vez y las escrituras van a todos los destinos en paralelo. Esto es significativamente diferente de ejecutar trabajos separados: con ejecuciones separadas, si tu fuente cambia entre ejecuciones, cada destino puede capturar una instantánea ligeramente diferente.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring 1:N sync with multiple destinations in RcloneView" class="img-large img-center" />

Una configuración práctica para una empresa de medios digitales podría verse así: la fuente es una carpeta de NAS de producción local con archivos de video maestros; el destino 1 es Google Drive para acceso del equipo; el destino 2 es Backblaze B2 para archivado a largo plazo; el destino 3 es Wasabi para una copia adicional fuera de sitio. Los tres destinos permanecen sincronizados con el mismo estado de la fuente desde una sola ejecución del trabajo.

## Configurar un trabajo de sincronización con múltiples destinos

Abre el **Administrador de trabajos** (Job Manager) desde la pestaña Inicio y haz clic en **Add Job** para crear un nuevo trabajo de sincronización. En el Paso 1, selecciona tu fuente (cualquier remoto configurado o carpeta local). Después de elegir la primera carpeta de destino, haz clic en **Add Destination** para insertar objetivos adicionales — cada uno apuntando a un remoto y una ruta de carpeta diferentes. Dale al trabajo un nombre descriptivo que refleje la intención de múltiples destinos.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a 1:N sync job to multiple cloud destinations in RcloneView" class="img-large img-center" />

En el Paso 2, configura los ajustes de transferencia compartidos entre todos los destinos: número de transferencias simultáneas, ajustes multi-hilo y si se debe habilitar la verificación de checksum. Para trabajos 1:N que sincronizan con proveedores en la nube con diferentes límites de tasa, mantén el número de transferencias simultáneas moderado — un paralelismo agresivo hacia muchos destinos a la vez puede provocar limitación de velocidad en proveedores más estrictos. El Paso 3 te permite agregar reglas de filtro que se aplican uniformemente a todos los destinos, para que no tengas que duplicar la lógica de exclusión por objetivo.

## Verificar el trabajo con una ejecución de prueba

Antes de confirmar una sincronización 1:N grande, usa la opción **Dry Run** en el Administrador de trabajos. La ejecución de prueba muestra cada operación planificada — archivos que se copiarán a cada destino — sin realizar ningún cambio real. Para un trabajo que sincroniza con tres proveedores, la vista previa lista las operaciones por destino, dándote confianza de que las rutas son correctas y el alcance es el esperado.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing 1:N sync job history in RcloneView" class="img-large img-center" />

Después de la ejecución, la pestaña **Job History** registra la hora de inicio, la duración, el total de bytes transferidos y el estado final (Completado, Con errores, Cancelado) de cada ejecución del trabajo. Para equipos con requisitos de cumplimiento relacionados con la verificación de copias de seguridad, este registro proporciona un rastro de auditoría listo para usar sin herramientas adicionales.

## Programar copias de seguridad automatizadas con múltiples destinos

Con una licencia PLUS, adjunta una programación de tipo cron a tu trabajo 1:N en el Paso 4 para que se ejecute automáticamente en el intervalo que elijas. El botón **Simulate schedule** muestra una vista previa de los próximos horarios de ejecución antes de guardar. Una vez activo, la integración de RcloneView con la bandeja del sistema mantiene el trabajo ejecutándose en segundo plano, y las notificaciones de finalización de trabajo confirman que todos los destinos recibieron los datos más recientes.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling 1:N multi-destination backup in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega dos o más remotos en la nube mediante **Remote** > **New Remote**.
3. Crea un trabajo de **Sync** y usa **Add Destination** en el Paso 1 para agregar cada proveedor y carpeta objetivo.
4. Ejecuta un **Dry Run** para verificar el alcance, luego guarda con una programación para redundancia multi-nube automatizada.

Con la sincronización 1:N, un solo trabajo de RcloneView se convierte en una estrategia completa de copia de seguridad multi-nube — sin scripts adicionales, sin pasos adicionales.

---

**Guías relacionadas:**

- [Automatiza copias de seguridad diarias en la nube con RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [Estrategia de copia de seguridad multi-nube con RcloneView](https://rcloneview.com/support/blog/multi-cloud-backup-strategy-rcloneview)
- [Exportación e importación de trabajos — Flujos de trabajo portátiles con RcloneView](https://rcloneview.com/support/blog/job-export-import-portable-workflow-rcloneview)

<CloudSupportGrid />
