---
slug: drag-drop-cloud-transfer-guide-rcloneview
title: "Arrastrar y soltar entre nubes — La forma más rápida de transferir archivos con RcloneView"
authors:
  - tayson
description: "Transfiere archivos entre Google Drive, OneDrive, S3 y más de 70 nubes arrastrando y soltando en el explorador de dos paneles de RcloneView. Sin comandos, sin scripts."
keywords:
  - drag drop cloud transfer
  - drag and drop cloud files
  - easy cloud file transfer
  - visual cloud transfer
  - cloud file manager drag drop
  - transfer files between clouds
  - simple cloud migration
  - no code cloud transfer
  - cloud explorer drag drop
  - easy multi cloud transfer
tags:
  - drag-and-drop
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Arrastrar y soltar entre nubes — La forma más rápida de transferir archivos con RcloneView

> Selecciona archivos en Google Drive. Arrástralos a tu bucket de S3. Listo. Sin línea de comandos, sin scripts, sin un proceso de carga de cinco pasos. Solo arrastrar y soltar entre dos nubes cualesquiera.

La transferencia de archivos en la nube no debería requerir un título en ciencias de la computación. El explorador de dos paneles de RcloneView coloca dos ubicaciones de almacenamiento en la nube una junto a la otra — Google Drive y S3, OneDrive y Dropbox, NAS y Backblaze B2 — y te permite transferir archivos simplemente arrastrando de un lado al otro.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cómo funciona

### El explorador de dos paneles

RcloneView muestra dos ubicaciones de almacenamiento una junto a la otra — como un administrador de archivos de doble panel:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Two-pane cloud explorer" class="img-large img-center" />

- **Panel izquierdo**: Cualquier nube, NAS o unidad local.
- **Panel derecho**: Cualquier otra nube, NAS o unidad local.

### Arrastrar y soltar para transferir

1. Navega a la carpeta de origen en un lado.
2. Navega a la carpeta de destino en el otro.
3. Selecciona archivos o carpetas.
4. Arrastra de un lado al otro.
5. La transferencia comienza.

### Monitorea en tiempo real

Observa el progreso de la transferencia mientras los archivos se mueven:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor drag and drop transfer" class="img-large img-center" />

## Entre qué puedes arrastrar

Cualquier combinación funciona:

| Desde | Hacia | Ejemplo |
|------|-----|---------|
| Google Drive | AWS S3 | Hacer copia de seguridad de documentos en S3 |
| OneDrive | Dropbox | Compartir con un cliente que usa Dropbox |
| Unidad local | Backblaze B2 | Subir copia de seguridad local a la nube |
| NAS | Google Drive | Hacer que los archivos del NAS sean accesibles de forma remota |
| S3 | Azure Blob | Migración entre nubes |
| Dropbox | NAS | Descargar archivos de la nube al almacenamiento local |

## Más allá del simple arrastrar y soltar

### Para transferencias recurrentes → Crea un job

Si arrastras los mismos archivos regularmente, guárdalo como un job con nombre. Luego prográmalo para que se ejecute automáticamente:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Save drag-drop as scheduled job" class="img-large img-center" />

### Para verificación → Usa la comparación de carpetas

Después de transferir, compara ambos lados para asegurarte de que todo llegó:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify transfer completeness" class="img-large img-center" />

### Para transferencias grandes → Monitorea el progreso

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Track large file transfer" class="img-large img-center" />

## Consejos

- **Arrastra carpetas** para transferir árboles de directorios completos.
- **Selecciona varios archivos** antes de arrastrar para transferencias por lotes.
- **Haz clic derecho** para opciones adicionales (copiar, mover, sincronizar).
- **Usa la barra de direcciones** para navegar rápidamente a rutas específicas.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Agrega tus cuentas en la nube** — dos (o más) proveedores cualesquiera.
3. **Ábrelas una junto a la otra** en el explorador de dos paneles.
4. **Arrastra y suelta** para transferir.

Transferencias en la nube, simplificadas.

---

**Guías relacionadas:**

- [Crear jobs de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Comparar contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Montar almacenamiento en la nube](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)

<CloudSupportGrid />
