---
slug: migrate-google-drive-to-backblaze-b2-rcloneview
title: "Migra Google Drive a Backblaze B2 — Transfiere archivos con RcloneView"
authors:
  - tayson
description: "Migra Google Drive a Backblaze B2 con RcloneView — transfiere archivos de nube a nube, archiva datos de forma económica y verifica la migración con una GUI."
keywords:
  - Google Drive a Backblaze B2
  - migrar Google Drive
  - copia de seguridad en Backblaze B2
  - herramienta de migración en la nube
  - exportación de Google Drive
  - migración con RcloneView
  - transferencia de nube a nube
  - archivo S3 de Google Drive
  - archivado de Google Drive
  - almacenamiento en frío de Backblaze
tags:
  - google-drive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra Google Drive a Backblaze B2 — Transfiere archivos con RcloneView

> Google Drive está pensado para la colaboración, no para el archivado en frío — RcloneView migra el contenido de tu Drive directamente a Backblaze B2 sin tocar tu disco local, ahorrando costos de almacenamiento a gran escala.

Google Drive destaca en la colaboración en tiempo real, pero no está diseñado para el archivado económico a largo plazo a gran escala. Backblaze B2 ofrece almacenamiento de objetos compatible con S3 a una fracción del costo de almacenamiento de Google, lo que lo convierte en un destino popular para archivar grandes conjuntos de datos, proyectos de video y registros comerciales que no requieren acceso diario. RcloneView gestiona la migración directamente entre ambas nubes — sin necesidad de un disco local intermediario.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurando ambos remotos

En RcloneView, agrega primero Google Drive — **pestaña Remoto > Nuevo Remoto > Google Drive** — y autentícate mediante OAuth en el navegador. Luego agrega Backblaze B2: selecciónalo de la lista de proveedores e ingresa tu Application Key ID y Application Key. Ambos remotos quedan activos de inmediato.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

Abre ambos remotos uno al lado del otro en el explorador de doble panel de RcloneView. Esta vista directa es valiosa para planificar la migración: verifica qué existe en tus carpetas de Drive a la izquierda, confirma la estructura del bucket de B2 de destino a la derecha, e identifica qué carpetas priorizar antes de iniciar la transferencia.

## Configurando el trabajo de migración

Abre el **Administrador de trabajos** y crea un nuevo trabajo de sincronización o copia. Establece el origen en tu carpeta de Google Drive (o una subcarpeta específica para una migración incremental) y el destino en la ruta de tu bucket de Backblaze B2.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring Google Drive to Backblaze B2 migration job in RcloneView" class="img-large img-center" />

Para migraciones grandes — una empresa de producción de video que traslada 2 TB de proyectos terminados de Drive a B2 — habilita las transferencias multihilo y aumenta el número de archivos concurrentes en la Configuración avanzada del trabajo. La función **Ejecución en seco (Dry Run)** muestra exactamente qué archivos se transferirán antes de ejecutar el trabajo real, evitando sobrescrituras accidentales o contenido omitido. Habilitar la verificación de checksum garantiza que cada archivo llegue intacto a B2, lo cual es especialmente crítico para el archivado, donde los archivos pueden no consultarse durante años.

## Verificación y limpieza después de la migración

Una vez completada la transferencia, usa **Comparar carpetas** de RcloneView para comparar el origen de Google Drive con el destino de B2. La vista de comparación resalta los archivos que solo están a la izquierda (aún no migrados), los que solo están a la derecha (ya en B2) y los archivos iguales — dándote una lista de verificación clara y visual antes de eliminar nada de Drive.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Google Drive and Backblaze B2 after migration in RcloneView" class="img-large img-center" />

Volver a ejecutar el trabajo de migración una segunda vez después de la comparación es seguro — rclone omite los archivos que ya existen en el destino con el mismo tamaño y marca de tiempo, por lo que solo se transfieren las diferencias restantes. Este comportamiento idempotente hace que las migraciones a gran escala sean confiables incluso a lo largo de varias sesiones.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega un remoto de Google Drive (autenticación OAuth en el navegador) y un remoto de Backblaze B2 (credenciales de Application Key).
3. Abre el **Administrador de trabajos** y crea un trabajo de sincronización o copia de Google Drive a B2.
4. Habilita Dry Run para previsualizar, luego ejecútalo — usa Comparar carpetas para verificar la finalización.

Migrar a Backblaze B2 con RcloneView elimina la complejidad de la salida de datos entre nubes y te ofrece un archivo verificado y económico sin escribir un solo comando de CLI.

---

**Guías relacionadas:**

- [Migra Backblaze B2 a Google Drive con RcloneView](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-google-drive-rcloneview)
- [Gestiona el almacenamiento en la nube de Backblaze B2 — Sincronización y copia de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Copia de seguridad de Dropbox a Backblaze B2 — Almacenamiento asequible con RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)

<CloudSupportGrid />
