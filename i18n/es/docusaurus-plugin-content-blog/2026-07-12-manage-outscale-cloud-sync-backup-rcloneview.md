---
slug: manage-outscale-cloud-sync-backup-rcloneview
title: "Gestiona el Almacenamiento de Outscale — Sincroniza y Haz Copias de Seguridad de Archivos con RcloneView"
authors:
  - morgan
description: "Conecta Outscale Object Storage a RcloneView para explorar archivos, sincronizar y hacer copias de seguridad compatibles con S3 en Windows, macOS y Linux."
keywords:
  - Outscale storage
  - Outscale Object Storage
  - S3-compatible storage GUI
  - RcloneView Outscale
  - cloud backup software
  - sync Outscale to cloud
  - manage cloud storage GUI
  - object storage sync tool
  - multi-cloud file manager
  - S3 credentials setup
tags:
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el Almacenamiento de Outscale — Sincroniza y Haz Copias de Seguridad de Archivos con RcloneView

> Explora, sincroniza y haz copias de seguridad de buckets de Outscale Object Storage desde una interfaz gráfica en lugar de manejar credenciales S3 en bruto desde la línea de comandos.

Outscale Object Storage se accede a través del protocolo compatible con S3 de rclone, lo que significa que la configuración requiere una Access Key, una Secret Key y un endpoint — datos fáciles de escribir mal en un archivo de configuración. RcloneView envuelve esa configuración en un formulario guiado y añade un explorador de archivos completo, un motor de sincronización y un programador de tareas encima, de modo que los equipos que ya almacenan datos en Outscale pueden gestionarlos de la misma forma que gestionan cualquier otro remoto.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Outscale como Remoto Compatible con S3

Añadir Outscale en RcloneView sigue el mismo flujo de introducción de credenciales que se usa para otros servicios compatibles con S3: abre la pestaña Remote > New Remote, elige el tipo S3-compatible e introduce el Access Key ID, el Secret Access Key y el endpoint de Outscale. Connect Manager también permite apuntar RcloneView a una instancia externa de rclone si tu integración con Outscale ya funciona a través de un daemon de rclone compartido en un servidor.

Una vez guardado el remoto, aparece como su propia pestaña en el panel Explorer, junto a cualquier otro almacenamiento local o en la nube ya configurado. Puedes renombrar la conexión con un remoto Alias para acortar rutas de bucket muy anidadas y convertirlas en algo más fácil de navegar en el día a día.

<img src="/support/images/en/blog/new-remote.png" alt="Adding an Outscale S3-compatible remote in RcloneView" class="img-large img-center" />

## Explorar, Sincronizar y Hacer Copias de Seguridad de Datos de Outscale

Con el remoto conectado, el File Explorer ofrece una vista de doble panel para comparar lo que hay en Outscale con una carpeta local u otro remoto en la nube. Arrastrar y soltar entre paneles activa una copia al mover datos entre dos remotos diferentes, y el menú contextual del clic derecho cubre renombrar, eliminar, obtener tamaño y descargar/subir para las operaciones de archivo habituales.

Para copias de seguridad recurrentes, el asistente Sync configura el origen y el destino, la concurrencia de transferencia y las reglas de filtrado en cuatro pasos, incluyendo opciones como la antigüedad máxima de archivo y filtros predefinidos para tipos de medios o documentos. Conecta servicios compatibles con S3 como Outscale con acceso completo de lectura/escritura en la licencia FREE — no es necesario actualizar solo para escribir datos de vuelta al bucket. La sincronización 1:N puede replicar el mismo bucket de Outscale hacia múltiples destinos en una sola tarea, útil cuando una copia de seguridad necesita llegar tanto a una unidad local como a un segundo remoto en la nube.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job between Outscale storage and another remote" class="img-large img-center" />

## Automatizar Copias de Seguridad Recurrentes de Outscale

Job Manager mantiene en una sola lista cada tarea de sincronización, copia o movimiento que crees, con cada ejecución registrada en Job History junto con el estado, el tamaño de la transferencia y el recuento de archivos. Dry Run permite previsualizar exactamente qué archivos se copiarían o eliminarían antes de confirmar una transferencia real — una comprobación de seguridad útil antes de una primera gran sincronización hacia un nuevo bucket de Outscale.

Los usuarios con licencia PLUS pueden adjuntar una programación de tipo crontab a una tarea para que las copias de seguridad de Outscale se ejecuten automáticamente en un intervalo recurrente, con una opción de simulación para previsualizar los próximos horarios de ejecución antes de guardar.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for Outscale storage" class="img-large img-center" />

## Montar Outscale como Unidad Local

El almacenamiento de Outscale también se puede montar como una unidad virtual, permitiendo que otras aplicaciones de escritorio lean y escriban el contenido del bucket como si fueran archivos locales. La configuración de montaje incluye el modo de caché VFS (predeterminado: writes), límites de tamaño de caché y modo de solo lectura, y los montajes pueden iniciarse directamente desde la barra de herramientas del panel del remoto o desde el Mount Manager dedicado.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting an Outscale bucket as a local drive in RcloneView" class="img-large img-center" />

## Primeros Pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre la pestaña Remote > New Remote y selecciona la opción S3-compatible para introducir tus credenciales y endpoint de Outscale.
3. Usa Folder Compare o arrastrar y soltar para mover datos existentes hacia Outscale, y luego configura una tarea Sync para copias de seguridad continuas.
4. Añade la tarea a Job Manager y, en PLUS, adjunta una programación para que las copias de seguridad se ejecuten sin intervención manual.

Una vez configurado el remoto, el almacenamiento de Outscale se comporta como cualquier otra conexión en RcloneView — explorable, sincronizable y listo para tener copias de seguridad programadas.

---

**Guías Relacionadas:**

- [Gestiona el Almacenamiento de Wasabi — Sincroniza y Haz Copias de Seguridad de Archivos con RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Gestiona Scaleway Object Storage — Sincronización en la Nube con RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Gestiona Hetzner Object Storage — Sincronización en la Nube con RcloneView](https://rcloneview.com/support/blog/manage-hetzner-object-storage-cloud-sync-rcloneview)

<CloudSupportGrid />
