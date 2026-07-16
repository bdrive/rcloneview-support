---
slug: rcloneview-zorin-os-linux-cloud-sync
title: "RcloneView en Zorin OS — Sincronización y copia de seguridad de almacenamiento en la nube"
authors:
  - tayson
description: "Instala y usa RcloneView en Zorin OS para la sincronización y copia de seguridad de almacenamiento en la nube. Gestión de la nube basada en GUI para Google Drive, OneDrive, S3 y más de 90 servicios en Zorin OS."
keywords:
  - RcloneView Zorin OS
  - almacenamiento en la nube Zorin OS
  - sincronización en la nube Zorin OS
  - copia de seguridad en la nube Zorin OS
  - RcloneView Linux Debian
  - gestor de archivos con nube en Zorin OS
  - instalar RcloneView Zorin
  - GUI de almacenamiento en la nube para Linux
  - Zorin OS Google Drive
  - sincronización en la nube basada en Ubuntu
tags:
  - linux
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView en Zorin OS — Sincronización y copia de seguridad de almacenamiento en la nube

> Instala RcloneView en Zorin OS y gestiona más de 90 servicios de almacenamiento en la nube desde una GUI: sincroniza Google Drive, OneDrive, Amazon S3 y más en tu escritorio de Zorin OS.

Zorin OS es una distribución de Linux basada en Ubuntu diseñada con una interfaz de escritorio familiar y pulida, especialmente popular entre usuarios que migran desde Windows o macOS. Su base Ubuntu/Debian significa que funciona perfectamente con paquetes `.deb`, lo que hace que la instalación de RcloneView sea sencilla. RcloneView es una aplicación de escritorio con GUI construida con Flutter que requiere un servidor de pantalla (X11 o Wayland) y un entorno de escritorio en ejecución; el escritorio basado en GNOME de Zorin OS cumple estos requisitos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Instalación de RcloneView en Zorin OS

RcloneView se distribuye mediante descarga directa desde [rcloneview.com](https://rcloneview.com/src/download.html). No existe un repositorio apt ni un paquete Snap; no intentes `apt install rcloneview` ni `snap install rcloneview`, ya que ninguno de los dos existe. Descarga el paquete `.deb` correspondiente a tu arquitectura desde la página oficial de descargas.

**Instalar el paquete .deb:**

```bash
sudo dpkg -i rclone_view-*-linux-x86_64.deb
```

Si `dpkg` reporta dependencias faltantes, resuélvelas con:

```bash
sudo apt install -f
```

Esto instala automáticamente cualquier biblioteca GTK o del sistema que falte en Zorin OS (que hereda el repositorio apt de Ubuntu).

Alternativamente, usa el `.AppImage` para una instalación portátil que no requiere integración con el sistema:

```bash
chmod +x RcloneView-*-x86_64.AppImage
./RcloneView-*-x86_64.AppImage
```

<img src="/support/images/en/blog/new-remote.png" alt="Setting up cloud storage remotes in RcloneView on Zorin OS" class="img-large img-center" />

## Bibliotecas necesarias en Zorin OS

Zorin OS incluye GTK+ 3.0 y X11/Wayland como parte de su instalación predeterminada de escritorio GNOME. Para el soporte de la bandeja del sistema, instala la biblioteca AppIndicator si aún no está presente:

```bash
sudo apt install libayatana-appindicator3-1
```

Para montar unidades en la nube (función de unidad virtual), instala FUSE3:

```bash
sudo apt install fuse3
```

Después de la instalación, inicia RcloneView desde el menú de aplicaciones o la terminal. La aplicación se integra con el escritorio de Zorin OS, incluyendo soporte de icono en la bandeja del sistema y notificaciones nativas de escritorio para la finalización de trabajos.

## Conexión de almacenamiento en la nube

RcloneView incluye un binario de rclone integrado; no se requiere una instalación separada de rclone. Agrega tus servicios en la nube desde la pestaña Remote: haz clic en New Remote y selecciona tu proveedor. Para servicios basados en OAuth como Google Drive, OneDrive y Dropbox, se abre una ventana del navegador para la autenticación de la cuenta. Para servicios compatibles con S3, introduce tu Access Key, Secret Key y la URL del endpoint.

El escritorio basado en GNOME de Zorin OS gestiona la redirección OAuth del navegador sin problemas: la ventana de autenticación se abre en tu navegador predeterminado y las credenciales se devuelven automáticamente a RcloneView.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud sync running in RcloneView on Zorin OS" class="img-large img-center" />

## Sincronización y montaje de almacenamiento en la nube

Una vez configurados los remotos, usa el asistente de sincronización para crear trabajos de copia de seguridad o migración. Selecciona los remotos de origen y destino, configura las opciones de transferencia y los filtros, y opcionalmente programa ejecuciones recurrentes (licencia PLUS). RcloneView se ejecuta como una aplicación GUI en Zorin OS; requiere una sesión de escritorio activa y un servidor de pantalla. No se puede configurar directamente como un servicio en segundo plano de systemd; para tareas programadas desatendidas sin una sesión de usuario, usa el propio `rclone rcd` de rclone con un servicio systemd y conéctate a él desde RcloneView.

Para montar el almacenamiento en la nube como un directorio local, usa Mount Manager en la pestaña Remote. En Zorin OS, especifica una ruta de punto de montaje y haz clic en Save and Mount. La carpeta montada aparece en Nautilus (el gestor de archivos predeterminado de Zorin OS) y se puede acceder a ella como a cualquier directorio local.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting Google Drive as a local folder on Zorin OS with RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html): selecciona el `.deb` de Linux para x86_64.
2. Instálalo con `sudo dpkg -i rclone_view-*-linux-x86_64.deb` y ejecuta `sudo apt install -f` si faltan dependencias.
3. Instala `fuse3` y `libayatana-appindicator3-1` si es necesario para el soporte de montaje y bandeja del sistema.
4. Agrega tus remotos en la nube y comienza a sincronizar desde el familiar entorno de escritorio de Zorin OS.

La compatibilidad de Zorin OS con Ubuntu hace que la instalación de RcloneView sea sencilla, ofreciendo a los usuarios una herramienta de gestión de almacenamiento en la nube basada en GUI que encaja naturalmente en el flujo de trabajo pulido del escritorio de Zorin OS.

---

**Guías relacionadas:**

- [Instalar RcloneView en Ubuntu y Debian Linux](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [RcloneView en Pop!_OS Linux — Sincronización en la nube](https://rcloneview.com/support/blog/rcloneview-pop-os-linux-cloud-sync)
- [RcloneView en Fedora, RHEL y CentOS Linux](https://rcloneview.com/support/blog/rcloneview-fedora-rhel-centos-linux)

<CloudSupportGrid />
