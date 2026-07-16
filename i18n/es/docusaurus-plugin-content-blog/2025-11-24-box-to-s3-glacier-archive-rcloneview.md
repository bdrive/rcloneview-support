---
slug: box-to-s3-glacier-archive-rcloneview
title: "De Box a S3 + Glacier: archivos por niveles con RcloneView"
authors:
  - tayson
description: "Migra bibliotecas de Box a almacenamiento activo en Amazon S3 y a Glacier Deep Archive para retención a largo plazo, con comparación, verificación de checksum y sincronizaciones programadas en RcloneView."
keywords:
  - rcloneview
  - migración de box
  - s3
  - glacier
  - archivo en la nube
  - verificación de checksum
  - programador
  - multi nube
  - rclone
  - almacenamiento por niveles
  - copia de seguridad en la nube
  - comparar sincronización
  - mount
  - historial de trabajos
  - panel visual
  - gui
  - aws
  - vault
  - cumplimiento normativo
  - retención a largo plazo
tags:
  - cloud-migration
  - s3
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# De Box a S3 + Glacier: archivos por niveles con RcloneView

> Mueve bibliotecas de Box a Amazon S3 para acceso activo y a Glacier para retención a largo plazo, con comparaciones visuales, sincronizaciones verificadas por checksum y trabajos programados, sin necesidad de indicadores de línea de comandos.

Box es excelente para la colaboración, pero la retención a largo plazo y las bibliotecas de medios grandes pueden resultar costosas. RcloneView te permite reflejar carpetas de Box en buckets de S3 para acceso activo y luego trasladar los datos antiguos a clases de Glacier según un calendario. Obtienes comparaciones lado a lado, trabajos registrados y reintentos sin necesidad de vigilar scripts.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Qué estamos resolviendo

- Reducir el gasto de almacenamiento en Box moviendo los datos fríos a Glacier por niveles.
- Mantener una copia siempre disponible en S3 para equipos activos mientras Glacier conserva el historial.
- Mantener la integridad con trabajos verificados por checksum y un registro de auditoría.

## Conecta remotos de Box y S3 rápidamente

- Agrega remotos de Box y S3 mediante `+ New Remote`. Configuración de OAuth y claves: [add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login), [s3](/howto/remote-storage-connection-settings/s3).  

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />. 

- Usa el **Explorador de remotos** para verificar la profundidad y el nombrado de las carpetas antes de la primera sincronización.  

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />. 

- Opcional: monta cualquiera de los remotos localmente para comprobaciones rápidas: [mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive).  

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />. 

## Compara antes de mover

- Ejecuta **Comparar** entre Box y el prefijo de S3 de destino para ver archivos faltantes o más recientes antes de confirmar: [compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents).
- Filtra por extensiones (por ejemplo, PDF, CAD, medios) para acotar las revisiones.  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />. 


## Crea una canalización de dos niveles (S3 activo, Glacier frío)

- Paso 1: Crea un trabajo de **copia** de Box a S3 para el nivel activo: [create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs). Comienza con copia por seguridad; cambia a sincronización después de validar los resultados.  

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />. 

- Paso 2: Aplica políticas de ciclo de vida de S3 en el bucket para transicionar los objetos a clases de Glacier después de N días. Mantén el trabajo de RcloneView apuntando al prefijo activo (por ejemplo, `s3:box-archive/hot/`).
- Paso 3: Para archivos profundos, programa un trabajo secundario para trasladar carpetas de uso poco frecuente directamente a un prefijo enfocado en Glacier (por ejemplo, `s3:box-archive/cold/`).  

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />. 


RcloneView te ofrece una forma visual y repetible de salir de Box, reducir los costos de almacenamiento y mantener archivos conformes en AWS. Compara primero, copia con seguridad, programa el resto, y descansa tranquilo.


<CloudSupportGrid />
