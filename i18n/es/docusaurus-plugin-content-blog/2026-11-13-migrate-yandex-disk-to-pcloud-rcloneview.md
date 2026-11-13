---
slug: migrate-yandex-disk-to-pcloud-rcloneview
title: "Migra de Yandex Disk a pCloud — transfiere archivos con RcloneView"
authors:
  - morgan
description: "Mueve archivos de Yandex Disk a pCloud con RcloneView. Conecta ambas nubes mediante OAuth, previsualiza con Dry Run, copia de nube a nube y verifica con Folder Compare."
keywords:
  - migrar yandex disk a pcloud
  - transferencia de yandex disk a pcloud
  - migración de yandex disk
  - herramienta de migración pcloud
  - transferencia de nube a nube
  - mover archivos desde yandex disk
  - rcloneview yandex disk
  - rcloneview pcloud
  - migración en la nube con rclone gui
tags:
  - RcloneView
  - yandex-disk
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra de Yandex Disk a pCloud — transfiere archivos con RcloneView

> Mueve años de archivos de Yandex Disk a pCloud mediante un trabajo de copia con interfaz gráfica que puedes previsualizar, supervisar y verificar.

Unificar cuentas de almacenamiento suele atascarse en el mismo punto: descargarlo todo a un portátil solo para volver a subirlo. RcloneView conecta Yandex Disk y pCloud lado a lado y copia archivos entre ellos a través de rclone, así que no hay que almacenar nada antes en un disco local. Ambos proveedores inician sesión mediante OAuth en el navegador, por lo que no hace falta generar claves de API.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta Yandex Disk y pCloud como remotos

Abre la pestaña Remote y haz clic en **New Remote**. Elige Yandex Disk, dale al remoto un nombre corto como `yandex` y completa el inicio de sesión en el navegador. Repite el proceso para pCloud con un nombre como `pcloud`. Ambos aparecen en Remote Manager, donde puedes editarlos o eliminarlos más adelante.

Una vez conectados, abre dos paneles de Explorer — uno por remoto — y explora los árboles de carpetas. Haz clic derecho en una carpeta de nivel superior y elige **Get Size** para ver cuántos datos vas a mover. Esa cifra te ayuda a confirmar que tu plan de pCloud tiene espacio antes de copiar el primer archivo.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Yandex Disk and pCloud remotes in RcloneView" class="img-large img-center" />

## Planifica el trabajo de copia y previsualízalo

Para una migración puntual, un trabajo **Copy** es la opción más segura: añade archivos a pCloud sin eliminar nada allí. Usa **Sync** solo si quieres que pCloud refleje exactamente Yandex Disk, incluidas las eliminaciones.

Crea el trabajo en Job Manager. En el Step 1, elige una carpeta de Yandex Disk como origen y una carpeta de pCloud como destino. En el Step 2, plantéate activar la comparación por suma de verificación para que los archivos se comparen por hash más tamaño cuando ambos lados compartan un tipo de hash (Yandex Disk usa MD5, y pCloud ofrece MD5 solo en cuentas de la región de EE. UU.), y mantén el ajuste de reintentos (predeterminado: 3) para conexiones inestables. El Step 3 te permite omitir lo que ya no necesitas — por ejemplo, una antigüedad máxima de archivo o reglas personalizadas que excluyan imágenes `.iso` o carpetas `.git/`.

Antes de ejecutar, usa **Dry Run**. Enumera cada archivo que se copiaría, así que un fotógrafo que mueve 400 GB de archivos RAW puede confirmar que la estructura de carpetas es correcta antes de comprometer horas de transferencia.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud copy from Yandex Disk to pCloud in RcloneView" class="img-large img-center" />

## Ejecuta y supervisa la transferencia

Inicia el trabajo y sigue en la pestaña Transferring el progreso, la velocidad y el número de archivos. Conviene dividir las bibliotecas grandes en varios trabajos — uno por carpeta de nivel superior — para que un fallo de red solo afecte a un lote. Cada ejecución queda registrada en Job History con su estado, tamaño total y número de archivos, lo que te da un registro de auditoría de la mudanza.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Yandex Disk to pCloud transfer in the Transferring tab" class="img-large img-center" />

## Verifica con Folder Compare

Cuando termine el trabajo, abre **Compare** con la carpeta de Yandex Disk a la izquierda y la de pCloud a la derecha. Filtra por archivos "left-only" y "different" para detectar lo que se haya omitido. Copy right envía los rezagados con un clic.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Yandex Disk and pCloud folders after migration" class="img-large img-center" />

## Primeros pasos

RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux.

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade Yandex Disk y pCloud como remotos mediante sus inicios de sesión OAuth en el navegador.
3. Crea un trabajo Copy de Yandex Disk a pCloud y revísalo con Dry Run.
4. Ejecuta el trabajo y confirma el resultado con Folder Compare antes de cerrar tu cuenta de Yandex Disk.

Una migración verificada significa que puedes retirar la cuenta antigua sabiendo que todas las carpetas llegaron a su destino.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de Yandex Disk — sincroniza y haz copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [Gestiona el almacenamiento de pCloud — sincroniza y haz copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Soluciona errores de sincronización de Yandex Disk — diagnostica y resuelve transferencias fallidas con RcloneView](https://rcloneview.com/support/blog/fix-yandex-disk-sync-errors-rcloneview)

<CloudSupportGrid />
