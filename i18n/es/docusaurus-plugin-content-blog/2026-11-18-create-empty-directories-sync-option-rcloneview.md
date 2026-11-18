---
slug: create-empty-directories-sync-option-rcloneview
title: "Crear directorios vacíos — Conserva la estructura completa de carpetas al sincronizar en RcloneView"
authors:
  - alex
description: "Usa la opción de sincronización Create empty directories de RcloneView para copiar árboles de carpetas completos, incluidas las carpetas de proyecto vacías, entre el almacenamiento en la nube y unidades locales."
keywords:
  - sincronizar directorios vacíos
  - rclone create empty src dirs
  - conservar estructura de carpetas en la nube
  - copiar carpetas vacías a la nube
  - sincronizar carpetas vacías google drive
  - copia de seguridad de plantillas de carpetas
  - opciones de sincronización de RcloneView
  - rclone no copia carpetas vacías
  - replicar árbol de directorios en la nube
tags:
  - RcloneView
  - feature
  - cloud-sync
  - file-management
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Crear directorios vacíos — Conserva la estructura completa de carpetas al sincronizar en RcloneView

> Si la organización de tus carpetas importa tanto como tus archivos, activa una sola casilla para que las carpetas vacías también lleguen al destino.

De forma predeterminada, rclone copia archivos, no carpetas, por lo que un directorio vacío en el origen nunca aparece en el destino. Normalmente no es un problema, hasta que restauras una copia de seguridad y descubres que las carpetas `/Invoices/2027`, `/Raw` y `/Exports` de las que depende tu equipo han desaparecido. RcloneView ofrece este comportamiento como una única opción en el asistente de sincronización, para que conserves todo el árbol sin escribir flags de rclone.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué desaparecen las carpetas vacías

rclone mueve objetos. Una tarea de sincronización recorre el origen, encuentra archivos y recrea la ruta de cada archivo en el destino. Una carpeta sin archivos no genera nada que transferir, así que la tarea la omite. Muchos servicios en la nube, y en particular el almacenamiento de objetos tipo S3, no guardan las carpetas como objetos independientes. Allí una "carpeta" es solo un prefijo compartido en los nombres de archivo.

Esto sorprende a quienes trabajan con plantillas de carpetas. Una productora de video podría empezar cada trabajo con un esqueleto de `01_Footage`, `02_Audio`, `03_Graphics` y `04_Deliverables`. Una firma contable podría crear una carpeta por cliente y por año antes de que llegue cualquier documento. Si esos esqueletos vacíos no se sincronizan, los colaboradores del lado del destino ven una estructura incompleta.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing a project folder tree between two cloud remotes in RcloneView" class="img-large img-center" />

## Activar Create empty directories

La opción está en **Step 1: Configure Storage** del asistente de sincronización, junto a los ajustes de origen, destino y dirección de sincronización. Elige el origen y el destino y marca **Create empty directories**. Cuando la tarea se ejecuta, RcloneView indica a rclone que recree en el destino las carpetas vacías del origen, lo que equivale en la interfaz gráfica al flag `--create-empty-src-dirs` de rclone.

Como el ajuste se guarda con la tarea, se aplica en cada ejecución, tanto si inicias la tarea manualmente desde Job Manager como si la lanza una programación PLUS. También funciona con la sincronización 1:N, de modo que el mismo esqueleto de carpetas llega a cada destino que añadas.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a saved sync job with empty directory creation enabled in RcloneView" class="img-large img-center" />

## Combínalo con filtros y Dry Run

La creación de carpetas vacías funciona junto con los filtros de Step 3. Si excluyes `.git/` o limitas la tarea con **Max folder depth**, solo se crean las carpetas que cumplen esas reglas. Ejecuta primero un **Dry Run** para previsualizar las operaciones antes de escribir nada. Esto es especialmente importante en la sincronización unidireccional, que también elimina del destino los elementos que ya no existen en el origen.

En almacenamiento basado en buckets como Amazon S3, Wasabi o Backblaze B2, mantén expectativas realistas. Estos backends no tienen directorios reales, por lo que las carpetas vacías podrían no conservarse como en Google Drive, OneDrive, Dropbox, SFTP o un disco local.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare showing left-only folders after a sync in RcloneView" class="img-large img-center" />

Cuando la tarea termine, abre **Folder Compare** sobre las mismas dos ubicaciones para revisar el resultado lado a lado. La sincronización y Folder Compare están disponibles con la licencia FREE.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre **Sync** desde la pestaña Home y elige las carpetas de origen y destino.
3. Marca **Create empty directories** en Step 1 y luego configura los filtros que necesites en Step 3.
4. Ejecuta un Dry Run, guarda la tarea y ejecútala desde Job Manager.

Cuando se conservan las carpetas vacías, una restauración o migración vuelve con la misma estructura que configuró tu equipo.

---

**Guías relacionadas:**

- [Filtros Max Folder Depth y Max File Size](https://rcloneview.com/support/blog/max-folder-depth-file-size-filters-rcloneview)
- [Dry Run — Previsualiza la sincronización en la nube antes de transferir](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [Solucionar filtros de sincronización que no excluyen archivos](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)

<CloudSupportGrid />
