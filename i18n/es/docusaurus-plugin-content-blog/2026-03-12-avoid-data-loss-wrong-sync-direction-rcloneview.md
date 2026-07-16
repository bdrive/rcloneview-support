---
slug: avoid-data-loss-wrong-sync-direction-rcloneview
title: "Cómo la sincronización puede eliminar tus archivos: evita la pérdida de datos por una dirección de sincronización incorrecta"
authors:
  - tayson
description: "Una dirección de sincronización incorrecta puede borrar tus archivos. Aprende cómo funciona rclone sync, por qué elimina archivos, y cómo usar la ejecución de prueba y la comparación de carpetas para evitar desastres."
keywords:
  - la sincronización eliminó mis archivos
  - pérdida de datos por rclone sync
  - dirección de sincronización incorrecta
  - sincronización vs copia segura
  - prevenir pérdida de datos por sincronización
  - sincronización en la nube eliminó archivos
  - ejecución de prueba de rclone
  - sincronización en la nube segura
  - dirección de sincronización errónea
  - solución a error de sincronización en la nube
tags:
  - sync
  - data-loss
  - safety
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cómo la sincronización puede eliminar tus archivos: evita la pérdida de datos por una dirección de sincronización incorrecta

> "Ejecuté rclone sync y ahora 500 GB de archivos desaparecieron." Este es uno de los desastres más comunes del almacenamiento en la nube. La sincronización es potente, pero elimina archivos. A continuación te explicamos cómo usarla de forma segura.

La sincronización hace que el destino coincida exactamente con el origen. Esto incluye eliminar del destino los archivos que no existen en el origen. Si intercambias accidentalmente el origen y el destino, o sincronizas desde una carpeta vacía, la sincronización eliminará alegremente todo en el destino. Esta guía explica cómo evitarlo.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cómo elimina archivos la sincronización

```
Source: Folder A (3 files: doc1, doc2, doc3)
Destination: Folder B (5 files: doc1, doc2, doc3, report1, report2)

After Sync A → B:
Folder B: doc1, doc2, doc3
(report1 and report2 are DELETED)
```

La sincronización hizo que B fuera idéntico a A. Los archivos exclusivos de B fueron eliminados.

## Desastres comunes

### Origen y destino intercambiados

Querías sincronizar `Cloud → NAS` pero escribiste `NAS → Cloud`. Si el NAS está vacío (unidad nueva), la sincronización elimina todo en la nube.

### Sincronizar desde una carpeta vacía o incorrecta

Apuntar la sincronización a un origen vacío significa "vaciar también el destino".

### Reglas de filtro incorrectas

Un filtro que excluye todo hace que el origen parezca vacío para la sincronización. Todo lo que hay en el destino se elimina.

## Medidas de seguridad en RcloneView

### 1) Usa siempre primero la ejecución de prueba (Dry Run)

La ejecución de prueba te muestra exactamente lo que hará la sincronización, sin llevarlo a cabo realmente. Revisa la lista de archivos que se eliminarían antes de confirmar.

### 2) Usa la comparación de carpetas antes de sincronizar

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare before syncing" class="img-large img-center" />

Compara el origen y el destino. Observa los archivos "Solo a la derecha": son los que la sincronización eliminaría. ¿Estás de acuerdo en perderlos?

### 3) Usa Copiar en lugar de Sincronizar para copias de seguridad

Copiar nunca elimina. Si estás haciendo una copia de seguridad, Copiar es casi siempre la opción correcta.

| Situation | Use Copy | Use Sync |
|-----------|:--------:|:--------:|
| Backup | ✅ | ❌ |
| Mirror (exact replica) | ❌ | ✅ |
| Initial migration | ✅ | ❌ |
| Ongoing replication | ❌ | ✅ (carefully) |

### 4) Verifica dos veces el origen y el destino

En el explorador de dos paneles de RcloneView, identifica claramente qué lado es el origen y cuál es el destino antes de ejecutar cualquier tarea.

### 5) Usa `--backup-dir`

Rclone admite `--backup-dir`: los archivos que se eliminarían se mueven a un directorio de copia de seguridad en lugar de eliminarse permanentemente. Esto te ofrece una red de seguridad.

## Recuperación tras una sincronización accidental

Si ya ejecutaste una sincronización errónea:

1. **Detente de inmediato** — No ejecutes otra sincronización.
2. **Revisa la papelera del proveedor en la nube** — Google Drive (30 días), OneDrive (93 días), Dropbox (30-180 días).
3. **Revisa el control de versiones** — El control de versiones de S3 y B2 conserva copias antiguas.
4. **Restaura desde una copia de seguridad independiente** — Si tienes una copia de seguridad basada en Copiar, tus archivos están a salvo allí.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Usa la comparación de carpetas** antes de cualquier operación de sincronización.
3. **Ejecuta la ejecución de prueba** para previsualizar los cambios.
4. **Usa Copiar para las copias de seguridad** — reserva Sincronizar para la duplicación intencional.
5. **Considera `--backup-dir`** para las operaciones de sincronización como red de seguridad.

La sincronización es una herramienta afilada. Úsala con cuidado.

---

**Guías relacionadas:**

- [Sincronizar vs Copiar vs Mover explicado](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)
- [Comparar el contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Recuperar archivos eliminados accidentalmente](https://rcloneview.com/support/blog/recover-accidentally-deleted-cloud-files-rcloneview)

<CloudSupportGrid />
