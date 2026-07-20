---
slug: rclone-chunker-split-large-files-cloud-rcloneview
title: "Remoto Chunker de Rclone — Divide archivos grandes para cualquier almacenamiento en la nube en RcloneView"
authors:
  - tayson
description: "Usa el remoto virtual Chunker de rclone en RcloneView para dividir archivos grandes y subirlos a proveedores de nube con límites estrictos de tamaño por archivo."
keywords:
  - rclone chunker
  - dividir archivos grandes en la nube
  - remoto chunker RcloneView
  - límite de subida de archivos grandes
  - solución al límite de tamaño de archivo en la nube
  - guía de rclone chunker
  - subida de archivos divididos a la nube
  - remoto virtual chunker
  - remoto virtual rclone
  - almacenamiento en la nube para archivos grandes
tags:
  - RcloneView
  - feature
  - cloud-storage
  - cloud-sync
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Remoto Chunker de Rclone — Divide archivos grandes para cualquier almacenamiento en la nube en RcloneView

> Cuando el límite de tamaño por archivo de un proveedor de nube bloquea tu subida, el remoto virtual Chunker de rclone divide los archivos de forma transparente — RcloneView lo configura y lo usa sin necesidad de CLI.

Muchos proveedores de almacenamiento en la nube imponen límites estrictos de tamaño por archivo — Dropbox limita las subidas a 50 GB por archivo, y algunos servicios gratuitos o de nivel económico imponen límites de 5-10 GB. Para usuarios que almacenan volcados de bases de datos, exportaciones de video sin comprimir o archivos comprimidos grandes que superan estos límites, el remoto virtual **Chunker** de rclone ofrece la solución: divide los archivos en fragmentos más pequeños antes de la subida y los reensambla de forma transparente al descargarlos. RcloneView configura y usa Chunker a través de su interfaz estándar de gestión de remotos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ¿Qué es el remoto Chunker?

Chunker es uno de los **envoltorios de remotos virtuales** de rclone — una capa que modifica cómo se gestionan los archivos antes de que lleguen al backend de nube real. A diferencia de los remotos estándar que se conectan directamente a un proveedor de nube, Chunker intercepta los archivos que superan un límite de tamaño configurado y los divide en varias piezas antes de la subida. Cada fragmento se almacena como un archivo independiente con una convención de nomenclatura que rclone reconoce para reensamblarlos de forma transparente cuando lees o descargas a través del mismo remoto Chunker.

<img src="/support/images/en/blog/new-remote.png" alt="Creando un remoto virtual Chunker en RcloneView" class="img-large img-center" />

En RcloneView, los remotos virtuales como Chunker se crean a través del mismo flujo de trabajo **pestaña Remoto > Nuevo Remoto** que los remotos estándar — seleccionas Chunker como proveedor, especificas el remoto base y configuras el tamaño de fragmento. El resultado aparece en el explorador junto a tus otros remotos, con la fragmentación transparente e invisible en tu flujo de trabajo.

## Creación de un remoto Chunker en RcloneView

1. Primero, asegúrate de que tu remoto base ya esté configurado (por ejemplo, tu remoto de Dropbox o OneDrive).
2. Ve a **pestaña Remoto > Nuevo Remoto** y selecciona **Chunker** en la sección de remotos virtuales.
3. Especifica el **remoto subyacente** (tu remoto base preconfigurado) y un subdirectorio opcional dentro de él.
4. Configura el **tamaño de fragmento** por debajo del límite de tamaño de archivo de tu proveedor — por ejemplo, 4 GB para la mayoría de los proveedores, o 45 GB para Dropbox para mantenerte por debajo del límite de 50 GB.
5. Guarda el remoto Chunker — ahora aparece en el explorador como cualquier otro remoto.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Uso de un remoto Chunker para subidas de archivos grandes en RcloneView" class="img-large img-center" />

Cuando arrastras un archivo de video de 30 GB al remoto Chunker, RcloneView lo sube como varios fragmentos (por ejemplo, ocho archivos de 4 GB) a la nube subyacente. Leer el archivo de vuelta a través del mismo remoto Chunker lo reensambla de forma transparente — tu aplicación ve un único archivo continuo.

## Casos de uso prácticos

Un ingeniero de datos que archiva volcados de bases de datos de 20 GB cada noche en un servicio de nube con un límite de archivo de 10 GB crea un remoto Chunker que envuelve ese servicio con fragmentos de 8 GB. El trabajo de sincronización del Job Manager se ejecuta de la misma manera que cualquier otra transferencia en la nube — la fragmentación es completamente transparente para la configuración del trabajo.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Programación de subidas de archivos grandes mediante el remoto Chunker en RcloneView" class="img-large img-center" />

**Combinar Chunker con Crypt** crea una pila avanzada de remotos virtuales: envuelve primero tu remoto base con **Crypt** (para cifrado de extremo a extremo), y luego envuelve el remoto Crypt con **Chunker** (para la división). El resultado: los fragmentos se cifran antes de la subida, y el proveedor solo ve blobs cifrados opacos divididos en piezas de tamaño limitado. Este es un excelente enfoque para archivos grandes sensibles en cualquier proveedor de nube — RcloneView gestiona ambas capas a través de su gestión estándar de remotos, sin necesidad de CLI.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega tu remoto de nube base (el proveedor con límites de tamaño de archivo) como remoto estándar.
3. Ve a **pestaña Remoto > Nuevo Remoto**, selecciona **Chunker**, y especifica tu remoto base y el tamaño de fragmento.
4. Transfiere archivos grandes a través del remoto Chunker — la división y el reensamblaje ocurren de forma transparente.

Chunker desbloquea el almacenamiento en la nube de archivos grandes en proveedores que de otro modo rechazarían la subida — un potente remoto virtual para flujos de trabajo intensivos en datos donde los límites de tamaño de archivo bloquearían las operaciones.

---

**Guías relacionadas:**

- [Remotos virtuales — Combine, Union, Alias con RcloneView](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Configuración del remoto Crypt sin CLI con RcloneView](https://rcloneview.com/support/blog/zero-cli-crypt-remote-rcloneview)
- [Soluciona los errores de límite de tamaño de archivo en la nube con RcloneView](https://rcloneview.com/support/blog/fix-cloud-file-size-limit-errors-rcloneview)

<CloudSupportGrid />
