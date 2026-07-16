---
slug: sync-copy-move-difference-explained-rcloneview
title: "Sincronización vs Copia vs Mover — ¿Qué operación de transferencia en la nube deberías usar?"
authors:
  - tayson
description: "¿Confundido sobre cuándo usar Sincronización, Copia o Mover para transferencias en la nube? Esta guía explica las diferencias y cuándo cada una es la opción correcta en RcloneView."
keywords:
  - rclone sync vs copy
  - cloud sync vs copy difference
  - when to use sync or copy
  - rclone move command
  - cloud transfer operations
  - sync copy move explained
  - rclone operations guide
  - cloud file operations
  - which cloud sync type
  - safe cloud transfer method
tags:
  - RcloneView
  - sync
  - copy
  - move
  - guide
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincronización vs Copia vs Mover — ¿Qué operación de transferencia en la nube deberías usar?

> Quieres transferir archivos entre nubes. RcloneView ofrece Sincronización, Copia y Mover. Suenan parecidas, pero elegir la incorrecta puede borrar archivos que no querías perder. Así es como funciona cada una y cuándo usarla.

Esta es una de las decisiones más importantes en la gestión de archivos en la nube. Cada operación tiene un comportamiento diferente respecto a lo que ocurre con los archivos que existen en el destino pero no en el origen. Entender esto evita la pérdida accidental de datos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Las tres operaciones

### Copia

**Qué hace**: Copia archivos del origen al destino. Si un archivo ya existe en el destino y es idéntico, se omite. Si existe pero es diferente, se sobrescribe.

**Qué no hace**: Borrar nada del destino. Nunca.

```
Source:      A, B, C
Destination: B, D
After Copy:  B, D, A, C  (D is untouched, A and C are added)
```

### Sincronización

**Qué hace**: Hace que el destino sea idéntico al origen. Copia archivos nuevos y modificados. **Borra del destino los archivos que no existen en el origen.**

```
Source:      A, B, C
Destination: B, D
After Sync:  A, B, C  (D is deleted! A and C are added)
```

### Mover

**Qué hace**: Como Copia, pero **borra los archivos del origen** una vez transferidos correctamente.

```
Source:      A, B, C
Destination: B, D
After Move:
  Source: (empty)
  Destination: B, D, A, C
```

## Referencia rápida

| Comportamiento | Copia | Sincronización | Mover |
|----------|:----:|:----:|:----:|
| Añade archivos nuevos al destino | ✅ | ✅ | ✅ |
| Actualiza archivos modificados | ✅ | ✅ | ✅ |
| Borra del destino | ❌ | ✅ | ❌ |
| Borra del origen | ❌ | ❌ | ✅ |
| Segura para copias de seguridad | ✅ | ⚠️ | ❌ |
| Crea un espejo exacto | ❌ | ✅ | ❌ |

## Cuándo usar cada una

### Usa Copia cuando:

- **Haces copias de seguridad** — Quieres una red de seguridad. Copia nunca borra del destino, así que aunque elimines un archivo del origen, la copia de seguridad lo conserva.
- **Migración inicial** — Trasladas datos a una nube nueva por primera vez.
- **Añades archivos** — Quieres agregar contenido nuevo sin afectar los archivos existentes.
- **No estás seguro** — Copia es la opción predeterminada más segura. No puede perder datos en el destino.

**Ejemplos:**
- Copia de seguridad diaria: Google Drive → Backblaze B2.
- Migración inicial: OneDrive → Google Drive.
- Entrega a cliente: copiar los archivos finales al Dropbox del cliente.

### Usa Sincronización cuando:

- **Creas un espejo** — El destino debe ser una copia exacta del origen en todo momento.
- **Carpetas de trabajo activas** — Quieres que el destino refleje todos los cambios, incluidas las eliminaciones.
- **Limpieza de almacenamiento** — Los archivos eliminados del origen también deben eliminarse del espejo.

**Ejemplos:**
- Mantener un espejo del NAS en S3 (réplica exacta).
- Espejar una carpeta de proyecto entre dos miembros del equipo.
- Mantener un servidor de staging sincronizado con una carpeta de recursos de producción.

**Advertencia**: Sincronización borra archivos. Ejecuta siempre una **simulación (dry run)** primero para previsualizar qué se eliminará.

### Usa Mover cuando:

- **Archivas datos** — Trasladas archivos antiguos a almacenamiento económico y los eliminas del origen, más caro.
- **Pipeline de procesamiento** — Los archivos llegan a una bandeja de entrada, se procesan y luego se mueven a un archivo histórico.
- **Liberas espacio** — Trasladas archivos de una unidad llena al almacenamiento en la nube, eliminando las copias locales.

**Ejemplos:**
- Mover archivos con más de 90 días de antigüedad de Google Drive a S3 Glacier.
- Mover cargas procesadas de un bucket de staging a un bucket de archivo.
- Mover fotos de una copia de seguridad de teléfono llena a un archivo en la nube.

## La red de seguridad de la simulación (dry run)

Antes de ejecutar cualquier operación (especialmente Sincronización), usa **dry run** para previsualizar exactamente qué ocurrirá:

- Qué archivos se copiarán.
- Qué archivos se borrarán (solo Sincronización).
- Qué archivos se moverán (solo Mover).

Esta previsualización no cuesta nada y evita sorpresas.

## Primero, comparación de carpetas

Antes de cualquier transferencia, usa la Comparación de carpetas para entender el estado actual:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare before transferring" class="img-large img-center" />

Esto muestra:
- Archivos que existen en ambas ubicaciones (y si coinciden).
- Archivos exclusivos del origen.
- Archivos exclusivos del destino.

## Errores comunes

### Usar Sincronización para copias de seguridad

```
Day 1: Sync Google Drive → S3  (all files backed up)
Day 2: Accidentally delete a folder from Google Drive
Day 3: Sync Google Drive → S3  (folder deleted from S3 too!)
```

Usa **Copia** para copias de seguridad y evita esto.

### Usar Copia cuando quieres un espejo

```
Day 1: Copy Source → Dest  (files transferred)
Day 2: Delete old files from Source
Day 3: Copy Source → Dest  (old files still on Dest, taking up space)
```

Si quieres que el destino se mantenga limpio, usa **Sincronización**.

### Usar Mover cuando quieres ambas copias

Mover borra el origen. Si necesitas los archivos en ambas ubicaciones, usa **Copia**.

## Diagrama de decisión

1. **¿Necesitas los archivos en ambas ubicaciones?**
   - Sí → Copia o Sincronización.
   - No (eliminar del origen) → Mover.

2. **¿El destino debe coincidir exactamente con el origen?**
   - Sí (incluidas las eliminaciones) → Sincronización.
   - No (solo agregar archivos nuevos) → Copia.

3. **¿Es una copia de seguridad?**
   - Sí → Casi siempre Copia.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Compara carpetas** para entender el estado actual.
3. **Elige la operación correcta** según tu objetivo.
4. **Haz primero una simulación (dry run)** para previsualizar los cambios.
5. **Ejecuta** con confianza.

La operación correcta para el trabajo correcto. No adivines: comprende.

---

**Guías relacionadas:**

- [Crear trabajos de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Comparar contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Reglas de filtro de Rclone](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)

<CloudSupportGrid />
