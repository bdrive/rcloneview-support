---
slug: migrate-backblaze-b2-to-google-drive-rcloneview
title: "Migra de Backblaze B2 a Google Drive — Transfiere archivos con RcloneView"
authors:
  - tayson
description: "Mueve archivos de Backblaze B2 a Google Drive sin descargarlos localmente. RcloneView permite la transferencia directa de nube a nube con monitoreo de progreso y filtrado."
keywords:
  - Backblaze B2 to Google Drive
  - migrate B2 to Google Drive
  - Backblaze B2 migration
  - cloud-to-cloud transfer
  - B2 to GDrive RcloneView
  - transfer Backblaze files
  - cloud storage migration
  - Backblaze B2 sync
  - Google Drive import
  - RcloneView migration
tags:
  - backblaze-b2
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra de Backblaze B2 a Google Drive — Transfiere archivos con RcloneView

> Transfiere archivos desde buckets de Backblaze B2 directamente a Google Drive con RcloneView — sin necesidad de almacenamiento local intermedio, con seguimiento de progreso en vivo y soporte de filtros.

Backblaze B2 es una solución de almacenamiento de objetos capaz, pero los equipos que dependen en gran medida de Google Workspace pueden encontrar más práctico consolidar sus archivos de trabajo en Google Drive para facilitar la colaboración. Migrar años de datos de archivo de B2 a Google Drive solía requerir descargar todo localmente primero — un proceso lento que consume almacenamiento. RcloneView permite transferencias directas de nube a nube entre B2 y Google Drive a través de su motor de sincronización, enrutando los datos entre ambos proveedores sin tocar tu disco local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurando ambos remotos

Antes de migrar, agrega tanto Backblaze B2 como Google Drive como remotos en RcloneView. Para Backblaze B2, ve a la pestaña Remote, haz clic en New Remote y selecciona Backblaze B2. Ingresa tu Application Key ID y Application Key — ambos generados desde tu cuenta de Backblaze en App Keys. Para Google Drive, selecciona Google Drive de la lista de proveedores; se abrirá una ventana del navegador para la autenticación OAuth. Inicia sesión con tu cuenta de Google y otorga acceso.

Una vez configurados ambos remotos, puedes abrirlos lado a lado en el File Explorer de doble panel de RcloneView. Explora tus buckets de B2 en un lado y tus carpetas de Google Drive en el otro, lo que te da una referencia visual para la estructura de migración que quieres configurar.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 and Google Drive remotes in RcloneView" class="img-large img-center" />

## Ejecutando la migración

Con ambos remotos conectados, usa el asistente de Sync para configurar la transferencia. Selecciona tu bucket de Backblaze B2 (o una ruta específica dentro de él) como origen y tu carpeta de destino de Google Drive. En el paso de Advanced Settings, la verificación de checksum asegura que cada archivo se transfirió correctamente — importante para archivos grandes donde la corrupción silenciosa de datos puede pasar desapercibida.

El paso de Filtering es útil para buckets grandes de B2: usa filtros de antigüedad de archivo para migrar solo archivos anteriores a cierta fecha, excluye extensiones específicas (como archivos temporales `.tmp`) o limita el tamaño máximo de archivo para escalonar la migración en bloques. Esto es particularmente útil al migrar los 3TB de archivos de proyecto de una agencia de diseño — filtra por tipo de archivo y profundidad de carpeta para controlar qué se mueve en cada lote.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Backblaze B2 files to Google Drive with RcloneView" class="img-large img-center" />

Antes de confirmar la migración completa, ejecuta el modo Dry Run para previsualizar exactamente qué archivos se copiarán. La simulación muestra la lista completa de operaciones planificadas sin realizar ningún cambio — un paso de seguridad crítico al migrar datos de producción.

## Monitoreando y validando la transferencia

La pestaña Transferring en la parte inferior de RcloneView muestra el progreso del trabajo en vivo: cantidad de archivos, estado de la transferencia y cualquier error encontrado. Para migraciones grandes que se ejecutan durante varias horas, Job History registra cada ejecución con hora de inicio, duración, datos totales movidos y estado final.

Después de que la transferencia se completa, usa Folder Compare para validar que Google Drive ahora contiene todo lo del origen en B2. La comparación resalta cualquier archivo que exista solo en un lado o que tenga diferencias de tamaño, facilitando identificar y volver a transferir cualquier cosa que no se completó exitosamente.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Viewing migration job history for B2 to Google Drive transfer in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega Backblaze B2 usando tu Application Key ID y Application Key.
3. Agrega Google Drive mediante el flujo de autenticación OAuth del navegador.
4. Usa el asistente de Sync con Dry Run para previsualizar la migración antes de ejecutar la transferencia completa.

La migración directa de nube a nube elimina el cuello de botella del almacenamiento intermediario local y mantiene tu transferencia de B2 a Google Drive funcionando al rendimiento del lado del proveedor.

---

**Guías relacionadas:**

- [Migra de Backblaze B2 a Amazon S3 con RcloneView](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-aws-s3-rcloneview)
- [Gestiona la sincronización y copia de seguridad en la nube de Google Drive con RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Copia de seguridad de Dropbox a Backblaze B2, almacenamiento asequible con RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)

<CloudSupportGrid />
