---
slug: free-vs-plus-license-rcloneview
title: "Licencia FREE vs PLUS — Comparación de funciones en RcloneView"
authors:
  - alex
description: "Compara las funciones de las licencias FREE y PLUS de RcloneView lado a lado — programación, múltiples ventanas, montaje automático y comparación filtrada — para elegir el plan adecuado."
keywords:
  - licencia RcloneView
  - RcloneView FREE vs PLUS
  - funciones RcloneView PLUS
  - sincronización en la nube programada
  - gestor de archivos multiventana
  - montaje automático al inicio
  - comparación de carpetas con filtro
  - comparación de licencias RcloneView
  - automatización de sincronización en la nube
  - gestor de archivos multiplataforma
tags:
  - RcloneView
  - feature
  - guide
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Licencia FREE vs PLUS — Comparación de funciones en RcloneView

> Sepa exactamente qué desbloquea cada licencia de RcloneView antes de construir su flujo de trabajo de almacenamiento en la nube en torno a ella.

Elegir entre la licencia FREE y PLUS no debería requerir adivinar. RcloneView divide claramente su conjunto de funciones: la licencia FREE ya cubre la gestión completa de archivos, sincronización y montaje en más de 90 proveedores, mientras que PLUS añade automatización y capacidades multi-instancia para usuarios avanzados y equipos. Esta guía desglosa exactamente qué incluye cada nivel para que puedas ajustar la licencia a tu forma real de trabajar.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Lo que la licencia FREE ya incluye

La licencia FREE no es una versión de prueba reducida — es un conjunto de herramientas completo para el uso diario. Montar y desmontar unidades en la nube, operaciones completas del explorador de archivos (copiar, mover, eliminar, renombrar), Folder Compare básico, y todo el sistema de Sync & Job Management están incluidos sin costo. Eso significa que la sincronización 1:N (una fuente reflejada en múltiples destinos), el Job History con registros detallados, las vistas previas de Dry Run antes de ejecutar una sincronización, y la exportación/importación de configuraciones de trabajos funcionan todos en FREE.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing completed sync jobs on the FREE license" class="img-large img-center" />

A diferencia de las herramientas solo de montaje, RcloneView también sincroniza y compara carpetas — ya en la licencia FREE — a través de los mismos más de 90 proveedores en la nube, conectados mediante Remote Manager con OAuth o configuración basada en credenciales según el servicio.

## Lo que desbloquea PLUS

PLUS está diseñado para quienes necesitan que RcloneView funcione sin supervisión o en múltiples contextos a la vez. La función estrella es Schedule-Based Sync: programación estilo crontab con campos de minuto, hora, día de la semana, día del mes y mes, además de un simulador de programación para previsualizar los próximos horarios de ejecución antes de confirmarlos.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring a crontab-style sync schedule in RcloneView PLUS" class="img-large img-center" />

Junto con la programación, PLUS añade Auto Mount on Startup (para que las unidades montadas estén listas en el momento en que arranca tu equipo), Auto Start Schedule on Startup, soporte Multi-Window para ejecutar instancias independientes de RcloneView con su propio estado, y Folder Compare with Filter para restringir las comparaciones por nombre de carpeta o tipo de archivo.

## Elegir la licencia adecuada para tu flujo de trabajo

Si activas las transferencias manualmente, navegas por el almacenamiento en la nube como en un gestor de archivos, y ocasionalmente ejecutas una comparación o sincronización, FREE cubre todo el flujo de trabajo. Si necesitas que los trabajos de sincronización se ejecuten según un horario sin abrir la aplicación, que las unidades se monten automáticamente tras un reinicio, o varias ventanas independientes de RcloneView para proyectos separados, PLUS elimina los pasos manuales.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job manually from the RcloneView Job Manager" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Configura tus remotos y ejecuta una sincronización o montaje manual para confirmar que el conjunto de funciones de FREE se ajusta a tu uso diario.
3. Si notas que repites la misma transferencia a la misma hora cada día, prueba a crear una programación para ver si la programación de PLUS se ajusta a tus necesidades.
4. Activa una clave de licencia en Help > Activate License una vez que hayas decidido qué nivel se ajusta a tu flujo de trabajo.

Ajustar la licencia a tus hábitos reales — y no al revés — mantiene tu configuración de almacenamiento en la nube simple y predecible.

---

**Guías relacionadas:**

- [Buenas prácticas de programación — Cron y reintentos en RcloneView](https://rcloneview.com/support/blog/schedule-best-practices-cron-retry-rcloneview)
- [Explorer paralelo multiventana en RcloneView](https://rcloneview.com/support/blog/multi-window-parallel-explorer-rcloneview)
- [Folder Compare con filtro en RcloneView](https://rcloneview.com/support/blog/folder-compare-with-filter-rcloneview)

<CloudSupportGrid />
