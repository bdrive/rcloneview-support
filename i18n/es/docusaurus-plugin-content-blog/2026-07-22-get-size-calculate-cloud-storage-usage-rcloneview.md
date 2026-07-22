---
slug: get-size-calculate-cloud-storage-usage-rcloneview
title: "Get Size — Calcula al instante el uso de almacenamiento en la nube en RcloneView"
authors:
  - jay
description: "Usa la función Get Size de RcloneView para calcular el tamaño total de cualquier carpeta o selección en más de 90 proveedores de almacenamiento en la nube antes de sincronizar o migrar."
keywords:
  - función get size
  - calcular tamaño de almacenamiento en la nube
  - tamaño de carpeta en la nube
  - RcloneView get size
  - comprobar uso de almacenamiento en la nube
  - comprobar tamaño de carpeta antes de transferir
  - auditoría de almacenamiento multi-nube
  - comando rclone about GUI
  - herramientas de gestor de archivos en la nube
  - análisis de uso de almacenamiento
tags:
  - RcloneView
  - feature
  - cloud-storage
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Get Size — Calcula al instante el uso de almacenamiento en la nube en RcloneView

> Haz clic derecho en cualquier carpeta o selección en RcloneView y obtén el tamaño total al instante, sin esperar una transferencia completa para saber cuántos datos estás moviendo.

Los proveedores de almacenamiento en la nube rara vez dejan claro lo grande que es realmente una carpeta hasta que intentas moverla. Una carpeta "Media" con miles de subcarpetas anidadas puede ocultar gigabytes de datos que solo se hacen visibles cuando un trabajo de sincronización se atasca a mitad de camino, o cuando aparece una advertencia de cuota en plena transferencia. El comando Get Size de RcloneView, en el menú contextual del explorador de archivos, resuelve esto calculando bajo demanda el tamaño total de los archivos o carpetas seleccionados antes de comprometerte a una sincronización, un montaje o una migración.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Comprobar el tamaño de una carpeta antes de mover nada

Selecciona uno o más archivos o carpetas en cualquier panel del explorador, haz clic derecho y elige Get Size. RcloneView recorre la selección y devuelve el tamaño total, lo cual resulta especialmente útil en carpetas con árboles de subdirectorios profundos, donde el resumen del pie del listado de archivos por sí solo no refleja el contenido anidado. Esto funciona igual sin importar si la selección está en Google Drive, Amazon S3, una instancia de Nextcloud autoalojada o un disco local — RcloneView monta Y sincroniza más de 90 proveedores desde una sola ventana, así que el mismo menú contextual se aplica sin importar qué remoto estés explorando.

Get Size resulta más útil como comprobación previa. Antes de iniciar un gran trabajo de Sync o una migración puntual entre dos nubes, comprobar el tamaño real de la carpeta de origen ayuda a estimar el tiempo de transferencia, confirmar que el destino tiene suficiente cuota disponible y decidir si se necesitan reglas de filtrado para reducir el trabajo.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Selecting a folder in RcloneView to check its total size" class="img-large img-center" />

## Auditar el uso de almacenamiento en varios remotos

Como cada remoto conectado —en la nube o local— se encuentra en el mismo explorador, Get Size también sirve como una forma rápida de auditar dónde se está consumiendo el almacenamiento en una configuración multi-nube. Ejecutarlo por turnos en las carpetas de nivel superior de cada remoto ofrece un mapa aproximado de qué cuentas se acercan a sus límites, lo cual es más rápido que iniciar sesión en la consola web independiente de cada proveedor para comprobar el uso.

Para obtener una cifra de uso más precisa a nivel de remoto en lugar de una carpeta específica, la Rclone Terminal integrada admite `rclone about "remote:"`, que informa del almacenamiento total usado y disponible directamente desde la API del proveedor. Get Size y el comando `about` de la terminal se complementan entre sí: uno se centra en una selección específica, el otro informa de totales a nivel de cuenta.

<img src="/support/images/en/blog/new-remote.png" alt="Multiple cloud remotes connected in RcloneView for storage auditing" class="img-large img-center" />

## Usar las comprobaciones de tamaño para planificar reglas de sincronización y filtrado

Una vez que conoces el tamaño real de una carpeta, el asistente de Sync de RcloneView ofrece las herramientas para actuar con esa información. El paso 3 de la configuración del trabajo incluye filtrado por tamaño máximo de archivo, antigüedad máxima de archivo y filtros predefinidos para tipos de medios, vídeo, imagen y documentos, de modo que una carpeta demasiado grande pueda reducirse solo a los archivos que realmente necesitan transferirse. Ejecutar después Dry Run muestra una vista previa exacta de qué archivos se copiarían o eliminarían con la configuración de filtros actual, confirmando que el trabajo coincide con lo esperado antes de que se mueva ningún dato real.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring sync filters after checking folder size in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Conecta los remotos que quieras auditar a través de la pestaña Remote > New Remote.
3. Selecciona una carpeta en el explorador, haz clic derecho y elige Get Size para ver su tamaño total.
4. Usa esa cifra para planificar filtros o programaciones en el asistente de Sync antes de ejecutar una transferencia completa.

Saber exactamente con cuántos datos estás trabajando convierte las conjeturas en un plan, y Get Size hace de esa comprobación un hábito de dos clics en lugar de un futuro ticket de soporte.

---

**Guías relacionadas:**

- [Job History y registros de transferencia — Supervisa cada sincronización en RcloneView](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)
- [Vista previa de Dry Run — Simula la sincronización en la nube antes de confirmarla en RcloneView](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [Encuentra y elimina archivos duplicados en el almacenamiento en la nube con RcloneView](https://rcloneview.com/support/blog/find-remove-duplicate-files-cloud-rcloneview)

<CloudSupportGrid />
