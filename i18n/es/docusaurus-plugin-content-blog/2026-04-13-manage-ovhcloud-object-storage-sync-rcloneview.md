---
slug: manage-ovhcloud-object-storage-sync-rcloneview
title: "Gestiona OVHcloud Object Storage — Sincronización y copia de seguridad con RcloneView"
authors:
  - tayson
description: "Conecta OVHcloud Object Storage a RcloneView usando credenciales compatibles con S3 y sincroniza tus buckets europeos conformes con el RGPD con cualquier proveedor en la nube."
keywords:
  - OVHcloud object storage RcloneView
  - OVHcloud S3 sync
  - OVHcloud backup rclone
  - OVHcloud cloud storage GUI
  - European GDPR cloud sync
  - OVHcloud bucket transfer
  - S3-compatible object storage
  - OVHcloud rcloneview setup
tags:
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona OVHcloud Object Storage — Sincronización y copia de seguridad con RcloneView

> OVHcloud Object Storage es un servicio compatible con S3, conforme con el RGPD y alojado en Europa — RcloneView lo conecta con todo tu ecosistema en la nube usando Access Key, Secret Key y endpoint.

OVHcloud es uno de los mayores proveedores en la nube de Europa, y ofrece almacenamiento de objetos en varias regiones de Francia, Alemania, el Reino Unido y más. Su interfaz compatible con S3 permite que RcloneView se conecte a él exactamente igual que a AWS S3 — proporcionas credenciales y un endpoint, y ya puedes explorar, transferir y automatizar copias de seguridad. Para organizaciones con requisitos de residencia de datos en Europa, la combinación de OVHcloud y RcloneView es una solución práctica y auditable.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Obtener tus credenciales S3 de OVHcloud

OVHcloud ofrece acceso compatible con S3 a través de su servicio **High Performance Object Storage**. Para obtener las credenciales, inicia sesión en el Panel de Control de OVHcloud, abre tu proyecto y ve a **Object Storage**. En **S3 users**, crea un nuevo usuario y descarga el Access Key y el Secret Key. Anota el endpoint de tu región — por ejemplo, `s3.rbx.io.cloud.ovh.net` para Roubaix o `s3.gra.io.cloud.ovh.net` para Gravelines.

Ten a mano la URL del endpoint; identifica la región en la que residen tus buckets y debe coincidir con lo que introduzcas en RcloneView.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring OVHcloud Object Storage as a new remote in RcloneView" class="img-large img-center" />

## Conectar OVHcloud a RcloneView

Abre RcloneView, ve a **Remote Manager** y haz clic en **New Remote**. Selecciona **S3 Compatible** en la lista de proveedores y completa los siguientes campos:

- **Access Key ID**: la clave de la página de usuarios S3 de OVHcloud
- **Secret Access Key**: el secreto correspondiente
- **Endpoint**: tu endpoint regional (por ejemplo, `s3.gra.io.cloud.ovh.net`)

Guarda el remoto y ábrelo en el Explorador de Archivos. Tus buckets de OVHcloud aparecen en el nivel raíz. Navega dentro de cualquier bucket para ver su contenido organizado por prefijo.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer between OVHcloud and another provider" class="img-large img-center" />

## Sincronizar OVHcloud con otros proveedores en la nube

Abre un segundo panel en RcloneView apuntando a cualquier otro remoto — Google Drive, Backblaze B2, otro proveedor compatible con S3, o una carpeta local. Arrastra y suelta archivos entre paneles, o haz clic derecho para copiar directorios completos. Para migraciones de buckets grandes, el sistema de **Job** es más fiable: configura el origen y el destino, establece la concurrencia y los límites de ancho de banda en el paso 2, y opcionalmente activa la verificación de checksum.

La API S3 de OVHcloud admite cargas multiparte para objetos grandes, y RcloneView aprovecha esto automáticamente cuando detecta archivos por encima de un cierto umbral de tamaño. Esto garantiza que los archivos de vídeo grandes, los volcados de bases de datos o los archivos comprimidos se transfieran de forma fiable sin alcanzar los límites de tamaño por solicitud individual.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of OVHcloud transfer progress" class="img-large img-center" />

## Programar copias de seguridad periódicas

Con una licencia PLUS, puedes programar trabajos de sincronización de OVHcloud para que se ejecuten automáticamente. Ve a **Jobs**, configura el trabajo y, en el paso 3, establece una programación cron — por ejemplo, `0 3 * * *` para sincronizar cada noche a las 3 AM. Esto es especialmente útil para flujos de copias de seguridad donde los datos de producción almacenados en otro lugar necesitan una copia secundaria en OVHcloud por cumplimiento de la residencia de datos europea.

**Job History** registra cada ejecución: archivos transferidos, volumen de datos, velocidad de transferencia y cualquier error. Si un trabajo nocturno falla, el registro muestra exactamente qué archivos causaron problemas para que puedas investigar rápidamente.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Crea un usuario S3 en el Panel de Control de OVHcloud y anota el Access Key, el Secret Key y el endpoint regional.
3. Abre **Remote Manager** en RcloneView, haz clic en **New Remote**, selecciona **S3 Compatible** e introduce tus credenciales.
4. Explora tus buckets y configura trabajos de sincronización para integrar OVHcloud en tu estrategia de nube más amplia.

La infraestructura europea de OVHcloud y el flexible sistema de trabajos de RcloneView forman una combinación fiable para flujos de trabajo multi-nube conscientes del RGPD.

---

**Guías relacionadas:**

- [Gestiona Scaleway Object Storage — Sincronización en la nube con RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Gestiona la sincronización y copia de seguridad en la nube con IDrive E2](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [Automatiza copias de seguridad diarias en la nube con RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
