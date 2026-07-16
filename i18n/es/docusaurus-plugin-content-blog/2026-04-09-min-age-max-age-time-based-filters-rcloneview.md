---
slug: min-age-max-age-time-based-filters-rcloneview
title: "Usa los filtros de tiempo Min-Age y Max-Age en RcloneView"
authors:
  - tayson
description: "Usa los filtros de tiempo min-age y max-age en RcloneView para sincronizar, copiar o hacer copias de seguridad solo de los archivos modificados dentro de una ventana de tiempo específica. Transfiere cambios recientes u omite archivos antiguos."
keywords:
  - rcloneview
  - filtro min-age
  - filtro max-age
  - sincronización basada en tiempo
  - rclone min-age
  - rclone max-age
  - sincronizar solo archivos recientes
  - filtrar por fecha
  - tiempo de sincronización incremental
  - filtro de fecha de sincronización en la nube
tags:
  - feature
  - filters
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Usa los filtros de tiempo Min-Age y Max-Age en RcloneView

> No todos los trabajos de sincronización necesitan transferir todos los archivos. Los filtros de tiempo de RcloneView te permiten enfocarte solo en los archivos modificados dentro de una ventana específica: sincroniza los cambios de hoy, omite archivos con más de 30 días de antigüedad o haz copias de seguridad solo de las subidas recientes.

Las opciones `--min-age` y `--max-age` de rclone son herramientas potentes para controlar qué archivos participan en una operación de sincronización, copia o movimiento según su fecha de modificación. RcloneView expone estas opciones a través de su interfaz de flags personalizados, permitiendo un control preciso de la selección de archivos basada en tiempo sin tocar la línea de comandos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Entendiendo Min-Age y Max-Age

Las dos opciones funcionan como filtros de tiempo sobre las fechas de modificación de los archivos:

- **`--max-age`**: Incluye solo los archivos modificados dentro de la ventana de tiempo especificada. Un archivo modificado hace 2 horas pasa `--max-age 24h`. Un archivo modificado hace 3 días no pasa `--max-age 24h` y se omite.
- **`--min-age`**: Incluye solo los archivos modificados *antes* de la ventana de tiempo especificada. Un archivo modificado hace 30 días pasa `--min-age 7d`. Un archivo modificado ayer no pasa `--min-age 7d` y se omite.

Piénsalo así:
- `--max-age 24h` = "archivos más nuevos que 24 horas" (modificados recientemente)
- `--min-age 7d` = "archivos más antiguos que 7 días" (no modificados recientemente)

## Formato de tiempo

Ambas opciones aceptan formatos de tiempo flexibles:

| Formato | Ejemplo | Significado |
|---|---|---|
| Duración | `30s`, `5m`, `2h`, `7d`, `4w` | Segundos, minutos, horas, días, semanas |
| Combinado | `1d2h30m` | 1 día, 2 horas, 30 minutos |
| Fecha absoluta | `2026-04-01` | Archivos antes/después del 1 de abril de 2026 |
| Fecha y hora | `2026-04-01T15:00:00` | Archivos antes/después del 1 de abril a las 3 PM |

Los valores de duración son relativos a la hora actual cuando se ejecuta el trabajo.

## Caso de uso 1: Sincronizar solo los cambios de hoy

Cuando tienes un almacenamiento en la nube grande con terabytes de datos pero solo quieres sincronizar los archivos que cambiaron hoy:

```
--max-age 24h
```

Agrega esto al campo de flags personalizados en la configuración del trabajo de RcloneView. El trabajo de sincronización solo considerará los archivos modificados en las últimas 24 horas, reduciendo drásticamente el tiempo dedicado a listar y comparar archivos. Esto es útil para copias de seguridad incrementales diarias donde sabes que solo un pequeño porcentaje de archivos cambia cada día.

## Caso de uso 2: Archivar archivos antiguos

Mueve archivos con más de 90 días de antigüedad desde el almacenamiento activo al almacenamiento en frío:

```
--min-age 90d
```

Usa esto con una operación de **mover** (no de sincronización) para transferir archivos con más de 90 días de antigüedad desde Google Drive a S3 Glacier. Los archivos se eliminan de Google Drive después de una transferencia exitosa, liberando espacio en el almacenamiento activo mientras se conservan en el archivo.

## Caso de uso 3: Sincronización por ventana de tiempo

Combina ambas opciones para enfocarte en una ventana de tiempo específica. Por ejemplo, sincroniza archivos modificados entre hace 7 y 30 días:

```
--min-age 7d --max-age 30d
```

Esto es útil para flujos de trabajo de archivado escalonado: los archivos con menos de 7 días de antigüedad permanecen en el almacenamiento activo, los archivos entre 7 y 30 días se mueven al almacenamiento intermedio, y los archivos con más de 30 días se mueven al almacenamiento en frío.

## Caso de uso 4: Omitir archivos modificados recientemente

Durante una migración, es posible que quieras omitir los archivos que se están editando activamente para evitar transferir trabajo incompleto:

```
--min-age 1h
```

Esto asegura que solo se transfieran los archivos que han permanecido estables durante al menos una hora. Los archivos que se están editando o guardando actualmente se dejan para la siguiente ejecución de sincronización.

## Caso de uso 5: Copia de seguridad nocturna del trabajo reciente

Para un trabajo de copia de seguridad nocturno que captura solo el trabajo del día:

```
--max-age 25h
```

Usar 25 horas (en lugar de 24) proporciona una superposición de 1 hora con la copia de seguridad del día anterior, asegurando que no se pierda ningún archivo debido a diferencias de tiempo entre el horario de la copia de seguridad y las fechas de modificación de los archivos.

## Aplicando filtros de tiempo en RcloneView

En la configuración de trabajos de RcloneView:

1. Abre la configuración del trabajo de sincronización o copia.
2. Navega a la sección de opciones avanzadas o flags personalizados.
3. Agrega `--max-age 24h` o `--min-age 7d` (o ambos) al campo de flags.
4. Guarda el trabajo y ejecútalo.

Las opciones se aplican a cada comparación de archivos durante el trabajo. Los archivos que no cumplen con los criterios de tiempo se omiten por completo: no se listan, comparan ni transfieren. Esto puede reducir significativamente la duración del trabajo para almacenamientos remotos grandes.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a time-filtered sync job in RcloneView" class="img-large img-center" />

## Combinando con otros filtros

Los filtros de tiempo funcionan junto con otras opciones de filtro de rclone:

- **Con include/exclude**: `--max-age 24h --include "*.pdf"` sincroniza solo los archivos PDF modificados en las últimas 24 horas.
- **Con filtros de tamaño**: `--max-age 7d --min-size 1M` sincroniza solo los archivos mayores a 1 MB modificados en la última semana.
- **Con filtros de directorio**: `--max-age 24h --include "/projects/**"` limita el alcance a un directorio específico.

Esta composición te permite crear reglas de transferencia precisas sin scripts complejos.

## Ejecuta primero una prueba (dry run)

Antes de ejecutar un trabajo filtrado por tiempo en datos de producción, usa el modo de prueba (dry run) de RcloneView para previsualizar qué archivos se verán afectados. El dry run lista los archivos que coinciden con tus criterios de filtro sin transferirlos realmente. Esto confirma que tus valores de `--min-age` y `--max-age` seleccionan los archivos correctos antes de comprometerte con la operación.

## Errores comunes

- **Zonas horarias**: Las fechas de modificación se comparan en UTC. Si tu zona horaria local está significativamente desplazada respecto a UTC, ajusta tus valores de duración en consecuencia o usa formatos de fecha absoluta.
- **Precisión del proveedor**: Algunos proveedores de la nube (especialmente Google Drive) reportan fechas de modificación con precisión limitada. Un archivo modificado "hoy" en Google Drive podría tener una marca de tiempo que difiere en varios segundos de la fecha de modificación real.
- **Sincronización vs. Copia con min-age**: Usar `--min-age` con sincronización puede ser peligroso: la sincronización elimina archivos en el destino que no existen en el origen. Si `--min-age` filtra archivos recientes del listado del origen, la sincronización podría eliminarlos en el destino. Usa copia (no sincronización) al usar `--min-age` para evitar eliminaciones no deseadas.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Crea un trabajo de sincronización o copia en el administrador de trabajos.
3. Agrega las opciones `--max-age` o `--min-age` en la sección de flags personalizados.
4. Prueba con dry run para verificar la selección de archivos.
5. Programa el trabajo para copias de seguridad automatizadas basadas en tiempo.

Los filtros de tiempo convierten a RcloneView en una herramienta de precisión para copias de seguridad incrementales, archivado escalonado y operaciones de sincronización específicas. Úsalos para reducir el tiempo de transferencia, minimizar el uso de ancho de banda e implementar flujos de trabajo sofisticados de ciclo de vida de datos.

---

**Guías relacionadas:**

- [Crear trabajos de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Ejecutar y administrar trabajos](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)
- [Programación de trabajos](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
