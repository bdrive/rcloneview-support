---
slug: rcloneview-mx-linux-cloud-sync
title: "RcloneView en MX Linux — Sincronización y respaldo de almacenamiento en la nube"
authors:
  - casey
description: "Ejecuta RcloneView en MX Linux mediante .deb o AppImage y gestiona más de 90 proveedores en la nube con sincronización de arrastrar y soltar, montaje y respaldo programado en una sola GUI."
keywords:
  - RcloneView MX Linux
  - almacenamiento en la nube MX Linux
  - GUI rclone MX Linux
  - instalar RcloneView deb
  - sincronización en la nube MX Linux
  - respaldo en la nube MX Linux
  - cliente de nube basado en Debian
  - gestor de nube multiplataforma Linux
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView en MX Linux — Sincronización y respaldo de almacenamiento en la nube

> Ejecuta RcloneView en MX Linux a través del paquete .deb oficial o el AppImage, y gestiona todos los remotos en la nube que admite rclone desde una GUI nativa.

MX Linux se ha ganado su reputación por ser ligero y estar basado en Debian sin arrastrar las versiones de paquetes más conservadoras de Debian, lo que lo convierte en una opción habitual para hardware antiguo y escritorios minimalistas. Esa combinación es exactamente lo que necesita un gestor de archivos en la nube para no interponerse en el camino: una huella pequeña, un entorno de escritorio real y compatibilidad .deb heredada directamente de Debian. RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux, así que un equipo con MX Linux obtiene el mismo conjunto de funciones que cualquier otra plataforma compatible, no una versión recortada.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Instalar RcloneView en MX Linux

Como MX Linux está basado en Debian, el paquete `.deb` de la [página oficial de descargas](https://rcloneview.com/src/download.html) se instala igual que en Debian o Ubuntu — descarga la compilación x86_64 o aarch64 e instálala con el gestor de paquetes que prefieras (MX Package Installer, GDebi, o `dpkg -i` desde una terminal). Si prefieres evitar por completo el gestor de paquetes, la compilación `.AppImage` también funciona: márcala como ejecutable y ejecútala directamente, sin necesidad de instalación.

No existe un repositorio o PPA específico de MX Linux para RcloneView, ni tampoco un paquete comunitario al estilo AUR — la página de descargas es el único canal oficial de distribución. Antes de instalar, confirma que GTK+ 3.0 y ya sea `libayatana-appindicator3-1` o `libappindicator3-1` estén presentes para el icono de la bandeja del sistema, y que FUSE (se recomienda fuse3) esté instalado si piensas montar remotos como unidades locales.

<img src="/support/images/en/blog/new-remote.png" alt="Ventana principal de RcloneView ejecutándose en MX Linux con un diálogo de nuevo remoto abierto" class="img-large img-center" />

## Conectar remotos en la nube

La configuración de remotos en MX Linux funciona exactamente igual que en cualquier otra distribución Linux compatible con RcloneView. Abre la pestaña Remote > New Remote, elige un proveedor y autentícate mediante una ventana emergente del navegador (Google Drive, Dropbox, OneDrive, Box, pCloud) o introduce las credenciales directamente (Amazon S3, Backblaze B2, SFTP). El binario de rclone embebido se comunica por defecto con `http://127.0.0.1:5582`, así que no hay una instalación separada de rclone que gestionar, a menos que quieras conectarte específicamente a una instancia externa de rclone que se ejecute en otro lugar de la red.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Montando un remoto en la nube como unidad local en MX Linux con RcloneView" class="img-large img-center" />

Una vez conectado, monta un remoto mediante `nfsmount` y se comportará como cualquier otra ruta local — cualquier gestor de archivos o aplicación del sistema puede navegarlo sin saber que está respaldado por la nube.

## Programar respaldos

Para un equipo con MX Linux que está encendido la mayor parte del día, un trabajo de sincronización programado convierte la aplicación en una herramienta de respaldo de "configurar y olvidar". Recorre el asistente de Sync de 4 pasos, aplica filtros para omitir directorios de caché o archivos demasiado grandes, y con una licencia PLUS añade una programación de estilo crontab para que el trabajo se ejecute sin que tengas que iniciarlo manualmente.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Creando un trabajo de sincronización en la nube programado en MX Linux en RcloneView" class="img-large img-center" />

Job History registra la duración, la velocidad de transferencia y el número de archivos de cada ejecución, lo que facilita confirmar que un respaldo programado realmente se completó, en lugar de fallar silenciosamente durante la noche.

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html) — obtén el .deb para tu arquitectura, o el .AppImage si prefieres evitar la instalación.
2. Instala el paquete (o marca el AppImage como ejecutable) y confirma que GTK+3 y FUSE estén presentes.
3. Añade tu primer remoto en la nube a través de la pestaña Remote > New Remote.
4. Configura una sincronización o un montaje para empezar a gestionar el almacenamiento en la nube desde MX Linux.

Con cualquiera de los dos paquetes instalados, MX Linux obtiene la misma experiencia completa de sincronización y montaje en la nube que cualquier otro escritorio Linux compatible.

---

**Guías relacionadas:**

- [RcloneView en Debian Linux — Sincronización en la nube](https://rcloneview.com/support/blog/rcloneview-debian-linux-cloud-sync)
- [Instalar RcloneView en Ubuntu y Debian Linux](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [RcloneView en Linux Mint — Sincronización en la nube](https://rcloneview.com/support/blog/rcloneview-linux-mint-cloud-sync)

<CloudSupportGrid />
