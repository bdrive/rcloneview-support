---
slug: fix-cloud-sync-file-modified-during-transfer-rcloneview
title: "Corrige archivos modificados durante la transferencia — Resuelve conflictos de sincronización en la nube con RcloneView"
authors:
  - tayson
description: "Resuelve errores de sincronización en la nube causados por archivos modificados mientras se transfieren en RcloneView. Aprende a gestionar conflictos de archivos en uso, subidas parciales e inconsistencias de sincronización."
keywords:
  - corregir archivos modificados durante la transferencia en la nube
  - resolución de conflictos de sincronización en la nube RcloneView
  - error de archivo modificado durante la subida
  - error de archivo en uso de rclone
  - solución de transferencia incompleta en sincronización en la nube
  - conflicto de sincronización de RcloneView
  - solución de problemas de archivo bloqueado durante la sincronización
  - solución de subida parcial en sincronización en la nube
  - rclone modificado durante la transferencia
  - resolución de conflictos de archivos en copia de seguridad en la nube
tags:
  - troubleshooting
  - tips
  - data-recovery
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corrige archivos modificados durante la transferencia — Resuelve conflictos de sincronización en la nube con RcloneView

> Cuando los archivos cambian mientras RcloneView los está sincronizando, las transferencias pueden fallar, generar subidas parciales o crear copias inconsistentes en la nube — aquí te explicamos cómo detectar y resolver cada escenario.

Una fuente común de errores de sincronización en la nube son los archivos que se modifican, bloquean o escriben mientras un trabajo de sincronización está en curso. Los archivos de bases de datos que una aplicación está escribiendo, los documentos abiertos en Office o los archivos de registro (log) a los que un servicio en ejecución añade contenido activamente pueden causar subidas parciales o fallos de transferencia. RcloneView muestra claramente estos errores en sus registros, y rclone ofrece varios indicadores (flags) para gestionarlos correctamente.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Identifica errores de archivo en uso en los registros de RcloneView

Cuando un archivo está bloqueado o se modifica durante una sincronización, rclone normalmente reporta un error como:
- `Failed to copy: file changed under us - trying again`
- `source file is being written to`
- `partial read detected`

En RcloneView, estos errores aparecen en la **pestaña Log** en la parte inferior de la interfaz. Después de que un trabajo de sincronización se complete, revisa el registro en busca de entradas `ERROR` que indiquen conflictos de modificación de archivos. La vista **Job History** (Historial de trabajos) también muestra el estado `Errored` para los trabajos en los que algún archivo no se pudo transferir.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing file transfer errors in RcloneView" class="img-large img-center" />

## Usa --ignore-errors y la lógica de reintentos

Por defecto, los trabajos de sincronización de RcloneView están configurados con un número de reintentos (predeterminado: 3) que vuelve a intentar automáticamente las transferencias fallidas. Para archivos que están bloqueados de forma transitoria (por ejemplo, un archivo abierto y cerrado brevemente por una aplicación), los reintentos suelen tener éxito en intentos posteriores.

Para trabajos de sincronización en los que algunos archivos están bloqueados de forma constante (por ejemplo, archivos de bases de datos activos), añade `--ignore-errors` a los indicadores personalizados de rclone en la configuración de tu trabajo de sincronización. Esto le indica a rclone que continúe sincronizando otros archivos aunque algunos fallen, completando la mayor parte posible de la sincronización y registrando los fallos para su revisión.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring sync job settings to handle file-in-use errors in RcloneView" class="img-large img-center" />

## Excluye archivos de aplicaciones activas de la sincronización

La mejor solución a largo plazo para los conflictos de archivos en uso es excluir del alcance del trabajo de sincronización aquellos archivos que están siempre en uso activo. La configuración de filtrado de RcloneView (Paso 3 en el asistente de sincronización) admite reglas de exclusión personalizadas:

- Excluir bases de datos SQLite: añade `*.db-journal` y `*.db-wal` para excluir los registros de escritura anticipada (write-ahead logs) activos
- Excluir archivos temporales de Office: añade `~$*` para excluir los archivos de bloqueo de Word/Excel
- Excluir archivos de registro que se están escribiendo: añade `*.log` u otros patrones específicos

Estos filtros evitan que RcloneView intente sincronizar archivos que con seguridad estarán en uso durante el trabajo, eliminando por completo esta categoría de error.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Setting up file exclusion filters to avoid sync conflicts in RcloneView" class="img-large img-center" />

## Ejecuta una simulación (dry run) para verificar la eficacia del filtro

Después de añadir los filtros de exclusión, ejecuta una **simulación (dry run)** del trabajo de sincronización para confirmar que los archivos filtrados ya no aparecen en la lista de transferencia. La salida de la simulación muestra cada archivo que se copiaría — verifica que tus archivos de bases de datos activos, archivos de bloqueo y documentos abiertos no estén presentes en la lista antes de ejecutar la sincronización real.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using dry run to verify filtered file list before syncing in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Después de una sincronización fallida, revisa la pestaña Log y el Job History en busca de errores de modificación de archivos.
3. Añade filtros de exclusión personalizados en el asistente de sincronización para los archivos que están siempre en uso.
4. Ejecuta una simulación (dry run) para confirmar que tus filtros funcionan y, después, vuelve a ejecutar el trabajo de sincronización.

Gestionar los conflictos de archivos en uso en RcloneView consiste en entender qué archivos excluir y cómo configurar los reintentos — una vez configurado correctamente, tus trabajos de sincronización se ejecutan sin problemas en todo momento.

---

**Guías relacionadas:**

- [Corrige archivos faltantes en la sincronización en la nube después de la transferencia — Resuelve con RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)
- [Reglas de filtrado y sincronización selectiva en RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Recupera transferencias interrumpidas o fallidas con RcloneView](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)

<CloudSupportGrid />
