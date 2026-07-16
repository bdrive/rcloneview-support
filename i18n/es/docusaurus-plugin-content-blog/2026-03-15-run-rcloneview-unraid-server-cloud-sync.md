---
slug: run-rcloneview-unraid-server-cloud-sync
title: "Ejecuta RcloneView en Unraid — Copia de seguridad en la nube y sincronización multi-nube para tu servidor"
authors:
  - tayson
description: "Unraid facilita los servidores domésticos y de pequeñas empresas. Añade RcloneView vía Docker para sincronizar tus recursos compartidos de Unraid con almacenamiento en la nube para copias de seguridad externas y gestión multi-nube."
keywords:
  - unraid cloud backup
  - unraid rclone
  - unraid cloud sync
  - unraid rcloneview
  - unraid s3 backup
  - unraid google drive
  - unraid offsite backup
  - unraid docker cloud sync
  - unraid backup solution
  - unraid multi cloud
tags:
  - nas
  - docker
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Ejecuta RcloneView en Unraid — Copia de seguridad en la nube y sincronización multi-nube para tu servidor

> Unraid es excelente para almacenamiento local. Pero los discos de paridad no protegen contra incendios, robos o ransomware. Añade RcloneView para hacer copias de seguridad de tus recursos compartidos en la nube con un gestor de archivos visual.

Unraid es una de las plataformas de servidor doméstico y de pequeña empresa más populares. Su almacenamiento basado en paridad protege contra fallos de disco, pero la protección local no es suficiente. Para una verdadera seguridad de los datos, necesitas copias de seguridad externas. RcloneView se ejecuta como un contenedor Docker en Unraid, añadiendo gestión visual en la nube y capacidades de copia de seguridad automatizada a tu servidor.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ¿Por qué Unraid + RcloneView?

Las Community Apps de Unraid incluyen complementos básicos de rclone, pero a menudo son solo de línea de comandos o de alcance limitado. RcloneView proporciona:

- **Explorador de archivos visual** — ve tus recursos compartidos de Unraid junto al almacenamiento en la nube
- **Más de 70 proveedores de nube** — conéctate a cualquier nube desde tu servidor Unraid
- **Copias de seguridad programadas** — automatiza la protección externa
- **Comparación de carpetas** — verifica la integridad de las copias de seguridad
- **Copias de seguridad cifradas** — los remotos crypt mantienen los datos privados

## Instalación vía Docker

RcloneView se ejecuta como un contenedor Docker en Unraid. Instálalo a través de Community Apps o configura el contenedor manualmente.

Mapea tus recursos compartidos de Unraid como volúmenes para que RcloneView pueda acceder a tus datos.

## Flujos de trabajo clave

### Copia de seguridad de recursos compartidos en la nube

Abre tus recursos compartidos de Unraid en un panel y el almacenamiento en la nube en el otro. Crea trabajos de copia de seguridad para datos críticos:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Unraid to cloud backup" class="img-large img-center" />

### Programar copias de seguridad nocturnas externas

Configura copias de seguridad automatizadas que se ejecuten cada noche mientras tu servidor está inactivo:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Unraid backups" class="img-large img-center" />

### Verificar la integridad de la copia de seguridad

La paridad protege los datos locales. Usa la Comparación de carpetas para verificar las copias de seguridad en la nube:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Unraid backup" class="img-large img-center" />

### Cifrar datos sensibles

Usa remotos crypt para cifrar las copias de seguridad antes de que salgan de tu servidor. Tu proveedor de nube nunca ve datos sin cifrar.

### Estrategia de copia de seguridad multi-nube

Haz copias de seguridad en dos proveedores para una protección máxima:

| Recurso compartido | Copia de seguridad principal | Copia de seguridad secundaria |
|-------|---------------|-----------------|
| Documents | Google Drive | Backblaze B2 |
| Media | Backblaze B2 | Wasabi |
| Photos | Google Photos (via Drive) | S3 |
| Appdata | B2 | S3 Glacier |

## Supervisa tus copias de seguridad

Revisa el historial de trabajos para asegurarte de que las copias de seguridad se completan correctamente:

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Monitor backup jobs" class="img-large img-center" />

## Primeros pasos

1. **Instala RcloneView** como un contenedor Docker en Unraid.
2. **Mapea tus recursos compartidos** como volúmenes del contenedor.
3. **Añade cuentas en la nube** en el gestor de remotos.
4. **Crea trabajos de copia de seguridad** para los recursos compartidos críticos.
5. **Programa y verifica** con la Comparación de carpetas.

La paridad protege contra fallos de disco. Las copias de seguridad en la nube protegen contra todo lo demás.

---

**Guías relacionadas:**

- [Ejecuta RcloneView en Docker](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [Ejecuta RcloneView en TrueNAS](https://rcloneview.com/support/blog/rcloneview-truenas-cloud-backup-sync)
- [Haz copias de seguridad de tu NAS en múltiples nubes](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)

<CloudSupportGrid />
