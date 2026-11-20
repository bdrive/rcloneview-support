---
slug: migrate-icloud-drive-to-pcloud-rcloneview
title: "Migra iCloud Drive a pCloud — Transfiere archivos con RcloneView"
authors:
  - tayson
description: "Mueve tus archivos de iCloud Drive a pCloud con RcloneView: conecta ambos remotos, previsualiza con Dry Run, ejecuta un trabajo de sincronización de nube a nube y verifica con Folder Compare."
keywords:
  - iCloud Drive a pCloud
  - migrar iCloud Drive a pCloud
  - transferencia de iCloud a pCloud
  - mover archivos desde iCloud Drive
  - herramienta de migración a pCloud
  - alternativa a iCloud Drive en Windows y Linux
  - migración de nube a nube con GUI
  - RcloneView iCloud Drive
  - RcloneView pCloud
tags:
  - RcloneView
  - pcloud
  - cloud-to-cloud
  - migration
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra iCloud Drive a pCloud — Transfiere archivos con RcloneView

> Traslada tu biblioteca de iCloud Drive a pCloud sin malabares entre ventanas del Finder ni subidas por navegador a medio terminar.

iCloud Drive resulta cómodo mientras todos tus dispositivos sean de Apple. Cuando se suma un portátil con Windows o una estación de trabajo con Linux, muchos usuarios buscan una nube que funcione igual en todas las plataformas, y pCloud es un destino habitual. RcloneView conecta ambos servicios en una sola ventana, copia los datos con un trabajo de sincronización repetible y te permite verificar el resultado antes de cancelar nada.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta iCloud Drive y pCloud como remotos

Abre la pestaña **Remote** y haz clic en **New Remote**. Elige **iCloud Drive**, introduce las credenciales de tu cuenta de Apple y completa cualquier solicitud de verificación que Apple envíe a tus dispositivos. El backend de iCloud Drive de rclone no funciona con la Protección de datos avanzada (Advanced Data Protection), por lo que debes desactivar esa opción en tu cuenta de Apple. La compatibilidad con iCloud Drive requiere rclone v1.69 o posterior; el rclone integrado que incluye RcloneView cumple ese requisito, así que no hay nada adicional que instalar.

A continuación, añade **pCloud**. Usa OAuth, así que se abre una ventana del navegador, inicias sesión y el remoto se guarda automáticamente. No se necesitan claves de API.

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive and pCloud remotes in RcloneView" class="img-large img-center" />

Con ambos remotos guardados, abre iCloud Drive en el panel Explorer izquierdo y pCloud en el derecho. Haz clic derecho en las carpetas de iCloud que piensas mover y usa **Get Size** para ver cuántos datos hay antes de empezar.

## Previsualiza la migración con Dry Run

Crea un trabajo de sincronización desde la pestaña **Home**. Establece la carpeta de iCloud Drive como origen y una nueva carpeta de pCloud, como `/From-iCloud`, como destino. Mantén la dirección unidireccional ("Modifying destination only") para que iCloud Drive nunca se modifique.

Antes de ejecutarlo, haz clic en **Dry Run**. RcloneView enumera cada archivo que copiaría y todo lo que eliminaría en el destino, sin mover ni un byte. Es el momento de detectar sorpresas: carpetas de paquetes de Mac, archivos `.DS_Store` o una carpeta olvidada de copias de seguridad antiguas del teléfono. Añade filtros personalizados en Step 3 para excluir lo que no quieras llevarte.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="iCloud Drive and pCloud side by side in RcloneView for a cloud-to-cloud transfer" class="img-large img-center" />

Ten en cuenta que no se trata de una copia del lado del servidor entre Apple y pCloud: los datos pasan por el equipo que ejecuta RcloneView, por lo que una conexión por cable y un ordenador que no entre en suspensión ayudan a que una migración grande termine de una sola vez.

## Ejecuta, supervisa y verifica

Inicia el trabajo y sigue en la pestaña **Transferring** el progreso, el número de archivos y la velocidad actual. Si la conexión se corta, vuelve a ejecutar el mismo trabajo. La sincronización solo transfiere los archivos que faltan o son diferentes, así que los archivos ya completados se omiten.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring an iCloud Drive to pCloud transfer in the RcloneView Transferring tab" class="img-large img-center" />

Cuando termine el trabajo, abre **Compare** con iCloud Drive a la izquierda y pCloud a la derecha. Activa "Show left-only files" y "Show different files". Un resultado vacío significa que la migración está completa. **Job History** guarda un registro de cada ejecución, con su estado, tamaño y número de archivos.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying the iCloud Drive to pCloud migration with RcloneView Folder Compare" class="img-large img-center" />

## Primeros pasos

RcloneView funciona en Windows, macOS y Linux, así que podrás gestionar la nueva biblioteca de pCloud desde cualquiera de tus ordenadores una vez terminada la mudanza.

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade iCloud Drive (inicio de sesión con cuenta de Apple) y pCloud (OAuth en el navegador) como remotos.
3. Crea un trabajo de sincronización unidireccional de iCloud Drive a una carpeta de pCloud y revísalo con **Dry Run**.
4. Ejecuta el trabajo y confirma el resultado con **Compare** antes de retirar la copia de iCloud.

Una migración verificada y repetible te permite cambiar de nube sin preguntarte si quedó algún archivo atrás.

---

**Guías relacionadas:**

- [Migra iCloud Drive a Google Drive — Transfiere archivos con RcloneView](https://rcloneview.com/support/blog/migrate-icloud-drive-to-google-drive-rcloneview)
- [Gestiona el almacenamiento de pCloud — Sincroniza y haz copias de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Soluciona los errores de sincronización de iCloud Drive — Cómo resolverlos con RcloneView](https://rcloneview.com/support/blog/fix-icloud-drive-sync-errors-rcloneview)

<CloudSupportGrid />
