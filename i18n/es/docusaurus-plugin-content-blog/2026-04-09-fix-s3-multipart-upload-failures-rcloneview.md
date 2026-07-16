---
slug: fix-s3-multipart-upload-failures-rcloneview
title: "Solucionar fallos de carga multipartes S3 en RcloneView"
authors:
  - tayson
description: "Solucione y corrija los fallos de carga multipartes S3 en RcloneView. Resuelva cargas incompletas, errores de tamaño de parte y sesiones multipartes huérfanas."
keywords:
  - rcloneview
  - fallo de carga multipartes s3
  - corregir error de carga s3
  - carga multipartes incompleta
  - tiempo de espera agotado en carga s3
  - error de tamaño de parte s3
  - carga multipartes huérfana
  - solución de problemas de carga s3
  - rclone s3 multipartes
  - corrección de carga en la nube
tags:
  - RcloneView
  - troubleshooting
  - amazon-s3
  - s3-compatible
  - cloud-storage
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar fallos de carga multipartes S3 en RcloneView

> Las cargas multipartes de S3 dividen los archivos grandes en fragmentos para la transferencia paralela y la reanudación, pero los fallos durante el proceso pueden dejar cargas incompletas, desperdiciar almacenamiento y bloquear transferencias; así es como se corrigen en RcloneView.

Amazon S3 y los proveedores compatibles con S3 (Wasabi, Backblaze B2 S3, Cloudflare R2, MinIO, DigitalOcean Spaces) requieren cargas multipartes para archivos de más de 5 GB y las recomiendan para archivos de más de 100 MB. El archivo se divide en partes (de 5 MB a 5 GB cada una por defecto), se carga en paralelo y se ensambla en el servidor. Cuando este proceso falla a mitad de camino, ya sea por interrupciones de red, tiempos de espera agotados o tamaños de parte mal configurados, el resultado es una carga incompleta que consume almacenamiento pero no produce un objeto utilizable.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Síntomas comunes

- **La carga se detiene o se congela**: la transferencia parece detenerse a mitad de un archivo grande. El monitoreo de RcloneView no muestra progreso durante un período prolongado.
- **Error "EntityTooSmall"**: se cargaron partes más pequeñas que el tamaño mínimo (5 MB para la mayoría de los proveedores S3). Esto suele ocurrir cuando la configuración del tamaño de fragmento es demasiado pequeña en relación con el tamaño del archivo.
- **Error "EntityTooLarge"**: una sola parte supera el tamaño máximo permitido (5 GB).
- **"InvalidPart" o "InvalidPartOrder"**: las partes se cargaron fuera de orden o una parte se corrompió durante la transferencia. El servidor rechaza la solicitud de finalización.
- **El uso de almacenamiento crece pero los archivos no aparecen**: las cargas multipartes incompletas consumen almacenamiento. Las partes existen en el servidor pero el objeto final nunca se ensambla.

## Corrección 1: Ajustar el tamaño de fragmento

La causa más común de los fallos multipartes es un tamaño de fragmento incorrecto en relación con el tamaño del archivo. S3 permite un máximo de 10,000 partes por carga. Si el tamaño de fragmento es demasiado pequeño para un archivo grande, la carga supera el límite de partes y falla.

**Ejemplo**: un archivo de 500 GB con el tamaño de fragmento predeterminado de 5 MB requeriría 100,000 partes, muy por encima del límite de 10,000 partes.

En RcloneView, ajuste el tamaño de fragmento al configurar su remoto S3 o en las opciones avanzadas del trabajo. Una buena regla general: establezca el tamaño de fragmento en al menos `file_size / 10,000`. Para un archivo de 500 GB, use fragmentos de al menos 50 MB. Para la mayoría de las cargas de trabajo, los fragmentos de 64 MB a 128 MB ofrecen un buen equilibrio entre paralelismo y confiabilidad.

Puede configurar esto con el indicador `--s3-chunk-size` en el campo de indicadores personalizados de RcloneView.

## Corrección 2: Aumentar el tiempo de espera de carga

Las partes grandes en conexiones lentas pueden superar el tiempo de espera predeterminado. Si su conexión es más lenta que 10 Mbps, un fragmento de 128 MB podría tardar más de 100 segundos en cargarse, cerca de los límites de tiempo de espera predeterminados.

Aumente el tiempo de espera con el indicador `--timeout`. Por ejemplo, `--timeout 300s` otorga a cada parte hasta 5 minutos para completarse. También puede reducir el tamaño de fragmento para que las partes individuales se transfieran más rápido.

## Corrección 3: Reducir la concurrencia de transferencia

Cargar demasiadas partes simultáneamente puede saturar su conexión de red o el punto de conexión de S3. Si observa tiempos de espera frecuentes o reinicios de conexión durante las cargas multipartes, reduzca el número de transferencias concurrentes.

En la configuración del trabajo de RcloneView, reduzca el número de transferencias del valor predeterminado (4) a 2 o incluso 1 para archivos muy grandes. También puede usar `--s3-upload-concurrency` para controlar cuántas partes de un solo archivo se cargan en paralelo (el valor predeterminado es 4).

## Corrección 4: Limpiar cargas multipartes huérfanas

Las cargas multipartes fallidas dejan partes huérfanas en el servidor que consumen almacenamiento y generan costos. Estas partes no son visibles como objetos: no las verá al explorar el bucket en RcloneView o en la consola de AWS.

Para limpiar las cargas huérfanas:

- **AWS S3**: configure una regla de ciclo de vida en el bucket para anular automáticamente las cargas multipartes incompletas después de un número específico de días (por ejemplo, 7 días). Esto se hace en la consola de AWS, en la pestaña Management del bucket.
- **Usando rclone**: ejecute `rclone cleanup remote:bucket` desde la terminal integrada de RcloneView. Esto anula todas las cargas multipartes pendientes en el bucket especificado.
- **Proveedores compatibles con S3**: la mayoría de los proveedores admiten las mismas reglas de ciclo de vida o comandos de limpieza, pero consulte la documentación de su proveedor para conocer los detalles específicos.

## Corrección 5: Habilitar reintentos en caso de fallo

Las interrupciones de red durante las cargas multipartes pueden hacer que fallen partes individuales. RcloneView reintenta automáticamente las operaciones fallidas (3 reintentos predeterminados con retroceso exponencial). Si experimenta fallos transitorios frecuentes, aumente el número de reintentos con `--retries 5` o `--retries 10` en los indicadores personalizados.

Para conexiones muy poco confiables, también configure `--low-level-retries 10` para reintentar solicitudes HTTP individuales antes de contabilizarlas como una operación fallida.

## Corrección 6: Usar copia en el servidor cuando sea posible

Si está copiando entre dos buckets compatibles con S3 del mismo proveedor, la copia en el servidor evita por completo los problemas de carga multipartes: los datos se mueven dentro de la red del proveedor sin pasar por su máquina. RcloneView usa la copia en el servidor automáticamente cuando tanto el origen como el destino están en el mismo proveedor S3.

Para transferencias entre proveedores diferentes (por ejemplo, de AWS S3 a Cloudflare R2), los datos deben pasar por su máquina y las cargas multipartes se aplican en el lado de destino.

## Prevenir fallos futuros

- **Establezca el tamaño de fragmento de forma proactiva**: antes de cargar archivos de más de 1 GB, calcule el tamaño de fragmento requerido (`file_size / 10,000`) y configúrelo en los indicadores personalizados.
- **Habilite la limpieza por ciclo de vida**: configure siempre una regla de ciclo de vida para anular las cargas multipartes incompletas. Esto evita que se acumulen partes huérfanas.
- **Monitoree las transferencias**: use el monitoreo en tiempo real de RcloneView para detectar cargas estancadas a tiempo. Pausar y reanudar una transferencia estancada a menudo resuelve problemas transitorios.
- **Pruebe con una ejecución en seco**: para cargas críticas, use el modo de ejecución en seco de RcloneView para verificar el plan de transferencia antes de confirmarlo.

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Configure su remoto S3 con un tamaño de fragmento adecuado para sus archivos más grandes.
3. Configure reglas de ciclo de vida en sus buckets para limpiar automáticamente las cargas huérfanas.
4. Monitoree las transferencias en tiempo real y ajuste la concurrencia según sea necesario.

Los fallos de carga multipartes son el problema más común al trabajar con archivos grandes en S3. La configuración adecuada del tamaño de fragmento, los ajustes de tiempo de espera y la limpieza de cargas huérfanas resuelven la gran mayoría de los casos.

---

**Guías relacionadas:**

- [Agregar AWS S3 y compatibles con S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Monitoreo de transferencias en tiempo real](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [Crear trabajos de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
