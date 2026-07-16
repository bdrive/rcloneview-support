---
slug: manage-backblaze-b2-cloud-sync-backup-rcloneview
title: "Gestiona el almacenamiento Backblaze B2 — Sincroniza y respalda archivos con RcloneView"
authors:
  - tayson
description: "Aprende a gestionar el almacenamiento en la nube Backblaze B2 con RcloneView. Sincroniza, respalda y transfiere archivos entre buckets de B2 y otros proveedores de nube sin esfuerzo."
keywords:
  - backblaze b2 sync
  - backblaze b2 backup
  - rcloneview backblaze
  - b2 cloud storage manager
  - backblaze b2 file transfer
  - b2 bucket management
  - s3 compatible backup
  - backblaze b2 rclone gui
  - cloud to cloud sync b2
  - b2 lifecycle rules
tags:
  - backblaze-b2
  - Backblaze
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el almacenamiento Backblaze B2 — Sincroniza y respalda archivos con RcloneView

> Backblaze B2 ofrece almacenamiento de objetos de nivel empresarial a una fracción del costo de AWS S3, y RcloneView hace que gestionarlo sea sencillo.

Backblaze B2 se ha convertido en la opción preferida de equipos y particulares que necesitan almacenamiento en la nube asequible y confiable sin la complejidad de los proveedores S3 tradicionales. Con $0.006 por GB/mes de almacenamiento y $0.01 por GB de salida de datos (con los primeros 10 GB gratuitos diarios bajo la alianza de ancho de banda de Cloudflare), B2 supera significativamente en precio a la mayoría de sus competidores. RcloneView te ofrece una interfaz gráfica completa para gestionar tus buckets de B2: navega por archivos, programa copias de seguridad, ejecuta sincronizaciones y transfiere datos hacia o desde otras nubes sin tocar la línea de comandos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Backblaze B2 en RcloneView

Configurar Backblaze B2 en RcloneView toma menos de un minuto. Abre el Gestor de remotos, selecciona **Backblaze B2** como proveedor e introduce tu Application Key ID y tu Application Key. Puedes usar una clave maestra o una clave específica de aplicación limitada a un solo bucket. Se recomiendan encarecidamente las claves específicas de aplicación para flujos de trabajo de producción, ya que siguen el principio de mínimo privilegio: si una clave se ve comprometida, solo queda expuesto un bucket.

Una vez conectado, RcloneView lista todos los buckets accesibles en el explorador de dos paneles. Puedes navegar por directorios, previsualizar archivos y consultar metadatos como el tamaño del archivo, la fecha de modificación y las sumas de verificación SHA-1 que B2 calcula del lado del servidor.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Backblaze B2 remote in RcloneView Remote Manager" class="img-large img-center" />

## Sincronizar y transferir archivos con B2

RcloneView admite las operaciones de **sincronización**, **copia** y **movimiento** entre Backblaze B2 y cualquier otro remoto configurado, incluyendo unidades locales, Google Drive, Dropbox, AWS S3 y Wasabi. El explorador de dos paneles te permite arrastrar y soltar archivos directamente, mientras que el sistema de trabajos gestiona automáticamente la cola y la lógica de reintentos.

Para migraciones grandes, la salida de datos gratuita de B2 a través de las alianzas con Cloudflare o Fastly CDN significa que puedes extraer datos de B2 sin disparar los costos de ancho de banda. La limitación de ancho de banda integrada de RcloneView y las transferencias multihilo te permiten saturar tu conexión cuando la velocidad importa o reducir el uso durante horas laborales.

Al sincronizar carpetas, RcloneView compara sumas de verificación de forma predeterminada. B2 almacena hashes SHA-1 para cada archivo, y RcloneView los utiliza para omitir archivos sin cambios, ahorrando tiempo y llamadas a la API. Esto es especialmente valioso ya que B2 cobra $0.004 por cada 10,000 transacciones de Clase B (descarga).

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring files between Backblaze B2 and another cloud in RcloneView" class="img-large img-center" />

## Programar copias de seguridad automatizadas hacia B2

Uno de los casos de uso más sólidos de B2 es como destino de copias de seguridad. El programador de trabajos de RcloneView te permite definir trabajos de copia de seguridad recurrentes: diarios, semanales o según una programación cron personalizada. Establece una carpeta local u otro remoto de nube como origen, B2 como destino, y deja que el programador se encargue del resto.

Las reglas de ciclo de vida de B2 complementan este flujo de trabajo. Puedes configurar los buckets para que oculten automáticamente los archivos después de un período determinado o eliminen permanentemente versiones antiguas, manteniendo los costos de almacenamiento predecibles. El panel de historial de trabajos de RcloneView te ofrece un registro de auditoría claro de cada transferencia, incluyendo el número de archivos, los bytes transferidos, los errores y el tiempo transcurrido.

Para equipos sujetos a requisitos de cumplimiento normativo, combinar la sincronización programada de RcloneView con la función Object Lock de B2 proporciona copias de seguridad inmutables que no pueden modificarse ni eliminarse durante el período de retención.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling an automated backup job to Backblaze B2" class="img-large img-center" />

## Montar B2 como una unidad local

La función de montaje de RcloneView te permite asignar un bucket de B2 como una letra de unidad local en Windows o un punto de montaje en macOS y Linux. Esto resulta útil para aplicaciones que esperan acceso a archivos locales: reproductores multimedia, editores de fotos o scripts que procesan archivos desde un directorio. La capa de caché VFS gestiona el búfer de lectura anticipada, por lo que las lecturas secuenciales funcionan bien incluso con conexiones a internet moderadas.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a Backblaze B2 bucket as a local drive in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Genera una Application Key en tu panel de Backblaze B2 y agrégala como un nuevo remoto en RcloneView.
3. Navega por tus buckets en el explorador de dos paneles y arrastra archivos para sincronizar o transferir.
4. Crea un trabajo programado para automatizar las copias de seguridad nocturnas hacia B2.

Backblaze B2 ofrece la economía de almacenamiento que hace que la copia de seguridad en la nube sea práctica a gran escala, y RcloneView elimina la barrera de la línea de comandos para que todo tu equipo pueda gestionarla.

---

**Guías relacionadas:**

- [Migra de Backblaze B2 a AWS S3 con RcloneView](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-aws-s3-rcloneview)
- [Sincroniza Google Drive con Backblaze B2 con RcloneView](https://rcloneview.com/support/blog/sync-google-drive-to-backblaze-b2-rcloneview)
- [Respalda Dropbox en Backblaze B2 — Almacenamiento asequible con RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)

<CloudSupportGrid />
