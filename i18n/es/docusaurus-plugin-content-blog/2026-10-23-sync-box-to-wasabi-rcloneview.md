---
slug: sync-box-to-wasabi-rcloneview
title: "Sincronizar Box con Wasabi — Copia de seguridad en la nube con RcloneView"
authors:
  - tayson
description: "Sincroniza Box con Wasabi usando RcloneView: conecta ambos remotos, previsualiza con Dry Run, ejecuta una copia de seguridad unidireccional y verifica los resultados con Folder Compare."
keywords:
  - sincronizar Box con Wasabi
  - copia de seguridad de Box a Wasabi
  - transferencia de Box a Wasabi
  - RcloneView box
  - RcloneView wasabi
  - sincronización de nube a nube
  - copia de seguridad de Box en almacenamiento de objetos
  - copia de seguridad S3 en Wasabi
tags:
  - RcloneView
  - box
  - wasabi
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincronizar Box con Wasabi — Copia de seguridad en la nube con RcloneView

> Mantén una copia independiente de tu contenido de Box en el almacenamiento de objetos de Wasabi con una sincronización unidireccional repetible.

Box es un lugar cómodo para colaborar, pero una segunda copia fuera de la plataforma te protege de borrados accidentales, bloqueos de cuenta y lagunas de retención. Wasabi es almacenamiento de objetos compatible con S3, lo que lo convierte en un destino natural para esa copia. RcloneView conecta ambos servicios en una sola ventana, y la sincronización básica y Dry Run están disponibles con la licencia FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta Box y Wasabi como remotos

Box usa OAuth basado en navegador. En RcloneView, añade un nuevo remoto, elige Box e inicia sesión cuando se abra el navegador. Si tu organización usa Box for Business, el remoto necesita `box_sub_type = enterprise`. Wasabi se añade como un remoto compatible con S3: introduce tu Access Key, tu Secret Key y el endpoint de tu región de Wasabi.

Cuando ambos remotos aparezcan en el administrador de remotos (Remote Manager), ábrelos en dos paneles del Explorer, uno junto al otro. Así podrás explorar el árbol de carpetas de Box a la izquierda y un bucket de Wasabi a la derecha antes de configurar nada.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir remotos de Box y Wasabi en RcloneView" class="img-large img-center" />

## Previsualiza con Dry Run antes de sincronizar

Imagina una agencia de diseño con 800 GB de carpetas de proyectos de clientes en Box. Antes de la primera sincronización, ejecuta un Dry Run. Muestra qué archivos se copiarían y cuáles se eliminarían, sin cambiar nada. Esto te ayuda a evitar apuntar una sincronización a la ruta de bucket equivocada.

Para una copia de seguridad, la sincronización unidireccional ("Modifying destination only") es la dirección adecuada: Box sigue siendo la fuente de verdad y Wasabi la replica. Recuerda que una sincronización también elimina los archivos de destino que ya no existen en el origen, así que usa un bucket o prefijo dedicado para el espejo.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de nube a nube entre Box y Wasabi" class="img-large img-center" />

## Configura el trabajo de sincronización

El asistente de trabajos recorre cuatro pasos: almacenamiento, ajustes avanzados, filtros y programación. Aumenta el número de transferencias de archivos si tienes muchos documentos pequeños y activa la comparación por suma de verificación cuando quieras una verificación basada en hash. Los filtros predefinidos incluyen la opción Box Docs, útil porque Box Notes y otros elementos que solo existen en línea no se comportan como archivos normales.

Dale al trabajo un nombre con letras, dígitos, guiones o guiones bajos, guárdalo y ejecútalo. El progreso, la velocidad y el número de archivos aparecen en la pestaña Transferring.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ejecutar un trabajo guardado de sincronización de Box a Wasabi" class="img-large img-center" />

## Programa y verifica

La sincronización programada es una función PLUS, con campos al estilo crontab y un simulador que muestra las próximas ejecuciones. Una ejecución nocturna mantiene actualizada la copia de Wasabi. Después de cada ejecución, abre el historial de trabajos (Job History) para comprobar el estado, el tamaño y el número de archivos, o usa Folder Compare para confirmar que ambos lados coinciden.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Programar un trabajo de sincronización periódico en RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade tu remoto de Box mediante OAuth y tu remoto de Wasabi con sus claves y endpoint.
3. Crea un trabajo de sincronización de Box a un bucket de Wasabi dedicado y ejecuta primero un Dry Run.
4. Ejecuta el trabajo y luego verifica con Folder Compare y el historial de trabajos.

Un espejo probado y programado convierte a Box de un punto único de fallo en una mitad de una copia de seguridad real.

---

**Guías relacionadas:**

- [Migrar Box a Wasabi](https://rcloneview.com/support/blog/migrate-box-to-wasabi-rcloneview)
- [Sincronizar Google Drive con Box](https://rcloneview.com/support/blog/sync-google-drive-to-box-rcloneview)
- [Solucionar errores de sincronización de Wasabi](https://rcloneview.com/support/blog/fix-wasabi-sync-errors-rcloneview)

<CloudSupportGrid />
