---
slug: manage-magalu-cloud-sync-backup-rcloneview
title: "Gestiona el almacenamiento en la nube de Magalu — Sincroniza y respalda archivos con RcloneView"
authors:
  - robin
description: "Conecta el almacenamiento de objetos compatible con S3 de Magalu Cloud a RcloneView para navegación con arrastrar y soltar, copias de seguridad programadas y sincronización entre nubes."
keywords:
  - almacenamiento en la nube Magalu
  - Magalu S3
  - RcloneView Magalu
  - gestionar archivos de Magalu
  - copia de seguridad en la nube de Magalu
  - sincronización de Magalu
  - GUI de almacenamiento compatible con S3
  - almacenamiento en la nube brasileño
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

# Gestiona el almacenamiento en la nube de Magalu — Sincroniza y respalda archivos con RcloneView

> Navega, sincroniza y respalda el almacenamiento de objetos compatible con S3 de Magalu Cloud desde la misma ventana que usas para el resto de tus nubes.

Magalu Cloud es un servicio de almacenamiento de objetos compatible con S3 y, como la mayoría de los proveedores compatibles con S3, no incluye un gestor de archivos de escritorio dedicado — te obliga a programar llamadas `curl` o montar una CLI solo para mover archivos. RcloneView cierra esa brecha tratando un bucket de Magalu exactamente igual que cualquier otro remoto: navegación completa de archivos, transferencias por arrastrar y soltar, y trabajos de sincronización programados, sin necesidad de terminal.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar un bucket de Magalu

Como Magalu Cloud utiliza el protocolo S3, lo agregas en RcloneView de la misma manera que agregarías Amazon S3 o Backblaze B2: crea un nuevo remoto, elige la opción de proveedor compatible con S3, e introduce tu Access Key, Secret Key y la URL del endpoint de Magalu para la región de tu cuenta. Una vez guardado, el bucket aparece como una pestaña normal en el panel del Explorador, listo para navegar y transferir de inmediato.

<img src="/support/images/en/blog/new-remote.png" alt="Añadiendo un remoto compatible con S3 de Magalu Cloud en RcloneView" class="img-large img-center" />

Puedes conectar S3, Azure o Backblaze B2 con acceso completo de lectura/escritura en la licencia FREE, así que Magalu se une a tu lista de nubes existente sin ninguna barrera de pago.

## Explorar y organizar el almacenamiento de Magalu

Una vez conectado, un bucket de Magalu se comporta como cualquier carpeta local en el Explorador. Ordena por nombre, tipo, fecha de modificación o tamaño, cambia a la vista de miniaturas cuando un bucket está lleno de imágenes, y usa Obtener tamaño para comprobar cuánto espacio ocupa una carpeta antes de decidir si la archivas en otro lugar. La selección múltiple con Ctrl+clic o Mayús+clic gestiona descargas y eliminaciones masivas sin necesidad de un bucle programado.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Explorando el contenido de un bucket de Magalu Cloud en RcloneView" class="img-large img-center" />

## Respaldar hacia y desde Magalu

Para copias de seguridad recurrentes, configura un trabajo de sincronización con Magalu como origen o destino. El asistente de 4 pasos cubre el número de transferencias simultáneas, la verificación por suma de comprobación para que los archivos se comparen por hash y tamaño en lugar de solo por marca de tiempo, y reglas de filtrado para excluir los tipos de archivo que no quieras archivar. Ejecuta primero una prueba en seco (Dry Run) para previsualizar exactamente qué se copiará o eliminará — vale la pena hacerlo antes de apuntar un trabajo de sincronización a un bucket con datos de producción.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Programando un trabajo de copia de seguridad de Magalu Cloud en RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Crea un nuevo remoto y elige el tipo de proveedor compatible con S3.
3. Introduce tu Access Key, Secret Key y URL del endpoint de Magalu.
4. Configura un trabajo de sincronización o copia para mover archivos entre Magalu y tus otros remotos en la nube.

Una vez que Magalu está integrado en RcloneView, gestionar tu almacenamiento de objetos deja de ser una tarea de scripting y pasa a formar parte de tu flujo de trabajo habitual con archivos.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de objetos de Scaleway — Sincronización y copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Gestiona el almacenamiento de objetos de IONOS — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-ionos-object-storage-cloud-sync-rcloneview)
- [Gestiona el almacenamiento de objetos de Leviia — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-leviia-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
