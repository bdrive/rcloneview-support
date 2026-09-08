---
slug: rcloneview-kali-linux-cloud-sync
title: "RcloneView en Kali Linux — Sincronización y copia de seguridad de almacenamiento en la nube"
authors:
  - jay
description: "Instale RcloneView en Kali Linux para montar, sincronizar y cifrar almacenamiento en la nube para evidencias de pruebas de penetración, informes y datos capturados."
keywords:
  - RcloneView Kali Linux
  - almacenamiento en la nube Kali Linux
  - sincronización en la nube Kali Linux
  - montar unidad de nube Kali Linux
  - copia de seguridad en la nube basada en Debian
  - cifrar copia de seguridad en la nube pentest
  - instalación de RcloneView en Linux
  - herramienta de copia de seguridad Kali Linux
  - app de sincronización en la nube GTK
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView en Kali Linux — Sincronización y copia de seguridad de almacenamiento en la nube

> Monte, sincronice y cifre almacenamiento en la nube en Kali Linux sin abandonar su flujo de trabajo de escritorio XFCE existente.

Kali Linux es una distribución basada en Debian utilizada principalmente para pruebas de seguridad, y las pruebas de penetración generan un flujo constante de capturas de pantalla, capturas de paquetes e informes que deben salir del disco local rápidamente. RcloneView ofrece a los usuarios de Kali una forma gráfica de conectar más de 90 proveedores de nube, montarlos como unidades locales y ejecutar trabajos de sincronización programados sin escribir comandos de rclone a mano en una terminal. Dado que Kali incluye por defecto un escritorio X11/Wayland completo, la interfaz gráfica de RcloneView funciona igual que en cualquier otra distribución de la familia Debian.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Instalar RcloneView en Kali Linux

Dado que Kali está basado en Debian, el paquete oficial `.deb` de [rcloneview.com](https://rcloneview.com/src/download.html) se instala sin problemas con `dpkg -i`, seguido de `apt-get install -f` para resolver las dependencias. RcloneView requiere GTK+ 3.0 y, para el icono de la bandeja del sistema, `libayatana-appindicator3-1` o `libappindicator3-1`, además de `fuse3` si planea montar remotos como unidades locales. No existe un repositorio AUR, Snap, Flatpak ni APT para RcloneView — el archivo `.deb` es la única vía de instalación compatible en Kali, así que ignore cualquier listado de paquetes de terceros que afirme lo contrario.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new cloud remote in RcloneView on Kali Linux" class="img-large img-center" />

RcloneView incluye un binario de rclone integrado, por lo que no hay nada adicional que configurar en el primer inicio — la aplicación se comunica automáticamente con él a través de `127.0.0.1:5582`.

## Montar almacenamiento en la nube para trabajo de campo

Una vez conectado un remoto, selecciónelo en el panel Explorer y haga clic en el icono Mount de la barra de herramientas del panel para exponerlo como una unidad local mediante `nfsmount` en Linux. Esto resulta útil para revisar evidencias almacenadas en una carpeta compartida de Google Drive o Box directamente desde herramientas locales sin descargar primero todo el conjunto de datos. El modo de solo lectura está disponible en la configuración de montaje para trabajos donde necesite explorar sin ningún riesgo de alterar los archivos de origen.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a remote folder from the RcloneView Explorer panel" class="img-large img-center" />

## Cifrar y automatizar copias de seguridad

Los datos sensibles de una prueba de penetración deben cifrarse antes de salir del equipo. El remoto virtual Crypt de RcloneView envuelve cualquier remoto existente para que los nombres y el contenido de los archivos se cifren antes de subirlos, y el mismo asistente de sincronización de 4 pasos utilizado para transferencias normales funciona también sobre la capa cifrada. Puede conectar S3, Azure o Backblaze B2 con lectura/escritura completa en la licencia FREE, por lo que una copia cifrada externa no requiere un nivel de pago. La programación estilo crontab para copias de seguridad desatendidas es una función de la licencia PLUS.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring encrypted sync job in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html) — obtenga el `.deb` para x86_64 o aarch64.
2. Instale con `dpkg -i rclone_view-*.deb && apt-get install -f` para incorporar las dependencias de GTK+3, appindicator y FUSE.
3. Agregue sus remotos en la nube y, para datos sensibles, envuélvalos en un remoto Crypt antes de ejecutar su primera sincronización.
4. Revise Job History después de cada ejecución para confirmar el número de transferencias y detectar errores a tiempo.

Una instalación de Kali con RcloneView significa que el material de las pruebas de penetración sale del disco local rápidamente, cifrado y sin salir nunca del escritorio en el que ya trabaja.

---

**Guías relacionadas:**

- [RcloneView en Debian Linux — Sincronización y copia de seguridad de almacenamiento en la nube](https://rcloneview.com/support/blog/rcloneview-debian-linux-cloud-sync)
- [Conectar cualquier servidor SFTP a RcloneView — Sincronizar servidores remotos con almacenamiento en la nube](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [Solucionar bloqueos de sincronización en la nube por firewall y antivirus — Resolver errores de conexión con RcloneView](https://rcloneview.com/support/blog/fix-firewall-antivirus-blocking-cloud-sync-rcloneview)

<CloudSupportGrid />
