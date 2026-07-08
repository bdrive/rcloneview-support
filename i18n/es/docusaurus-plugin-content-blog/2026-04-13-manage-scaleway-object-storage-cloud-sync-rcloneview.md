---
slug: manage-scaleway-object-storage-cloud-sync-rcloneview
title: "Gestiona Scaleway Object Storage — Sincronización en la nube y copia de seguridad con RcloneView"
authors:
  - tayson
description: "Conecta Scaleway Object Storage a RcloneView usando credenciales compatibles con S3 y sincroniza tus buckets europeos en la nube con cualquier otro proveedor rápidamente."
keywords:
  - Scaleway object storage RcloneView
  - Scaleway S3 compatible sync
  - Scaleway cloud backup
  - Scaleway rclone GUI
  - European cloud storage sync
  - Scaleway bucket transfer
  - S3 compatible cloud sync
  - Scaleway rcloneview setup
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona Scaleway Object Storage — Sincronización en la nube y copia de seguridad con RcloneView

> Scaleway Object Storage es un servicio europeo en la nube compatible con S3 — conéctalo a RcloneView en minutos usando una Access Key, Secret Key y una URL de endpoint.

Scaleway es un proveedor de nube francés que ofrece almacenamiento de objetos compatible con S3 en varias regiones europeas. Es una excelente opción para equipos que necesitan almacenamiento conforme al RGPD con precios competitivos. RcloneView admite cualquier proveedor compatible con S3, lo que significa que puedes conectar Scaleway, explorar tus buckets y configurar trabajos de sincronización junto a todos tus demás remotos en la nube, sin necesidad de la línea de comandos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Obtener tus credenciales de Scaleway

Antes de conectarte en RcloneView, necesitas una **Access Key** y una **Secret Key** de la consola de Scaleway. Inicia sesión en console.scaleway.com, ve a **Credentials** dentro de tu proyecto u organización, y genera una nueva clave de API. Anota la clave secreta — solo se muestra una vez. También anota el endpoint de tu región, que sigue el formato `s3.{region}.scw.cloud` (por ejemplo, `s3.nl-ams.scw.cloud` para Ámsterdam o `s3.fr-par.scw.cloud` para París).

Estos tres valores — Access Key, Secret Key y endpoint — son todo lo que necesitas para configurar Scaleway en RcloneView.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Scaleway S3-compatible remote in RcloneView" class="img-large img-center" />

## Conectar Scaleway a RcloneView

Abre RcloneView y ve a **Remote Manager**. Haz clic en **New Remote** y selecciona **S3 Compatible** en la lista de proveedores. En el formulario de configuración, introduce:

- **Provider**: Other (S3-compatible)
- **Access Key ID**: tu Access Key de Scaleway
- **Secret Access Key**: tu Secret Key de Scaleway
- **Endpoint**: el endpoint de tu región (por ejemplo, `s3.nl-ams.scw.cloud`)

Deja el campo de región en blanco o introduce el código de región de Scaleway si se solicita. Guarda el remoto y aparecerá en tu Remote Manager. Haz clic en **Open** para explorar tus buckets de Scaleway en el File Explorer.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Scaleway transfer in real time" class="img-large img-center" />

## Explorar buckets y transferir archivos

El File Explorer muestra tus buckets de Scaleway en el nivel superior. Navega dentro de cualquier bucket para ver sus objetos y prefijos de carpetas. Puedes seleccionar archivos y directorios, y luego copiarlos o moverlos a otro remoto abierto en el segundo panel, ya sea AWS S3, Backblaze B2, o un directorio local.

Para grandes conjuntos de datos, haz clic derecho en una carpeta y usa **Copy to** o **Move to** para iniciar una transferencia masiva. RcloneView muestra el progreso en tiempo real con la velocidad de transferencia y el tiempo estimado de finalización.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring files between Scaleway and another cloud" class="img-large img-center" />

## Configurar trabajos de sincronización programados

Para copias de seguridad automatizadas o flujos de datos regulares entre Scaleway y otros proveedores, el sistema de **Job** se encarga de ello de manera confiable. Ve a **Jobs**, haz clic en **New Job**, y configura Scaleway como origen o destino. En las opciones avanzadas del trabajo, puedes establecer límites de ancho de banda, controlar la concurrencia de transferencias y habilitar la verificación de checksum para confirmar la integridad de los datos.

Con una licencia PLUS, puedes programar trabajos usando sintaxis de tipo cron — por ejemplo, sincronizar desde otra nube a Scaleway cada noche a las 2 AM. Los resultados de los trabajos se registran en **Job History**, lo que te ofrece una vista clara del número de transferencias y de cualquier error por ejecución.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Reúne tu Access Key, Secret Key y el endpoint regional de Scaleway desde la consola de Scaleway.
3. Abre **Remote Manager**, haz clic en **New Remote**, selecciona **S3 Compatible**, e introduce tus credenciales.
4. Explora tus buckets y crea un trabajo de sincronización para automatizar las copias de seguridad hacia o desde Scaleway.

La infraestructura europea de Scaleway combina muy bien con el sistema de trabajos multi-nube de RcloneView para flujos de trabajo conscientes del RGPD.

---

**Guías relacionadas:**

- [Sincroniza Google Cloud Storage con Wasabi usando RcloneView](https://rcloneview.com/support/blog/sync-google-cloud-storage-to-wasabi-rcloneview)
- [Gestiona la sincronización y copia de seguridad en la nube de IDrive E2](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [Migraciones en la nube verificadas por checksum con RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
