---
slug: migrate-onedrive-to-amazon-s3-rcloneview
title: "Migra OneDrive a Amazon S3 — Transfiere archivos con RcloneView"
authors:
  - tayson
description: "Migra OneDrive a Amazon S3 con RcloneView — transfiere archivos de nube a nube, archiva documentos y reduce la dependencia del almacenamiento de Microsoft usando una interfaz gráfica."
keywords:
  - migración de OneDrive a Amazon S3
  - transferencia de OneDrive a S3
  - herramienta de migración a la nube
  - RcloneView OneDrive
  - archivo en S3
  - exportación de OneDrive
  - migración de Microsoft a AWS
  - transferencia de nube a nube
  - copia de seguridad de OneDrive en S3
  - reducir costos de OneDrive
tags:
  - RcloneView
  - onedrive
  - amazon-s3
  - cloud-to-cloud
  - migration
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra OneDrive a Amazon S3 — Transfiere archivos con RcloneView

> OneDrive se adapta bien a los flujos de trabajo de Microsoft 365, pero S3 destaca en el archivado rentable y la integración con AWS — RcloneView migra tu contenido de OneDrive directamente a S3 sin necesidad de descarga local alguna.

OneDrive se integra de forma natural en entornos de Microsoft 365, pero las organizaciones que reducen los costos de licenciamiento de Microsoft, consolidan su infraestructura en AWS, o necesitan un archivado nativo de S3, a veces necesitan mover el contenido de OneDrive a Amazon S3. RcloneView ofrece una ruta de migración directa de nube a nube — conectando OneDrive y S3 simultáneamente y transmitiendo datos entre ambos sin consumir espacio en disco local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectando OneDrive y Amazon S3

Agrega **Microsoft OneDrive** en RcloneView mediante autenticación OAuth por navegador — **pestaña Remote > New Remote > Microsoft OneDrive**. Luego agrega **Amazon S3** con tu Access Key ID, Secret Access Key y AWS Region. Para cuentas de OneDrive for Business, configura el remoto para apuntar al tenant de tu organización y a la biblioteca correspondiente.

<img src="/support/images/en/blog/new-remote.png" alt="Adding OneDrive and Amazon S3 remotes in RcloneView" class="img-large img-center" />

Una vez que ambos remotos estén activos, explóralos lado a lado en el explorador de doble panel de RcloneView — la jerarquía de carpetas de OneDrive a la izquierda, la estructura de tu bucket de S3 a la derecha. Esta vista te ayuda a planificar el mapeo de la migración: qué carpetas de OneDrive terminan en qué prefijos de S3.

## Transferencia de archivos

En **Job Manager**, crea un trabajo **Copy** desde tu carpeta de OneDrive hasta la ruta del bucket de S3 de destino. Para una empresa que migra 1.5 TB de archivos de proyectos archivados de OneDrive a S3, Copy (en lugar de Sync) es el tipo de trabajo correcto — preserva los archivos de origen durante la ventana de migración mientras copia todo a S3, dando tiempo para la verificación antes de eliminarlos.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive to Amazon S3 migration job in RcloneView" class="img-large img-center" />

Las transferencias multihilo y la configuración de cantidad de archivos concurrentes en Advanced Settings maximizan el rendimiento. El motor rclone subyacente de RcloneView gestiona el throttling de la API de OneDrive y los reintentos automáticos — la migración continúa sin intervención manual incluso cuando el proveedor limita temporalmente las solicitudes.

## Verificación y limpieza

Después de la migración, usa **Folder Compare** para confirmar que todos los archivos se transfirieron correctamente. Compara el origen de OneDrive con el destino de S3 — la vista de comparación muestra los archivos exclusivos de cada lado y los que coinciden, dándote una lista de verificación definitiva antes de eliminar el contenido de OneDrive.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying OneDrive to S3 migration with Folder Compare in RcloneView" class="img-large img-center" />

Una vez confirmado, el contenido de OneDrive puede archivarse o eliminarse por fases. El registro de **Job History** proporciona un registro permanente de la migración — qué se transfirió, cuándo y cuántos datos se movieron — útil para la documentación de cumplimiento normativo al dar de baja una suscripción de Microsoft 365.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega el remoto de **OneDrive** (OAuth) y el remoto de **Amazon S3** (credenciales de Access Key).
3. Crea un trabajo **Copy** en Job Manager desde OneDrive hasta tu bucket de S3.
4. Usa **Folder Compare** para verificar que todos los archivos se transfirieron antes de eliminar el contenido de OneDrive.

Migrar de OneDrive a Amazon S3 con RcloneView convierte un proyecto de TI complejo en un trabajo automatizado bien supervisado — con total visibilidad y verificación en cada paso.

---

**Guías relacionadas:**

- [Migra OneDrive a Google Drive con RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-google-drive-rcloneview)
- [Migra OneDrive a Backblaze B2 con RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)
- [Gestiona el almacenamiento en la nube de OneDrive — Sincronización y copia de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
