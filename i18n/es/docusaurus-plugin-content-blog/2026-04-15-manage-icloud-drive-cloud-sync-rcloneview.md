---
slug: manage-icloud-drive-cloud-sync-rcloneview
title: "Gestiona el almacenamiento de iCloud Drive — Sincroniza y haz copias de seguridad de archivos con RcloneView"
authors:
  - tayson
description: "Gestiona iCloud Drive con RcloneView — sincroniza, haz copias de seguridad y transfiere archivos de iCloud Drive a otras nubes usando una GUI construida sobre rclone v1.69+."
keywords:
  - gestión de iCloud Drive
  - sincronización de iCloud Drive
  - herramienta de copia de seguridad de iCloud
  - RcloneView iCloud
  - transferencia de archivos de iCloud Drive
  - GUI de almacenamiento en la nube de Apple
  - de iCloud a Google Drive
  - copia de seguridad multi-nube
  - iCloud Drive rclone
  - copia de seguridad de almacenamiento en la nube de Apple
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - macos
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el almacenamiento de iCloud Drive — Sincroniza y haz copias de seguridad de archivos con RcloneView

> iCloud Drive es el almacenamiento en la nube nativo de Apple — RcloneView, respaldado por rclone v1.69+, se conecta directamente a iCloud Drive y lleva tu contenido de la nube de Apple a un flujo de trabajo de gestión de archivos multi-nube.

iCloud Drive está profundamente integrado en los flujos de trabajo de macOS e iOS, pero sacar archivos de iCloud para hacer copias de seguridad en un proveedor secundario — o sincronizar contenido de iCloud con sistemas basados en Windows — históricamente ha requerido las propias aplicaciones del ecosistema de Apple. RcloneView, usando el soporte de iCloud Drive de rclone v1.69+, se conecta directamente a tu almacenamiento en la nube de Apple y lo integra en una interfaz de gestión de archivos multiplataforma.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar iCloud Drive en RcloneView

El soporte de iCloud Drive requiere **rclone v1.69 o posterior**. RcloneView incluye un binario de rclone integrado y admite la actualización automática de rclone dentro de la aplicación (Self Update) — puedes actualizar a la versión requerida directamente desde la aplicación mediante la pestaña **Help**.

Para conectar iCloud Drive, ve a **Remote tab > New Remote** y selecciona **iCloud Drive** de la lista de proveedores. Introduce tus credenciales de Apple para completar la autenticación. Una vez configurado, tu iCloud Drive aparece como un remoto en el explorador, mostrando todas tus carpetas y archivos de iCloud. En macOS, esto revela exactamente lo que está almacenado en iCloud, independientemente de si los archivos se han descargado localmente.

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive as a new remote in RcloneView" class="img-large img-center" />

## Hacer copias de seguridad de iCloud Drive en otra nube

El caso de uso más común: crear una copia de seguridad de nube a nube del contenido de iCloud Drive en Amazon S3, Backblaze B2 o Google Drive para acceso multiplataforma y recuperación ante desastres. Configura un trabajo de sincronización en el **Job Manager** de RcloneView — el origen es tu remoto de iCloud Drive, el destino es tu remoto de nube de copia de seguridad.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling iCloud Drive backup to another cloud in RcloneView" class="img-large img-center" />

Para un profesional que usa iCloud Drive como su almacén de documentos principal — con 500 GB de recursos de diseño, archivos de clientes y archivos de proyectos — programar una copia de seguridad nocturna en Backblaze B2 crea una red de seguridad independiente del proveedor. La estructura de carpetas de iCloud Drive incluye Desktop, Documents y carpetas específicas de aplicaciones. Las opciones de filtrado de RcloneView te permiten incluir o excluir rutas específicas — sincronizando solo la carpeta Documents mientras se omiten grandes bibliotecas multimedia, por ejemplo.

## Acceso multiplataforma a iCloud

Los equipos con entornos mixtos de Mac y Windows a menudo tienen dificultades con el cliente limitado de iCloud para Windows. RcloneView en Windows puede conectarse a iCloud Drive y proporcionar acceso directo a los archivos, lo que permite copiar o sincronizar contenido de iCloud a unidades de red compartidas o sistemas NAS accesibles para todo el equipo.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Accessing iCloud Drive from Windows using RcloneView" class="img-large img-center" />

El explorador de doble panel facilita la gestión de archivos multiplataforma: iCloud Drive en un lado, el recurso compartido de Windows de destino u otra nube en el otro. Arrastra archivos entre paneles para copiarlos, o configura un trabajo de sincronización para transferencias recurrentes.

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Asegúrate de que tu rclone integrado esté actualizado a v1.69+ mediante **Help > Check for Updates**.
3. Ve a **Remote tab > New Remote**, selecciona **iCloud Drive** e introduce tus credenciales de Apple.
4. Configura un trabajo de sincronización en **Job Manager** para hacer copias de seguridad de tu iCloud Drive en una nube secundaria.

Con RcloneView, iCloud Drive ya no está aislado dentro del ecosistema de Apple — tu contenido de la nube de Apple pasa a formar parte de una estrategia más amplia de gestión y copia de seguridad multi-nube.

---

**Guías relacionadas:**

- [iCloud Drive con RcloneView — Guía de inicio](https://rcloneview.com/support/blog/icloud-drive-with-rcloneview)
- [Gestiona el almacenamiento en la nube de Google Drive — Sincroniza y haz copias de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Gestiona el almacenamiento en la nube de OneDrive — Sincroniza y haz copias de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
