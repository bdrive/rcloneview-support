---
slug: fix-system-junk-files-ds-store-thumbs-db-cloud-sync-rcloneview
title: "Elimina el desorden de .DS_Store y Thumbs.db en la sincronización en la nube — Excluye archivos del sistema con RcloneView"
authors:
  - morgan
description: "Evita que los archivos .DS_Store, Thumbs.db y desktop.ini llenen tus copias de seguridad en la nube. Excluye los archivos basura del sistema operativo de los trabajos de sincronización con los filtros de RcloneView."
keywords:
  - archivos ds_store sincronización en la nube
  - thumbs.db almacenamiento en la nube
  - excluir archivos del sistema de la sincronización
  - desktop.ini copia de seguridad en la nube
  - rclone excluir ds_store
  - filtros personalizados de RcloneView
  - limpiar archivos basura de la sincronización en la nube
  - desorden en sincronización en la nube multiplataforma
  - rclone filtrar archivos ocultos
tags:
  - RcloneView
  - troubleshooting
  - tips
  - filters
  - cleanup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Elimina el desorden de .DS_Store y Thumbs.db en la sincronización en la nube — Excluye archivos del sistema con RcloneView

> Mantén los archivos basura del sistema operativo fuera de tus carpetas en la nube para que cada sincronización transfiera solo los archivos que la gente realmente usa.

Abre una carpeta compartida en la nube que sincroniza un equipo mixto de Mac y Windows y normalmente encontrarás los mismos invitados no deseados en casi todos los directorios: `.DS_Store` del Finder de macOS, y `Thumbs.db` y `desktop.ini` del Explorador de Windows. Añaden ruido a las listas de archivos, inflan el recuento de archivos y aparecen como archivos "diferentes" cada vez que dos equipos tocan la misma carpeta. RcloneView te permite excluirlos de los trabajos de sincronización y limpiar las copias que ya llegaron a la nube.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué los archivos del sistema siguen apareciendo en la nube

Estos archivos son metadatos, no contenido. El Finder escribe `.DS_Store` para recordar la posición de los iconos y la configuración de vista; Windows escribe `Thumbs.db` para almacenar en caché las miniaturas y `desktop.ini` para guardar la personalización de carpetas. Una herramienta de sincronización los trata como cualquier otro archivo, así que una sincronización unidireccional desde un MacBook sube un `.DS_Store` a cada carpeta que visita.

El problema crece con la escala. Una agencia de diseño que respalda 40.000 carpetas de proyectos puede acabar con decenas de miles de pequeños archivos de metadatos en su bucket. Cada uno es un objeto independiente que hay que listar y comparar, lo que ralentiza las sincronizaciones posteriores, y cada vez que un compañero navega por la carpeta en su propio equipo, el archivo cambia y se vuelve a transferir.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir un remoto en la nube en RcloneView antes de configurar las exclusiones de sincronización" class="img-large img-center" />

## Excluye los archivos basura con filtros personalizados

La solución empieza en el asistente de sincronización. En **Step 3: Filtering Settings**, añade reglas de exclusión personalizadas para `.DS_Store`, `Thumbs.db` y `desktop.ini`. Los filtros personalizados aceptan tipos de archivo, carpetas y reglas de ruta, por lo que también puedes excluir las carpetas `.Trashes` o `.Spotlight-V100` que a veces aparecen al sincronizar desde una unidad externa formateada en un Mac.

Antes de ejecutar el trabajo de verdad, haz clic en **Dry Run**. La simulación muestra cada archivo que se copiaría o eliminaría, para que puedas confirmar que los archivos de metadatos han salido de la lista de transferencia. Si siguen apareciendo, revisa la ortografía de la regla: las reglas de filtro distinguen entre mayúsculas y minúsculas de forma predeterminada, así que `Thumbs.db` no coincide con `thumbs.db`.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Ejecución de un trabajo de sincronización en la nube con filtros en RcloneView" class="img-large img-center" />

## Limpia los archivos que ya están en la nube

Los filtros detienen el nuevo desorden, pero no eliminan lo que ya existe. Abre la carpeta en la nube en un panel del Explorer y el origen local en otro, y usa **Compare**. Los archivos de metadatos que ya no existen localmente aparecen en "Show right-only files"; las copias que siguen existiendo en ambos lados aparecen como archivos iguales o diferentes. En cualquier caso, puedes seleccionar las copias del lado de la nube y eliminarlas directamente desde la vista de comparación.

Ten cuidado aquí con la sincronización unidireccional. Una sincronización que replica el origen en el destino elimina los archivos del destino que ya no existen en el origen, pero los archivos excluidos se omiten por completo, así que una limpieza en Compare sigue siendo la forma más clara y deliberada de eliminarlos.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare en RcloneView mostrando archivos del sistema sobrantes en el lado de la nube" class="img-large img-center" />

## Mantenlo limpio en cada ejecución

Guarda la sincronización filtrada como un trabajo en Job Manager para que las exclusiones se apliquen siempre. RcloneView ejecuta estos trabajos con los mismos filtros en Windows, macOS y Linux, algo importante cuando las personas que suben archivos usan sistemas operativos distintos. Con una licencia PLUS puedes programar el trabajo, y Job History muestra el número de archivos por ejecución: una caída repentina tras añadir los filtros es buena señal de que la basura ha desaparecido.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History en RcloneView mostrando el número de archivos tras excluir los archivos del sistema" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Crea o edita un trabajo de sincronización y añade `.DS_Store`, `Thumbs.db` y `desktop.ini` como filtros de exclusión personalizados en el Step 3.
3. Ejecuta un Dry Run para confirmar que los archivos de metadatos ya no están en la lista de transferencia.
4. Usa Compare para encontrar y eliminar las copias ya almacenadas en la nube.

Unos minutos de configuración de filtros mantienen tus carpetas en la nube legibles y tus sincronizaciones centradas en el trabajo real.

---

**Guías relacionadas:**

- [Solucionar filtros de sincronización que no excluyen archivos](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)
- [Reglas de filtro de rclone — Include y Exclude explicados](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [Limpiar una cuenta de almacenamiento en la nube llena](https://rcloneview.com/support/blog/manage-cloud-storage-full-cleanup-rcloneview)

<CloudSupportGrid />
