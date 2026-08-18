---
slug: manage-icloud-photos-cloud-sync-rcloneview
title: "Gestionar iCloud Photos — Sincronizar y respaldar archivos con RcloneView"
authors:
  - robin
description: "Gestione iCloud Photos con RcloneView — explore, sincronice y haga copia de seguridad de su biblioteca de fotos de Apple a otras nubes desde una única GUI multiplataforma."
keywords:
  - gestión de iCloud Photos
  - copia de seguridad de iCloud Photos
  - sincronización de iCloud Photos
  - RcloneView iCloud Photos
  - copia de seguridad en la nube de Apple Photos
  - iCloud Photos to Google Drive
  - migración de iCloud Photos
  - herramienta de copia de seguridad de biblioteca de fotos de Apple
  - iCloud Photos rclone
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - macos
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestionar iCloud Photos — Sincronizar y respaldar archivos con RcloneView

> Conecte su biblioteca de iCloud Photos en RcloneView y haga una copia de seguridad en otra nube sin exportar álbumes manualmente.

El ecosistema de Photos de Apple mantiene años de imágenes y vídeos encerrados dentro de iCloud, y conseguir una segunda copia en otro lugar normalmente implica exportar álbumes uno a uno a través de la app Photos. RcloneView se conecta a iCloud Photos como su propio remoto dedicado — un paquete independiente de iCloud Drive — de modo que puede explorar la biblioteca directamente y copiarla a Google Drive, Amazon S3 o una unidad de respaldo local sin el paso manual de exportación. Puede conectar S3, Azure File Storage o Backblaze B2 con lectura/escritura completa en la licencia FREE, por lo que el lado de destino de una copia de seguridad de fotos no cuesta nada adicional configurar.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar iCloud Photos como remoto

iCloud Photos se añade a través de la pestaña Remote > New Remote en RcloneView, y se configura como su propio tipo de remoto dedicado, distinto de iCloud Drive — los dos se comportan como remotos separados aunque ambos provengan de la misma cuenta de Apple. Una vez autenticado, la biblioteca aparece en el panel Explorer igual que cualquier otro almacenamiento en la nube, con carpetas, miniaturas y metadatos de archivo que puede explorar y seleccionar.

<img src="/support/images/en/blog/new-remote.png" alt="Adding an iCloud Photos remote in RcloneView" class="img-large img-center" />

Como la biblioteca puede llegar a decenas de miles de archivos en usuarios de iCloud de larga data, merece la pena cambiar a Thumbnail View de RcloneView antes de hacer una copia masiva — le permite recorrer las vistas previas de imágenes para confirmar que apunta al álbum o rango de fechas correcto antes de que comience una transferencia.

## Hacer copia de seguridad en una segunda nube

Con iCloud Photos conectado, configure un trabajo de sincronización mediante el asistente de 4 pasos: elija iCloud Photos como origen, elija un remoto de destino — Google Drive, un bucket compatible con S3 o una unidad externa local — y ejecute primero un Dry Run para previsualizar exactamente qué se copiará antes de que se transfiera nada realmente. Para una biblioteca de fotos en particular, la comparación de checksum en el Paso 2 es útil ya que los archivos de fotos rara vez cambian de tamaño, pero aun así desea confianza en que la copia coincide con el original byte a byte.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job from iCloud Photos to another cloud remote in RcloneView" class="img-large img-center" />

Filtering Settings en el Paso 3 también ayuda a acotar bibliotecas grandes — un filtro de antigüedad máxima de archivo limita un trabajo de copia de seguridad solo a las incorporaciones recientes, lo que mantiene rápidas las ejecuciones repetidas una vez completada la copia completa inicial.

## Automatizar copias de seguridad recurrentes

Una exportación única no protege las fotos tomadas el próximo mes, así que la mayoría de los usuarios de iCloud Photos configuran un trabajo de sincronización recurrente en lugar de uno manual puntual. Con una licencia PLUS, adjunte un horario de estilo crontab al trabajo para que se ejecute automáticamente con la cadencia que le convenga — diaria, semanal o después de una hora específica cada noche — y revise Job History después para confirmar que la ejecución se completó y ver cuántos archivos se transfirieron.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring iCloud Photos backup job in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añada un remoto de iCloud Photos a través de la pestaña Remote > New Remote.
3. Configure un trabajo de sincronización a su destino de copia de seguridad elegido y ejecute primero un Dry Run.
4. Programe copias de seguridad recurrentes para que las fotos nuevas permanezcan protegidas automáticamente.

Tener una segunda copia de su biblioteca de fotos fuera del ecosistema de Apple significa un punto único de fallo menos si una cuenta se bloquea o se pierde un dispositivo.

---

**Guías relacionadas:**

- [iCloud Drive con RcloneView](https://rcloneview.com/support/blog/icloud-drive-with-rcloneview)
- [Gestionar la sincronización en la nube de iCloud Drive con RcloneView](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [Solucionar errores de sincronización de iCloud Drive con RcloneView](https://rcloneview.com/support/blog/fix-icloud-drive-sync-errors-rcloneview)

<CloudSupportGrid />
