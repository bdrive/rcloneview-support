---
slug: sync-hidrive-to-google-drive-rcloneview
title: "Sincroniza HiDrive con Google Drive — Copia de seguridad en la nube con RcloneView"
authors:
  - tayson
description: "Sincroniza tu almacenamiento Strato HiDrive con Google Drive usando RcloneView. Automatiza copias de seguridad en la nube, transfiere archivos directamente entre proveedores y mantén ambas cuentas sincronizadas."
keywords:
  - sync HiDrive to Google Drive
  - HiDrive Google Drive sync RcloneView
  - Strato HiDrive backup to Google Drive
  - HiDrive cloud migration
  - move files HiDrive Google Drive
  - HiDrive sync tool GUI
  - Google Drive backup from HiDrive
  - RcloneView HiDrive sync
  - HiDrive file transfer tool
  - cloud to cloud sync HiDrive
tags:
  - RcloneView
  - hidrive
  - google-drive
  - cloud-to-cloud
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincroniza HiDrive con Google Drive — Copia de seguridad en la nube con RcloneView

> RcloneView mantiene tu Strato HiDrive y Google Drive sincronizados automáticamente — transferencias directas entre nubes con trabajos programados y monitoreo completo de transferencias.

Strato HiDrive es ampliamente utilizado en países de habla alemana para almacenamiento en la nube seguro con un fuerte cumplimiento del RGPD. Los equipos que usan HiDrive junto con Google Workspace suelen necesitar sincronizar contenido entre ambas plataformas, manteniendo los archivos de proyecto accesibles desde ambos entornos. RcloneView gestiona esta sincronización de forma fiable, conectándose a ambos proveedores y ejecutando transferencias automatizadas según el horario que definas.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta HiDrive y Google Drive en RcloneView

Tanto HiDrive como Google Drive usan autenticación basada en OAuth en RcloneView. Ve a la pestaña Remote > New Remote:

- **HiDrive:** Selecciona HiDrive y completa el inicio de sesión OAuth con tus credenciales de Strato HiDrive
- **Google Drive:** Selecciona Google Drive y completa la autenticación OAuth basada en navegador

RcloneView almacena los tokens de forma segura y los renueva automáticamente cuando caducan. Abre ambos remotos en el explorador de doble panel para revisar qué existe en cada lado antes de configurar la sincronización.

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive and Google Drive remotes in RcloneView" class="img-large img-center" />

## Configura el trabajo de sincronización de HiDrive a Google Drive

Crea un trabajo de sincronización en el asistente de RcloneView con HiDrive como origen y una carpeta de Google Drive como destino. Para una consultora que almacena entregables de clientes en HiDrive y los comparte a través de Google Workspace, un trabajo de sincronización diario garantiza que la copia en Google Drive esté actualizada después de cada jornada laboral.

En la configuración avanzada, ajusta el número de transferencias simultáneas según tu ancho de banda y activa la verificación de **checksum** si la integridad de los datos entre cuentas es crítica. Las opciones de filtro predefinidas pueden excluir tipos de archivo específicos (por ejemplo, cachés de miniaturas de HiDrive o archivos temporales) de la sincronización.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring HiDrive to Google Drive sync in RcloneView" class="img-large img-center" />

## Programa sincronizaciones automáticas (PLUS)

Con una licencia PLUS, puedes programar el trabajo de sincronización de HiDrive a Google Drive para que se ejecute automáticamente. Una configuración habitual: sincronizar HiDrive con Google Drive todas las tardes a las 19:00 para capturar el trabajo del día. Usa la función **Simulate schedule** para verificar que tu expresión cron produce los horarios de ejecución esperados antes de activarla.

La opción Auto Start Schedule on Startup garantiza que los trabajos programados se reanuden tras reiniciar el equipo, algo importante para trabajos de sincronización que se ejecutan en una estación de trabajo compartida.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling HiDrive to Google Drive sync in RcloneView" class="img-large img-center" />

## Monitorea el estado y el historial de sincronización

La pestaña Transfer de RcloneView muestra el progreso de sincronización en tiempo real. Después de cada sincronización, Job History registra la ejecución: archivos transferidos, bytes movidos, velocidad y duración. Si la API de Google Drive limita las solicitudes durante una sincronización de gran tamaño, el registro muestra eventos de reintento, lo que te ayuda a ajustar la configuración de transferencias simultáneas para futuros trabajos.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for HiDrive to Google Drive sync in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade HiDrive y Google Drive como remotos OAuth en la pestaña Remote > New Remote.
3. Crea un trabajo de Sync o Copy desde HiDrive hacia tu carpeta de Google Drive.
4. Programa ejecuciones automáticas con la licencia PLUS y supervisa el progreso en Job History.

Mantener HiDrive y Google Drive sincronizados es sencillo con el motor de sincronización automatizado de RcloneView: los datos se mueven directamente en la nube sin necesidad de pasos manuales.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento HiDrive — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [Gestiona el almacenamiento de Google Drive — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Sincroniza HiDrive con OneDrive usando RcloneView](https://rcloneview.com/support/blog/sync-hidrive-to-onedrive-rcloneview)

<CloudSupportGrid />
