---
slug: migrate-backblaze-b2-to-wasabi-rcloneview
title: "Migrar de Backblaze B2 a Wasabi con RcloneView"
authors:
  - tayson
description: "Migra de Backblaze B2 a Wasabi con RcloneView. Compara los modelos de precios, configura ambos remotos, transfiere datos y verifica la migración paso a paso."
keywords:
  - rcloneview
  - backblaze b2 to wasabi
  - migrate b2 to wasabi
  - wasabi cloud migration
  - backblaze migration tool
  - s3 compatible migration
  - cloud storage migration
  - wasabi no egress fees
  - b2 data transfer
  - object storage migration gui
tags:
  - backblaze-b2
  - wasabi
  - migration
  - cloud-migration
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de Backblaze B2 a Wasabi con RcloneView

> Backblaze B2 ofrece costos de almacenamiento bajos, pero las tarifas de egreso y de API pueden sumarse rápidamente — **RcloneView** hace que migrar al precio plano de Wasabi sea sencillo y verificable.

Backblaze B2 y Wasabi son dos de los proveedores de almacenamiento de objetos compatibles con S3 más populares para equipos que cuidan los costos. Mientras que B2 es conocido por su bajo costo por GB de almacenamiento ($0.006/GB/mes), su modelo de precios incluye cargos de egreso ($0.01/GB) y tarifas por transacción que pueden sorprender a los equipos con cargas de trabajo intensivas en lectura. Wasabi ofrece una tarifa plana ($0.0069/GB/mes) sin tarifas de egreso ni de API, lo que hace que los costos sean totalmente predecibles. RcloneView gestiona la migración entre estos dos proveedores compatibles con S3 mediante una interfaz visual que elimina la necesidad de scripts de CLI.

Esta guía cubre la migración completa, desde entender las diferencias de precios hasta verificar cada objeto después de la transferencia.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué migrar de Backblaze B2 a Wasabi

La decisión de migrar suele reducirse a la previsibilidad. La tarifa de almacenamiento de B2 es ligeramente más baja que la de Wasabi, pero al considerar el egreso y las transacciones de Clase B/C, el costo total suele superar la tarifa plana de Wasabi, especialmente en cargas de trabajo que leen datos con frecuencia.

Considera un escenario: 10 TB de almacenamiento en B2 cuestan $60/mes. Si descargas 5 TB de esos datos mensualmente (sirviendo medios, distribuyendo builds, ejecutando analítica), el egreso añade $50. Las transacciones de Clase B para listar y descargar archivos añaden más. En Wasabi, esos mismos 10 TB cuestan $69/mes en total, sin importar cuántos datos leas ni cuántas llamadas a la API hagas.

Wasabi también mantiene una política de almacenamiento mínimo de 90 días: eliminar objetos antes de los 90 días genera un cargo prorrateado por el período restante. Ten esto en cuenta en tu planificación si almacenas datos de vida corta.

## Configurar Backblaze B2 en RcloneView

Abre el Administrador de Remotos y añade un remoto de Backblaze B2. Puedes usar la API nativa de B2 o la API compatible con S3. Para fines de migración, se recomienda el endpoint compatible con S3 porque permite que RcloneView use la misma lógica de transferencia tanto para el origen como para el destino.

Introduce tu Application Key ID y Application Key de B2. Si tienes claves específicas de bucket, úsalas para mayor seguridad; la clave solo necesita acceso de lectura para el origen.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 remote in RcloneView" class="img-large img-center" />

## Configurar Wasabi en RcloneView

Añade Wasabi como un remoto compatible con S3. En el Administrador de Remotos, selecciona **Amazon S3 Compatible** y configura:

- **Provider**: Wasabi
- **Access Key** y **Secret Key**: Generadas desde la consola de Wasabi
- **Region**: Selecciona la región más cercana a tus usuarios (us-east-1, eu-central-1, ap-northeast-1, etc.)
- **Endpoint**: Configurado automáticamente según la región seleccionada

Crea tu bucket de destino en la consola de Wasabi o mediante el explorador de RcloneView. Elige la misma región que la base principal de tus usuarios para minimizar la latencia.

## Ejecutar la migración

Abre el explorador de dos paneles con B2 a la izquierda y Wasabi a la derecha. Navega hasta el bucket de B2 que deseas migrar y el bucket de destino en Wasabi.

Para una migración completa, crea un trabajo de sincronización. RcloneView enumera todos los objetos en el bucket de B2, los compara con el destino en Wasabi y transfiere solo lo que falta o ha cambiado. Dado que ambos proveedores admiten sumas de verificación MD5 mediante ETag, la comparación de archivos es rápida y precisa.

Consideraciones clave para la transferencia:

- **Egreso desde B2**: Incurrirás en cargos de egreso de B2 durante la migración. Para minimizar los costos, considera usar la asociación de egreso gratuito de Backblaze con Cloudflare (si aplica a tu configuración) o la B2 bandwidth alliance.
- **Transferencias paralelas**: Tanto B2 como Wasabi admiten alta concurrencia. Configura las transferencias paralelas entre 8 y 16 para un rendimiento óptimo.
- **Archivos grandes**: Ambos proveedores admiten cargas multiparte. RcloneView usa automáticamente multiparte para archivos que superan el umbral, garantizando una transferencia confiable de objetos grandes.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Backblaze B2 to Wasabi in RcloneView two-pane explorer" class="img-large img-center" />

## Monitorear el progreso de la transferencia

El panel de monitoreo en tiempo real muestra el estado de cada archivo en la cola de transferencia. Puedes seguir el progreso por archivo, el porcentaje de finalización general y la velocidad de transferencia actual. Si las condiciones de red cambian, pausa la transferencia y reanúdala más tarde: RcloneView continúa donde la dejaste.

Para migraciones de varios terabytes, la transferencia puede durar horas o días. El registro de RcloneView garantiza que tengas un registro completo de lo transferido, lo omitido y cualquier error que haya ocurrido.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring B2 to Wasabi migration progress in RcloneView" class="img-large img-center" />

## Verificar la migración

Después de que se complete la transferencia, ejecuta una operación de comparación entre el origen en B2 y el destino en Wasabi. RcloneView lista los archivos que existen solo en un lado y los archivos que difieren en tamaño o suma de verificación. Una comparación limpia, sin diferencias, confirma una migración exitosa.

Presta atención a:

- **Directorios vacíos**: El almacenamiento de objetos no tiene directorios reales. Tanto B2 como Wasabi usan "carpetas" basadas en prefijos. RcloneView maneja esto de forma consistente, pero verifica que la lógica de tu aplicación no dependa de marcadores de directorio.
- **Preservación de metadatos**: Los metadatos estándar (content-type, last-modified) se preservan durante las transferencias compatibles con S3. Los metadatos personalizados (x-amz-meta-*) también son transferidos por RcloneView.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying B2 to Wasabi migration with compare in RcloneView" class="img-large img-center" />

## Limpieza posterior a la migración

Una vez que hayas verificado la migración y actualizado todos los endpoints de la aplicación de B2 a Wasabi:

1. **Actualiza el DNS y las configuraciones de la aplicación**: Dirige tus servicios al nuevo endpoint de Wasabi.
2. **Ejecuta una sincronización final**: Captura cualquier archivo que se haya añadido a B2 durante la ventana de migración.
3. **Conserva temporalmente los datos de B2**: Mantén el bucket de B2 durante un período de reversión (2-4 semanas es lo habitual).
4. **Elimina los datos de B2**: Después de confirmar que todo funciona en Wasabi, elimina el bucket de B2 para dejar de incurrir en cargos de almacenamiento.

Recuerda la política de almacenamiento mínimo de 90 días de Wasabi al planificar tu estrategia de retención. Si eliminas objetos de Wasabi antes de los 90 días, se te facturará por el período completo de 90 días.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing migration job history in RcloneView" class="img-large img-center" />

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade Backblaze B2 y Wasabi como remotos compatibles con S3 en el Administrador de Remotos.
3. Ejecuta un trabajo de sincronización de B2 a Wasabi usando el explorador de dos paneles y monitorea el progreso en tiempo real.
4. Verifica la migración con la función de comparación y actualiza los endpoints de tu aplicación.

B2 y Wasabi son ambos excelentes proveedores de almacenamiento de objetos, pero cuando los costos predecibles importan, el modelo de tarifa plana de Wasabi gana, y RcloneView hace que el cambio sea sencillo.

---

**Guías relacionadas:**

- [Añadir AWS S3 y compatibles con S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Comparar el contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Monitoreo de transferencias en tiempo real](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
