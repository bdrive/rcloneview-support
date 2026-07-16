---
slug: migrate-box-to-google-drive-rcloneview
title: "Migrar de Box a Google Drive — Transfiere archivos y carpetas con RcloneView"
authors:
  - tayson
description: "¿Te mudas de Box a Google Drive? Transfiere toda tu cuenta de Box, incluyendo carpetas, archivos compartidos y archivos históricos, a Google Drive con verificación completa usando RcloneView."
keywords:
  - box to google drive
  - migrate box to gdrive
  - box migration tool
  - box to google workspace
  - switch from box
  - box file transfer
  - box to google shared drive
  - box cloud migration
  - box alternative google
  - transfer box files
tags:
  - box
  - google-drive
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de Box a Google Drive — Transfiere archivos y carpetas con RcloneView

> Box te ha servido bien, pero ahora Google Workspace tiene más sentido. Transfiere todo — archivos personales, carpetas compartidas y archivos históricos de departamentos — a Google Drive sin perder un solo archivo.

Box es popular en entornos empresariales, pero muchas organizaciones consolidan en Google Workspace para lograr una integración más estrecha con Gmail, Calendar y Docs. La migración necesita preservar las estructuras de carpetas, manejar grandes conjuntos de datos y verificar que esté completa. RcloneView se conecta de forma nativa tanto a Box como a Google Drive.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta Box y Google Drive

<img src="/support/images/en/blog/new-remote.png" alt="Add Box and Google Drive" class="img-large img-center" />

## Proceso de migración

### 1) Mapea la estructura de carpetas

| Box | Google Drive |
|-----|-------------|
| Carpetas personales | Mi unidad |
| Carpetas compartidas | Unidad compartida |
| Archivos históricos de departamentos | Carpetas de la unidad compartida |

### 2) Transfiere carpeta por carpeta

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box to Google Drive" class="img-large img-center" />

### 3) Programa las transferencias grandes fuera de horas pico

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule migration" class="img-large img-center" />

### 4) Verifica que esté completo

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Box migration" class="img-large img-center" />

## Consideraciones específicas de Box

- **El historial de versiones de archivos de Box** no se transfiere — solo migra la versión actual
- **Box Notes** es un formato propietario — expórtalos antes de la migración
- **Los enlaces compartidos** no se trasladan — actualiza tus marcadores después de la migración
- **Empresas grandes**: crea trabajos por lotes para cada departamento y así obtener fragmentos manejables

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Agrega los remotos** de **Box** y **Google Drive**.
3. **Transfiere por lotes** con verificación.
4. **Mantén Box activo** durante la transición.

Migración limpia, verificación completa.

---

**Guías relacionadas:**

- [Migrar de Box a SharePoint](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)
- [Migrar de Dropbox Business a Google](https://rcloneview.com/support/blog/migrate-dropbox-business-to-google-workspace-rcloneview)
- [Comparar el contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
