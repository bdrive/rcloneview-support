---
slug: rcloneview-slack-remote-control
title: "Control remoto de RcloneView con Slack: gestiona tus trabajos en la nube desde tu teléfono"
authors:
  - steve
description: "Recibe alertas instantáneas de trabajos e inicia, detén o consulta trabajos de RcloneView directamente desde Slack con una app segura y comandos de barra simples."
keywords:
  - rcloneview slack
  - rclone slack bot
  - rclone remote control
  - rcloneview notifications
  - slack chatops
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

# Control remoto de RcloneView con Slack: gestiona tus trabajos en la nube desde tu teléfono

> Convierte RcloneView en una consola de chatops: recibe alertas de trabajos, lista trabajos e inícialos o detenlos desde Slack, incluso cuando estés lejos de tu PC.

Con el Control remoto de Slack, RcloneView envía a tu teléfono alertas de inicio, finalización y error de los trabajos, y acepta comandos de barra simples para ejecutar o detener trabajos. Es perfecto para copias de seguridad largas, sincronizaciones nocturnas o servidores remotos donde igualmente quieres un control rápido desde el móvil.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Qué puedes hacer desde Slack

- **Notificaciones en tiempo real**: Recibe una alerta de inmediato cuando un trabajo empieza, se completa o encuentra un error.
- **Listar trabajos**: Consulta todos tus trabajos registrados de RcloneView en una lista clara.
- **Control remoto de trabajos**: Inicia trabajos por nombre o por índice (#N), o detenlos al instante.
- **Estado bajo demanda**: Consulta el progreso, la velocidad de transferencia y el tiempo restante estimado en cualquier momento.

*Nota: RcloneView debe estar en ejecución en tu PC o servidor para procesar los comandos de Slack.*

## Requisitos previos

- RcloneView instalado y en ejecución (Escritorio o Headless).
- Una cuenta de Slack y tu propio espacio de trabajo.
- Conectividad a Internet.

---

## Paso 1: Crea tu app de Slack (usando un manifiesto)

Para máxima seguridad, RcloneView utiliza un enfoque de "app privada" en el que tú mismo creas tu bot. Esto garantiza que tus datos nunca pasen por servidores de terceros: van directamente de tu PC a Slack.

1. Ve al [Panel de la API de Slack](https://api.slack.com/apps) y haz clic en **[Create New App]**.
   
2. Selecciona **[From a manifest]**.
   
3. Selecciona el **Workspace** donde quieres instalar la app y haz clic en **[Next]**.
4. Selecciona la pestaña **[JSON]**, elimina el contenido existente y pega el código de abajo:

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
                "description": "Start a job (Enter number or name)",
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

5. Haz clic en **[Next]** y luego en **[Create]** para terminar de crear tu app.

---

## Paso 2: Obtén tus tokens

Necesitas dos tipos de tokens para configurar RcloneView. **Trátalos como contraseñas y nunca los compartas con nadie.**

### ① Obtén el App Token (para el modo Socket)

1. En el menú de la izquierda, ve a **[Basic Information]**.
2. Desplázate hasta la sección **[App-Level Tokens]** y haz clic en **[Generate Token and Scopes]**.
3. Pon el nombre `RcloneView`, haz clic en **[Add Scope]**, selecciona `connections:write` y luego haz clic en **[Generate]**.
4. Copia el token que empieza con `xapp-...` y guárdalo.

### ② Obtén el Bot Token (para la mensajería)

1. En el menú de la izquierda, ve a **[Install App]**.
2. Haz clic en el botón verde **[Install to Workspace]** y luego en **[Allow]**.
3. Copia el **Bot User OAuth Token** que empieza con `xoxb-...` y guárdalo.

---

### Paso 3: Activa la pestaña de mensajes

1. Haz clic en **App Home** en el menú de la izquierda.
2. Activa `Messages Tab`.
3. Marca `Allow users to send Slash commands and messages from the messages tab`.

Esto te permitirá enviar comandos de barra directamente a tu bot.

---

## Paso 4: Encuentra tu Member ID

El bot necesita tu ID único para saber a qué usuario enviarle las notificaciones (DM).

1. Abre tu app de Slack, haz clic en tu foto de perfil y selecciona **[Profile]**.
2. Haz clic en el botón **[More (···)]**.
3. Selecciona **[Copy member ID]** en la parte inferior del menú. (Ejemplo: `U1234567890`)
   <img src="/support/images/en/tutorials/slack/slack-copy-member-id.png" alt="Copy Slack Member ID" class="img-large img-center" />


---

## Paso 5: Activa el control por Slack en RcloneView

1. Abre RcloneView y ve a **Settings -> Interfaces & Notifications**.
2. Activa el interruptor **Slack Remote Control**.
3. Introduce tu **App Token**, **Bot Token** y **Member ID** en los campos correspondientes.
4. Haz clic en **[Send Test Message]** para verificar que recibes un mensaje en tu teléfono.

---

## ⌨️ Guía de comandos (ChatOps)

Escribe estos comandos en cualquier chat donde esté presente el bot:

* `/help` - Muestra todos los comandos disponibles.
* `/joblist` - Lista todos los trabajos registrados para la conexión actual.
* `/start <jobName>` - Inicia un trabajo por su nombre exacto.
* `/start #<number>` - Inicia un trabajo usando su índice de `/joblist` (por ejemplo, `/start #1`).
* `/stop <JobId>` - Detiene un trabajo en ejecución usando su Job ID.
* `/jobstatus <JobId>` - Consulta el progreso y las estadísticas en tiempo real de un trabajo específico.

---

## Consejos de seguridad y gestión

* **Identificación de usuario**: Solo el Member ID configurado está autorizado para ejecutar comandos.
* **Rotación de tokens**: Si alguna vez se exponen tus tokens, ve a la página de la API de Slack y haz clic en `Regenerate` de inmediato.
* **Estado sin conexión**: Si RcloneView no está en ejecución, el bot de Slack no responderá a los comandos.

## Recursos relacionados

* [Guía básica de RcloneView](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic)
* [Programación y automatización de trabajos](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling)
* [Monitorización de transferencias en tiempo real](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic/monitoring)

## Resumen

Slack convierte a RcloneView en un centro de mando móvil: te mantienes notificado, puedes iniciar o detener trabajos al instante y respondes más rápido ante los fallos. Configúralo una vez, mantén los tokens a salvo y gestiona tu automatización en la nube con confianza incluso cuando estés lejos de tu escritorio.

<CloudSupportGrid />
