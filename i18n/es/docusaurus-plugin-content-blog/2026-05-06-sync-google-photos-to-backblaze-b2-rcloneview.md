---
slug: sync-google-photos-to-backblaze-b2-rcloneview
title: "Sincroniza Google Photos con Backblaze B2 — Copia de seguridad en la nube con RcloneView"
authors:
  - tayson
description: "Haz una copia de seguridad de tu biblioteca de Google Photos en Backblaze B2 con RcloneView. Automatiza el archivado de fotos desde Google Photos directamente a almacenamiento de objetos — sin descargas manuales."
keywords:
  - sync Google Photos to Backblaze B2
  - Google Photos Backblaze B2 backup
  - RcloneView Google Photos backup
  - Google Photos to B2 transfer
  - backup Google Photos object storage
  - Google Photos archive B2
  - RcloneView photo backup
  - Google Photos cloud backup tool
  - Backblaze B2 photo archive
  - automated Google Photos backup
tags:
  - google-photos
  - backblaze-b2
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincroniza Google Photos con Backblaze B2 — Copia de seguridad en la nube con RcloneView

> RcloneView crea un flujo de copia de seguridad automatizado desde Google Photos hacia Backblaze B2 — manteniendo tu biblioteca de fotos a salvo en almacenamiento de objetos de bajo costo sin esfuerzo manual.

Google Photos es la biblioteca de fotos de miles de millones de usuarios, pero depender de un único proveedor de nube para recuerdos irremplazables conlleva un riesgo real. Los fotógrafos profesionales, los archivistas familiares y los creadores de contenido que usan Google Photos como biblioteca principal se benefician enormemente de una copia de seguridad secundaria automatizada en Backblaze B2 — una plataforma de almacenamiento de objetos rentable. RcloneView gestiona este flujo automáticamente, sincronizando las fotos nuevas de Google Photos a B2 según el horario que definas.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta Google Photos y Backblaze B2 en RcloneView

Ambos proveedores son fáciles de añadir en RcloneView. Para Google Photos, ve a la pestaña Remoto > Nuevo remoto, selecciona Google Photos y completa la autenticación OAuth basada en el navegador. Para Backblaze B2, selecciona Backblaze B2 e introduce tu Application Key ID y Application Key desde la consola de B2.

La integración de Google Photos de RcloneView muestra tu biblioteca organizada por álbum y fecha. Puedes explorar las carpetas de año/mes y acceder a todos los archivos multimedia — fotos y vídeos — desde el explorador de archivos.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Photos and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Configura el trabajo de sincronización de Google Photos a B2

Crea un trabajo de sincronización en RcloneView con tu remoto de Google Photos como origen y un bucket de Backblaze B2 como destino. Un estudio fotográfico que hace copia de seguridad de 500 GB de sesiones de clientes puede seleccionar álbumes específicos de Google Photos como carpetas de origen, dirigiendo cada álbum a una estructura de carpetas correspondiente en B2.

En la configuración avanzada del trabajo de sincronización, activa la verificación por **checksum** para confirmar que cada archivo de foto y vídeo transferido a B2 coincide con su origen. Esto es fundamental para archivos de fotos, donde una corrupción silenciosa sería devastadora.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Google Photos to Backblaze B2 in RcloneView" class="img-large img-center" />

## Programa copias de seguridad de fotos automatizadas (PLUS)

Con una licencia PLUS, programa la sincronización de Google Photos a B2 para que se ejecute automáticamente. Una sincronización diaria a las 3 AM captura las fotos y vídeos del día anterior sin afectar al rendimiento durante el día. La sincronización incremental de RcloneView solo transfiere archivos nuevos y modificados, manteniendo la duración del trabajo corta una vez completada la copia de seguridad completa inicial.

El filtro **Max file age** puede refinar aún más las sincronizaciones incrementales — configurar `Max file age: 7d` transfiere solo las fotos añadidas en la última semana, ideal para trabajos de sincronización frecuentes pero ligeros.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Google Photos to Backblaze B2 backup in RcloneView" class="img-large img-center" />

## Supervisa el progreso y verifica la integridad de la copia de seguridad

La pestaña Transferencia de RcloneView muestra el progreso de la copia de seguridad en tiempo real: nombres de archivo, velocidad de transferencia y bytes totales. Después de cada ejecución programada, el Historial de trabajos registra un resumen completo. Para bibliotecas de fotos con miles de archivos, este registro de historial sirve como prueba de la integridad de la copia de seguridad — esencial para fotógrafos que necesitan garantizar a sus clientes que sus imágenes están archivadas de forma segura.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Google Photos to Backblaze B2 sync progress in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade Google Photos (OAuth) y Backblaze B2 (Application Key) como remotos.
3. Crea un trabajo de sincronización de Google Photos a tu bucket de B2 con checksum activado.
4. Programa ejecuciones diarias automatizadas con PLUS y sigue el progreso en el Historial de trabajos.

Con RcloneView automatizando tu flujo de Google Photos a Backblaze B2, tu biblioteca de fotos siempre está protegida en un archivo de nube secundario e independiente.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de Google Photos — Sincroniza y haz copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-google-photos-cloud-sync-backup-rcloneview)
- [Gestiona el almacenamiento de Backblaze B2 — Sincroniza y haz copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Migra Google Photos a OneDrive con RcloneView](https://rcloneview.com/support/blog/migrate-google-photos-to-onedrive-rcloneview)

<CloudSupportGrid />
