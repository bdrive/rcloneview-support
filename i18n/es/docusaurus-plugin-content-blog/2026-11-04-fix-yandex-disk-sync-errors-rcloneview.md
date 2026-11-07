---
slug: fix-yandex-disk-sync-errors-rcloneview
title: "Solucionar errores de sincronización de Yandex Disk — diagnostica y resuelve transferencias fallidas con RcloneView"
authors:
  - kai
description: "Soluciona errores de sincronización de Yandex Disk con RcloneView: vuelve a autorizar OAuth, ajusta checkers y reintentos, lee los registros DEBUG y verifica los resultados con Dry Run y Folder Compare."
keywords:
  - solucionar errores de sincronización de Yandex Disk
  - transferencia fallida de Yandex Disk
  - reautorizar OAuth de Yandex Disk
  - solución de problemas de RcloneView con Yandex Disk
  - la sincronización de Yandex Disk no funciona
  - errores de rclone con Yandex
  - solución de problemas de sincronización en la nube
  - registro de depuración de rclone
  - copia de seguridad de Yandex Disk fallida
  - trabajo de Yandex Disk con errores
tags:
  - RcloneView
  - yandex-disk
  - troubleshooting
  - tips
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de sincronización de Yandex Disk — diagnostica y resuelve transferencias fallidas con RcloneView

> Una forma paso a paso de descubrir por qué falló un trabajo de Yandex Disk y de solucionarlo sin volver a copiar todo.

Un trabajo de Yandex Disk que termina como «Errored» en Job History es frustrante, sobre todo si se ejecutó durante la noche. La mayoría de los fallos se agrupan en pocas categorías: un inicio de sesión caducado, demasiado paralelismo para un backend lento o un error de ruta y filtro. RcloneView ofrece los ajustes y registros necesarios para distinguirlos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Empieza con Job History y la pestaña Log

Abre **Job History** y localiza la ejecución fallida. Su estado, el tiempo empleado, el tamaño total y el número de archivos indican si el trabajo falló de inmediato (probablemente autenticación o ruta) o a mitad de camino (probablemente limitación o un archivo concreto). Después revisa la pestaña **Log** en la Info View inferior para ver las entradas con marca de tiempo alrededor del fallo.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History mostrando una ejecución con errores en RcloneView" class="img-large img-center" />

Si el registro es insuficiente, ve a Settings > Embedded Rclone, activa rclone Logging, establece el nivel en DEBUG, haz clic en Restart Embedded Rclone y reproduce el problema. El archivo resultante muestra exactamente qué operación falló.

## Vuelve a autorizar un inicio de sesión caducado o rechazado

Yandex Disk se conecta mediante OAuth en el navegador. Si el listado de una carpeta falla de inmediato, o cada archivo da error con un mensaje de autorización, abre Remote Manager, edita el remoto de Yandex Disk y completa de nuevo el inicio de sesión en el navegador. Luego actualiza el panel Explorer. Un listado correcto confirma la conexión antes de ejecutar cualquier trabajo.

<img src="/support/images/en/blog/new-remote.png" alt="Edición y reautorización de un remoto en RcloneView" class="img-large img-center" />

## Ajusta la configuración del trabajo para un backend más lento

Si los errores aparecen solo en trabajos grandes, reduce la carga. En Advanced Settings del asistente de Sync, reduce el número de transferencias de archivos y mantén los equality checkers en 4 o menos para backends lentos (el valor predeterminado es 8). Los 3 reintentos predeterminados de toda la sincronización son útiles ante fallos transitorios, así que déjalos activados. Considera activar checksum cuando necesites confirmar el contenido y no solo el tamaño.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Ajustes avanzados de trabajo y programación en RcloneView" class="img-large img-center" />

## Confirma la solución sin volver a copiar

Ejecuta un **Dry Run** para ver qué se transferiría todavía y luego vuelve a ejecutar el trabajo. Abre **Compare** para comparar Yandex Disk con el origen: los archivos solo a la izquierda o diferentes (left-only, different) muestran lo que queda, y puedes copiar solo esos.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare usado para confirmar las diferencias restantes" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Inspecciona la ejecución fallida en Job History y en la pestaña Log.
3. Vuelve a autorizar el remoto de Yandex Disk si el listado falla.
4. Reduce las transferencias y los checkers, haz un Dry Run, vuelve a ejecutar y usa Compare.

Un diagnóstico metódico convierte un vago estado «Errored» en una lista corta y solucionable.

---

**Guías relacionadas:**

- [Solucionar errores de cuota llena en Yandex Disk](https://rcloneview.com/support/blog/fix-yandex-disk-quota-full-errors-rcloneview)
- [Gestionar la sincronización y la copia de seguridad de Yandex Disk](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [Sincronizar Yandex Disk con Google Drive y S3](https://rcloneview.com/support/blog/sync-yandex-disk-google-drive-s3-rcloneview)

<CloudSupportGrid />
