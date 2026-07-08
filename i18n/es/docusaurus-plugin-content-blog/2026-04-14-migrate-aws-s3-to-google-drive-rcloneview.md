---
slug: migrate-aws-s3-to-google-drive-rcloneview
title: "Migra de AWS S3 a Google Drive — Transfiere archivos con RcloneView"
authors:
  - tayson
description: "Mueve archivos de buckets de AWS S3 a Google Drive usando la interfaz gráfica de RcloneView. No se necesita CLI para migraciones de S3 a Google Drive — transfiere, verifica y programa con facilidad."
keywords:
  - migrar AWS S3 a Google Drive
  - transferencia de S3 a Google Drive
  - migración de AWS S3 a Google Drive
  - rclone S3 a Google Drive
  - herramienta de migración entre nubes
  - mover archivos de S3 a Google Drive
  - almacenamiento de objetos a Google Drive
  - migración RcloneView S3
tags:
  - RcloneView
  - amazon-s3
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra de AWS S3 a Google Drive — Transfiere archivos con RcloneView

> RcloneView gestiona las migraciones de S3 a Google Drive como una transferencia directa entre nubes — sin necesidad de descarga local, con progreso en tiempo real y verificación de checksum.

Migrar de AWS S3 a Google Drive es un escenario común cuando los equipos pasan de un almacenamiento orientado a infraestructura a plataformas orientadas a la colaboración. Una startup podría archivar años de logs y activos de aplicaciones en S3 hacia Google Drive para facilitar el acceso entre equipos. Una pequeña agencia podría consolidar los entregables de clientes desde buckets de S3 por proyecto en un Google Drive compartido. RcloneView hace que esta migración sea visual y auditable, gestionando la transferencia del lado del servidor sin almacenar archivos temporalmente en tu máquina local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurando ambos remotos

Antes de migrar, agrega ambos proveedores de nube a RcloneView. Para AWS S3, ve a **Remote tab → New Remote → Amazon S3**, ingresa tu Access Key ID, Secret Access Key y selecciona la región de tu bucket. Para Google Drive, agrega otro remoto usando inicio de sesión OAuth en el navegador — RcloneView abre la página de autorización de Google y guarda el token automáticamente.

Con ambos remotos configurados, abre el Explorer en una vista de dos paneles. El panel izquierdo muestra tu bucket de S3, el panel derecho muestra tu carpeta de destino en Google Drive. Esta vista lado a lado es ideal para confirmar la estructura de carpetas antes de que comience la migración.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring AWS S3 and Google Drive remotes in RcloneView" class="img-large img-center" />

## Ejecutando la migración con el asistente de sincronización

Para migraciones a gran escala, usa el asistente de Sync Job en lugar de arrastrar y soltar manualmente. En **Job Manager → Add Job**, establece el origen en la ruta de tu bucket de S3 (por ejemplo, `mybucket/exports/`) y el destino en tu carpeta de Google Drive. En el Paso 2, establece las transferencias concurrentes entre 8 y 12 según tu ancho de banda, y habilita la verificación de checksum para confirmar la integridad de cada archivo tras la transferencia.

Ejecuta primero un **Dry Run**. RcloneView listará cada archivo que copiaría sin transferir realmente nada. Para un bucket con 50,000 archivos que suman cientos de GB, esta vista previa te permite confirmar el alcance antes de invertir horas de tiempo de transferencia. Si la lista de archivos se ve correcta, ejecuta la sincronización real.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="S3 to Google Drive cloud-to-cloud transfer in RcloneView" class="img-large img-center" />

## Gestionando diferencias de tipos de archivo y filtros

Los buckets de S3 suelen contener archivos generados por máquinas — archivos `.log`, cargas temporales, objetos marcadores de cero bytes — que no necesitan llegar a Google Drive. Usa el filtrado del Paso 3 para excluir extensiones no deseadas: agrega `.log`, `.tmp` y `.part` a los filtros de exclusión personalizados. También puedes establecer un filtro de antigüedad máxima de archivo para migrar solo los archivos modificados en los últimos 90 días, reduciendo el alcance de la transferencia para casos de uso activo.

Google Drive tiene algunas peculiaridades con los nombres de archivo: caracteres como `?`, `*` y `:` en las claves de objetos de S3 serán transliterados automáticamente por rclone. RcloneView muestra los errores de codificación en la pestaña Log para que puedas revisar los objetos que requirieron cambios de nombre.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Executing the S3 to Google Drive migration job in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega tu remoto de AWS S3 usando Access Key + Secret + Region en el asistente New Remote.
3. Agrega tu remoto de Google Drive mediante autenticación OAuth en el navegador.
4. Crea un trabajo de sincronización en Job Manager, ejecuta Dry Run para previsualizar y luego ejecuta la migración.

Con RcloneView, tu migración de S3 a Google Drive se ejecuta con total visibilidad — sin scripts de CLI, sin costos de almacenamiento temporal y con un historial completo de trabajos para tus registros.

---

**Guías relacionadas:**

- [Migra Google Drive a AWS S3 con RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-aws-s3-rcloneview)
- [Copia de seguridad incremental: Google Drive a Amazon S3](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)
- [Migraciones a la nube verificadas con checksum con RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
