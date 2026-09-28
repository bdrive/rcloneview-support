---
slug: rcloneview-void-linux-cloud-sync
title: "RcloneView en Void Linux — Sincronización y copia de seguridad en la nube"
authors:
  - steve
description: "Instala y ejecuta RcloneView en Void Linux para gestión de archivos multi-nube, montaje y sincronización usando la versión AppImage."
keywords:
  - RcloneView Void Linux
  - almacenamiento en la nube void linux
  - void linux appimage
  - rclone gui void linux
  - montar almacenamiento en la nube en void linux
  - herramienta de respaldo void linux
  - xbps rclone gui
  - void linux runit sincronización en la nube
  - gestor de archivos en la nube void linux
  - gui de nube multiplataforma linux
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView en Void Linux — Sincronización y copia de seguridad en la nube

> Ejecuta un gestor multi-nube gráfico completo en Void Linux sin esperar a que aparezca un paquete XBPS.

La base de paquetes de lanzamiento continuo e independiente de Void Linux (XBPS, runit) hace que muchas aplicaciones GUI lleguen tarde o nunca se empaqueten. RcloneView no está en los repositorios de XBPS, pero como se distribuye como .AppImage, .deb y .rpm para Linux desde su propia página de descargas, los usuarios de Void pueden ejecutarlo directamente sin necesitar una compilación específica de la distribución. Se requiere un entorno de escritorio con X11 o Wayland, ya que RcloneView es una aplicación GUI nativa, no un servicio sin interfaz.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Instalar RcloneView en Void

La vía más fiable en Void es el .AppImage, ya que incluye su propio entorno de ejecución y evita por completo los problemas de nomenclatura de paquetes o dependencias de XBPS. Descarga el archivo `RcloneView-{version}-{arch}.AppImage` para x86_64 o aarch64, dale permisos de ejecución y ejecútalo directamente desde tu gestor de archivos o terminal. Void no mantiene un repositorio APT ni RPM, así que si prefieres la versión .deb o .rpm, tendrás que extraerla manualmente en lugar de instalarla mediante `xbps-install`. RcloneView solo se distribuye desde rcloneview.com — no hay paquete AUR, Flatpak ni Snap como alternativa.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote setup running on Void Linux" class="img-large img-center" />

Antes de iniciarlo, confirma que GTK+3 y ya sea `libayatana-appindicator3-1` o `libappindicator3-1` estén presentes para el soporte de la bandeja del sistema — la base mínima de Void no instala esto por defecto como sí hacen algunas distribuciones orientadas al escritorio.

## Configurar remotos y montajes

Una vez que RcloneView esté en ejecución, añade tus remotos en la nube de la misma manera que en cualquier otra plataforma: inicio de sesión OAuth para servicios como Google Drive o Dropbox, entrada de credenciales para endpoints compatibles con S3 o SFTP. El montaje funciona mediante el método nfsmount del rclone integrado en Linux, que requiere FUSE — instala `fuse3` mediante XBPS si aún no está presente, ya que las instalaciones mínimas de Void suelen omitirlo.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a cloud remote as a local drive on Void Linux" class="img-large img-center" />

RcloneView se conecta a más de 90 proveedores y los monta y sincroniza todos desde la misma ventana, tanto en Windows, macOS como en Linux — útil si divides tu trabajo entre una estación Void Linux y otras máquinas.

## Programar copias de seguridad teniendo en cuenta runit

RcloneView no puede ejecutarse como un servicio systemd, y Void no usa systemd en absoluto — ejecuta runit. Esa distinción no importa aquí, porque el propio Job Manager de RcloneView gestiona la programación internamente en lugar de depender del sistema de inicio. Configura un trabajo de sincronización programado mediante el planificador con estilo crontab (una función PLUS) para que las copias de seguridad se ejecuten según un horario mientras la aplicación permanece abierta en la bandeja del sistema.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring cloud backup job on Void Linux" class="img-large img-center" />

Si quieres un verdadero demonio en segundo plano sin ninguna GUI en Void, esa es tarea de `rclone rcd` directamente, no de RcloneView — la propia aplicación siempre necesita un servidor de pantalla para ejecutarse.

## Primeros pasos

1. **Descarga el AppImage** desde [rcloneview.com](https://rcloneview.com/src/download.html) y dale permisos de ejecución.
2. Instala `fuse3` y la biblioteca AppIndicator mediante XBPS si el montaje o la bandeja no funcionan de inmediato.
3. Añade tus remotos en la nube y confirma el acceso en el panel Explorer.
4. Crea un trabajo de sincronización o respaldo y, si lo deseas, prográmalo para que se ejecute automáticamente.

El minimalismo de Void no tiene por qué significar gestionar el almacenamiento en la nube a mano — RcloneView trae aquí el mismo flujo de trabajo GUI que ofrece en todas partes.

---

**Guías relacionadas:**

- [RcloneView en Gentoo Linux — Sincronización y copia de seguridad en la nube](https://rcloneview.com/support/blog/rcloneview-gentoo-linux-cloud-sync)
- [RcloneView en Arch Linux — Sincronización y copia de seguridad en la nube](https://rcloneview.com/support/blog/rcloneview-arch-linux-cloud-sync)
- [Instalar RcloneView en Ubuntu y Debian Linux](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)

<CloudSupportGrid />
