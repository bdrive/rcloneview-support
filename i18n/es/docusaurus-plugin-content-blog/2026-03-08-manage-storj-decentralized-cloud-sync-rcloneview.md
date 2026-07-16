---
slug: manage-storj-decentralized-cloud-sync-rcloneview
title: "Gestiona el almacenamiento en la nube descentralizado Storj — Sincroniza con S3, Google Drive y NAS usando RcloneView"
authors:
  - tayson
description: "Storj ofrece almacenamiento en la nube descentralizado compatible con S3. Aprende a gestionar, sincronizar y hacer copias de seguridad de Storj junto con Google Drive, AWS S3 y NAS usando RcloneView."
keywords:
  - almacenamiento en la nube storj
  - sincronizar storj con google drive
  - interfaz gráfica de rclone para storj
  - storj compatible con s3
  - herramienta de copia de seguridad storj
  - gestor de nube descentralizado
  - transferencia de archivos storj
  - storj vs s3
  - storj dcs rclone
  - sincronización multi nube storj
tags:
  - storj
  - decentralized-storage
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el almacenamiento en la nube descentralizado Storj — Sincroniza con S3, Google Drive y NAS usando RcloneView

> Storj combina seguridad descentralizada con API compatibles con S3. Está listo para empresas, pero aún necesita una buena interfaz de gestión. RcloneView la ofrece, además de integración con más de 70 proveedores de almacenamiento adicionales.

Storj (anteriormente Storj DCS) es una plataforma de almacenamiento en la nube descentralizada que divide, cifra y distribuye tus archivos en una red global de nodos. A diferencia del enfoque basado en blockchain de Sia, Storj ofrece una API compatible con S3 muy conocida, lo que la convierte en un reemplazo directo de AWS S3 en muchos flujos de trabajo. RcloneView te permite gestionar Storj de forma visual junto con todas tus demás nubes.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ¿Por qué Storj?

### Compatible con S3 y descentralizado

- **API S3** — Funciona con cualquier herramienta compatible con S3, incluidos rclone y RcloneView.
- **Cifrado de extremo a extremo** — Los archivos se cifran del lado del cliente antes de subirlos.
- **Distribuido en más de 13.000 nodos** — Sin un único punto de fallo.
- **80% más barato que AWS S3** — $4/TB/mes de almacenamiento, $7/TB de salida de datos.
- **Arquitectura de conocimiento cero** — Storj no puede acceder a tus datos.

### Ventaja de precios

| Proveedor | Almacenamiento (TB/mes) | Salida de datos (TB) |
|----------|-------------------|-------------|
| AWS S3 Standard | $23 | $90 |
| Google Cloud Storage | $20 | $120 |
| Backblaze B2 | $6 | $10 |
| Storj | $4 | $7 |

Storj es una de las opciones compatibles con S3 más económicas disponibles, con el beneficio adicional de la seguridad descentralizada.

## Configurar Storj en RcloneView

### Obtén las credenciales de Storj

1. Regístrate en [storj.io](https://www.storj.io/).
2. Crea un nuevo bucket en el panel de Storj.
3. Genera un acceso compatible con S3 (Access Key + Secret Key).
4. Anota tu endpoint: `gateway.storjshare.io`.

### Agrega Storj como remoto

1. Abre RcloneView y haz clic en **Add Remote**.
2. Elige **S3 Compatible** como tipo de remoto.
3. Selecciona **Storj** como proveedor.
4. Introduce tu Access Key, Secret Key y endpoint.

<img src="/support/images/en/blog/new-remote.png" alt="Add Storj S3-compatible remote" class="img-large img-center" />

Tus buckets de Storj ahora aparecen en el explorador de dos paneles de RcloneView.

## Flujos de trabajo prácticos

### 1) Migrar de AWS S3 a Storj

Ahorra un 80% en costos de almacenamiento al mover datos de S3 a Storj:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer from AWS S3 to Storj" class="img-large img-center" />

Usa un trabajo de copia (Copy job) para transferir tus buckets de S3 a Storj. Como ambos hablan S3, la migración es sencilla.

### 2) Google Drive → Storj (archivo cifrado)

Haz una copia de seguridad de tu Google Drive en Storj para obtener un archivo descentralizado y cifrado:

- Google Drive para la colaboración diaria.
- Storj para copias de seguridad a largo plazo, con prioridad en la privacidad.
- Programa sincronizaciones nocturnas para mantener el archivo actualizado.

### 3) Storj → NAS (réplica local)

Mantén una copia local de los datos críticos de Storj en tu NAS Synology o QNAP:

```
Storj → NAS (réplica diaria para acceso local rápido)
NAS → Storj (copia de seguridad de archivos locales nuevos)
```

### 4) Redundancia multi nube

Usa Storj como parte de una estrategia de copia de seguridad 3-2-1:

- **3 copias**: Local, Storj y una nube tradicional.
- **2 medios diferentes**: Descentralizado (Storj) + centralizado (Google Drive).
- **1 fuera del sitio**: Storj ES la copia fuera del sitio (distribuida globalmente).

## Programa sincronizaciones automatizadas

Configura trabajos recurrentes para mantener Storj sincronizado con tu otro almacenamiento:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Storj sync jobs" class="img-large img-center" />

### Ejemplo de programación

- **Todas las noches a las 2 AM**: Sincronización Google Drive → Storj.
- **Semanalmente los domingos**: Comparación completa para detectar diferencias.
- **Mensualmente**: Archiva archivos antiguos de S3 → Storj para ahorrar costos.

## Verifica con la comparación de carpetas

Después de la migración o sincronización, compara el origen y el destino para asegurar que todo esté completo:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare Storj with other storage" class="img-large img-center" />

## Supervisa las transferencias

Sigue el progreso de las transferencias grandes en tiempo real:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Storj transfer progress" class="img-large img-center" />

## Storj frente a otros proveedores compatibles con S3

| Función | Storj | Backblaze B2 | Wasabi | MinIO (autoalojado) |
|---------|-------|-------------|--------|---------------------|
| Descentralizado | ✅ | ❌ | ❌ | ❌ |
| Cifrado E2E | ✅ (del lado del cliente) | ❌ | ❌ | ❌ |
| Compatible con S3 | ✅ | ✅ | ✅ | ✅ |
| Almacenamiento $/TB | $4 | $6 | $7 | Autoalojado |
| Salida de datos $/TB | $7 | $10 | Gratis | Autoalojado |
| Distribución global | ✅ (más de 13.000 nodos) | 2 regiones | 4 regiones | Tus servidores |

## Primeros pasos

1. **Crea una cuenta de Storj** en [storj.io](https://www.storj.io/).
2. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
3. **Agrega Storj como remoto compatible con S3**.
4. **Explora, transfiere y sincroniza** con cualquiera de tus otras nubes.
5. **Programa copias de seguridad** para una operación sin intervención manual.

Descentralizado, cifrado, compatible con S3 y un 80% más barato: Storj es una alternativa convincente al almacenamiento en la nube tradicional. Y con RcloneView, lo gestionas junto con todo lo demás.

---

**Guías relacionadas:**

- [Crear trabajos de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Programación de trabajos](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Comparar el contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
