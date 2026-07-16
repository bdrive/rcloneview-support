---
slug: plex-cloud-mount-rcloneview
title: "Transmite películas en la nube con Plex y RcloneView — Monta Google Drive, Dropbox o S3 como tu biblioteca"
authors:
  - tayson
description: Usa RcloneView para montar Google Drive, Dropbox, Wasabi o S3 como una unidad local que Plex pueda indexar. Transmite tus películas almacenadas en la nube sin descargarlas, sin necesidad de la línea de comandos.
keywords:
  - plex cloud mount
  - google drive plex
  - rclone mount plex
  - cloud movie server
  - plex cloud streaming
  - rcloneview
  - vfs cache plex
tags:
  - RcloneView
  - plex
  - google-drive
  - onedrive
  - dropbox
  - s3
  - mount
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Transmite películas en la nube con Plex y RcloneView — Monta Google Drive, Dropbox o S3 como tu biblioteca

> ¿Sin espacio en disco? Monta tu nube como una unidad local con RcloneView y deja que Plex transmita directamente desde ella, de forma fluida, confiable y sin configuración por línea de comandos.

Plex es fantástico para organizar y transmitir tus contenidos multimedia, pero el almacenamiento local se llena rápido. Mientras tanto, los buckets en la nube—Google Drive, Dropbox, Wasabi, Cloudflare R2, S3—ofrecen espacio económico y prácticamente ilimitado. La pieza que falta es una forma sencilla de hacer que Plex "vea" esas carpetas en la nube como una ruta local. El comando `mount` de rclone resuelve esto, y RcloneView envuelve ese poder en una GUI simple: elige una carpeta en la nube, elige una letra de unidad o ruta de montaje, activa la caché y listo. Sin terminal, sin flags que memorizar.

<!-- truncate -->

RcloneView usa el probado motor de rclone por debajo. Puedes conectar todos los proveedores principales, montarlos como carpetas locales o letras de unidad, y apuntar Plex a esas rutas. Cuando se configura con los ajustes de caché VFS adecuados, Plex puede escanear, buscar y transmitir desde almacenamiento en la nube con un mínimo de buffering.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Cómo encajan Plex y RcloneView

Plex escanea una ruta local (por ejemplo, `X:\Movies` en Windows o `/Volumes/Cloud/Movies` en macOS). RcloneView monta tu carpeta en la nube sobre esa ruta, de modo que Plex la trata como cualquier otro directorio local.

Diagrama de texto
[Google Drive Movies] ⇄ [Montaje de RcloneView (X:/ o /Volumes/Cloud)] ⇄ [Biblioteca de medios de Plex]

Documentación útil

- Fundamentos de montaje en RcloneView: [Montar almacenamiento en la nube como una unidad local](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- Flags avanzados vía Embedded Rclone: [Ajustes generales](/howto/rcloneview-basic/general-settings)
- Agregar inicios de sesión OAuth (Google/Dropbox/OneDrive): [Conectar vía inicio de sesión en el navegador](/howto/remote-storage-connection-settings/add-oath-online-login)
- Configuración de S3/Wasabi/R2: [Configurar almacenamiento S3](/howto/remote-storage-connection-settings/s3) · [Credenciales de Cloudflare R2](/howto/cloud-storage-setting/cloudflare-r2-credential)

## Monta y transmite en pocos clics

Conecta una nube, crea un montaje y apunta Plex hacia él. Eso es todo.

1. Conecta un remoto

- Google Drive, OneDrive, Dropbox, S3/Wasabi/R2 son todos compatibles. Agrega cada uno mediante `+ New Remote`.
- Guías: [Proveedores basados en OAuth](/howto/remote-storage-connection-settings/add-oath-online-login) · [Almacenamiento compatible con S3](/howto/remote-storage-connection-settings/s3) · [Notas del backend de Dropbox](https://rclone.org/dropbox/)

<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="Agregar un nuevo remoto en RcloneView" class="img-large img-center" />

2. Crea un montaje

- Método 1 — Desde el Explorador de Remotos: [Montar desde el Explorador de Remotos](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-1-mount-from-remote-explorer)
- Método 2 — Vía el Administrador de Montajes: [Montar vía el Administrador de Montajes](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-2-mount-via-mount-manager)

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Montar desde el Explorador de Remotos en RcloneView" class="img-large img-center" />

3. Elige el destino del montaje

- Windows: elige una letra de unidad (p. ej., `X:`). Por debajo, RcloneView usa `cmount` para compatibilidad.
- macOS: elige una ruta de montaje bajo `/Volumes/Cloud` (o una ruta personalizada).
- Linux: elige un directorio de montaje (p. ej., `/mnt/plex-cloud`).

4. Configura la caché para Plex

- En las Opciones Avanzadas del diálogo de Montaje, configura **Cache mode** en `full` para la mejor compatibilidad con Plex.
- Opcionalmente configura **Cache max size** (p. ej., 10–50 GB) y **Dir cache time**.
- También puedes ajustar flags globales como `--vfs-read-ahead` en Embedded Rclone → **Global Rclone Flags**. Ver: /support/howto/rcloneview-basic/general-settings

5. Monta y verifica

- Haz clic en "Save and mount", luego abre la carpeta de montaje en tu explorador de archivos para confirmar que puedes navegar por las películas.

6. Agrega a Plex

- Plex → Libraries → Add Library → Add folders → elige tu ruta montada (`X:\Movies` o `/Volumes/Cloud/Movies`). Deja que Plex escanee e indexe.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configurar el montaje desde el Administrador de Montajes" class="img-large img-center" />

## Ajuste de rendimiento para una reproducción fluida

Estos ajustes reducen el buffering y mejoran la búsqueda al transmitir archivos de alta tasa de bits desde almacenamiento en la nube.

- Modo de caché VFS: Usa `full` para escanear y buscar (las transcodificaciones y miniaturas funcionan de forma más confiable).
- Tamaño de la caché: Asigna 10–50 GB si tienes espacio en SSD disponible.
- Lectura anticipada: Aumenta `--vfs-read-ahead` (p. ej., 64M–256M) vía Global Rclone Flags.
- Límites de ancho de banda: Si tu red está ocupada, establece un límite razonable para que Plex se mantenga fluido durante las horas pico.
- Mantén los metadatos de Plex en local: Almacena los metadatos y miniaturas en un SSD local; mantén solo los contenidos multimedia en la nube.

Nota: El tamaño de la caché y la lectura anticipada dependen de la carga de trabajo. Comienza de forma conservadora y ajusta mientras monitoreas la reproducción y la actividad del disco.

## Quién obtiene más valor

- Coleccionistas de cine en casa: Mantén un archivo de películas de 10 TB en Google Drive o Dropbox; transmite a través de Plex sin ampliar los discos locales.
- Configuraciones híbridas con NAS: Usa el NAS como una capa de caché SSD mientras la biblioteca principal vive en S3/Wasabi/R2 vía montaje.
- Desarrolladores y homelabbers: Adjunta montajes de RcloneView a Plex dockerizado; usa montajes guardados y auto-montaje al iniciar sesión para mayor confiabilidad.

## Aspectos esenciales de solución de problemas

- La ruta de la biblioteca no es visible en Plex: Confirma que el montaje está activo y que el usuario del sistema operativo que ejecuta Plex puede acceder a la ruta del montaje.
- El montaje desaparece tras reiniciar: Activa **Auto mount** en el diálogo de Montaje, y considera "Launch at login" en Settings. → [Montar almacenamiento en la nube como una unidad local](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive) · [Ajustes generales](/howto/rcloneview-basic/general-settings)
- Escaneos lentos o tartamudeo: Usa `Cache mode: full`, aumenta el tamaño de la caché y `--vfs-read-ahead`, mantén los metadatos en local.
- Límites de API o throttling: Programa los escaneos fuera de horas pico; usa Compare & Sync para curar lo que Plex escanea si tu biblioteca es enorme. → [Comparar contenido de carpetas](/howto/rcloneview-basic/compare-folder-contents) · [Crear trabajos de sincronización](/howto/rcloneview-basic/create-sync-jobs)

## Películas en la nube, experiencia local

Montar con RcloneView permite que Plex trate tu nube como una unidad local rápida. Conservas la flexibilidad y escala de Google Drive, Dropbox, Wasabi o S3, y Plex ofrece la misma experiencia pulida, sin los dolores de cabeza del espacio en disco. Configura un montaje, apunta Plex hacia él, ajusta la caché y presiona play.

¿Listo para probarlo? Descarga RcloneView y construye hoy tu biblioteca de Plex impulsada por la nube.


<CloudSupportGrid />
