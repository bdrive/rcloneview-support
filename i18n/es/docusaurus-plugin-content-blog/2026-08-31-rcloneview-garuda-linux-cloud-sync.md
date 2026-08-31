---
slug: rcloneview-garuda-linux-cloud-sync
title: "RcloneView en Garuda Linux — Sincronización y copia de seguridad de almacenamiento en la nube"
authors:
  - steve
description: "Ejecute RcloneView en Garuda Linux para montar, sincronizar y hacer copia de seguridad de más de 90 proveedores de nube con una GUI de escritorio completa y sin necesidad de un paquete AUR."
keywords:
  - rcloneview garuda linux
  - sincronización en la nube garuda linux
  - almacenamiento en la nube garuda linux
  - install rcloneview arch based linux
  - copia de seguridad garuda linux
  - almacenamiento en la nube garuda
  - rcloneview appimage garuda
  - sincronización de archivos garuda linux
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView en Garuda Linux — Sincronización y copia de seguridad de almacenamiento en la nube

> El escritorio optimizado para el rendimiento de Garuda Linux combina bien con la ligera GUI de Flutter de RcloneView para gestionar el almacenamiento en la nube sin tocar una terminal.

Garuda Linux está diseñado para personas que quieren un sistema basado en Arch sin pasar un fin de semana configurándolo — un escritorio preajustado, valores predeterminados sensatos y un enfoque en ponerse a trabajar rápido. RcloneView sigue esa misma filosofía para el almacenamiento en la nube: una aplicación de escritorio nativa que monta, sincroniza y respalda más de 90 proveedores de nube desde una sola ventana, sin necesidad de escribir comandos de rclone a mano. Dado que Garuda incluye un escritorio gráfico completo de fábrica, RcloneView funciona exactamente como está previsto — sin necesidad de soluciones alternativas para modo headless.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Instalar RcloneView en Garuda Linux

RcloneView se distribuye únicamente desde [rcloneview.com](https://rcloneview.com/src/download.html) — no hay un paquete AUR que instalar con `pacman` o un ayudante de AUR. Descargue la compilación `.AppImage` para una opción portátil que no requiere instalación, o consiga el paquete `.rpm` si prefiere tenerlo registrado en la base de datos de paquetes de su sistema. Están disponibles tanto compilaciones x86_64 como aarch64, según el hardware en el que se ejecute su instalación de Garuda.

RcloneView está construido con Flutter y Dart, no con Qt ni Electron, por lo que evita la cadena de dependencias de otro conjunto de herramientas. Depende de GTK+3 y de una biblioteca indicadora de bandeja (libayatana-appindicator3-1 o libappindicator3-1) para su icono de bandeja, ambas estándar en las ediciones KDE, GNOME y otras de escritorio de Garuda. Para montar almacenamiento en la nube como unidad local, asegúrese de tener instalado `fuse3`.

<img src="/support/images/en/blog/new-remote.png" alt="Pantalla de configuración de un remoto de RcloneView en Garuda Linux" class="img-large img-center" />

## Configurar montajes y remotos

Las ediciones de escritorio de Garuda ejecutan X11 o Wayland, y la función de montaje de RcloneView funciona con ambos. Agregue un remoto desde la pestaña Remote, autentíquese mediante OAuth para proveedores como Google Drive o Dropbox, o introduzca las credenciales directamente para almacenamiento compatible con S3 o basado en protocolos. Monte ese remoto como una ruta local usando nfsmount, el tipo de montaje predeterminado de RcloneView en Linux, y explore sus archivos en la nube a través del gestor de archivos nativo de Garuda como si estuvieran en el disco.

El modo de caché está establecido de forma predeterminada en "writes", equilibrando la capacidad de respuesta con el uso de memoria — vale la pena revisarlo si está montando un remoto lleno de archivos grandes y desea un control más preciso sobre el almacenamiento en caché local.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Montar un remoto en la nube desde el Mount Manager de RcloneView en Linux" class="img-large img-center" />

## Automatizar copias de seguridad y trabajos de sincronización

Una vez conectados sus remotos, el Job Manager se encarga del trabajo repetitivo: hacer copia de seguridad de una carpeta local en el almacenamiento en la nube, sincronizar dos proveedores entre sí, o reflejar una fuente en varios destinos a la vez. Configure filtros para omitir tipos de archivo no deseados y ejecute primero un Dry Run para previsualizar exactamente lo que un trabajo va a cambiar.

El Historial de trabajos registra cada ejecución — hora de inicio, duración, velocidad de transferencia y recuento de archivos — de modo que las copias de seguridad programadas dejan un rastro de auditoría que puede consultar sin rebuscar en archivos de registro.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Programar un trabajo de sincronización en la nube en RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descargue el AppImage o el .rpm** desde [rcloneview.com](https://rcloneview.com/src/download.html) — no existe paquete AUR, así que instale directamente.
2. **Confirme fuse3 y GTK+3** presentes en su sistema para el soporte de montaje y bandeja.
3. **Agregue su primer remoto en la nube** a través de la pestaña Remote y móntelo o configure un trabajo de sincronización.
4. **Guarde los trabajos recurrentes** en el Job Manager para que las copias de seguridad se ejecuten siempre de la misma manera.

El escritorio listo para usar de Garuda y la GUI nativa de RcloneView forman una combinación sencilla — descargue una vez, conecte sus nubes y gestione todo sin salir del entorno gráfico en torno al cual está construido Garuda.

---

**Guías relacionadas:**

- [Instalar RcloneView en Arch Linux — Guía de sincronización y copia de seguridad en la nube](https://rcloneview.com/support/blog/rcloneview-arch-linux-cloud-sync)
- [RcloneView en Manjaro Linux — Sincronización de almacenamiento en la nube](https://rcloneview.com/support/blog/rcloneview-manjaro-linux-cloud-sync)
- [Instalar RcloneView en Fedora y RHEL — Guía de sincronización en la nube](https://rcloneview.com/support/blog/rcloneview-fedora-rhel-linux-cloud-sync)

<CloudSupportGrid />
