---
slug: manage-vultr-object-storage-cloud-sync-backup-rcloneview
title: "Gestiona Vultr Object Storage — Sincroniza y Respalda Archivos con RcloneView"
authors:
  - alex
description: "Conecta Vultr Object Storage a RcloneView y gestiona tus buckets compatibles con S3 mediante una GUI — sincroniza, respalda, monta y automatiza transferencias sin usar la CLI."
keywords:
  - Vultr Object Storage
  - RcloneView Vultr
  - copia de seguridad Vultr compatible con S3
  - GUI de sincronización en la nube Vultr
  - gestor de almacenamiento de objetos compatible con S3
  - sincronización de buckets Vultr
  - herramienta de copia de seguridad de almacenamiento de objetos
  - transferencia de archivos en la nube Vultr
  - gestión en la nube Vultr
  - GUI compatible con S3 rclone
tags:
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona Vultr Object Storage — Sincroniza y Respalda Archivos con RcloneView

> RcloneView se conecta a la API compatible con S3 de Vultr Object Storage, brindándote una GUI completa para explorar buckets, programar copias de seguridad y montar almacenamiento en la nube como unidad local.

Vultr Object Storage es un servicio de almacenamiento de objetos compatible con S3 construido sobre la infraestructura en la nube de Vultr, preferido por desarrolladores y equipos de infraestructura que necesitan almacenamiento distribuido globalmente y rentable junto con las ofertas de cómputo de Vultr. Aunque el servicio es sencillo de configurar de forma programática, gestionar archivos día a día mediante la CLI o escribir scripts personalizados es una fricción que la mayoría de los equipos prefiere evitar. RcloneView resuelve esto tratando los buckets de Vultr exactamente como cualquier otro remoto — los exploras en un explorador de archivos de doble panel, configuras trabajos de sincronización recurrentes mediante un asistente y supervisas las transferencias en vivo sin escribir un solo comando de rclone.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Vultr Object Storage en RcloneView

Agregar Vultr a RcloneView utiliza la configuración estándar compatible con S3. Abre la pestaña **Remote** y haz clic en **New Remote**, luego selecciona **Amazon S3** como tipo de proveedor. Introduce tu Access Key y Secret Key de Vultr Object Storage — están disponibles en el panel de control de Vultr, en la sección de credenciales de tu instancia de Object Storage. En el campo **Endpoint**, pega la URL de endpoint que aparece en tu panel de Vultr (cada región de centro de datos tiene su propia URL de endpoint). Deja el campo de región como `auto` o en blanco; Vultr gestiona el enrutamiento según el endpoint.

Una vez guardado, tu bucket de Vultr aparece como una carpeta de nivel superior en el panel Explorer de RcloneView. Navega por los prefijos de objetos mediante la barra de ruta de migas de pan, alterna entre vista de lista y de miniaturas, y consulta el nombre, tamaño y fecha de modificación de los archivos de un vistazo. El diseño de doble panel te permite abrir Vultr en un panel y una carpeta local, ruta NAS u otra nube en el otro — facilitando las subidas mediante arrastrar y soltar, descargas y copias entre proveedores.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Vultr Object Storage as an S3-compatible remote in RcloneView" class="img-large img-center" />

RcloneView puede mostrar hasta cuatro paneles de Explorer simultáneamente, lo cual resulta útil al mover datos entre varias regiones de Vultr o al realizar subidas cruzadas entre Vultr y un proveedor como Backblaze B2.

## Sincronizar y Respaldar Archivos en Vultr Object Storage

Los trabajos de copia de seguridad automatizados en RcloneView siguen un asistente de 4 pasos. Selecciona tu origen — una carpeta local, una unidad externa u otro remoto en la nube — y elige el bucket de Vultr como destino. Nombra el trabajo, elige sincronización unidireccional para reflejar los datos en Vultr, y luego configura el filtrado y las opciones avanzadas. Aumentar el número de transferencias simultáneas acelera el rendimiento para cargas de trabajo como un equipo de software que respalda artefactos de compilación nocturnos (cientos de archivos pequeños). Habilitar la comparación de checksum garantiza que cada archivo llegue idéntico byte a byte, lo cual es importante al archivar binarios compilados o volcados de bases de datos.

Antes de la primera ejecución real, haz clic en **Dry Run** para previsualizar la lista completa de archivos que se transferirían o eliminarían. Esta verificación de seguridad evita eliminaciones inesperadas en buckets compartidos. Cuando estés conforme, haz clic en **Run** — la pestaña Transferring en la parte inferior de RcloneView muestra el recuento de archivos, la velocidad de transferencia y el total de bytes con actualizaciones en vivo.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Vultr Object Storage in RcloneView" class="img-large img-center" />

Los usuarios de RcloneView PLUS pueden programar trabajos con reglas de estilo crontab — por ejemplo, una copia de seguridad nocturna a las 03:00 que se ejecuta de lunes a viernes — y recibir notificaciones de finalización.

## Montar el Almacenamiento de Vultr como Unidad Local

La función Mount de RcloneView te permite adjuntar un bucket de Vultr directamente como una letra de unidad local (Windows) o punto de montaje (macOS/Linux), haciéndolo accesible para cualquier aplicación sin pasos de sincronización explícitos. Abre **Mount Manager** desde la pestaña Remote, haz clic en **New Mount**, selecciona tu remoto de Vultr y elige el bucket o subcarpeta a exponer. Configura el modo de caché VFS en **writes** para la mayoría de las cargas de trabajo, luego haz clic en **Save and Mount**.

El bucket aparece como un volumen local. Por ejemplo, un pipeline de CI que deposita artefactos de compilación directamente en una unidad montada no necesita conocer nada sobre la API de Vultr — escribe archivos como si fuera un disco local, y rclone gestiona la subida de forma transparente.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a Vultr Object Storage bucket as a local drive using RcloneView's Mount Manager" class="img-large img-center" />

## Primeros Pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. En el panel de control de Vultr, abre tu instancia de Object Storage y copia el Access Key, Secret Key y la URL de endpoint.
3. En RcloneView, ve a **Remote tab → New Remote → Amazon S3**, introduce tus credenciales y el endpoint de Vultr, y luego guarda.
4. Explora tu bucket en el panel Explorer o configura trabajos de copia de seguridad automatizados mediante el **Job Manager**.

Una vez conectado, Vultr Object Storage se integra sin problemas en cualquier flujo de trabajo multi-nube que gestiones en RcloneView — junto con almacenamiento local, NAS y otros proveedores en la nube en una sola interfaz.

---

**Guías Relacionadas:**

- [Sincroniza Vultr Object Storage con Google Drive usando RcloneView](https://rcloneview.com/support/blog/sync-vultr-object-storage-s3-google-drive-rcloneview)
- [Gestiona el Almacenamiento en la Nube Cloudflare R2 con RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Monta Buckets de Amazon S3 como Unidad Local con RcloneView](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)

<CloudSupportGrid />
