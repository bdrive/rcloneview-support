---
slug: migrate-zoho-workdrive-to-wasabi-rcloneview
title: "Migrar Zoho WorkDrive a Wasabi — Transfiere archivos con RcloneView"
authors:
  - morgan
description: "Migra Zoho WorkDrive al almacenamiento de objetos Wasabi con RcloneView: conecta ambos remotos, Dry Run, copia de nube a nube y verificación con Folder Compare."
keywords:
  - migrar Zoho WorkDrive a Wasabi
  - Zoho WorkDrive a Wasabi
  - exportar Zoho WorkDrive
  - migración de almacenamiento de objetos Wasabi
  - copia de seguridad de Zoho WorkDrive
  - transferencia de nube a nube
  - migración con GUI de rclone
  - RcloneView Wasabi
tags:
  - RcloneView
  - zoho
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar Zoho WorkDrive a Wasabi — Transfiere archivos con RcloneView

> Archiva una carpeta de equipo de Zoho WorkDrive en buckets de Wasabi sin almacenar nada de forma intermedia en tu propio disco.

Los equipos abandonan Zoho WorkDrive cuando termina un proyecto, un departamento cambia de herramientas o finanzas quiere un archivo a largo plazo más barato. Wasabi es un destino compatible con S3 que encaja en ese papel de archivo, pero mover miles de archivos a mano es lento. RcloneView conecta ambos servicios en una sola ventana y copia de nube a nube, con un Dry Run antes y una comparación después. Puedes conectar almacenamiento compatible con S3, como Wasabi, con acceso completo de lectura y escritura en la licencia FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta Zoho WorkDrive y Wasabi

Abre la pestaña Remote y elige New Remote. Zoho WorkDrive requiere seleccionar una región durante la configuración, así que elige el centro de datos que corresponda a tu cuenta de Zoho. Wasabi se añade como un remoto compatible con S3: introduce la Access Key, la Secret Key y el endpoint de la región de tu bucket.

Cuando ambos aparezcan en Remote Manager, ábrelos en dos paneles del Explorer. Examina las carpetas de equipo a la izquierda y el bucket a la derecha antes de mover nada.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir los remotos de Zoho WorkDrive y Wasabi en RcloneView" class="img-large img-center" />

## Planifica la copia y ejecuta un Dry Run

Decide qué pertenece al archivo. En el paso 3 del asistente de trabajos puedes establecer una antigüedad máxima de archivo, un tamaño máximo de archivo o un límite de profundidad de carpetas, y añadir reglas personalizadas, como excluir carpetas `.git/`. Elige un trabajo Copy en lugar de una sincronización espejo para que no se elimine nada en el destino.

Después ejecuta Dry Run. Enumera cada archivo que se copiaría o eliminaría sin cambiar ninguno de los lados, que es el momento más barato para detectar una carpeta o un filtro equivocados.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de nube a nube de Zoho WorkDrive a Wasabi" class="img-large img-center" />

## Ejecuta la transferencia y supervísala

Inicia el trabajo y síguelo en la pestaña Transferring, que muestra el progreso, la velocidad y el número de archivos. En el paso 2 puedes aumentar el número de transferencias de archivos para un archivo grande; mantén moderado el número de equality checkers si el lado de Zoho responde con lentitud. "Retry entire sync if fails" tiene un valor predeterminado de 3, que cubre los errores de red transitorios.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Supervisión de una transferencia de Zoho WorkDrive a Wasabi" class="img-large img-center" />

## Verifica con Folder Compare y Job History

Cuando termine el trabajo, abre Compare con Zoho WorkDrive en un lado y el bucket de Wasabi en el otro. Los filtros de solo izquierda, solo derecha y archivos diferentes muestran lo que aún falta, y la acción de copia transfiere los restos. Job History registra el estado, el tamaño y el número de archivos de cada ejecución, lo que sirve también como registro de la migración.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparación de Zoho WorkDrive y Wasabi tras la migración" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade Zoho WorkDrive (con su región) y Wasabi como remotos.
3. Crea un trabajo Copy con filtros y ejecuta un Dry Run.
4. Ejecuta el trabajo y confirma con Folder Compare antes de retirar el origen.

Conserva los datos de Zoho hasta que Compare muestre que ambos lados coinciden.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de Zoho WorkDrive con RcloneView](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [Migrar Zoho WorkDrive a Backblaze B2 con RcloneView](https://rcloneview.com/support/blog/migrate-zoho-workdrive-to-backblaze-b2-rcloneview)
- [Gestiona el almacenamiento de Wasabi — Sincroniza y haz copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
