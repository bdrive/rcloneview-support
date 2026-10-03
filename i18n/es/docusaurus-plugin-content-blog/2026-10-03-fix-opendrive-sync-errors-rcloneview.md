---
slug: fix-opendrive-sync-errors-rcloneview
title: "Solucionar errores de sincronización de OpenDrive — Problemas de inicio de sesión, subida y listado resueltos con RcloneView"
authors:
  - kai
description: "Diagnostica errores de sincronización de OpenDrive, como inicios de sesión fallidos, subidas interrumpidas y archivos que faltan, con el historial de trabajos, los registros y Folder Compare de RcloneView."
keywords:
  - solucionar errores de sincronización de OpenDrive
  - error de rclone en OpenDrive
  - fallo de inicio de sesión en OpenDrive
  - fallo de subida en OpenDrive
  - solución de problemas de OpenDrive
  - RcloneView OpenDrive
  - remoto OpenDrive de rclone
  - solución de problemas de sincronización en la nube
  - OpenDrive GUI
tags:
  - RcloneView
  - opendrive
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de sincronización de OpenDrive — Problemas de inicio de sesión, subida y listado resueltos con RcloneView

> Cuando falla una sincronización de OpenDrive, el historial de trabajos, los registros y Folder Compare de RcloneView muestran si la causa son las credenciales, la carga de transferencia o archivos que nunca llegaron.

Una sincronización fallida rara vez se explica sola. Un trabajo puede detenerse de inmediato, terminar con algunos archivos ausentes o dejar una carpeta que parece incompleta. En lugar de volver a ejecutarlo a ciegas, puedes leer el historial de trabajos de RcloneView, activar el registro DEBUG y comparar ambos lados para encontrar la causa real. RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Descartar problemas de conexión y credenciales

Si un trabajo falla en pocos segundos, sospecha del propio remoto. Abre Remote Manager desde la pestaña Remote, edita el remoto de OpenDrive y vuelve a introducir los datos de la cuenta. Después abre el remoto en un panel de Explorer y examina la carpeta raíz. Si se lista con normalidad, la conexión está bien y el fallo está en otra parte.

También puedes ejecutar `rclone about "remote:"` en la pestaña Terminal integrada, sustituyendo `remote` por el nombre de tu remoto, para confirmar que la cuenta responde.

<img src="/support/images/en/blog/new-remote.png" alt="Edición de un remoto de OpenDrive en Remote Manager de RcloneView" class="img-large img-center" />

## Leer el historial de trabajos y activar los registros DEBUG

Abre Job History y observa el estado, la duración y el número de archivos de la ejecución fallida. Un trabajo que termina con error a mitad de camino suele apuntar a un archivo concreto o a un problema de carga de transferencia, no a un inicio de sesión incorrecto.

Para ver el mensaje exacto de cada archivo, ve a Settings > Embedded Rclone, activa el registro de rclone, establece el nivel en DEBUG y reinicia el rclone integrado. Reproduce el fallo y lee el registro en la pestaña Log o en la carpeta de registros que hayas configurado.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historial de trabajos de RcloneView con un trabajo de OpenDrive con errores" class="img-large img-center" />

## Reducir la carga en transferencias interrumpidas

Las subidas que fallan de forma intermitente suelen mejorar cuando se mueven menos archivos a la vez. En el paso 2 del asistente de sincronización, reduce el número de transferencias de archivos y de equality checkers (la recomendación para backends lentos es 4 o menos). Mantén "Retry entire sync if fails" en 3 para que los fallos transitorios se reintenten automáticamente.

Usa un Dry Run antes de volver a ejecutar para confirmar que la lista de archivos que se copiarán o eliminarán es la que esperas.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Reejecución de un trabajo de OpenDrive con menor concurrencia en RcloneView" class="img-large img-center" />

## Verificar con Folder Compare

Tras la reejecución, abre Compare con la carpeta local en un lado y OpenDrive en el otro. Filtra por archivos left-only, right-only y different para ver exactamente qué falta o qué no coincide, y copia solo esos elementos en lugar de repetir todo el trabajo.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare mostrando archivos que faltan en OpenDrive" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Vuelve a introducir las credenciales de OpenDrive en Remote Manager y confirma que se lista la carpeta raíz.
3. Revisa Job History y activa el registro DEBUG para el trabajo que falla.
4. Reduce la concurrencia, ejecuta un Dry Run, vuelve a ejecutar y confirma con Folder Compare.

Una vez identificada la causa mediante registros y comparaciones, los fallos de OpenDrive se convierten en una corrección breve y repetible.

---

**Guías relacionadas:**

- [Gestionar el almacenamiento de OpenDrive — Sincronizar y hacer copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-opendrive-cloud-sync-backup-rcloneview)
- [Solucionar errores de sincronización de Gofile con RcloneView](https://rcloneview.com/support/blog/fix-gofile-sync-errors-rcloneview)
- [Solucionar sincronizaciones en la nube atascadas o bloqueadas con RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-stuck-hanging-rcloneview)

<CloudSupportGrid />
