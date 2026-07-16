---
slug: fix-scheduled-sync-not-running-rcloneview
title: "Solucionar la sincronización programada que no se ejecuta — Diagnostica trabajos automatizados en la nube en RcloneView"
authors:
  - steve
description: "Diagnostica y soluciona los trabajos de sincronización programada de RcloneView que no se inician o se ejecutan a la hora equivocada. Cubre comprobaciones de licencia, sintaxis de cron, ajustes de inicio e inspección de registros."
keywords:
  - rcloneview scheduled sync not running
  - fix scheduled cloud backup rcloneview
  - rcloneview schedule troubleshooting
  - cloud sync cron job not starting
  - automated cloud backup not running
  - rcloneview plus schedule fix
  - fix cloud sync schedule
  - rcloneview crontab troubleshooting
tags:
  - troubleshooting
  - tips
  - automation
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar la sincronización programada que no se ejecuta — Diagnostica trabajos automatizados en la nube en RcloneView

> Si tu copia de seguridad automatizada de RcloneView deja de activarse según lo programado — o nunca se inicia — esta guía recorre en orden todas las causas probables, desde la verificación de la licencia hasta la sintaxis de cron y la configuración de inicio.

La sincronización basada en programación es una de las funciones PLUS más prácticas de RcloneView: configura un trabajo una vez y se ejecuta según un horario de crontab sin intervención manual. Cuando deja de funcionar, la causa raíz casi siempre es una de cuatro cosas: un problema de licencia, una programación mal configurada, que la aplicación no esté en ejecución cuando el trabajo debe activarse, o un error silencioso en el propio trabajo. Revisar cada capa de forma sistemática resuelve el problema en minutos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Comprobación 1: Confirma que tu licencia PLUS está activa

La sincronización basada en programación es exclusivamente una función de licencia PLUS o Lifetime. La licencia FREE no habilita la programación mediante crontab, y un trabajo guardado con una licencia FREE tendrá su programación inactiva de forma silenciosa. Revisa la barra inferior de la ventana de RcloneView — muestra "FREE License" o "PLUS License" junto a la versión de rclone y la información de conexión.

Si la licencia aparece como FREE o caducada, ve a **Help → Activate License** y vuelve a introducir tu dirección de correo electrónico y tu clave de licencia. Los cupones de descuento son de un solo uso por dirección de correo electrónico, así que un intento de activación duplicado con el mismo cupón no ampliará la suscripción — contacta con soporte si la clave parece inválida después de una renovación reciente.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Verifying a sync job is configured and ready to run in RcloneView" class="img-large img-center" />

Después de confirmar que PLUS está activo, vuelve a abrir el trabajo afectado en Job Manager y comprueba que el Paso 4 (programación) esté completado con valores reales en lugar de campos vacíos. Puede que un trabajo guardado previamente necesite editarse y volver a guardarse con PLUS activo para fijar la programación.

## Comprobación 2: Revisa la sintaxis de crontab en el Paso 4 del trabajo

El programador de RcloneView utiliza cinco campos de estilo crontab: **Minute** (0–59), **Hour** (0–23), **Day of Week** (0–6, domingo=0), **Day of Month** (1–31) y **Month** (1–12). Dejar un campo vacío significa "cada" — introducir un valor significa "solo este". La configuración incorrecta más común es introducir `0` en el campo equivocado o usar una combinación incompatible, como especificar tanto Day of Week como Day of Month de una forma que nunca coincide.

RcloneView incluye un botón **Simulate Schedule** directamente en el Paso 4. Haz clic en él para previsualizar las próximas ejecuciones antes de guardar. Si la vista previa muestra resultados inesperados — ejecutándose cada minuto, saltándose días esperados o sin mostrar ninguna ejecución próxima — ajusta los campos y simula de nuevo.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring crontab schedule fields in RcloneView Job Manager Step 4" class="img-large img-center" />

La sintaxis de lista (`1,3,5`), la sintaxis de rango (`1-5` para días laborables) y la sintaxis de paso (`0-23/4` para cada 4 horas) son compatibles. Un trabajo diario a medianoche, por ejemplo, usa Minute=`0`, Hour=`0`, con el resto de campos vacíos.

## Comprobación 3: Mantén RcloneView en ejecución a la hora programada

RcloneView debe estar **abierto y en ejecución** para que los trabajos programados se activen — no funciona como un servicio o demonio en segundo plano del sistema. Si el ordenador está en reposo, el usuario ha cerrado sesión o la aplicación se ha cerrado, cualquier programación que deba ejecutarse durante ese periodo se omitirá silenciosamente.

La solución es sencilla: activa **Launch at login** en **Settings → General** para que la aplicación se inicie automáticamente al arrancar el sistema operativo. Combínalo con **Start minimized** para que RcloneView se inicie en la bandeja del sistema sin interrumpir tu escritorio, mientras sigue ejecutando todos los trabajos programados en segundo plano.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView running a scheduled sync transfer in the background" class="img-large img-center" />

Si la máquina de destino se apaga habitualmente durante la noche, considera ajustar la programación al horario laboral o configurar el sistema operativo para que se despierte del reposo antes de la hora prevista del trabajo.

## Comprobación 4: Inspecciona el historial de trabajos y los registros de transferencia

Si un trabajo pareció ejecutarse pero no produjo ninguna salida, la pestaña **Job History** en la vista de información inferior es el primer lugar donde mirar. Registra cada ejecución con Status (Completed / Errored / Canceled), Time Spent, Transfer Speed y File Count. Filtra el historial para mostrar solo las entradas "Errored" y así identificar las ejecuciones fallidas. Cada registro enlaza con el resultado de registro asociado, que identifica el fallo específico: tiempo de espera de red, error de autenticación, ruta no encontrada o un problema de permisos en el destino.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing scheduled sync execution records and status" class="img-large img-center" />

Para un diagnóstico más profundo, activa **Enable rclone Logging** en **Settings → Embedded Rclone** y ajusta el nivel de registro a **INFO** o **DEBUG**. Cuando el trabajo se ejecute de nuevo (o se active manualmente), el archivo de registro capturará la salida completa de rclone — incluido el código de error exacto y el archivo que causó el fallo — lo que facilita el análisis de la causa raíz incluso en problemas intermitentes.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Revisa la barra inferior — se requiere licencia PLUS para la programación mediante crontab.
3. Abre el trabajo afectado → Edit → Step 4, y usa Simulate Schedule para verificar la sintaxis de cron.
4. Activa **Launch at login** y **Start minimized** en Settings → General.
5. Revisa Job History en busca de ejecuciones con errores, y activa el registro de rclone para un diagnóstico detallado.

Un diagnóstico sistemático a través de estas cuatro capas resuelve casi todos los fallos de sincronización programada rápidamente — sin necesidad de conjeturas.

---

**Guías relacionadas:**

- [Automatiza copias de seguridad diarias en la nube con RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [Mejores prácticas de programación — Cron, reintentos y monitorización en RcloneView](https://rcloneview.com/support/blog/schedule-best-practices-cron-retry-rcloneview)
- [Historial de trabajos y registros de transferencia — Monitorización en RcloneView](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
