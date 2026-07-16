---
slug: rcloneview-telegram-remote-control
title: "Control remoto de RcloneView por Telegram: gestiona tus tareas en la nube desde tu teléfono"
authors:
  - tayson
description: "Recibe alertas instantáneas de tareas e inicia, detén o consulta las tareas de RcloneView directamente desde Telegram con un bot seguro y unos pocos comandos sencillos."
keywords:
  - rcloneview telegram
  - rclone telegram bot
  - rclone remote control
  - rcloneview notifications
  - mobile job control
  - rclone chatops
  - cloud backup alerts
  - remote job management
  - rcloneview job status
  - rclone cli telegram
tags:
  - job-management
  - security
  - automation
---


import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Control remoto de RcloneView por Telegram: gestiona tus tareas en la nube desde tu teléfono

> Convierte RcloneView en una consola de chatops: recibe alertas de tareas, lista tareas y arráncalas o detenlas desde Telegram, incluso cuando estás lejos de tu PC.

Con el Control Remoto por Telegram, RcloneView envía a tu teléfono alertas de inicio, finalización y error de las tareas, y acepta comandos de chat sencillos para ejecutar o detener tareas. Es perfecto para copias de seguridad largas, sincronizaciones nocturnas o servidores sin interfaz gráfica donde de todos modos quieres un control rápido.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Qué puedes hacer desde Telegram

- Recibir notificaciones: tarea iniciada, tarea completada, tarea con error.
- Listar las tareas disponibles.
- Iniciar tareas por nombre o por índice.
- Detener tareas en ejecución.
- Consultar el progreso y el estado de una tarea cuando lo necesites.

RcloneView debe estar en ejecución (de escritorio o sin interfaz gráfica) para procesar comandos de Telegram.

## Requisitos previos

- RcloneView instalado y en ejecución.
- Cuenta de Telegram.
- Conectividad a Internet.
- Permiso para crear un bot de Telegram (a través de BotFather).

## Crea tu bot de Telegram (BotFather)

1. Abre Telegram, busca **BotFather** y abre el chat.  
   <img src="/support/images/en/tutorials/telegram/telegram-botfather-search.jpg" alt="telegram botfather search" class="img-large img-center" />

2. Crea el bot: define un **Bot Name** (nombre del bot) y un **Bot Username** (nombre de usuario del bot) que termine en `bot`.  
   Ejemplo: `RcloneView_test_bot` / `rcloneview_test_bot`.  
   <img src="/support/images/en/tutorials/telegram/telegram-newbot_rcloneview_test_bot.jpg" alt="telegram create new bot" class="img-large img-center" />

3. Copia el **Bot Token** que muestra BotFather. Mantenlo en secreto; RcloneView lo necesita para la configuración.  
   <img src="/support/images/en/tutorials/telegram/telegram-bot-token.jpg" alt="telegram bot token" class="img-large img-center" />

## Inicia tu bot (importante)

Debes iniciar el bot una vez para que Telegram pueda devolver las actualizaciones de tu chat.

1. Busca tu bot por nombre o nombre de usuario y abre el chat.  
   <img src="/support/images/en/tutorials/telegram/telegram-search-my-bot.jpg" alt="telegram search my bot" class="img-large img-center" />

2. Toca **Start** (o envía `/start`), y luego envía un mensaje más (por ejemplo, `hi`).  
   <img src="/support/images/en/tutorials/telegram/telegram-start-bot.jpg" alt="telegram start bot" class="img-large img-center" />

## Encuentra tu Chat ID de Telegram

1. En un navegador, abre:  
   `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`

<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_1.png" alt="telegram getUpdates url" class="img-large img-center" />
<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_2.png" alt="telegram getUpdates example url" class="img-large img-center" />

2. En la respuesta JSON, anota el número en `chat.id` (ejemplo: `987654321`). Ese es tu Chat ID.  
   <img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_3.png" alt="telegram chat id" class="img-large img-center" />

:::caution Mantén los tokens en privado
Trata el Bot Token y el Chat ID como si fueran contraseñas. Solo el Chat ID configurado tiene permiso para controlar las tareas.
:::

## Activa el Control Remoto por Telegram en RcloneView

1. Abre **Settings -> Interfaces & Notifications**.
2. Activa **Telegram Remote Control**.  
   <img src="/support/images/en/tutorials/telegram/rcloneview-telegram-enable.png" alt="rcloneview telegram enable" class="img-large img-center" />

3. Introduce tu **Bot Token** y tu **Chat ID**.  
   <img src="/support/images/en/tutorials/telegram/rcloneview-telegram-fields.png" alt="rcloneview telegram token chat id fields" class="img-large img-center" />

4. Haz clic en **Send Test Message**. Deberías recibir: `RcloneView Telegram Test Message`.  
   <img src="/support/images/en/tutorials/telegram/telegram-test-message.jpg" alt="telegram test message" class="img-large img-center" />

## Guía de comandos (chatops para tareas)

Usa estos comandos en el chat del bot:

- `/help` - Muestra todos los comandos.  
  <img src="/support/images/en/tutorials/telegram/telegram-help.jpg" alt="telegram help" class="img-large img-center" />

- `/listjobs` - Lista las tareas de la conexión actual.  
  <img src="/support/images/en/tutorials/telegram/telegram-listjobs.jpg" alt="telegram listjobs" class="img-large img-center" />

- `/start <jobName>` - Inicia una tarea por su nombre exacto.  
  <img src="/support/images/en/tutorials/telegram/telegram-job-start_by_jobname.jpg" alt="telegram start by job name" class="img-large img-center" />

- `/start #<n>` (recomendado) - Inicia por el índice de la lista del último `/listjobs`.  
  <img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_1.jpg" alt="telegram start by index step1" class="img-large img-center" />
  <img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_2.jpg" alt="telegram start by index step2" class="img-large img-center" />

- `/stop <jobId>` - Detiene una tarea en ejecución.  
  <img src="/support/images/en/tutorials/telegram/telegram-job-stop.jpg" alt="telegram job stop" class="img-large img-center" />

- `/status <jobId>` - Consulta el progreso y el tamaño transferido.  
  <img src="/support/images/en/tutorials/telegram/telegram-job-status.jpg" alt="telegram job status" class="img-large img-center" />

## Por qué importa para la automatización

- Transferencias nocturnas o largas: recibe alertas y reinicia o detén sin necesidad de conectarte por VPN al equipo.
- Copias de seguridad programadas: confirma el éxito o el fallo al instante y vuelve a ejecutarlas desde tu teléfono.
- Tareas multi-nube: mantén una torre de control unificada incluso cuando no estás frente a la consola.
- Respuesta más rápida ante incidentes: detén tareas descontroladas, reprograma o cambia a otro preset rápidamente.

## Consejos de seguridad

- Solo el Chat ID configurado puede ejecutar comandos.
- Rota tu Bot Token si alguna vez queda expuesto.
- Desactiva el Control Remoto por Telegram en la configuración si temporalmente no necesitas comandos remotos.

## Recursos relacionados

- [Cómo usar el Control Remoto por Telegram (tutorial)](https://rcloneview.com/support/tutorials/telegram-remote-control)
- [Crear y gestionar tareas](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Ejecutar y gestionar tareas](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)
- [Programación de tareas](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Monitorización de transferencias en tiempo real](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [Usa la Terminal integrada](https://rcloneview.com/support/tutorials/rcloneview-terminal-rclone-cli-inside-gui) <!-- replace with actual link if different -->

## Conclusión

Telegram convierte a RcloneView en un centro de control móvil: te mantienes notificado, puedes iniciar o detener tareas al instante y respondes más rápido ante los fallos. Configúralo una vez, mantén el token a salvo, y ejecuta tus automatizaciones en la nube con confianza incluso cuando estés lejos de tu escritorio.

<CloudSupportGrid />
