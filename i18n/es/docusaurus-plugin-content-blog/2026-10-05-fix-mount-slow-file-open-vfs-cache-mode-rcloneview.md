---
slug: fix-mount-slow-file-open-vfs-cache-mode-rcloneview
title: "Soluciona la apertura lenta de archivos en montajes en la nube — Ajusta la caché VFS con RcloneView"
authors:
  - alex
description: "Soluciona la apertura lenta de archivos en unidades en la nube montadas ajustando el modo de caché, el tamaño de caché y el tiempo de caché de directorios en Mount Manager de RcloneView."
keywords:
  - solucionar montaje en la nube lento
  - unidad montada lenta al abrir archivos
  - modo de caché VFS
  - rendimiento de rclone mount
  - tiempo de caché de directorios
  - retraso de unidad en la nube
  - montaje de RcloneView
  - rclone GUI
  - solución de problemas de montaje
tags:
  - RcloneView
  - troubleshooting
  - tips
  - mount
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Soluciona la apertura lenta de archivos en montajes en la nube — Ajusta la caché VFS con RcloneView

> Los ajustes de caché influyen en cómo responde una unidad en la nube montada, y puedes cambiarlos por montaje en Mount Manager.

Una unidad en la nube montada se siente como un disco local hasta que haces doble clic en un archivo grande y tienes que esperar. Las carpetas se listan despacio, las aplicaciones se bloquean al guardar o los medios se entrecortan. RcloneView expone las opciones de caché VFS de cada montaje, para que puedas ajustarlas por remoto en lugar de adivinar.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Revisa primero el modo de caché

Abre Mount Manager desde la pestaña Remote y edita el montaje. El modo de caché ofrece off, minimal, writes y full. El valor predeterminado es writes, que almacena en caché los archivos que se escriben en la unidad. Si sueles leer los mismos archivos de forma repetida, como documentos o medios, full también almacena en caché las lecturas, por lo que las aperturas repetidas pueden servirse desde el disco local. Off es el ajuste más ligero, pero envía cada lectura a la nube.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Ajustes de Mount Manager en RcloneView" class="img-large img-center" />

Edit y Delete están deshabilitados mientras una unidad está montada, así que desmóntala primero, cambia el ajuste y vuelve a montarla.

## Define el tamaño de caché y el tiempo de directorios

El tamaño máximo de caché es -1 de forma predeterminada, es decir, sin límite de tamaño, lo que puede llenar un disco pequeño. Establece un límite acorde con tu espacio libre y usa cache max age para controlar cuánto tiempo siguen siendo válidos los datos en caché. Dir cache time controla cuánto tiempo se recuerdan los listados de carpetas: un valor mayor reduce las consultas repetidas de carpetas, pero los cambios hechos por otros tardan más en aparecer.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Montaje de una carpeta remota desde la barra de herramientas del Explorer" class="img-large img-center" />

Imagina a un arquitecto abriendo planos de 300 MB desde un montaje compartido. El modo de caché full junto con un límite de tamaño razonable significa que la primera apertura descarga el archivo y las siguientes leen desde el disco local.

## Elige la herramienta adecuada para cada tarea

El montaje es ideal para abrir y editar archivos individuales. Para mover carpetas completas, un trabajo de sincronización o copia es más fácil de supervisar que arrastrar archivos por una unidad, y la sincronización, la copia y Folder Compare están disponibles con la licencia FREE. En Windows el tipo de montaje es cmount de forma predeterminada, y en Linux y macOS es nfsmount; Linux además necesita FUSE instalado.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Uso de un trabajo de sincronización para transferencias masivas en lugar de un montaje" class="img-large img-center" />

Si los problemas persisten, activa el registro de rclone en Ajustes, establece el nivel en DEBUG, reinicia rclone integrado y reproduce el problema.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre Mount Manager, desmonta la unidad lenta y haz clic en Edit.
3. Cambia el modo de caché a full para trabajo con muchas lecturas y establece un tamaño máximo de caché.
4. Aumenta dir cache time si la navegación es lenta, luego haz clic en Save y vuelve a montar.

Con ajustes de caché adaptados a tu forma de trabajar, una unidad en la nube montada puede comportarse como necesita tu flujo de trabajo.

---

**Guías relacionadas:**

- [Caché VFS — Rendimiento de montaje en RcloneView](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [Soluciona errores de disco lleno de la caché VFS con RcloneView](https://rcloneview.com/support/blog/fix-vfs-cache-disk-full-errors-rcloneview)
- [Monta almacenamiento en la nube como unidad local con RcloneView](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)

<CloudSupportGrid />
