---
slug: migrate-idrive-e2-to-backblaze-b2-rcloneview
title: "Migrar de IDrive e2 a Backblaze B2 — Transfiere archivos con RcloneView"
authors:
  - steve
description: "Mueve buckets de IDrive e2 a Backblaze B2 con las herramientas de transferencia de nube a nube de RcloneView, la vista previa de ejecución en seco y el historial de trabajos."
keywords:
  - migrate idrive e2 to backblaze b2
  - idrive e2 to backblaze b2 transfer
  - s3 compatible storage migration
  - cloud to cloud object storage transfer
  - RcloneView migration guide
  - backblaze b2 bucket migration
  - idrive e2 rcloneview
  - object storage provider switch
tags:
  - RcloneView
  - idrive-e2
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de IDrive e2 a Backblaze B2 — Transfiere archivos con RcloneView

> Mueve buckets de almacenamiento de objetos entre dos proveedores compatibles con S3 sin almacenar antes los archivos localmente.

Cambiar de proveedor de almacenamiento de objetos compatible con S3 suele implicar desentrañar claves de acceso, endpoints y estructuras de buckets antes de mover un solo archivo. RcloneView se conecta tanto a IDrive e2 como a Backblaze B2 como remotos nativos, de modo que la migración entre ambos es una transferencia directa de nube a nube en lugar de un proceso de dos pasos de descarga y luego carga.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar ambos remotos

IDrive e2 y Backblaze B2 se configuran a través de la configuración de remoto compatible con S3 de RcloneView, y ambos requieren una clave de acceso, una clave secreta y un endpoint. En el caso específico de Backblaze B2, RcloneView también admite su método nativo de introducción de credenciales, usando un Application Key ID y una Application Key, que algunos equipos prefieren en lugar de la vía compatible con S3. Una vez que ambos remotos aparecen en Remote Manager, abre dos paneles del explorador uno junto al otro —uno por remoto— usando el diseño de división horizontal o vertical de RcloneView.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote manager with IDrive e2 and Backblaze B2 remotes configured" class="img-large img-center" />

Con ambos buckets visibles a la vez, puedes explorar las estructuras de carpetas de cada lado antes de confirmar una transferencia, lo que permite detectar a tiempo discrepancias de nombres o carpetas anidadas inesperadas.

## Ejecutar la transferencia como un trabajo de sincronización

En lugar de arrastrar manualmente buckets grandes, configura un trabajo de sincronización mediante el asistente de 4 pasos: selecciona IDrive e2 como origen, Backblaze B2 como destino, y elige sincronización unidireccional para que solo se modifique el destino y coincida con el origen —nada cambia en IDrive e2—. En el paso 2, RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana, y te permite ajustar el número de transferencias de archivos y activar la comparación de checksum para que los archivos se verifiquen por hash y tamaño, no solo por la fecha de modificación, algo importante al migrar entre dos backends de almacenamiento distintos.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView sync job configured between two S3-compatible object storage remotes" class="img-large img-center" />

Antes de ejecutar la transferencia real, usa la ejecución en seco para previsualizar exactamente qué archivos se copiarán y confirmar que nada se elimine o se omita de forma inesperada.

## Verificar la migración

Una vez completada la sincronización, el historial de trabajos muestra el tamaño total transferido, la velocidad de transferencia y el número de archivos de esa ejecución, lo que te da un registro para comparar con los totales del bucket de origen. Como comprobación adicional, la herramienta de comparación de carpetas de RcloneView puede ejecutar una comparación lado a lado entre ambos buckets después de la migración, señalando cualquier archivo que difiera en tamaño o que exista solo en un lado.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing a completed cloud-to-cloud migration" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade tu remoto de IDrive e2 con su clave de acceso, clave secreta y endpoint.
3. Añade tu remoto de Backblaze B2 usando credenciales compatibles con S3 o nativas.
4. Configura un trabajo de sincronización unidireccional, ejecuta primero una ejecución en seco, y luego ejecútalo de verdad y verifica con el historial de trabajos.

Una migración de buckets limpia se reduce a verificar antes y después —las herramientas de ejecución en seco y comparación de RcloneView hacen que ambos pasos formen parte del mismo flujo de trabajo.

---

**Guías relacionadas:**

- [Gestionar almacenamiento IDrive e2 — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [Gestionar almacenamiento Backblaze B2 — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Wasabi vs Backblaze B2 vs IDrive e2 — Comparación de almacenamiento de objetos](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)

<CloudSupportGrid />
