---
slug: fix-sync-filters-not-excluding-files-rcloneview
title: "Solucionar filtros de sincronización que no excluyen archivos — Reglas de exclusión correctas con RcloneView"
authors:
  - jay
description: "¿Los filtros de sincronización no excluyen archivos? Descubre por qué las reglas de exclusión omiten carpetas en RcloneView, cómo escribir patrones correctos y cómo confirmarlos con Dry Run."
keywords:
  - filtro de sincronización no funciona
  - excluir carpeta de la sincronización en la nube
  - filtro de rclone no excluye archivos
  - reglas de filtro de RcloneView
  - excluir carpeta .git de la sincronización
  - reglas de exclusión de sincronización en la nube
  - filtro de tamaño máximo de archivo
  - probar filtros con dry run
  - solución de problemas de sincronización selectiva en la nube
tags:
  - RcloneView
  - troubleshooting
  - tips
  - filters
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar filtros de sincronización que no excluyen archivos — Reglas de exclusión correctas con RcloneView

> Si los archivos que querías excluir siguen apareciendo en el destino, la causa suele ser cómo está anclado el patrón, no un filtro roto.

Un desarrollador sincroniza una carpeta de proyectos con Backblaze B2 y añade una exclusión para `.git`. A la mañana siguiente, el bucket contiene miles de objetos Git de todos modos. Las reglas de filtro siguen la lógica de coincidencia de rclone, así que una barra que falte cambia lo que abarca la regla. RcloneView coloca estas reglas en el Step 3 del asistente de sincronización y ofrece Dry Run para probarlas antes de que se mueva nada.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué una regla de exclusión omite archivos

La mayoría de los problemas de filtros se deben al anclaje. Un patrón que empieza por `/` solo coincide desde la raíz del origen de la sincronización. Un patrón sin ella coincide a cualquier profundidad. Los ejemplos de la configuración de filtros de RcloneView muestran la diferencia:

- `.iso` excluye los archivos con esa extensión en cualquier parte del árbol.
- `/.git/*` excluye solo los archivos situados directamente dentro de la carpeta `.git` de la raíz del origen.
- `.git/` excluye todas las carpetas `.git` a cualquier profundidad, que es lo que quiere la mayoría de los desarrolladores.

Si solo escribiste `/.git/*`, los repositorios anidados como `client-a/app/.git` se siguen sincronizando. Sus subcarpetas también, porque `*` se detiene en el límite de la carpeta. Cambia a la regla de carpeta sin anclar y los repositorios anidados quedan fuera.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir un remoto en RcloneView antes de configurar los filtros de sincronización" class="img-large img-center" />

El segundo error habitual es elegir la carpeta de origen equivocada. Los patrones anclados a la raíz son relativos a la carpeta elegida en el Step 1, así que subir el origen un nivel cambia lo que abarcan.

## Revisa los demás ajustes de filtro

Las reglas personalizadas no son los únicos filtros del asistente. El Step 3 también incluye **Max file size** (en MB), **Max file age** (con unidades `y`, `d`, `h`, `m`, `s`), **Max folder depth** y filtros predefinidos para Music, Video, Image, Document, Google Docs y Box Docs. Estos ajustes se combinan, por lo que un trabajo copiado hace tiempo puede comportarse de forma inesperada.

Por ejemplo, un límite de profundidad de carpetas olvidado tras una prueba hace que las subcarpetas más profundas se omitan sin aviso. Antes de reescribir las reglas personalizadas, abre el trabajo en Job Manager y elimina cualquier límite que no necesites.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Vista de transferencia de nube a nube en RcloneView con resultados de sincronización filtrados" class="img-large img-center" />

## Comprueba la corrección con Dry Run y la comparación

Nunca pruebes un cambio de filtro con datos reales. Ejecuta primero el trabajo en modo Dry Run. Muestra los archivos que se copiarían y los que se eliminarían. Si las rutas excluidas siguen apareciendo en la lista de copia, el patrón sigue siendo incorrecto.

Recuerda que los archivos excluidos tampoco se tocan en el destino. Si ya llegaron archivos no deseados al bucket, una sincronización unidireccional con el nuevo filtro los dejará allí. Usa Folder Compare para encontrarlos, selecciona las carpetas `.git` sobrantes en el lado de destino y elimínalas allí. Con la licencia PLUS, Folder Compare with Filter aplica las mismas reglas a la comparación, de modo que la vista muestra solo lo que el trabajo gestiona realmente.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare en RcloneView mostrando archivos que existen solo en un lado" class="img-large img-center" />

Cuando el Dry Run se vea bien, ejecuta el trabajo y compara el número de archivos en Job History con la vista previa del Dry Run.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History de RcloneView mostrando los archivos transferidos tras corregir los filtros" class="img-large img-center" />

## Primeros pasos

Los trabajos de sincronización, los filtros, Dry Run y Folder Compare están incluidos en la licencia FREE.

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre Job Manager, edita el trabajo y revisa la carpeta de origen del Step 1 y la configuración de filtros del Step 3.
3. Sustituye los patrones anclados a la raíz como `/.git/*` por `.git/` cuando la carpeta pueda aparecer a cualquier profundidad.
4. Ejecuta un Dry Run, confirma que las rutas excluidas han desaparecido y limpia los restos con Folder Compare.

Unas reglas de filtro exactas mantienen tus copias de seguridad ligeras y dejan los artefactos de compilación y los datos de repositorio fuera de tu factura de la nube.

---

**Guías relacionadas:**

- [Reglas de filtro de Rclone explicadas — Incluir y excluir](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [Dry Run — Previsualiza la sincronización antes de transferir](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [Folder Compare con filtro](https://rcloneview.com/support/blog/folder-compare-with-filter-rcloneview)

<CloudSupportGrid />
