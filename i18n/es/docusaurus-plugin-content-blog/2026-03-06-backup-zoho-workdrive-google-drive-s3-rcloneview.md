---
slug: backup-zoho-workdrive-google-drive-s3-rcloneview
title: "Haz copias de seguridad de Zoho WorkDrive a Google Drive o S3 automáticamente con RcloneView"
authors:
  - tayson
description: "Protege tus datos de Zoho WorkDrive haciendo copias de seguridad en Google Drive, AWS S3 o almacenamiento externo — de forma automática y programada — usando la conexión WebDAV de RcloneView."
keywords:
  - zoho workdrive backup
  - zoho to google drive
  - zoho workdrive sync
  - zoho workdrive export
  - backup zoho files
  - zoho workdrive to s3
  - zoho cloud backup tool
  - zoho workdrive migration
  - zoho workdrive rclone
  - zoho file backup automation
tags:
  - zoho
  - sync
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Haz copias de seguridad de Zoho WorkDrive a Google Drive o S3 automáticamente con RcloneView

> Zoho WorkDrive es una sólida herramienta de colaboración, pero ¿cuál es tu plan de copia de seguridad? Si tu suscripción de Zoho caduca o se eliminan datos por accidente, una copia de seguridad independiente en Google Drive o S3 garantiza que no se pierda nada.

Zoho WorkDrive es popular entre empresas que utilizan el ecosistema Zoho — CRM, correo, proyectos y almacenamiento de archivos compartido en una sola plataforma. Pero Zoho no ofrece una forma nativa de hacer copias de seguridad de los datos de WorkDrive en otra nube. Si necesitas una copia independiente para recuperación ante desastres, cumplimiento normativo o migración, RcloneView cubre esa carencia conectándose a WorkDrive mediante WebDAV.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ¿Por qué hacer copia de seguridad de Zoho WorkDrive?

- **Sin copia de seguridad nativa entre nubes** — Zoho no ofrece una función integrada para exportar a S3 o a Google Drive.
- **Riesgo de eliminación accidental** — Los miembros del equipo pueden eliminar archivos compartidos. Sin una copia de seguridad externa, la recuperación puede ser imposible.
- **Dependencia de la suscripción** — Si tu plan de Zoho caduca o se degrada, el acceso a los archivos puede verse restringido.
- **Requisitos de cumplimiento** — Algunas normativas exigen que los datos se almacenen en varias ubicaciones independientes.
- **Flexibilidad de migración** — Si alguna vez decides pasar de Zoho a Google Workspace o Microsoft 365, tener una copia de seguridad hace que la transición sea fluida.

## Conectar Zoho WorkDrive mediante WebDAV

Zoho WorkDrive admite acceso vía WebDAV, al que RcloneView se conecta de forma nativa:

1. Abre RcloneView y haz clic en **Add Remote**.
2. Selecciona **WebDAV** en la lista de proveedores.
3. Introduce los datos WebDAV de tu Zoho WorkDrive:
   - **URL**: El endpoint WebDAV de tu Zoho WorkDrive.
   - **Username**: Tu correo electrónico de Zoho.
   - **Password**: Una contraseña específica de aplicación generada en la configuración de seguridad de Zoho.
4. Guarda — tus archivos y carpetas de WorkDrive ya se pueden explorar.

Para más detalles sobre la configuración de WebDAV, consulta la [guía de conexión WebDAV](https://rcloneview.com/support/howto/remote-storage-connection-settings/webdav).

<img src="/support/images/en/blog/new-remote.png" alt="Add Zoho WorkDrive via WebDAV" class="img-large img-center" />

## Explorar tus archivos de WorkDrive

Una vez conectado, explora todo tu WorkDrive en el Explorador de dos paneles:

- Visualiza carpetas de equipo, archivos personales y espacios compartidos.
- Comprueba el tamaño de los archivos para estimar las necesidades de almacenamiento de la copia de seguridad.
- Identifica las carpetas críticas que necesitan copia de seguridad prioritaria.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Zoho WorkDrive files" class="img-large img-center" />

## Copia de seguridad en Google Drive

1. **Añade Google Drive** como segundo remoto (mediante [inicio de sesión OAuth](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)).
2. **Crea un trabajo de copia (Copy job)**: Zoho WorkDrive → carpeta de Google Drive.
3. **Ejecuta la copia de seguridad inicial** — todos los archivos se transfieren conservando la estructura de carpetas.
4. **Programa ejecuciones diarias** con [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution) para actualizaciones incrementales automáticas.

## Copia de seguridad en AWS S3

1. **Añade S3** como remoto ([guía de configuración de S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)).
2. **Crea un trabajo de copia (Copy job)**: Zoho WorkDrive → bucket de S3.
3. **Programa** ejecuciones nocturnas.
4. Usa las políticas de ciclo de vida de S3 para mover las copias de seguridad antiguas a Glacier y ahorrar costes.

## Verifica tu copia de seguridad

Después de cada ejecución de copia de seguridad, usa la [Comparación de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents) para confirmar que está completa:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Zoho WorkDrive backup" class="img-large img-center" />

## Automatiza y supervisa

1. **Programa copias de seguridad** para que se ejecuten diariamente en horas de menor actividad.
2. **Recibe notificaciones** vía [Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control) o [Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control).
3. **Revisa el historial de trabajos** para hacer seguimiento de todas las copias de seguridad realizadas.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Zoho WorkDrive backups" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Zoho backup job history" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Añade Zoho WorkDrive** mediante WebDAV.
3. **Añade tu destino de copia de seguridad** (Google Drive, S3, unidad externa).
4. **Crea un trabajo de copia (Copy job)** y prográmalo.
5. **Verifica** con la Comparación de carpetas.

No dejes que los datos de tu Zoho WorkDrive existan sin un plan de copia de seguridad. RcloneView te ofrece copias de seguridad automatizadas y verificadas en cualquier nube — para la tranquilidad que Zoho no proporciona de forma nativa.

---

**Guías relacionadas:**

- [Añadir WebDAV](https://rcloneview.com/support/howto/remote-storage-connection-settings/webdav)
- [Añadir remoto mediante inicio de sesión basado en navegador (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Añadir AWS S3 y compatibles con S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Comparar el contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Programación de trabajos](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
