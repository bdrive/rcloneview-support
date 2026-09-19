---
slug: copy-full-path-remote-paths-rcloneview
title: "Copiar ruta completa — Copia rápida de rutas remotas en RcloneView"
authors:
  - robin
description: "Usa el comando Copiar ruta completa de RcloneView para obtener al instante cadenas remote:path para comandos de rclone CLI, scripts y configuración de trabajos."
keywords:
  - RcloneView copiar ruta completa
  - ruta remota de rclone
  - copiar ruta con remoto
  - sintaxis de ruta de rclone CLI
  - barra de ruta de migas de pan
  - flujo de trabajo del terminal de RcloneView
  - rutas de scripting de rclone
  - copiar ruta remota en la nube
tags:
  - RcloneView
  - feature
  - cli
  - tips
  - productivity
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Copiar ruta completa — Copia rápida de rutas remotas en RcloneView

> Deja de volver a escribir a mano nombres de remotos y rutas de carpetas — haz clic derecho en la barra de migas de pan y copia exactamente la cadena `remote:path` que espera rclone.

Cualquiera que combine la interfaz gráfica de RcloneView con comandos de rclone CLI conoce esta fricción: encuentras una carpeta visualmente y luego tienes que reconstruir su ruta manualmente para referenciarla en un script o comando de terminal. La función Copiar ruta completa de RcloneView elimina por completo ese paso, generando exactamente el formato `mygoogledrive:Meet recordings` que usa rclone, listo para pegar directamente en un comando, un filtro de trabajo o un script de automatización.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dónde se encuentra el comando

Copiar ruta completa se encuentra en el menú contextual (clic derecho) de la barra de ruta de migas de pan, en la parte superior de cada panel del explorador, junto a Cortar, Copiar, Pegar y Seleccionar todo. Navega hasta cualquier carpeta — local o en la nube —, haz clic derecho en la propia barra de ruta (no en una fila de archivo) y elige Copiar ruta completa. RcloneView escribe el nombre del remoto y la ruta de la carpeta en el portapapeles con la misma sintaxis `remote:path` que esperan la propia CLI de rclone, los archivos de configuración y las llamadas a la API RC.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView breadcrumb path bar with right-click context menu open" class="img-large img-center" />

Esto importa porque rclone es estricto con esa sintaxis: dos puntos separan el nombre del remoto de la ruta, y equivocarse (una barra de más, unos dos puntos que faltan) es una de las causas más comunes de errores de "directorio no encontrado" cuando las personas escriben rutas de memoria a mano.

## Por qué supera a la entrada manual de rutas

Escribir rutas a mano deja de ser práctico en cuanto los nombres de carpeta incluyen caracteres Unicode, espacios o anidamientos profundos — precisamente el tipo de rutas fáciles de escribir mal y difíciles de depurar. Copiar ruta completa evita todo esto copiando la cadena literal que RcloneView ya resolvió al renderizar el árbol de carpetas, de modo que lo que pegas coincide garantizadamente con el contenido real del remoto. RcloneView también sincroniza y compara carpetas — con la licencia FREE —, y Copiar ruta completa funciona igual en los tres casos: Explorador, configuración de trabajos de sincronización y Comparación de carpetas.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Selecting a folder path for comparison in RcloneView" class="img-large img-center" />

Es especialmente útil al configurar la carpeta de origen o destino de un trabajo de sincronización, o al escribir una regla de filtro personalizada que necesita un prefijo de ruta exacto — pegar una ruta copiada evita los pequeños errores tipográficos que excluyen silenciosamente los archivos equivocados.

## Combinarlo con el terminal integrado

Copiar ruta completa es más potente combinado con el Terminal de Rclone en la vista de información inferior. Copia una ruta desde el Explorador, cambia a la pestaña Terminal y pégala directamente en un comando como `rclone lsf` o `rclone about` sin salir de la aplicación ni volver a escribir nada. Esto convierte a RcloneView en una herramienta de flujo de trabajo híbrida: explora visualmente para encontrar la carpeta que necesitas y luego pasa directamente al control a nivel de CLI para todo lo que la interfaz gráfica aún no ofrece.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an rclone command referencing a copied remote path" class="img-large img-center" />

Para quienes escriben scripts de tareas de mantenimiento recurrentes — una comprobación con `rclone size`, un `rclone check` manual entre dos carpetas —, este atajo elimina el paso más propenso a errores al escribir ese comando a mano.

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html) si aún no lo has hecho.
2. Abre cualquier remoto en el Explorador y navega hasta la carpeta que quieres referenciar.
3. Haz clic derecho en la barra de ruta de migas de pan y selecciona Copiar ruta completa.
4. Pega la cadena `remote:path` copiada en un trabajo de sincronización, una regla de filtro o el Terminal de Rclone integrado.

Una vez que esto se convierta en un hábito, escribir rutas remotas a mano empezará a parecer la forma lenta de trabajar.

---

**Guías relacionadas:**

- [Terminal de RcloneView: usa todo el poder de la CLI de rclone dentro de una interfaz gráfica](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)
- [Atajos de teclado y consejos de productividad de RcloneView](https://rcloneview.com/support/blog/keyboard-shortcuts-productivity-rcloneview)
- [10 consejos del explorador de dos paneles que acelerarán la gestión de archivos en la nube en RcloneView](https://rcloneview.com/support/blog/two-pane-explorer-productivity-tips-rcloneview)

<CloudSupportGrid />
