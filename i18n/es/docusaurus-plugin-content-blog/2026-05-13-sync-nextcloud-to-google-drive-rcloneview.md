---
slug: sync-nextcloud-to-google-drive-rcloneview
title: "Sincronizar Nextcloud con Google Drive — Migra y Respalda Archivos con RcloneView"
authors:
  - tayson
description: "Aprende a sincronizar Nextcloud con Google Drive usando RcloneView. Transfiere archivos desde tu servidor Nextcloud autoalojado a Google Drive con soporte de automatización completo."
keywords:
  - sincronización de Nextcloud a Google Drive
  - migrar Nextcloud a Google Drive
  - RcloneView Nextcloud Google Drive
  - sincronizar nube autoalojada con Google Drive
  - sincronización Nextcloud WebDAV RcloneView
  - copia de seguridad de Nextcloud a Google Drive
  - migración de nube autoalojada RcloneView
  - transferir archivos de Nextcloud a Google Drive
  - sincronización automatizada Nextcloud Google Drive
  - transferencia en la nube WebDAV RcloneView
tags:
  - nextcloud
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincronizar Nextcloud con Google Drive — Migra y Respalda Archivos con RcloneView

> Nextcloud te da control total sobre tus datos — RcloneView añade el puente hacia Google Drive para redundancia, migración o acceso en equipo.

Nextcloud otorga a las organizaciones la propiedad de su infraestructura de almacenamiento, pero los datos autoalojados aún necesitan una copia externa. Sincronizar Nextcloud con Google Drive mediante RcloneView crea una segunda copia en una plataforma de nube importante sin necesidad de scripts ni transferencias manuales de archivos. Ya sea que estés abandonando por completo la infraestructura autoalojada o manteniendo Nextcloud como almacén principal con Google Drive como copia de seguridad secundaria, RcloneView gestiona la transferencia a través de una interfaz visual de sincronización con soporte de programación incluido.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurar Ambos Remotos en RcloneView

Necesitas dos remotos configurados antes de crear el trabajo de sincronización. Para Google Drive, ve a la pestaña **Remote**, haz clic en **New Remote** y selecciona Google Drive — se abre una ventana del navegador para la autenticación OAuth, así que no hay que gestionar claves API ni credenciales manualmente. Para Nextcloud, selecciona **WebDAV** como tipo de remoto. Introduce la URL de tu servidor Nextcloud con el formato `https://your-nextcloud.example.com/remote.php/dav/files/username/`, junto con tu nombre de usuario y contraseña de Nextcloud (o una contraseña de aplicación si la autenticación de dos factores está activa en tu cuenta).

<img src="/support/images/en/blog/new-remote.png" alt="Adding Nextcloud WebDAV and Google Drive remotes in RcloneView" class="img-large img-center" />

Una vez guardados ambos remotos, haz clic en cada uno desde el panel del explorador para verificar la conexión. Una conexión exitosa a Nextcloud muestra la estructura de carpetas de tu directorio principal; Google Drive muestra la raíz de tu Drive. Si Nextcloud devuelve un error de autenticación, confirma que la URL incluye la ruta WebDAV completa — omitir `/remote.php/dav/files/username/` es el error de configuración más común.

## Crear el Trabajo de Sincronización de Nextcloud a Google Drive

Con ambos remotos verificados, abre **Job Manager** desde la pestaña Home y crea un nuevo trabajo de **Sync**. En el Paso 1, establece tu ruta de Nextcloud como origen y tu carpeta de Google Drive como destino. Confirma que la dirección de sincronización esté configurada como unidireccional (el origen modifica solo el destino) — esto refleja el contenido de Nextcloud en Google Drive sin alterar tus archivos de Nextcloud.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Nextcloud to Google Drive sync job in RcloneView" class="img-large img-center" />

En el Paso 2, configura las transferencias concurrentes según la capacidad de subida de tu servidor. Para bibliotecas grandes de Nextcloud — la carpeta de proyecto compartida de un equipo de diseño con 200 GB de recursos, por ejemplo — aumentar las transferencias concurrentes acelera la población inicial del destino en Google Drive. Activa la verificación de **checksum** cuando la integridad de los datos sea crítica; esto confirma que cada archivo transferido coincide con el origen por hash de contenido, no solo por tamaño de archivo.

## Filtrar Carpetas del Sistema y Metadatos

Los servidores Nextcloud acumulan carpetas del sistema, cachés de miniaturas y archivos temporales que no deberían estar en un espejo de Google Drive. En el Paso 3 del asistente de trabajo, añade reglas de filtro para excluir estas rutas. Patrones como `.nextcloud/` o `.thumbs/` omiten directorios de metadatos que añaden ruido a tu destino sin aportar valor. Los preajustes de filtro predefinidos de RcloneView para Imágenes, Documentos y Videos te permiten limitar la sincronización a solo los tipos de archivo que le interesan a tu equipo.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Nextcloud to Google Drive sync job in RcloneView" class="img-large img-center" />

Antes de ejecutar el trabajo en producción, usa la opción **Dry Run** desde Job Manager para previsualizar todas las operaciones planificadas. La ejecución en seco enumera cada archivo que se copiará sin realizar ningún cambio — una comprobación útil antes de comprometerte con una gran transferencia inicial.

## Automatizar la Sincronización con un Horario

Una vez validada la ejecución en seco, guarda el trabajo y — con una licencia PLUS — adjunta un horario en el Paso 4. Un horario nocturno tipo cron mantiene tu copia de Google Drive actualizada con los cambios diarios de Nextcloud sin intervención manual. Las notificaciones de finalización de sincronización te avisan cuando cada ejecución programada se completa con éxito.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Nextcloud to Google Drive sync in RcloneView" class="img-large img-center" />

## Primeros Pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade un remoto de **Google Drive** (inicio de sesión OAuth en el navegador) y un remoto de **Nextcloud** (URL WebDAV + credenciales) mediante New Remote.
3. Crea un trabajo de **Sync** con tu ruta de Nextcloud como origen y una carpeta de Google Drive como destino.
4. Ejecuta un **Dry Run** para verificar el alcance, luego guarda con un horario para la sincronización automatizada continua.

Mantener una copia sincronizada de Google Drive de tus datos de Nextcloud garantiza que una interrupción del servidor o una eliminación accidental nunca signifiquen la pérdida permanente de datos.

---

**Guías Relacionadas:**

- [Sincronizar Nextcloud con Backblaze B2 con RcloneView](https://rcloneview.com/support/blog/sync-nextcloud-to-backblaze-b2-rcloneview)
- [Gestionar la Sincronización y Copia de Seguridad en la Nube de Nextcloud con RcloneView](https://rcloneview.com/support/blog/manage-nextcloud-cloud-sync-backup-rcloneview)
- [Migrar Seafile a Google Drive con RcloneView](https://rcloneview.com/support/blog/migrate-seafile-to-google-drive-rcloneview)

<CloudSupportGrid />
