---
slug: migrate-pcloud-to-jottacloud-rcloneview
title: "Migrar pCloud a Jottacloud — Transfiere archivos con RcloneView"
authors:
  - alex
description: "Migra pCloud a Jottacloud con RcloneView: conecta ambos remotos, previsualiza con un Dry Run, copia de nube a nube y verifica con Folder Compare."
keywords:
  - migrar pCloud a Jottacloud
  - transferencia de pCloud a Jottacloud
  - migración de pCloud a Jottacloud
  - RcloneView pCloud
  - RcloneView Jottacloud
  - transferencia de nube a nube
  - mover archivos desde pCloud
  - migración de almacenamiento en la nube europeo
  - migración con rclone GUI
tags:
  - RcloneView
  - pcloud
  - jottacloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar pCloud a Jottacloud — Transfiere archivos con RcloneView

> Traslada una biblioteca de pCloud a Jottacloud de nube a nube, con una vista previa primero y una pasada de verificación al final.

Un fotógrafo que consolida archivos de clientes, o una familia que traslada carpetas compartidas a un nuevo proveedor, se enfrentan a la misma tarea: miles de archivos que están en una nube deben terminar en otra. Descargarlo todo en un portátil y volver a subirlo es lento y frágil. RcloneView conecta pCloud y Jottacloud en una sola ventana, ejecuta la copia entre ambos y ofrece Dry Run y Folder Compare para confirmar el resultado. RcloneView permite montar Y sincronizar más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar pCloud y Jottacloud como remotos

Abre la pestaña Remote y elige New Remote. pCloud inicia sesión mediante OAuth: se abre tu navegador, apruebas el acceso y RcloneView se conecta automáticamente. Añade Jottacloud como segundo remoto siguiendo las indicaciones en pantalla de ese proveedor.

Cuando ambos aparezcan en Remote Manager, ábrelos en dos paneles Explorer lado a lado. Explorar primero el origen y el destino te ayuda a decidir qué carpetas mover y dónde deben ir.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir remotos de pCloud y Jottacloud en RcloneView" class="img-large img-center" />

## Planificar la copia con filtros y un Dry Run

El paso 3 del asistente de trabajos te permite limitar la transferencia por tamaño máximo de archivo, antigüedad máxima de archivo o profundidad de carpetas. Los filtros predefinidos cubren archivos de Music, Video, Image y Document, y las reglas personalizadas pueden excluir patrones como carpetas `.git/` o archivos `.iso`, lo que resulta útil para omitir instaladores e imágenes de disco.

Ejecuta un Dry Run antes del trabajo real. Muestra la lista de archivos que se copiarían o eliminarían sin cambiar ninguno de los dos lados. Para una migración, elige un trabajo Copy en lugar de una sincronización de tipo espejo, de modo que no se elimine nada de lo que ya hay en Jottacloud.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de nube a nube de pCloud a Jottacloud en RcloneView" class="img-large img-center" />

## Ejecutar la transferencia y seguir el progreso

Inicia el trabajo y síguelo en la pestaña Transferring, que muestra el progreso, la velocidad y el número de archivos. Para una biblioteca grande, aumenta el número de transferencias de archivos en el paso 2, pero mantén moderado el número de verificadores de igualdad si alguno de los backends responde con lentitud. "Retry entire sync if fails" tiene un valor predeterminado de 3, que absorbe los errores de red transitorios.

Si una sesión no es suficiente, guarda el trabajo en Job Manager y vuelve a ejecutarlo más tarde. Un trabajo Copy solo transfiere los archivos que faltan o son diferentes, así que las ejecuciones repetidas continúan donde se detuvo la anterior.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ejecución de un trabajo Copy de pCloud a Jottacloud en RcloneView" class="img-large img-center" />

## Verificar con Folder Compare

Una vez completado el trabajo, abre Compare con pCloud a la izquierda y Jottacloud a la derecha. Los filtros de solo izquierda, solo derecha y archivos diferentes muestran lo que queda por mover, y la acción de copiar a la derecha transfiere los rezagados. Job History conserva el estado, el tamaño, la velocidad y el número de archivos de cada ejecución como registro de la migración.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparación de carpetas de pCloud y Jottacloud tras la migración" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade pCloud (OAuth) y Jottacloud como remotos.
3. Crea un trabajo Copy con filtros y luego ejecuta un Dry Run.
4. Ejecuta el trabajo y después confirma el resultado con Folder Compare.

Mantén intacta la cuenta de pCloud hasta que Compare muestre que ambos lados coinciden.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de pCloud — sincroniza y haz copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Gestiona el almacenamiento de Jottacloud — sincroniza y haz copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Migrar Jottacloud a pCloud con RcloneView](https://rcloneview.com/support/blog/migrate-jottacloud-to-pcloud-rcloneview)

<CloudSupportGrid />
