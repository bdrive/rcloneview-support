---
slug: rcloneview-apple-silicon-mac-cloud-sync
title: "RcloneView en Mac con Apple Silicon — Sincronización y copia de seguridad del almacenamiento en la nube"
authors:
  - robin
description: "Ejecuta RcloneView de forma nativa en Mac con Apple Silicon gracias a su .dmg Universal. Monta, sincroniza y haz copias de seguridad de más de 90 proveedores en la nube desde una sola app de macOS."
keywords:
  - rcloneview apple silicon
  - rclone gui m1 mac
  - sincronización en la nube mac apple silicon
  - montar almacenamiento en la nube macbook
  - rclone universal binary macos
  - copia de seguridad en la nube mac mini
  - montar unidad en la nube macos
  - instalar rcloneview macos
  - sincronizar google drive onedrive mac
  - gestor de almacenamiento en la nube mac arm64
tags:
  - RcloneView
  - macos
  - cloud-sync
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView en Mac con Apple Silicon — Sincronización y copia de seguridad del almacenamiento en la nube

> Una sola descarga Universal funciona de forma nativa en Mac con Apple Silicon e Intel, con el motor de rclone integrado.

Muchos usuarios de Mac con Apple Silicon manejan más de una cuenta en la nube. RcloneView les ofrece una única app nativa de macOS para explorar, montar, comparar y sincronizar Google Drive, OneDrive, Dropbox, buckets de S3, recursos compartidos de NAS y decenas de remotos más. Esta guía explica lo que conviene saber antes de instalarlo en un equipo con Apple Silicon.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Un único .dmg Universal para Apple Silicon e Intel

RcloneView para macOS se distribuye como una sola imagen de disco `.dmg` que contiene un binario Universal: incluye código ARM64 para Apple Silicon y código x86-64 para Mac con Intel. En Apple Silicon, la app se ejecuta de forma nativa. La compilación está notarizada y firmada por el desarrollador, así que Gatekeeper la abre sin necesidad de trucos.

La versión mínima compatible es macOS 12.7 (Monterey), y se ha confirmado que funciona en Ventura, Sonoma y Sequoia. Obtén el instalador solo desde la [página de descarga](https://rcloneview.com/src/download.html) oficial, ya que no existe un cask de Homebrew ni ningún otro canal de gestor de paquetes. Después, la versión para macOS se actualiza dentro de la propia app.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new cloud remote in RcloneView on an Apple Silicon Mac" class="img-large img-center" />

RcloneView incluye su propio binario de rclone, así que no necesitas instalar nada más. Abre la pestaña Remote, haz clic en **New Remote** e inicia sesión. Google Drive, Dropbox, OneDrive y Box usan un inicio de sesión OAuth en el navegador. Los servicios compatibles con S3, como Wasabi o Cloudflare R2, piden claves de acceso en su lugar.

## Montar unidades en la nube en Finder

En macOS, RcloneView monta con `nfsmount` de forma predeterminada y te permite elegir una ruta de montaje personalizada. Selecciona una carpeta en el explorador, haz clic en el icono Mount y el remoto aparecerá en Finder como un volumen local. El modo de caché VFS predeterminado, `writes`, es adecuado para la mayoría de los flujos de edición. Una fotógrafa con un MacBook Air de 16 GB que explora un archivo de 2 TB también puede fijar un tamaño máximo de caché para que esta no llene el SSD interno.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager showing cloud drives mounted on macOS" class="img-large img-center" />

Puedes gestionar los montajes desde Mount Manager o desde el icono de la bandeja en la barra de menús. Con una licencia PLUS, Auto mount vuelve a conectar tus unidades cada vez que inicias sesión.

## Dos ajustes de macOS que conviene corregir desde el principio

Los controles de privacidad de macOS pueden hacer que Escritorio, Documentos o Descargas aparezcan vacíos dentro de RcloneView. Concede acceso en **System Settings > Privacy & Security > Files & Folders**, o añade RcloneView a **Full Disk Access**, y luego reinicia la app.

Las tareas de sincronización grandes también pueden toparse con el límite predeterminado de archivos abiertos de macOS (256–1024). Si ves errores de "too many open files", crea un plist de LaunchDaemon en `/Library/LaunchDaemons/limit.maxfiles.plist` que eleve los límites flexible y estricto a 524288 y reinicia el equipo.

## Copias de seguridad programadas desde tu Mac

Usa el asistente de sincronización para configurar una tarea unidireccional, por ejemplo de `~/Projects` a un bucket de Backblaze B2, y empieza con un Dry Run para ver exactamente qué cambiaría. RcloneView monta Y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux. Con una licencia PLUS, el paso de programación puede ejecutar la tarea según un calendario de estilo cron mientras la app permanece en la barra de menús.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Creating a scheduled cloud backup job in RcloneView on macOS" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html) y arrástralo desde el `.dmg` Universal a Applications.
2. Concede los permisos Files & Folders o Full Disk Access en System Settings y vuelve a abrir la app.
3. Añade tus remotos en la nube con **New Remote** y monta los que quieras ver en Finder.
4. Crea una tarea de sincronización, compruébala con un Dry Run y sigue el progreso en la pestaña Transferring.

Con RcloneView configurado, tu Mac puede montar, sincronizar y hacer copias de seguridad de las cuentas en la nube que usas desde un solo lugar.

---

**Guías relacionadas:**

- [RcloneView en macOS Sequoia — Sincronización del almacenamiento en la nube](https://rcloneview.com/support/blog/rcloneview-macos-sequoia-cloud-sync)
- [Solucionar errores Too Many Open Files en macOS](https://rcloneview.com/support/blog/fix-macos-too-many-open-files-rcloneview)
- [Solucionar carpetas vacías y permisos en macOS](https://rcloneview.com/support/blog/fix-macos-empty-folders-permissions-rcloneview)

<CloudSupportGrid />
