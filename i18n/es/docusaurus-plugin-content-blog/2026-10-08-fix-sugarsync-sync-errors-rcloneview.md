---
slug: fix-sugarsync-sync-errors-rcloneview
title: "Soluciona los errores de sincronización de SugarSync — problemas de autorización, transferencia y archivos faltantes con RcloneView"
authors:
  - morgan
description: "Diagnostica errores de sincronización de SugarSync como autorización fallida, transferencias interrumpidas y archivos faltantes con los registros, el historial de trabajos y Folder Compare de RcloneView."
keywords:
  - solucionar errores de sincronización de SugarSync
  - error de rclone en SugarSync
  - autorización de SugarSync fallida
  - subida a SugarSync fallida
  - solución de problemas de SugarSync
  - RcloneView SugarSync
  - remoto SugarSync de rclone
  - solución de problemas de sincronización en la nube
  - SugarSync GUI
tags:
  - RcloneView
  - sugarsync
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Soluciona los errores de sincronización de SugarSync — problemas de autorización, transferencia y archivos faltantes con RcloneView

> Cuando falla un trabajo de SugarSync, el historial de trabajos, los registros DEBUG y Folder Compare de RcloneView muestran si la causa está en el remoto, en la carga de transferencia o en archivos que nunca llegaron.

Una sincronización de SugarSync que se detiene con un error vago, o que termina con carpetas que parecen incompletas, es difícil de diagnosticar solo desde la línea de comandos. RcloneView reúne en una sola ventana la comprobación del remoto, el registro del trabajo, el log y una comparación en paralelo, de modo que puedas trabajar con evidencias en lugar de volver a ejecutar a ciegas. RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Confirma que el remoto sigue conectado

Si un trabajo falla en pocos segundos, sospecha primero del remoto y no de los datos. Abre Remote Manager desde la pestaña Remote, edita el remoto de SugarSync y vuelve a autorizarlo si los datos de la cuenta han cambiado. Después abre el remoto en un panel Explorer y navega por la carpeta raíz. Si se lista con normalidad, la conexión está bien y el problema está en otra parte.

En la pestaña Terminal integrada también puedes ejecutar `rclone about "remote:"` (sustituye `remote` por el nombre de tu remoto) para comprobar rápidamente que la cuenta responde.

<img src="/support/images/en/blog/new-remote.png" alt="Edición de un remoto de SugarSync en Remote Manager de RcloneView" class="img-large img-center" />

## Revisa el historial de trabajos y activa el registro DEBUG

Abre Job History y comprueba el estado, la duración y el número de archivos de la ejecución fallida. Un trabajo que falla a mitad de camino suele apuntar a archivos concretos o a la carga de transferencia, no a las credenciales.

Para ver el mensaje exacto de cada archivo, ve a Settings > Embedded Rclone, activa el registro de rclone, establece el nivel en DEBUG y haz clic en Restart Embedded Rclone. Reproduce el fallo y lee el registro en la pestaña Log o en la carpeta de registros que hayas configurado.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historial de trabajos de RcloneView con un trabajo de SugarSync con errores" class="img-large img-center" />

## Reduce la concurrencia y previsualiza la nueva ejecución

Los fallos intermitentes de subida suelen mejorar cuando se mueven menos archivos a la vez. En el paso 2 del asistente de sincronización, reduce el número de transferencias de archivos y establece los equality checkers en 4 o menos, que es la recomendación para backends lentos. Mantén "Retry entire sync if fails" en 3 para que los fallos transitorios se reintenten hasta tres veces.

Antes de volver a ejecutar, usa Dry Run para revisar qué archivos se copiarán o eliminarán, de modo que el reintento no te sorprenda.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Nueva ejecución de un trabajo de SugarSync con menor concurrencia en RcloneView" class="img-large img-center" />

## Verifica con Folder Compare

Tras la nueva ejecución, abre Compare con tu carpeta local en un lado y SugarSync en el otro. Filtra por archivos solo a la izquierda, solo a la derecha y diferentes para ver qué falta o no coincide todavía, y copia solo esos elementos en lugar de repetir todo el trabajo.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare con los archivos que faltan en SugarSync" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Vuelve a autorizar el remoto de SugarSync en Remote Manager y confirma que se lista la carpeta raíz.
3. Revisa Job History y activa el registro DEBUG para el trabajo que falla.
4. Reduce la concurrencia, ejecuta Dry Run, vuelve a ejecutar y confirma el resultado con Folder Compare.

Cuando la causa se ve en los registros y en la comparación, un fallo de SugarSync se convierte en una solución breve y repetible.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de SugarSync: sincroniza y haz copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-sugarsync-cloud-sync-backup-rcloneview)
- [Migra SugarSync a Backblaze B2 con RcloneView](https://rcloneview.com/support/blog/migrate-sugarsync-to-backblaze-b2-rcloneview)
- [Soluciona errores de sincronización de OpenDrive con RcloneView](https://rcloneview.com/support/blog/fix-opendrive-sync-errors-rcloneview)

<CloudSupportGrid />
