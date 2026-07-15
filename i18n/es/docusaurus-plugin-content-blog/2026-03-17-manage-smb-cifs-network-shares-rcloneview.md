---
slug: manage-smb-cifs-network-shares-rcloneview
title: "Gestiona recursos compartidos de red SMB/CIFS — Sincroniza servidores de archivos de oficina con la nube usando RcloneView"
authors:
  - tayson
description: "Los recursos compartidos SMB son la columna vertebral de los servidores de archivos de oficina. Aprende a conectarlos a RcloneView y sincronizarlos con Google Drive, S3 o cualquier nube para copias de seguridad y acceso remoto."
keywords:
  - smb cloud sync
  - cifs cloud backup
  - network share to cloud
  - smb to google drive
  - file server cloud sync
  - smb to s3 backup
  - windows share cloud
  - network drive cloud backup
  - smb rclone
  - office file server cloud
tags:
  - RcloneView
  - smb
  - nas
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona recursos compartidos de red SMB/CIFS — Sincroniza servidores de archivos de oficina con la nube usando RcloneView

> El servidor de archivos de tu empresa lleva años funcionando. Todos acceden a él mediante unidades de red asignadas. Pero no tiene copia de seguridad externa, y los trabajadores remotos no pueden acceder desde casa. La sincronización con la nube resuelve ambos problemas.

SMB/CIFS (Server Message Block / Common Internet File System) es el protocolo detrás de cada carpeta compartida de Windows, recurso compartido de NAS y servidor de archivos de oficina. Es fiable y rápido en redes locales, pero no fue diseñado para la integración con la nube ni el acceso remoto. RcloneView cierra esa brecha: conecta tus recursos compartidos SMB y sincronízalos con cualquier proveedor de nube para copias de seguridad, acceso remoto y recuperación ante desastres.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta recursos compartidos SMB a RcloneView

<img src="/support/images/en/blog/new-remote.png" alt="Add SMB remote" class="img-large img-center" />

Añade tu recurso compartido SMB como remoto usando la dirección del servidor, el nombre del recurso compartido y las credenciales. Tus recursos compartidos de red aparecerán en el explorador de dos paneles.

## Flujos de trabajo clave

### Copia de seguridad del servidor de archivos a la nube

Protege el servidor de archivos de tu oficina con copias de seguridad en la nube a S3, B2 o Google Drive:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="File server to cloud backup" class="img-large img-center" />

### Habilita el acceso remoto

Sincroniza el contenido del servidor de archivos con Google Drive o OneDrive para que los trabajadores remotos puedan acceder a los archivos desde cualquier lugar sin VPN.

### Programa copias de seguridad nocturnas

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule file server backup" class="img-large img-center" />

Ejecuta las copias de seguridad durante la noche cuando la red de la oficina esté tranquila.

### Verifica la integridad de la copia de seguridad

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify file server backup" class="img-large img-center" />

Compara el recurso compartido SMB con la copia en la nube para asegurarte de que no se ha omitido nada.

### Migra a la nube

¿Planeas retirar el servidor de archivos? Transfiere todo al almacenamiento en la nube gradualmente, departamento por departamento.

## Consejos de rendimiento

- **Ejecuta las copias de seguridad fuera del horario laboral** para evitar la congestión de la red
- **Usa la sincronización incremental** — solo se transfieren los archivos modificados en cada ejecución
- **Establece una concurrencia adecuada** — de 2 a 4 transferencias para servidores compartidos
- **Excluye archivos temporales** — filtra `~$*`, `.tmp`, `Thumbs.db`

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Añade tu recurso compartido SMB** como remoto.
3. **Añade un destino en la nube** para la copia de seguridad.
4. **Crea trabajos de sincronización** y prográmalos.
5. **Verifica regularmente** con la comparación de carpetas.

Tu servidor de archivos merece una red de seguridad en la nube.

---

**Guías relacionadas:**

- [Montar SFTP/SMB como unidad local](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [Montar y sincronizar sistemas de archivos remotos](https://rcloneview.com/support/blog/mount-sync-remote-file-systems-rcloneview)
- [Programación de trabajos](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
