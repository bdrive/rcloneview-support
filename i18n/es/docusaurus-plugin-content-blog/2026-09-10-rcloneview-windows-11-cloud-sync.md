---
slug: rcloneview-windows-11-cloud-sync
title: "RcloneView en Windows 11 — Sincronización y copia de seguridad de almacenamiento en la nube"
authors:
  - morgan
description: "Instala y ejecuta RcloneView en Windows 11 para montar, sincronizar y hacer copia de seguridad de más de 90 servicios de almacenamiento en la nube desde una sola aplicación de escritorio."
keywords:
  - rcloneview windows 11
  - sincronización de almacenamiento en la nube windows 11
  - montar unidad en la nube windows 11
  - copia de seguridad en la nube windows 11
  - rclone gui windows 11
  - explorador de archivos windows 11 nube
  - escritorio multi-nube windows
  - software de sincronización en la nube windows
tags:
  - RcloneView
  - windows
  - cloud-sync
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView en Windows 11 — Sincronización y copia de seguridad de almacenamiento en la nube

> Windows 11 endureció su explorador de archivos y su modelo de permisos respecto a versiones anteriores — así se ejecuta RcloneView sin problemas en él para montar, sincronizar y hacer copia de seguridad de almacenamiento en la nube.

El shell rediseñado de Windows 11 y su postura de seguridad predeterminada más estricta cambian algunas cosas para las aplicaciones de escritorio que interactúan con el almacenamiento y las letras de unidad. **RcloneView** se ejecuta de forma nativa en Windows 11 como una aplicación de escritorio estándar, ofreciendo una sola interfaz para explorar, sincronizar y montar más de 90 servicios de almacenamiento en la nube en lugar de usar aplicaciones distintas para Google Drive, OneDrive, Dropbox y almacenamiento compatible con S3.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Instalar RcloneView en Windows 11

RcloneView se distribuye como un instalador Inno Setup (`setup_rclone_view-{version}.exe`) compilado para sistemas x86-64 — no existe una versión Windows ARM64, por lo que esta guía se aplica a PCs y portátiles Windows 11 estándar. Descarga el instalador desde [rcloneview.com](https://rcloneview.com/src/download.html), ejecútalo y completa el asistente de instalación.

Windows 11 requiere el paquete redistribuible VC++ 2015-2022, que el instalador te pedirá si falta. RcloneView incluye un binario de rclone embebido, por lo que no es necesario instalar rclone por separado — la aplicación se comunica de forma predeterminada con su instancia de rclone integrada a través de `http://127.0.0.1:5582`.

<img src="/support/images/en/blog/new-remote.png" alt="Agregar un nuevo remoto en la nube en RcloneView" class="img-large img-center" />

## Montar almacenamiento en la nube como letra de unidad

Una de las funciones más útiles de RcloneView en Windows 11 es montar un remoto en la nube como unidad local. En el panel Remote Explorer, selecciona el remoto que deseas montar, haz clic en el icono de montaje en la barra de herramientas del panel, elige una letra de unidad asignada automáticamente o manual, y haz clic en Save and mount. El remoto aparecerá entonces en el explorador de archivos como si fuera un disco físico.

Windows 11 usa el tipo de montaje `cmount` de forma predeterminada. También puedes configurar el montaje para que aparezca como unidad de red en lugar de disco local, y ajustar el modo de caché VFS (off, minimal, writes o full) según si priorizas la capacidad de respuesta o el acceso sin conexión a los archivos usados recientemente.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Montar un remoto desde el Mount Manager en RcloneView" class="img-large img-center" />

## Sincronizar y hacer copia de seguridad de archivos

Además de montar, el asistente de sincronización de RcloneView te permite configurar trabajos de sincronización unidireccional entre dos remotos conectados, o entre una carpeta local de Windows 11 y un proveedor en la nube. Conecta S3, Azure o Backblaze B2 con acceso completo de lectura y escritura en la licencia FREE, y luego configura un trabajo de copia de seguridad programado para que tus carpetas de Documentos o de proyectos se reflejen automáticamente en el almacenamiento en la nube.

El asistente de sincronización de cuatro pasos cubre la selección de origen y destino, la concurrencia de transferencia, las reglas de filtrado (tamaño de archivo, antigüedad, profundidad de carpetas) y, en la licencia PLUS, la programación estilo crontab. Una opción de Dry Run permite previsualizar exactamente qué se copiará o eliminará antes de que se realice ningún cambio real.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configurar un trabajo de transferencia entre nubes en RcloneView" class="img-large img-center" />

## Supervisar trabajos desde la bandeja del sistema

RcloneView se minimiza a la bandeja del sistema de Windows 11, donde puedes ver las unidades montadas, activar o desactivar montajes e iniciar nuevos montajes sin volver a abrir la ventana completa. Las transferencias activas aparecen en la pestaña Transferring en la parte inferior de la ventana principal, mostrando en vivo el porcentaje de progreso, la velocidad y el recuento de archivos.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html) y ejecuta el instalador de Windows.
2. Agrega tu primer remoto en la nube desde la pestaña Remote > New Remote.
3. Móntalo como letra de unidad o configura un trabajo de sincronización hacia una carpeta local de Windows 11.
4. Revisa el panel Job History para confirmar que tu primera transferencia se completó correctamente.

Con RcloneView instalado, Windows 11 obtiene una forma única y coherente de acceder a decenas de proveedores en la nube sin necesidad de instalar un cliente de sincronización distinto para cada uno.

---

**Guías relacionadas:**

- [RcloneView en Windows 10 — Sincronización de almacenamiento en la nube](https://rcloneview.com/support/blog/rcloneview-windows-10-cloud-sync)
- [RcloneView en Windows Server — Copia de seguridad en la nube](https://rcloneview.com/support/blog/rcloneview-on-windows-server-cloud-backup-rcloneview)
- [Solucionar conflictos de letra de unidad de montaje en Windows](https://rcloneview.com/support/blog/fix-mount-drive-letter-conflict-windows-rcloneview)

<CloudSupportGrid />
