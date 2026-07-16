---
slug: sync-google-drive-to-wasabi-archive-rcloneview
title: "Sincroniza Google Drive con Wasabi — Archivo y copia de seguridad asequibles con RcloneView"
authors:
  - tayson
description: "Archiva tu Google Drive en el almacenamiento en la nube caliente de Wasabi para copias de seguridad fiables a una fracción del costo de AWS S3 usando RcloneView."
keywords:
  - copia de seguridad de Google Drive
  - almacenamiento en la nube Wasabi
  - archivo en la nube asequible
  - copia de seguridad en Wasabi
  - RcloneView
  - sincronización de nube a nube
  - archivado de datos
  - copia de seguridad rentable
  - archivo de Google Drive
  - almacenamiento caliente
tags:
  - google-drive
  - wasabi
  - archive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincroniza Google Drive con Wasabi — Archivo y copia de seguridad asequibles con RcloneView

> Google Drive es conveniente para la colaboración activa, pero los costos de almacenamiento a largo plazo se acumulan. Wasabi ofrece almacenamiento caliente compatible con S3 a la mitad del precio, perfecto para archivar tu Google Drive con RcloneView.

Google Drive es ideal para la colaboración en equipo, pero el almacenamiento ilimitado conlleva una complejidad de retención. Wasabi ofrece almacenamiento en la nube caliente con precios predecibles y sin comisiones de salida. RcloneView automatiza el proceso de archivar proyectos completados, archivos antiguos y datos fríos en Wasabi.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta Google Drive y Wasabi

Configurar ambos remotos en RcloneView es rápido y seguro.

**Google Drive:**
1. Haz clic en **Add Remote** → Selecciona **Google Drive**
2. Autoriza RcloneView mediante OAuth
3. Concede permisos de acceso a carpetas/archivos
4. Verifica la conexión

**Wasabi:**
1. Haz clic en **Add Remote** → Selecciona **Wasabi**
2. Introduce tu Access Key y Secret Key de Wasabi
3. Selecciona tu bucket y región
4. Prueba la conectividad

![New Remote Setup](/images/en/blog/new-remote.png)

## Archiva Google Drive en el almacenamiento caliente de Wasabi

Crea un trabajo de sincronización único o recurrente para mover tus archivos. El almacenamiento caliente de Wasabi es accesible de inmediato, sin demoras de restauración como en glacier.

**Escenarios de archivo:**
- **Finalización de proyecto**: Archiva los entregables del cliente al finalizar el proyecto
- **Optimización de almacenamiento**: Mueve archivos con más de 90 días a Wasabi
- **Copia de seguridad de cumplimiento**: Mantén copias buscables de registros comerciales

![Wasabi Transfer Setup](/images/en/tutorials/wasabi-drag-and-drop.png)

## Supervisa el rendimiento de la transferencia en tiempo real

RcloneView muestra métricas en vivo de tu trabajo de archivo: velocidad de transferencia, archivos procesados y duración restante.

![Real-Time Transfer Monitoring](/images/en/tutorials/wasabi-real-time-monitoring-transferring.png)

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Crea una cuenta de Wasabi en [wasabi.com](https://wasabi.com/).
3. Añade Google Drive como remoto usando autenticación OAuth.
4. Configura tu bucket de Wasabi como remoto.
5. Crea un trabajo de sincronización o copia y comienza a archivar.
6. Programa copias de seguridad regulares para mantener los archivos actualizados.

Archiva de forma asequible, recupera al instante: Wasabi y RcloneView lo hacen simple.

---

**Guías relacionadas:**

- [Sincroniza Google Drive con Backblaze B2 con RcloneView](https://rcloneview.com/support/blog/sync-google-drive-to-backblaze-b2-rcloneview)
- [Archiva Google Drive en S3 Glacier con RcloneView](https://rcloneview.com/support/blog/archive-google-drive-to-s3-glacier-rcloneview)
- [Comisiones de salida de almacenamiento en la nube — Cómo evitarlas con RcloneView](https://rcloneview.com/support/blog/cloud-storage-egress-fees-avoid-rcloneview)

<CloudSupportGrid />
