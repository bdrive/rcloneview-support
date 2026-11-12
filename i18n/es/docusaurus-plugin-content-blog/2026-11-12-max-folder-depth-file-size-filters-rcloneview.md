---
slug: max-folder-depth-file-size-filters-rcloneview
title: "Filtros de profundidad máxima de carpetas y tamaño máximo de archivo — Controla qué se sincroniza en RcloneView"
authors:
  - kai
description: "Usa los filtros Max folder depth y Max file size de RcloneView para omitir subcarpetas profundas y archivos demasiado grandes, y mantener tus trabajos de sincronización en la nube rápidos y enfocados."
keywords:
  - sincronización con profundidad máxima de carpetas
  - filtro de tamaño máximo de archivo
  - rclone max depth GUI
  - omitir archivos grandes en la sincronización en la nube
  - limitar niveles de carpetas en la sincronización
  - filtros de sincronización de RcloneView
  - excluir archivos grandes de la copia de seguridad
  - sincronización selectiva en la nube
  - sincronización superficial de carpetas
tags:
  - RcloneView
  - feature
  - filters
  - cloud-sync
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Filtros de profundidad máxima de carpetas y tamaño máximo de archivo — Controla qué se sincroniza en RcloneView

> Dos campos numéricos del asistente de sincronización deciden hasta qué profundidad llega un trabajo y qué tamaño puede tener un archivo antes de quedarse fuera.

No todos los trabajos de sincronización necesitan el árbol completo. Un equipo de diseño puede querer solo las carpetas de entrega de nivel superior del Dropbox de un cliente, no cada carpeta de trabajo anidada. Un usuario doméstico que hace copia de seguridad de Documents en OneDrive puede querer dejar fuera algunas imágenes de disco de 30 GB. RcloneView cubre ambos casos en el paso 3 del asistente de sincronización con **Max folder depth** y **Max file size**, y ambos están disponibles con la FREE License.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Max Folder Depth: limita hasta dónde llega un trabajo

Max folder depth establece cuántos niveles de carpetas por debajo del origen procesa el trabajo. Todo lo que esté más abajo se omite. Un valor bajo convierte un origen grande y extenso en una sincronización superficial de los niveles superiores.

Esto ayuda cuando los archivos importantes están cerca de la parte superior. Por ejemplo, la carpeta `Clients/` de una agencia puede contener una carpeta por cliente con las entregas finales, además de árboles anidados `working/` y `cache/` que llegan a diez niveles de profundidad. Un límite de profundidad conserva las entregas y omite el desorden sin necesidad de una larga lista de reglas de exclusión.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a remote in RcloneView before configuring a depth-limited sync job" class="img-large img-center" />

Los límites de profundidad se aplican de forma silenciosa. Un límite de profundidad que quedó de una ejecución de prueba hace que las subcarpetas más profundas desaparezcan de las sincronizaciones posteriores sin ningún error. Si faltan archivos en un destino, revisa primero este campo.

## Max File Size: deja fuera los archivos demasiado grandes

Max file size se introduce en MB, y cualquier archivo mayor que ese valor queda excluido. Usos habituales:

- Dejar fuera imágenes ISO, discos de máquinas virtuales y vídeo sin procesar al hacer copia de seguridad de una carpeta de trabajo.
- Mantener una sincronización hacia una cuenta gratuita más pequeña dentro de sus límites.
- Mantener ágil un trabajo nocturno de archivos de oficina omitiendo alguna exportación enorme ocasional.

El campo solo establece un límite superior. Para excluir un tipo de archivo conocido sin importar su tamaño, agrega una regla personalizada como `.iso` en el mismo paso.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job with file size filters in RcloneView Job Manager" class="img-large img-center" />

## Combínalos con otros filtros

Ambos campos funcionan junto con el resto del paso 3: Max file age (unidades `y`, `d`, `h`, `m`, `s`), los filtros predefinidos Music, Video, Image, Document, Google Docs y Box Docs, y las reglas personalizadas. Un trabajo puede sincronizar solo documentos de menos de 50 MB, modificados en los últimos 30 días y dentro de los tres primeros niveles de carpetas.

Los filtros cambian lo que una sincronización unidireccional considera parte del origen, así que ejecuta primero un **Dry Run**. Muestra los archivos que se copiarán y eliminarán, para que detectes un límite demasiado estricto antes de que cambie nada.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History in RcloneView showing file counts for filtered sync runs" class="img-large img-center" />

Después de ejecutar el trabajo, Job History muestra el número de archivos y el tamaño total de cada ejecución. Una caída repentina suele significar que un filtro está mal configurado.

## Primeros pasos

RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux.

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre Sync, elige un origen y un destino y ponle nombre al trabajo.
3. En el paso 3, establece Max folder depth y Max file size en MB.
4. Ejecuta un Dry Run, revisa la lista de archivos y guarda el trabajo en Job Manager.

Los trabajos más pequeños y enfocados terminan antes, usan menos almacenamiento y son más fáciles de revisar.

---

**Guías relacionadas:**

- [Filtros predefinidos para sincronizar tipos de archivo](https://rcloneview.com/support/blog/predefined-filters-sync-file-types-rcloneview)
- [Filtros basados en tiempo Min Age y Max Age](https://rcloneview.com/support/blog/min-age-max-age-time-based-filters-rcloneview)
- [Soluciona los filtros de sincronización que no excluyen archivos](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)

<CloudSupportGrid />
