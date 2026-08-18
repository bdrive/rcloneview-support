---
slug: rcloneview-elementary-os-cloud-sync
title: "RcloneView en Elementary OS — Sincronización y copia de seguridad de almacenamiento en la nube"
authors:
  - alex
description: "Instale RcloneView en Elementary OS y gestione más de 90 proveedores de nube con sincronización de arrastrar y soltar, montaje y copias de seguridad programadas desde una sola GUI."
keywords:
  - RcloneView Elementary OS
  - almacenamiento en la nube Elementary OS
  - Elementary OS rclone GUI
  - install RcloneView deb Elementary
  - sincronización en la nube Elementary OS
  - copia de seguridad en la nube Elementary OS
  - cliente de almacenamiento en la nube Pantheon
  - cross-platform cloud manager Linux
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView en Elementary OS — Sincronización y copia de seguridad de almacenamiento en la nube

> Ejecute RcloneView en Elementary OS para explorar, sincronizar, montar y hacer copia de seguridad de más de 90 proveedores de nube desde una GUI nativa que encaja con el escritorio Pantheon.

Elementary OS está construido sobre Ubuntu LTS pero incluye su propio escritorio Pantheon, y los usuarios que lo eligieron por un flujo de trabajo limpio, similar a macOS, suelen querer que sus herramientas de almacenamiento en la nube tengan ese mismo acabado en lugar de recurrir a un terminal desnudo. RcloneView se instala como un paquete .deb nativo en Elementary OS y ofrece una interfaz completa al estilo gestor de archivos para cada remoto que rclone admite, desde Google Drive hasta Amazon S3 y servidores SFTP. A diferencia de las herramientas de solo montaje, RcloneView también sincroniza y compara carpetas — con la licencia FREE —, de modo que montar una unidad y ejecutar una copia de seguridad programada provienen de la misma aplicación.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Instalar RcloneView en Elementary OS

Dado que Elementary OS está basado en Debian/Ubuntu, RcloneView se instala desde el paquete .deb disponible en la [página de descargas](https://rcloneview.com/src/download.html) oficial — obtenga la versión x86_64 (o aarch64 si ejecuta Elementary en hardware ARM64) e instálela con `sudo dpkg -i rclone_view-*-linux-{arch}.deb` desde una terminal. Aquí no hay paquete de Flathub ni de Snap Store al que recurrir — la descarga directa del .deb es la única vía de instalación compatible, y AppImage también está disponible si prefiere prescindir por completo de la gestión de paquetes.

Elementary OS incluye GTK+ y una sesión Wayland/X11 de forma predeterminada a través de Pantheon, lo que cubre de fábrica los requisitos de pantalla y toolkit de RcloneView. Una cosa que vale la pena confirmar tras la instalación es `libayatana-appindicator3-1`, ya que el icono de la bandeja del sistema de RcloneView depende de ella, y algunas instalaciones mínimas de Elementary recortan las bibliotecas de indicadores para mantener el escritorio ligero.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView main window running on Elementary OS with a new remote dialog open" class="img-large img-center" />

## Conectar remotos en la nube

Con RcloneView instalado, añadir un remoto funciona de forma idéntica en cualquier otra plataforma: pestaña Remote > New Remote, elija su proveedor, y luego autentíquese mediante una ventana emergente del navegador (Google Drive, Dropbox, OneDrive, Box) o introduzca las credenciales directamente (Amazon S3, Backblaze B2, SFTP). El binario de rclone integrado gestiona todo a través de `http://127.0.0.1:5582`, por lo que no hay nada adicional que instalar o configurar en Elementary OS, a menos que quiera apuntar RcloneView a una instancia externa de rclone que se ejecute por separado.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a cloud remote as a local drive on Elementary OS with RcloneView" class="img-large img-center" />

El montaje utiliza `nfsmount` en Linux — seleccione una carpeta remota en el Explorer, haga clic en el icono de montaje en la barra de herramientas del panel, y la carpeta en la nube aparecerá como una ruta local que cualquier aplicación de Pantheon puede abrir directamente. Se necesita tener instalado FUSE (se recomienda fuse3) para que el montaje funcione.

## Programar trabajos de sincronización

Para una máquina Elementary OS que permanece encendida durante todo el día, un trabajo de sincronización programado convierte a RcloneView en una herramienta de copia de seguridad autónoma en lugar de algo que se activa manualmente. Cree el trabajo mediante el asistente de Sync de 4 pasos, añada filtros para omitir archivos temporales o excesivamente grandes, y — con una licencia PLUS — adjunte una programación de estilo crontab para que se active automáticamente con la cadencia que necesite.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Creating a scheduled sync job on Elementary OS in RcloneView" class="img-large img-center" />

Job History registra cada ejecución con estado, duración y velocidad de transferencia, lo que facilita confirmar que una copia de seguridad nocturna realmente terminó en lugar de fallar silenciosamente mientras no estaba atento.

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html) — obtenga el .deb x86_64 o aarch64 para Elementary OS.
2. Instale con `sudo dpkg -i rclone_view-*-linux-{arch}.deb`.
3. Añada su primer remoto en la nube a través de la pestaña Remote > New Remote.
4. Configure una sincronización o un montaje para empezar a gestionar el almacenamiento en la nube directamente desde el escritorio Pantheon.

Con el .deb instalado, Elementary OS obtiene la misma experiencia de gestión de nube por arrastrar y soltar que los usuarios de Windows y macOS, sin renunciar a la sensación limpia y coherente del escritorio.

---

**Guías relacionadas:**

- [Instalar RcloneView en Ubuntu y Debian Linux](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [RcloneView en Linux Mint — Sincronización y copia de seguridad de almacenamiento en la nube](https://rcloneview.com/support/blog/rcloneview-linux-mint-cloud-sync)
- [RcloneView en Zorin OS — Sincronización y copia de seguridad de almacenamiento en la nube](https://rcloneview.com/support/blog/rcloneview-zorin-os-linux-cloud-sync)

<CloudSupportGrid />
