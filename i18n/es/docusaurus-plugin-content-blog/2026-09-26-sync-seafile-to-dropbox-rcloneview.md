---
slug: sync-seafile-to-dropbox-rcloneview
title: "Sincronizar Seafile con Dropbox — Copia de seguridad en la nube con RcloneView"
authors:
  - casey
description: "Haz una copia de seguridad de un servidor Seafile autoalojado en Dropbox con RcloneView, usando trabajos de sincronización programados y previsualizaciones Dry Run para transferencias seguras y verificadas."
keywords:
  - sincronizar Seafile con Dropbox
  - copia de seguridad de Seafile en Dropbox
  - copia de seguridad en la nube autoalojada
  - RcloneView Seafile
  - sincronización de nube a nube
  - copia de seguridad externa de Seafile
  - herramienta de copia de seguridad de Dropbox
  - recuperación ante desastres de Seafile
  - migración de autoalojado a Dropbox
tags:
  - RcloneView
  - seafile
  - dropbox
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincronizar Seafile con Dropbox — Copia de seguridad en la nube con RcloneView

> Dale a un servidor Seafile autoalojado una copia externa en Dropbox sin escribir nada a mano.

Seafile es popular precisamente porque mantiene los datos bajo el propio control de la organización, pero esa misma independencia significa que no hay una vía integrada hacia una copia de seguridad externa. Si el servidor, su disco o su host se cae, todo lo que no esté copiado en otro lugar se pierde. RcloneView se conecta a Seafile junto con Dropbox en la misma ventana y mueve archivos entre ambos como un trabajo de sincronización programado, de modo que el servidor autoalojado obtiene una copia externa real sin que nadie tenga que escribir a mano un script de cron o un comando de rclone. RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux, así que la misma configuración funciona tanto si el trabajo de sincronización se ejecuta desde el portátil de un administrador como desde una máquina dedicada a copias de seguridad.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Seafile y Dropbox

Seafile se añade como remoto indicando la URL del servidor, la biblioteca y las credenciales de la cuenta, y RcloneView verifica la conexión antes de guardar. Dropbox usa el flujo OAuth, más sencillo: se abre una ventana del navegador, se autoriza la cuenta, y el remoto aparece automáticamente como una pestaña. Una vez configurados ambos, el Remote Manager los muestra uno junto al otro, y cada uno puede editarse más adelante sin afectar al otro.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a self-hosted Seafile server and Dropbox as remotes in RcloneView" class="img-large img-center" />

Con ambos remotos conectados, abre un diseño de dos paneles para explorar juntos la biblioteca de Seafile y la carpeta de destino en Dropbox antes de lanzar una sincronización completa.

## Configurar el trabajo de sincronización

Crea un trabajo de sincronización unidireccional con la biblioteca de Seafile como origen y una carpeta dedicada de Dropbox como destino, para que las ejecuciones de la copia de seguridad nunca modifiquen accidentalmente los datos originales de Seafile. En Filtering Settings, excluye todo lo que no deba salir del servidor — archivos temporales, carpetas `.git/` de cualquier proyecto versionado, o tipos de archivo por encima de un umbral de tamaño — usando la misma sintaxis de filtros personalizados que RcloneView aplica a cualquier trabajo de sincronización. Ejecuta primero un Dry Run: enumera todos los archivos que se copiarían sin transferir nada realmente, la forma más rápida de detectar una carpeta de origen incorrecta antes de que cueste ancho de banda.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Seafile to Dropbox backup job in RcloneView" class="img-large img-center" />

Los usuarios con licencia PLUS pueden asociar al trabajo un horario tipo crontab para que la copia de seguridad se ejecute cada noche sin que nadie tenga que iniciarla manualmente — útil para un servidor Seafile que cambia a lo largo de la jornada laboral.

## Verificar la copia de seguridad en Job History

Activa la comparación por suma de comprobación en Advanced Settings para que RcloneView confirme que los archivos coinciden por hash y tamaño en lugar de fiarse solo del tamaño del archivo, algo importante cuando el control de versiones de Seafile puede dejar archivos con el mismo tamaño pero distinto contenido. Después de cada ejecución, Job History muestra el total de archivos transferidos, el tiempo empleado y cualquier elemento con errores, lo que facilita confirmar que la copia en Dropbox está realmente al día antes de confiar en ella como punto de restauración.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing a completed Seafile to Dropbox sync" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade tu servidor Seafile como remoto con la ruta de la biblioteca y las credenciales.
3. Añade Dropbox mediante el flujo de inicio de sesión OAuth.
4. Ejecuta un Dry Run, luego ejecuta el trabajo de sincronización y confirma los resultados en Job History.

Una copia programada y verificada en Dropbox convierte una instalación autoalojada de Seafile de un único punto de fallo en un servidor con una alternativa real.

---

**Guías relacionadas:**

- [Gestionar la nube autoalojada de Seafile con Google Drive, S3 y almacenamiento externo usando RcloneView](https://rcloneview.com/support/blog/manage-seafile-self-hosted-cloud-sync-rcloneview)
- [Gestionar Dropbox — Sincronizar y respaldar archivos con RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Solucionar errores de sincronización de Seafile con RcloneView](https://rcloneview.com/support/blog/fix-seafile-sync-errors-rcloneview)

<CloudSupportGrid />
