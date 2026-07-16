---
slug: fix-backblaze-b2-cap-exceeded-errors-rcloneview
title: "Solucionar errores de límite excedido en Backblaze B2 — Resuélvelo con RcloneView"
authors:
  - tayson
description: "Aprende a diagnosticar y solucionar los errores de límite excedido de Backblaze B2 en RcloneView. Controla las tasas de transferencia, gestiona los límites diarios y mantén tus copias de seguridad de B2 funcionando de forma fiable."
keywords:
  - error de límite excedido de Backblaze B2
  - límite diario B2 rclone
  - solucionar errores de Backblaze B2 en RcloneView
  - límite de transferencia B2 excedido
  - solución de problemas de Backblaze B2
  - límite de velocidad rclone B2
  - errores de copia de seguridad de Backblaze B2
  - solución del límite de subida de B2
tags:
  - troubleshooting
  - backblaze-b2
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de límite excedido en Backblaze B2 — Resuélvelo con RcloneView

> El límite diario de descarga de Backblaze B2 puede detener las transferencias a mitad de la sincronización. Aquí te explicamos cómo diagnosticar los errores de límite excedido en RcloneView y configurar tus trabajos para mantenerte dentro de los límites.

Backblaze B2 ofrece una salida de datos gratuita generosa hacia redes conectadas a Cloudflare, pero las descargas a destinos no conectados consumen un límite diario. Cuando se alcanza ese límite, B2 devuelve errores HTTP 403 con un mensaje de "cap exceeded" (límite excedido), lo que provoca que los trabajos de sincronización de RcloneView fallen o se detengan. Esta guía te muestra cómo identificar el error, ajustar tu configuración de transferencia y programar los trabajos para mantenerte dentro de los límites diarios de tu cuenta de B2.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Identificar un error de límite excedido

Cuando se excede un límite de B2, RcloneView muestra el error en la **pestaña Log**, en la parte inferior de la interfaz. Verás entradas que contienen `403 Forbidden` y el mensaje `Transaction cap exceeded` o `Download cap exceeded`. El monitor de transferencias en la pestaña Transferring muestra que el trabajo afectado se detiene a 0 B/s.

Abre la Terminal Rclone (pestaña Terminal) y ejecuta `rclone about b2-remote:` para comprobar tu uso actual de almacenamiento y transacciones. Aunque la terminal no mostrará el límite exacto (eso se configura en la consola de Backblaze), confirma que el remoto es accesible y muestra el estado general de la cuenta.

<img src="/support/images/en/blog/new-remote.png" alt="Checking Backblaze B2 remote configuration in RcloneView" class="img-large img-center" />

## Ajustar la configuración de transferencia para evitar alcanzar el límite

La solución más eficaz es limitar el ancho de banda de transferencia para distribuir las descargas a lo largo de varios días. En las Global Rclone Flags de RcloneView (pestaña Settings → Embedded Rclone → Global Rclone Flags), añade `--bwlimit 10M` para limitar el ancho de banda a 10 MB/s. Esto reduce el consumo diario de datos y mantiene las transferencias dentro de tu límite de B2 al ejecutar sincronizaciones o restauraciones grandes.

Para los trabajos activados por el programador, escalónalos a lo largo del día. En lugar de ejecutar una restauración de 200 GB a las 6 de la mañana, divide el trabajo por profundidad de carpeta: usa reglas de filtro para procesar primero `Archive/2023/` y luego `Archive/2024/` en un trabajo separado al mediodía. Las reglas de filtro personalizadas de RcloneView en el paso 3 del asistente de sincronización facilitan esto: usa la exclusión de rutas de carpeta para aislar cada lote.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Backblaze B2 jobs to avoid daily cap in RcloneView" class="img-large img-center" />

## Recuperar una sincronización fallida tras el reinicio del límite

Los límites de Backblaze B2 se reinician diariamente a medianoche, hora del Pacífico. Si un trabajo falla debido a un error de límite excedido, la sincronización de RcloneView es idempotente: cuando vuelves a ejecutar el mismo trabajo después del reinicio, se reanudará desde donde se quedó, omitiendo los archivos ya transferidos. La función Folder Compare te permite verificar qué archivos se completaron antes del fallo comparando el origen con el destino.

Para mayor seguridad, activa **Retry entire sync if fails** en el paso 2 del asistente de trabajos (configúralo con 3 reintentos) y asegúrate de que el intervalo de reintento sea lo suficientemente largo como para que el límite se reinicie. Revisa la pestaña Job History regularmente para detectar fallos a tiempo y comprobar el estado del límite antes de programar nuevas transferencias.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Backblaze B2 job failure history in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Comprueba la pestaña Log en busca de errores `403 cap exceeded` después de un trabajo fallido de B2.
3. Añade `--bwlimit` a las Global Rclone Flags para limitar el consumo diario de datos.
4. Vuelve a ejecutar el trabajo de sincronización después de que se reinicie el límite diario: RcloneView omite automáticamente los archivos ya transferidos.

Con una programación cuidadosa y la limitación de ancho de banda, Backblaze B2 sigue siendo un destino de copia de seguridad rentable incluso cuando se trabaja dentro de las restricciones de límite diario.

---

**Guías relacionadas:**

- [Migrar de Backblaze B2 a AWS S3 con RcloneView](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-aws-s3-rcloneview)
- [Solucionar la interrupción de sincronización en la nube con reintento de red en RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-interrupted-network-retry-rcloneview)
- [Flags personalizados de Rclone y opciones avanzadas en RcloneView](https://rcloneview.com/support/blog/custom-rclone-flags-advanced-options-rcloneview)

<CloudSupportGrid />
