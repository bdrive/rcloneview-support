---
slug: fix-mount-stale-files-dir-cache-rcloneview
title: "Solucionar que el montaje muestre archivos obsoletos — Dir Cache Time explicado con RcloneView"
authors:
  - morgan
description: "Solucione que una unidad en la nube montada muestre archivos obsoletos o faltantes en RcloneView ajustando correctamente el Dir cache time y el VFS cache mode."
keywords:
  - el montaje muestra archivos antiguos
  - RcloneView dir cache time
  - archivos obsoletos en la unidad montada
  - corregir listado de montaje desactualizado
  - la unidad en la nube no se actualiza
  - discrepancia de VFS cache mode
  - solución de problemas de montaje en RcloneView
  - caché de directorio en montaje en la nube
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

# Solucionar que el montaje muestre archivos obsoletos — Dir Cache Time explicado con RcloneView

> Una unidad en la nube montada que todavía muestra un archivo eliminado o que oculta uno recién creado normalmente no está averiada — su caché de directorio simplemente no ha caducado aún. Así se soluciona en RcloneView.

Al montar un remoto como unidad local, RcloneView no vuelve a listar cada carpeta con cada clic —mantiene una caché de directorio de corta duración para que la navegación se sienta instantánea en lugar de ir y volver al proveedor en la nube en cada pulsación. Eso es excelente para la velocidad, pero significa que los cambios hechos desde otro dispositivo, otra ventana de RcloneView o la propia aplicación web del proveedor pueden tardar un momento en aparecer en la carpeta montada. Esta guía explica cuándo ese retraso es normal y cómo ajustarlo cuando no lo es.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Entender el Dir Cache Time

La configuración de montaje de RcloneView incluye un ajuste **Dir cache time**, que controla cuánto tiempo permanece válido el listado de una carpeta antes de que el montaje vuelva a comprobar el remoto en busca de cambios. Esto es distinto del ajuste VFS **Cache mode** (off / minimal / writes / full), que rige el almacenamiento en caché del contenido de los archivos en lugar de la estructura de directorios. Un Dir cache time corto hace que el montaje refleje los cambios remotos casi de inmediato, pero envía más llamadas de listado al proveedor; un Dir cache time largo reduce las llamadas a la API a costa de un retraso mayor antes de que aparezcan archivos nuevos o eliminados.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Opciones de configuración de montaje, incluido el Dir cache time, en RcloneView" class="img-large img-center" />

Si está montando un remoto en el que varias personas o dispositivos escriben simultáneamente —por ejemplo, una carpeta compartida de Google Drive—, la ventana de caché predeterminada puede dar la impresión de que RcloneView "no detectó" un archivo que en realidad se agregó hace segundos desde otra ubicación. No se ha pasado nada por alto; el montaje simplemente aún no ha actualizado el listado de esa carpeta.

## Solucionar un montaje que no muestra archivos nuevos

Empiece por actualizar manualmente antes de asumir que hay un problema real. En el panel Explorer o en el navegador de archivos del sistema operativo apuntando al montaje, forzar una recarga de la carpeta (F5, o salir y volver a entrar al directorio) suele mostrar los cambios de inmediato sin esperar a que la caché caduque por sí sola. Si los archivos siguen sin aparecer después de una actualización manual, puede que sea necesario desmontar y volver a montar a través de **Mount Manager**, ya que un proceso VFS de rclone atascado a veces puede conservar un listado incluso más antiguo de lo que sugeriría el Dir cache time configurado.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Actualizando el listado de una carpeta remota montada en RcloneView" class="img-large img-center" />

Para remotos donde la visibilidad casi en tiempo real importa más que la eficiencia bruta de la API, reduzca el valor de Dir cache time en la configuración de Edit del montaje antes de guardar y volver a montar. Aquí hay una contrapartida: establecer este valor demasiado bajo en un remoto muy activo aumenta el número de solicitudes de listado que envía RcloneView, lo que puede activar límites de tasa por parte del proveedor en servicios que limitan las llamadas a la API por minuto.

## Elegir el Cache Mode junto con el Dir Cache Time

El Dir cache time y el VFS Cache mode resuelven problemas distintos, así que arreglar uno sin revisar el otro a menudo deja el problema subyacente resuelto solo a medias. Si los archivos eliminados siguen apareciendo como accesibles en el montaje (en lugar de que los archivos nuevos no aparezcan), eso es más probable que sea un síntoma del Cache mode —el valor predeterminado **writes** almacena en caché local el contenido de los archivos escritos recientemente, mientras que **full** también almacena en caché el contenido leído, y en ambos casos una copia almacenada localmente puede sobrevivir más allá del estado actual del remoto hasta que la caché se valide. Combinar un Dir cache time más corto con un Cache mode adecuado a cómo se usa realmente el remoto resuelve la mayoría de los problemas de listados obsoletos.

<img src="/support/images/en/blog/new-remote.png" alt="Ajustando la configuración de caché de montaje de un remoto en RcloneView" class="img-large img-center" />

RcloneView monta y sincroniza más de 90 proveedores desde la misma ventana en Windows, macOS y Linux, de modo que estos ajustes de caché se aplican de la misma manera sin importar si el montaje apunta a Google Drive, a un bucket de S3 o a un servidor WebDAV autoalojado.

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abra **Mount Manager**, seleccione el montaje afectado y compruebe su valor actual de Dir cache time.
3. Reduzca el Dir cache time para remotos que cambian con frecuencia desde varias fuentes, y desmonte/vuelva a montar para aplicarlo.
4. Revise también la configuración de Cache mode si el síntoma real es contenido de archivo desactualizado, no solo listados desactualizados.

Un montaje que refleja la nube con precisión, en un ritmo que coincide con cómo se usa realmente el remoto, es mejor que adivinar "por qué no se sincroniza esto" cada vez.

---

**Guías relacionadas:**

- [VFS Cache — Mejore el rendimiento de montaje de unidades en la nube en RcloneView](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [Solucionar errores de disco lleno de VFS Cache — Gestione la caché de montaje con RcloneView](https://rcloneview.com/support/blog/fix-vfs-cache-disk-full-errors-rcloneview)
- [Solucionar errores de montaje de Rclone y FUSE en RcloneView](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />
