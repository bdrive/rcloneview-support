---
slug: archive-google-drive-to-s3-glacier-rcloneview
title: "Archiva archivos de Google Drive en S3 Glacier — Almacenamiento a largo plazo con un 90% menos de costo con RcloneView"
authors:
  - tayson
description: "El almacenamiento de Google Drive es costoso para datos de archivo. Mueve los archivos antiguos a S3 Glacier por centavos por GB y mantenlos recuperables. RcloneView automatiza todo el proceso."
keywords:
  - google drive to glacier
  - google drive archive
  - s3 glacier archive
  - cheap cloud archive
  - google drive cold storage
  - archive old cloud files
  - google drive to s3
  - reduce google drive cost
  - long term cloud storage
  - cloud archive strategy
tags:
  - google-drive
  - s3
  - glacier
  - archive
  - cost-optimization
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Archiva archivos de Google Drive en S3 Glacier — Almacenamiento a largo plazo con un 90% menos de costo con RcloneView

> Estás pagando $10/mes por 2 TB de Google Drive, pero el 80% de esos archivos no se han abierto en un año. Muévelos a S3 Glacier por $1/TB/mes y reduce drásticamente tu factura de almacenamiento.

Los precios de Google Drive están diseñados para archivos activos: documentos que abres a diario, archivos que compartes con colegas. Pero la mayoría de las cuentas de Google Drive acumulan años de archivos a los que nunca se accede: carpetas de proyectos antiguos, trabajos completados, fotos archivadas, documentos obsoletos. Estos archivos ocupan almacenamiento costoso cuando podrían estar en S3 Glacier a una fracción del costo.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Comparación de costos

| Almacenamiento | Precio por TB/mes |
|---------|-------------------|
| Google Drive (One) | ~$5 |
| Google Workspace Business | ~$6 |
| S3 Standard | ~$23 |
| S3 Glacier Instant Retrieval | ~$4 |
| S3 Glacier Flexible Retrieval | ~$3.6 |
| S3 Glacier Deep Archive | ~$1 |

Mover 1 TB de archivos inactivos de Google Drive a Glacier Deep Archive ahorra ~$48/año.

## Qué archivar

Buenos candidatos para Glacier:

- Carpetas de proyectos completados (con más de 6 meses de antigüedad)
- Documentos fiscales y registros financieros (después de la presentación)
- Copias de seguridad antiguas de fotos/videos
- Datos de exempleados
- Archivos de equipo archivados

Malos candidatos (mantener en Google Drive):

- Documentos y hojas de cálculo activos
- Archivos de colaboración compartidos
- Archivos abiertos semanal o mensualmente

## Proceso de archivado

### 1) Identifica candidatos para archivar

Explora tu Google Drive en el explorador e identifica carpetas a las que no se ha accedido recientemente:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Google Drive for archive candidates" class="img-large img-center" />

### 2) Transfiere a S3 Glacier

Crea un trabajo de copia desde Google Drive a tu bucket de S3 configurado con una clase de almacenamiento Glacier:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Transfer to Glacier" class="img-large img-center" />

### 3) Verifica el archivo

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify archive completeness" class="img-large img-center" />

### 4) Elimina de Google Drive

Solo después de la verificación. Esto libera tu cuota de almacenamiento de Google Drive.

### 5) Programa el archivado periódico

Configura ejecuciones mensuales de archivado para nuevos candidatos:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule monthly archival" class="img-large img-center" />

## Notas importantes

- **La recuperación de Glacier cuesta dinero y toma tiempo** — Glacier Instant Retrieval ofrece acceso rápido; Deep Archive puede tardar más de 12 horas
- **Duración mínima de almacenamiento** — Glacier cobra por eliminación anticipada (90-180 días según la clase)
- **Verifica antes de eliminar** — confirma siempre que el archivo esté completo antes de eliminarlo de Drive

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Agrega los remotos** de Google Drive y S3.
3. **Identifica los archivos inactivos** en Google Drive.
4. **Copia a Glacier**, verifica y luego limpia Drive.

Archivos activos en Drive. Todo lo demás en Glacier.

---

**Guías relacionadas:**

- [Costos ocultos del almacenamiento en la nube](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)
- [Archivo en frío con Glacier](https://rcloneview.com/support/blog/cold-archive-glacier-rcloneview)
- [Comparar el contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
