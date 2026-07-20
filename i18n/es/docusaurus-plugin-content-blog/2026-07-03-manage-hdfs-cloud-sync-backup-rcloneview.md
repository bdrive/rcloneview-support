---
slug: manage-hdfs-cloud-sync-backup-rcloneview
title: "Gestiona el almacenamiento HDFS — Sincroniza y respalda archivos con RcloneView"
authors:
  - kai
description: "Conecta clústeres de Hadoop Distributed File System (HDFS) a RcloneView para explorar, sincronizar y respaldar almacenamiento de big data en más de 90 proveedores en la nube."
keywords:
  - hdfs rcloneview
  - gestionar almacenamiento hdfs en la nube
  - interfaz gráfica de hadoop distributed file system
  - migración de hdfs a la nube
  - copia de seguridad de hdfs en la nube
  - sincronizar hdfs con almacenamiento en la nube
  - hdfs rclone gui
  - sincronización híbrida de data lake en la nube
  - copia de seguridad en la nube de hadoop on-prem
tags:
  - RcloneView
  - self-hosted
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el almacenamiento HDFS — Sincroniza y respalda archivos con RcloneView

> Los clústeres de Hadoop almacenan años de datos procesados, pero mover esos datos entre el almacenamiento on-prem y la nube suele implicar recurrir a scripts y herramientas de línea de comandos — RcloneView le da a HDFS un hogar visual en su lugar.

Hadoop Distributed File System (HDFS) es la capa de almacenamiento detrás de innumerables pipelines de big data on-premise, pero no viene con una forma amigable de inspeccionar, transferir o archivar esos datos fuera del ecosistema Hadoop. RcloneView se conecta a HDFS como un remoto basado en protocolo, junto con SFTP, FTP y WebDAV, de modo que un ingeniero de datos puede explorar el contenido del clúster en un explorador de archivos familiar y mover conjuntos de datos hacia y desde el almacenamiento en la nube sin escribir un job de distcp ni un script personalizado. Funciona igual en Windows, macOS y Linux, algo que importa cuando tu equipo de datos no trabaja todo en el mismo sistema operativo.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Agregar un clúster HDFS como remoto

HDFS forma parte de la categoría de almacenamiento basada en protocolo de RcloneView, configurada a través del mismo asistente de Nuevo Remoto que se usa para las conexiones SFTP y WebDAV. Una vez agregado el clúster, aparece como su propia pestaña en el panel del Explorador, con el árbol de carpetas estándar, la lista de archivos y la vista de miniaturas disponibles para explorar los conjuntos de datos almacenados en los namenodes del clúster. Las operaciones del menú contextual —copiar, descargar, renombrar, Obtener tamaño— funcionan exactamente igual que en cualquier otro remoto, lo que significa que los ingenieros que no se sienten cómodos con los comandos `hadoop fs` igualmente pueden auditar lo que realmente está en HDFS.

<img src="/support/images/en/blog/new-remote.png" alt="Adding an HDFS remote in RcloneView's New Remote wizard" class="img-large img-center" />

RcloneView monta Y sincroniza más de 90 proveedores desde una sola ventana, así que la misma sesión que explora HDFS puede tener un Google Drive, un bucket de S3 o un disco local abierto en un panel adyacente para comparación directa.

## Conectar el almacenamiento on-prem con el almacenamiento de objetos en la nube

El motivo más común para conectar HDFS a RcloneView es mover datos fríos o procesados fuera de un clúster costoso y con capacidad limitada, hacia un almacenamiento en la nube más económico para retención a largo plazo. Un trabajo de sincronización en un solo sentido con la dirección "Modificar solo el destino" copia la salida de HDFS —conjuntos de datos procesados, artefactos de entrenamiento de modelos, archivos de logs— a un bucket de S3, Azure Blob o Backblaze B2 sin tocar el origen. Las opciones de filtrado en el Paso 3 del asistente de sincronización te permiten limitar el trabajo a tipos de archivo específicos o excluir los archivos intermedios `_SUCCESS` y temporales que dejan los jobs de Hadoop, de modo que el bucket de destino solo contenga lo que realmente vale la pena conservar.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing HDFS cluster data to cloud object storage in RcloneView" class="img-large img-center" />

Para conjuntos de datos grandes, ajustar el número de transferencias de archivos y el número de transferencias multihilo en Configuración avanzada ayuda a saturar el ancho de banda disponible entre el clúster y el destino, mientras que mantener moderado el número de verificadores de igualdad evita generar una carga de lectura innecesaria en el namenode durante la fase de comparación.

## Programar trabajos de archivado recurrentes

Los pipelines de datos rara vez se ejecutan una sola vez. Los usuarios con licencia PLUS pueden adjuntar una programación tipo crontab a un trabajo de sincronización de HDFS para que la salida recién generada se replique automáticamente al almacenamiento en la nube después de cada ejecución por lotes, en lugar de depender de que alguien recuerde iniciar una transferencia manual. El Historial de trabajos registra entonces cada ejecución —estado, tamaño transferido, duración— brindando al equipo un rastro de auditoría que muestra exactamente cuándo salió cada conjunto de datos del clúster y dónde terminó.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring HDFS to cloud storage sync job in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega tu clúster HDFS como un nuevo remoto usando la opción de almacenamiento basada en protocolo.
3. Explora el clúster en el panel del Explorador para confirmar que los conjuntos de datos y los permisos se ven correctos.
4. Configura un trabajo de sincronización en un solo sentido hacia tu destino de archivado en la nube, con filtros para excluir archivos temporales.

Llevar HDFS a la misma ventana que tus remotos en la nube convierte un proceso de exportación con scripts y propenso a errores en un trabajo repetible que puedes monitorear y programar.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento MinIO — Sincronización en la nube autoalojada en RcloneView](https://rcloneview.com/support/blog/manage-minio-self-hosted-cloud-sync-rcloneview)
- [Almacenamiento en la nube para científicos de datos — Optimiza conjuntos de datos con RcloneView](https://rcloneview.com/support/blog/cloud-storage-data-scientists-rcloneview)
- [Pipeline de conjuntos de datos para entrenamiento de IA — Crea y sincroniza con RcloneView](https://rcloneview.com/support/blog/ai-training-dataset-pipeline-rcloneview)

<CloudSupportGrid />
