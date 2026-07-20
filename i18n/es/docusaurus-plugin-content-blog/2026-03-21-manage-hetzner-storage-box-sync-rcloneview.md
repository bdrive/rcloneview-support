---
slug: manage-hetzner-storage-box-sync-rcloneview
title: "Gestiona Hetzner Storage Box — Sincronización y copia de seguridad con RcloneView"
authors:
  - tayson
description: "Aprende a conectar de forma segura Hetzner Storage Box a RcloneView y a sincronizar archivos entre nubes con los protocolos SFTP y WebDAV para copias de seguridad en la nube europea."
keywords:
  - Hetzner Storage Box
  - copia de seguridad SFTP
  - sincronización en la nube WebDAV
  - almacenamiento en la nube europeo
  - RcloneView
  - sincronización segura de archivos
  - copia de seguridad en la nube Europa
  - Hetzner SFTP
  - copia de seguridad en nube híbrida
  - almacenamiento en la nube conforme al RGPD
tags:
  - RcloneView
  - hetzner
  - european-cloud
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona Hetzner Storage Box — Sincronización y copia de seguridad con RcloneView

> El almacenamiento en la nube europeo se encuentra con la flexibilidad multi-nube. Hetzner Storage Box ofrece precios competitivos y cumplimiento del RGPD; ahora gestiónalo sin esfuerzo junto a tus otras cuentas en la nube en RcloneView.

Hetzner Storage Box es una opción de confianza para empresas europeas que buscan una copia de seguridad en la nube fiable y asequible. Ya sea que uses SFTP o WebDAV, RcloneView conecta tu cuenta de Hetzner con todo tu ecosistema en la nube, permitiéndote sincronizar, hacer copias de seguridad y archivar sin salir de tu panel de control.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta Hetzner Storage Box mediante SFTP

Añadir un remoto de Hetzner Storage Box es sencillo en RcloneView. SFTP te ofrece acceso directo al servidor con cifrado estándar de la industria.

1. Abre RcloneView y haz clic en **Add Remote**
2. Selecciona **SFTP** en la lista de proveedores
3. Introduce tus credenciales de Hetzner:
   - **Host**: `u[account-id].your-storagebox.de`
   - **Username**: Tu usuario de Hetzner
   - **Password**: Tu contraseña de Hetzner o clave SSH
4. Configura el puerto en **22** (SFTP estándar)
5. Haz clic en **Test Connection** para verificar

![New Remote Setup](/images/en/blog/new-remote.png)

## Sincroniza Hetzner con AWS S3 u otras nubes

Una vez conectado tu Hetzner Storage Box, puedes crear trabajos de sincronización de nube a nube al instante.

**Casos de uso:**
- **Copia de seguridad en S3**: Archiva los archivos de acceso frecuente de Hetzner en Amazon S3 Glacier para retención a largo plazo
- **Redundancia multi-nube**: Refleja los datos entre Hetzner y Backblaze B2
- **Flujos de trabajo híbridos**: Sincroniza Hetzner Storage Box con Google Drive para acceso en equipo

![Cloud to Cloud Transfer](/images/en/blog/cloud-to-cloud-transfer-default.png)

## Monitoreo y programación en tiempo real

El programador de trabajos de RcloneView te permite automatizar las copias de seguridad de Hetzner según tu propio calendario. Supervisa la velocidad de transferencia, la tasa de errores y el número de archivos en tiempo real.

![Job History and Monitoring](/images/en/howto/rcloneview-basic/job-history.png)

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Crea una cuenta de Hetzner Storage Box (si aún no tienes una) en [hetzner.com](https://www.hetzner.com/storage/storage-box).
3. Añade tu remoto de Hetzner usando credenciales SFTP o WebDAV en RcloneView.
4. Crea tu primer trabajo de sincronización o copia de seguridad hacia otro proveedor en la nube.
5. Programa trabajos recurrentes o ejecuta transferencias puntuales según sea necesario.

Gestiona tu almacenamiento en la nube europeo con confianza: RcloneView se encarga de la complejidad para que tú te centres en tus datos.

---

**Guías relacionadas:**

- [Gestiona un servidor SFTP — Sincronización en la nube con RcloneView](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [Conecta un servidor WebDAV — Sincronización en la nube con RcloneView](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [Gestiona OVH Cloud Object Storage — Sincronización con RcloneView](https://rcloneview.com/support/blog/manage-ovh-cloud-object-storage-sync-rcloneview)

<CloudSupportGrid />
