---
slug: migrate-jottacloud-to-google-drive-rcloneview
title: "Migra de Jottacloud a Google Drive — Transfiere archivos con RcloneView"
authors:
  - tayson
description: "Guía paso a paso para migrar archivos de Jottacloud a Google Drive usando la transferencia de nube a nube de RcloneView — configura ambos remotos y ejecuta tu trabajo de migración."
keywords:
  - Jottacloud migration
  - Jottacloud to Google Drive
  - RcloneView migration
  - cloud-to-cloud transfer
  - Jottacloud export
  - cloud storage migration
  - rclone Jottacloud
  - Google Drive import
tags:
  - jottacloud
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra de Jottacloud a Google Drive — Transfiere archivos con RcloneView

> Mover tus archivos de Jottacloud a Google Drive es sencillo con RcloneView — conecta ambos remotos y transfiere directamente en la nube sin necesidad de descargar todo primero.

Jottacloud es un servicio de almacenamiento en la nube noruego que ha sido popular por sus ofertas de almacenamiento ilimitado, pero muchos usuarios ahora buscan migrar a plataformas de acceso más universal como Google Drive. Ya sea que te estés mudando por cambios de plan, precios, o simplemente para consolidar tu almacenamiento en la nube, RcloneView hace que el proceso de migración sea limpio y confiable. No es necesario descargar todos tus archivos localmente primero — RcloneView los transfiere directamente de Jottacloud a Google Drive como una operación de nube a nube.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurando tu remoto de Jottacloud

Haz clic en **New Remote** en RcloneView y selecciona **Jottacloud** de la lista de proveedores. RcloneView te guiará a través del proceso de autenticación — Jottacloud usa un flujo de inicio de sesión basado en dispositivo donde te conectas a través de un navegador, y el token resultante se almacena de forma segura en RcloneView. Después de la autenticación, tu cuenta de Jottacloud aparece en el explorador, incluyendo tu archivo personal, carpetas de copia de seguridad y cualquier contenido compartido.

Antes de iniciar la migración, explora la estructura de carpetas de tu Jottacloud para entender cómo está organizado tu contenido. Toma nota de cualquier nombre de carpeta con caracteres especiales o estructuras profundamente anidadas, ya que estos ocasionalmente pueden causar problemas durante migraciones grandes.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Jottacloud as a remote in RcloneView" class="img-large img-center" />

## Añadiendo Google Drive

Haz clic en **New Remote** de nuevo y selecciona **Google Drive**. RcloneView abre una pestaña del navegador para la autorización OAuth de Google — inicia sesión con tu cuenta de Google y concede los permisos solicitados. Una vez completada la autorización, el remoto de Google Drive está disponible en el explorador.

Crea una carpeta de destino en Google Drive antes de iniciar la migración — por ejemplo, `Jottacloud Import/` — para mantener los archivos migrados organizados y separados de cualquier contenido existente. Esto facilita verificar el resultado de la migración sin confusión sobre de dónde vino cada archivo.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Google Drive and Jottacloud open side by side in RcloneView" class="img-large img-center" />

## Ejecutando el trabajo de migración

Con ambos remotos configurados, abre el **Job Wizard** en el Job Manager. Establece Jottacloud como origen (selecciona la carpeta de nivel superior o una subcarpeta específica que quieras migrar) y la carpeta de destino de Google Drive como objetivo. Elige el modo **Copy** en lugar del modo **Sync** para una migración — esto asegura que los archivos se copien sin eliminar nada en el origen.

Ejecuta siempre primero una **dry run** (ejecución de prueba) para ver exactamente qué archivos se transferirán. Para cuentas grandes de Jottacloud con miles de archivos, la salida de la dry run te ayuda a detectar posibles problemas antes de comprometerte con la transferencia completa. Una vez satisfecho, ejecuta el trabajo real. El **Job Manager** de RcloneView muestra el progreso en vivo, y **Job History** registra el conteo final de transferencia y cualquier error.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Jottacloud to Google Drive migration job in RcloneView" class="img-large img-center" />

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Haz clic en **New Remote** > **Jottacloud** y completa la autenticación por navegador.
3. Haz clic en **New Remote** > **Google Drive** y completa la autorización OAuth.
4. Crea una carpeta de destino en Google Drive para el contenido migrado.
5. Usa el **Job Wizard** para crear un trabajo de copia, ejecuta una dry run y luego realiza la migración completa.

Con RcloneView, migrar de Jottacloud a Google Drive es un trabajo único que toma minutos configurar y se ejecuta automáticamente hasta completarse.

---

**Guías relacionadas:**

- [Administra Jottacloud — Sincronización y copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Administra Google Drive — Sincronización y copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Migra de Jottacloud a Backblaze B2 con RcloneView](https://rcloneview.com/support/blog/migrate-jottacloud-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
