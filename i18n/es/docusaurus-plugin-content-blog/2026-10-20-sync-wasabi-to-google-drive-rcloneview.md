---
slug: sync-wasabi-to-google-drive-rcloneview
title: "Sincroniza Wasabi con Google Drive: copia de seguridad en la nube con RcloneView"
authors:
  - morgan
description: "Sincroniza Wasabi con Google Drive usando RcloneView: conecta ambos remotos, obtén una vista previa con Dry Run, ejecuta una sincronización unidireccional y verifica el resultado con Folder Compare."
keywords:
  - sincronizar wasabi con google drive
  - copia de seguridad de wasabi en google drive
  - transferencia de wasabi a google drive
  - RcloneView wasabi
  - RcloneView google drive
  - sincronización de nube a nube
  - s3 a google drive
  - copia de seguridad de bucket de wasabi
tags:
  - RcloneView
  - wasabi
  - google-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincroniza Wasabi con Google Drive: copia de seguridad en la nube con RcloneView

> Mantén en Google Drive una segunda copia de tu bucket de Wasabi, apta para colaborar, con una sincronización unidireccional que puedes previsualizar.

Wasabi es un lugar habitual para archivos históricos y entregables de proyectos, pero las personas que necesitan esos archivos suelen trabajar en Google Drive. Sincronizar ambos servicios mantiene una copia legible donde tus colegas ya trabajan y te da una segunda ubicación por si una cuenta tiene problemas. RcloneView conecta ambos servicios en una sola ventana, previsualiza la tarea y verifica el resultado. Conecta S3, Azure o Backblaze B2 con lectura y escritura completas en la licencia FREE, junto con más de 90 proveedores adicionales.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar ambos remotos

Wasabi se conecta mediante el protocolo S3 de rclone: introduce una Access Key, una Secret Key y el endpoint de tu región de Wasabi. Google Drive usa OAuth en el navegador, por lo que RcloneView abre una página de inicio de sesión de Google y se conecta una vez que apruebas el acceso.

Abre cada remoto en su propio panel del Explorer. Explora el bucket y el árbol de carpetas de Drive en paralelo para saber exactamente qué prefijo corresponde a qué carpeta.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir los remotos de Wasabi y Google Drive en RcloneView" class="img-large img-center" />

## Configurar la tarea de sincronización

Imagina un estudio de vídeo con un bucket de ediciones terminadas que los productores quieren ver en una carpeta compartida de Drive. Crea una tarea desde el botón Sync: elige el prefijo de Wasabi como origen y la carpeta de Drive como destino, y ponle a la tarea un nombre con letras, números, guiones o guiones bajos.

La sincronización unidireccional ("Modifying destination only") hace que el destino coincida con el origen, por lo que los archivos que solo existen en la carpeta de Drive se eliminarán. Si la carpeta de Drive contiene archivos que quieres conservar, usa una tarea Copy. En Advanced Settings puedes definir cuántos archivos se transfieren a la vez y activar la comparación por suma de verificación. Recuerda que Google Docs, Sheets y Slides no son archivos normales, así que el filtro predefinido de Google Docs resulta útil para excluirlos.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de nube a nube entre Wasabi y Google Drive en RcloneView" class="img-large img-center" />

## Vista previa con Dry Run

Antes de la primera ejecución real, usa Dry Run. Lista los archivos que se copiarían y eliminarían sin cambiar nada, lo que es la forma más económica de detectar un prefijo de origen incorrecto o una eliminación inesperada. Ejecuta la tarea cuando la lista sea correcta y sigue el progreso, la velocidad y el recuento de archivos en la pestaña Transferring.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ejecutar una tarea de sincronización en RcloneView" class="img-large img-center" />

## Verificar y repetir

Tras la sincronización, abre Folder Compare en las dos ubicaciones para confirmar que no queda nada solo en un lado ni diferente. Job History registra el estado, la duración, el tamaño y el número de archivos de cada ejecución, de modo que puedes revisar ejecuciones anteriores. Con una licencia PLUS puedes añadir una programación al estilo crontab para que la copia se actualice automáticamente.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Vista de Folder Compare en RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade tu remoto de Wasabi con Access Key, Secret Key y el endpoint de la región, y después añade Google Drive mediante el inicio de sesión en el navegador.
3. Crea una tarea Sync desde el prefijo de Wasabi hacia una carpeta de Drive y ejecuta primero Dry Run.
4. Ejecuta la tarea y confirma el resultado con Folder Compare.

Una copia de tu bucket en Drive convierte un archivo histórico en algo que todo tu equipo puede abrir.

---

**Guías relacionadas:**

- [Migrar Wasabi a OneDrive](https://rcloneview.com/support/blog/migrate-wasabi-to-onedrive-rcloneview)
- [Dry Run: previsualiza la sincronización antes de transferir](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [Flujo de trabajo de comparar primero](https://rcloneview.com/support/blog/compare-first-workflow-rcloneview)

<CloudSupportGrid />
