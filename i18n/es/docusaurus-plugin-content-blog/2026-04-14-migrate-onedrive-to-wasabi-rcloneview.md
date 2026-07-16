---
slug: migrate-onedrive-to-wasabi-rcloneview
title: "Migrar OneDrive a Wasabi — Copia de seguridad en la nube con RcloneView"
authors:
  - tayson
description: "Mueve archivos de Microsoft OneDrive a Wasabi hot cloud storage usando RcloneView. Una guía paso a paso para la migración de OneDrive a Wasabi sin comandos de CLI."
keywords:
  - migrar OneDrive a Wasabi
  - transferencia de OneDrive a Wasabi
  - migración de OneDrive a S3
  - copia de seguridad en la nube de Wasabi desde OneDrive
  - rclone OneDrive Wasabi
  - migración de nube a nube OneDrive
  - mover archivos de Microsoft OneDrive a Wasabi
  - migración de OneDrive con RcloneView
tags:
  - onedrive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar OneDrive a Wasabi — Copia de seguridad en la nube con RcloneView

> Usa RcloneView para transferir archivos de Microsoft OneDrive al almacenamiento en la nube hot compatible con S3 de Wasabi — directamente de nube a nube, sin necesidad de descargas intermedias.

Las organizaciones suelen comenzar con OneDrive incluido en Microsoft 365, y luego se dan cuenta de que necesitan un nivel de copia de seguridad dedicado y rentable a medida que crecen los volúmenes de datos. El almacenamiento en la nube hot compatible con S3 de Wasabi es un destino popular: almacenamiento a tarifa fija y predecible, sin costos de salida de datos. RcloneView conecta ambos servicios a través de los backends de rclone, permitiéndote migrar contenido de OneDrive a buckets de Wasabi mediante una interfaz visual — sin necesidad de scripting.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar OneDrive y Wasabi

Agrega primero OneDrive: **pestaña Remote → New Remote → Microsoft OneDrive**, autentícate a través del inicio de sesión OAuth en el navegador y confirma que el remoto se haya guardado. Para OneDrive personal, el proceso es instantáneo. Para OneDrive for Business, es posible que debas seleccionar el tenant correcto durante la autenticación.

Agrega Wasabi a continuación: **New Remote → Amazon S3 Compatible → Wasabi**. Introduce tu access key y secret key de Wasabi, y selecciona el endpoint correcto para la región de tu bucket (por ejemplo, `s3.us-east-1.wasabisys.com`). La API de S3 de Wasabi es compatible con el backend de S3 de rclone sin necesidad de configuración especial.

<img src="/support/images/en/blog/new-remote.png" alt="Setting up OneDrive and Wasabi remotes in RcloneView" class="img-large img-center" />

## Planificar el alcance de la migración

Abre el Explorer en un diseño de dos paneles — OneDrive a la izquierda, Wasabi a la derecha. Recorre el árbol de OneDrive para identificar las carpetas que deseas migrar. Un departamento legal podría estar moviendo un archivo `Contracts/2020-2024/`; una agencia de diseño podría migrar una carpeta `Client-Assets/` con 500 GB de archivos en capas.

Usa la opción **Get Size** del clic derecho de RcloneView en la carpeta de origen para calcular el volumen total de datos antes de confirmar la transferencia. Para migraciones grandes, configura el trabajo para que se ejecute durante la noche si el ancho de banda se comparte con otros usuarios o servicios.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Viewing OneDrive to Wasabi transfer in RcloneView" class="img-large img-center" />

## Ejecutar el trabajo de sincronización con verificación

Crea un trabajo de Sync en Job Manager: el origen es tu ruta de OneDrive, el destino es la ruta de tu bucket de Wasabi. En el Paso 2, habilita la **verificación de checksum** para validar el hash de cada archivo después de la transferencia — esencial para archivos sensibles al cumplimiento normativo. Configura las transferencias concurrentes en 6–8 para equilibrar velocidad y estabilidad de la API.

Ejecuta primero el Dry Run para previsualizar la lista de operaciones. Los elementos de OneDrive con caracteres especiales en los nombres de archivo (comunes en contenido generado por usuarios) se marcarán para ajustes de codificación. Revisa la pestaña Log después del dry run para detectar cualquier problema antes de la transferencia real.

Después de la migración, usa la función **Folder Compare** de RcloneView para comparar visualmente el origen de OneDrive con el destino de Wasabi — confirmando que la cantidad de archivos y los tamaños coincidan antes de dar de baja la copia de OneDrive.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing OneDrive and Wasabi folders after migration in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega OneDrive mediante inicio de sesión OAuth y Wasabi mediante credenciales de S3 en el asistente New Remote.
3. Usa Folder Compare para evaluar el alcance de la migración, luego crea un trabajo de Sync en Job Manager.
4. Habilita la verificación de checksum, ejecuta un Dry Run y luego ejecuta la migración completa.

Migrar de OneDrive a Wasabi con RcloneView te ofrece un rastro de migración verificado y auditable — con historial de trabajos y registros de transferencia guardados automáticamente.

---

**Guías relacionadas:**

- [Migrar OneDrive a Backblaze B2 con RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)
- [Migrar OneDrive a Google Drive con RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [Gestionar la sincronización y copia de seguridad en la nube de OneDrive con RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
