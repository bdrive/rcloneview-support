---
slug: migrate-koofr-to-jottacloud-rcloneview
title: "Migrar de Koofr a Jottacloud — Transferir archivos con RcloneView"
authors:
  - alex
description: "Mueve archivos de Koofr a Jottacloud con RcloneView — transferencia verificada de nube a nube entre dos proveedores de almacenamiento europeos centrados en la privacidad."
keywords:
  - migrar de Koofr a Jottacloud
  - transferencia de Koofr a Jottacloud
  - RcloneView Koofr
  - RcloneView Jottacloud
  - migración a la nube europea
  - transferencia de nube a nube
  - sincronización Koofr Jottacloud
  - mover archivos entre nubes
tags:
  - RcloneView
  - koofr
  - jottacloud
  - cloud-to-cloud
  - migration
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de Koofr a Jottacloud — Transferir archivos con RcloneView

> Mueve tus archivos de Koofr a Jottacloud directamente, de nube a nube, sin pasar antes por una carpeta de descargas local.

Koofr y Jottacloud son ambos proveedores de almacenamiento con sede en Europa muy populares entre usuarios que priorizan la residencia de datos y la privacidad, y es habitual consolidarlo todo en uno de ellos tras comparar planes o límites de cuenta. Hacer esa migración descargando todo a un portátil y volviendo a subirlo desperdicia ancho de banda y tiempo, y arriesga transferencias parciales si la conexión se corta a mitad de camino. RcloneView se conecta a ambos remotos a la vez y copia los archivos directamente entre ellos, de modo que la transferencia solo utiliza tu máquina local como paso intermedio, no como punto de almacenamiento.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar ambos remotos

Añade Koofr como remoto desde la pestaña Remoto > Nuevo remoto y repite el proceso para Jottacloud. Ambos se conectan mediante su propio flujo de autenticación de cuenta en lugar de una pantalla de inicio de sesión compartida, así que ten a mano los datos de cuenta de cada proveedor antes de empezar. RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux, lo que significa que esta misma configuración funciona igual sin importar desde qué plataforma estés migrando.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Koofr remote in RcloneView" class="img-large img-center" />

Una vez que ambos remotos aparezcan en el Administrador de remotos, abre dos paneles del Explorador uno junto al otro — uno mostrando Koofr y el otro Jottacloud — para poder ver ambos árboles de archivos a la vez antes de mover nada.

## Ejecutar la transferencia

Para una migración puntual, arrastra y suelta las carpetas que quieras mover desde el panel de Koofr directamente sobre el panel de Jottacloud. Como se trata de una transferencia entre dos remotos distintos, RcloneView trata el soltar como una copia de forma predeterminada, dejando los originales de Koofr intactos hasta que confirmes que todo llegó correctamente a Jottacloud.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Dragging files from Koofr to Jottacloud in RcloneView" class="img-large img-center" />

Para una biblioteca más grande, el asistente de sincronización de 4 pasos es la mejor herramienta: configura Koofr como origen y Jottacloud como destino, ejecuta primero una simulación (Dry Run) para previsualizar exactamente lo que se copiará, y luego ejecuta la sincronización real. La simulación está disponible en todos los niveles de licencia, así que no hay razón para saltarse la vista previa antes de confirmar una migración grande.

## Verificar que el traslado se completó

Después de que termine la transferencia, usa Comparación de carpetas para revisar ambos lados archivo por archivo — señala cualquier cosa que exista solo en un remoto o que se haya transferido con un tamaño diferente, lo que detecta subidas parciales antes de que borres nada de Koofr.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing a completed Koofr to Jottacloud transfer in RcloneView" class="img-large img-center" />

El Historial de trabajos también mantiene un registro permanente de la ejecución — número de archivos, tamaño total y duración —, algo que vale la pena capturar en pantalla o exportar si más adelante necesitas confirmar la migración para cancelar una cuenta.

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade tanto Koofr como Jottacloud como remotos a través de la pestaña Remoto > Nuevo remoto.
3. Usa arrastrar y soltar para un traslado rápido, o crea un trabajo de sincronización con simulación previa para una migración completa de biblioteca.
4. Ejecuta Comparación de carpetas después para confirmar que todos los archivos llegaron antes de eliminar nada de Koofr.

Con ambos proveedores conectados en la misma ventana, consolidar el almacenamiento en la nube europeo se convierte en una tarea de una sola sesión en lugar de un proyecto de varios días de descarga y nueva subida.

---

**Guías relacionadas:**

- [Sincronizar Koofr con Proton Drive — Copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/sync-koofr-to-proton-drive-rcloneview)
- [Migrar de Jottacloud a OneDrive — Transferir archivos con RcloneView](https://rcloneview.com/support/blog/migrate-jottacloud-to-onedrive-rcloneview)
- [Koofr frente a Jottacloud — Comparación de almacenamiento en la nube europeo con RcloneView](https://rcloneview.com/support/blog/koofr-vs-jottacloud-european-cloud-storage-rcloneview)

<CloudSupportGrid />
