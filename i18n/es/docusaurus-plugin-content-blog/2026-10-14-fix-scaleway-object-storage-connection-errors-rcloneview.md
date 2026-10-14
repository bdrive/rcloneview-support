---
slug: fix-scaleway-object-storage-connection-errors-rcloneview
title: "Solucione los errores de conexión de Scaleway Object Storage — Resuélvalos con RcloneView"
authors:
  - steve
description: "Solucione los errores de conexión de Scaleway Object Storage en RcloneView: corrija las discrepancias de región, endpoint y clave de acceso en remotos compatibles con S3."
keywords:
  - errores de scaleway object storage
  - solucionar conexión de scaleway
  - RcloneView scaleway
  - solución de problemas compatible con S3
  - región y endpoint de scaleway
  - acceso denegado al bucket de scaleway
  - clave de acceso de scaleway
  - remoto rclone scaleway
tags:
  - RcloneView
  - troubleshooting
  - tips
  - object-storage
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucione los errores de conexión de Scaleway Object Storage — Resuélvalos con RcloneView

> La mayoría de los fallos de conexión con Scaleway se deben a una discrepancia de región, endpoint o clave — así se encuentra y se corrige en RcloneView.

Scaleway Object Storage se accede mediante el protocolo compatible con S3, por lo que un remoto necesita una Access Key, una Secret Key, una región y un endpoint que coincidan. Si alguno de estos datos no coincide con la ubicación real del bucket, aparecen errores de acceso denegado o de bucket no encontrado que parecen problemas de red. RcloneView muestra los errores en sus registros y permite reconstruir el remoto sin perder sus trabajos de sincronización.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Compruebe primero la región y el endpoint

Los buckets de Scaleway están vinculados a una región, y el endpoint debe pertenecer a la misma. Si un equipo creó un bucket en una región pero configuró el remoto para otra, verá fallos que parecen de autenticación incluso con claves válidas. Compare, carácter por carácter, la región que muestra la consola de Scaleway con la región y el endpoint de la configuración de su remoto.

<img src="/support/images/en/blog/new-remote.png" alt="Configuración de un remoto de Scaleway compatible con S3 en RcloneView" class="img-large img-center" />

## Verifique las credenciales y los permisos

A continuación, confirme la Access Key y la Secret Key. Una clave regenerada o eliminada es una causa habitual cuando un trabajo que funcionaba falla de repente. Compruebe también que los permisos de la clave cubran el bucket y el proyecto al que accede; una clave válida sin acceso al bucket sigue devolviendo acceso denegado. Abra Remote Manager, edite el remoto y pegue los valores nuevos.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Exploración de un bucket de Scaleway en RcloneView tras corregir las credenciales" class="img-large img-center" />

## Pruebe y luego reanude los trabajos

Después de editar el remoto, abra Rclone Terminal y liste el bucket para confirmar que la conexión funciona. Luego ejecute un Dry Run de su trabajo de sincronización para confirmar que ve los archivos esperados antes de reanudar las transferencias reales. Si el problema persiste, active el registro de rclone en nivel DEBUG en la configuración, reinicie el rclone integrado, reproduzca el error y lea el registro.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Revisión del historial de trabajos de Scaleway en RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abra Remote Manager y edite su remoto de Scaleway.
3. Haga coincidir la región y el endpoint con el bucket, y vuelva a introducir las claves.
4. Liste el bucket, ejecute un Dry Run y reanude sus trabajos.

Un remoto cuya región, endpoint y claves coinciden se comporta en su flujo de trabajo como cualquier otro almacenamiento compatible con S3.

---

**Guías relacionadas:**

- [Administre Scaleway Object Storage — Sincronización en la nube con RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Solucione los errores de conexión de Linode Object Storage — Resuélvalos con RcloneView](https://rcloneview.com/support/blog/fix-linode-object-storage-connection-errors-rcloneview)
- [Migre IBM COS a Scaleway — Transfiera archivos con RcloneView](https://rcloneview.com/support/blog/migrate-ibm-cos-to-scaleway-rcloneview)

<CloudSupportGrid />
