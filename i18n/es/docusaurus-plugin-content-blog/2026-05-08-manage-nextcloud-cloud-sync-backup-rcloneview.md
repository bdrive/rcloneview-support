---
slug: manage-nextcloud-cloud-sync-backup-rcloneview
title: "Gestiona el almacenamiento de Nextcloud — Sincroniza y realiza copias de seguridad de archivos con RcloneView"
authors:
  - jay
description: "Conecta tu instancia de Nextcloud autoalojada o gestionada a RcloneView mediante WebDAV para la gestión de archivos con interfaz gráfica, sincronización entre nubes y copias de seguridad automatizadas."
keywords:
  - Nextcloud RcloneView sync
  - manage Nextcloud files GUI
  - Nextcloud WebDAV RcloneView
  - Nextcloud backup cloud storage
  - sync Nextcloud to Google Drive
  - Nextcloud to S3 backup
  - self-hosted cloud sync RcloneView
  - Nextcloud file management desktop
tags:
  - RcloneView
  - nextcloud
  - cloud-storage
  - cloud-sync
  - backup
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el almacenamiento de Nextcloud — Sincroniza y realiza copias de seguridad de archivos con RcloneView

> Conecta RcloneView a tu instancia de Nextcloud mediante WebDAV y gestiona archivos, automatiza copias de seguridad entre nubes, y sincroniza datos con S3 o Google Drive — todo desde una interfaz de escritorio limpia.

El cliente de sincronización integrado de Nextcloud es excelente para mantener una carpeta local sincronizada, pero no ayuda cuando necesitas migrar datos a otra nube, automatizar copias de seguridad entre proveedores, o explorar tus archivos de Nextcloud junto a otros sistemas de almacenamiento. RcloneView se conecta a Nextcloud mediante WebDAV — el protocolo estándar que Nextcloud expone — y lo trata como cualquier otro remoto en el explorador de archivos de doble panel.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectando Nextcloud a RcloneView mediante WebDAV

Nextcloud expone WebDAV en una ruta URL estándar en tu servidor. En RcloneView, ve a **pestaña Remote → New Remote** y selecciona **WebDAV** como tipo de proveedor. Introduce la URL WebDAV de tu Nextcloud (normalmente `https://your-nextcloud.example.com/remote.php/dav/files/USERNAME/`), tu nombre de usuario de Nextcloud y la contraseña. Configura la opción **Vendor** en Nextcloud para habilitar optimizaciones específicas de Nextcloud en el backend WebDAV de rclone.

Una vez guardado, tus archivos de Nextcloud aparecen en el panel del explorador con la misma interfaz que cualquier otro proveedor — árbol de carpetas, lista de archivos ordenable y navegación por migas de pan. Puedes explorar, renombrar, copiar, eliminar y arrastrar archivos hacia y desde Nextcloud igual que lo harías con Google Drive o Dropbox.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Nextcloud to RcloneView via WebDAV" class="img-large img-center" />

## Copia de seguridad de Nextcloud en S3 o Backblaze B2

Los servidores Nextcloud autoalojados necesitan una estrategia de copia de seguridad externa. Usando el Job Manager de RcloneView, puedes crear un trabajo de sincronización desde tu remoto de Nextcloud hacia Amazon S3, Backblaze B2 o cualquier otro proveedor de nube. Esto te proporciona una copia redundante de todos los datos de Nextcloud almacenada externamente, protegiéndote frente a fallos del servidor o problemas con el proveedor de hosting.

Configura el trabajo con **Enable Checksum** para garantizar la integridad de los datos, y usa el filtro **Max file age** si solo necesitas realizar copias de seguridad de archivos modificados recientemente. Con una licencia PLUS, programa este trabajo cada noche para que la copia de seguridad refleje siempre el estado actual de tus datos de Nextcloud.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Nextcloud backup to S3 in RcloneView" class="img-large img-center" />

## Sincronizando archivos de Nextcloud con Google Drive o OneDrive

Muchas organizaciones utilizan Nextcloud internamente por razones de privacidad, pero necesitan compartir archivos específicos externamente mediante Google Drive o OneDrive para colaborar. RcloneView convierte esto en un proceso definido y repetible: crea un trabajo de copia o sincronización desde una carpeta específica de Nextcloud hacia una Unidad compartida de Google Drive o una carpeta de OneDrive, y prográmalo para que se ejecute cuando necesites publicar una actualización.

Este patrón es común en equipos que usan Nextcloud como sistema interno de gestión documental y Google Drive como capa de colaboración de cara al exterior. La función Folder Compare te permite verificar que las copias de Nextcloud y Google Drive coinciden antes y después de cada sincronización.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Nextcloud files to Google Drive using RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade la URL WebDAV de tu Nextcloud como un nuevo remoto en la **pestaña Remote**.
3. Explora los archivos de Nextcloud en el explorador de doble panel junto a otros proveedores de nube.
4. Crea un trabajo de copia de seguridad programado hacia S3 o Backblaze B2 para protección externa.

RcloneView aporta capacidades completas de gestión de escritorio a tu instancia de Nextcloud — ya sea un servidor personal, un plan gestionado o un despliegue empresarial.

---

**Guías relacionadas:**

- [Copia de seguridad de Nextcloud mediante WebDAV con RcloneView](https://rcloneview.com/support/blog/backup-nextcloud-webdav-with-rcloneview)
- [Sincroniza Nextcloud con Backblaze B2 usando RcloneView](https://rcloneview.com/support/blog/sync-nextcloud-to-backblaze-b2-rcloneview)
- [Migra Nextcloud a Google Drive con RcloneView](https://rcloneview.com/support/blog/migrate-nextcloud-to-google-drive-rcloneview)

<CloudSupportGrid />
