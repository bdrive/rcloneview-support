---
slug: manage-bunny-cdn-storage-sync-rcloneview
title: "Gestiona el almacenamiento de Bunny CDN — Sincroniza y despliega contenido con RcloneView"
authors:
  - tayson
description: "Bunny.net ofrece almacenamiento CDN rápido y económico. Usa RcloneView para gestionar las zonas de almacenamiento de Bunny, sincronizar contenido desde otras nubes y automatizar los despliegues en la CDN."
keywords:
  - bunny cdn storage
  - bunny net rclone
  - bunny storage sync
  - bunny cdn file manager
  - bunny storage gui
  - cdn storage management
  - bunny net sync tool
  - bunny cdn deploy
  - bunny storage backup
  - cdn content sync
tags:
  - RcloneView
  - cloud-storage
  - sync
  - s3-compatible
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el almacenamiento de Bunny CDN — Sincroniza y despliega contenido con RcloneView

> El almacenamiento de Bunny.net es rápido y económico para contenido de CDN. Pero gestionar las zonas de almacenamiento a través del panel web resulta incómodo para operaciones masivas. RcloneView te ofrece un verdadero gestor de archivos para tus recursos de CDN.

Bunny.net se ha convertido en una opción de CDN popular por su rendimiento y precio. Su Edge Storage proporciona zonas de almacenamiento compatibles con S3 que sirven contenido a través de la red CDN. Sin embargo, gestionar archivos mediante la interfaz web de Bunny es lento para cargas masivas, carece de capacidades de sincronización y no tiene programación de tareas. RcloneView se conecta al almacenamiento de Bunny a través de su endpoint FTP o HTTP y ofrece una gestión de archivos completa.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta el almacenamiento de Bunny a RcloneView

<img src="/support/images/en/blog/new-remote.png" alt="Add Bunny CDN remote" class="img-large img-center" />

Agrega tu zona de almacenamiento de Bunny como un remoto FTP usando las credenciales de tu panel de Bunny.net.

## Flujos de trabajo clave

### Desplegar contenido en la CDN

Sube recursos del sitio web, imágenes o contenido multimedia desde tu almacenamiento en la nube principal a Bunny CDN:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Deploy to Bunny CDN" class="img-large img-center" />

### Sincronizar desde el almacenamiento de producción

Mantén tu zona de almacenamiento de CDN sincronizada con tu almacenamiento de recursos de producción en S3 o Google Drive:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Sync to Bunny Storage" class="img-large img-center" />

### Programar despliegues automatizados

Actualiza el contenido de la CDN automáticamente según un horario:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule CDN deployment" class="img-large img-center" />

### Verificar el contenido de la CDN

Compara tu almacenamiento de origen con Bunny CDN para asegurarte de que el contenido desplegado esté actualizado:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify CDN content" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Agrega el almacenamiento de Bunny** como un remoto FTP.
3. **Sincroniza el contenido** desde tu almacenamiento principal.
4. **Programa los despliegues** para actualizaciones automatizadas.

Una CDN rápida merece herramientas de gestión rápidas.

---

**Guías relacionadas:**

- [Sincronizar Vultr Object Storage](https://rcloneview.com/support/blog/sync-vultr-object-storage-s3-google-drive-rcloneview)
- [Crear trabajos de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Programación de trabajos](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
