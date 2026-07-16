---
slug: rcloneview-macos-sonoma-cloud-sync
title: "RcloneView en macOS Sonoma — Sincronización y copia de seguridad de almacenamiento en la nube"
authors:
  - tayson
description: "Ejecuta RcloneView en macOS Sonoma — configura la sincronización en la nube, monta unidades remotas y gestiona más de 90 servicios de almacenamiento en la nube en tu Mac con rendimiento nativo."
keywords:
  - RcloneView macOS Sonoma
  - sincronización en la nube macOS
  - herramienta de copia de seguridad en la nube para Mac
  - instalación de RcloneView en Mac
  - almacenamiento en la nube macOS
  - gestión de la nube en macOS Sonoma
  - GUI de rclone para Mac
  - sincronización en la nube Apple Silicon
  - copia de seguridad en la nube para Mac 2026
  - montaje en la nube en macOS
tags:
  - macos
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView en macOS Sonoma — Sincronización y copia de seguridad de almacenamiento en la nube

> El binario Universal de RcloneView se ejecuta de forma nativa en macOS Sonoma —compatible con Mac Intel y Apple Silicon— con funciones completas de sincronización en la nube, montaje y programación desde el primer momento.

macOS Sonoma incorpora mejoras en la gestión de archivos, los controles de privacidad y los permisos de seguridad que afectan a cómo las aplicaciones de almacenamiento en la nube interactúan con el sistema de archivos. RcloneView, distribuido como un binario Universal (.dmg) compatible con Mac Intel y Apple Silicon, se ejecuta de forma nativa en macOS Sonoma con funciones completas de montaje, sincronización y copia de seguridad. Aquí tienes todo lo que necesitas saber para que funcione de manera óptima.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Instalación en macOS Sonoma

Descarga el `.dmg` de RcloneView desde [rcloneview.com](https://rcloneview.com/src/download.html). El binario Universal admite Mac x86-64 (Intel) y ARM64 (Apple Silicon M1/M2/M3/M4) en un único paquete instalador. Abre el `.dmg`, arrastra RcloneView a la carpeta Aplicaciones y ejecútalo.

<img src="/support/images/en/blog/new-remote.png" alt="Setting up cloud remotes in RcloneView on macOS Sonoma" class="img-large img-center" />

En el primer inicio, macOS Sonoma puede mostrar un aviso de seguridad de Gatekeeper. Dado que RcloneView está **notarizado y firmado digitalmente por Apple**, puedes continuar desde **Ajustes del Sistema > Privacidad y Seguridad** si se te solicita. La aplicación incluye un binario de rclone integrado —no se requiere una instalación independiente de rclone— y la app se conecta de inmediato tras el inicio.

## Configuración específica de macOS

macOS Sonoma aplica permisos de privacidad estrictos en el sistema de archivos. Si RcloneView necesita acceder a las carpetas Escritorio, Documentos o Descargas para tareas de sincronización, concede el acceso en **Ajustes del Sistema > Privacidad y Seguridad > Archivos y Carpetas > RcloneView**. Sin este permiso, esos directorios aparecen vacíos en el explorador de archivos aunque los archivos existan —una fuente habitual de confusión en instalaciones nuevas.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager in RcloneView on macOS Sonoma for cloud drive mounting" class="img-large img-center" />

Para unidades SSD externas y USB que no aparecen en el explorador local de RcloneView, navega hasta `/Volumes` en la barra de ruta para encontrarlas. Crear un remoto de tipo **Alias** que apunte a la ruta `/Volumes` de la unidad proporciona un acceso permanente y cómodo desde el panel del explorador.

El tipo de montaje **nfsmount** se utiliza en macOS para montar almacenamiento en la nube como unidades locales. Los remotos montados aparecen en Finder como volúmenes de red —accesibles desde todas las aplicaciones, no solo desde RcloneView. El modo de caché VFS está configurado de forma predeterminada en "writes", lo que equilibra la capacidad de respuesta con la seguridad de los datos para un uso general.

## Optimización del rendimiento en los montajes

El límite predeterminado de descriptores de archivo de macOS (256–1024) provoca problemas al navegar por directorios grandes en la nube a través de una unidad montada. Para aumentar el límite, crea un plist de LaunchDaemon en `/Library/LaunchDaemons/limit.maxfiles.plist` estableciendo tanto el límite blando como el duro en 524288, y luego reinicia. Esto es especialmente importante al montar remotos grandes de Google Drive o OneDrive —sin ello, Finder puede mostrar errores al navegar por carpetas con muchos niveles anidados.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling cloud sync jobs in RcloneView on macOS Sonoma" class="img-large img-center" />

Las funciones de programación (licencia PLUS) funcionan por completo en macOS —las tareas programadas se ejecutan en segundo plano incluso cuando RcloneView está minimizado en el Dock o en la barra de menús. El icono de la bandeja del sistema ofrece acceso rápido al estado de los montajes y a la supervisión de tareas activas sin necesidad de abrir la ventana principal.

## Primeros pasos

1. **Descarga RcloneView** `.dmg` desde [rcloneview.com](https://rcloneview.com/src/download.html) e instálalo en Aplicaciones.
2. Concede los permisos de sistema de archivos necesarios en **Ajustes del Sistema > Privacidad y Seguridad**.
3. Añade tus remotos en la nube (Google Drive, Dropbox, S3) a través de **pestaña Remoto > Nuevo Remoto**.
4. Configura los límites de descriptores de archivo para un rendimiento óptimo de montaje si vas a montar unidades en la nube de gran tamaño.

RcloneView en macOS Sonoma ofrece el conjunto completo de funciones —sincronización en la nube, montaje, programación y gestión multipanel— con rendimiento nativo en Apple Silicon y compatibilidad confirmada con Sonoma.

---

**Guías relacionadas:**

- [La mejor herramienta de sincronización y montaje en la nube para macOS con RcloneView](https://rcloneview.com/support/blog/best-cloud-sync-mount-tool-macos-rcloneview)
- [Montar Google Drive como unidad local con RcloneView](https://rcloneview.com/support/blog/mount-google-drive-as-local-drive-rcloneview)
- [Solucionar el error "Demasiados archivos abiertos" en macOS con RcloneView](https://rcloneview.com/support/blog/fix-macos-too-many-open-files-rcloneview)

<CloudSupportGrid />
