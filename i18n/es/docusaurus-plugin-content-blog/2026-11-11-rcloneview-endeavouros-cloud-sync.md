---
slug: rcloneview-endeavouros-cloud-sync
title: "RcloneView en EndeavourOS — Sincronización y copia de seguridad del almacenamiento en la nube"
authors:
  - steve
description: "Ejecuta RcloneView en EndeavourOS con el AppImage oficial. Incluye los requisitos de GTK+3 y FUSE, cómo montar unidades en la nube y sincronizar más de 90 proveedores."
keywords:
  - RcloneView EndeavourOS
  - sincronización en la nube en EndeavourOS
  - GUI de rclone para EndeavourOS
  - copia de seguridad en la nube en Linux basado en Arch
  - RcloneView AppImage
  - montar unidad en la nube en EndeavourOS
  - sincronización de Google Drive en EndeavourOS
  - gestor de archivos multinube para Linux
  - copia de seguridad en la nube en rolling release
tags:
  - RcloneView
  - linux
  - platform
  - cloud-sync
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView en EndeavourOS — Sincronización y copia de seguridad del almacenamiento en la nube

> EndeavourOS ofrece una base Arch de lanzamiento continuo con un escritorio listo para usar, y el AppImage oficial de RcloneView funciona en él sin ningún paquete de terceros.

Los usuarios de EndeavourOS suelen querer software actualizado y poca configuración manual. El almacenamiento en la nube suele ser el punto débil: Google Drive, OneDrive y los buckets de S3 no tienen aquí un cliente de escritorio nativo, y manejar varias configuraciones de CLI resulta tedioso. RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux, e incluye su propio rclone integrado.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Instalación con el AppImage oficial

RcloneView se distribuye únicamente a través de [rcloneview.com](https://rcloneview.com/src/download.html). No existe un paquete en AUR, así que ignora las instrucciones con `yay` o `paru` que encuentres en otros sitios. En un sistema basado en Arch, el AppImage es la opción natural. Descarga la versión para tu arquitectura (x86_64 o aarch64), hazla ejecutable e iníciala:

```bash
chmod +x RcloneView-*-x86_64.AppImage
./RcloneView-*-x86_64.AppImage
```

RcloneView es una aplicación de escritorio Flutter, no una aplicación Qt. Necesita GTK+3, una sesión X11 o Wayland en ejecución y una biblioteca AppIndicator para el icono de la bandeja del sistema. Las ediciones de escritorio predeterminadas de EndeavourOS (KDE Plasma, Xfce, GNOME y otras) ya proporcionan un servidor gráfico y normalmente GTK+3. Instala FUSE para montar unidades; se recomienda fuse3 (`sudo pacman -S --needed fuse3`).

<img src="/support/images/en/blog/new-remote.png" alt="Añadir un nuevo remoto en la nube en RcloneView sobre EndeavourOS" class="img-large img-center" />

Como el AppImage es autocontenido, un `pacman -Syu` continuo no lo reemplazará. La actualización automática solo existe en macOS, así que para actualizar en Linux descarga el AppImage más reciente desde la misma página.

## Conectar remotos y montar unidades

Abre **Remote > New Remote**. Google Drive, Dropbox, OneDrive, Box y pCloud inician sesión mediante OAuth en el navegador. S3, Backblaze B2 y Cloudflare R2 requieren claves de acceso. Tus remotos aparecen como pestañas en el Explorer, y puedes dividir hasta cuatro paneles para explorar un recurso compartido del NAS junto a un bucket en la nube.

Para trabajar con archivos en la nube desde Dolphin o Thunar, monta el remoto. Haz clic en el icono Mount de la barra de herramientas del panel, o abre Mount Manager y crea un nuevo montaje. En Linux eliges una ruta local como `~/cloud/gdrive`, y el modo de caché predeterminado `writes` cubre la mayoría de las ediciones. Activa **Allow other** solo si otros usuarios locales necesitan acceder al montaje.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Montar un remoto en la nube desde el explorador de RcloneView en Linux" class="img-large img-center" />

## Sincronizar y programar copias de seguridad

Imagina una estación de trabajo de desarrollo con `~/Projects` y `~/Documents`. Crea un trabajo de sincronización desde el disco local a Backblaze B2, añade un filtro `.git/` en el Step 3 y ejecuta un Dry Run para ver exactamente qué se transferirá. La sincronización unidireccional modifica solo el destino. La sincronización bidireccional (Beta) sigue siendo experimental, así que pruébala primero en carpetas no críticas.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Supervisión de la transferencia en vivo en RcloneView durante una copia de seguridad en Linux" class="img-large img-center" />

Con una licencia PLUS, el Step 4 añade programación al estilo crontab, de modo que el trabajo se ejecuta cada noche mientras RcloneView permanece en la bandeja. RcloneView necesita tu sesión de escritorio para funcionar y no puede ejecutarse como servicio de systemd. En un servidor Arch sin interfaz gráfica, ejecuta `rclone rcd` allí y conéctate desde tu escritorio mediante Connect Manager.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Crear un trabajo de sincronización programado en RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html), eligiendo el AppImage de Linux para tu arquitectura.
2. Haz ejecutable el AppImage, instala `fuse3` si necesitas montajes y ejecútalo desde tu sesión de escritorio.
3. Añade tus remotos en la nube y monta los que quieras usar en tu gestor de archivos.
4. Crea un trabajo de sincronización, pruébalo con Dry Run y prográmalo si tienes PLUS.

Un escritorio de lanzamiento continuo y una sola ventana multinube forman una configuración de copia de seguridad de bajo mantenimiento.

---

**Guías relacionadas:**

- [Rendimiento del montaje con caché VFS](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [Solucionar errores de FUSE al montar con Rclone](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)
- [Connection Manager — Rclone integrado y externo](https://rcloneview.com/support/blog/rcloneview-connection-manager-embedded-external)

<CloudSupportGrid />
