---
slug: fix-cloud-sync-duplicate-files-rcloneview
title: "Corregir la sincronización en la nube que crea archivos duplicados — Cómo solucionarlo con RcloneView"
authors:
  - tayson
description: "Corrige la sincronización en la nube que crea archivos duplicados: identifica las causas raíz, elimina los duplicados y configura los trabajos de sincronización de RcloneView para evitar que se repita."
keywords:
  - duplicados de sincronización en la nube
  - la sincronización crea archivos duplicados
  - solución de archivos duplicados
  - deduplicación de RcloneView
  - duplicados en copias de seguridad en la nube
  - archivos de conflicto de sincronización
  - corregir subidas duplicadas
  - limpieza de almacenamiento en la nube
  - solución de duplicados de rclone
  - configuración incorrecta de sincronización en la nube
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - duplicates
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corregir la sincronización en la nube que crea archivos duplicados — Cómo solucionarlo con RcloneView

> Una sincronización en la nube que produce archivos duplicados indica un error de configuración específico — los ajustes de tipo de trabajo y la Comparación de carpetas de RcloneView facilitan diagnosticar, limpiar y evitar que vuelva a ocurrir.

Las operaciones de sincronización en la nube que producen archivos duplicados — copias con el mismo nombre pero con marcas de tiempo de modificación diferentes, o archivos con sufijos como `-copy` o `(1)` — aumentan los costos de almacenamiento en cada ejecución y señalan un problema de configuración subyacente. RcloneView usa el motor de sincronización determinista de rclone, y cuando aparecen duplicados, la causa raíz casi siempre es una discrepancia en el tipo de trabajo, operaciones conflictivas o conflictos de sincronización bidireccional.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué la sincronización produce duplicados

La causa más frecuente: usar el tipo de trabajo **Copy** (Copiar) cuando debería usarse **Sync** (Sincronizar). Un trabajo de Copy siempre agrega archivos en el destino — si el destino ya tiene archivos de una ejecución anterior, una segunda copia crea duplicados con marcas de tiempo más recientes o sufijos añadidos. Cambiar al tipo de trabajo **Sync** en el **Job Manager** (Administrador de trabajos) garantiza que el destino refleje exactamente el origen: los archivos adicionales en el destino se eliminan y solo se transfieren las diferencias.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuración del tipo de trabajo Sync en el Job Manager de RcloneView para evitar duplicados" class="img-large img-center" />

El modo de sincronización **Bidirection** (Bidireccional) de RcloneView (actualmente en Beta) puede producir copias de conflicto cuando ambos lados modifican el mismo archivo entre ejecuciones de sincronización. Rclone crea una copia de conflicto en un lado para preservar ambas versiones. Para flujos de trabajo de producción, la sincronización unidireccional (el modo predeterminado "Modifying destination only", es decir, modificar solo el destino) evita esto por completo — usa la sincronización bidireccional solo cuando realmente sea necesaria.

## Cómo encontrar y eliminar duplicados existentes

Usa la **Folder Compare** (Comparación de carpetas) de RcloneView para identificar archivos con nombres idénticos pero contenido diferente que existan en dos ubicaciones. El filtro "different files" (archivos diferentes) resalta los archivos cuyo tamaño no coincide, mientras que el filtro "same files" (archivos iguales) confirma coincidencias exactas. Los archivos que aparecen en ambos lados pero no deberían estar duplicados pueden eliminarse de un lado usando la acción de eliminación de Folder Compare.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Uso de Folder Compare para identificar archivos duplicados en RcloneView" class="img-large img-center" />

Para limpiar grandes cantidades de duplicados existentes dentro de una misma nube, la pestaña **Terminal** integrada de RcloneView te permite ejecutar `rclone dedupe` con los indicadores de estrategia de deduplicación apropiados, identificando archivos con contenido idéntico independientemente del nombre y conservando solo una copia. El terminal ofrece acceso completo a la CLI de rclone sin salir de la interfaz de RcloneView.

## Configurar la sincronización para evitar que se repita

En el **Job Manager**, verifica estos ajustes para un comportamiento de sincronización limpio y sin duplicados:
- Usa el tipo de trabajo **Sync** para operaciones de espejo (no Copy)
- Configura la dirección de sincronización en **"Modifying destination only"** (unidireccional) para un comportamiento estable
- Activa **Dry Run** (Ejecución de prueba) antes de la primera ejecución en un destino nuevo para verificar la lista de operaciones

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historial de trabajos que muestra ejecuciones de sincronización limpias sin duplicados en RcloneView" class="img-large img-center" />

Activar la comparación por checksum en Advanced Settings (Configuración avanzada) hace que la sincronización sea más precisa: los archivos se comparan tanto por hash como por tamaño en lugar de solo por marca de tiempo y tamaño, lo que evita que archivos con tamaños idénticos pero contenido diferente se traten como iguales.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Identifica los trabajos que generan duplicados en Job Manager — cambia los trabajos **Copy** a **Sync** cuando corresponda.
3. Usa **Folder Compare** para encontrar y eliminar duplicados existentes entre origen y destino.
4. Activa **Dry Run** antes de ejecutar trabajos en destinos nuevos para verificar el comportamiento antes de confirmarlo.

Los archivos duplicados en la sincronización en la nube son un problema de configuración solucionable — los ajustes correctos de tipo de trabajo y dirección de sincronización en RcloneView evitan que aparezcan desde el principio.

---

**Guías relacionadas:**

- [Encontrar y eliminar archivos duplicados en el almacenamiento en la nube con RcloneView](https://rcloneview.com/support/blog/find-remove-duplicate-files-cloud-storage-rcloneview)
- [Sync vs Copy vs Move — Diferencias explicadas con RcloneView](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)
- [Dry Run — Vista previa de la sincronización antes de la transferencia en RcloneView](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
