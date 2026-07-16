---
slug: migrate-sharepoint-to-aws-s3-cross-platform-rcloneview
title: "Migra archivos de SharePoint a AWS S3 para acceso multiplataforma con RcloneView"
authors:
  - tayson
description: "Mueve o crea copias de seguridad de bibliotecas de documentos de Microsoft SharePoint en AWS S3 — para acceso multiplataforma, archivado a largo plazo o redundancia multi-nube — usando RcloneView."
keywords:
  - sharepoint to s3
  - sharepoint migration aws
  - sharepoint backup s3
  - migrate sharepoint files
  - sharepoint to aws transfer
  - sharepoint archival s3
  - sharepoint cross platform
  - sharepoint rclone
  - sharepoint s3 sync
  - sharepoint document library backup
tags:
  - sharepoint
  - aws-s3
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra archivos de SharePoint a AWS S3 para acceso multiplataforma con RcloneView

> SharePoint es excelente para equipos centrados en Microsoft, pero cuando necesitas los datos en AWS o accesibles fuera del ecosistema de Microsoft, extraer los archivos resulta más difícil de lo que debería. RcloneView cierra esa brecha.

Microsoft SharePoint está profundamente integrado con Microsoft 365, lo que lo convierte en el almacén de documentos predeterminado para muchas empresas. Pero cuando tu equipo de desarrollo trabaja sobre AWS, tu pipeline de ciencia de datos necesita acceso a S3, o simplemente necesitas una copia de seguridad multiplataforma, extraer datos de SharePoint se convierte en un desafío. RcloneView se conecta a las bibliotecas de documentos de SharePoint y transfiere el contenido a S3 (o a cualquier nube) mediante un flujo de trabajo visual y verificable.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ¿Por qué mover SharePoint a S3?

- **Infraestructura basada en AWS** — Tus aplicaciones y tu cómputo se ejecutan en AWS. Los datos también deben estar ahí.
- **Acceso multiplataforma** — S3 es accesible desde cualquier lenguaje, framework o plataforma mediante una API universal.
- **Archivado rentable** — S3 Glacier ofrece almacenamiento a largo plazo más económico que SharePoint.
- **Cumplimiento normativo** — Algunas regulaciones requieren copias de datos fuera del ecosistema de Microsoft.
- **Diversificación de proveedores** — Reduce la dependencia de un único proveedor.

## Conectar SharePoint

1. Haz clic en **Add Remote** → selecciona **SharePoint** (u **OneDrive for Business**).
2. Autentícate mediante OAuth — RcloneView abrirá tu navegador para el inicio de sesión de Microsoft.
3. Selecciona el sitio de SharePoint y la biblioteca de documentos a la que deseas acceder.
4. Guarda — tus bibliotecas de SharePoint ya son navegables.

### Conectar AWS S3

1. Haz clic en **Add Remote** → selecciona **Amazon S3**.
2. Introduce tu Access Key ID y tu Secret Access Key.
3. Selecciona tu región.

<img src="/support/images/en/blog/new-remote.png" alt="Add SharePoint and S3 remotes" class="img-large img-center" />

## Flujo de trabajo de migración

### Fase 1: Explorar y evaluar

Visualiza las bibliotecas de SharePoint junto a tus buckets de S3:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse SharePoint alongside S3" class="img-large img-center" />

### Fase 2: Copiar

1. Crea un **Copy job**: biblioteca de SharePoint → bucket de S3.
2. Ejecuta la transferencia y supervísala en tiempo real.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor SharePoint to S3 transfer" class="img-large img-center" />

### Fase 3: Verificar

Confirma que la transferencia esté completa con [Folder Comparison](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents):

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify SharePoint migration to S3" class="img-large img-center" />

### Fase 4: Automatizar la sincronización continua

Mantén SharePoint y S3 sincronizados durante la transición:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule SharePoint to S3 sync" class="img-large img-center" />

## Casos de uso

- **Ingesta de pipelines de datos** — Envía automáticamente los documentos de SharePoint a S3 para su procesamiento con AWS Lambda, Glue o Athena.
- **Archivado a largo plazo** — Mueve el contenido antiguo de SharePoint a S3 Glacier. Ahorra en costos de licencias de Microsoft.
- **Recuperación ante desastres** — Mantén una copia independiente en S3 de los datos críticos de SharePoint.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Añade SharePoint** y **AWS S3** como remotos.
3. **Copia, verifica, programa** — migración completa o sincronización continua.

SharePoint no tiene por qué significar dependencia de un proveedor. RcloneView hace que tus datos de Microsoft sean portables.

---

**Guías relacionadas:**

- [Migración de SharePoint a Google Drive](https://rcloneview.com/support/blog/sharepoint-to-google-drive-migration-rcloneview)
- [Añadir AWS S3 y compatibles con S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Comparar contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Programación de trabajos](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
