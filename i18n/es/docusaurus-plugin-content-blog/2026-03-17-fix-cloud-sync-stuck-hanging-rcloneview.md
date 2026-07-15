---
slug: fix-cloud-sync-stuck-hanging-rcloneview
title: "Solucionar la sincronización en la nube atascada al 99% o congelada — Cómo resolver transferencias detenidas en RcloneView"
authors:
  - tayson
description: "Tu sincronización en la nube lleva horas ejecutándose pero parece atascada. El progreso muestra 99% pero no se completa. Esto es lo que causa las transferencias detenidas y cómo solucionarlas."
keywords:
  - sincronización en la nube atascada
  - transferencia en la nube congelada
  - sincronización atascada al 99 por ciento
  - subida a la nube congelada
  - transferencia rclone atascada
  - sincronización en la nube que no se completa
  - solucionar transferencia en la nube detenida
  - tiempo de espera agotado en sincronización en la nube
  - subida a la nube colgada
  - sincronización rclone congelada
tags:
  - RcloneView
  - troubleshooting
  - performance
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar la sincronización en la nube atascada al 99% o congelada — Cómo resolver transferencias detenidas en RcloneView

> La barra de progreso dice 99%. Lleva 45 minutos diciendo 99%. ¿Está funcionando? ¿Está atascada? ¿Deberías cancelarla? Así se diagnostican y solucionan las transferencias en la nube detenidas.

Las transferencias en la nube detenidas son uno de los problemas más frustrantes en la sincronización en la nube. El trabajo parece estar en ejecución, el indicador de progreso apenas se mueve, y no estás seguro de si esperar o reiniciar. La buena noticia: las transferencias detenidas casi siempre tienen una causa específica y solucionable.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Causas comunes

### 1) Archivo grande casi completo

La "falsa alarma" más común. Un archivo de 50 GB al 98% completado todavía tiene 1 GB restante. A 10 MB/s, eso son otros 100 segundos, pero la barra de progreso apenas se mueve porque mide la cantidad de archivos, no los bytes.

**Solución**: Supervisa el indicador de velocidad de transferencia. Si los bytes siguen fluyendo, la transferencia está funcionando; solo va lenta en el último archivo grande.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Check if bytes are flowing" class="img-large img-center" />

### 2) Limitación por límite de tasa de la API

Google Drive, OneDrive y otros proveedores limitan las transferencias cuando alcanzas los límites de la API. La transferencia se ralentiza hasta casi detenerse, pero no falla.

**Solución**: Reduce las transferencias simultáneas. Añade `--tpslimit` mediante la terminal integrada.

### 3) Tiempo de espera de red agotado en archivo grande

Algunos proveedores desconectan silenciosamente las subidas de larga duración. La transferencia parece activa pero no se mueven datos.

**Solución**: Configura los tiempos de espera en la configuración de tu remoto. Usa `--timeout` para detectar bloqueos antes.

### 4) Archivo bloqueado por otro proceso

El archivo de origen está abierto en otra aplicación. La transferencia espera a obtener acceso.

**Solución**: Cierra las aplicaciones que puedan estar usando el archivo, o excluye los archivos en uso activo mediante filtros.

### 5) Procesamiento por parte del proveedor

Algunos proveedores procesan los archivos subidos (análisis antivirus, indexación) antes de confirmar la finalización. Esto crea una brecha entre la finalización de la subida y su confirmación.

**Solución**: Espera. Esto normalmente se resuelve en 1-5 minutos.

### 6) Agotamiento de memoria

Las listas de transferencia muy grandes (millones de archivos) pueden agotar la memoria disponible, provocando que el proceso se ralentice drásticamente.

**Solución**: Divide la transferencia en lotes más pequeños por carpeta.

## Pasos de diagnóstico

### Revisar el historial de trabajos

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Check job status" class="img-large img-center" />

### Usar la terminal para obtener salida detallada

Ejecuta la misma operación desde la terminal de RcloneView con la opción `-vv` para obtener una salida de diagnóstico detallada.

### Cancelar y volver a ejecutar

Si la transferencia realmente está atascada, cancela y vuelve a ejecutar el trabajo. RcloneView omite los archivos ya transferidos y reanuda desde el punto donde se detuvo.

## Prevención

- **Establece tiempos de espera razonables** en la configuración del remoto
- **Usa una concurrencia moderada** (4-8 transferencias) para evitar límites de tasa
- **Divide los trabajos grandes** en lotes más pequeños
- **Programa reintentos** — si un trabajo nocturno se detiene, una segunda ejecución programada se pondrá al día

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Comprueba la velocidad de transferencia** — si los bytes fluyen, está funcionando.
3. **Reduce la concurrencia** si hay limitación de tasa.
4. **Cancela y vuelve a ejecutar** si realmente está atascada.

Un 99% completado y atascado casi siempre es el último archivo grande terminando lentamente.

---

**Guías relacionadas:**

- [Solucionar subidas a la nube lentas](https://rcloneview.com/support/blog/fix-slow-cloud-uploads-speed-optimization-rcloneview)
- [Reanudar transferencias fallidas](https://rcloneview.com/support/blog/resume-failed-cloud-transfers-rcloneview)
- [Límites de tasa de la API en la nube explicados](https://rcloneview.com/support/blog/cloud-api-rate-limits-explained-rcloneview)

<CloudSupportGrid />
