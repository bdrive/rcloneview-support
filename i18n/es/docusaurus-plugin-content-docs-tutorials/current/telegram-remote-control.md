---
sidebar_position: 9
description: Usa el Control Remoto por Telegram en RcloneView para recibir notificaciones de trabajos y listar, iniciar, detener y comprobar el estado de los trabajos de forma remota desde Telegram.
keywords:
  - rcloneview
  - control remoto por telegram
  - bot de telegram
  - notificaciones de trabajos
  - control remoto de trabajos
  - gestor de trabajos de rclone
tags:
  - RcloneView
  - Tutorial
  - Telegram
  - Remote-Control
  - Job-Management
date: 2025-12-17
author: tayson
---

# Control Remoto por Telegram de RcloneView

El Control Remoto por Telegram te permite recibir notificaciones de trabajos de RcloneView y controlar los trabajos directamente desde Telegram, sin necesidad de estar frente a tu PC.

Este tutorial cubre:

- Crear un bot de Telegram (BotFather)
- Encontrar tu Chat ID de Telegram
- Habilitar el Control Remoto por Telegram en RcloneView
- Usar comandos de Telegram para listar/iniciar/detener trabajos y comprobar el estado
- Ejemplos prácticos y notas de seguridad

---

## ¿Qué es el Control Remoto por Telegram?

El Control Remoto por Telegram es una función integrada de RcloneView que te permite:

- Recibir notificaciones de inicio/finalización/error de trabajos
- Listar trabajos
- Iniciar un trabajo de forma remota
- Detener un trabajo en ejecución
- Comprobar el progreso/estado de un trabajo

Si RcloneView está en ejecución, puedes gestionar los trabajos con solo tu teléfono.

---

## Requisitos

- RcloneView instalado y en ejecución
- Una cuenta de Telegram
- Conexión a internet
- Permiso para crear un bot de Telegram (a través de BotFather)

---

## Paso 1 Crear un bot de Telegram (BotFather)

### Paso 1-1 Abrir BotFather

1. Abre Telegram.
2. Busca **BotFather**.
3. Abre el chat de BotFather.

<img src="/support/images/en/tutorials/telegram/telegram-botfather-search.jpg" alt="telegram botfather search" class="img-large img-center" />

### Paso 1-2 Crear un nuevo bot

Usa BotFather para crear un nuevo bot y establecer:

- **Nombre del bot** (nombre visible)
- **Nombre de usuario del bot** (debe terminar en `bot`)

Ejemplo:

- Nombre del bot: `RcloneView_test_bot`
- Nombre de usuario del bot: `rcloneview_test_bot`

<img src="/support/images/en/tutorials/telegram/telegram-newbot_rcloneview_test_bot.jpg" alt="telegram create new bot" class="img-large img-center" />

### Paso 1-3 Guarda el token de tu bot (Importante)

Después de crear el bot, BotFather te da un token como este:

```
123456789:AAHxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

:::caution Mantén el token en secreto
Este token es necesario en la configuración de RcloneView. No lo compartas públicamente.
:::

<img src="/support/images/en/tutorials/telegram/telegram-bot-token.jpg" alt="telegram bot token" class="img-large img-center" />

---

## Paso 2 Inicia tu bot en Telegram (Importante)

Debes iniciar un chat con tu bot antes de poder obtener tu Chat ID mediante `getUpdates`.

### Paso 2-1 Busca tu bot

1. Busca tu bot por nombre o nombre de usuario.
2. Abre el chat del bot.

<img src="/support/images/en/tutorials/telegram/telegram-search-my-bot.jpg" alt="telegram search my bot" class="img-large img-center" />

### Paso 2-2 Pulsa Start y envía un mensaje

1. Haz clic en **Start** (o envía `/start`).
2. Envía un mensaje más (por ejemplo: `hi`).

Esto crea un registro de actualización que luego podrás leer desde Telegram.

<img src="/support/images/en/tutorials/telegram/telegram-start-bot.jpg" alt="telegram start bot" class="img-large img-center" />

---

## Paso 3 Encuentra tu Chat ID de Telegram

### Paso 3-1 Abre getUpdates en un navegador

Abre esta URL (reemplázala con tu token):

```
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
```

<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_1.png" alt="telegram getUpdates url" class="img-large img-center" />
<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_2.png" alt="telegram getUpdates example url" class="img-large img-center" />

### Paso 3-2 Extrae `chat.id`

En la respuesta JSON, busca:

```json
"chat": {
  "id": 987654321
}
```

Tu **Chat ID** es el número en `chat.id` (ejemplo: `987654321`).

<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_3.png" alt="telegram chat id" class="img-large img-center" />

---

## Paso 4 Habilita el Control Remoto por Telegram en RcloneView

### Paso 4-1 Abre la configuración

1. Abre RcloneView.
2. Ve a **Settings**.
3. Selecciona **Interfaces & Notifications**.
4. Busca **Telegram Remote Control**.

### Paso 4-2 Actívalo

Habilita **Telegram Remote Control**:

<img src="/support/images/en/tutorials/telegram/rcloneview-telegram-enable.png" alt="rcloneview telegram enable" class="img-large img-center" />

### Paso 4-3 Introduce el Token y el Chat ID

- **Telegram Bot Token**: de BotFather
- **Telegram Chat ID**: de `getUpdates`

<img src="/support/images/en/tutorials/telegram/rcloneview-telegram-fields.png" alt="rcloneview telegram token chat id fields" class="img-large img-center" />

### Paso 4-4 Envía un mensaje de prueba

Haz clic en **Send Test Message**. Si funciona, recibirás:
`RcloneView Telegram Test Message`

<img src="/support/images/en/tutorials/telegram/telegram-test-message.jpg" alt="telegram test message" class="img-large img-center" />

---

## Paso 5 Comandos de Telegram (Control de trabajos)

Escribe estos comandos en tu chat de Telegram con el bot.

### `/help`

Muestra todos los comandos disponibles:

```
/help
```

<img src="/support/images/en/tutorials/telegram/telegram-help.jpg" alt="telegram help" class="img-large img-center" />

### `/listjobs`

Lista los trabajos de la conexión actualmente seleccionada:

```
/listjobs
```

Ejemplo de salida:

```
Total: 3
1) Backup_Photos
2) Sync_Documents
3) Archive_To_NAS
```

<img src="/support/images/en/tutorials/telegram/telegram-listjobs.jpg" alt="telegram listjobs" class="img-large img-center" />

### `/start <jobName>`

Inicia un trabajo por su nombre:

```
/start Backup_Photos
```

:::note El nombre del trabajo debe coincidir exactamente
Usa `/listjobs` para copiar el nombre exacto del trabajo.
:::

<img src="/support/images/en/tutorials/telegram/telegram-job-start_by_jobname.jpg" alt="telegram start by job name" class="img-large img-center" />

### `/start #<number>` (Recomendado)

Inicia un trabajo por su número según el último resultado de `/listjobs`:

```
/start #2
```

:::important Ejecuta `/listjobs` primero
El número se basa en la salida actual de la lista de trabajos.
:::

<img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_1.jpg" alt="telegram start by index step1" class="img-large img-center" />
<img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_2.jpg" alt="telegram start by index step2" class="img-large img-center" />

### `/stop <jobId>`

Detiene un trabajo en ejecución:

```
/stop 123
```

<img src="/support/images/en/tutorials/telegram/telegram-job-stop.jpg" alt="telegram job stop" class="img-large img-center" />

### `/status <jobId>`

Muestra el progreso de un trabajo en ejecución:

```
/status 123
```

<img src="/support/images/en/tutorials/telegram/telegram-job-status.jpg" alt="telegram job status" class="img-large img-center" />

---

## Notificaciones automáticas de trabajos

Cuando el Control Remoto por Telegram está habilitado, RcloneView puede enviar automáticamente notificaciones para:

- Trabajo iniciado
- Trabajo completado correctamente
- Trabajo fallido con un error

<img src="/support/images/en/tutorials/telegram/telegram-job-notifications.jpg" alt="telegram job notifications" class="img-large img-center" />

---

## Notas de seguridad

- Los comandos se procesan solo desde el **Chat ID** configurado.
- Mantén tu **Bot Token** en privado. Trátalo como una contraseña.
- Si quieres pausar el control remoto, desactiva el interruptor en la configuración.

---

## Resumen

El Control Remoto por Telegram facilita el manejo de RcloneView para trabajos de larga duración:

- Gestiona trabajos de forma remota
- Mantente informado con notificaciones en tiempo real
- Controla trabajos desde el móvil sin abrir tu PC

Pruébalo cuando ejecutes copias de seguridad programadas, sincronizaciones o transferencias grandes y quieras tener visibilidad desde cualquier lugar.
