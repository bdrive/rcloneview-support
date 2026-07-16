---
slug: fix-bandwidth-throttle-slow-uploads-rcloneview
title: "Solucionar Subidas Lentas a la Nube — Optimiza el Ancho de Banda y la Velocidad de Transferencia con RcloneView"
authors:
  - tayson
description: "Diagnostica y soluciona velocidades de subida lentas a la nube en RcloneView. Ajusta las transferencias concurrentes, los límites de ancho de banda y los flags de rclone para maximizar el rendimiento de subida a cualquier proveedor de la nube."
keywords:
  - solucionar subidas lentas a la nube RcloneView
  - optimización de velocidad de subida a la nube
  - ajuste de ancho de banda RcloneView
  - solución de problemas de transferencia lenta a la nube
  - solución de velocidad de subida de rclone
  - aumentar la velocidad de sincronización en la nube
  - rendimiento de transferencia de RcloneView
  - solucionar subidas lentas de copias de seguridad
  - guía de optimización de subidas a la nube
  - ajuste de transferencias concurrentes de rclone
tags:
  - troubleshooting
  - tips
  - performance
  - optimization
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar Subidas Lentas a la Nube — Optimiza el Ancho de Banda y la Velocidad de Transferencia con RcloneView

> Cuando las subidas a la nube en RcloneView se sienten más lentas de lo esperado, unos pocos cambios de configuración específicos pueden aumentar drásticamente el rendimiento — aquí te mostramos cómo diagnosticar y solucionar los cuellos de botella de rendimiento más comunes.

Las velocidades de subida lentas a la nube son una de las frustraciones más comunes para los usuarios de RcloneView. La causa raíz rara vez es obvia: puede ser muy pocas transferencias concurrentes, un límite de ancho de banda accidental, un endpoint de API restringido, o una discrepancia entre el MTU de tu red y los requisitos del proveedor de la nube. Esta guía recorre sistemáticamente cada causa potencial para que puedas identificar y resolver el problema rápidamente.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Revisa y Aumenta las Transferencias Concurrentes

La configuración con mayor impacto en el rendimiento de subida es el **número de transferencias de archivos concurrentes**. Por defecto, rclone transfiere archivos secuencialmente o con concurrencia limitada. En la configuración del trabajo de sincronización de RcloneView (Paso 2: Configuración Avanzada), aumenta la opción **Number of file transfers** — prueba entre 8 y 16 para conexiones de alto ancho de banda. Cada transferencia concurrente añade rendimiento independiente, multiplicando efectivamente tu velocidad de subida efectiva.

Para proveedores como Amazon S3 y Cloudflare R2 que admiten subidas multiparte, también aumenta el **Number of multi-thread transfers** (por defecto: 4) para paralelizar la subida de cada archivo grande en fragmentos. Esto es especialmente beneficioso al subir archivos de video grandes o volcados de bases de datos.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Adjusting concurrent transfer settings in RcloneView sync job" class="img-large img-center" />

## Elimina Límites de Ancho de Banda Accidentales

RcloneView pasa los Global Rclone Flags de Settings > Embedded Rclone a cada operación. Verifica si los flags `--bwlimit` o `--bwlimit-file` están configurados ahí — estos limitan la velocidad de subida al valor especificado. Si anteriormente configuraste un límite de ancho de banda para evitar saturar tu conexión y olvidaste eliminarlo, ese flag limitará silenciosamente todas tus subidas.

Elimina o modifica el flag `--bwlimit` en Settings > Embedded Rclone > Global Rclone Flags, y luego vuelve a ejecutar tu trabajo de sincronización para ver si la velocidad mejora.

<img src="/support/images/en/blog/new-remote.png" alt="Checking global rclone flags that might limit upload bandwidth" class="img-large img-center" />

## Verifica los Límites de Tasa de la API del Proveedor

Algunos proveedores de la nube aplican límites de tasa que pueden hacer que las subidas parezcan lentas. Google Drive limita las llamadas a la API por usuario por segundo. Dropbox restringe las aplicaciones que hacen demasiadas solicitudes. Amazon S3 tiene límites de solicitudes por prefijo. Cuando ves que las subidas avanzan lentamente con muchos archivos pequeños pero más rápido con archivos grandes, el límite de tasa de la API suele ser la causa.

En la pestaña Log de RcloneView, busca mensajes que contengan `429 Too Many Requests` o `Rate limit exceeded`. Si están presentes, reduce el número de transferencias concurrentes para mantenerte dentro de los límites de la API del proveedor. Para Google Drive específicamente, reduce las transferencias concurrentes a 4 y limita el número de checkers a 8 o menos.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring transfer speed and detecting rate limits in RcloneView" class="img-large img-center" />

## Ajusta el Tamaño de Fragmento de las Subidas Multiparte

Para archivos grandes subidos a proveedores compatibles con S3, el tamaño de fragmento para las subidas multiparte afecta el rendimiento. RcloneView te permite pasar flags avanzados de rclone en la configuración personalizada del trabajo de sincronización. Añadir `--s3-chunk-size 64M` (aumentando desde los 5MB por defecto) reduce la sobrecarga de llamadas a la API para subidas de archivos grandes y puede mejorar significativamente el rendimiento en conexiones de alto ancho de banda.

De manera similar, para Backblaze B2, usa `--b2-chunk-size 100M` para subidas de archivos grandes. Estos flags se pueden añadir a través del campo de flags personalizados de rclone en la configuración del trabajo de sincronización de RcloneView.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Advanced sync job settings for tuning upload performance in RcloneView" class="img-large img-center" />

## Primeros Pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. En la configuración avanzada de tu trabajo de sincronización, aumenta las transferencias concurrentes a 8–16.
3. Revisa Settings > Embedded Rclone en busca de cualquier flag `--bwlimit` que pueda limitar la velocidad.
4. Revisa la pestaña Log en busca de errores de límite de tasa y reduce la concurrencia si es necesario.

Optimizar la velocidad de subida en RcloneView es un proceso de ajustar la concurrencia, eliminar límites accidentales y alinear tu configuración con las características de la API de cada proveedor.

---

**Guías Relacionadas:**

- [Acelera las Transferencias Grandes a la Nube con RcloneView](https://rcloneview.com/support/blog/accelerate-large-cloud-transfers-rcloneview)
- [Solucionar Progreso Estancado en Transferencias a la Nube — Resuelve Subidas Atascadas con RcloneView](https://rcloneview.com/support/blog/fix-cloud-transfer-stalled-progress-rcloneview)
- [Flags Personalizados de Rclone y Opciones Avanzadas en RcloneView](https://rcloneview.com/support/blog/custom-rclone-flags-advanced-options-rcloneview)

<CloudSupportGrid />
