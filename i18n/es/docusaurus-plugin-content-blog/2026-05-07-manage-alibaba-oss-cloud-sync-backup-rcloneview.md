---
slug: manage-alibaba-oss-cloud-sync-backup-rcloneview
title: "Administra Alibaba Cloud OSS — Sincroniza y respalda archivos con RcloneView"
authors:
  - tayson
description: "Aprende a conectar Alibaba Cloud OSS a RcloneView, explorar buckets y ejecutar trabajos de sincronización y copia de seguridad para cargas de trabajo de Asia-Pacífico y la región de China."
keywords:
  - Alibaba Cloud OSS
  - RcloneView
  - almacenamiento compatible con S3
  - sincronización en la nube
  - copia de seguridad en la nube
  - almacenamiento de objetos
  - nube de Asia-Pacífico
  - rclone OSS
tags:
  - RcloneView
  - alibaba-cloud
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Administra Alibaba Cloud OSS — Sincroniza y respalda archivos con RcloneView

> Alibaba Cloud OSS es una plataforma líder de almacenamiento de objetos para cargas de trabajo en Asia-Pacífico, y RcloneView facilita explorar, sincronizar y respaldar tus buckets sin tocar la línea de comandos.

Alibaba Cloud Object Storage Service (OSS) es la plataforma de almacenamiento preferida para equipos con requisitos de residencia de datos en China o en toda la región de Asia-Pacífico. Ya sea que estés archivando archivos multimedia grandes, respaldando datos de aplicaciones o sincronizando conjuntos de datos entre regiones, RcloneView ofrece una interfaz gráfica limpia sobre el soporte de OSS de rclone, probado en batalla. No se necesita una instalación separada de rclone: RcloneView incluye un binario de rclone integrado.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Agregar Alibaba Cloud OSS como remoto

Abre RcloneView y haz clic en el botón **New Remote** en la barra lateral. En la lista de proveedores, selecciona **S3 Compatible Storage** y luego elige **Alibaba OSS** como proveedor (alternativamente, selecciona el tipo dedicado **Alibaba Cloud Object Storage** si aparece). Necesitarás tu **Access Key ID**, tu **Access Key Secret** y el endpoint de OSS correcto para tu región, por ejemplo, `oss-cn-hangzhou.aliyuncs.com` para el este de China o `oss-ap-southeast-1.aliyuncs.com` para Singapur.

Una vez ingresadas las credenciales, RcloneView valida la conexión y lista tus buckets de inmediato. Si tu bucket está en una región específica, asegúrate de que el endpoint coincida: una discrepancia es la causa más común de fallos de conexión con OSS.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Alibaba Cloud OSS remote in RcloneView" class="img-large img-center" />

## Explorar buckets y transferir archivos

Después de agregar el remoto, el remoto de Alibaba OSS aparece en el explorador de archivos de doble panel. Puedes explorar carpetas y objetos igual que en un sistema de archivos local. Arrastra y suelta archivos desde tu unidad local a un bucket de OSS, o mueve objetos entre prefijos de OSS directamente. RcloneView muestra el progreso de la transferencia en vivo, para que siempre sepas el estado de las cargas grandes.

Para equipos con múltiples buckets de OSS en distintas regiones, puedes agregar cada endpoint regional como un remoto separado y administrarlos todos desde una sola ventana de RcloneView. Esto hace que el movimiento de datos entre regiones sea sencillo, sin tener que manejar múltiples sesiones de línea de comandos.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud file transfer using RcloneView" class="img-large img-center" />

## Ejecutar trabajos de sincronización y copia de seguridad

El verdadero poder de RcloneView para flujos de trabajo de OSS es el sistema de trabajos de sincronización. Usa el **Job Wizard** para crear un trabajo de sincronización desde cualquier carpeta local o remoto en la nube hacia tu bucket de OSS en cuatro pasos guiados. Una opción de **dry run** te permite previsualizar qué archivos se transferirían antes de confirmar, algo esencial cuando trabajas con buckets de OSS grandes.

La función **1:N sync** de RcloneView te permite sincronizar una fuente hacia múltiples buckets de OSS simultáneamente, lo cual es útil para mantener copias redundantes entre regiones de OSS. El **Job Manager** rastrea todos los trabajos en ejecución, mientras que el **Job History** te ofrece un registro completo de las transferencias pasadas para auditoría. Los titulares de licencia PLUS pueden programar estos trabajos con un temporizador recurrente para que las copias de seguridad se ejecuten automáticamente sin intervención manual.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a sync job for Alibaba OSS in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Haz clic en **New Remote**, selecciona **S3 Compatible Storage** y elige **Alibaba OSS** como proveedor.
3. Ingresa tu **Access Key ID**, tu **Access Key Secret** y el endpoint regional de OSS.
4. Explora tus buckets en el explorador de doble panel y arrastra archivos para transferirlos.
5. Abre **Job Manager**, usa el asistente para crear un trabajo de sincronización y ejecuta un dry run antes de tu primera sincronización real.

Alibaba Cloud OSS encaja de forma natural en cualquier flujo de trabajo de datos de Asia-Pacífico, y RcloneView elimina la barrera de la línea de comandos para que todo tu equipo pueda administrar el almacenamiento con confianza.

---

**Guías relacionadas:**

- [Administra Amazon S3 — Sincronización y copia de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Administra Cloudflare R2 — Sincronización en la nube con RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Centraliza S3, Wasabi y R2 con RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
