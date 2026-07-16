---
slug: thumbnail-view-image-preview-cloud-rcloneview
title: "Vista de miniaturas — Explora y previsualiza imágenes en la nube visualmente en RcloneView"
authors:
  - tayson
description: "Usa la Vista de miniaturas de RcloneView para explorar y previsualizar visualmente archivos de imagen almacenados en almacenamiento en la nube. Identifica fotos rápidamente y gestiona activos multimedia sin descargarlo todo."
keywords:
  - RcloneView thumbnail view
  - cloud image preview GUI
  - browse cloud photos visually
  - rclone image thumbnail preview
  - cloud storage photo browsing
  - visual file manager cloud
  - RcloneView image gallery
  - cloud storage thumbnail feature
tags:
  - feature
  - photography
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Vista de miniaturas — Explora y previsualiza imágenes en la nube visualmente en RcloneView

> La Vista de miniaturas de RcloneView renderiza los archivos de imagen almacenados en almacenamiento en la nube como una cuadrícula visual, permitiéndote identificar fotos de un vistazo sin necesidad de descargarlas primero.

La mayoría de las herramientas GUI de almacenamiento en la nube muestran los archivos como listas de solo texto: nombre de archivo, tamaño, fecha. Esto funciona bien para documentos y código, pero resulta frustrante para fotógrafos, diseñadores y equipos de medios que necesitan identificar visualmente imágenes específicas en una carpeta en la nube que contiene cientos o miles de archivos. El modo Vista de miniaturas de RcloneView renderiza las imágenes almacenadas en almacenamiento en la nube como una cuadrícula de vista previa directamente en el panel Explorer, haciendo que la gestión visual de archivos para bibliotecas de fotos y activos multimedia sea considerablemente más rápida.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cambiar a la Vista de miniaturas

En cualquier panel Explorer, busca el selector de modo de vista en la barra de herramientas del panel. RcloneView ofrece tres modos de vista:

- **Vista de lista** — columnas detalladas (nombre, tamaño, fecha, tipo)
- **Vista de árbol** — navegación por jerarquía de carpetas
- **Vista de miniaturas** — cuadrícula de vista previa de imágenes

Haz clic en el icono de Vista de miniaturas para activarla en el panel actual. RcloneView obtiene los datos de vista previa de las imágenes en la carpeta actual y las renderiza como una cuadrícula. Esto funciona con formatos de imagen comunes: JPEG, PNG, GIF, WebP y otros compatibles con la API de miniaturas del proveedor de la nube correspondiente.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Switching to Thumbnail View in RcloneView Explorer panel" class="img-large img-center" />

## Casos de uso para fotógrafos y diseñadores

**Depurar una biblioteca de fotos:** Un fotógrafo de bodas con 3.000 pares RAW+JPEG almacenados en Google Drive puede cambiar a la Vista de miniaturas para escanear visualmente los JPEG, identificar las selecciones y arrastrarlas a una carpeta de entrega independiente, todo sin descargar los archivos ni abrir Lightroom.

**Revisar activos entregados por un cliente:** Un diseñador gráfico que recibe activos de imagen de un cliente a través de Dropbox puede previsualizar la cuadrícula de miniaturas para confirmar rápidamente que llegaron los archivos correctos antes de empezar a trabajar.

**Gestionar contenido de redes sociales:** Un equipo de marketing que almacena imágenes aprobadas para redes sociales en un bucket de S3 puede usar la Vista de miniaturas para explorar y seleccionar imágenes para las publicaciones de la semana sin salir de RcloneView.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Browsing a photo library in cloud storage with RcloneView Thumbnail View" class="img-large img-center" />

## Vista de miniaturas con diseño multipanel

Combina la Vista de miniaturas con el diseño multipanel de RcloneView para lograr un flujo de trabajo visual potente. Abre dos paneles: Vista de miniaturas a la izquierda mostrando tu carpeta de origen (por ejemplo, `dropbox:/Shoots/Raw/`), y Vista de lista a la derecha mostrando tu carpeta de entrega (por ejemplo, `google-drive:/Client Deliverables/`). Selecciona visualmente las imágenes en la cuadrícula de miniaturas y arrástralas directamente al panel de destino: un flujo de trabajo rápido y visual de selección y entrega, todo dentro del almacenamiento en la nube.

Usa Ctrl+Clic para seleccionar varias imágenes en la Vista de miniaturas y, luego, haz clic derecho para operaciones masivas: copiar, mover, descargar u obtener un enlace público. Todas las operaciones de archivo estándar disponibles en la Vista de lista funcionan de la misma manera en la Vista de miniaturas.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Multi-panel workflow with Thumbnail View for cloud image management in RcloneView" class="img-large img-center" />

## Notas de compatibilidad por proveedor

La Vista de miniaturas depende de la capacidad del proveedor de la nube para servir vistas previas de imágenes a través de la API. Google Drive, Dropbox y OneDrive proporcionan URLs de miniaturas de forma nativa, lo que hace que el renderizado de vistas previas sea rápido. Los proveedores compatibles con S3 (Amazon S3, Backblaze B2, Wasabi, Cloudflare R2) sirven datos de imagen sin procesar sin una API de miniaturas dedicada; las vistas previas se generan a partir de la imagen original, lo que puede ser más lento en archivos grandes.

Para obtener el mejor rendimiento en la Vista de miniaturas, explora carpetas con una cantidad razonable de imágenes a la vez (50–200 por página) en lugar de intentar renderizar miles de miniaturas simultáneamente.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Conecta tu proveedor de almacenamiento de fotos (Google Drive, Dropbox, S3, etc.) mediante New Remote.
3. Navega hasta tu carpeta de imágenes en el panel Explorer y haz clic en el icono de Vista de miniaturas.
4. Usa Ctrl+Clic para seleccionar imágenes y arrastra y suelta para moverlas o copiarlas entre paneles.

La Vista de miniaturas convierte a RcloneView en un gestor de archivos visual en la nube para flujos de trabajo multimedia, ahorrando tiempo a cualquiera que trabaje a diario con imágenes almacenadas en almacenamiento en la nube.

---

**Guías relacionadas:**

- [Ordena tu biblioteca de fotos en la nube con RcloneView](https://rcloneview.com/support/blog/declutter-cloud-photo-library-rcloneview)
- [Entrega multicloud para fotógrafos con RcloneView](https://rcloneview.com/support/blog/photographer-multi-cloud-delivery-with-rcloneview)
- [Gestiona el almacenamiento de Google Photos — Sincronización y copia de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-google-photos-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
