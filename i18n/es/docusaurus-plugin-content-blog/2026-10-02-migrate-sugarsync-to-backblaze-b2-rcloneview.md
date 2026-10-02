---
slug: migrate-sugarsync-to-backblaze-b2-rcloneview
title: "Migra SugarSync a Backblaze B2 — Transfiere archivos con RcloneView"
authors:
  - steve
description: "Mueve archivos de SugarSync a Backblaze B2 con RcloneView: conecta ambos remotos, simula la transferencia con Dry Run y verifica los resultados con Folder Compare."
keywords:
  - migrar SugarSync a Backblaze B2
  - transferencia de SugarSync a B2
  - migración de SugarSync
  - copia de seguridad en Backblaze B2
  - migración de nube a nube
  - RcloneView SugarSync
  - almacenamiento alternativo a SugarSync
  - rclone SugarSync B2
  - GUI de migración en la nube
  - copia de seguridad en almacenamiento de objetos
tags:
  - RcloneView
  - sugarsync
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra SugarSync a Backblaze B2 — Transfiere archivos con RcloneView

> Mueve años de carpetas de SugarSync a buckets de Backblaze B2 sin descargarlas y volver a subirlas a mano.

Los equipos que llevan mucho tiempo usando SugarSync suelen querer sus archivos en un almacenamiento de objetos, donde los buckets y las claves de aplicación se adaptan bien a la automatización. RcloneView se conecta a ambos servicios en una sola ventana, de modo que puedes copiar carpetas directamente de SugarSync a Backblaze B2 y comprobar el resultado antes de dar de baja la cuenta antigua. Conecta S3, Azure o Backblaze B2 con acceso completo de lectura y escritura con la licencia FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta ambos remotos

Abre la pestaña Remote y haz clic en New Remote. Añade SugarSync con las credenciales de tu cuenta y luego añade Backblaze B2 con un Application Key ID y una Application Key de la página de gestión de claves de Backblaze. Crea primero el bucket de destino en Backblaze para tener un objetivo claro.

Coloca SugarSync en un panel de Explorer y el bucket de B2 en otro. Explora ambos para confirmar el acceso antes de configurar nada.

<img src="/support/images/en/blog/new-remote.png" alt="Adición de los remotos SugarSync y Backblaze B2 en RcloneView" class="img-large img-center" />

## Copia con arrastrar y soltar o con un trabajo de sincronización

Para una carpeta pequeña, arrástrala del panel de SugarSync al panel de B2. Arrastrar entre remotos distintos realiza una copia, así que el original permanece en su sitio. Para una migración completa, usa el asistente de sincronización de 4 pasos: elige origen y destino, define el número de transferencias, añade filtros y, opcionalmente, prográmalo con una licencia PLUS.

Usa un trabajo Copy en lugar de un trabajo Sync en la primera pasada, para que no se elimine nada en el destino.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de nube a nube de SugarSync a Backblaze B2 en RcloneView" class="img-large img-center" />

## Previsualiza, supervisa y verifica

Ejecuta primero un Dry Run. Enumera los archivos que se copiarían, de modo que puedes detectar una ruta incorrecta antes de mover datos. Mientras se ejecuta el trabajo, la pestaña Transferring muestra el progreso, la velocidad y el número de archivos.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Supervisión de una transferencia de SugarSync a B2 en la pestaña Transferring" class="img-large img-center" />

Cuando termine, abre Compare para ver SugarSync y B2 lado a lado. Los archivos solo a la izquierda son los que aún no han llegado, y puedes copiarlos directamente desde la vista de comparación. Job History conserva un registro de cada ejecución.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare confirmando que el contenido de SugarSync y Backblaze B2 coincide" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade SugarSync y Backblaze B2 como remotos y crea tu bucket de destino.
3. Crea un trabajo Copy, ejecuta un Dry Run y luego inicia la transferencia.
4. Verifica con Folder Compare antes de cerrar la cuenta de SugarSync.

Una copia verificada en B2 te permite dar de baja el servicio antiguo con tranquilidad.

---

**Guías relacionadas:**

- [Migra SugarSync a Google Drive y OneDrive con RcloneView](https://rcloneview.com/support/blog/migrate-sugarsync-google-drive-onedrive-rcloneview)
- [Gestiona el almacenamiento de SugarSync con RcloneView](https://rcloneview.com/support/blog/manage-sugarsync-cloud-sync-backup-rcloneview)
- [Gestiona el almacenamiento de Backblaze B2 con RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
