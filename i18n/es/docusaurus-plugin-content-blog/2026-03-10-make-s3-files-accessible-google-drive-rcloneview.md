---
slug: make-s3-files-accessible-google-drive-rcloneview
title: "Cómo hacer que los archivos de AWS S3 sean accesibles desde Google Drive — Sincroniza buckets de S3 para la colaboración en equipo"
authors:
  - tayson
description: "AWS S3 es excelente para el almacenamiento, pero difícil de acceder para equipos no técnicos. Aprende a sincronizar el contenido de un bucket de S3 con Google Drive para compartir fácilmente usando RcloneView."
keywords:
  - s3 to google drive sync
  - aws s3 google drive
  - share s3 files team
  - s3 bucket google drive
  - make s3 accessible
  - s3 collaboration tool
  - sync s3 google drive
  - s3 files non technical users
  - aws s3 file sharing
  - s3 to gdrive transfer
tags:
  - aws-s3
  - google-drive
  - collaboration
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cómo hacer que los archivos de AWS S3 sean accesibles desde Google Drive — Sincroniza buckets de S3 para la colaboración en equipo

> Tus desarrolladores guardan todo en buckets de S3. Tu equipo de marketing usa Google Drive. Cuando marketing necesita un archivo de S3, le piden a un desarrollador que lo descargue y lo comparta. Hay una manera mejor.

AWS S3 es potente y económico, pero está diseñado para desarrolladores. La consola de AWS no es fácil de usar para miembros del equipo no técnicos, y compartir objetos individuales de S3 requiere generar URLs prefirmadas. Al sincronizar carpetas seleccionadas de S3 con Google Drive, todos pueden acceder a los archivos que necesitan sin credenciales de AWS.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## El problema

- **Los desarrolladores** almacenan recursos, informes y exportaciones en S3.
- **Los equipos no técnicos** (marketing, ventas, gestión) no pueden acceder fácilmente a S3.
- **Solución actual**: alguien descarga desde S3 y sube manualmente a Google Drive.
- **Resultado**: archivos desactualizados, trabajo extra y equipos frustrados.

## La solución

Usa RcloneView para sincronizar automáticamente carpetas específicas de S3 con Google Drive:

```
S3: reports/monthly/ → Google Drive: Shared/Monthly Reports/
S3: assets/marketing/ → Google Drive: Shared/Marketing Assets/
S3: exports/data/ → Google Drive: Shared/Data Exports/
```

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sync S3 to Google Drive" class="img-large img-center" />

## Configuración

### 1) Conecta ambas cuentas

Agrega AWS S3 y Google Drive como remotos:

<img src="/support/images/en/blog/new-remote.png" alt="Add S3 and Google Drive remotes" class="img-large img-center" />

### 2) Crea trabajos de sincronización selectiva

No sincronices todo el bucket de S3: sincroniza solo las carpetas que los equipos no técnicos necesitan. Usa reglas de filtro para incluir rutas o tipos de archivo específicos.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create S3 to Google Drive sync job" class="img-large img-center" />

### 3) Programa actualizaciones automáticas

Sincroniza cada hora o cada día para que Google Drive siempre tenga los archivos más recientes:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule S3 to Google Drive sync" class="img-large img-center" />

### 4) Verifica que la sincronización esté completa

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify S3 and Google Drive are in sync" class="img-large img-center" />

## Unidireccional vs. bidireccional

### Unidireccional (S3 → Google Drive)

Usa **Copy** o **Sync** desde S3 hacia Google Drive. Google Drive queda como solo lectura (un espejo). Los cambios deben hacerse en S3.

Ideal para: informes, exportaciones, recursos generados.

### Bidireccional

Sincroniza en ambas direcciones. Los cambios en Google Drive se sincronizan de vuelta a S3 y viceversa.

Ideal para: carpetas de trabajo compartidas donde ambos equipos contribuyen.

## Filtra por relevancia

No inundes Google Drive con todo lo que hay en S3. Usa filtros:

- Incluye solo `*.pdf`, `*.xlsx`, `*.pptx` — documentos de negocio.
- Excluye datos sin procesar, registros (logs) y archivos temporales.
- Usa `--max-age 90d` para sincronizar solo archivos recientes.

## Conciencia de costos

La salida de datos (egress) de S3 tiene costo ($90/TB por los primeros 10 TB). Para sincronizaciones frecuentes de grandes volúmenes de datos, considera:

- Sincronizar en horarios de baja demanda.
- Usar filtros para limitar el volumen de datos.
- Considerar Backblaze B2 o Wasabi como intermediario (egress gratuito o económico).

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Agrega S3 y Google Drive** como remotos.
3. **Crea trabajos de sincronización específicos** para carpetas concretas.
4. **Programa actualizaciones cada hora o diarias**.
5. **Comparte las carpetas de Google Drive** con tu equipo.

Cierra la brecha entre la infraestructura de los desarrolladores y la colaboración en equipo.

---

**Guías relacionadas:**

- [Crear trabajos de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Reglas de filtro de Rclone](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [Programación de trabajos](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Establecer límites de ancho de banda](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
