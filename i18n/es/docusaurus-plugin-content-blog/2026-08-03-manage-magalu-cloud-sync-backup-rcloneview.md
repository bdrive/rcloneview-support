---
slug: manage-magalu-cloud-sync-backup-rcloneview
title: "Gestiona el almacenamiento en la nube de Magalu — Sincroniza y respalda archivos con RcloneView"
authors:
  - jay
description: "Conecta el almacenamiento de objetos de Magalu Cloud a RcloneView para gestión de archivos por arrastrar y soltar, sincronización programada y flujos de copia de seguridad entre nubes."
keywords:
  - almacenamiento en la nube magalu
  - almacenamiento de objetos magalu
  - gui de almacenamiento compatible con s3
  - rcloneview magalu
  - copia de seguridad de almacenamiento de objetos
  - gui de sincronización en la nube
  - explorador de archivos multi-nube
  - gestor compatible con s3
  - copia de seguridad de magalu
  - almacenamiento en la nube de brasil
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el almacenamiento en la nube de Magalu — Sincroniza y respalda archivos con RcloneView

> Explora, sincroniza y respalda el almacenamiento de objetos de Magalu Cloud desde la misma ventana que usas para gestionar el resto de tus nubes.

Magalu Cloud es un servicio de almacenamiento de objetos compatible con S3, lo que significa que funciona con cualquier herramienta construida sobre el protocolo S3, incluido rclone. RcloneView envuelve ese soporte de protocolo en un explorador de archivos visual, de modo que los equipos que ya usan buckets de Magalu para datos de aplicaciones o copias de seguridad no necesitan memorizar los parámetros de `s3cmd` ni alternar entre una pestaña de consola aparte solo para mover archivos. Conecta un bucket una vez y se comportará como cualquier otro remoto de la aplicación.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Magalu Cloud como remoto

Como Magalu Cloud habla el protocolo S3, RcloneView se conecta a él de la misma manera que a Amazon S3, Wasabi o Backblaze B2: mediante el tipo de remoto compatible con S3. Abre **New Remote**, elige la opción compatible con S3 y proporciona tu Access Key, Secret Key y la URL del endpoint de Magalu Cloud para tu región. RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux, de modo que un bucket de Magalu queda justo al lado de tus conexiones existentes de Google Drive, OneDrive o NAS locales.

<img src="/support/images/en/blog/new-remote.png" alt="Añadiendo un nuevo remoto compatible con S3 de Magalu Cloud en RcloneView" class="img-large img-center" />

Una vez guardado el remoto, aparece como una pestaña en el panel Explorer, con navegación completa por árbol de carpetas, vistas previas en miniatura para buckets con muchas imágenes y las mismas operaciones de clic derecho (copiar, cortar, renombrar, eliminar) disponibles para archivos locales.

## Sincronizar buckets de Magalu con otro almacenamiento

El almacenamiento de objetos rara vez existe de forma aislada: la mayoría de los equipos lo combina con otra nube por redundancia o con infraestructura local para staging. El asistente de Sync de RcloneView te permite establecer un bucket de Magalu como origen o destino, elegir dirección de sincronización unidireccional o bidireccional (Beta), y aplicar filtros como tamaño máximo de archivo o antigüedad de archivo antes de que se transfiera nada.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configurando un trabajo de sincronización entre un bucket de Magalu Cloud y otro remoto" class="img-large img-center" />

Ejecuta primero un **Dry Run** para previsualizar exactamente qué objetos se copiarán o eliminarán, una comprobación útil antes de reflejar por primera vez un bucket de producción en un destino de copia de seguridad.

## Automatizar copias de seguridad recurrentes

Para buckets que cambian a diario, las transferencias manuales no escalan. Guarda tu configuración de sincronización de Magalu como un Job y usa después el paso de programación (licencia PLUS) para definir una recurrencia estilo crontab: nocturna, semanal o con un intervalo personalizado.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Programando un trabajo de copia de seguridad recurrente para un bucket de Magalu Cloud" class="img-large img-center" />

Cada ejecución queda registrada en Job History con estado, velocidad de transferencia y número de archivos, de modo que puedes confirmar que una copia de seguridad programada realmente se completó en lugar de asumirlo.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Genera una Access Key y Secret Key para tu cuenta de Magalu Cloud y anota el endpoint de tu región.
3. Añade Magalu Cloud como nuevo remoto compatible con S3 en RcloneView.
4. Configura un trabajo de sincronización, con un Dry Run primero, para conectarlo a tu destino de copia de seguridad o almacenamiento secundario.

Tratar un bucket compatible con S3 como una carpeta más en tu gestor de archivos elimina la fricción que suele mantener el almacenamiento de objetos aislado del resto de tu flujo de trabajo.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento en la nube de Wasabi con RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Gestiona el almacenamiento de Cloudflare R2 con RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Gestiona el almacenamiento en la nube de IDrive e2 con RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
