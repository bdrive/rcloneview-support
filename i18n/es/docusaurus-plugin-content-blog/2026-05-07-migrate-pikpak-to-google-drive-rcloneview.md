---
slug: migrate-pikpak-to-google-drive-rcloneview
title: "Migrar de PikPak a Google Drive — Transfiere archivos con RcloneView"
authors:
  - tayson
description: "Guía paso a paso para migrar archivos de PikPak a Google Drive usando la transferencia de nube a nube de RcloneView — configura ambos remotos y transfiere sin descargar localmente."
keywords:
  - PikPak a Google Drive
  - migración de PikPak
  - RcloneView PikPak
  - transferencia de nube a nube
  - exportación de PikPak
  - importación a Google Drive
  - rclone PikPak
  - migración de archivos en la nube
tags:
  - RcloneView
  - pikpak
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de PikPak a Google Drive — Transfiere archivos con RcloneView

> Los usuarios de PikPak que buscan mover sus archivos a Google Drive pueden hacerlo completamente en la nube con RcloneView — sin necesidad de descargar todo a tu equipo local primero.

PikPak es un servicio popular de almacenamiento en la nube y descargas fuera de línea, ampliamente utilizado en Asia, valorado por su capacidad de guardar torrents y enlaces magnet directamente en la nube. A medida que los usuarios buscan migrar fuera de PikPak o simplemente desean mantener una copia de seguridad de sus archivos de PikPak en Google Drive, RcloneView ofrece el camino más limpio: una transferencia de nube a nube que mueve los archivos directamente entre ambos proveedores sin pasar por tu disco local. RcloneView incluye un binario de rclone integrado, por lo que no hay nada adicional que instalar.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurar tu remoto de PikPak

Haz clic en **New Remote** en RcloneView y selecciona **PikPak** de la lista de proveedores. Ingresa tu **nombre de usuario** de PikPak (dirección de correo electrónico) y tu **contraseña**. RcloneView se autenticará con la API de PikPak y se conectará a tu cuenta. Después de guardar, tu remoto de PikPak aparecerá en el explorador de doble panel, donde podrás navegar por tus archivos y carpetas como si fuera un sistema de archivos local.

Antes de comenzar una migración, dedica unos minutos a explorar la estructura de carpetas de PikPak para entender cómo está organizado tu contenido. Toma nota de las carpetas grandes o estructuras profundamente anidadas que podrían beneficiarse de transferirse en trabajos separados en lugar de un único lote masivo.

<img src="/support/images/en/blog/new-remote.png" alt="Adding PikPak as a remote in RcloneView" class="img-large img-center" />

## Agregar Google Drive

Haz clic en **New Remote** nuevamente y selecciona **Google Drive**. RcloneView abrirá una pestaña del navegador para la autorización OAuth de Google — inicia sesión con tu cuenta de Google y concede los permisos solicitados. Una vez completado el flujo de OAuth, el remoto de Google Drive estará disponible en el explorador junto a tu remoto de PikPak.

Crea una carpeta de destino dedicada para la migración en Google Drive — por ejemplo, `PikPak Import/` — antes de iniciar la transferencia. Esto mantiene el contenido migrado organizado y facilita verificar que la transferencia se completó correctamente comparando los tamaños de carpetas entre PikPak y Google Drive.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="PikPak and Google Drive open side by side for migration in RcloneView" class="img-large img-center" />

## Ejecutar la transferencia de nube a nube

Con ambos remotos abiertos en la vista de doble panel, puedes arrastrar carpetas de PikPak directamente hacia Google Drive para migraciones pequeñas. Para migraciones más grandes, el **Job Wizard** es más confiable. Configura PikPak como origen, tu carpeta de destino en Google Drive como destino, y elige el modo **Copy** (para copiar archivos sin eliminar nada de PikPak).

Ejecuta siempre una **prueba en seco (dry run)** primero. Las cuentas de PikPak pueden contener miles de archivos acumulados de descargas fuera de línea, y la prueba en seco te da una imagen clara del volumen de la transferencia antes de confirmarla. Una vez satisfecho, ejecuta el trabajo real. El **Job Manager** de RcloneView muestra el progreso en vivo, incluyendo los nombres de los archivos actuales y los conteos de transferencia. Revisa el **Job History** al finalizar para confirmar que todos los archivos se transfirieron correctamente.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a PikPak to Google Drive migration job in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Haz clic en **New Remote** > **PikPak** e ingresa tu nombre de usuario y contraseña de PikPak.
3. Haz clic en **New Remote** > **Google Drive** y completa la autorización OAuth.
4. Crea una carpeta `PikPak Import/` en Google Drive como destino de la migración.
5. Usa el **Job Wizard** para crear un trabajo de copia, ejecuta una prueba en seco y luego realiza la migración completa.

Migrar de PikPak a Google Drive a través de RcloneView es un proceso optimizado que gestiona incluso bibliotecas en la nube grandes de manera confiable y sin sobrecarga de almacenamiento local.

---

**Guías relacionadas:**

- [Gestionar descargas en la nube de PikPak con RcloneView](https://rcloneview.com/support/blog/manage-pikpak-cloud-downloads-rcloneview)
- [Gestionar Google Drive — Sincronización y copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Migración de nube a nube con RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)

<CloudSupportGrid />
