---
slug: manage-http-remote-cloud-sync-rcloneview
title: "Gestionar almacenamiento remoto HTTP — Explora y sincroniza archivos con RcloneView"
authors:
  - alex
description: "Conecta un índice de archivos HTTP de solo lectura a RcloneView y sincroniza su contenido con Google Drive, S3, Backblaze B2 y más de 90 proveedores de almacenamiento en la nube."
keywords:
  - remoto HTTP RcloneView
  - sincronización de servidor de archivos HTTP
  - almacenamiento HTTP de solo lectura
  - sincronizar HTTP a la nube
  - listado de directorio HTTP rclone
  - de HTTP a Google Drive
  - de HTTP a Amazon S3
  - archivar archivos HTTP
  - conexión HTTP de RcloneView
  - explorar remoto HTTP
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestionar almacenamiento remoto HTTP — Explora y sincroniza archivos con RcloneView

> RcloneView convierte cualquier índice de archivos HTTP público en un remoto explorable, para que puedas llevar su contenido a Google Drive, S3 o más de 90 proveedores de la nube sin usar un solo comando wget.

Numerosos conjuntos de datos, archivos de firmware, réplicas de investigación y artefactos de compilación internos todavía se encuentran detrás de un simple listado de directorio HTTP: sin API, sin inicio de sesión, solo carpetas y archivos servidos mediante una URL. Descargar desde estas fuentes suele implicar programar bucles de curl o wget y esperar que la estructura del directorio no cambie a mitad del proceso. RcloneView se conecta a cualquier endpoint HTTP como remoto de solo lectura y te permite explorarlo en el mismo panel del explorador que usas para el almacenamiento en la nube, para luego copiar lo que necesites a un destino de respaldo adecuado.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar un remoto HTTP en RcloneView

Abre la pestaña **Remote** y haz clic en **New Remote**; después elige HTTP en la lista de proveedores. Introduce la URL base del índice de archivos que quieres explorar — RcloneView lee el listado de directorio del servidor y lo presenta como un árbol de carpetas normal. No hay flujo OAuth ni credenciales que gestionar, porque los remotos HTTP son de solo lectura por diseño: puedes listar, explorar y descargar archivos, pero no puedes subir, renombrar ni eliminar nada en el servidor de origen.

Esa distinción importa en cómo usas este tipo de remoto. A diferencia de las herramientas de solo montaje, RcloneView también sincroniza y compara carpetas —incluso con la licencia FREE—, por lo que un remoto HTTP funciona mejor como una fuente desde la que extraes datos, con un destino en la nube o local con capacidad de escritura al otro lado.

<img src="/support/images/en/blog/new-remote.png" alt="Agregando un nuevo remoto HTTP en RcloneView" class="img-large img-center" />

## Explorar y descargar desde un índice HTTP

Una vez conectado, el remoto HTTP se comporta como cualquier otro panel en el explorador multipanel de RcloneView. Expande el árbol de carpetas, revisa el tamaño de los archivos y las fechas de modificación cuando el servidor las reporte, y usa Ctrl+Clic o Mayús+Clic para seleccionar varios archivos o subcarpetas antes de descargarlos. Abre un destino en la nube —un bucket de Backblaze B2 o una carpeta de Google Drive— en el panel adyacente y arrastra los archivos para iniciar una transferencia.

Este es un patrón habitual entre equipos que replican archivos de conjuntos de datos públicos, extraen imágenes de firmware desde el punto de distribución HTTP de un proveedor, o archivan instantáneas de un servidor de compilación interno que solo expone un listado de directorio.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Copiando archivos desde un remoto HTTP al almacenamiento en la nube en RcloneView" class="img-large img-center" />

## Programar extracciones recurrentes desde una fuente HTTP

Si el índice HTTP se actualiza periódicamente —compilaciones nocturnas, actualizaciones semanales de conjuntos de datos—, configura una entrada en el Job Manager con el remoto HTTP como fuente y tu almacenamiento en la nube como destino. Ejecuta primero un **Dry Run** para confirmar exactamente qué archivos se copiarán, ya que los listados de directorio HTTP pueden variar en la cantidad de metadatos que exponen, y conviene verificar que la coincidencia de archivos se comporte como se espera antes de una transferencia real.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Programando un trabajo recurrente para extraer archivos desde un remoto HTTP en RcloneView" class="img-large img-center" />

Con una **licencia PLUS**, adjunta un horario de estilo crontab al trabajo para que los archivos nuevos publicados en el servidor HTTP lleguen a tu archivo en la nube según ese horario, y revisa después la pestaña **Job History** para confirmar el número de transferencias y detectar archivos que el servidor de origen haya dejado de servir.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre **Remote** > **New Remote** y selecciona HTTP en la lista de proveedores.
3. Introduce la URL base del listado de directorio y guarda el remoto.
4. Abre el remoto HTTP en un panel y tu destino en la nube en el otro.
5. Usa **Job Manager** para configurar un trabajo de sincronización, ejecutando un Dry Run antes de la primera extracción real.

Una vez conectada una fuente HTTP, llevar archivos a tu archivo en la nube pasa de ser un script puntual que tienes que recordar volver a ejecutar a convertirse en un trabajo repetible y auditable.

---

**Guías relacionadas:**

- [Connect Any WebDAV Server to RcloneView — Sync with Google Drive, S3, and 90+ Clouds](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [Connect Any SFTP Server to RcloneView — Sync Remote Servers with Cloud Storage](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [Manage FTP Server Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-ftp-server-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
