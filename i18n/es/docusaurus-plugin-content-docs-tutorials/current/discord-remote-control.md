---
sidebar_position: 11
description: Utiliza el Control Remoto de Discord en RcloneView para recibir notificaciones de trabajos y listar, iniciar, detener y comprobar el estado de trabajos de forma remota desde Discord.
keywords:
  - rcloneview
  - control remoto de discord
  - bot de discord
  - notificaciones de trabajos
  - control remoto de trabajos
  - gestor de trabajos rclone
tags:
  - RcloneView
  - Tutorial
  - Discord
  - Remote-Control
  - Job-Management
date: 2026-01-20
author: steve
---

# Control Remoto de Discord en RcloneView

El Control Remoto de Discord te permite recibir notificaciones de trabajos de RcloneView y controlar trabajos directamente desde Discord, sin necesidad de estar frente a tu PC.

Este tutorial cubre:

- Creación de una aplicación y un bot de Discord
- Configuración del Contexto de Instalación en **Guild Install** (Instalación en Servidor)
- Obtención de los IDs necesarios (Token del Bot, ID de la Aplicación, ID de Usuario de Discord)
- Habilitación del Control Remoto de Discord en RcloneView
- Uso de comandos de Discord para listar/iniciar/detener trabajos y comprobar su estado

---

## ¿Qué es el Control Remoto de Discord?

El Control Remoto de Discord es una función integrada de RcloneView que te permite:

- Recibir notificaciones en tiempo real sobre el inicio, la finalización y los errores de los trabajos
- Listar los trabajos registrados
- Iniciar un trabajo de forma remota
- Detener un trabajo en ejecución
- Comprobar el progreso y el estado de un trabajo en cualquier momento

Mientras RcloneView esté en ejecución, podrás gestionar tus trabajos en la nube desde tu cliente de Discord.

---

## Requisitos

- RcloneView instalado y en ejecución (Desktop o Headless)
- Una cuenta de Discord
- Permiso para crear e instalar un bot de Discord en un servidor (Guild Install)
- Conexión a internet

---

## Paso 1: Crear una Aplicación y un Bot de Discord

### Paso 1-1 Abrir el Portal de Desarrolladores de Discord

1. Ve al [Portal de Desarrolladores de Discord](https://discord.com/developers/applications).
2. Haz clic en **New Application** y asígnale un nombre (por ejemplo, `RcloneView`).
   <img src="/support/images/en/tutorials/discord/discord-new-application.png" class="img-large img-center" />

### Paso 1-2 Configurar el Contexto de Instalación en Guild Install

1. En el menú izquierdo, abre **Installation**.
2. En **Installation Contexts**, selecciona **Guild Install**. (Desactiva User Install si está activado).
3. Guarda los cambios.
   <img src="/support/images/en/tutorials/discord/discord-installation-context.png" class="img-large img-center" />

### Paso 1-3 Añadir un Bot y generar el Token del Bot

1. Abre la pestaña **Bot**.
2. Haz clic en **Add Bot** y confirma.
3. Haz clic en **Reset Token** (o **Copy Token**) para obtener tu **Discord Bot Token**. Mantenlo en secreto.
   <img src="/support/images/en/tutorials/discord/discord-bot-token.png" class="img-large img-center" />

### Paso 1-4 Permitir que el bot lea mensajes (recomendado)

Si planeas enviar comandos de texto (en lugar de comandos de barra), habilita **MESSAGE CONTENT INTENT** en la pestaña Bot para que RcloneView pueda leer el texto de tus comandos en mensajes directos o canales.
   <img src="/support/images/en/tutorials/discord/discord-privileged-intent.png" class="img-large img-center" />

---

## Paso 2: Crear un Servidor e Instalar el Bot

Para usar el bot, necesitas un servidor de Discord (también llamado "Guild") donde pueda residir. Si no tienes un servidor privado para tus registros de RcloneView, sigue los pasos a continuación.

### Paso 2-1 Crear un Nuevo Servidor de Discord

1. Abre tu **aplicación de Discord** (Desktop o Web).
2. Haz clic en el **icono más (+)** (Añadir un Servidor) en la parte inferior de la lista de servidores a la izquierda.
3. Selecciona **Create My Own**.
4. Elige **For me and my friends**.
5. Ponle un nombre a tu servidor (por ejemplo, `RcloneView Control Center`) y haz clic en **Create**.
   

### Paso 2-2 Instalar el Bot en tu Servidor

1. Vuelve al **Portal de Desarrolladores de Discord**.
2. Abre **OAuth2 > URL Generator**.
3. Selecciona los scopes: **bot** y **applications.commands**.
4. En **Bot Permissions**, selecciona **Send Messages**, **Use Slash Commands** y **Attach Files** (si deseas recibir archivos de registro).
5. Copia la URL generada en la parte inferior y pégala en tu navegador.
6. Selecciona el servidor que acabas de crear (por ejemplo, `RcloneView Control Center`) y haz clic en **Authorize**.

---

## Paso 3: Recopilar los Valores que RcloneView Necesita

- **Discord Bot Token**: Desde la pestaña **Bot** (Paso 1-3).
- **Discord Application ID**: Desde **General Information** en el Portal de Desarrolladores.
- **Mi ID de Usuario de Discord (Snowflake)**: Un número largo que te identifica de forma única.

### Cómo obtener tu ID de Usuario de Discord

Para obtener tu `Discord User ID`, primero habilita el Modo Desarrollador:

1. Abre Discord (Desktop o Web).
2. Haz clic en **User Settings** (⚙️) en la parte inferior izquierda.
3. En **App Settings**, abre **Advanced**.
4. Activa **Developer Mode**.

Luego copia tu ID:

1. Haz clic derecho en tu **foto de perfil** o **nombre de usuario** (en la parte inferior izquierda o en una lista de chat/miembros).
2. Haz clic en **Copy User ID**.
3. Guarda la cadena numérica larga (ejemplo: `123456789012345678`).
   <img src="/support/images/en/tutorials/discord/discord-copy-userid.png" class="img-large img-center" />

¿Por qué se necesita este ID?

- Seguridad: La aplicación Flutter solo procesa comandos provenientes de tu cuenta.
- Notificaciones Directas: El bot sabe exactamente a qué usuario enviarle mensajes directos cuando un trabajo se inicia o falla.

---

## Paso 4: Habilitar el Control Remoto de Discord en RcloneView

### Paso 4-1 Abrir Configuración

1. Inicia RcloneView.
2. Ve a **Settings** -> **Interfaces & Notifications**.

### Paso 4-2 Introducir las credenciales

1. Activa **Discord Remote Control**.
2. Introduce:
   - **Discord Bot Token**: `...`
   - **Discord Application ID**: Desde **General Information**.
   - **My Discord User ID**: `123456789012345678`

### Paso 4-3 Enviar un mensaje de prueba

Haz clic en **Send Test Message**. Si tiene éxito, recibirás un mensaje directo del bot en Discord.
   <img src="/support/images/en/tutorials/discord/discord-test-message-received.png" class="img-large img-center" />

---

## Paso 5: Comandos de Discord (Control de Trabajos)

Envía comandos al bot (se recomienda usar mensajes directos por privacidad, pero también puedes usar un canal donde el bot esté presente y tengas permiso para ejecutarlo).

### `/help`

Muestra todos los comandos disponibles.

### `/joblist`

Lista los trabajos de la conexión actualmente seleccionada.

### `/start <jobName>`

Inicia un trabajo específico por su nombre.

### `/start #<number>` (Recomendado)

Inicia un trabajo usando el índice del último resultado de `/joblist` (ejemplo: `/start #1`).

### `/stop <JobId>`

Detiene un trabajo en ejecución.

### `/jobstatus <JobId>`

Comprueba el progreso en tiempo real y las estadísticas de un trabajo específico.

---

## Notificaciones Automáticas de Trabajos

Una vez habilitado, RcloneView envía automáticamente notificaciones para:

- Trabajo iniciado
- Trabajo completado con éxito
- Trabajo fallido con un error

---

## Notas de Seguridad

- Los comandos solo se procesan si provienen del **Discord User ID** configurado.
- Mantén en privado tu **Discord Bot Token** y **Application ID**.
- Si necesitas pausar el control remoto, simplemente desactiva el interruptor en la configuración.

---

## Resumen

El Control Remoto de Discord te permite operar transferencias de larga duración sin estar frente a tu PC:

- Gestión remota de trabajos desde Discord
- Actualizaciones de estado en tiempo real mediante notificaciones
- Control instantáneo desde Discord móvil o de escritorio

Configúralo una vez y gestiona tu automatización en la nube desde cualquier lugar.
