---
slug: set-bandwidth-limits-cloud-transfers-rcloneview
title: "Cómo establecer límites de ancho de banda para transferencias en la nube en RcloneView"
authors:
  - tayson
description: "Controla cuánto ancho de banda usan los trabajos de sincronización y copia de seguridad en la nube — evita ralentizaciones de la red durante el horario laboral y maximiza la velocidad durante la noche con la configuración de limitación de RcloneView."
keywords:
  - rclone bandwidth limit
  - cloud transfer speed limit
  - throttle cloud sync
  - rcloneview bandwidth control
  - limit upload speed rclone
  - cloud backup bandwidth
  - rclone bwlimit
  - network throttle cloud sync
  - control cloud transfer speed
  - rcloneview transfer settings
tags:
  - RcloneView
  - cloud-storage
  - performance
  - tips
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cómo establecer límites de ancho de banda para transferencias en la nube en RcloneView

> ¿Estás ejecutando una sincronización masiva en la nube durante el horario laboral? Tu equipo lo notará. Aquí te explicamos cómo limitar el ancho de banda para que las copias de seguridad se ejecuten sin arruinar el internet de todos.

Los trabajos de sincronización y copia de seguridad en la nube pueden saturar tu conexión de red, ralentizando videollamadas, navegación web y otras tareas críticas. Esto es especialmente problemático en entornos de oficina, oficinas domésticas con conexiones compartidas, o al sincronizar terabytes de datos. RcloneView te permite establecer límites de ancho de banda precisos para que tus transferencias en la nube se ejecuten en segundo plano sin interrumpir tu red.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué importan los límites de ancho de banda

### Redes compartidas

En una oficina con una conexión de 100 Mbps, un único trabajo de sincronización sin limitar puede consumir más de 80 Mbps, dejando casi nada para el resto del equipo.

### Oficina en casa

Las videollamadas necesitan entre 5 y 10 Mbps aproximadamente. Si tu trabajo de copia de seguridad consume todo el ancho de banda disponible, tu llamada de Zoom se degrada a calidad pésima.

### Políticas de uso justo de los ISP

Algunos proveedores de internet limitan o cobran extra por un uso sostenido de alto ancho de banda. Limitar las transferencias en la nube evita facturas inesperadas o ralentizaciones.

### Límites de tasa del proveedor de la nube

Algunos proveedores (especialmente Google Drive) limitan o devuelven errores cuando las transferencias son demasiado rápidas. Limitar el ancho de banda te mantiene dentro de límites seguros.

## Cómo establecer límites de ancho de banda

### Método 1: Límite de ancho de banda por trabajo

Al crear o editar un trabajo en RcloneView, añade el indicador de límite de ancho de banda en las opciones de rclone:

- **`--bwlimit 10M`** — Limita a 10 MB/s (megabytes por segundo)
- **`--bwlimit 50M`** — Limita a 50 MB/s
- **`--bwlimit 1M`** — Limita a 1 MB/s (ideal para una sincronización lenta en segundo plano)

### Método 2: Programación de ancho de banda por horario

rclone admite límites de ancho de banda basados en el horario; usa distintas velocidades en distintos momentos del día:

```
--bwlimit "08:00,5M 18:00,50M 23:00,off"
```

Esto significa:
- **8:00 – 18:00**: Limitado a 5 MB/s (horario laboral, impacto mínimo)
- **18:00 – 23:00**: Limitado a 50 MB/s (noche, más disponibilidad)
- **23:00 – 8:00**: Sin límite (madrugada, velocidad máxima)

Este es el punto óptimo para la mayoría de los usuarios: las transferencias se ejecutan las 24 horas, pero solo van a máxima velocidad cuando la red está inactiva.

### Método 3: Límites de subida frente a descarga

Establece límites diferentes para subida y descarga:

```
--bwlimit "10M:5M"
```

Esto limita las subidas a 10 MB/s y las descargas a 5 MB/s. Útil cuando tu ISP tiene velocidades asimétricas (algo común en conexiones de cable y DSL).

## Ejemplos prácticos

### Oficina en casa con conexión de 100 Mbps

```
--bwlimit "09:00,2M 17:00,off"
```
- Durante el horario laboral: 2 MB/s (apenas perceptible junto con videollamadas)
- Fuera de horario: Sin límite

### Oficina pequeña con conexión compartida de 50 Mbps

```
--bwlimit "08:00,3M 18:00,25M 22:00,off"
```
- Horario comercial: 3 MB/s (deja 47 Mbps para el personal)
- Noche: 25 MB/s (media capacidad)
- Madrugada: Velocidad máxima

### Migración grande durante un fin de semana

```
--bwlimit off
```
- Sin límites: maximiza la velocidad de transferencia durante las ventanas de mantenimiento.

## Combinar con la programación de trabajos

El enfoque más eficaz: programar **trabajos pesados por la noche sin límite de ancho de banda** y **trabajos ligeros durante el día con límites estrictos**.

1. Crea dos versiones de tu trabajo de sincronización:
   - **Trabajo diurno**: `--bwlimit 5M` — se ejecuta al mediodía para una sincronización incremental rápida
   - **Trabajo nocturno**: sin límite de ancho de banda — se ejecuta a las 2:00 para transferencias pesadas
2. Programa ambos con [Programación de trabajos](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution).

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule transfers with different bandwidth limits" class="img-large img-center" />

## Monitorear la velocidad real

Utiliza el monitoreo de transferencias en tiempo real para verificar que tus límites de ancho de banda están funcionando:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer speed with bandwidth limits" class="img-large img-center" />

La visualización de velocidad de transferencia debería mostrar valores iguales o inferiores a tu límite configurado. Si observas velocidades más bajas que tu límite, el cuello de botella está en otro lugar (la red, la API del proveedor, la velocidad del disco).

## Referencia rápida

| Escenario | Configuración | Efecto |
|----------|---------|--------|
| Sincronización ligera en segundo plano | `--bwlimit 2M` | Apenas perceptible |
| Transferencias moderadas | `--bwlimit 10M` | Visible pero manejable |
| Solo horario laboral | `--bwlimit "09:00,5M 17:00,off"` | Limitado durante el trabajo |
| Con mucha subida | `--bwlimit "20M:5M"` | 20M subida, 5M descarga |
| Sin límite | `--bwlimit off` u omitir | Velocidad máxima |

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Añade tus remotos** y crea un trabajo de sincronización/copia.
3. **Añade `--bwlimit`** a los indicadores de rclone del trabajo.
4. **Prueba y monitorea** para encontrar el equilibrio adecuado.
5. **Combina con la programación** para obtener lo mejor de ambos mundos.

Las transferencias rápidas son buenas. Pero las transferencias que no arruinan las videollamadas de tu equipo son mejores.

---

**Guías relacionadas:**

- [Acelerar transferencias grandes en la nube](https://rcloneview.com/support/blog/accelerate-large-cloud-transfers-rcloneview)
- [Crear trabajos de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Programación de trabajos](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Monitoreo de transferencias en tiempo real](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [Solucionar errores de límite de tasa de Google Drive](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors-rcloneview)

<CloudSupportGrid />
