---
slug: auto-mount-startup-rcloneview
title: "Montaje automático al inicio — Unidades en la nube siempre listas en RcloneView"
authors:
  - tayson
description: "Configure el Montaje automático al inicio de RcloneView para que sus unidades en la nube estén listas en el momento en que arranca su ordenador, sin tener que volver a montarlas manualmente cada vez."
keywords:
  - auto mount cloud drive startup
  - montaje automático rcloneview
  - montar almacenamiento en la nube al arrancar
  - unidad en la nube siempre activa
  - montaje automático en la nube windows
  - iniciar sesión unidad en la nube
  - función plus de rcloneview
  - montaje persistente en la nube
  - mount manager rcloneview
  - automatización de inicio de unidad en la nube
tags:
  - RcloneView
  - feature
  - mount
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Montaje automático al inicio — Unidades en la nube siempre listas en RcloneView

> En lugar de abrir RcloneView y montar manualmente cada unidad en la nube todas las mañanas, el Montaje automático al inicio las pone en línea automáticamente en el momento en que arranca su equipo.

Cualquiera que dependa de una unidad en la nube montada como parte de su flujo de trabajo diario —editando archivos directamente desde Google Drive, obteniendo recursos de un bucket de S3 o explorando un servidor SFTP como si fuera una carpeta local— conoce la molestia de tener que volver a montarla después de cada reinicio. La configuración de Montaje automático al inicio de RcloneView elimina por completo ese paso, reconectando sus montajes configurados en cuanto la aplicación se inicia junto con el sistema.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Qué hace el Montaje automático al inicio

Cuando se activa en un montaje específico, RcloneView reconecta automáticamente el punto de montaje de ese remoto cada vez que la aplicación se inicia, usando exactamente el modo de caché, la letra de unidad o ruta, y la configuración de solo lectura que estableció al crearlo por primera vez. Combinado con "Iniciar al iniciar sesión" en la configuración general, esto significa que una unidad montada puede estar disponible en su explorador de archivos incluso antes de que haya abierto la ventana de RcloneView. Esta es una función de la licencia PLUS, junto con la sincronización programada y el soporte de múltiples ventanas; la licencia FREE sigue cubriendo el montaje y desmontaje manual, y el acceso completo al explorador de archivos para cada montaje.

La configuración es por montaje, no global, por lo que puede elegir exactamente qué unidades se reconectan automáticamente. Un remoto de archivo poco usado puede permanecer en modo manual, mientras que sus unidades de trabajo principales —digamos, una carpeta de Google Drive y un bucket de S3 que usa a diario— se montan solas cada vez.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager mostrando montajes configurados con la opción de montaje automático" class="img-large img-center" />

## Configurarlo en Mount Manager

Abra Mount Manager desde la pestaña Remote y cree un nuevo montaje o edite uno existente. En la pantalla de configuración del montaje, active Auto mount junto con sus otras opciones —modo de caché, nombre de volumen y estado de solo lectura— y luego guarde. RcloneView monta Y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux, por lo que el mismo interruptor de montaje automático funciona de manera idéntica ya sea que el remoto subyacente sea Google Drive, un bucket compatible con S3 o un servidor SFTP.

Para los montajes que ya están en ejecución, recuerde que Edit está deshabilitado mientras un montaje está activo; desmóntelo primero, aplique el interruptor de Auto mount y luego vuelva a montarlo para confirmar que se guardó correctamente.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Montaje de una carpeta remota directamente desde la barra de herramientas del panel Explorer" class="img-large img-center" />

## Combinar el Montaje automático con la bandeja del sistema

El Montaje automático al inicio funciona mejor junto con "Iniciar minimizado" y la bandeja del sistema, ya que esta combinación permite que RcloneView se inicie en segundo plano, monte sus unidades configuradas y permanezca fuera del camino hasta que lo necesite. El menú Mount en el icono de la bandeja del sistema le sigue permitiendo comprobar el estado o desmontar una unidad cuando lo desee, por lo que la automatización no le hace perder el control manual cuando lo necesita.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Menú de la bandeja del sistema mostrando el estado de la unidad montada" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html) y confirme que su licencia PLUS está activa en Help > Activate License.
2. Abra Mount Manager y seleccione el montaje que desea que se reconecte automáticamente.
3. Active el interruptor de Auto mount en la configuración de ese montaje y guarde.
4. Active "Iniciar al iniciar sesión" en la configuración general para que RcloneView —y sus unidades montadas automáticamente— estén listos antes de que se siente a trabajar.

Una vez configurado, su almacenamiento en la nube se comporta como una parte permanente de su sistema de archivos, sin necesidad de volver a montarlo manualmente.

---

**Guías relacionadas:**

- [Mount Cloud Storage as a Local Drive — Complete Guide to Using Google Drive, S3, and OneDrive Like Local Folders](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)
- [System Tray and Background Sync — Keep Cloud Jobs Running in RcloneView](https://rcloneview.com/support/blog/system-tray-background-sync-rcloneview)
- [RcloneView Mount Performance Tuning: Cache, Read Ahead, and VFS Settings for Smooth Cloud Drives](https://rcloneview.com/support/blog/mount-performance-tuning-rcloneview)

<CloudSupportGrid />
