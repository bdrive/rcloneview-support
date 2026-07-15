---

sidebar_position: 10
description: "Usa el Control Remoto de Slack en RcloneView para recibir notificaciones de trabajos y listar, iniciar, detener y consultar el estado de los trabajos de forma remota desde Slack."
keywords:
  - rcloneview
  - control remoto de slack
  - bot de slack
  - notificaciones de trabajos
  - control remoto de trabajos
  - gestor de trabajos rclone
tags:
  - RcloneView
  - Tutorial
  - Slack
  - Remote-Control
  - Job-Management
date: 2026-01-19
author: steve

---

# Control Remoto de Slack en RcloneView

El Control Remoto de Slack te permite recibir notificaciones de trabajos de RcloneView y controlar los trabajos directamente desde Slack, sin necesidad de estar frente a tu PC.

Este tutorial cubre:

* Crear una app de Slack (usando App Manifest)
* Emitir los tokens necesarios (App Token y Bot Token)
* Encontrar tu ID de miembro de Slack
* Habilitar el Control Remoto de Slack en RcloneView
* Usar comandos de Slack para listar, iniciar, detener trabajos y consultar el estado

---

## ¿Qué es el Control Remoto de Slack?

El Control Remoto de Slack es una función integrada de RcloneView que te permite:

* Recibir notificaciones en tiempo real sobre el inicio, la finalización y los errores de los trabajos
* Listar los trabajos registrados
* Iniciar un trabajo de forma remota
* Detener un trabajo en ejecución
* Consultar el progreso y el estado de un trabajo cuando lo desees

Mientras RcloneView esté en ejecución, puedes gestionar tus trabajos en la nube usando solo la app móvil de Slack.

---

## Requisitos

* RcloneView instalado y en ejecución (Desktop o Headless)
* Una cuenta y un espacio de trabajo de Slack
* Conexión a internet

---

## Paso 1: Crear una app de Slack (App Manifest)

Para una configuración rápida y precisa, usamos el método "App Manifest" para crear tu bot.

### 1-1 Abrir el panel de la API de Slack

1. Ve al [panel de la API de Slack](https://api.slack.com/apps).
2. Haz clic en el botón **Create New App**.

### 1-2 Crear usando Manifest

1. Selecciona la opción **From an app manifest**.
2. Selecciona el **Workspace** donde deseas instalar la app.
3. Selecciona la pestaña **JSON** y pega el siguiente código de configuración:

```json
{
    "display_information": {
        "name": "RcloneView",
        "description": "Effortlessly browse, organize, transfer files across your cloud storages.",
        "background_color": "#3f2f3f"
    },
    "features": {
        "bot_user": {
            "display_name": "RcloneView",
            "always_online": false
        },
        "slash_commands": [
            {
                "command": "/help",
                "description": "Show all commands",
                "should_escape": false
            },
            {
                "command": "/joblist",
                "description": "List jobs",
                "should_escape": false
            },
            {
                "command": "/start",
                "description": "Starts a job (Enter number or name)",
                "usage_hint": "<#number> or <jobName>",
                "should_escape": false
            },
            {
                "command": "/stop",
                "description": "Stop a running job by JobId",
                "usage_hint": "<JobId>",
                "should_escape": false
            },
            {
                "command": "/jobstatus",
                "description": "Check status by JobId",
                "usage_hint": "<JobId>",
                "should_escape": false
            }
        ]
    },
    "oauth_config": {
        "scopes": {
            "bot": [
                "commands",
                "chat:write",
                "chat:write.public",
                "im:write",
                "app_mentions:read",
                "files:write"
            ]
        }
    },
    "settings": {
        "interactivity": {
            "is_enabled": true
        },
        "org_deploy_enabled": false,
        "socket_mode_enabled": true,
        "token_rotation_enabled": false
    }
}

```

4. Haz clic en **Next** y luego en **Create** para finalizar.

---

## Paso 2: Emitir y guardar los tokens

RcloneView requiere dos tipos de tokens. **Trátalos como si fueran contraseñas.**

### 2-1 Emitir el App Token (para el Socket Mode)

1. Haz clic en **Basic Information** en el menú izquierdo.
2. En la sección **App-Level Tokens**, haz clic en **Generate Token and Scopes**.
3. Nombra el token `RcloneView`, añade el permiso `connections:write` y genéralo.
4. Guarda el token que comienza con **`xapp-`**.

### 2-2 Obtener el Bot Token

1. Haz clic en **Install App** en el menú izquierdo.
2. Haz clic en **Install to Workspace** y luego en **Allow**.
3. Copia el **Bot User OAuth Token** que comienza con **`xoxb-`**.

---

### Paso 3: Habilitar la pestaña de mensajes

1. Haz clic en **App Home** en el menú izquierdo.
2. Activa `Messages Tab`
3. Marca `Allow users to send Slash commands and messages from the messages tab`

Esto te permitirá enviar comandos de barra diagonal directamente a tu bot.

---

## Paso 4: Encontrar tu ID de miembro de Slack

El bot necesita tu ID único para saber qué usuario debe recibir las notificaciones.

1. Abre Slack, haz clic en tu **foto de perfil** y selecciona **Profile**.
2. Haz clic en el botón **More(···)** y selecciona **Copy member ID**.
3. Guarda el ID (por ejemplo, `U1234567890`).
   <img src="/support/images/en/tutorials/slack/slack-copy-member-id.png" alt="Copy Slack Member ID" class="img-large img-center" />

---

## Paso 5: Habilitar el Control Remoto de Slack en RcloneView

### 5-1 Abrir Configuración

1. Inicia RcloneView.
2. Ve a **Settings** -> **Interfaces & Notifications**.

### 5-2 Introducir las credenciales

1. Activa **Slack Remote Control**.
2. Introduce tus tokens e ID:
* **Slack App Token**: `xapp-...`
* **Slack Bot Token**: `xoxb-...`
* **My Member ID**: `U...`

### 5-3 Enviar mensaje de prueba

Haz clic en **Send Test Message**. Si tiene éxito, recibirás un mensaje en tu teléfono.

---

## Paso 6: Comandos de Slack (control de trabajos)

Escribe estos comandos en cualquier chat donde esté instalado el bot.

### `/help`

Muestra todos los comandos disponibles.

### `/joblist`

Lista los trabajos de la conexión seleccionada actualmente.

### `/start <jobName>`

Inicia un trabajo específico por su nombre.

### `/start #<number>` (Recomendado)

Inicia un trabajo usando el índice del último resultado de `/joblist` (por ejemplo, `/start #1`).

### `/stop <JobId>`

Detiene un trabajo en ejecución.

### `/jobstatus <JobId>`

Consulta el progreso y las estadísticas en tiempo real de un trabajo específico.

---

## Notificaciones automáticas de trabajos

Una vez habilitado, RcloneView envía automáticamente notificaciones para:

* Trabajo iniciado
* Trabajo completado correctamente
* Trabajo fallido con un error

---

## Notas de seguridad

* Los comandos solo se procesan si provienen del **Member ID** configurado.
* Mantén tu **App Token** y **Bot Token** en privado.
* Si necesitas pausar el control remoto, simplemente desactiva el interruptor en la configuración.

---

## Resumen

El Control Remoto de Slack hace que la gestión de tareas en la nube de larga duración sea mucho más eficiente:

* Gestión remota de trabajos independientemente de tu ubicación
* Actualizaciones de estado en tiempo real mediante notificaciones
* Control instantáneo desde el móvil sin necesidad de un PC

¡Configúralo una vez y disfruta hoy mismo de un entorno de automatización en la nube más inteligente!
