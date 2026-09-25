---
slug: get-public-link-share-files-rcloneview
title: "Obtener enlace público — Comparte archivos en la nube al instante con RcloneView"
authors:
  - kai
description: "Aprende a generar enlaces públicos compartibles para archivos en la nube directamente desde el explorador de archivos de RcloneView, sin necesidad de abrir el navegador."
keywords:
  - obtener enlace público
  - compartir archivos en la nube
  - enlace compartible almacenamiento en la nube
  - RcloneView enlace público
  - enlace para compartir google drive
  - enlace para compartir dropbox
  - enlace para compartir box
  - compartir archivos en la nube
  - enlace público rclone
  - enlace para compartir onedrive
tags:
  - RcloneView
  - feature
  - file-management
  - cloud-storage
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Obtener enlace público — Comparte archivos en la nube al instante con RcloneView

> Sáltate el navegador: haz clic derecho en cualquier archivo de RcloneView y genera un enlace público compartible en segundos.

Compartir un solo archivo desde la nube suele implicar abrir una pestaña del navegador, iniciar sesión en la consola web del proveedor, buscar el botón de compartir y copiar un enlace que puede o no tener los permisos que esperas. RcloneView reduce todo ese flujo de trabajo a un único elemento del menú contextual de clic derecho. Si gestionas archivos de varios proveedores desde el mismo explorador, esa coherencia importa más de lo que parece — dejas de cambiar de contexto entre cinco interfaces web distintas solo para enviarle un archivo a alguien.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cómo funciona Obtener enlace público

El comando **Obtener enlace público (Get Public Link)** se encuentra en el mismo menú contextual de clic derecho que Copy, Cut, Rename y Download. Selecciona uno o más archivos en la lista de archivos de cualquier remoto conectado, haz clic derecho y elige Get Public Link. RcloneView reenvía la solicitud al backend de rclone subyacente, que le pide a la API del proveedor que genere un enlace con los permisos que ese backend soporta — de solo lectura, con caducidad o protegido con contraseña, según lo que permita el proveedor.

Como este es un comportamiento específico de cada proveedor, el formato exacto del enlace y las opciones varían. Un enlace de Dropbox se comporta de forma distinta a uno de Box, y no todos los tipos de remoto admiten enlaces públicos — los remotos basados en protocolos, como los servidores SFTP o FTP simples, generalmente no tienen un concepto de "compartir" como sí lo tienen las unidades de almacenamiento en la nube para consumidores. RcloneView muestra exactamente lo que el backend soporta realmente, en lugar de simular un botón universal que falla silenciosamente en remotos no compatibles.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote explorer with right-click context menu open" class="img-large img-center" />

## Dónde encaja esto en el flujo de trabajo diario

Los equipos que manejan entregables para clientes, materiales de marketing o solicitudes puntuales de documentos son los que más se benefician de poder generar el enlace en la misma ventana donde ya están los archivos. En lugar de recordar en qué proveedor vive un archivo y abrir por separado el sitio de ese proveedor, navegas hasta él en el panel Explorer de RcloneView y generas el enlace ahí mismo. A diferencia de las herramientas que solo montan unidades, RcloneView también sincroniza y compara carpetas — con la licencia FREE —, de modo que la misma ventana que hoy comparte un enlace puede mantener esa carpeta respaldada según un horario mañana.

Esto es especialmente útil cuando los recursos de un proyecto están repartidos entre varios proveedores — por ejemplo, exportaciones de fotos RAW en Backblaze B2 y pruebas para clientes en Dropbox. No necesitas dos flujos de trabajo; necesitas un solo explorador con dos pestañas abiertas.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud to cloud file transfer panel in RcloneView" class="img-large img-center" />

## Combinar enlaces públicos con la organización de carpetas

Antes de compartir, conviene usar la vista de lista de archivos de RcloneView para confirmar exactamente qué estás exponiendo. Cambia a List View para revisar tamaños de archivo y fechas de modificación, o a Thumbnail View si compartes imágenes y quieres una comprobación visual rápida de que seleccionaste el archivo correcto. Get Public Link también funciona con varios archivos seleccionados a la vez, así que puedes generar varios enlaces de una sola vez en lugar de repetir el clic derecho cada vez.

Si el enlace necesita permanecer activo para una recurrencia programada —por ejemplo, un informe semanal que un cliente siempre descarga desde la misma URL—, combínalo con un trabajo Sync que mantenga actualizado el archivo subyacente en esa misma ruta, de modo que el enlace en sí nunca tenga que volver a generarse.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing scheduled file updates" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Conecta el remoto que contiene el archivo que quieres compartir mediante New Remote.
3. Navega hasta el archivo en el panel Explorer, haz clic derecho y selecciona Get Public Link.
4. Copia el enlace generado y envíalo — sin necesidad de iniciar sesión por separado en el navegador.

Una vez que esto forma parte de tu rutina, compartir un archivo en la nube requiere los mismos tres clics, sin importar en cuál de los más de 90 proveedores compatibles se encuentre.

---

**Guías relacionadas:**

- [Solucionar errores de enlace público no compatible — Comparte archivos correctamente con RcloneView](https://rcloneview.com/support/blog/fix-public-link-not-supported-errors-rcloneview)
- [Obtener tamaño — Calcula al instante el uso de almacenamiento en la nube con RcloneView](https://rcloneview.com/support/blog/get-size-calculate-cloud-storage-usage-rcloneview)
- [Vista de miniaturas — Explora y previsualiza visualmente imágenes en la nube con RcloneView](https://rcloneview.com/support/blog/thumbnail-view-image-preview-cloud-rcloneview)

<CloudSupportGrid />
