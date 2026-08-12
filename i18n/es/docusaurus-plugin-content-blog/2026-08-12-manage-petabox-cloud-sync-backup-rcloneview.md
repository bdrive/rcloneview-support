---
slug: manage-petabox-cloud-sync-backup-rcloneview
title: "Gestiona el almacenamiento Petabox — Sincroniza y respalda archivos con RcloneView"
authors:
  - kai
description: "Conecta el almacenamiento de objetos Petabox, compatible con S3, a RcloneView para navegación multiplataforma, sincronización, copia de seguridad y montaje en una sola interfaz gráfica."
keywords:
  - Petabox RcloneView
  - almacenamiento en la nube Petabox
  - almacenamiento de objetos compatible con S3
  - copia de seguridad de Petabox
  - sincronización de Petabox
  - montar Petabox
  - GUI de almacenamiento de objetos
  - gestión de archivos de Petabox
  - gestor de almacenamiento en la nube
  - sincronización de buckets de Petabox
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el almacenamiento Petabox — Sincroniza y respalda archivos con RcloneView

> Explora, sincroniza y haz copias de seguridad de tus buckets de Petabox junto con cualquier otra nube que uses, todo desde una única ventana de escritorio.

Petabox es un servicio de almacenamiento de objetos compatible con S3, lo que significa que RcloneView puede conectarse a él de la misma forma que se conecta a Amazon S3, Wasabi o cualquier otro proveedor con protocolo S3: con un Access Key ID, una Secret Access Key y un endpoint. Una vez conectados, los buckets de Petabox aparecen como un remoto normal en el explorador de archivos, listos para explorar, transferir y programar como cualquier carpeta local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Petabox como nuevo remoto

Abre Remote Manager desde la pestaña Remote y elige New Remote. Dado que se accede a Petabox mediante el protocolo S3 de rclone, selecciona la opción compatible con S3 e introduce tu Access Key ID, tu Secret Access Key y la URL del endpoint de Petabox proporcionada por tu cuenta. No hay que completar ningún flujo OAuth en el navegador — las credenciales por sí solas autentican la conexión, y el remoto aparece en tu barra de pestañas en cuanto la prueba de conexión se realiza correctamente.

<img src="/support/images/en/blog/new-remote.png" alt="Añadiendo un nuevo remoto compatible con S3 en RcloneView" class="img-large img-center" />

A diferencia de las herramientas que solo montan unidades, RcloneView también sincroniza y compara carpetas con la licencia FREE — los buckets de Petabox obtienen las mismas funciones de sincronización, comparación e historial de trabajos que cualquier otro proveedor compatible, sin necesidad de actualizar la licencia para empezar.

## Explorar, transferir y sincronizar buckets

Una vez añadido Petabox, divide tu explorador en dos paneles — uno mostrando carpetas locales u otra nube, el otro mostrando tu bucket de Petabox — y arrastra archivos entre ellos. Mover archivos dentro del mismo remoto realiza un movimiento; arrastrar entre remotos distintos realiza una copia, por lo que puedes preparar una copia de seguridad de Petabox sin tocar los archivos de origen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfiriendo archivos entre una carpeta local y un bucket de Petabox" class="img-large img-center" />

Para transferencias recurrentes, utiliza el asistente de sincronización de 4 pasos: elige el origen y el destino, configura el número de transferencias simultáneas y de verificadores de igualdad en Advanced Settings, y luego aplica filtros por tipo de archivo, tamaño o antigüedad antes de guardar el trabajo. Ejecuta primero un Dry Run para previsualizar exactamente qué se copiará o eliminará antes de iniciar una transferencia real.

## Programar copias de seguridad y supervisar trabajos

Una vez guardado un trabajo de sincronización en Job Manager, los usuarios con licencia PLUS pueden asociar una programación con formato crontab para que las copias de seguridad de Petabox se ejecuten automáticamente según su propio ritmo, con una vista previa de las próximas horas de ejecución antes de guardar.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configurando una programación de copia de seguridad recurrente para un trabajo de sincronización de Petabox" class="img-large img-center" />

Cada ejecución — programada o manual — queda registrada en Job History con su estado, velocidad de transferencia, número de archivos y tamaño total, para que puedas confirmar que una copia de seguridad de Petabox se completó correctamente o detectar una ejecución fallida que deba reintentarse.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Genera un Access Key ID y una Secret Access Key desde tu cuenta de Petabox y anota la URL del endpoint.
3. Añade Petabox como nuevo remoto compatible con S3 en Remote Manager y prueba la conexión.
4. Ejecuta una sincronización Dry Run antes de programar copias de seguridad recurrentes en tu bucket de Petabox.

Con Petabox conectado, tu almacenamiento de objetos queda justo al lado de todas las demás nubes que gestionas — sin cliente independiente, sin cambiar de ventana.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento Storj — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-storj-cloud-sync-backup-rcloneview)
- [Gestiona el almacenamiento IDrive E2 — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [Gestiona el almacenamiento Wasabi — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
