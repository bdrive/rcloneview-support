---
slug: migrate-yandex-disk-to-wasabi-rcloneview
title: "Migrar Yandex Disk a Wasabi — Transfiere archivos con RcloneView"
authors:
  - alex
description: "Migra Yandex Disk al almacenamiento de objetos Wasabi con RcloneView: conecta ambos remotos, haz un Dry Run, copia de nube a nube y verifica con checksums."
keywords:
  - migrar Yandex Disk a Wasabi
  - copia de seguridad de Yandex Disk
  - migración a Wasabi
  - RcloneView Yandex Disk
  - RcloneView Wasabi
  - transferencia de nube a nube
  - copia de seguridad en S3
  - rclone GUI
  - migración de almacenamiento de objetos
  - herramienta de migración de nube
tags:
  - RcloneView
  - yandex-disk
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar Yandex Disk a Wasabi — Transfiere archivos con RcloneView

> Copia un archivo de Yandex Disk a buckets de Wasabi sin pasar por el disco local y confirma que cada archivo llegó.

Yandex Disk funciona como unidad personal, pero los archivos de largo plazo y los datos compartidos de proyectos suelen pertenecer a un almacenamiento de objetos compatible con S3, donde controlas los buckets y las claves de acceso. RcloneView conecta Yandex Disk y Wasabi como remotos en una sola ventana y ejecuta la transferencia entre ellos, así que no tienes que almacenar terabytes en un disco local primero.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configura ambos remotos

Yandex Disk inicia sesión a través del navegador: elígelo en **Remote > New Remote**, aprueba el acceso y el remoto se conecta. Wasabi se configura como proveedor compatible con S3. Crea un bucket en la consola de Wasabi, genera una Access Key y una Secret Key, y luego introdúcelas en RcloneView junto con el endpoint de la región de tu bucket.

Wasabi es un proveedor compatible con S3, por lo que funciona con la misma configuración de remoto que otros servicios compatibles con S3.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir los remotos de Yandex Disk y Wasabi en RcloneView" class="img-large img-center" />

## Elige qué mover

Explora Yandex Disk en un panel del explorador y tu bucket de Wasabi en el otro. Un patrón habitual es usar un bucket para el archivo, con carpetas de primer nivel que reflejen las carpetas de Yandex. El almacenamiento de objetos no tiene carpetas reales, así que mantén los nombres coherentes y evita rutas muy largas.

Si parte del disco contiene archivos prescindibles, usa el paso de filtros del trabajo para excluirlos por extensión, tamaño máximo o antigüedad, de modo que migres solo lo que necesitas.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Arrastrar archivos entre Yandex Disk y Wasabi en RcloneView" class="img-large img-center" />

## Dry Run y transferencia

Crea un trabajo con Yandex Disk como origen y tu bucket de Wasabi como destino. Elige Copy para que el origen permanezca intacto hasta que hayas verificado el resultado. Ejecuta un **Dry Run** para previsualizar la lista de archivos y luego inicia el trabajo. En Advanced Settings puedes activar la comparación por **checksum**, que comprueba hashes y tamaño cuando el proveedor los admite, y ajustar el número de transferencias de archivos simultáneas si Yandex se ralentiza.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Supervisión en vivo de una transferencia de Yandex Disk a Wasabi" class="img-large img-center" />

## Verifica y programa seguimientos

Cuando el trabajo termine, abre **Compare** en las dos ubicaciones para encontrar archivos left-only o que no coinciden, y copia los rezagados desde la vista de comparación. Si Yandex Disk sigue en uso durante la transición, una licencia PLUS permite programar el trabajo con temporización al estilo crontab para que los archivos nuevos sigan llegando a Wasabi hasta el cambio definitivo.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Programar un trabajo recurrente de Yandex Disk a Wasabi" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade Yandex Disk y Wasabi desde **Remote > New Remote**.
3. Crea un trabajo Copy, ejecuta un Dry Run y luego inicia la transferencia.
4. Verifica con Folder Compare antes de borrar nada en el origen.

Cuando el archivo está en un bucket que controlas, retirar la copia antigua pasa a ser una decisión deliberada y no una apuesta.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de Yandex Disk — Sincroniza y haz copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [Gestiona el almacenamiento de Wasabi — Sincroniza y haz copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Migraciones en la nube verificadas con checksum usando RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
