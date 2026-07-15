---
sidebar_position: 2
description: Aprenda a ejecutar automáticamente trabajos de sincronización en RcloneView usando opciones de programación flexibles. Requiere una licencia Plus.
keywords:
  - rcloneview
  - programación de trabajos
  - automatización de sincronización
  - sincronización programada
  - rclone
  - administrador de trabajos
  - sincronización en la nube
  - programador de trabajos
  - automatización de rclone
  - crontab
  - licencia plus
  - sincronización recurrente
tags:
  - RcloneView
  - Job-Manager
  - Scheduling
  - Sync
  - PLUS-Feature
  - automation
date: 2025-05-23
author: Jay
---
# Programación de trabajos y ejecución automatizada

La Programación de Trabajos le permite ejecutar Trabajos de Sincronización automáticamente en horarios e intervalos específicos.


:::important NECESITA UNA LICENCIA PLUS PARA PROGRAMAR TRABAJOS
Necesitará adquirir una [**licencia PLUS**](https://rcloneview.com/src/pricing.html) para habilitar esta funcionalidad.
:::


## Configurar la programación de trabajos

Puede configurar la programación al:

- Crear un nuevo trabajo ([Paso 4: Programación](/howto/rcloneview-basic/create-sync-jobs#step4-scheduling-available-with-plus-license))
- Editar un trabajo existente para agregar una programación

## Agregar o editar un trabajo para configurar la programación


Para abrir el **`Job Manager`**, haga clic en el icono de la barra de herramientas en el menú Inicio.  
Luego, haga clic en **`Add Job`** o **`Edit Job`**, y vaya a **Paso 4: Programación**.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-medium img-center" />
### **Cómo programar un trabajo**

1. Marque la casilla etiquetada **`Run whenever time units ~`** para habilitar la programación.
2. Configure el horario de repetición deseado usando los campos de Hora y Fecha.
3. Haga clic en **`Simulate`** para obtener una vista previa de cuándo se ejecutará el trabajo.
4. Después de confirmar que la programación es correcta, haga clic en **`Save`**.

  Una vez guardado, haga clic en el icono del calendario <img src="/support/icons/calendar-icon.png" alt="calendar icon" class="inline-icon" /> o en la **fecha programada** bajo **`Upcoming Schedule`** para revisar visualmente los horarios de ejecución configurados.

<img src="/support/images/en/howto/rcloneview-advanced/verify-job-schedule.png" alt="verify job schedule" class="img-medium img-center" />

<details>
<summary>Entendiendo los campos de Hora y Fecha</summary>

Entendiendo los campos de Hora y Fecha

**La configuración de la programación admite valores con estilo Crontab**, lo que permite una programación precisa y flexible para satisfacer una amplia gama de necesidades del usuario.

| Nombre del campo | Valores permitidos | Descripción                             |
| ------------ | -------------- | --------------------------------------- |
| Minute       | 0-59           | Minuto de la hora                      |
| Hour         | 0-23           | Hora del día                         |
| Day of Week  | 0-6            | 0 = domingo, 1 = lunes, …, 6 = sábado |
| Day of Month | 1-31           | Día del mes                                        |
| Month        | 1-12           | 1 es enero, 2 es febrero, y así sucesivamente. |

**Formatos aceptados:**

- **Valor vacío**: Coincide con cada unidad (por ejemplo, cada minuto si Minutes está en blanco).
- **n1, n2, ...**: Lista de valores (por ejemplo, 1,3,5 para lunes, miércoles, viernes).
- **n1-n2**: Rango de valores (por ejemplo, 0-2 significa 0, 1, 2).
- **n1-n2/n3**: Rango con incremento (por ejemplo, 6-12/3 significa 6, 9, 12).

Los campos — **Minute**, **Hour**, **Day of Week**, **Day of Month** y **Month** — funcionan juntos mediante una operación lógica **AND**. Esto significa que el trabajo se ejecutará solo cuando **todas** las condiciones se cumplan.

📌 Ejemplo: **Ejecutar un trabajo de sincronización a la 1:30 AM el primer domingo de cada mes**. 
Para lograr esta programación, configure los siguientes campos:

- **Hora (1:30 AM):**
    - **Minute:** 30
    - **Hour:** 1
    
- **Fecha (primer domingo de cada mes):**
    - **Day of Month:** 1-7 — coincide con los primeros siete días del mes
    - **Day of Week:** 0 — donde 0 representa el domingo
    - **Month:** _Dejar en blanco_ — se aplica a todos los meses

✅ Esta combinación asegura que el trabajo se ejecute **solo cuando la fecha esté dentro de la primera semana** y **caiga en domingo**, programándolo efectivamente para el primer domingo de cada mes a la 1:30 AM.

<img src="/support/images/en/howto/rcloneview-advanced/example-of-job-schedule.png" alt="example of job schedule" class="img-medium img-center" />

</details>


:::caution RcloneView debe estar en ejecución para los trabajos programados
Para que los trabajos programados se ejecuten correctamente, **RcloneView debe estar en ejecución** en segundo plano.  
Si su trabajo está configurado para usar un motor `rclone` externo, asegúrese de que la instancia externa de `rclone` también esté activa y en ejecución en el horario programado.  
:::

## Verificar los resultados de la programación de trabajos


### **Ver el historial de ejecución en el Job Manager**

  
Puede verificar tanto la hora de la ejecución más reciente (`Last execution`) como la próxima ejecución programada (`Upcoming Schedule`) en la ventana del **Job Manager**.

<img src="/support/images/en/howto/rcloneview-advanced/open-job-schedule-history.png" alt="open job schedule history" class="img-medium img-center" />
Para ver los detalles del historial de ejecución del trabajo:

- Abra el **Job Manager**.
- Haga clic en el **icono de historial** <img src="/support/icons/history-icon.png" alt="history icon" class="inline-icon" /> para abrir el historial de ejecución del trabajo seleccionado.
  

En la columna **`Execution Type`**, las entradas marcadas como `Scheduled` indican que el trabajo fue activado automáticamente por el programador.

<img src="/support/images/en/howto/rcloneview-advanced/view-history-of-scheduled-job.png" alt="view history of scheduled job" class="img-medium img-center" />


:::info Verifique los registros para múltiples destinos  
Si su trabajo incluye varios remotos de destino, haga clic en cada pestaña de destino individualmente en la vista de Historial para revisar los detalles del registro de cada objetivo.
:::


### Alarma de notificación de finalización (Windows)

Después de que el trabajo se complete, aparecerá una **ventana emergente de notificación** en la bandeja del sistema de Windows, mostrando un resumen de la operación de sincronización.

  - Puede hacer clic en **`See details`** para ver un desglose completo de los resultados.
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-windows-alarm.png" alt="sync completed windows alarm" class="img-medium img-center" />
:::tip Vea los mensajes de alarma en la notificación de Windows
Si se pierde la ventana emergente, aún puede verificar la alerta de sincronización haciendo clic en el **icono de notificación** en la **bandeja del sistema de Windows**.
<img src="/support/images/en/howto/rcloneview-basic/click-windows-alarm-notification.png" alt="click windows alarm notification" class="img-small img-left" />
:::
