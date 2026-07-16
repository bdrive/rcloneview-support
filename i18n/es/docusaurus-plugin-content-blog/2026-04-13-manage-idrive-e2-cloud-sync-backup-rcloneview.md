---
slug: manage-idrive-e2-cloud-sync-backup-rcloneview
title: "Gestiona el almacenamiento IDrive E2 — Sincroniza y respalda archivos con RcloneView"
authors:
  - tayson
description: "Conecta IDrive E2 a RcloneView y gestiona tus buckets compatibles con S3 mediante una GUI. Sincroniza IDrive E2 con Google Drive, Amazon S3 y otras nubes fácilmente."
keywords:
  - IDrive E2
  - IDrive E2 sync
  - IDrive E2 backup
  - IDrive E2 RcloneView
  - IDrive E2 S3 compatible
  - IDrive E2 cloud management
  - IDrive E2 to S3
  - IDrive E2 to Google Drive
  - S3-compatible storage GUI
  - cloud storage sync
tags:
  - RcloneView
  - idrive-e2
  - s3-compatible
  - cloud-storage
  - backup
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el almacenamiento IDrive E2 — Sincroniza y respalda archivos con RcloneView

> Añade IDrive E2 a RcloneView y gestiona tus buckets compatibles con S3 junto a Google Drive, Amazon S3, Backblaze B2 y más de 90 servicios de almacenamiento en la nube.

IDrive E2 es un servicio de almacenamiento de objetos compatible con S3 y de bajo costo, popular entre desarrolladores y empresas que buscan una alternativa económica a Amazon S3 manteniendo la compatibilidad con la API. El soporte de RcloneView para proveedores compatibles con S3 significa que puedes conectar tus buckets de IDrive E2 a la GUI y gestionar sincronizaciones, copias de seguridad y migraciones entre nubes sin escribir scripts de línea de comandos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurar IDrive E2 en RcloneView

IDrive E2 utiliza credenciales estándar compatibles con S3: un Access Key ID, una Secret Access Key y una URL de endpoint asociada a tu región seleccionada. Puedes generar estas credenciales desde tu portal de cuenta de IDrive E2. Una vez que las tengas, abre RcloneView, ve a la pestaña Remote y haz clic en New Remote. Selecciona Amazon S3 como tipo de proveedor y configúralo con la URL de endpoint y las credenciales de tu IDrive E2.

Después de guardar, tu remoto de IDrive E2 aparecerá en el File Explorer. Explora buckets y objetos directamente, revisa el tamaño de los archivos y las marcas de tiempo de modificación, y usa las operaciones de clic derecho para copiar, mover, eliminar o descargar archivos. La barra de ruta de migas de pan muestra tu ubicación actual dentro de un bucket, con sugerencias de autocompletado a medida que navegas por estructuras de carpetas más profundas.

<img src="/support/images/en/blog/new-remote.png" alt="Adding IDrive E2 as a remote in RcloneView" class="img-large img-center" />

## Sincronizar IDrive E2 con otras nubes

Las organizaciones que usan IDrive E2 como destino principal de copias de seguridad a menudo quieren replicar buckets críticos hacia un proveedor secundario para lograr redundancia geográfica o conmutación por error entre proveedores. RcloneView simplifica esto: crea un trabajo de sincronización con tu bucket de IDrive E2 como origen y Amazon S3, Cloudflare R2 o Google Drive como destino.

El asistente de sincronización de 4 pasos se encarga de la configuración: selección de almacenamiento, ajustes avanzados de transferencia (transferencias concurrentes, verificación de checksum), reglas de filtrado (excluir archivos grandes, extensiones específicas) y programación opcional. Activa la verificación de checksum para confirmar que cada objeto se transfirió de forma íntegra — esto es especialmente importante para archivos binarios y volcados de bases de datos almacenados en IDrive E2.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing IDrive E2 bucket to Amazon S3 with RcloneView" class="img-large img-center" />

La sincronización programada (licencia PLUS) ejecuta la replicación de tu IDrive E2 automáticamente en los intervalos especificados. El historial de trabajos (Job History) registra la hora de inicio, la duración, la cantidad de archivos transferidos y el estado final de cada ejecución, brindándote un registro de auditoría persistente sin necesidad de mantener scripts externos o tareas cron.

## Monitorear transferencias activas

Al ejecutar sincronizaciones grandes de IDrive E2, la pestaña Transferring en la parte inferior de RcloneView muestra el progreso en vivo: los archivos que se están transfiriendo actualmente, el conteo acumulado y el estado general de la sincronización. Puedes cancelar un trabajo en ejecución directamente desde esta vista si es necesario, y la pestaña Log registra entradas con marca de tiempo para solucionar cualquier error que surja.

Para cargas de trabajo de gran volumen, ajustar el Number of File Transfers en el paso de Advanced Settings del asistente de sincronización controla cuántos objetos se transfieren simultáneamente. El ajuste de transferencias multihilo (predeterminado: 4) gestiona las cargas fragmentadas para objetos más grandes.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring IDrive E2 sync progress in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Genera el Access Key ID y la Secret Access Key de IDrive E2 desde tu portal de cuenta de IDrive.
3. Añade un nuevo remoto compatible con S3 en RcloneView con el endpoint y las credenciales de tu IDrive E2.
4. Crea un trabajo de sincronización para respaldar los buckets de IDrive E2 en tu almacenamiento secundario según un cronograma regular.

Con RcloneView, tus buckets de IDrive E2 son tan manejables como cualquier otro almacenamiento en la nube — visibles en un explorador de archivos, configurables con trabajos de sincronización y auditables a través del historial de trabajos.

---

**Guías relacionadas:**

- [Sincroniza IDrive E2 con Amazon S3 y Google Drive usando RcloneView](https://rcloneview.com/support/blog/sync-idrive-e2-s3-google-drive-rcloneview)
- [Gestiona la sincronización en la nube de Cloudflare R2 con RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Centraliza el almacenamiento S3, Wasabi y Cloudflare R2 con RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
