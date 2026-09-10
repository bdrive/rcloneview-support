---
slug: sync-google-drive-to-koofr-rcloneview
title: "Sincronizar Google Drive con Koofr — Copia de seguridad en la nube con RcloneView"
authors:
  - alex
description: "Sincroniza Google Drive con Koofr usando RcloneView para obtener una copia de seguridad alojada en Europa, configurada sin la línea de comandos."
keywords:
  - sync google drive to koofr
  - copia de seguridad google drive koofr
  - RcloneView sincronización koofr
  - copia de seguridad en la nube europea google drive
  - sincronización de almacenamiento en la nube koofr
  - migración de google drive a koofr
  - herramienta de sincronización entre nubes
  - transferencia koofr google drive
  - sincronización nube a nube rcloneview
tags:
  - RcloneView
  - google-drive
  - koofr
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincronizar Google Drive con Koofr — Copia de seguridad en la nube con RcloneView

> Mantén una réplica alojada en Europa de tu Google Drive en Koofr sin escribir un solo comando de rclone.

Los equipos con clientes con sede en la UE o con preferencias de residencia de datos suelen querer una segunda copia de su contenido de Google Drive alojada en infraestructura europea. Koofr, con sede en la UE, encaja de forma natural en ese papel, pero volver a subir archivos manualmente después de cada cambio no es sostenible. RcloneView conecta ambas cuentas y ejecuta la sincronización como un trabajo guardado, manteniendo la copia de Koofr actualizada sin mover archivos manualmente.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Google Drive y Koofr

Ambos remotos utilizan los métodos de configuración nativos de cada proveedor: Google Drive se conecta mediante un inicio de sesión OAuth en el navegador, y Koofr se añade de la misma forma desde la pestaña Remote > New Remote. Una vez que ambos aparecen en el Remote Manager, abre dos paneles del Explorer uno junto al otro — uno con Google Drive, otro con Koofr — para poder probar una copia rápida arrastrando y soltando antes de configurar un trabajo automatizado. Arrastrar entre los dos paneles siempre copia en lugar de mover, ya que son remotos independientes.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Koofr remotes in RcloneView" class="img-large img-center" />

## Configurar el trabajo de sincronización

Inicia el asistente de sincronización desde la pestaña Home y establece Google Drive como origen y Koofr como destino. Elige la opción unidireccional "Modificar solo el destino" para que la copia de Koofr siempre refleje Drive sin eliminar accidentalmente nada en el origen. En el Paso 2, activar la comparación por checksum garantiza que los archivos se comparen por contenido y no solo por la fecha de modificación, lo cual importa cuando los archivos pasan por distintos clientes de sincronización antes de llegar a Drive.

La sincronización 1:N de RcloneView puede reflejar la misma carpeta de Google Drive en Koofr y destinos adicionales a la vez, con la licencia FREE — útil si más adelante se añade un segundo destino de respaldo sin necesidad de reconstruir el trabajo.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job from Google Drive to Koofr" class="img-large img-center" />

## Ejecutar un Dry Run antes de la primera sincronización

Antes de comprometerte con una transferencia completa, ejecuta Dry Run para previsualizar exactamente qué archivos se copiarán y confirmar que no se eliminará nada de Koofr de forma inesperada. Esto resulta especialmente útil la primera vez que un trabajo se ejecuta contra una cuenta de Koofr que ya tiene contenido en la carpeta de destino, ya que expone los conflictos antes de que se conviertan en sobrescrituras reales.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job from Google Drive to Koofr in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade Google Drive y Koofr como remotos.
3. Crea un trabajo de sincronización unidireccional con la comparación por checksum activada.
4. Ejecuta un dry run y luego ejecuta el trabajo para crear tu primera réplica en Koofr.

Una sincronización permanente de Google Drive a Koofr te ofrece una copia de seguridad alojada en Europa que puedes volver a ejecutar en un par de clics, de modo que tu copia de recuperación nunca dependa de reconstruir el trabajo desde cero.

---

**Guías relacionadas:**

- [Migrar de Koofr a Google Drive — Transfiere archivos con RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-google-drive-rcloneview)
- [Gestiona el Almacenamiento Koofr — Sincroniza y Respalda Archivos con RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Sincronizar Koofr con Amazon S3 — Copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/sync-koofr-to-amazon-s3-rcloneview)

<CloudSupportGrid />
