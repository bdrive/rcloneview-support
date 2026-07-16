---
slug: chunker-remote-split-large-files-rcloneview
title: "Remoto Chunker — Divide archivos grandes para proveedores de nube con límites de tamaño en RcloneView"
authors:
  - tayson
description: "Algunos proveedores de nube rechazan archivos que superan cierto tamaño. El remoto chunker de rclone divide automáticamente los archivos grandes en partes para subirlos y los reconstruye al descargarlos."
keywords:
  - rclone chunker remote
  - split large files cloud
  - cloud file size limit
  - upload large files cloud
  - chunked upload cloud
  - large file cloud storage
  - rclone split files
  - file size limit workaround
  - cloud upload size limit
  - chunker rcloneview
tags:
  - feature
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Remoto Chunker — Divide archivos grandes para proveedores de nube con límites de tamaño en RcloneView

> Tu archivo de video pesa 15 GB. El límite de subida de tu proveedor de nube es de 5 GB. En lugar de recodificar el video o buscar otro proveedor, el remoto chunker lo divide automáticamente.

Algunos proveedores de almacenamiento en la nube imponen límites máximos de tamaño de archivo. Google Drive tiene un tope de 5 TB (rara vez es un problema), pero otros proveedores —especialmente los planes gratuitos, los endpoints WebDAV y algunos servicios compatibles con S3— tienen límites mucho más bajos. El remoto chunker de rclone resuelve esto dividiendo de forma transparente los archivos grandes en fragmentos para la subida y reconstruyéndolos al descargarlos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cómo funciona Chunker

Un remoto chunker envuelve a otro remoto y:

1. **Divide los archivos** que superan un tamaño configurable en fragmentos numerados
2. **Sube los fragmentos** individualmente al proveedor de nube
3. **Al descargar**, reconstruye los fragmentos en el archivo original
4. **De forma transparente** — ves el archivo original en el explorador, no los fragmentos

Por ejemplo, un archivo de 15 GB con un tamaño de fragmento de 5 GB se convierte en tres fragmentos de 5 GB en el proveedor. Cuando lo navegas o lo descargas, aparece como un único archivo de 15 GB.

## Cuándo necesitas Chunker

| Escenario | Solución |
|----------|----------|
| El proveedor tiene un límite de tamaño de archivo | Chunker divide lo que supere el límite |
| El servidor WebDAV rechaza subidas grandes | Fragmentar en partes más pequeñas |
| Plan gratuito con límites por archivo | Dividir para ajustarse a los límites |
| La red falla en subidas grandes | Fragmentos más pequeños = reintentos más fáciles |

## Configura un remoto Chunker

<img src="/support/images/en/blog/new-remote.png" alt="Create chunker remote" class="img-large img-center" />

Crea un remoto chunker que envuelva tu remoto de almacenamiento de destino. Configura el tamaño de fragmento según los límites de tu proveedor.

## Combina con otros remotos

Chunker se puede combinar en capas con otros remotos especiales:

- **Chunker + Crypt**: Divide Y cifra archivos grandes
- **Chunker + Compress**: Divide Y comprime archivos grandes
- **Chunker + cualquier proveedor**: Funciona con más de 70 proveedores

## Notas importantes

- **Los fragmentos son específicos del proveedor**: los archivos fragmentados para un proveedor deben accederse a través de la misma configuración de chunker
- **No modifiques los fragmentos directamente**: accede siempre a través del remoto chunker para mantener la integridad
- **Elige el tamaño de fragmento con cuidado**: demasiado pequeño genera muchos archivos (listado más lento); demasiado grande anula el propósito

## Casos de uso

### Respaldar imágenes de máquinas virtuales

Las imágenes de disco de máquinas virtuales suelen pesar entre 50 y 200 GB. Chunker las divide para proveedores con límites de subida.

### Archivar archivos multimedia grandes

Videos en 4K, masters de audio en bruto y grandes conjuntos de datos que superan los límites de un solo archivo.

### Mejorar la fiabilidad de las subidas

Los fragmentos más pequeños son más fáciles de reintentar cuando las conexiones de red no son confiables. Si un fragmento de 1 GB falla, reintentas 1 GB en lugar del archivo completo de 50 GB.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Añade tu remoto de almacenamiento** normalmente.
3. **Crea un remoto chunker** que lo envuelva.
4. **Sube archivos grandes** a través del chunker.

Ningún archivo es demasiado grande, ningún límite de proveedor es demasiado pequeño.

---

**Guías relacionadas:**

- [Remoto Compress](https://rcloneview.com/support/blog/compress-remote-reduce-backup-size-rcloneview)
- [Remotos virtuales: Combine, Union, Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Cifra tus copias de seguridad en la nube](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
