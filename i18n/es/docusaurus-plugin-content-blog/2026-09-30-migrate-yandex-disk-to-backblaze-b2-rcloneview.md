---
slug: migrate-yandex-disk-to-backblaze-b2-rcloneview
title: "Migrar Yandex Disk a Backblaze B2 — Transfiere archivos con RcloneView"
authors:
  - morgan
description: "Migra Yandex Disk a Backblaze B2 con RcloneView: conecta ambos remotos, simula la copia con Dry Run, verifica con Folder Compare y conserva una copia de seguridad duradera."
keywords:
  - migrar Yandex Disk a Backblaze B2
  - yandex disk to b2
  - copia de seguridad de Yandex Disk
  - migración a Backblaze B2
  - RcloneView Yandex Disk
  - transferencia de nube a nube
  - mover archivos desde Yandex Disk
  - rclone yandex backblaze
  - migración a la nube con GUI
  - exportar archivos de Yandex Disk
tags:
  - RcloneView
  - yandex-disk
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar Yandex Disk a Backblaze B2 — Transfiere archivos con RcloneView

> Copia todo de Yandex Disk a un bucket de Backblaze B2 y confirma que cada archivo llegó, sin tocar la línea de comandos.

Si tus archivos están en Yandex Disk pero quieres una copia independiente, basada en buckets, en Backblaze B2, la vía habitual es descargarlos manualmente y volver a subirlos a través de tu propio equipo. RcloneView conecta ambos servicios en una sola ventana y ejecuta la transferencia entre ellos, con una simulación previa (Dry Run) y una comparación de carpetas posterior.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta Yandex Disk y Backblaze B2

Yandex Disk usa OAuth: elígelo en **New Remote** y RcloneView abrirá tu navegador para que inicies sesión y autorices el acceso. No se necesita clave de API. Backblaze B2 usa un Application Key ID y una Application Key de la página de gestión de claves de Backblaze. Crea una clave limitada al bucket de destino para que las credenciales de la migración no puedan acceder a nada más.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Yandex Disk and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

Abre Yandex Disk en un panel del Explorer y el bucket de B2 en otro. RcloneView permite montar y sincronizar más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux, de modo que ambos lados permanezcan visibles mientras trabajas.

## Planifica la estructura y copia

Decide cómo se asignan las carpetas al bucket. Un pequeño estudio de diseño con una década de carpetas de proyecto podría reflejar cada carpeta de primer nivel de Yandex Disk como un prefijo en un único bucket, lo que mantiene las rutas legibles más adelante. Crea primero las carpetas de destino con **New Folder**.

Arrastra una carpeta del panel de Yandex Disk al panel de B2; entre remotos distintos, arrastrar y soltar copia, así que tus originales se quedan donde están. Para una migración más grande o repetible, usa en su lugar el asistente de Sync: establece Yandex Disk como origen, la ruta del bucket como destino y nombra el trabajo con letras, números, guiones o guiones bajos.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Yandex Disk to Backblaze B2" class="img-large img-center" />

## Dry Run y supervisión de la transferencia

Ejecuta primero **Dry Run**. Muestra qué archivos se copiarían y cuáles se eliminarían, de modo que un origen o destino incorrecto se detecte antes de causar daños. Esto importa sobre todo en la sincronización unidireccional, que modifica el destino para que coincida con el origen.

En Advanced Settings, ajusta el número de transferencias de archivos simultáneas y activa la comparación por suma de verificación si quieres una verificación por hash y tamaño. Empieza con prudencia y aumenta la concurrencia cuando la transferencia sea estable. Sigue el progreso, la velocidad y el número de archivos en la pestaña **Transferring**.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Yandex Disk to B2 transfer in real time" class="img-large img-center" />

## Verifica con Folder Compare

Cuando termine el trabajo, abre **Compare** desde la pestaña Home con Yandex Disk a la izquierda y B2 a la derecha. Filtra por archivos que solo estén a la izquierda o que sean distintos para detectar lo que falte y usa Copy right para completar los huecos. Job History registra el estado, el tamaño, la velocidad y el número de archivos de cada ejecución, lo que resulta útil como registro de la migración.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare between Yandex Disk and Backblaze B2" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade Yandex Disk mediante OAuth y Backblaze B2 con una clave de aplicación limitada al bucket.
3. Ejecuta un Dry Run y luego inicia el trabajo de copia o sincronización.
4. Usa Folder Compare para confirmar que el bucket coincide con el origen.

Una segunda copia verificada en almacenamiento de objetos significa que Yandex Disk deja de ser el único lugar donde viven tus archivos.

---

**Guías relacionadas:**

- [Migrar HiDrive a Backblaze B2](https://rcloneview.com/support/blog/migrate-hidrive-to-backblaze-b2-rcloneview)
- [Migrar Yandex Disk a Dropbox](https://rcloneview.com/support/blog/migrate-yandex-disk-to-dropbox-rcloneview)
- [Dry Run: previsualiza la sincronización antes de transferir](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
