---
slug: dry-run-preview-cloud-sync-rcloneview
title: "Vista previa de simulación (Dry Run) — Prueba la sincronización en la nube antes de aplicar cambios en RcloneView"
authors:
  - tayson
description: "Usa el modo de simulación (dry run) de RcloneView para previsualizar qué archivos se copiarán o eliminarán antes de que se ejecute cualquier sincronización en la nube — la comprobación de seguridad esencial para transferencias grandes o sensibles."
keywords:
  - simulación de sincronización en la nube
  - probar la sincronización antes de ejecutarla
  - dry run de RcloneView
  - vista previa de cambios de sincronización en la nube
  - simular copia de seguridad en la nube
  - comprobación de seguridad de sincronización en la nube
  - GUI de dry run de rclone
  - evitar la eliminación accidental de archivos
  - simulación de sincronización en la nube
  - verificar la sincronización antes de confirmar
tags:
  - feature
  - tips
  - troubleshooting
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Vista previa de simulación (Dry Run) — Prueba la sincronización en la nube antes de aplicar cambios en RcloneView

> Antes de sincronizar terabytes de datos o eliminar archivos de un destino, usa el modo de simulación (dry run) de RcloneView para previsualizar cada cambio planificado, sin mover un solo archivo.

Uno de los errores más costosos en los flujos de trabajo de sincronización en la nube es descubrir, después del hecho, que una tarea eliminó archivos importantes, sobrescribió versiones más recientes o incorporó miles de archivos que nunca debían incluirse. La función de simulación integrada de RcloneView elimina por completo este riesgo. Al simular una operación de sincronización antes de ejecutarla, puedes revisar exactamente qué archivos se copiarían y cuáles se eliminarían, lo que te da plena confianza en la configuración de la tarea antes de que comience cualquier transferencia real. Esto es especialmente valioso al configurar una nueva tarea por primera vez o después de ajustar las reglas de filtrado en una ya existente.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Qué muestra una simulación (dry run)

Cuando ejecutas una simulación en RcloneView, el motor de tareas ejecuta toda su lógica de sincronización contra el origen y el destino configurados, pero no realiza ninguna operación real sobre los archivos. El resultado es una vista previa detallada con dos categorías fundamentales: **archivos que se copiarían** del origen al destino, y **archivos que se eliminarían** del destino para que coincida con el origen. Puedes desplazarte por la lista completa de operaciones y verificar cada entrada antes de aprobar nada.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Reviewing planned file operations in a dry run simulation in RcloneView" class="img-large img-center" />

Esto importa especialmente en las tareas de sincronización unidireccional, donde el destino se modifica para reflejar exactamente el origen. Si un archivo se eliminó recientemente de la carpeta de origen pero todavía lo necesitas en el destino, la simulación revela la eliminación planificada antes de que ocurra. Un bufete de abogados que hace copia de seguridad de 500.000 documentos de casos en Amazon S3, por ejemplo, se beneficia enormemente al verificar cada lote programado antes de la ejecución, evitando cualquier pérdida accidental de datos.

## Cómo ejecutar una simulación (dry run) en RcloneView

Usar el modo de simulación en RcloneView es sencillo. En el **Job Manager**, crea o abre una tarea de sincronización y configura tu origen, destino y cualquier opción de filtrado, como exclusiones por tipo de archivo, tamaño máximo de archivo o límites de profundidad de carpetas. Cuando estés listo para probar, selecciona la opción **Dry Run** en lugar de una ejecución normal. RcloneView realiza la simulación y muestra la lista completa de operaciones planificadas en la pestaña Transferring; no se mueve ningún dato hasta que inicies intencionalmente una ejecución real.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Starting a dry run simulation for a cloud sync job in RcloneView" class="img-large img-center" />

Después de revisar los resultados de la simulación, puedes ajustar tus filtros y repetir la simulación tantas veces como sea necesario. Solo cuando la lista de operaciones planificadas coincida exactamente con tus expectativas deberías activar la sincronización real. Este enfoque iterativo resulta especialmente útil al trabajar con reglas de filtrado complejas en estructuras de directorios grandes que abarcan varios proveedores de la nube.

## Consultar los resultados de la simulación en el historial de tareas

RcloneView registra cada simulación en la vista **Job History**, claramente marcada como una ejecución de simulación junto a las ejecuciones reales de tareas. Puedes revisar el número simulado de archivos, el tamaño total proyectado, el tiempo transcurrido y cualquier advertencia o error que haya surgido, lo que te ofrece una visión completa del comportamiento de la tarea antes de confirmarla.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Dry run simulation recorded in RcloneView job history with status details" class="img-large img-center" />

Para los equipos que ejecutan copias de seguridad programadas de forma recurrente, realizar una simulación después de cualquier cambio de configuración es un paso de seguridad innegociable. No cuesta nada (no se transfiere ningún dato, no se consume almacenamiento), pero evita errores difíciles de revertir que, de otro modo, solo serían visibles después de completarse una sincronización.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre **Home tab > Sync** y configura una nueva tarea de sincronización con tu origen y destino.
3. Selecciona el modo **Dry Run** en el Job Manager para previsualizar todas las operaciones de archivos planificadas.
4. Revisa las listas de copia y eliminación, ajusta los filtros si es necesario y, luego, activa la sincronización real con confianza.

La simulación (dry run) es el hábito más simple que distingue las operaciones en la nube prudentes y reversibles de las sorpresas costosas.

---

**Guías relacionadas:**

- [Reglas de filtrado y sincronización selectiva con RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Migraciones a la nube verificadas por checksum con RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [Automatiza copias de seguridad diarias en la nube con RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
