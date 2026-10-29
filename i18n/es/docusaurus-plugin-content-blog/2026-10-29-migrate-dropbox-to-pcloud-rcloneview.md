---
slug: migrate-dropbox-to-pcloud-rcloneview
title: "Migrar Dropbox a pCloud — Transfiere archivos con RcloneView"
authors:
  - robin
description: "Mueve archivos de Dropbox a pCloud con RcloneView: conecta ambos remotos, ejecuta un Dry Run, copia de nube a nube y verifica con Folder Compare."
keywords:
  - migrar dropbox a pcloud
  - transferencia de dropbox a pcloud
  - mover archivos de dropbox a pcloud
  - migración de dropbox a pcloud
  - transferencia de nube a nube
  - rcloneview dropbox
  - rcloneview pcloud
  - cambiar de dropbox a pcloud
  - transferir datos de dropbox
tags:
  - RcloneView
  - dropbox
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar Dropbox a pCloud — Transfiere archivos con RcloneView

> Traslada una cuenta de Dropbox a pCloud en una sola pasada controlada y verificable, en lugar de descargar y volver a subir a mano.

Cambiar de proveedor suele implicar descargar gigabytes a un portátil y volver a subirlos. RcloneView lo evita: conecta Dropbox y pCloud lado a lado y ejecuta la transferencia de nube a nube a través de rclone. RcloneView permite montar y sincronizar más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta Dropbox y pCloud

Ambos servicios usan inicio de sesión OAuth basado en el navegador en RcloneView, por lo que no hay claves de API que pegar. Abre la pestaña Remote, haz clic en **New Remote**, elige Dropbox y aprueba el acceso en la ventana del navegador que se abre. Repite el proceso con pCloud. Si migras una cuenta de equipo, Dropbox for Business necesita el ajuste `dropbox_business = true`.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir un nuevo remoto de Dropbox y pCloud en RcloneView" class="img-large img-center" />

Una vez creados ambos remotos, ábrelos en dos paneles Explorer. Ver el árbol de carpetas de Dropbox junto al destino de pCloud facilita decidir si moverlo todo o solo algunas carpetas.

## Planifica la copia antes de ejecutarla

Usa un trabajo **Copy** para la primera migración, porque nunca elimina nada en el origen. En el asistente de trabajos de 4 pasos, elige Dropbox como origen y una carpeta dedicada de pCloud como destino. En Advanced Settings puedes aumentar el número de transferencias de archivos para bibliotecas grandes de fotos o documentos, y activar la comparación por checksum si quieres verificar por hash y tamaño.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de nube a nube de Dropbox a pCloud en RcloneView" class="img-large img-center" />

El filtrado también ayuda. Establece un tamaño máximo de archivo o excluye patrones como `.git/` para que los archivos temporales y las carpetas de compilación no viajen con el resto. Ejecuta primero un **Dry Run**: lista los archivos que se copiarían sin tocar ninguna de las dos cuentas.

## Ejecuta, supervisa y verifica

Inicia el trabajo y observa la pestaña Transferring para ver el progreso, la velocidad y el número de archivos. Dropbox aplica límites de tasa a la API, por lo que una transferencia grande puede ralentizarse en ocasiones; RcloneView reintenta la sincronización (3 intentos por defecto) en lugar de abandonarla.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Supervisión de una transferencia en curso en RcloneView" class="img-large img-center" />

Cuando termine el trabajo, abre **Compare** en las carpetas de Dropbox y pCloud. Los archivos solo a la izquierda son los que no llegaron; los archivos «different» difieren en tamaño. Copia los rezagados con un clic y revisa en Job History el estado, el tamaño total y el número de archivos de cada ejecución.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare mostrando diferencias entre Dropbox y pCloud" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade Dropbox y pCloud como remotos con **New Remote**.
3. Crea un trabajo Copy con Dropbox como origen y ejecuta un Dry Run.
4. Ejecuta el trabajo y verifica con Folder Compare antes de dar de baja la cuenta antigua.

Deja Dropbox intacto hasta que Compare no muestre archivos solo a la izquierda, y el original seguirá disponible como respaldo.

---

**Guías relacionadas:**

- [Manage Dropbox Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Manage pCloud Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Migrate pCloud to Google Drive — Transfer Files with RcloneView](https://rcloneview.com/support/blog/migrate-pcloud-to-google-drive-rcloneview)

<CloudSupportGrid />
