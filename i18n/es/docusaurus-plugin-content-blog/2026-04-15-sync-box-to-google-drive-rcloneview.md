---
slug: sync-box-to-google-drive-rcloneview
title: "Sincronizar Box con Google Drive — Copia de seguridad en la nube con RcloneView"
authors:
  - tayson
description: "Sincroniza Box con Google Drive usando RcloneView — transfiere archivos, automatiza copias de seguridad y mantén ambas plataformas actualizadas con una sencilla GUI de nube a nube."
keywords:
  - Box to Google Drive sync
  - Box to Google Drive migration
  - cloud sync tool
  - RcloneView Box
  - Box backup
  - Google Drive archive
  - cloud-to-cloud sync
  - enterprise cloud transfer
  - Box Google Drive workflow
  - Box content migration
tags:
  - RcloneView
  - box
  - google-drive
  - cloud-to-cloud
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincronizar Box con Google Drive — Copia de seguridad en la nube con RcloneView

> Box gestiona el cumplimiento normativo empresarial y el uso compartido seguro, mientras que Google Drive sostiene la edición colaborativa — RcloneView sincroniza el contenido entre ambas plataformas directamente, sin ningún disco local intermediario.

Box es ampliamente utilizado en entornos empresariales por sus controles de cumplimiento normativo y el uso compartido seguro de archivos, mientras que Google Drive sustenta los flujos de trabajo de colaboración en tiempo real. Cuando los equipos usan ambas plataformas o están consolidando su salida de Box, mantener el contenido sincronizado — o migrar archivos entre plataformas — requiere una herramienta fiable de nube a nube. RcloneView conecta Box y Google Drive directamente, sin necesidad de descargar nada al disco local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Box y Google Drive

Tanto Box como Google Drive utilizan autenticación OAuth por navegador en RcloneView. Ve a **Remote tab > New Remote**, selecciona **Box** y completa el inicio de sesión en el navegador. Repite el proceso para **Google Drive**. Ambos remotos aparecerán entonces como pestañas en el panel del explorador, listos para explorarse de inmediato.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and Google Drive remotes in RcloneView" class="img-large img-center" />

Para cuentas de **Box for Business**, configura el ajuste `box_sub_type` como `enterprise` al crear el remoto. Esto garantiza que RcloneView se conecte a la cuenta de Box de la organización en lugar del almacenamiento personal, dando acceso a carpetas compartidas y contenido propiedad de la empresa.

## Ejecutar el trabajo de sincronización

En **Job Manager**, crea un nuevo trabajo de sincronización: el origen es tu carpeta de Box (o una subcarpeta específica como `/Projects/2026`), y el destino es la carpeta de Google Drive deseada. La sincronización de RcloneView es unidireccional por defecto — refleja el origen en el destino sin modificar el contenido de origen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box to Google Drive sync job in RcloneView" class="img-large img-center" />

Para un equipo legal que sincroniza expedientes de casos completados desde Box a Google Drive con fines de archivo a largo plazo, filtrar por antigüedad de archivo (Max File Age en el paso 3 de la configuración del trabajo) limita la sincronización solo a los archivos modificados recientemente, manteniendo el tamaño de la transferencia bajo control. La vista previa de **Dry Run** confirma exactamente qué archivos se moverán antes de tocar ningún dato.

## Automatización y monitorización

Con una licencia PLUS, programar la sincronización de Box a Google Drive garantiza que ambas plataformas se mantengan actualizadas. Una programación basada en cron — por ejemplo, cada domingo a medianoche — ejecuta la sincronización automáticamente sin intervención del usuario.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Box to Google Drive sync in RcloneView" class="img-large img-center" />

La función de **sincronización 1:N** de RcloneView incluso te permite sincronizar desde una carpeta de Box a varios destinos de Google Drive simultáneamente — útil para respaldar el mismo contenido tanto en una Team Drive compartida como en una carpeta de archivo personal en un solo trabajo. **Job History** registra cada ejecución con estadísticas detalladas: archivos transferidos, duración, velocidad y estado.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade el remoto de **Box** (OAuth) y el remoto de **Google Drive** (OAuth).
3. Abre **Job Manager** y crea un trabajo de sincronización desde tu carpeta de Box hacia Google Drive.
4. Activa la programación (PLUS) para automatizar sincronizaciones periódicas.

Sincronizar Box con Google Drive mediante RcloneView significa que tu contenido se mueve de forma fiable entre plataformas, mientras ambas permanecen organizadas y accesibles sin esfuerzo manual.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento en la nube de Box — Sincronización y copia de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Migración de Box a Dropbox sin tiempo de inactividad con RcloneView](https://rcloneview.com/support/blog/zero-downtime-box-to-dropbox-rcloneview)
- [Migra de Box a SharePoint y OneDrive con RcloneView](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)

<CloudSupportGrid />
