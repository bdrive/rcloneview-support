---
slug: migrate-box-to-proton-drive-rcloneview
title: "Migra de Box a Proton Drive — Transfiere archivos con RcloneView"
authors:
  - casey
description: "Mueve archivos de Box a Proton Drive con RcloneView. Conecta ambas nubes, previsualiza con Dry Run, copia carpetas y verifica la migración con Folder Compare."
keywords:
  - migrar box a proton drive
  - transferencia de box a proton drive
  - mover archivos de box a proton drive
  - herramienta de migración de box
  - migración a proton drive
  - migración de nube a nube
  - migración de almacenamiento en la nube cifrado
  - RcloneView box
  - RcloneView proton drive
tags:
  - RcloneView
  - box
  - proton-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra de Box a Proton Drive — Transfiere archivos con RcloneView

> Mueve tus carpetas de Box al almacenamiento cifrado de extremo a extremo de Proton Drive sin descargar primero todo a tu portátil.

Los equipos y freelancers suelen empezar en Box por sus funciones de colaboración y luego trasladan los archivos confidenciales a Proton Drive por su enfoque en la privacidad. Hacerlo a mano implica descargar gigabytes de Box y volver a subirlos con un navegador. RcloneView conecta ambos servicios en una sola ventana para que puedas copiar carpetas directamente, comprobar el resultado y conservar un trabajo repetible para todo lo que se añada después.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta Box y Proton Drive

Abre **Remote tab > New Remote** y añade primero Box. Box usa OAuth, así que se abre una ventana del navegador para que inicies sesión y apruebes el acceso, sin claves de API que copiar. Si tu organización usa Box for Business, establece `box_sub_type = enterprise` en la configuración del remoto para que RcloneView vea tus carpetas empresariales.

A continuación, añade Proton Drive con tu correo y contraseña de Proton, además de un código 2FA si tu cuenta lo tiene activado. La compatibilidad con Proton Drive requiere rclone v1.69 o posterior; el rclone integrado que incluye RcloneView cumple ese requisito, y la barra inferior muestra la versión en uso.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir remotos de Box y Proton Drive en RcloneView" class="img-large img-center" />

## Planifica la transferencia

Abre Box en el panel izquierdo del Explorer y Proton Drive en el derecho. Usa **Get Size** en tus carpetas de nivel superior de Box para ver cuántos datos vas a mover, y crea en Proton Drive una estructura de carpetas de destino que refleje la que quieres conservar.

Box Notes y otros documentos nativos de Box no son archivos normales. En **Filtering Settings** del asistente de sincronización, el filtro predefinido **Box Docs** te ayuda a tratarlos de forma deliberada en lugar de descubrirlos a mitad de la transferencia. Exporta desde Box todo lo que necesites de esos formatos antes de la migración.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box y Proton Drive lado a lado para una transferencia de nube a nube en RcloneView" class="img-large img-center" />

## Ejecuta la migración

Para unas pocas carpetas, arrástralas del panel de Box al de Proton Drive: arrastrar entre remotos distintos copia los datos. Para una migración completa, crea un trabajo de **Sync** con Box como origen y Proton Drive como destino. Proton Drive cifra los archivos en el cliente, así que una concurrencia moderada es un buen punto de partida; puedes reducir el número de transferencias de archivos en Advanced Settings si ves errores.

Haz clic siempre primero en **Dry Run**. Muestra lo que se copiará y lo que se eliminaría, lo que protege el contenido existente de Proton Drive frente a una réplica accidental. Después ejecuta el trabajo y sigue el progreso, la velocidad y el número de archivos en la pestaña **Transferring**.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Supervisión de la transferencia de Box a Proton Drive en la pestaña Transferring de RcloneView" class="img-large img-center" />

## Verifica antes de cancelar Box

Cuando termine el trabajo, abre **Compare** con la carpeta de Box en un lado y la de Proton Drive en el otro. Los archivos que solo están a la izquierda muestran lo que no llegó al otro lado; usa Copy right para cubrir los huecos. Job History registra cada ejecución con su estado, tamaño y número de archivos para tus registros.

RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux, así que la misma configuración te sirve para tu próxima mudanza.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History confirmando una migración completada de Box a Proton Drive" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade Box mediante inicio de sesión en el navegador y Proton Drive con tu correo, contraseña y 2FA opcional.
3. Crea un trabajo de Sync de Box a Proton Drive y previsualízalo con Dry Run.
4. Ejecuta el trabajo y confirma el resultado con Folder Compare antes de cerrar tu cuenta de Box.

Una migración cuidadosa y verificada te permite pasar a un almacenamiento cifrado con la confianza de que no se quedó nada atrás.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de Box — Sincroniza y haz copias de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Gestiona Proton Drive — Sincronización en la nube con RcloneView](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Migra de Dropbox a Proton Drive con RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-proton-drive-rcloneview)

<CloudSupportGrid />
