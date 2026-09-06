---
slug: fix-google-cloud-storage-auth-errors-rcloneview
title: "Solucionar errores de autenticación de Google Cloud Storage — Resuélvelos con RcloneView"
authors:
  - morgan
description: "Soluciona los fallos de autenticación de Google Cloud Storage en RcloneView, desde Project Numbers faltantes hasta tokens OAuth caducados."
keywords:
  - error de autenticación de Google Cloud Storage
  - solucionar errores de autenticación de GCS
  - Google Cloud Storage Project Number
  - token OAuth de GCS caducado
  - RcloneView Google Cloud Storage
  - Google Cloud Storage permiso denegado
  - solución de problemas de conexión GCS
  - reparar autenticación de almacenamiento en la nube
tags:
  - RcloneView
  - troubleshooting
  - tips
  - google-cloud-storage
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de autenticación de Google Cloud Storage — Resuélvelos con RcloneView

> La mayoría de los fallos de autenticación de Google Cloud Storage en RcloneView se reducen a un campo faltante o un token caducado — así se aíslan y corrigen ambos.

Google Cloud Storage se diferencia de una conexión personal de Google Drive: requiere un Project Number durante la configuración del remoto, y su modelo de permisos se rige por roles IAM en lugar de una simple compartición de cuenta. Cuando alguno de estos dos elementos está mal configurado, RcloneView lanza un error de autenticación o de permisos en el momento en que intentas explorar el bucket. Esta guía repasa las causas más comunes y cómo resolver cada una directamente dentro de RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Diagnosticar la causa raíz

Los errores de autenticación en un remoto de Google Cloud Storage se dividen generalmente en tres grupos: un Project Number faltante o incorrecto introducido al crear el remoto, un token OAuth que ha caducado o ha sido revocado desde el lado de la cuenta de Google, o un rol IAM en la cuenta de servicio que no otorga acceso de lectura/escritura al bucket de destino. Abre primero el Remote Manager y revisa la configuración del remoto — si el campo Project Number está vacío o no coincide con el proyecto propietario del bucket, esa es casi siempre la causa.

<img src="/support/images/en/blog/new-remote.png" alt="Revisando la configuración del remoto de Google Cloud Storage en Remote Manager" class="img-large img-center" />

Si el Project Number parece correcto, el siguiente sospechoso es la propia sesión OAuth. Los tokens pueden invalidarse por un cambio de contraseña, una autorización de app revocada en la configuración de seguridad de tu cuenta de Google, o simplemente por caducar tras un largo periodo de inactividad.

## Reautenticar y corregir la configuración del proyecto

Para corregir un token caducado, edita el remoto y vuelve a ejecutar el flujo de inicio de sesión OAuth basado en el navegador — esto renueva las credenciales sin necesidad de reconstruir el remoto desde cero. Para una discrepancia de Project Number, actualiza el campo con el ID de proyecto correcto que aparece en tu Google Cloud Console, luego guarda y vuelve a conectar.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Reautenticando un remoto de Google Cloud Storage tras un error de token" class="img-large img-center" />

RcloneView monta Y sincroniza más de 90 proveedores desde una sola ventana en Windows, macOS y Linux, así que en cuanto el remoto se reconecte podrás reanudar de inmediato cualquier trabajo de sincronización o montaje interrumpido sin tener que reconfigurar nada más. Antes de reconstruir un trabajo de sincronización grande, usa la Rclone Terminal integrada para ejecutar `rclone about "yourremote:"` — una forma rápida de confirmar que la corrección funcionó antes de confiarle una transferencia real.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Probando una conexión de Google Cloud Storage antes de reanudar un trabajo de sincronización" class="img-large img-center" />

## Prevenir fallos recurrentes

Si el error sigue repitiéndose con cierta regularidad, comprueba si el rol IAM subyacente de Google Cloud se definió con un alcance demasiado limitado — un rol que solo otorga acceso de lectura se autenticará correctamente pero fallará en cualquier operación de subida o borrado, lo que puede parecer un error de autenticación intermitente en lugar de un problema de permisos. Para casos persistentes o poco claros, activa Enable rclone Logging en Settings con el nivel de registro en DEBUG, reproduce el fallo y revisa las entradas detalladas del registro en la pestaña Log para identificar exactamente qué llamada a la API está siendo rechazada.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre el Remote Manager y verifica el Project Number de tu remoto de Google Cloud Storage.
3. Vuelve a ejecutar el inicio de sesión OAuth si el token ha caducado, o corrige el Project Number si no coincide.
4. Confirma la corrección con `rclone about` en la pestaña Terminal antes de reanudar trabajos de sincronización o copia de seguridad.

Una revisión de cinco minutos de estos dos ajustes resuelve la gran mayoría de los problemas de autenticación de Google Cloud Storage.

---

**Guías relacionadas:**

- [Gestionar buckets de Google Cloud Storage — Sincroniza y haz copias de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-google-cloud-storage-buckets-rcloneview)
- [Solucionar token OAuth caducado — Resuelve errores de sincronización en la nube con RcloneView](https://rcloneview.com/support/blog/fix-cloud-oauth-token-expired-refresh-rcloneview)
- [Sincronizar Amazon S3 con Google Cloud Storage usando RcloneView](https://rcloneview.com/support/blog/sync-s3-to-google-cloud-storage-rcloneview)

<CloudSupportGrid />
