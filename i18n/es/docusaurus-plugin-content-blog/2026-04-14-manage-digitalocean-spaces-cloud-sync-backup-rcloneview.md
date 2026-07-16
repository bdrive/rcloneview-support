---
slug: manage-digitalocean-spaces-cloud-sync-backup-rcloneview
title: "Gestiona DigitalOcean Spaces — Sincroniza y Haz Copias de Seguridad de Archivos con RcloneView"
authors:
  - tayson
description: "Conecta DigitalOcean Spaces a RcloneView y gestiona tu almacenamiento de objetos con una interfaz gráfica. Sincroniza, haz copias de seguridad y transfiere archivos entre regiones sin comandos CLI."
keywords:
  - DigitalOcean Spaces RcloneView
  - DigitalOcean Spaces sync
  - DigitalOcean Spaces backup
  - S3-compatible object storage GUI
  - DigitalOcean Spaces management
  - rclone DigitalOcean Spaces
  - cloud object storage sync
  - DigitalOcean backup tool
tags:
  - digitalocean-spaces
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona DigitalOcean Spaces — Sincroniza y Haz Copias de Seguridad de Archivos con RcloneView

> RcloneView se conecta a DigitalOcean Spaces a través de una API compatible con S3, ofreciéndote un gestor de archivos visual para tus buckets de almacenamiento de objetos en cualquier región.

DigitalOcean Spaces es un servicio de almacenamiento de objetos orientado a desarrolladores, con un modelo de precios plano y CDN integrado. Los equipos que ejecutan cargas de trabajo en Droplets de DigitalOcean suelen almacenar copias de seguridad, activos estáticos y artefactos de despliegue en Spaces. RcloneView añade una capa gráfica sobre el backend de rclone compatible con S3, para que puedas explorar visualmente los buckets, ejecutar sincronizaciones programadas y comparar directorios locales con el almacenamiento remoto — todo sin tocar la CLI.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurar DigitalOcean Spaces en RcloneView

DigitalOcean Spaces utiliza APIs compatibles con S3, por lo que se configura como un remoto S3 en RcloneView. Ve a **Remote tab → New Remote → Amazon S3 Compatible**, y luego selecciona **DigitalOcean Spaces** como proveedor. Necesitarás:

- **Access Key ID** — generado en el Panel de Control de DigitalOcean, en API → Spaces Keys
- **Secret Access Key** — se muestra una sola vez en el momento de generarla
- **Endpoint** — específico de la región, por ejemplo `nyc3.digitaloceanspaces.com`

Una vez guardado, tus buckets de Spaces aparecen inmediatamente en el panel Explorer. Puedes explorar el contenido de los buckets, subir archivos arrastrándolos desde carpetas locales, y abrir paneles lado a lado para comparar el directorio de copia de seguridad de un Droplet con el bucket de Spaces.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring DigitalOcean Spaces as an S3 remote in RcloneView" class="img-large img-center" />

## Sincronizar Servidores Locales con DigitalOcean Spaces

Un caso de uso típico: un equipo de desarrollo genera artefactos de compilación en un servidor CI y quiere enviarlos cada noche a Spaces para almacenamiento a largo plazo. Usando el Job Manager de RcloneView, crea un trabajo de sincronización desde el directorio local de artefactos hacia `do-spaces:artifacts-bucket/builds`. Configura la programación para ejecutarse a las 3:00 AM, activa la verificación por checksum y añade un filtro de tamaño máximo de archivo para excluir archivos temporales de más de 500 MB.

La opción de sincronización 1:N te permite reflejar el mismo directorio de artefactos tanto en DigitalOcean Spaces como en Amazon S3 simultáneamente — útil para equipos que mantienen redundancia multirregión o que están transicionando entre proveedores de almacenamiento.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a DigitalOcean Spaces sync job in real time" class="img-large img-center" />

## Transferencias entre Regiones y entre Proveedores

Cuando necesitas mover datos entre regiones de Spaces (por ejemplo, de `nyc3` a `sfo3`) o migrar por completo a otro proveedor compatible con S3, RcloneView lo gestiona como una transferencia directa de nube a nube. Abre dos paneles Explorer — uno apuntando al bucket de Spaces de origen y otro al de destino — y luego arrastra y suelta, o usa el asistente de sincronización.

Para migraciones grandes, configura **Number of file transfers** entre 8 y 16 en el Paso 2 del asistente de sincronización para maximizar el rendimiento. El monitor de transferencia en tiempo real de RcloneView muestra el progreso por archivo y la velocidad general, permitiéndote estimar el tiempo de finalización para grandes conjuntos de datos.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer between DigitalOcean Spaces and Amazon S3 in RcloneView" class="img-large img-center" />

## Cómo Empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Genera una clave de acceso de Spaces en el Panel de Control de DigitalOcean.
3. Crea un nuevo remoto S3 en RcloneView con tus credenciales y endpoint de Spaces.
4. Crea un trabajo de sincronización en Job Manager apuntando a tu bucket de Spaces y establece una programación.

DigitalOcean Spaces se convierte en un destino de copia de seguridad totalmente gestionado y programado — con monitoreo en tiempo real e historial de trabajos, todo en una sola interfaz.

---

**Guías Relacionadas:**

- [Migra Google Drive a DigitalOcean Spaces con RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-digitalocean-spaces-rcloneview)
- [Monta DigitalOcean Spaces como una Unidad Local con RcloneView](https://rcloneview.com/support/blog/mount-digitalocean-spaces-local-drive-rcloneview)
- [Centraliza S3, Wasabi y R2 con RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
