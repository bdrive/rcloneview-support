---
slug: migrate-onedrive-to-mega-rcloneview
title: "Migrar de OneDrive a Mega — transferir archivos con RcloneView"
authors:
  - jay
description: "Mueva archivos de Microsoft OneDrive a Mega con RcloneView: conecte ambos remotos, ejecute una simulación (dry run), copie de nube a nube y verifique el resultado con Folder Compare."
keywords:
  - migrar OneDrive a Mega
  - transferencia de OneDrive a Mega
  - mover archivos de OneDrive a Mega
  - herramienta de migración OneDrive Mega
  - transferencia de nube a nube
  - RcloneView OneDrive
  - RcloneView Mega
  - cliente GUI de Mega
tags:
  - RcloneView
  - onedrive
  - mega
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de OneDrive a Mega — transferir archivos con RcloneView

> Traslade una biblioteca de OneDrive a Mega con un trabajo de nube a nube visual y repetible, en lugar de descargar y volver a subir a mano.

Mover años de documentos de Microsoft OneDrive a Mega suele implicar un lento rodeo por su propio disco. RcloneView conecta ambos servicios como remotos y copia directamente entre ellos, con una vista previa antes de escribir nada y una comparación posterior que demuestra que no faltó nada. RcloneView monta Y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar OneDrive y Mega como remotos

OneDrive usa OAuth basado en navegador: elija Microsoft OneDrive al añadir un remoto, inicie sesión y RcloneView guarda el token. Mega es diferente: pide directamente su correo electrónico y contraseña, así que téngalos a mano antes de empezar.

Dé nombres claros a los remotos, por ejemplo `onedrive-main` y `mega-archive`. Los nombres claros importan más adelante, al leer el historial de trabajos o al copiar una ruta completa como `onedrive-main:Projects` en el terminal de rclone.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir remotos de OneDrive y Mega en RcloneView" class="img-large img-center" />

## Planificar la copia antes de ejecutarla

Abra ambos remotos en paneles Explorer en paralelo y navegue hasta las carpetas que desea mover. Use Get Size en el origen para estimar cuántos datos va a transferir y compruebe que su cuenta de Mega tiene espacio suficiente.

Elija **Copy** en lugar de Sync para una primera migración. Una copia nunca elimina nada en el destino, por lo que elegir mal la carpeta no puede borrar datos. Use el paso de filtrado para omitir los tipos de archivo que no necesite, o limite por tamaño máximo de archivo o antigüedad.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de nube a nube entre dos remotos en RcloneView" class="img-large img-center" />

## Ejecutar una simulación y luego la transferencia real

Dry Run enumera lo que se copiaría sin escribir un solo byte. Revíselo y luego ejecute el trabajo. La pestaña Transferring muestra el progreso, la velocidad y el número de archivos, y puede cancelar un trabajo en ejecución en cualquier momento.

En bibliotecas grandes, reduzca el número de transferencias de archivos simultáneas si Mega le limita el ritmo, y mantenga el número de reintentos predeterminado para que breves caídas de red no aborten el trabajo.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ejecución de un trabajo de copia en RcloneView" class="img-large img-center" />

## Verificar con Folder Compare

Cuando termine el trabajo, abra Compare con OneDrive a la izquierda y Mega a la derecha. Los filtros permiten mostrar los archivos que solo están a la izquierda, de modo que cualquier transferencia fallida destaca de inmediato. Puede copiar los archivos pendientes desde la misma vista. El historial de trabajos (Job History) registra el estado, el tamaño, la velocidad y el número de archivos de la ejecución.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Resultados de Folder Compare entre OneDrive y Mega" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añada OneDrive (OAuth) y Mega (correo electrónico y contraseña) como remotos.
3. Cree un trabajo Copy de OneDrive a Mega, ejecute una simulación y luego ejecútelo.
4. Verifique con Folder Compare antes de dar de baja el origen.

Una migración que puede previsualizar, supervisar y verificar es una que puede terminar con confianza.

---

**Guías relacionadas:**

- [Gestionar el almacenamiento de Mega — sincronizar y respaldar archivos con RcloneView](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [Gestionar el almacenamiento de OneDrive — sincronizar y respaldar archivos con RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Migrar de Google Drive a Mega — transferir archivos con RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-mega-rcloneview)

<CloudSupportGrid />
