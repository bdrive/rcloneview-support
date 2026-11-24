---
slug: migrate-box-to-dropbox-rcloneview
title: "Migrar de Box a Dropbox — Transfiere archivos con RcloneView"
authors:
  - tayson
description: "Migra de Box a Dropbox con RcloneView. Conecta ambos remotos con OAuth, previsualiza con Dry Run, copia carpetas de nube a nube y verifica con Folder Compare."
keywords:
  - migrar Box a Dropbox
  - migración de Box a Dropbox
  - transferir archivos de Box a Dropbox
  - transferencia de nube a nube Box Dropbox
  - mover carpetas de Box a Dropbox
  - migración a Dropbox for Business
  - RcloneView Box Dropbox
  - GUI de rclone Box a Dropbox
  - herramienta de migración en la nube
tags:
  - RcloneView
  - box
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de Box a Dropbox — Transfiere archivos con RcloneView

> Mueve un árbol de carpetas de Box a Dropbox de nube a nube, previsualiza el alcance antes de cambiar nada y confirma el resultado lado a lado.

Los equipos pasan de Box a Dropbox por muchas razones: una fusión, un nuevo requisito de un cliente o un departamento creativo que ya trabaja en Dropbox. Lo difícil es mover años de carpetas compartidas sin perder nada por el camino. RcloneView se conecta a ambos servicios como remotos y ejecuta la copia mediante rclone, de modo que planificas, ejecutas y verificas la migración desde una sola ventana en lugar de descargarlo todo primero a un portátil.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta Box y Dropbox como remotos

Ambos proveedores usan OAuth, así que no hay claves de API que copiar. Abre **Remote tab > New Remote**, elige Box e inicia sesión cuando se abra el navegador. Repite el proceso con Dropbox. Si alguno de los lados es una cuenta empresarial, configura la opción correspondiente durante la configuración: `box_sub_type = enterprise` para Box for Business y `dropbox_business = true` para Dropbox for Business.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and Dropbox remotes in RcloneView" class="img-large img-center" />

Abre Box en el panel izquierdo de Explorer y Dropbox en el derecho. Explorar ambos lado a lado confirma que ves las carpetas esperadas y que la carpeta de destino existe antes de crear un trabajo. Haz clic derecho en una carpeta de Box y elige **Get Size** para estimar cuántos datos vas a mover.

## Crea un trabajo Copy y previsualízalo

Para una migración, un trabajo **Copy** es la opción prudente: añade archivos a Dropbox y nunca elimina nada en el destino. Créalo desde **Home tab > Sync** o el Job Manager, elige la carpeta de Box como origen y una carpeta de Dropbox como destino, y dale un nombre claro como `box-marketing-to-dropbox`.

En Advanced Settings, deja desactivada la suma de verificación para esta pareja. Box y Dropbox usan tipos de hash diferentes, por lo que rclone compara los archivos por tamaño y fecha de modificación. Si Dropbox empieza a limitar la tasa de solicitudes, reduce el número de transferencias de archivos en lugar de aumentarlo. En el paso Filtering, el filtro predefinido **Box Docs** te permite tratar por separado los documentos nativos de Box, y las reglas personalizadas pueden omitir las carpetas que hayas decidido retirar.

Ejecuta primero un **Dry Run**. Muestra cada archivo que se copiaría sin transferir nada, algo útil cuando una agencia mueve 60.000 recursos de clientes y quiere confirmar el alcance con las partes interesadas.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Box to Dropbox in RcloneView" class="img-large img-center" />

## Ejecuta, supervisa y conserva un registro de auditoría

Inicia el trabajo y sigue el progreso, la velocidad y el número de archivos en la pestaña **Transferring**. Dividir una migración grande en un trabajo por carpeta de nivel superior evita que un solo error frene todo lo demás. Cada ejecución queda en **Job History** con su estado, tamaño total y número de archivos, lo que sirve también como registro para quien apruebe la migración.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Box to Dropbox migration runs" class="img-large img-center" />

## Verifica con Folder Compare

Cuando terminen los trabajos, abre **Folder Compare** con el origen de Box y el destino de Dropbox. Filtra los archivos que solo están a la izquierda para encontrar lo que no llegó y usa Copy right para completar lo que falte. Durante un periodo de transición en el que todavía haya personas guardando en Box, vuelve a ejecutar el mismo trabajo Copy para recoger los archivos nuevos antes del cambio definitivo.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying Box and Dropbox contents" class="img-large img-center" />

## Primeros pasos

A diferencia de las herramientas que solo montan, RcloneView también sincroniza y compara carpetas, con la FREE License.

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade Box y Dropbox como remotos mediante OAuth, activando las opciones empresariales si es necesario.
3. Crea un trabajo Copy de Box a Dropbox y revísalo con Dry Run.
4. Ejecuta el trabajo y confirma el resultado en Folder Compare y Job History.

Una migración previsualizada y verificada permite a tu equipo pasarse a Dropbox sin preguntarse qué carpeta se quedó atrás.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de Box — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Gestiona el almacenamiento de Dropbox — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Sincroniza Dropbox con Box con RcloneView](https://rcloneview.com/support/blog/sync-dropbox-to-box-rcloneview)

<CloudSupportGrid />
