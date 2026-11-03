---
slug: migrate-box-to-koofr-rcloneview
title: "Migrar de Box a Koofr — transfiera archivos con RcloneView"
authors:
  - jay
description: "Migre de Box a Koofr con RcloneView: conecte ambos remotos, simule la transferencia con Dry Run, copie de nube a nube y verifique los resultados con Folder Compare."
keywords:
  - migrar de Box a Koofr
  - transferencia de Box a Koofr
  - migración Box Koofr
  - RcloneView Box
  - RcloneView Koofr
  - transferencia de nube a nube
  - mover archivos desde Box
  - Koofr almacenamiento en la nube europeo
  - migración con rclone GUI
  - filtro Box Docs
tags:
  - RcloneView
  - box
  - koofr
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de Box a Koofr — transfiera archivos con RcloneView

> Mueva un espacio de trabajo de Box a Koofr sin descargar nada primero a su propio disco.

Los equipos dejan Box por muchos motivos: un proyecto terminó, venció un contrato o se prefiere un proveedor de almacenamiento europeo. Koofr es un destino natural, pero mover años de carpetas a mano es lento y propenso a errores. RcloneView conecta ambos servicios en una sola ventana y ejecuta la copia de nube a nube, con un Dry Run y un paso de comparación para confirmar que no se pasó nada por alto. RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecte Box y Koofr como remotos

Abra la pestaña Remote y elija New Remote. Box inicia sesión mediante OAuth: se abre el navegador, usted aprueba el acceso y RcloneView se conecta automáticamente. Si va a migrar una cuenta de empresa, Box for Business necesita el ajuste `box_sub_type = enterprise` en la configuración del remoto.

Añada Koofr como segundo remoto de la misma manera. Cuando ambos aparezcan en Remote Manager, ábralos uno al lado del otro en dos paneles Explorer para explorar el origen y el destino antes de mover un solo archivo.

<img src="/support/images/en/blog/new-remote.png" alt="Adición de remotos de Box y Koofr en RcloneView" class="img-large img-center" />

## Planifique la copia con filtros y un Dry Run

Una cuenta de Box suele contener más que los archivos que desea conservar. El paso 3 del asistente de sincronización permite establecer un tamaño máximo de archivo, una antigüedad máxima de archivo o un límite de profundidad de carpetas. También hay un filtro predefinido de Box Docs, además de reglas personalizadas como excluir carpetas `.git/` o archivos `.iso`.

Antes de ejecutar nada, use Dry Run. Muestra los archivos que se copiarían y eliminarían sin modificar ninguno de los lados. Para una migración, elija un trabajo Copy en lugar de una sincronización de tipo espejo, de modo que no se elimine nada en Koofr si el destino ya contiene datos.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de nube a nube de Box a Koofr en RcloneView" class="img-large img-center" />

## Ejecute la transferencia y siga el progreso

Inicie el trabajo y sígalo en la pestaña Transferring: el progreso, la velocidad y el número de archivos se muestran en directo. Para una biblioteca grande, aumente el número de transferencias de archivos en el paso 2, pero mantenga moderado el número de equality checkers si alguno de los backends responde con lentitud. "Retry entire sync if fails" tiene un valor predeterminado de 3, lo que ayuda con los errores de red transitorios.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Supervisión de una transferencia de Box a Koofr en la pestaña Transferring" class="img-large img-center" />

## Verifique con Folder Compare

Cuando termine el trabajo, abra Compare con Box a la izquierda y Koofr a la derecha. Los filtros de archivos solo a la izquierda, solo a la derecha y diferentes muestran exactamente lo que falta. Use la acción copy-right para transferir lo que haya quedado pendiente. Job History conserva el estado, el tamaño y el número de archivos de cada ejecución como registro de la migración.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparación de las carpetas de Box y Koofr tras la migración" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añada Box (OAuth) y Koofr como remotos.
3. Cree un trabajo Copy con filtros y luego ejecute un Dry Run.
4. Ejecute el trabajo y después confirme el resultado con Folder Compare.

No toque la cuenta de Box hasta que Compare muestre que ambos lados coinciden.

---

**Guías relacionadas:**

- [Gestione el almacenamiento de Box — sincronice y respalde archivos con RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Gestione el almacenamiento de Koofr — sincronice y respalde archivos con RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Migre de Box a Google Drive con RcloneView](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)

<CloudSupportGrid />
