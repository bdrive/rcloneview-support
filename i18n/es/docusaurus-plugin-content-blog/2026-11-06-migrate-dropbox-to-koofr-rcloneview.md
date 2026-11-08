---
slug: migrate-dropbox-to-koofr-rcloneview
title: "Migrar Dropbox a Koofr — Transfiere archivos con RcloneView"
authors:
  - robin
description: "Migra Dropbox a Koofr con RcloneView: conecta ambos remotos, ejecuta un Dry Run, copia de nube a nube y verifica el resultado con Folder Compare."
keywords:
  - migrar Dropbox a Koofr
  - transferencia de Dropbox a Koofr
  - migración de Dropbox a Koofr
  - RcloneView Dropbox
  - RcloneView Koofr
  - transferencia de nube a nube
  - mover archivos desde Dropbox
  - almacenamiento en la nube europeo Koofr
  - migración con rclone GUI
  - migración de Dropbox for Business
tags:
  - RcloneView
  - dropbox
  - koofr
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar Dropbox a Koofr — Transfiere archivos con RcloneView

> Traslada una cuenta de Dropbox a Koofr de nube a nube, con una vista previa antes de copiar nada y una comparación después.

Una agencia de diseño cierra la cuenta de un cliente, o un freelance quiere que su archivo esté alojado por un proveedor europeo. En ambos casos, arrastrar miles de carpetas de Dropbox a través de un portátil es lento y fácil de hacer mal. RcloneView conecta Dropbox y Koofr en una sola ventana, ejecuta la copia entre ambos y ofrece Dry Run y Folder Compare para confirmar el resultado. RcloneView permite montar Y sincronizar más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Dropbox y Koofr como remotos

Abre la pestaña Remote y elige New Remote. Dropbox inicia sesión mediante OAuth: se abre tu navegador, apruebas el acceso y RcloneView se conecta automáticamente. Para una cuenta de empresa, Dropbox for Business necesita el ajuste `dropbox_business = true` en la configuración del remoto.

Añade Koofr como segundo remoto. Cuando ambos aparezcan en Remote Manager, ábrelos en dos paneles Explorer lado a lado. Explora el árbol de origen y el de destino antes de mover nada, para saber qué carpetas importan.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir remotos de Dropbox y Koofr en RcloneView" class="img-large img-center" />

## Planificar la copia con filtros y un Dry Run

La mayoría de las cuentas de Dropbox contienen archivos temporales que no quieres llevarte. El paso 3 del asistente de trabajos ofrece un tamaño máximo de archivo, una antigüedad máxima de archivo y un límite de profundidad de carpetas. Los filtros predefinidos cubren archivos de Music, Video, Image y Document, y las reglas personalizadas pueden excluir patrones como carpetas `.git/` o archivos `.iso`.

Ejecuta un Dry Run antes del trabajo real. Muestra la lista de archivos que se copiarían o eliminarían sin tocar ninguno de los dos lados. Para una migración, elige un trabajo Copy en lugar de una sincronización de tipo espejo, de modo que no se elimine nada de lo que ya está almacenado en Koofr.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de nube a nube de Dropbox a Koofr en RcloneView" class="img-large img-center" />

## Ejecutar la transferencia y seguir el progreso

Inicia el trabajo y síguelo en la pestaña Transferring, que muestra el progreso, la velocidad y el número de archivos. Para una biblioteca grande, aumenta el número de transferencias de archivos en el paso 2, pero mantén moderado el número de verificadores de igualdad si alguno de los servicios responde con lentitud. "Retry entire sync if fails" tiene un valor predeterminado de 3, que absorbe los errores de red transitorios.

Si la biblioteca es demasiado grande para una sola sesión, guarda el trabajo en Job Manager y vuelve a ejecutarlo más tarde. Un trabajo Copy solo transfiere lo que falta o es diferente, así que una segunda pasada continúa donde se detuvo la primera.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Supervisión de una transferencia de Dropbox a Koofr en la pestaña Transferring" class="img-large img-center" />

## Verificar con Folder Compare

Cuando termine el trabajo, abre Compare con Dropbox a la izquierda y Koofr a la derecha. Los filtros de solo izquierda, solo derecha y archivos diferentes muestran lo que queda. La acción de copiar a la derecha transfiere cualquier resto. Job History registra el estado, el tamaño, la velocidad y el número de archivos de cada ejecución, lo que resulta útil como documentación de la migración.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History mostrando una migración completada de Dropbox a Koofr" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade Dropbox (OAuth) y Koofr como remotos.
3. Crea un trabajo Copy con filtros y luego ejecuta un Dry Run.
4. Ejecuta el trabajo y después confirma el resultado con Folder Compare.

Mantén intacta la cuenta de Dropbox hasta que Compare muestre que ambos lados coinciden.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de Koofr — sincroniza y haz copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Migrar Koofr a Dropbox con RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-dropbox-rcloneview)
- [Migrar Dropbox a pCloud con RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-pcloud-rcloneview)

<CloudSupportGrid />
