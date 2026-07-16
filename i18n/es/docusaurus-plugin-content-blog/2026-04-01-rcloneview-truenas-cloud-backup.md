---
slug: rcloneview-truenas-cloud-backup
title: "Usa RcloneView con TrueNAS para copia de seguridad y sincronización en la nube"
authors:
  - tayson
description: "Conecta RcloneView a TrueNAS (CORE o SCALE) para copia de seguridad en la nube, sincronización y gestión multi-nube. Reemplaza o complementa las tareas de Cloud Sync de TrueNAS con el conjunto completo de funciones de rclone."
keywords:
  - rcloneview truenas
  - truenas cloud backup rclone
  - truenas scale rclone gui
  - truenas core cloud sync
  - rclone truenas setup
  - truenas s3 backup rcloneview
  - truenas google drive backup
  - truenas cloud storage management
  - backup truenas to cloud
  - truenas rclone integration
tags:
  - RcloneView
  - nas
  - cloud-backup
  - guide
  - platform
  - linux
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Usa RcloneView con TrueNAS para copia de seguridad y sincronización en la nube

> TrueNAS tiene tareas de Cloud Sync integradas basadas en rclone, pero la interfaz integrada es limitada. Ejecutar RcloneView junto a TrueNAS desbloquea el conjunto completo de funciones de rclone: gestión multi-nube, remotos Crypt, Bisync, reglas de filtro, comparación de carpetas y más.

TrueNAS CORE y SCALE incluyen rclone por debajo para su función de tarea Cloud Sync. Pero la interfaz web solo expone una fracción de las capacidades de rclone: opciones de proveedor limitadas, sin capa de cifrado, sin bisync y sin trabajos entre nubes. Al ejecutar RcloneView en TrueNAS (mediante Docker, una VM o una estación de trabajo remota), obtienes acceso al conjunto completo de funciones de rclone mientras sigues usando TrueNAS como tu plataforma de almacenamiento principal.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## TrueNAS + RcloneView: dos enfoques de integración

### Enfoque 1 — RcloneView en un contenedor de TrueNAS SCALE (Docker)

TrueNAS SCALE admite contenedores Docker de forma nativa mediante su interfaz de Apps. Puedes ejecutar RcloneView como un contenedor persistente:

1. En TrueNAS SCALE, ve a **Apps → Available Applications** o usa la opción **Custom App**.
2. Implementa la imagen Docker de RcloneView con un montaje de volumen que apunte a las rutas de tu dataset de TrueNAS.
3. Accede a la interfaz web de RcloneView desde tu navegador.

Esto mantiene RcloneView en el propio NAS, de modo que los trabajos de copia de seguridad se ejecutan sin necesitar una máquina aparte.

### Enfoque 2 — RcloneView en una estación de trabajo, el NAS como remoto

Ejecuta RcloneView en tu escritorio y añade tus datasets de TrueNAS como un remoto:

- **SMB**: Añade un recurso compartido de Windows como remoto local o SMB en RcloneView.
- **SFTP**: Habilita SFTP en TrueNAS y añádelo como remoto SFTP en RcloneView.
- **NFS**: Monta tu recurso compartido NFS del NAS localmente y trátalo como una ruta local en RcloneView.

Este enfoque es más sencillo de configurar y funciona sin necesidad de experiencia con Docker.

## Configuración de SFTP desde TrueNAS

El método de acceso remoto más fiable:

### Paso 1 — Habilitar SSH en TrueNAS

En TrueNAS: **System → Services → SSH → Enable**. Crea un usuario dedicado con acceso limitado a tus datasets de copia de seguridad.

### Paso 2 — Añadir TrueNAS como remoto SFTP en RcloneView

<img src="/support/images/en/blog/new-remote.png" alt="Add TrueNAS SFTP remote in RcloneView" class="img-large img-center" />

1. Haz clic en **New Remote** en RcloneView.
2. Selecciona **SFTP**.
3. Introduce la IP de tu TrueNAS, el puerto SSH (22 por defecto), el nombre de usuario y la clave SSH o contraseña.
4. Establece la ruta raíz en tu dataset (por ejemplo, `/mnt/tank/Backups`).
5. Guarda.

RcloneView ahora muestra tus datasets de TrueNAS como un remoto navegable.

## Trabajos de copia de seguridad en la nube para TrueNAS

Con TrueNAS accesible como remoto SFTP, puedes crear trabajos de copia de seguridad completos:

### Copia de seguridad de datasets de TrueNAS a S3

1. Crea un nuevo trabajo de **Sync** en RcloneView.
2. Origen: `truenas-sftp:/mnt/tank/Photos/`
3. Destino: `s3-backup:truenas-photos-backup/`
4. Habilita la verificación de checksum para la integridad de los datos.
5. Programa una ejecución nocturna.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule TrueNAS to S3 backup job" class="img-large img-center" />

### Copia de seguridad cifrada en la nube

Para datasets sensibles, añade una capa de remoto Crypt:

1. Crea un remoto Crypt que envuelva tu remoto S3.
2. Establece el remoto Crypt como destino en lugar del remoto S3 sin cifrar.
3. Los archivos se cifran del lado del cliente antes de salir de tu TrueNAS.

### Copia de seguridad multi-nube

Usa RcloneView para hacer copia de seguridad del mismo dataset de TrueNAS en dos proveedores de nube simultáneamente:

- Trabajo 1: `truenas-sftp:/mnt/tank/` → `s3-primary:` (diario)
- Trabajo 2: `truenas-sftp:/mnt/tank/` → `b2-secondary:` (semanal)

## Ventajas frente al Cloud Sync integrado de TrueNAS

| Función | TrueNAS Cloud Sync | RcloneView |
|---------|-------------------|-----------|
| Soporte de proveedores | ~20 proveedores | Más de 70 proveedores |
| Capa Crypt/cifrado | ✗ | ✓ |
| Bisync (bidireccional) | ✗ | ✓ |
| Reglas de filtro | Limitadas | Soporte completo de filtros de rclone |
| Comparación de carpetas | ✗ | ✓ |
| Entre nubes (nube A → nube B) | ✗ | ✓ |
| Programación de trabajos | ✓ | ✓ |
| Monitorización en tiempo real | Limitada | ✓ |

## Monitorización y verificación

Usa la **Comparación de carpetas** de RcloneView para verificar periódicamente que tu copia de seguridad de TrueNAS coincide con el almacenamiento en la nube:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify TrueNAS backup in cloud with folder comparison" class="img-large img-center" />

Compara el origen de TrueNAS con el destino en la nube: cualquier archivo faltante o modificado aparece de inmediato. Programa una ejecución de verificación mensual como control de integridad de datos.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Habilita SSH en TrueNAS** y añádelo como remoto SFTP en RcloneView.
3. **Crea trabajos de copia de seguridad** desde datasets de TrueNAS hacia tu(s) proveedor(es) de nube.
4. **Programa y cifra**: configura trabajos de copia de seguridad nocturnos y añade un remoto Crypt para datasets sensibles.

TrueNAS es un excelente software de NAS. Combínalo con RcloneView y tendrás una estrategia de copia de seguridad en la nube completa y flexible que va mucho más allá de lo que ofrecen las herramientas integradas de TrueNAS.

---

**Guías relacionadas:**

- [Ejecuta RcloneView en Synology NAS](https://rcloneview.com/support/blog/rcloneview-synology-rclone-gui)
- [Ejecuta RcloneView en Docker](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [Copia de seguridad de NAS a múltiples nubes](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)

<CloudSupportGrid />
