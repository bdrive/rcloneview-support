---
slug: mount-box-storage-network-drive-rcloneview
title: "Monta el almacenamiento de Box como unidad de red con RcloneView para un acceso de equipo sin interrupciones"
authors:
  - tayson
description: "Convierte las carpetas de Box en una letra de unidad local o punto de montaje, navega al instante sin sincronización completa, y mantén a los equipos productivos con caché, comparación y trabajos programados en RcloneView."
keywords:
  - rcloneview
  - box mount
  - box drive letter
  - box network drive
  - cloud storage
  - vfs cache
  - windows
  - macos
  - rclone
  - multi cloud
  - file explorer
  - finder
  - scheduler
  - job history
  - transfer monitor
  - compare sync
  - checksum
  - gui
  - cloud backup
  - mount manager
tags:
  - RcloneView
  - cloud-storage
  - cloud-migration
  - mount
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Monta el almacenamiento de Box como unidad de red con RcloneView

> Deja de descargar todo desde Box. Móntalo como una unidad y navega en el Explorador o en Finder.

Box es excelente para la colaboración, pero los clientes de sincronización local pueden saturar los discos y ralentizar los portátiles. Con RcloneView puedes montar Box como una unidad de red, transmitir archivos bajo demanda y controlar la caché y el ancho de banda para que los equipos tengan un acceso rápido sin descargas completas.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## ¿Por qué montar Box en lugar de sincronizarlo?

- Ahorra espacio en disco en dispositivos compartidos; obtén solo lo que los usuarios abren.
- Incorporación más rápida: asigna una letra de unidad o una ruta de montaje y evita las sincronizaciones masivas iniciales.

## Paso 1 — Conecta Box en RcloneView

- Agrega Box mediante `+ New Remote` (flujo OAuth). Guía: [add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login).
- Verifica el remoto en **Remote Explorer** para asegurarte de que las carpetas y la profundidad se vean correctas.  

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## Paso 2 — Monta Box como una unidad (Windows o macOS)

- Abre **Mount Manager** y selecciona tu remoto de Box. Guía: [mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive).
- Elige un destino:
  - Windows: asigna una letra de unidad (por ejemplo, `B:`) usando `cmount` internamente.
  - macOS: elige una ruta de montaje (por ejemplo, `/Volumes/Box`).
- Guarda y monta; confirma que la unidad aparezca en el Explorador o en Finder.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />


## Paso 3 — (Opcional) Usa Compare antes de grandes movimientos

- Ejecuta **Compare** para ver las diferencias entre Box y una nube local o secundaria antes de hacer cambios estructurales: [compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents).
- Detecta archivos faltantes o más recientes sin arriesgarte a una sobrescritura accidental.  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
  

## Paso 5 — (Opcional) Trabajos de sincronización y copias de seguridad

- Refleja las carpetas críticas de Box en un destino de copia de seguridad (S3, Wasabi, NAS) con trabajos de **copy** o **sync**: [create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs).
- Empieza con copy por seguridad; cambia a sync después de validar los resultados.
- Programa ejecuciones fuera del horario laboral para que los montajes se mantengan ágiles durante la jornada.  

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />
  

Monta Box una sola vez, ajusta la caché y ofrece a los equipos una unidad de red rápida y de bajo consumo de recursos sin clientes de sincronización pesados. RcloneView mantiene todo visible, registrado y fácil de gestionar.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<CloudSupportGrid />
