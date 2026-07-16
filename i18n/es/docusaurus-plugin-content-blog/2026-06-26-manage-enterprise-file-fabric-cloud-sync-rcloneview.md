---
slug: manage-enterprise-file-fabric-cloud-sync-rcloneview
title: "Gestiona el almacenamiento de Enterprise File Fabric — Sincroniza y respalda archivos con RcloneView"
authors:
  - morgan
description: "Conecta, sincroniza y respalda el almacenamiento de Enterprise File Fabric con RcloneView — la GUI multicloud multiplataforma basada en rclone para Windows, macOS y Linux."
keywords:
  - Enterprise File Fabric RcloneView
  - sincronizar Enterprise File Fabric
  - sincronización en la nube de Enterprise File Fabric
  - copia de seguridad de Enterprise File Fabric
  - gestionar archivos de Enterprise File Fabric
  - gestión de almacenamiento en la nube empresarial
  - RcloneView almacenamiento empresarial
  - cliente GUI de Enterprise File Fabric
tags:
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el almacenamiento de Enterprise File Fabric — Sincroniza y respalda archivos con RcloneView

> RcloneView se conecta directamente a Enterprise File Fabric, permitiéndote explorar, sincronizar y respaldar el almacenamiento de archivos gestionado de tu organización sin escribir un solo comando de CLI.

Enterprise File Fabric es una plataforma de servicios de contenido en la nube utilizada por organizaciones que necesitan consolidar backends de almacenamiento dispares bajo una única capa de gobernanza. Ya sea que tu equipo almacene allí archivos de proyectos, registros de cumplimiento o activos digitales compartidos, mantener ese contenido sincronizado y respaldado requiere una herramienta confiable y compatible con múltiples nubes. RcloneView —un cliente GUI basado en Flutter construido sobre rclone— gestiona Enterprise File Fabric junto con más de 90 proveedores de nube adicionales desde una interfaz unificada en Windows, macOS y Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Enterprise File Fabric en RcloneView

Agregar Enterprise File Fabric como remoto toma solo minutos gracias al asistente integrado de RcloneView para nuevos remotos. Abre la pestaña **Remote**, haz clic en **New Remote** y selecciona Enterprise File Fabric de la lista de proveedores. Ingresa la URL de tu endpoint y el token de API —las mismas credenciales que tu organización usa para el acceso a la API— y luego guarda. El remoto aparece de inmediato en el panel del explorador, donde puedes navegar por carpetas, ver el número y tamaño de archivos, y copiar rutas directamente desde la barra de migas de pan.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Enterprise File Fabric remote in RcloneView" class="img-large img-center" />

A diferencia de las herramientas que solo montan unidades, RcloneView también sincroniza y compara carpetas en la licencia FREE, para que puedas ir más allá del simple mapeo de unidades y gestionar activamente el contenido de Enterprise File Fabric en todos tus entornos de nube.

## Sincronizar Enterprise File Fabric con otros destinos en la nube

Un escenario común de Enterprise File Fabric es replicar el contenido gestionado hacia un destino secundario en la nube para recuperación ante desastres o archivado a largo plazo. En el asistente de sincronización de RcloneView, establece Enterprise File Fabric como origen y elige cualquier destino —Amazon S3, Backblaze B2, Google Drive o un servidor SFTP local. El asistente de 4 pasos te guía a través de la concurrencia de transferencia, la verificación de checksums y los filtros de antigüedad de archivos, para que muevas solo lo que necesitas.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job from Enterprise File Fabric in RcloneView" class="img-large img-center" />

Ejecuta siempre un **Dry Run** antes de la transferencia real. RcloneView listará los archivos exactos que copiaría u omitiría, permitiéndote refinar las reglas de filtro antes de mover un solo byte. Para la replicación 1:N —reflejar la misma carpeta de Enterprise File Fabric en múltiples destinos simultáneamente— simplemente agrega rutas de destino adicionales en el Paso 1. Esto está disponible en la licencia FREE sin límite en el número de destinos.

## Programación de copias de seguridad automatizadas

Las organizaciones que usan Enterprise File Fabric a menudo necesitan ventanas de copia de seguridad nocturnas o semanales que se ejecuten sin intervención humana. La **licencia PLUS** desbloquea la programación estilo crontab directamente dentro de RcloneView. Configura los campos de minuto, hora, día de la semana y mes para lanzar tus trabajos de sincronización de Enterprise File Fabric con la cadencia que desees. La herramienta integrada **Simulate schedule** muestra una vista previa de las próximas ejecuciones para que puedas confirmar el calendario antes de aplicarlo.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling an Enterprise File Fabric backup job in RcloneView" class="img-large img-center" />

Las notificaciones de finalización de trabajos mantienen informados a los equipos de operaciones incluso cuando la aplicación se ejecuta minimizada en la bandeja del sistema.

## Monitorear el historial de transferencias y los registros de auditoría

Cada trabajo de sincronización de Enterprise File Fabric queda registrado en la vista **Job History** de RcloneView con hora de inicio, duración, velocidad de transferencia, número de archivos y estado final. Filtra el historial por rango de fechas o resultado para verificar el cumplimiento de SLA y auditar los movimientos de datos —práctico para organizaciones con requisitos de retención o gobernanza sobre su plataforma de almacenamiento de archivos gestionado.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log for Enterprise File Fabric transfers in RcloneView" class="img-large img-center" />

La pestaña de terminal de rclone dentro de RcloneView también permite a los usuarios avanzados ejecutar comandos personalizados de `rclone` contra su remoto de Enterprise File Fabric sin salir de la GUI —útil para consultas puntuales u operaciones únicas.

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre la pestaña **Remote** y haz clic en **New Remote**, luego selecciona Enterprise File Fabric.
3. Ingresa la URL de endpoint y el token de API de tu Enterprise File Fabric, luego guarda el remoto.
4. Crea un trabajo de sincronización, establece tu destino de copia de seguridad preferido y ejecuta primero un **Dry Run**.
5. (PLUS) Activa la ejecución programada para automatizar las copias de seguridad continuas con alertas por correo electrónico o Slack.

Centralizar la gestión de Enterprise File Fabric dentro de RcloneView elimina la dispersión de herramientas y le da a tu equipo un registro único y auditable de cada movimiento de datos en la nube.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de SharePoint con RcloneView](https://rcloneview.com/support/blog/manage-sharepoint-cloud-sync-backup-rcloneview)
- [Gestiona Azure Files con RcloneView](https://rcloneview.com/support/blog/manage-azure-files-cloud-sync-rcloneview)
- [Almacenamiento en la nube para equipos de DevOps y Software con RcloneView](https://rcloneview.com/support/blog/cloud-storage-devops-software-teams-rcloneview)

<CloudSupportGrid />
