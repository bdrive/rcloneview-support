---
slug: migrate-jottacloud-to-backblaze-b2-rcloneview
title: "Migra de Jottacloud a Backblaze B2 — Transfiere archivos con RcloneView"
authors:
  - tayson
description: "Migra archivos de Jottacloud a Backblaze B2 con RcloneView. Transfiere tu almacenamiento en la nube noruego a un almacenamiento de objetos compatible con S3 asequible, de forma directa."
keywords:
  - Jottacloud a Backblaze B2
  - migrar Jottacloud
  - migración de Jottacloud
  - migración de Backblaze B2
  - transferencia de nube a nube
  - Jottacloud RcloneView
  - copia de seguridad en Backblaze B2
  - migración de almacenamiento en la nube
  - almacenamiento en la nube noruego
  - transferencia RcloneView
tags:
  - jottacloud
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra de Jottacloud a Backblaze B2 — Transfiere archivos con RcloneView

> Mueve tus archivos de Jottacloud al almacenamiento de objetos Backblaze B2 con RcloneView — migración directa de nube a nube sin necesidad de una descarga local intermedia.

Jottacloud es un servicio de almacenamiento en la nube noruego con un fuerte enfoque en la privacidad, utilizado por particulares y empresas en toda Escandinavia y Europa. A medida que las necesidades de almacenamiento crecen, algunos usuarios migran a Backblaze B2 por su API compatible con S3, el acceso programático y las opciones de almacenamiento por niveles, más adecuadas para archivos grandes o flujos de trabajo de desarrolladores. RcloneView conecta ambos servicios y gestiona la transferencia directamente, sin necesidad de un disco duro local como intermediario.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurar Jottacloud y Backblaze B2

Agregar ambos remotos a RcloneView solo toma unos minutos. Para Jottacloud, abre la pestaña Remote, haz clic en New Remote y selecciona Jottacloud de la lista de proveedores. La configuración utiliza las credenciales de tu cuenta de Jottacloud. Para Backblaze B2, selecciona Backblaze B2 e introduce tu Application Key ID y tu Application Key, generados desde tu cuenta de Backblaze en App Keys. Ambos remotos aparecerán entonces como árboles de archivos accesibles en los paneles del Explorer.

Explora tus carpetas de Jottacloud para identificar el contenido que deseas mover. Jottacloud organiza los archivos en dispositivos y carpetas — comprende la estructura antes de crear tu tarea de migración para seleccionar la ruta de origen correcta.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Jottacloud and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Ejecutar la migración

Crea una tarea de sincronización con la carpeta de Jottacloud como origen y un bucket de Backblaze B2 como destino. Si aún no tienes un bucket de destino, puedes crear uno directamente en la consola de Backblaze antes de ejecutar la migración. El paso Advanced Settings del asistente de Sync te permite configurar transferencias de archivos concurrentes y habilitar la verificación de checksum — esta última confirma que cada archivo llegó intacto, lo cual es valioso para archivos grandes de fotos o videos.

Para un fotógrafo que migra 500 GB de archivos RAW de Jottacloud a Backblaze B2, el paso Filtering hace que las migraciones por fases sean manejables. Filtra por extensión de archivo (`.raw`, `.cr3`, `.arw`) para migrar primero los archivos de la cámara y luego gestionar otros tipos de activos en tareas posteriores. Los filtros de antigüedad máxima de archivo te permiten priorizar el trabajo reciente antes de archivar material más antiguo.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Jottacloud files to Backblaze B2 with RcloneView" class="img-large img-center" />

Usa siempre Dry Run antes de iniciar una migración en producción. La simulación lista cada archivo que se copiaría o eliminaría, para que puedas verificar que el alcance coincide con tu intención antes de confirmarla.

## Validar la migración completada

Después de que finalice la transferencia, utiliza Folder Compare para validar que esté completa. Selecciona la carpeta de origen de Jottacloud y el destino de Backblaze B2, y la vista de comparación resalta cualquier archivo que exista solo en un lado o que difiera en tamaño. Esto detecta archivos omitidos o transferencias truncadas que de otro modo podrían pasar desapercibidas en una migración grande.

El panel Job History muestra el tiempo, la cantidad de archivos, el total de datos transferidos y el estado final de cada ejecución de migración. Si una ejecución se interrumpió — por un problema de red o el sistema en reposo — puedes volver a ejecutar la tarea de sincronización, y el comportamiento incremental de rclone hace que solo se transfieran de nuevo los archivos faltantes o modificados.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Jottacloud to Backblaze B2 migration job history in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega Jottacloud como remoto usando las credenciales de tu cuenta de Jottacloud.
3. Agrega Backblaze B2 usando tu Application Key ID y tu Application Key.
4. Ejecuta Dry Run para previsualizar y luego ejecuta la sincronización para migrar los archivos a tu bucket de B2.

Migrar de Jottacloud a Backblaze B2 mediante RcloneView es incremental, reanudable y totalmente gestionado por la interfaz gráfica — sin necesidad de scripting.

---

**Guías relacionadas:**

- [Gestiona la sincronización y copia de seguridad en la nube de Jottacloud con RcloneView](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Copia de seguridad de Dropbox a Backblaze B2 con RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [Migra de Wasabi a Backblaze B2 con RcloneView](https://rcloneview.com/support/blog/migrate-wasabi-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
