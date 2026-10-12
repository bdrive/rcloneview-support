---
slug: migrate-mailru-cloud-to-backblaze-b2-rcloneview
title: "Migra Mail.ru Cloud a Backblaze B2 — Transfiere archivos con RcloneView"
authors:
  - morgan
description: "Mueve archivos de Mail.ru Cloud a Backblaze B2 con RcloneView: conecta ambos remotos, previsualiza con Dry Run, transfiere y verifica con Folder Compare."
keywords:
  - migrar Mail.ru Cloud a Backblaze B2
  - copia de seguridad de Mail.ru Cloud
  - Mail.ru Cloud to B2
  - migración a Backblaze B2
  - transferencia de nube a nube
  - migración con RcloneView
  - Mail.ru Cloud rclone
  - mover archivos a Backblaze B2
tags:
  - RcloneView
  - mailru
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra Mail.ru Cloud a Backblaze B2 — Transfiere archivos con RcloneView

> Copia una biblioteca de Mail.ru Cloud al almacenamiento de objetos de Backblaze B2 desde una sola ventana, con una vista previa antes de mover nada y una comparación después.

Si años de documentos y fotos viven en Mail.ru Cloud, una segunda copia en un almacén de objetos te da un archivo independiente. RcloneView conecta ambos servicios como remotos y ejecuta la transferencia como un trabajo de nube a nube, por lo que los archivos no necesitan descargarse primero a un portátil. Conecta S3, Azure o Backblaze B2 con lectura y escritura completas con la licencia FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta ambos remotos

Abre la pestaña Remote y haz clic en New Remote. Añade primero Mail.ru Cloud siguiendo las indicaciones de ese proveedor y luego añade Backblaze B2 con un Application Key ID y una Application Key de la consola de B2. Crea antes el bucket en B2 para tener un destino al que apuntar.

Abre cada remoto en su propio panel Explorer. Explora las carpetas de Mail.ru Cloud a la izquierda y el bucket de B2 a la derecha para confirmar que ambos responden antes de crear un trabajo.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir remotos de Mail.ru Cloud y Backblaze B2 en RcloneView" class="img-large img-center" />

## Planifica la transferencia

Decide si moverás todo o solo una parte. Un estudio que archiva 400 GB de carpetas de proyectos podría copiar primero una carpeta de nivel superior como piloto. En el asistente de sincronización, elige Mail.ru Cloud como origen y una carpeta del bucket de B2 como destino, y luego dale al trabajo un nombre con letras, números, guiones o guiones bajos.

Para una migración, un trabajo Copy es la opción más segura porque nunca elimina nada del origen. Usa Sync solo cuando quieras que el destino refleje exactamente el origen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de nube a nube de Mail.ru Cloud a Backblaze B2" class="img-large img-center" />

## Previsualiza, ejecuta y supervisa

Ejecuta primero un Dry Run. Lista los archivos que se copiarían o eliminarían sin cambiar nada, lo que detecta pronto una ruta de destino incorrecta. Luego inicia el trabajo y observa el progreso, la velocidad y el número de archivos en la pestaña Transferring.

El almacenamiento de objetos gestiona bien muchas subidas en paralelo, pero las nubes de consumo pueden ser más estrictas. Si ves errores, reduce el número de transferencias de archivos en el paso 2 del asistente y mantén los equality checkers en 4 o menos.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Supervisión de una transferencia de Mail.ru Cloud a B2 en RcloneView" class="img-large img-center" />

## Verifica y mantén la copia al día

Cuando termine el trabajo, abre Folder Compare con Mail.ru Cloud en un lado y B2 en el otro. Filtra por archivos solo a la izquierda y distintos para encontrar lo que no llegó, y copia solo esos elementos. Job History registra el estado, la duración, el tamaño y el número de archivos de cada ejecución.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare entre Mail.ru Cloud y Backblaze B2" class="img-large img-center" />

Para mantener actualizada la copia de B2, guarda el trabajo y, con una licencia PLUS, añade una programación al estilo crontab en el paso 4.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade Mail.ru Cloud y Backblaze B2 como remotos en la pestaña Remote.
3. Crea un trabajo Copy de Mail.ru Cloud a tu bucket de B2 y ejecuta un Dry Run.
4. Inicia la transferencia y verifica con Folder Compare.

Una segunda copia verificada en B2 convierte una biblioteca de un solo proveedor en una con copia de seguridad.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de Mail.ru Cloud con RcloneView](https://rcloneview.com/support/blog/manage-mailru-cloud-sync-rcloneview)
- [Gestiona el almacenamiento de Backblaze B2 — Sincroniza y haz copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Migra Yandex Disk a Backblaze B2 con RcloneView](https://rcloneview.com/support/blog/migrate-yandex-disk-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
