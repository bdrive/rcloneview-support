---
slug: manage-azure-blob-storage-cloud-sync-rcloneview
title: "Gestiona Azure Blob Storage — Sincroniza y respalda archivos con RcloneView"
authors:
  - tayson
description: "Gestiona Azure Blob Storage con RcloneView — sincroniza contenedores, respalda archivos y transfiere datos entre Azure y otras nubes usando una interfaz gráfica."
keywords:
  - Azure Blob Storage management
  - Azure blob sync
  - Azure backup tool
  - RcloneView Azure
  - Azure container sync
  - cloud storage management
  - Azure file transfer
  - blob storage GUI
  - Azure Blob rclone
  - Azure object storage backup
tags:
  - RcloneView
  - azure
  - cloud-storage
  - cloud-sync
  - backup
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona Azure Blob Storage — Sincroniza y respalda archivos con RcloneView

> Azure Blob Storage impulsa aplicaciones nativas de la nube y data lakes empresariales — RcloneView lleva sus contenedores a una interfaz visual de gestión de archivos para una sincronización, copia de seguridad y migración entre nubes eficientes.

Azure Blob Storage es el almacenamiento de objetos de Microsoft para aplicaciones nativas de la nube, data lakes y archivos empresariales. Si bien el portal de Azure funciona para navegación ocasional, las transferencias masivas, la migración entre nubes y la automatización de copias de seguridad requieren un enfoque más flexible. RcloneView se conecta a Azure Blob Storage y lleva tus contenedores directamente a un administrador de archivos multipanel junto con todos tus demás remotos en la nube.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Azure Blob Storage a RcloneView

En RcloneView, abre **Remote tab > New Remote** y selecciona **Microsoft Azure Blob Storage** de la lista de proveedores. Necesitarás el nombre de tu cuenta de almacenamiento (Storage Account Name) y una clave de cuenta (Account Key) o un token SAS (Shared Access Signature). Después de ingresar estas credenciales y guardar el remoto, tus contenedores de blobs aparecen como carpetas de nivel superior en el panel del explorador.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Azure Blob Storage as a new remote in RcloneView" class="img-large img-center" />

La navegación es sencilla: los contenedores se expanden para mostrar sus rutas de blobs, y puedes filtrar por nombre, revisar tamaños y ver marcas de tiempo de modificación. A diferencia de la lista plana de blobs del portal de Azure, la vista de árbol de carpetas de RcloneView hace que las estructuras jerárquicas de prefijos sean intuitivas de explorar. También puedes hacer clic derecho en cualquier elemento para ver su tamaño, copiar su ruta o iniciar una transferencia.

## Sincronizar Azure Blob con otras nubes

Azure Blob Storage se utiliza con frecuencia para archivar datos de otras plataformas. Una empresa de medios que migra activos de video desde un NAS local a Azure Blob puede configurar un trabajo de sincronización en el **Job Manager** de RcloneView: el origen es el remoto SFTP del NAS, el destino es el contenedor de Azure objetivo. Las transferencias concurrentes y la configuración de carga multihilo maximizan el rendimiento para lotes de migración grandes.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud sync from NAS to Azure Blob Storage in RcloneView" class="img-large img-center" />

Para arquitecturas de nube híbrida, sincronizar contenedores entre Azure Blob y Amazon S3 o Cloudflare R2 crea redundancia sin dependencia de un solo proveedor. Incluso dos remotos de Azure Blob —configurados con diferentes cuentas de almacenamiento— pueden sincronizarse directamente dentro de RcloneView, lo que facilita las migraciones entre cuentas.

## Automatización de copias de seguridad programadas

Las organizaciones que ejecutan copias de seguridad programadas a Azure Blob pueden usar la función de programación basada en cron de RcloneView (licencia PLUS) para configurar trabajos totalmente automatizados. Un despacho de abogados que archiva documentos de casos en Azure Blob cada noche configura el horario una sola vez —diariamente a las 2 AM, de lunes a viernes— y RcloneView se encarga de la ejecución automáticamente.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Azure Blob Storage backup jobs in RcloneView" class="img-large img-center" />

La pestaña **Job History** proporciona un registro de auditoría completo: la hora de inicio de cada ejecución, la duración, los bytes transferidos, los archivos movidos y el estado. Para flujos de trabajo sensibles al cumplimiento normativo, este registro responde exactamente cuándo se respaldaron los datos por última vez y si el trabajo se completó correctamente.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ve a **Remote tab > New Remote**, selecciona **Microsoft Azure Blob Storage** e ingresa tu nombre de cuenta y clave.
3. Explora tus contenedores en el panel del explorador: navega por los prefijos, revisa los tamaños de archivo.
4. Configura trabajos de sincronización o copia de seguridad en **Job Manager** entre Azure Blob y tu otro almacenamiento.

Con RcloneView, Azure Blob Storage se vuelve tan fácil de gestionar como una unidad local, con visibilidad completa del contenido almacenado, el historial de transferencias y la ejecución programada.

---

**Guías relacionadas:**

- [Monta Azure Blob Storage como una unidad local con RcloneView](https://rcloneview.com/support/blog/mount-azure-blob-storage-local-drive-rcloneview)
- [Migra de Azure Blob a Cloudflare R2 con RcloneView](https://rcloneview.com/support/blog/migrate-azure-blob-to-cloudflare-r2-rcloneview)
- [Gestiona la sincronización en la nube de Azure Files con RcloneView](https://rcloneview.com/support/blog/manage-azure-files-cloud-sync-rcloneview)

<CloudSupportGrid />
