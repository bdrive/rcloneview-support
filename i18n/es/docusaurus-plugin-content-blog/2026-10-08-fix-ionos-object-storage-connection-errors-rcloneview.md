---
slug: fix-ionos-object-storage-connection-errors-rcloneview
title: "Solucionar errores de conexión de IONOS Object Storage — Problemas de endpoint y claves resueltos con RcloneView"
authors:
  - casey
description: "Diagnostica errores de conexión de IONOS Object Storage, como endpoints incorrectos, claves rechazadas y fallos al listar, con los registros de RcloneView y el terminal integrado."
keywords:
  - solucionar errores de IONOS Object Storage
  - error de conexión IONOS S3
  - endpoint y región de IONOS
  - clave de acceso de IONOS denegada
  - RcloneView IONOS
  - solución de problemas de almacenamiento compatible con S3
  - rclone IONOS
  - listado de buckets de IONOS
  - GUI de almacenamiento de objetos
  - solución de problemas de sincronización en la nube
tags:
  - RcloneView
  - troubleshooting
  - tips
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de conexión de IONOS Object Storage — Problemas de endpoint y claves resueltos con RcloneView

> La mayoría de los fallos de conexión de IONOS Object Storage se deben al endpoint, a la región o al par de claves, y RcloneView ofrece una forma basada en GUI de comprobar cada uno.

Se accede a IONOS Object Storage mediante el protocolo S3 de rclone, así que un endpoint mal escrito o unas claves intercambiadas pueden producir errores que parecen no tener relación. RcloneView te permite inspeccionar el remoto, leer los registros y probar comandos en el terminal integrado sin salir de la aplicación.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Comprueba primero el endpoint y la región

Los proveedores compatibles con S3 requieren una Access Key, una Secret Key y un endpoint. Si el endpoint no coincide con la región donde se creó el bucket, las solicitudes fallan aunque las claves sean correctas. Los síntomas típicos son tiempos de espera agotados, mensajes "no such host" o un bucket que no se encuentra.

Abre Remote Manager desde la pestaña Remote, edita el remoto de IONOS y compara el endpoint con el que aparece en tu panel de control de IONOS para la región de ese bucket.

<img src="/support/images/en/blog/new-remote.png" alt="Edición del endpoint de un remoto de IONOS Object Storage en RcloneView" class="img-large img-center" />

## Vuelve a introducir y probar el par de claves

Los errores de acceso denegado o de firma suelen indicar que la Access Key o la Secret Key se pegaron con espacios adicionales, o que la clave fue regenerada. Vuelve a introducir ambos valores, guarda y explora la raíz del remoto en un panel Explorer.

Si prefieres la línea de comandos, abre la pestaña Terminal y ejecuta `rclone listremotes` y luego `rclone about "yourremote:"` para confirmar que el remoto responde. El terminal usa la misma configuración que la GUI, por lo que el resultado te muestra exactamente lo que ve la aplicación.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Exploración del remoto de IONOS en un panel Explorer de RcloneView" class="img-large img-center" />

## Captura registros para los errores persistentes

Si la causa sigue sin estar clara, abre Settings > Embedded Rclone, activa rclone Logging, establece el nivel en DEBUG y reinicia el rclone integrado. Reproduce el fallo y lee el registro: muestra la solicitud exacta y el código de respuesta. Revisa también Global Rclone Flags en la misma página de ajustes, ya que un flag olvidado puede cambiar el comportamiento de la conexión.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History mostrando un trabajo de sincronización fallido de IONOS Object Storage" class="img-large img-center" />

## Confirma la recuperación con un Dry Run

Cuando el remoto se liste correctamente, vuelve a ejecutar tu trabajo de sincronización con un Dry Run para previsualizar las copias y eliminaciones. Reduce las transferencias simultáneas en Step 2 si los errores aparecen solo con carga alta, y mantén los reintentos en el valor predeterminado de 3.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ejecución de un trabajo verificado de IONOS Object Storage en RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Verifica en Remote Manager que el endpoint de IONOS coincide con la región de tu bucket.
3. Vuelve a introducir la Access Key y la Secret Key, y prueba con `rclone about` en la pestaña Terminal.
4. Activa el registro DEBUG si es necesario y confirma con un Dry Run.

Comprobar el endpoint, las claves y los registros en orden convierte un confuso error de conexión en una breve lista de verificación.

---

**Guías relacionadas:**

- [Gestiona IONOS Object Storage — Sincronización en la nube con RcloneView](https://rcloneview.com/support/blog/manage-ionos-object-storage-cloud-sync-rcloneview)
- [Solucionar errores de permisos de acceso denegado en S3 con RcloneView](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)
- [Solucionar errores de conexión y autenticación de MinIO con RcloneView](https://rcloneview.com/support/blog/fix-minio-connection-authentication-errors-rcloneview)

<CloudSupportGrid />
