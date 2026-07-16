---
slug: migrate-wasabi-to-cloudflare-r2-rcloneview
title: "Migra de Wasabi a Cloudflare R2 con RcloneView"
authors:
  - tayson
description: "Migra de Wasabi a Cloudflare R2 con RcloneView. Compara precios, configura ambos remotos compatibles con S3, transfiere datos y verifica la migración paso a paso."
keywords:
  - rcloneview
  - wasabi to cloudflare r2
  - migrate wasabi to r2
  - cloudflare r2 migration
  - wasabi migration tool
  - s3 compatible migration
  - cloud storage migration
  - r2 no egress fees
  - wasabi data transfer
  - object storage migration gui
tags:
  - RcloneView
  - wasabi
  - cloudflare-r2
  - migration
  - cloud-migration
  - s3-compatible
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra de Wasabi a Cloudflare R2 con RcloneView

> Tanto Wasabi como Cloudflare R2 son compatibles con S3 y se presentan como alternativas de bajo costo a AWS S3, pero sus modelos de precios difieren en aspectos importantes — **RcloneView** gestiona la migración entre ambos con una interfaz visual.

Wasabi ofrece almacenamiento en la nube de acceso rápido a $6.99/TB/mes sin comisiones de salida (egress), pero impone una duración mínima de almacenamiento de 90 días y un cargo mensual mínimo. Cloudflare R2 cobra $0.015/GB/mes (aproximadamente $15.36/TB) sin comisiones de salida y sin duración mínima de almacenamiento. Para cargas de trabajo con recuperación frecuente de datos u objetos de corta duración, R2 puede resultar considerablemente más económico. RcloneView se conecta a ambos como remotos compatibles con S3 y ofrece un camino de migración sencillo.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué migrar de Wasabi a Cloudflare R2

Ambos proveedores eliminan las comisiones de salida, que es su principal atractivo frente a AWS S3. La decisión de migrar suele depender de:

- **Duración mínima de almacenamiento**: Wasabi cobra por al menos 90 días de almacenamiento por objeto, incluso si lo eliminas antes. R2 no tiene mínimo, lo que lo hace mejor para datos transitorios o que se reemplazan con frecuencia.
- **Integración con CDN**: R2 se integra de forma nativa con la red CDN de Cloudflare, permitiendo acceso público instantáneo a los objetos almacenados a través de un dominio de Cloudflare sin configuración adicional.
- **Integración con Workers**: Si tu aplicación usa Cloudflare Workers, R2 ofrece acceso de latencia cero desde el cómputo en el borde (edge).
- **Precios a gran escala**: Para cargas de trabajo con mucho almacenamiento, la tarifa plana por TB de Wasabi puede ser más económica. Para cargas de trabajo con un alto volumen de llamadas a la API, el modelo de precios de R2 (gratis para las primeras 10 millones de solicitudes de Clase B por mes) puede ser más conveniente.

## Configuración de ambos remotos

### Remoto de Wasabi

Abre el Administrador de Remotos de RcloneView y agrega un remoto compatible con S3. Selecciona **Wasabi** como proveedor, ingresa tu Access Key y Secret Key de Wasabi, y especifica el endpoint de la región (por ejemplo, `s3.us-east-1.wasabisys.com`). Selecciona el bucket que deseas migrar.

### Remoto de Cloudflare R2

Agrega otro remoto compatible con S3 y selecciona **Cloudflare R2** como proveedor. Ingresa tu R2 Access Key ID y Secret Access Key (generados desde el panel de Cloudflare, en R2 > Manage R2 API Tokens). El endpoint sigue el formato `https://<account-id>.r2.cloudflarestorage.com`. Crea un bucket de destino en el panel de Cloudflare o deja que RcloneView cree uno durante la configuración.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Wasabi and Cloudflare R2 remotes in RcloneView" class="img-large img-center" />

## Ejecución de la migración

Abre Wasabi en el panel izquierdo y R2 en el panel derecho. Navega hasta el bucket de origen en Wasabi y el bucket de destino en R2.

Dado que ambos proveedores usan la API de S3, la transferencia de metadatos es sencilla: los tipos de contenido, las cabeceras de control de caché y los metadatos personalizados se conservan. RcloneView utiliza metadatos del lado del servidor durante la transferencia, preservando las propiedades de los objetos sin configuración adicional.

Para la migración inicial, utiliza un trabajo de copia. RcloneView compara archivos usando sumas de verificación MD5 (tanto Wasabi como R2 devuelven ETags MD5 estándar para cargas que no son multiparte) y transfiere solo los archivos nuevos o modificados. Las transferencias multihilo con concurrencia configurable mantienen la migración eficiente; configura las transferencias entre 8 y 16 para migraciones de buckets grandes.

Ten en cuenta la duración mínima de almacenamiento de Wasabi: si los objetos se subieron recientemente (dentro de los últimos 90 días), se te seguirá facturando por los 90 días completos en Wasabi incluso después de eliminarlos. Planifica el cronograma de tu migración en consecuencia: migra primero, verifica y luego elimina de Wasabi una vez transcurrida la ventana de 90 días.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Wasabi to Cloudflare R2 in RcloneView" class="img-large img-center" />

## Verificación de la migración

Después de la transferencia, usa la función de comparación de RcloneView para verificar que todos los objetos llegaron a R2. Selecciona el origen Wasabi y el destino R2 y ejecuta una comparación de carpetas. Los objetos idénticos aparecen coincidentes; los objetos faltantes o diferentes se resaltan para su revisión.

Para mayor confianza, ejecuta una operación de comprobación (check) que calcule las sumas de verificación en ambos lados. Esto verifica la integridad de los datos a nivel de byte.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Wasabi to R2 migration in RcloneView" class="img-large img-center" />

## Limpieza posterior a la migración

Una vez que hayas verificado la migración:

1. Actualiza las configuraciones de la aplicación para que apunten a los endpoints de R2 en lugar de a los de Wasabi.
2. Prueba el acceso de la aplicación para confirmar que todo funciona con R2.
3. Espera a que transcurra el período mínimo de almacenamiento de 90 días en Wasabi antes de eliminar los objetos, para evitar cargos por eliminación anticipada.
4. Elimina el bucket de Wasabi y desactiva las claves de acceso de Wasabi.

Si necesitas ejecutar ambos proveedores en paralelo durante la transición, programa un trabajo de sincronización diaria en RcloneView para mantener R2 actualizado con cualquier objeto nuevo añadido a Wasabi.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling sync from Wasabi to R2 during transition" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega Wasabi y Cloudflare R2 como remotos compatibles con S3.
3. Ejecuta un trabajo de copia de Wasabi a R2.
4. Verifica con operaciones de comparación y comprobación.
5. Actualiza los endpoints de la aplicación y limpia Wasabi después del período de retención.

Tanto Wasabi como R2 son opciones sólidas compatibles con S3, pero cuando el perfil de tu carga de trabajo cambia, RcloneView hace que la migración sea sencilla.

---

**Guías relacionadas:**

- [Agregar AWS S3 y compatibles con S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Comparar el contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Crear trabajos de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
