---
slug: predefined-filters-sync-file-types-rcloneview
title: "Filtros predefinidos — Sincroniza solo los archivos que necesitas en RcloneView"
authors:
  - steve
description: "Usa los filtros predefinidos de RcloneView para sincronizar solo imágenes, vídeo, música o documentos en lugar de transferir carpetas completas."
keywords:
  - filtros de RcloneView
  - filtros predefinidos
  - sincronizar tipos de archivo
  - filtros de sincronización en la nube
  - sincronización selectiva
  - sincronizar solo imágenes
  - filtro de sincronización de vídeo
  - filtro de sincronización de documentos
  - filtro de Google Docs
tags:
  - RcloneView
  - feature
  - filters
  - sync
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Filtros predefinidos — Sincroniza solo los archivos que necesitas en RcloneView

> Omite los tipos de archivo que no necesitas y sincroniza solo los que sí, sin escribir reglas de exclusión a mano.

No todos los trabajos de sincronización deberían mover todos los archivos de una carpeta. Un estudio fotográfico que respalda una unidad compartida llena de archivos RAW, PSD y algún que otro PDF suelto normalmente solo se preocupa por las imágenes, no por las facturas que hay al lado. El paso de Configuración de filtros de RcloneView incluye filtros predefinidos de un clic para categorías de archivo comunes, de modo que puedes limitar un trabajo de sincronización exactamente al contenido que importa, sin construir un conjunto de reglas personalizado desde cero.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Qué cubren los filtros predefinidos

El paso 3 del asistente de sincronización, Configuración de filtros, ofrece filtros predefinidos de un clic para Música, Vídeo, Imagen, Documento, Google Docs y Box Docs. Al seleccionar uno se restringe el trabajo a los tipos de archivo coincidentes — elige Imagen, por ejemplo, y el trabajo de sincronización ignora todo lo demás en la carpeta de origen, sin importar lo anidado que esté ni qué más haya junto a él.

Esto importa para las carpetas de contenido mixto que se acumulan con el tiempo: la unidad compartida de un equipo de marketing llena de vídeos exportados, documentos de marca y hojas de cálculo no necesita reflejarse por completo en un remoto de archivo de vídeo. Un único filtro predefinido mantiene limpio el destino sin necesidad de una limpieza manual posterior.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Selección de un filtro de tipo de archivo predefinido en el asistente de sincronización de RcloneView" class="img-large img-center" />

Las opciones de Google Docs y Box Docs apuntan específicamente a formatos de documento nativos del proveedor que no se comportan como archivos normales durante una transferencia — útil al sincronizar desde Google Drive o Box cuando quieres separar los documentos nativos de los archivos binarios subidos.

## Combinar filtros predefinidos y personalizados

Los filtros predefinidos no son excluyentes con las reglas personalizadas. Puedes combinar un filtro de Imagen predefinido con exclusiones personalizadas adicionales — una regla de ruta `/thumbnails/*`, por ejemplo — para eliminar archivos de vista previa generados que, de otro modo, contaminarían una sincronización de solo imágenes. Los filtros personalizados también admiten límites de tamaño máximo de archivo y antigüedad máxima de archivo, por lo que un estudio fotográfico con 2 TB de archivos RAW podría combinar el filtro de Imagen con un límite de antigüedad para sincronizar solo las sesiones recientes en lugar de todo el archivo histórico.

A diferencia de las herramientas que solo montan, RcloneView también sincroniza y compara carpetas con la licencia FREE, de modo que este filtrado se aplica tanto si ejecutas una transferencia puntual como un trabajo guardado y repetible.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Trabajo de sincronización filtrado que transfiere solo archivos de imagen entre dos remotos" class="img-large img-center" />

## Verificar los resultados filtrados con Dry Run

Antes de aplicar una sincronización filtrada a una carpeta grande o poco conocida, ejecútala primero en modo Dry Run. Dry Run muestra la lista exacta de archivos que se copiarían y eliminarían con la configuración de filtros actual, la forma más rápida de confirmar que un filtro predefinido está capturando lo que esperas — y que no está excluyendo silenciosamente archivos que en realidad querías transferir.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ejecutar un dry run para previsualizar un trabajo de sincronización filtrado antes de ejecutarlo" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Inicia un nuevo trabajo de sincronización y selecciona tus remotos de origen y destino.
3. En el paso 3, Configuración de filtros, elige un filtro predefinido que coincida con el tipo de contenido que quieres sincronizar.
4. Ejecuta Dry Run para confirmar los resultados y luego guarda el trabajo para reutilizar el mismo filtro en futuras sincronizaciones.

Filtrar a nivel de sincronización, en lugar de ordenar archivos manualmente de antemano, mantiene las carpetas de destino centradas en el contenido que realmente necesitas allí.

---

**Guías relacionadas:**

- [Dry Run — Previsualiza la sincronización en la nube antes de transferir en RcloneView](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [Comparación de carpetas con filtro — Restringe comparaciones en RcloneView](https://rcloneview.com/support/blog/folder-compare-with-filter-rcloneview)
- [Bisync — Sincronización bidireccional en la nube con RcloneView](https://rcloneview.com/support/blog/bisync-bidirectional-cloud-sync-rcloneview)

<CloudSupportGrid />
