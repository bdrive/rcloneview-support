---
sidebar_position: 13
description: "Habilite el Bloqueo de aplicación en RcloneView para requerir una contraseña al inicio y proteger remotos, transferencias, trabajos, montajes y la base de datos interna."
keywords:
  - rcloneview
  - bloqueo de aplicación
  - contraseña
  - seguridad
  - rclone_view.db
  - historial de trabajos
  - historial de transferencias
  - configuración
tags:
  - RcloneView
  - Tutorial
  - security
  - settings
  - password
date: 2025-12-08
author: tayson
---

# Usar el Bloqueo de aplicación (protección por contraseña)

**El Bloqueo de aplicación** requiere una contraseña cuando RcloneView se inicia o se vuelve a abrir, protegiendo sus remotos, registros de transferencia, trabajos, información de montajes, historial de trabajos y la base de datos interna (`rclone_view.db`). Es ideal para PC compartidos o corporativos donde varios usuarios pueden acceder a la máquina.

<img src="/support/images/en/tutorials/applock/app-lock-locking.png" class="img-medium img-center" alt="App Lock enabled screen" />

## ¿Por qué usar el Bloqueo de aplicación?

- Mantenga privados los trabajos, montajes e historial de transferencias de RcloneView.  
- Adecuado para PC compartidos o entornos de oficina.  
- Proteja operaciones sensibles de sincronización/montaje y trabajos automatizados.  
- Agrega una capa de seguridad incluso si hay trabajos automáticos ejecutándose en segundo plano.

## Cómo habilitar el Bloqueo de aplicación

### Paso 1 — Abrir Configuración

- Vaya a **Settings → General Settings** desde el menú superior.  
  <img src="/support/images/en/tutorials/applock/mainwindow-menu-settings.png" class="img-medium img-center" alt="Open settings menu" />

### Paso 2 — Activar el Bloqueo de aplicación en la pestaña General

- En **General**, marque **Enable App Lock**.  
- Ingrese la contraseña que desea usar.  
- Haga clic en **Close** para guardar.  

<img src="/support/images/en/tutorials/applock/app-lock-settings.png" class="img-medium img-center" alt="App Lock toggle" />
<img src="/support/images/en/tutorials/applock/app-lock-settings-password.png" class="img-medium img-center" alt="Set App Lock password" />

## Cómo funciona el Bloqueo de aplicación

Cuando el Bloqueo de aplicación está habilitado, al iniciar RcloneView o volver a abrir su ventana se solicitará la contraseña antes de conceder el acceso.

<img src="/support/images/en/tutorials/applock/app-lock-unlock.png" class="img-medium img-center" alt="App Lock unlock prompt" />

## Restablecer el Bloqueo de aplicación (Reset App)

Si olvida la contraseña, haga clic en **Reset App** en la ventana de solicitud de contraseña.

<img src="/support/images/en/tutorials/applock/app-lock-reset-app.png" class="img-medium img-center" alt="Reset App button" />
<img src="/support/images/en/tutorials/applock/app-lock-reset-app-confirm.png" class="img-medium img-center" alt="Reset App confirmation" />

**Advertencia:** Reset App borra todos los datos internos de RcloneView:

- Contraseña del Bloqueo de aplicación  
- Todos los valores de configuración  
- Historial de transferencias  
- Definiciones de trabajos  
- Historial de trabajos  

No se restablece: **rclone config** (`rclone.conf`) permanece, por lo que las definiciones de remotos se mantienen intactas.

## Uso recomendado

- PC compartidos o públicos.  
- Entornos empresariales o institucionales.  
- Cuando ejecuta muchos trabajos automatizados y desea evitar manipulaciones.  
- Cuando necesita proteger el historial de trabajos/transferencias y los datos internos.

## Resumen

| Elemento | Descripción |
| --- | --- |
| Función | Requiere contraseña cuando RcloneView se inicia o se vuelve a abrir |
| Protege | Configuración, trabajos, historial de transferencias, archivo de base de datos |
| Activador | Inicio de la aplicación o reapertura |
| Restablecer | **Reset App** borra los datos internos; conserva `rclone.conf` |
| Ideal para | PC compartidos, entornos de alta seguridad |

El Bloqueo de aplicación es un pequeño interruptor que ofrece una protección sólida. Actívelo para mantener privadas su actividad e historial de RcloneView.
