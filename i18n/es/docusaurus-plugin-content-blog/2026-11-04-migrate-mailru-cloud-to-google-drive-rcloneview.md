---
slug: migrate-mailru-cloud-to-google-drive-rcloneview
title: "Migrar Mail.ru Cloud a Google Drive — transfiere archivos con RcloneView"
authors:
  - tayson
description: "Migra Mail.ru Cloud a Google Drive con RcloneView: conecta ambos remotos, ejecuta un Dry Run, copia carpetas de nube a nube y verifica el resultado con Folder Compare."
keywords:
  - migrar Mail.ru Cloud a Google Drive
  - transferencia de Mail.ru Cloud
  - de Mail.ru a Google Drive
  - RcloneView Mail.ru
  - migración de nube a nube
  - mover archivos entre nubes
  - copia de seguridad de Mail.ru Cloud
  - migración con GUI de rclone
  - herramienta de migración a Google Drive
  - verificación con Folder Compare
tags:
  - RcloneView
  - mailru
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar Mail.ru Cloud a Google Drive — transfiere archivos con RcloneView

> Traslada tus archivos de Mail.ru Cloud a Google Drive con un flujo visual y verificable, en lugar de descargas y resubidas manuales.

Mover años de documentos, escaneos y contenido multimedia fuera de Mail.ru Cloud suele significar descargar todo a un portátil y volver a subirlo. RcloneView, una GUI basada en rclone, conecta ambos servicios como remotos para que puedas copiar entre ellos desde una sola ventana y verificar el resultado.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta ambos remotos

Abre RcloneView y usa **New Remote** para añadir Mail.ru Cloud y Google Drive. Google Drive inicia sesión mediante OAuth en tu navegador, por lo que no se necesita ninguna clave de API. Mail.ru Cloud figura entre los proveedores compatibles; sigue las indicaciones en pantalla para sus credenciales. Cuando ambos aparezcan en Remote Manager, ábrelos uno junto al otro en dos paneles Explorer.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir los remotos de Mail.ru Cloud y Google Drive en RcloneView" class="img-large img-center" />

RcloneView admite más de 90 servicios de almacenamiento en la nube desde una sola ventana, en Windows, macOS y Linux, por lo que la misma configuración sirve para cualquier migración posterior.

## Planifica la copia antes de mover nada

Explora primero el árbol de origen. Usa **Get Size** en las carpetas de nivel superior para estimar el volumen y decide después qué se mueve ahora y qué puede esperar. Una pequeña empresa con una carpeta compartida «Contracts» y una carpeta grande «Archive» podría migrar la primera de inmediato y programar la segunda fuera del horario laboral.

Arrastra una carpeta del panel de Mail.ru al panel de Google Drive: arrastrar entre remotos distintos realiza un **Copy**, así que el origen permanece intacto hasta que estés satisfecho. Para movimientos más grandes, crea un trabajo Copy en el asistente de Sync, define el número de transferencias en Advanced Settings y usa filtros para omitir archivos que no necesitas, como imágenes ISO.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de nube a nube entre dos remotos en RcloneView" class="img-large img-center" />

## Dry Run, transferencia y supervisión

Ejecuta primero un **Dry Run**. Enumera lo que se copiaría sin tocar ninguno de los dos lados, lo que detecta rutas incorrectas antes de que cuesten tiempo. Cuando la lista sea correcta, inicia el trabajo y observa el progreso, la velocidad y el número de archivos en la pestaña Transferring.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Supervisión de una transferencia en curso en la pestaña Transferring de RcloneView" class="img-large img-center" />

## Verifica con Folder Compare

Cuando termine la copia, abre **Compare** con Mail.ru Cloud a la izquierda y Google Drive a la derecha. Filtra los archivos solo a la izquierda y diferentes (left-only, different) para ver lo que falta o no coincide y cópialos. Job History conserva un registro del estado, el tamaño y la duración de tus archivos.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare mostrando las diferencias entre origen y destino" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade Mail.ru Cloud y Google Drive mediante **New Remote**.
3. Ejecuta un Dry Run en una carpeta y luego inicia el trabajo Copy.
4. Confirma con Folder Compare antes de dar de baja la cuenta antigua.

Una copia directa de nube a nube y verificada mantiene la migración con poco riesgo y fácil de reanudar.

---

**Guías relacionadas:**

- [Gestionar la sincronización de Mail.ru Cloud](https://rcloneview.com/support/blog/manage-mailru-cloud-sync-rcloneview)
- [Transferir Mail.ru Cloud a Google Drive y S3](https://rcloneview.com/support/blog/transfer-mailru-cloud-google-drive-s3-rcloneview)
- [Migrar Mail.ru Cloud a Backblaze B2](https://rcloneview.com/support/blog/migrate-mailru-cloud-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
