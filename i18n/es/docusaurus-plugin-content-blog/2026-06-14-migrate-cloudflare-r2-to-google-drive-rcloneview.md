---
slug: migrate-cloudflare-r2-to-google-drive-rcloneview
title: "Migra Cloudflare R2 a Google Drive — Transfiere archivos con RcloneView"
authors:
  - jay
description: "Aprende a migrar archivos de Cloudflare R2 a Google Drive usando RcloneView — sin sorpresas de egress, solo un flujo de transferencia visual guiado."
keywords:
  - cloudflare r2 a google drive
  - migrar r2 a google drive rcloneview
  - transferencia cloudflare r2 google drive
  - migración rcloneview cloudflare r2
  - almacenamiento de objetos a google drive
  - bucket r2 a google drive rclone
  - copia de seguridad cloudflare r2 google drive
  - migración en la nube rcloneview
tags:
  - cloudflare-r2
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra Cloudflare R2 a Google Drive — Transfiere archivos con RcloneView

> Mueve archivos de un bucket de Cloudflare R2 a Google Drive usando la interfaz visual de RcloneView — sin necesidad de CLI, sin tarifas de egress desde R2.

Cloudflare R2 es popular entre los desarrolladores por su almacenamiento de objetos con egress cero, pero los equipos a menudo necesitan mover datos a Google Drive para compartirlos con colegas no técnicos, integrarse con Google Workspace o consolidar cuentas de almacenamiento. RcloneView conecta ambos servicios mediante un flujo de trabajo de apuntar y hacer clic, para que puedas migrar buckets de R2 a Google Drive sin escribir un solo comando.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Cloudflare R2 y Google Drive

Comienza agregando ambos servicios como remotos. En la pestaña **Remote**, haz clic en **New Remote** y selecciona Cloudflare R2. Necesitarás tu **API Token**, **Account ID** y **Endpoint URL** de Cloudflare (en el formato `https://<account-id>.r2.cloudflarestorage.com`). RcloneView usa el backend compatible con S3 de rclone para R2, así que tu token de API de R2 se asigna directamente a los campos de Access Key y Secret Key.

A continuación, agrega Google Drive como un segundo remoto. RcloneView abre una ventana del navegador para autenticación OAuth — inicia sesión en tu cuenta de Google y otorga acceso. No se requiere ingresar ninguna clave de API.

<img src="/support/images/en/blog/new-remote.png" alt="Setting up Cloudflare R2 and Google Drive remotes in RcloneView" class="img-large img-center" />

Una vez configurados ambos remotos, puedes explorar tus buckets de R2 y carpetas de Google Drive en paralelo en el explorador de doble panel de RcloneView.

## Ejecutar la migración

Haz clic en **Sync** en la pestaña Home para iniciar el asistente de trabajo de 4 pasos. En el Paso 1, selecciona tu bucket de R2 (o una subcarpeta específica dentro de él) como origen, y una carpeta de Google Drive como destino. Nombra el trabajo con claridad — algo como `r2-to-gdrive-migration` ayuda al revisar el historial más adelante.

En el Paso 2, activa la **verificación de checksum** para confirmar la integridad de los archivos después de cada transferencia. Esto es particularmente importante para archivos grandes como videos o archivos comprimidos, donde de otro modo la corrupción durante la transferencia pasaría desapercibida. Establece el número de reintentos en al menos 3 para manejar automáticamente interrupciones temporales de red.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a migration job from Cloudflare R2 to Google Drive in RcloneView" class="img-large img-center" />

Antes de confirmar, ejecuta un **Dry Run** para previsualizar exactamente qué archivos se copiarán. Esto muestra la lista completa de transferencia y los tamaños de archivo, permitiéndote confirmar el alcance antes de que nada toque tu Google Drive.

## Filtrar y manejar transferencias grandes

Si tu bucket de R2 contiene una mezcla de tipos de archivo, el Paso 3 te permite aplicar filtros. Un equipo de diseño que migra un bucket de proyecto podría excluir archivos `.psd` sin procesar de más de 500 MB mientras conserva todas las exportaciones listas para web, usando el filtro Max File Size. El filtro **Max File Age** es igualmente útil para migraciones incrementales — mover solo los archivos modificados en los últimos 30 días en lugar de todo el conjunto de datos histórico.

Para migraciones grandes que abarcan horas, la pestaña **Job History** registra la velocidad, el número de archivos y el estado de finalización de cada ejecución. Si el trabajo se interrumpe a mitad de camino, volver a ejecutarlo es seguro — RcloneView omite los archivos ya transferidos exitosamente y continúa desde donde se quedó.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Monitoring a Cloudflare R2 to Google Drive transfer job in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega Cloudflare R2 como remoto usando tu API Token, Account ID y Endpoint URL.
3. Agrega Google Drive como remoto mediante inicio de sesión OAuth en el navegador.
4. Crea un trabajo de Copy o Sync desde tu bucket de R2 hacia una carpeta de Google Drive — ejecuta primero un Dry Run para confirmar el alcance.

El modelo de egress cero de Cloudflare R2 significa que sacar tus datos no cuesta nada del lado de R2, y RcloneView se encarga del resto de forma visual.

---

**Guías relacionadas:**

- [Migra Google Drive a Cloudflare R2 con RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-cloudflare-r2-rcloneview)
- [Gestiona Cloudflare R2 — Sincronización y copia de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Gestiona Google Drive — Sincronización y copia de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
