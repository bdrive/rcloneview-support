---
slug: migrate-google-drive-to-digitalocean-spaces-rcloneview
title: "Migra Google Drive a DigitalOcean Spaces — Transfiere archivos con RcloneView"
authors:
  - tayson
description: "Mueve archivos de Google Drive a DigitalOcean Spaces (almacenamiento de objetos) usando RcloneView. Guía paso a paso para una migración directa de nube a nube sin scripting de CLI."
keywords:
  - migrar Google Drive a DigitalOcean Spaces
  - migración de Google Drive a almacenamiento de objetos
  - copia de seguridad de DigitalOcean Spaces desde Google Drive
  - rclone Google Drive DigitalOcean
  - migración de nube a nube Google Drive
  - mover Google Drive a S3 compatible
  - migración de Google Drive con RcloneView
  - transferencia de archivos a DigitalOcean Spaces
tags:
  - RcloneView
  - google-drive
  - digitalocean-spaces
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra Google Drive a DigitalOcean Spaces — Transfiere archivos con RcloneView

> RcloneView gestiona las migraciones de Google Drive a DigitalOcean Spaces como una transferencia directa de nube a nube — sin almacenamiento local intermedio, con visibilidad total del progreso y verificación de checksum al finalizar.

Mover archivos de Google Drive a DigitalOcean Spaces es un flujo de trabajo habitual para desarrolladores que migran de un almacenamiento orientado al consumidor a un almacenamiento de objetos de nivel de infraestructura. Una startup podría pasar de usar Google Drive para compartir archivos a usar Spaces para acceso programático, integración con CDN y menores costos por GB a gran escala. RcloneView conecta ambos proveedores simultáneamente y transfiere los archivos directamente, sin enrutar gigabytes a través de tu máquina local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Preparación de ambos remotos

Agrega Google Drive como remoto OAuth: **pestaña Remote → New Remote → Google Drive**, autentícate en el navegador. Tus carpetas de Drive aparecerán al instante en el Explorer.

Agrega DigitalOcean Spaces como remoto compatible con S3: **New Remote → Amazon S3 Compatible → DigitalOcean Spaces**. Ingresa tu access key de Spaces, la secret key y el endpoint de región (por ejemplo, `nyc3.digitaloceanspaces.com`). Crea el bucket de destino en el Panel de Control de DigitalOcean si aún no existe.

Abre un diseño de Explorer de dos paneles: Google Drive a la izquierda, DigitalOcean Spaces a la derecha. Explora ambos para confirmar la estructura de carpetas antes de ejecutar la migración.

<img src="/support/images/en/blog/new-remote.png" alt="Setting up Google Drive and DigitalOcean Spaces remotes in RcloneView" class="img-large img-center" />

## Ejecución de la migración

Para una migración a nivel de carpeta (por ejemplo, migrar `Google Drive:/Client Projects/` a `do-spaces:projects-bucket/`), usa el asistente de trabajos de sincronización (Sync job wizard) en Job Manager. Configura el origen y el destino, y luego ajusta en el Paso 2:

- **Transferencias concurrentes**: 8–12 para máximo rendimiento en una conexión rápida
- **Verificación de checksum**: activada — Google Drive usa su propio esquema de hash; rclone gestiona la conversión
- **Reintentos**: 3 — maneja los límites de tasa transitorios de la API de Google sin que falle todo el trabajo

Ejecuta primero el Dry Run. Google Drive suele contener archivos de Google Docs, Sheets y Slides que no se pueden copiar directamente a Spaces (existen solo en el formato de Google, no como archivos descargables). El Dry Run te mostrará estos elementos, y podrás decidir si exportarlos primero o excluirlos con una regla de filtro.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google Drive to DigitalOcean Spaces cloud-to-cloud transfer in RcloneView" class="img-large img-center" />

## Manejo de archivos de Google Workspace

Los archivos nativos de Google Workspace (Docs, Sheets, Slides) no tienen un formato de archivo directo — deben exportarse. Rclone puede exportarlos automáticamente como PDF o en formatos de Office durante la transferencia. En el trabajo de sincronización de RcloneView, los Google Docs se omiten por defecto a menos que configures el formato de exportación. Usa la pestaña Terminal para ejecutar `rclone copy --drive-export-formats docx,xlsx,pptx` para una pasada de exportación única, o agrega flags personalizados en Settings → Global Rclone Flags.

Los archivos normales (PDFs, imágenes, videos, código) se transfieren sin ningún manejo especial y llegan a Spaces con su formato y nombre de archivo originales intactos.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Google Drive to DigitalOcean Spaces migration with folder comparison" class="img-large img-center" />

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega Google Drive (OAuth) y DigitalOcean Spaces (credenciales S3) como remotos.
3. Crea un trabajo de sincronización en Job Manager, ejecuta el Dry Run y revisa el manejo de archivos de Google Workspace.
4. Ejecuta la migración y usa Folder Compare para verificar que se completó.

Migrar de Google Drive a DigitalOcean Spaces con RcloneView es un proceso estructurado y verificable — con historial de trabajos y registros de transferencia que ofrecen un registro claro de qué se movió y cuándo.

---

**Guías relacionadas:**

- [Gestiona la sincronización y copia de seguridad en la nube de DigitalOcean Spaces con RcloneView](https://rcloneview.com/support/blog/manage-digitalocean-spaces-cloud-sync-backup-rcloneview)
- [Migra Google Drive a AWS S3 con RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-aws-s3-rcloneview)
- [Migraciones a la nube verificadas con checksum con RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
