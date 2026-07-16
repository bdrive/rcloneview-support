---
slug: transfer-wasabi-to-google-drive-rcloneview
title: "Transferir archivos entre Wasabi y Google Drive con RcloneView"
authors:
  - tayson
description: "Mueve o realiza copias de seguridad de datos entre buckets de Wasabi y Google Drive con RcloneView: configura remotos rápidamente, optimiza las subidas S3, compara antes de sincronizar y programa trabajos continuos."
keywords:
  - transferencia de Wasabi a Google Drive
  - migración en la nube de Wasabi
  - copia de seguridad de nube a nube
  - rcloneview
  - rclone s3
  - migración a google drive
  - sincronización en la nube
  - transferencia wasabi google drive
  - subida multiparte s3
  - automatización en la nube
tags:
  - cloud-migration
  - wasabi
  - google-drive
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Transferir archivos entre Wasabi y Google Drive con RcloneView

> Mueve terabytes de Wasabi a Google Drive (o al revés) sin lidiar con líneas de comandos. RcloneView combina la velocidad de rclone y el ajuste de S3 en una GUI guiada para que puedas comparar, sincronizar y programar migraciones con confianza.

RcloneView es compatible tanto con almacenamiento compatible con S3 como Wasabi como con el flujo OAuth de Google Drive. Abre ambos remotos uno al lado del otro, elige Explorer/Compare/Sync según tu flujo de trabajo, y aplica una fragmentación adecuada para S3 para mantener estables las subidas grandes.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Wasabi frente a Google Drive de un vistazo

- **Wasabi**: API de S3, ingesta rápida, bajo costo de almacenamiento, endpoints por bucket (por ejemplo, `s3.us-east-1.wasabisys.com`).
- **Google Drive / Workspace**: Uso compartido familiar, fuerte colaboración, cuotas de API a tener en cuenta durante ráfagas.
- **RcloneView**: Una sola interfaz para ambos-compara antes de sincronizar, arrastra y suelta, ejecuta simulaciones (dry runs) y programa trabajos recurrentes.

## Agregar un remoto de Wasabi (compatible con S3)

1. Haz clic en **`+ New Remote`** -> elige **S3**.
2. Ingresa tu **Access Key** / **Secret Key**, la región del bucket y el endpoint (por ejemplo, `s3.wasabisys.com` o la URL específica de la región).
3. Guárdalo como `Wasabi_Archive` (o similar) para mayor claridad.  
   <img src="/support/images/en/tutorials/add-new-wasabi-remote-configuration.png" alt="New remote wizard" class="img-large img-center" />

Configuración de referencia: [Configuración compatible con S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)

## Conectar Google Drive con OAuth

1. En **`+ New Remote`**, selecciona **Google Drive**.
2. Inicia sesión mediante la ventana de OAuth del navegador y confirma la cuenta o el Workspace al que vas a migrar.
3. Nómbralo (por ejemplo, `GDrive_Workspace`).

Más detalles: [Agregar Google Drive mediante OAuth](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)

## Abrir ambas nubes una al lado de la otra

1. En **Explorer -> Browse**, abre tu remoto **Wasabi** en un lado y **Google Drive** en el otro.
2. Navega hasta el bucket/carpeta de origen y la carpeta de destino en Drive.  


## Elegir el mejor método de transferencia

- **Drag & Drop (Explorer)**: Copias rápidas para carpetas seleccionadas. El progreso aparece en los registros de **Transfer**.
- **Compare -> Copy**: Previsualiza las diferencias primero; copia los archivos faltantes/más recientes con confianza.
- **Sync**: Espejo unidireccional para copias de seguridad continuas (Wasabi -> Drive o al revés). Agrega **`--dry-run`** primero para validar.
- ¿Necesitas una guía paso a paso? Consulta el flujo del tutorial multi-nube: [Transferir archivos entre MEGA y Google Drive](https://rcloneview.com/support/tutorials/transfer-files-between-mega-and-google-drive)

## Crear un trabajo de copia de seguridad programado

1. Después de una sincronización exitosa, haz clic en **Save to Jobs**.
2. Abre **Job Manager** -> **Add Job** (o edita el guardado) y establece el horario (por ejemplo, cada noche).
3. Mantén **Backup Dir** o carpetas con versiones para preservar los elementos modificados/eliminados en Drive.
4. Supervisa en la pestaña **Transfer** y en **History** los resultados de cada trabajo.  
- Guías: [Crear trabajos de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs), [Ejecutar y administrar trabajos](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job), [Programación de trabajos](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution), [Monitoreo de transferencias](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

## Lista de verificación de migración (integridad + seguridad)

- Ejecuta primero una **Compare** para ver qué se moverá; exporta los resultados si es necesario.
- Comienza con **`--dry-run`** en Sync para evitar sorpresas.
- Para datos críticos, valida con `rclone check source: dest:` en la Terminal integrada y revisa los **registros de API**.
- Usa carpetas de destino distintas (por ejemplo, `Wasabi_Archive_2025`) hasta que verifiques la integridad.
- Documenta los trabajos con nombres claros (`Wasabi->GDrive_Nightly`) y mantén los endpoints/claves limitados al bucket necesario.

## Conclusión

Con RcloneView, el rendimiento de S3 de Wasabi y la colaboración de Google Drive conviven en una sola interfaz. Crea ambos remotos, previsualiza los cambios, ajusta las subidas S3 y programa trabajos recurrentes-todo sin editar configuraciones ni flags de CLI. Comienza hoy tu migración de Wasabi a Google Drive y mantén cada ejecución verificable.

<CloudSupportGrid />
