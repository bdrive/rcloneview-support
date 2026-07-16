---
slug: manage-quatrix-enterprise-file-sync-rcloneview
title: "Gestiona Quatrix Enterprise File Sharing — Sincroniza con Google Drive, S3 y más usando RcloneView"
authors:
  - tayson
description: "Quatrix by Maytech es una plataforma empresarial de intercambio de archivos. Aprende a sincronizar y hacer copias de seguridad de Quatrix junto con Google Drive, S3 y otras nubes usando RcloneView."
keywords:
  - quatrix file sharing
  - quatrix rclone
  - quatrix sync
  - quatrix backup
  - quatrix enterprise cloud
  - maytech quatrix
  - quatrix file transfer
  - quatrix google drive
  - quatrix s3 backup
  - enterprise file sharing sync
tags:
  - RcloneView
  - quatrix
  - enterprise
  - cloud-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona Quatrix Enterprise File Sharing — Sincroniza con Google Drive, S3 y más usando RcloneView

> Quatrix by Maytech ofrece intercambio seguro de archivos empresariales con funciones de cumplimiento normativo. Pero integrarlo con tus otras plataformas en la nube requiere la herramienta adecuada. RcloneView conecta Quatrix con más de 70 proveedores.

Quatrix es una plataforma de intercambio y transferencia de archivos de nivel empresarial centrada en la seguridad y el cumplimiento normativo. Muchas organizaciones la usan para el intercambio seguro de archivos con terceros externos, mientras dependen de Google Drive o OneDrive para la colaboración interna. RcloneView conecta Quatrix con todo tu ecosistema en la nube.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurar Quatrix en RcloneView

Se puede acceder a Quatrix mediante su API o su interfaz WebDAV:

1. Abre RcloneView y haz clic en **Add Remote**.
2. Elige el tipo de conexión adecuado para tu configuración de Quatrix.
3. Introduce tus credenciales de Quatrix.

<img src="/support/images/en/blog/new-remote.png" alt="Add Quatrix remote" class="img-large img-center" />

## Flujos de trabajo clave

### Quatrix → S3 (copia de seguridad externa)

Haz copias de seguridad de datos sensibles de Quatrix en AWS S3 con cifrado:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Quatrix backup" class="img-large img-center" />

### Google Drive → Quatrix (intercambio externo seguro)

Mueve archivos desde tu Google Drive interno a Quatrix para compartirlos de forma segura con terceros externos.

### Quatrix → NAS (archivo local)

Mantén una copia local del contenido de Quatrix en tu NAS para fines de archivo y cumplimiento normativo.

## Verificar y monitorizar

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Quatrix sync" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Añade Quatrix** junto a tus otras nubes.
3. **Crea trabajos de copia de seguridad y sincronización**.
4. **Programa y verifica**.

Intercambio de archivos empresarial, conectado a todo.

---

**Guías relacionadas:**

- [Crear trabajos de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Programación de trabajos](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Cifrar copias de seguridad en la nube](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
