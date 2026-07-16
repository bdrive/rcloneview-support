---
slug: manage-oracle-cloud-object-storage-sync-rcloneview
title: "Gestiona Oracle Cloud Object Storage — Sincroniza con S3, Google Drive y NAS usando RcloneView"
authors:
  - tayson
description: "Oracle Cloud Infrastructure ofrece precios competitivos de almacenamiento de objetos. Aprende a gestionar, sincronizar y hacer copias de seguridad de Oracle Cloud Object Storage junto a otras nubes usando RcloneView."
keywords:
  - oracle cloud object storage
  - oracle cloud storage sync
  - oracle oci rclone
  - oracle cloud s3 compatible
  - oracle cloud backup tool
  - oracle object storage gui
  - oracle cloud file manager
  - oracle oci storage transfer
  - sync oracle cloud google drive
  - oracle cloud storage migration
tags:
  - RcloneView
  - oracle-cloud
  - s3-compatible
  - cloud-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona Oracle Cloud Object Storage — Sincroniza con S3, Google Drive y NAS usando RcloneView

> Oracle Cloud Infrastructure (OCI) ofrece 10 GB de almacenamiento de objetos gratuito y precios competitivos a partir de ahí. Pero gestionar el almacenamiento de OCI junto a tus otras nubes requiere las herramientas adecuadas.

Oracle Cloud Object Storage es compatible con S3, duradero y rentable, especialmente con el generoso nivel gratuito de Oracle y los recursos Always Free. Muchas organizaciones usan OCI junto a AWS, Google Cloud o Azure. RcloneView las conecta todas, ofreciéndote una interfaz visual para gestionar Oracle Cloud Object Storage junto a más de 70 proveedores.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ¿Por qué Oracle Cloud Object Storage?

### Precios competitivos

| Característica | Oracle Cloud | AWS S3 | Google Cloud |
|---------|-------------|--------|-------------|
| Almacenamiento (TB/mes) | $26 | $23 | $20 |
| Salida de datos (primeros 10 TB) | Gratis | $90 | $120 |
| Nivel gratuito | 10 GB + Always Free | 5 GB (12 meses) | 5 GB |

La mayor ventaja de Oracle: **salida de datos gratuita** para los primeros 10 TB/mes. Si descargas datos con frecuencia, esto por sí solo te ahorra cientos de dólares.

### Compatibilidad con S3

OCI Object Storage ofrece una API compatible con S3, lo que significa que cualquier herramienta que funcione con S3 —incluyendo rclone y RcloneView— funciona con Oracle Cloud.

### Funciones empresariales

- **Niveles de almacenamiento**: Standard, Infrequent Access y Archive.
- **Versionado de objetos**: Protege contra eliminaciones accidentales.
- **Políticas de ciclo de vida**: Mueve datos automáticamente entre niveles.
- **Replicación**: Replicación entre regiones para recuperación ante desastres.

## Configurar Oracle Cloud en RcloneView

### Obtén tus credenciales

1. Inicia sesión en la Consola de OCI.
2. Navega a Identity → Users → Your user → Customer Secret Keys.
3. Genera una Access Key y una Secret Key.
4. Anota tu namespace y región (por ejemplo, `us-phoenix-1`).

### Añade Oracle Cloud como remoto

1. Abre RcloneView y haz clic en **Add Remote**.
2. Elige **S3 Compatible** como tipo.
3. Selecciona **Oracle** (u Other S3) como proveedor.
4. Introduce tu Access Key, Secret Key, región y endpoint.

<img src="/support/images/en/blog/new-remote.png" alt="Add Oracle Cloud Object Storage remote" class="img-large img-center" />

El formato del endpoint es: `https://<namespace>.compat.objectstorage.<region>.oraclecloud.com`

## Flujos de trabajo prácticos

### 1) Explora Oracle Cloud visualmente

Se acabó usar la Consola de OCI para gestionar archivos. Explora tus buckets y objetos en el explorador de dos paneles de RcloneView:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Oracle Cloud in RcloneView" class="img-large img-center" />

### 2) Migra de AWS S3 a Oracle Cloud

Aprovecha la salida de datos gratuita de Oracle moviendo datos desde S3:

1. Añade tanto S3 como Oracle Cloud como remotos.
2. Crea un trabajo de copia de S3 → Oracle Cloud.
3. Supervisa la transferencia y verifica con Folder Comparison.

### 3) Sincroniza Oracle Cloud con Google Drive

Mantén una copia colaborativa en Google Drive mientras archivas en Oracle Cloud:

- Programa sincronizaciones diarias de Google Drive → Oracle Cloud.
- Oracle Cloud sirve como tu archivo duradero y rentable.

### 4) Estrategia de copia de seguridad multi-nube

Usa Oracle Cloud como parte de una copia de seguridad multi-nube:

```
Primary (Google Drive) → Oracle Cloud (archive with free egress)
Primary (Google Drive) → Backblaze B2 (second archive)
```

### 5) Copia de seguridad de NAS a Oracle Cloud

Haz copia de seguridad de tu NAS Synology o QNAP a Oracle Cloud:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule NAS to Oracle Cloud backup" class="img-large img-center" />

## Verifica las transferencias

Compara tu origen y tu destino en Oracle Cloud:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Oracle Cloud transfer" class="img-large img-center" />

## Supervisa transferencias grandes

Sigue el progreso de subida a Oracle Cloud:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Oracle Cloud upload" class="img-large img-center" />

## Niveles de almacenamiento de Oracle Cloud

Usa el nivel adecuado para cada caso de uso:

| Nivel | Ideal para | Precio |
|------|----------|-------|
| Standard | Datos de acceso frecuente | $26/TB/mes |
| Infrequent Access | Acceso mensual | $10/TB/mes |
| Archive | Acceso anual | $3/TB/mes |

Las políticas de ciclo de vida pueden mover datos automáticamente entre niveles según su antigüedad.

## Primeros pasos

1. **Crea una cuenta de Oracle Cloud** (incluye 10 GB de almacenamiento gratuito).
2. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
3. **Añade Oracle Cloud** como remoto compatible con S3.
4. **Explora, transfiere y sincroniza** junto a tus otras nubes.
5. **Programa copias de seguridad automatizadas** para una operación sin intervención manual.

La salida de datos gratuita de Oracle Cloud lo convierte en una opción especialmente atractiva para los datos a los que accedes con regularidad.

---

**Guías relacionadas:**

- [Crear trabajos de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Programación de trabajos](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Comparar contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
