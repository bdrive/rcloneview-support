---
slug: cloud-api-rate-limits-explained-rcloneview
title: "Límites de tasa de las API en la nube explicados — Por qué fallan tus transferencias y cómo solucionarlo"
authors:
  - tayson
description: "¿Errores 403 en Google Drive? ¿Limitación de OneDrive? Descubre qué son los límites de tasa de las API en la nube, por qué interrumpen tus transferencias y cómo configurar RcloneView para evitarlos."
keywords:
  - cloud api rate limit
  - google drive 403 error
  - onedrive throttling
  - s3 rate limit
  - cloud transfer failed
  - api rate limit exceeded
  - cloud sync error fix
  - google drive quota exceeded
  - dropbox rate limit
  - cloud storage api limits
tags:
  - troubleshooting
  - api
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Límites de tasa de las API en la nube explicados — Por qué fallan tus transferencias y cómo solucionarlo

> Tu sincronización en la nube empieza con fuerza y, de repente, se ralentiza hasta detenerse casi por completo. Aparecen mensajes de error: "Rate limit exceeded", "403 Forbidden", "Too many requests". Tu transferencia se estanca en el 60%. ¿Qué está pasando?

Todos los proveedores de almacenamiento en la nube limitan la velocidad con la que puedes interactuar con su API. Estos límites de tasa protegen su infraestructura de abusos, pero también afectan a los usuarios legítimos que mueven grandes cantidades de datos. Entender estos límites — y configurar tus herramientas para respetarlos — marca la diferencia entre transferencias que se completan de forma fiable y transferencias que fallan a mitad de camino.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ¿Qué son los límites de tasa de las API?

Cuando subes, descargas, listas o modificas archivos en el almacenamiento en la nube, tu herramienta realiza llamadas a la API. Cada operación consiste en una o varias solicitudes a la API. Los límites de tasa limitan cuántas solicitudes puedes hacer en un período de tiempo determinado.

### Tipos de límites

- **Solicitudes por segundo** — Cuántas llamadas a la API por segundo (p. ej., S3: 3.500 solicitudes PUT/segundo por prefijo).
- **Solicitudes por día** — Total de llamadas diarias a la API (p. ej., Google Drive: ~10 mil millones de consultas/día para aplicaciones, pero mucho menos por usuario).
- **Ancho de banda por día** — Volumen total de datos (p. ej., Google Drive: ~750 GB de subida/día).
- **Conexiones simultáneas** — Cuántas conexiones simultáneas se permiten.
- **Límites de ráfaga** — Picos a corto plazo permitidos antes de que se active la limitación.

## Límites de tasa por proveedor

### Google Drive

| Límite | Valor |
|-------|-------|
| Subida por día | ~750 GB |
| Descarga por día | ~10 TB |
| Consultas de API por cada 100 segundos | 1.000 por usuario |
| Operaciones de archivo por segundo | ~10 |
| Código de error | 403 (userRateLimitExceeded), 429 |

Google Drive es uno de los proveedores con límites de tasa más agresivos. Si ves `403` o `userRateLimitExceeded`, has chocado con el límite.

### OneDrive / SharePoint

| Límite | Valor |
|-------|-------|
| Llamadas a la API | Limitación dinámica |
| Subidas simultáneas | ~4 recomendadas |
| Código de error | 429 (Too Many Requests), 503 |

Microsoft utiliza limitación dinámica — los límites se endurecen a medida que aumenta tu uso dentro de una sesión.

### AWS S3

| Límite | Valor |
|-------|-------|
| PUT/COPY/POST/DELETE | 3.500 por segundo por prefijo |
| GET/HEAD | 5.500 por segundo por prefijo |
| Sin límite de ancho de banda diario | Ilimitado |
| Código de error | 503 (Slow Down) |

S3 es el más generoso. La mayoría de los usuarios nunca alcanzan los límites de tasa a menos que realicen miles de operaciones con archivos pequeños.

### Dropbox

| Límite | Valor |
|-------|-------|
| Llamadas a la API | ~300 por minuto para aplicaciones |
| Subida por sesión | Limitación progresiva |
| Código de error | 429 |

### Backblaze B2

| Límite | Valor |
|-------|-------|
| Llamadas a la API | Según el plan |
| Subidas simultáneas | Sin límite estricto |
| Ancho de banda | Pago por uso, sin tope |

B2 es muy permisivo — los límites de tasa rara vez son un problema.

## Cómo gestiona RcloneView los límites de tasa

### Reintento automático

Cuando rclone recibe un error de límite de tasa (429, 403, 503), automáticamente:

1. Pausa la transferencia afectada.
2. Espera el tiempo especificado por el servidor (o usa backoff exponencial).
3. Reintenta la operación.

Verás esto en el registro de transferencia como "rate limited, waiting X seconds".

### Transferencias paralelas configurables

Reduce las transferencias paralelas para disminuir tu tasa de solicitudes a la API:

| Proveedor | Transferencias paralelas recomendadas |
|----------|-------------------------------|
| Google Drive | 3–4 |
| OneDrive | 4 |
| Dropbox | 3–4 |
| S3 | 8–32 |
| B2 | 8–16 |

### Limitación de ancho de banda

Usa los [límites de ancho de banda](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview) para controlar la velocidad de datos y reducir indirectamente las llamadas a la API.

### Reintento de transferencias fallidas en v1.3

Si las transferencias fallan a pesar de la gestión de límites de tasa, la función de reintento de v1.3 puede volver a ejecutar los archivos fallidos después de que finalice el trabajo.

## Estrategias para evitar los límites de tasa

### 1) Transferir fuera de horas punta

Programa las transferencias grandes para las noches y los fines de semana, cuando otros usuarios (y tus propias aplicaciones) no estén haciendo llamadas a la API:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule transfers during off-hours" class="img-large img-center" />

### 2) Distribuir en varios días

Para migraciones que superan el límite diario de subida de 750 GB de Google Drive:

- Día 1: Transferir la carpeta A (500 GB).
- Día 2: Transferir la carpeta B (500 GB).
- Día 3: Transferir la carpeta C + verificar todo.

### 3) Usar tus propias credenciales de API

Google Drive y algunos otros proveedores permiten límites de tasa más altos cuando usas tus propias credenciales de aplicación OAuth en lugar de las compartidas. Configura tu propio proyecto de API de Google para obtener cuotas más altas.

### 4) Reducir la verificación de archivos

Para las subidas masivas iniciales, omite la verificación del destino. Esto elimina la mitad de tus llamadas a la API (las que comprueban si cada archivo ya existe).

### 5) Agrupar archivos pequeños

Si tienes miles de archivos pequeños, considera comprimirlos en ZIPs antes de transferirlos. Un ZIP de 1 GB hace 1 llamada a la API en lugar de 10.000 subidas de archivos individuales que hacen 10.000 llamadas.

## Supervisa posibles problemas de límite de tasa

Vigila el progreso de tu transferencia en busca de señales de limitación:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor for rate limit errors" class="img-large img-center" />

Señales de advertencia:

- La velocidad de transferencia cae de repente después de empezar con fuerza.
- Pausas periódicas en la transferencia.
- Mensajes de error en el registro con códigos 429 o 403.
- La velocidad de transferencia oscila (rápida → lenta → rápida).

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Configura las transferencias paralelas adecuadas** para tu proveedor de nube.
3. **Programa las transferencias grandes** fuera de horas punta.
4. **Supervisa el progreso** y vigila los indicadores de limitación.
5. **Usa el reintento** (v1.3) para mayor fiabilidad.

Los límites de tasa no van a desaparecer — pero con la configuración adecuada, puedes trabajar dentro de ellos de forma fiable.

---

**Guías relacionadas:**

- [Solucionar errores 403 por límite de tasa en Google Drive](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors-rcloneview)
- [Establecer límites de ancho de banda](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)
- [Programación de trabajos](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
