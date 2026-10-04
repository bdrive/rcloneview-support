---
slug: sync-dropbox-to-box-rcloneview
title: "Sincronizar Dropbox con Box — Copia de seguridad en la nube con RcloneView"
authors:
  - casey
description: "Sincroniza Dropbox con Box usando RcloneView: conecta ambos remotos OAuth, previsualiza con una simulación, programa trabajos y verifica los resultados con Folder Compare."
keywords:
  - sincronizar Dropbox con Box
  - copia de seguridad de Dropbox a Box
  - sincronización Dropbox Box
  - sincronización entre nubes
  - RcloneView
  - copia de seguridad de Dropbox
  - almacenamiento en la nube Box
  - copia de seguridad multinube
  - rclone GUI
tags:
  - RcloneView
  - dropbox
  - box
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincronizar Dropbox con Box — Copia de seguridad en la nube con RcloneView

> Mantén una segunda copia de tus archivos de Dropbox en Box, gestionada desde una sola ventana de escritorio.

Los equipos suelen trabajar en Dropbox mientras clientes o socios insisten en Box. Mantener ambos al día a mano implica descargar y volver a subir constantemente. RcloneView vincula las dos cuentas como remotos y sincroniza carpetas directamente entre ellas, con vistas previas e historial para que siempre sepas qué ha cambiado.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Añadir Dropbox y Box como remotos

Ambos proveedores usan inicio de sesión OAuth en el navegador, por lo que no se necesitan claves de API. Haz clic en New Remote, elige Dropbox y aprueba el acceso en tu navegador; repite el proceso con Box. Para cuentas empresariales, usa el ajuste Dropbox for Business (`dropbox_business = true`) o el ajuste Box for Business (`box_sub_type = enterprise`), así que elige esas variantes cuando corresponda.

<img src="/support/images/en/blog/new-remote.png" alt="Crear remotos de Dropbox y Box en RcloneView" class="img-large img-center" />

## Configurar un trabajo de sincronización unidireccional

Abre el asistente de sincronización, selecciona la carpeta de Dropbox como origen y la de Box como destino, y nombra el trabajo con letras, dígitos, guiones o guiones bajos. El modo unidireccional solo modifica el destino, lo que encaja con una función de copia de seguridad. Como la sincronización hace que el destino coincida con el origen, ejecuta siempre primero una simulación (Dry Run) para ver qué archivos se copiarían o eliminarían.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuración del trabajo de sincronización de Dropbox a Box" class="img-large img-center" />

Imagina una agencia de diseño con 150 GB de entregables de clientes. Un filtro por tamaño o antigüedad de archivo mantiene los archivos de trabajo pesados fuera de la copia en Box, mientras que los filtros predefinidos pueden omitir categorías como el vídeo.

## Programar y supervisar

Con una licencia PLUS, el paso 4 del asistente acepta programaciones al estilo crontab, y la opción de simulación muestra las próximas horas de ejecución. Una ejecución nocturna mantiene Box al día sin esfuerzo manual. La pestaña Transferring muestra la velocidad y el progreso en directo, y Job History registra el estado, la duración, el tamaño y los archivos de cada ejecución.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Programar un trabajo de sincronización de Dropbox a Box" class="img-large img-center" />

## Verificar con Folder Compare

Después de una ejecución, abre Folder Compare en las dos carpetas. Se listan los archivos solo a la izquierda y los diferentes, y puedes copiar los elementos que faltan desde la vista de comparación. Job History te ayuda a detectar las ejecuciones con errores.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historial de trabajos de la sincronización de Dropbox a Box" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** [rcloneview.com](https://rcloneview.com/src/download.html) desde este enlace.
2. Añade los remotos de Dropbox y Box mediante inicio de sesión OAuth.
3. Crea un trabajo de sincronización unidireccional y ejecuta una simulación.
4. Ejecútalo y, si tienes una licencia PLUS, prográmalo.

Una segunda copia en otro proveedor convierte un punto único de fallo en una red de seguridad.

---

**Guías relacionadas:**

- [Box a Dropbox sin tiempo de inactividad](https://rcloneview.com/support/blog/zero-downtime-box-to-dropbox-rcloneview)
- [Sincronizar Box con Google Drive](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)
- [Gestionar el almacenamiento de Dropbox](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
