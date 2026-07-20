---
slug: sync-hidrive-to-onedrive-rcloneview
title: "Sincronizar HiDrive con OneDrive — Copia de seguridad en la nube con RcloneView"
authors:
  - tayson
description: "Sincroniza archivos de HiDrive a OneDrive con RcloneView. Transfiere el almacenamiento de Strato HiDrive directamente a Microsoft OneDrive sin descargarlos localmente."
keywords:
  - HiDrive to OneDrive
  - sync HiDrive OneDrive
  - HiDrive migration
  - Strato HiDrive sync
  - cloud-to-cloud transfer
  - HiDrive RcloneView
  - OneDrive backup
  - European cloud migration
  - RcloneView sync
  - cloud storage transfer
tags:
  - RcloneView
  - hidrive
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincronizar HiDrive con OneDrive — Copia de seguridad en la nube con RcloneView

> Transfiere archivos de Strato HiDrive directamente a Microsoft OneDrive con RcloneView — sincronización directa de nube a nube sin necesidad de descarga local.

HiDrive de Strato es un servicio europeo de almacenamiento en la nube popular entre empresas que necesitan residencia de datos conforme al RGPD. A medida que las organizaciones adoptan Microsoft 365, muchas buscan consolidar sus archivos de HiDrive en OneDrive para una colaboración fluida dentro de Teams y SharePoint. RcloneView facilita esta transición: agrega ambos servicios como remotos y luego sincroniza carpetas de HiDrive directamente con OneDrive a través de la interfaz gráfica de RcloneView, sin descargar los archivos a una máquina local intermedia.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar HiDrive y OneDrive

HiDrive utiliza autenticación OAuth en rclone: cuando agregas HiDrive como remoto en RcloneView, se abre una ventana del navegador para que inicies sesión con tus credenciales de Strato HiDrive y otorgues acceso. El mismo flujo OAuth se aplica a OneDrive: selecciona Microsoft OneDrive de la lista de proveedores, autentícate con tu cuenta de Microsoft, y el remoto queda configurado.

Con ambos remotos activos, ábrelos uno junto al otro en el explorador de doble panel de RcloneView. La estructura de carpetas de HiDrive aparece en un lado, y tu OneDrive en el otro. Esta disposición visual te ayuda a planificar tu migración: identifica qué carpetas de HiDrive corresponden a qué destinos de OneDrive antes de crear los trabajos de sincronización.

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive and OneDrive remotes in RcloneView" class="img-large img-center" />

## Configurar el trabajo de sincronización

Utiliza el asistente de sincronización para crear la transferencia de HiDrive a OneDrive. Selecciona tu carpeta de origen de HiDrive y la carpeta de destino de OneDrive, y luego completa los pasos de configuración. La sincronización unidireccional (la opción predeterminada y estable) refleja el contenido de HiDrive en OneDrive: los archivos nuevos y modificados se copian y, opcionalmente, los archivos eliminados de HiDrive también se eliminan de OneDrive.

Para equipos que consolidan archivos de proyectos, el paso de Filtrado resulta muy útil: establece una antigüedad máxima de archivo para migrar solo los creados o modificados en los últimos dos años, o utiliza filtros por tipo de archivo para incluir únicamente documentos, hojas de cálculo y presentaciones, excluyendo archivos de video de gran tamaño. Reglas de filtro personalizadas como `.tmp` o `/.git/` te permiten excluir archivos de espacio de trabajo innecesarios de la migración.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing HiDrive folders to OneDrive with RcloneView" class="img-large img-center" />

Ejecuta el modo de simulación (Dry Run) antes de la transferencia real para confirmar que la lista de archivos coincide con lo esperado. La simulación muestra exactamente qué archivos se copiarán sin realizar cambios, un paso valioso al mover datos empresariales entre proveedores.

## Programar sincronización continua

Para equipos que ejecutan HiDrive y OneDrive en paralelo durante un período de transición, la sincronización programada (licencia PLUS) mantiene ambos servicios al día. Define una programación recurrente —diaria, dos veces por semana o con un intervalo cron personalizado— y RcloneView se encarga de ejecutar las sincronizaciones en segundo plano. El Historial de trabajos registra cada ejecución con hora de inicio, archivos transferidos y estado de finalización.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling recurring HiDrive to OneDrive sync in RcloneView" class="img-large img-center" />

Si necesitas verificar que la sincronización se completó correctamente, usa Comparar carpetas para comprobar que OneDrive ahora contiene los archivos esperados de HiDrive. La vista de comparación muestra los archivos que solo están a la izquierda, solo a la derecha y los que tienen tamaños diferentes, ayudándote a detectar cualquier elemento que necesite volver a transferirse.

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega HiDrive mediante el flujo de inicio de sesión OAuth en el navegador, en la pestaña Remoto.
3. Agrega OneDrive mediante el flujo de inicio de sesión OAuth en el navegador.
4. Usa el asistente de sincronización para transferir carpetas de HiDrive a OneDrive, con Dry Run para previsualizar primero.

Migrar de HiDrive a OneDrive a través de RcloneView mantiene el proceso guiado por interfaz gráfica y auditable, sin consumo de almacenamiento local intermedio.

---

**Guías relacionadas:**

- [Administrar la sincronización en la nube de HiDrive Strato con RcloneView](https://rcloneview.com/support/blog/manage-hidrive-strato-sync-cloud-rcloneview)
- [Administrar la sincronización y copia de seguridad en la nube de OneDrive con RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Migración de nube a nube con RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)

<CloudSupportGrid />
