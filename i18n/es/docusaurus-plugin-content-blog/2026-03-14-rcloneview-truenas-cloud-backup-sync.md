---
slug: rcloneview-truenas-cloud-backup-sync
title: "Ejecuta RcloneView en TrueNAS para copias de seguridad en la nube y sincronización multi-nube"
authors:
  - tayson
description: "TrueNAS está diseñado para almacenamiento local. Añade RcloneView para extenderlo a la nube: haz copias de seguridad de tus datasets a S3, sincroniza pools con Google Drive y gestiona almacenamiento en la nube multi-nube desde tu NAS."
keywords:
  - copia de seguridad en la nube truenas
  - truenas rclone
  - sincronización en la nube truenas
  - copia de seguridad s3 truenas
  - truenas google drive
  - copia de seguridad externa truenas
  - truenas rcloneview
  - almacenamiento en la nube truenas
  - sincronización en la nube freenas
  - truenas multi nube
tags:
  - nas
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Ejecuta RcloneView en TrueNAS para copias de seguridad en la nube y sincronización multi-nube

> TrueNAS te ofrece un almacenamiento local sólido como una roca gracias a ZFS. Pero el almacenamiento local por sí solo no es una estrategia de copia de seguridad. Añade RcloneView para sincronizar los datasets de tu NAS con la nube usando un administrador de archivos visual.

TrueNAS (anteriormente FreeNAS) es uno de los sistemas operativos NAS más populares, reconocido por la integridad de datos que ofrece gracias a ZFS. Pero ZFS protege contra fallos de disco, no contra incendios, robos, ransomware o desastres que afecten a todo el sitio. Para una verdadera protección de datos, necesitas copias de seguridad externas (offsite). RcloneView añade gestión visual de la nube a tu configuración de TrueNAS, facilitando la sincronización de datasets con cualquiera de más de 70 proveedores de nube.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ¿Por qué TrueNAS + RcloneView?

TrueNAS incluye una función básica de Cloud Sync Tasks, pero es limitada en alcance y difícil de depurar. RcloneView ofrece:

- **Navegación visual de archivos** — visualiza tus archivos de TrueNAS junto a tu almacenamiento en la nube
- **Más de 70 proveedores de nube** — muchos más de los que TrueNAS Cloud Sync admite de forma nativa
- **Comparación de carpetas** — verifica que las copias de seguridad estén completas y sean precisas
- **Programación de tareas** — programación flexible con monitorización
- **Copias de seguridad cifradas** — remotos crypt para cifrado de conocimiento cero

## Opciones de implementación

### Contenedor Docker (recomendado)

Ejecuta RcloneView como un contenedor Docker en TrueNAS SCALE. Este es el enfoque más limpio: aislado del sistema host y con actualizaciones sencillas.

### Instalación directa

En TrueNAS SCALE (basado en Linux), puedes instalar RcloneView directamente. TrueNAS CORE (basado en FreeBSD) debería usar el enfoque de Docker a través de una VM o jail.

## Flujos de trabajo clave

### Copia de seguridad de datasets a S3 o B2

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="TrueNAS to cloud backup" class="img-large img-center" />

Explora tus datasets de TrueNAS en un panel y el almacenamiento en la nube en el otro. Crea tareas de sincronización que hagan copias de seguridad de los datasets críticos a Backblaze B2, AWS S3 o Wasabi.

### Programa copias de seguridad nocturnas

Configura copias de seguridad nocturnas automatizadas para que tu copia en la nube se mantenga actualizada:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule TrueNAS backup" class="img-large img-center" />

### Verifica la integridad de la copia de seguridad

Los checksums de ZFS protegen los datos locales. Usa la Comparación de carpetas para verificar que las copias de seguridad en la nube coincidan con tu NAS:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify TrueNAS backup" class="img-large img-center" />

### Cifra antes de subir

Protege los datos sensibles del NAS con remotos crypt. Tu proveedor de copia de seguridad no puede leer los archivos: solo tú posees las claves de cifrado.

### Redundancia multi-nube

Haz copias de seguridad a dos o más proveedores simultáneamente. Si un proveedor sufre una interrupción, tus datos estarán a salvo en el otro.

## Estrategia de copia de seguridad recomendada

| Tipo de datos | Nivel de nube | Programación |
|-----------|-----------|----------|
| Documentos críticos | S3 Standard | Cada 6 horas |
| Biblioteca multimedia | Backblaze B2 | Cada noche |
| Archivos | S3 Glacier | Semanal |

## Primeros pasos

1. **Instala RcloneView** mediante Docker en TrueNAS SCALE.
2. **Añade tus cuentas en la nube** en el administrador de remotos.
3. **Crea tareas de copia de seguridad** para los datasets críticos.
4. **Programa y verifica** con la Comparación de carpetas.

ZFS protege tus datos localmente. RcloneView los protege en todos los demás lugares.

---

**Guías relacionadas:**

- [Ejecuta RcloneView en Docker](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [Haz copias de seguridad de tu NAS a múltiples nubes](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)
- [Cifra copias de seguridad en la nube](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
