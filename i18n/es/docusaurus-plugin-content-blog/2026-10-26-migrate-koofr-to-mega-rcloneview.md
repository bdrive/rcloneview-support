---
slug: migrate-koofr-to-mega-rcloneview
title: "Migrar de Koofr a Mega — Transfiere archivos con RcloneView"
authors:
  - steve
description: "Migra de Koofr a Mega con RcloneView: conecta ambos remotos, previsualiza con Dry Run, copia archivos de nube a nube y verifica con Folder Compare."
keywords:
  - migrar de Koofr a Mega
  - transferencia de Koofr a Mega
  - mover archivos de Koofr a Mega
  - migración de Koofr a Mega
  - RcloneView de nube a nube
  - sincronización de Koofr a Mega
  - rclone GUI
  - herramienta de migración en la nube
  - transferencia de archivos a Mega
  - verificar transferencia en la nube
tags:
  - RcloneView
  - koofr
  - mega
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de Koofr a Mega — Transfiere archivos con RcloneView

> Copia tu biblioteca de Koofr a Mega directamente entre las dos nubes, con una vista previa primero y una verificación al final.

Koofr y Mega abordan el almacenamiento de maneras distintas, y pasar de uno a otro a mano significa descargarlo todo y volver a subirlo. Para un fotógrafo con años de carpetas de proyectos o una pequeña oficina con documentos compartidos, son horas de vigilancia. RcloneView conecta ambos servicios en una sola ventana y transfiere directamente entre ellos, con trabajos que puedes previsualizar, repetir y revisar en el historial.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Añade Koofr y Mega como remotos

Abre **Remote > New Remote** y añade Koofr con las credenciales que solicita el cuadro de configuración. Después añade Mega con tu correo electrónico y contraseña. Mega es un remoto de introducción de credenciales y no de OAuth, así que no hay paso en el navegador. Cuando ambos aparezcan en Remote Manager, puedes abrir cada uno en su propio panel del Explorer.

Koofr y Mega aparecen junto a los demás proveedores compatibles en la misma lista de remotos.

<img src="/support/images/en/blog/new-remote.png" alt="Creación de los remotos de Koofr y Mega en RcloneView" class="img-large img-center" />

## Planifica la transferencia

Empieza explorando las carpetas de Koofr que quieres mover. Usa **Get Size** en las más grandes para saber qué esperar y anota lo que puedes dejar atrás. Mega aplica límites de transferencia y almacenamiento a la cuenta que dependen de tu plan, así que confirma que el destino tiene espacio antes de lanzar un trabajo grande en lugar de descubrirlo a mitad de camino.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Koofr y Mega explorados lado a lado en RcloneView" class="img-large img-center" />

## Crea un trabajo Copy y pruébalo con Dry Run

En el asistente de Sync, establece Koofr como origen y una carpeta de Mega como destino. Elige el tipo de trabajo **Copy** para que nunca se eliminen archivos existentes de Mega. En la configuración avanzada puedes ajustar el número de transferencias de archivos y de equality checkers; redúcelos si alguno de los servicios se ralentiza o devuelve errores. Usa el filtrado para omitir los tipos de archivo o carpetas que no quieras trasladar.

Ejecuta **Dry Run** antes del trabajo real. Muestra exactamente qué archivos se copiarían, lo que detecta una carpeta de origen equivocada sin ningún coste. Cuando la vista previa sea correcta, ejecuta el trabajo y sigue la velocidad y el progreso en la pestaña Transferring.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Supervisión de una transferencia de nube a nube en la pestaña Transferring" class="img-large img-center" />

## Verifica y conserva un registro

Tras la ejecución, abre **Compare** con Koofr a la izquierda y Mega a la derecha. Filtra por archivos presentes solo a la izquierda o diferentes para ver lo que no llegó, y cópialos con la acción de copia de la vista de comparación. Job History conserva el estado, la duración, el tamaño y el número de archivos de cada ejecución, de modo que tendrás un registro antes de retirar la cuenta antigua.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History mostrando transferencias completadas de Koofr a Mega" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade Koofr y Mega desde **Remote > New Remote**.
3. Crea un trabajo Copy de Koofr a Mega y ejecuta un Dry Run.
4. Ejecuta el trabajo y confirma con Folder Compare antes de eliminar nada en Koofr.

Copiar primero y verificar después significa que tus archivos de Koofr siguen disponibles hasta que Mega los tenga todos.

---

**Guías relacionadas:**

- [Migrar de Koofr a Dropbox](https://rcloneview.com/support/blog/migrate-koofr-to-dropbox-rcloneview)
- [Migrar de pCloud a Mega](https://rcloneview.com/support/blog/migrate-pcloud-to-mega-rcloneview)
- [Solucionar errores de conexión y de cuota de Mega](https://rcloneview.com/support/blog/fix-mega-connection-quota-errors-rcloneview)

<CloudSupportGrid />
