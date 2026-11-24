---
slug: migrate-icloud-drive-to-pcloud-rcloneview
title: "Migrar iCloud Drive a pCloud — Transfiere archivos con RcloneView"
authors:
  - jay
description: "Mueve archivos de iCloud Drive a pCloud con RcloneView. Conecta ambas nubes, previsualiza la copia con Dry Run, transfiere de nube a nube y verifica con Folder Compare."
keywords:
  - migrar iCloud Drive a pCloud
  - transferencia de iCloud Drive a pCloud
  - mover archivos desde iCloud Drive
  - herramienta de migración de iCloud Drive
  - migración a pCloud
  - transferencia de nube a nube
  - rcloneview icloud drive
  - rcloneview pcloud
  - rclone gui icloud drive
tags:
  - RcloneView
  - pcloud
  - cloud-to-cloud
  - migration
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar iCloud Drive a pCloud — Transfiere archivos con RcloneView

> Lleva tus carpetas de iCloud Drive a pCloud con un trabajo de copia que puedes previsualizar, supervisar y verificar, sin tener que almacenarlo todo antes en un disco local.

La gente deja iCloud Drive por pCloud por razones prácticas: un hogar que mezcla equipos Windows, Linux y Mac, o un profesional independiente que quiere una sola cuenta de almacenamiento que funcione igual en todos los escritorios. iCloud Drive no tiene una exportación integrada a otro servicio en la nube, así que la mayoría de las migraciones acaban siendo "descargarlo todo en un Mac y volver a subirlo". RcloneView se conecta a ambos servicios a la vez y copia los archivos entre ellos mediante rclone, de modo que la transferencia se realiza de nube a nube desde una sola ventana.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta iCloud Drive y pCloud como remotos

La compatibilidad con iCloud Drive requiere rclone v1.69 o posterior. RcloneView incluye un binario de rclone integrado que cumple este requisito, así que no hay nada adicional que instalar. Abre la pestaña Remote, haz clic en **New Remote**, elige iCloud Drive e introduce las credenciales de tu cuenta de Apple. Después, añade pCloud. Inicia sesión mediante un login OAuth en el navegador, por lo que no tienes que generar claves de API.

Con ambos remotos conectados, abre dos paneles de Explorer uno junto al otro. Haz clic derecho en una carpeta de nivel superior de iCloud Drive y elige **Get Size** para ver cuántos datos vas a mover. Ese número te indica si tu plan de pCloud tiene espacio antes de copiar el primer archivo.

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive and pCloud remotes in RcloneView" class="img-large img-center" />

## Crea un trabajo de copia y previsualízalo con Dry Run

Para una migración, un trabajo **Copy** es la opción prudente: añade archivos a pCloud y nunca elimina nada allí. Elige **Sync** solo si pCloud debe reflejar exactamente iCloud Drive, incluidas las eliminaciones.

En Job Manager, crea el trabajo con una carpeta de iCloud Drive como origen y una carpeta de pCloud como destino. En Step 2, deja el ajuste de reintentos en su valor predeterminado de 3 para que una conexión caída no termine la ejecución. Step 3 te permite dejar fuera los datos que ya no necesitas. Los filtros personalizados pueden excluir imágenes `.iso` o carpetas `.git/`, y una antigüedad máxima de archivo deja atrás el desorden antiguo.

Ejecuta un **Dry Run** antes de la transferencia real. Piensa en una diseñadora que mueve 300 GB de proyectos de clientes: el Dry Run enumera cada archivo que se copiaría, para que pueda confirmar la estructura de carpetas antes de dedicar horas a la transferencia.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud copy from iCloud Drive to pCloud in RcloneView" class="img-large img-center" />

## Ejecuta la transferencia y sigue el progreso

Inicia el trabajo y observa la pestaña Transferring, que muestra el progreso, la velocidad y el número de archivos. Para una biblioteca grande, crea un trabajo por cada carpeta de nivel superior (Documents, Desktop, carpetas de proyectos). Si un lote falla, solo vuelves a ejecutar ese lote. Cada ejecución queda registrada en Job History con su estado, tamaño total y número de archivos, así tienes constancia de qué se movió y cuándo.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing completed iCloud Drive to pCloud copy runs" class="img-large img-center" />

## Verifica el resultado con Folder Compare

Haz clic en **Compare** y abre la carpeta de iCloud Drive a la izquierda y la de pCloud a la derecha. Filtra los archivos que solo están a la izquierda y los diferentes para encontrar lo que se haya omitido, y luego usa **Copy right** para enviar los archivos que faltan. Cuando ambos lados aparezcan como iguales, podrás retirar el almacenamiento antiguo con tranquilidad.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing iCloud Drive and pCloud folders after migration" class="img-large img-center" />

## Primeros pasos

RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux.

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade iCloud Drive (el rclone v1.69+ integrado está incluido) y pCloud mediante su login OAuth.
3. Crea un trabajo Copy de iCloud Drive a pCloud y compruébalo con Dry Run.
4. Ejecuta el trabajo y confirma el resultado con Folder Compare antes de reducir tu plan de iCloud.

Una migración verificada carpeta por carpeta lleva tus archivos a pCloud sin que falte ninguna carpeta.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de iCloud Drive — Sincroniza y haz copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [Gestiona el almacenamiento de pCloud — Sincroniza y haz copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Migrar iCloud Drive a Dropbox — Transfiere archivos con RcloneView](https://rcloneview.com/support/blog/migrate-icloud-drive-to-dropbox-rcloneview)

<CloudSupportGrid />
