---
slug: sync-pcloud-to-google-drive-rcloneview
title: "Sincronice pCloud con Google Drive — Copia de seguridad en la nube con RcloneView"
authors:
  - jay
description: "Sincronice pCloud con Google Drive con RcloneView: conecte ambos remotos, obtenga una vista previa con Dry Run y programe copias de seguridad de nube a nube desde una sola ventana."
keywords:
  - sincronizar pcloud con google drive
  - copia de seguridad de pcloud a google drive
  - RcloneView pcloud
  - sincronización de nube a nube
  - transferencia de pcloud a google drive
  - copia de seguridad de archivos de pcloud
  - segunda copia en la nube
  - programar sincronización en la nube
  - rclone GUI
tags:
  - RcloneView
  - pcloud
  - google-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincronice pCloud con Google Drive — Copia de seguridad en la nube con RcloneView

> Mantenga una segunda copia de sus archivos de pCloud en Google Drive con un trabajo de sincronización de nube a nube que puede previsualizar, ejecutar y programar desde una sola ventana.

Depender de una única nube para archivos importantes lo expone a bloqueos de cuenta, eliminaciones accidentales y errores de sincronización. Replicar pCloud en Google Drive le da una copia independiente en otro proveedor. RcloneView conecta ambos servicios mediante OAuth y luego sincroniza los datos entre ellos como un trabajo. RcloneView monta Y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecte pCloud y Google Drive

Ambos proveedores usan inicio de sesión OAuth basado en el navegador. En RcloneView, abra el cuadro de diálogo de nuevo remoto, elija pCloud e inicie sesión cuando se abra el navegador. Repita el proceso con Google Drive. Una vez autorizado, cada remoto aparece en Remote Manager y en Explorer, donde puede examinar las carpetas una al lado de la otra en un diseño de dos paneles.

<img src="/support/images/en/blog/new-remote.png" alt="Adición de remotos de pCloud y Google Drive en RcloneView" class="img-large img-center" />

## Inspeccione antes de sincronizar

Imagine a una diseñadora autónoma con un archivo de proyectos de 300 GB en pCloud que quiere un espejo en Drive. Antes de tocar nada, use Folder Compare en las dos carpetas. Muestra qué archivos existen solo en un lado, cuáles difieren y cuáles coinciden, de modo que sabrá exactamente qué hará la primera sincronización.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparación de carpetas de pCloud y Google Drive en RcloneView" class="img-large img-center" />

## Cree el trabajo de sincronización

El asistente de sincronización tiene cuatro pasos: elegir origen y destino, ajustar la configuración avanzada, definir filtros y, opcionalmente, programar. Elija pCloud como origen y Google Drive como destino con la opción unidireccional, que solo modifica el destino. Use filtros para omitir archivos temporales o limitar el tamaño de archivo, y ejecute un Dry Run para ver la lista de archivos que se copiarían o eliminarían. Como la sincronización unidireccional hace que el destino coincida con el origen, revise siempre la salida del Dry Run por si hay eliminaciones inesperadas.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de nube a nube de pCloud a Google Drive en RcloneView" class="img-large img-center" />

## Supervise y programe

Ejecute el trabajo y observe el progreso de la transferencia en directo; después revise los resultados en Job History. Con una licencia PLUS, añada una programación de estilo crontab para que el espejo se actualice de forma periódica (RcloneView sigue ejecutándose en la System Tray).

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Programación de un trabajo de sincronización de pCloud a Google Drive en RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añada pCloud y Google Drive como remotos mediante inicio de sesión OAuth.
3. Compare las carpetas de origen y destino y luego cree un trabajo de sincronización unidireccional.
4. Ejecute un Dry Run, ejecute el trabajo y revíselo en Job History.

Una segunda copia verificada en otro proveedor convierte un punto único de fallo en una verdadera copia de seguridad.

---

**Guías relacionadas:**

- [Administre el almacenamiento de pCloud — Sincronice y respalde archivos con RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Migre Google Drive a pCloud — Transfiera archivos con RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-pcloud-rcloneview)
- [Sincronice Dropbox con pCloud — Copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/sync-dropbox-to-pcloud-rcloneview)

<CloudSupportGrid />
