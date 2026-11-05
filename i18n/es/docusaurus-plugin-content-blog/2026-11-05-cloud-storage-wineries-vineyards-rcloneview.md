---
slug: cloud-storage-wineries-vineyards-rcloneview
title: "Almacenamiento en la nube para bodegas y viñedos — Protege los registros de producción con RcloneView"
authors:
  - casey
description: "Las bodegas y los viñedos pueden hacer copias de seguridad de diarios de vendimia, arte de etiquetas y archivos de cumplimiento en varias nubes con RcloneView: sincronización programada, cifrado y Folder Compare."
keywords:
  - almacenamiento en la nube para bodegas
  - copia de seguridad de archivos de viñedo
  - copia de seguridad de registros de bodega
  - copia de seguridad de arte de etiquetas
  - copia de seguridad cifrada en la nube
  - sincronización programada en la nube
  - copia de seguridad multinube
  - RcloneView
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Almacenamiento en la nube para bodegas y viñedos — Protege los registros de producción con RcloneView

> Mantén los diarios de vendimia, el arte de las etiquetas y la documentación de cumplimiento a salvo en más de un lugar.

Una bodega pequeña genera una mezcla sorprendente de archivos: hojas de cálculo de vendimia y fermentación, arte de etiquetas y envases en alta resolución, fotos de la sala de catas, contratos con distribuidores y trámites regulatorios. A menudo viven en un solo PC de oficina y una única cuenta en la nube. RcloneView ofrece a una bodega una forma visual de copiar esos datos a una segunda y una tercera ubicación, y de comprobar que las copias coinciden. RcloneView puede montar Y sincronizar más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta los lugares donde viven tus archivos

Abre la pestaña Remote y añade lo que ya usas: Google Drive u OneDrive para documentos de oficina, un NAS en la oficina de la bodega y un bucket compatible con S3, como Backblaze B2 o Wasabi, para una copia externa. Las cuentas en la nube inician sesión a través del navegador; los buckets usan una clave de acceso. Un NAS Synology puede detectarse automáticamente en la red local.

Coloca dos remotos uno junto al otro en los paneles del Explorer y arrastra una carpeta de un lado a otro para copiarla entre ellos.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir remotos de nube y NAS para una bodega en RcloneView" class="img-large img-center" />

## Copia de seguridad programada del arte y los registros

El arte de las etiquetas y los registros de embotellado cambian en torno a los lanzamientos de cada añada y luego permanecen intactos. Crea un trabajo de sincronización desde el recurso compartido de la oficina a tu bucket y usa primero Dry Run para previsualizar lo que se copiará. Los filtros ayudan aquí: excluye archivos temporales o establece una antigüedad máxima de archivo para centrarte en la añada actual.

La sincronización programada usa temporización al estilo crontab y es una función PLUS. Con la licencia FREE aún puedes ejecutar trabajos manualmente, lo que funciona bien para una copia después de cada vendimia o embotellado.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Programar un trabajo de copia de seguridad de bodega en RcloneView" class="img-large img-center" />

## Cifra los datos de cumplimiento y de clientes

Los contratos con distribuidores, los documentos de licencias y las listas de clientes del club de vinos merecen algo más que una copia simple. Un remoto Crypt cifra los nombres de archivo, los nombres de carpeta y los contenidos antes de que lleguen a la nube, de modo que el proveedor solo almacena texto cifrado. Dirige un trabajo de copia de seguridad al remoto Crypt y el resto del flujo de trabajo sigue igual. Guarda la contraseña en un lugar distinto de la propia copia de seguridad.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Copiar archivos de bodega a un remoto de nube cifrado" class="img-large img-center" />

## Verifica las copias y mantén un registro

Folder Compare muestra los archivos solo a la izquierda, solo a la derecha y diferentes entre el recurso compartido de la oficina y la copia de seguridad, para que puedas confirmar que las carpetas de añadas coinciden. Job History enumera cada ejecución con su estado, tamaño y número de archivos, lo que ayuda cuando un auditor o una aseguradora pregunta cuándo se completó la última copia de seguridad.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History de las ejecuciones de copia de seguridad de la bodega" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade el almacenamiento de tu oficina y un remoto externo.
3. Crea un trabajo de sincronización y compruébalo con Dry Run.
4. Envuelve el remoto externo en Crypt para las carpetas sensibles y verifica con Folder Compare.

Una segunda copia verificada convierte la pérdida de un portátil en un inconveniente en lugar de la pérdida de un registro de añada.

---

**Guías relacionadas:**

- [Almacenamiento en la nube para negocios de alimentación y bebidas con RcloneView](https://rcloneview.com/support/blog/cloud-storage-food-beverage-businesses-rcloneview)
- [Almacenamiento en la nube para agricultura y explotaciones agrarias con RcloneView](https://rcloneview.com/support/blog/cloud-storage-agriculture-farming-rcloneview)
- [Almacenamiento en la nube para hostelería y hoteles con RcloneView](https://rcloneview.com/support/blog/cloud-storage-hospitality-hotels-rcloneview)

<CloudSupportGrid />
