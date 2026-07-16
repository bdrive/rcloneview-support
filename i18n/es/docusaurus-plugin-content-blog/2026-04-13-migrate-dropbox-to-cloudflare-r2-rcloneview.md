---
slug: migrate-dropbox-to-cloudflare-r2-rcloneview
title: "Migra de Dropbox a Cloudflare R2 — Transfiere archivos con RcloneView"
authors:
  - tayson
description: "Mueve tus archivos de Dropbox a Cloudflare R2 usando RcloneView. Conéctate mediante OAuth y token de API, gestiona archivos grandes y disfruta de cero tarifas de salida en R2."
keywords:
  - migrar Dropbox a Cloudflare R2
  - transferencia Dropbox R2 RcloneView
  - migración de Dropbox a R2
  - sincronización en la nube Cloudflare R2
  - almacenamiento en la nube sin tarifas de salida
  - herramienta de migración de nube a nube
  - alternativa a Dropbox R2
  - guía de migración de RcloneView
tags:
  - dropbox
  - cloudflare-r2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra de Dropbox a Cloudflare R2 — Transfiere archivos con RcloneView

> Cloudflare R2 ofrece almacenamiento de objetos compatible con S3 y sin tarifas de salida — RcloneView facilita la migración desde Dropbox con un trabajo de sincronización de nube a nube.

Cloudflare R2 se ha convertido en una alternativa atractiva para los equipos que se alejan de Dropbox. Sin cargos por salida de datos y con soporte de API compatible con S3, R2 encaja de forma natural en los flujos de trabajo de desarrollo, las canalizaciones de recursos estáticos y las estrategias de archivado con conciencia de costos. Mover tus archivos existentes de Dropbox a R2 es una migración de nube a nube única que RcloneView gestiona sin enrutar los datos a través de tu equipo local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Paso 1 — Conectar Dropbox

Abre RcloneView y ve a **Remote Manager**. Haz clic en **New Remote** y selecciona **Dropbox**. Como la mayoría de los proveedores OAuth, Dropbox abre tu navegador para la autorización — inicia sesión y haz clic en Allow. RcloneView almacena el token y el remoto aparece de inmediato. Ábrelo en el Explorador de archivos para confirmar que tus archivos y carpetas de Dropbox son visibles.

Si tienes una cuenta de Dropbox Business, asegúrate de haber iniciado sesión con la cuenta que posee el contenido que deseas migrar. Las carpetas compartidas propiedad de otros usuarios pueden tener restricciones de acceso.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Dropbox and Cloudflare R2 in RcloneView Remote Manager" class="img-large img-center" />

## Paso 2 — Conectar Cloudflare R2

En **Remote Manager**, haz clic en **New Remote** y selecciona **S3 Compatible**. Cloudflare R2 utiliza credenciales compatibles con S3:

- **Access Key ID**: de tu token de API de Cloudflare R2 (crea uno en el panel de Cloudflare en R2 > Manage API Tokens)
- **Secret Access Key**: el secreto correspondiente
- **Endpoint**: `https://{account-id}.r2.cloudflarestorage.com`

Tu Account ID aparece en la barra lateral del panel de Cloudflare. Guarda el remoto y ábrelo para confirmar que tus buckets de R2 son visibles. Crea el bucket de destino si no existe.

## Paso 3 — Configurar el trabajo de migración

Ve a **Jobs** y haz clic en **New Job**. Establece Dropbox como origen. Puedes elegir la raíz para migrar todo, o seleccionar una carpeta específica. Establece Cloudflare R2 como destino y apunta a tu bucket objetivo.

En el paso 2 del asistente de trabajos, configura las opciones para la migración:

- Comienza con **Dry Run** activado para previsualizar la lista de archivos
- Establece **transfers** entre 4 y 6 para migraciones de Dropbox (valores más altos pueden activar los límites de tasa de Dropbox)
- Activa la **verificación de checksum** para confirmar que los archivos grandes se transfirieron sin corrupción

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating files from Dropbox to Cloudflare R2 cloud-to-cloud" class="img-large img-center" />

## Gestión de archivos grandes

Cloudflare R2 admite objetos de hasta 5 TB, y RcloneView utiliza la carga multipartida para archivos grandes automáticamente. Dropbox tiene un tamaño máximo de archivo de 2 TB por archivo. En la práctica, para la mayoría de las migraciones de Dropbox los archivos estarán muy por debajo de los límites. Si tienes archivos excepcionalmente grandes y la transferencia falla, revisa la pestaña Log para ver mensajes de error específicos y considera reducir el número de transferencias simultáneas.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer progress during Dropbox to R2 migration" class="img-large img-center" />

## Paso 4 — Verificar y completar

Después de que finalice el trabajo de migración principal, usa **Folder Compare** para verificar. Abre el origen de Dropbox y el destino de R2 uno junto al otro y deja que RcloneView identifique cualquier discrepancia. Vuelve a ejecutar el trabajo para los archivos que falten. Una vez que estés satisfecho de que la migración está completa, puedes actualizar tus aplicaciones para que apunten a R2 y retirar el acceso a Dropbox.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Conecta Dropbox mediante OAuth en **Remote Manager**.
3. Conecta Cloudflare R2 usando tu token de API, el secreto y el endpoint del Account ID.
4. Crea un trabajo de migración, ejecuta Dry Run para previsualizar y luego ejecuta la transferencia completa.

Cambiar a Cloudflare R2 elimina el modelo de precios por usuario de Dropbox y elimina los costos de salida para el contenido accedido desde la red de Cloudflare.

---

**Guías relacionadas:**

- [Migra de Wasabi a Cloudflare R2 con RcloneView](https://rcloneview.com/support/blog/migrate-wasabi-to-cloudflare-r2-rcloneview)
- [Migra de Azure Blob a Cloudflare R2 con RcloneView](https://rcloneview.com/support/blog/migrate-azure-blob-to-cloudflare-r2-rcloneview)
- [Soluciona errores de límite de tasa de la API de Dropbox con RcloneView](https://rcloneview.com/support/blog/fix-dropbox-rate-limit-api-errors-rcloneview)

<CloudSupportGrid />
