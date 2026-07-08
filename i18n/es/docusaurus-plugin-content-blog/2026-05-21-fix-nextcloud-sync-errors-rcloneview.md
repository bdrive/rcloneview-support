---
slug: fix-nextcloud-sync-errors-rcloneview
title: "Corrige errores de sincronización de Nextcloud — Resuelve problemas de WebDAV y autenticación con RcloneView"
authors:
  - morgan
description: "Soluciona errores de sincronización de Nextcloud en RcloneView — corrige fallos de autenticación WebDAV, conflictos de bloqueo de archivos 423, errores SSL y tiempos de espera agotados en transferencias lentas."
keywords:
  - fix Nextcloud sync errors
  - Nextcloud WebDAV authentication error
  - Nextcloud 423 locked fix
  - Nextcloud connection timeout RcloneView
  - Nextcloud SSL certificate error rclone
  - RcloneView Nextcloud troubleshooting
  - Nextcloud backup not working
  - WebDAV sync errors fix
  - rclone Nextcloud 401 error
  - Nextcloud file lock conflict resolution
tags:
  - RcloneView
  - troubleshooting
  - nextcloud
  - tips
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corrige errores de sincronización de Nextcloud — Resuelve problemas de WebDAV y autenticación con RcloneView

> Los fallos de sincronización de Nextcloud en RcloneView casi siempre se remontan a una de cuatro causas raíz — y cada una tiene una solución concreta y reproducible.

Nextcloud es la plataforma de nube autoalojada más ampliamente implementada, pero su interfaz WebDAV introduce una clase distinta de problemas de sincronización. Cuando RcloneView sincroniza hacia o desde un servidor Nextcloud, los errores aparecen como fallos de autenticación 401, respuestas de bloqueo de archivo 423, rechazos de certificado SSL, o transferencias que se detienen a mitad de ejecución. Cada código de error te indica exactamente dónde buscar — y la solución suele ser un único cambio de configuración en RcloneView o en el propio servidor Nextcloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Fallos de autenticación (401 Unauthorized)

Un error 401 en la pestaña **Log** de RcloneView significa que Nextcloud rechazó las credenciales de tu remoto WebDAV. La causa más común es usar tu contraseña de cuenta habitual en lugar de una contraseña de aplicación de Nextcloud. Cuando la autenticación de dos factores está habilitada en tu cuenta de Nextcloud, la contraseña estándar nunca funcionará para el acceso a la API — debes generar una contraseña específica para la aplicación.

Inicia sesión en tu interfaz web de Nextcloud, ve a **Settings > Security > App Passwords**, crea una nueva contraseña de aplicación con una etiqueta reconocible como "RcloneView", y cópiala de inmediato. Luego, en RcloneView, abre **Remote tab > Remote Manager**, selecciona tu remoto de Nextcloud, haz clic en **Edit**, reemplaza la contraseña con la nueva contraseña de aplicación y guarda. Vuelve a ejecutar el trabajo de sincronización fallido y observa la pestaña Log — el error 401 no debería reaparecer.

Si no estás usando autenticación de dos factores y sigues viendo errores 401, verifica que el formato de la URL WebDAV sea correcto. La ruta WebDAV estándar de Nextcloud es `https://your-server.com/remote.php/dav/files/your-username/` — una barra final faltante o un nombre de usuario incorrecto en la ruta produce errores que parecen de autenticación incluso con credenciales válidas.

<img src="/support/images/en/blog/new-remote.png" alt="Editing Nextcloud WebDAV credentials in RcloneView Remote Manager" class="img-large img-center" />

## Conflictos de bloqueo de archivos (423 Locked)

Nextcloud usa bloqueo de archivos del lado del servidor para evitar modificaciones concurrentes, y RcloneView puede recibir respuestas 423 Locked al sincronizar archivos que están abiertos por un cliente de escritorio activo de Nextcloud o una sesión de navegador web. Esto es más común durante el horario laboral, cuando los miembros del equipo están editando archivos activamente mientras también se está ejecutando un trabajo de copia de seguridad programado.

La solución más confiable es la sincronización horaria: programa los trabajos de sincronización de RcloneView para horas de baja actividad — durante la noche o en ventanas predecibles de baja actividad — usando el programador de la licencia PLUS. En **Advanced Settings** del trabajo, reduce el número de transferencias de archivos simultáneas. Menos transferencias paralelas significa menos solicitudes de bloqueo concurrentes, y los bloqueos transitorios se liberan más rápido cuando RcloneView no está saturando el servidor desde todas direcciones a la vez.

RcloneView reintenta las operaciones fallidas hasta tu recuento de reintentos configurado (predeterminado: 3). Después de que un trabajo se complete, revisa **Job History** para ver si algún archivo muestra un estado Errored. Si el número de errores es pequeño, una nueva ejecución manual del trabajo de sincronización resolverá los conflictos de bloqueo restantes una vez que los archivos afectados se hayan cerrado.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Nextcloud sync job history and error details in RcloneView" class="img-large img-center" />

## Errores de certificado SSL

Las instalaciones autoalojadas de Nextcloud frecuentemente usan certificados SSL autofirmados, que rclone rechaza de forma predeterminada. El fallo aparece en la pestaña Log como un error de verificación de certificado. Para evitarlo, abre **Settings tab > Embedded Rclone** y añade `--no-check-certificate` en el campo **Global Rclone Flags**. Esto se aplica globalmente a todos los remotos, así que si algunos remotos usan certificados válidos que te importa verificar, considera en su lugar añadir el certificado autofirmado al almacén de certificados de confianza de tu sistema operativo.

Para servidores Nextcloud detrás de un proxy inverso, confirma que el proxy esté reenviando las cabeceras correctas. Un proxy mal configurado puede causar bucles de redirección que se manifiestan como errores SSL o de conexión incluso cuando el certificado en sí es válido.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring active Nextcloud sync progress in RcloneView Transferring tab" class="img-large img-center" />

## Transferencias lentas y tiempos de espera agotados a mitad de trabajo

La capa WebDAV de Nextcloud es más lenta que los backends compatibles con S3 para directorios con muchos archivos pequeños. Si un trabajo de sincronización agota el tiempo de espera o se detiene en carpetas grandes, comienza con una **Dry Run** para contar el total de archivos involucrados. Para directorios con decenas de miles de archivos pequeños, reduce el número de transferencias simultáneas en **Advanced Settings** y aumenta el **retry count** para darle al servidor más tiempo de recuperación entre lotes.

Aplica filtros de tamaño de archivo y antigüedad en el Paso 3 del asistente de sincronización para dividir trabajos grandes en lotes más pequeños: sincroniza primero los archivos modificados en los últimos 30 días, luego ejecuta los archivos más antiguos por separado. Esto mantiene cada ejecución dentro de un alcance manejable y reduce la probabilidad de que un único tiempo de espera agotado interrumpa una transferencia de horas de duración.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Nextcloud sync job after adjusting transfer settings in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Después de cualquier sincronización fallida de Nextcloud, abre la pestaña **Log** y anota el código de error HTTP antes de cambiar nada.
3. Para errores 401: regenera una contraseña de aplicación en Nextcloud Settings y actualiza las credenciales de tu remoto.
4. Para errores 423: reprograma el trabajo para horas de baja actividad y reduce las transferencias paralelas en Advanced Settings.

Leer primero el código de error convierte la resolución de problemas de Nextcloud de una conjetura en una solución predecible de cinco minutos.

---

**Guías relacionadas:**

- [Gestiona Nextcloud — Sincronización y copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/manage-nextcloud-cloud-sync-backup-rcloneview)
- [Sincroniza Nextcloud con Google Drive usando RcloneView](https://rcloneview.com/support/blog/sync-nextcloud-to-google-drive-rcloneview)
- [Corrige errores de conexión y autenticación WebDAV con RcloneView](https://rcloneview.com/support/blog/fix-webdav-connection-authentication-errors-rcloneview)

<CloudSupportGrid />
