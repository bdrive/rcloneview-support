---
slug: fix-mount-read-only-cannot-save-files-rcloneview
title: "Solucionar el montaje en la nube de solo lectura que no permite guardar archivos — con RcloneView"
authors:
  - steve
description: "¿Una unidad en la nube montada no permite guardar ni editar archivos? Revise la opción Read only de RcloneView, el modo de caché, los permisos y FUSE para que el montaje vuelva a ser escribible."
keywords:
  - montaje unidad en la nube solo lectura
  - no se pueden guardar archivos en unidad montada
  - rclone mount solo lectura
  - solución de problemas de montaje RcloneView
  - modo de caché VFS writes
  - montaje FUSE Linux
  - error de escritura en unidad en la nube
  - ajustes del administrador de montajes
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

# Solucionar el montaje en la nube de solo lectura que no permite guardar archivos — con RcloneView

> Cuando una unidad en la nube montada rechaza los guardados, la causa suele ser un ajuste del montaje o un permiso, y ambos se comprueban rápidamente.

Ha montado un remoto, ha abierto un documento y el guardado falla, o los archivos se copian pero no se pueden editar. Antes de culpar al proveedor de la nube, revise cómo se configuró el montaje. RcloneView expone todas las opciones relevantes en un solo cuadro de diálogo, de modo que puede encontrar la causa sin tocar la línea de comandos. RcloneView también sincroniza y compara carpetas, con las funciones básicas disponibles en la licencia FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Compruebe primero la opción Read Only

Los ajustes de montaje incluyen un interruptor **Read only**, desactivado por defecto. Si estaba activado cuando se guardó el montaje, se rechaza toda escritura. Abra el administrador de montajes desde la pestaña Remote, desmonte la entrada y edítela. Edit y Delete están desactivados mientras una unidad está montada, por lo que es necesario desmontar antes de cambiar nada.

Desactive Read only y elija Save and mount.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Administrador de montajes de RcloneView mostrando los ajustes de montaje" class="img-large img-center" />

## Revise el modo de caché

El modo de caché VFS predeterminado es **writes**, que almacena en búfer local los archivos escritos para que las aplicaciones puedan guardar con normalidad. Establecerlo en off o minimal puede romper los programas que esperan desplazarse (seek) o reescribir archivos in situ. Si un editor falla al guardar, pruebe writes o full.

Vigile también el espacio libre de la ubicación de la caché. Un disco de caché lleno provoca fallos de escritura que parecen problemas de permisos. Si lo sospecha, consulte la guía relacionada sobre errores de disco lleno en la caché VFS que aparece más abajo.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Configuración del modo de caché al montar desde el explorador de remotos" class="img-large img-center" />

## Descarte causas de la cuenta y de la plataforma

Algunos remotos son de solo lectura por naturaleza. El remoto HTTP solo ofrece acceso de lectura, y una carpeta compartida sobre la que solo se le dieron permisos de visualización no se puede escribir, sea cual sea el ajuste del montaje. Pruébelo subiendo un archivo desde el panel Explorer: si eso también falla, el problema está en el remoto o en sus permisos, no en el montaje.

En Linux, montar requiere FUSE (se recomienda fuse3). Si otros usuarios necesitan acceso, active **Allow other**. En Windows, un montaje que aparece como unidad de red puede comportarse de forma distinta con algunas aplicaciones, así que pruebe a alternar esa opción.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historial de trabajos para revisar operaciones de escritura fallidas" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Desmonte la unidad, abra su entrada en el administrador de montajes y confirme que Read only está desactivado.
3. Establezca el modo de caché en writes y confirme el espacio libre en disco.
4. Pruebe una subida en el Explorer para separar los permisos del remoto de los ajustes del montaje.

La mayoría de los fallos de escritura se deben a una de estas comprobaciones, y todas llevan unos minutos.

---

**Guías relacionadas:**

- [Solucionar desconexiones y caídas del montaje en la nube con RcloneView](https://rcloneview.com/support/blog/fix-cloud-mount-disconnect-drops-rcloneview)
- [Solucionar errores de disco lleno en la caché VFS con RcloneView](https://rcloneview.com/support/blog/fix-vfs-cache-disk-full-errors-rcloneview)
- [Solucionar la apertura lenta de archivos en montajes — modo de caché VFS con RcloneView](https://rcloneview.com/support/blog/fix-mount-slow-file-open-vfs-cache-mode-rcloneview)

<CloudSupportGrid />
