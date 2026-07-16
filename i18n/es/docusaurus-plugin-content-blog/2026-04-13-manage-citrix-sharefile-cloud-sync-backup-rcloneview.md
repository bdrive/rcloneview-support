---
slug: manage-citrix-sharefile-cloud-sync-backup-rcloneview
title: "Gestiona el almacenamiento de Citrix ShareFile — Sincroniza y respalda archivos con RcloneView"
authors:
  - tayson
description: "Aprende a conectar y gestionar el almacenamiento de Citrix ShareFile con RcloneView. Sincroniza, respalda y transfiere datos de ShareFile a otras nubes desde una sola interfaz gráfica."
keywords:
  - Citrix ShareFile
  - sincronización de ShareFile
  - copia de seguridad de ShareFile
  - gestión de almacenamiento en la nube de ShareFile
  - RcloneView ShareFile
  - sincronización de archivos empresariales
  - ShareFile a la nube
  - gestión de almacenamiento en la nube
  - migración de ShareFile
  - sincronización en la nube con RcloneView
tags:
  - sharefile
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el almacenamiento de Citrix ShareFile — Sincroniza y respalda archivos con RcloneView

> Conecta Citrix ShareFile a RcloneView y gestiona tus archivos empresariales junto a más de 90 servicios de almacenamiento en la nube desde una sola interfaz gráfica.

Citrix ShareFile es ampliamente utilizado por empresas y equipos de servicios profesionales para el uso compartido seguro de archivos y la gestión documental. Aunque ShareFile ofrece su propio cliente, los equipos que gestionan archivos en varias plataformas en la nube a menudo necesitan una herramienta centralizada. RcloneView, un cliente GUI construido sobre rclone, te permite conectar ShareFile junto a otros servicios — Google Drive, OneDrive, Amazon S3 y más — desde una sola interfaz.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cómo conectar Citrix ShareFile a RcloneView

Agregar Citrix ShareFile a RcloneView requiere las credenciales de tu cuenta de ShareFile y tu Root Folder ID. El Root Folder ID identifica qué carpeta de tu cuenta de ShareFile usará rclone como raíz de la conexión — normalmente se encuentra en la interfaz web de ShareFile, en las propiedades de la carpeta.

Para configurar el remoto, abre RcloneView y navega a la pestaña Remote, luego haz clic en New Remote. Selecciona Citrix ShareFile de la lista de proveedores e introduce la configuración requerida, incluyendo tu Root Folder ID. RcloneView incluye un binario de rclone integrado, por lo que no se necesita una instalación independiente de rclone.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Citrix ShareFile remote in RcloneView" class="img-large img-center" />

Una vez conectado, ShareFile aparece como un remoto en el Explorador de archivos. Puedes navegar por las carpetas, ver los metadatos de los archivos (nombre, tamaño, fecha de modificación) y realizar operaciones como copiar, cortar, pegar, renombrar y eliminar — todo sin salir de la interfaz de RcloneView.

## Sincronización de ShareFile con otros servicios en la nube

Uno de los beneficios prácticos de gestionar ShareFile a través de RcloneView es la capacidad de sincronizarlo directamente con otro almacenamiento en la nube. Por ejemplo, un despacho de abogados puede sincronizar las carpetas de clientes de ShareFile con Amazon S3 para archivado a largo plazo, o duplicar el contenido de ShareFile en OneDrive para la integración con Microsoft 365.

Para crear un trabajo de sincronización, haz clic en el botón Sync de la pestaña Home y sigue el asistente de 4 pasos: selecciona tu carpeta de ShareFile como origen (o destino), elige el remoto y la carpeta de destino, configura las opciones de transferencia y, opcionalmente, agrega reglas de filtrado. La función Dry Run te permite previsualizar exactamente qué archivos se copiarán o eliminarán antes de confirmar la sincronización.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Citrix ShareFile to another cloud with RcloneView" class="img-large img-center" />

Para una protección de datos continua, la sincronización programada (disponible con la licencia PLUS) te permite ejecutar copias de seguridad de ShareFile con una programación estilo crontab — diaria, semanal o a intervalos personalizados. Job History registra cada ejecución con hora de inicio, duración, número de archivos y estado.

## Organizar y comparar el contenido de ShareFile

La función Folder Compare de RcloneView es valiosa para auditar el contenido de ShareFile frente a un destino de copia de seguridad. Ábrela mediante el botón Compare de la pestaña Home, selecciona ShareFile como un lado y tu almacenamiento de destino como el otro, y la vista resalta los archivos que existen solo en un lado, que difieren en tamaño o que son idénticos.

Este flujo de trabajo de comparación previa es práctico para migraciones: ejecuta una comparación antes de sincronizar para entender exactamente qué cambiará. Para auditorías más específicas, Folder Compare with Filter (licencia PLUS) te permite restringir las comparaciones por tipo de archivo o nombre de carpeta, útil cuando se trabaja con grandes repositorios de ShareFile.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder comparison between ShareFile and backup storage in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre la pestaña Remote y haz clic en **New Remote**, luego selecciona Citrix ShareFile.
3. Introduce tus credenciales de ShareFile y el Root Folder ID para completar la configuración.
4. Usa el asistente de Sync para crear un trabajo que respalde ShareFile hacia tu nube de destino preferida.

Gestionar ShareFile junto a tus otros servicios en la nube desde una sola interfaz reduce los cambios de contexto y te ofrece un flujo de trabajo consistente para copias de seguridad, migración y organización de archivos.

---

**Guías relacionadas:**

- [Gestiona la sincronización y copia de seguridad en la nube de SharePoint con RcloneView](https://rcloneview.com/support/blog/manage-sharepoint-cloud-sync-backup-rcloneview)
- [Migra Citrix ShareFile a OneDrive y SharePoint con RcloneView](https://rcloneview.com/support/blog/migrate-citrix-sharefile-onedrive-sharepoint-rcloneview)
- [Migración de nube a nube con RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)

<CloudSupportGrid />
