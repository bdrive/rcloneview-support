---
slug: fix-cloud-sync-not-detecting-new-files-rcloneview
title: "Solucionar sincronización en la nube que no detecta archivos nuevos — Cómo resolverlo con RcloneView"
authors:
  - jay
description: "Solucione los trabajos de sincronización en la nube que pasan por alto archivos nuevos o modificados recientemente en RcloneView ajustando la configuración de caché, los filtros y el comportamiento de actualización."
keywords:
  - sincronización en la nube no detecta archivos nuevos
  - rcloneview sincronización archivos faltantes
  - solucionar trabajo de sincronización que no se actualiza
  - caché de directorio listado obsoleto
  - solución de problemas de rcloneview
  - problema de actualización de sincronización en la nube
  - archivos nuevos no se sincronizan
  - solucionar detección de sincronización de rclone
  - el trabajo no detecta los cambios
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - job-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar sincronización en la nube que no detecta archivos nuevos — Cómo resolverlo con RcloneView

> Cuando un trabajo de sincronización se completa sin errores pero deja atrás archivos recién creados, la causa casi siempre es un listado de carpeta obsoleto, no una conexión rota.

Un patrón de soporte frecuente: un trabajo de sincronización se completa sin errores, pero los archivos que se añadieron a la carpeta de origen minutos antes nunca aparecen en el destino. Parece pérdida de datos, pero en la mayoría de los casos el trabajo simplemente leyó un listado de directorio en caché en lugar del estado actual del remoto. RcloneView le ofrece las herramientas para diagnosticar y solucionar esto sin conjeturas.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Comprobar si la vista de Explorer simplemente está desactualizada

Antes de tocar cualquier configuración del trabajo, confirme que los archivos realmente faltan en la sincronización y no que solo están ocultos en la vista. Abra el remoto de origen en el panel Explorer y pulse F5 (o Cmd+R en macOS) para forzar un Reload. La lista de archivos de RcloneView puede conservar una instantánea desactualizada de una carpeta si no se ha actualizado desde que se añadieron los archivos, y esto por sí solo resuelve una sorprendente cantidad de reportes de "archivo faltante".

Si los archivos aparecen después de un Reload manual pero el trabajo de sincronización aún así los omitió en su última ejecución, el problema reside en el filtrado o el comportamiento de caché del propio trabajo, no en la vista de Explorer.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ejecutar manualmente un trabajo de sincronización en RcloneView para forzar un nuevo escaneo" class="img-large img-center" />

## Revisar las reglas de filtro y la configuración de Max File Age

El paso 3 del asistente de sincronización le permite establecer un filtro Max File Age, y es fácil dejar un valor demasiado agresivo tras probar un trabajo. Si Max File Age está configurado de forma muy estricta, los archivos que quedan fuera de esa ventana — incluidos algunos archivos recién añadidos con una marca de tiempo más antigua heredada de una copia previa en la nube — quedan excluidos silenciosamente de la ejecución. Abra Edit Job para la sincronización afectada y revise el paso Filtering Settings en busca de cualquier regla Max File Age, Max File Size o filtro personalizado que pueda estar excluyendo los archivos nuevos por nombre, extensión o ruta.

RcloneView monta Y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux, por lo que la misma lógica de filtrado se aplica ya sea que esté solucionando un trabajo local a la nube o uno de nube a nube.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Revisando la configuración de filtros de sincronización que puede excluir archivos nuevos" class="img-large img-center" />

## Descartar retrasos de caché del directorio de montaje

Si los archivos "faltantes" residen detrás de una unidad montada en lugar de una exploración directa del remoto, la configuración Dir Cache Time en su configuración de montaje suele ser la culpable habitual. Un tiempo de caché de directorio largo acelera la navegación, pero también significa que la vista montada no reflejará los archivos añadidos en otro lugar hasta que ese caché expire. Reduzca Dir Cache Time en Mount Manager para los remotos donde la actualidad importa más que la velocidad de navegación bruta, o desmonte y vuelva a montar manualmente para forzar una actualización inmediata.

Ejecute un Dry Run en el trabajo de sincronización después — lista exactamente qué archivos ahora ve como nuevos, para que pueda confirmar la solución antes de comprometerse a una transferencia real.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historial de trabajos que muestra una ejecución de sincronización corregida tras arreglar la configuración de detección" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fuerce un Reload (F5) en el remoto de origen para descartar una vista de Explorer desactualizada.
3. Abra Edit Job y revise Filtering Settings en busca de un Max File Age o una regla personalizada que excluya los archivos nuevos.
4. Para remotos montados, reduzca Dir Cache Time en Mount Manager, luego vuelva a montar y vuelva a ejecutar el trabajo con Dry Run para confirmar.

La mayoría de los problemas de sincronización de "archivo faltante" se deben a un listado en caché o a un filtro pasado por alto, y no a un fallo real de transferencia, y Dry Run y Job History de RcloneView le ofrecen una forma rápida de confirmar que la solución funcionó.

---

**Guías relacionadas:**

- [Reglas de filtro — Sincronización selectiva en RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Dry Run — Vista previa de sincronización en la nube en RcloneView](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [Solucionar sincronización programada que no se ejecuta — Cómo resolverlo con RcloneView](https://rcloneview.com/support/blog/fix-scheduled-sync-not-running-rcloneview)

<CloudSupportGrid />
