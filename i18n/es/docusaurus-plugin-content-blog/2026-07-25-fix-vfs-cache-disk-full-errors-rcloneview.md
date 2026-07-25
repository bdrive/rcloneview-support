---
slug: fix-vfs-cache-disk-full-errors-rcloneview
title: "Solucionar errores de disco lleno de la caché VFS — Gestionar la caché de montaje con RcloneView"
authors:
  - robin
description: "Descubra por qué una unidad en la nube montada llena su disco local y cómo solucionar los errores de disco lleno de la caché VFS usando la configuración de caché de RcloneView."
keywords:
  - caché VFS disco lleno
  - solucionar errores de caché VFS
  - caché de montaje rclone llena
  - modo de caché de RcloneView
  - tamaño máximo de caché de montaje
  - espacio en disco de montaje en la nube
  - modo de caché VFS writes
  - configuración de montaje de RcloneView
  - antigüedad máxima de caché
tags:
  - RcloneView
  - troubleshooting
  - tips
  - mount
  - vfs
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de disco lleno de la caché VFS — Gestionar la caché de montaje con RcloneView

> Que una unidad en la nube montada llene su disco local suele significar que el modo de caché está configurado más alto de lo que su flujo de trabajo necesita — así se diagnostica y se corrige en RcloneView.

Montar almacenamiento en la nube como una unidad local depende de una caché VFS (sistema de archivos virtual) para que las lecturas y escrituras sean rápidas y fiables, pero esa caché reside en su disco local y puede consumir silenciosamente varios gigabytes si está mal configurada. Cuando un montaje deja de aceptar escrituras o el sistema operativo informa que el disco está lleno aunque su almacenamiento en la nube tenga espacio de sobra, la caché VFS —y no el remoto— es casi siempre la causa. RcloneView expone todos los ajustes de caché relevantes directamente en la pantalla de configuración de montaje, por lo que solucionar esto no requiere editar a mano un archivo de configuración de rclone.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué la caché VFS llena su disco local

Las opciones de montaje de RcloneView incluyen cuatro modos de caché: off, minimal, writes (el predeterminado) y full. En modo "writes", los archivos que modifica se almacenan en caché localmente hasta que terminan de subirse. En modo "full", los archivos que simplemente abre para leer también se almacenan en caché localmente para poder releerlos sin volver a acceder a la red —lo cual es excelente para el rendimiento, pero significa que una biblioteca multimedia o un conjunto de datos grande al que se accede a través del montaje puede llenar silenciosamente su unidad.

<img src="/support/images/en/blog/new-remote.png" alt="Mount configuration screen showing VFS cache mode options in RcloneView" class="img-large img-center" />

Si observa que el espacio en disco desaparece en la unidad que aloja su directorio de caché de RcloneView, en lugar de en las estadísticas de uso de su propio almacenamiento en la nube, este es el primer ajuste que debe revisar.

## Elegir el modo de caché adecuado

Para el uso diario en la mayoría de los casos, el modo "writes" es el equilibrio adecuado: solo almacena en caché lo que se está modificando activamente, manteniendo el uso de disco acotado a su trabajo actual. Reserve el modo "full" para escenarios en los que realmente necesite releer sin conexión archivos grandes, como la edición de vídeo directamente desde un montaje, y vuelva a "writes" o "minimal" en cuanto ese proyecto termine. El modo "minimal" almacena en caché lo mínimo y es la opción más segura si el espacio en disco es limitado.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Comparing writes and full VFS cache modes for a cloud mount" class="img-large img-center" />

RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux, por lo que los mismos ajustes de caché se aplican independientemente del remoto que haya montado.

## Configurar el tamaño máximo de caché y la antigüedad máxima

Más allá del propio modo de caché, RcloneView le permite limitar la caché con un tamaño máximo de caché (en bytes, o -1 para ilimitado) y una antigüedad máxima de caché, que controla cuánto tiempo siguen siendo válidos los datos almacenados en caché antes de descartarse. Establecer un tamaño máximo concreto —por ejemplo, por debajo de su espacio libre en disco— evita que una sola sesión de lectura grande llegue a consumir toda la unidad, incluso en modo "full". Combínelo con una antigüedad máxima más corta si trabaja con archivos que cambian con frecuencia en otro lugar.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting cache max size and cache max age for a mount in RcloneView" class="img-large img-center" />

## Limpiar una caché que ya está llena

Si un montaje ya está rechazando escrituras porque la caché se llenó, desmóntelo desde Mount Manager, lo que libera los datos almacenados en caché, y luego vuelva a montarlo con un modo de caché más bajo o un tamaño máximo explícito antes de reanudar el trabajo. Revisar la pestaña Log con el registro de nivel Debug activado de antemano puede confirmar si la expulsión de caché —y no un error de red o de permisos— fue realmente la causa.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Unmounting and re-mounting a cloud drive from Mount Manager after a cache disk full error" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abra Mount Manager y edite la configuración del montaje afectado.
3. Cambie el modo de caché a "writes" o "minimal" y establezca un tamaño máximo de caché concreto.
4. Desmonte y vuelva a montar para aplicar los nuevos límites, y luego supervise el uso de disco durante el uso normal.

Unos minutos ajustando el modo de caché y los tamaños convierten un impredecible error de disco lleno en un montaje que se comporta exactamente como se espera.

---

**Guías relacionadas:**

- [Caché VFS y rendimiento de montaje en RcloneView](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [Solucionar el buffering de Plex ajustando la caché VFS en RcloneView](https://rcloneview.com/support/blog/plex-vfs-cache-rcloneview)
- [Solucionar las desconexiones de montajes en la nube con RcloneView](https://rcloneview.com/support/blog/fix-cloud-mount-disconnect-drops-rcloneview)

<CloudSupportGrid />
