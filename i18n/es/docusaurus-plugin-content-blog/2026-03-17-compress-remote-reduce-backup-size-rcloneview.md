---
slug: compress-remote-reduce-backup-size-rcloneview
title: "Remoto de compresión — Reduce el tamaño de tus copias de seguridad en la nube automáticamente en RcloneView"
authors:
  - tayson
description: "RcloneView admite el remoto de compresión de rclone, que comprime automáticamente los archivos antes de subirlos al almacenamiento en la nube. Ahorra costos de almacenamiento y ancho de banda en cada copia de seguridad."
keywords:
  - rclone compress remote
  - compress cloud backup
  - reduce cloud storage size
  - compressed cloud upload
  - rcloneview compress
  - save cloud storage space
  - compress before upload
  - cloud backup compression
  - reduce backup size
  - rclone compression
tags:
  - RcloneView
  - feature
  - cost-optimization
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Remoto de compresión — Reduce el tamaño de tus copias de seguridad en la nube automáticamente en RcloneView

> Tu copia de seguridad de 500 GB podría ser de 300 GB con compresión. El remoto de compresión envuelve cualquier proveedor de la nube con compresión gzip automática: copias de seguridad más pequeñas, costos más bajos, los mismos datos.

Los costos del almacenamiento en la nube escalan con el tamaño. Si puedes reducir el tamaño de tus copias de seguridad entre un 30 y un 60 %, ahorras esa misma proporción en tu factura de almacenamiento cada mes. El remoto de compresión de rclone ofrece compresión transparente: los archivos se comprimen antes de la subida y se descomprimen al descargarlos, sin pasos manuales. RcloneView te permite configurarlo visualmente y gestionar las copias de seguridad comprimidas junto con tus otras cuentas en la nube.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cómo funciona el remoto de compresión

Un remoto de compresión envuelve otro remoto (Google Drive, S3, B2, etc.) y automáticamente:

1. **Comprime los archivos** usando gzip antes de subirlos
2. **Descomprime los archivos** de forma transparente al descargarlos
3. **Omite los formatos ya comprimidos** (jpg, mp4, zip, etc.) para evitar desperdiciar CPU

Interactúas con el remoto de compresión como con cualquier otro remoto — navegar, copiar, sincronizar — pero los archivos en el destino se almacenan comprimidos.

## Ahorro de compresión por tipo de archivo

| Tipo de archivo | Compresión típica | Ejemplo |
|-----------|-------------------|---------|
| Archivos de texto, CSV, logs | 60-90% más pequeño | 100 MB → 10-40 MB |
| Documentos de oficina (docx, xlsx) | 5-15% más pequeño | Ya comprimidos en cierta medida |
| Volcados de bases de datos | 50-80% más pequeño | 1 GB → 200-500 MB |
| Código fuente | 60-80% más pequeño | 500 MB → 100-200 MB |
| Fotos (JPG, PNG) | ~0% | Ya comprimidas |
| Video (MP4, MKV) | ~0% | Ya comprimido |
| Archivos ZIP/RAR | ~0% | Ya comprimidos |

Ideal para: datos con mucho texto, logs, copias de seguridad de bases de datos, código fuente, formatos de datos sin comprimir.
No es útil para: fotos, videos y archivos ya comprimidos.

## Configura un remoto de compresión

<img src="/support/images/en/blog/new-remote.png" alt="Create compress remote" class="img-large img-center" />

Crea un remoto de compresión que envuelva tu remoto de almacenamiento existente. Luego usa el remoto de compresión como destino de tu copia de seguridad en lugar del remoto original.

## Casos de uso

### Comprimir copias de seguridad de logs

Los logs de servidor se comprimen extremadamente bien (80-90%). Un archivo de logs de 50 GB se convierte en 5-10 GB en el almacenamiento en la nube.

### Reducir los costos de las copias de seguridad de bases de datos

Los volcados diarios de bases de datos son altamente comprimibles. Comprímelos antes de subirlos para reducir la factura de almacenamiento en la nube.

### Archivos de código fuente

Los proyectos de desarrollo con miles de archivos de texto se benefician significativamente de la compresión.

### Programar copias de seguridad comprimidas

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule compressed backup" class="img-large img-center" />

## Notas importantes

- **Sobrecarga de CPU**: la compresión usa CPU durante la subida y la descarga. Los CPU modernos manejan esto fácilmente.
- **No todos los archivos se comprimen**: los formatos ya comprimidos (JPG, MP4, ZIP) pasan sin comprimir.
- **Acceso transparente**: los archivos aparecen normales al navegar a través del remoto de compresión — la descompresión ocurre automáticamente.
- **Combinado con cifrado**: puedes combinar remotos de compresión + crypt para copias de seguridad comprimidas Y cifradas.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Agrega tu almacenamiento en la nube** como un remoto normal.
3. **Crea un remoto de compresión** que lo envuelva.
4. **Usa el remoto de compresión** como destino de tu copia de seguridad.
5. **Disfruta de copias de seguridad más pequeñas** y costos más bajos.

Copias de seguridad más pequeñas, facturas más bajas, los mismos datos.

---

**Guías relacionadas:**

- [Costos ocultos del almacenamiento en la nube](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)
- [Cifra tus copias de seguridad en la nube](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [Remotos virtuales: Combine, Union, Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)

<CloudSupportGrid />
