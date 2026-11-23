---
slug: migrate-dropbox-to-jottacloud-rcloneview
title: "Migra de Dropbox a Jottacloud — Transfiere archivos con RcloneView"
authors:
  - jay
description: "Mueve archivos de Dropbox a Jottacloud con RcloneView. Conecta ambas nubes, previsualiza con Dry Run, copia de nube a nube y verifica el resultado con Folder Compare."
keywords:
  - migrar dropbox a jottacloud
  - transferencia dropbox a jottacloud
  - mover archivos de dropbox a jottacloud
  - herramienta de migración jottacloud
  - alternativa a dropbox en europa
  - migración de nube a nube gui
  - rcloneview jottacloud
  - rclone dropbox jottacloud
  - migración de almacenamiento en la nube europeo
tags:
  - RcloneView
  - dropbox
  - jottacloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra de Dropbox a Jottacloud — Transfiere archivos con RcloneView

> Mueve tus carpetas de Dropbox a Jottacloud de nube a nube y comprueba cada archivo antes de cerrar la cuenta antigua.

Los equipos y hogares que se cambian a un proveedor noruego suelen toparse con el mismo obstáculo: descargar años de datos de Dropbox en un portátil solo para volver a subirlos es lento y arriesgado. RcloneView conecta ambas cuentas en una sola ventana y ejecuta la transferencia mediante rclone, de modo que los archivos pasan de Dropbox a Jottacloud sin que tengas que moverlos a mano a través de una carpeta local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta Dropbox y Jottacloud como remotos

Abre la pestaña **Remote** y haz clic en **New Remote**. Dropbox usa OAuth: se abre el navegador, inicias sesión y RcloneView guarda la conexión. Si tus archivos están en una cuenta de equipo de Dropbox, configura la opción `dropbox_business` para que rclone se comunique con el espacio de nombres de empresa.

Añade Jottacloud de la misma forma: elige Jottacloud en la lista de proveedores y sigue las indicaciones de conexión. Cuando aparezcan ambos remotos, ábrelos uno al lado del otro en dos paneles de Explorer para ver el origen y el destino a la vez.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir los remotos de Dropbox y Jottacloud en RcloneView" class="img-large img-center" />

## Planifica la estructura de carpetas antes de copiar

Una agencia de diseño con 600 GB repartidos entre `Clients`, `Archive` y `Shared Assets` debería decidir primero dónde irá cada carpeta de nivel superior. Crea las carpetas de destino en Jottacloud desde el menú contextual y luego usa **Get Size** en cada carpeta de Dropbox para ver cuántos datos moverá cada paso.

Para algo puntual y rápido, arrastra una carpeta del panel de Dropbox al panel de Jottacloud. Arrastrar entre remotos distintos siempre copia, así que no se elimina nada de Dropbox. Para tareas más grandes, conviene un trabajo guardado, porque puedes volver a ejecutarlo y ver su historial.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de nube a nube de Dropbox a Jottacloud en RcloneView" class="img-large img-center" />

## Crea un trabajo de migración repetible

Haz clic en **Sync** en la pestaña Home y elige Dropbox como origen y Jottacloud como destino. Deja la dirección en unidireccional ("Modifying destination only"). En Advanced Settings, mantén la configuración multihilo predeterminada y deja desactivada la comparación por suma de verificación (Dropbox y Jottacloud usan tipos de hash distintos, por lo que rclone compara los archivos por tamaño y fecha de modificación), y usa Filtering para omitir lo que no quieras llevarte.

Ejecuta primero un **Dry Run**. Muestra cada archivo que se copiaría o eliminaría en el destino, lo que detecta una carpeta mal elegida antes de que te cueste horas. Después inicia la ejecución real y sigue la velocidad y el número de archivos en la pestaña **Transferring**.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ejecutar el trabajo de migración de Dropbox a Jottacloud en RcloneView" class="img-large img-center" />

Si la gente sigue trabajando en Dropbox durante el traslado, vuelve a ejecutar el mismo trabajo justo antes del cambio definitivo. Solo se transfieren los archivos nuevos o modificados. Con una licencia PLUS puedes programar el trabajo para que se ejecute cada noche hasta el día del cambio.

## Verifica con Folder Compare

Antes de cancelar Dropbox, haz clic en **Compare** y abre las dos carpetas de nivel superior. Activa los filtros de archivos solo a la izquierda y de tamaño diferente: todo lo que siga apareciendo no llegó o no coincide. Selecciona esos elementos y usa **Copy right** para completar lo que falte. Cuando la vista solo muestre archivos idénticos, la migración habrá terminado. **Job History** guarda un registro del tamaño, la velocidad y el estado de cada ejecución.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparar carpetas de Dropbox y Jottacloud después de la migración en RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade Dropbox (OAuth) y Jottacloud como remotos desde **Remote > New Remote**.
3. Crea un trabajo de Sync unidireccional de Dropbox a Jottacloud y previsualízalo con **Dry Run**.
4. Ejecuta el trabajo y confirma el resultado con **Compare** antes de dar de baja la cuenta de Dropbox.

RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana en Windows, macOS y Linux, así que después del traslado puedes montar Jottacloud como unidad local con la misma aplicación.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de Jottacloud con RcloneView: sincroniza, haz copias de seguridad y organiza archivos](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Migra de Dropbox a Koofr — Transfiere archivos con RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-koofr-rcloneview)
- [Soluciona errores de sincronización de Jottacloud — Diagnostica y resuelve con RcloneView](https://rcloneview.com/support/blog/fix-jottacloud-sync-errors-rcloneview)

<CloudSupportGrid />
