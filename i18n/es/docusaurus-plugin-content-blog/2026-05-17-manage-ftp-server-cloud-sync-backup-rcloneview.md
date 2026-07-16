---
slug: manage-ftp-server-cloud-sync-backup-rcloneview
title: "Gestiona el almacenamiento de tu servidor FTP — Sincroniza y respalda archivos con RcloneView"
authors:
  - robin
description: "Conecta y gestiona tu servidor FTP con RcloneView. Sincroniza y respalda archivos FTP en Google Drive, S3, Backblaze B2 y más de 90 proveedores de almacenamiento en la nube."
keywords:
  - gestión de servidor FTP
  - sincronización de FTP en la nube
  - copia de seguridad de FTP en la nube
  - RcloneView FTP
  - transferencia de archivos FTP
  - sincronizar FTP con Google Drive
  - FTP a Amazon S3
  - herramienta de copia de seguridad de FTP en la nube
  - gestionar almacenamiento FTP
  - FTP rclone GUI
tags:
  - ftp
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el almacenamiento de tu servidor FTP — Sincroniza y respalda archivos con RcloneView

> RcloneView convierte tu servidor FTP en un remoto de primera clase — explora, sincroniza y respalda sus archivos visualmente junto a Google Drive, S3 y más de 90 proveedores de nube.

FTP sigue siendo la columna vertebral de innumerables entornos de hosting web, archivos multimedia heredados y servidores internos de distribución de archivos. Gestionar archivos FTP normalmente implica malabarear sesiones de terminal, listados manuales de directorios y scripts hechos a mano. RcloneView trata tu servidor FTP exactamente como cualquier cuenta de almacenamiento en la nube — obtienes una interfaz visual coherente para explorar, transferir y respaldar archivos sin tocar la línea de comandos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cómo conectar tu servidor FTP en RcloneView

Abre la pestaña **Remote** y haz clic en **New Remote**. En la lista de proveedores, elige FTP e introduce el nombre de host o la dirección IP de tu servidor, el puerto, el usuario y la contraseña. Si tu servidor admite FTPS (FTP sobre TLS), puedes habilitarlo en las opciones avanzadas para obtener una conexión cifrada.

Una vez guardado, el remoto FTP aparece en el panel del explorador junto a tus cuentas en la nube. Puedes expandir su árbol de carpetas, explorar subdirectorios y ver nombres de archivo, tamaños y marcas de tiempo de modificación — la misma experiencia que obtienes con Amazon S3 o Dropbox.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new FTP remote in RcloneView" class="img-large img-center" />

## Explorar y transferir archivos FTP visualmente

El explorador multipanel de RcloneView es donde la gestión de FTP se vuelve eficiente. Abre tu remoto FTP en un panel y un destino en la nube — un bucket de Backblaze B2, una carpeta de Google Drive o un prefijo de Amazon S3 — en el otro. Arrastra y suelta archivos entre paneles para iniciar una copia. Usa Ctrl+Clic o Mayús+Clic para selección múltiple al mover lotes de archivos. Haz clic derecho para renombrar, eliminar, crear carpetas u obtener el tamaño de las carpetas.

Para agencias web que mantienen archivos de clientes en un servidor FTP y necesitan archivarlos en almacenamiento de objetos, o para equipos de medios que distribuyen recursos desde un host FTP a múltiples proveedores de CDN en la nube, esta vista lado a lado sustituye a los flujos de trabajo manuales propensos a errores.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files from FTP remote to cloud storage in RcloneView" class="img-large img-center" />

## Crear trabajos de sincronización entre FTP y almacenamiento en la nube

Para flujos de trabajo repetibles, el **Job Manager** de RcloneView te permite configurar trabajos de sincronización o copia entre tu servidor FTP y cualquier destino en la nube. El asistente de 4 pasos cubre la selección de origen y destino, ajustes avanzados (transferencias simultáneas, verificación de checksum) y reglas de filtro (tipo de archivo, límite de tamaño, umbral de antigüedad).

Ejecuta primero una **Dry Run** — muestra una vista previa de cada archivo que se copiaría o eliminaría sin realizar ningún cambio. Esto resulta especialmente útil para orígenes FTP donde las estructuras de directorios pueden ser complejas o donde sobrescrituras no deseadas podrían causar problemas.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Executing a sync job from FTP to cloud storage in RcloneView" class="img-large img-center" />

Después de cada ejecución, la pestaña **Job History** muestra el tiempo de ejecución, la velocidad de transferencia, el número de archivos y el estado final — ofreciéndote un registro de auditoría claro de qué se movió y cuándo.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing FTP to cloud backup results in RcloneView" class="img-large img-center" />

Con una **licencia PLUS**, puedes asociar programaciones tipo cron a los trabajos de sincronización de FTP — respaldando las nuevas subidas cada noche o sincronizando con el almacenamiento en la nube con una cadencia semanal, todo sin dejar una sesión abierta.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre **Remote** > **New Remote** y selecciona FTP en la lista de proveedores.
3. Introduce el host, puerto, usuario y contraseña de tu servidor, y luego guarda el remoto.
4. Abre tu remoto FTP en un panel y un destino en la nube en el otro.
5. Usa **Job Manager** para configurar un trabajo de sincronización y ejecuta una Dry Run antes de la primera transferencia real.

Conectar tu servidor FTP a RcloneView significa no volver a escribir jamás un script de sincronización — cada transferencia queda registrada, es repetible y auditable desde una única interfaz.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de tu servidor SFTP — Sincronización en la nube con RcloneView](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [Migra tu servidor FTP a almacenamiento en la nube con RcloneView](https://rcloneview.com/support/blog/migrate-ftp-server-to-cloud-storage-rcloneview)
- [Conecta un servidor WebDAV y sincroniza en la nube con RcloneView](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)

<CloudSupportGrid />
