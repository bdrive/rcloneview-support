---
slug: manage-dreamhost-object-storage-rcloneview
title: "Gestiona DreamHost DreamObjects — Sincroniza y Haz Copias de Seguridad de Archivos con RcloneView"
authors:
  - robin
description: "Conecta DreamHost DreamObjects a RcloneView para una gestión visual de buckets compatible con S3, sincronización de archivos y copias de seguridad automatizadas sin escribir un solo comando de CLI."
keywords:
  - DreamHost DreamObjects
  - DreamObjects S3 storage
  - DreamHost cloud backup
  - S3 compatible storage management
  - sync files to DreamObjects
  - DreamHost object storage RcloneView
  - cloud backup web developers
  - S3 cloud storage GUI
  - DreamHost file sync
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

# Gestiona DreamHost DreamObjects — Sincroniza y Haz Copias de Seguridad de Archivos con RcloneView

> DreamHost DreamObjects es un almacenamiento de objetos compatible con S3 rentable—RcloneView te ofrece una forma visual de explorar buckets, sincronizar archivos y programar copias de seguridad sin tocar la línea de comandos.

DreamHost DreamObjects se combina de forma natural con sitios web alojados en DreamHost: almacena copias de seguridad, recursos multimedia y archivos estáticos en hardware redundante detrás de una API compatible con S3. Los equipos que ya alojan en DreamHost pueden ampliar esa inversión hacia copias de seguridad en la nube estructuradas conectando DreamObjects a RcloneView y gestionando todo desde un explorador de archivos de dos paneles. Conecta S3, Azure o Backblaze B2 con acceso completo de lectura/escritura en la licencia GRATUITA, y DreamObjects no es la excepción.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué DreamObjects Merece un Flujo de Trabajo Dedicado

Las agencias web que mantienen docenas de proyectos de clientes acumulan gigabytes de contenido multimedia subido, exportaciones de bases de datos y artefactos de compilación que necesitan copias externas regulares. DreamObjects proporciona ese destino externo sin necesidad de una cuenta en la nube separada de un proveedor que no sabe nada sobre alojamiento web. Almacenar exportaciones nocturnas en DreamObjects junto al sitio en producción significa que, cuando ocurre una migración o una eliminación accidental, la recuperación es cuestión de recuperar los datos de la misma relación con el proveedor, sin tener que lidiar con varios proveedores distintos.

Debido a que DreamObjects es compatible con S3, RcloneView se conecta a él usando el mismo tipo de remoto S3 que utiliza para Amazon S3, Cloudflare R2, Wasabi y docenas de otros almacenes de objetos. Si ya has configurado algún remoto de estilo S3 antes, el proceso de configuración de DreamObjects te resultará inmediatamente familiar.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new DreamHost DreamObjects S3 remote in RcloneView using Access Key and endpoint credentials" class="img-large img-center" />

## Conectando DreamObjects a RcloneView

Abre RcloneView y ve a la pestaña **Remote**, luego haz clic en **New Remote**. Selecciona el tipo de remoto **S3** e introduce tu Access Key ID de DreamObjects, la Secret Access Key y la URL del endpoint del bucket desde el panel de DreamHost. Después de guardar, el nuevo remoto aparece en el Remote Manager y está disponible de inmediato como un panel en el Explorer.

Explorar DreamObjects desde el Explorer se siente como navegar por una unidad local: los nombres de archivo, tamaños y fechas de modificación son todos visibles. Puedes crear carpetas, subir archivos arrastrándolos desde tu panel local, eliminar objetos con un clic derecho y generar enlaces públicos para los objetos que necesiten compartirse. No hay necesidad de iniciar sesión en el panel web de DreamHost cada vez que necesites inspeccionar o mover archivos.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files from a local folder into a DreamObjects bucket using RcloneView drag-and-drop upload" class="img-large img-center" />

## Sincronización y Copias de Seguridad en DreamObjects

Para copias de seguridad recurrentes, crea un trabajo de Sync desde el asistente de la pestaña **Home**. Selecciona una carpeta de proyecto local u otro remoto en la nube como origen, y la ruta de tu bucket de DreamObjects como destino. Antes de confirmar, activa **Dry Run** para previsualizar cada archivo que se transferirá—especialmente útil al sincronizar una gran biblioteca multimedia por primera vez, ya que la vista previa detecta archivos de tamaño excesivo o problemas de nomenclatura sin mover ningún dato.

Una vez satisfecho, guarda el trabajo en el Job Manager y ejecútalo a demanda. Los usuarios con licencia PLUS pueden asociar una programación de tipo cron para que las copias de seguridad de DreamObjects se ejecuten automáticamente cada noche. La pestaña **Job History** registra cada ejecución con el número de archivos, la velocidad de transferencia, el tamaño total y el estado final, proporcionando un registro de auditoría útil para informes a clientes o revisiones de cumplimiento.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to a DreamHost DreamObjects bucket from the RcloneView Job Manager" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history tab in RcloneView showing completed DreamObjects backup transfer records" class="img-large img-center" />

## Primeros Pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ve a **Remote** > **New Remote**, elige **S3** e introduce tu Access Key, Secret Key y endpoint de DreamObjects desde el panel de DreamHost.
3. Abre el nuevo remoto en un panel del Explorer y arrastra archivos para subirlos directamente.
4. Crea un trabajo de Sync en la pestaña **Home**, ejecuta primero un Dry Run, y luego ejecútalo y revisa los resultados en **Job History**.

Las copias de seguridad consistentes de DreamObjects protegen los proyectos web contra eliminaciones accidentales, migraciones de alojamiento y eventos de pérdida de datos—sin requerir experiencia en CLI ni una configuración de monitoreo separada.

---

**Guías Relacionadas:**

- [Gestiona la Sincronización en la Nube de Cloudflare R2 con RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Gestiona Amazon S3 — Sincronización y Copia de Seguridad en la Nube con RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Gestiona la Sincronización y Copia de Seguridad en la Nube de Wasabi con RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
