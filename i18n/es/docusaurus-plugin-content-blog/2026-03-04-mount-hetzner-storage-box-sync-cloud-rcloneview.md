---
slug: mount-hetzner-storage-box-sync-cloud-rcloneview
title: "Monta Hetzner Storage Box como unidad local y sincroniza con cualquier nube con RcloneView"
authors:
  - tayson
description: "Accede a tu Hetzner Storage Box como si fuera una carpeta local: móntala vía SFTP, explora los archivos visualmente y sincroniza o realiza copias de seguridad hacia AWS S3, Google Drive o cualquier nube con RcloneView."
keywords:
  - hetzner storage box mount
  - hetzner storage box sync
  - hetzner storage box backup
  - hetzner sftp mount local drive
  - hetzner storage box rclone
  - hetzner storage box gui
  - hetzner to s3
  - hetzner cloud backup
  - hetzner storage box file manager
  - mount sftp as local drive
tags:
  - hetzner
  - sftp
  - mount
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Monta Hetzner Storage Box como unidad local y sincroniza con cualquier nube con RcloneView

> Hetzner Storage Box ofrece un precio por terabyte inmejorable en Europa, pero gestionar archivos vía FTP o SCP resulta engorroso. RcloneView lo monta como una unidad local y lo sincroniza con cualquier nube, de forma visual.

Hetzner Storage Box es una de las soluciones de almacenamiento con mejor relación calidad-precio de Europa: fiable, asequible y accesible vía SFTP, FTP, SMB y WebDAV. Pero sin un cliente de escritorio nativo, gestionar archivos implica usar herramientas de línea de comandos o clientes FTP básicos. RcloneView cambia esto conectándose vía SFTP, permitiéndote montar el Storage Box como una unidad local, explorar archivos en un explorador de dos paneles y sincronizar con AWS S3, Google Drive o cualquier otra nube.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ¿Por qué usar RcloneView con Hetzner Storage Box?

- **Sin cliente de escritorio nativo** — Hetzner ofrece protocolos sin procesar (SFTP, FTP, SMB) pero ninguna app de sincronización.
- **Móntalo como unidad local** — Accede a tu Storage Box como a una carpeta normal en tu escritorio.
- **Sincronización entre nubes** — Replica automáticamente los datos del Storage Box hacia S3, Google Drive o OneDrive.
- **Gestión visual de archivos** — Explora, arrastra y suelta, compara y organiza sin usar la CLI.

## Conectar Hetzner Storage Box vía SFTP

1. Abre RcloneView y haz clic en **Add Remote**.
2. Selecciona **SFTP** en la lista de proveedores.
3. Introduce tus credenciales de Hetzner:
   - **Host**: `uXXXXXX.your-storagebox.de` (desde tu panel Hetzner Robot)
   - **Port**: `23` (Hetzner usa un puerto SFTP no estándar)
   - **Username**: El nombre de usuario de tu Storage Box (por ejemplo, `u123456`)
   - **Password**: La contraseña de tu Storage Box
4. Guarda — ahora podrás explorar los directorios de tu Storage Box.

<img src="/support/images/en/blog/new-remote.png" alt="Add Hetzner Storage Box via SFTP" class="img-large img-center" />

## Montar como unidad local

Una vez conectado, monta tu Storage Box como una carpeta local:

1. Navega hasta tu remoto SFTP en el Explorer.
2. Haz clic derecho sobre la carpeta que quieras → selecciona **Mount**.
3. Elige un punto de montaje local (letra de unidad en Windows, ruta en Mac/Linux).
4. Tu almacenamiento de Hetzner aparecerá como una carpeta nativa.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount Hetzner Storage Box as local drive" class="img-large img-center" />

Ahora puedes abrir archivos, arrastrar y soltar, y trabajar con los datos de tu Storage Box usando cualquier aplicación de escritorio, como si fuera almacenamiento local.

## Explorar y gestionar archivos

El explorador de dos paneles te permite gestionar el almacenamiento de Hetzner junto a cualquier otro remoto:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Hetzner Storage Box alongside cloud" class="img-large img-center" />

- Navega por jerarquías de carpetas
- Arrastra y suelta archivos entre Hetzner y las nubes
- Crea, renombra y elimina archivos y carpetas
- Consulta tamaños y fechas de archivos

## Sincronizar con proveedores de nube

### Hetzner → AWS S3 (copia de seguridad externa)

Añade una capa adicional de redundancia en la nube a tu ya fiable almacenamiento de Hetzner:

1. Crea un trabajo de sincronización: Hetzner SFTP → bucket de S3.
2. Prográmalo cada noche con [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution).
3. Usa S3 Glacier para un archivado en frío económico.

### Hetzner → Google Drive (compartición en equipo)

Haz que los datos de Hetzner sean accesibles para los usuarios de Google Workspace:

1. Crea un trabajo de copia: Hetzner → carpeta de Google Drive.
2. Usa [reglas de filtrado](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview) para sincronizar solo carpetas específicas.

### Nube → Hetzner (destino de copia de seguridad externa)

Usa Hetzner como tu destino asequible de copia de seguridad externa:

1. Crea un trabajo de sincronización: Google Drive → Hetzner Storage Box.
2. Prográmalo a diario — el precio por TB de Hetzner hace que esto sea extremadamente rentable.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Hetzner sync job" class="img-large img-center" />

## Verificar y monitorizar

### Comparación de carpetas

Verifica que la sincronización esté completa entre Hetzner y tu copia de seguridad en la nube:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare Hetzner with cloud backup" class="img-large img-center" />

### Automatización programada

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Hetzner backup jobs" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Añade Hetzner Storage Box** vía SFTP (puerto 23).
3. **Móntalo** como unidad local o explóralo en el Explorer.
4. **Sincroniza** con S3, Google Drive o cualquier otra nube.
5. **Prográmalo** para copias de seguridad diarias automatizadas.

Hetzner Storage Box es uno de los secretos mejor guardados del almacenamiento en Europa. RcloneView le da el cliente de escritorio que se merece, además de sincronización multi-nube.

---

**Guías relacionadas:**

- [Montar SFTP y SMB como unidad local](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [Montar almacenamiento en la nube como unidad local](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Comparar el contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Programación de trabajos](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Reglas de filtrado para sincronización selectiva](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
