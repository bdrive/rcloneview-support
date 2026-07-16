---
slug: rcloneview-discord-remote-control
title: "Control remoto de RcloneView por Discord: gestiona tus tareas en la nube desde Discord"
authors:
  - steve
description: "Recibe alertas de tareas y ejecuta comandos de RcloneView desde Discord usando tu propio bot seguro, tu ID de aplicación y tu ID de usuario de Discord."
keywords:
  - rcloneview discord
  - rclone discord bot
  - rclone remote control
  - rcloneview notifications
  - discord chatops
  - cloud backup alerts
  - remote job management
  - rcloneview job status
tags:
  - RcloneView
  - backup
  - cloud-storage
  - job-management
  - security
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import RvCta from '@site/src/components/RvCta';

# Control remoto de RcloneView por Discord: gestiona tus tareas en la nube desde Discord

> Convierte RcloneView en una consola de chatops de Discord: recibe alertas de tareas, lista tareas y arráncalas o deténlas desde Discord sin abrir tu PC.

Con el Control remoto por Discord, RcloneView te envía alertas de inicio, finalización y error de tareas, y acepta comandos sencillos para ejecutar o detener tareas. Es perfecto para copias de seguridad largas, sincronizaciones nocturnas o servidores remotos donde igualmente quieres un control rápido desde Discord en el escritorio o en el móvil.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Qué puedes hacer desde Discord

- **Notificaciones en tiempo real**: recibe una alerta inmediata cuando una tarea comienza, se completa o encuentra un error.
- **Listar tareas**: visualiza todas tus tareas registradas en RcloneView en una lista clara.
- **Control remoto de tareas**: inicia tareas por nombre o por índice (#N), o deténlas al instante.
- **Estado bajo demanda**: consulta el progreso, la velocidad de transferencia y el tiempo estimado restante en cualquier momento.

*Nota: RcloneView debe estar en ejecución en tu PC o servidor para procesar los comandos de Discord.*

## Requisitos previos

- RcloneView instalado y en ejecución (Desktop o Headless).
- Una cuenta de Discord.
- Un servidor de Discord donde puedas instalar un bot (Guild Install).
- Conectividad a internet.

---

## Paso 1: Crea tu aplicación y bot de Discord

Para máxima seguridad, RcloneView utiliza un enfoque de "trae tu propio bot" (bring your own bot). Tus datos viajan directamente entre RcloneView y Discord, sin ningún relay de terceros.

1. Ve al [Portal de desarrolladores de Discord](https://discord.com/developers/applications) y haz clic en **New Application**. Ponle un nombre (por ejemplo, `RcloneView`).
2. Abre **Installation**, elige **Guild Install** como Installation Context (desactiva User Install si está habilitado) y guarda.
3. Ve a la pestaña **Bot**, haz clic en **Add Bot** y luego copia o restablece para obtener tu **Discord Bot Token**. Mantenlo en secreto.
4. Si planeas enviar comandos de texto plano (no solo slash commands), habilita **MESSAGE CONTENT INTENT** en la pestaña Bot para que RcloneView pueda leer el texto de los comandos.

---

## Paso 2: Crea un servidor e instala el bot

Para usar el bot, necesitas un servidor de Discord (también llamado "Guild") donde el bot pueda residir. Si no tienes un servidor privado para tus registros de RcloneView, sigue los pasos a continuación.

### Paso 2-1 Crea un nuevo servidor de Discord

1. Abre tu **app de Discord** (Desktop o Web).
2. Haz clic en el **icono más (+)** (Añadir un servidor) en la parte inferior de tu lista de servidores, a la izquierda.
3. Selecciona **Create My Own**.
4. Elige **For me and my friends**.
5. Dale un nombre a tu servidor (por ejemplo, `RcloneView Control Center`) y haz clic en **Create**.
   

### Paso 2-2 Instala el bot en tu servidor

1. Vuelve al **Portal de desarrolladores de Discord**.
2. Abre **OAuth2 > URL Generator**.
3. Selecciona los scopes: **bot** y **applications.commands**.
4. En **Bot Permissions**, selecciona **Send Messages**, **Use Slash Commands** y **Attach Files** (si quieres recibir archivos de registro).
5. Copia la URL generada al final y pégala en tu navegador.
6. Selecciona el servidor que acabas de crear (por ejemplo, `RcloneView Control Center`) y haz clic en **Authorize**.

---

## Paso 3: Recopila los valores que necesita RcloneView

- **Discord Bot Token**: de la pestaña **Bot** (Paso 1-3).
- **Discord Application ID**: de **General Information** en el Portal de desarrolladores.
- **My Discord User ID (Snowflake)**: un ID numérico largo que te identifica de forma única.

### Cómo obtener tu ID de usuario de Discord

1. En Discord (Desktop o Web), abre **User Settings** (⚙️).
2. Ve a **Advanced** y activa **Developer Mode**.
3. Haz clic derecho en tu **foto de perfil** o **nombre de usuario** (abajo a la izquierda o en una lista de miembros) y elige **Copy User ID**. Guarda el número (ejemplo: `123456789012345678`).

¿Por qué se necesita este ID?

- **Seguridad**: solo se procesan los comandos que provienen de tu cuenta.
- **Notificaciones directas**: el bot sabe exactamente a qué usuario enviarle un DM cuando una tarea se inicia o falla.

---

## Paso 4: Habilita el control por Discord en RcloneView

1. Abre RcloneView y ve a **Settings -> Interfaces & Notifications**.
2. Activa el interruptor **Discord Remote Control**.
3. Introduce tu **Discord Bot Token**, **Discord Application ID** y **My Discord User ID** en los campos correspondientes.
4. Haz clic en **Send Test Message** para verificar que recibes un DM del bot.

---

## ⌨️ Guía de comandos (ChatOps)

Envía comandos al bot (se recomienda el DM por privacidad; los canales también funcionan si el bot tiene acceso):

- `/help` — Muestra todos los comandos disponibles.
- `/joblist` — Lista todas las tareas registradas para la conexión actual.
- `/start <jobName>` — Inicia una tarea por su nombre exacto.
- `/start #<number>` — Inicia una tarea usando su índice de `/joblist` (por ejemplo, `/start #1`).
- `/stop <JobId>` — Detiene una tarea en ejecución usando su Job ID.
- `/jobstatus <JobId>` — Consulta el progreso y las estadísticas en tiempo real de una tarea específica.

---

## Consejos de seguridad y gestión

- **Identificación de usuario**: solo el ID de usuario de Discord configurado está autorizado para ejecutar comandos.
- **Seguridad del token**: trata tu Bot Token y tu Application ID como contraseñas. Restáblecelos si quedan expuestos.
- **Estado en línea**: si RcloneView no está en ejecución, el bot de Discord no responderá a los comandos.

## Recursos relacionados

- [Guía básica de RcloneView](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic)
- [Programación y automatización de tareas](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling)
- [Monitoreo de transferencias en tiempo real](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic/monitoring)

## Resumen

Discord convierte a RcloneView en un centro de mando móvil: te mantienes informado, puedes iniciar o detener tareas al instante y respondes más rápido ante fallos. Configúralo una vez, mantén los tokens seguros y gestiona tu automatización en la nube con confianza incluso cuando estés lejos de tu escritorio.

<CloudSupportGrid />
