---
slug: sync-nextcloud-to-backblaze-b2-rcloneview
title: "Sincroniza Nextcloud con Backblaze B2 — Copia de seguridad externa con RcloneView"
authors:
  - tayson
description: "Realiza copias de seguridad de tus datos de Nextcloud autoalojado en Backblaze B2 usando RcloneView. Conéctate mediante WebDAV y App Key, y luego programa copias de seguridad externas automatizadas."
keywords:
  - copia de seguridad de Nextcloud a Backblaze B2
  - copia de seguridad externa de Nextcloud con RcloneView
  - sincronización de Nextcloud WebDAV a B2
  - copia de seguridad de Nextcloud autoalojado
  - copia de seguridad en la nube de Nextcloud a Backblaze B2
  - copia de seguridad automatizada de Nextcloud
  - recuperación ante desastres de Nextcloud
  - copia de seguridad WebDAV con RcloneView
tags:
  - RcloneView
  - nextcloud
  - backblaze-b2
  - backup
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincroniza Nextcloud con Backblaze B2 — Copia de seguridad externa con RcloneView

> Nextcloud es excelente para la colaboración autoalojada, pero sin una copia de seguridad externa, un solo fallo del servidor puede significar la pérdida permanente de datos — RcloneView lo sincroniza automáticamente con Backblaze B2.

Alojar tu propio Nextcloud te da control total sobre tus datos, pero ese control conlleva responsabilidad. Si tu servidor sufre daños, es víctima de un ransomware o se retira sin una copia de seguridad adecuada, no hay red de seguridad. Backblaze B2 ofrece almacenamiento de objetos externo asequible y duradero que combina perfectamente con Nextcloud. RcloneView conecta Nextcloud mediante WebDAV y B2 mediante Application Key, ofreciéndote una interfaz gráfica para configurar y programar copias de seguridad recurrentes.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Nextcloud mediante WebDAV

Abre RcloneView y ve a **Remote Manager**. Haz clic en **New Remote** y selecciona **WebDAV**. Nextcloud expone sus archivos a través de WebDAV en una ruta estándar. Completa:

- **URL**: `https://your-nextcloud-domain/remote.php/dav/files/your-username/`
- **Vendor**: Nextcloud
- **User**: tu nombre de usuario de Nextcloud
- **Password**: la contraseña de tu cuenta de Nextcloud (o una contraseña de aplicación si tienes 2FA activado)

Guarda el remoto y ábrelo en el Explorador de archivos para confirmar que aparecen tus archivos de Nextcloud. Navega por algunas carpetas para verificar el acceso.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Nextcloud WebDAV remote in RcloneView" class="img-large img-center" />

## Conectar Backblaze B2

De vuelta en **Remote Manager**, haz clic en **New Remote** y selecciona **Backblaze B2**. En la consola de Backblaze, ve a **App Keys** y crea una clave con acceso de lectura/escritura a tu bucket de copia de seguridad. Introduce el **Application Key ID** y la **Application Key** en RcloneView. Guarda el remoto y ábrelo para verificar que se puede acceder a tus buckets de B2.

Crea el bucket de destino si aún no lo has hecho — para las copias de seguridad de Nextcloud, un bucket dedicado (por ejemplo, `nextcloud-backup`) mantiene todo organizado.

## Configurar el trabajo de copia de seguridad

Ve a **Jobs** y haz clic en **New Job**. Configura:

- **Source**: tu remoto WebDAV de Nextcloud, apuntando a la raíz o a un directorio específico
- **Destination**: tu remoto de Backblaze B2 y el bucket de copia de seguridad

En el paso 2 del asistente del trabajo, opciones recomendadas para las copias de seguridad de Nextcloud:

- Configura **transfers** en 4 (WebDAV tiene sobrecarga por conexión, por lo que una concurrencia más baja es más estable)
- Activa la **verificación de checksum** para garantizar la integridad
- Activa **Dry Run** en la primera ejecución para revisar el alcance antes de confirmar

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Nextcloud to Backblaze B2 backup job in RcloneView" class="img-large img-center" />

## Programar copias de seguridad automatizadas

Con una licencia PLUS, añade una programación en el paso 3 del asistente del trabajo usando la sintaxis cron. Para copias de seguridad diarias a la 1 AM: `0 1 * * *`. Para semanales: `0 1 * * 0`. RcloneView ejecuta el trabajo silenciosamente en segundo plano a la hora programada y registra el resultado en **Job History**.

Cada entrada de Job History muestra: archivos comprobados, archivos transferidos (solo se reenvían los archivos modificados), volumen de datos, duración y cualquier error. Esto te permite confirmar rápidamente que la copia de seguridad nocturna se realizó correctamente sin necesidad de abrir la aplicación manualmente.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Nextcloud to Backblaze B2 backup in RcloneView" class="img-large img-center" />

## Notas sobre la estrategia de copia de seguridad

- El trabajo de sincronización de RcloneView es incremental por defecto — solo se transfieren los archivos nuevos o modificados después de la ejecución inicial
- Considera mantener un versionado tipo **--backup-dir** si quieres conservar los archivos eliminados en B2
- Para las copias de seguridad de la base de datos de Nextcloud, estas deben gestionarse por separado (mysqldump o similar), pero todos los datos de archivos en el directorio de datos de Nextcloud se sincronizan sin problemas mediante WebDAV

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Conecta Nextcloud mediante WebDAV en **Remote Manager** usando la URL de tu servidor y tus credenciales.
3. Conecta Backblaze B2 usando tu Application Key ID y Application Key.
4. Crea y programa un trabajo de sincronización de Nextcloud a B2 para realizar copias de seguridad externas nocturnas automatizadas.

Una copia de seguridad automatizada de Nextcloud → Backblaze B2 ejecutándose cada noche significa que tus datos autoalojados tienen redundancia de nivel empresarial a un costo mínimo.

---

**Guías relacionadas:**

- [Sincroniza Nextcloud con Google Drive y S3 con RcloneView](https://rcloneview.com/support/blog/sync-nextcloud-google-drive-s3-rcloneview)
- [Copia de seguridad de Nextcloud WebDAV con RcloneView](https://rcloneview.com/support/blog/backup-nextcloud-webdav-with-rcloneview)
- [Automatiza copias de seguridad diarias en la nube con RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
