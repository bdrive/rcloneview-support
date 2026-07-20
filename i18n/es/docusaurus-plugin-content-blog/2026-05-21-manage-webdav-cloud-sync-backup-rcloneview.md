---
slug: manage-webdav-cloud-sync-backup-rcloneview
title: "Gestiona el almacenamiento de un servidor WebDAV — Sincroniza y respalda archivos con RcloneView"
authors:
  - casey
description: "Conecta, sincroniza y realiza copias de seguridad de cualquier servidor WebDAV con RcloneView. Gestiona Nextcloud, ownCloud y endpoints WebDAV empresariales junto a más de 90 proveedores de nube."
keywords:
  - sincronización WebDAV RcloneView
  - gestionar almacenamiento en la nube WebDAV
  - GUI de transferencia de archivos WebDAV
  - copia de seguridad de Nextcloud WebDAV
  - sincronizar WebDAV con almacenamiento en la nube
  - herramienta de copia de seguridad para ownCloud
  - GUI de WebDAV rclone
  - gestión de archivos WebDAV de escritorio
  - cliente WebDAV multiplataforma
  - automatización de copias de seguridad en la nube WebDAV
tags:
  - RcloneView
  - webdav
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el almacenamiento de un servidor WebDAV — Sincroniza y respalda archivos con RcloneView

> Conecta cualquier endpoint WebDAV a RcloneView y controla tus archivos a través de una interfaz limpia — sincroniza, respalda y transfiere sin tocar la línea de comandos.

WebDAV (Web Distributed Authoring and Versioning) es la base de algunas de las plataformas de archivos autoalojadas más utilizadas. Nextcloud, ownCloud, SharePoint y muchos sistemas empresariales de gestión de contenido exponen endpoints WebDAV. Gestionar estos servidores suele implicar lidiar con herramientas de línea de comandos o clientes de sincronización de escritorio poco fiables. RcloneView trata los remotos WebDAV exactamente igual que cualquier otro proveedor de nube — con transferencias mediante arrastrar y soltar, trabajos de sincronización programados y monitoreo de transferencias en vivo — desde la misma interfaz que usas para gestionar Amazon S3 o Google Drive.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta tu servidor WebDAV en minutos

Añadir un remoto WebDAV lleva menos de dos minutos en RcloneView. Haz clic en **Remote tab > New Remote**, selecciona WebDAV como tipo de almacenamiento e introduce la URL de tu servidor, el nombre de usuario y la contraseña. Para servidores que usan certificados SSL autofirmados, añade `--no-check-certificate` al campo **Global Rclone Flags** en **Settings > Embedded Rclone** para omitir la verificación del certificado. Una vez guardado, tu servidor WebDAV aparece en el panel del explorador junto a cualquier otra cuenta de nube que hayas configurado.

Esta vista unificada resulta especialmente valiosa para equipos que ejecutan Nextcloud para colaboración interna mientras usan almacenamiento en la nube público para copias de seguridad externas. Un estudio de producción de video con un servidor Nextcloud autoalojado puede examinar los archivos del proyecto en el panel izquierdo y un bucket de Backblaze B2 en el derecho — y luego arrastrar los entregables terminados directamente, o definir un trabajo de sincronización programado para gestionar el archivado nocturno automáticamente.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a WebDAV remote in RcloneView Remote Manager" class="img-large img-center" />

## Sincroniza WebDAV con cualquier proveedor de nube

Con tu servidor WebDAV conectado, crea trabajos de sincronización en el Job Manager que transfieran archivos a cualquiera de los más de 90 proveedores de nube que admite RcloneView. El asistente de sincronización de 4 pasos te guía a través de la selección de los remotos de origen y destino, la configuración del número de transferencias concurrentes y la verificación de checksum, la aplicación de filtros de tamaño o antigüedad de archivos, y la programación opcional del trabajo.

Para escenarios de copia de seguridad, selecciona **"Modifying destination only"** en el campo de dirección de sincronización. Esto mantiene tu copia de seguridad en la nube reflejando el servidor WebDAV sin introducir cambios inversos. Cuando la integridad de los datos importa — para archivos legales o bibliotecas de imágenes médicas — activa la opción de checksum para que RcloneView valide los archivos tanto por hash como por tamaño en cada ejecución, no solo por la fecha de modificación.

La función Dry Run vale la pena usarla antes de cualquier primera sincronización: lista exactamente qué archivos se copiarán o eliminarán en el destino, sin realizar cambios reales. Toma segundos y puede prevenir sobrescrituras accidentales.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job from WebDAV server to cloud storage in RcloneView" class="img-large img-center" />

## Automatiza copias de seguridad con un horario (licencia PLUS)

Las ejecuciones de sincronización manual cubren transferencias inmediatas, pero la automatización programada es lo que hace confiable la copia de seguridad de WebDAV. Con una licencia PLUS, el programador estilo crontab de RcloneView te permite configurar trabajos para que se ejecuten cada noche, cada hora o en cualquier intervalo personalizado. El simulador de horarios previsualiza los próximos diez momentos de ejecución antes de guardar, de modo que no hay sorpresas sobre cuándo se disparan las copias de seguridad.

Job History registra el resultado de cada ejecución: hora de inicio, duración, velocidad de transferencia, cantidad de archivos y estado (Completed / Errored / Canceled). Si un trabajo programado encuentra un fallo de red transitorio, RcloneView reintenta hasta el número de reintentos configurado antes de marcar el trabajo como errored. Para organizaciones que gestionan grandes implementaciones de Nextcloud u ownCloud, esto produce un registro de auditoría confiable sin necesidad de monitoreo manual.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting up a scheduled sync job from WebDAV to cloud storage in RcloneView" class="img-large img-center" />

## Explora y compara archivos lado a lado

El explorador multipanel de RcloneView te permite examinar tu servidor WebDAV y un destino en la nube simultáneamente. La herramienta Folder Compare identifica exactamente qué archivos difieren entre ambos lados — mostrando archivos que existen solo a la izquierda, solo a la derecha, o con tamaños no coincidentes. Para la verificación de copias de seguridad incrementales, esto es más rápido y fiable que revisar manualmente los registros de transferencia.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing WebDAV server files with cloud backup using Folder Compare in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre **Remote tab > New Remote**, elige WebDAV e introduce la URL de tu servidor y las credenciales.
3. Crea un trabajo de sincronización en el Job Manager con tu remoto WebDAV como origen y tu proveedor de nube preferido como destino.
4. Ejecuta un **Dry Run** para previsualizar lo que se transferirá, y luego activa el trabajo o define un horario.

RcloneView convierte a los servidores WebDAV en participantes de primera clase dentro de tu estrategia multicloud — ya sea que estés protegiendo una instancia de Nextcloud autoalojada o conectando una plataforma de contenido empresarial con un almacenamiento de archivo a largo plazo en la nube.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de un servidor SFTP — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [Conecta un servidor WebDAV — Sincronización en la nube con RcloneView](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [Gestiona Nextcloud — Sincronización en la nube y copias de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-nextcloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
