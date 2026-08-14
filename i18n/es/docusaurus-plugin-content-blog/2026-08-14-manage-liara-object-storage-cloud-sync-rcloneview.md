---
slug: manage-liara-object-storage-cloud-sync-rcloneview
title: "Gestionar el almacenamiento de objetos Liara — Sincroniza y respalda archivos con RcloneView"
authors:
  - robin
description: "Conecta el almacenamiento de objetos Liara, compatible con S3, a RcloneView para navegar, sincronizar, respaldar y montar de forma multiplataforma desde una sola interfaz."
keywords:
  - Liara RcloneView
  - almacenamiento de objetos Liara
  - almacenamiento de objetos compatible con S3
  - copia de seguridad de Liara
  - sincronización de Liara
  - montar almacenamiento Liara
  - interfaz de almacenamiento de objetos
  - gestión de archivos Liara
  - gestor de almacenamiento en la nube
  - sincronización de buckets Liara
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

# Gestionar el almacenamiento de objetos Liara — Sincroniza y respalda archivos con RcloneView

> Lleva tus buckets de Liara a la misma ventana del explorador donde ya gestionas el resto de tus nubes.

Liara es un servicio de almacenamiento de objetos compatible con S3, y RcloneView se conecta a él de la misma forma que a Amazon S3, Wasabi o cualquier otro proveedor con protocolo S3 — mediante una Access Key, una Secret Key y un endpoint. Una vez añadido el remoto, los buckets de Liara aparecen como una pestaña normal en el explorador de archivos, listos para explorar, transferir y programar junto a discos locales y otras cuentas en la nube.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Liara como nuevo remoto

Abre Remote Manager desde la pestaña Remote y haz clic en New Remote. Como Liara se accede mediante el protocolo S3 de rclone, selecciona la opción compatible con S3 e introduce la Access Key, la Secret Key y la URL del endpoint desde tu consola de Liara. No hay que completar ningún paso de OAuth en el navegador — en cuanto la conexión de prueba se realiza correctamente, el bucket aparece en tu barra de pestañas como cualquier otro remoto.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir un nuevo remoto compatible con S3 en RcloneView" class="img-large img-center" />

RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux — Liara no necesita un cliente aparte ni un flujo de trabajo distinto al del resto de tus cuentas en la nube.

## Explorar, transferir y sincronizar buckets

Divide tu explorador en dos paneles — uno mostrando archivos locales u otra nube, el otro tu bucket de Liara — y arrastra archivos entre ellos. Mover dentro del mismo remoto realiza un move, mientras que arrastrar entre remotos distintos realiza un copy, de modo que puedes preparar copias de seguridad en Liara sin alterar la carpeta de origen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de archivos entre una carpeta local y un bucket de Liara" class="img-large img-center" />

Para trabajos recurrentes, utiliza el asistente de sincronización de 4 pasos: elige origen y destino, ajusta el número de transferencias simultáneas y de comprobadores de igualdad en Advanced Settings, y aplica filtros por tipo de archivo, tamaño o antigüedad antes de guardar. Ejecuta primero un Dry Run para previsualizar exactamente qué se copiará o eliminará antes de lanzar una sincronización real.

## Programar copias de seguridad y monitorizar trabajos

Una vez guardado un trabajo de sincronización en Job Manager, los usuarios con licencia PLUS pueden asociar una programación en formato crontab para que las copias de seguridad de Liara se ejecuten automáticamente con una cadencia fija, con una vista previa de las próximas ejecuciones antes de guardar.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configurar una programación de copia de seguridad recurrente para un trabajo de sincronización de Liara" class="img-large img-center" />

Cada ejecución — manual o programada — queda registrada en Job History con estado, velocidad de transferencia, número de archivos y tamaño total, para que puedas confirmar que una copia de seguridad de Liara se completó correctamente o detectar una ejecución fallida que haya que reintentar.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Genera una Access Key y una Secret Key desde tu consola de Liara y anota la URL del endpoint.
3. Añade Liara como nuevo remoto compatible con S3 en Remote Manager y prueba la conexión.
4. Ejecuta una sincronización de prueba (Dry Run) antes de programar copias de seguridad recurrentes en tu bucket de Liara.

Con Liara conectado, tu almacenamiento de objetos queda junto a cualquier otra nube que gestiones — un solo explorador, un solo conjunto de trabajos de sincronización, sin cliente aparte que mantener.

---

**Guías relacionadas:**

- [Gestionar el almacenamiento Petabox — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-petabox-cloud-sync-backup-rcloneview)
- [Gestionar el almacenamiento de objetos Scaleway — Sincronización y copia de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Gestionar el almacenamiento Wasabi — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
