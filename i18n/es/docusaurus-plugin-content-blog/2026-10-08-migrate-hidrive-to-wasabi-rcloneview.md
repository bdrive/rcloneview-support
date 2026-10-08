---
slug: migrate-hidrive-to-wasabi-rcloneview
title: "Migrar HiDrive a Wasabi — Transfiere archivos con RcloneView"
authors:
  - morgan
description: "Mueve archivos de HiDrive a Wasabi object storage con RcloneView: conecta ambos remotos, haz un Dry Run, ejecuta la transferencia y verifica con Folder Compare."
keywords:
  - migrar HiDrive a Wasabi
  - transferencia de HiDrive a Wasabi
  - sincronización HiDrive Wasabi
  - RcloneView HiDrive
  - migración de Wasabi S3
  - transferencia de nube a nube
  - copia de seguridad de HiDrive en S3
  - rclone HiDrive Wasabi
  - herramienta de migración de HiDrive
  - GUI de Wasabi
tags:
  - RcloneView
  - hidrive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar HiDrive a Wasabi — Transfiere archivos con RcloneView

> Mueve un archivo de HiDrive a Wasabi object storage con un flujo visual: conectar, previsualizar, transferir y verificar.

HiDrive funciona bien como almacén de archivos personal o de equipo, pero los archivos de largo plazo suelen encajar mejor en un almacenamiento de objetos estilo S3 con acceso a API predecible. RcloneView conecta ambos servicios en una sola ventana, así que puedes copiar carpetas de nube a nube sin descargar primero todo a tu propio disco.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta HiDrive y Wasabi como remotos

HiDrive usa OAuth: RcloneView abre tu navegador, inicias sesión y el remoto se conecta sin una clave de API aparte. Wasabi es compatible con S3, así que introduces una Access Key, una Secret Key y el endpoint de la región de tu bucket.

Añade ambos desde la pestaña Remote con New Remote. Luego abre cada uno en un panel Explorer, uno a la izquierda y otro a la derecha, y confirma que puedes explorar las carpetas de HiDrive y el bucket de Wasabi de destino.

<img src="/support/images/en/blog/new-remote.png" alt="Adición de remotos de HiDrive y Wasabi en RcloneView" class="img-large img-center" />

## Planifica la transferencia con un Dry Run

Imagina un estudio de diseño que traslada 800 GB de carpetas de proyectos terminados fuera de HiDrive. Antes de tocar nada, crea la transferencia como un trabajo. Elige HiDrive como origen y una ruta de bucket de Wasabi como destino, y usa el modo One-way "Modifying destination only".

Ejecuta primero un Dry Run. Muestra los archivos que se copiarían o eliminarían sin hacer cambios, lo que es una forma fiable de detectar una carpeta de destino equivocada.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de nube a nube de HiDrive a Wasabi en RcloneView" class="img-large img-center" />

## Ajusta la configuración y ejecuta el trabajo

En Step 2 del asistente, define el número de transferencias de archivos y activa la comparación de checksum si quieres verificar por hash y tamaño. Mantén el valor de reintentos en el predeterminado de 3 para que un fallo breve de red no aborte toda la ejecución. Usa los filtros de Step 3 para omitir elementos como archivos temporales o una carpeta `.git/`.

Cuando la vista previa sea correcta, ejecuta el trabajo y observa la velocidad, el progreso y el número de archivos en la pestaña Transferring.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Supervisión de una transferencia de HiDrive a Wasabi en la pestaña Transferring" class="img-large img-center" />

## Verifica con Folder Compare

Cuando termine el trabajo, abre Compare con HiDrive a un lado y Wasabi al otro. Filtra los archivos que solo existen a la izquierda para ver lo que no llegó y copia únicamente los elementos que faltan. Job History conserva el estado, la duración, el tamaño y el número de archivos para tu registro de migración.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare confirmando que el contenido de HiDrive y Wasabi coincide" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade HiDrive (inicio de sesión en el navegador) y Wasabi (Access Key, Secret Key, endpoint) como remotos.
3. Crea un trabajo unidireccional de HiDrive a tu bucket de Wasabi y ejecuta un Dry Run.
4. Ejecuta la transferencia y luego verifica con Folder Compare.

Una migración previsualizada y verificada mantiene intactos tus archivos de HiDrive hasta que estés seguro de que todo ha llegado a Wasabi.

---

**Guías relacionadas:**

- [Sincroniza HiDrive con Amazon S3 usando RcloneView](https://rcloneview.com/support/blog/sync-hidrive-to-amazon-s3-rcloneview)
- [Migra HiDrive a Backblaze B2 con RcloneView](https://rcloneview.com/support/blog/migrate-hidrive-to-backblaze-b2-rcloneview)
- [Gestiona el almacenamiento de Wasabi — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
