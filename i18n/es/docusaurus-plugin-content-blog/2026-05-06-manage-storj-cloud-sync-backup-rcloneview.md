---
slug: manage-storj-cloud-sync-backup-rcloneview
title: "Gestiona el almacenamiento Storj — Sincroniza y haz copias de seguridad de archivos con RcloneView"
authors:
  - tayson
description: "Aprende a gestionar el almacenamiento en la nube descentralizado Storj con RcloneView. Sincroniza, haz copias de seguridad y transfiere archivos en Storj usando una GUI sencilla, sin necesidad de la CLI."
keywords:
  - gestión de almacenamiento en la nube Storj
  - sincronización de Storj con RcloneView
  - copia de seguridad de archivos en Storj
  - GUI de almacenamiento en la nube descentralizado
  - transferencia de archivos en Storj
  - GUI de rclone para Storj
  - herramienta de sincronización y copia de seguridad de Storj
  - gestionar Storj con RcloneView
  - cliente de escritorio para Storj
  - GUI compatible con S3 para Storj
tags:
  - RcloneView
  - storj
  - cloud-storage
  - cloud-sync
  - backup
  - decentralized-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el almacenamiento Storj — Sincroniza y haz copias de seguridad de archivos con RcloneView

> RcloneView te ofrece una GUI completa para sincronizar, hacer copias de seguridad y gestionar tu almacenamiento en la nube descentralizado de Storj sin escribir un solo comando.

Storj es una plataforma de almacenamiento de objetos descentralizada que distribuye fragmentos de archivos cifrados en una red global de nodos. Los equipos que gestionan datos sensibles — historiales médicos, archivos financieros o recursos creativos — eligen Storj por su cifrado integrado y su resiliencia. Con RcloneView, puedes conectar tus buckets de Storj y gestionarlos visualmente junto con todas tus demás cuentas en la nube.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta Storj a RcloneView

RcloneView admite Storj mediante dos métodos de conexión: el backend nativo de Storj y el endpoint compatible con S3. Para la mayoría de los usuarios, la vía compatible con S3 es la más sencilla — generas credenciales S3 en la consola de Storj (Access Key ID, Secret Access Key y la URL del endpoint regional) y luego añades un nuevo remoto en RcloneView seleccionando Amazon S3 como tipo de proveedor e introduciendo esas credenciales.

El backend nativo de Storj requiere un token de Access Grant, que puedes crear en la interfaz web de Storj. Añade un nuevo remoto, elige Storj como proveedor y pega tu Access Grant. Cualquiera de los dos métodos toma menos de dos minutos, y RcloneView almacena tus credenciales de forma segura mediante almacenamiento local cifrado.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Storj remote in RcloneView" class="img-large img-center" />

Una vez conectado, tus buckets de Storj aparecen en el explorador de archivos junto con tus otros remotos. Explora carpetas, previsualiza miniaturas y gestiona archivos exactamente igual que con cualquier otro proveedor en la nube.

## Sincroniza y haz copias de seguridad de archivos en Storj

El asistente de sincronización de 4 pasos de RcloneView facilita la configuración de copias de seguridad recurrentes en Storj. Selecciona una carpeta local o un remoto en la nube como origen, elige tu bucket o subcarpeta de Storj como destino, dale un nombre al trabajo y elige el modo de sincronización o copia. Para un estudio de fotografía que archiva 2 TB de archivos RAW, un trabajo de sincronización nocturno mantiene el bucket de Storj actualizado sin intervención manual.

Activa la opción **checksum** en la configuración avanzada para verificar la integridad de los datos — el almacenamiento con codificación de borrado de Storj es resiliente, pero verificar las subidas mediante comparación de hash aporta una capa adicional de confianza. Establece el número de reintentos en 3 (el valor predeterminado) para manejar con elegancia las interrupciones de red transitorias.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Storj in RcloneView" class="img-large img-center" />

## Programa copias de seguridad automatizadas en Storj (PLUS)

Con una licencia PLUS, puedes programar trabajos de copia de seguridad en Storj mediante un programador estilo crontab. Configura una copia de seguridad diaria a las 2 AM, ejecuciones de archivado semanales o cualquier cadencia personalizada. La función **Simulate schedule** de RcloneView muestra una vista previa de los próximos horarios de ejecución antes de confirmar.

El historial de trabajos registra cada ejecución — hora de inicio, duración, bytes transferidos y estado de finalización — para que tengas un registro de auditoría claro de cada archivo enviado a Storj.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Storj backup jobs in RcloneView" class="img-large img-center" />

## Transfiere entre Storj y otras nubes

Storj funciona bien como copia secundaria externa de datos ya presentes en Google Drive o Dropbox. El explorador de doble panel de RcloneView te permite arrastrar archivos directamente entre remotos. Para migraciones a gran escala, usa un trabajo de sincronización con el modo **dry run** para previsualizar lo que se transferirá antes de confirmar.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from another remote to Storj" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ve a la pestaña Remote > New Remote, y selecciona el proveedor Storj o compatible con S3.
3. Introduce tu Access Grant de Storj o tus credenciales compatibles con S3 y guarda.
4. Abre el explorador de archivos para navegar por tus buckets de Storj y crear trabajos de sincronización.

La arquitectura descentralizada de Storj lo convierte en un excelente destino de copia de seguridad externa, y RcloneView hace que gestionarlo sea tan fácil como con cualquier proveedor en la nube convencional.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento Amazon S3 — Sincroniza y haz copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Migra de Dropbox a Storj — Transfiere archivos con RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-storj-rcloneview)
- [Transfiere entre Storj y Google Drive con RcloneView](https://rcloneview.com/support/blog/transfer-storj-and-google-drive-with-rcloneview)

<CloudSupportGrid />
