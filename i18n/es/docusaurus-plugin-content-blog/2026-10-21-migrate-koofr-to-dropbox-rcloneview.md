---
slug: migrate-koofr-to-dropbox-rcloneview
title: "Migrar Koofr a Dropbox — Transfiere archivos con RcloneView"
authors:
  - robin
description: "Migra Koofr a Dropbox con RcloneView: conecta ambos remotos, previsualiza con Dry Run, copia de nube a nube y verifica el resultado con Folder Compare."
keywords:
  - migrar Koofr a Dropbox
  - transferencia de Koofr a Dropbox
  - RcloneView Koofr
  - RcloneView Dropbox
  - migración de nube a nube
  - copia de seguridad de Koofr
  - sincronización de Dropbox
  - rclone GUI
  - mover archivos entre nubes
  - herramienta de migración de nube
tags:
  - RcloneView
  - koofr
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar Koofr a Dropbox — Transfiere archivos con RcloneView

> Mueve una biblioteca de Koofr a Dropbox mediante una transferencia de nube a nube, con una vista previa antes de copiar y una comparación después.

Pasar de Koofr a Dropbox suele deberse a una carpeta compartida de equipo, un flujo de trabajo con clientes o una aplicación que solo se integra con Dropbox. Descargarlo todo a un portátil y volver a subirlo es lento y frágil. RcloneView, una GUI basada en rclone, conecta ambos servicios como remotos y transfiere entre ellos en un solo trabajo, y puedes ver el progreso en todo momento.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta Koofr y Dropbox como remotos

Abre la pestaña Remote y haz clic en **New Remote**. Dropbox usa OAuth basado en el navegador: RcloneView abre una página de inicio de sesión, apruebas el acceso y el remoto se conecta sin clave de API. Si el destino es una cuenta de Dropbox for Business, activa el ajuste `dropbox_business` al crear el remoto. Añade Koofr del mismo modo desde la lista de proveedores e inicia sesión con la cuenta que vas a dejar.

RcloneView gestiona más de 90 servicios de almacenamiento en la nube desde una sola ventana en Windows, macOS y Linux, de modo que ambos remotos aparecen uno junto al otro en el mismo explorador.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir los remotos de Koofr y Dropbox en RcloneView" class="img-large img-center" />

## Planifica la estructura de carpetas antes de copiar

Abre Koofr en el panel izquierdo del explorador y Dropbox en el derecho. Decide si vas a mover todo o solo algunas carpetas. Un estudio de fotografía con varios años de carpetas de clientes puede copiar un año cada vez, mientras que un equipo pequeño puede mover todo el árbol de una vez. La opción **Get Size** del menú contextual muestra cuántos datos contiene una carpeta, lo que ayuda a estimar cuánto tardará el trabajo.

Usa el paso de filtros del asistente de trabajos para omitir elementos innecesarios, como carpetas `.git/` o archivos que superen un tamaño máximo.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparar carpetas de Koofr y Dropbox en RcloneView" class="img-large img-center" />

## Ejecuta un Dry Run y después la transferencia

Crea un trabajo desde la pestaña Home: Koofr como origen, Dropbox como destino, y elige Copy para dejar los originales intactos hasta que estés seguro. Ejecuta primero un **Dry Run**. Muestra qué archivos se copiarían, para que detectes una carpeta de destino incorrecta antes de mover ningún dato. Después ejecuta el trabajo; una transferencia de nube a nube fluye entre los servicios y la pestaña Transferring muestra la velocidad, el número de archivos y el progreso.

Dropbox puede ralentizar las solicitudes cuando recibe muchas llamadas a la vez. Si ves mensajes de límite de velocidad, reduce el número de transferencias de archivos en Advanced Settings y deja que el trabajo reintente.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de nube a nube de Koofr a Dropbox" class="img-large img-center" />

## Verifica y conserva el historial de trabajos

Cuando termine la copia, abre **Compare** en las dos carpetas. Los archivos Left-only muestran lo que no llegó; las diferencias de tamaño se marcan por separado. Corrige las lagunas copiando desde la vista de comparación y revisa después **Job History** para ver el estado, la duración y el número de archivos de cada ejecución.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historial de trabajos de la migración de Koofr a Dropbox" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade Koofr y Dropbox desde **Remote > New Remote**.
3. Crea un trabajo Copy de Koofr a Dropbox y ejecuta un Dry Run.
4. Ejecuta el trabajo y verifica con Folder Compare antes de retirar la copia de Koofr.

Una migración que puedes previsualizar y verificar es una que puedes terminar con confianza.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de Koofr — Sincroniza y haz copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Gestiona el almacenamiento de Dropbox — Sincroniza y haz copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Dry Run — Previsualiza la sincronización en la nube con RcloneView](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
