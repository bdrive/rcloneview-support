---
slug: folder-compare-with-filter-rcloneview
title: "Comparación de carpetas con filtro — Comparaciones precisas en RcloneView"
authors:
  - alex
description: "Excluye el ruido de las comparaciones de carpetas con las reglas de filtro de RcloneView — omite artefactos de compilación, cachés y tipos de archivo no deseados antes de comparar."
keywords:
  - filtro de comparación de carpetas
  - excluir archivos de la comparación
  - reglas de filtro de RcloneView
  - comparar carpetas patrones de exclusión
  - filtro de diferencias de carpetas en la nube
  - omitir comparación de carpeta .git
  - comparación selectiva de carpetas
  - filtro de verificación de copia de seguridad en la nube
tags:
  - RcloneView
  - feature
  - folder-comparison
  - filters
  - compare
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Comparación de carpetas con filtro — Comparaciones precisas en RcloneView

> Una comparación de carpetas completa solo es útil si los resultados no quedan sepultados bajo archivos que nunca te importaron en primer lugar.

Ejecutar una comparación de carpetas simple entre dos ubicaciones de almacenamiento grandes suele devolver un muro de diferencias que no tienen nada que ver con los datos que realmente necesitas verificar — cachés de compilación, carpetas `.git`, archivos temporales e imágenes ISO que nunca debieron respaldarse. La comparación de carpetas con filtro de RcloneView te permite excluir esas categorías antes de que se ejecute la comparación, de modo que los resultados reflejen solo los archivos que importan.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué importan las comparaciones filtradas

Una comparación sin filtrar entre dos árboles de directorios grandes trata cada archivo como igualmente importante, lo que significa que un repositorio de origen con un historial `.git` voluminoso o una carpeta de proyecto llena de imágenes `.iso` puede eclipsar las diferencias que realmente intentas detectar. Filtrar el alcance de la comparación a nombres de carpeta y tipos de archivo relevantes convierte un resultado ruidoso y difícil de leer en una lista enfocada de exactamente lo que cambió en los datos que te importan.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Resultados de comparación de carpetas filtrada en RcloneView" class="img-large img-center" />

RcloneView también sincroniza y compara carpetas con la licencia FREE, con la comparación filtrada añadida como una mejora de nivel PLUS para los equipos que la necesitan.

## Configuración de las reglas de filtro

Las reglas de filtro siguen el mismo patrón utilizado en otras partes de RcloneView: excluir por extensión, ruta de carpeta o nombre exacto de carpeta. Una regla como `.iso` elimina todos los archivos ISO de la comparación sin importar dónde se encuentren, `/.git/*` excluye solo los archivos `.git` de nivel raíz, `/.git/` elimina específicamente la carpeta `.git` raíz, y `.git/` elimina toda carpeta `.git` sin importar cuán profundamente esté anidada. Combina varias reglas para acotar la comparación exactamente a los tipos de archivo y rutas que vale la pena revisar.

<img src="/support/images/en/blog/new-remote.png" alt="Configuración de reglas de filtro para la comparación de carpetas en RcloneView" class="img-large img-center" />

Esta es una función de la licencia PLUS — la comparación de carpetas básica sin filtrar (que muestra archivos solo a la izquierda, solo a la derecha, iguales y diferentes) está disponible en todos los niveles de licencia, y el filtrado se construye sobre ese mismo motor de comparación.

## Escenarios prácticos de filtrado

Los equipos de desarrollo que comparan una carpeta de proyecto con una copia de seguridad en la nube suelen excluir `node_modules/`, `.git/` y los directorios de salida de compilación, ya que son regenerables y no deberían influir en si la copia de seguridad está completa. Los equipos de medios que archivan bibliotecas de fotos RAW a menudo excluyen archivos de caché auxiliares y vistas previas en miniatura para que la comparación se centre en los activos de imagen reales. Y cualquiera que audite una migración entre dos cuentas en la nube puede excluir carpetas temporales o de trabajo que nunca debían sobrevivir al traslado, manteniendo las listas de solo-izquierda y solo-derecha limitadas a los archivos que realmente requieren atención.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Revisión de la salida de comparación filtrada antes de actuar sobre las diferencias" class="img-large img-center" />

Una vez que finaliza la comparación filtrada, se aplican las mismas acciones que en cualquier otra comparación de carpetas: copiar los archivos solo-izquierda al lado derecho, revisar los archivos solo-derecha antes de eliminarlos y actualizar todo lo marcado como diferente — solo que sin la distracción de los archivos excluidos a propósito.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Inicia **Comparar** desde la pestaña Home y selecciona tus dos carpetas.
3. Abre la configuración de filtros y añade reglas de exclusión para los nombres de carpeta y tipos de archivo que quieras dejar fuera.
4. Ejecuta la comparación y revisa una lista de resultados acotada a lo que realmente importa.

Una comparación filtrada convierte un muro de ruido en una lista corta y accionable — exactamente lo que necesitas antes de decidir qué copiar, actualizar o dejar como está.

---

**Guías relacionadas:**

- [Análisis profundo de la comparación de carpetas — Detecta cada diferencia entre ubicaciones de almacenamiento en la nube](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [Reglas de filtro de Rclone explicadas — Patrones de inclusión y exclusión con RcloneView](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [Reglas de filtro para sincronización selectiva — Guía de RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
