---
slug: filter-rules-selective-sync-rcloneview
title: "Reglas de filtro de RcloneView: excluye carpetas y tipos de archivo para sincronizaciones más rápidas y limpias"
authors:
  - tayson
description: "Crea flujos de sincronización selectiva con las reglas de filtro de RcloneView para omitir el ruido, reducir el tráfico en la nube y mantener las copias de seguridad limpias. GUI primero, sin flags de CLI."
keywords:
  - rclone filter rules
  - rclone exclude
  - rclone include
  - rcloneview filters
  - selective sync
  - cloud sync optimization
  - reduce sync time
  - file sync filters
  - rcloneview workflow
  - cloud backup efficiency
tags:
  - RcloneView
  - cloud-storage
  - sync
  - file-management
  - backup
---

import RvCta from '@site/src/components/RvCta';

# Reglas de filtro de RcloneView: excluye carpetas y tipos de archivo para sincronizaciones más rápidas y limpias

> La sincronización más rápida es la que ignora el ruido. Las reglas de filtro de RcloneView te ayudan a omitir carpetas de caché, archivos temporales y artefactos de compilación para que cada transferencia sea intencional.

La sincronización selectiva es uno de los temas de rclone más buscados porque ahorra directamente tiempo, ancho de banda y costos en la nube. La mayoría de las guías enumeran flags de CLI y se quedan ahí. Esta publicación muestra cómo crear **flujos de trabajo centrados en filtros** en RcloneView con una interfaz visual que mantiene resultados predecibles.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué las reglas de filtro importan más que nunca

Los costos y demoras de sincronización en la nube provienen de escanear y transferir archivos que nunca necesitaste:

- Carpetas de caché (`.cache`, `node_modules`, `.gradle`)
- Archivos temporales o de vista previa (`*.tmp`, `*_preview.*`)
- Artefactos de compilación generados automáticamente
- Comprobaciones repetidas de metadatos en archivos sin cambios

Los filtros reducen el ruido y hacen que cada trabajo de Sync o Copy sea más pequeño, rápido y seguro.

## Qué hacen las reglas de filtro en RcloneView

Los filtros definen **qué incluir y excluir antes de que ocurra cualquier transferencia**. En RcloneView, los aplicas a través de la interfaz de Sync/Job, por lo que no necesitas memorizar la sintaxis de CLI.

Usa reglas de filtro para:

- Excluir carpetas enteras
- Incluir solo rutas de proyecto específicas
- Omitir tipos de archivo que nunca quieres respaldar
- Proteger datos sensibles o irrelevantes

## Dónde configurar filtros en la GUI

Puedes agregar filtros al ejecutar Sync o al crear un Job:

<img src="/support/images/en/howto/rcloneview-basic/sync-filtering-settings.png" alt="Sync filtering settings" class="img-large img-center" />

Agrega una regla personalizada en segundos:

<img src="/support/images/en/howto/rcloneview-basic/add-custom-filter-rule.png" alt="Add custom filter rule" class="img-large img-center" />

Edita y ajusta las reglas según sea necesario:

<img src="/support/images/en/howto/rcloneview-basic/addjust-custom-filter-rule.png" alt="Adjust custom filter rule" class="img-large img-center" />

## Reglas de filtro prácticas (ejemplos listos para copiar)

### Excluir el ruido común

- `**/node_modules/**`
- `**/.cache/**`
- `**/*.tmp`
- `**/*.log`

### Sincronizar solo tus carpetas de trabajo

- Incluir: `**/Projects/**`
- Excluir: `**/Downloads/**`

### Reglas para proyectos multimedia

- Incluir: `**/*.mp4`, `**/*.mov`, `**/*.wav`
- Excluir: `**/*_proxy.*`, `**/*_preview.*`

### Flujos de trabajo de diseño/creativos

- Incluir: `**/*.psd`, `**/*.ai`, `**/*.blend`
- Excluir: `**/renders/**`, `**/cache/**`

## Compara primero, luego filtra, luego sincroniza

Los filtros son más seguros cuando los validas visualmente:

1. Ejecuta **Compare** para ver qué cambiará.
2. Ajusta los filtros si desaparece algo importante.
3. Sincroniza con confianza.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results filters" class="img-large img-center" />

Guía: [/support/howto/rcloneview-basic/compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents)

## Flujo de trabajo centrado en filtros (seguro por diseño)

### Paso 1: Confirmar origen y destino

Usa el paso Configure Storage para validar las rutas antes de filtrar.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/sync-configure-storage.png" alt="Sync configure storage" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-advanced-settings.png" alt="Sync advanced settings" class="img-large img-center" />
</div>

### Paso 2: Aplicar filtros

Agrega exclusiones e inclusiones según tu flujo de trabajo.

<img src="/support/images/en/howto/rcloneview-basic/sync-filtering-settings.png" alt="Sync filtering settings" class="img-large img-center" />

### Paso 3: Ejecución de prueba (Dry Run) para verificación

Ejecuta Dry Run para poder confirmar el conjunto de resultados filtrado antes de mover los datos.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run.png" alt="Sync dry run" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run-details.png" alt="Sync dry run details" class="img-large img-center" />
</div>

## Guarda los flujos de trabajo filtrados como Jobs

Una vez que los filtros son correctos, guarda el Sync como un Job:

- Comportamiento consistente en cada ejecución
- Menos errores humanos
- Programación sencilla para copias de seguridad automatizadas

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="Save sync to Jobs" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="Add job scheduling" class="img-large img-center" />
</div>

Guía: [/support/howto/rcloneview-basic/create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs)

## Programación de sincronizaciones filtradas

Usa Job Scheduling para automatizar copias de seguridad selectivas:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Create job schedule" class="img-large img-center" />

Guía: [/support/howto/rcloneview-advanced/job-scheduling-and-execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

## Beneficios reales de las reglas de filtro

- **Sincronizaciones más rápidas**: menos archivos escaneados y transferidos
- **Costos más bajos**: menos tráfico de API y menos subidas repetidas
- **Copias de seguridad más limpias**: solo se conservan los archivos relevantes
- **Operaciones más estables**: registros de trabajo más pequeños y solución de problemas más fácil

## Errores comunes que hay que evitar

- Filtrar en exceso carpetas críticas (primero prueba con Compare)
- Mezclar inclusiones/exclusiones sin un orden claro
- Omitir Dry Run en migraciones grandes
- Asumir que los filtros se aplican retroactivamente a datos antiguos

## Resumen de buenas prácticas

- Haz que los filtros formen parte de cada trabajo de Sync o Copy.  
- Usa Compare para validar qué eliminarán los filtros.  
- Comienza con una pequeña carpeta de prueba antes de aplicar los filtros al conjunto de datos completo.  
- Guarda los trabajos filtrados para repetibilidad y auditoría.  

## Conclusión

La sincronización selectiva es la forma más rápida de hacer que las operaciones en la nube sean más rápidas y económicas. RcloneView convierte las complejas reglas de filtro de rclone en un flujo de trabajo visual que puedes entender, probar y automatizar. Comienza excluyendo una carpeta ruidosa y observa cómo se reduce tu tiempo de sincronización en la próxima ejecución.
