---
slug: run-rcloneview-synology-nas-docker-rcloneview
title: "Ejecuta RcloneView en un NAS Synology — Copia de seguridad y sincronización en la nube desde tu NAS"
authors:
  - tayson
description: "Convierte tu NAS Synology en un centro de copias de seguridad en la nube. Aprende a usar RcloneView con NAS Synology para sincronización, copia de seguridad y gestión multi-nube automatizadas."
keywords:
  - rcloneview synology nas
  - synology cloud backup
  - synology cloud sync alternative
  - synology rclone
  - synology nas s3 backup
  - synology google drive sync
  - synology multi cloud
  - nas cloud backup tool
  - synology automated backup
  - synology nas cloud manager
tags:
  - RcloneView
  - synology
  - nas
  - backup
  - cloud-storage
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Ejecuta RcloneView en un NAS Synology — Copia de seguridad y sincronización en la nube desde tu NAS

> Tu NAS Synology almacena terabytes de datos irremplazables. Cloud Sync, la herramienta integrada de Synology, funciona bien para configuraciones básicas, pero cuando necesitas gestión multi-nube, programación, comparación de carpetas y trabajos por lotes, RcloneView cubre esos vacíos.

Los dispositivos NAS Synology son excelentes para el almacenamiento local centralizado, pero su integración con la nube tiene límites. Synology Cloud Sync admite unos 20 proveedores de nube con sincronización básica. Synology Hyper Backup gestiona copias de seguridad, pero carece de administración de archivos multi-nube. RcloneView complementa ambos con más de 70 proveedores de nube, gestión visual de archivos y automatización avanzada.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ¿Por qué RcloneView para Synology?

### Más allá de Synology Cloud Sync

| Función | Synology Cloud Sync | RcloneView |
|---------|-------------------|------------|
| Proveedores de nube | ~20 | 70+ |
| Explorador de archivos de dos paneles | ❌ | ✅ |
| Comparación de carpetas | ❌ | ✅ |
| Transferencia de nube a nube | ❌ | ✅ |
| Trabajos por lotes | ❌ | ✅ |
| Alertas de Slack/Discord | ❌ | ✅ |
| Reglas de filtro | Básicas | Filtros completos de rclone |
| Remotos cifrados | ❌ | ✅ (crypt) |
| Montar unidades en la nube | ❌ | ✅ |
| Proveedores compatibles con S3 | Limitado | Todos |

### Detección automática de Synology

RcloneView detecta automáticamente los dispositivos NAS Synology en tu red:

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Synology NAS auto-detection" class="img-large img-center" />

No se necesita configuración manual de red.

## Opciones de configuración

### Opción 1: RcloneView en un equipo de escritorio, conectado al NAS

El enfoque más sencillo. Ejecuta RcloneView en tu equipo de escritorio Windows/Mac/Linux:

1. Añade tu NAS Synology como remoto (detectado automáticamente o vía SFTP/WebDAV).
2. Añade tus destinos en la nube (S3, B2, Google Drive, etc.).
3. Crea trabajos de sincronización/copia entre el NAS y la nube.
4. Programa los trabajos para que se ejecuten automáticamente.

Esto funciona bien para usuarios domésticos y pequeñas oficinas.

### Opción 2: RcloneView en una máquina dedicada

Usa una Raspberry Pi o un portátil antiguo como controlador dedicado de copias de seguridad:

1. Instala RcloneView en la máquina dedicada.
2. Conéctate al NAS Synology mediante montaje de red.
3. Configura y programa todos los trabajos de copia de seguridad.
4. Déjalo en funcionamiento 24/7.

## Flujos de trabajo de copia de seguridad

### NAS → Nube (copia de seguridad externa)

El flujo de trabajo más crítico. Haz copia de seguridad de tu NAS en almacenamiento en la nube:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Backup NAS to cloud" class="img-large img-center" />

Destinos recomendados:

| Datos del NAS | Destino en la nube | Por qué |
|----------|-------------|-----|
| Fotos y videos | Backblaze B2 | Económico, $6/TB |
| Documentos | Google Drive | Accesible, con búsqueda |
| Datos empresariales | AWS S3 | Duradero, nivel empresarial |
| Todo (cifrado) | Cualquiera + crypt | Copia de seguridad de conocimiento cero |

### Nube → NAS (réplica local)

Mantén copias locales de datos en la nube para un acceso rápido:

```
Google Drive → NAS/CloudMirror/GoogleDrive/
OneDrive → NAS/CloudMirror/OneDrive/
```

### NAS → NAS (copia de seguridad en sitio remoto)

Si tienes dispositivos NAS en dos ubicaciones, sincronízalos entre sí mediante RcloneView usando un proveedor de nube como almacenamiento intermedio.

## Programa copias de seguridad automatizadas

Configura copias de seguridad nocturnas del NAS:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule NAS cloud backup" class="img-large img-center" />

### Programación recomendada

| Trabajo | Frecuencia | Hora |
|-----|-----------|------|
| Datos críticos → B2 | Nocturno | 2:00 AM |
| Fotos → Google Drive | Nocturno | 3:00 AM |
| NAS completo → S3 | Semanal | Sábado a medianoche |
| Verificar (comparar) | Semanal | Domingo 6:00 AM |

## Verifica las copias de seguridad

Compara el contenido del NAS con la copia de seguridad en la nube:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify NAS backup against cloud" class="img-large img-center" />

## Copias de seguridad cifradas del NAS

Usa remotos crypt para cifrar los datos de tu NAS antes de subirlos al almacenamiento en la nube. El proveedor de nube nunca ve tus archivos sin cifrar.

## Trabajos por lotes para administradores de NAS

Automatiza toda tu rutina de copia de seguridad del NAS:

1. Copiar /photos → B2.
2. Copiar /documents → Google Drive.
3. Copiar /business → S3 (cifrado).
4. Comparar los tres.
5. Notificar por Slack.

Todo en un solo lote programado.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Conéctate a tu NAS Synology** (detectado automáticamente).
3. **Añade remotos de almacenamiento en la nube**.
4. **Crea y programa trabajos de copia de seguridad**.
5. **Verifica con la comparación de carpetas**.

Los datos de tu NAS son valiosos. Dales una red de seguridad externa.

---

**Guías relacionadas:**

- [Crear trabajos de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Programación de trabajos](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Comparar contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Cifrar copias de seguridad en la nube](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
