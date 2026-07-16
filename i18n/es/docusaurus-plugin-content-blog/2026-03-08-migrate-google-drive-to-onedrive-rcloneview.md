---
slug: migrate-google-drive-to-onedrive-rcloneview
title: "Cómo migrar de Google Drive a OneDrive — Guía completa de transferencia con RcloneView"
authors:
  - tayson
description: "¿Vas a pasar de Google Workspace a Microsoft 365? Aprende cómo migrar todos tus archivos de Google Drive a OneDrive sin perder la estructura de carpetas usando RcloneView."
keywords:
  - migrate google drive to onedrive
  - google drive to onedrive transfer
  - switch google workspace to microsoft 365
  - move files google drive onedrive
  - google to microsoft migration
  - cloud to cloud migration tool
  - google drive onedrive sync
  - transfer google drive files
  - google workspace to office 365
  - cloud migration without data loss
tags:
  - google-drive
  - onedrive
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cómo migrar de Google Drive a OneDrive — Guía completa de transferencia con RcloneView

> ¿Estás pasando de Google Workspace a Microsoft 365? El mayor dolor de cabeza no son las nuevas aplicaciones, sino mover terabytes de archivos de Google Drive a OneDrive sin perder tu estructura de carpetas, tus permisos de uso compartido ni la cordura.

Ya sea que tu organización esté cambiando de suite de productividad o simplemente quieras tener una copia de tu Google Drive en OneDrive, el proceso de migración puede ser doloroso. Google Takeout exporta un archivo ZIP que pierde la estructura de carpetas. Arrastrar y soltar manualmente lleva una eternidad. RcloneView lo gestiona correctamente: transferencia directa de nube a nube que preserva tus carpetas.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ¿Por qué no usar Google Takeout?

Google Takeout es la herramienta oficial de exportación de Google, pero tiene limitaciones importantes para la migración:

- **Exporta como ZIP** — Obtienes un archivo comprimido, no una estructura de carpetas activa.
- **Pierde la organización** — Las Unidades compartidas y las jerarquías de carpetas pueden aplanarse.
- **Sin actualizaciones incrementales** — Si los archivos cambian durante la exportación, tienes que empezar de nuevo.
- **Reincorporación manual** — Igualmente tienes que subir todo a OneDrive.

RcloneView transfiere los archivos directamente de Google Drive a OneDrive, preservando la estructura de carpetas original.

## Migración paso a paso

### 1) Conecta ambas cuentas

Añade tanto Google Drive como OneDrive como remotos en RcloneView:

<img src="/support/images/en/blog/new-remote.png" alt="Add Google Drive and OneDrive remotes" class="img-large img-center" />

### 2) Explora y planifica

Abre ambos remotos en el explorador de dos paneles. Google Drive a la izquierda, OneDrive a la derecha:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Google Drive and OneDrive side by side" class="img-large img-center" />

Revisa la estructura de tu Google Drive antes de migrar. Identifica:

- Qué carpetas migrar (quizás no todas).
- El tamaño total (afecta el tiempo de transferencia).
- Documentos, Hojas de cálculo y Presentaciones de Google (necesitan conversión; ver más abajo).

### 3) Gestiona los archivos nativos de Google

Los Documentos, Hojas de cálculo y Presentaciones de Google no son archivos tradicionales: son archivos basados en la web. Al transferirlos, rclone los convierte a formatos de Microsoft Office:

| Formato de Google | Se convierte a |
|---------------|------------|
| Google Docs | .docx |
| Google Sheets | .xlsx |
| Google Slides | .pptx |
| Google Drawings | .png |

Esta conversión ocurre automáticamente durante la transferencia.

### 4) Inicia la transferencia

Crea un trabajo de **Copia** de Google Drive a OneDrive:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run migration job" class="img-large img-center" />

Usa **Copia** (no Sincronización) para la migración. Copia solo añade archivos al destino; nunca elimina nada.

### 5) Supervisa el progreso

Observa la transferencia en tiempo real:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Google Drive to OneDrive transfer" class="img-large img-center" />

### 6) Verifica con la comparación de carpetas

Después de completar la transferencia, compara ambos lados para asegurarte de que no falte nada:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration completeness" class="img-large img-center" />

## Consejos de migración

### Migra por lotes

Para unidades grandes (500 GB o más), migra carpeta por carpeta en lugar de todo a la vez:

1. Empieza con las carpetas críticas (Documentos, Proyectos).
2. Mueve a continuación las carpetas compartidas.
3. Deja el archivo histórico y los medios para el final.

De esta forma, los usuarios pueden empezar a trabajar en OneDrive de inmediato con sus archivos más importantes.

### Gestiona los límites de tasa

Tanto Google Drive como OneDrive tienen límites de tasa de API. RcloneView los respeta automáticamente, pero para migraciones muy grandes:

- Usa la [limitación de ancho de banda](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview) para evitar alcanzar los límites.
- Programa las transferencias fuera del horario laboral.
- Deja que las transferencias fallidas se reintenten automáticamente (función de v1.3).

### Ejecuta actualizaciones incrementales

Después de la migración inicial, vuelve a ejecutar el mismo trabajo de Copia. Solo transfiere los archivos nuevos o modificados, omitiendo lo que ya se copió. Esto captura cualquier archivo que se haya añadido a Google Drive durante la migración.

## Después de la migración: mantén ambas sincronizadas

Si necesitas tener ambas nubes activas durante un período de transición, configura una sincronización programada:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule ongoing sync during transition" class="img-large img-center" />

Esto mantiene OneDrive actualizado con cualquier cambio en Google Drive hasta que completes la transición por completo.

## Problemas comunes

### "Nombre de archivo demasiado largo"

OneDrive tiene un límite de ruta de 400 caracteres. Google Drive es más permisivo. Si te encuentras con esto, acorta los nombres de carpetas anidadas en profundidad antes de migrar.

### Archivos de Unidades compartidas

Las Unidades compartidas de Google (antes Team Drives) están separadas de tu Mi unidad personal. Añádelas como un remoto independiente o configura rclone para incluir las Unidades compartidas.

### Archivos grandes

OneDrive Business admite archivos de hasta 250 GB. OneDrive Personal también admite hasta 250 GB. Verifica tus archivos más grandes antes de empezar.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Añade Google Drive y OneDrive** como remotos.
3. **Ejecuta un trabajo de Copia** — la estructura de carpetas se preserva automáticamente.
4. **Verifica con la comparación de carpetas** — asegúrate de que no falte nada.
5. **Programa actualizaciones incrementales** hasta que la transición se complete.

No dejes que la migración de archivos sea el cuello de botella en tu cambio de plataforma.

---

**Guías relacionadas:**

- [Crear trabajos de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Comparar el contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Establecer límites de ancho de banda](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)
- [Programación de trabajos](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
