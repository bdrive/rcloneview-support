---
slug: cleanup-empty-trash-cloud-storage-rcloneview
title: "Limpia el almacenamiento en la nube: vacía la papelera y elimina versiones antiguas con RcloneView"
authors:
  - tayson
description: "Libera espacio en el almacenamiento en la nube vaciando la papelera, eliminando versiones antiguas de archivos y limpiando datos huérfanos en Google Drive, OneDrive, S3 y más usando RcloneView."
keywords:
  - rclone cleanup cloud storage
  - empty google drive trash rclone
  - onedrive recycle bin cleanup
  - remove old versions s3
  - free cloud storage space
  - rcloneview cleanup feature
  - cloud storage versioning cleanup
  - rclone delete old versions
  - reclaim cloud quota
  - cloud storage trash management
tags:
  - RcloneView
  - feature
  - cleanup
  - cloud-storage
  - guide
  - tips
  - cost-optimization
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Limpia el almacenamiento en la nube: vacía la papelera y elimina versiones antiguas con RcloneView

> Los archivos eliminados y las versiones antiguas consumen silenciosamente tu cuota en la nube. RcloneView facilita limpiarlos y recuperar el almacenamiento por el que ya estás pagando.

Cada vez que eliminas un archivo en Google Drive, este va a la papelera. Cada vez que OneDrive sobrescribe un documento, conserva la versión anterior. Cada vez que un bucket de S3 con versionado habilitado recibe una actualización, el objeto anterior permanece. Estas copias invisibles se acumulan durante meses y años, consumiendo cuota e inflando las facturas de almacenamiento. El comando `cleanup` de rclone elimina este exceso oculto, y RcloneView te permite ejecutarlo con unos pocos clics.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cómo los archivos en la papelera y versionados desperdician cuota

La mayoría de los proveedores en la nube contabilizan los archivos en la papelera y versionados dentro de tu cuota de almacenamiento. El impacto suele ser mayor de lo esperado:

| Proveedor | Qué cuenta contra la cuota | Política de purga automática |
|----------|--------------------------|-------------------|
| **Google Drive** | Archivos en la papelera, todas las versiones de archivos | La papelera se elimina automáticamente después de 30 días |
| **OneDrive** | Elementos de la papelera de reciclaje, historial de versiones | La papelera de reciclaje se purga automáticamente después de 93 días |
| **Dropbox** | Archivos eliminados y versiones anteriores | Se conservan 30 días (Basic) o 180 días (Professional) |
| **Amazon S3** | Todas las versiones de objetos (si el versionado está habilitado) | Sin purga automática; se requieren reglas de ciclo de vida |
| **Backblaze B2** | Todas las versiones de archivos | Sin purga automática sin reglas de ciclo de vida |
| **Google Cloud Storage** | Versiones de objetos no actuales | Configurable mediante políticas de ciclo de vida |

Una cuenta de Google Drive al 90% de capacidad puede tener entre un 5% y un 10% de su uso únicamente en la papelera. En buckets de S3 con versionado, las versiones antiguas pueden duplicar o triplicar el consumo real de almacenamiento con el tiempo.

## Ejecutar la limpieza por proveedor

### Papelera de Google Drive

La papelera de Google Drive es la fuente más común de uso oculto. Para vaciarla:

```bash
rclone cleanup gdrive:
```

Esto elimina permanentemente todos los archivos de la papelera de Google Drive. No hay forma de deshacerlo: asegúrate de no necesitar nada de la papelera antes de ejecutar esto.

En RcloneView, puedes activar la limpieza desde la interfaz sin abrir la terminal. Navega hasta tu remoto de Google Drive y utiliza la acción de limpieza.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView showing Google Drive remote ready for cleanup" class="img-large img-center" />

### Papelera de reciclaje de OneDrive

OneDrive conserva los archivos eliminados en la papelera de reciclaje hasta 93 días:

```bash
rclone cleanup onedrive:
```

Esto vacía la papelera de reciclaje. Para cuentas de OneDrive Business con papeleras de reciclaje grandes, esto puede liberar espacio significativo de inmediato.

### Objetos versionados de S3

Los buckets de S3 con versionado habilitado acumulan versiones antiguas de objetos. La limpieza de rclone elimina las versiones no actuales:

```bash
rclone cleanup s3-remote:my-bucket
```

Para buckets con miles de objetos versionados, esta operación puede tardar. Puedes dirigirte a prefijos específicos para limpiar de forma selectiva:

```bash
rclone cleanup s3-remote:my-bucket/logs/
```

### Dropbox y otros proveedores

Dropbox no admite el comando cleanup directamente a través de rclone. Para Dropbox, gestiona los archivos eliminados y las versiones a través de la interfaz web o la API de Dropbox. Otros proveedores como pCloud y Backblaze B2 admiten la limpieza de forma similar a los ejemplos anteriores.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView explorer showing storage before cleanup" class="img-large img-center" />

## Comprobar cuánto espacio consume la papelera

Antes de ejecutar la limpieza, comprueba cuánto espacio puedes recuperar:

```bash
rclone about gdrive:
```

La salida incluye una línea **Trashed** que muestra exactamente cuánto espacio ocupan los archivos eliminados:

```
Total:   15 GiB
Used:    12.3 GiB
Free:    2.7 GiB
Trashed: 3.8 GiB
```

En este ejemplo, vaciar la papelera liberaría al instante 3.8 GiB, más del doble del espacio disponible.

## Eliminar versiones antiguas de archivos de forma selectiva

Algunos flujos de trabajo requieren conservar la última versión pero eliminar todo lo anterior. Rclone admite esto con comandos específicos de cada backend:

Para S3 con versionado:

```bash
rclone backend cleanup-hidden s3-remote:my-bucket
```

Esto elimina solo las versiones ocultas (no actuales) mientras mantiene intacta la versión actual de cada objeto.

Para Google Drive, puedes usar `--drive-keep-revision-forever=false` en la configuración de tu remoto para evitar la retención ilimitada de versiones en adelante.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Execute cleanup job in RcloneView" class="img-large img-center" />

## Automatizar la limpieza con trabajos programados

La limpieza manual funciona, pero la limpieza programada evita que el problema se repita:

1. En RcloneView, crea un nuevo **Trabajo** con el comando de limpieza para cada remoto.
2. Abre el **Programador de trabajos** y configura una programación recurrente: mensual es suficiente para la mayoría de las cuentas.
3. Revisa el **Historial de trabajos** después de cada ejecución para confirmar que la limpieza se realizó correctamente.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule automated cleanup job in RcloneView" class="img-large img-center" />

Una programación de limpieza mensual garantiza que la papelera y las versiones antiguas nunca se acumulen lo suficiente como para causar problemas de cuota o facturas infladas.

## Consideraciones de seguridad

- **La limpieza es permanente**: los archivos en la papelera no se pueden recuperar después de ejecutar `rclone cleanup`.
- **Audita la papelera primero**: revisa la papelera de tu proveedor a través de su interfaz web antes de purgarla.
- **El versionado de S3 tiene un propósito**: si dependes de las versiones para revertir cambios, no hagas limpieza indiscriminadamente. Considera reglas de ciclo de vida que conserven las últimas N versiones en su lugar.
- **Prueba primero en un remoto no crítico**: confirma que el comportamiento coincide con tus expectativas antes de ejecutar la limpieza en datos de producción.
- **La simulación (dry run) no está disponible** para la limpieza: a diferencia de sync o copy, no existe un modo `--dry-run`. Procede con confianza solo después de revisar lo que hay en tu papelera.

## El impacto en el costo

Para proveedores de pago por uso, la limpieza reduce directamente tu factura:

| Proveedor | Costo de almacenamiento | 100 GB de versiones antiguas/papelera |
|----------|-------------|------------------------------|
| Amazon S3 Standard | $0.023/GB/mes | $2.30/mes ahorrados |
| Backblaze B2 | $0.006/GB/mes | $0.60/mes ahorrados |
| Google Cloud Standard | $0.020/GB/mes | $2.00/mes ahorrados |
| Wasabi | $0.0069/GB/mes | $0.69/mes ahorrados |

Para proveedores basados en cuota, la limpieza evita alcanzar límites que interrumpen las sincronizaciones y las copias de seguridad.

---

**Guías relacionadas:**

- [Analiza el uso y las cuotas del almacenamiento en la nube](https://rcloneview.com/support/blog/rclone-about-storage-usage-analysis-rcloneview)
- [Comparativa de Wasabi vs Backblaze B2 vs IDrive e2](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)
- [Transferencias y sincronización de nube a nube](https://rcloneview.com/support/blog/effortless-cloud-to-cloud-transfers-syncing)

<CloudSupportGrid />
