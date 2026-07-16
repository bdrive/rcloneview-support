---
slug: fix-slow-cloud-uploads-speed-optimization-rcloneview
title: "¿Por qué mis subidas a la nube son tan lentas? Consejos de optimización de velocidad con RcloneView"
authors:
  - tayson
description: "¿Las subidas a la nube van a paso de tortuga? Descubre por qué las transferencias a la nube son lentas y cómo optimizar la velocidad con transferencias paralelas, fragmentación, control de ancho de banda y ajustes específicos por proveedor en RcloneView."
keywords:
  - solución para subidas lentas a la nube
  - acelerar transferencia a la nube
  - subida a la nube lenta
  - optimizar velocidad de sincronización en la nube
  - transferencias paralelas a la nube
  - optimización de velocidad de rclone
  - subida lenta a google drive
  - velocidad de subida a s3
  - rendimiento de transferencia en la nube
  - herramienta de sincronización rápida en la nube
tags:
  - performance
  - optimization
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# ¿Por qué mis subidas a la nube son tan lentas? Consejos de optimización de velocidad con RcloneView

> Inicias una subida a la nube esperando que tarde 30 minutos. Dos horas después, va por el 40%. Antes de culpar a tu internet, el problema podría ser tu herramienta, no tu conexión.

Las transferencias lentas a la nube son frustrantes, pero rara vez se deben a un solo problema. Suele ser una combinación de configuraciones predeterminadas que no están optimizadas para tu situación, limitaciones específicas del proveedor y métodos de transferencia ineficientes. RcloneView te da los controles para solucionar todo esto.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué las transferencias a la nube son lentas

### 1) Transferencias de un solo hilo

La mayoría de las herramientas de sincronización en la nube suben un archivo a la vez. Si tienes 10.000 archivos pequeños, cada archivo requiere una conexión HTTP independiente: configuración, transferencia, verificación. La sobrecarga por archivo puede superar el tiempo real de transferencia.

**Solución**: Aumenta las transferencias paralelas. Rclone tiene un valor predeterminado de 4, pero muchas conexiones pueden manejar 8-16 o más.

### 2) Tamaños de fragmento pequeños

Los archivos grandes se suben en fragmentos. Si el tamaño del fragmento es demasiado pequeño, cada fragmento requiere su propia solicitud HTTP, añadiendo sobrecarga. Si es demasiado grande, un fragmento fallido significa volver a subir más datos.

**Solución**: Para conexiones estables, aumenta el tamaño del fragmento. Para Google Drive, prueba con 64M o 128M. Para S3, prueba con 16M-64M.

### 3) Límites de velocidad del proveedor

Los proveedores de almacenamiento en la nube limitan las subidas para prevenir abusos:

- **Google Drive**: límite de subida de ~750 GB/día.
- **OneDrive**: limitación tras un rendimiento alto sostenido.
- **Dropbox**: limitación progresiva bajo carga elevada.
- **S3**: 3.500 solicitudes PUT por segundo por prefijo.

**Solución**: Respeta los límites de velocidad ajustando las velocidades de transferencia. Usa la [limitación de ancho de banda](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview) para mantenerte por debajo de los umbrales.

### 4) Sin copia del lado del servidor

Al transferir entre dos nubes (por ejemplo, de S3 a S3), algunas herramientas descargan a tu equipo y luego vuelven a subir. Rclone admite la copia del lado del servidor para proveedores compatibles: los datos se mueven directamente entre nubes sin pasar por tu equipo.

**Solución**: RcloneView usa la copia del lado del servidor automáticamente cuando está disponible.

### 5) Comprobación de cada archivo

Antes de transferir, rclone comprueba si cada archivo ya existe en el destino. Con un gran número de archivos, esta fase de comprobación puede tardar más que la transferencia real.

**Solución**: Usa `--no-check-dest` para transferencias masivas iniciales. Usa la comprobación normal para sincronizaciones incrementales.

## Configuraciones de optimización de velocidad

### Transferencias paralelas

Aumenta el número de transferencias de archivos simultáneas:

| Escenario | Configuración recomendada |
|----------|-------------------|
| Predeterminado | 4 transferencias |
| Internet rápido (100+ Mbps) | 8-16 transferencias |
| Muchos archivos pequeños | 16-32 transferencias |
| Solo archivos grandes | 4-8 transferencias |

Más transferencias paralelas ayudan con muchos archivos pequeños. Para pocos archivos grandes, el tamaño del fragmento importa más.

### Tamaño de fragmento por proveedor

| Proveedor | Fragmento predeterminado | Recomendado |
|----------|--------------|-------------|
| Google Drive | 8 MB | 64-128 MB |
| OneDrive | 10 MB | 64 MB |
| S3 | 5 MB | 16-64 MB |
| Dropbox | 48 MB | 48-150 MB |

Fragmentos más grandes significan menos solicitudes HTTP y menos sobrecarga.

### Tamaño de búfer

Aumenta el búfer en memoria para una lectura más rápida:

- Predeterminado: 16 MB
- Recomendado: 64-256 MB (si tienes la RAM disponible)

Esto ayuda al leer desde fuentes lentas (NAS, discos duros mecánicos).

## Monitorea y mide

Rastrea la velocidad de transferencia en tiempo real para ver el efecto de tus cambios:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer speed in real time" class="img-large img-center" />

### Qué observar

- **Velocidad de transferencia** — Debería coincidir con un porcentaje razonable de tu velocidad de subida de internet.
- **Transferencias activas** — Debería coincidir con tu configuración de transferencias paralelas.
- **Errores** — Los errores de límite de velocidad (429, 403) significan que necesitas reducir la velocidad.
- **Comprobaciones frente a transferencias** — Si la comprobación tarda demasiado, considera omitirla para las subidas iniciales.

## Consejos específicos por proveedor

### Google Drive

- Configura el tamaño de fragmento a 64M o más.
- Mantén las transferencias paralelas en 4-8 (Google limita agresivamente por encima de esto).
- Si alcanzas el límite diario de 750 GB, programa las transferencias a lo largo de varios días.

### OneDrive / SharePoint

- Usa 4-8 transferencias paralelas.
- Un tamaño de fragmento de 64 MB funciona bien.
- OneDrive limita según el volumen total: distribuye las transferencias grandes a lo largo del tiempo.

### AWS S3

- S3 maneja bien un alto paralelismo — prueba con 16-32 transferencias.
- Usa la subida multiparte para archivos de más de 100 MB.
- Elige una región de S3 cercana a tu ubicación para menor latencia.

### Backblaze B2

- Admite un alto paralelismo — 16+ transferencias funcionan bien.
- El tamaño de fragmento no aplica (B2 usa su propia API de archivos grandes).
- Sin límites de transferencia diarios.

## Trabajos por lotes para flujos de trabajo optimizados

Con los Trabajos por Lotes de v1.3, encadena una secuencia de transferencia optimizada:

1. Transferencia masiva con configuraciones agresivas.
2. Comparación de verificación.
3. Notificación al completarse.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Batch optimized transfer workflow" class="img-large img-center" />

## Lista de verificación rápida

- **Aumenta las transferencias paralelas** — especialmente para muchos archivos pequeños.
- **Aumenta el tamaño de fragmento** — especialmente para archivos grandes.
- **Comprueba la velocidad de tu internet** — `speedtest-cli` para establecer una línea base de tu conexión.
- **Monitorea los límites de velocidad** — vigila los errores 429/403 en los registros de transferencia.
- **Usa la copia del lado del servidor** — al transferir entre nubes compatibles.
- **Programa las transferencias grandes** — fuera de horario para no afectar tu red.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajusta tus configuraciones de transferencia** en la configuración del trabajo.
3. **Monitorea la velocidad** en tiempo real.
4. **Ajusta e itera** — pequeños cambios pueden mejorar drásticamente el rendimiento.

Las configuraciones predeterminadas funcionan para la mayoría de las situaciones. Pero cuando estás moviendo terabytes, la optimización vale la pena rápidamente.

---

**Guías relacionadas:**

- [Configurar límites de ancho de banda](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)
- [Crear trabajos de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Programación de trabajos](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
