---
sidebar_position: 14
description: Copia rutas de carpetas completas, incluido el nombre del remoto, en un solo paso desde la barra de ruta de RcloneView para comandos y automatización precisos.
keywords:
  - rcloneview
  - rclone
  - copiar ruta
  - ruta del remoto
  - barra de ruta
  - automatización
  - terminal
tags:
  - RcloneView
  - path-bar
  - copy-path
  - rclone
date: 2025-12-05
author: tayson
---

# Uso de la función Copiar ruta completa en RcloneView

La función **Copiar ruta completa** te permite obtener toda la ruta de la carpeta —opcionalmente con el nombre del remoto— en una sola acción. Es perfecta para escribir comandos de `rclone`, ejecutar pruebas en Terminal, compartir rutas exactas en la nube y evitar errores en los scripts.

---

## Dónde encontrar Copiar ruta completa

Puedes acceder a Copiar ruta completa desde la **barra de ruta** en la parte superior del Explorador de archivos remoto.  
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path.png" alt="copy full path path bar" class="img-medium img-center" />

Haz clic derecho en la barra de ruta para ver estas opciones:

- **Cortar**
- **Copiar**
- **Pegar**
- **Copiar ruta completa (con remoto)**
- **Seleccionar todo**

<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-all.png" alt="copy full path context menu" class="img-medium img-center" />

---

## Seleccionar todo — resalta toda la ruta

Al elegir **Seleccionar todo** se resalta todo el texto del campo de ruta para que puedas copiarlo rápidamente.  
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-all.png" alt="copy full path select all" class="img-medium img-center" />

Después de copiar y pegar (por ejemplo, en el Bloc de notas), el nombre de la carpeta local (por ejemplo, `Meet recordings`) aparece exactamente como se muestra.  
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-copy-notepad.png" alt="copy full path notepad" class="img-medium img-center" />

---

## Copiar ruta completa (con remoto) — remoto + ruta de carpeta

**Copiar ruta completa (con remoto)** captura:

- Nombre del remoto
- Ruta completa de la carpeta
- Formato exacto `remoto:ruta` para `rclone`

Resultado de ejemplo:

```
mygoogledrive:Meet recordings
```

<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-copy-full-path.png" alt="copy full path with remote" class="img-medium img-center" />

Al pegarlo en el Bloc de notas se muestra la ruta lista para usar:  
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-copy-full-path-notepad.png" alt="copy full path with remote notepad" class="img-medium img-center" />

Este formato funciona directamente en comandos como:

```bash
rclone copy "mygoogledrive:Meet recordings" /local/backup
```

---

## Cuándo usar esta función

- **Escribir comandos de `rclone`**: pega rutas de remotos precisas al instante.
- **Probar rutas en Terminal**: usa `remoto:ruta` sin volver a escribir.
- **Evitar errores en scripts**: previene errores tipográficos en la automatización o los trabajos por lotes.
- **Compartir rutas con compañeros de equipo**: envía ubicaciones precisas para soporte o colaboración.

---

## Referencia rápida

| Acción                                  | Qué hace                                        |
| ---------------------------------------- | ------------------------------------------------ |
| **Copiar**                               | Copia el texto seleccionado en la barra de ruta   |
| **Seleccionar todo**                     | Selecciona todo el texto de la ruta               |
| **Copiar ruta completa (con remoto)**    | Copia el formato `remoto:ruta` (recomendado)      |
| **Pegar**                                | Inserta el texto del portapapeles en la barra de ruta |

La función Copiar ruta completa parece simple, pero para la automatización, los scripts y las transferencias precisas, es uno de los potenciadores de productividad más rápidos de RcloneView.
