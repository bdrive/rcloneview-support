---
slug: rcloneview-terminal-rclone-cli-inside-gui
title: "RcloneView Terminal: aprovecha todo el poder de la CLI de rclone dentro de una GUI"
authors:
  - tayson
description: "Ejecuta la CLI completa de rclone dentro del Terminal de RcloneView con autocompletado, modo de pantalla completa y registros copiables--sin necesidad de una shell independiente."
keywords:
  - rclone terminal
  - rcloneview terminal
  - rclone cli gui
  - rclone commands
  - cloud storage cli tool
  - cloud automation
  - rclone beginners
  - rclone power users
  - cloud devops tools
  - rcloneview
tags:
  - sync
  - file-management
  - cli

---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView Terminal: aprovecha todo el poder de la CLI de rclone dentro de una GUI

> Ejecuta todos los comandos de rclone sin salir de RcloneView. El nuevo Terminal integra autocompletado, registros copiables y salida en pantalla completa en la misma ventana que usas para explorar, comparar y sincronizar.

RcloneView ahora incluye un Terminal integrado para que puedas ejecutar la CLI completa de rclone dentro de la aplicación, sin necesidad de abrir CMD, PowerShell u otra ventana de terminal adicional. Los principiantes pueden aprender comandos con contexto visual, mientras que ingenieros, usuarios avanzados y administradores de TI mantienen sus flags de automatización, registros detallados y flujo de scripting sin cambiar de contexto.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ¿Por qué integrar la CLI en una GUI?

- Deja de alternar entre una GUI para explorar y una shell para flags avanzados o diagnósticos.
- Mantén las salidas y registros de rclone junto a tus transferencias, montajes y tareas programadas.
- Enseña rclone a tu equipo de forma segura con indicaciones visuales guiadas en lugar de terminales en blanco.

## ¿Qué es el Terminal de RcloneView?

El Terminal se encuentra en la parte inferior del espacio de trabajo de RcloneView y ejecuta los mismos binarios de rclone que ya usas en la aplicación. Escribe `rclone` y presiona la barra espaciadora para ver todos los comandos compatibles, y luego ejecútalo de inmediato--Windows, macOS y Linux comparten la misma experiencia.

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-bottom.png" alt="Terminal tab in RcloneView" class="img-medium img-center" />

## Beneficios para principiantes

- Sin estrés de configuración: rclone ya viene integrado, así que puedes practicar comandos sin instalar nada ni buscar rutas del sistema.
- El autocompletado facilita el descubrimiento--escribe `rclone ` para ver la lista de comandos antes de ejecutar cualquiera.
- La salida permanece dentro de la aplicación, lo que facilita copiarla, volver a ejecutarla o compararla con lo que ves en la GUI.

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone.png" alt="Autocomplete list for rclone commands" class="img-medium img-center" />

## Beneficios para ingenieros y usuarios avanzados

- Mantén un único espacio de trabajo para montajes, Compare, Scheduler y experimentos de CLI, sin cambiar de contexto.
- Captura registros detallados (`-vv`) para diagnosticar latencia en la nube o limitación de la API, y luego copia todo con un clic.
- Configura remotos más rápido con `rclone config create`, valida backends y continúa con tareas programadas mediante scripts.
- Usa la vista expandida para leer cómodamente salidas largas o scripts de varias líneas.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-expand.png" alt="Expanded Terminal view" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-shrink.png" alt="Shrink Terminal view" class="img-medium img-center" />
</div>

## Características clave de un vistazo

- **Descubrimiento automático de comandos**: escribe `rclone` + espacio para ver cada comando en contexto antes de ejecutarlo.
- **Terminal en pantalla completa**: expande para listados largos, reduce cuando necesites echar un vistazo a Compare o Transfers.
- **Copiar, Pegar, Copiar todo**: comparte registros con tu equipo o con soporte sin necesidad de exportar archivos.

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-select-copy.png" alt="Copy and paste options in the Terminal" class="img-medium img-center" />

## Comandos prácticos para probar ahora mismo

### 1) Comprobar el uso de almacenamiento de un remoto
```bash
rclone about "mygoogle:"
```
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about-mygoogle.png" alt="rclone about output in RcloneView Terminal" class="img-medium img-center" />

### 2) Descubrir todos los remotos configurados
```bash
rclone listremotes
```
<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-listremotes.png" alt="rclone listremotes in RcloneView Terminal" class="img-medium img-center" />

### 3) Crear un nuevo remoto mediante la CLI
```bash
rclone config create mygoogledrive drive
rclone listremotes
```
<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-config-create-drive.png" alt="Create Google Drive remote with rclone config create" class="img-medium img-center" />

### 4) Previsualizar carpetas antes de una transferencia
```bash
rclone lsf mygoogledrive:Projects --dirs-only --recursive --max-depth 2
```

### 5) Ensayar una migración con registros detallados
```bash
rclone sync mygoogledrive:Projects s3backup:Projects --dry-run -vv --progress
```
Usa `--dry-run` para simular los cambios y `-vv` para detectar backends lentos o limitación antes de ejecutar la tarea real.

## Cuándo elegir la GUI frente al Terminal

- **Usa la GUI** para arrastrar y soltar entre nubes, comparar diferencias visualmente, programar tareas recurrentes o montar almacenamiento como unidad.
- **Usa el Terminal** para probar flags de backend, ejecutar diagnósticos puntuales o ejecutar comandos avanzados de rclone que sean más rápidos de escribir que de hacer clic.
- **Usa ambos juntos**: previsualiza con Compare, ajusta el plan con flags de CLI y luego guarda el flujo de trabajo como una tarea programada.

## Inicio rápido y seguridad

1. Abre la pestaña **Terminal**, escribe `rclone ` y elige un comando de la lista.
2. Comienza con comandos de solo lectura (`listremotes`, `lsf`, `about`) antes de ejecutar cualquier operación de sincronización o eliminación.
3. Para un recorrido guiado con capturas de pantalla, consulta [Usar el Terminal en RcloneView](/howto/rcloneview-basic/using-terminal-in-rcloneview).

> Consejo profesional: comandos destructivos como `delete`, `purge` o un `sync` sin verificar pueden eliminar datos. Verifica dos veces las rutas y los remotos antes de presionar Enter.

## Conclusión

El Terminal de RcloneView pone toda la CLI de rclone junto a las herramientas visuales que ya usas, para que los principiantes aprendan más rápido y los expertos trabajen más rápido. Pruébalo hoy mismo para mantener tus operaciones en la nube, experimentos de automatización y registros de depuración en un solo lugar.

<CloudSupportGrid />
