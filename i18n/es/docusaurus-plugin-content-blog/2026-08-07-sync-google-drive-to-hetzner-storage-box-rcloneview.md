---
slug: sync-google-drive-to-hetzner-storage-box-rcloneview
title: "Sincronizar Google Drive con Hetzner Storage Box — copia de seguridad en la nube con RcloneView"
authors:
  - steve
description: "Sincroniza archivos de Google Drive con una Hetzner Storage Box para una copia de seguridad externa económica usando los trabajos de sincronización entre proveedores de RcloneView."
keywords:
  - sincronizar google drive con hetzner
  - copia de seguridad google drive hetzner storage box
  - hetzner storage box rclone
  - copia de seguridad externa de google drive
  - sincronización de almacenamiento en la nube económica
  - copia de seguridad de almacenamiento en la nube europea
  - sincronización google drive rcloneview
  - copia de seguridad hetzner box
  - copia de seguridad sftp de google drive
  - copia de seguridad de nube a nube
tags:
  - RcloneView
  - google-drive
  - hetzner
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincronizar Google Drive con Hetzner Storage Box — copia de seguridad en la nube con RcloneView

> Conserva una segunda copia de bajo costo de tus archivos de Google Drive en una Hetzner Storage Box sin salir del escritorio ni escribir una sola línea de código.

Google Drive es cómodo para la colaboración diaria, pero por sí solo no está diseñado como destino de copia de seguridad a largo plazo — una segunda copia en una infraestructura independiente protege frente a bloqueos de cuenta, eliminaciones accidentales o sorpresas de cuota. Hetzner Storage Box es una opción popular para esto por su bajo costo por terabyte, y RcloneView conecta ambos directamente mediante un trabajo de sincronización programado, sin necesidad de scripts en línea de comandos. RcloneView monta y sincroniza ambos proveedores desde una sola ventana, en Windows, macOS y Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar ambos remotos

Primero añade Google Drive a través de Remote Manager usando el inicio de sesión OAuth estándar del navegador — no se necesita introducir ninguna clave de API, ya que RcloneView gestiona automáticamente el flujo de autenticación. Luego añade la Hetzner Storage Box como remoto SFTP, introduciendo la dirección del host de la caja y tus credenciales SSH en la pantalla de configuración de Credential Entry.

Una vez que ambos remotos aparezcan como pestañas en el panel del explorador, abre un diseño de panel dividido para examinarlos uno junto al otro. Esta es una comprobación útil antes de configurar cualquier trabajo automatizado — confirma que la estructura de carpetas de destino en la Storage Box coincide con lo esperado antes de dirigir una sincronización hacia ella.

<img src="/support/images/en/blog/new-remote.png" alt="Añadiendo Google Drive y Hetzner Storage Box como remotos en RcloneView" class="img-large img-center" />

## Configurar el trabajo de sincronización

En el asistente de sincronización, selecciona Google Drive como origen y la Hetzner Storage Box como destino, y elige la dirección de sincronización **One-way** (unidireccional) para que la Storage Box refleje Google Drive sin eliminar nada en el origen. En el Paso 3, aplica filtros para omitir los tipos de archivo que no necesitas respaldar — excluir archivos `.tmp` o formatos exclusivos de Google Docs reduce el volumen transferido y agiliza las ejecuciones posteriores.

Activar la comparación por checksum en Advanced Settings hace que RcloneView solo vuelva a transferir los archivos que realmente han cambiado, en lugar de todos los que tienen una fecha de modificación más reciente — esto es especialmente importante en Google Drive, donde las marcas de tiempo de metadatos pueden cambiar sin que cambie el contenido.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configurando un trabajo de sincronización unidireccional de Google Drive a Hetzner Storage Box en RcloneView" class="img-large img-center" />

## Automatizar y supervisar la copia de seguridad

Ejecuta primero un Dry Run para previsualizar exactamente qué archivos se copiarán, luego ejecuta el trabajo y observa el progreso en directo en la pestaña Transferring de la Info View — se muestran la velocidad de transferencia, el número de archivos y el tamaño total. Los titulares de licencia PLUS pueden adjuntar una programación con formato crontab para que la sincronización se repita sin intervención manual, y el Job History mantiene un registro permanente de la duración y el resultado de cada ejecución para su posterior auditoría.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Programando un trabajo de sincronización recurrente de Google Drive a Hetzner Storage Box en RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Conecta Google Drive mediante OAuth y añade la Hetzner Storage Box como remoto SFTP.
3. Crea un trabajo de sincronización unidireccional con filtros y comparación por checksum activados.
4. Ejecuta un Dry Run y luego la sincronización, supervisándola en la pestaña Transferring.

Tener una segunda copia en una infraestructura independiente y de bajo costo es una de las formas más sencillas de proteger los datos de Google Drive, y RcloneView mantiene esa rutina funcionando sin manipulación manual de archivos.

---

**Guías relacionadas:**

- [Gestionar el almacenamiento de Hetzner Storage Box — Sincronizar y hacer copia de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-hetzner-storage-box-sync-rcloneview)
- [Sincronizar Dropbox con Hetzner Storage Box — copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/sync-dropbox-to-hetzner-storage-box-rcloneview)
- [Gestionar el almacenamiento de Google Drive — Sincronizar y hacer copia de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
