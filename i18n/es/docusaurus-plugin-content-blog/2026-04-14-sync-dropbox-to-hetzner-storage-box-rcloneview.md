---
slug: sync-dropbox-to-hetzner-storage-box-rcloneview
title: "Sincronizar Dropbox con Hetzner Storage Box — Copia de seguridad en la nube con RcloneView"
authors:
  - tayson
description: "Usa RcloneView para sincronizar y respaldar archivos de Dropbox en Hetzner Storage Box. Una guía paso a paso para migrar o mantener una copia de seguridad de Dropbox en Hetzner."
keywords:
  - sincronizar Dropbox con Hetzner Storage Box
  - copia de seguridad Dropbox Hetzner
  - migrar de Dropbox a Hetzner
  - copia de seguridad en la nube Hetzner Storage Box
  - rclone Dropbox Hetzner
  - copia de seguridad de Dropbox a SFTP
  - copia de seguridad en la nube europea Dropbox
  - RcloneView Dropbox Hetzner
tags:
  - dropbox
  - hetzner
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincronizar Dropbox con Hetzner Storage Box — Copia de seguridad en la nube con RcloneView

> RcloneView sincroniza Dropbox con Hetzner Storage Box a través de SFTP, ofreciendo a los usuarios europeos un destino de copia de seguridad secundario conforme al RGPD para sus archivos de Dropbox.

Hetzner Storage Box es un servicio de almacenamiento económico alojado en Alemania que admite acceso mediante SFTP, FTP, Samba y WebDAV. Las empresas y desarrolladores europeos que usan Dropbox para colaborar suelen añadir Hetzner Storage Box como destino de copia de seguridad secundario: resulta considerablemente más económico para grandes volúmenes de datos y mantiene la información dentro de la jurisdicción de la UE. RcloneView conecta ambos servicios mediante los backends de Dropbox y SFTP de rclone, convirtiendo las sincronizaciones programadas de Dropbox a Hetzner en una operación sencilla desde la interfaz gráfica.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configuración de Dropbox y Hetzner Storage Box

Añade primero Dropbox: **pestaña Remoto → Nuevo remoto → Dropbox**, autentícate mediante inicio de sesión OAuth en el navegador. Tus carpetas de Dropbox aparecerán inmediatamente en el Explorador.

Añade Hetzner Storage Box como un remoto SFTP: **Nuevo remoto → SFTP**. Configúralo con:
- **Host**: `yourboxid.your-storagebox.de`
- **Usuario**: tu nombre de usuario de Storage Box (que aparece en el panel Hetzner Robot)
- **Autenticación**: clave SSH (recomendado) o contraseña
- **Puerto**: 23 (Hetzner Storage Box usa el puerto 23, no el estándar 22)

Prueba la conexión antes de guardar. Una vez añadidos ambos remotos, abre un Explorador con panel dividido para ver Dropbox a la izquierda y Hetzner a la derecha.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Dropbox and Hetzner Storage Box SFTP remote in RcloneView" class="img-large img-center" />

## Creación de un trabajo de sincronización programado

Para un escenario de copia de seguridad continua, crea un trabajo de sincronización en el Administrador de trabajos: el origen es tu carpeta de Dropbox (por ejemplo, `dropbox:/Team/Projects/`), y el destino es tu ruta de Hetzner (por ejemplo, `hetzner:/backups/dropbox/`). En el paso 2, establece las transferencias simultáneas entre 4 y 6; Hetzner Storage Box gestiona bien las conexiones SFTP en este nivel de concurrencia.

Programa el trabajo para que se ejecute todas las noches a las 2:00 AM (licencia PLUS). La sincronización incremental solo copia archivos nuevos o modificados, manteniendo los tiempos de transferencia cortos después de la sincronización completa inicial. El Historial de trabajos registra el estado, el tamaño de la transferencia y la duración de cada ejecución para tus registros.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling nightly Dropbox to Hetzner sync in RcloneView" class="img-large img-center" />

## Migración única de Dropbox a Hetzner

Si estás migrando desde Dropbox hacia Hetzner Storage Box como ubicación de almacenamiento principal, utiliza un trabajo de copia en lugar de sincronización. La copia transfiere todos los archivos de Dropbox a Hetzner sin eliminar nada en el origen, preservando el contenido de tu Dropbox durante el periodo de transición. Ejecuta primero la Simulación (Dry Run) para verificar el número de archivos y el tamaño total de la transferencia antes de confirmarla.

Para cuentas de Dropbox grandes con cientos de GB, activa la verificación de checksum en el paso 2 para confirmar la integridad de cada archivo tras la transferencia. La función Comparar carpetas te permite verificar que la migración se completó correctamente comparando la estructura de carpetas de Dropbox y Hetzner una junto a la otra al finalizar el trabajo.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Dropbox and Hetzner Storage Box folders after migration in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade Dropbox mediante OAuth y Hetzner Storage Box mediante SFTP (puerto 23) en el asistente de Nuevo remoto.
3. Crea un trabajo de sincronización desde tu ruta de Dropbox hasta tu ruta de Hetzner en el Administrador de trabajos.
4. Programa sincronizaciones nocturnas y revisa el Historial de trabajos para obtener registros de auditoría de transferencias.

Sincronizar Dropbox con Hetzner Storage Box mediante RcloneView ofrece a los equipos europeos una copia de seguridad secundaria económica y conforme al RGPD que se ejecuta automáticamente sin necesidad de intervención manual.

---

**Guías relacionadas:**

- [Montar Hetzner Storage Box y sincronizar con la nube con RcloneView](https://rcloneview.com/support/blog/mount-hetzner-storage-box-sync-cloud-rcloneview)
- [Copia de seguridad de Dropbox a Backblaze B2 con RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [Copia de seguridad de Dropbox a AWS S3 con RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-aws-s3-rcloneview)

<CloudSupportGrid />
