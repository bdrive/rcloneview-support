---
slug: manage-leviia-cloud-sync-backup-rcloneview
title: "Gestionar el almacenamiento de objetos de Leviia — Sincronice y respalde archivos con RcloneView"
authors:
  - casey
description: "Conecte el almacenamiento de objetos compatible con S3 de Leviia a RcloneView para gestionar archivos con arrastrar y soltar, copias de seguridad programadas y sincronización entre nubes."
keywords:
  - almacenamiento de objetos Leviia
  - Leviia S3
  - RcloneView Leviia
  - gestionar archivos de Leviia
  - copia de seguridad en la nube de Leviia
  - sincronización de Leviia
  - GUI de almacenamiento compatible con S3
  - almacenamiento de objetos europeo
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestionar el almacenamiento de objetos de Leviia — Sincronice y respalde archivos con RcloneView

> Explore, sincronice y respalde el almacenamiento de objetos compatible con S3 de Leviia desde la misma ventana que usa para cualquier otra nube.

Leviia ofrece almacenamiento de objetos compatible con S3 alojado en Europa, lo que lo convierte en una opción habitual para equipos que buscan garantías de residencia de datos sin renunciar a las herramientas que ya funcionan con S3. El inconveniente es que los proveedores compatibles con S3 rara vez ofrecen un cliente de escritorio propio y pulido, dejando a los usuarios con la opción de programar scripts para las subidas o lidiar con una CLI básica. RcloneView elimina esa fricción al tratar Leviia como cualquier otro remoto: navegación completa de archivos, transferencias de arrastrar y soltar, y trabajos de sincronización programados, sin necesidad de comandos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar un bucket de Leviia

Como Leviia habla el protocolo S3, se añade a RcloneView de la misma manera que Amazon S3 o Wasabi: cree un nuevo remoto, seleccione la opción de proveedor compatible con S3 e introduzca su Access Key, Secret Key y la URL del endpoint de Leviia correspondiente a la región de su cuenta. Una vez guardado, el bucket aparece como una pestaña normal en el panel Explorer, listo para explorarse y transferir de inmediato.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Leviia object storage remote in RcloneView" class="img-large img-center" />

RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux, de modo que un bucket de Leviia queda junto a cualquier otra cuenta en la nube que gestione, sin cambiar de herramienta.

## Explorar y organizar el almacenamiento de Leviia

Una vez conectado, un bucket de Leviia se comporta exactamente como una carpeta local en el Explorer. Ordene por nombre, tipo, fecha de modificación o tamaño, cambie a la vista de miniaturas para un bucket lleno de imágenes, y use Get Size para comprobar cuánto espacio ocupa una carpeta determinada antes de decidir si archivarla en otro lugar. La selección múltiple con Ctrl+Clic o Mayús+Clic cubre descargas y eliminaciones masivas sin necesidad de un bucle programado.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browsing Leviia bucket contents in RcloneView" class="img-large img-center" />

## Hacer copias de seguridad hacia y desde Leviia

Para copias de seguridad recurrentes, configure un trabajo de sincronización con Leviia como origen o destino. El asistente de 4 pasos cubre el número de transferencias simultáneas, la verificación por suma de comprobación para comparar archivos por hash y tamaño en lugar de solo por marca de tiempo, y reglas de filtrado para excluir los tipos de archivo que no desee archivar. Vale la pena ejecutar primero un Dry Run para previsualizar exactamente qué se copiará o eliminará antes de dirigir un trabajo de sincronización a un bucket con datos de producción.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Leviia backup job in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Cree un nuevo remoto y elija el tipo de proveedor compatible con S3.
3. Introduzca su Access Key, Secret Key y la URL del endpoint de Leviia.
4. Configure un trabajo de Sync o Copy para mover archivos entre Leviia y sus otros remotos en la nube.

Una vez que Leviia está integrado en RcloneView, gestionar su almacenamiento de objetos deja de ser una tarea de scripting y pasa a formar parte de su flujo de trabajo habitual con archivos.

---

**Guías relacionadas:**

- [Gestionar el almacenamiento de objetos de Ceph con RcloneView — GUI compatible con S3 para su clúster de Ceph](https://rcloneview.com/support/blog/manage-ceph-object-storage-s3-rcloneview)
- [Gestionar el almacenamiento de objetos de Scaleway — Sincronización y copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Gestionar el almacenamiento de objetos de IONOS — Sincronice y respalde archivos con RcloneView](https://rcloneview.com/support/blog/manage-ionos-object-storage-cloud-sync-rcloneview)

<CloudSupportGrid />
