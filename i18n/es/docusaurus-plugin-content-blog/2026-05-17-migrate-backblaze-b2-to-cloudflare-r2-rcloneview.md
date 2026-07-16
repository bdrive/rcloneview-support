---
slug: migrate-backblaze-b2-to-cloudflare-r2-rcloneview
title: "Migra Backblaze B2 a Cloudflare R2 — Transfiere archivos con RcloneView"
authors:
  - alex
description: "Migra tu almacenamiento de objetos de Backblaze B2 a Cloudflare R2 con RcloneView. Guía paso a paso con interfaz gráfica, verificación de checksum y sin necesidad de comandos CLI."
keywords:
  - Backblaze B2 to Cloudflare R2 migration
  - migrate B2 to R2
  - Cloudflare R2 migration guide
  - RcloneView cloud migration
  - B2 to R2 transfer
  - object storage migration
  - Backblaze to Cloudflare
  - cloud storage migration tool
  - S3 compatible migration
  - transfer B2 bucket rcloneview
tags:
  - RcloneView
  - backblaze-b2
  - cloudflare-r2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra Backblaze B2 a Cloudflare R2 — Transfiere archivos con RcloneView

> Mover un bucket de B2 a Cloudflare R2 es una operación directa de nube a nube en RcloneView — agrega ambos remotos, configura un trabajo de copia y verifica la integridad con comparación de checksum.

Backblaze B2 y Cloudflare R2 son plataformas de almacenamiento de objetos compatibles con S3 muy populares, y muchos equipos necesitan mover datos entre ellas a medida que evolucionan los requisitos de infraestructura. En lugar de descargar los datos localmente y volver a subirlos, RcloneView realiza la transferencia del lado del servidor mediante el motor de nube a nube de rclone — permitiéndote migrar buckets completos a través de una interfaz gráfica sin escribir un solo comando.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Agregar Backblaze B2 y Cloudflare R2 como remotos

Antes de ejecutar la migración, conecta ambas cuentas de almacenamiento en RcloneView.

**Backblaze B2:** Abre **Remote** > **New Remote**, selecciona Backblaze B2 e introduce tu Application Key ID y Application Key. RcloneView listará tus buckets de B2 en el explorador una vez guardado.

**Cloudflare R2:** Agrega un segundo remoto, elige Cloudflare R2 y proporciona tu API Token, Account ID y el endpoint de R2. Al igual que con B2, tus buckets de R2 aparecerán inmediatamente en el explorador.

Con ambos remotos conectados, puedes explorarlos lado a lado en la interfaz de doble panel de RcloneView y confirmar que el bucket de origen y el bucket de destino son correctos antes de iniciar la migración.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 and Cloudflare R2 remotes in RcloneView" class="img-large img-center" />

## Ejecutar la migración de nube a nube

Abre **Job Manager** y crea un nuevo trabajo de Copy o Sync. Establece tu bucket de Backblaze B2 (o un prefijo específico dentro de él) como origen y el bucket de Cloudflare R2 como destino.

En el paso de Advanced Settings, configura el número de transferencias de archivos simultáneas según la capacidad de tu red — valores más altos aceleran los buckets con muchos archivos pequeños, mientras que los archivos multimedia grandes se benefician de transferencias multihilo. Activa la **verificación de checksum** para asegurar que B2 y R2 coincidan en la integridad de los archivos mediante comparación de hash en lugar de depender únicamente del tamaño y la fecha de modificación.

Ejecuta una **Dry Run** antes de la transferencia real. La vista previa muestra cada objeto que se copiará, lo que te permite detectar cualquier coincidencia de filtro inesperada o discrepancia de ruta antes de confirmar.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Backblaze B2 to Cloudflare R2 in RcloneView" class="img-large img-center" />

## Monitoreo de la transferencia en tiempo real

Una vez que el trabajo se inicia, la pestaña **Transferring** en la Info View inferior muestra el progreso en vivo: velocidad de transferencia por archivo, rendimiento general y el conteo de objetos completados frente a los restantes. Para buckets de B2 grandes — un archivo de video con decenas de miles de archivos, por ejemplo — la vista en tiempo real te permite identificar cualquier estancamiento a tiempo y cancelar o ajustar si es necesario.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring during B2 to R2 migration in RcloneView" class="img-large img-center" />

Después de que finalice la transferencia, revisa la pestaña **Job History** para ver un resumen completo: tamaño total movido, velocidad de transferencia, número de archivos y estado final. Una ejecución verificada por checksum que muestre cero errores significa que tu bucket de R2 es una copia exacta, byte por byte, de los datos originales de B2.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history confirming successful Backblaze B2 to Cloudflare R2 migration" class="img-large img-center" />

Con una **licencia PLUS**, puedes programar trabajos de sincronización incremental para mantener R2 actualizado a medida que se agregan nuevos objetos a B2 durante una transición escalonada — ejecutando la migración en etapas en lugar de un único lote grande.

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega tu cuenta de Backblaze B2 mediante **Remote** > **New Remote** (Application Key ID + Application Key).
3. Agrega tu cuenta de Cloudflare R2 (API Token + Account ID + Endpoint).
4. Abre **Job Manager**, crea un trabajo de Copy de B2 a R2 y activa la verificación de checksum.
5. Ejecuta primero una Dry Run, luego ejecuta la migración real y revisa los resultados en Job History.

RcloneView elimina la necesidad de conocimientos de CLI o almacenamiento local intermedio — tus datos de B2 se mueven directamente a R2 con verificación de integridad completa incorporada.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento en la nube de Backblaze B2 — Sincronización y copia de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Gestiona el almacenamiento en la nube de Cloudflare R2 — Sincronización con RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Migra Cloudflare R2 a Backblaze B2 con RcloneView](https://rcloneview.com/support/blog/migrate-cloudflare-r2-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
