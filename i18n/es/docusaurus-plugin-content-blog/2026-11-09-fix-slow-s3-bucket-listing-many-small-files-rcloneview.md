---
slug: fix-slow-s3-bucket-listing-many-small-files-rcloneview
title: "Soluciona el listado lento de buckets S3 y la sincronización con muchos archivos pequeños — Ajustes con RcloneView"
authors:
  - morgan
description: "Soluciona la sincronización y el listado lentos de S3 en buckets con muchos archivos pequeños. Ajusta checkers, transferencias y filtros en RcloneView y verifica con Dry Run."
keywords:
  - sincronización S3 lenta muchos archivos pequeños
  - listado de bucket S3 lento
  - ajuste de checkers de rclone
  - sincronizar S3 millones de archivos
  - RcloneView S3
  - acelerar sincronización S3
  - transferencia de archivos pequeños lenta
  - rendimiento de sincronización S3 compatible
tags:
  - RcloneView
  - troubleshooting
  - tips
  - s3
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Soluciona el listado lento de buckets S3 y la sincronización con muchos archivos pequeños — Ajustes con RcloneView

> Un bucket con cientos de miles de archivos diminutos se sincroniza despacio por la sobrecarga de cada objeto, no por el ancho de banda, y unos pocos ajustes del trabajo lo cambian.

La carpeta de proxies de un fotógrafo o el archivo de registros de una aplicación pueden contener una enorme cantidad de objetos pequeños. Cada uno necesita una entrada de listado, una comparación y una solicitud, así que la sincronización avanza a paso de tortuga aunque la red esté libre. RcloneView expone en el asistente de trabajos los ajustes relevantes de rclone, de modo que puedes configurarlos sin escribir flags. Conecta S3, Azure o Backblaze B2 con lectura y escritura completas en la licencia FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué los archivos pequeños son lentos

Con archivos grandes domina el rendimiento. Con archivos pequeños domina el número de solicitudes: cada objeto se lista, se compara por tamaño, fecha o suma de verificación y se sube individualmente. La lentitud aquí suele deberse a la latencia por solicitud y a la limitación de tasa del proveedor, por lo que añadir ancho de banda no sirve de nada.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Pestaña Transferring mostrando el número de archivos y la velocidad" class="img-large img-center" />

Abre la pestaña Transferring durante una ejecución. Si la velocidad es baja pero el número de archivos crece de forma constante, estás limitado por las solicitudes y no por el ancho de banda.

## Ajusta la configuración del trabajo

En el paso 2 del asistente de sincronización, aumenta el número de transferencias de archivos para que se muevan más objetos en paralelo. Los equality checkers tienen un valor predeterminado de 8; en un backend lento o limitado, la recomendación es usar 4 o menos, porque demasiadas comprobaciones simultáneas pueden provocar limitación y empeorar las cosas. Cambia un valor a la vez y vuelve a ejecutar.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Ajustes avanzados del trabajo para transferencias y checkers" class="img-large img-center" />

Activar la comparación por suma de verificación añade cálculo de hash además de las comprobaciones de tamaño, así que úsala solo cuando la integridad importe más que la velocidad. Mantén el ajuste de reintentos en su valor predeterminado de 3 para que los errores transitorios no interrumpan una ejecución larga.

## Reduce el trabajo

Los filtros del paso 3 reducen la carga del listado. Usa la antigüedad máxima de archivo para omitir objetos antiguos, excluye las carpetas que no necesites y usa los filtros predefinidos para dejar fuera ciertos tipos de archivo. Dividir un trabajo gigante en trabajos por prefijo también facilita aislar los fallos y volver a ejecutarlos.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ejecución de un trabajo de sincronización ajustado en RcloneView" class="img-large img-center" />

Ejecuta siempre un Dry Run después de cambiar los filtros, para ver exactamente qué archivos se copiarán o eliminarán antes de la ejecución real.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre tu trabajo lento y observa la pestaña Transferring para confirmar que el límite son las solicitudes.
3. Ajusta las transferencias y los checkers uno por uno, y añade filtros para reducir el alcance.
4. Compara los tiempos en Job History y conserva los ajustes con mejor resultado.

Cambios pequeños y metódicos convierten una sincronización de toda la noche en una tarea rutinaria.

---

**Guías relacionadas:**

- [Soluciona los fallos de subida multiparte en S3](https://rcloneview.com/support/blog/fix-s3-multipart-upload-failures-rcloneview)
- [Soluciona la lentitud en las transferencias en la nube](https://rcloneview.com/support/blog/fix-slow-cloud-transfers-speed-rcloneview)
- [Soluciona los errores de limitación de tasa de la API en la nube](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
