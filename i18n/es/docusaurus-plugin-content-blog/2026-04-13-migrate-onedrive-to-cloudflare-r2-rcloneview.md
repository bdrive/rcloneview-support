---
slug: migrate-onedrive-to-cloudflare-r2-rcloneview
title: "Migra OneDrive a Cloudflare R2 — Transfiere archivos con RcloneView"
authors:
  - tayson
description: "Traslada archivos de OneDrive a Cloudflare R2 para flujos de trabajo de desarrollo e integración con CDN usando RcloneView. Conéctate mediante OAuth y API Token, aplica filtros y sincroniza."
keywords:
  - migrar OneDrive a Cloudflare R2
  - transferencia OneDrive R2 RcloneView
  - sincronización OneDrive a Cloudflare R2
  - migración de almacenamiento en la nube para desarrolladores
  - Cloudflare R2 object storage
  - alternativa a OneDrive R2
  - migración de almacenamiento compatible con S3
  - migración de OneDrive con RcloneView
tags:
  - onedrive
  - cloudflare-r2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra OneDrive a Cloudflare R2 — Transfiere archivos con RcloneView

> Cloudflare R2 se integra de forma nativa con CDN y con los pipelines de Workers — RcloneView gestiona la migración de OneDrive a R2 sin tocar tu equipo local.

Los desarrolladores y equipos que trasladan sus cargas de trabajo al ecosistema de Cloudflare a menudo necesitan reubicar los recursos almacenados en OneDrive hacia Cloudflare R2. R2 ofrece almacenamiento de objetos compatible con S3 y sin costos de salida (zero-egress), que se integra directamente con Cloudflare Workers, Pages y CDN — lo que lo hace ideal para recursos estáticos, archivos multimedia y artefactos de compilación. RcloneView conecta OneDrive mediante OAuth y Cloudflare R2 mediante API Token, y ejecuta la migración como un trabajo de sincronización de nube a nube con reglas de filtro opcionales.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar OneDrive

Abre RcloneView y ve a **Remote Manager**. Haz clic en **New Remote** y selecciona **OneDrive** de la lista de proveedores. RcloneView abre tu navegador para la autenticación OAuth — inicia sesión con tu cuenta de Microsoft y autoriza el acceso. De esta forma puedes acceder tanto a OneDrive personal como a OneDrive for Business y a las bibliotecas de documentos de SharePoint.

Después de autorizar, abre el remoto en el Explorador de archivos. Navega hasta las carpetas que planeas migrar y anota sus rutas.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting OneDrive and Cloudflare R2 in RcloneView" class="img-large img-center" />

## Conectar Cloudflare R2

De vuelta en **Remote Manager**, haz clic en **New Remote** y selecciona **S3 Compatible**. Completa tus credenciales de Cloudflare R2:

- **Access Key ID**: desde el panel de Cloudflare → R2 → Manage API Tokens (crea un token de API con permisos de lectura y escritura de objetos)
- **Secret Access Key**: el secreto del token
- **Endpoint**: `https://{your-account-id}.r2.cloudflarestorage.com`

Guarda el remoto. En el Explorador de archivos, navega hasta el bucket de destino (o crea uno). Verifica el acceso confirmando que aparece el contenido del bucket.

## Configurar el trabajo de migración con filtros

Ve a **Jobs** y haz clic en **New Job**. Establece OneDrive como origen y la carpeta específica a migrar. Establece Cloudflare R2 como destino y la ruta del bucket de destino.

En el paso 2 del asistente de trabajos, puedes aplicar **reglas de filtro** para acotar la migración:

- Migrar solo tipos de archivo específicos (p. ej., `--include "*.jpg"`, `--include "*.pdf"`)
- Excluir carpetas del sistema o archivos temporales (p. ej., `--exclude ".DS_Store"`)
- Usar **Dry Run** para previsualizar el resultado filtrado antes de ejecutar la migración real

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud migration from OneDrive to Cloudflare R2" class="img-large img-center" />

## Ejecutar la migración

Desactiva Dry Run y ejecuta el trabajo. RcloneView muestra el progreso en tiempo real en el panel de transferencia — archivos por segundo, velocidad actual y datos totales movidos. La transferencia de OneDrive a R2 se realiza de servidor a servidor; tu equipo local actúa como orquestador, no como el canal de datos.

Los archivos grandes usan carga multiparte automáticamente. Si algún archivo falla a mitad de la transferencia, la pestaña Log muestra el error específico. Volver a ejecutar el trabajo es seguro — los archivos ya transferidos se omiten.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring OneDrive to Cloudflare R2 transfer in real time" class="img-large img-center" />

## Verificación posterior a la migración

Usa **Folder Compare** para revisar ambos lados después de la migración. Abre el origen de OneDrive y el destino de R2 en la vista de comparación — RcloneView resalta los archivos presentes en un lado pero no en el otro. Para migraciones críticas, activa la verificación de checksum en la configuración del trabajo para garantizar la precisión a nivel de byte.

Una vez verificado, puedes actualizar los bindings de Cloudflare Worker, las reglas de CDN o las configuraciones de la aplicación para que apunten al bucket de R2 en lugar de a OneDrive.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Conecta OneDrive mediante OAuth en **Remote Manager**.
3. Conecta Cloudflare R2 usando tu API Token y el endpoint del ID de cuenta.
4. Crea un trabajo de migración con filtros opcionales, ejecuta Dry Run para previsualizar y luego ejecútalo.

La estrecha integración de Cloudflare R2 con CDN y su facturación sin costos de salida lo convierten en un destino atractivo para el contenido que antes residía en OneDrive.

---

**Guías relacionadas:**

- [Migra Dropbox a Cloudflare R2 con RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-cloudflare-r2-rcloneview)
- [Migra Google Drive a Cloudflare R2 con RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-cloudflare-r2-rcloneview)
- [Migra Azure Blob a Cloudflare R2 con RcloneView](https://rcloneview.com/support/blog/migrate-azure-blob-to-cloudflare-r2-rcloneview)

<CloudSupportGrid />
