---
slug: rclone-filter-rules-include-exclude-explained-rcloneview
title: "Reglas de filtro de rclone explicadas: patrones de inclusión y exclusión para sincronizaciones más inteligentes"
authors:
  - tayson
description: "Domina las reglas de filtro de rclone para sincronizar solo lo que necesitas. Aprende los patrones de include, exclude, filter-from y tamaño/antigüedad mínima/máxima, con ejemplos prácticos para RcloneView."
keywords:
  - rclone filter rules
  - rclone include exclude
  - rclone exclude folder
  - rclone filter from file
  - rclone sync specific files
  - rclone ignore files
  - rclone exclude pattern
  - rclone filter examples
  - rclone min size max size
  - rclone selective sync
tags:
  - RcloneView
  - rclone
  - filters
  - sync
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Reglas de filtro de rclone explicadas: patrones de inclusión y exclusión para sincronizaciones más inteligentes

> Sincronizarlo todo es un desperdicio. Sincronizar las cosas equivocadas es peligroso. Las reglas de filtro de rclone te permiten controlar con precisión qué se transfiere, pero la sintaxis puede resultar confusa. Esta guía lo explica todo con ejemplos prácticos.

Cuando sincronizas o copias archivos entre nubes, rara vez quieres sincronizarlo todo. Tal vez solo necesitas archivos `.pdf`, o todo excepto los archivos `.tmp`, o los archivos modificados en los últimos 7 días, o los archivos de menos de 100 MB. El sistema de filtros de rclone se encarga de todo esto, y RcloneView te permite configurar estos filtros de forma visual en la configuración de tu tarea.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cómo funcionan los filtros de rclone

Rclone procesa las reglas de filtro **en orden, de arriba hacia abajo**. Para cada archivo, comprueba las reglas una por una:

1. Si una regla coincide, el archivo se incluye o se excluye (según la regla).
2. Si ninguna regla coincide, el archivo se **incluye por defecto**.

Este comportamiento de "la primera coincidencia gana" es fundamental de entender. El orden importa.

## Patrones básicos

### Excluir archivos o carpetas específicos

```
--exclude "*.tmp"
--exclude "node_modules/**"
--exclude ".DS_Store"
```

Estos patrones excluyen:
- Todos los archivos `.tmp` en cualquier parte del árbol.
- La carpeta `node_modules` completa y su contenido.
- Todos los archivos `.DS_Store` (metadatos de macOS).

### Incluir solo archivos específicos

```
--include "*.pdf"
--include "*.docx"
```

Cuando usas `--include`, rclone **excluye automáticamente todo lo demás**. Por lo tanto, `--include "*.pdf"` significa "sincronizar solo PDFs, nada más".

### Combinar include y exclude

```
--include "*.jpg"
--include "*.png"
--exclude "*"
```

Esto incluye explícitamente solo los archivos JPG y PNG. El `--exclude "*"` al final captura todo lo demás.

## El flag --filter

El flag `--filter` te da tanto inclusión como exclusión en una sola regla:

```
--filter "+ *.pdf"
--filter "+ *.docx"
--filter "- *"
```

El prefijo `+` significa incluir, `-` significa excluir. Esto equivale a usar flags `--include` y `--exclude` por separado, pero de forma más compacta.

## Archivo Filter-From

Para conjuntos de reglas complejos, coloca tus filtros en un archivo:

```
--filter-from /path/to/filters.txt
```

**filters.txt:**
```
# Include documents
+ *.pdf
+ *.docx
+ *.xlsx

# Include images
+ *.jpg
+ *.png

# Exclude everything else
- *
```

Las líneas que comienzan con `#` son comentarios. Este es el enfoque recomendado para cualquier tarea de sincronización con más de 2-3 reglas.

## Filtros de directorio

### Excluir un directorio específico

```
--exclude "backup/**"
```

El `**` significa "este directorio y todo lo que contiene."

### Incluir solo un directorio específico

```
--include "/projects/**"
--exclude "*"
```

Esto sincroniza solo la carpeta `projects` en el nivel raíz.

### Excluir directorios por patrón

```
--exclude ".git/**"
--exclude "__pycache__/**"
--exclude "node_modules/**"
```

Habitual para desarrolladores que sincronizan repositorios de código: se omiten las carpetas de control de versiones y de dependencias.

## Filtros de tamaño

### Tamaño mínimo de archivo

```
--min-size 1M
```

Omite los archivos menores de 1 MB. Útil para ignorar miniaturas o archivos de caché pequeños.

### Tamaño máximo de archivo

```
--max-size 100M
```

Omite los archivos mayores de 100 MB. Útil cuando quieres documentos pero no archivos de vídeo.

### Unidades de tamaño

- `k` o `K` — Kilobytes
- `M` — Megabytes
- `G` — Gigabytes

Ejemplo: `--min-size 500k --max-size 2G` sincroniza archivos de entre 500 KB y 2 GB.

## Filtros de antigüedad

### Solo archivos recientes

```
--max-age 7d
```

Sincroniza solo los archivos modificados en los últimos 7 días. Ideal para copias de seguridad incrementales de proyectos activos.

### Solo archivos más antiguos

```
--min-age 30d
```

Sincroniza solo los archivos que no han cambiado en 30 días. Útil para archivar datos obsoletos.

### Unidades de antigüedad

- `ms` — Milisegundos
- `s` — Segundos
- `m` — Minutos
- `h` — Horas
- `d` — Días
- `w` — Semanas
- `M` — Meses
- `y` — Años

## Ejemplos prácticos

### Ejemplo 1: Copia de seguridad solo de documentos

Sincroniza PDFs, documentos de Word y hojas de cálculo desde Google Drive a Backblaze B2:

```
--include "*.pdf"
--include "*.docx"
--include "*.xlsx"
--include "*.pptx"
--exclude "*"
```

### Ejemplo 2: Omitir archivos de vídeo grandes

Sincroniza todo excepto los archivos de vídeo de más de 500 MB:

```
--exclude "*.mp4"
--exclude "*.mov"
--exclude "*.avi"
--exclude "*.mkv"
```

O usa filtrado por tamaño: `--max-size 500M`

### Ejemplo 3: Sincronización de proyecto de desarrollo

Sincroniza un proyecto de código sin dependencias ni artefactos de compilación:

```
--exclude "node_modules/**"
--exclude ".git/**"
--exclude "__pycache__/**"
--exclude "dist/**"
--exclude "build/**"
--exclude "*.pyc"
```

### Ejemplo 4: Archivar archivos de más de 90 días

Mueve archivos antiguos de Google Drive a S3 Glacier:

```
--min-age 90d
```

### Ejemplo 5: Copia de seguridad de fotos (omitir RAW, conservar JPEG)

```
--include "*.jpg"
--include "*.jpeg"
--include "*.png"
--include "*.heic"
--exclude "*.cr2"
--exclude "*.nef"
--exclude "*.arw"
--exclude "*"
```

## Uso de filtros en RcloneView

Al crear una tarea de sincronización o copia en RcloneView, puedes añadir reglas de filtro en la configuración de la tarea. Estas se pasan directamente a rclone:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configure filter rules in RcloneView jobs" class="img-large img-center" />

### Simulación (dry run) para verificar

Usa siempre una simulación (dry run) antes de probar nuevas reglas de filtro. Esto te muestra exactamente qué archivos se incluirían o excluirían sin transferir realmente nada.

### Comparación de carpetas con filtros

Usa la [Comparación de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents) para ver el estado de tu origen y destino. Combinado con filtros, esto te ayuda a entender exactamente qué se sincronizará.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder comparison to verify filter results" class="img-large img-center" />

## Errores comunes

### Olvidar el `**` final para los directorios

```
# Wrong — only excludes a FILE named "logs"
--exclude "logs"

# Right — excludes the logs DIRECTORY and everything in it
--exclude "logs/**"
```

### Incluir sin excluir el resto

```
# This includes PDFs but doesn't exclude anything else
--include "*.pdf"

# This works — include already implies "exclude everything else"
# But only when using --include alone
```

### El orden importa

```
# This excludes everything, then tries to include (too late!)
--exclude "*"
--include "*.pdf"

# This works — include first, then exclude the rest
--include "*.pdf"
--exclude "*"
```

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Crea una tarea** con reglas de filtro en la configuración.
3. **Ejecuta primero una simulación (dry run)** para verificar que tus filtros capturan los archivos correctos.
4. **Ejecuta la tarea** una vez que tengas confianza.
5. **Usa archivos filter-from** para conjuntos de reglas complejos y reutilizables.

Los filtros convierten un "sincronizar todo" tosco en un "sincronizar exactamente lo que necesito" preciso. Domínalos una vez, úsalos en todas partes.

---

**Guías relacionadas:**

- [Crear tareas de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Comparar contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Programación de tareas](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Establecer límites de ancho de banda](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
