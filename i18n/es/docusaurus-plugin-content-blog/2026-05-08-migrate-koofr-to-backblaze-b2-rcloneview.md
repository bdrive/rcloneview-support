---
slug: migrate-koofr-to-backblaze-b2-rcloneview
title: "Migra Koofr a Backblaze B2 — Transfiere archivos con RcloneView"
authors:
  - tayson
description: "Aprende cómo migrar archivos de Koofr a Backblaze B2 usando RcloneView, con verificación de checksum y reintento automático para transferencias grandes."
keywords:
  - migración de Koofr a Backblaze B2
  - migrar Koofr B2 RcloneView
  - transferencia Koofr Backblaze B2
  - cambiar de Koofr a almacenamiento B2
  - migración en la nube Koofr
  - copia de seguridad de Koofr en Backblaze B2
  - guía de migración de Koofr a S3
  - rclone Koofr B2 GUI
tags:
  - RcloneView
  - koofr
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra Koofr a Backblaze B2 — Transfiere archivos con RcloneView

> Mueve tu biblioteca de almacenamiento en la nube de Koofr a Backblaze B2 en un único trabajo de RcloneView: verificado, monitoreado y reanudable si se interrumpe.

Koofr es un servicio de almacenamiento en la nube europeo centrado en la privacidad que también actúa como un hub que conecta otras cuentas en la nube. Si estás consolidando en Backblaze B2 por motivos de archivado o costos, RcloneView gestiona la migración directamente entre ambos proveedores, sin necesidad de descarga local. Los archivos se transmiten desde el backend basado en WebDAV de Koofr a través del motor de transferencia de rclone directamente a tu bucket de B2.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurar los remotos de Koofr y Backblaze B2

Para Koofr, ve a **pestaña Remoto → Nuevo remoto** y selecciona Koofr de la lista de proveedores. Koofr admite inicio de sesión con OAuth: RcloneView abre una ventana del navegador para que te autentiques con tu cuenta de Koofr. Alternativamente, si prefieres el acceso basado en contraseña, puedes generar una contraseña de aplicación en la configuración de la cuenta de Koofr y usarla junto con tu correo electrónico de Koofr.

Para Backblaze B2, ingresa tu Application Key ID y Application Key generados desde la consola de B2. Especifica el nombre del bucket en la configuración. Una vez guardados ambos remotos, coloca Koofr en el panel del explorador izquierdo y B2 en el derecho para confirmar que ambos son navegables.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Koofr and Backblaze B2 in RcloneView" class="img-large img-center" />

## Ejecutar la migración

Haz clic en **Sincronización** en la pestaña Inicio y configura el trabajo: carpeta de Koofr como origen, bucket de B2 como destino. En Configuración avanzada, activa **Checksum** para la verificación de integridad. Koofr utiliza WebDAV internamente, lo que significa que el listado de archivos puede ser un poco más lento que con S3 nativo, así que establece el número de verificadores (checkers) en 4 para no sobrecargar la API de Koofr.

Ejecuta primero una **simulación (Dry Run)** para ver la lista completa de archivos que se transferirán. Esto es especialmente útil para bibliotecas grandes de Koofr, donde Koofr también agrega archivos de otras cuentas conectadas (Google Drive, Dropbox, etc.): la simulación te ayuda a confirmar que estás migrando solo tu almacenamiento real de Koofr y no las vistas espejo de otros proveedores.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Koofr to Backblaze B2 migration in progress in RcloneView" class="img-large img-center" />

## Gestionar transferencias interrumpidas

Si la migración se interrumpe (caída de red, suspensión del equipo, etc.), el modo de sincronización de RcloneView es inherentemente reanudable. Cuando vuelvas a ejecutar el mismo trabajo de sincronización, rclone compara el origen y el destino, y transfiere únicamente los archivos que aún no están presentes o que son diferentes en el lado de B2. Los archivos ya transferidos no necesitan volver a enviarse.

Después de completar la migración, usa **Comparar carpetas** para verificar que el origen de Koofr y el destino de B2 coincidan. La vista de comparación resalta cualquier archivo presente en Koofr pero ausente en B2, dándote una lista clara de lo que necesita reintentarse.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Koofr to B2 migration runs" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade Koofr (OAuth) y Backblaze B2 (Application Key) como remotos.
3. Ejecuta una simulación para confirmar el alcance y luego realiza la migración con el checksum activado.
4. Usa Comparar carpetas después de finalizar para verificar que la migración fue completamente exitosa.

Migrar de Koofr a Backblaze B2 con RcloneView es un proceso confiable y reanudable que protege la integridad de tus datos en todo momento.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento en la nube de Koofr con RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Migra Koofr a Google Drive con RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-google-drive-rcloneview)
- [Gestiona el almacenamiento en la nube de Backblaze B2 con RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
