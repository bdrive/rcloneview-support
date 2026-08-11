---
slug: manage-arvan-cloud-storage-sync-backup-rcloneview
title: "Gestionar el almacenamiento de Arvan Cloud — Sincroniza y respalda archivos con RcloneView"
authors:
  - jay
description: "Conecta el almacenamiento de objetos de Arvan Cloud a RcloneView para explorar archivos, sincronizar, respaldar y transferir entre nubes de forma compatible con S3."
keywords:
  - Arvan Cloud
  - Arvan Cloud RcloneView
  - almacenamiento compatible con S3
  - GUI de almacenamiento de objetos
  - sincronización de Arvan Cloud
  - copia de seguridad de Arvan Cloud
  - gestor de almacenamiento en la nube
  - transferencia de archivos de Arvan Cloud
  - GUI multi-nube
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

# Gestionar el almacenamiento de Arvan Cloud — Sincroniza y respalda archivos con RcloneView

> Explora, sincroniza y respalda buckets de almacenamiento de objetos de Arvan Cloud junto con el resto de remotos que gestionas, todo desde una sola ventana de escritorio.

El almacenamiento de objetos de Arvan Cloud utiliza el protocolo S3, lo que significa que encaja directamente en cualquier herramienta construida en torno a credenciales de Access Key + Secret Key + Endpoint, incluyendo RcloneView. En lugar de mantener un cliente S3 aparte solo para este proveedor regional, puedes añadirlo como remoto y tratarlo exactamente igual que Amazon S3, Wasabi o cualquier otro almacenamiento basado en buckets dentro de tu flujo de trabajo habitual.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Arvan Cloud como remoto compatible con S3

Arvan Cloud se accede a través del backend S3 de rclone, por lo que la configuración sigue el mismo patrón de introducción de credenciales que cualquier otro servicio compatible con S3 admitido por RcloneView: Access Key, Secret Key y un endpoint personalizado que apunta al servicio de almacenamiento de objetos de Arvan. Aquí no hay flujo OAuth por navegador — generas el par de claves desde tu consola de Arvan Cloud y lo pegas directamente en el asistente de nuevo remoto.

Una vez añadido el remoto, se comporta como cualquier otro panel del explorador: navegación por árbol de carpetas, vistas previas en miniatura para buckets con muchas imágenes, y las mismas operaciones de archivo con clic derecho (copiar, mover, renombrar, obtener tamaño) que usarías en un disco local. RcloneView monta Y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux, de modo que Arvan Cloud queda junto a tus demás nubes en lugar de vivir en una aplicación aislada.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir Arvan Cloud como nuevo remoto compatible con S3 en RcloneView" class="img-large img-center" />

Para los equipos que ya trabajan de forma estandarizada con herramientas S3, esto significa que las políticas de buckets, los prefijos y las estructuras de carpetas se trasladan directamente — nada del modelo de almacenamiento de objetos cambia solo porque cambie el proveedor.

## Sincronizar y respaldar buckets de Arvan Cloud

Con el remoto conectado, usa el asistente de sincronización para configurar un trabajo unidireccional que refleje una carpeta local — u otro remoto en la nube — en un bucket de Arvan Cloud. Configura el número de transferencias simultáneas y de verificadores de igualdad en el paso de Configuración avanzada, y usa filtros para excluir tipos de archivo o carpetas que no quieras contabilizar en el volumen de transferencia, como imágenes `.iso` o directorios `.git` anidados.

Dry Run te permite previsualizar exactamente qué archivos se copiarán o eliminarán antes de confirmar el trabajo, algo especialmente importante en tu primera sincronización contra un bucket existente cuando no estás seguro de lo que ya hay allí.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configurando un trabajo de sincronización hacia un bucket de almacenamiento de Arvan Cloud" class="img-large img-center" />

## Programar copias de seguridad recurrentes

Una vez validado un trabajo de sincronización, guárdalo en el Job Manager y, con una licencia PLUS, añade una programación estilo crontab para que las copias de seguridad hacia Arvan Cloud se ejecuten automáticamente sin necesidad de iniciarlas manualmente. El historial de trabajos (Job History) registra entonces la duración, la velocidad de transferencia, el número de archivos y el estado de finalización de cada ejecución, ofreciéndote un registro que consultar para verificar que las copias programadas realmente se completaron.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Programando un trabajo de copia de seguridad recurrente hacia el almacenamiento de Arvan Cloud" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Genera una Access Key y una Secret Key desde la consola de almacenamiento de objetos de Arvan Cloud.
3. En RcloneView, crea un nuevo remoto compatible con S3 usando esas credenciales y el endpoint de Arvan Cloud.
4. Ejecuta primero un Dry Run y luego guarda un trabajo de sincronización programado para copias de seguridad continuas.

Tratar Arvan Cloud como un endpoint S3 más significa una herramienta especializada menos que mantener en tu conjunto de herramientas de almacenamiento en la nube.

---

**Guías relacionadas:**

- [Gestionar el almacenamiento de Wasabi — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Gestionar el almacenamiento de Selectel — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-selectel-cloud-sync-backup-rcloneview)
- [Solucionar S3 Access Denied — Errores de permisos con RcloneView](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)

<CloudSupportGrid />
