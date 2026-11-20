---
slug: fix-junk-system-files-ds-store-thumbs-db-sync-rcloneview
title: "Elimina los archivos basura del sistema en la sincronización en la nube — Excluye .DS_Store y Thumbs.db con RcloneView"
authors:
  - kai
description: "Evita que .DS_Store, Thumbs.db y desktop.ini llenen de desorden tus copias de seguridad en la nube. Usa los filtros de sincronización, Dry Run y Folder Compare de RcloneView para mantenerlos fuera."
keywords:
  - excluir .DS_Store de la sincronización en la nube
  - Thumbs.db copia de seguridad en la nube
  - desktop.ini desorden en la sincronización
  - eliminar archivos basura del almacenamiento en la nube
  - rclone excluir archivos del sistema
  - filtros personalizados de RcloneView
  - sincronización en la nube limpia macOS Windows
  - filtro de sincronización para archivos ocultos
  - consejos de sincronización en la nube multiplataforma
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

# Elimina los archivos basura del sistema en la sincronización en la nube — Excluye .DS_Store y Thumbs.db con RcloneView

> Los archivos de metadatos del sistema operativo llenan de desorden tus copias de seguridad. Unas pocas reglas de filtro los mantienen fuera para siempre.

Abre una carpeta compartida en la nube que hayan usado tanto Mac como PC con Windows y normalmente encontrarás un `.DS_Store` en cada directorio, un `Thumbs.db` junto a cada grupo de imágenes y archivos `desktop.ini` repartidos por todo el árbol. Son pequeños, pero inflan el recuento de archivos, aparecen como "diferentes" en las comparaciones y provocan resubidas innecesarias. RcloneView te permite excluirlos de los trabajos de sincronización con reglas de filtro y luego confirmar que el destino está limpio.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué estos archivos siguen apareciendo

El Finder de macOS escribe `.DS_Store` para guardar la configuración de visualización de una carpeta. El Explorador de Windows crea `Thumbs.db` para almacenar en caché las miniaturas de imágenes y `desktop.ini` para guardar las personalizaciones de carpetas. Cada vez que alguien navega por una carpeta sincronizada o una unidad montada, el sistema operativo puede reescribir estos archivos, de modo que la siguiente sincronización detecta un archivo "modificado" y lo transfiere de nuevo.

Piensa en una agencia de diseño con 40.000 carpetas de proyectos en un NAS que se sincroniza con la nube cada noche. Aunque el trabajo real solo haya cambiado en unas pocas carpetas, cada carpeta que se haya abierto puede generar un nuevo archivo de metadatos, lo que llena de ruido el registro del trabajo y oculta las transferencias que importan.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView Job History showing file counts inflated by system metadata files" class="img-large img-center" />

## Añade filtros de exclusión a tu trabajo de sincronización

Abre el trabajo en **Job Manager**, haz clic en **Edit** y ve a **Step 3: Filtering Settings**. En los filtros personalizados, añade una regla de exclusión por cada nombre de archivo: `.DS_Store`, `Thumbs.db` y `desktop.ini`. Si tu equipo también usa Office, considera excluir los archivos de bloqueo temporales que empiezan por `~$`. Las reglas usan la sintaxis de filtros de rclone, la misma que los ejemplos documentados como `.iso` y `.git/`.

Los filtros se aplican cada vez que se ejecuta el trabajo, incluidas las ejecuciones programadas con la licencia PLUS, así que solo tienes que configurarlos una vez. Usa **Export** en Job Manager para guardar el trabajo como archivo JSON e **Import** para cargarlo en otros equipos, de modo que todos usen las mismas reglas.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Editing sync job settings in RcloneView to add exclusion filters" class="img-large img-center" />

## Previsualiza, limpia y verifica

Ejecuta un **Dry Run** después de guardar. La vista previa ya no debería mostrar archivos de metadatos para transferir. Si siguen apareciendo, revisa la ortografía y las mayúsculas de cada regla, porque un error tipográfico es un motivo habitual por el que un filtro parece ignorarse.

Los filtros impiden que se transfieran nuevas copias, pero los archivos que ya están en la nube permanecen allí. Abre el destino en el panel Explorer, localiza los restos y elimínalos con el clic derecho **Delete**. Para una revisión completa, abre **Compare** entre el origen y el destino y usa "Show right-only files" para encontrar archivos de metadatos que hayan quedado de ejecuciones anteriores. Con la licencia PLUS, Folder Compare with Filter aplica las mismas exclusiones a la vista de comparación.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using RcloneView Folder Compare to find leftover .DS_Store and Thumbs.db files" class="img-large img-center" />

## Primeros pasos

RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana en Windows, macOS y Linux, así que las mismas reglas de filtro funcionan sin importar qué sistema operativo creó los archivos.

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Edita tu trabajo de sincronización y añade `.DS_Store`, `Thumbs.db` y `desktop.ini` como filtros de exclusión personalizados.
3. Ejecuta un **Dry Run** para confirmar que los archivos de metadatos ya no aparecen para transferir.
4. Usa **Compare** para encontrar y eliminar los restos que ya están en la nube.

Registros de trabajo más cortos y copias de seguridad más limpias hacen que los cambios importantes sean más fáciles de detectar.

---

**Guías relacionadas:**

- [Soluciona los filtros de sincronización que no excluyen archivos — Reglas de exclusión correctas con RcloneView](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)
- [Filtros de profundidad máxima de carpetas y tamaño máximo de archivo — Controla qué se sincroniza en RcloneView](https://rcloneview.com/support/blog/max-folder-depth-file-size-filters-rcloneview)
- [Soluciona las carpetas Escritorio y Documentos vacías en macOS — Permisos con RcloneView](https://rcloneview.com/support/blog/fix-macos-empty-folders-permissions-rcloneview)

<CloudSupportGrid />
