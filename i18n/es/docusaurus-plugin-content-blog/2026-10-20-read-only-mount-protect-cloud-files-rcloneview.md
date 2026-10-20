---
slug: read-only-mount-protect-cloud-files-rcloneview
title: "Montaje de solo lectura: protege tus archivos en la nube de cambios accidentales con RcloneView"
authors:
  - casey
description: "Usa la opción Read only del montaje de RcloneView para explorar el almacenamiento en la nube desde el explorador de archivos sin arriesgarte a ediciones o eliminaciones accidentales."
keywords:
  - montaje de solo lectura
  - montar almacenamiento en la nube en solo lectura
  - proteger archivos en la nube
  - montaje de RcloneView
  - rclone montaje de solo lectura
  - evitar borrado en unidad de la nube
  - mount manager
  - unidad virtual
tags:
  - RcloneView
  - feature
  - mount
  - cloud-storage
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Montaje de solo lectura: protege tus archivos en la nube de cambios accidentales con RcloneView

> Monta un remoto como unidad local que puede explorarse y copiarse, pero nunca modificarse.

Una unidad de la nube montada se comporta como cualquier otro disco, lo que significa que una eliminación accidental, un arrastre en la dirección equivocada o una aplicación que reescribe archivos pueden cambiar tus datos en la nube. Cuando solo quieres leer, por ejemplo para revisar un archivo histórico o abrir archivos de referencia, la unidad en la que no se puede escribir es la opción de menor riesgo. Los ajustes de montaje de RcloneView incluyen la opción Read only precisamente para esto. RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana en Windows, macOS y Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cuándo tiene sentido el modo de solo lectura

Piensa en un equipo de cumplimiento normativo que guarda en un bucket los expedientes de casos cerrados. El personal necesita abrir y copiar documentos, pero nadie debería poder alterarlos. Otro ejemplo es un destino de copias de seguridad compartido que quieres inspeccionar desde el escritorio sin poner en riesgo la propia copia.

En ambos casos, un montaje de solo lectura permite usar herramientas habituales como el explorador de archivos, reproductores multimedia y visores, mientras que los intentos de escritura se rechazan. No sustituye los permisos del servicio de almacenamiento, pero añade una salvaguarda en tu propio equipo.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Montar una carpeta remota desde el explorador de RcloneView" class="img-large img-center" />

## Activar Read Only en Mount Manager

Abre Mount Manager desde la pestaña Remote y elige New mount, o empieza desde el icono Mount en un panel del Explorer. Selecciona el remoto y el subdirectorio, y marca **Read only** en las opciones. En Windows puedes elegir una letra de unidad, y en macOS y Linux indicas una ruta de montaje local. Elige Save and mount para conectar la unidad de inmediato.

En el mismo cuadro de diálogo hay otras opciones: nombre del volumen, modo de caché (off, minimal, writes por defecto o full) y, en Windows, la visualización como unidad de red. Como no se escribe nada, el modo de caché predeterminado rara vez importa en el uso de solo lectura, aunque full puede acelerar las lecturas repetidas de los mismos archivos.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager con opciones de montaje en RcloneView" class="img-large img-center" />

## Cambiar o eliminar el montaje

Edit y Delete están deshabilitados mientras un montaje está activo, así que primero desmóntalo desde Mount Manager o desde el menú de la bandeja del sistema. Para hacer que una unidad sea escribible más adelante, desmóntala, edita la entrada, desmarca Read only y vuelve a montarla. Puedes mantener dos entradas para el mismo remoto: una de solo lectura para explorar y otra escribible para trabajo deliberado.

Con una licencia PLUS, Auto mount puede conectar tus unidades al iniciar.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Copiar archivos entre remotos en RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade el remoto que quieres explorar y abre Mount Manager desde la pestaña Remote.
3. Crea un nuevo montaje, selecciona el remoto y la carpeta, y marca Read only.
4. Elige Save and mount y abre la unidad desde tu explorador de archivos.

El acceso de solo lectura te permite abrirlo todo sin arriesgarte a cambios.

---

**Guías relacionadas:**

- [Montaje automático al iniciar](https://rcloneview.com/support/blog/auto-mount-startup-rcloneview)
- [Caché VFS para el rendimiento del montaje](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [Solucionar conflictos de letra de unidad de montaje en Windows](https://rcloneview.com/support/blog/fix-mount-drive-letter-conflict-windows-rcloneview)

<CloudSupportGrid />
