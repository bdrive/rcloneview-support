---
slug: copy-full-path-rclone-cli-paths-rcloneview
title: "Copiar ruta completa — Obtén rutas listas para rclone al instante en RcloneView"
authors:
  - jay
description: "Descubre cómo la función Copiar ruta completa de RcloneView convierte cualquier ruta de navegación en una ruta de CLI de rclone lista para usar con un solo clic."
keywords:
  - copy full path rclone
  - rclone cli path format
  - breadcrumb path bar
  - rclone remote path syntax
  - RcloneView terminal
  - cloud file path copy
  - rclone command line paths
  - GUI to CLI workflow
  - cloud storage path management
tags:
  - RcloneView
  - feature
  - cli
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Copiar ruta completa — Obtén rutas listas para rclone al instante en RcloneView

> Deja de volver a escribir nombres de remotos y rutas de carpetas a mano — cópialos directamente en tu terminal.

Cualquiera que combine la interfaz gráfica de RcloneView con la línea de comandos de rclone conoce esta fricción: encuentras una carpeta de forma visual y luego tienes que reconstruir su ruta manualmente para ejecutar un comando `rclone copy` o `rclone check`. RcloneView elimina por completo ese paso con Copiar ruta completa, una acción de clic derecho en la barra de ruta de navegación que copia exactamente la cadena remote:path que rclone espera.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cómo funciona Copiar ruta completa

Cada panel del explorador en RcloneView tiene una barra de ruta de navegación encima de la lista de archivos, que muestra la jerarquía de carpetas actual del remoto activo en esa pestaña. Al hacer clic derecho en cualquier parte de la ruta de navegación se abre un menú contextual con Cortar, Copiar, Pegar, Seleccionar todo y — de forma crucial — Copiar ruta completa (con remoto).

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView breadcrumb path bar showing a connected remote folder" class="img-large img-center" />

Al seleccionarla, se copia al portapapeles una cadena como `mygoogledrive:Meet recordings`, con el formato exacto que espera la CLI de rclone. No hay traducción manual entre lo que ves en la interfaz gráfica y lo que rclone necesita en la línea de comandos — el nombre del remoto, los dos puntos y la ruta de la carpeta se transfieren correctamente, incluyendo subcarpetas anidadas.

Esto importa aún más cuando tienes más de un puñado de remotos configurados. Los nombres de los remotos, especialmente los configurados para endpoints compatibles con S3 o servidores SFTP, no siempre son fáciles de recordar, y las estructuras de carpetas en las unidades en la nube pueden tener muchos niveles de profundidad. Copiar ruta completa elimina esas conjeturas.

## Cómo encaja en un flujo de trabajo de CLI

Una vez que hayas copiado una ruta, pégala directamente en la Terminal de Rclone integrada en RcloneView — la pestaña Terminal en la vista de información inferior — para ejecutar comandos puntuales como `rclone size` o `rclone lsf` sobre esa ubicación exacta. A diferencia de las herramientas que solo montan unidades, RcloneView también sincroniza y compara carpetas con la misma licencia FREE, de modo que la terminal, los trabajos de sincronización y el explorador de archivos hacen referencia a los mismos remotos sin volver a introducir credenciales.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView terminal tab used alongside the file explorer" class="img-large img-center" />

La misma ruta copiada también funciona fuera de RcloneView, en cualquier instalación independiente de rclone que apunte al mismo archivo `rclone.conf` — útil al escribir scripts para trabajos programados o depurar una sincronización desde un servidor remoto.

## Un ejemplo práctico

Supongamos que un equipo de producción de video almacena material sin editar tanto en Google Drive como en un bucket de archivo compatible con S3. En lugar de escribir `s3archive:projects/2026/client-x/raw` a mano — arriesgándose a un error tipográfico que apunte silenciosamente a la carpeta equivocada — un editor navega hasta allí visualmente, hace clic derecho en la ruta de navegación y copia la ruta exacta para un comando de verificación antes de iniciar una transferencia grande.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView file explorer with a deeply nested cloud folder open" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Conecta los remotos con los que trabajas con más frecuencia a través de Remote Manager.
3. Navega hasta cualquier carpeta y haz clic derecho en su barra de ruta de navegación.
4. Selecciona Copiar ruta completa (con remoto) y pégala en la Terminal de Rclone o en cualquier línea de comandos.

Pequeñas comodidades como esta se acumulan cuando te mueves cada día entre el explorador visual y los comandos de rclone en bruto.

---

**Guías relacionadas:**

- [Terminal de RcloneView — CLI de Rclone dentro de la interfaz gráfica](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)
- [Indicadores personalizados de Rclone — Opciones avanzadas en RcloneView](https://rcloneview.com/support/blog/custom-rclone-flags-advanced-options-rcloneview)
- [Guía de transferencia de archivos en la nube mediante arrastrar y soltar con RcloneView](https://rcloneview.com/support/blog/drag-drop-cloud-transfer-guide-rcloneview)

<CloudSupportGrid />
