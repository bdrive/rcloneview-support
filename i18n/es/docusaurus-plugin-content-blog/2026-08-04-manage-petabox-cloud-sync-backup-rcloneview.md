---
slug: manage-petabox-cloud-sync-backup-rcloneview
title: "Administrar almacenamiento Petabox — Sincronice y respalde archivos con RcloneView"
authors:
  - kai
description: "Conecte el almacenamiento compatible con S3 de Petabox a RcloneView para explorar, sincronizar, respaldar y montar de forma multiplataforma junto a más de 90 proveedores de nube adicionales."
keywords:
  - Petabox
  - Petabox RcloneView
  - Sincronización de Petabox
  - Copia de seguridad de Petabox
  - Almacenamiento compatible con S3
  - Administrar Petabox
  - GUI de almacenamiento de objetos
  - Almacenamiento en la nube Petabox
  - Gestor de nube compatible con S3
  - Petabox rclone
tags:
  - RcloneView
  - s3-compatible
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Administrar almacenamiento Petabox — Sincronice y respalde archivos con RcloneView

> Explore, sincronice y respalde el almacenamiento de objetos de Petabox en la misma ventana que cualquier otra nube que utilice, sin necesidad de un cliente S3 independiente.

Petabox es un servicio de almacenamiento de objetos compatible con S3, lo que significa que se integra en RcloneView de la misma manera que Amazon S3 o Wasabi: mediante una clave de acceso, una clave secreta y un endpoint personalizado. Una vez conectado, Petabox se comporta como cualquier otro remoto en el explorador de archivos de RcloneView: se puede explorar, sincronizar y montar junto con sus otros proveedores. Esto es importante para los equipos que eligieron Petabox por su economía de almacenamiento de objetos, pero que aun así necesitan una experiencia de administrador de archivos normal en lugar de la CLI de AWS o una consola web limitada a buckets.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Petabox como remoto compatible con S3

Agregar Petabox sigue el flujo estándar de RcloneView para remotos compatibles con S3: abra "New Remote", elija el tipo compatible con S3 e introduzca su Access Key ID de Petabox, la Secret Access Key y la URL del endpoint del bucket desde su panel de Petabox. RcloneView incluye un binario de rclone integrado, por lo que no hay un paso de instalación independiente; solo las credenciales bastan para incorporar el bucket al explorador de archivos.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Petabox S3-compatible remote in RcloneView" class="img-large img-center" />

Una vez agregado, Petabox aparece como una pestaña en el panel del explorador, igual que Google Drive o OneDrive. A diferencia de los navegadores S3 que solo permiten montar, RcloneView también sincroniza y compara carpetas con Petabox, con la licencia FREE y sin necesidad de una compra adicional para la sincronización básica.

## Sincronizar Petabox con otros proveedores de nube

Un caso de uso común de Petabox es archivar datos que actualmente residen en un proveedor más costoso, o crear una réplica de un bucket activo por redundancia. El asistente de sincronización de RcloneView le permite establecer Petabox como origen o destino, con filtros por tipo de archivo, antigüedad y tamaño, de modo que solo se muevan los datos que desea.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Petabox object storage with another cloud provider in RcloneView" class="img-large img-center" />

El modo de simulación (Dry Run) muestra exactamente lo que se copiará o eliminará antes de que ocurra nada, la forma más segura de verificar el alcance antes de mover datos entre dos proveedores con características de precio y recuperación diferentes. La vista de comparación (Compare) va más allá, mostrando los archivos que existen solo a la izquierda, solo a la derecha o con tamaños distintos entre Petabox y un segundo remoto antes de confirmar una copia.

## Programar copias de seguridad recurrentes de Petabox

Para una protección continua, guarde su sincronización de Petabox como un trabajo en Job Manager en lugar de ejecutarla manualmente cada vez. Los usuarios con licencia PLUS pueden adjuntar una programación de estilo crontab para que las copias de seguridad hacia o desde Petabox se ejecuten automáticamente, con el historial de trabajos (Job History) registrando el estado, la velocidad de transferencia y el número de archivos de cada ejecución.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Petabox backup job in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abra "New Remote" y seleccione el tipo de almacenamiento compatible con S3 para Petabox.
3. Introduzca su Access Key, Secret Key y el endpoint de Petabox, y luego explore el bucket.
4. Configure un trabajo de sincronización o copia de seguridad y, si lo necesita, adjunte una programación en Job Manager.

Los precios del almacenamiento de objetos de Petabox se combinan bien con la capacidad de RcloneView para mover datos libremente entre este servicio y cualquier otra nube que ya administre.

---

**Guías relacionadas:**

- [Administrar Cloudflare R2 — Sincronice y respalde archivos con RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Administrar almacenamiento Wasabi — Sincronice y respalde archivos con RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Montar buckets de Amazon S3 como unidades locales con RcloneView](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)

<CloudSupportGrid />
