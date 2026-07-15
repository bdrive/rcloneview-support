---
sidebar_position: 11
description: "Realice un seguimiento de las operaciones de archivos activas y completadas, como Sync, Copy y Delete, en RcloneView mediante la interfaz de Job Monitor."
keywords:
  - rcloneview
  - Job Monitor
  - Transfer Log
  - Rclone API Logs
  - transferencia de archivos
  - progreso de sincronización
  - registros de trabajos
tags:
  - RcloneView
  - Job-Management
  - Monitoring
  - Transfer-log
  - Completed-log
  - API-log
  - Sync
date: 2025-06-22
author: Jay
---
# Job Monitor

RcloneView ofrece una interfaz de **Job Monitor** que ayuda a los usuarios a rastrear, revisar y gestionar el estado de las operaciones de archivos en curso y completadas, como Sync, Copy y Delete. La interfaz consta de tres pestañas principales:

## Pestaña Transfer - Trabajos en curso

<img src="/support/images/en/howto/rcloneview-basic/transfer-log.png" alt="transfer log" class="img-medium img-center" />
Esta pestaña muestra todos los trabajos de transferencia de archivos actualmente activos.

**Columnas:**
- **Job**: Indica el tipo de operación (por ejemplo, Sync, Copy, Delete).
- **Source / Destination**: Muestra la ruta de origen y destino.
- **Received Size**: Cantidad de datos transferidos / tamaño total.
- **Speed**: Velocidad de transferencia actual.
- **Progress**: Barra de progreso visual del trabajo actual.
- **Percentage**: Porcentaje de finalización de la transferencia.
- **Time Left**: Tiempo restante estimado.
- **Job ID**: ID interno utilizado para hacer referencia a este trabajo.
- **Cancel**: Haga clic en el icono ❌ para cancelar el trabajo en curso.

## Pestaña Completed - Historial de trabajos

<img src="/support/images/en/howto/rcloneview-basic/completed-log.png" alt="completed log" class="img-medium img-center" />
Esta pestaña enumera todos los trabajos ejecutados previamente y sus resultados.

**Columnas:**
- **Job**: El tipo de operación (Sync, Copy, Delete, etc.).
- **Source / Destination**: Ruta de origen y destino.
- **Status**: Estado del resultado (por ejemplo, Success, Errors).
- **Started At**: Hora de inicio del trabajo.
- **Time Spent**: Duración total del trabajo.
- **Files**: Número de archivos transferidos.
- **Size**: Tamaño total de los datos.
- **Speed**: Velocidad de transferencia promedio.
- **Job ID**: Referencia interna del trabajo.
- **Delete**: icono <img src="/support/icons/delete-files.png" alt="delete files" class="inline-icon" /> para eliminar el registro.

## Pestaña Log - Registros de comunicación con la API

<img src="/support/images/en/howto/rcloneview-basic/log-tab.png" alt="log tab" class="img-medium img-center" />

Esta pestaña muestra los registros internos de la comunicación de RcloneView con la API de Rclone.

**Columnas:**
- **Time**: Marca de tiempo de la solicitud de operación.
- **Event Type**: Nivel de registro (por ejemplo, INFO, ERROR).
- **Job Type**: El tipo de operación (Sync, Copy, Delete, etc.).
- **Message**: Resultado de la operación.
- **Details**: Metadatos internos adicionales (por ejemplo, el ID del trabajo en formato JSON).

Utilice esta pestaña para la resolución de problemas o para revisar las interacciones a nivel de sistema.

:::tip
- Cada registro de trabajo está vinculado entre las pestañas mediante su **Job ID**.
- Los registros se actualizan automáticamente en tiempo real.
- Las pestañas Completed y Log conservan el historial incluso después de reiniciar la aplicación, a menos que se elimine manualmente.
:::
