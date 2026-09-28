---
slug: cloud-storage-hvac-plumbing-contractors-rcloneview
title: "Almacenamiento en la nube para contratistas de climatización y fontanería — Organiza los archivos de obra con RcloneView"
authors:
  - morgan
description: "Los contratistas de climatización y fontanería manejan fotos de obra, facturas y permisos en varios dispositivos — RcloneView centraliza el almacenamiento en la nube para los equipos de campo."
keywords:
  - almacenamiento en la nube para climatización
  - almacenamiento en la nube para fontanería
  - copia de seguridad de fotos de obra
  - gestión de archivos para contratistas
  - sincronización en la nube para servicio de campo
  - RcloneView para contratistas
  - copia de seguridad de facturas en la nube
  - almacenamiento en la nube para el sector de la construcción
  - sincronización de archivos de obra multidispositivo
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

# Almacenamiento en la nube para contratistas de climatización y fontanería — Organiza los archivos de obra con RcloneView

> Las fotos de obra, los permisos y las facturas terminan repartidos entre teléfonos, portátiles y cualquier aplicación de nube que un técnico haya instalado — RcloneView los reúne todos en un solo lugar.

Una empresa residencial de climatización o fontanería genera un flujo constante de archivos que técnicamente no tienen relación entre sí, pero que para la facturación lo son todo: fotos de antes y después de la instalación de una caldera, un permiso escaneado, una factura de proveedor, un documento de garantía. Los técnicos de campo suelen guardarlos en la aplicación que ya tengan instalada en el teléfono, y la oficina termina reconstruyendo el registro de un trabajo a partir de tres cuentas de nube distintas. RcloneView le da a la oficina una única ventana del explorador sobre todas esas cuentas, de modo que reunir un expediente completo del trabajo no implica iniciar y cerrar sesión en aplicaciones separadas.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Centralizar fotos y documentos desde el campo

Conecta las cuentas de Google Drive o Dropbox que los técnicos ya usan para las fotos de obra junto con el almacenamiento en la nube principal de la oficina, y navega por todas ellas desde el mismo conjunto de paneles del Explorador. Como RcloneView admite de 1 a 4 paneles a la vez, la oficina puede mantener un panel abierto en la carpeta de subida de un técnico y otro en la carpeta definitiva del trabajo, moviendo archivos con arrastrar y soltar — arrastrar entre dos remotos distintos siempre copia, de modo que no se pierde nada de la cuenta original mientras la oficina construye su propia copia organizada.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting multiple cloud accounts used by field technicians in RcloneView" class="img-large img-center" />

Folder Compare también resulta útil aquí: apúntalo a la carpeta de subida sin organizar de un técnico y a la carpeta ordenada del trabajo en la oficina para ver de un vistazo qué fotos y documentos todavía no se han archivado.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing a technician's upload folder against the office job archive" class="img-large img-center" />

## Automatizar la copia de seguridad entre la oficina y la nube

Una vez consolidados los archivos del trabajo, todavía necesitan una copia de seguridad que no dependa del disco duro de un solo portátil. Configura un trabajo de sincronización desde las carpetas locales de la oficina hacia un remoto en la nube, y usa la sincronización 1:N para reflejar ese mismo contenido en un segundo proveedor de nube — una función disponible incluso con la licencia FREE, que le da a un negocio pequeño dos copias independientes de cada factura y permiso. Puedes conectar S3, Azure o Backblaze B2 con acceso completo de lectura y escritura en la licencia FREE, lo que hace viable un nivel de archivo de bajo costo incluso para una operación de dos camionetas.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling an automated backup of contractor job files with RcloneView" class="img-large img-center" />

Las cuentas con licencia PLUS pueden asociar un horario tipo crontab para que esta copia de seguridad se ejecute de forma automática durante la noche, lo cual importa más de lo que parece en un negocio donde la persona que gestiona los archivos también anda con una llave inglesa durante el día.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Conecta cada cuenta en la nube que los técnicos usan para fotos y documentos de obra.
3. Usa Folder Compare para encontrar y archivar todo lo que aún no se haya trasladado al archivo del trabajo.
4. Configura un trabajo de sincronización (con reflejo 1:N, si resulta útil) para respaldar el archivo automáticamente.

Un poco de estructura en los archivos de obra significa menos apuros por buscar una factura o un permiso perdido cuando un cliente vuelve a llamar seis meses después.

---

**Guías relacionadas:**

- [Almacenamiento en la nube para la gestión de proyectos de construcción con RcloneView](https://rcloneview.com/support/blog/cloud-storage-construction-project-management-rcloneview)
- [Guía de comparación de carpetas — Detecta diferencias con RcloneView](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [Sincronización de uno a varios destinos con RcloneView](https://rcloneview.com/support/blog/one-to-many-sync-multiple-destinations-rcloneview)

<CloudSupportGrid />
