---
slug: folder-comparison-guide-detect-differences-rcloneview
title: "Comparación de carpetas en profundidad — Detecta cada diferencia entre ubicaciones de almacenamiento en la nube"
authors:
  - tayson
description: "La Comparación de carpetas de RcloneView encuentra archivos faltantes, discrepancias de tamaño y desviaciones de sincronización entre dos ubicaciones de almacenamiento en la nube. Guía completa con ejemplos prácticos."
keywords:
  - folder comparison tool
  - compare cloud folders
  - detect missing files cloud
  - cloud sync verification
  - compare google drive onedrive
  - folder diff tool
  - cloud storage comparison
  - verify cloud backup
  - find missing cloud files
  - cloud folder diff
tags:
  - folder-comparison
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Comparación de carpetas en profundidad — Detecta cada diferencia entre ubicaciones de almacenamiento en la nube

> Ejecutaste una copia de seguridad la semana pasada. ¿Llegaron todos los archivos? ¿Los tamaños son correctos? ¿Falta algo? La única forma de saberlo con certeza es comparar el origen y el destino archivo por archivo. Eso es lo que hace la Comparación de carpetas.

La Comparación de carpetas es una de las funciones más valiosas de RcloneView. Compara dos ubicaciones de almacenamiento —cualquier combinación de local, NAS y almacenamiento en la nube— y te muestra exactamente qué es diferente. Archivos faltantes, discrepancias de tamaño, diferencias de fecha y archivos exclusivos de un solo lado quedan claramente identificados.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Qué muestra la Comparación de carpetas

### Categorías de archivos

Después de comparar dos ubicaciones, los archivos se categorizan:

- **Coincide** — El archivo existe en ambas ubicaciones con el mismo tamaño y hora de modificación. ✅
- **Solo izquierda** — El archivo existe solo en el origen (lado izquierdo). Puede que necesite copiarse.
- **Solo derecha** — El archivo existe solo en el destino (lado derecho). Puede ser un huérfano o una copia adicional.
- **Diferente** — El archivo existe en ambas ubicaciones pero difiere en tamaño o fecha. Puede que necesite actualizarse.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Comparison results" class="img-large img-center" />

## Cuándo usar la Comparación de carpetas

### 1) Después de una copia de seguridad — verificar que esté completa

Después de cualquier trabajo de Copia o Sincronización, compara el origen y el destino:

- **¿Todo coincide?** → La copia de seguridad está completa.
- **¿Archivos solo en la izquierda?** → No se incluyeron en la copia de seguridad. Investiga por qué.
- **¿Archivos solo en la derecha?** → Archivos eliminados del origen pero que aún están en la copia de seguridad (esperado con trabajos de Copia).

### 2) Antes de sincronizar — previsualizar cambios

Antes de ejecutar un trabajo de Sincronización, compara para ver qué va a cambiar:

- **Solo izquierda** → Se copiará al destino.
- **Solo derecha** → Se ELIMINARÁ del destino (¡solo en Sincronización!).
- **Diferente** → Se sobrescribirá.

Esto es como una prueba en seco visual.

### 3) Después de una migración — confirmar que no falte nada

Después de migrar de una nube a otra:

- Compara la nube antigua con la nueva.
- Cada archivo debería estar "coincide" o "solo derecha" (ya está en el destino).
- Cualquier archivo "solo izquierda" se pasó por alto y necesita volver a transferirse.

### 4) Auditorías periódicas — detectar desviaciones

Incluso con sincronizaciones programadas, las cosas pueden fallar de forma silenciosa. Las comparaciones mensuales detectan:

- Transferencias fallidas que no se reportaron.
- Archivos omitidos por limitación de tasa (rate-limited).
- Archivos corruptos (tamaños diferentes).
- Tokens de OAuth que expiraron a mitad de un trabajo.

## Ejemplos prácticos

### Comparar Google Drive y una copia de seguridad en S3

Origen: Google Drive (principal).
Destino: S3 (copia de seguridad).

**Resultados esperados después de una copia de seguridad saludable:**
- La mayoría de los archivos: Coincide ✅
- Algunos "solo izquierda": Archivos añadidos a Google Drive desde la última copia de seguridad (se copiarán la próxima vez).
- Pocos "solo derecha": Archivos eliminados de Google Drive pero conservados en la copia de seguridad (esto es bueno — tu copia de seguridad los preservó).

### Comparar dos volúmenes NAS

Izquierda: Volumen NAS 1 (datos activos).
Derecha: Volumen NAS 2 (espejo).

**Cualquier diferencia indica que el espejo está desincronizado.** Corrígelo de inmediato.

### Comparar antes de dar de baja una cuenta en la nube

Antes de cancelar Dropbox:
1. Compara Dropbox con Google Drive (adonde migraste los datos).
2. Asegúrate de que haya cero archivos "solo izquierda" (todo lo de Dropbox está en Google Drive).
3. Solo entonces cancela Dropbox.

## Opciones de comparación

### Métodos de verificación

- **Tamaño** — Compara los tamaños de archivo. Rápido, pero no detecta corrupción a nivel de bits.
- **Hora de modificación** — Compara las marcas de tiempo. Útil para detectar archivos actualizados.
- **Suma de verificación (checksum)** — Compara los hashes de archivo (MD5, SHA1). Más lento pero el más exhaustivo. Detecta bit-rot y corrupción.

Para datos críticos, usa la suma de verificación. Para revisiones rutinarias, basta con tamaño + hora de modificación.

### Consejos de rendimiento

- **Directorios grandes (10.000+ archivos)** — La comparación puede tardar varios minutos. Ten paciencia.
- **Comparación entre nubes** — Requiere listar ambas nubes. Usa `--fast-list` para mayor eficiencia.
- **Reduce el alcance** — Compara subdirectorios específicos en lugar de toda la nube para obtener resultados más rápidos.

## Actuar sobre las diferencias

Después de la comparación, puedes actuar directamente:

- **Archivos solo izquierda** → Selecciona y copia al lado derecho.
- **Archivos diferentes** → Selecciona y actualiza en el lado derecho.
- **Archivos solo derecha** → Revisa si conservarlos o eliminarlos.

Esto convierte a la Comparación de carpetas no solo en una herramienta de diagnóstico, sino en una herramienta de flujo de trabajo.

## Integración con Trabajos por lotes

Los Trabajos por lotes de v1.3 pueden incluir un paso de comparación:

1. Copiar origen → destino.
2. Comparar origen frente a destino.
3. Reportar cualquier diferencia vía Slack.

Este flujo de trabajo automatizado de verificación posterior a la copia de seguridad garantiza que siempre sepas el estado de tus copias de seguridad.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Añade las dos ubicaciones** que quieres comparar.
3. **Ejecuta la Comparación de carpetas** entre ellas.
4. **Revisa los resultados** — coincide, solo izquierda, solo derecha, diferente.
5. **Actúa sobre las diferencias** — copia, actualiza o investiga.

Si no puedes verificarlo, no puedes confiar en ello.

---

**Guías relacionadas:**

- [Comparar el contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Crear trabajos de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Historial de trabajos y monitoreo](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
