---
slug: fix-auto-mount-not-working-startup-rcloneview
title: "Solucionar el montaje automático que no funciona al inicio — Recupera tus unidades en la nube con RcloneView"
authors:
  - steve
description: "¿La unidad en la nube desaparece tras reiniciar? Soluciona el montaje automático de RcloneView al inicio: revisa la licencia, Launch at login, letras de unidad, FUSE en Linux y permisos de macOS."
keywords:
  - montaje automático no funciona
  - unidad en la nube no se monta al inicio
  - rcloneview montaje automático
  - montar almacenamiento en la nube al arrancar
  - unidad montada desaparece tras reiniciar
  - solucionar rclone mount al inicio
  - iniciar unidad en la nube al iniciar sesión
  - error de montaje fuse linux
  - conflicto de letra de unidad montaje
tags:
  - RcloneView
  - troubleshooting
  - tips
  - mount
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar el montaje automático que no funciona al inicio — Recupera tus unidades en la nube con RcloneView

> Si tu unidad en la nube desaparece después de cada reinicio, una breve lista de comprobación suele recuperarla de forma definitiva.

Configuraste un montaje para Google Drive o un bucket de S3, funcionó como esperabas y, tras reiniciar, la letra de unidad o la carpeta de montaje ya no está. El montaje automático depende de que varias configuraciones funcionen juntas: la aplicación debe iniciarse, el montaje debe estar marcado para montaje automático y el sistema operativo debe permitirlo. Esta guía repasa cada causa en RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Revisa la licencia y la configuración de montaje automático

**Auto Mount on Startup** es una función de la licencia PLUS. Con la licencia FREE, montar y desmontar funcionan por completo, pero cada montaje debe iniciarse manualmente después de abrir la aplicación. El pie de la ventana principal muestra qué licencia está activa.

Con PLUS activa, abre **Mount Manager** desde la pestaña Remote y confirma que el montaje tiene **Auto mount** habilitado. Recuerda que Edit está deshabilitado mientras un montaje está activo, así que primero desmóntalo, edita la configuración y elige **Save and mount**.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Habilitar el montaje automático en el Mount Manager de RcloneView" class="img-large img-center" />

## Asegúrate de que RcloneView realmente se inicie

El montaje automático se ejecuta cuando RcloneView se inicia, así que la aplicación debe arrancar al iniciar sesión. En **Settings > General**, habilita **Launch at login**. Activa **Start minimized** si prefieres que la aplicación se abra directamente en la bandeja del sistema. El menú de la bandeja muestra entonces tus unidades montadas y te permite activar o desactivar cada una.

Revisa también **Quit on close**. Si está activado, cerrar la ventana sale de la aplicación y desmonta tus unidades. Desactívalo para mantener RcloneView, y sus montajes, en ejecución en segundo plano.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Montar una carpeta en la nube desde el explorador de RcloneView" class="img-large img-center" />

## Corrige los bloqueos específicos de cada plataforma

**Windows:** Si el montaje usa una letra de unidad fija que una memoria USB o un recurso compartido de red ocupó primero, el montaje no puede conectarse. Configura **Target** en Auto o elige una letra que nada más utilice.

**Linux:** Montar requiere FUSE (se recomienda fuse3). Los montajes usan nfsmount de forma predeterminada, y la aplicación necesita GTK+3 y una sesión de escritorio X11 o Wayland en ejecución. RcloneView es una aplicación con interfaz gráfica y no puede iniciar montajes como un servicio systemd sin interfaz (headless).

**macOS:** Si el punto de montaje está dentro de Desktop, Documents o Downloads, concede acceso a RcloneView en **Privacy & Security > Files & Folders** o **Full Disk Access** y luego reinicia la aplicación.

## Lee los registros cuando nada más funcione

Los tokens OAuth caducados y los retrasos de red al arrancar también pueden impedir un montaje. Habilita **rclone logging** en Settings > Embedded Rclone, establece el nivel de registro en DEBUG, reinicia el rclone integrado y reinicia el equipo. El registro muestra el error exacto. Un error de autenticación significa que debes editar el remoto y volver a conectarlo; un error de red normalmente se resuelve al montar de nuevo desde la bandeja.

<img src="/support/images/en/blog/new-remote.png" alt="Reconectar un remoto en la nube en RcloneView tras un error de autenticación" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Confirma una licencia PLUS y habilita **Auto mount** en cada montaje en Mount Manager.
3. Activa **Launch at login** y desactiva **Quit on close** en Settings > General.
4. Resuelve los problemas de letra de unidad, FUSE o permisos de macOS y reinicia para probar.

Una vez superada la lista de comprobación, tus unidades en la nube estarán listas cada vez que te sientes a trabajar.

---

**Guías relacionadas:**

- [Montar automáticamente el almacenamiento en la nube al inicio con RcloneView](https://rcloneview.com/support/blog/auto-mount-startup-rcloneview)
- [Solucionar conflictos de letra de unidad al montar en Windows con RcloneView](https://rcloneview.com/support/blog/fix-mount-drive-letter-conflict-windows-rcloneview)
- [Solucionar errores FUSE de rclone mount con RcloneView](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />
