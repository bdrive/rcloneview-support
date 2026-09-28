---
slug: migrate-put-io-to-google-drive-rcloneview
title: "Migrar de Put.io a Google Drive — Transferir archivos con RcloneView"
authors:
  - jay
description: "Migra archivos de Put.io a Google Drive con RcloneView, una GUI multiplataforma que transfiere, verifica y organiza contenido en la nube."
keywords:
  - put.io a google drive
  - migrar archivos de put.io
  - migración putio
  - RcloneView put.io
  - transferencia de nube a nube
  - migración google drive
  - mover torrents descargados a la nube
  - rclone put.io
  - transferir put.io a drive
  - herramienta de migración de almacenamiento en la nube
tags:
  - RcloneView
  - putio
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de Put.io a Google Drive — Transferir archivos con RcloneView

> Mueve todo lo que tienes guardado en Put.io a Google Drive con un flujo de trabajo visual de arrastrar y soltar, en lugar de alternar entre dos interfaces web independientes.

Put.io es un excelente punto de llegada para torrents descargados y archivos remotos, pero no está pensado para el archivado a largo plazo ni para compartir en equipo como Google Drive. Una vez que una descarga termina en Put.io, muchos usuarios todavía tienen que bajarla manualmente y volver a subirla a otro sitio. RcloneView se conecta a ambos servicios a la vez y te permite copiar o mover contenido directamente entre ellos, de nube a nube, sin pasar primero por tu disco local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Put.io y Google Drive lado a lado

El Explorer de RcloneView admite hasta cuatro paneles a la vez, por lo que puedes abrir tu cuenta de Put.io en un panel y tu Google Drive en otro, y verlos lado a lado. Tanto Put.io como Google Drive se añaden de la misma manera: inicio de sesión OAuth basado en navegador, sin una clave de API o token de acceso independiente que copiar manualmente. Una vez configurados ambos remotos, cada uno aparece como su propia pestaña, y cambiar entre ellos es instantáneo.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Put.io and Google Drive as separate remotes in RcloneView" class="img-large img-center" />

Con ambos paneles abiertos, puedes navegar tu carpeta de descargas de Put.io carpeta por carpeta y decidir exactamente qué se transfiere, en lugar de migrar todo a ciegas. A diferencia de las herramientas que solo montan, RcloneView también sincroniza y compara carpetas, incluso con la licencia FREE, así que una transferencia única no cuesta nada más allá del tiempo que tarda en ejecutarse.

## Ejecutar la transferencia como un trabajo

En lugar de arrastrar archivos de uno en uno, configura un trabajo de Copy o Move mediante el asistente de sincronización de 4 pasos. Selecciona Put.io como origen y tu carpeta de Google Drive como destino, y luego usa el paso de Advanced Settings para ajustar el número de transferencias de archivos simultáneas según tu conexión. Si no estás seguro de que el trabajo esté bien delimitado, ejecuta primero un Dry Run: enumera todos los archivos que se copiarían sin tocar nada, algo que vale la pena hacer antes de una migración de medios a gran escala.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Copying files from Put.io to Google Drive in RcloneView" class="img-large img-center" />

Para una migración puntual, usa el modo de ejecución One-time para que no se guarde como un trabajo recurrente. Si esperas seguir añadiendo archivos a Put.io antes de terminar el traslado, guárdalo como un trabajo para poder volver a ejecutarlo más tarde y recoger solo el contenido nuevo.

## Verificar el traslado con Folder Compare

Cuando la transferencia termine, abre Folder Compare para revisar ambas ubicaciones lado a lado. Marca los archivos que existen solo en un lado y los archivos con tamaños distintos, para que puedas confirmar que la migración se completó antes de eliminar nada de Put.io.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing job history after a Put.io to Google Drive transfer" class="img-large img-center" />

Job History también guarda un registro de la transferencia: número de archivos, tamaño total y duración, lo cual es útil si estás migrando una biblioteca grande en lotes a lo largo de varias sesiones.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade tu remoto de Put.io mediante el flujo de inicio de sesión OAuth por navegador.
3. Añade tu remoto de Google Drive de la misma manera, con inicio de sesión OAuth por navegador.
4. Crea un trabajo de Copy o Move de Put.io a tu carpeta de destino, ejecuta un Dry Run y luego ejecútalo.

Vaciar el almacenamiento de Put.io hacia un hogar permanente en Google Drive mantiene tus descargas organizadas sin un segundo paso de subida manual.

---

**Guías relacionadas:**

- [Migrar de OneDrive a Google Drive — Transferir archivos con RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-google-drive-rcloneview)
- [Gestionar el almacenamiento de Put.io — Sincronizar y respaldar archivos con RcloneView](https://rcloneview.com/support/blog/manage-put-io-cloud-sync-backup-rcloneview)
- [Transmitir y sincronizar medios de Put.io a tu NAS o nube con RcloneView](https://rcloneview.com/support/blog/stream-sync-putio-media-nas-cloud-rcloneview)

<CloudSupportGrid />
