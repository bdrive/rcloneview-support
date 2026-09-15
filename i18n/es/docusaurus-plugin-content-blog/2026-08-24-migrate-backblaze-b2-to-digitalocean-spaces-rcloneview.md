---
slug: migrate-backblaze-b2-to-digitalocean-spaces-rcloneview
title: "Migrar de Backblaze B2 a DigitalOcean Spaces — Transferir archivos con RcloneView"
authors:
  - kai
description: "Migre archivos de Backblaze B2 a DigitalOcean Spaces con RcloneView mediante transferencias verificadas por checksum, filtros y vistas previas de Dry Run."
keywords:
  - migrar Backblaze B2 a DigitalOcean Spaces
  - transferencia de Backblaze a DigitalOcean
  - migración de almacenamiento de objetos en RcloneView
  - migración de B2 a Spaces
  - migración en la nube compatible con S3
  - configuración de DigitalOcean Spaces
  - de Backblaze B2 a Spaces
  - cambio de proveedor de almacenamiento en la nube
tags:
  - RcloneView
  - backblaze-b2
  - digitalocean-spaces
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de Backblaze B2 a DigitalOcean Spaces — Transferir archivos con RcloneView

> Mover almacenamiento de objetos entre dos proveedores compatibles con S3 no requiere escribir comandos de rclone a mano — RcloneView gestiona la transferencia, la verificación y el filtrado a través de su interfaz gráfica.

Los equipos que cambian de Backblaze B2 a DigitalOcean Spaces suelen hacerlo para consolidar la infraestructura en un único proveedor junto a los Droplets o servicios de App Platform ya existentes. Como ambos son remotos compatibles con S3, RcloneView puede conectarse a cada uno con un Access Key, un Secret Key y un endpoint, y luego transferir datos directamente entre ellos sin pasar antes por un disco local. En buckets con cientos de gigabytes de copias de seguridad de aplicaciones o activos multimedia, esa ruta directa entre nubes ahorra un tiempo considerable frente a un flujo de descarga y posterior carga.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurar ambos remotos

Añada su remoto de Backblaze B2 usando el Application Key ID y la Application Key del panel de B2, y después añada un remoto independiente para DigitalOcean Spaces con su propio Access Key, Secret Key y endpoint regional (por ejemplo, `nyc3.digitaloceanspaces.com`). Ambos aparecen como pestañas en los paneles Explorer de RcloneView, de modo que puede explorar el bucket de origen y el Space de destino uno junto al otro antes de iniciar cualquier transferencia.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 and DigitalOcean Spaces remotes in RcloneView" class="img-large img-center" />

Use un diseño de panel dividido para ver ambos buckets a la vez, confirmando que la estructura de carpetas y las convenciones de nomenclatura coinciden con lo que espera su aplicación antes de comprometerse con una migración completa.

## Ejecutar una transferencia verificada por checksum

Configure la migración como un trabajo de Copy o Sync con la comparación por checksum activada en el Paso 2 del asistente — esto compara los archivos por hash y tamaño en lugar de solo por marcas de tiempo, lo cual importa al migrar entre dos backends de almacenamiento distintos que pueden reportar las fechas de modificación de forma diferente. Ajuste el número de transferencias de archivos y de transferencias multihilo según su ancho de banda; cuatro transferencias simultáneas son un punto de partida razonable para buckets grandes.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a checksum-verified transfer from Backblaze B2 to DigitalOcean Spaces" class="img-large img-center" />

Antes de ejecutar la migración completa, use Dry Run para previsualizar exactamente qué archivos se copiarán — esto permite detectar conflictos de nombres o cantidades de archivos inesperadas antes de que se mueva ningún dato. S3, Azure y Backblaze B2 se pueden conectar con acceso completo de lectura/escritura en la licencia FREE, por lo que ninguna restricción de nivel bloquea esta ruta de migración.

## Programar el cambio definitivo

Para una migración por fases, ejecute una sincronización completa inicial seguida de sincronizaciones incrementales programadas (licencia PLUS) que capturen cualquier archivo añadido a Backblaze B2 antes del cambio final. Esto mantiene ambos buckets sincronizados durante la ventana de transición en lugar de requerir una única transferencia grande y arriesgada.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling incremental sync jobs during a Backblaze B2 to DigitalOcean Spaces migration" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añada remotos tanto para su bucket de Backblaze B2 como para el destino en DigitalOcean Spaces.
3. Ejecute un Dry Run para previsualizar la transferencia antes de copiar ningún archivo.
4. Ejecute el trabajo de Copy o Sync con la verificación por checksum activada y luego confirme que el número de archivos coincide en ambos lados.

Una migración directa y verificada entre nubes significa que sus datos llegan intactos a DigitalOcean Spaces, sin pasar en ningún momento por una máquina local.

---

**Guías relacionadas:**

- [Gestionar el almacenamiento de Backblaze B2 — Sincronizar y hacer copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Migrar de Backblaze B2 a AWS S3 — Transferir archivos con RcloneView](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-aws-s3-rcloneview)
- [Migrar Google Drive a DigitalOcean Spaces con RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-digitalocean-spaces-rcloneview)

<CloudSupportGrid />
