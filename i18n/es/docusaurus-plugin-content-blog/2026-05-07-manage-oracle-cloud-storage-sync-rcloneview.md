---
slug: manage-oracle-cloud-storage-sync-rcloneview
title: "Gestiona Oracle Cloud Object Storage — Sincronización y copia de seguridad con RcloneView"
authors:
  - tayson
description: "Conecta Oracle Cloud Object Storage a RcloneView usando claves de acceso compatibles con S3, explora buckets y ejecuta trabajos automatizados de sincronización y copia de seguridad con facilidad."
keywords:
  - Oracle Cloud Object Storage
  - RcloneView
  - S3-compatible
  - cloud sync
  - cloud backup
  - OCI storage
  - object storage
  - rclone oracle
tags:
  - RcloneView
  - oracle-cloud
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona Oracle Cloud Object Storage — Sincronización y copia de seguridad con RcloneView

> Oracle Cloud Object Storage ofrece precios competitivos y sólidos acuerdos de nivel de servicio empresariales — RcloneView te brinda una interfaz gráfica sencilla para gestionar, sincronizar y hacer copias de seguridad de tus buckets de OCI.

Oracle Cloud Infrastructure (OCI) Object Storage es un almacenamiento de objetos totalmente compatible con S3, con un generoso nivel Always Free y garantías de durabilidad de nivel empresarial. Los equipos que ejecutan cargas de trabajo en OCI o buscan una alternativa rentable a AWS S3 encontrarán en Oracle Cloud Object Storage una opción atractiva. RcloneView se conecta a él a través de la API compatible con S3, ofreciéndote una GUI completa para la gestión de buckets, transferencias de archivos y trabajos de sincronización automatizados — sin necesidad de CLI.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configuración de Oracle Cloud Object Storage en RcloneView

Para conectar RcloneView a Oracle Cloud Object Storage, necesitas tres cosas: una **Customer Access Key** (no tu clave de API de OCI), el **namespace** y el **endpoint regional**. Genera la clave de acceso en la consola de OCI, en tu perfil de usuario > Customer Secret Keys. El formato del endpoint es `https://<namespace>.compat.objectstorage.<region>.oraclecloud.com` — por ejemplo, `https://axyz1234abcd.compat.objectstorage.us-ashburn-1.oraclecloud.com`.

En RcloneView, haz clic en **New Remote**, selecciona **S3 Compatible Storage** y elige **Oracle Cloud Infrastructure Object Storage** en el menú desplegable de proveedores. Pega tu Access Key ID, Secret Key y el endpoint regional. Configura el campo de región para que coincida con el código de región de tu OCI. Haz clic en **Save** y RcloneView se conectará de inmediato y mostrará el listado de tus buckets.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Oracle Cloud Object Storage remote in RcloneView" class="img-large img-center" />

## Exploración de buckets y gestión de archivos

Una vez conectado, Oracle Cloud Object Storage se comporta como cualquier otro remoto en el explorador de doble panel de RcloneView. Navega por los namespaces de buckets y los prefijos de objetos, sube archivos arrastrándolos y soltándolos, y descarga objetos a tu equipo local. RcloneView muestra métricas de transferencia en tiempo real para que puedas monitorear las cargas grandes mientras avanzan.

Si usas varias regiones de OCI para redundancia geográfica, añade cada endpoint regional como un remoto con nombre independiente. Luego puedes abrirlos uno junto a otro en el explorador y copiar objetos directamente entre regiones mediante transferencia de nube a nube — sin necesidad de descarga local.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud file transfer between OCI buckets in RcloneView" class="img-large img-center" />

## Creación de trabajos de sincronización para copias de seguridad

El **Job Wizard** de RcloneView te guía en la creación de un trabajo de sincronización hacia o desde Oracle Cloud Object Storage en cuatro pasos: elegir el origen, elegir el destino, configurar las opciones y revisar antes de ejecutar. Usa primero el modo **dry run** para ver exactamente qué archivos se transferirían o eliminarían — esto es especialmente importante al sincronizar hacia OCI, ya que las operaciones de sincronización pueden eliminar en el destino archivos que ya no existen en el origen.

El panel de **Job History** registra cada ejecución de trabajo con marcas de tiempo y estadísticas de transferencia, proporcionando un registro de auditoría con fines de cumplimiento. Los usuarios con licencia PLUS pueden añadir una **programación** a cada trabajo para que las copias de seguridad se ejecuten automáticamente — por ejemplo, cada noche a las 2 AM — sin ninguna acción manual.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log for Oracle Cloud sync jobs in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Genera una **Customer Secret Key** en la consola de OCI y anota tu namespace y región.
3. En RcloneView, haz clic en **New Remote** > **S3 Compatible Storage** > **Oracle Cloud Infrastructure Object Storage**.
4. Introduce tu Access Key ID, Secret Key y la URL del endpoint regional.
5. Explora tus buckets y usa el **Job Wizard** para crear tu primer trabajo de sincronización o copia de seguridad.

La compatibilidad con S3 de Oracle Cloud Object Storage lo convierte en una incorporación directa a cualquier estrategia multicloud gestionada a través de RcloneView.

---

**Guías relacionadas:**

- [Gestiona Amazon S3 — Sincronización y copia de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Centraliza S3, Wasabi y R2 con RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)
- [Gestiona IDrive e2 — Sincronización y copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
