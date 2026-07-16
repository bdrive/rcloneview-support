---
slug: manage-sftp-server-cloud-sync-rcloneview
title: "Conecta cualquier servidor SFTP a RcloneView — Sincroniza servidores remotos con almacenamiento en la nube"
authors:
  - tayson
description: "SFTP es el estándar para el acceso seguro a archivos en servidores Linux, VPS y hosting. Conecta cualquier servidor SFTP a RcloneView y sincroniza con Google Drive, S3 o más de 70 nubes."
keywords:
  - sftp cloud sync
  - sftp to google drive
  - sftp backup tool
  - sftp file manager gui
  - sftp to s3 sync
  - ssh file transfer cloud
  - sftp cloud backup
  - sftp gui client
  - sftp remote manager
  - linux server cloud sync
tags:
  - RcloneView
  - sftp
  - sync
  - cloud-storage
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Conecta cualquier servidor SFTP a RcloneView — Sincroniza servidores remotos con almacenamiento en la nube

> Todo servidor Linux, VPS y hosting web habla SFTP. RcloneView convierte cualquier endpoint SFTP en un remoto gestionable que puedes explorar, sincronizar con almacenamiento en la nube y respaldar según un horario.

SFTP (SSH File Transfer Protocol) es el protocolo universal para el acceso seguro a archivos en servidores remotos. Ya sea un servidor web, un equipo de desarrollo, un VPS o un servidor dedicado, SFTP casi siempre está disponible. RcloneView se conecta a cualquier servidor SFTP y lo coloca junto a tus cuentas en la nube: explora los archivos del servidor visualmente, sincroniza con S3 o Google Drive y programa copias de seguridad automatizadas.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Añadir un remoto SFTP

<img src="/support/images/en/blog/new-remote.png" alt="Add SFTP remote" class="img-large img-center" />

Configúralo con el nombre de host de tu servidor, el puerto (por defecto 22), el nombre de usuario y autenticación por contraseña o clave SSH. El sistema de archivos de tu servidor aparece al instante en el explorador.

## Flujos de trabajo clave

### Respaldar el servidor web en la nube

Sincroniza los directorios `/var/www` o `/home` de tu servidor web con S3 o Google Drive:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="SFTP server to cloud" class="img-large img-center" />

### Programar copias de seguridad del servidor

Automatiza copias de seguridad nocturnas del servidor al almacenamiento en la nube:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule SFTP backup" class="img-large img-center" />

### Migrar entre servidores

¿Te mudas a un nuevo servidor? Abre el SFTP del servidor antiguo en un panel y el del nuevo servidor en el otro. Transfiere directamente.

### Sincronizar archivos de desarrollo

Mantén tu entorno de desarrollo local sincronizado con tu servidor remoto usando el almacenamiento en la nube como intermediario.

### Verificar copias de seguridad

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify SFTP backup" class="img-large img-center" />

## Autenticación con clave SSH

Para copias de seguridad automatizadas, se recomienda la autenticación con clave SSH en lugar de contraseñas. Configura tu clave en los ajustes del remoto para conexiones seguras y sin contraseña.

## Consejos de rendimiento

- **Usa compresión** para transferencias con mucho texto en conexiones lentas
- **Limita las transferencias simultáneas** a 2-4 en hosting compartido
- **Excluye archivos temporales** — filtra `.cache`, `node_modules`, `__pycache__`
- **Programa en horas de baja actividad** para evitar afectar el rendimiento del servidor

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Añade tu servidor SFTP** como remoto.
3. **Explora los archivos del servidor** en el explorador de dos paneles.
4. **Sincroniza con la nube** y programa copias de seguridad.

Si tiene SSH, RcloneView puede gestionarlo.

---

**Guías relacionadas:**

- [Montar SFTP/SMB como unidad local](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [Conectar servidores WebDAV](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [Migrar servidor FTP a la nube](https://rcloneview.com/support/blog/migrate-ftp-server-to-cloud-storage-rcloneview)

<CloudSupportGrid />
