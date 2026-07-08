---
slug: manage-google-photos-cloud-sync-backup-rcloneview
title: "Gestiona el almacenamiento de Google Photos — Sincroniza y haz copias de seguridad de fotos con RcloneView"
authors:
  - tayson
description: "Conecta Google Photos a RcloneView y haz copias de seguridad de tu biblioteca de fotos en almacenamiento local u otros proveedores en la nube. Gestiona Google Photos sin perder los originales."
keywords:
  - Google Photos RcloneView backup
  - download Google Photos local backup
  - Google Photos cloud sync
  - rclone Google Photos GUI
  - backup Google Photos external drive
  - Google Photos to S3 backup
  - manage Google Photos storage
  - RcloneView Google Photos
tags:
  - RcloneView
  - google-photos
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el almacenamiento de Google Photos — Sincroniza y haz copias de seguridad de fotos con RcloneView

> RcloneView se conecta a Google Photos mediante OAuth, permitiéndote explorar tu biblioteca de fotos, hacer copias de seguridad de los originales en almacenamiento local u otros proveedores en la nube, y ejecutar exportaciones programadas.

Google Photos es la solución de copia de seguridad de fotos predeterminada para miles de millones de usuarios de Android, pero no es una copia de seguridad en sí misma. Si tu cuenta de Google se ve comprometida, se excede la cuota de almacenamiento o cambian los términos del servicio, tu biblioteca de fotos está en riesgo. RcloneView se conecta a Google Photos como un remoto independiente de Google Drive, dándote acceso directo a tu biblioteca para descargar y hacer copias de seguridad en discos externos, dispositivos NAS o almacenamiento en la nube frío como Amazon S3 o Backblaze B2.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurando Google Photos en RcloneView

Google Photos aparece como un proveedor independiente en la configuración de remotos de RcloneView. Ve a **Remote tab → New Remote → Google Photos** y autentícate mediante inicio de sesión OAuth en el navegador. Se te pedirá que le concedas a RcloneView (a través de rclone) acceso de lectura a tus fotos; después de autorizar, tu biblioteca aparece en el panel Explorer organizada por año y álbum.

Ten en cuenta que la API de Google Photos presenta las fotos en una estructura específica: por álbum o por carpetas basadas en fecha. No puedes reorganizar las fotos a través de la API, pero puedes explorar y descargar los originales en resolución completa, incluidos los archivos RAW subidos desde una cámara si tienes almacenamiento de Google One.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Google Photos as a remote in RcloneView" class="img-large img-center" />

## Copia de seguridad de Google Photos en almacenamiento local

El caso de uso más común es descargar toda tu biblioteca de Google Photos a un disco externo o NAS. Crea un trabajo de copia (Copy job) en Job Manager con Google Photos como origen y tu disco externo local (o ruta NAS) como destino. Activa **skip existing files** para que las ejecuciones posteriores sean incrementales; solo se descargan las fotos nuevas desde la última copia de seguridad.

Para una familia con 10 años de fotos en 50.000 imágenes que totalizan 150 GB, la descarga inicial tardará varias horas. Ejecútala durante la noche con la programación configurada para ejecutarse una vez. Las ejecuciones futuras, programadas semanalmente, agregan solo las fotos nuevas subidas esa semana, manteniendo tu copia de seguridad local actualizada sin retransferir todo.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Backing up Google Photos library to local storage in RcloneView" class="img-large img-center" />

## Copia de seguridad entre nubes: de Google Photos a S3 o Backblaze B2

Para una copia de seguridad de nube a nube, configura Google Photos como origen y Amazon S3 o Backblaze B2 como destino. Esto crea una copia de seguridad independiente de tu biblioteca de fotos en un proveedor de nube separado, protección contra problemas con la cuenta de Google sin requerir capacidad de almacenamiento local.

Usa reglas de filtro en el Paso 3 del asistente de sincronización para incluir solo tipos de archivo específicos (`.jpg`, `.heic`, `.mp4`, `.raw`) y excluir los archivos JSON de metadatos adjuntos de Google si no son necesarios. Establece un filtro de antigüedad máxima de archivo para hacer copia de seguridad solo de las fotos de los últimos 12 meses en tu trabajo rutinario, con un trabajo único separado para el archivo histórico.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google Photos to Backblaze B2 cross-cloud backup in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega Google Photos como remoto mediante autenticación OAuth en el navegador en el asistente New Remote.
3. Crea un trabajo de copia desde Google Photos hacia tu disco externo o bucket de copia de seguridad en la nube.
4. Programa ejecuciones incrementales semanales para capturar nuevas fotos automáticamente.

Con RcloneView, Google Photos se convierte en un origen del que puedes hacer copias de seguridad de manera confiable, asegurando que tus recuerdos irremplazables tengan una copia independiente de la infraestructura de Google.

---

**Guías relacionadas:**

- [Copia de seguridad de Google Photos en disco externo y NAS con RcloneView](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)
- [Organiza tu biblioteca de fotos en la nube con RcloneView](https://rcloneview.com/support/blog/declutter-cloud-photo-library-rcloneview)
- [Gestiona la sincronización y copia de seguridad en la nube de Google Drive con RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
