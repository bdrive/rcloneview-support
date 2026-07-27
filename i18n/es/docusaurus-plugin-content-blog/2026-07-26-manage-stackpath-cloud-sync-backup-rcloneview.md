---
slug: manage-stackpath-cloud-sync-backup-rcloneview
title: "Gestiona el almacenamiento de objetos StackPath — Sincroniza y respalda archivos con RcloneView"
authors:
  - jay
description: "Conecta el almacenamiento de objetos StackPath a RcloneView para la gestión de archivos mediante arrastrar y soltar, copias de seguridad programadas y sincronización entre nubes."
keywords:
  - almacenamiento de objetos StackPath
  - StackPath S3
  - RcloneView StackPath
  - gestionar archivos de StackPath
  - copia de seguridad de StackPath
  - sincronización en la nube de StackPath
  - GUI de almacenamiento compatible con S3
  - almacenamiento de objetos en el edge
tags:
  - RcloneView
  - object-storage
  - s3-compatible
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el almacenamiento de objetos StackPath — Sincroniza y respalda archivos con RcloneView

> Explora, sincroniza y respalda el almacenamiento de objetos de StackPath compatible con S3 desde la misma ventana que usas para cualquier otra nube.

El almacenamiento de objetos de StackPath expone una API compatible con S3, lo que significa que funciona bien con herramientas basadas en rclone, pero rara vez viene con una GUI de escritorio dedicada. Los equipos terminan escribiendo scripts para las subidas o alternando entre sesiones de CLI separadas solo para comprobar qué hay en un bucket. RcloneView cierra esa brecha tratando StackPath como cualquier otro remoto — navegación completa de archivos, transferencias mediante arrastrar y soltar, y trabajos programados, sin escribir un solo comando.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar un bucket de StackPath

Dado que StackPath habla el protocolo S3, lo añades en RcloneView de la misma forma en que añadirías Amazon S3 o Wasabi: crea un nuevo remoto, selecciona la opción de proveedor compatible con S3 y proporciona tu Access Key, Secret Key y la URL de endpoint de StackPath para tu región. Una vez conectado, el bucket aparece como una pestaña normal en el panel Explorer — sin archivo de credenciales aparte, sin necesidad de terminal para verificar que la conexión funcionó.

Conecta S3, Azure o Backblaze B2 con acceso completo de lectura/escritura en la licencia FREE, de modo que combinar StackPath con otra cuenta compatible con S3 no requiere actualizar el plan para empezar a mover archivos.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a StackPath object storage remote in RcloneView" class="img-large img-center" />

## Explorar y gestionar archivos día a día

Una vez configurado el remoto, los buckets de StackPath se comportan exactamente igual que una carpeta local en el Explorer de RcloneView. Puedes ordenar por nombre, tipo, fecha de modificación o tamaño, cambiar a vista de miniaturas para buckets con muchas imágenes, y usar Get Size para comprobar cuánto espacio ocupa una carpeta de recursos antes de decidir si la archivas en otro lugar. La selección múltiple con Ctrl+clic o Mayús+clic funciona igual que en las unidades locales, así que las eliminaciones o descargas masivas toman segundos en lugar de requerir un script.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing StackPath bucket contents in RcloneView" class="img-large img-center" />

## Hacer copias de seguridad hacia y desde StackPath

Para copias de seguridad recurrentes, configura un trabajo de Sync con StackPath como origen o destino. El asistente de 4 pasos te permite configurar transferencias concurrentes, habilitar la verificación por checksum para que los archivos se comparen por hash en lugar de solo por marca de tiempo, y aplicar filtros para excluir tipos de archivo que no necesitas archivar. Ejecuta primero un Dry Run para previsualizar exactamente qué se copiará o eliminará antes de confirmar la transferencia — una salvaguarda útil cuando un bucket contiene recursos de producción.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a StackPath backup job in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Crea un nuevo remoto y elige el tipo de proveedor compatible con S3.
3. Introduce tu Access Key, Secret Key y endpoint de StackPath.
4. Configura un trabajo de Sync o Copy para mover archivos entre StackPath y tus otros remotos.

Una vez que StackPath está integrado en RcloneView, gestionar el almacenamiento de objetos deja de ser una tarea de scripting y pasa a formar parte de tu flujo de trabajo habitual con archivos.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de objetos Ceph — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-ceph-object-storage-s3-rcloneview)
- [Gestiona el almacenamiento de objetos Scaleway — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Soluciona el acceso denegado de S3 — Errores de permisos con RcloneView](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)

<CloudSupportGrid />
