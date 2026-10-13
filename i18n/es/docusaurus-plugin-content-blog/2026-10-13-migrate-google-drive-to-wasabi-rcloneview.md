---
slug: migrate-google-drive-to-wasabi-rcloneview
title: "Migrar Google Drive a Wasabi — Transferir archivos con RcloneView"
authors:
  - alex
description: "Migra Google Drive a Wasabi con RcloneView. Copia archivos de nube a nube, verifica con Dry Run y Folder Compare, y conserva un archivo compatible con S3."
keywords:
  - migrar google drive a wasabi
  - google drive to wasabi
  - transferencia google drive wasabi
  - archivo google drive s3
  - migración wasabi interfaz gráfica
  - transferencia de nube a nube
  - rcloneview google drive wasabi
  - mover google drive a almacenamiento de objetos
  - copia de seguridad google drive wasabi
  - sincronización de bucket wasabi
tags:
  - RcloneView
  - google-drive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar Google Drive a Wasabi — Transferir archivos con RcloneView

> Mueve o archiva un Google Drive en un bucket de Wasabi sin descargar nada antes a tu propio disco.

Un estudio de diseño con 2 TB de proyectos terminados puede querer sacarlos de Google Drive y llevarlos a un almacenamiento de objetos compatible con S3. RcloneView transfiere directamente de Drive a Wasabi, con un Dry Run previo y un Folder Compare posterior para confirmar que no se omitió nada.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar ambos remotos

Google Drive usa OAuth: elígelo en **New Remote** e inicia sesión desde el navegador. Wasabi es un proveedor compatible con S3, así que introduces una Access Key, una Secret Key y el endpoint de tu región de Wasabi. Crea primero el bucket en la consola de Wasabi para tener un destino al que apuntar.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir remotos de Google Drive y Wasabi en RcloneView" class="img-large img-center" />

Conecta S3, Azure o Backblaze B2 con lectura y escritura completas en la licencia FREE; Wasabi y otros servicios compatibles con S3 funcionan del mismo modo.

## Planificar la transferencia con un Dry Run

Abre Google Drive en un panel del Explorer y tu bucket de Wasabi en el otro. Para un traslado puntual, arrastra carpetas entre los paneles; entre remotos distintos se realiza una copia. Para una biblioteca grande, crea un job en su lugar. El Step 1 define origen y destino, el Step 2 permite ajustar las transferencias simultáneas y el Step 3 puede filtrar por tamaño, antigüedad o tipo de archivo. Ejecuta **Dry Run** para previsualizar cada archivo que se copiará.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de nube a nube de Google Drive a Wasabi" class="img-large img-center" />

Durante la migración, elige el tipo de job **Copy** en lugar de Sync. Copy nunca elimina nada en el destino, lo que es más seguro hasta que hayas verificado el resultado.

## Supervisar la transferencia

Inicia el job y sigue el progreso en la pestaña Transferring, en la parte inferior de la ventana: porcentaje, velocidad y número de archivos. Si los límites de tasa de Google Drive ralentizan el proceso, reduce el número de transferencias de archivos simultáneas en la configuración avanzada del job y vuelve a ejecutarlo; los archivos ya copiados se omiten.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Supervisión de una transferencia a Wasabi en RcloneView" class="img-large img-center" />

## Verificar antes de limpiar

Usa **Compare** para ver ambas ubicaciones lado a lado. Los filtros muestran los archivos solo a la izquierda, solo a la derecha, idénticos y distintos, de modo que cualquier diferencia resulta evidente. Solo cuando la comparación esté limpia deberías plantearte eliminar datos de Google Drive. Job History conserva un registro de cada ejecución.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verificación de la migración de Google Drive a Wasabi con Folder Compare" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade Google Drive (OAuth) y Wasabi (Access Key, Secret Key, endpoint) como remotos.
3. Crea un job Copy de Drive a tu bucket y ejecuta un Dry Run.
4. Inicia el job y confirma el resultado con Compare.

Una copia verificada en un bucket que controlas hace que el resto de la limpieza sea de bajo riesgo.

---

**Guías relacionadas:**

- [Gestionar el almacenamiento de Wasabi con RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Migrar OneDrive a Wasabi](https://rcloneview.com/support/blog/migrate-onedrive-to-wasabi-rcloneview)
- [Migrar Dropbox a Wasabi](https://rcloneview.com/support/blog/migrate-dropbox-to-wasabi-rcloneview)

<CloudSupportGrid />
