---
slug: multi-threaded-transfers-parallel-streams-rcloneview
title: "Acelera las transferencias en la nube: cargas multihilo y flujos paralelos en RcloneView"
authors:
  - tayson
description: "Las transferencias a la nube no tienen por qué ser lentas. Aprende a usar cargas multihilo, transferencias de archivos en paralelo y ajustes de optimización de transferencias en RcloneView para maximizar el rendimiento."
keywords:
  - carga en la nube multihilo
  - transferencia paralela en la nube
  - acelerar sincronización en la nube
  - transferencias paralelas de rclone
  - carga rápida en la nube
  - optimización de transferencias en la nube
  - velocidad de transferencia de rcloneview
  - cargas concurrentes en la nube
  - carga multiflujo
  - maximizar velocidad de transferencia en la nube
tags:
  - RcloneView
  - performance
  - feature
  - guide
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Acelera las transferencias en la nube: cargas multihilo y flujos paralelos en RcloneView

> Subir 500 GB a S3 archivo por archivo puede tardar días. Con transferencias en paralelo y cargas multihilo, puede tardar horas. Así se configura RcloneView para obtener la máxima velocidad.

Por defecto, las herramientas de transferencia a la nube procesan los archivos de forma secuencial y suben cada archivo en un único flujo. Esto apenas aprovecha lo que tu red y el proveedor de la nube pueden manejar. RcloneView, impulsado por rclone, admite tanto transferencias de archivos en paralelo (varios archivos simultáneamente) como cargas multihilo (dividir archivos grandes en flujos concurrentes). Configurar esto correctamente puede reducir drásticamente los tiempos de transferencia.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dos tipos de paralelismo

### Transferencias de archivos en paralelo

Transfiere varios archivos al mismo tiempo. En lugar de subir el archivo 1, luego el archivo 2 y luego el archivo 3, sube los tres simultáneamente. Esto se controla con el ajuste `--transfers` (por defecto: 4).

### Cargas multihilo de un solo archivo

Divide un archivo grande en varios fragmentos y los sube de forma concurrente. Un archivo de video de 10 GB se divide en partes, cada una se sube en paralelo y luego se reensambla en el destino. Esto se controla con `--multi-thread-streams` (por defecto: 4).

## Cómo configurarlo en RcloneView

### Ajustar las transferencias en paralelo

En la configuración de tu trabajo o mediante la terminal de RcloneView, establece el número de transferencias de archivos concurrentes:

- **4 transferencias** (por defecto): segura para la mayoría de las situaciones
- **8-16 transferencias**: buena para conexiones rápidas con muchos archivos pequeños
- **2-4 transferencias**: mejor para conexiones lentas o proveedores con límites de tasa estrictos

### Ajustar los flujos multihilo

Para cargas de archivos grandes, aumenta el número de flujos:

- **4 flujos** (por defecto): rendimiento equilibrado
- **8-16 flujos**: óptimo para archivos grandes en conexiones rápidas
- **1 flujo**: úsalo para proveedores que no admiten cargas multiparte

## Supervisa el impacto

Observa la velocidad de transferencia en tiempo real para ver el efecto de tus cambios:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer speed" class="img-large img-center" />

## Ajustes óptimos por escenario

| Escenario | Transferencias | Flujos | Por qué |
|----------|-----------|---------|-----|
| Muchos archivos pequeños (fotos, documentos) | 16 | 1 | La sobrecarga por archivo domina; más archivos en paralelo ayuda |
| Pocos archivos grandes (videos, copias de seguridad) | 2-4 | 8-16 | La velocidad de un solo archivo importa; más flujos ayuda |
| Tamaños de archivo mixtos | 8 | 4 | Enfoque equilibrado |
| Red lenta (< 50 Mbps) | 2-4 | 2-4 | Evita saturar la conexión |
| Red rápida (> 500 Mbps) | 16+ | 8-16 | Aprovecha todo el ancho de banda disponible |
| Proveedor con límites de tasa | 2-4 | 4 | Mantente por debajo de los límites de la API |

## Consejos específicos por proveedor

### Google Drive
Google impone límites diarios de carga (750 GB) y límites de API por segundo. Mantén las transferencias en un nivel moderado (4-8) y usa `--tpslimit` para mantenerte dentro de los límites de tasa.

### S3 / Compatible con S3
S3 maneja bien un alto paralelismo. Aumenta las transferencias a 16+ y los flujos a 8-16 para obtener el máximo rendimiento.

### OneDrive
OneDrive puede ser sensible a una alta concurrencia. Empieza con 4 transferencias y auméntalas de forma gradual.

### Backblaze B2
B2 maneja bien las cargas multiparte. Usa entre 4 y 8 transferencias con 4 a 8 flujos.

## Usar la terminal de RcloneView para un ajuste fino

Para un ajuste avanzado, usa la terminal integrada para ejecutar comandos de rclone con indicadores específicos. Prueba distintas configuraciones y mide los resultados con la supervisión en tiempo real.

## Revisa el historial de trabajos para ver los resultados

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Review transfer performance" class="img-large img-center" />

Compara la duración de los trabajos antes y después de la optimización. El historial de trabajos muestra el tiempo total, los archivos transferidos y la velocidad media.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Empieza con los valores por defecto** (4 transferencias, 4 flujos).
3. **Supervisa la velocidad** durante las transferencias.
4. **Aumenta gradualmente** según tu red y tu proveedor.
5. **Compara el historial de trabajos** para medir la mejora.

Más paralelismo significa transferencias más rápidas, hasta los límites de tu red y tu proveedor.

---

**Guías relacionadas:**

- [Solucionar cargas lentas en la nube](https://rcloneview.com/support/blog/fix-slow-cloud-uploads-speed-optimization-rcloneview)
- [Establecer límites de ancho de banda](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)
- [Historial de trabajos y registros](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
