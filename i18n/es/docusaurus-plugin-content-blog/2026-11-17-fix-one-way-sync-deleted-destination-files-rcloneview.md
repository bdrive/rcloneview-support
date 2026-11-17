---
slug: fix-one-way-sync-deleted-destination-files-rcloneview
title: "Solucionar la sincronización unidireccional que borra archivos del destino — Proteja sus copias de seguridad con RcloneView"
authors:
  - casey
description: "¿Una sincronización unidireccional eliminó archivos de su copia de seguridad? Descubra por qué ocurre y cómo los trabajos Copy, Dry Run y Folder Compare de RcloneView evitan eliminaciones no deseadas."
keywords:
  - sincronización borró archivos del destino
  - sincronización unidireccional borra archivos
  - rclone sync vs copy
  - evitar eliminaciones por sincronización
  - archivos desaparecidos de copia de seguridad en la nube
  - RcloneView dry run
  - sincronización espejo borra archivos
  - restaurar archivos tras sincronización
  - solución de problemas RcloneView
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar la sincronización unidireccional que borra archivos del destino — Proteja sus copias de seguridad con RcloneView

> Si desaparecieron archivos de su copia de seguridad tras una sincronización, lo más probable es que el trabajo hiciera exactamente aquello para lo que la sincronización está diseñada. Así puede elegir el tipo de trabajo adecuado y previsualizar los cambios primero.

Una sorpresa habitual: sincroniza una carpeta del portátil con Backblaze B2 y los archivos antiguos que solo existían en el bucket han desaparecido. No es un error. Una sincronización unidireccional hace que el destino coincida con el origen, lo que incluye eliminar los archivos que no están en el origen. RcloneView le ofrece las herramientas para anticiparlo y elegir un tipo de trabajo que nunca elimina nada.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué la sincronización unidireccional elimina archivos

En el asistente de sincronización, la dirección unidireccional aparece como **"Modifying destination only"**. Deja el origen intacto y modifica el destino hasta que refleja el origen. Todo lo que haya en el destino sin equivalente en el origen se elimina.

Causas típicas:

- **Carpeta de origen incorrecta.** Si selecciona `Projects/2026` en lugar de `Projects`, todos los demás años parecen "sobrantes" en el destino.
- **Origen depurado.** Eliminó archivos antiguos en local para liberar espacio, esperando que la copia en la nube los conservara como archivo histórico.
- **Varios orígenes, un destino.** Dos equipos que sincronizan con la misma carpeta eliminan cada uno los archivos del otro.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job in RcloneView" class="img-large img-center" />

## Use Copy cuando el destino sea un archivo histórico

Si el destino debe conservar todo lo que se le haya enviado, use un trabajo **Copy** en lugar de Sync. Job Manager ofrece los tipos de trabajo Sync, Copy, Move, Delete, Download y Upload. Copy transfiere los archivos nuevos y modificados, pero no elimina nada del destino, lo que resulta adecuado para un archivo de fotos o una copia de seguridad de proyectos a largo plazo.

Reserve Sync para espejos reales, como una carpeta de trabajo que quiera reproducir exactamente en una segunda nube.

## Previsualice las eliminaciones con Dry Run

Antes de que cualquier trabajo de sincronización nuevo o editado se ejecute de verdad, ejecute un **Dry Run**. Muestra los archivos que se copiarían y los que se eliminarían, sin cambiar nada. Si la lista de eliminación contiene archivos que espera conservar, deténgase y corrija la ruta de origen o cambie a Copy.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job after checking the Dry Run preview in RcloneView" class="img-large img-center" />

## Compruebe las diferencias con Folder Compare

**Folder Compare** muestra dos carpetas una al lado de la otra. Filtre por archivos right-only para ver exactamente lo que existe en el destino pero no en el origen: los archivos que una sincronización eliminaría. Si algunos son importantes, use **Copy left** para devolverlos al origen antes de sincronizar, o sincronice en otra carpeta para mantenerlos a salvo.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare showing destination-only files in RcloneView" class="img-large img-center" />

A diferencia de las herramientas que solo montan, RcloneView también sincroniza y compara carpetas, con la FREE License.

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abra su trabajo existente en Job Manager y confirme las rutas de origen y destino.
3. Cambie los trabajos de tipo archivo histórico de Sync a Copy y ejecute un Dry Run en cada trabajo de sincronización que conserve.
4. Use Folder Compare para revisar los archivos right-only y consulte **Job History** después de cada ejecución.

Si ya se perdieron archivos, revise primero la papelera o el historial de versiones de su proveedor y luego reconstruya el trabajo para que no vuelva a ocurrir.

---

**Guías relacionadas:**

- [Dry Run — Previsualice la sincronización antes de transferir con RcloneView](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [Recupere archivos de la nube eliminados por accidente con RcloneView](https://rcloneview.com/support/blog/recover-accidentally-deleted-cloud-files-rcloneview)
- [Solucione archivos faltantes tras la sincronización en la nube con RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />
