---
slug: fix-cloud-sync-case-sensitivity-conflicts-rcloneview
title: "Corrige los conflictos de sensibilidad a mayúsculas en la sincronización en la nube — Resuelve archivos duplicados con RcloneView"
authors:
  - tayson
description: "Evita que los trabajos de sincronización en la nube creen archivos duplicados cuando los sistemas de archivos de Windows o macOS, que no distinguen mayúsculas de minúsculas, se encuentran con almacenamiento en la nube que sí lo hace, usando RcloneView."
keywords:
  - sensibilidad a mayúsculas en sincronización en la nube
  - archivos duplicados sincronización en la nube
  - nombres de archivo con distinción de mayúsculas almacenamiento en la nube
  - corregir duplicados de sincronización en la nube
  - sincronización windows macos sin distinción de mayúsculas
  - conflictos de nombres de archivo en almacenamiento en la nube
  - errores de sincronización rcloneview
  - resolver cargas duplicadas de sincronización en la nube
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corrige los conflictos de sensibilidad a mayúsculas en la sincronización en la nube — Resuelve archivos duplicados con RcloneView

> "Report.pdf" y "report.pdf" parecen idénticos para Windows y macOS, pero son dos archivos distintos para la mayoría de los servicios de almacenamiento en la nube — un desajuste que va llenando silenciosamente las carpetas de duplicados hasta que se configura un trabajo de sincronización para detectarlo.

Windows y macOS formatean las unidades locales sin distinción entre mayúsculas y minúsculas de forma predeterminada, de modo que `Invoice.pdf` e `invoice.pdf` se tratan como el mismo archivo en el disco. Google Drive, Dropbox, Amazon S3 y la mayoría de los demás proveedores de almacenamiento en la nube sí distinguen entre mayúsculas y minúsculas, lo que significa que almacenan ambos como objetos independientes sin problema. El resultado son carpetas que acumulan poco a poco archivos casi duplicados, trabajos de sincronización que parecen "crear" copias de la nada, o bucles de sobrescritura en los que un cambio de nombre en un dispositivo nunca llega a coincidir exactamente con la versión que ya existe en la nube. RcloneView no cambiará el comportamiento de los sistemas de archivos subyacentes, pero te ofrece la visibilidad y los controles necesarios para detectar estos conflictos antes de que se conviertan en un problema mayor.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Detectar conflictos de mayúsculas con Comparación de carpetas

La forma más rápida de confirmar que estás ante un problema de sensibilidad a mayúsculas y no ante un fallo real de sincronización es ejecutar la Comparación de carpetas entre la carpeta local y el destino en la nube. Los archivos que solo difieren en el uso de mayúsculas aparecen como entradas separadas en cada lado en lugar de coincidir como "iguales", lo cual es la señal reveladora — un problema real de contenido duplicado muestra tamaños distintos, mientras que un desajuste puro de mayúsculas suele mostrar dos entradas con el mismo tamaño pero nombres diferentes. Los filtros "Mostrar archivos diferentes" y "Mostrar solo izquierda / solo derecha" en la vista de comparación facilitan aislar estos pares en lugar de tener que revisar manualmente todo el árbol de carpetas.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare to identify case sensitivity duplicates between local and cloud storage" class="img-large img-center" />

## Evitar bucles de sobrescritura con sincronización unidireccional y sumas de comprobación

La sincronización bidireccional (Beta) es donde los conflictos de mayúsculas causan más daño, ya que cada lado puede interpretar un archivo renombrado tanto como una carga nueva como una eliminación obsoleta. Cambiar el trabajo afectado a sincronización unidireccional "Modificar solo el destino" elimina esa ambigüedad — un lado siempre es autoritativo, de modo que un cambio de nombre que solo afecta a mayúsculas en el origen simplemente actualiza el destino en lugar de generar un duplicado. Activar la opción de comparación por suma de comprobación en el Paso 2 del asistente de sincronización también ayuda, ya que compara los archivos por hash y tamaño en lugar de basarse únicamente en la coincidencia de nombres de archivo, lo que reduce los falsos positivos cuando las diferencias de mayúsculas se mezclan con cambios reales de contenido. RcloneView monta Y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux, lo que facilita detectar cuándo un conflicto se originó por el comportamiento del sistema de archivos de un dispositivo concreto.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job with checksum comparison to avoid case sensitivity duplicates" class="img-large img-center" />

## Limpiar los duplicados existentes de forma segura

Una vez que hayas identificado los pares de duplicados por mayúsculas mediante la Comparación de carpetas, ejecuta siempre una Simulación (Dry Run) antes de eliminar nada — muestra exactamente qué archivos se eliminarían sin realizar cambios, algo importante ya que dos archivos "duplicados" podrían haber divergido en contenido desde que se produjo el desajuste de mayúsculas. Después de confirmar que el resultado de la simulación es correcto, usa la acción Eliminar en la vista de comparación para quitar la copia obsoleta, conservando la versión con el nombre de archivo correcto y actual.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a dry run before cleaning up case sensitivity duplicate files in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ejecuta la Comparación de carpetas entre la carpeta local afectada y su destino en la nube.
3. Filtra los archivos que aparecen como entradas separadas pero comparten el mismo tamaño para aislar los conflictos de mayúsculas.
4. Cambia el trabajo de sincronización a unidireccional con la comparación por suma de comprobación activada, y luego ejecuta una Simulación antes de limpiar los duplicados.

Un poco de visibilidad convierte una peculiaridad invisible del sistema de archivos en un problema que realmente puedes solucionar, en lugar de uno que sigue duplicando archivos en silencio.

---

**Guías relacionadas:**

- [Corrige los caracteres especiales en nombres de archivo — Resuelve problemas de sincronización en la nube con RcloneView](https://rcloneview.com/support/blog/fix-filename-special-characters-cloud-sync-rcloneview)
- [Corrige archivos duplicados en la sincronización en la nube — Cómo resolverlo con RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-duplicate-files-rcloneview)
- [Simulación (Dry Run) — Previsualiza la sincronización en la nube antes de transferir en RcloneView](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
