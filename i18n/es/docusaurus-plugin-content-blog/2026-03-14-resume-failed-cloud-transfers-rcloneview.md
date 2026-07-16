---
slug: resume-failed-cloud-transfers-rcloneview
title: "Cómo reanudar transferencias en la nube fallidas sin empezar de nuevo en RcloneView"
authors:
  - tayson
description: "Las transferencias grandes en la nube fallan. Las redes se caen, las API limitan la velocidad, los equipos se suspenden. Descubre cómo RcloneView gestiona las transferencias interrumpidas para que nunca desperdicies ancho de banda reiniciando desde cero."
keywords:
  - reanudar transferencia en la nube
  - continuar subida fallida
  - transferencia en la nube interrumpida
  - reanudar transferencia rclone
  - reanudar subida parcial
  - reanudar sincronización en la nube
  - migración a la nube interrumpida
  - reanudar subida de archivo grande
  - reiniciar transferencia en la nube
  - recuperación de sincronización fallida
tags:
  - RcloneView
  - troubleshooting
  - cloud-storage
  - performance
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cómo reanudar transferencias en la nube fallidas sin empezar de nuevo en RcloneView

> Estás migrando 2 TB de Google Drive a S3. Al llegar a 1.3 TB, tu red se cae. ¿Empiezas de nuevo? Definitivamente no.

Las transferencias grandes en la nube inevitablemente se interrumpen. Las redes fallan, los equipos se suspenden, se activan los límites de las API o los proveedores tienen interrupciones temporales. La pregunta no es si una transferencia fallará, sino cómo te recuperas. RcloneView utiliza la lógica de reanudación inteligente de rclone para continuar exactamente donde lo dejaste.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cómo funciona la reanudación

Cuando ejecutas un trabajo de sincronización o copia en RcloneView, rclone realiza un seguimiento de lo que ya se ha transferido. Si el trabajo se interrumpe y lo ejecutas de nuevo, rclone automáticamente:

1. **Comprueba qué hay ya en el destino** — comparando nombres de archivo, tamaños y fechas de modificación
2. **Omite los archivos completados** — los archivos ya transferidos no se vuelven a subir
3. **Reanuda los archivos parciales** — para los proveedores que lo admiten, los archivos subidos parcialmente continúan desde donde se quedaron

Esto significa que volver a ejecutar un trabajo fallido no vuelve a transferir todo. Solo gestiona lo que falta.

## Pasos prácticos de recuperación

### Paso 1: Comprueba qué ocurrió

Abre el Historial de trabajos para ver qué archivos fallaron y por qué:

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Review failed transfer details" class="img-large img-center" />

### Paso 2: Vuelve a ejecutar el mismo trabajo

Simplemente ejecuta de nuevo el mismo trabajo de sincronización o copia. RcloneView omitirá todo lo que se completó correctamente y solo transferirá los archivos restantes:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Re-run failed job" class="img-large img-center" />

### Paso 3: Verifica que esté completo

Después de que finalice la nueva ejecución, usa la Comparación de carpetas para confirmar que todo se transfirió:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify complete transfer" class="img-large img-center" />

## Consejos para transferencias grandes fiables

### Usa trabajos de sincronización, no copias puntuales

Los trabajos de sincronización son inherentemente reanudables: comparan el origen y el destino, y luego transfieren solo las diferencias. Guarda tu transferencia como un trabajo con nombre para poder volver a ejecutarlo en cualquier momento.

### Programa reintentos automáticamente

Para las transferencias nocturnas que podrían fallar, programa el mismo trabajo para que se ejecute cada pocas horas. Cada ejecución continúa donde se detuvo la anterior. Cuando todo se haya transferido, las ejecuciones posteriores se completan instantáneamente sin nada que hacer.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule automatic retries" class="img-large img-center" />

### Supervisa el progreso

Realiza un seguimiento de las tasas de transferencia y el número de archivos en tiempo real para detectar problemas a tiempo:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer progress" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Guarda las transferencias como trabajos con nombre** para facilitar las repeticiones.
3. **Vuelve a ejecutar los trabajos fallidos** — omiten automáticamente los archivos completados.
4. **Verifica con la Comparación de carpetas** después de la finalización.

Las transferencias fallidas son un bache en el camino, no un muro de ladrillos.

---

**Guías relacionadas:**

- [Solucionar subidas lentas a la nube](https://rcloneview.com/support/blog/fix-slow-cloud-uploads-speed-optimization-rcloneview)
- [Historial de trabajos y registros de transferencia](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)
- [Sincronización vs. Copia vs. Movimiento](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)

<CloudSupportGrid />
