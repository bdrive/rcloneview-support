---
sidebar_position: 13
description: Ejecuta comandos de la CLI de rclone directamente dentro del Terminal integrado de RcloneView para hacer pruebas, gestionar remotos y solucionar problemas.
keywords:
  - rcloneview
  - rclone
  - terminal
  - cli
  - gestión de remotos
  - solución de problemas
  - rclone config
tags:
  - RcloneView
  - Terminal
  - CLI
  - rclone
  - troubleshooting
date: 2025-12-04
author: tayson
---

# Uso del Terminal en RcloneView

RcloneView incluye un Terminal integrado para que puedas ejecutar comandos completos de la CLI de `rclone` sin abrir CMD, PowerShell o una shell del sistema. Es ideal para pruebas rápidas, gestionar remotos o capturar registros sin salir de la aplicación.

Esta guía cubre cómo abrir el Terminal, ejecutar comandos de `rclone`, expandir/reducir la vista y usar las opciones de copia para compartir resultados.

---

## Abrir el Terminal

- Haz clic en la pestaña **`Terminal`** en la parte inferior de RcloneView.  
  <img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-bottom.png" alt="terminal bottom" class="img-medium img-center" />
- El Terminal funciona como la interfaz de línea de comandos estándar de `rclone` y ejecuta comandos en el contexto actual de RcloneView.

---

## Listar los comandos disponibles de rclone

Escribe rclone y presiona la barra espaciadora para mostrar automáticamente todos los comandos compatibles.  
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone.png" alt="terminal input rclone" class="img-medium img-center" />

---

## Ver ayuda y detalles del remoto (`rclone about`)

- Para obtener ayuda general sobre `about`:  
  <img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about.png" alt="terminal input rclone about" class="img-medium img-center" />
- Para obtener información de almacenamiento de un remoto específico (ejemplo: `mygoogle`):
  ```bash
  rclone about "mygoogle:"
  ```
  <img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about-mygoogle.png" alt="terminal input rclone about my google" class="img-medium img-center" />

Ejemplo de resultado:  
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about-mygoogle-result.png" alt="terminal about my google result" class="img-medium img-center" />

---

## Listar todos los remotos configurados

Usa el comando `listremotes` para confirmar qué remotos están disponibles:

```bash
rclone listremotes
```

<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-listremotes.png" alt="rclone listremotes" class="img-medium img-center" />

---

## Expandir o reducir la vista del Terminal

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-expand.png" alt="terminal expand" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-shrink.png" alt="terminal shrink" class="img-medium img-center" />
</div>

- **Expandir**: cambia al Terminal en pantalla completa para salidas largas.
- **Reducir**: vuelve al diseño predeterminado.

---

## Crear un remoto mediante la CLI (`rclone config create`)

Ejemplo: crea un remoto de Google Drive llamado `mygoogledrive` y verifícalo:

```bash
rclone config create mygoogledrive drive
rclone listremotes
```

<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-config-create-drive.png" alt="rclone config create drive" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-config-create-check.png" alt="rclone config create check" class="img-medium img-center" />

---

## Copiar, pegar y copiar todo

Selecciona cualquier salida del Terminal para abrir el menú contextual y elegir **Copy**, **Paste** o **Copy All**.  
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-select-copy.png" alt="terminal select copy" class="img-medium img-center" />

Esto es útil para compartir registros con soporte o guardar resultados en la documentación.

---

## Casos de uso recomendados

- Probar comandos avanzados de `rclone` (`lsf`, `tree`, banderas de backend) antes de automatizarlos.
- Validar scripts o comandos del lado del servidor dentro de RcloneView.
- Gestionar o crear remotos rápidamente cuando la ruta de la GUI es más lenta.

:::caution Ten cuidado con los comandos destructivos
Comandos como `delete`, `purge`, o banderas de `sync` incorrectas pueden eliminar datos de forma permanente. Verifica dos veces las rutas y los remotos antes de ejecutarlos en el Terminal.
:::
