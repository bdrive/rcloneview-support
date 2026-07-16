---
slug: migrate-sharepoint-to-google-drive-rcloneview
title: "Migrar de SharePoint a Google Drive — Transfiere bibliotecas de documentos con RcloneView"
authors:
  - tayson
description: "¿Cambias de Microsoft 365 a Google Workspace? Transfiere bibliotecas de documentos de SharePoint y archivos de OneDrive a Google Drive y Unidades compartidas usando RcloneView."
keywords:
  - sharepoint to google drive
  - migrate sharepoint to gdrive
  - sharepoint migration tool
  - microsoft to google migration
  - sharepoint to google workspace
  - sharepoint document library transfer
  - office 365 to google
  - sharepoint google drive sync
  - cross platform cloud migration
  - enterprise cloud migration
tags:
  - sharepoint
  - google-drive
  - migration
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de SharePoint a Google Drive — Transfiere bibliotecas de documentos con RcloneView

> Tu organización pasa de Microsoft 365 a Google Workspace. Las bibliotecas de SharePoint, los archivos personales de OneDrive y años de documentos de equipo deben llegar intactos a Google Drive. Así se hace.

Migrar de SharePoint a Google Drive es el proceso inverso de una de las migraciones a la nube más comunes en el entorno empresarial. Ya sea por coste, preferencia de plataforma o cambios organizativos, el reto es el mismo: miles de archivos en bibliotecas de documentos estructuradas deben transferirse sin problemas a Google Drive y a las Unidades compartidas. RcloneView gestiona ambos lados de forma nativa.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Planificación de la migración

### Mapeo de estructura

| SharePoint | Google Workspace |
|-----------|-----------------|
| Bibliotecas de documentos | Unidades compartidas |
| OneDrive (personal) | Mi unidad (personal) |
| Sitios de equipo | Unidad compartida por equipo |
| Archivos compartidos | Carpetas de la Unidad compartida |

### Conecta ambas plataformas

<img src="/support/images/en/blog/new-remote.png" alt="Connect SharePoint and Google Drive" class="img-large img-center" />

Agrega tus cuentas de SharePoint/OneDrive y de Google Drive en RcloneView.

## Pasos de la migración

### 1) Transfiere bibliotecas de documentos

Abre SharePoint en un panel y la Unidad compartida de Google en el otro. Transfiere biblioteca por biblioteca:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="SharePoint to Google Drive transfer" class="img-large img-center" />

### 2) Migra los archivos personales de OneDrive

Los archivos de OneDrive de cada usuario se trasladan a su Mi unidad de Google Drive.

### 3) Verifica que todo esté completo

La comparación de carpetas confirma que se transfirió cada archivo:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration" class="img-large img-center" />

### 4) Programa las migraciones grandes durante la noche

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule overnight migration" class="img-large img-center" />

### 5) Supervisa el progreso

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor migration progress" class="img-large img-center" />

## Consideraciones importantes

- **Conversión de formato de archivo**: Google puede ver archivos de Office de forma nativa; la conversión al formato de Google Docs es opcional
- **Mapeo de permisos**: Los permisos de archivo no se transfieren automáticamente; planifica los permisos de la Unidad compartida por separado
- **Longitud de ruta**: SharePoint permite rutas más largas de lo que algunos esperan; verifica la compatibilidad
- **Bibliotecas grandes**: Divídelas en lotes por departamento o proyecto

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Agrega los remotos** de **SharePoint** y **Google Drive**.
3. **Mapea las bibliotecas** a las Unidades compartidas.
4. **Transfiere y verifica** por lotes.

Cambio de plataforma limpio, sin pérdida de datos.

---

**Guías relacionadas:**

- [Migrar de Google Workspace a Microsoft 365](https://rcloneview.com/support/blog/migrate-google-workspace-to-microsoft-365-rcloneview)
- [Migración a la nube sin tiempo de inactividad](https://rcloneview.com/support/blog/migrate-cloud-storage-zero-downtime-rcloneview)
- [Comparar el contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
