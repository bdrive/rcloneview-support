---
slug: rcloneview-openmediavault-nas-cloud-backup
title: "Ejecuta RcloneView en OpenMediaVault — Copia de Seguridad en la Nube para tu NAS DIY"
authors:
  - tayson
description: "OpenMediaVault convierte cualquier PC en un NAS. Añade RcloneView mediante Docker para sincronizar tus recursos compartidos de OMV con almacenamiento en la nube para copias de seguridad externas y gestión multi-nube."
keywords:
  - copia de seguridad en la nube openmediavault
  - openmediavault rclone
  - sincronización en la nube omv
  - copia de seguridad s3 openmediavault
  - omv rcloneview
  - copia de seguridad externa openmediavault
  - omv google drive
  - openmediavault docker rclone
  - copia de seguridad en la nube nas diy
  - solución de copia de seguridad omv
tags:
  - RcloneView
  - nas
  - docker
  - platform
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Ejecuta RcloneView en OpenMediaVault — Copia de Seguridad en la Nube para tu NAS DIY

> OpenMediaVault (OMV) te ofrece un NAS potente con hardware económico. Pero el almacenamiento local por sí solo no es seguro. Añade RcloneView para enviar los datos de tu NAS a la nube y así tener recuperación ante desastres.

OpenMediaVault es el sistema operativo NAS de referencia para creadores DIY — ejecútalo en un PC antiguo, una Raspberry Pi o hardware específico. Ofrece RAID, uso compartido SMB/NFS y una interfaz web. Lo que no ofrece es copia de seguridad en la nube. RcloneView llena ese vacío, ejecutándose como un contenedor Docker en OMV y sincronizando tus recursos compartidos con cualquiera de más de 70 proveedores de la nube.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ¿Por qué OMV + RcloneView?

Las funciones integradas de OMV gestionan bien el almacenamiento local, pero la integración con la nube es limitada. RcloneView añade:

- **Más de 70 proveedores de la nube** — Google Drive, S3, B2, Wasabi y más
- **Gestión visual de archivos** — explora el NAS junto al almacenamiento en la nube
- **Copias de seguridad programadas** — protección externa automatizada
- **Verificación** — la Comparación de Carpetas confirma la integridad de la copia de seguridad
- **Cifrado** — remotos crypt para copias de seguridad privadas

## Instalación mediante Docker

OMV admite Docker a través del plugin omv-extras. Ejecuta RcloneView como un contenedor con tus carpetas compartidas montadas como volúmenes.

## Flujos de Trabajo Clave

### Copia de seguridad de recursos compartidos en la nube

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OMV to cloud backup" class="img-large img-center" />

### Programar copias de seguridad externas nocturnas

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OMV backup" class="img-large img-center" />

### Verificar la integridad de la copia de seguridad

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify OMV backup" class="img-large img-center" />

### Cifrar datos sensibles

Usa remotos crypt para cifrar las copias de seguridad antes de que salgan de tu red.

## Configuración Recomendada

| Recurso Compartido OMV | Destino de la Copia de Seguridad | Programación |
|-----------|-------------------|----------|
| Documentos | Google Drive | Cada 6 horas |
| Fotos | Backblaze B2 | Cada noche |
| Multimedia | Wasabi | Cada noche |
| Configuración del sistema | B2 | Semanal |

## Primeros Pasos

1. **Instala Docker** en OMV mediante omv-extras.
2. **Despliega RcloneView** como un contenedor.
3. **Monta tus recursos compartidos** como volúmenes del contenedor.
4. **Añade cuentas en la nube** y crea trabajos de copia de seguridad.
5. **Programa y verifica**.

NAS DIY, copia de seguridad en la nube de nivel profesional.

---

**Guías Relacionadas:**

- [Ejecuta RcloneView en Docker](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [Ejecuta RcloneView en TrueNAS](https://rcloneview.com/support/blog/rcloneview-truenas-cloud-backup-sync)
- [Ejecuta RcloneView en Unraid](https://rcloneview.com/support/blog/run-rcloneview-unraid-server-cloud-sync)

<CloudSupportGrid />
