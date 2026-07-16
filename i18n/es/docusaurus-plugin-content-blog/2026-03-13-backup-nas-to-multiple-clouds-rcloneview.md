---
slug: backup-nas-to-multiple-clouds-rcloneview
title: "Cómo hacer copia de seguridad de tu NAS en múltiples nubes — Estrategia de copia de seguridad 3-2-1 con RcloneView"
authors:
  - tayson
description: "Protege los datos de tu NAS haciendo copia de seguridad simultáneamente en múltiples proveedores de la nube. Implementa una estrategia de copia de seguridad 3-2-1 adecuada usando los trabajos por lotes de RcloneView."
keywords:
  - nas multi cloud backup
  - 3 2 1 backup strategy
  - nas cloud backup multiple
  - synology multi cloud backup
  - qnap multi cloud backup
  - nas backup strategy
  - nas to s3 and b2 backup
  - nas disaster recovery
  - multi cloud backup plan
  - nas off site backup
tags:
  - nas
  - multi-cloud
  - best-practices
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cómo hacer copia de seguridad de tu NAS en múltiples nubes — Estrategia de copia de seguridad 3-2-1 con RcloneView

> Una copia de seguridad en la nube es buena. Dos copias de seguridad en la nube es mejor. La regla 3-2-1 dice: 3 copias, 2 medios diferentes, 1 fuera del sitio. Tu NAS es la copia uno. La nube A es la copia dos. La nube B es la copia tres. RcloneView automatiza todo esto.

Un NAS es una solución de almacenamiento centralizado fantástica, pero sigue siendo un único dispositivo en una única ubicación. Un fallo de hardware, un incendio, un robo o un desastre natural pueden destruirlo junto con todo lo que contiene. Hacer copia de seguridad en múltiples proveedores de la nube — en infraestructuras diferentes, en regiones diferentes — te ofrece una verdadera recuperación ante desastres.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## La estrategia 3-2-1

| Copia | Ubicación | Proveedor |
|------|----------|----------|
| 1 (principal) | NAS (local) | Synology/QNAP |
| 2 (copia en la nube) | Nube A | Backblaze B2 ($6/TB) |
| 3 (copia en la nube) | Nube B | AWS S3 o Wasabi |

Tres copias. Dos tipos diferentes de almacenamiento (NAS local + nube). Una fuera del sitio (la nube está fuera del sitio por definición).

## Configuración con RcloneView

### 1) Conecta tu NAS y tus nubes

<img src="/support/images/en/blog/new-remote.png" alt="Add NAS and cloud remotes" class="img-large img-center" />

### 2) Crea trabajos de copia de seguridad para cada nube

**Trabajo 1**: NAS → Backblaze B2 (copia de seguridad principal en la nube).
**Trabajo 2**: NAS → AWS S3 (copia de seguridad secundaria en la nube).

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create multi-cloud backup jobs" class="img-large img-center" />

### 3) Programa copias de seguridad nocturnas

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule multi-cloud NAS backup" class="img-large img-center" />

Escalona los horarios:
- 2:00 AM → NAS → Backblaze B2.
- 4:00 AM → NAS → AWS S3.

### 4) Usa los trabajos por lotes para automatizar

Los trabajos por lotes de v1.3 encadenan todo:

1. Copiar NAS → B2.
2. Copiar NAS → S3.
3. Comparar NAS con B2.
4. Comparar NAS con S3.
5. Notificar por Slack.

### 5) Verifica ambas copias de seguridad

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify multi-cloud backup" class="img-large img-center" />

## Optimización de costes

| Volumen de datos | B2 mensual | S3 Standard-IA mensual | Total |
|-------------|-----------|----------------------|-------|
| 1 TB | $6 | $12.50 | $18.50 |
| 5 TB | $30 | $62.50 | $92.50 |
| 10 TB | $60 | $125 | $185 |

Para la copia de seguridad secundaria, usa niveles más económicos: S3 Glacier ($4/TB) o Wasabi ($7/TB con egreso gratuito).

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Conecta el NAS y dos proveedores de la nube**.
3. **Crea trabajos de copia** hacia cada nube.
4. **Programa y automatiza** con trabajos por lotes.
5. **Verifica ambas copias de seguridad** semanalmente.

Dos nubes, un NAS, cero riesgo de pérdida de datos.

---

**Guías relacionadas:**

- [RcloneView en NAS Synology](https://rcloneview.com/support/blog/run-rcloneview-synology-nas-docker-rcloneview)
- [RcloneView en NAS QNAP](https://rcloneview.com/support/blog/rcloneview-qnap-nas-cloud-backup-rcloneview)
- [Por qué importa la copia de seguridad de nube a nube](https://rcloneview.com/support/blog/why-cloud-to-cloud-backup-matters-rcloneview)

<CloudSupportGrid />
