---
slug: migrate-wasabi-to-onedrive-rcloneview
title: "Migrar Wasabi a OneDrive — Transferir archivos con RcloneView"
authors:
  - tayson
description: "Migra Wasabi a OneDrive con RcloneView: conecta ambos remotos, previsualiza con Dry Run, copia los datos del bucket de nube a nube y verifica con Folder Compare."
keywords:
  - migrar Wasabi a OneDrive
  - transferencia de Wasabi a OneDrive
  - mover bucket de Wasabi a OneDrive
  - RcloneView Wasabi
  - RcloneView OneDrive
  - migración de nube a nube
  - sincronización Wasabi OneDrive
  - S3 a OneDrive
tags:
  - RcloneView
  - wasabi
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar Wasabi a OneDrive — Transferir archivos con RcloneView

> Mueve los datos de un bucket de Wasabi a OneDrive con una copia de nube a nube que puedes previsualizar y verificar, en lugar de descargar y volver a subir.

Los equipos que guardaron archivos de proyectos en Wasabi a veces necesitan esos datos en OneDrive, donde sus compañeros ya trabajan en Microsoft 365. El almacenamiento de objetos y un servicio de sincronización de archivos se comportan de forma distinta, así que una copia a ciegas puede darte sorpresas. RcloneView conecta ambos servicios en paralelo, previsualiza el trabajo con Dry Run y verifica el resultado después. Conecta S3, Azure o Backblaze B2 con lectura y escritura completas en la licencia FREE, junto con más de 90 proveedores.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta Wasabi y OneDrive

Wasabi se accede mediante el protocolo S3 de rclone, así que introduces una Access Key, una Secret Key y el endpoint de tu región de Wasabi. OneDrive usa OAuth en el navegador: RcloneView abre una página de inicio de sesión de Microsoft, apruebas el acceso y el remoto se conecta sin ninguna clave que copiar.

Abre ambos remotos en dos paneles de Explorer. Explora el bucket y el árbol de carpetas de OneDrive para saber dónde están los datos y dónde deben quedar.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir los remotos de Wasabi y OneDrive en RcloneView" class="img-large img-center" />

## Planifica la copia

Imagina un estudio de diseño con varios buckets de carpetas de proyectos terminados. En lugar de mover todo de una vez, copia un bucket o prefijo por trabajo. Los trabajos cortos son más fáciles de reintentar y de revisar.

Elige Copy en lugar de Sync si OneDrive ya contiene archivos que quieres conservar, porque una sincronización unidireccional hace que el destino coincida con el origen. El paso de filtros te permite limitar el tamaño o la antigüedad de los archivos y usar grupos predefinidos como Document, Image o Video. Revisa también los nombres de archivo de antemano: las claves de objeto pueden contener caracteres o rutas muy largas que OneDrive puede rechazar, así que un Dry Run merece el minuto que lleva.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparar las carpetas de Wasabi y OneDrive antes de la migración" class="img-large img-center" />

## Ejecuta la transferencia

Para algo rápido y puntual, arrastra una carpeta del panel de Wasabi al panel de OneDrive. Arrastrar entre remotos distintos copia en lugar de mover, por lo que el bucket queda intacto hasta que estés satisfecho. Para ejecuciones repetibles, guarda un trabajo mediante el asistente de cuatro pasos: almacenamiento, ajustes avanzados, filtros y programación (la programación requiere PLUS).

Observa la pestaña Transferring para ver la velocidad, el número de archivos y el progreso. Si OneDrive se ralentiza en una ejecución grande, reduce el número de transferencias de archivos simultáneas en Advanced Settings. Los trabajos de sincronización reintentan toda la ejecución cuando falla (valor predeterminado: 3 veces).

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de nube a nube de Wasabi a OneDrive" class="img-large img-center" />

## Verifica y guarda un registro

Cuando termine la copia, abre Folder Compare en ambas raíces. Los filtros muestran archivos solo en la izquierda, solo en la derecha, idénticos y diferentes, y puedes copiar los elementos que falten con un clic. Job History registra la hora de inicio, la duración, el estado y los archivos transferidos, lo que sirve también como registro de la migración.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historial de trabajos de la migración de Wasabi a OneDrive" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade un remoto de Wasabi (access key, secret key, endpoint de la región) y un remoto de OneDrive (inicio de sesión en el navegador).
3. Ejecuta un Dry Run en un prefijo y después ejecuta el trabajo de copia.
4. Verifica con Folder Compare y repite con los buckets restantes.

Una migración por etapas y verificada significa que cada archivo está contabilizado antes de retirar el bucket.

---

**Guías relacionadas:**

- [Migrar OneDrive a Wasabi](https://rcloneview.com/support/blog/migrate-onedrive-to-wasabi-rcloneview)
- [Gestionar el almacenamiento de Wasabi](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Dry Run: previsualiza la sincronización antes de transferir](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
