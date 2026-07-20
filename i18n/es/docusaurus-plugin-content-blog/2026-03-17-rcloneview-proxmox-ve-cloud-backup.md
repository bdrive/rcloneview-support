---
slug: rcloneview-proxmox-ve-cloud-backup
title: "Ejecuta RcloneView en Proxmox VE — Copia de seguridad en la nube para tus máquinas virtuales y contenedores"
authors:
  - tayson
description: "Proxmox VE aloja tus VMs y contenedores. Agrega RcloneView para hacer copias de seguridad de los datos de VM, bibliotecas de ISO y configuración en almacenamiento en la nube para recuperación ante desastres fuera del sitio."
keywords:
  - proxmox cloud backup
  - proxmox rclone
  - proxmox offsite backup
  - proxmox ve cloud sync
  - proxmox backup s3
  - proxmox google drive backup
  - proxmox rcloneview
  - proxmox vm backup cloud
  - proxmox disaster recovery
  - proxmox cloud storage
tags:
  - RcloneView
  - platform
  - docker
  - backup
  - disaster-recovery
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Ejecuta RcloneView en Proxmox VE — Copia de seguridad en la nube para tus máquinas virtuales y contenedores

> Proxmox VE hace copias de seguridad de VMs localmente. Pero las copias de seguridad locales no sobreviven a fallos de hardware, incendios o robos. Agrega RcloneView para enviar las copias de seguridad de tus VMs a almacenamiento en la nube y lograr una recuperación ante desastres completa.

Proxmox VE es uno de los hipervisores de código abierto más populares, ejecutando máquinas virtuales y contenedores LXC para home labs y entornos de producción. Su Proxmox Backup Server integrado gestiona excelentemente las copias de seguridad locales, pero una copia de seguridad únicamente local es incompleta. RcloneView agrega la capa de nube — enviando copias de seguridad de VM, bibliotecas de ISO y exportaciones de configuración a S3, B2, Google Drive o cualquier proveedor de nube.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ¿Por qué copia de seguridad en la nube para Proxmox?

Las copias de seguridad locales de Proxmox protegen contra la corrupción de VM y la eliminación accidental. Las copias de seguridad en la nube protegen contra:

- **Fallo de hardware** — todo el servidor deja de funcionar
- **Ransomware** — las copias de seguridad locales se cifran junto con las VMs
- **Desastre físico** — incendio, inundación, robo
- **Fallo del sitio** — el centro de datos o el home lab desaparece

## Opciones de implementación

### Contenedor Docker en Proxmox

Ejecuta RcloneView como un contenedor Docker dentro de un contenedor LXC ligero en tu host de Proxmox.

### Contenedor LXC dedicado

Crea un contenedor LXC mínimo específicamente para RcloneView con acceso a tu almacenamiento de copias de seguridad.

## Flujos de trabajo clave

### Sincronizar copias de seguridad de VM con la nube

Apunta RcloneView a tu almacenamiento de copias de seguridad de Proxmox y sincroniza con la nube:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Proxmox backup to cloud" class="img-large img-center" />

### Programar copia de seguridad nocturna fuera del sitio

Después de que Proxmox crea las copias de seguridad locales, RcloneView las envía a la nube:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Proxmox cloud backup" class="img-large img-center" />

### Hacer copia de seguridad de la biblioteca de ISO

Tu colección de ISO y las plantillas de contenedores son difíciles de recrear. Haz copias de seguridad de ellas en almacenamiento en la nube.

### Verificar la integridad de la copia de seguridad

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Proxmox backup" class="img-large img-center" />

### Cifrar datos sensibles de VM

Las copias de seguridad de VM pueden contener datos sensibles. Usa remotos crypt para cifrar antes de subir.

## Estrategia recomendada

| Tipo de datos | Nivel de nube | Retención |
|-----------|-----------|-----------|
| Copias de seguridad de VM (recientes) | S3 / B2 | Últimos 7 días |
| Copias de seguridad de VM (archivo) | S3 Glacier | Últimos 90 días |
| Biblioteca de ISO | B2 | Permanente |
| Configuración de Proxmox | Google Drive | Últimos 30 días |

## Primeros pasos

1. **Implementa RcloneView** como un contenedor en Proxmox.
2. **Agrega cuentas en la nube** para los destinos de la copia de seguridad.
3. **Crea trabajos de sincronización** que apunten a tu almacenamiento de copias de seguridad.
4. **Prográmalos después** de que se completen las copias de seguridad locales.
5. **Verifica regularmente** con la Comparación de carpetas.

Las copias de seguridad locales te salvan de errores. Las copias de seguridad en la nube te salvan de desastres.

---

**Guías relacionadas:**

- [Ejecuta RcloneView en Docker](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [Protégete contra el ransomware](https://rcloneview.com/support/blog/protect-cloud-storage-ransomware-backup-rcloneview)
- [Cifra tus copias de seguridad en la nube](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
