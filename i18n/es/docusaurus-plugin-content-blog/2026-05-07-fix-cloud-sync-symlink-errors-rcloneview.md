---
slug: fix-cloud-sync-symlink-errors-rcloneview
title: "Corrige errores de enlaces simbólicos en la sincronización con la nube — Resuelve problemas de transferencia de enlaces con RcloneView"
authors:
  - tayson
description: "Aprende a corregir errores de enlaces simbólicos durante la sincronización con la nube en RcloneView — comprende cómo rclone gestiona los enlaces simbólicos y configura los ajustes correctos para evitar fallos."
keywords:
  - errores de enlaces simbólicos en sincronización con la nube
  - enlace simbólico rclone
  - solución de problemas de RcloneView
  - flag copy-links
  - errores de sincronización con la nube
  - transferencia de enlaces simbólicos
  - flags de rclone
  - errores de sincronización de archivos
tags:
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corrige errores de enlaces simbólicos en la sincronización con la nube — Resuelve problemas de transferencia de enlaces con RcloneView

> Los enlaces simbólicos pueden interrumpir silenciosamente los trabajos de sincronización con la nube — aquí te explicamos cómo entender el comportamiento de rclone con los enlaces simbólicos y configurar RcloneView para gestionarlos correctamente.

Si tus trabajos de sincronización con la nube fallan con errores inesperados o parece que faltan archivos, los enlaces simbólicos podrían ser la causa. Rclone — el motor que impulsa RcloneView — tiene un comportamiento predeterminado específico para los enlaces simbólicos que sorprende a muchos usuarios. Entender ese comportamiento y saber qué ajustes modificar en RcloneView resolverá rápidamente la mayoría de los problemas de sincronización relacionados con enlaces simbólicos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cómo gestiona rclone los enlaces simbólicos por defecto

Por defecto, rclone sigue los enlaces simbólicos y transfiere el archivo o directorio al que apunta el enlace simbólico — no transfiere el enlace simbólico en sí. Esto significa que si tienes un enlace simbólico que apunta a un archivo grande en otra parte de tu sistema, rclone copiará el contenido real del archivo al destino en la nube. En la mayoría de los casos este es el comportamiento deseado, pero puede causar confusión cuando el destino del enlace simbólico no existe, está fuera de la raíz de sincronización o crea referencias circulares.

Cuando el destino de un enlace simbólico falta o es inaccesible, rclone registrará un error y omitirá el enlace simbólico. Estos archivos omitidos pueden ser fáciles de pasar por alto en un registro de transferencia largo. El panel de **Historial de trabajos** de RcloneView registra estos errores, así que siempre revisa el historial después de que un trabajo se complete para confirmar que ningún archivo fue omitido silenciosamente.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Checking job history for symlink errors in RcloneView" class="img-large img-center" />

## Usando el flag --copy-links en RcloneView

Si quieres que rclone siga los enlaces simbólicos y copie el contenido del destino (incluso si ese destino está fuera de la raíz de sincronización), puedes pasar el flag `--copy-links` a través del ajuste **Global Rclone Flags** de RcloneView. Abre las preferencias de RcloneView, localiza el campo **Global Rclone Flags** y añade `--copy-links`. Esto indica a rclone que trate los enlaces simbólicos como archivos normales, copiando el contenido subyacente.

Usa `--copy-links` con cuidado en sistemas donde los enlaces simbólicos apuntan a directorios muy grandes, ya que puede aumentar drásticamente el tamaño de la transferencia. Ten en cuenta también que algunos proveedores de almacenamiento en la nube tienen restricciones de longitud de nombre de archivo o de ruta que pueden causar problemas si el destino del enlace simbólico tiene una ruta larga.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring global rclone flags in RcloneView settings" class="img-large img-center" />

## Excluyendo enlaces simbólicos con filtros

Una alternativa más segura para muchos flujos de trabajo es excluir por completo los enlaces simbólicos de la sincronización. En la configuración de trabajos de RcloneView, puedes añadir reglas de filtro para omitir los enlaces simbólicos. Usa la opción `--exclude` con patrones que coincidan con los nombres de tus enlaces simbólicos, o usa `--links` para copiar los enlaces simbólicos como archivos de texto (almacenando la ruta de destino del enlace en lugar del contenido). Este enfoque mantiene tu sincronización predecible sin el riesgo de transferencias inesperadamente grandes.

Para proyectos como repositorios de desarrollo de software donde los enlaces simbólicos son comunes, combinar reglas de filtro con una ejecución de prueba es la mejor práctica antes de ejecutar una sincronización real. El modo de ejecución de prueba de RcloneView muestra exactamente qué archivos se transferirían, omitirían o generarían errores — dándote confianza antes de comprometerte a una sincronización completa.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using filters and dry run to handle symlinks in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Después de una sincronización fallida, abre **Historial de trabajos** para identificar los mensajes de error relacionados con enlaces simbólicos.
3. Ve a las preferencias de RcloneView y añade `--copy-links` a **Global Rclone Flags** si quieres que se transfiera el contenido de los enlaces simbólicos.
4. Alternativamente, añade reglas de filtro en el **Asistente de trabajos** para excluir los enlaces simbólicos del alcance de la sincronización.
5. Ejecuta una **ejecución de prueba** para verificar el comportamiento antes de ejecutar una sincronización real.

Gestionar correctamente los enlaces simbólicos es uno de esos pequeños detalles de configuración que marca una gran diferencia en la fiabilidad de la sincronización — y RcloneView te ofrece todas las herramientas para hacerlo bien.

---

**Guías relacionadas:**

- [Flags personalizados de rclone y opciones avanzadas en RcloneView](https://rcloneview.com/support/blog/custom-rclone-flags-advanced-options-rcloneview)
- [Reglas de filtro para sincronización selectiva en RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Solución de errores de rclone con RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
