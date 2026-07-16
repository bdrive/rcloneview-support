---
slug: rcloneview-qnap-nas-cloud-backup-rcloneview
title: "Usa RcloneView con QNAP NAS — Copia de seguridad en la nube y sincronización multi-nube para tu NAS"
authors:
  - tayson
description: "Los propietarios de QNAP NAS pueden usar RcloneView para hacer copias de seguridad en la nube a S3, B2, Google Drive y más. Aprende a conectar, sincronizar y automatizar copias de seguridad desde tu QNAP NAS."
keywords:
  - qnap cloud backup
  - qnap nas rclone
  - qnap cloud sync
  - qnap s3 backup
  - qnap google drive sync
  - qnap multi cloud
  - qnap nas cloud storage
  - qnap backup tool
  - qnap rcloneview
  - qnap automated backup
tags:
  - RcloneView
  - qnap
  - nas
  - backup
  - cloud-storage
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Usa RcloneView con QNAP NAS — Copia de seguridad en la nube y sincronización multi-nube para tu NAS

> Los dispositivos QNAP NAS almacenan tus datos más importantes de forma local. Pero el almacenamiento exclusivamente local implica un riesgo exclusivamente local: un fallo de hardware, un incendio, un robo o una inundación pueden acabar con todo. La copia de seguridad en la nube a través de RcloneView añade protección externa con más de 70 proveedores de almacenamiento en la nube.

QNAP NAS ofrece sincronización en la nube integrada mediante HBS 3 (Hybrid Backup Sync), pero su compatibilidad con proveedores de nube es limitada en comparación con los más de 70 proveedores de rclone. RcloneView, ejecutándose en un equipo de escritorio o un dispositivo dedicado conectado a tu QNAP, te da acceso a todos los proveedores compatibles con rclone, además de gestión visual, comparación de carpetas y trabajos por lotes.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar QNAP a RcloneView

### Mediante recurso compartido de red (SMB/CIFS)

Accede a las carpetas compartidas de tu QNAP desde el equipo que ejecuta RcloneView. Asigna tus recursos compartidos de QNAP como unidades de red y luego úsalos como orígenes locales en los trabajos de RcloneView.

### Mediante SFTP

Añade tu QNAP como remoto SFTP:

1. Habilita SFTP en tu QNAP (Panel de control → Servicios de red y archivos → Telnet/SSH).
2. Añade un remoto SFTP en RcloneView con la IP y las credenciales de tu QNAP.

<img src="/support/images/en/blog/new-remote.png" alt="Add QNAP NAS as remote" class="img-large img-center" />

## Flujos de trabajo de copia de seguridad

### QNAP → Backblaze B2

Copia de seguridad externa asequible a $6/TB/mes:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Backup QNAP to B2" class="img-large img-center" />

### QNAP → AWS S3

Durabilidad de nivel empresarial para datos empresariales críticos.

### QNAP → Google Drive

Haz que los archivos del NAS sean accesibles para colaborar a través de Google Drive.

### Programar copias de seguridad nocturnas

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule QNAP backup" class="img-large img-center" />

## Verificar copias de seguridad

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify QNAP backup" class="img-large img-center" />

## QNAP HBS 3 frente a RcloneView

| Característica | QNAP HBS 3 | RcloneView |
|---------|-----------|------------|
| Proveedores de nube | ~15 | 70+ |
| Se ejecuta directamente en el NAS | ✅ | En un dispositivo conectado |
| Explorador de dos paneles | ❌ | ✅ |
| Comparación de carpetas | ❌ | ✅ |
| Trabajos por lotes | ❌ | ✅ |
| Notificaciones | Correo electrónico | Slack/Discord/Telegram |
| Remotos cifrados | Limitado | ✅ (crypt) |

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Conéctate a QNAP** mediante recurso compartido de red o SFTP.
3. **Añade destinos de copia de seguridad en la nube**.
4. **Programa copias de seguridad automatizadas**.
5. **Verifica con la comparación de carpetas**.

Los datos de tu NAS merecen protección externa.

---

**Guías relacionadas:**

- [RcloneView en Synology NAS](https://rcloneview.com/support/blog/run-rcloneview-synology-nas-docker-rcloneview)
- [Crear trabajos de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Programación de trabajos](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
