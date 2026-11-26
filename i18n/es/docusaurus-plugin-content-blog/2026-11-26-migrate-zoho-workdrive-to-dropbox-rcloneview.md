---
slug: migrate-zoho-workdrive-to-dropbox-rcloneview
title: "Migrar Zoho WorkDrive a Dropbox — Transfiere archivos con RcloneView"
authors:
  - robin
description: "Mueve archivos de Zoho WorkDrive a Dropbox con RcloneView. Conecta ambas nubes, previsualiza con Dry Run, copia de nube a nube y verifica con Folder Compare."
keywords:
  - migrar zoho workdrive a dropbox
  - transferencia de zoho workdrive a dropbox
  - mover archivos desde zoho workdrive
  - herramienta de migración de zoho workdrive
  - migración a dropbox
  - transferencia de nube a nube
  - rcloneview zoho workdrive
  - rcloneview dropbox
  - rclone gui zoho workdrive
tags:
  - RcloneView
  - zoho
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar Zoho WorkDrive a Dropbox — Transfiere archivos con RcloneView

> Mueve un espacio de trabajo de Zoho WorkDrive a Dropbox de nube a nube, con una vista previa antes de que cambie nada y una comprobación lado a lado después.

Los equipos abandonan Zoho WorkDrive por muchas razones: una fusión con una empresa que usa Dropbox, un cliente que estandariza en Dropbox o una simple consolidación de herramientas. Descargar todo a un portátil y volver a subirlo es lento y propenso a errores. RcloneView conecta ambos servicios en una sola ventana y copia los archivos directamente entre ellos, con Dry Run, historial de trabajos y Folder Compare para confirmar que no falta nada.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Zoho WorkDrive y Dropbox

Abre **Remote > New Remote** y añade primero Zoho WorkDrive. Zoho WorkDrive necesita un paso adicional en comparación con la mayoría de los proveedores: debes elegir la **región** en la que se encuentra tu cuenta de Zoho (por ejemplo, el centro de datos de EE. UU. o de la UE). Elegir la región equivocada es el motivo habitual de que la conexión falle, así que comprueba el dominio con el que inicias sesión en Zoho antes de empezar.

A continuación, añade Dropbox. Utiliza OAuth: se abre una ventana del navegador, inicias sesión y apruebas el acceso, y RcloneView completa la configuración automáticamente, sin necesidad de clave de API. Si tu equipo usa Dropbox Business, habilita el ajuste `dropbox_business` durante la configuración para poder acceder a las carpetas del equipo.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir remotos de Zoho WorkDrive y Dropbox en RcloneView" class="img-large img-center" />

## Previsualizar la copia con Dry Run

Abre los dos remotos uno al lado del otro en los paneles del Explorer y navega hasta la carpeta de WorkDrive que quieres mover. Puedes arrastrar una carpeta pequeña para hacer una prueba rápida: arrastrar entre remotos distintos siempre copia y nunca mueve, por lo que el origen permanece intacto.

Para la migración completa, abre **Job Manager** y añade un nuevo trabajo. Establece Zoho WorkDrive como origen y una nueva carpeta de Dropbox (por ejemplo, `/WorkDrive-Archive`) como destino. Usa un trabajo **Copy** en lugar de una sincronización unidireccional para la primera pasada: Copy no elimina nada en el destino. Luego ejecuta **Dry Run** para ver la lista exacta de archivos que se transferirán antes de mover ningún dato.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de nube a nube de Zoho WorkDrive a Dropbox en RcloneView" class="img-large img-center" />

## Ajustar la transferencia y supervisar el progreso

Dropbox aplica límites de velocidad a su API, por lo que un número moderado de transferencias de archivos simultáneas es más fiable que subir mucho ese ajuste. Deja **Retry entire sync if fails** en su valor predeterminado de 3 para que los errores temporales se recuperen solos. Si el espacio de trabajo contiene vídeos o archivos de diseño grandes, el ajuste de transferencias multihilo (predeterminado 4) ayuda con los archivos grandes individuales.

Mientras se ejecuta el trabajo, la pestaña **Transferring** muestra el progreso, la velocidad y el número de archivos. Al terminar, **Job History** registra el estado, el tamaño total y el número de archivos, una prueba útil si un responsable pide constancia de que la migración se completó.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Supervisión de una transferencia de Zoho WorkDrive a Dropbox en RcloneView" class="img-large img-center" />

## Verificar con Folder Compare

Abre **Home > Compare** con WorkDrive a la izquierda y Dropbox a la derecha. Filtra por **left-only files** para detectar lo que no llegó y por **different files** para encontrar discrepancias de tamaño. Selecciona lo que falta y usa **Copy right** para completarlo. A diferencia de las herramientas que solo montan, RcloneView también sincroniza y compara carpetas, con la FREE License.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparar carpetas de Zoho WorkDrive y Dropbox tras la migración" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade Zoho WorkDrive (selecciona la región correcta) y Dropbox (inicio de sesión OAuth) como remotos.
3. Crea un trabajo Copy de WorkDrive a una nueva carpeta de Dropbox y ejecuta primero Dry Run.
4. Ejecuta el trabajo y luego confirma el resultado con Folder Compare y Job History.

Una migración planificada y verificada permite a tu equipo pasarse a Dropbox desde el primer día sin buscar archivos perdidos.

---

**Guías relacionadas:**

- [Gestionar Zoho WorkDrive — Sincronización en la nube con RcloneView](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [Migrar Zoho WorkDrive a Google Drive con RcloneView](https://rcloneview.com/support/blog/migrate-zoho-workdrive-to-google-drive-rcloneview)
- [Solucionar errores de sincronización de Dropbox con RcloneView](https://rcloneview.com/support/blog/fix-dropbox-sync-errors-rcloneview)

<CloudSupportGrid />
