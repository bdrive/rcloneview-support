---
slug: rcloneview-macos-sequoia-cloud-sync
title: "RcloneView en macOS Sequoia — Sincronización y copia de seguridad de almacenamiento en la nube"
authors:
  - steve
description: "Instala y configura RcloneView en macOS Sequoia (15.x) para la sincronización y copia de seguridad de almacenamiento en la nube. Cubre la instalación, la configuración de permisos y la configuración de montaje en Macs con Apple Silicon e Intel."
keywords:
  - RcloneView macOS Sequoia
  - instalar RcloneView macOS 15
  - sincronización en la nube macOS Sequoia
  - RcloneView Apple Silicon Sequoia
  - copia de seguridad en la nube macOS Sequoia
  - sincronización de almacenamiento en la nube macOS 15
  - guía de instalación de RcloneView macOS
  - montar unidad en la nube macOS Sequoia
tags:
  - macos
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView en macOS Sequoia — Sincronización y copia de seguridad de almacenamiento en la nube

> RcloneView funciona por completo en macOS Sequoia (15.x) tanto en Macs con Apple Silicon (M1/M2/M3/M4) como con Intel. A continuación te explicamos cómo instalarlo, conceder los permisos correctos y lograr que la sincronización en la nube funcione sin problemas.

macOS Sequoia continúa la tendencia de Apple de reforzar los controles de privacidad, lo que implica algunos pasos de permisos adicionales al iniciar RcloneView por primera vez. Una vez configurados, obtienes una interfaz gráfica completa para almacenamiento en la nube: conexión con más de 90 proveedores, ejecución de trabajos de sincronización programados y montaje de almacenamiento en la nube como unidades locales. Esta guía te acompaña en todo lo específico de Sequoia.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Instalar RcloneView en macOS Sequoia

Descarga el archivo `.dmg` de RcloneView desde [rcloneview.com](https://rcloneview.com/src/download.html). La imagen de disco es un binario Universal, por lo que la misma descarga se ejecuta de forma nativa tanto en chips Apple Silicon como Intel, sin necesidad de traducción Rosetta. Abre el DMG, arrastra RcloneView a tu carpeta de Aplicaciones y ábrelo.

En el primer inicio, es posible que Sequoia muestre un aviso de Gatekeeper, ya que RcloneView está notarizado y firmado con código, pero se descarga desde fuera de la Mac App Store. Haz clic en **Abrir de todos modos** en **Ajustes del Sistema → Privacidad y seguridad** si se te solicita. La aplicación se abrirá con normalidad en los inicios posteriores.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a cloud remote after installing RcloneView on macOS Sequoia" class="img-large img-center" />

## Conceder los permisos necesarios en Sequoia

macOS Sequoia aplica permisos estrictos de acceso a archivos. Para permitir que RcloneView explore las carpetas de Escritorio, Documentos y Descargas, ve a **Ajustes del Sistema → Privacidad y seguridad → Archivos y carpetas** y habilita el acceso para RcloneView. Sin esto, esas carpetas pueden aparecer vacías en el panel de almacenamiento local.

Si planeas usar la función de **Montaje** (montar almacenamiento en la nube como unidad local), RcloneView utiliza montaje NFS (`nfsmount`) en macOS. Esto no requiere FUSE, lo que significa que no se necesitan controladores adicionales en Sequoia. Las unidades montadas aparecen en Finder dentro del directorio `/Volumes` y se comportan como cualquier unidad de red.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager in RcloneView on macOS Sequoia" class="img-large img-center" />

## Límites de descriptores de archivo para uso intensivo de montajes

Si estás montando almacenamiento en la nube y trabajando con muchos archivos simultáneamente (por ejemplo, un desarrollador que monta un bucket de S3 con miles de archivos pequeños), el límite predeterminado de descriptores de archivo de macOS puede convertirse en un cuello de botella. La solución recomendada para Sequoia es la misma que para versiones anteriores de macOS: crear un plist de LaunchDaemon en `/Library/LaunchDaemons/limit.maxfiles.plist` que establezca los límites blando y duro en 524288. Reinicia después de crear el archivo.

Para la mayoría de los usuarios ocasionales que sincronizan documentos y fotos, los límites predeterminados son suficientes. Este ajuste importa principalmente para flujos de trabajo profesionales con uso intensivo de montajes.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling cloud sync jobs on macOS Sequoia with RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html): el binario Universal funciona en todas las Macs.
2. Concede el acceso a Archivos y carpetas en **Ajustes del Sistema → Privacidad y seguridad**.
3. Añade tus proveedores en la nube y comienza a explorar en el navegador de doble panel.
4. Usa el Mount Manager si necesitas que el almacenamiento en la nube aparezca como una unidad local en Finder.

RcloneView es totalmente compatible con macOS Sequoia y aprovecha el binario Universal para ofrecer rendimiento nativo en cada Mac moderna.

---

**Guías relacionadas:**

- [RcloneView en macOS Sonoma — Sincronización y copia de seguridad en la nube](https://rcloneview.com/support/blog/rcloneview-macos-sonoma-cloud-sync)
- [La mejor herramienta de sincronización y montaje en la nube para macOS — RcloneView](https://rcloneview.com/support/blog/best-cloud-sync-mount-tool-macos-rcloneview)
- [Solucionar el error "Demasiados archivos abiertos" en macOS con RcloneView](https://rcloneview.com/support/blog/fix-macos-too-many-open-files-rcloneview)

<CloudSupportGrid />
