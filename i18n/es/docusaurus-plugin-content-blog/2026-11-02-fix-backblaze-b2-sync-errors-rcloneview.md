---
slug: fix-backblaze-b2-sync-errors-rcloneview
title: "Solucionar errores de sincronización de Backblaze B2 — diagnóstico y resolución con RcloneView"
authors:
  - alex
description: "Solucione errores de sincronización de Backblaze B2 con RcloneView: revise el alcance de la Application Key, lea los registros, ajuste transferencias y reintentos, y verifique el resultado con Folder Compare."
keywords:
  - solucionar errores de sincronización de Backblaze B2
  - Backblaze B2 401 unauthorized
  - permisos de application key de B2
  - fallo de sincronización de B2
  - solución de problemas de rclone B2
  - RcloneView Backblaze B2
  - errores de subida a B2
  - solución de problemas de sincronización en la nube
tags:
  - RcloneView
  - troubleshooting
  - tips
  - backblaze-b2
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de sincronización de Backblaze B2 — diagnóstico y resolución con RcloneView

> La mayoría de los fallos de sincronización de B2 se deben a unas pocas causas: el alcance de la clave, los reintentos o registros que aún no ha revisado.

Una sincronización de Backblaze B2 que se detiene o muestra errores suele poder arreglarse en minutos cuando se ve lo que rclone está informando realmente. RcloneView muestra el estado de los trabajos, los registros y un terminal integrado en una sola ventana, para que pueda diagnosticar sin adivinar. Conecte S3, Azure o Backblaze B2 con acceso completo de lectura y escritura con la licencia FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Revise primero la Application Key

Los remotos de B2 se autentican con un Application Key ID y una Application Key. Si un trabajo falla de inmediato con un error de autorización, los sospechosos habituales son una clave restringida a otro bucket, una clave sin permiso de escritura o un error al copiar y pegar en el que el ID de la clave y la clave están intercambiados o se coló un espacio al final.

Abra Remote Manager, edite el remoto de B2 y vuelva a introducir ambos valores. Si genera una clave nueva en la página de gestión de claves de Backblaze, recuerde que la Application Key completa solo se muestra una vez, al crearla. Después explore el bucket en el Explorer: si el listado funciona pero las subidas fallan, es probable que la clave no tenga permiso de escritura.

<img src="/support/images/en/blog/new-remote.png" alt="Edición de un remoto de Backblaze B2 en RcloneView" class="img-large img-center" />

## Lea Job History y los registros

Abra Job History para ver el estado de cada ejecución (Completed, Errored o Canceled), su duración, los archivos y la velocidad. Una ejecución que falla solo en algunos archivos apunta a problemas por archivo; una que falla al inicio apunta a credenciales o conectividad.

Para más detalle, active el registro de rclone en Settings > Embedded Rclone, establezca el nivel de registro en DEBUG, reinicie el rclone integrado y reproduzca el problema. La pestaña Log y el archivo de registro mostrarán entradas con marca de tiempo en las que podrá buscar el archivo o el mensaje que falla.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History mostrando ejecuciones con errores y completadas en RcloneView" class="img-large img-center" />

## Ajuste las transferencias y los reintentos

Los errores en ejecuciones grandes suelen deberse a demasiada concurrencia. En Advanced Settings del trabajo, reduzca el número de transferencias de archivos y de equality checkers (se recomiendan 4 o menos checkers para backends lentos). Mantenga "Retry entire sync if fails" en su valor predeterminado de 3 para que las caídas de red transitorias se recuperen solas. Para un fotógrafo que sincroniza miles de archivos RAW durante la noche, reducir la concurrencia es un primer ajuste razonable cuando aparecen errores.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Supervisión en vivo de las transferencias en la pestaña Transferring de RcloneView" class="img-large img-center" />

## Verifique y vuelva a ejecutar con seguridad

Después de los cambios, ejecute un Dry Run para previsualizar qué se copiaría o eliminaría. Luego ejecute el trabajo y use Folder Compare entre la carpeta local y el bucket de B2: los archivos left-only son lo que aún falta por subir, y los archivos different muestran diferencias de tamaño. Use Copy right para completar las diferencias y vuelva a comparar hasta que el resultado esté limpio.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare confirmando una sincronización de B2 en RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Vuelva a introducir su Application Key ID y su Key de B2 en Remote Manager.
3. Active el registro DEBUG y vuelva a ejecutar el trabajo que falla.
4. Reduzca la concurrencia, ejecute un Dry Run y verifique con Folder Compare.

Un repaso metódico de claves, registros y ajustes convierte la mayoría de los errores de B2 en una solución rápida.

---

**Guías relacionadas:**

- [Gestionar Backblaze B2 con RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Solucionar errores de sincronización de Wasabi](https://rcloneview.com/support/blog/fix-wasabi-sync-errors-rcloneview)
- [Dry Run: previsualice la sincronización antes de transferir](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
