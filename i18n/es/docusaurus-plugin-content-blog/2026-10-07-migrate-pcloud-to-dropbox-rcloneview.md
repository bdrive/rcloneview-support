---
slug: migrate-pcloud-to-dropbox-rcloneview
title: "Migrar pCloud a Dropbox — Transfiere archivos con RcloneView"
authors:
  - tayson
description: "Migra pCloud a Dropbox con RcloneView: conecta ambos servicios mediante OAuth, haz una simulación (Dry Run), copia de nube a nube y verifica con Folder Compare."
keywords:
  - migrar pCloud a Dropbox
  - transferencia de pCloud a Dropbox
  - mover archivos de pCloud a Dropbox
  - herramienta de migración de pCloud a Dropbox
  - transferencia de nube a nube
  - RcloneView
  - rclone GUI
  - sincronización de pCloud
  - sincronización de Dropbox
  - comparación de carpetas
tags:
  - RcloneView
  - pcloud
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar pCloud a Dropbox — Transfiere archivos con RcloneView

> Traslada una biblioteca completa de pCloud a Dropbox sin descargarla antes en tu propio disco.

Pasar de pCloud a Dropbox suele significar que un equipo ha estandarizado Dropbox para compartir archivos, o que un cliente lo exige. Descargar y volver a subir manualmente cientos de gigabytes es lento y propenso a errores. RcloneView conecta ambos servicios a través de rclone y transfiere los archivos de nube a nube desde una sola ventana, con un Dry Run y un paso de verificación.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar pCloud y Dropbox

Tanto pCloud como Dropbox usan el inicio de sesión OAuth en el navegador en RcloneView, por lo que no se necesitan claves de API. Abre la pestaña Remote, haz clic en **New Remote**, elige pCloud e inicia sesión cuando se abra el navegador. Repite el proceso con Dropbox. Si usas una cuenta de Dropbox Business, activa la opción `dropbox_business = true` durante la configuración.

RcloneView admite más de 90 servicios de almacenamiento en la nube en Windows, macOS y Linux, por lo que ambas cuentas aparecen una junto a otra como paneles del Explorer.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir remotos de pCloud y Dropbox en RcloneView" class="img-large img-center" />

## Previsualizar la migración con Dry Run

Antes de mover nada, abre el asistente de Sync y selecciona pCloud como origen y una carpeta de Dropbox como destino. Usa la semántica de **Copy** en la primera migración para no tocar nada en el origen. Ejecuta un **Dry Run** para listar todos los archivos que se transferirían y confirmar que la estructura de carpetas queda donde esperas.

Imagina que un diseñador tiene 400 GB de carpetas de proyecto en pCloud. Un Dry Run permite detectar archivos demasiado grandes o subcarpetas innecesarias, que puedes excluir en el paso de filtrado del asistente de Sync mediante el tamaño máximo de archivo, la antigüedad del archivo o reglas de filtro personalizadas.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de nube a nube de pCloud a Dropbox" class="img-large img-center" />

## Ejecutar la transferencia y supervisar el progreso

Inicia el trabajo y observa la pestaña Transferring para ver el progreso y el número de archivos. En Advanced Settings puedes ajustar el número de transferencias de archivos y activar la comparación por suma de verificación. Si la ejecución falla a medias, la configuración de reintentos del trabajo (valor predeterminado: 3) vuelve a intentar la sincronización, y al ejecutarlo de nuevo solo se copia lo que falta.

Como los datos se mueven entre los dos servicios a través de rclone, no necesitas espacio libre en el disco local para toda la biblioteca.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Supervisión de una transferencia en curso en RcloneView" class="img-large img-center" />

## Verificar con Folder Compare

Tras la transferencia, abre **Compare** desde la pestaña Home con pCloud a la izquierda y Dropbox a la derecha. Filtra los archivos que solo están a la izquierda y los diferentes para detectar cualquier omisión, y usa Copy right para completar lo que falte. Consulta Job History para ver el estado, el tamaño y el número de archivos como registro de la migración.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare entre pCloud y Dropbox" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade los remotos de pCloud y Dropbox mediante inicio de sesión OAuth en la pestaña Remote.
3. Crea un trabajo Copy de pCloud a Dropbox y ejecuta primero un Dry Run.
4. Ejecuta el trabajo y verifica con Folder Compare antes de dar de baja la cuenta anterior.

Una migración por fases y verificada mantiene intactos tus datos de pCloud hasta que Dropbox contenga todo lo que necesitas.

---

**Guías relacionadas:**

- [Migrar pCloud a OneDrive](https://rcloneview.com/support/blog/migrate-pcloud-to-onedrive-rcloneview)
- [Sincronizar Dropbox con pCloud](https://rcloneview.com/support/blog/sync-dropbox-to-pcloud-rcloneview)
- [Dry Run — Previsualiza la sincronización en la nube](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
