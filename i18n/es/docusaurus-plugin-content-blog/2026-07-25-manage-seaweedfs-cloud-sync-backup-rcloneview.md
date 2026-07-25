---
slug: manage-seaweedfs-cloud-sync-backup-rcloneview
title: "Gestionar almacenamiento SeaweedFS — Sincronizar y hacer copias de seguridad con RcloneView"
authors:
  - alex
description: "Conecte almacenamiento de objetos SeaweedFS autoalojado a RcloneView para montaje, sincronización y copias de seguridad multiplataforma, sin necesidad de CLI."
keywords:
  - SeaweedFS RcloneView
  - almacenamiento SeaweedFS compatible con S3
  - GUI para almacenamiento de objetos autoalojado
  - montar SeaweedFS
  - copia de seguridad de SeaweedFS
  - sincronización de SeaweedFS
  - almacenamiento de objetos distribuido
  - puerta de enlace S3 de SeaweedFS
  - gestionar almacenamiento SeaweedFS
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - self-hosted
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestionar almacenamiento SeaweedFS — Sincronizar y hacer copias de seguridad con RcloneView

> Convierta su clúster SeaweedFS autoalojado en una unidad montable y un destino de sincronización de primer nivel, sin tocar una terminal.

SeaweedFS es un sistema de almacenamiento distribuido rápido que expone una puerta de enlace compatible con S3, lo que lo convierte en una opción popular para equipos que quieren almacenamiento de objetos en su propio hardware en lugar de una factura de nube pública. El inconveniente es que la mayoría de los despliegues de SeaweedFS se gestionan por completo mediante archivos de configuración y comandos de CLI. RcloneView cierra esa brecha tratando su puerta de enlace de SeaweedFS como cualquier otro remoto compatible con S3, ofreciéndole un explorador de archivos visual, transferencias mediante arrastrar y soltar, y copias de seguridad programadas sobre su clúster existente.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar SeaweedFS como remoto compatible con S3

La puerta de enlace S3 de SeaweedFS habla el mismo protocolo que Amazon S3, por lo que RcloneView se conecta a ella de la misma manera que se conecta a cualquier otro proveedor compatible con S3: Access Key ID, Secret Access Key y un Endpoint personalizado que apunta a la dirección y el puerto de su puerta de enlace. Abra la pestaña Remote > New Remote, elija la opción compatible con S3 e introduzca la URL de la puerta de enlace de su clúster como endpoint. Como RcloneView incluye una instancia de rclone integrada que se comunica a través de su API RC local, no hay que gestionar un binario aparte ni un archivo de configuración editado a mano: las credenciales que introduce en la interfaz son toda la configuración necesaria.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a new S3-compatible remote for a self-hosted SeaweedFS gateway in RcloneView" class="img-large img-center" />

Este mismo flujo de trabajo se aplica tanto si su clúster SeaweedFS se ejecuta en un servidor doméstico, en un rack en coubicación, o en una VM en la nube que usted mismo administra — a RcloneView solo le importa que la puerta de enlace responda a las llamadas de la API de S3.

## Sincronizar y respaldar datos entre SeaweedFS y otras nubes

Una vez conectado, SeaweedFS se comporta como cualquier otro panel en el Explorer de RcloneView, por lo que puede arrastrar archivos entre él y Google Drive, OneDrive, Backblaze B2 o un disco local en la misma ventana. Para protección recurrente, el asistente de Sync de 4 pasos le permite configurar un trabajo unidireccional desde su bucket de SeaweedFS a un segundo remoto, añadir filtros para excluir archivos temporales y ejecutar primero un Dry Run para previsualizar exactamente qué se copiaría o eliminaría.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing files between a SeaweedFS bucket and another cloud remote in RcloneView" class="img-large img-center" />

A diferencia de las herramientas de solo montaje, RcloneView también sincroniza y compara carpetas entre SeaweedFS y cualquier otro proveedor compatible, con la licencia FREE.

## Montar SeaweedFS como unidad local

Si su flujo de trabajo depende de que aplicaciones nativas lean y escriban archivos directamente, Mount Manager le permite conectar su bucket de SeaweedFS como unidad local en Windows, macOS o Linux. Establezca el modo de caché VFS en "writes" para un equilibrio entre capacidad de respuesta y seguridad, o en "full" si necesita acceso sin conexión a archivos usados recientemente.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a SeaweedFS remote as a local drive from Mount Manager" class="img-large img-center" />

## Supervisar transferencias e historial de trabajos

Todo trabajo de sincronización o copia contra su remoto de SeaweedFS aparece en la pestaña Transferring con progreso, velocidad y recuento de archivos en tiempo real, y cada ejecución completada queda registrada en Job History con duración, tamaño total y estado. Ese historial facilita confirmar que una copia de seguridad programada realmente se ejecutó antes de que necesite confiar en ella.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing completed sync runs against a SeaweedFS remote" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Reúna la Access Key, la Secret Key y la URL del endpoint de su puerta de enlace de SeaweedFS.
3. Cree un nuevo remoto compatible con S3 en RcloneView y pruebe la conexión.
4. Configure un trabajo de sincronización o un montaje para empezar a mover datos entre SeaweedFS y sus otros remotos.

El almacenamiento autoalojado no tiene por qué significar almacenamiento solo por línea de comandos: una interfaz gráfica adecuada hace que SeaweedFS sea tan accesible como cualquier nube comercial.

---

**Guías relacionadas:**

- [Gestionar almacenamiento MinIO autoalojado — Sincronización y copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/manage-minio-self-hosted-cloud-sync-rcloneview)
- [Centralizar S3, Wasabi y R2 con RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)
- [Caché VFS y rendimiento de montaje en RcloneView](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)

<CloudSupportGrid />
