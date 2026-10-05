---
slug: migrate-mega-to-cloudflare-r2-rcloneview
title: "Migra Mega a Cloudflare R2 — Transfiere archivos con RcloneView"
authors:
  - robin
description: "Migra Mega a Cloudflare R2 con RcloneView: conecta ambos remotos, ejecuta un Dry Run, transfiere de nube a nube y verifica con Folder Compare."
keywords:
  - migrar Mega a Cloudflare R2
  - transferencia de Mega a R2
  - copia de seguridad de Mega en R2
  - migración de nube a nube
  - almacenamiento de objetos Cloudflare R2
  - almacenamiento en la nube Mega
  - RcloneView
  - rclone GUI
  - mover archivos desde Mega
tags:
  - RcloneView
  - mega
  - cloudflare-r2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra Mega a Cloudflare R2 — Transfiere archivos con RcloneView

> Mueve una biblioteca de Mega a buckets de Cloudflare R2 con RcloneView, previsualizando el trabajo antes de ejecutarlo.

Mega es adecuado para almacenamiento personal, pero los proyectos que necesitan acceso por buckets, una API compatible con S3 o una separación clara entre almacenamiento y uso compartido suelen acabar en almacenamiento de objetos. RcloneView conecta Mega y Cloudflare R2 como remotos y transfiere entre ellos en un solo trabajo, con vistas previas, supervisión y un historial de cada ejecución.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta Mega y Cloudflare R2

Abre New Remote y elige Mega. Usa credenciales de cuenta: tu correo electrónico y contraseña. A continuación, crea el remoto de R2. En el panel de Cloudflare, crea un bucket y genera un token de API con permisos Admin Read & Write. RcloneView solicita las credenciales del token, tu Account ID y el endpoint, que tiene la forma `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir los remotos de Mega y Cloudflare R2 en RcloneView" class="img-large img-center" />

RcloneView admite más de 90 servicios de almacenamiento en la nube en Windows, macOS y Linux, y ambos remotos aparecen uno junto al otro en el Explorer una vez guardados.

## Previsualiza antes de transferir

Abre dos paneles del Explorer, con Mega a la izquierda y tu bucket de R2 a la derecha. Arrastra carpetas para una copia rápida, ya que arrastrar entre remotos distintos copia en lugar de mover. Para una biblioteca completa, usa en su lugar el asistente de sincronización: elige la carpeta de Mega como origen y el bucket como destino, y luego ejecuta un Dry Run para ver qué archivos se copiarían o eliminarían.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuración del trabajo de transferencia de Mega a Cloudflare R2" class="img-large img-center" />

Considera a un editor de vídeo con 800 GB de archivos de proyecto en Mega. En Step 2 puedes aumentar el número de transferencias de archivos para muchos archivos pequeños y activar la comparación de checksum si quieres comprobaciones de hash y tamaño. Los filtros de Step 3 pueden excluir carpetas o limitar el tamaño de archivo.

## Supervisa y verifica

Una vez iniciado el trabajo, la pestaña Transferring muestra el progreso, la velocidad y el número de archivos, y puedes cancelar una ejecución si es necesario. Vigila los errores y vuelve a ejecutar el trabajo si una sesión se detiene antes de tiempo. Job History conserva el estado, la duración, el tamaño y el número de archivos.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Supervisión de una transferencia de Mega a R2 en RcloneView" class="img-large img-center" />

Cuando termine, abre Folder Compare con Mega en un lado y R2 en el otro. Los archivos Left-only muestran lo que falta en el bucket, y puedes copiarlos directamente desde la vista de comparación.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare entre Mega y Cloudflare R2" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade Mega con tu correo y contraseña, y Cloudflare R2 con tu token de API, Account ID y endpoint.
3. Crea un trabajo de sincronización de Mega al bucket de R2 y ejecuta un Dry Run.
4. Inicia la transferencia y luego confirma el resultado con Folder Compare.

Una migración con vista previa y una comprobación final con Folder Compare te permite confirmar qué ha llegado a R2.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de Mega — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [Gestiona Cloudflare R2 — Sincronización y copia de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Dry Run — Previsualiza la sincronización antes de transferir en RcloneView](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
