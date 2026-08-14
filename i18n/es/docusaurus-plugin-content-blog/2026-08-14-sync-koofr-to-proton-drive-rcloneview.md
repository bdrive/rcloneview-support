---
slug: sync-koofr-to-proton-drive-rcloneview
title: "Sincronizar Koofr con Proton Drive — Copia de seguridad en la nube con RcloneView"
authors:
  - alex
description: "Aprende a sincronizar archivos de Koofr a Proton Drive con RcloneView, una interfaz multiplataforma para mantener dos nubes respaldadas y sincronizadas."
keywords:
  - sincronizar Koofr con Proton Drive
  - copia de seguridad Koofr Proton Drive
  - RcloneView Koofr
  - RcloneView Proton Drive
  - sincronización de nube a nube
  - copia de seguridad de Koofr
  - sincronización de Proton Drive
  - copia de seguridad en la nube cifrada
  - herramienta de sincronización multi-nube
tags:
  - RcloneView
  - koofr
  - proton-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincronizar Koofr con Proton Drive — Copia de seguridad en la nube con RcloneView

> Mantén una copia de seguridad permanente de tus archivos de Koofr en Proton Drive sin descargar nada antes a un disco local.

Koofr es un servicio de almacenamiento en la nube europeo que también puede agregar otras cuentas, mientras que Proton Drive ofrece almacenamiento cifrado de extremo a extremo de los creadores de Proton Mail. Algunos usuarios quieren ambos — Koofr por su vista unificada, Proton Drive por sus garantías de privacidad — y RcloneView te permite conectarlos uno junto al otro y sincronizarlos directamente, de nube a nube, sin pasar los archivos por un disco local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Añadir Koofr y Proton Drive como remotos

Añade Koofr como remoto a través de Remote Manager usando las credenciales de tu cuenta, y repite el proceso con Proton Drive, que se autentica con tu correo de Proton, tu contraseña y un código de doble factor opcional. Ambos remotos aparecen como pestañas independientes en el explorador, así que puedes abrir Koofr en un panel y Proton Drive en el otro para compararlos directamente antes de configurar cualquier transferencia.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir Koofr y Proton Drive como remotos en RcloneView" class="img-large img-center" />

También puedes conectar S3, Azure o Backblaze B2 con lectura y escritura completas en la licencia FREE, de modo que una sincronización de Koofr a Proton Drive convive con cualquier copia de seguridad de almacenamiento de objetos que ya tengas en marcha — todo desde la misma ventana.

## Configurar una sincronización unidireccional

Abre el asistente de sincronización desde la pestaña Home y selecciona Koofr como origen y Proton Drive como destino, eligiendo "Modifying destination only" para una copia de seguridad unidireccional que nunca altera tus archivos originales de Koofr. En Advanced Settings, activa la comparación por checksum para que los archivos se emparejen por hash y tamaño en lugar de solo por la fecha de modificación, algo importante cuando Koofr y Proton Drive reportan las marcas de tiempo de forma distinta.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configurar una sincronización unidireccional de Koofr a Proton Drive" class="img-large img-center" />

Antes de ejecutarla de verdad, usa Dry Run para ver exactamente qué archivos se copiarán, y aplica filtros — por tipo de archivo, tamaño máximo o profundidad de carpetas — si solo quieres reflejar carpetas específicas en lugar de toda la cuenta de Koofr.

## Programar y hacer seguimiento de la copia de seguridad

Guarda la configuración como un trabajo en Job Manager, y los usuarios con licencia PLUS pueden asociarle una programación en formato crontab para que la sincronización de Koofr a Proton Drive se ejecute automáticamente con una cadencia fija, con una vista previa de las próximas ejecuciones antes de confirmar.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Programar una sincronización recurrente de Koofr a Proton Drive" class="img-large img-center" />

Cada ejecución queda registrada en Job History con duración, velocidad de transferencia, número de archivos y tamaño total transferido, dándote un registro para confirmar que la copia de seguridad se ejecutó correctamente o detectar una ejecución que necesite reintentarse.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade Koofr y Proton Drive como remotos en Remote Manager.
3. Crea un trabajo de sincronización unidireccional de Koofr a Proton Drive y ejecuta primero un Dry Run.
4. Guarda el trabajo y, si tienes PLUS, asocia una programación para copias de seguridad recurrentes sin esfuerzo.

Una vez configurado, tus archivos de Koofr quedan reflejados en Proton Drive con cada ejecución, dándote una copia cifrada sin salir nunca de RcloneView.

---

**Guías relacionadas:**

- [Gestionar el almacenamiento Proton Drive — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Gestionar el almacenamiento Koofr — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Migrar de Proton Drive a Backblaze B2 — Transferencia de archivos con RcloneView](https://rcloneview.com/support/blog/migrate-proton-drive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
