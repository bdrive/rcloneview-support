---
sidebar_position: 1
description: Habilita el servidor web integrado de RcloneView para acceder al Explorador, Trabajos, Remotos y Configuración desde cualquier navegador en tu red local.
keywords:
  - rcloneview
  - interfaz web
  - servidor web
  - acceso desde navegador
  - acceso remoto
  - interfaz web
  - interfaz web de rclone
tags:
  - RcloneView
  - Tutorial
  - Web-Frontend
  - Remote-Access
date: 2026-03-27
author: steve
---

# Interfaz Web de RcloneView

RcloneView incluye un servidor web integrado que te permite acceder a la interfaz completa de RcloneView desde cualquier navegador web. Puedes explorar remotos, gestionar trabajos y configurar ajustes, todo sin abrir la ventana de la aplicación de escritorio.

Este tutorial cubre:

- Habilitar el servidor web en la configuración de RcloneView
- Configurar el puerto, el nombre de usuario y la contraseña
- Acceder a la interfaz web desde un navegador
- Permitir el acceso remoto desde otros dispositivos de tu red

---

## ¿Qué es la interfaz web?

La interfaz web es una interfaz basada en navegador para RcloneView que refleja la experiencia de la aplicación de escritorio. Una vez que el servidor web integrado está en funcionamiento, puedes abrir un navegador e interactuar con RcloneView a través de una interfaz familiar que incluye:

- **Explorador** — explora el almacenamiento local y remoto
- **Trabajos** — visualiza y gestiona trabajos de sincronización/copia
- **Remotos** — gestiona conexiones remotas
- **Configuración** — configura las opciones de RcloneView

Esto resulta útil cuando quieres gestionar transferencias desde otro dispositivo en la misma red, o simplemente prefieres un flujo de trabajo basado en navegador.

---

## Requisitos

- RcloneView instalado y en ejecución (Escritorio)
- Un navegador web moderno (Chrome, Firefox, Safari, Edge, etc.)
- Para acceso remoto: dispositivos en la misma red local

---

## Paso 1: Abrir la configuración del servidor web

1. Inicia **RcloneView**.
2. Ve a **Settings** > **Network & Misc**.
3. Localiza la sección **Web Server** (marcada como **Beta**).

<img src="/support/images/en/tutorials/web-frontend/web-server-settings.png" alt="Web Server settings in RcloneView" class="img-large img-center" />

---

## Paso 2: Configurar el servidor web

En la sección **Web Server**, configura lo siguiente:

- **Port**: El número de puerto para el servidor web (por defecto: `8580`). Cámbialo si el puerto por defecto entra en conflicto con otro servicio.
- **Username**: Establece un nombre de usuario para la autenticación (por ejemplo, `admin`).
- **Password**: Establece una contraseña para proteger el acceso a la interfaz web.

---

## Paso 3: Habilitar el servidor web

1. Activa **Enable Web Server** a **On**.
2. El estado cambia de **Stopped** a **Running on port 8580** (o el puerto que hayas configurado).
3. Aparece un botón **Restart Server**, que puedes usar después de cambiar cualquier configuración.

<img src="/support/images/en/tutorials/web-frontend/web-server-running.png" alt="Web Server running on port 8580" class="img-large img-center" />

---

## Paso 4: Acceder a la interfaz web

1. Abre un navegador web en la misma máquina.
2. Navega a `http://localhost:8580` (o el puerto que hayas configurado).
3. Aparece la pantalla de inicio de sesión de RcloneView. Introduce el **Username** y la **Password** que configuraste en el Paso 2, y luego haz clic en **Sign In**.

<img src="/support/images/en/tutorials/web-frontend/web-frontend-login.png" alt="RcloneView Web Frontend login screen" class="img-large img-center" />

4. La interfaz web de RcloneView se carga con la interfaz completa: el Explorador, Trabajos, Remotos y Configuración son accesibles desde la barra lateral izquierda.

<img src="/support/images/en/tutorials/web-frontend/web-frontend-explorer.png" alt="RcloneView Web Frontend Explorer" class="img-large img-center" />

---

## Paso 5: Permitir acceso remoto (opcional)

Por defecto, el servidor web solo acepta conexiones desde **localhost (127.0.0.1)**. Para acceder a RcloneView desde otros dispositivos de tu red:

1. Activa **Allow remote access** a **On**.
2. Haz clic en **Restart Server** para aplicar el cambio.
3. En otro dispositivo, abre un navegador y navega a `http://<your-computer-ip>:8580`.

> **Nota de seguridad:** Habilitar el acceso remoto permite que cualquier dispositivo de tu red pueda acceder a la interfaz web. Usa siempre un nombre de usuario y una contraseña seguros para proteger el acceso.

---

## Resumen

La interfaz web de RcloneView te ofrece acceso, desde el navegador, a todas las funciones principales:

- Habilita el servidor web desde **Settings > Network & Misc**
- Establece un puerto, nombre de usuario y contraseña para un acceso seguro
- Accede a la interfaz completa en `http://localhost:8580`
- Habilita opcionalmente el acceso remoto para otros dispositivos de tu red

Mantén RcloneView en ejecución en segundo plano y gestiona tu almacenamiento en la nube desde cualquier navegador.
