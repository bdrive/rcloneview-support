---
slug: fix-google-photos-sync-errors-rcloneview
title: "Solucionar errores de sincronización de Google Photos — biblioteca vacía, 403 Forbidden y problemas de solo lectura en RcloneView"
authors:
  - steve
description: "Resuelve los errores más comunes de Google Photos en RcloneView: un remoto que aparece vacío o sin cambios, 403 Forbidden por un ID de cliente retirado o límites de frecuencia, errores de destino de solo lectura y archivos que faltan tras la subida."
keywords:
  - errores de sincronización de Google Photos RcloneView
  - carpeta vacía de Google Photos rclone
  - Google Photos 403 ID de cliente
  - solucionar problemas de copia de seguridad de Google Photos
  - errores de Google Photos rclone
  - error de cuota de la API de Google Photos
  - solución de problemas de Google Photos en RcloneView
  - problemas al subir a Google Photos
  - solución de copia de seguridad de Google Photos
tags:
  - RcloneView
  - google-photos
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de sincronización de Google Photos — biblioteca vacía, 403 Forbidden y problemas de solo lectura en RcloneView

> Google Photos tiene restricciones de API que ningún otro almacenamiento en la nube tiene. La mayoría de los "errores" que aparecen en RcloneView son simplemente las reglas de Google en acción: aquí te explicamos qué significa cada uno y qué hacer.

Google Photos es muy popular para guardar fotos personales, pero su backend en rclone se comporta de forma muy distinta a la de una unidad en la nube convencional. Desde el 31 de marzo de 2025, la API de Google Photos solo muestra a una aplicación de terceros los archivos multimedia que esa misma aplicación subió; los archivos existentes no se pueden modificar ni eliminar a través de la API; y los límites de frecuencia son más estrictos que los de Google Drive. Comprender estas restricciones es el primer paso para resolver los errores al trabajar con Google Photos en RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## El remoto aparece vacío — "No Changes Detected" o 0 archivos copiados

El caso más frecuente: añades un remoto de Google Photos, lo abres en el Explorador y casi no hay nada, o un trabajo de Copy hacia tu NAS termina en segundos con cero archivos transferidos. No hay nada roto. El 31 de marzo de 2025 Google eliminó los permisos (scopes) de la API que permitían a las aplicaciones de terceros leer toda la biblioteca de un usuario. En palabras de Google, las aplicaciones "can now only list, search, and retrieve albums and media items that were created by your app." Por lo tanto, RcloneView solo ve las fotos que se subieron a través de RcloneView o rclone; las subidas desde el móvil y la web son invisibles, y los álbumes compartidos devuelven `403 PERMISSION_DENIED`.

RcloneView 1.6 y posteriores explican esta restricción dentro de la aplicación cuando abres un remoto de Google Photos, de modo que ya no parece una cuenta vacía.

Qué hacer: usa **Google Takeout** para exportar tu biblioteca existente (idealmente entregada en Google Drive) y deja que RcloneView copie la exportación a tu unidad externa, NAS u otro almacenamiento en la nube. La guía completa está en [Cómo hacer una copia de seguridad de Google Photos en una unidad externa o NAS](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview).

## Error: "403 Forbidden" — ID de cliente retirado o límite de frecuencia

Un `403` de Google Photos tiene dos causas distintas. Consulta la **pestaña Log** de RcloneView para distinguirlas.

**403 al conectar o al listar — el ID de cliente compartido.** El ID de cliente de Google Photos incorporado en rclone se retirará durante 2026, y Google ahora exige que cada usuario se conecte con su propio ID de cliente OAuth. Si el remoto no logra conectarse o se rechazan todas las solicitudes, esta es la causa. RcloneView 1.6 y posteriores te guían en el asistente de conexión para crear tu propio ID de cliente cuando no se puede establecer la conexión; la [documentación de Google Photos de rclone](https://rclone.org/googlephotos/#making-your-own-client-id) describe los mismos pasos en la Google Cloud Console.

**403 con `userRateLimitExceeded` durante las subidas — la cuota de escritura.** Google impone límites diarios por usuario a las subidas de fotos mediante la API, y subir miles de fotos de una vez puede alcanzarlos en mitad de la transferencia. Reduce la concurrencia de transferencias: ve a Advanced Settings del trabajo y establece el número de transferencias de archivos en 2 o 3, y activa **Retry on failure** (5 reintentos o más) para que RcloneView vuelva a intentar las subidas limitadas en lugar de fallar todo el trabajo. Si es necesario, reparte las subidas muy grandes a lo largo de varios días.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitorización de la velocidad de subida a Google Photos en RcloneView" class="img-large img-center" />

## Error: "Can't Copy — Destination is Read Only"

Si ves errores sobre un destino de solo lectura, estás intentando sincronizar de forma bidireccional o sobrescribir fotos que ya existen en Google Photos. La API de Google Photos no permite modificar ni eliminar archivos multimedia existentes mediante rclone, y RcloneView respeta esta limitación.

La solución es configurar el trabajo como una **Copy** unidireccional (no Sync) desde tu origen hacia Google Photos. Así se suben los archivos nuevos sin intentar eliminar ni sobrescribir nada en Google Photos. Si necesitas eliminar fotos, hazlo en la aplicación web o móvil de Google Photos.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuración de un trabajo Copy hacia Google Photos en RcloneView" class="img-large img-center" />

## Archivos que faltan tras la subida

Google Photos organiza los archivos multimedia por álbum y fecha de creación, no por tu estructura de carpetas original. Cuando copias una jerarquía de carpetas a Google Photos, los archivos llegan a la biblioteca pero no conservan las carpetas que esperabas: la API no preserva la estructura de carpetas. Ten en cuenta también que las fotos descargadas de nuevo a través de la API no están en su resolución original y pierden los datos de ubicación EXIF.

Para conservar la organización de tus carpetas, copia a Google Drive, donde los subdirectorios se mantienen exactamente como en tu origen. Para un archivo fotográfico real, Backblaze B2 o Amazon S3 con una copia de tu árbol de carpetas original es la opción más fiable a largo plazo.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Revisión del historial de trabajos tras un trabajo de Google Photos" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Si el remoto aparece vacío, se trata de la restricción de la API de Google: exporta tu biblioteca existente con Google Takeout y copia la exportación con RcloneView.
3. Para un 403 al conectar, crea tu propio ID de cliente OAuth; para `userRateLimitExceeded`, reduce la concurrencia a 2–3 y aumenta el número de reintentos.
4. Usa el tipo de trabajo **Copy**, no Sync, al subir a Google Photos.

Saber cuál de las reglas de Google has alcanzado te permite configurar RcloneView correctamente a la primera y evitar frustrantes ciclos de reintentos.

---

**Guías relacionadas:**

- [Cómo hacer una copia de seguridad de Google Photos en una unidad externa o NAS — Google Takeout + RcloneView](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)
- [Solucionar errores de cuota y límite de frecuencia de Google Drive](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [Añadir un remoto mediante inicio de sesión en el navegador (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)

<CloudSupportGrid />
