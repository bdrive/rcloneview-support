---
slug: migrate-opendrive-to-backblaze-b2-rcloneview
title: "Migrar de OpenDrive a Backblaze B2 — Transferir archivos con RcloneView"
authors:
  - tayson
description: "Mueve archivos de OpenDrive a Backblaze B2 con RcloneView: conecta ambos remotos, haz una simulación con Dry Run, ejecuta la transferencia y verifica con Folder Compare."
keywords:
  - migrar de OpenDrive a Backblaze B2
  - transferencia de OpenDrive a B2
  - migración de OpenDrive
  - copia de seguridad en Backblaze B2
  - transferencia de nube a nube
  - RcloneView OpenDrive
  - RcloneView Backblaze B2
  - mover archivos de OpenDrive a B2
tags:
  - RcloneView
  - opendrive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de OpenDrive a Backblaze B2 — Transferir archivos con RcloneView

> Mueve una biblioteca de OpenDrive a buckets de Backblaze B2 con una transferencia de nube a nube previsualizada y verificable, en lugar de descargar y volver a subir manualmente.

Los equipos que se quedan cortos con una cuenta de uso compartido de archivos suelen querer almacenamiento de objetos para archivos a largo plazo. Mover datos de OpenDrive a Backblaze B2 a mano implica descargar primero todo en local. RcloneView conecta ambos servicios y transfiere directamente entre ellos, con un Dry Run y un paso de comparación para que sepas qué se ha movido. Conecta S3, Azure o Backblaze B2 con acceso completo de lectura y escritura con la licencia FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar ambos remotos

Abre la pestaña Remote y elige New Remote. Añade OpenDrive como un remoto y Backblaze B2 como el otro. B2 usa un Application Key ID y una Application Key, que creas en la página de gestión de claves de Backblaze. Crea primero el bucket de destino en Backblaze para tener lista una ruta de destino.

Cuando ambos remotos aparezcan en Remote Manager, ábrelos en dos paneles de Explorer, uno junto al otro. Examinar el nivel superior de cada uno confirma que las credenciales funcionan antes de comprometerte con una transferencia grande.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir remotos de OpenDrive y Backblaze B2 en RcloneView" class="img-large img-center" />

## Planificar la estructura de carpetas

Una migración es un buen momento para decidir cómo se organizarán los datos en B2. Un patrón habitual es un bucket por finalidad, por ejemplo un bucket de archivo para proyectos terminados, con carpetas de nivel superior que reflejen tu estructura actual de OpenDrive. Usa Get Size en las carpetas más grandes de OpenDrive para estimar el volumen y copia primero las carpetas más importantes.

Si algunos tipos de archivo deben quedarse atrás, el paso 3 del asistente de sincronización permite establecer un tamaño máximo de archivo, una antigüedad máxima o reglas de exclusión personalizadas como `.iso`.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de nube a nube de OpenDrive a Backblaze B2 en RcloneView" class="img-large img-center" />

## Dry Run y después transferir

Crea un trabajo con OpenDrive como origen y tu bucket de B2 como destino. Para una migración, un trabajo Copy es la opción más segura porque deja el origen intacto; un trabajo Sync puede eliminar archivos en el destino para igualarlos al origen. Ejecuta primero un Dry Run para ver la lista de archivos que se copiarían.

En el paso 2, mantén "Retry entire sync if fails" en su valor predeterminado de 3 y considera reducir las transferencias simultáneas si el origen limita la velocidad. Después ejecuta el trabajo y observa el progreso, la velocidad y el número de archivos en la pestaña Transferring.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ejecución del trabajo de OpenDrive a B2 en RcloneView" class="img-large img-center" />

## Verificar antes de retirar el origen

Cuando el trabajo termine, abre Job History para confirmar que el estado es Completed y revisa el tamaño total y el número de archivos. Después usa Compare en las carpetas de OpenDrive y B2. Los archivos left-only son elementos que no llegaron; los archivos different apuntan a diferencias de tamaño que conviene volver a copiar. Conserva los datos de OpenDrive hasta que la comparación no muestre archivos left-only.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare entre OpenDrive y Backblaze B2" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade OpenDrive y Backblaze B2 como remotos y crea el bucket de destino.
3. Crea un trabajo Copy, ejecuta un Dry Run y después la transferencia.
4. Verifica con Job History y Folder Compare antes de dar de baja el origen.

Una copia previsualizada y verificada hace que el traslado a B2 sea predecible incluso con bibliotecas grandes.

---

**Guías relacionadas:**

- [Gestionar el almacenamiento de OpenDrive — Sincronizar y hacer copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-opendrive-cloud-sync-backup-rcloneview)
- [Migrar de SugarSync a Backblaze B2 con RcloneView](https://rcloneview.com/support/blog/migrate-sugarsync-to-backblaze-b2-rcloneview)
- [Migrar de Koofr a Backblaze B2 con RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
