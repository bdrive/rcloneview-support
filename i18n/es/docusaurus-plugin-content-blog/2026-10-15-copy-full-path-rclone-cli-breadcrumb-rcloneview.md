---
slug: copy-full-path-rclone-cli-breadcrumb-rcloneview
title: "Copiar la ruta completa con el remoto — conecte la GUI y los comandos de rclone en RcloneView"
authors:
  - kai
description: "Use Copy Full Path en la ruta de navegación de RcloneView para obtener cadenas remote:path y ejecutarlas en el terminal de rclone integrado. Un flujo de trabajo práctico de la GUI a la CLI."
keywords:
  - ruta de remoto de rclone
  - copiar ruta completa rclone
  - ruta de navegación de RcloneView
  - terminal de rclone en la GUI
  - comando rclone about
  - sintaxis remote:path
  - flujo de trabajo de rclone GUI
  - ayuda para comandos de rclone
  - función de RcloneView
  - copiar ruta en la nube
tags:
  - RcloneView
  - feature
  - cli
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Copiar la ruta completa con el remoto — conecte la GUI y los comandos de rclone en RcloneView

> Un clic derecho convierte la carpeta que está explorando en una ruta de rclone lista para usar.

Quien haya escrito un comando de rclone conoce la dificultad de acertar con `remote:path`, sobre todo con espacios y carpetas anidadas. RcloneView lo resuelve con una opción del menú de la ruta de navegación que copia al portapapeles la ruta completa, incluido el nombre del remoto.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Qué hace Copy Full Path

Cada panel del Explorador tiene una barra de ruta de navegación que muestra dónde se encuentra. Al hacer clic derecho en ella encontrará Cortar, Copiar, Pegar, Seleccionar todo y **Copy Full Path (with Remote)**. La última opción copia la ubicación con el formato `mygoogledrive:Meet recordings`, que es exactamente la sintaxis que espera rclone.

<img src="/support/images/en/blog/new-remote.png" alt="Remotos listados en el explorador de RcloneView" class="img-large img-center" />

Como se incluye el nombre del remoto, no hay que adivinar a cuál de sus muchos remotos pertenece una carpeta. Esto es importante cuando gestiona varias cuentas del mismo proveedor.

## Péguela en el terminal integrado

RcloneView incluye una pestaña Terminal en la vista de información (Info View) inferior, con emulación completa de terminal. Escriba `rclone` seguido de un espacio para ver sugerencias de comandos y luego pegue la ruta copiada. Por ejemplo, `rclone about "remote:"` informa del uso de almacenamiento de un remoto y `rclone listremotes` lista todos los configurados. Ponga entre comillas las rutas que contengan espacios.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ejecución de trabajos y comandos dentro de RcloneView" class="img-large img-center" />

Este ir y venir entre la GUI y la CLI es útil cuando necesita un comando puntual que el asistente no ofrece, pero quiere seguir usando el Explorador visual para encontrar la carpeta correcta.

## Use las rutas en trabajos y documentación

Las rutas copiadas también resultan útiles fuera del terminal: pegarlas en un runbook, un ticket de soporte o el chat de un compañero garantiza que todos se refieren a la misma ubicación. Tras una transferencia, compruebe el resultado en la pestaña Transferring o en el historial de trabajos (Job History), que registra el estado, el tamaño y la velocidad de cada ejecución.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historial de trabajos con transferencias completadas" class="img-large img-center" />

RcloneView es una GUI construida sobre rclone, no un sustituto de este, por lo que los comandos que ejecuta en el terminal usan el mismo motor integrado que sus trabajos.

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añada un remoto y navegue hasta una carpeta en el Explorador.
3. Haga clic derecho en la barra de ruta y elija **Copy Full Path (with Remote)**.
4. Abra la pestaña Terminal, escriba `rclone about "` y pegue la ruta.

Menos errores de escritura, solución de problemas más rápida y una sola herramienta para hacer clic y para escribir.

---

**Guías relacionadas:**

- [Terminal de Rclone dentro de RcloneView](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)
- [Flujo de trabajo entre el terminal y la GUI](https://rcloneview.com/support/blog/rcloneview-terminal-gui-workflow)
- [Rutas de acceso directo con remotos Alias](https://rcloneview.com/support/blog/alias-remote-shortcut-paths-rcloneview)

<CloudSupportGrid />
