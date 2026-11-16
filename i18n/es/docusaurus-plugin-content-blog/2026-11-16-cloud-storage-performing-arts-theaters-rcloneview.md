---
slug: cloud-storage-performing-arts-theaters-rcloneview
title: "Almacenamiento en la nube para teatros — Protege guiones, cues y vídeos de ensayo con RcloneView"
authors:
  - tayson
description: "Descubre cómo las compañías de teatro usan RcloneView para sincronizar guiones, archivos de cues de iluminación y sonido y vídeos de ensayo entre nubes y NAS con copias de seguridad programadas."
keywords:
  - almacenamiento en la nube para teatros
  - copia de seguridad de archivos de producción teatral
  - almacenamiento en la nube para artes escénicas
  - copia de seguridad de cues de iluminación y sonido
  - copia de seguridad en la nube de vídeos de ensayo
  - sincronización de archivos de escenografía
  - archivo teatral de NAS a la nube
  - RcloneView para compañías de teatro
  - copia de seguridad multinube para organizaciones artísticas
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Almacenamiento en la nube para teatros — Protege guiones, cues y vídeos de ensayo con RcloneView

> La noche del estreno depende de los archivos: la revisión correcta del guion, los cues de sonido definitivos y el plano de iluminación que aprobó la diseñadora.

Una compañía de teatro regional maneja una cantidad sorprendente de datos. La dirección comparte revisiones del guion en Google Drive, el diseñador de sonido entrega las listas de cues por Dropbox, los vídeos de ensayo se acumulan en un Synology NAS en la cabina de control y el archivo de temporadas pasadas reposa en discos externos envejecidos. RcloneView reúne todo esto en una sola ventana para que el equipo de producción pueda sincronizar, comparar y respaldar cada carpeta de montaje sin saltar entre aplicaciones.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta todas las ubicaciones de almacenamiento de la producción

Cada departamento suele elegir su propia herramienta, así que el primer paso es tenerlo todo a la vista. En RcloneView, añade Google Drive y Dropbox con un inicio de sesión en el navegador, conecta el NAS de la cabina mediante la detección automática de Synology y añade un bucket de almacenamiento de objetos como Backblaze B2 o Wasabi para el archivo a largo plazo. Las carpetas compartidas que los diseñadores externos envían por Google Drive pueden añadirse como un remoto Google Drive Shared with Me.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive, Dropbox, and Backblaze B2 remotes for a theater production in RcloneView" class="img-large img-center" />

Con hasta cuatro paneles del explorador abiertos lado a lado, el regidor puede arrastrar el libreto de regiduría más reciente desde Drive a la carpeta del montaje en el NAS, o traer los renders de una diseñadora desde Dropbox al bucket de archivo. Arrastrar entre remotos distintos copia los archivos, de modo que el original permanece donde lo dejó la diseñadora.

## Mantén coherentes los cues y guiones antes de la semana técnica

El error clásico de la semana técnica es dar la función con un archivo de cues desactualizado. Folder Compare de RcloneView coloca la carpeta de entrega del diseñador de sonido junto a la copia de la cabina y resalta los archivos que solo existen en un lado o cuyo tamaño difiere. Copia los cues modificados con un clic y quedarán marcados como iguales en la vista de comparación.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing sound cue folders between Dropbox and the booth NAS in RcloneView" class="img-large img-center" />

Para la carpeta completa del montaje, un trabajo de Sync con un Dry Run previo muestra exactamente qué se copiará o eliminará, algo importante cuando la dirección ha reorganizado discretamente la carpeta del guion.

## Respalda los vídeos de ensayo en dos destinos a la vez

Las grabaciones de ensayos y de archivo son grandes e irreemplazables. La sincronización 1:N de RcloneView replica una carpeta de origen en varios destinos en un solo trabajo, de modo que la carpeta de vídeo del NAS puede ir a la vez a un bucket de B2 y a una segunda nube. A diferencia de las herramientas que solo montan, RcloneView también sincroniza y compara carpetas, con la FREE License.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing rehearsal video from a Synology NAS to two cloud destinations with RcloneView" class="img-large img-center" />

Los contratos de los actores y las exportaciones de nóminas merecen un cuidado especial. Envuelve una carpeta en la nube con un remoto Crypt para que los nombres y el contenido de los archivos se cifren antes de salir de la oficina.

## Automatiza las copias de seguridad nocturnas durante la temporada

Con una PLUS License, el programador estilo crontab del asistente de trabajos ejecuta copias de seguridad después de cada función nocturna, por ejemplo a la 1:00 AM, y Simulate schedule muestra las próximas ejecuciones. Job History registra cada ejecución con su estado, tamaño y número de archivos, lo que da a la jefatura de producción un registro claro si surge alguna duda en plena temporada.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a nightly theater backup job in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade los remotos que tus departamentos ya usan: Google Drive, Dropbox, tu NAS y un bucket de archivo.
3. Usa Folder Compare para confirmar que la copia de cues de la cabina coincide con la última entrega del diseñador.
4. Crea un trabajo de Sync 1:N para los vídeos de ensayo y prográmalo cada noche con PLUS.

Con los archivos protegidos, el equipo puede concentrarse en la función.

---

**Guías relacionadas:**

- [Flujo de trabajo de almacenamiento en la nube para equipos de producción de vídeo — Sincroniza dailies, proxies y finales con RcloneView](https://rcloneview.com/support/blog/cloud-storage-video-production-teams-rcloneview)
- [Almacenamiento en la nube para producción musical — Gestiona sesiones, stems y copias de seguridad con RcloneView](https://rcloneview.com/support/blog/cloud-storage-music-production-rcloneview)
- [Sincronización 1:N — Sincroniza un origen con varios destinos en RcloneView](https://rcloneview.com/support/blog/one-to-many-sync-multiple-destinations-rcloneview)

<CloudSupportGrid />
