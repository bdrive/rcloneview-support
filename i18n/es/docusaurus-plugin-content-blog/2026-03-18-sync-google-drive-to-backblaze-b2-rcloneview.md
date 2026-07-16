---
slug: sync-google-drive-to-backblaze-b2-rcloneview
title: "Sincroniza Google Drive con Backblaze B2 — Copia de seguridad económica de nube a nube con RcloneView"
authors:
  - tayson
description: "Google Drive para el trabajo diario, Backblaze B2 para una copia de seguridad económica. Aprende a configurar una copia de seguridad automática de nube a nube desde Google Drive a B2 con RcloneView."
keywords:
  - google drive to backblaze b2
  - google drive backup b2
  - sync google drive b2
  - google drive cloud backup
  - backblaze b2 backup tool
  - google drive offsite backup
  - google drive b2 sync
  - affordable google drive backup
  - cloud to cloud backup google
  - google drive redundancy
tags:
  - RcloneView
  - google-drive
  - backblaze-b2
  - backup
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincroniza Google Drive con Backblaze B2 — Copia de seguridad económica de nube a nube con RcloneView

> Google Drive almacena tu trabajo. Backblaze B2 lo protege por $6/TB/mes. Juntos, forman una de las estrategias de copia de seguridad en la nube más rentables disponibles.

Google Drive es donde viven tus archivos día a día. Pero Google Drive por sí solo no es una copia de seguridad: las eliminaciones accidentales, los compromisos de cuenta y los errores de sincronización pueden destruir datos que Google no podrá recuperar. Backblaze B2, por $6/TB/mes, proporciona la red de seguridad: una copia independiente de todo, actualizada automáticamente por RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ¿Por qué B2 para la copia de seguridad de Google Drive?

| Factor | Backblaze B2 |
|--------|-------------|
| Costo de almacenamiento | $6/TB/mes |
| Costo de descarga | $0.01/GB |
| Salida gratuita | 3x el almacenamiento/mes |
| Durabilidad | 99.999999999% |
| API | Compatible con S3 |

B2 está diseñado específicamente para cargas de trabajo de copia de seguridad: almacenamiento económico, pago por uso y compatibilidad con S3 para un soporte universal de herramientas.

## Configura la copia de seguridad

<img src="/support/images/en/blog/new-remote.png" alt="Connect Google Drive and B2" class="img-large img-center" />

Agrega tanto Google Drive como Backblaze B2 como remotos en RcloneView.

## Crea el trabajo de copia de seguridad

Abre Google Drive en un panel y B2 en el otro. Crea un trabajo de Copiar:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google Drive to B2" class="img-large img-center" />

Usa **Copiar** (no Sincronizar) para que los archivos eliminados de Google Drive se conserven en B2.

## Programa copias de seguridad nocturnas

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule nightly backup" class="img-large img-center" />

Cada ejecución transfiere solo los archivos nuevos y modificados. Las copias de seguridad diarias de una cuenta típica de Google Drive usan un ancho de banda mínimo.

## Verifica la integridad de la copia de seguridad

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify backup" class="img-large img-center" />

## Agrega cifrado

Para datos sensibles, agrega un remoto crypt sobre B2. Los archivos se cifran antes de salir de tu equipo: Backblaze nunca ve datos sin cifrar.

## Ejemplo de costos

| Tamaño de Google Drive | Costo mensual de B2 |
|-------------------|----------------|
| 100 GB | $0.60 |
| 500 GB | $3.00 |
| 1 TB | $6.00 |
| 5 TB | $30.00 |

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Agrega los remotos** de Google Drive y Backblaze B2.
3. **Crea un trabajo de Copiar** para la copia de seguridad.
4. **Programa ejecuciones nocturnas**.
5. **Duerme tranquilo** sabiendo que tus archivos están protegidos.

Trabajo diario en Drive. Copia de seguridad nocturna en B2.

---

**Guías relacionadas:**

- [Copia de seguridad de Dropbox a Backblaze B2](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [Sincroniza Dropbox con S3 como copia de seguridad](https://rcloneview.com/support/blog/sync-dropbox-to-s3-backup-rcloneview)
- [Cifra tus copias de seguridad en la nube](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
