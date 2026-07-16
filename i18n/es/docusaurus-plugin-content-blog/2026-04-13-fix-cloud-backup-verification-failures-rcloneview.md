---
slug: fix-cloud-backup-verification-failures-rcloneview
title: "Solucionar fallos de verificación en copias de seguridad en la nube — Garantiza la integridad de los datos con RcloneView"
authors:
  - tayson
description: "Soluciona discrepancias de checksum y fallos de verificación en copias de seguridad en la nube con RcloneView. Usa Comparar Carpetas, revisa la configuración y vuelve a ejecutar las transferencias para garantizar la integridad de los datos."
keywords:
  - fallo de verificación de copia de seguridad en la nube RcloneView
  - discrepancia de checksum en sincronización en la nube
  - solucionar error de integridad de copia de seguridad rclone
  - error de checksum en transferencia en la nube
  - verificación de integridad de datos RcloneView
  - fallo de verificación de checksum rclone
  - solución de corrupción de copia de seguridad rclone
  - solución de problemas de verificación de sincronización en la nube
tags:
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar fallos de verificación en copias de seguridad en la nube — Garantiza la integridad de los datos con RcloneView

> Las discrepancias de checksum tras una transferencia en la nube pueden indicar diferencias entre proveedores o una corrupción real: entender a qué escenario te enfrentas determina la solución correcta.

Después de completarse una copia de seguridad grande, es posible que encuentres fallos de verificación: discrepancias de checksum, archivos marcados como diferentes cuando deberían ser idénticos, o errores en las herramientas de comparación de RcloneView. Estos fallos pueden tener varias causas, desde diferencias benignas en los metadatos del proveedor hasta una corrupción de datos real. Esta guía explica cómo diagnosticar cada escenario y aplicar la solución correcta.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Entender los tipos de checksum

Los distintos proveedores de nube admiten diferentes algoritmos de checksum. AWS S3 usa MD5 (para cargas estándar) y SHA-256 (para checksums). Google Drive usa MD5. Backblaze B2 usa SHA1. Dropbox usa un hash de bloque personalizado. Cuando rclone compara archivos entre dos proveedores que usan algoritmos hash distintos, recurre a la comparación por tamaño y hora de modificación en lugar de una comparación por hash.

Esto significa que una "discrepancia" en la vista Comparar Carpetas de RcloneView puede no indicar corrupción, sino que los proveedores usan tipos de hash incompatibles y rclone está comparando solo por tamaño. La corrupción real se manifiesta como tamaños coincidentes pero valores de hash diferentes con el mismo algoritmo.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Usar Comparar Carpetas para identificar fallos de verificación en copias de seguridad" class="img-large img-center" />

## Activar la verificación por checksum en los trabajos de sincronización

Para detectar corrupción real en el momento de la transferencia, activa la verificación por checksum en la configuración de tu trabajo de sincronización. En RcloneView, abre el trabajo y ve al paso 2. Activa la opción **checksum**. Con esto activado, rclone calcula y compara los hashes durante la transferencia. Si el hash de un archivo no coincide tras la carga, rclone reintenta la transferencia.

Nota: activar la verificación por checksum aumenta ligeramente el uso de CPU y el tiempo de transferencia, pero detecta corrupción de datos que de otro modo pasaría desapercibida.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Activar la verificación por checksum en la configuración del trabajo de sincronización de RcloneView" class="img-large img-center" />

## Usar Comparar Carpetas para detectar discrepancias

Después de completarse una copia de seguridad, abre **Comparar Carpetas** en RcloneView. Apunta un lado a tu origen y el otro al destino de la copia de seguridad. RcloneView muestra los archivos en tres categorías:

- **Coincide**: igual en ambos lados
- **Solo en origen**: existe en el origen pero falta en el destino
- **Solo en destino**: existe en el destino pero no en el origen
- **Diferente**: mismo nombre pero atributos diferentes (tamaño, hash o hora de modificación)

Los archivos en la categoría "Diferente" merecen una inspección más detallada. Descarga y compara una muestra para determinar si el contenido es realmente diferente o si se trata de un artefacto de metadatos del proveedor.

## Ejecutar una comprobación mediante la terminal

Para una comprobación de integridad exhaustiva, la pestaña **Terminal** de RcloneView te permite ejecutar comandos de rclone directamente. Usa `rclone check` para comparar a fondo el origen y el destino:

```
rclone check source:path destination:path --one-way
```

Este comando lista todos los archivos que difieren entre ambos lados, usando el mejor hash disponible para cada proveedor. La salida muestra exactamente qué archivos presentan discrepancias, lo que facilita identificar si el problema es sistemático o aislado.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ejecutar el comando rclone check en la Terminal de RcloneView" class="img-large img-center" />

## Volver a ejecutar con configuraciones diferentes

Si los fallos de verificación persisten y los archivos realmente difieren, vuelve a ejecutar el trabajo de copia de seguridad con:

- **Verificación por checksum activada**: garantiza que rclone vuelva a transferir y validar
- **Ignorar existentes**: fuerza la retransferencia incluso de archivos que parecen estar presentes
- **Reintentos de bajo nivel aumentados**: da más oportunidades para transferencias exitosas

Para copias de seguridad entre proveedores donde los algoritmos de hash difieren, cambia al modo de comparación por **tamaño y hora de modificación** en lugar de la comparación solo por hash en la configuración avanzada del trabajo. Esto reduce los falsos positivos por incompatibilidad de hash.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Activa la **verificación por checksum** en las opciones de transferencia del paso 2 de tu trabajo de sincronización.
3. Tras completarse la copia de seguridad, usa **Comparar Carpetas** para identificar cualquier discrepancia.
4. Para un análisis más profundo, ejecuta `rclone check` desde la pestaña **Terminal**.

La verificación sistemática por checksum y la comparación posterior a la copia de seguridad te dan la confianza de que tus copias de seguridad en la nube son exactas byte por byte.

---

**Guías relacionadas:**

- [Solucionar discrepancias de checksum en sincronización en la nube con RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-checksum-mismatch-rcloneview)
- [Migraciones en la nube verificadas por checksum con RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [Solucionar archivos faltantes tras la transferencia en sincronización en la nube](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />
