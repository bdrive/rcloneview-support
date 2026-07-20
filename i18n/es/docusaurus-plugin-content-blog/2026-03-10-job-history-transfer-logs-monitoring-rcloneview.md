---
slug: job-history-transfer-logs-monitoring-rcloneview
title: "Controla las transferencias en la nube con el historial de tareas y los registros — Supervisa cada sincronización y copia de seguridad en RcloneView"
authors:
  - tayson
description: "Lleva el control de cada sincronización, copia y tarea de copia de seguridad en la nube con el historial de tareas y los registros de transferencia de RcloneView. Supervisa el éxito, los fallos y el rendimiento a lo largo del tiempo."
keywords:
  - historial de transferencias en la nube
  - registro de tareas de sincronización
  - supervisión de copias de seguridad en la nube
  - registro de transferencias en la nube
  - historial de tareas de rclone
  - supervisión de sincronización en la nube
  - seguimiento de tareas de copia de seguridad
  - estado de transferencia en la nube
  - registro de transferencias de rclone
  - herramienta de supervisión de tareas en la nube
tags:
  - RcloneView
  - monitoring
  - job-history
  - feature
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Controla las transferencias en la nube con el historial de tareas y los registros — Supervisa cada sincronización y copia de seguridad en RcloneView

> Programaste una copia de seguridad la semana pasada. ¿Realmente se ejecutó? ¿Se completó correctamente? ¿Cuántos archivos se transfirieron? Sin un historial de tareas, solo estás suponiendo. Con RcloneView, cada tarea deja un rastro.

Configurar la sincronización en la nube es el primer paso. Saber que funciona de forma fiable es el segundo, y posiblemente el más importante. El historial de tareas de RcloneView registra cada ejecución: cuándo se ejecutó, cuánto tardó, cuántos archivos se transfirieron y si se produjeron errores.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué importa el historial de tareas

### Fallos silenciosos

El peor fallo de una copia de seguridad es aquel que desconoces. Problemas silenciosos comunes:

- **Token de OAuth caducado** — El proveedor de la nube revocó el acceso y las tareas fallan silenciosamente.
- **Disco lleno** — El destino se quedó sin espacio a mitad de la transferencia.
- **Límite de velocidad** — El proveedor limitó las transferencias y algunos archivos se omitieron.
- **Tiempo de espera de red agotado** — La conectividad intermitente provocó transferencias parciales.

Sin el historial de tareas, estos problemas pasan desapercibidos hasta que necesitas restaurar, y descubres que tu "copia de seguridad" tiene meses de antigüedad.

### Cumplimiento normativo y auditoría

Algunos sectores requieren pruebas documentadas de que las copias de seguridad se realizaron. El historial de tareas proporciona:

- Marcas de tiempo de cada ejecución de tareas.
- Recuentos de archivos y volúmenes de transferencia.
- Estado de éxito o fallo.
- Detalles de errores para la resolución de problemas.

## El historial de tareas en RcloneView

### Ver ejecuciones pasadas

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history view" class="img-large img-center" />

Cada entrada muestra:

- **Nombre de la tarea** — Qué tarea de sincronización, copia o movimiento se ejecutó.
- **Hora de inicio** — Cuándo comenzó la ejecución.
- **Duración** — Cuánto tardó.
- **Estado** — Correcto, parcial o fallido.
- **Archivos transferidos** — Número de archivos movidos.
- **Volumen de datos** — Bytes totales transferidos.
- **Errores** — Número de errores (si los hay).

### Detectar tendencias

Con el tiempo, el historial de tareas revela patrones:

- **Duración creciente** — Tu conjunto de datos está creciendo o el rendimiento se está degradando.
- **Fallos intermitentes** — Problemas de red o del proveedor en días concretos.
- **Cero transferencias** — Nada cambió (esperado en sincronizaciones incrementales) o la tarea no está funcionando.
- **Picos de errores** — Límites de velocidad, problemas de permisos o almacenamiento lleno.

## Supervisión de transferencias en tiempo real

Mientras una tarea se está ejecutando, supervisa el progreso en vivo:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring" class="img-large img-center" />

La supervisión en vivo muestra:

- **Velocidad actual** — MB/s o GB/s.
- **Transferencias activas** — Número de operaciones de archivos en paralelo.
- **Progreso** — Porcentaje completado.
- **ETA** — Tiempo estimado restante.
- **Errores** — Recuentos de errores en tiempo real.

## Notificaciones de fallos

La v1.3 añade notificaciones de Slack, Discord y Telegram. Configura alertas para saber de inmediato cuando:

- Una tarea programada falla.
- Una tarea se completa con errores.
- Una tarea finaliza correctamente (confirmación opcional).

Esta es la diferencia entre "probablemente mi copia de seguridad se ejecutó" y "mi copia de seguridad definitivamente se ejecutó, recibí el mensaje de Slack".

## Resolución de problemas con los registros

Cuando una tarea falla, el registro de transferencia te indica exactamente por qué:

- **403 Forbidden** — Límite de velocidad o problema de permisos.
- **404 Not Found** — El archivo de origen se eliminó durante la transferencia.
- **429 Too Many Requests** — Limitación por parte del proveedor.
- **Timeout** — Problema de conectividad de red.
- **Disco lleno** — El destino se quedó sin espacio.

## Buenas prácticas

### Revisa el historial de tareas semanalmente

Dedica 2 minutos cada lunes a revisar las ejecuciones de tareas de la semana anterior. Detecta problemas antes de que se conviertan en crisis.

### Configura alertas de fallo

No confíes solo en comprobaciones manuales. Configura notificaciones de Slack o Discord para los fallos de tareas.

### Verifica después de los errores

Cuando una tarea reporta errores, haz un seguimiento con la Comparación de carpetas para identificar exactamente qué archivos faltan o son diferentes:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify after job errors" class="img-large img-center" />

### Reintenta las transferencias fallidas

La función de reintento de la v1.3 puede volver a ejecutar automáticamente las transferencias de archivos fallidas. Para fallos persistentes, investiga la causa raíz utilizando los registros.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Crea y programa tus tareas de sincronización o copia de seguridad**.
3. **Supervisa la ejecución** a través del historial de tareas.
4. **Configura notificaciones** para alertas de fallo.
5. **Revisa semanalmente** — confía, pero verifica.

Una copia de seguridad que no supervisas es una copia de seguridad en la que no puedes confiar.

---

**Guías relacionadas:**

- [Crear tareas de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Programación de tareas](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Comparar contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
