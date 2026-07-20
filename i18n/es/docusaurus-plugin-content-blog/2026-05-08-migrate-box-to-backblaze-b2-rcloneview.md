---
slug: migrate-box-to-backblaze-b2-rcloneview
title: "Migra Box a Backblaze B2 — Transfiere archivos con RcloneView"
authors:
  - steve
description: "Traslada tu almacenamiento en la nube de Box a Backblaze B2 usando RcloneView. Una guía completa para migrar archivos, verificar transferencias y automatizar futuras copias de seguridad."
keywords:
  - Box to Backblaze B2 migration
  - migrate Box Backblaze B2 RcloneView
  - Box Backblaze B2 file transfer
  - switch Box to B2 storage
  - cloud storage migration Box
  - Box backup Backblaze B2
  - Box to S3 migration
  - rclone Box B2 GUI
tags:
  - RcloneView
  - box
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra Box a Backblaze B2 — Transfiere archivos con RcloneView

> Traslada todo tu espacio de trabajo de Box a Backblaze B2 object storage —o crea una copia de seguridad secundaria— usando el flujo de migración basado en GUI de RcloneView.

Box es una plataforma de colaboración empresarial muy utilizada, pero con fines de archivo y copia de seguridad, sus costos de almacenamiento pueden ser considerables en comparación con un almacenamiento de objetos diseñado específicamente para ello, como Backblaze B2. Los equipos que buscan trasladar datos de archivo desde Box, o crear una copia de seguridad del contenido de Box en un nivel más rentable, pueden usar RcloneView para migrar directamente, sin necesidad de descargar nada localmente primero.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Box y Backblaze B2

Para Box, ve a **Remote tab → New Remote**, selecciona Box y completa la autenticación OAuth con tu cuenta de Box. Los usuarios de Box for Business también deben configurar `box_sub_type = enterprise` en la configuración del remoto para tener acceso completo al espacio de trabajo. Para Backblaze B2, introduce tu Application Key ID y Application Key durante la configuración del remoto.

Una vez configurados ambos remotos, coloca Box en el panel del explorador izquierdo y B2 en el derecho. Navega hasta las carpetas específicas de Box que deseas migrar y verifica que el bucket de B2 de destino esté correctamente nombrado y sea accesible antes de iniciar cualquier transferencia.

<img src="/support/images/en/blog/new-remote.png" alt="Setting up Box and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Configurar el trabajo de migración

Usa el botón **Sync** en la pestaña Home para crear el trabajo de migración. Establece la carpeta de Box como origen y el bucket de B2 (o una subcarpeta dentro de él) como destino. En el Paso 2, activa **Checksum** para verificar la integridad de cada archivo durante la transferencia. Configura el número de reintentos en 5 o más: la API de B2 puede limitar ocasionalmente las solicitudes durante transferencias masivas grandes, y los reintentos automáticos garantizan que la migración se complete sin intervención manual.

Antes de la migración real, ejecuta un **Dry Run** para ver la lista completa de archivos que se transferirán. Esto es especialmente importante en migraciones de Box, donde los archivos compartidos o las Box Notes (formato `.boxnote`) podrían no transferirse como se espera: la salida del dry run resalta cualquier archivo que falle antes de que afecte a tus datos de producción.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box to Backblaze B2 migration job in RcloneView" class="img-large img-center" />

## Gestionar Box Notes y tipos de archivo especiales

Las Box Notes son un formato propietario (`.boxnote`) que puede no renderizarse correctamente fuera de Box. Antes de migrar, exporta cualquier Box Note que necesites conservar en un formato estándar (como `.docx` o `.pdf`) desde la interfaz web de Box. RcloneView migrará los archivos `.boxnote` como datos binarios, pero no serán editables en B2 ni en ningún cliente que no sea de Box.

Para carpetas compartidas y contenido de colaboradores externos, verifica que tu cuenta de Box tenga acceso a todo el contenido que planeas migrar. La **pestaña Log** en RcloneView mostrará errores de permisos para cualquier archivo al que tu cuenta no pueda acceder.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Box to B2 migration progress in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega Box (OAuth) y Backblaze B2 (Application Key) como remotos.
3. Ejecuta un dry run para previsualizar la migración antes de confirmarla.
4. Ejecuta la migración real con la verificación de checksum activada.

Migrar de Box a Backblaze B2 con RcloneView es un proceso limpio y verificable que te ofrece almacenamiento duradero y rentable para tu contenido archivado.

---

**Guías relacionadas:**

- [Migra Box a AWS S3 con RcloneView](https://rcloneview.com/support/blog/migrate-box-to-aws-s3-rcloneview)
- [Gestiona el almacenamiento en la nube de Backblaze B2 con RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Archivo de Box a S3 Glacier con RcloneView](https://rcloneview.com/support/blog/box-to-s3-glacier-archive-rcloneview)

<CloudSupportGrid />
