---
slug: migrate-proton-drive-to-wasabi-rcloneview
title: "Migrar de Proton Drive a Wasabi — Transfiera archivos con RcloneView"
authors:
  - kai
description: "Mueva archivos cifrados de Proton Drive a almacenamiento de objetos Wasabi con la transferencia directa de nube a nube de RcloneView, sin necesidad de descarga local."
keywords:
  - migrar Proton Drive a Wasabi
  - transferencia de Proton Drive a Wasabi
  - migración de nube a nube
  - copia de seguridad de almacenamiento de objetos Wasabi
  - copia de seguridad de Proton Drive
  - transferir archivos de Proton Drive
  - migración RcloneView
  - migración de almacenamiento en la nube cifrado
tags:
  - RcloneView
  - proton-drive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de Proton Drive a Wasabi — Transfiera archivos con RcloneView

> Mueva archivos directamente de Proton Drive a almacenamiento de objetos Wasabi sin pasar antes por un disco local.

Proton Drive está diseñado para almacenamiento personal centrado en la privacidad, pero no está pensado para las cargas de trabajo que Wasabi maneja bien — grandes bibliotecas multimedia, copias de seguridad de aplicaciones o conjuntos de datos que necesitan acceso compatible con S3 desde otras herramientas. Cuando un usuario supera el caso de uso de Proton Drive, o simplemente quiere una segunda copia más económica a largo plazo, RcloneView mueve los archivos directamente entre ambos servicios, conectándose a los dos remotos a la vez en lugar de descargar todo localmente primero.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar ambos remotos

Proton Drive se configura en RcloneView con un correo electrónico y una contraseña (más 2FA opcional), mientras que Wasabi se agrega como remoto compatible con S3 usando un Access Key ID, una Secret Access Key y el endpoint regional correspondiente. Ambos remotos aparecen como pestañas en el explorador, de modo que un usuario puede examinar una carpeta de Proton Drive en un panel y un bucket de Wasabi en el otro antes de iniciar cualquier transferencia.

<img src="/support/images/en/blog/new-remote.png" alt="Configuración de los remotos de Proton Drive y Wasabi en RcloneView" class="img-large img-center" />

RcloneView también conecta S3, Azure y Backblaze B2 con acceso completo de lectura/escritura en la licencia FREE, por lo que configurar el lado de Wasabi de esta migración no requiere un nivel de pago.

## Ejecutar la transferencia de nube a nube

Con ambos remotos abiertos, arrastrar una carpeta del panel de Proton Drive al panel de Wasabi activa una copia directa — los datos fluyen de Proton Drive a Wasabi a través de RcloneView, sin tocar nunca el disco local. Para migraciones más grandes, el asistente de sincronización es la mejor herramienta: admite una sincronización unidireccional adecuada desde el origen de Proton Drive hacia un bucket de destino de Wasabi, con un número configurable de transferencias simultáneas para aprovechar al máximo el ancho de banda disponible.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de archivos de nube a nube de Proton Drive a Wasabi en RcloneView" class="img-large img-center" />

Vale la pena ejecutar primero el modo Dry Run en cualquier migración grande — enumera exactamente qué archivos se copiarán antes de que se mueva algo realmente, detectando errores de filtro o estructuras de carpetas inesperadas desde el principio.

## Confirmar una migración completa

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Transferencia de archivos mediante arrastrar y soltar a un remoto Wasabi en RcloneView" class="img-large img-center" />

Una vez que finaliza el trabajo de sincronización, la pestaña de transferencias en la vista de información inferior muestra el total de archivos movidos, la velocidad de transferencia y cualquier error encontrado durante el trabajo. En migraciones ejecutadas como un trabajo guardado en lugar de una transferencia única, el historial de trabajos mantiene un registro permanente — hora de inicio, duración, tamaño total y estado de finalización — de modo que hay un registro claro que confirma que cada archivo llegó a Wasabi antes de retirar la copia de Proton Drive.

## Cómo empezar

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agregue su remoto de Proton Drive usando el correo electrónico y la contraseña de su cuenta.
3. Agregue su remoto de Wasabi con su Access Key, Secret Key y endpoint regional.
4. Ejecute primero un Dry Run, luego ejecute la sincronización y confirme la transferencia en el historial de trabajos.

Retirar una carpeta de Proton Drive resulta mucho menos estresante cuando existe un registro verificado que muestra que cada archivo ya llegó de forma segura a Wasabi.

---

**Guías relacionadas:**

- [Administre Proton Drive — Sincronice y respalde archivos con RcloneView](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Administre el almacenamiento Wasabi — Sincronice y respalde archivos con RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Migrar de Proton Drive a Backblaze B2 — Transfiera archivos con RcloneView](https://rcloneview.com/support/blog/migrate-proton-drive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
